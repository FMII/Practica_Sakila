import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../../interfaces/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl = 'http://209.38.68.250/country';

  constructor(private http: HttpClient) {}

  getPaises(): Observable<{ data: Pais[] }> {
    return this.http.get<{ data: Pais[] }>(this.apiUrl);
  }
}
