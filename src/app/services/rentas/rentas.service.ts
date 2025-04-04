import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Renta, RentaResponse } from '../../interfaces/renta';
import { Global } from '../../interfaces/global';
@Injectable({
  providedIn: 'root'
})
export class RentasService {
  private apiUrl = 'http://127.0.0.1:44221/rental';

  constructor(private http: HttpClient) {}

  getRental(): Observable<RentaResponse> {
    return this.http.get<RentaResponse>(this.apiUrl);
  }

  getById(id: number): Observable<Global> {
    return this.http.get<Global>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<Renta>): Observable<Renta> {
    return this.http.post<Renta>(this.apiUrl, data);
  }

  update(id: number, data: Partial<Renta>): Observable<Renta> {
    return this.http.put<Renta>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
