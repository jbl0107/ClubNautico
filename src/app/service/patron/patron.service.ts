import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patron } from 'src/app/interfaces/patron';

@Injectable({
  providedIn: 'root'
})
export class PatronService {

  constructor(private http: HttpClient) { }

  private urlAPI:string = "http://localhost:8080/api/v1/patrones";

  getAll():Observable<Patron[]> {
    return this.http.get<Patron[]>(this.urlAPI);
  }


  create(patron:Patron):Observable<Patron> {
    return this.http.post<Patron>(this.urlAPI, patron);
  }

  delete(id:number):Observable<Object> {
    return this.http.delete(`${this.urlAPI}/${id}`);
  }

  getById(id:number):Observable<Patron> {
    return this.http.get<Patron>(`${this.urlAPI}/${id}`);
  }

  update(id:number, patron:Patron):Observable<Patron> {
    return this.http.put<Patron>(`${this.urlAPI}/${id}`, patron);
  }

  
}
