import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor, ActorResponse } from '../../interfaces/actor';
import { Global } from '../../interfaces/global';
@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private apiUrl = 'http://209.38.68.250/actor';

  constructor(private http: HttpClient) {}

  // GET: Obtener todos los actores
  getActors(): Observable<ActorResponse> {
    return this.http.get<ActorResponse>(this.apiUrl);
  }

  // GET: Obtener un actor por ID
  getActorById(id: number): Observable<Global> {
    return this.http.get<Global>(`${this.apiUrl}/${id}`);
  }

  // POST: Crear un nuevo actor
  createActor(actor: Partial<Actor>): Observable<Actor> {
    return this.http.post<Actor>(this.apiUrl, actor);
  }

  // PUT: Actualizar un actor existente
  updateActor(id: number, actor: Partial<Actor>): Observable<Actor> {
    return this.http.put<Actor>(`${this.apiUrl}/${id}`, actor);
  }

  // DELETE: Eliminar un actor
  deleteActor(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
