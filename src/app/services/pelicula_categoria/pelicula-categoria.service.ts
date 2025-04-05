import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculaCategoria, PeliculaCategoriaResponse } from '../../interfaces/pelicula-categoria';

@Injectable({
  providedIn: 'root'
})
export class PeliculaCategoriaService {
  private apiUrl = 'http://127.0.0.1:44221/film_category';

  constructor(private http: HttpClient) {}

  getAll(): Observable<PeliculaCategoriaResponse> {
    return this.http.get<PeliculaCategoriaResponse>(this.apiUrl);
  }

  getById(film_id: number, category_id: number): Observable<PeliculaCategoria> {
    return this.http.get<PeliculaCategoria>(`${this.apiUrl}/${film_id}/${category_id}`);
  }

  create(data: Partial<PeliculaCategoria>): Observable<PeliculaCategoria> {
    return this.http.post<PeliculaCategoria>(this.apiUrl, data);
  }

  update(film_id: number, category_id: number, data: { new_film_id: number, new_category_id: number }): Observable<any> {
    return this.http.put(`${this.apiUrl}/${film_id}/${category_id}`, data);
  }

  delete(film_id: number, category_id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${film_id}/${category_id}`);
  }
}
