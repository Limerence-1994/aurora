import {Component, Input, OnInit} from '@angular/core';
import {ModeState} from '../../@models/mode.model';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

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
    name: 'Trial court',
    src: '/court'
  },
  {
    name: 'About us',
    src: '/about'
  }
];

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() mode: ModeState;

  public navigation = navigation;
  private openSecondary: Subject<boolean> = new Subject();
  private timer;
  constructor(private router: Router) {}

  ngOnInit() {
  }

  userSession() {
    this.router.navigate(['/session/signin']);
  }

  getSecondaryMode() {
    return this.openSecondary;
  }

  changeSecondaryNav(type: string) {
    const action = type === 'mouseenter';
    if (action) {
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
}

interface HeadItem {
  name: string;
  src: string;
}
