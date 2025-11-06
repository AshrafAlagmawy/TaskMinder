import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Projects } from './features/projects/projects';
import { Calendar } from './features/calendar/calendar';
import { TaskBoard } from './features/tasks/components/task-board/task-board';
import { NotFound } from './shared/components/not-found/not-found';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { EditProfile } from './shared/components/edit-profile/edit-profile';
import { AuthLayout } from './layout/auth-layout/auth-layout';
import { MainLayout } from './layout/main-layout/main-layout';
import { authGuard } from './core/guards/auth-guard';
import { loggedGuard } from './core/guards/logged-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  {
    path: '',
    component: AuthLayout,
    canActivate: [loggedGuard],
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register },
    ],
  },
  {
    path: '',
    component: MainLayout,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'projects', component: Projects },
      { path: 'tasks', component: TaskBoard },
      { path: 'edit-profile', component: EditProfile },
      { path: 'calendar', component: Calendar },
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
