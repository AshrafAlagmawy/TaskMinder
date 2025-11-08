import { TaskService } from './../../../features/tasks/services/task';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-search-bar',
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.scss'],
  imports: [FormsModule],
})
export class SearchBar {
  constructor(public taskService: TaskService) {}

  searchValue: string = '';

  onSearchChange(): void {
    this.taskService.setSearchInput(this.searchValue);
  }
}
