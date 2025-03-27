import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { createPelicula } from '../interfaces/postPelicula';
import { PostPeliculaService } from '../services/postPelicula/post-pelicula.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-post-pelicula',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './post-pelicula.component.html',
  styleUrls: ['./post-pelicula.component.css'],
})

export class PostPeliculaComponent {
  peliculaForm = new FormGroup({
    title: new FormControl<string>('', [Validators.required]),
    language_id: new FormControl<number | null>(null, [Validators.required]),
    rental_duration: new FormControl<number | null>(null, [Validators.required]),
    rental_rate: new FormControl<string>('', [Validators.required]),
    replacement_cost: new FormControl<string>('', [Validators.required]),
    special_features: new FormControl<string>('', [Validators.required]),
  });

  constructor(private postPeliculaService: PostPeliculaService) {}

  onSubmit() {
    if (this.peliculaForm.valid) {
      const pelicula: createPelicula = {
        ...this.peliculaForm.value,
        language_id: Number(this.peliculaForm.value.language_id),
        rental_duration: Number(this.peliculaForm.value.rental_duration),
      } as createPelicula;

      this.postPeliculaService.createPelicula(pelicula).subscribe({
        next: (response) => console.log('Película creada:', response),
        error: (error) => console.error('Error al crear la película:', error),
      });
    }
  }
}