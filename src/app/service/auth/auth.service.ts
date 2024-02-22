import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Credencial } from 'src/app/interfaces/credencial';
import { Usuario } from 'src/app/interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlLogin = "http://localhost:8080/api/v1/auth/login";
  private urlRegister = "http://localhost:8080/api/v1/auth/register";

  constructor(private http: HttpClient) { }

  login(username:string, password:string):Observable<Credencial> {
    return this.http.post<Credencial>(this.urlLogin, {username, password}).pipe(
      

    //Hacemos un llamamiento para evitar que el receptor d est observable active accidentalmente varias solicitudes POST debido a 
    //varias suscripciones. Es decir, evita q se realicen múltiples solicitudes HTTP POST si hay múltiples suscriptores. 
    //En su lugar, la respuesta del POST se comparte entre todos los suscriptores.
    shareReplay()); 
  }

  isLoggedIn():boolean {
    return localStorage.getItem('token')?true:false;
  }

  register(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.urlRegister, usuario);
  }

}
