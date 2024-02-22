import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salida } from 'src/app/interfaces/salida';

@Injectable({
  providedIn: 'root'
})
export class SalidaService {

  private urlAPI:string = "http://localhost:8080/api/v1/salidas";
  
  constructor(private http:HttpClient) { }

  getAll():Observable<Salida[]>{
    return this.http.get<Salida[]>(this.urlAPI);
  }

  
  getById(id:number):Observable<Salida>{
    return this.http.get<Salida>(`${this.urlAPI}/${id}`);
  }
  

  create(salida: Salida):Observable<Salida> {
    return this.http.post<Salida>(this.urlAPI, salida);
  }

  delete(id:number):Observable<Object> {
    return this.http.delete(`${this.urlAPI}/${id}`);
  }

  update(id:number, salida:Salida):Observable<Salida> {
    return this.http.put<Salida>(`${this.urlAPI}/${id}`, salida);
  }

  getByBarcoId(id:number):Observable<Salida[]> {
    return this.http.get<Salida[]>(`${this.urlAPI}/barco/${id}`);
  }

  getByPatronId(id:number):Observable<Salida[]> {
    return this.http.get<Salida[]>(`${this.urlAPI}/patron/${id}`);
  }

  

  parsearFecha(fechaSalida:string):string{

    let fecha = new Date(fechaSalida);
    let fechaFormateada = fecha.getFullYear() + '-' +
    ('0' + (fecha.getMonth()+1)).slice(-2) + '-' +//le añadimos el 0 y luego hacemos el slice para asegurar q siempre sean 2 digitos
    ('0' + fecha.getDate()).slice(-2) + ' ' +
    ('0' + fecha.getHours()).slice(-2) + ':' +
    ('0' + fecha.getMinutes()).slice(-2) + ':' +
    ('0' + fecha.getSeconds()).slice(-2);

    return fechaFormateada;
  }

}
