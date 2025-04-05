import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PeliculaActor, PeliculaActorResponse } from '../../interfaces/pelicula-actor';

@Injectable({
  providedIn: 'root'
})
export class PeliculaActorService {
  private apiUrl = 'http://127.0.0.1:44221/film_actor';

  constructor(private http: HttpClient) {}

  getAll(): Observable<PeliculaActorResponse> {
    return this.http.get<PeliculaActorResponse>(this.apiUrl);
  }

  getById(actor_id: number, film_id: number): Observable<PeliculaActor> {
    return this.http.get<PeliculaActor>(`${this.apiUrl}/${actor_id}/${film_id}`);
  }

  create(data: Partial<PeliculaActor>): Observable<PeliculaActor> {
    return this.http.post<PeliculaActor>(this.apiUrl, data);
  }

  update(actor_id: number, film_id: number, data: Partial<PeliculaActor>): Observable<PeliculaActor> {
    const new_data ={new_actor_id: Number(data.actor_id), new_film_id: data.film_id};
    return this.http.put<PeliculaActor>(`${this.apiUrl}/${film_id}/${actor_id}`, new_data);
  }

  delete(actor_id: number, film_id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${film_id}/${actor_id}`);
  }
}
