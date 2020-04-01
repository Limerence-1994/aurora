import { createAction, props } from '@ngrx/store';
import {Settings} from '../../@models/settings.module';

export interface SettingsProps {
  // 待更新的值
  payload: Settings;
  // 由哪里调用
  patron: string;
}
// 动作类型
enum SettingsActionType {
  UPDATE    = '[Settings Component] Update',
  RESET     = '[Settings Component] Reset'
}

export const update   = createAction(SettingsActionType.UPDATE, props<SettingsProps>());
export const reset    = createAction(SettingsActionType.RESET);
