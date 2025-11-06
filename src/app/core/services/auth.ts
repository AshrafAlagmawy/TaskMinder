import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _HttpClient = inject(HttpClient);
  private readonly _Router = inject(Router);
  userData: any = null;

  setRegisterForm(data: object): Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signup`, data);
  }

  setLoginForm(data: object): Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signin`, data);
  }

  saveUserData(): void {
    if (localStorage.getItem('userToken') !== null) {
      this.userData = localStorage.getItem('userToken');

      console.log('User Data : ', this.userData);
    }
  }

  logOut(): void {
    localStorage.removeItem('userToken');
    this.userData = null;
    this._Router.navigate(['login']);
  }
}
