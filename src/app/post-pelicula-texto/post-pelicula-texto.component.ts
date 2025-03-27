import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { PostPeliculaTexto } from '../interfaces/post-pelicula-texto';
import { PostPeliculaTextoService } from '../services/post_pelicula_texto/post-pelicula-texto.service';

@Component({
  selector: 'app-post-pelicula-texto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-pelicula-texto.component.html',
  styleUrls: ['./post-pelicula-texto.component.css']
})
export class PostPeliculaTextoComponent {
  peliculaTextoForm = new FormGroup({
    film_id: new FormControl<number | null>(null, [Validators.required]),
    category_id: new FormControl<number | null>(null, [Validators.required]),
    title: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    description: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(10)
    ])
  });

  constructor(private postPeliculaTextoService: PostPeliculaTextoService) {}

  onSubmit() {
    if (this.peliculaTextoForm.valid) {
      const peliculaTexto: PostPeliculaTexto = {
        film_id: Number(this.peliculaTextoForm.value.film_id),
        title: this.peliculaTextoForm.value.title || '',
        description: this.peliculaTextoForm.value.description || ''
      };

      this.postPeliculaTextoService.postPeliculaTexto(peliculaTexto).subscribe({
        next: (response) => console.log('Película texto creada:', response),
        error: (error) => {
          console.error('Error al crear la película texto:', error);
          if (error.status === 400) {
            console.error('Detalles del error:', error.error);
          }
        },
      });
    }
  }
}