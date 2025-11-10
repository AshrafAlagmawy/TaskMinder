import { Component } from '@angular/core';
import { TaskService } from '../../services/task';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-task-modal',
  imports: [TranslateModule, FormsModule],
  templateUrl: './task-modal.html',
  styleUrl: './task-modal.scss',
  standalone: true,
})
export class TaskModal {
  constructor(public taskService: TaskService, private translate: TranslateService) {}
}
