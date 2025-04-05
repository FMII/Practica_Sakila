import { Component ,} from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { PostClienteService } from '../services/postCliente/post-cliente.service';
import { createCliente } from '../interfaces/post-cliente';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-post-cliente',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './post-cliente.component.html',
  styleUrls: ['./post-cliente.component.css']
})
export class PostClienteComponent {
  clienteForm = new FormGroup({
    store_id: new FormControl<number | null>(null, [Validators.required]),
    first_name: new FormControl<string>('', [Validators.required]),
    last_name: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    address_id: new FormControl<number | null>(null, [Validators.required])
  });

  constructor(private postClienteService: PostClienteService) {}

  onSubmit() {
    if (this.clienteForm.valid) {
      const cliente: createCliente = {
        ...this.clienteForm.value
      } as createCliente;

      this.postClienteService.createCliente(cliente).subscribe({
        next: (response) => console.log('Cliente creado:', response),
        error: (error) => console.error('Error al crear el cliente:', error),
      });
    } else {
      console.error('Formulario no válido');
    }
  }
}
