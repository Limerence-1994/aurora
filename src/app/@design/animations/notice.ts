/**
 * @data   2019-5-10
 * @author Lee<aurora-club@outlook.com>
 */

import {
  animate,
  state,
  style,
  transition,
  trigger,
  AnimationTriggerMetadata,
} from '@angular/animations';

/**
 * Animations used by the Material snack bar.
 * @docs-private
 */
export const noticeAnimation: {
  readonly state: AnimationTriggerMetadata;
} = {
  /** Animation that shows and hides a snack bar. */
  state: trigger('state', [
    state('void, hidden', style({
      transform: 'translate3d(100%, 0, 0)',
      opacity: 0
    })),
    state('visible', style({
      transform: 'translate3d(0, 0, 0)',
      opacity: 1
    })),
    transition('void => *', animate('150ms', style({transform: 'translate3d(0, 0, 0)', opacity: 1}))),
    transition('* => void, * => hidden', animate('100ms', style({transform: 'translate3d(100%, 0, 0)', opacity: 0}))),
  ])
};
