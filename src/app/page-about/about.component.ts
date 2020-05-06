import {Component, OnDestroy, OnInit} from '@angular/core';
import {SettingsService} from '../@public/services';
import {Settings} from '../@models/settings.module';
import {Subscription} from 'rxjs';
import {Location} from '@angular/common';
import {Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  settingData: Settings = new Settings();
  isActive = 0;
  private subscription: Subscription[] = [];

  navLinks = [
    {label: '关于', path: './'},
    {label: '技术开发日志', path: 'dev'},
    {label: '留言板', path: 'message'},
    {label: '友情链接', path: 'links'},
  ];

  constructor(
    private router: Router,
    private location: Location,
    private settings: SettingsService,
  ) {
    this.setActive(location.path());
  }

  ngOnInit() {
    this.subscription.push(
      this.settings
        .getSettings()
        .subscribe(next => {
          this.settingData = next;
        }),
      this.router.events.subscribe((data) => {
        if (data instanceof NavigationEnd) {
          this.setActive(data.url);
        }
      }),
      // this.setActive()
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach(obs => obs.unsubscribe());
  }

  setActive(url: string) {
    const len = this.navLinks.length;
    let last = url.substr(1).split('/').pop();
    if (last === 'about') {
      this.isActive = 0;
      return;
    }
    for (let i = 0; i < len; i++) {
      if (last === this.navLinks[i].path) {
        this.isActive = i;
        break;
      }
    }
  }
}
