import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Barco } from 'src/app/interfaces/barco';

@Injectable({
  providedIn: 'root'
})
export class BarcoService {

  urlAPI:string = "http://localhost:8080/api/v1/barcos";
  
  token!: string | null;

  constructor(private http: HttpClient) { }

  getAll():Observable<Barco[]> {
    return this.http.get<Barco[]>(this.urlAPI)
  }

  create(barco:Barco):Observable<Barco> {
    return this.http.post<Barco>(this.urlAPI, barco);
  }

  delete(id:number):Observable<Object> {
    return this.http.delete(`${this.urlAPI}/${id}`);
  }

  getById(id:number):Observable<Barco> {
    return this.http.get<Barco>(`${this.urlAPI}/${id}`);
  }

  update(id:number, barco:Barco):Observable<Barco> {  
    return this.http.put<Barco>(`${this.urlAPI}/${id}`, barco);
  }


  getBySocioId(id:number):Observable<Barco[]> {
    return this.http.get<Barco[]>(`${this.urlAPI}/socio/${id}`);
  }

  getByPatronId(id:number):Observable<Barco[]> {
    return this.http.get<Barco[]>(`${this.urlAPI}/patron/${id}`);
  }
  
}
