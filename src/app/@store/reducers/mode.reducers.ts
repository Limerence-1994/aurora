import { createReducer, on, Action } from '@ngrx/store';
import { update, reset, ModeProps } from '../actions/mode.actions';
import { ModeState, ModeStateEnum } from '../../@models/mode.model';

export const initialState: ModeState = ModeStateEnum.INITIAL;

const _modeReducer = createReducer<ModeState>(initialState,
  on(update, (_, { payload }: ModeProps) => payload),
  on(reset, () => ModeStateEnum.CLOSE),
);

export function modeReducer(state: ModeState, action: Action) {
  return _modeReducer(state, action);
}
