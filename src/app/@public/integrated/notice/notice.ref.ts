import {ComponentRef, ViewContainerRef} from '@angular/core';
import {Subject} from 'rxjs';

export class NoticeRef<T> {

  noticeElement: ComponentRef<T>;
  private _afterClose$: Subject<boolean> = new Subject<boolean>();
  private _userAction$: Subject<any> = new Subject<any>();

  constructor(private container: ViewContainerRef) {
  }

  /**
   * 解除并销毁当前显示的组件
   */
  dismiss(): void {
    const host = this.noticeElement.hostView;
    const inView = this.container.indexOf(host);
    this.container.remove(inView);
    this.noticeElement.destroy();
    this._afterClose$.complete();
  }

  // 获取关闭时的通知
  afterClose() {
    return this._afterClose$;
  }

  // 用户动作的通知
  userAction() {
    return this._userAction$;
  }

  // 传递用户动作
  sendUserAction(r: any) {
    this._userAction$.next(r);
  }
}
