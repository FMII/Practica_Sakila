import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { ResetPasswordService } from '../services/reset-password/reset-password.service';
import { ResetPassword } from '../interfaces/reset-password';
import { Router } from '@angular/router';  // Importar Router

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    resetCode: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  message: string = '';
  submitted = false;

  constructor(private resetService: ResetPasswordService, private router: Router) {}

  onSubmit() {
    this.submitted = true;

    if (this.resetForm.valid) {
      const data: ResetPassword = this.resetForm.value as ResetPassword;

      this.resetService.resetPassword(data).subscribe({
        next: (res) => {
          this.router.navigate(['/auth/login']);
        },
        error: (err) => {
          this.message = 'Error al restablecer la contraseña';
          console.error(err);
        }
      });
    } else {
      this.message = 'Por favor, completa correctamente el formulario.';
    }
  }
}