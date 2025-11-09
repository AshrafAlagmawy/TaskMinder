import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _HttpClient = inject(HttpClient);
  userData: any = null;

  setRegisterForm(data: object): Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signup`, data);
  }

  setLoginForm(data: object): Observable<any> {
    return this._HttpClient.post(`${environment.baseUrl}/api/v1/auth/signin`, data);
  }

  saveUserData(): void {
    if (localStorage.getItem('userToken') !== null) {
      this.userData = jwtDecode(localStorage.getItem('userToken')!);

      console.log('User Data : ', this.userData);
      console.log('User Role : ', this.userData.role);
    }
  }

  logOut(): void {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userRole');
    this.userData = null;
  }
}
