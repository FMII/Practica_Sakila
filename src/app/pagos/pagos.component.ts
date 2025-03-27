import { Component, OnInit } from '@angular/core';
import { Pago } from '../interfaces/pago';
import { PagosService } from '../services/pagos/pagos.service';
import { NgFor, NgIf ,DatePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { PostPagoComponent } from '../post-pagos/post-pagos.component';

@Component({
  selector: 'app-pagos',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, NgxPaginationModule,DatePipe, PostPagoComponent],
  templateUrl: './pagos.component.html',
  styleUrl: './pagos.component.css'
})
export class PagosComponent implements OnInit {
  pagos: Pago[] = [];
  page = 1;
  itemsPerPage = 10;

  formVisible = false;
  isEditing = false;
  pagoId = 0;

  form: Partial<Pago> = {
    customer_id: 0,
    staff_id: 0,
    rental_id: 0,
    amount: '',
    payment_date: new Date().toISOString()
  };

  constructor(private service: PagosService) {}

  ngOnInit(): void {
    this.getPagos();
  }

  getPagos(): void {
    this.service.getPayment().subscribe(res => {
      this.pagos = res.data;
    });
  }

  showCreateForm(): void {
    this.formVisible = true;
    this.isEditing = false;
    this.form = {
      customer_id: 0,
      staff_id: 0,
      rental_id: 0,
      amount: '',
      payment_date: new Date().toISOString()
    };
  }

  showEditForm(id: number): void {
    this.pagoId = id;
    this.service.getById(id).subscribe(pago => {
      this.form = { ...pago.data };
      this.formVisible = true;
      this.isEditing = true;
    });
  }

  save(): void {
    if (this.isEditing && this.pagoId) {
      this.service.update(this.pagoId, this.form).subscribe(() => {
        this.cancel();
        this.getPagos();
      });
    } else {
      this.service.create(this.form).subscribe(() => {
        this.cancel();
        this.getPagos();
      });
    }
  }

  delete(id: number): void {
    if (confirm('¿Eliminar este pago?')) {
      this.service.delete(id).subscribe(() => this.getPagos());
    }
  }

  cancel(): void {
    this.formVisible = false;
    this.isEditing = false;
    this.form = {
      customer_id: 0,
      staff_id: 0,
      rental_id: 0,
      amount: '',
      payment_date: new Date().toISOString()
    };
  }
}
