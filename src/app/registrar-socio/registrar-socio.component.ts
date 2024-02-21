import { Component, OnInit } from '@angular/core';
import { SocioService } from '../service/socio/socio.service';
import { ToastrService } from 'ngx-toastr';
import { Socio } from '../interfaces/socio';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-socio',
  templateUrl: './registrar-socio.component.html',
  styleUrls: ['./registrar-socio.component.css']
})
export class RegistrarSocioComponent implements OnInit{


  dni:string="";
  nombre:string = "";
  apellidos:string = "";
  edad!:number;
  numTelefono!:number;
  fechaNacimiento!:Date;
  numeroSocio!:number;

  constructor(private service:SocioService, private toast:ToastrService, private router: Router) {}


  ngOnInit(): void {
  }

  create(){
    let socio: Socio = {
      dni: this.dni,
      nombre: this.nombre,
      apellidos: this.apellidos,
      edad: this.edad,
      numTelefono: this.numTelefono,
      fechaNacimiento: this.fechaNacimiento,
      numeroSocio: this.numeroSocio

    }

    this.service.create(socio).pipe(
      catchError(error => {
        this.toast.error("Error al registrar al socio: " + error.error.message, "", {
          timeOut:5000,
          closeButton:true,
        });

        throw error;
      })
      
    ).subscribe(socio => {
      this.toast.success("Socio registrado con éxito", "", {
        timeOut:3000,
        closeButton: true,
      });
      this.irAListadoSocios();
    });

  }

  private irAListadoSocios(){
    this.router.navigate(['/listado-socios']);
  }

}
