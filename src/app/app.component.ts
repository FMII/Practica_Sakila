import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PostPeliculaComponent } from './post-pelicula/post-pelicula.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PostClienteComponent } from "./post-cliente/post-cliente.component";
import { PostRentalComponent } from './post-rentas/post-rentas.component';
import { PostPagoComponent } from './post-pagos/post-pagos.component';
import { PostPeliculaActorComponent } from './post-pelicula-actor/post-pelicula-actor.component';
import { PostPeliculaCategoriaComponent } from './post-pelicula-categoria/post-pelicula-categoria.component';
import { PeliculasComponent } from "./peliculas/peliculas.component";
import { ActorComponent } from "./actor/actor.component";
import { PostPeliculaTextoComponent } from './post-pelicula-texto/post-pelicula-texto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NavbarComponent, NgxPaginationModule, PostPeliculaComponent, ClientesComponent, PostClienteComponent, PostRentalComponent, PostPagoComponent, PostPeliculaActorComponent, PostPeliculaCategoriaComponent, PeliculasComponent, ActorComponent, PostPeliculaTextoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cine_Practica_Eliasib';
}
