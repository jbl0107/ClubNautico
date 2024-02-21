import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { SalidaService } from '../service/salida/salida.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { BarcoService } from '../service/barco/barco.service';
import { PatronService } from '../service/patron/patron.service';
import { Barco } from '../interfaces/barco';
import { Patron } from '../interfaces/patron';
import { Salida } from '../interfaces/salida';

@Component({
  selector: 'app-detalles-salida',
  templateUrl: './detalles-salida.component.html',
  styleUrls: ['./detalles-salida.component.css']
})
export class DetallesSalidaComponent implements OnInit{


  constructor(private service: SalidaService, private toast:ToastrService, private route:ActivatedRoute,
    private servicePatron:PatronService, private serviceBarco:BarcoService) {}

  id!:number;
  salida!:Salida;

  patron!:Patron;
  barco!:Barco;


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getById();
    

  }

  private getById(){
    
    this.service.getById(this.id).pipe(
      catchError(error => {
        this.toast.error("Error al obtener la salida: " + error.error.message, "", {
          timeOut:5000,
          closeButton: true,
        });
        throw error;
      })

    ).subscribe(salida => {
      this.salida = salida;

      
        this.getPatron(salida.patronId);
        
        this.getBarco(salida.barcoId);
      
      
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
  


  private getBarco(id:number) {
    this.serviceBarco.getById(id).pipe(
      catchError(error => {
        this.toast.error("Se ha producido un error: " + error.error.message, "", {
          timeOut: 5000,
          closeButton: true,
        })
        throw error;
      })

    ).subscribe(barco => {
      this.barco = barco;
    })

  }

}
