import { Component, OnInit } from '@angular/core';
import { SalidaService } from '../service/salida/salida.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Salida } from '../interfaces/salida';
import { catchError } from 'rxjs/operators';
import { Patron } from '../interfaces/patron';
import { Barco } from '../interfaces/barco';
import { PatronService } from '../service/patron/patron.service';
import { BarcoService } from '../service/barco/barco.service';

@Component({
  selector: 'app-registrar-salida',
  templateUrl: './registrar-salida.component.html',
  styleUrls: ['./registrar-salida.component.css']
})
export class RegistrarSalidaComponent implements OnInit{


  fechaSalida!:string;
  destino:string = "";
  barcoId!:number;
  patronId!:number;

  patrones:Patron[] = [];
  barcos: Barco[] = [];


  constructor(private service:SalidaService, private toast:ToastrService, private router: Router, 
    private servicePatron:PatronService, private serviceBarco:BarcoService) {}


  ngOnInit(): void {
    this.obtenerPatrones();
    this.obtenerBarcos();

  }


  create(){

    let fechaFormateada:string = this.service.parsearFecha(this.fechaSalida);

    let salida: Salida = {
      fechaSalida: fechaFormateada,
      destino: this.destino,
      barcoId: this.barcoId,
      patronId: this.patronId,

    }

    

    this.service.create(salida).pipe(
      catchError(error => {
        this.toast.error("Error al registrar la salida: " + error.error.message, "", {
          timeOut:5000,
          closeButton:true,
        });

        throw error;
      })
      
    ).subscribe(salida => {
      this.toast.success("Salida registrado con éxito", "", {
        timeOut:3000,
        closeButton: true,
      });
      this.irAListadoSalidas();
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


  private obtenerBarcos() {
    return this.serviceBarco.getAll().pipe(
      catchError(error => {
        this.toast.error("Se ha producido un error al obtener el listado de barcos: " + error.error.message, "", {
          timeOut:5000,
          closeButton:true,
        });
        throw error;
      })

    ).subscribe(barcos => {
      this.barcos = barcos;
    });
  }


  private irAListadoSalidas(){
    this.router.navigate(['/listado-salidas']);
  }




}
