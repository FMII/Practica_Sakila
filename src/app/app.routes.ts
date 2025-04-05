import { Routes } from '@angular/router';
import { ActorComponent } from './actor/actor.component';
import { ClientesComponent } from './clientes/clientes.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { PagosComponent } from './pagos/pagos.component';
import { PersonalComponent } from './personal/personal.component';
import { RentasComponent } from './rentas/rentas.component';

// Componentes de las interfaces
import { PeliculaActorComponent } from './pelicula-actor/pelicula-actor.component';
import { PeliculaCategoriaComponent } from './pelicula-categoria/pelicula-categoria.component';
import { PeliculaTextoComponent } from './pelicula-texto/pelicula-texto.component';
import { InventarioComponent } from './inventario/inventario.component';
import { LenguajesComponent } from './lenguajes/lenguajes.component';
import { DireccionesComponent } from './direcciones/direcciones.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { TiendasComponent } from './tiendas/tiendas.component';
import { PaisesComponent } from './paises/paises.component';
import { LoginComponent } from './login/login.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashComponent } from './dash/dash.component';

import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: 'crud', component: DashComponent, canActivate: [authGuard],  // Protegemos esta ruta con authGuard
    children: [
      { path: 'actors', component: ActorComponent },
      { path: 'customers', component: ClientesComponent },
      { path: 'films', component: PeliculasComponent },
      { path: 'film_actor', component: PeliculaActorComponent },
      { path: 'film_category', component: PeliculaCategoriaComponent },
      { path: 'film_text', component: PeliculaTextoComponent },
      { path: 'inventories', component: InventarioComponent },
      { path: 'payments', component: PagosComponent },
      { path: 'rentals', component: RentasComponent },
      { path: 'staff', component: PersonalComponent },
      { path: 'language', component: LenguajesComponent },
      { path: 'adress', component: DireccionesComponent },
      { path: 'category', component: CategoriasComponent },
      { path: 'store', component: TiendasComponent },
      { path: 'country', component: PaisesComponent },
      { path: '', redirectTo: 'films', pathMatch: 'full' }, 
    ]
  },
  {
    path: 'auth', // Rutas de autenticación (sin protección)
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'verify', component: VerificationCodeComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
    ]
  },
  
  // Ruta por defecto cuando no se especifica ninguna ruta
  { path: '', redirectTo: 'crud/films', pathMatch: 'full' },

  // Ruta para cualquier path no definido
  { path: '**', redirectTo: 'crud/films' },
];
