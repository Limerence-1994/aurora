import { AfterViewInit, Component, ContentChildren,
  Directive, Input, OnDestroy, QueryList, ViewChild,
  ViewChildren, ViewEncapsulation } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { NavigationEnd, Router, RouterLink, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

/**
 * 从router-tab.component.html检索mat-tab选项的指令
 */
@Directive({
  selector: 'mat-tab[routerLink]'
})
export class RouterTabDirective {

  @Input()
  public routerLinkActiveOptions: {
    exact: boolean;
  };

  constructor(public tab: MatTab, public routerLink: RouterLink) {}
}

/**
 * 在app-router-tab中设置选项卡的指令
 */
@Component({
  selector: 'app-router-nav-item',
  template: ''
})
export class RouterNavItemComponent {

  @Input()
  public routerLink: RouterLink;

  @Input()
  public routerLinkActiveOptions: {
    exact: boolean;
  };

  @Input()
  public label: string;

  constructor() {}
}

/**
 * RouterTab component with the same behavior than mat-tab-nav-bar
 */
@Component({
  selector: 'app-router-nav',
  templateUrl: './router-nav.component.html',
  styleUrls: ['./router-nav.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class RouterNavComponent implements AfterViewInit, OnDestroy {

  @ViewChild('matTabGroup')
  public matTabGroup: MatTabGroup;

  @ContentChildren(RouterNavItemComponent)
  public routerTabItems !: QueryList<RouterNavItemComponent>;

  @ViewChildren(RouterTabDirective)
  public routerTabs: QueryList<RouterTabDirective>;

  private subscription = new Subscription();

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngAfterViewInit() {
    // Remove tab click event
    this.matTabGroup._handleClick = () => { };
    // Select current tab depending on url
    this.setIndex();
    // Subscription to navigation change
    this.subscription.add(this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.setIndex();
      }
    }));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  public navigation(a) {
    // 添加activeRoute使导航变为相对路径
    this.router.navigate([a.tab.textLabel], { relativeTo: this.activeRoute });
  }
  /**
   * 根据导航设置当前选定的选项卡
   * TODO 尝试移除默认active
   */
  private setIndex() {
    this.routerTabs.find((tab, i) => {
      if (!this.router.isActive(tab.routerLink.urlTree,
        tab.routerLinkActiveOptions
          ? tab.routerLinkActiveOptions.exact
          : false
      )) {
        return false;
      } else {
        tab.tab.isActive = true;
        this.matTabGroup.selectedIndex = i;
        return true;
      }
    });
  }
}
