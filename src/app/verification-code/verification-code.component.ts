import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { VerificationCodeService } from '../services/verification-code/verification-code.service';
import { VerificationCode } from '../interfaces/verification-code';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-verification-code',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.css']
})
export class VerificationCodeComponent {
  codeForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    code: new FormControl('', [Validators.required])
  });

  submitted: boolean = false;
  message: string = '';
  errorMessage: string = ''; // Variable para manejar el mensaje de error

  constructor(private verificationService: VerificationCodeService, private router: Router) {}

  onSubmit() {
    this.submitted = true;
    if (this.codeForm.valid) {
      const data: VerificationCode = this.codeForm.value as VerificationCode;
      this.verificationService.verifyCode(data).subscribe({
        next: (res) => {
          const token = res.token; 
          const role = res.role; 

          localStorage.setItem('token', token);
          localStorage.setItem('role', role);

          this.message = '¡Código verificado con éxito!';
          this.router.navigate(['crud']);
          console.log('Token:', token, 'Role:', role);
        },
        error: (err) => {
          this.errorMessage = 'Error al verificar el código';
          console.error('Error al verificar el código:', err);
        }
      });
    }
  }
}
