import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tienda } from '../../interfaces/tienda';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {
  private apiUrl = 'http://209.38.68.250/store';

  constructor(private http: HttpClient) {}

  getTiendas(): Observable<{ data: Tienda[] }> {
    return this.http.get<{ data: Tienda[] }>(this.apiUrl);
  }
}
