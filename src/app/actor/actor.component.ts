import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Actor } from '../interfaces/actor';
import { ActorService } from '../services/actor/actor.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-actor',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NgxPaginationModule],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.css'
})
export class ActorComponent implements OnInit {
  actors: Actor[] = [];
  page: number = 1;
  itemsPerPage: number = 10;

  formVisible = false;
  isEditing = false;

  actorForm: Partial<Actor> = {
    actor_id: undefined,
    first_name: '',
    last_name: ''
  };

  constructor(private actorService: ActorService) {}

  ngOnInit(): void {
    this.getActors();
  }

  // Cargar todos los actores
  getActors(): void {
    this.actorService.getActors().subscribe((res) => {
      this.actors = res.data;
    });
  }

  // Mostrar formulario para crear
  showCreateForm(): void {
    this.formVisible = true;
    this.isEditing = false;
    this.actorForm = {
      first_name: '',
      last_name: ''
    };
  }

  // Mostrar formulario para editar
  showEditForm(id: number): void {
    this.actorService.getActorById(id).subscribe((actor) => {
      this.actorForm = { ...actor.data };
      this.formVisible = true;
      this.isEditing = true;
    });
  }

  // Guardar actor (crear o actualizar)
  saveActor(): void {
    if (this.isEditing && this.actorForm.actor_id) {
      this.actorService.updateActor(this.actorForm.actor_id, this.actorForm).subscribe(() => {
        console.log('Actor actualizado');
        this.cancelForm();
        this.getActors();
      });
    } else {
      this.actorService.createActor(this.actorForm).subscribe(() => {
        console.log('Actor creado');
        this.cancelForm();
        this.getActors();
      });
    }
  }

  // Eliminar actor
  deleteActor(id: number): void {
    if (confirm('¿Estás seguro de eliminar este actor?')) {
      this.actorService.deleteActor(id).subscribe(() => this.getActors());
    }
  }

  // Cancelar formulario y limpiar
  cancelForm(): void {
    this.formVisible = false;
    this.isEditing = false;
    this.actorForm = {
      first_name: '',
      last_name: ''
    };
  }
}
