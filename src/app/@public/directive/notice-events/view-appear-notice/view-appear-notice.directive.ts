import { Directive, ElementRef, AfterViewInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ScrollService } from '../../../services';

/**
 * 监听元素是否进入（即将进入）视图
 */
@Directive({selector: '[ViewAppearNotice]'})
export class ViewAppearNoticeDirective implements AfterViewInit, OnDestroy {

  /** 监听的模式*/
  @Input()  mode: 'lazy' | 'normal';

  /** 元素进入视图*/
  @Output() entered:  EventEmitter<any> = new EventEmitter();
  /** 元素离开视图*/
  @Output() leave:    EventEmitter<any> = new EventEmitter();

  private intersection$: IntersectionObserver;

  constructor(
    private elementRef: ElementRef,
    private scroll: ScrollService
  ) { }

  ngAfterViewInit(): void {
    this._setModeOptions();
  }

  ngOnDestroy(): void {
    // 这个元素在卸载期间会莫名其妙的消失
    if (this.intersection$) {
      this.intersection$.disconnect();
    }
  }

  private _setModeOptions() {
    if (this.mode === 'lazy') {
      this._initForIntersection({
        root: this.scroll.getHostElement(), rootMargin: '100%'
      });
    } else {
      this._initForIntersection();
    }
  }

  private _initForIntersection(options: IntersectionObserverInit = {}) {
    this.intersection$ = new IntersectionObserver(entries => {
      this._checkForIntersection(entries);
    }, options);

    this.intersection$.observe(<Element>this.elementRef.nativeElement);
  }

  private _checkForIntersection(entries: IntersectionObserverEntry[]) {
    // 过滤掉页面加载完成时第一次执行

    for (const entry of entries) {
      if (this._checkIfIntersecting(entry)) {
        this.entered.emit();
        this.entered.complete();
        // 如果是懒加载模式 触发一次后移除监听
        if (this.mode === 'lazy') {
          this.intersection$.unobserve(this.elementRef.nativeElement);
          this.intersection$.disconnect();
        }
      } else {
        this.leave.emit();
      }
    }
  }

  private _checkIfIntersecting(entry: IntersectionObserverEntry) {
    return (entry as any).isIntersecting && entry.target === this.elementRef.nativeElement;
  }
}
