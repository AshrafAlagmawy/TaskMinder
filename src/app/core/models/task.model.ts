import { User } from './user.model';

export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  assigned: User;
  createdAt: Date;
  updatedAt: Date;
  finishedAt?: Date; // Optional sets only when the task is finished - possible to remove it for un need
}
