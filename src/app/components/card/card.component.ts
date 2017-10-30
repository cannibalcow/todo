import { BeginTask, DeleteTask } from './../../store/task/task.action';
import { Store } from '@ngrx/store';
import { Task } from './../../store/task/task';
import { Component, Input, OnInit } from '@angular/core';
import * as reducers from '../../store/reducers';

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
