import { Component, OnInit } from '@angular/core';
import { SocioService } from '../service/socio/socio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Socio } from '../interfaces/socio';
import { catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detalles-socio',
  templateUrl: './detalles-socio.component.html',
  styleUrls: ['./detalles-socio.component.css']
})
export class DetallesSocioComponent implements OnInit{

  constructor(private service: SocioService, private route: ActivatedRoute, private toast:ToastrService) {}

  id!:number;
  socio!:Socio;


  ngOnInit(): void {
    this.getById();

  }

  private getById() {
    this.id = this.route.snapshot.params['id'];
    
    this.service.getById(this.id).pipe(
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
