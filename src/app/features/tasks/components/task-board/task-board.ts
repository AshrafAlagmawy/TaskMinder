import { Task } from './../../../../core/models/task.model';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-board',
  standalone: true,
  templateUrl: './task-board.html',
  styleUrls: ['./task-board.scss'],
  imports: [CommonModule, FormsModule],
})
export class TaskBoard {
  showModal = false;
  editingTask: Task | null = null;

  // Dummy Data For Testing
  tasks: Task[] = [
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

  get toDoTasks() {
    return this.tasks.filter((t) => t.status === 'todo');
  }

  get inProgressTasks() {
    return this.tasks.filter((t) => t.status === 'in-progress');
  }

  get doneTasks() {
    return this.tasks.filter((t) => t.status === 'done');
  }

  taskData: Partial<Task> = {};

  openModal(task?: Task) {
    this.showModal = true;
    this.taskData = task ? { ...task } : { status: 'todo' };
    this.editingTask = task || null;
  }

  saveTask() {
    if (this.editingTask) {
      const index = this.tasks.findIndex((t) => t.id === this.editingTask!.id);
      if (index !== -1) this.tasks[index] = { ...this.editingTask, ...this.taskData } as Task;
    } else {
      // Add new task
      const newTask: Task = {
        id: Date.now(),
        title: this.taskData.title!,
        description: this.taskData.description!,
        status: this.taskData.status as 'todo' | 'in-progress' | 'done',
        assigneeImage: 'https://i.pravatar.cc/150?img=' + (Math.floor(Math.random() * 10) + 1),
      };
      this.tasks.push(newTask);
    }
    this.closeModal();
  }

  closeModal() {
    this.showModal = false;
    this.taskData = {};
    this.editingTask = null;
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((t) => t.id !== id);
  }
}
