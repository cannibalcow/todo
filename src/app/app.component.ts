import { animate, state, style, transition, trigger } from '@angular/animations';
import { Store } from '@ngrx/store';
import { State } from './store/task/task.reducer';
import { reducer } from './store/reducers/index';
import { Component, OnInit } from '@angular/core';
import * as reducers from './store/reducers';
import * as fromTask from './store/task/task.reducer';
import { AddTask, DeleteTask, BeginTask, LoadTasks } from './store/task/task.action';
import { Column, Task } from './store/task/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('adding', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('2500ms ease-in')),
      transition('active => inactive', animate('2500ms ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'app';
  backlog = [];
  inprogress = [];
  done = [];

  num = 0;
  adding = false;
  loading = false;

  constructor(private store: Store<reducers.State>) {
  }

  public ngOnInit(): void {
    this.store.subscribe(state => {
      this.backlog = state.task.tasks.filter(task => {
        console.log(task.column, "===", Column.BACKLOG);
        return task.column === Column.BACKLOG;
      });
      this.inprogress = state.task.tasks.filter(task => task.column === Column.IN_PROGRESS);
      this.done = state.task.tasks.filter(task => task.column === Column.DONE);
      this.adding = state.task.adding;
      this.loading = state.task.loading;
    });
  }

  delete(id: number) {
    this.store.dispatch(new DeleteTask(id));
  }

  begin(id: number) {
    this.store.dispatch(new BeginTask(id));
  }

  load() {
    this.store.dispatch(new LoadTasks(null));
  }

  addTask() {
    const task = new Task();
    task.id = this.nextNumber();
    task.title = 'Garage clening';
    task.estimate = 8;
    task.description = 'Clean out the garage';
    task.column = Column.BACKLOG;
    this.store.dispatch(new AddTask(task));
  }

  nextNumber(): number {
    this.num++;
    return this.num;
  }

}
