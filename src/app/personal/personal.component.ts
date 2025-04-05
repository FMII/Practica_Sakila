import { Component, OnInit } from '@angular/core';
import { Personal } from '../interfaces/personal';
import { PersonalService } from '../services/personal/personal.service';
import { RoleService } from '../services/role.service';
import { RolesResponse } from '../interfaces/role';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NgxPaginationModule],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent implements OnInit {
  personal: Personal[] = [];
  roles: RolesResponse | null = null; // Variable para almacenar los roles
  page = 1;
  itemsPerPage = 10;

  formVisible = false;
  isEditing = false;
  currentId = 0;

  form: Partial<Personal> = {
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    store_id: 0,
    address_id: 0,
    active: true,
    password: '',
    roleId: 0 
  };

  constructor(private service: PersonalService, private roleService: RoleService) {}

  ngOnInit(): void {
    this.loadStaff();
    this.getUserRole();
    this.loadRoles(); // Cargar los roles al iniciar
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

  loadStaff(): void {
    this.service.getStaff().subscribe(res => {
      this.personal = res.data;
    });
  }

  // Método para cargar los roles desde el servicio
  loadRoles(): void {
    this.roleService.getRoles().subscribe((res: RolesResponse) => {
      this.roles = res; 
      console.log('Roles cargados: ', this.roles);
    });
  }

  showCreateForm(): void {
    this.formVisible = true;
    this.isEditing = false;
    this.form = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      store_id: 0,
      address_id: 0,
      active: true,
      password: '',
      roleId: 0 
    };
  }

  showEditForm(id: number): void {
    this.currentId = id;
    this.service.getById(id).subscribe(p => {
      this.form = {
        first_name: p.data.first_name,
        last_name: p.data.last_name,
        email: p.data.email,
        username: p.data.username,
        store_id: p.data.store_id,
        address_id: p.data.address_id,
        active: p.data.active,
        password: p.data.password,
        roleId: p.data.roleId 
      };
      this.formVisible = true;
      this.isEditing = true;
    });
  }

  save(): void {
    
    if (this.isEditing && this.currentId) {
      this.form.roleId = Number(this.form.roleId)
      this.service.update(this.currentId, this.form).subscribe(() => {
        this.cancel();
        this.loadStaff();
      });
    } else {
      this.form.roleId = Number(this.form.roleId)
      this.service.create(this.form).subscribe(() => {
        this.cancel();
        this.loadStaff();
      });
    }
  }

  delete(id: number): void {
    if (confirm('¿Eliminar este empleado?')) {
      this.service.delete(id).subscribe(() => this.loadStaff());
    }
  }

  cancel(): void {
    this.formVisible = false;
    this.isEditing = false;
    this.form = {
      first_name: '',
      last_name: '',
      email: '',
      username: '',
      store_id: 0,
      address_id: 0,
      active: true,
      password: '',
      roleId: 0 // Inicializar roleId al cancelar
    };
  }
}
