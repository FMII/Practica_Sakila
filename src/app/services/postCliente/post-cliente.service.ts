import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createCliente } from '../../interfaces/post-cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostClienteService {
  private apiUrl = 'http://209.38.68.250/customer';
  
  constructor(private http: HttpClient) { }

  createCliente(cliente: createCliente): Observable<any> {
    return this.http.post(this.apiUrl, cliente);
  }
}
