import {ElementRef, Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {CdkScrollable, ScrollDispatcher} from '@angular/cdk/scrolling';
import {distinctUntilChanged} from 'rxjs/operators';

type Direction = 'down' | 'top';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private activeElement: ElementRef;
  private _lastOffsetTop: number;                       // 上次top偏移量
  private _direction: Direction;                        // 上次方向

  private alreadyToTop: Subject<boolean>  = new Subject<boolean>(); // 到达顶部
  private alreadyToEnd: Subject<boolean>  = new Subject<boolean>(); // 到达底部
  private distance: Subject<number>       = new Subject<number>();  // 滚动距离
  private direction: Subject<Direction>   = new Subject<Direction>(); // 滚动方向

  // global
  static windowScrollToTop() {
    window.scrollTo(0, 0);
  }

  constructor(private scrollDispatcher: ScrollDispatcher) {}

  private setScrollData(scroll: CdkScrollable) {
    const offsetTop = scroll.measureScrollOffset('top');
    // 与上次位置相同 忽略
    if (this._lastOffsetTop === offsetTop) {
      return;
    }
    const offsetBot = scroll.measureScrollOffset('bottom');
    const direction = this._lastOffsetTop > offsetTop ? 'top' : 'down';
    this._lastOffsetTop = offsetTop;
    this.distance.next(offsetTop);
    this.alreadyToTop.next(offsetTop === 0);  // 是否到达顶部
    this.alreadyToEnd.next(offsetBot === 0);  // 是否到达底部
    if (direction !== this._direction) {
      this._direction = direction;
      this.direction.next(direction); // 页面滚动方向
    }
  }

  private getScrollContainer() {
    return this.scrollDispatcher
      .getAncestorScrollContainers(this.activeElement).shift();
  }

  scrollToTop(top = 0, behavior: 'auto' | 'smooth' = 'smooth') {
    this.getScrollContainer().scrollTo({
      left: 0,
      top: top,
      behavior
    })
  }

  getHostElement() {
    return this.getScrollContainer().getElementRef().nativeElement;
  }

  /**
   * 开始监听组件滚动
   * 接受一个元素作为参数当做参靠，忽略掉其他定义cdkScrollable的滚动事件
   * @param ele 参考的组件
   */
  start(ele: ElementRef) {
    this.activeElement = ele;
    this.scrollDispatcher.ancestorScrolled(ele, 50)
      .subscribe(r => typeof r !== 'undefined'
        ? this.setScrollData(r)
        : void 0
      );
  }

  directionNotice(): Observable<Direction> {
    return this.direction.asObservable().pipe(distinctUntilChanged());    // 过滤与上次值重复的通知
  }

  alreadyTopNotice(): Observable<boolean> {
    return this.alreadyToTop.asObservable().pipe(distinctUntilChanged());
  }

  alreadyEndNotice(): Observable<boolean> {
    return this.alreadyToEnd.asObservable().pipe(distinctUntilChanged());
  }

  distanceNotice(): Observable<number> {
    return this.distance.asObservable();
  }
}
