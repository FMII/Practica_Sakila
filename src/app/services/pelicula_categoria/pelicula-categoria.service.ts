import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculaCategoria } from '../../interfaces/pelicula-categoria';
@Injectable({
  providedIn: 'root'
})
export class PeliculaCategoriaService {

  constructor(private http: HttpClient) { }
  getFilm_Categorie(): Observable<PeliculaCategoria[]> {
      return this.http.get<PeliculaCategoria[]>('http://209.38.68.250/film_category');
    }
}
