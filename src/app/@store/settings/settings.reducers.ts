import {createReducer, on, Action} from '@ngrx/store';
import {Settings} from '../../@models/settings.module';
import {update, reset, SettingsProps} from './settings.actions';

// 初始数据
const initialState: Settings = new Settings();

const _settingsReducer = createReducer<Settings>(
  initialState,
  on(update, (previous, {payload}: SettingsProps): Settings => {
    return {...previous, ...payload} as Settings;
  }),
  on(reset, _ => initialState)
);

export function settingsReducer(state: Settings, action: Action) {
  return _settingsReducer(state, action);
}
