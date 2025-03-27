import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { PostPagosService } from '../services/post_pagos/post-pagos.service';
import { PostPagos } from '../interfaces/post-pagos';
@Component({
  selector: 'app-post-pago',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-pagos.component.html',
  styleUrls: ['./post-pagos.component.css'],
})
export class PostPagoComponent {
  pagoForm = new FormGroup({
    customer_id: new FormControl<number | null>(null, [Validators.required]),
    staff_id: new FormControl<number | null>(null, [Validators.required]),
    rental_id: new FormControl<number | null>(null, [Validators.required]),
    amount: new FormControl<number | null>(null, [Validators.required, Validators.min(0)]),
    payment_date: new FormControl<string>('', [Validators.required])
  });

  constructor(private postPagoService: PostPagosService) {}

  onSubmit() {
    if (this.pagoForm.valid) {
      const pago: PostPagos = {
        ...this.pagoForm.value,
        payment_date: new Date(this.pagoForm.value.payment_date!).toISOString(),
        customer_id: Number(this.pagoForm.value.customer_id),
        staff_id: Number(this.pagoForm.value.staff_id),
        rental_id: Number(this.pagoForm.value.rental_id),
        amount: Number(this.pagoForm.value.amount)
      } as PostPagos;
  
      this.postPagoService.createPago(pago).subscribe({
        next: (response) => console.log('Pago registrado:', response),
        error: (error) => console.error('Error al registrar el pago:', error),
      });
    }
  }
  
}
