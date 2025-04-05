import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostPagos } from '../../interfaces/post-pagos';

@Injectable({
  providedIn: 'root'
})
export class PostPagosService {
  private apiUrl = 'http://127.0.0.1:44221/payment';

  constructor(private http: HttpClient) {}

  createPago(pago: PostPagos): Observable<any> {
    return this.http.post(this.apiUrl, pago, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
