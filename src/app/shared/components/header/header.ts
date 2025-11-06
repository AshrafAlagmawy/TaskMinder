import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBar } from '../search-bar/search-bar';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/services/auth';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SearchBar, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly _AuthService = inject(AuthService);

  showMenu = false;

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  logOut(): void {
    this._AuthService.logOut();
  }
}
