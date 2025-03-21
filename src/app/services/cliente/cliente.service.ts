import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente, ClienteResponse } from '../../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://209.38.68.250/customer';

  constructor(private http: HttpClient) {}

  // Obtener todos los clientes
  getClients(): Observable<ClienteResponse> {
    return this.http.get<ClienteResponse>(this.apiUrl);
  }

  // Obtener un cliente por ID
  getClientById(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/${id}`);
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
