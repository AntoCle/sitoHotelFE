import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs'; 
import { Camera } from '../models/camera';

@Injectable({
  providedIn: 'root'
})
export class CameraserviceService {

  protected apiServerUrl = 'http://localhost:8080/camera';
 
  constructor(private http: HttpClient){ }

  getAll(): Observable<Camera[]> {
    return this.http.get<Camera[]>(this.apiServerUrl);
  }

  get(id: any): Observable<Camera> {
    return this.http.get<Camera>(`${this.apiServerUrl}/${id}`);
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