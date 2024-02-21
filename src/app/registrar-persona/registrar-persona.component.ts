import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../service/persona/persona.service';
import { Persona } from '../interfaces/persona';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-registrar-persona',
  templateUrl: './registrar-persona.component.html',
  styleUrls: ['./registrar-persona.component.css']
})
export class RegistrarPersonaComponent implements OnInit{

  dni:string="";
  nombre:string = "";
  apellidos:string = "";
  edad!:number;
  numTelefono!:number;
  fechaNacimiento!:Date;

  constructor(private service: PersonaService, private router: Router, private toast: ToastrService){
    
  }

  ngOnInit(): void {
    
  }



  create(){
    let persona: Persona = {
      
      dni : this.dni,
      nombre : this.nombre,
      apellidos : this.apellidos,
      edad : this.edad,
      numTelefono : this.numTelefono,
      fechaNacimiento : this.fechaNacimiento


    }


    /* FORMA NUEVA DE MANEJAR ERRORES */
    this.service.create(persona).pipe(
      catchError(error => {
        this.toast.error("Error al registrar a la persona. " + error.error.message, "", {
          timeOut:5000,
          closeButton:true,
        });
        throw error; // Esto re-lanza el error para que se pueda seguir manejando dsp si es necesario.
      })
    ).subscribe(dato => {
      this.toast.success("Persona registrada con éxito", "", {
        timeOut:3000,
        closeButton:true,
      });
      this.irAListaDeEmpleado();
    });



     /*FORMA DEPRECADA
    this.service.create(persona).subscribe(dato => {
        this.toast.success("Persona registrada con éxito", "", {
          timeOut:2000,
          closeButton:true,
        });
        this.irAListaDeEmpleado();
      },
      error => {
        this.toast.error("Error al registrar a la persona. " + error.error.message, "", {
          timeOut:3000,
          closeButton:true,
        })
      }
    );
    */

    
    
   
  }



  private irAListaDeEmpleado(){
    this.router.navigate(['/listado-personas']);
  }

  

}

