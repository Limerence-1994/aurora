/**
 * aurora-forum
 * Copyright Lee. All Rights Reserved.
 *
 * @author Lee  <aurora-club@outlook.com>
 * @date   2020/4/21 13:38
 *
 * Use of this source code is governed by an MIT-style license that can be
 */
import {HostBinding, OnDestroy} from '@angular/core';

export abstract class ComponentAnimation implements OnDestroy {
  @HostBinding('@component') animate: string;
  protected constructor() {}

  abstract ngOnDestroy(): void

  protected setEnter(from, to: string) {
    this.animate = `{value: in, params: {
    ENTRY_FROM: "${from}",
    ENTRY_TO: "${to}"}}`
  }

  protected setLeave(from, to: string) {
    this.animate = `{value: out, params: {
      LEAVE_FROM: "${from}",
      LEAVE_TO: "${to}"`
  }
}
