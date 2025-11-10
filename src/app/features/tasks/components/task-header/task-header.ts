import { Component } from '@angular/core';
import { TaskService } from '../../services/task';
import { AdminOnly } from '../../../../shared/directives/admins-only';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-task-header',
  standalone: true,
  imports: [TranslateModule, AdminOnly, AdminOnly],
  templateUrl: './task-header.html',
  styleUrl: './task-header.scss',
})
export class TaskHeader {
  constructor(public taskService: TaskService, private translate: TranslateService) {}
}
