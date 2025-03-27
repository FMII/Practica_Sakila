import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostPeliculaActorService } from '../services/post_pelicula_actor/post-pelicula-actor.service';
import { PostPeliculaActor } from '../interfaces/post-pelicula-actor';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-post-pelicula-actor',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './post-pelicula-actor.component.html',
  styleUrl: './post-pelicula-actor.component.css'
})
export class PostPeliculaActorComponent {
  film_id: number | null = null;
  actor_id: number | null = null;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private postPeliculaActorService: PostPeliculaActorService) {}

  addActorToFilm(): void {
    if (this.film_id && this.actor_id) {
      const data: PostPeliculaActor = {
        film_id: this.film_id,
        actor_id: this.actor_id
      };

      this.postPeliculaActorService.postPeliculaActor(data).subscribe(
        response => {
          this.successMessage = 'Actor agregado a la película exitosamente.';
          this.errorMessage = '';
        },
        error => {
          this.errorMessage = 'Error al agregar el actor a la película.';
          this.successMessage = '';
          console.error(error);
        }
      );
    } else {
      this.errorMessage = 'Por favor, completa todos los campos.';
      this.successMessage = '';
    }
  }
}