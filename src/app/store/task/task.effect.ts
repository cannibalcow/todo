import { reduce } from 'rxjs/operators/reduce';
import { Task } from './task';
import { Database } from '@ngrx/db';

import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as taskaction from './task.action';
import { ADD_TASK, ADD_TASK_SUCCESS } from './task.action';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/toArray';
import { defer } from 'rxjs/observable/defer';

@Injectable()
export class TaskEffect {

    constructor(private actions: Actions, private db: Database) {
    }

    @Effect({ dispatch: false })
    openDB$: Observable<any> = defer(() => {
        return this.db.open('todos');
    });

    @Effect()
    addTask: Observable<Action> = this.actions
        .ofType(taskaction.ADD_TASK)
        .map((action: taskaction.AddTask) => action.payload)
        .switchMap(task => {
            this.db.insert('todos', [task]);
            return Observable.of(new taskaction.AddTaskSuccess(task));
        });

    @Effect()
    load: Observable<Action> = this.actions
        .ofType(taskaction.LOAD_TASKS)
        .map((action: taskaction.LoadTasks) => action.payload)
        .switchMap(() => {
            console.log('laod tasks');
            return this.db.query('todos')
                .toArray()
                .map((tasks: Task[]) => new taskaction.LoadTasksSuccess(tasks));
        });

    @Effect()
    begintask: Observable<Action> = this.actions
        .ofType(taskaction.BEGIN_TASK)
        .map((action: taskaction.BeginTask) => action.payload)
        .switchMap(task => {
            return Observable.empty();
        });
}
