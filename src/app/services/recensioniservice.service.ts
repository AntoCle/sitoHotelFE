import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { Recensioni } from '../models/recensioni';

@Injectable({
  providedIn: 'root'
})
export class RecensioniserviceService {

  protected apiServerUrl = 'http://localhost:8080/recensioni';
 
  constructor(private http: HttpClient){ }

  getAll(): Observable<Recensioni[]> {
    return this.http.get<Recensioni[]>(this.apiServerUrl);
  }

  get(id: any): Observable<Recensioni> {
    return this.http.get<Recensioni>(`${this.apiServerUrl}/${id}`);
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