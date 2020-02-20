import {ElementRef, Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {CdkScrollable, ScrollDispatcher} from '@angular/cdk/scrolling';
import {distinctUntilChanged} from 'rxjs/operators';

type Direction = 'down' | 'top';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private _lastOffsetTop: number;                       // 上次top偏移量
  private _direction: Direction;                        // 上次方向

  private alreadyToTop: Subject<boolean> = new Subject<boolean>(); // 到达顶部
  private alreadyToEnd: Subject<boolean> = new Subject<boolean>(); // 到达底部
  private distance:     Subject<number>  = new Subject<number>();  // 滚动距离
  private direction:    Subject<Direction>  = new Subject<Direction>(); // 滚动方向

  // global
  static scrollToTop() {
    window.scrollTo(0, 0);
    // document.body.scrollIntoView({block: 'start', behavior: 'smooth'});
  }

  constructor(private scrollDispatcher: ScrollDispatcher) {}

  private setScrollData(scroll: CdkScrollable) {
    const offsetTop = scroll.measureScrollOffset('top');
    const offsetBot = scroll.measureScrollOffset('bottom');
    const direction = this._lastOffsetTop > offsetTop ? 'top' : 'down';
    // 与上次位置相同 忽略
    if (this._lastOffsetTop === offsetTop) {
      return;
    }
    this._lastOffsetTop = offsetTop;
    this.distance.next(offsetTop);
    this.alreadyToTop.next(offsetTop === 0);  // 是否到达顶部
    this.alreadyToEnd.next(offsetBot === 0);  // 是否到达底部
    if (direction !== this._direction) {
      this._direction = direction;
      this.direction.next(direction); // 页面滚动方向
    }
  }

  /**
   * 开始监听组件滚动
   * 接受一个元素作为参数当做参靠，忽略掉其他定义cdkScrollable的滚动事件
   * @param ele 参考的组件
   */
  start(ele: ElementRef) {
    this.scrollDispatcher.ancestorScrolled(ele, 50)
      .subscribe(r => typeof r !== 'undefined'
        ? this.setScrollData(r)
        : void 0
      );
  }

  directionNotice(): Observable<Direction> {
    return this.direction.pipe(distinctUntilChanged());    // 过滤与上次值重复的通知
  }

  alreadyTopNotice(): Observable<boolean> {
    return this.alreadyToTop.pipe(distinctUntilChanged());
  }

  alreadyEndNotice(): Observable<boolean> {
    return this.alreadyToEnd.pipe(distinctUntilChanged());
  }

  distanceNotice(): Observable<number> {
    return this.distance;
  }
}
