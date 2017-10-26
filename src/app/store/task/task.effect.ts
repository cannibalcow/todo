import { TaskService } from './../../provider/task.service';

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

@Injectable()
export class TaskEffect {


    constructor(private actions: Actions, private taskService: TaskService) {
    }

    @Effect()
    addTask: Observable<Action> = this.actions
        .ofType(taskaction.ADD_TASK)
        .map((action: taskaction.AddTask) => action.payload)
        .switchMap(task => {
            console.log('add task');
            // return Observable.of({ type: taskaction.ADD_TASK_SUCCESS });
            // this.taskService.addTask(task);
            return Observable.of(new taskaction.AddTaskSuccess([]));
        });

    @Effect()
    addTaskSuccess: Observable<Action> = this.actions
        .ofType(taskaction.ADD_TASK_SUCCESS)
        .map(toPayload)
        .switchMap(p => {
            console.log('sucess', p);
            return Observable.empty();
        });
}
