import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  RouteConfigLoadEnd,
  RouteConfigLoadStart,
  Router
} from '@angular/router';
import {StatusMonitorService} from '../@public/integrated/status-monitor';
import {ModeState, ModeStateEnum} from '../@models/mode.model';
import {filter, map, mergeMap, switchMap, tap} from 'rxjs/operators';
import {AppModeService, ScrollService, SiteMetaService} from '../@public/services';
import {Subscription, merge} from 'rxjs';
import {RouterMate} from '../@models/settings.module';
import set = Reflect.set;

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
})
export class CoreComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('cdRef')
  public container: ElementRef;
  public mode: ModeState;
  private subscriber: Subscription[] = [];
  private navigating: boolean;

  constructor(
    private router: Router,
    private scroll: ScrollService,
    private cdr: ChangeDetectorRef,
    private meta: SiteMetaService,
    private modeService: AppModeService,
    private activatedRoute: ActivatedRoute,
    private statusMonitor: StatusMonitorService,
  ) {
  }

  ngAfterViewInit(): void {
    // 需要监听滚动容器中子元素的位置
    this.scroll.start(this.container);
  }

  ngOnInit() {
    this.subscriber.push(
      this.listenMode(),
      this.listenScroll(),
      this.router.events.pipe(
        // 监听并且设置状态
        tap(this.navigateStatus.bind(this)),
        // 现在只需要监听结束的状态
        filter(event => event instanceof NavigationEnd),
        // 转化为activatedRoute
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        // 获取主要路由出口
        filter(route => route.outlet === 'primary'),
        // 提取data
        mergeMap(route => route.data)
      ).subscribe((mate: RouterMate) => {
        this.scroll.scrollToTop(mate.scrollTop ?? 0);
        this.meta.update(mate.metadata);
        if (mate.locking) {
          this.modeService.update(ModeStateEnum.CLOSE, 'core router');
        } else if (this.mode !== ModeStateEnum.OPEN) {
          this.modeService.update(ModeStateEnum.OPEN, 'core router');
        }
        setTimeout(_ => this.navigating = false, 300)
      })
    );
  }

  ngOnDestroy(): void {
    for (const a of this.subscriber) {
      a.unsubscribe();
    }
  }

  private listenMode(): Subscription {
    return this.modeService
      .getModeStatus()
      .subscribe(next => {
        this.mode = next;
        this.cdr.detectChanges();
      })
  }

  private listenScroll():Subscription {
    return this.scroll.directionNotice()
      .pipe(filter(_ => !this.navigating)) // 路由导航时忽略
      .subscribe(next => {
        this.modeService.update(next === 'top'
          ? ModeStateEnum.OPEN
          : ModeStateEnum.SIMPLIFY, 'core scroll');
      })
  }

  private navigateStatus(event) {
    if (event instanceof NavigationStart) {
      this.navigating = true;
    }
    if (event instanceof RouteConfigLoadStart) {
      this.statusMonitor.uncertain('navigate');
    }
    if (event instanceof RouteConfigLoadEnd) {
      this.statusMonitor.close();
    }
    if (event instanceof NavigationError) {
      this.statusMonitor.error();
    }
  }
}
