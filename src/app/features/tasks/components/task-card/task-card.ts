import { Component, Input } from '@angular/core';
import { TaskService } from '../../services/task';
import { Task } from '../../../../core/models/task.model';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NewTask } from '../../../../shared/directives/new-task';

@Component({
  selector: 'app-task-card',
  imports: [DragDropModule, NewTask],
  templateUrl: './task-card.html',
  styleUrl: './task-card.scss',
})
export class TaskCard {
  constructor(public taskService: TaskService) {}

  @Input() task!: Task;
}
