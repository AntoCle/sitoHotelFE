import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { Cameraservizi } from '../models/cameraservizi';

@Injectable({
  providedIn: 'root'
})
export class CameraserviziserviceService {

  protected apiServerUrl = 'http://localhost:8080/cameraServizi';
 
  constructor(private http: HttpClient){ }

  getAll(): Observable<Cameraservizi[]> {
    return this.http.get<Cameraservizi[]>(this.apiServerUrl);
  }

  get(id: any): Observable<Cameraservizi> {
    return this.http.get<Cameraservizi>(`${this.apiServerUrl}/${id}`);
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