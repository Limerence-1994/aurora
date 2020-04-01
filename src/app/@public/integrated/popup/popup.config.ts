/**
 * aurora-forum
 * Copyright Lee. All Rights Reserved.
 *
 * @author Lee  <aurora-club@outlook.com>
 * @date   2020/3/21 19:25
 *
 * Use of this source code is governed by an MIT-style license that can be
 */
import { InjectionToken } from '@angular/core';

export const PAGE_POPUP_DATA = new InjectionToken<unknown>('POPUP_DATA');

export type vertical = 'top' | 'centerVertically' | 'bottom';

export type horizontal = 'left' | 'centerHorizontally' | 'right';

export class PagePopupConfig {
  vertical: vertical      = 'centerVertically';
  horizontal: horizontal  = 'right';
}
