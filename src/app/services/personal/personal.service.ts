import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personal, PersonalResponse } from '../../interfaces/personal';
import { Global } from '../../interfaces/global';
@Injectable({
  providedIn: 'root'
})
export class PersonalService {

  private apiUrl = 'http://209.38.68.250/staff';

  constructor(private http: HttpClient) { }

  getStaff(): Observable<PersonalResponse> {
    return this.http.get<PersonalResponse>(this.apiUrl);
  }

  getById(id: number): Observable<Global> {
    return this.http.get<Global>(`${this.apiUrl}/${id}`);
  }

  create(data: Partial<Personal>): Observable<Personal> {
    return this.http.post<Personal>(this.apiUrl, data);
  }

  update(id: number, data: Partial<Personal>): Observable<Personal> {
    return this.http.put<Personal>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
