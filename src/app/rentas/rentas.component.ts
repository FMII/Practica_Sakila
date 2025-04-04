import { Component, OnInit } from '@angular/core';
import { Renta } from '../interfaces/renta';
import { RentasService } from '../services/rentas/rentas.service';
import { NgFor, NgIf ,DatePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PostRentalComponent } from '../post-rentas/post-rentas.component';

@Component({
  selector: 'app-rentas',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NgxPaginationModule,DatePipe, PostRentalComponent],
  templateUrl: './rentas.component.html',
  styleUrl: './rentas.component.css'
})
export class RentasComponent implements OnInit {
  rentas: Renta[] = [];
  page = 1;
  itemsPerPage = 10;

  formVisible = false;
  isEditing = false;
  currentId = 0;

  form: Partial<Renta> = {
    inventory_id: 0,
    customer_id: 0,
    staff_id: 0,
    rental_date: new Date().toISOString(),
    return_date: ''
  };

  constructor(private service: RentasService) {}

  ngOnInit(): void {
    this.getRentas();
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

  getRentas(): void {
    this.service.getRental().subscribe(res => {
      this.rentas = res.data;
    });
  }

  showCreateForm(): void {
    this.formVisible = true;
    this.isEditing = false;
    this.form = {
      inventory_id: 0,
      customer_id: 0,
      staff_id: 0,
      rental_date: new Date().toISOString(),
      return_date: ''
    };
  }

  showEditForm(id: number): void {
    this.currentId = id;
    this.service.getById(id).subscribe(renta => {
      this.form = { ...renta.data };
      this.formVisible = true;
      this.isEditing = true;
    });
  }

  save(): void {
    if (this.isEditing && this.currentId) {
      this.service.update(this.currentId, this.form).subscribe(() => {
        this.cancel();
        this.getRentas();
      });
    } else {
      this.service.create(this.form).subscribe(() => {
        this.cancel();
        this.getRentas();
      });
    }
  }

  delete(id: number): void {
    if (confirm('¿Eliminar esta renta?')) {
      this.service.delete(id).subscribe(() => this.getRentas());
    }
  }

  cancel(): void {
    this.formVisible = false;
    this.isEditing = false;
    this.form = {
      inventory_id: 0,
      customer_id: 0,
      staff_id: 0,
      rental_date: new Date().toISOString(),
      return_date: ''
    };
  }
}
