import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Projects } from './features/projects/projects';
import { Calendar } from './features/calendar/calendar';
import { TaskBoard } from './features/tasks/components/task-board/task-board';
import { NotFound } from './shared/components/not-found/not-found';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { EditProfile } from './shared/components/edit-profile/edit-profile';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Login,
    pathMatch: 'full',
  },
  {
    path: 'register',
    component: Register,
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
    component: TaskBoard,
    pathMatch: 'full',
  },
  {
    path: 'edit-profile',
    component: EditProfile,
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
