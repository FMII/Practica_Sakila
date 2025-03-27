import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostPeliculaActor } from '../../interfaces/post-pelicula-actor';

@Injectable({
  providedIn: 'root'
})
export class PostPeliculaActorService {
  private apiUrl = 'http://209.38.68.250/film_actor';

  constructor(private http: HttpClient) { }

  postPeliculaActor(data: PostPeliculaActor): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}