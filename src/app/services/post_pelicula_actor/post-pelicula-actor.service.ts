import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostPeliculaActor } from '../../interfaces/post-pelicula-actor';

@Injectable({
  providedIn: 'root'
})
export class PostPeliculaActorService {
  private apiUrl = 'http://127.0.0.1:44221/film_actor';

  constructor(private http: HttpClient) { }

  postPeliculaActor(data: PostPeliculaActor): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}