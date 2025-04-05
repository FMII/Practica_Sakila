import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { PasswordResetCodeService } from '../services/password-reset-code/password-reset-code.service';
import { PasswordResetCode } from '../interfaces/password-reset-code';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-password-reset-code',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './password-reset-code.component.html',
  styleUrl: './password-reset-code.component.css'
})
export class PasswordResetCodeComponent {
  resetForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  message: string = '';

  constructor(private resetService: PasswordResetCodeService) {}

  onSubmit(): void {
    if (this.resetForm.valid) {
      const data: PasswordResetCode = this.resetForm.value as PasswordResetCode;
      this.resetService.sendResetCode(data).subscribe({
        next: () => {
          this.message = 'Código de reseteo enviado correctamente.';
        },
        error: (err) => {
          console.error(err);
          this.message = 'Hubo un error al enviar el código.';
        }
      });
    }
  }
}