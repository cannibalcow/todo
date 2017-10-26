import { Store } from '@ngrx/store';
import { State } from './store/task/task.reducer';
import { reducer } from './store/reducers/index';
import { Component, OnInit } from '@angular/core';
import * as reducers from './store/reducers';
import * as fromTask from './store/task/task.reducer';
import { AddTask } from './store/task/task.action';
import { Task } from './store/task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  tasks = null;
  num = 0;

  constructor(private store: Store<reducers.State>) {
  }

  public ngOnInit(): void {
    this.store.select(state => this.tasks = state.task.tasks);
  }



  addBook() {
    const task = new Task();
    task.id = this.nextNumber();
    task.title = 'Garage clening';
    task.estimate = 8;
    task.description = 'Clean out the garage';
    this.store.dispatch(new AddTask(task));
  }


  nextNumber(): number {
    this.num++;
    return this.num;
  }

}
