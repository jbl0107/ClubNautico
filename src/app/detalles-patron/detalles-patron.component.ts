import { Component, OnInit } from '@angular/core';
import { PatronService } from '../service/patron/patron.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patron } from '../interfaces/patron';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-detalles-patron',
  templateUrl: './detalles-patron.component.html',
  styleUrls: ['./detalles-patron.component.css']
})
export class DetallesPatronComponent implements OnInit{
  
  
  constructor(private service: PatronService, private route: ActivatedRoute, private toast:ToastrService) {}

  id!:number;
  patron!:Patron;


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getById();

  }

  private getById() {
    
    this.service.getById(this.id).pipe(
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

}
