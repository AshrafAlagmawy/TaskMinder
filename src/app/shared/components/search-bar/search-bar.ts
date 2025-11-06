import { Component, ElementRef, ViewChild, AfterViewInit, inject } from '@angular/core';
import { fromEvent, debounceTime, distinctUntilChanged, map } from 'rxjs';
import { TaskService } from '../../../features/tasks/services/task';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.scss'],
})
export class SearchBar implements AfterViewInit {
  private taskService = inject(TaskService);
  @ViewChild('input', { static: true }) input!: ElementRef;

  ngAfterViewInit(): void {}
}
