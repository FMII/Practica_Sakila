import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { ClienteService } from '../services/cliente/cliente.service';
import { DireccionService } from '../services/direccion/direccion.service';
import { TiendaService } from '../services/tienda/tienda.service';
import { Tienda } from '../interfaces/tienda';
import { Direccion } from '../interfaces/direccion';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PostClienteComponent } from '../post-cliente/post-cliente.component';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NgxPaginationModule, PostClienteComponent],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  tiendas: Tienda[] = [];

  page = 1;
  itemsPerPage = 10;
  direcciones: Direccion[] = [];

  formVisible = false;
  isEditing = false;

  clienteForm: Partial<Cliente> = {
    customer_id: undefined,
    first_name: '',
    last_name: '',
    email: '',
    active: true,
    address_id: 0,
    store_id: 0
  };

  constructor(
    private clienteService: ClienteService,
    private direccionService: DireccionService,
    private tiendaService: TiendaService
  ) {}
  
  getTiendas(): void {
    this.tiendaService.getTiendas().subscribe(res => {
      this.tiendas = res.data;
    });
  }
  
  ngOnInit(): void {
    this.getClientes();
    this.getDirecciones();
    this.getTiendas(); // 👈
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
  
  
  getDirecciones(): void {
    this.direccionService.getDirecciones().subscribe(res => {
      this.direcciones = res.data;
    });
  }
  

  getClientes(): void {
    this.clienteService.getClients().subscribe(res => {
      this.clientes = res.data;
    });
  }

  showCreateForm(): void {
    this.formVisible = true;
    this.isEditing = false;
    this.clienteForm = {
      first_name: '',
      last_name: '',
      email: '',
      active: true,
      address_id: 0,
      store_id: 0
    };
  }

  showEditForm(id: number): void {
    this.clienteService.getClientById(id).subscribe(cliente => {
      this.clienteForm = { ...cliente.data };
      this.formVisible = true;
      this.isEditing = true;
    });
  }

  saveCliente(): void {
    if (this.isEditing && this.clienteForm.customer_id) {
      this.clienteService.updateClient(this.clienteForm.customer_id, this.clienteForm).subscribe(() => {
        this.cancelForm();
        this.getClientes();
      });
    } else {
      this.clienteService.createClient(this.clienteForm).subscribe(() => {
        this.cancelForm();
        this.getClientes();
      });
    }
  }

  deleteCliente(id: number): void {
    if (confirm('¿Seguro que deseas eliminar este cliente?')) {
      this.clienteService.deleteClient(id).subscribe(() => this.getClientes());
    }
  }

  cancelForm(): void {
    this.formVisible = false;
    this.isEditing = false;
    this.clienteForm = {
      first_name: '',
      last_name: '',
      email: '',
      active: true,
      address_id: 0,
      store_id: 0
    };
  }
}
