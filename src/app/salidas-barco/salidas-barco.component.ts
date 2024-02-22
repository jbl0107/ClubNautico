import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { Salida } from '../interfaces/salida';
import { SalidaService } from '../service/salida/salida.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-salidas-barco',
  templateUrl: './salidas-barco.component.html',
  styleUrls: ['./salidas-barco.component.css']
})
export class SalidasBarcoComponent implements OnInit{

  salidas:Salida[] = [];
  id!:number;
  hasSalidas!:boolean;

  constructor(private service:SalidaService, private router:Router, private toast:ToastrService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getByBarcoId();

  }

  getByBarcoId() {
    console.log(this.id)
    this.service.getByBarcoId(this.id).pipe(
      catchError(error => {
        this.toast.error("Error al mostrar el listado de salidas del barco", "", {
          timeOut: 5000,
          closeButton: true,
        });
        throw error;
      })

    ).subscribe(salidas => {
      this.salidas = salidas;

      if(salidas.length > 0){
        this.hasSalidas = true;
  
      }else{
        this.hasSalidas = false;
      }
    })
  }

  verDetalles(id:number) {
    this.router.navigate(['/detalles-salida', id])
  }

  delete(id:number) {
    this.service.delete(id).pipe(
      catchError(error => {
        this.toast.error("Error al intentar borrar la salida: " + error.error.message, "", {
          timeOut:5000,
          closeButton: true,
        });
        throw error;
      })

    ).subscribe(dato => {
      this.toast.success("Salida eliminada correctamente", "", {
        timeOut: 3000,
        closeButton: true,
      });
      this.getByBarcoId();
    })
  }

  actualizarSalida(id:number) {
    this.router.navigate(['/actualizar-salida', id]);
  }

}
