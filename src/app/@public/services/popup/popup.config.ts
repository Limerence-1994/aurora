import {ElementRef, InjectionToken} from '@angular/core';

/**
 * aurora-forum
 * Copyright Lee. All Rights Reserved.
 *
 * @author Lee  <aurora-club@outlook.com>
 * @date   2020/4/21 12:11
 *
 * Use of this source code is governed by an MIT-style license that can be
 */


export const POPUP_DATA = new InjectionToken<unknown>('POPUP_DATA');
// 垂直定位
export type vertical = 'top' | 'centerVertically' | 'bottom';
// 水平定位
export type horizontal = 'left' | 'centerHorizontally' | 'right';

export class PopupConfig {
  vertical?: vertical           = 'centerVertically';
  horizontal?: horizontal       = 'right';
  clickBackdropClose?: boolean  = false;
  origin?: ElementRef;
}
