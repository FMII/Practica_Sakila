import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { PostRentasService } from '../services/post_rentas/post-rentas.service';
import { PostRentas } from '../interfaces/post-rentas';

@Component({
  selector: 'app-post-rental',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './post-rentas.component.html',
  styleUrls: ['./post-rentas.component.css'],
})

export class PostRentalComponent {
  rentalForm = new FormGroup({
    rental_date: new FormControl<string>('', [Validators.required]),
    inventory_id: new FormControl<number | null>(null, [Validators.required]),
    customer_id: new FormControl<number | null>(null, [Validators.required]),
    return_date: new FormControl<string>('', [Validators.required]),
    staff_id: new FormControl<number | null>(null, [Validators.required])
  });

  constructor(private postRentasService: PostRentasService) {}

  onSubmit() {
    if (this.rentalForm.valid) {
      const renta: PostRentas = {
        ...this.rentalForm.value,
        rental_date: new Date(this.rentalForm.value.rental_date!).toISOString(),
        return_date: new Date(this.rentalForm.value.return_date!).toISOString(),
        inventory_id: Number(this.rentalForm.value.inventory_id),
        customer_id: Number(this.rentalForm.value.customer_id),
        staff_id: Number(this.rentalForm.value.staff_id)
      } as PostRentas;
  
      this.postRentasService.createRenta(renta).subscribe({
        next: (response) => console.log('✅ Renta creada exitosamente:', response),
        error: (error) => console.error('❌ Error al crear la renta:', error.error),
      });
    } else {
      console.warn('⚠️ El formulario no es válido.');
    }
  }  
}