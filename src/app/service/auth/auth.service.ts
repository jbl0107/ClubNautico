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
  private urlRefresh = "http://localhost:8080/api/v1/auth/login";

  constructor(private http: HttpClient) { }

  login(username:string, password:string):Observable<Credencial> {
    return this.http.post<Credencial>(this.urlLogin, {username, password}).pipe(
      

    //Hacemos un llamamiento para evitar que el receptor d est observable active accidentalmente varias solicitudes POST debido a 
    //varias suscripciones. Es decir, evita q se realicen múltiples solicitudes HTTP POST si hay múltiples suscriptores. 
    //En su lugar, la respuesta del POST se comparte entre todos los suscriptores.
    shareReplay()); 
  }

  register(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.urlRegister, usuario);
  }

  refreshToken(refreshToken:string|null):Observable<Credencial> {
    return this.http.post<Credencial>(this.urlRefresh, refreshToken);
  }


  isLoggedIn():boolean {
    //return localStorage.getItem('token') && !this.isTokenExpired(localStorage.getItem('token'))?true:false;
    return localStorage.getItem('token')?true:false;
  }

  isTokenExpired(token:string | null):boolean {
    let res:boolean = false;

    if(token !== null) {
      const arrayToken = token.split('.');
      const tokenPayload = JSON.parse(atob(arrayToken[1])); //es el primer elemento donde está la exp date
      res = Math.floor(new Date().getTime() / 1000 ) >= tokenPayload?.sub;
    }
     

    return res;
  }

}
