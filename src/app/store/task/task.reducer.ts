import { toPayload } from '@ngrx/effects';
import { createSelector } from '@ngrx/store';
import { State } from './task.reducer';
import { Task } from './task';
import { ADD_TASK, DELETE_TASK, TaskActions, ADD_TASK_SUCCESS, BEGIN_TASK, LOAD_TASKS, LOAD_SUCCESS } from './task.action';

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
            return {
                ...state,
                adding: false,
            };
        }
        case LOAD_SUCCESS: {
            return {
                ...state,
                tasks: action.payload
            };
        }

        case DELETE_TASK: {
            console.log('Reducer', 'DELETE_TASK');
            return {
                ...state,
                tasks: state.tasks.filter(t => t.id !== action.payload)
            };
        }
        case BEGIN_TASK: {
            const index = state.tasks.findIndex(f => f.id === action.payload);
            state.tasks[index].started = true;
            return {
                ...state,
            };
        }
        default: {
            return state;
        }
    }
}

