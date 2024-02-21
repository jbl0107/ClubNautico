import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../service/persona/persona.service';
import { Persona } from '../interfaces/persona';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'app-actualizar-persona',
  templateUrl: './actualizar-persona.component.html',
  styleUrls: ['./actualizar-persona.component.css']
})
export class ActualizarPersonaComponent implements OnInit{


  constructor(private service:PersonaService, private route:ActivatedRoute, private toast:ToastrService,
    private router:Router) {}

  id:number = this.route.snapshot.params['id'];
  persona!:Persona;


  dni:string="";
  nombre:string = "";
  apellidos:string = "";
  edad!:number;
  numTelefono!:number;
  fechaNacimiento!:Date;


  ngOnInit(): void {
    this.getById();
  }

  private getById(){
    
    this.service.getById(this.id).pipe(
      catchError(error => {

        this.toast.error("Error al obtener a la persona: " + error.error.message, "", {
          timeOut:3000,
          closeButton:true,
        });
        throw error;

      })
      
    ).subscribe(persona => {
      this.persona = persona;

      this.dni = persona.dni;
      this.nombre = persona.nombre;
      this.apellidos = persona.apellidos;
      this.edad = persona.edad;
      this.numTelefono = persona.numTelefono;
      this.fechaNacimiento = persona.fechaNacimiento;

    });
    
      
  }

  update(){
    this.persona.dni = this.dni;
    this.persona.nombre = this.nombre;
    this.persona.apellidos = this.apellidos;
    this.persona.edad = this.edad;
    this.persona.numTelefono = this.numTelefono;
    this.persona.fechaNacimiento = this.fechaNacimiento;

    
    this.service.update(this.id, this.persona).pipe(
      catchError(error => {
        this.toast.error("Error al actualizar a la persona: " + error.error.message, "", {
          timeOut:5000,
          closeButton:true,
        });
        throw error;
      })  
    ).subscribe(persona => {
      this.toast.info("Persona actualizada correctamente", "", {
        timeOut:2000,
        closeButton:true,
      });
      this.getById();
      this.router.navigate(['/listado-personas']);
    });

  }

  

}
