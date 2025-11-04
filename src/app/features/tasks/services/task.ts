import { Injectable } from '@angular/core';
import { Task } from '../../../core/models/task.model';
import { StorageService } from '../../../core/services/storage';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private storage: StorageService) {
    this.loadTasks();
  }

  showModal = false;
  editingTask: Task | null = null;

  public _tasks: Task[] = [];

  private loadTasks() {
    const storedTasks = this.storage.getItem<Task[]>('tasks');
    if (storedTasks && storedTasks.length > 0) this._tasks = storedTasks;
  }

  private saveTasks() {
    this.storage.setItem('tasks', this._tasks);
  }

  clearAllTasks(): void {
    this._tasks = [];
    this.storage.removeItem('tasks');
  }

  get tasks(): Task[] {
    return this._tasks;
  }

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
    this.saveTasks();
    this.closeModal();
  }

  openModal(task?: Task) {
    this.showModal = true;
    this.taskData = task ? { ...task } : { status: 'todo' };
    this.editingTask = task || null;
  }

  deleteTask(id: number) {
    this._tasks = this._tasks.filter((t) => t.id !== id);
    this.saveTasks();
  }

  getTask(status: string) {
    return this._tasks.filter((t) => t.status === status);
  }
}
