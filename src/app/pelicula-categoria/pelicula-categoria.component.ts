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
import { PostPeliculaCategoriaComponent } from '../post-pelicula-categoria/post-pelicula-categoria.component';

@Component({
  selector: 'app-pelicula-categoria',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NgxPaginationModule, PostPeliculaCategoriaComponent],
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

  loading = false;
  errorMessage = '';

showEditForm(rel: PeliculaCategoria): void {
  this.selectedIds = { 
    film_id: rel.film_id, 
    category_id: rel.category_id 
  };
  this.form = {
    film_id: rel.film_id,
    category_id: rel.category_id
  };
  this.formVisible = true;
  this.isEditing = true;
}

save(): void {
  const filmId = Number(this.form.film_id);
  const categoryId = Number(this.form.category_id);

  if (this.isEditing) {
    this.loading = true;
    this.errorMessage = '';
    
    const { film_id, category_id } = this.selectedIds;
    
    const updateData = {
      new_film_id: filmId,
      new_category_id: categoryId
    };

    this.service.update(
      Number(film_id), 
      Number(category_id), 
      updateData
    ).subscribe({
      next: () => {
        this.loading = false;
        this.cancel();
        this.loadRelaciones();
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = 'Error al actualizar la relación';
        console.error('Error:', err);
      }
    });
  } else {
    const createData = {
      film_id: filmId,
      category_id: categoryId
    };
    
    this.loading = true;
    this.service.create(createData).subscribe({
      next: () => {
        this.loading = false;
        this.cancel();
        this.loadRelaciones();
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage = 'Error al crear la relación';
        console.error('Error:', err);
      }
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
