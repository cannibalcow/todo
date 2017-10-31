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
})
export class AppComponent implements OnInit {
  public ngOnInit(): void {
  }
}
