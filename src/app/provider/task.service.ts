import { Task } from './../store/task/task';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

  tasks: Task[] = [];

  constructor() {
    db = new
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  getTask(): Task[] {
    return this.tasks;
  }

  deleteTask(id: number) {
    const index = this.tasks.findIndex(task => task.id === id);
    this.tasks.splice(index, 1);
  }
}
