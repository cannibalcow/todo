import { createSelector } from '@ngrx/store';
import { State } from './task.reducer';
import { Task } from './task';
import { ADD_TASK, DELETE_TASK, TaskActions, ADD_TASK_SUCCESS, BEGIN_TASK } from './task.action';

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
            return {
                ...state,
                loading: true
            };
        }
        case ADD_TASK_SUCCESS: {
            return {
                ...state,
                tasks: action.payload,
                loading: false,
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

