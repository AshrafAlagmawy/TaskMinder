import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private readonly _FormBuilder = inject(FormBuilder);
  isLoading: boolean = false;

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
    rePassword: [null],
  });

  isFieldValid(fieldName: string): boolean {
    const field = this.registerForm.get(fieldName);
    return !!(field?.errors && (field?.touched || field?.dirty));
  }

  hasError(fieldName: string, errorType: string): boolean {
    return !!this.registerForm.get(fieldName)?.hasError(errorType);
  }
}
