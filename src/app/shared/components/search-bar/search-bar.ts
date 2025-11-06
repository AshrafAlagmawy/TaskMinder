import { Component, ElementRef, ViewChild, AfterViewInit, inject, NgModule } from '@angular/core';
import { TaskService } from '../../../features/tasks/services/task';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'app-search-bar',
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.scss'],
  imports: [],
})
export class SearchBar implements AfterViewInit {
  private taskService = inject(TaskService);
  @ViewChild('input', { static: true }) input!: ElementRef;

  searchValue: string = '';

  ngAfterViewInit(): void {
    fromEvent<InputEvent>(this.input.nativeElement, 'input')
      .pipe(
        map((event: InputEvent) => (event.target as HTMLInputElement).value),
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe((searchText: string) => {
        this.searchValue = searchText;
        console.log('User typed : ', searchText);
        this.taskService.filterTasks(searchText);
      });
  }
}
