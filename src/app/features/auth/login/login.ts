import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private readonly _AuthService = inject(AuthService);
  private readonly _Router = inject(Router);
  private readonly _FormBuilder = inject(FormBuilder);
  isLoading: boolean = false;
  msgSuccess: boolean = true;
  msgError: string = '';

  loginForm: FormGroup = this._FormBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.pattern(/^\w{6,}$/)]],
  });

  loginSubmit(): void {
    if (this.loginForm.valid) {
      this.isLoading = true;

      this._AuthService.setLoginForm(this.loginForm.value).subscribe({
        next: (response) => {
          console.log(response);
          if (response.message === 'success') {
            this.msgSuccess = true;
            setTimeout(() => {
              // 1. Save token to local storage
              localStorage.setItem('userToken', response.token);
              // 2. Save user data
              this._AuthService.saveUserData();
              this._Router.navigate(['/tasks']);
            }, 1000);
          }
          this.isLoading = false;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err.error.message);
          this.msgError = err.error.message;
          this.isLoading = false;
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  isFieldValid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return !!(field?.errors && (field?.touched || field?.dirty));
  }

  hasError(fieldName: string, errorType: string): boolean {
    return !!this.loginForm.get(fieldName)?.hasError(errorType);
  }
}
