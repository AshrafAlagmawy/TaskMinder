import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskColumn } from '../task-column/task-column';
import { TaskService } from '../../services/task';
import { TaskHeader } from '../task-header/task-header';
import { TaskModal } from '../task-modal/task-modal';
// Using Angular CDK Library
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-board',
  standalone: true,
  templateUrl: './task-board.html',
  styleUrls: ['./task-board.scss'],
  imports: [CommonModule, FormsModule, TaskColumn, TaskHeader, TaskModal, DragDropModule],
})
export class TaskBoard {
  constructor(public taskService: TaskService) {}

  dropListIds = ['todo', 'in-progress', 'done'];

  onTaskDrop(data: { event: CdkDragDrop<any[]>; status: string }) {
    const event = data.event;

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      const task = event.container.data[event.currentIndex];
      const newStatus = data.status as 'todo' | 'in-progress' | 'done';
      this.taskService.updateTaskStatus(task.id, newStatus);
    }
  }
}
