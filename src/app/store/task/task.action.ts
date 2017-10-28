import { toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Task } from './task';

export const ADD_TASK = '[Task] Add';
export const DELETE_TASK = '[Task] Delete';
export const ADD_TASK_SUCCESS = '[Task] Success';
export const LOAD_TASKS = '[Task] Load Tasks';
export const LOAD_SUCCESS = '[Task] Load success';
export const BEGIN_TASK = '[Task] Begin';

export class AddTask implements Action {
    readonly type = ADD_TASK;
    constructor(public payload: Task) { }
}

export class AddTaskSuccess implements Action {
    readonly type = ADD_TASK_SUCCESS;
    constructor(public payload: Task) { }
}

export class LoadTasks implements Action {
    readonly type = LOAD_TASKS;
    constructor(public payload: Task) { }
}

export class LoadTasksSuccess implements Action {
    readonly type = LOAD_SUCCESS;
    constructor(public payload: Task[]) { }
}

export class DeleteTask implements Action {
    readonly type = DELETE_TASK;
    constructor(public payload: number) { }
}

export class BeginTask implements Action {
    readonly type = BEGIN_TASK;
    constructor(public payload: number) {

    }
}

export type TaskActions = AddTask | AddTaskSuccess | DeleteTask | BeginTask | LoadTasks | LoadTasksSuccess;
