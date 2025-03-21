import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actor } from '../../interfaces/actor';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(private http: HttpClient) {

  }
  getActors(): Observable<Actor[]> {
    return this.http.get<Actor[]>('http://209.38.68.250/actor');
  }
}