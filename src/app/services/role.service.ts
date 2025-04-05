import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RolesResponse } from '../interfaces/role';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private apiUrl = 'http://127.0.0.1:44221/roles'; 
  constructor(private http: HttpClient) {}

  getRoles(): Observable<RolesResponse> {
    return this.http.get<RolesResponse>(this.apiUrl);
  }
}
