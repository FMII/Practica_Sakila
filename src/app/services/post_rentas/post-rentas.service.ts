import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PostRentas } from '../../interfaces/post-rentas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostRentasService {

  private apiUrl = 'http://209.38.68.250/rental';

  constructor(private http: HttpClient) { }

  createRenta(renta: PostRentas): Observable<any> {
    return this.http.post(this.apiUrl, renta, {
      headers: { 'Content-Type': 'application/json' }
    });
  }  
}
