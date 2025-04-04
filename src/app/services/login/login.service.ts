import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../interfaces/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://209.38.68.250/auth/login';

  constructor(private http: HttpClient) {}

  login(data: Login): Observable<Login> {
    return this.http.post<Login>(this.apiUrl, data);
  }
}
