import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Projects } from './features/projects/projects';
import { Calendar } from './features/calendar/calendar';
import { Tasks } from './features/tasks/tasks';
import { NotFound } from './shared/components/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
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
    component: Tasks,
    pathMatch: 'full',
  },
  {
    path: 'calendar',
    component: Calendar,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFound,
  },
];
