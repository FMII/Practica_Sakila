import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Inventario, InventarioResponse } from '../../interfaces/inventario';
import { Global } from '../../interfaces/global';
@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  private apiUrl = 'http://209.38.68.250/inventory';

  constructor(private http: HttpClient) {}

  getInventory(): Observable<InventarioResponse> {
    return this.http.get<InventarioResponse>(this.apiUrl);
  }

  getById(id: number): Observable<Global> {
    return this.http.get<Global>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<Inventario>): Observable<Inventario> {
    return this.http.post<Inventario>(this.apiUrl, data);
  }

  update(id: number, data: Partial<Inventario>): Observable<Inventario> {
    return this.http.put<Inventario>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
