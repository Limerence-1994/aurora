import {ComponentRef, ViewContainerRef} from '@angular/core';
import {Subject} from 'rxjs';

export class NoticeRef<T> {

  noticeElement: ComponentRef<T>;
  private _afterClose$: Subject<boolean> = new Subject<boolean>();
  private _userAction$: Subject<any> = new Subject<any>();

  constructor(private container: ViewContainerRef) {}

  /**
   * 解除并销毁当前显示的组件
   */
  dismiss(): void {
    // 组件信息
    const host = this.noticeElement.hostView;
    // 查找下标
    const inView = this.container.indexOf(host);
    // 删除 下标不能小于0
    if (inView >= 0) {
      this.container.remove(inView);
      this.noticeElement.destroy();
      this._afterClose$.complete();
      this._userAction$.complete();
    }
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
