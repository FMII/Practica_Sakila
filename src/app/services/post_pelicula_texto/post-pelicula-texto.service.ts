import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostPeliculaTexto } from '../../interfaces/post-pelicula-texto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostPeliculaTextoService {
  private apiUrl = 'http://209.38.68.250/film_text';
  constructor(private http: HttpClient) { }
  postPeliculaTexto(data: PostPeliculaTexto): Observable<any> {
        return this.http.post<any>(this.apiUrl, data);
  }
}
