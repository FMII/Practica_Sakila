import { Component, OnInit } from '@angular/core';
import { Inventario } from '../interfaces/inventario';
import { InventarioService } from '../services/inventario/inventario.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NgxPaginationModule],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent implements OnInit {
  inventarios: Inventario[] = [];
  page = 1;
  itemsPerPage = 10;

  formVisible = false;
  isEditing = false;
  currentId = 0;

  form: Partial<Inventario> = {
    film_id: 0,
    store_id: 0
  };

  constructor(private service: InventarioService) {}

  ngOnInit(): void {
    this.loadInventarios();
    this.getUserRole(); 
  }

  userRole: string | null = '';  // Variable para almacenar el rol del usuario
  isAdmin: boolean = false;
  isClient: boolean = false;
  isGuest: boolean = false;

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
    if (this.userRole === 'Administrador') {
      this.isAdmin = true;
    } else if (this.userRole === 'Cliente') {
      this.isClient = true;
    } else if (this.userRole === 'Invitado') {
      this.isGuest = true;
    }
  }

  loadInventarios(): void {
    this.service.getInventory().subscribe(res => {
      this.inventarios = res.data;
    });
  }

  showCreateForm(): void {
    this.formVisible = true;
    this.isEditing = false;
    this.form = { film_id: 0, store_id: 0 };
  }

  showEditForm(id: number): void {
    this.currentId = id;
    this.service.getById(id).subscribe(inv => {
      this.form = {
        film_id: inv.data.film_id,
        store_id: inv.data.store_id
      };
      this.formVisible = true;
      this.isEditing = true;
    });
  }

  save(): void {
    if (this.isEditing && this.currentId) {
      this.service.update(this.currentId, this.form).subscribe(() => {
        this.cancel();
        this.loadInventarios();
      });
    } else {
      this.service.create(this.form).subscribe(() => {
        this.cancel();
        this.loadInventarios();
      });
    }
  }

  delete(id: number): void {
    if (confirm('¿Eliminar inventario?')) {
      this.service.delete(id).subscribe(() => this.loadInventarios());
    }
  }

  cancel(): void {
    this.formVisible = false;
    this.isEditing = false;
    this.form = { film_id: 0, store_id: 0 };
  }
}
