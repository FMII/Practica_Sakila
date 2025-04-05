import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) {}

  getCategories(): Observable<{ data: Category[] }> {
    return this.http.get<{ data: Category[] }>('http://127.0.0.1:44221/category');
  }
}
