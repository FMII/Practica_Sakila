import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DireccionResponse } from '../interfaces/direccion';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  private apiUrl = 'http://209.38.68.250/address';

  constructor(private http: HttpClient) {}

  getDirecciones(): Observable<DireccionResponse> {
    return this.http.get<DireccionResponse>(this.apiUrl);
  }
}
