import { TaskService } from './../../../features/tasks/services/task';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  selector: 'app-search-bar',
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.scss'],
  imports: [TranslateModule, FormsModule],
})
export class SearchBar {
  constructor(public taskService: TaskService, private translate: TranslateService) {}

  searchValue: string = '';

  onSearchChange(): void {
    this.taskService.setSearchInput(this.searchValue);
  }
}
