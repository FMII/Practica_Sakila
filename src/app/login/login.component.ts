import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Login } from '../interfaces/login';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';  // Importar Router
import { NgClass, NgIf } from '@angular/common';
import { PasswordResetCodeService } from '../services/password-reset-code/password-reset-code.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Corregir la propiedad aquí, debe ser styleUrls no styleUrl
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  errorMessage: string = ''; // Variable para manejar el mensaje de error

  constructor(private authService: LoginService, private router: Router, private passwordResetCode : PasswordResetCodeService) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const data: Login = this.loginForm.value as Login;
      this.authService.login(data).subscribe({
        next: (res) => {
          // Redirigir a la página de verificación
          this.router.navigate(['/auth/verify']);
        },
        error: (err) => {
          // Asignar mensaje de error en caso de fallo en el login
          this.errorMessage = 'Error en el inicio de sesión. Intenta de nuevo.';
          console.error('Error en login:', err);
        },
      });
    }
  }

  recuperarContrasena(){
    if (this.loginForm.valid) {
      const data: Login = this.loginForm.value as Login;
      this.passwordResetCode.sendResetCode(data).subscribe({
        next: (res) => {
          // Redirigir a la página de verificación
          this.router.navigate(['/auth/reset-password']);
        },
        error: (err) => {
          // Asignar mensaje de error en caso de fallo en el login
          this.errorMessage = 'Error en el solicitar cambio de contraseña.';
          console.error('Error en login:', err);
        },
      });
    }
  }
}
