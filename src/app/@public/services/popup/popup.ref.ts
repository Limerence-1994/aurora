import {PopupConfig} from './popup.config';
import {OverlayRef} from '@angular/cdk/overlay';
import {Subject, Subscription} from 'rxjs';

/**
 * aurora-forum
 * Copyright Lee. All Rights Reserved.
 *
 * @author Lee  <aurora-club@outlook.com>
 * @date   2020/4/21 12:06
 *
 * Use of this source code is governed by an MIT-style license that can be
 */

export class PopupRef<T, R = any> {

  private subscription: Subscription;
  private whetherClose: Subject<R | undefined> = new Subject();

  constructor(
    private _overlayRef: OverlayRef,
    private config: PopupConfig
  ) {
    this.clickBackdrop(config);
  }

  // 是否点击背景关闭
  private clickBackdrop(config: PopupConfig) {
    if (config.clickBackdropClose) {
      this.subscription = this._overlayRef
        .backdropClick()
        .subscribe(_ => this.close())
    }
  }

  close() {
    this.whetherClose.next();
    this._overlayRef.detach();
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  closeLater() {
    return this.whetherClose.asObservable();
  }
}
