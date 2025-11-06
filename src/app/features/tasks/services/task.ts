import { Injectable, signal } from '@angular/core';
import { Task } from '../../../core/models/task.model';
import { StorageService } from '../../../core/services/storage';

const dummyData: Task[] = [
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
    assigneeImage: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: Date.now() + 2,
    title: 'Task 3',
    description: 'Assigned to Belal',
    status: 'done',
    assigneeImage: 'https://i.pravatar.cc/150?img=1',
  },
];

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private storage: StorageService) {
    if (this._tasks.length === 0) {
      this._tasks.set(dummyData);
    }

    this.loadTasks();
  }

  localStorageKey: string = 'tasks';
  showModal = false;
  editingTask: Task | null = null;
  public _tasks = signal<Task[]>([]);
  titleError: boolean = false;
  descriptionError: boolean = false;

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
    const title = this.taskData.title?.trim();
    const description = this.taskData.description?.trim();

    // Handling duplicate tasks
    if (this.findingDuplicateTasks(title, description, this.editingTask?.id)) {
      if (this.titleError && this.descriptionError) {
        alert('Task title and task description has been exists before');
      } else if (this.titleError) {
        alert('Task title has been exists before');
      } else {
        alert('Task description has been exists before');
      }
      return;
    }

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

  findingDuplicateTasks(title?: string, description?: string, excludeId?: number): boolean {
    if (!title?.trim() || !description?.trim()) {
      return false;
    }

    return this._tasks().some((task) => {
      this.titleError = task.title.toLowerCase().trim() === title.toLowerCase().trim();
      this.descriptionError =
        task.description.toLowerCase().trim() === description.toLowerCase().trim();

      return (
        (task.title.toLowerCase().trim() === title.toLowerCase().trim() ||
          task.description.toLowerCase().trim() === description.toLowerCase().trim()) &&
        excludeId !== task.id
      );
    });
  }

  // Filter tasks for search bar
  filterTasks(search: string): Task[] {
    const searchWord = search.toLowerCase().trim();

    if (!searchWord) return this._tasks();

    return this._tasks().filter((task) => {
      task.title.toLowerCase().includes(searchWord) ||
        task.description.toLowerCase().includes(searchWord);
    });
  }
}
