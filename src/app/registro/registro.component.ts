import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit{

  username!:string;
  firstName!:string;
  lastName!:string;
  email!:string;
  password!:string;


  constructor(private service: AuthService, private router: Router, private toast: ToastrService) {}


  ngOnInit(): void {

  }
  
  create() {
    let usuario: Usuario = {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    }


    this.service.register(usuario).pipe(
      catchError(error => {
        console.log(error)
        this.toast.error("Error al registrar al usuario: " + error.error.message, "", {
          timeOut: 5000,
          closeButton: true,
        });
        throw error;
      })

    ).subscribe(usuario => {
      this.toast.success("Te has registrado correctamente!", "", {
        timeOut: 2000,
        closeButton: true,
      });

      this.login(this.username, this.password);

    });
  }





  private login(username:string, password:string) {
    return this.service.login(username, password).pipe(
      catchError(error => {
        this.toast.error("Error al iniciar sesión: " + error.error.message, "", {
          timeOut:5000,
          closeButton: true,
        });
        throw error;
      })

    ).subscribe(data => {
      this.toast.success("Inicio de sesión exitoso", "", {
        timeOut:2000,
        closeButton: true,
      });

      localStorage.setItem('token', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
      this.home();
    })
  }

  private home() {
    this.router.navigate(['/']);
  }

  
}
