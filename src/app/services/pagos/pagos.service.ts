import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pago, PagoResponse } from '../../interfaces/pago';
import { Global } from '../../interfaces/global';
@Injectable({
  providedIn: 'root'
})
export class PagosService {

  private apiUrl = 'http://127.0.0.1:44221/payment';

  constructor(private http: HttpClient) { }

  getPayment(): Observable<PagoResponse> {
    return this.http.get<PagoResponse>(this.apiUrl);
  }

  getById(id: number): Observable<Global> {
    return this.http.get<Global>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<Pago>): Observable<Pago> {
    return this.http.post<Pago>(this.apiUrl, data);
  }

  update(id: number, data: Partial<Pago>): Observable<Pago> {
    return this.http.put<Pago>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
