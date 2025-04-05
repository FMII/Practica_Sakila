import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lenguaje } from '../../interfaces/lenguaje';

@Injectable({
  providedIn: 'root'
})
export class LenguajeService {

  constructor(private http: HttpClient) { }

  getLanguages(): Observable<{ data: Lenguaje[] }> {
    return this.http.get<{ data: Lenguaje[] }>('http://127.0.0.1:44221/language');
  }
}
