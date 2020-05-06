import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {ModeState} from '../@models/mode.model';
import {modeReducer} from './mode/mode.reducers';
import {Settings} from '../@models/settings.module';
import {settingsReducer} from './settings/settings.reducers';

// 项目中全部的状态
export interface State {
  mode: ModeState;
  settings: Settings;
}

// 全部的reducer函数
export const reducers: ActionReducerMap<State> = {
  mode: modeReducer,
  settings: settingsReducer,
};

// 中间件
export const metaReducers: MetaReducer<State>[] = [logout];

function logout(reducer) {
  return (state, action) => {
    console.log(`[${action.patron}]>>>`, action.payload);
    return reducer(state, action);
  };
}
