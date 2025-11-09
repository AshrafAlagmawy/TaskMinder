import { Component } from '@angular/core';
import { TaskService } from '../../services/task';
import { NewTask } from '../../../../shared/directives/new-task';

@Component({
  selector: 'app-task-header',
  standalone: true,
  imports: [NewTask],
  templateUrl: './task-header.html',
  styleUrl: './task-header.scss',
})
export class TaskHeader {
  constructor(public taskService: TaskService) {}
}
