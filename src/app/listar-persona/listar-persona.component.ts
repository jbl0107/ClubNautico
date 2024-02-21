import { Component } from '@angular/core';
import { Persona } from '../interfaces/persona';
import { PersonaService } from '../service/persona/persona.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-persona',
  templateUrl: './listar-persona.component.html',
  styleUrls: ['./listar-persona.component.css']
})
export class ListarPersonaComponent {

  personas:Persona[] = []; //la peticion getAll de personaService devolverá un array
  

  constructor(private service: PersonaService, private router:Router, private toast: ToastrService) {}

  ngOnInit(): void {
    this.getAll(); //se ejecuta en el onInit, q solo se ejecuta una vez
  }


  /*Con este subscribe decimos: Cada vez que getAll() produzca un nuevo valor (es decir, cada vez que se reciban nuevos datos 
  del server), quiero q se ejecute esta función de flecha y se manejen los nuevos datos (recordemos q getAll devuelve un observable) 
  Es esencialmente una forma de manejar los valores asíncronos producidos por un Observable   */
  private getAll(){
    this.service.getAll().pipe(
      catchError(error => {
        this.toast.error("Error al obtener el listado de personas: " + error.error.message, "", {
          timeOut:3000,
          closeButton:true,
        });
        throw error;
      })
    )
    .subscribe( personas => {
      this.personas = personas;
      

    })
  }

  
  delete(id:number) {
    this.service.delete(id).pipe(
      catchError(error => {
        this.toast.error("Error al borrar a la persona: " + error.error.message, "", {
          timeOut:5000,
          closeButton:true,
        });
        throw error;
      })
    )
    .subscribe(dato => {
      this.toast.success("Persona eliminada correctamente", "", {
        timeOut:2000,
        closeButton:true,
      });
      this.getAll(); //para q el listado se actualice automaticamente, sin tener q dar f5
    });
    
  }

  verDetalles(id:number) {
    this.router.navigate(['detalles-persona', id]);
  }

  actualizarPersona(id:number) {
    this.router.navigate(['actualizar-persona', id]);

  }

 

}
