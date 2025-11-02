import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskBoard } from './components/task-board/task-board';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskBoard],
  template: '<app-task-board></app-task-board>',
  styles: [],
})
export class Tasks {}
