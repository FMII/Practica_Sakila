import { Component, OnInit } from '@angular/core';
import { PeliculaCategoria } from '../interfaces/pelicula-categoria';
import { PeliculaCategoriaService } from '../services/pelicula_categoria/pelicula-categoria.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { Pelicula } from '../interfaces/pelicula';
import { Category } from '../interfaces/category';
import { PeliculaService } from '../services/pelicula/pelicula.service';
import { CategoryService } from '../services/category/category.service';

@Component({
  selector: 'app-pelicula-categoria',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NgxPaginationModule],
  templateUrl: './pelicula-categoria.component.html',
  styleUrl: './pelicula-categoria.component.css'
})
export class PeliculaCategoriaComponent implements OnInit {
  relaciones: PeliculaCategoria[] = [];
  peliculas: Pelicula[] = [];
  categorias: Category[] = [];
  page = 1;
  itemsPerPage = 10;

  formVisible = false;
  isEditing = false;

  form: Partial<PeliculaCategoria> = {
    film_id: 0,
    category_id: 0
  };

  selectedIds = { film_id: 0, category_id: 0 };

  constructor(
    private service: PeliculaCategoriaService,
    private peliculaService: PeliculaService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.loadRelaciones();
    this.loadPeliculas();     // 👈 cargar películas
    this.loadCategorias();    // 👈 cargar categorías
  }

  loadPeliculas(): void {
    this.peliculaService.getFilms().subscribe(res => {
      this.peliculas = res.data;
    });
  }

  loadCategorias(): void {
    this.categoryService.getCategories().subscribe(res => {
      this.categorias = res.data;
    });
  }

  loadRelaciones(): void {
    this.service.getAll().subscribe(res => {
      this.relaciones = res.data;
    });
  }

  showCreateForm(): void {
    this.formVisible = true;
    this.isEditing = false;
    this.form = { film_id: 0, category_id: 0 };
  }

  showEditForm(rel: PeliculaCategoria): void {
    this.selectedIds = { film_id: rel.film_id, category_id: rel.category_id };
    this.form = {
      film_id: rel.film_id,
      category_id: rel.category_id
    };
    this.formVisible = true;
    this.isEditing = true;
  }

  save(): void {
    const { film_id, category_id } = this.selectedIds;
    if (this.isEditing) {
      this.service.update(film_id, category_id, this.form).subscribe(() => {
        this.cancel();
        this.loadRelaciones();
      });
    } else {
      this.service.create(this.form).subscribe(() => {
        this.cancel();
        this.loadRelaciones();
      });
    }
  }

  delete(film_id: number, category_id: number): void {
    if (confirm('¿Deseas eliminar esta relación?')) {
      this.service.delete(film_id, category_id).subscribe(() => this.loadRelaciones());
    }
  }

  cancel(): void {
    this.formVisible = false;
    this.isEditing = false;
    this.form = { film_id: 0, category_id: 0 };
  }
}
