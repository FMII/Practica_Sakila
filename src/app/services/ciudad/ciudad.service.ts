import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ciudad } from '../../interfaces/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {
  private apiUrl = 'http://209.38.68.250/city';

  constructor(private http: HttpClient) {}

  getCiudades(): Observable<{ data: Ciudad[] }> {
    return this.http.get<{ data: Ciudad[] }>(this.apiUrl);
  }
}
