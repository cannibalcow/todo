import { createSelector } from '@ngrx/store';
import { State } from './task.reducer';
import { Task } from './task';
import { ADD_TASK, DELETE_TASK, TaskActions, ADD_TASK_SUCCESS } from './task.action';

export interface State {
    tasks: Task[];
    loading: boolean;
}

const initialState: State = {
    tasks: [],
    loading: false,
};

export function reducer(state = initialState, action: TaskActions): State {
    switch (action.type) {
        case ADD_TASK: {
            console.log('Reducer', 'ADD_TASK');
            return {
                ...state
            };
        }
        case ADD_TASK_SUCCESS: {
            console.log('reducer', ADD_TASK_SUCCESS);
            return {
                ...state,
                tasks: action.payload
            };
        }
        case DELETE_TASK: {
            console.log('Reducer', 'DELETE_TASK');
            return state;
        }
        default: {
            return state;
        }
    }
}

