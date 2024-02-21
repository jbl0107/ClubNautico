import { Component, OnInit } from '@angular/core';
import { SocioService } from '../service/socio/socio.service';
import { Socio } from '../interfaces/socio';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-listar-socio',
  templateUrl: './listar-socio.component.html',
  styleUrls: ['./listar-socio.component.css']
})
export class ListarSocioComponent implements OnInit{


  constructor(private service:SocioService, private toast:ToastrService, private router:Router) {}

  socios:Socio[] = [];

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

    ).subscribe(socios => {
      this.socios = socios;
    });
      
  }


  delete(id:number) {
    this.service.delete(id).pipe(
      catchError(error => {
        this.toast.error("Error al borrar socio: " + error.error.message, "", {
          timeOut:5000,
          closeButton: true,
        });

        throw error;
      })

    ).subscribe(dato => {
      this.toast.success("Socio eliminado correctamente", "", {
        timeOut: 3000,
        closeButton: true,
      })
      this.getAll();
    })
  }

  verDetalles(id:number) {
    this.router.navigate(['/detalles-socio', id]);
  }

  actualizarSocio(id:number) {
    this.router.navigate(['/actualizar-socio', id]);
  }




  
}
