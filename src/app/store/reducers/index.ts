import { reduce } from 'rxjs/operators/reduce';
import { environment } from './../../../environments/environment.prod';
import { Params } from '@angular/router';
import { storeFreeze } from 'ngrx-store-freeze';
import { compose } from '@ngrx/core/compose';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromTask from '../task/task.reducer';
import { combineReducers } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';


export interface RouterStateUrl {
    url: string;
    queryParams: Params;
}
export interface State {
    task: fromTask.State;
    routerReducer: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducer = {
    task: fromTask.reducer
};

export const reducers: ActionReducerMap<State> = {
    task: fromTask.reducer,
    routerReducer: fromRouter.routerReducer,
};

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function (state: State, action: any): State {
        console.log('action', action);
        console.log('state', state);

        return reducer(state, action);
    };
}
export const metaReducers: MetaReducer<State>[] = [logger, storeFreeze];
