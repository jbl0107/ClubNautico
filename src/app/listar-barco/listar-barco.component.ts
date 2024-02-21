import { Component, OnInit } from '@angular/core';
import { BarcoService } from '../service/barco/barco.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';
import { Barco } from '../interfaces/barco';

@Component({
  selector: 'app-listar-barco',
  templateUrl: './listar-barco.component.html',
  styleUrls: ['./listar-barco.component.css']
})
export class ListarBarcoComponent implements OnInit{

  barcos:Barco[] = [];

  constructor(private service:BarcoService, private router:Router, private toast:ToastrService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().pipe(
      catchError(error => {
        this.toast.error("Error al mostrar el listado de barcos", "", {
          timeOut: 5000,
          closeButton: true,
        });
        throw error;
      })

    ).subscribe(barcos => {
      this.barcos = barcos;
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
      this.getAll();
    })
  }

  actualizarBarco(id:number) {
    this.router.navigate(['/actualizar-barco', id]);
  }

}
