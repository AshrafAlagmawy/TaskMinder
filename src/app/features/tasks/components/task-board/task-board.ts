import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-board.html',
  styleUrls: ['./task-board.scss'],
})
export class TaskBoard {
  // For now, just display the design
  // We'll add logic later

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
