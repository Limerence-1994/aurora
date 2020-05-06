/**
 * aurora-forum
 * Copyright Lee. All Rights Reserved.
 *
 * @author Lee  <aurora-club@outlook.com>
 * @date   2020/5/6 13:50
 *
 * Use of this source code is governed by an MIT-style license that can be
 */
import {animate, style, animation} from '@angular/animations';

export const enterAnimate = animation([
  style({
    transform: '{{start}}'
  }),
  animate('{{time}}',
    style({
      opacity: 1,
      transform: '{{end}}'
    })
  )
]);

export const leaveAnimate = animation([
  style({
    transform: '{{start}}'
  }),
  animate('{{time}}',
    style({
      transform: '{{end}}'
    })
  )
]);
