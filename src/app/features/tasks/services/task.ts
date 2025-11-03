import { Injectable } from '@angular/core';
import { Task } from '../../../core/models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  showModal = false;
  editingTask: Task | null = null;

  public _tasks: Task[] = [
    {
      id: 1,
      title: 'Design homepage layout',
      description: 'Create wireframes and UI components for the homepage',
      status: 'todo',
      assigneeImage: 'https://i.pravatar.cc/150?img=1',
    },
    {
      id: 2,
      title: 'API integration',
      description: 'Connect front-end with backend REST API',
      status: 'in-progress',
      assigneeImage: 'https://i.pravatar.cc/150?img=2',
    },
    {
      id: 3,
      title: 'Bug fixes',
      description: 'Fix reported bugs in login and signup flow',
      status: 'done',
      assigneeImage: 'https://i.pravatar.cc/150?img=3',
    },
  ];

  taskData: Partial<Task> = {};

  closeModal() {
    this.showModal = false;
    this.taskData = {};
    this.editingTask = null;
  }

  saveTask() {
    if (this.editingTask) {
      const index = this._tasks.findIndex((t) => t.id === this.editingTask!.id);
      if (index !== -1) this._tasks[index] = { ...this.editingTask, ...this.taskData } as Task;
    } else {
      // Add new task
      const newTask: Task = {
        id: Date.now(),
        title: this.taskData.title!,
        description: this.taskData.description!,
        status: this.taskData.status as 'todo' | 'in-progress' | 'done',
        assigneeImage: 'https://i.pravatar.cc/150?img=' + (Math.floor(Math.random() * 10) + 1),
      };
      this._tasks.push(newTask);
    }
    this.closeModal();
  }

  openModal(task?: Task) {
    this.showModal = true;
    this.taskData = task ? { ...task } : { status: 'todo' };
    this.editingTask = task || null;
  }

  deleteTask(id: number) {
    this._tasks = this._tasks.filter((t) => t.id !== id);
  }

  getTask(status: string) {
    return this._tasks.filter((t) => t.status === status);
  }
}
