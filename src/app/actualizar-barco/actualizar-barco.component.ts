import { Component, OnInit } from '@angular/core';
import { Barco } from '../interfaces/barco';
import { ActivatedRoute, Router } from '@angular/router';
import { BarcoService } from '../service/barco/barco.service';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { SocioService } from '../service/socio/socio.service';
import { PatronService } from '../service/patron/patron.service';
import { Patron } from '../interfaces/patron';
import { Socio } from '../interfaces/socio';

@Component({
  selector: 'app-actualizar-barco',
  templateUrl: './actualizar-barco.component.html',
  styleUrls: ['./actualizar-barco.component.css']
})
export class ActualizarBarcoComponent implements OnInit{


  id!:number;

  matricula:string = "";
  nombre:string = "";
  numeroAmarre!:number;
  cuota!:number;
  patronId!:number;
  socioId!:number;

  barco!:Barco;
  patron!:Patron;
  socio!:Socio;

  constructor(private service:BarcoService, private route:ActivatedRoute, private toast:ToastrService, 
    private router:Router, private serviceSocio:SocioService, private servicePatron:PatronService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getById()
  }


  private getById(){

    this.service.getById(this.id).pipe(
      catchError(error => {
        this.toast.error("Error al obtener el barco: " + error.error.message, "", {
          timeOut: 5000,
          closeButton: true,
        });
        throw error;
      })

    ).subscribe(barco => {
      this.barco = barco;

      this.matricula = barco.matricula;
      this.nombre = barco.nombre;
      this.numeroAmarre = barco.numeroAmarre;
      this.cuota = barco.cuota;

      if(barco.patronId) {
        this.getPatron(barco.patronId);
        
      }
      else if(barco.socioId) {
        this.getSocio(barco.socioId);
      }
      

    });
  }


  update() {

    this.barco.matricula = this.matricula;
    this.barco.nombre = this.nombre;
    this.barco.numeroAmarre = this.numeroAmarre;
    this.barco.cuota = this.cuota;
    
    this.service.update(this.id, this.barco).pipe(
      catchError(error => {
        this.toast.error("Error al actualizar el barco: " + error.error.message, "", {
          timeOut: 5000,
          closeButton: true,
        });

        throw error;
      })

    ).subscribe(barco => {
      this.toast.success("Barco actualizado correctamente", "", {
        timeOut:3000,
        closeButton: true,
      })
      this.getById();
      this.router.navigate(['/listado-barcos'])
    });
    
  }




  private getPatron(id:number) {
    this.servicePatron.getById(id).pipe(
      catchError(error => {
        this.toast.error("Se ha producido un error: " + error.error.message, "", {
          timeOut: 5000,
          closeButton: true,
        })
        throw error;
      })

    ).subscribe(patron => {
      this.patron = patron;
    })

  }
  


  private getSocio(id:number) {
    this.serviceSocio.getById(id).pipe(
      catchError(error => {
        this.toast.error("Se ha producido un error: " + error.error.message, "", {
          timeOut: 5000,
          closeButton: true,
        })
        throw error;
      })

    ).subscribe(socio => {
      this.socio = socio;
    })

  }

}
