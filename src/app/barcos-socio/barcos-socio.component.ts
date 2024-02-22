import { Component, OnInit } from '@angular/core';
import { Barco } from '../interfaces/barco';
import { BarcoService } from '../service/barco/barco.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-barcos-socio',
  templateUrl: './barcos-socio.component.html',
  styleUrls: ['./barcos-socio.component.css']
})
export class BarcosSocioComponent implements OnInit{

  barcos:Barco[] = [];
  id!:number;
  hasBarcos!:boolean;

  constructor(private service:BarcoService, private router:Router, private toast:ToastrService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getBySocioId();

  }

  getBySocioId() {
    console.log(this.id)
    this.service.getBySocioId(this.id).pipe(
      catchError(error => {
        this.toast.error("Error al mostrar el listado de barcos del socio", "", {
          timeOut: 5000,
          closeButton: true,
        });
        throw error;
      })

    ).subscribe(barcos => {
      this.barcos = barcos;

      if(barcos.length > 0){
        this.hasBarcos = true;
  
      }else{
        this.hasBarcos = false;
      }
    })
  }

  verDetalles(id:number) {
    this.router.navigate(['/detalles-barco', id])
  }

  delete(id:number) {
    this.service.delete(id).pipe(
      catchError(error => {
        this.toast.error("Error al intentar borrar un barco: " + error.error.message, "", {
          timeOut:5000,
          closeButton: true,
        });
        throw error;
      })

    ).subscribe(dato => {
      this.toast.success("Barco eliminado correctamente", "", {
        timeOut: 3000,
        closeButton: true,
      });
      this.getBySocioId();
    })
  }

  actualizarBarco(id:number) {
    this.router.navigate(['/actualizar-barco', id]);
  }

}
