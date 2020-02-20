import {Component, Input, OnInit} from '@angular/core';
import {ModeState} from '../../@models/mode.model';
import {Router} from '@angular/router';

const navigation = [
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

  constructor(private router: Router) {}

  ngOnInit() {
  }

  userSession() {
    this.router.navigate(['/session/signin']);
  }
}
