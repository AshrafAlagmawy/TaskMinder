import { TaskService } from './../../services/task';
import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-task-column',
  standalone: true,
  imports: [NgClass],
  templateUrl: './task-column.html',
  styleUrl: './task-column.scss',
})
export class TaskColumn {
  @Input() backgroundColor: string = '';
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() taskStatus: string = '';
  @Input() emptyMsg: string = '';

  constructor(public taskService: TaskService) {}
}
