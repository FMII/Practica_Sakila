import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostPeliculaCategoria } from '../../interfaces/post-pelicula-categoria';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostPeliculaCategoriaService {
  private apiUrl = 'http://127.0.0.1:44221/film_category'

  constructor(private http: HttpClient) { }

  postPeliculaCategoria(data: PostPeliculaCategoria): Observable<any> {
      return this.http.post<any>(this.apiUrl, data);
    }

}