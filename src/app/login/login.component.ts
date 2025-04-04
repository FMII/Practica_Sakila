import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Login } from '../interfaces/login';
import { LoginService } from '../services/login/login.service';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf, NgClass],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authService: LoginService) {}

  onSubmit() {
    if (this.loginForm.valid) {
      const data: Login = this.loginForm.value as Login;
      this.authService.login(data).subscribe({
        next: (res) => {
          console.log('Login exitoso', res);
          // Guardar token, redirigir, etc.
        },
        error: (err) => {
          console.error('Error en login:', err);
        },
      });
    }
  }
}