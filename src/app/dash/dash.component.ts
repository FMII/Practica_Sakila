import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-dash',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NavbarComponent, NgxPaginationModule],
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']  // Corregir el nombre de la propiedad 'styleUrls' en vez de 'styleUrl'
})
export class DashComponent implements OnInit {
  userRole: string | null = '';  // Variable para almacenar el rol del usuario
  isAdmin: boolean = false;
  isClient: boolean = false;
  isGuest: boolean = false;

  ngOnInit(): void {
    this.getUserRole();  // Llamar al método para obtener el rol al iniciar el componente
  }

  // Método para obtener el rol desde localStorage
  getUserRole(): void {
    const role = localStorage.getItem('role');  // Asegúrate de que el rol se guarda bajo la clave 'role'
    if (role) {
      this.userRole = role;
      this.checkRole();
    } else {
      console.error('No se encontró el rol en localStorage.');
    }
  }

  // Método para establecer los roles booleanos
  checkRole(): void {
    if (this.userRole === 'admin') {
      this.isAdmin = true;
    } else if (this.userRole === 'client') {
      this.isClient = true;
    } else if (this.userRole === 'guest') {
      this.isGuest = true;
    }
  }
}
