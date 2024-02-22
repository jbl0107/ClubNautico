import { Component, OnInit } from '@angular/core';
import { BarcoService } from '../service/barco/barco.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { Barco } from '../interfaces/barco';
import { Socio } from '../interfaces/socio';
import { Patron } from '../interfaces/patron';
import { PatronService } from '../service/patron/patron.service';
import { SocioService } from '../service/socio/socio.service';

@Component({
  selector: 'app-registrar-barco',
  templateUrl: './registrar-barco.component.html',
  styleUrls: ['./registrar-barco.component.css']
})
export class RegistrarBarcoComponent implements OnInit{


  matricula:string = "";
  nombre:string = "";
  numeroAmarre!:number;
  cuota!:number;
  patronId!:number;
  socioId!:number;



  patrones:Patron[] = [];
  socios:Socio[] = [];

  constructor(private service:BarcoService, private toast:ToastrService, private router:Router, 
    private servicePatron:PatronService, private serviceSocio:SocioService) {}

  ngOnInit(): void {
    this.obtenerPatrones();
    this.obtenerSocios();
  }

  create() {

    let barco: Barco = {
      matricula: this.matricula,
      nombre: this.nombre,
      numeroAmarre: this.numeroAmarre,
      cuota: this.cuota,
      patronId: this.patronId,
      socioId: this.socioId,

    }

    console.log(barco)

    this.service.create(barco).pipe(
      catchError(error => {
        this.toast.error("Error al registrar el barco: " + error.error.message, "", {
          timeOut: 5000,
          closeButton: true,
        });
        throw error;
      })
      
    ).subscribe(barco => {
      this.toast.success("Barco registrado correctamente", "", {
        timeOut:3000,
        closeButton: true,
      })
      this.volverAlListado();
    });
  }



  private obtenerPatrones() {
    return this.servicePatron.getAll().pipe(
      catchError(error => {
        this.toast.error("Se ha producido un error al obtener el listado de patrones: " + error.error.message, "", {
          timeOut:5000,
          closeButton:true,
        });
        throw error;
      })

    ).subscribe(patrones => {
      this.patrones = patrones;
    });
  }


  private obtenerSocios() {
    return this.serviceSocio.getAll().pipe(
      catchError(error => {
        this.toast.error("Se ha producido un error al obtener el listado de socios: " + error.error.message, "", {
          timeOut:5000,
          closeButton:true,
        });
        throw error;
      })

    ).subscribe(socios => {
      this.socios = socios;
    });
  }


  private volverAlListado() {
    this.router.navigate(['/listado-barcos']);
  }

}
