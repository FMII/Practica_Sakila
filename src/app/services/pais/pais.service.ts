import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pais } from '../../interfaces/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private apiUrl = 'http://127.0.0.1:44221/country';

  constructor(private http: HttpClient) {}

  getPaises(): Observable<{ data: Pais[] }> {
    return this.http.get<{ data: Pais[] }>(this.apiUrl);
  }
}
