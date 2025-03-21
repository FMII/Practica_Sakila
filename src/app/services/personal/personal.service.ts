import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personal } from '../../interfaces/personal';
@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  constructor(private http: HttpClient) { }
  getStaff(): Observable<Personal[]> {
    return this.http.get<Personal[]>('http://209.38.68.250/staff');
  }
}
