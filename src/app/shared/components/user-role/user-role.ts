import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-role',
  imports: [FormsModule],
  templateUrl: './user-role.html',
  styleUrl: './user-role.scss',
})
export class UserRole {
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
