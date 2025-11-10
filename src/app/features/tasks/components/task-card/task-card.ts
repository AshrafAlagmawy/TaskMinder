import { Component, Input } from '@angular/core';
import { TaskService } from '../../services/task';
import { Task } from '../../../../core/models/task.model';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AdminOnly } from '../../../../shared/directives/admins-only';

@Component({
  selector: 'app-task-card',
  imports: [DragDropModule, AdminOnly, AdminOnly],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {
  constructor(public taskService: TaskService) {}

  @Input() task!: Task;
}
