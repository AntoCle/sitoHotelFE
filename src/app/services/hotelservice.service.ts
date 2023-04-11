import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelserviceService {

  protected apiServerUrl = 'http://localhost:8080/hotel';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiServerUrl);
  }

   get(id: any): Observable<Hotel> {
     return this.http.get<Hotel>(`${this.apiServerUrl}/${id}`);
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
