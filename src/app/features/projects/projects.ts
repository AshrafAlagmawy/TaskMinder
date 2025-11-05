import { Component } from '@angular/core';
import { DevelopedSoon } from '../../shared/components/developed-soon/developed-soon';

@Component({
  selector: 'app-projects',
  imports: [DevelopedSoon],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {}
