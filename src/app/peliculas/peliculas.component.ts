import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Pelicula } from '../interfaces/pelicula';
import { PeliculaService } from '../services/pelicula/pelicula.service';
import { LenguajeService } from '../services/lenguaje/lenguaje.service';
import { Lenguaje } from '../interfaces/lenguaje';
import { createPelicula } from '../interfaces/postPelicula';
import { PostPeliculaComponent } from '../post-pelicula/post-pelicula.component';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NgxPaginationModule, PostPeliculaComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit {
  peliculas: Pelicula[] = [];
  languages: Lenguaje[] = [];

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

  constructor(
    private peliculaService: PeliculaService,
    private lenguajeService: LenguajeService
  ) {}
  

  ngOnInit(): void {
    this.getPeliculas();
    this.getLanguages(); // 👈 Aquí
    this.getUserRole(); 
  }

  userRole: string | null = '';  // Variable para almacenar el rol del usuario
  isAdmin: boolean = false;
  isClient: boolean = false;
  isGuest: boolean = false;

  // Método para obtener el rol desde localStorage
  getUserRole(): void {
    const role = localStorage.getItem('role');  // Asegúrate de que el rol se guarda bajo la clave 'role'
    if (role) {
      this.userRole = role;
      this.checkRole();
    } else {
      console.error('No se encontró el rol en localStorage.');
    }
  }

  // Método para establecer los roles booleanos
  checkRole(): void {
    if (this.userRole === 'Administrador') {
      this.isAdmin = true;
    } else if (this.userRole === 'Cliente') {
      this.isClient = true;
    } else if (this.userRole === 'Invitado') {
      this.isGuest = true;
    }
  }
  
  getLanguages(): void {
    this.lenguajeService.getLanguages().subscribe(res => {
      this.languages = res.data;
    });
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
      this.peliculaForm = { ...pelicula.data };
      this.formVisible = true;
      this.isEditing = true;
    });
  }

  savePelicula(): void {
    const peliculaData: createPelicula = {
      title: this.peliculaForm.title!,
      language_id: this.peliculaForm.language_id!,
      rental_duration: this.peliculaForm.rental_duration!,
      rental_rate: this.peliculaForm.rental_rate!,
      replacement_cost: this.peliculaForm.replacement_cost!,
      special_features: this.peliculaForm.special_features!
    };
  
    if (this.isEditing && this.peliculaForm.film_id) {
      this.peliculaService.updateFilm(this.peliculaForm.film_id, peliculaData).subscribe(() => {
        this.cancelForm();
        this.getPeliculas();
      });
    } else {
      this.peliculaService.createFilm(peliculaData).subscribe(() => {
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
