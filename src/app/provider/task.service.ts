import { Task } from './../store/task/task';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskService {

  tasks: Array<Task>;

  constructor() {
    this.tasks = new Array<Task>();
  }

  addTask(task: Task) {
    console.log(task);
    this.tasks.push(task);
  }

  deleteTask(id: number) {
    const index = this.tasks.findIndex(task => task.id === id);
    this.tasks.splice(index, 1);
  }
}
