import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Socio } from 'src/app/interfaces/socio';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  constructor(private http: HttpClient) { }

  private urlAPI:string = "http://localhost:8080/api/v1/socios";

  getAll():Observable<Socio[]> {
    return this.http.get<Socio[]>(this.urlAPI);
  }


  create(socio:Socio):Observable<Socio> {
    return this.http.post<Socio>(this.urlAPI, socio);
  }

  delete(id:number):Observable<Object> {
    return this.http.delete(`${this.urlAPI}/${id}`);
  }

  getById(id:number):Observable<Socio> {
    return this.http.get<Socio>(`${this.urlAPI}/${id}`);
  }

  update(id:number, socio:Socio):Observable<Socio> {
    return this.http.put<Socio>(`${this.urlAPI}/${id}`, socio);
  }


}
