import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './service/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Club náutico';

 
  constructor(private router:Router, private auth:AuthService){}

  ngOnInit(): void {

  }

  //Es necesario crear la funcion para evitar tener q hacer f5 para que se vean los cambios. Si tuvieramos un atr boolean, habría
  //se actualizaría una sola vez, al inicializar el componente (ya q iría en el onInit), pero nunca más (a no ser q hicieramos f5)
  hasToken(): boolean { 
    return this.auth.isLoggedIn();
  }


  isHomePage():boolean{
    return this.router.url == '/';
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');

    this.router.navigate(['/login']);
    

  }

  
}
