import { Component, OnInit } from '@angular/core';
import { PeliculaActor } from '../interfaces/pelicula-actor';
import { PeliculaActorService } from '../services/pelicula_actor/pelicula-actor.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActorService } from '../services/actor/actor.service';
import { Actor } from '../interfaces/actor';
import { PeliculaService } from '../services/pelicula/pelicula.service';
import { Pelicula } from '../interfaces/pelicula';

@Component({
  selector: 'app-pelicula-actor',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NgxPaginationModule],
  templateUrl: './pelicula-actor.component.html',
  styleUrl: './pelicula-actor.component.css'
})
export class PeliculaActorComponent implements OnInit {
  relaciones: PeliculaActor[] = [];
  actores: Actor[] = [];
peliculas: Pelicula[] = [];

  page = 1;
  itemsPerPage = 10;

  formVisible = false;
  isEditing = false;

  form: Partial<PeliculaActor> = {
    actor_id: 0,
    film_id: 0
  };

  selectedIds = { actor_id: 0, film_id: 0 };

  constructor(
    private service: PeliculaActorService,
    private actorService: ActorService,
    private peliculaService: PeliculaService
  ) {}
  

  ngOnInit(): void {
    this.loadRelaciones();
    this.loadActores();
    this.loadPeliculas();
  }
  
  loadActores(): void {
    this.actorService.getActors().subscribe(res => {
      this.actores = res.data;
    });
  }
  
  loadPeliculas(): void {
    this.peliculaService.getFilms().subscribe(res => {
      this.peliculas = res.data;
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
    this.form = { actor_id: 0, film_id: 0 };
  }

  showEditForm(rel: PeliculaActor): void {
    this.selectedIds = { actor_id: rel.actor_id, film_id: rel.film_id };
    this.form = {
      actor_id: rel.actor_id,
      film_id: rel.film_id
    };
    this.formVisible = true;
    this.isEditing = true;
  }

  save(): void {
    if (this.isEditing) {
      const { actor_id, film_id } = this.selectedIds;
      this.service.update(actor_id, film_id, this.form).subscribe(() => {
        this.cancel();
        this.loadRelaciones();
      });
    } else {
      this.service.create(this.form).subscribe(() => {
        this.cancel();
        this.loadRelaciones();
      });
    }
  }

  delete(actor_id: number, film_id: number): void {
    if (confirm('¿Eliminar relación?')) {
      this.service.delete(actor_id, film_id).subscribe(() => this.loadRelaciones());
    }
  }

  cancel(): void {
    this.formVisible = false;
    this.isEditing = false;
    this.form = { actor_id: 0, film_id: 0 };
  }
}
