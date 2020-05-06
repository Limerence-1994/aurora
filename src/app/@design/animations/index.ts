import {transition, trigger, useAnimation} from '@angular/animations';
import {enterAnimate, leaveAnimate} from './moves';

export class Animate {
  // 开始状态
  start ?= 'translate3d(100%, 0, 0)';
  end   ?= 'translate3d(0, 0, 0)';
  time  ?= '500ms'
}

export function convert(enter: Animate, leave: Animate) {
  const defaultArgs = {...new Animate(), ...enter};

  console.log('结束的：', leave.start ?? defaultArgs.end);

  return trigger('component', [
    transition(':enter, * => in', [
      useAnimation(enterAnimate, {
        params: defaultArgs
      })
    ]),
    transition(':leave, * => out', [
      useAnimation(leaveAnimate, {
        params: !!leave ? {
          start: leave.start ?? defaultArgs.end,
          end: leave.end ?? defaultArgs.start,
          time: leave.time ?? defaultArgs.time
        } : defaultArgs
      })
    ])
  ]);
}

export * from './notice';
