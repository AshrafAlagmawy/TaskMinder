import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-role',
  imports: [TranslateModule, FormsModule],
  templateUrl: './user-role.html',
  styleUrl: './user-role.scss',
})
export class UserRole {
  constructor(private translate: TranslateService) {}
  showModal = signal<boolean>(true);
  role: string = '';

  openModal(): void {
    this.showModal.set(true);
  }
  closeModal(): void {
    this.showModal.set(false);
  }

  saveUserRoleToLocalStorage(): void {
    console.log('Testing save user data');

    if (this.role && this.role.trim()) {
      localStorage.setItem('userRole', this.role);
      console.log(localStorage.getItem('userRole'));
      this.closeModal();
    }
  }
}
