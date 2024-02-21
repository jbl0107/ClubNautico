import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { PatronService } from '../service/patron/patron.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patron } from '../interfaces/patron';

@Component({
  selector: 'app-actualizar-patron',
  templateUrl: './actualizar-patron.component.html',
  styleUrls: ['./actualizar-patron.component.css']
})
export class ActualizarPatronComponent implements OnInit{

  id!:number;
  patron!:Patron;

  dni:string="";
  nombre:string = "";
  apellidos:string = "";
  edad!:number;
  numTelefono!:number;
  fechaNacimiento!:Date;

  constructor(private service:PatronService, private router:Router, private route: ActivatedRoute, private toast:ToastrService,) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getById();
  }
  

  private getById(){

    this.service.getById(this.id).pipe(
      catchError(error => {
        this.toast.error("Error al obtener el patrón: " + error.error.message, "", {
          timeOut: 5000,
          closeButton: true,
        });
        throw error;
      })

    ).subscribe(patron => {
      this.patron = patron;

      this.dni = patron.dni;
      this.nombre = patron.nombre;
      this.apellidos = patron.apellidos;
      this.edad = patron.edad;
      this.numTelefono = patron.numTelefono;
      this.fechaNacimiento = patron.fechaNacimiento;
    });
  }


  update() {

    this.patron.dni = this.dni;
    this.patron.nombre = this.nombre;
    this.patron.apellidos = this.apellidos;
    this.patron.edad = this.edad;
    this.patron.numTelefono = this.numTelefono;
    this.patron.fechaNacimiento = this.fechaNacimiento;

    this.service.update(this.id, this.patron).pipe(
      catchError(error => {
        this.toast.error("Error al actualizar el patrón: " + error.error.message, "", {
          timeOut: 5000,
          closeButton: true,
        });

        throw error;
      })

    ).subscribe(patron => {
      this.toast.success("Patrón actualizado correctamente", "", {
        timeOut:3000,
        closeButton: true,
      })
      this.getById();
      this.router.navigate(['/listado-patrones'])
    })
    
  }

}
