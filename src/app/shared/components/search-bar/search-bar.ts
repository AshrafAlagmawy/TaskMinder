import { TaskService } from './../../../features/tasks/services/task';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../../core/models/task.model';

@Component({
  standalone: true,
  selector: 'app-search-bar',
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.scss'],
  imports: [FormsModule],
})
export class SearchBar {
  searchValue: string = '';
  constructor(private taskService: TaskService) {}

  tasksData: Task[] = [];

  ngOnInit(): void {
    this.tasksData = [...this.taskService.tasks];
  }

  gettingData(): void {
    console.log(this.searchValue);
  }
}
