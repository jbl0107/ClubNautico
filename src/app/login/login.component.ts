import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';
import { catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  username:string = "";
  password:string =  "";


  constructor(private service:AuthService, private toast:ToastrService, private router:Router) {}

  ngOnInit(): void {
  }

  login() {
    return this.service.login(this.username, this.password).pipe(
      catchError(error => {
        this.toast.error("Error al iniciar sesión: " + error.error.message, "", {
          timeOut:5000,
          closeButton: true,
        });
        throw error;
      })

    ).subscribe(data => {
      this.toast.success("Se ha iniciado sesión correctamente", "", {
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
