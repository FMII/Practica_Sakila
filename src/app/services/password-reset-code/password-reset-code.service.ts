import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PasswordResetCode } from '../../interfaces/password-reset-code';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetCodeService {
  private apiUrl = 'http://127.0.0.1:44221/auth/password-reset';

  constructor(private http: HttpClient) {}

  sendResetCode(data: PasswordResetCode): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}
