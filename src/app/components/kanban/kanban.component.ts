import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as reducers from '../../store/reducers';
import * as fromTask from '../../store/task/task.reducer';
import { AddTask, DeleteTask, BeginTask, LoadTasks } from '../../store/task/task.action';
import { Column, Task } from '../../store/task/task';


@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {

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
