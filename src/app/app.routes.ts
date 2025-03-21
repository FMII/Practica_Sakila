import { Routes } from '@angular/router';
import { ActorComponent } from './actor/actor.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PagosComponent } from './pagos/pagos.component';
import { PersonalComponent } from './personal/personal.component';
import { RentasComponent } from './rentas/rentas.component';

// Para estas interfaces probablemente ya creaste componentes visuales
import { PeliculaActorComponent } from './pelicula-actor/pelicula-actor.component';
import { PeliculaCategoriaComponent } from './pelicula-categoria/pelicula-categoria.component';
import { PeliculaTextoComponent } from './pelicula-texto/pelicula-texto.component';
import { InventarioComponent } from './inventario/inventario.component';

export const routes: Routes = [
  { path: 'crud/actors', component: ActorComponent },
  { path: 'crud/customers', component: ClientesComponent },
  { path: 'crud/films', component: PeliculasComponent },
  { path: 'crud/film_actor', component: PeliculaActorComponent },
  { path: 'crud/film_category', component: PeliculaCategoriaComponent },
  { path: 'crud/film_text', component: PeliculaTextoComponent },
  { path: 'crud/inventories', component: InventarioComponent },
  { path: 'crud/payments', component: PagosComponent },
  { path: 'crud/rentals', component: RentasComponent },
  { path: 'crud/staff', component: PersonalComponent },

  // Ruta por defecto
  { path: '', redirectTo: 'crud/films', pathMatch: 'full' },

  // Ruta para cualquier path no definido
  { path: '**', redirectTo: 'crud/films' }
];
