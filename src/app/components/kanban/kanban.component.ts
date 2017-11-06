import { ColumnAware } from '../../decorators/column-aware';
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
@ColumnAware
export class KanbanComponent implements OnInit {

  title = 'app';
  backlog = [];
  backlogHours = 0;
  inprogress = [];
  inprogressHours = 0;
  done = [];
  doneHours = 0;

  adding = false;
  loading = false;

  constructor(private store: Store<reducers.State>) {
  }

  public ngOnInit(): void {
    this.store.subscribe(state => {
      this.backlog = state.task.tasks.filter(task => {
        return task.column === Column.BACKLOG;
      });
      this.inprogress = state.task.tasks.filter(task => task.column === Column.IN_PROGRESS);
      this.done = state.task.tasks.filter(task => task.column === Column.DONE);
      this.adding = state.task.adding;
      this.loading = state.task.loading;

      this.doneHours = this.sumHours(this.done);
      this.inprogressHours = this.sumHours(this.inprogress);
      this.backlogHours = this.sumHours(this.backlog);
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

  sumHours(tasks: Task[]) {
    if (tasks && tasks.length > 0) {
      return tasks.map((t: Task) => t.estimate).reduce((sum, current) => sum + current);
    } else {
      return 0;
    }
  }
}
