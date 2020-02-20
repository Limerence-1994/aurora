import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {ModeState} from '../../@models/mode.model';
import {modeReducer} from './mode.reducers';

// 项目中全部的状态
export interface State {
  mode: ModeState;
}

// 全部的reducer函数
export const reducers: ActionReducerMap<State> = {
  mode: modeReducer
};

// 中间件
export const metaReducers: MetaReducer<State>[] = [logout];

function logout(reducer) {
  return (state, action) => {
    console.log(state, action);
    return reducer(state, action);
  };
}
