import { Component, OnInit } from '@angular/core';
import { PeliculaTexto } from '../interfaces/pelicula-texto';
import { PeliculaTextoService } from '../services/pelicula_texto/pelicula-texto.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Pelicula } from '../interfaces/pelicula'; 
import { PeliculaService } from '../services/pelicula/pelicula.service';
import { PostPeliculaTextoComponent } from '../post-pelicula-texto/post-pelicula-texto.component';


@Component({
  selector: 'app-pelicula-texto',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NgxPaginationModule, PostPeliculaTextoComponent],
  templateUrl: './pelicula-texto.component.html',
  styleUrl: './pelicula-texto.component.css'
})
export class PeliculaTextoComponent implements OnInit {
  textos: PeliculaTexto[] = [];
  peliculas: Pelicula[] = [];
  page = 1;
  itemsPerPage = 10;

  formVisible = false;
  isEditing = false;
  selectedId = 0;

  form: Partial<PeliculaTexto> = {
    film_id: 0, 
    title: '',
    description: ''
  };

  constructor(
    private service: PeliculaTextoService,
    private peliculaService: PeliculaService // 👈 Agregar el servicio de películas
  ) {}

  ngOnInit(): void {
    this.loadTextos();
    this.loadPeliculas(); // 👈 Cargar películas disponibles
  }
  
  loadPeliculas(): void {
    this.peliculaService.getFilms().subscribe(res => {
      this.peliculas = res.data;
    });
  }

  loadTextos(): void {
    this.service.getAll().subscribe(res => {
      this.textos = res.data;
    });
  }

  showCreateForm(): void {
    this.formVisible = true;
    this.isEditing = false;
    this.form = { title: '', description: '' };
  }

  showEditForm(texto: PeliculaTexto): void {
    this.selectedId = texto.film_id;
    console.log(this.selectedId)
    this.form = { title: texto.title, description: texto.description };
    this.formVisible = true;
    this.isEditing = true;
  }

  save(): void {
    
    if (this.form.film_id) {
      this.form.film_id = +this.form.film_id;
    }
  
    if (this.isEditing) {
      this.service.update(this.selectedId, this.form).subscribe(() => {
        this.cancel();
        this.loadTextos();
      });
    } else {
      this.service.create(this.form).subscribe(() => {
        this.cancel();
        this.loadTextos();
      });
    }
  }
  

  delete(id: number): void {
    if (confirm('¿Eliminar este registro?')) {
      this.service.delete(id).subscribe(() => this.loadTextos());
    }
  }

  cancel(): void {
    this.formVisible = false;
    this.isEditing = false;
    this.form = { title: '', description: '' };
  }
}
