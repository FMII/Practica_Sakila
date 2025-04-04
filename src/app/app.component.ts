import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NgxPaginationModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cine_Practica_Eliasib';
}
