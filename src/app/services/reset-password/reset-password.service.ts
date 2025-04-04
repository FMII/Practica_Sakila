import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResetPassword } from '../../interfaces/reset-password';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  private apiUrl = 'http://127.0.0.1:44221/auth/reset-password';

  constructor(private http: HttpClient) {}

  resetPassword(data: ResetPassword): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}