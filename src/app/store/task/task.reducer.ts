import { toPayload } from '@ngrx/effects';
import { createSelector } from '@ngrx/store';
import { State } from './task.reducer';
import { Task, Column } from './task';
import {
    ADD_TASK,
    ADD_TASK_SUCCESS,
    BEGIN_TASK,
    DELETE_TASK,
    LOAD_SUCCESS,
    LOAD_TASKS,
    LoadTasks,
    TaskActions,
    DONE_TASK,
} from './task.action';

export interface State {
    tasks: Task[];
    loading: boolean;
    adding: boolean;
}

const initialState: State = {
    tasks: [],
    loading: false,
    adding: false
};

export function reducer(state = initialState, action: TaskActions): State {
    switch (action.type) {
        case ADD_TASK: {
            return {
                ...state,
                adding: true
            };
        }
        case ADD_TASK_SUCCESS: {
            const tasks = state.tasks;

            return {
                ...state,
                tasks: tasks.concat(action.payload),
                adding: false
            };
        }
        case LOAD_TASKS: {
            return {
                ...state,
                loading: true
            };
        }
        case LOAD_SUCCESS: {
            return {
                ...state,
                tasks: action.payload,
                loading: false
            };
        }
        case DELETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter(t => t.id !== action.payload)
            };
        }
        case BEGIN_TASK: {
            const index = state.tasks.findIndex(f => f.id === action.payload);
            const updatedTask = {
                ...state.tasks[index],
                column: Column.IN_PROGRESS
            };
            const newTasks = [...state.tasks];
            newTasks[index] = updatedTask;
            return {
                ...state,
                tasks: newTasks
            };
        }
        case DONE_TASK: {
            const index = state.tasks.findIndex(f => f.id === action.taskId);
            const doneTask = {
                ...state.tasks[index],
                column: Column.DONE
            };
            const newTasks = [...state.tasks];
            newTasks[index] = doneTask;
            return {
                ...state,
                tasks: newTasks
            };
        }
        default: {
            return state;
        }
    }
}

