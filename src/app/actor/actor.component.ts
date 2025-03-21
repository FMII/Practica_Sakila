import { AsyncPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Actor } from '../interfaces/actor';
import { ActorService } from '../services/actor/actor.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-actor',
  standalone: true,
  imports: [NgFor, NgxPaginationModule],
  templateUrl: './actor.component.html',
  styleUrl: './actor.component.css'
})
export class ActorComponent implements OnInit {
  actors: Actor[] = [];
  page: number = 1; // Página actual
  itemsPerPage: number = 10;

  constructor(private actorService: ActorService) {}

  ngOnInit(): void {
      this.actorService.getActors().subscribe((response: any) => {
          this.actors = response.data; // El JSON que mencionas tiene una propiedad "data"
      });
  }
}
