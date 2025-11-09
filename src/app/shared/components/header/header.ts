import { Component, HostListener, ElementRef, inject, signal } from '@angular/core';
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
  private elementRef = inject(ElementRef<HTMLElement>);

  showMenu = signal<boolean>(false);

  toggleMenu(): void {
    this.showMenu.set(!this.showMenu());
  }

  logOut(): void {
    this._AuthService.logOut();
  }

  // Handling the click over menu
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickInside && this.showMenu()) {
      this.showMenu.set(false);
    }
  }
}
