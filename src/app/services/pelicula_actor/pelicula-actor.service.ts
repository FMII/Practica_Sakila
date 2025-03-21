import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculaActor } from '../../interfaces/pelicula-actor';
@Injectable({
  providedIn: 'root'
})
export class PeliculaActorService {

  constructor(private http: HttpClient) { }
  getFilm_Actor(): Observable<PeliculaActor[]> {
        return this.http.get<PeliculaActor[]>('http://209.38.68.250/film_actor');
      }
}
