import { Component, OnInit } from '@angular/core';
import { PeliculaTexto } from '../interfaces/pelicula-texto';
import { PeliculaTextoService } from '../services/pelicula_texto/pelicula-texto.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-pelicula-texto',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NgxPaginationModule],
  templateUrl: './pelicula-texto.component.html',
  styleUrl: './pelicula-texto.component.css'
})
export class PeliculaTextoComponent implements OnInit {
  textos: PeliculaTexto[] = [];
  page = 1;
  itemsPerPage = 10;

  formVisible = false;
  isEditing = false;
  selectedId = 0;

  form: Partial<PeliculaTexto> = {
    title: '',
    description: ''
  };

  constructor(private service: PeliculaTextoService) {}

  ngOnInit(): void {
    this.loadTextos();
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
    this.form = { title: texto.title, description: texto.description };
    this.formVisible = true;
    this.isEditing = true;
  }

  save(): void {
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
