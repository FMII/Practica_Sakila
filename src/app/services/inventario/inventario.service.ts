import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Inventario } from '../../interfaces/inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private http: HttpClient) { }
  getInventory(): Observable<Inventario[]> {
        return this.http.get<Inventario[]>('http://209.38.68.250/inventory');
      }
}
