import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { PostPeliculaTexto } from '../interfaces/post-pelicula-texto';
import { PostPeliculaTextoService } from '../services/post_pelicula_texto/post-pelicula-texto.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-post-pelicula-texto',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './post-pelicula-texto.component.html',
  styleUrls: ['./post-pelicula-texto.component.css']
})
export class PostPeliculaTextoComponent {
  peliculaTextoForm = new FormGroup({
    film_id: new FormControl<number | null>(null, [Validators.required]),
    title: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    description: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(10)
    ])
  });
  errorMessage: string | null = null;

  constructor(private postPeliculaTextoService: PostPeliculaTextoService) {}

  onSubmit() {
    if (this.peliculaTextoForm.valid) {
      const peliculaTexto: PostPeliculaTexto = {
        film_id: Number(this.peliculaTextoForm.value.film_id),
        title: this.peliculaTextoForm.value.title || '',
        description: this.peliculaTextoForm.value.description || ''
      };

      this.postPeliculaTextoService.postPeliculaTexto(peliculaTexto).subscribe({
        next: (response) => {
          console.log('Película texto creada:', response);
          this.peliculaTextoForm.reset();
          this.errorMessage = null; 
        },
        error: (error) => {
          console.error('Error al crear la película texto:', error);
          if (error.status === 400) {
            console.error('Detalles del error:', error.error);
            if (error.error && error.error.message === 'ID ya registrado') {
              this.errorMessage = 'El ID ya está registrado. Por favor, usa otro.';
            } else {
              this.errorMessage = 'Ocurrió un error al crear la película texto.';
            }
          } else {
            this.errorMessage = 'ID ya registrado';
          }
        },
      });
    }
  }
}
