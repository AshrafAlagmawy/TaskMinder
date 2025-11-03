import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {
  constructor(private router: Router) {}

  goToTasks(): void {
    this.router.navigate(['/tasks']);
  }

  goBack(): void {
    window.history.back();
  }
}
