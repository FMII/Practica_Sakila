import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { VerificationCodeService } from '../services/verification-code/verification-code.service';
import { VerificationCode } from '../interfaces/verification-code';

@Component({
  selector: 'app-verification-code',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass],
  templateUrl: './verification-code.component.html',
  styleUrl: './verification-code.component.css'
})
export class VerificationCodeComponent {
  codeForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    code: new FormControl('', [Validators.required])
  });

  submitted: boolean = false;
  message: string = '';

  constructor(private verificationService: VerificationCodeService) {}

  onSubmit() {
    this.submitted = true;
    if (this.codeForm.valid) {
      const data: VerificationCode = this.codeForm.value as VerificationCode;
      this.verificationService.verifyCode(data).subscribe({
        next: (res) => {
          this.message = '¡Código verificado con éxito!';
          console.log(res);
        },
        error: (err) => {
          this.message = 'Error al verificar el código';
          console.error(err);
        }
      });
    }
  }
}