import { Component } from '@angular/core';
import { TaskService } from '../../services/task';

@Component({
  selector: 'app-task-header',
  standalone: true,
  imports: [],
  templateUrl: './task-header.html',
  styleUrl: './task-header.scss',
})
export class TaskHeader {
  constructor(public taskService: TaskService) {}
}
