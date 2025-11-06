import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../../core/services/auth';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  private readonly _AuthService = inject(AuthService);

  logOut(): void {
    this._AuthService.logOut();
  }
}
