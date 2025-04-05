import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ciudad } from '../../interfaces/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private apiUrl = 'http://127.0.0.1:44221/city';

  constructor(private http: HttpClient) {}

  getCiudades(): Observable<{ data: Ciudad[] }> {
    return this.http.get<{ data: Ciudad[] }>(this.apiUrl);
  }
}
