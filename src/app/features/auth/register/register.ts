import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private readonly _AuthService = inject(AuthService);
  private readonly _FormBuilder = inject(FormBuilder);
  private readonly _Router = inject(Router);
  isLoading: boolean = false;
  msgSuccess: boolean = false;
  msgError: string = '';

  registerForm: FormGroup = this._FormBuilder.group({
    name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    email: [null, [Validators.required, Validators.email]],
    password: [
      null,
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        Validators.pattern(/^\w{6,}$/),
      ],
    ],
    phone: [null, [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/)]],
    rePassword: [null],
  });

  registerSubmit(): void {
    if (this.registerForm.valid) {
      this.isLoading = true;

      this._AuthService.setRegisterForm(this.registerForm.value).subscribe({
        next: (response) => {
          console.log(response);

          if (response.message === 'success') {
            this.msgSuccess = true;
            setTimeout(() => {
              this._Router.navigate(['/login']);
            }, 1000);
          }
          this.isLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.message);
          this.msgError = err.error.message;
          this.isLoading = false;
        },
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  isFieldValid(fieldName: string): boolean {
    const field = this.registerForm.get(fieldName);
    return !!(field?.errors && (field?.touched || field?.dirty));
  }

  hasError(fieldName: string, errorType: string): boolean {
    return !!this.registerForm.get(fieldName)?.hasError(errorType);
  }
}
