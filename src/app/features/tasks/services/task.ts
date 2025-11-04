import { Injectable, signal } from '@angular/core';
import { Task } from '../../../core/models/task.model';
import { StorageService } from '../../../core/services/storage';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private storage: StorageService) {
    this.loadTasks();
  }

  localStorageKey: string = 'tasks';

  showModal = false;
  editingTask: Task | null = null;

  public _tasks = signal<Task[]>([]);

  private loadTasks() {
    const storedTasks = this.storage.getItem<Task[]>(this.localStorageKey);
    if (storedTasks && storedTasks.length > 0) this._tasks.set(storedTasks);
  }

  private saveTasksInLocalStorage() {
    this.storage.setItem(this.localStorageKey, this._tasks());
  }

  clearAllTasks(): void {
    this._tasks.set([]);
    this.storage.removeItem(this.localStorageKey);
  }

  get tasks(): Task[] {
    return this._tasks();
  }

  taskData: Partial<Task> = {};

  closeModal() {
    this.showModal = false;
    this.taskData = {};
    this.editingTask = null;
  }

  saveTask() {
    if (this.editingTask) {
      this._tasks.update((tasks) => {
        const index = tasks.findIndex((t) => t.id === this.editingTask!.id);
        if (index !== -1) {
          const updated = [...tasks];
          updated[index] = { ...this.editingTask, ...this.taskData } as Task;
          return updated;
        }
        return tasks;
      });
    } else {
      const newTask: Task = {
        id: Date.now(),
        title: this.taskData.title!,
        description: this.taskData.description!,
        status: this.taskData.status as 'todo' | 'in-progress' | 'done',
        assigneeImage: 'https://i.pravatar.cc/150?img=' + (Math.floor(Math.random() * 10) + 1),
      };
      this._tasks.update((tasks) => [...tasks, newTask]);
    }
    this.saveTasksInLocalStorage();
    this.closeModal();
  }

  openModal(task?: Task) {
    this.showModal = true;
    this.taskData = task ? { ...task } : { status: 'todo' };
    this.editingTask = task || null;
  }

  deleteTask(id: number) {
    this._tasks.update((tasks) => tasks.filter((t) => t.id !== id));
    this.saveTasksInLocalStorage();
  }

  getTask(status: string) {
    return this._tasks().filter((t) => t.status === status);
  }

  updateTaskStatus(taskId: number, newStatus: 'todo' | 'in-progress' | 'done'): void {
    this._tasks.update((tasks) => {
      return tasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task));
    });
    this.saveTasksInLocalStorage();
  }
}
