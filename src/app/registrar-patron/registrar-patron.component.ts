import { Component, OnInit } from '@angular/core';
import { PatronService } from '../service/patron/patron.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Patron } from '../interfaces/patron';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-registrar-patron',
  templateUrl: './registrar-patron.component.html',
  styleUrls: ['./registrar-patron.component.css']
})
export class RegistrarPatronComponent implements OnInit{

  dni:string="";
  nombre:string = "";
  apellidos:string = "";
  edad!:number;
  numTelefono!:number;
  fechaNacimiento!:Date;

  constructor(private service:PatronService, private toast:ToastrService, private router: Router) {}


  ngOnInit(): void {
  }

  create(){
    let patron: Patron = {
      dni: this.dni,
      nombre: this.nombre,
      apellidos: this.apellidos,
      edad: this.edad,
      numTelefono: this.numTelefono,
      fechaNacimiento: this.fechaNacimiento,

    }

    this.service.create(patron).pipe(
      catchError(error => {
        this.toast.error("Error al registrar al patrón: " + error.error.message, "", {
          timeOut:5000,
          closeButton:true,
        });

        throw error;
      })
      
    ).subscribe(patron => {
      this.toast.success("Patrón registrado con éxito", "", {
        timeOut:3000,
        closeButton: true,
      });
      this.irAListadoPatrones();
    });

  }

  private irAListadoPatrones(){
    this.router.navigate(['/listado-patrones']);
  }

}
