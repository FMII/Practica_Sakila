import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Pelicula } from '../interfaces/pelicula';
import { PeliculaService } from '../services/pelicula/pelicula.service';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NgxPaginationModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit {
  peliculas: Pelicula[] = [];
  page = 1;
  itemsPerPage = 10;

  formVisible = false;
  isEditing = false;

  peliculaForm: Partial<Pelicula> = {
    title: '',
    description: '',
    release_year: new Date().getFullYear(),
    language_id: 1,
    rental_duration: 1,
    rental_rate: '0.99',
    length: 0,
    replacement_cost: '9.99',
    rating: 'G',
    special_features: '',
  };

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.getPeliculas();
  }

  getPeliculas(): void {
    this.peliculaService.getFilms().subscribe(res => {
      this.peliculas = res.data;
    });
  }

  showCreateForm(): void {
    this.formVisible = true;
    this.isEditing = false;
    this.peliculaForm = {
      title: '',
      description: '',
      release_year: new Date().getFullYear(),
      language_id: 1,
      rental_duration: 1,
      rental_rate: '0.99',
      length: 0,
      replacement_cost: '9.99',
      rating: 'G',
      special_features: '',
    };
  }

  showEditForm(id: number): void {
    this.peliculaService.getFilmById(id).subscribe(pelicula => {
      this.peliculaForm = { ...pelicula };
      this.formVisible = true;
      this.isEditing = true;
    });
  }

  savePelicula(): void {
    if (this.isEditing && this.peliculaForm.film_id) {
      this.peliculaService.updateFilm(this.peliculaForm.film_id, this.peliculaForm).subscribe(() => {
        this.cancelForm();
        this.getPeliculas();
      });
    } else {
      this.peliculaService.createFilm(this.peliculaForm).subscribe(() => {
        this.cancelForm();
        this.getPeliculas();
      });
    }
  }

  deletePelicula(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta película?')) {
      this.peliculaService.deleteFilm(id).subscribe(() => this.getPeliculas());
    }
  }

  cancelForm(): void {
    this.formVisible = false;
    this.isEditing = false;
    this.peliculaForm = {
      title: '',
      description: '',
      release_year: new Date().getFullYear(),
      language_id: 1,
      rental_duration: 1,
      rental_rate: '0.99',
      length: 0,
      replacement_cost: '9.99',
      rating: 'G',
      special_features: '',
    };
  }
}
