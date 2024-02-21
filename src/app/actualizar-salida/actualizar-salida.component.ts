import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Salida } from '../interfaces/salida';
import { Barco } from '../interfaces/barco';
import { Patron } from '../interfaces/patron';
import { SalidaService } from '../service/salida/salida.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatronService } from '../service/patron/patron.service';
import { BarcoService } from '../service/barco/barco.service';

@Component({
  selector: 'app-actualizar-salida',
  templateUrl: './actualizar-salida.component.html',
  styleUrls: ['./actualizar-salida.component.css']
})
export class ActualizarSalidaComponent implements OnInit{


  id!:number;

  fechaSalida!:string;
  destino!:string;
  patronId!:number;
  barcoId!:number;

  salida!:Salida

  patron!:Patron;
  barco!:Barco;
  

  constructor(private service:SalidaService, private route:ActivatedRoute, private toast:ToastrService, 
    private router:Router, private serviceBarco:BarcoService, private servicePatron:PatronService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getById()
  }


  private getById(){

    this.service.getById(this.id).pipe(
      catchError(error => {
        this.toast.error("Error al obtener la salida: " + error.error.message, "", {
          timeOut: 5000,
          closeButton: true,
        });
        throw error;
      })

    ).subscribe(salida => {
      this.salida = salida;

      this.fechaSalida = salida.fechaSalida;
      this.destino = salida.destino;
      

        this.getPatron(salida.patronId);
        this.getBarco(salida.barcoId);
      
      

    });
  }


  update() {

    this.salida.destino = this.destino;

    let fechaFormateada = this.service.parsearFecha(this.fechaSalida);

    this.salida.fechaSalida = fechaFormateada;;

    
    this.service.update(this.id, this.salida).pipe(
      catchError(error => {
        this.toast.error("Error al actualizar la salida: " + error.error.message, "", {
          timeOut: 5000,
          closeButton: true,
        });

        throw error;
      })

    ).subscribe(salida => {
      this.toast.success("Salida actualizada correctamente", "", {
        timeOut:3000,
        closeButton: true,
      })
      this.getById();
      this.router.navigate(['/listado-salidas'])
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
