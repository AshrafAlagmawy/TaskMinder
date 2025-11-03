import { Task } from './../../../../core/models/task.model';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskColumn } from '../task-column/task-column';
import { TaskService } from '../../services/task';
import { TaskHeader } from '../task-header/task-header';
import { TaskModal } from '../task-modal/task-modal';

@Component({
  selector: 'app-task-board',
  standalone: true,
  templateUrl: './task-board.html',
  styleUrls: ['./task-board.scss'],
  imports: [CommonModule, FormsModule, TaskColumn, TaskHeader, TaskModal],
})
export class TaskBoard {
  constructor(public taskService: TaskService) {}
}
