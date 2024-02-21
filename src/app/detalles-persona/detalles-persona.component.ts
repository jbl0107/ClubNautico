import { Component, OnInit } from '@angular/core';
import { Persona } from '../interfaces/persona';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../service/persona/persona.service';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalles-persona',
  templateUrl: './detalles-persona.component.html',
  styleUrls: ['./detalles-persona.component.css']
})
export class DetallesPersonaComponent implements OnInit{

  id!:number;
  persona!:Persona;

  constructor(private route:ActivatedRoute, private service:PersonaService, private toast:ToastrService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getById();
      
  }

  getById() {

    this.service.getById(this.id).pipe(
      catchError(error => {
        this.toast.error("Error al actualizar a la persona: " + error.error.message, "", {
          timeOut:5000,
          closeButton:true,
        });
        throw error;
      })
    )
    .subscribe(persona => {
      this.persona = persona;
    });
  }


}
