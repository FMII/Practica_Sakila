import { Component, OnInit } from '@angular/core';
import { Personal } from '../interfaces/personal';
import { PersonalService } from '../services/personal/personal.service';
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
    password: ''
  };

  constructor(private service: PersonalService) {}

  ngOnInit(): void {
    this.loadStaff();
  }

  loadStaff(): void {
    this.service.getStaff().subscribe(res => {
      this.personal = res.data;
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
      password: ''
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
        password: p.data.password
      };
      this.formVisible = true;
      this.isEditing = true;
    });
  }

  save(): void {
    if (this.isEditing && this.currentId) {
      this.service.update(this.currentId, this.form).subscribe(() => {
        this.cancel();
        this.loadStaff();
      });
    } else {
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
      password: ''
    };
  }
}
