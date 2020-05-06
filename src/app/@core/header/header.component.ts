import {ChangeDetectionStrategy, Component, HostListener, Input, OnInit} from '@angular/core';
import {ModeState} from '../../@models/mode.model';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  private timer;

  @Input() mode: ModeState;
  openSearch: boolean;

  navigation      = navigation;
  openSecondary: Subject<boolean> = new Subject();

  constructor(private router: Router) {}

  ngOnInit() {
  }

  @HostListener('click', ['$event'])
  headerClick($event) {
    // 阻止在导航栏的点击事件冒泡
    $event.stopPropagation();
  }
  @HostListener('document:click', ['$event'])
  leaveSelected($event) {
    if (this.openSearch) {
      this.toggleSearchBox();
    }
  }

  // 登录或登出
  userSession() {
    this.router.navigate(['/session/signin']);
  }

  // 二级导航栏状态
  changeSecondaryNav(type: string) {
    if (type === 'mouseenter') {
      clearTimeout(this.timer);
      this.openSecondary.next(true);
    } else {
      this.timer = setTimeout(
        () => this.openSecondary.next(false),
        500);
    }
  }
  tabEnterEvent(label: string) {
    return label === 'Forum' ? this.changeSecondaryNav.bind(this) : () => null;
  }

  toggleSearchBox() {
    this.openSearch = !this.openSearch;
  }
}

interface HeadItem {
  name: string;
  src: string;
}

const navigation: HeadItem[] = [
  {
    name: 'Home',
    src: '/home'
  },
  {
    name: 'Forum',
    src: '/forum'
  },
  {
    name: 'Pioneer',
    src: '/pioneer'
  },
  {
    name: 'Group',
    src: '/group'
  },
  {
    name: 'Library',
    src: '/library'
  },
  {
    name: 'About us',
    src: '/about'
  }
];
