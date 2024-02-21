import { Component, OnInit } from '@angular/core';
import { PatronService } from '../service/patron/patron.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Patron } from '../interfaces/patron';

@Component({
  selector: 'app-listar-patron',
  templateUrl: './listar-patron.component.html',
  styleUrls: ['./listar-patron.component.css']
})
export class ListarPatronComponent implements OnInit{

  constructor(private service:PatronService, private toast:ToastrService, private router:Router) {}

  patrones:Patron[] = [];

  id!:number;

  ngOnInit(): void {
    this.getAll();
  }


  private getAll() {
    return this.service.getAll().pipe(
      catchError(error => {
        this.toast.error("Se ha producido un error al mostrar el listado de patrones: " + error.error.message, "", {
          timeOut:5000,
          closeButton:true,
        });
        throw error;
      })

    ).subscribe(patrones => {
      this.patrones = patrones;
    });
      
  }


  delete(id:number) {
    this.service.delete(id).pipe(
      catchError(error => {
        this.toast.error("Error al borrar patrón: " + error.error.message, "", {
          timeOut:5000,
          closeButton: true,
        });

        throw error;
      })

    ).subscribe(dato => {
      this.toast.success("Patrón eliminado correctamente", "", {
        timeOut: 3000,
        closeButton: true,
      })
      this.getAll();
    })
  }

  verDetalles(id:number) {
    this.router.navigate(['/detalles-patron', id]);
  }

  actualizarPatron(id:number) {
    this.router.navigate(['/actualizar-patron', id]);
  }



}
