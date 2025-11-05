import { Component } from '@angular/core';
import { DevelopedSoon } from '../../shared/components/developed-soon/developed-soon';

@Component({
  selector: 'app-dashboard',
  imports: [DevelopedSoon],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
