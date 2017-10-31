import { Store } from '@ngrx/store';
import { Component, Input, OnInit } from '@angular/core';
import * as reducers from '../../store/reducers';
import * as fromTask from '../../store/task/task.reducer';
import { AddTask, DeleteTask, BeginTask, LoadTasks } from '../../store/task/task.action';
import { Column, Task } from '../../store/task/task';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() task: Task;

  constructor(private store: Store<reducers.State>) { }

  ngOnInit() {
  }

  delete(id: number) {
    this.store.dispatch(new DeleteTask(id));
  }

  begin(id: number) {
    this.store.dispatch(new BeginTask(id));
  }
}
