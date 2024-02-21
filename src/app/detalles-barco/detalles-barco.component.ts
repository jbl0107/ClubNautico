import { Component, OnInit } from '@angular/core';
import { BarcoService } from '../service/barco/barco.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { Observable, catchError } from 'rxjs';
import { Barco } from '../interfaces/barco';
import { PatronService } from '../service/patron/patron.service';
import { SocioService } from '../service/socio/socio.service';
import { Patron } from '../interfaces/patron';
import { Socio } from '../interfaces/socio';

@Component({
  selector: 'app-detalles-barco',
  templateUrl: './detalles-barco.component.html',
  styleUrls: ['./detalles-barco.component.css']
})
export class DetallesBarcoComponent implements OnInit{


  constructor(private service: BarcoService, private toast:ToastrService, private route:ActivatedRoute,
    private servicePatron:PatronService, private serviceSocio:SocioService) {}

  id!:number;
  barco!:Barco;

  patron!:Patron;
  socio!:Socio;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getById();
    

  }

  private getById(){
    
    this.service.getById(this.id).pipe(
      catchError(error => {
        this.toast.error("Error al obtener el barco: " + error.error.message, "", {
          timeOut:5000,
          closeButton: true,
        });
        throw error;
      })

    ).subscribe(barco => {
      this.barco = barco;

      
      if(barco.patronId) {
        this.getPatron(barco.patronId);
        
      }
      else if(barco.socioId) {
        this.getSocio(barco.socioId);
      }
      
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
