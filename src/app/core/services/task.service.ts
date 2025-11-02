import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Task, TaskStatus } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly tasksSubject = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasksSubject.asObservable();

  constructor() {
    this.loadUsersData();
  }

  private loadUsersData() {
    const users: User[] = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        image: 'https://i.pravatar.cc/150?img=1',
      },
      {
        id: '2',
        name: 'Jane Smith',
        email: 'jane@example.com',
        image: 'https://i.pravatar.cc/150?img=2',
      },
      {
        id: '3',
        name: 'Bob Johnson',
        email: 'bob@example.com',
        image: 'https://i.pravatar.cc/150?img=3',
      },
      {
        id: '4',
        name: 'Alice Brown',
        email: 'alice@example.com',
        image: 'https://i.pravatar.cc/150?img=4',
      },
      {
        id: '5',
        name: 'Charlie Wilson',
        email: 'charlie@example.com',
        image: 'https://i.pravatar.cc/150?img=5',
      },
    ];

    const tasks: Task[] = [
      // TO DO Tasks
      {
        id: '1',
        title: 'Design new landing page',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        status: TaskStatus.TODO,
        assigned: users[0],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        title: 'Update user documentation',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        status: TaskStatus.TODO,
        assigned: users[1],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '3',
        title: 'Fix navigation menu bug',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        status: TaskStatus.TODO,
        assigned: users[2],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '4',
        title: 'Create API endpoints',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        status: TaskStatus.TODO,
        assigned: users[3],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '5',
        title: 'Setup database schema',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        status: TaskStatus.TODO,
        assigned: users[4],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // IN PROGRESS Tasks
      {
        id: '6',
        title: 'Implement authentication',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        status: TaskStatus.IN_PROGRESS,
        assigned: users[0],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '7',
        title: 'Design dashboard mockups',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        status: TaskStatus.IN_PROGRESS,
        assigned: users[1],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '8',
        title: 'Write unit tests',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        status: TaskStatus.IN_PROGRESS,
        assigned: users[2],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '9',
        title: 'Optimize database queries',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        status: TaskStatus.IN_PROGRESS,
        assigned: users[3],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '10',
        title: 'Review pull requests',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        status: TaskStatus.IN_PROGRESS,
        assigned: users[4],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // DONE Tasks
      {
        id: '11',
        title: 'Setup CI/CD pipeline',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        status: TaskStatus.DONE,
        assigned: users[0],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '12',
        title: 'Deploy to staging',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        status: TaskStatus.DONE,
        assigned: users[1],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '13',
        title: 'Configure monitoring',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        status: TaskStatus.DONE,
        assigned: users[2],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '14',
        title: 'Update dependencies',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        status: TaskStatus.DONE,
        assigned: users[3],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '15',
        title: 'Create project documentation',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.',
        status: TaskStatus.DONE,
        assigned: users[4],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];
    this.tasksSubject.next(tasks);
  }

  getTasks(): Observable<Task[]> {
    return this.tasks$;
  }

  addTask(task: Task): void {
    const currentTasks = this.tasksSubject.value;
    this.tasksSubject.next([...currentTasks, task]);
  }

  updateTask(id: string, updates: Partial<Task>): void {
    const currentTasks = this.tasksSubject.value;
    const updatedTasks = currentTasks.map((task) =>
      task.id === id ? { ...task, ...updates, updatedAt: new Date() } : task
    );
    this.tasksSubject.next(updatedTasks);
  }

  deleteTask(id: string): void {
    const currentTasks = this.tasksSubject.value;
    const filteredTasks = currentTasks.filter((task) => task.id !== id);
    this.tasksSubject.next(filteredTasks);
  }

  updateTaskStatus(id: string, status: TaskStatus): void {
    this.updateTask(id, { status });
  }
}
