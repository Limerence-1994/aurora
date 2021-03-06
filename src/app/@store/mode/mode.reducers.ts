import { createReducer, on, Action } from '@ngrx/store';
import { update, reset, ModeProps } from './mode.actions';
import { ModeState, ModeStateEnum } from '../../@models/mode.model';

const initialState: ModeState = ModeStateEnum.INITIAL;

const _modeReducer = createReducer<ModeState>(
  initialState,
  on(update, (_, { payload }) => payload),
  on(reset, () => ModeStateEnum.CLOSE),
);

export function modeReducer(state: ModeState, action: Action) {
  return _modeReducer(state, action);
}
