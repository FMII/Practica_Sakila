import { Component, OnInit } from '@angular/core';
import { Cliente } from '../interfaces/cliente';
import { ClienteService } from '../services/cliente/cliente.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NgxPaginationModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent implements OnInit {
  clientes: Cliente[] = [];
  page = 1;
  itemsPerPage = 10;

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

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.getClientes();
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
      this.clienteForm = { ...cliente };
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
