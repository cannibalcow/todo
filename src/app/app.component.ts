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
  public ngOnInit(): void {
  }
}
