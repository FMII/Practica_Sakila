import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }
  getClient(): Observable<Cliente[]> {
      return this.http.get<Cliente[]>('http://209.38.68.250/customer');
    }
}
