import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula, PeliculaResponse } from '../../interfaces/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private apiUrl = 'http://209.38.68.250/film';

  constructor(private http: HttpClient) {}

  getFilms(): Observable<PeliculaResponse> {
    return this.http.get<PeliculaResponse>(this.apiUrl);
  }

  getFilmById(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${this.apiUrl}/${id}`);
  }

  createFilm(film: Partial<Pelicula>): Observable<Pelicula> {
    return this.http.post<Pelicula>(this.apiUrl, film);
  }

  updateFilm(id: number, film: Partial<Pelicula>): Observable<Pelicula> {
    return this.http.put<Pelicula>(`${this.apiUrl}/${id}`, film);
  }

  deleteFilm(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
