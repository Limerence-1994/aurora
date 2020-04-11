import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ChangeDetectorRef
} from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  NavigationError,
  RouteConfigLoadEnd,
  RouteConfigLoadStart
} from '@angular/router';
import {StatusMonitorService} from '../@public/integrated/status-monitor';
import {ModeState, ModeStateEnum} from '../@models/mode.model';
import {filter, map, mergeMap, tap} from 'rxjs/operators';
import {AppModeService, ScrollService} from '../@public/services';
import {Subscription} from 'rxjs';

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

  constructor(
    private router: Router,
    private scroll: ScrollService,
    private cdr: ChangeDetectorRef,
    private modeService: AppModeService,
    private activatedRoute: ActivatedRoute,
    private statusMonitor: StatusMonitorService,
  ) {}

  ngAfterViewInit(): void {
    // 需要监听滚动容器中子元素的位置
    this.scroll.start(this.container);
  }

  ngOnInit() {
    console.log('core init');
    this.subscriber.push(
      this.modeService
        .getModeStatus()
        .subscribe(this.setMode.bind(this)),

      this.scroll
        .directionNotice()
        .subscribe(r => {
          this.modeService.update(r === 'top'
            ? ModeStateEnum.OPEN
            : ModeStateEnum.SIMPLIFY);
        }),

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
      ).subscribe(r => {
        if (r.locking) {
          this.modeService.update(ModeStateEnum.CLOSE);
        } else if (this.mode !== ModeStateEnum.OPEN) {
          this.modeService.update(ModeStateEnum.OPEN);
        }
      })
    );
  }

  ngOnDestroy(): void {
    for (const a of this.subscriber) {
      a.unsubscribe();
    }
  }

  navigateStatus(event) {
    // FIXME: 有时此处会执行两次， 建议留意如何判断懒加载第一次执行
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

  setMode(rel: ModeStateEnum) {
    this.mode = rel;
    this.cdr.detectChanges();
  }
}
