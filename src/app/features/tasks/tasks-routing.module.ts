import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tasks } from './tasks';

const routes: Routes = [
  {
    path: 'tasks',
    component: Tasks,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
