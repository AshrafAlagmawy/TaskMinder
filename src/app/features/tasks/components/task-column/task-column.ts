import { TaskService } from './../../services/task';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { DragDropModule, CdkDragDrop } from '@angular/cdk/drag-drop';
import { TaskCard } from '../task-card/task-card';

@Component({
  selector: 'app-task-column',
  standalone: true,
  imports: [CommonModule, NgClass, DragDropModule, TaskCard],
  templateUrl: './task-column.html',
  styleUrl: './task-column.scss',
})
export class TaskColumn {
  @Input() backgroundColor: string = '';
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() taskStatus: string = '';
  @Input() emptyMsg: string = '';
  @Input() dropListId: string = '';
  @Input() connectedDropLists: string[] = [];
  @Output() taskDropped = new EventEmitter<{ event: CdkDragDrop<any[]>; status: string }>();

  constructor(public taskService: TaskService) {}

  get tasks() {
    return this.taskService.getTask(this.taskStatus);
  }

  onDrop(event: CdkDragDrop<any[]>) {
    this.taskDropped.emit({ event, status: this.taskStatus });
  }

  tasksLength(): number {
    return this.taskService.getTask(this.taskStatus).length;
  }
}
