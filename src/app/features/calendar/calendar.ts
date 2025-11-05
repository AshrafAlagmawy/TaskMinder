import { Component } from '@angular/core';
import { DevelopedSoon } from '../../shared/components/developed-soon/developed-soon';

@Component({
  selector: 'app-calendar',
  imports: [DevelopedSoon],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
})
export class Calendar {}
