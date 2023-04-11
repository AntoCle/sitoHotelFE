import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, catchError, of } from 'rxjs'; 
import { Prenotazione } from '../models/prenotazione';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioneserviceService {

  protected apiServerUrl = 'http://localhost:8080/prenotazione';
 
  constructor(private http: HttpClient){ }

  getAll(): Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>(this.apiServerUrl);
  }

  get(id: any): Observable<Prenotazione> {
    return this.http.get<Prenotazione>(`${this.apiServerUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post<Prenotazione>(this.apiServerUrl, data).pipe(
      catchError(error => {
        console.error('Errore prenotazione', data, error);
        return of(null);
      })
    );
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