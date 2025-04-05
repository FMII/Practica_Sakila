import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula, PeliculaResponse, createPelicula } from '../../interfaces/pelicula';
import { Global } from '../../interfaces/global';
@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private apiUrl = 'http://127.0.0.1:44221/film';

  constructor(private http: HttpClient) {}

  getFilms(): Observable<PeliculaResponse> {
    return this.http.get<PeliculaResponse>(this.apiUrl);
  }

  getFilmById(id: number): Observable<Global> {
    return this.http.get<Global>(`${this.apiUrl}/${id}`);
  }

  createFilm(film: Partial<createPelicula>): Observable<createPelicula> {
    return this.http.post<createPelicula>(this.apiUrl, film);
  }

  updateFilm(id: number, film: Partial<Pelicula>): Observable<Pelicula> {
    return this.http.put<Pelicula>(`${this.apiUrl}/${id}`, film);
  }

  deleteFilm(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
