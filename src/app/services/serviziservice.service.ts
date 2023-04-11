import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { Servizi } from '../models/servizi';

@Injectable({
  providedIn: 'root'
})
export class ServiziserviceService {

  protected apiServerUrl = 'http://localhost:8080/recensioni';
 
  constructor(private http: HttpClient){ }

  getAll(): Observable<Servizi[]> {
    return this.http.get<Servizi[]>(this.apiServerUrl);
  }

  get(id: any): Observable<Servizi> {
    return this.http.get<Servizi>(`${this.apiServerUrl}/${id}`);
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