import { Component, OnInit } from '@angular/core';
import { Category } from '../interfaces/category';
import { CategoryService } from '../services/category/category.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [NgIf, NgFor, NgxPaginationModule, CommonModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit {
  categories: Category[] = [];
  itemsPerPage: number = 10;
  page: number = 1;
  formVisible: boolean = false;

  constructor(private categoryService: CategoryService) {}

  ngOnInit(): void {
    this.cargarCategorias();
  }

  cargarCategorias(): void {
    this.categoryService.getCategories().subscribe({
      next: (response) => this.categories = response.data, // Asumiendo que 'data' es la respuesta correcta
      error: (error) => console.error('Error al obtener las categorías:', error)
    });
  }
}
