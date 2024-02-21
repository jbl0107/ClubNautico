import { Component, OnInit } from '@angular/core';
import { SalidaService } from '../service/salida/salida.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Salida } from '../interfaces/salida';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-listar-salida',
  templateUrl: './listar-salida.component.html',
  styleUrls: ['./listar-salida.component.css']
})
export class ListarSalidaComponent implements OnInit{


  constructor(private service:SalidaService, private toast:ToastrService, private router:Router) {}

  salidas:Salida[] = [];

  id!:number;


  ngOnInit(): void {
    this.getAll();
  }


  private getAll() {
    return this.service.getAll().pipe(
      catchError(error => {
        this.toast.error("Se ha producido un error al mostrar el listado de socios: " + error.error.message, "", {
          timeOut:5000,
          closeButton:true,
        });
        throw error;
      })

    ).subscribe(salidas => {
      this.salidas = salidas;
      console.log(salidas)
    });
      
  }



  delete(id:number) {
    this.service.delete(id).pipe(
      catchError(error => {
        this.toast.error("Error al borrar salida: " + error.error.message, "", {
          timeOut:5000,
          closeButton: true,
        });

        throw error;
      })

    ).subscribe(dato => {
      this.toast.success("Salida eliminada correctamente", "", {
        timeOut: 3000,
        closeButton: true,
      })
      this.getAll();
    })
  }

  verDetalles(id:number) {
    this.router.navigate(['/detalles-salida', id]);
  }

  actualizarSalida(id:number) {
    this.router.navigate(['/actualizar-salida', id]);
  }

}
