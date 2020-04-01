import { createAction, props } from '@ngrx/store';
import { ModeState } from '../../@models/mode.model';

// 更新到下一状态所需的数据模型
export interface ModeProps {
  payload: ModeState;
}
// 动作类型
export enum ModeActionType {
  UPDATE    = '[Mode] Update',
  RESET     = '[Mode] Reset'
}

export const update   = createAction(ModeActionType.UPDATE, props<ModeProps>());
export const reset    = createAction(ModeActionType.RESET);
