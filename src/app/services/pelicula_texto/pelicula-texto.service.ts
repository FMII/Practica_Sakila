import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pelicula } from '../../interfaces/pelicula';
@Injectable({
  providedIn: 'root'
})
export class PeliculaTextoService {

  constructor(private http: HttpClient) { }
  getFilm(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>('http://209.38.68.250/film');
  }
}
