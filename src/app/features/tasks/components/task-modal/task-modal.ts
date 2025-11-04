import { Component } from '@angular/core';
import { TaskService } from '../../services/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-modal',
  imports: [FormsModule],
  templateUrl: './task-modal.html',
  styleUrl: './task-modal.scss',
  standalone: true,
})
export class TaskModal {
  constructor(public taskService: TaskService) {}
  name: string = '';
  description: string = '';
}
