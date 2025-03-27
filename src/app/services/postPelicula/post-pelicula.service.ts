import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { createPelicula } from '../../interfaces/postPelicula';
@Injectable({
  providedIn: 'root',
})
export class PostPeliculaService {
  private apiUrl = 'http://209.38.68.250/film';

  constructor(private http: HttpClient) {}

  createPelicula(pelicula: createPelicula): Observable<any> {
    return this.http.post(this.apiUrl, pelicula);
  }
  
}
