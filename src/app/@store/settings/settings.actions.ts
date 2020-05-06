import { createAction, props } from '@ngrx/store';
import {Settings} from '../../@models/settings.module';
import {Props} from '../extends';

export interface SettingsProps extends Props<Settings>{}
// 动作类型
enum SettingsActionType {
  UPDATE    = '[Settings Component] Update',
  RESET     = '[Settings Component] Reset'
}

export const update   = createAction(SettingsActionType.UPDATE, props<SettingsProps>());
export const reset    = createAction(SettingsActionType.RESET);
