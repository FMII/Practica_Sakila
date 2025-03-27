import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostPagos } from '../../interfaces/post-pagos';

@Injectable({
  providedIn: 'root'
})
export class PostPagosService {
  private apiUrl = 'http://209.38.68.250/payment';

  constructor(private http: HttpClient) {}

  createPago(pago: PostPagos): Observable<any> {
    return this.http.post(this.apiUrl, pago, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
