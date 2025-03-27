import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { PostPeliculaCategoria } from '../interfaces/post-pelicula-categoria';
import { PostPeliculaCategoriaService } from '../services/post_pelicula_categoria/post-pelicula-categoria.service';
@Component({
  selector: 'app-post-pelicula-categoria',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-pelicula-categoria.component.html',
  styleUrls: ['./post-pelicula-categoria.component.css']
})
export class PostPeliculaCategoriaComponent {

  peliculaCategoriaForm = new FormGroup({
    film_id: new FormControl<number | null>(null, [Validators.required]),
    category_id: new FormControl<number | null>(null, [Validators.required]),
  });

  constructor(private postPeliculaCategoriaService: PostPeliculaCategoriaService) {}

  onSubmit() {
    if (this.peliculaCategoriaForm.valid) {
      const peliculaCategoria: PostPeliculaCategoria = {
        ...this.peliculaCategoriaForm.value,
        film_id: Number(this.peliculaCategoriaForm.value.film_id),
        category_id: Number(this.peliculaCategoriaForm.value.category_id),
      } as PostPeliculaCategoria;

      this.postPeliculaCategoriaService.postPeliculaCategoria(peliculaCategoria).subscribe({
        next: (response) => {
          console.log('Categoría de película registrada:', response);
        },
        error: (error) => {
          console.error('Error al registrar la categoría de película:', error);
        },
      });
    }
  }
}