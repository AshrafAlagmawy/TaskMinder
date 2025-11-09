import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { Header } from '../../shared/components/header/header';
import { Sidebar } from '../../shared/components/sidebar/sidebar';
import { UserRole } from '../../shared/components/user-role/user-role';

@Component({
  selector: 'app-main-layout',
  imports: [RouterOutlet, Header, Sidebar, UserRole],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {
  showUserRole(): boolean {
    if (localStorage.getItem('userToken') === null || localStorage.getItem('userRole') === null) {
      return true;
    }
    return false;
  }
}
