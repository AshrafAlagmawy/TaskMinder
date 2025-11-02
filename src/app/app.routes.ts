import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Projects } from './features/projects/projects';
import { Calendar } from './features/calendar/calendar';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    pathMatch: 'full',
  },
  {
    path: 'projects',
    component: Projects,
    pathMatch: 'full',
  },
  {
    path: 'tasks',
    component: Projects,
    pathMatch: 'full',
  },
  {
    path: 'calendar',
    component: Calendar,
    pathMatch: 'full',
  },
];
