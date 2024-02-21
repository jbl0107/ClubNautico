import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private urlAPI:string = "http://localhost:8080/api/v1/personas"  //url a la que haremos la peticion

  constructor(private http:HttpClient) { }


  // El observable permite manejar solicitudes asincronas (como una peticion http). A diferencia d las promesas
  //estos pueden emitir múltiples valores a lo largo del tiempo
  getAll():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.urlAPI);
  }

  
  getById(id:number):Observable<Persona>{
    return this.http.get<Persona>(`${this.urlAPI}/${id}`);
  }
  

  create(persona: Persona):Observable<Persona> {
    return this.http.post<Persona>(this.urlAPI, persona);
  }

  delete(id:number):Observable<Object> {
    return this.http.delete(`${this.urlAPI}/${id}`);
  }

  update(id:number, persona:Persona):Observable<Persona> {
    return this.http.put<Persona>(`${this.urlAPI}/${id}`, persona);
  }



}