import { Task } from '../../core/models/task.model';

export const dummyData: Task[] = [
  {
    id: Date.now(),
    title: 'Task 1',
    description: 'Assigned to Ashraf',
    status: 'todo',
    assigneeImage: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: Date.now() + 1,
    title: 'Task 1',
    description: 'Assigned to Mohamed',
    status: 'in-progress',
    assigneeImage: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: Date.now() + 2,
    title: 'Task 3',
    description: 'Assigned to Belal',
    status: 'done',
    assigneeImage: 'https://i.pravatar.cc/150?img=3',
  },
];
