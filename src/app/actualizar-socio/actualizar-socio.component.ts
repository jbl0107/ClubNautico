import { Component, OnInit } from '@angular/core';
import { SocioService } from '../service/socio/socio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Socio } from '../interfaces/socio';
import { catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-actualizar-socio',
  templateUrl: './actualizar-socio.component.html',
  styleUrls: ['./actualizar-socio.component.css']
})
export class ActualizarSocioComponent implements OnInit{

  id:number = this.route.snapshot.params['id'];
  socio!:Socio;

  dni:string="";
  nombre:string = "";
  apellidos:string = "";
  edad!:number;
  numTelefono!:number;
  fechaNacimiento!:Date;
  numeroSocio!:number;

  constructor(private service:SocioService, private router:Router, private route: ActivatedRoute, private toast:ToastrService,) {}

  ngOnInit(): void {
    this.getById();
  }

  private getById(){

    this.service.getById(this.id).pipe(
      catchError(error => {
        this.toast.error("Error al obtener el socio: " + error.error.message, "", {
          timeOut: 5000,
          closeButton: true,
        });
        throw error;
      })

    ).subscribe(socio => {
      this.socio = socio;

      this.dni = socio.dni;
      this.nombre = socio.nombre;
      this.apellidos = socio.apellidos;
      this.edad = socio.edad;
      this.numTelefono = socio.numTelefono;
      this.fechaNacimiento = socio.fechaNacimiento;
      this.numeroSocio = socio.numeroSocio;
    });
  }


  update() {

    this.socio.dni = this.dni;
    this.socio.nombre = this.nombre;
    this.socio.apellidos = this.apellidos;
    this.socio.edad = this.edad;
    this.socio.numTelefono = this.numTelefono;
    this.socio.fechaNacimiento = this.fechaNacimiento;
    this.socio.numeroSocio = this.numeroSocio

    this.service.update(this.id, this.socio).pipe(
      catchError(error => {
        this.toast.error("Error al actualizar el socio: " + error.error.message, "", {
          timeOut: 5000,
          closeButton: true,
        });

        throw error;
      })

    ).subscribe(socio => {
      this.toast.success("Socio actualizado correctamente", "", {
        timeOut:3000,
        closeButton: true,
      })
      this.getById();
      this.router.navigate(['/listado-socios'])
    })
    
  }



}
