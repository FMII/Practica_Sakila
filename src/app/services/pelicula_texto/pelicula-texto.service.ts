import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculaTexto, PeliculaTextoResponse } from '../../interfaces/pelicula-texto';

@Injectable({
  providedIn: 'root'
})
export class PeliculaTextoService {
  private apiUrl = 'http://209.38.68.250/film_text';

  constructor(private http: HttpClient) {}

  getAll(): Observable<PeliculaTextoResponse> {
    return this.http.get<PeliculaTextoResponse>(this.apiUrl);
  }

  getById(id: number): Observable<PeliculaTexto> {
    return this.http.get<PeliculaTexto>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<PeliculaTexto>): Observable<PeliculaTexto> {
    return this.http.post<PeliculaTexto>(this.apiUrl, data);
  }

  update(id: number, data: Partial<PeliculaTexto>): Observable<PeliculaTexto> {
    return this.http.put<PeliculaTexto>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
