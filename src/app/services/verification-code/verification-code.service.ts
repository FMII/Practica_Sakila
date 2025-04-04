import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VerificationCode } from '../../interfaces/verification-code';

@Injectable({
  providedIn: 'root'
})
export class VerificationCodeService {
  private apiUrl = 'http://209.38.68.250/auth/verify'; // Ajusta si la ruta es diferente

  constructor(private http: HttpClient) {}

  verifyCode(data: VerificationCode): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
}