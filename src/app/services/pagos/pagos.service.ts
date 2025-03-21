import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pago } from '../../interfaces/pago';
@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor(private http: HttpClient) { }
   getPayment(): Observable<Pago[]> {
          return this.http.get<Pago[]>('http://209.38.68.250/payment');
        }
}
