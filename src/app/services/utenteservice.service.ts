import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utente } from '../models/utente';

@Injectable({
  providedIn: 'root'
})
export class UtenteserviceService {

  protected apiServerUrl = 'http://localhost:8080/utente';

  constructor(private http: HttpClient){ }

  getAll(): Observable<Utente[]> {
    return this.http.get<Utente[]>(this.apiServerUrl);
  }

  get(id: any): Observable<Utente> {
    return this.http.get<Utente>(`${this.apiServerUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(this.apiServerUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.apiServerUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiServerUrl}/${id}`);
  }

  /*deleteAll(): Observable<any> {
    return this.http.delete(apiServerUrl);
  }*/
}
