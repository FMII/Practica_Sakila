import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, ClienteResponse } from '../../interfaces/cliente';
import { Global } from '../../interfaces/global';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://127.0.0.1:44221/customer';

  constructor(private http: HttpClient) {}

  // Obtener todos los clientes
  getClients(): Observable<ClienteResponse> {
    return this.http.get<ClienteResponse>(this.apiUrl);
  }

  // Obtener un cliente por ID
  getClientById(id: number): Observable<Global> {
    return this.http.get<Global>(`${this.apiUrl}/${id}`);
  }

  // Crear cliente
  createClient(cliente: Partial<Cliente>): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

  // Actualizar cliente
  updateClient(id: number, cliente: Partial<Cliente>): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.apiUrl}/${id}`, cliente);
  }

  // Eliminar cliente
  deleteClient(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
