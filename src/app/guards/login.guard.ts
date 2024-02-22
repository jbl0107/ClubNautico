//definimos la funcion para permitir o no el acceso a ciertas urls. Con esto conseguimos q, por ejemplo, no le damos opcion al user
//ni que acceda a la vista de un listado (q saldría en blanco pq no tiene permisos), si no q directament no pueda ni acceder 

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../service/auth/auth.service";

@Injectable({
    providedIn: 'root'
  })

export class LoginGuard {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;

    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}