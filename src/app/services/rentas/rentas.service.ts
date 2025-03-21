import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Renta } from '../../interfaces/renta';
@Injectable({
  providedIn: 'root'
})
export class RentasService {

  constructor(private http: HttpClient) { }
  getRental(): Observable<Renta[]> {
    return this.http.get<Renta[]>('http://209.38.68.250/rental');
  }
}
