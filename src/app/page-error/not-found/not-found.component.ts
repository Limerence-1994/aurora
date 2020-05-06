import {Component, HostBinding, Inject, OnDestroy, OnInit} from '@angular/core';
import {PopupRef} from '../../@public/services/popup/popup.ref';
import {PopupService} from '../../@public/services/popup/popup.service';
import {faBan} from '@fortawesome/free-solid-svg-icons';
import {POPUP_DATA} from '../../@public/services/popup/popup.config';
import {Location} from '@angular/common';
import {convert} from 'src/app/@design/animations';

@Component({
  selector: 'app-not-found-container',
  template: `
    <ng-container></ng-container>`
})
export class NotFoundContainerComponent implements OnInit, OnDestroy {

  private popupRef: PopupRef<NotFoundComponent>;

  constructor(private popup: PopupService) {
  }

  ngOnInit() {
    this.popupRef = this.popup.open(
      NotFoundComponent,
      {code: 404, info: '请求的页面不存在或已经失效'}
    );
  }

  ngOnDestroy(): void {
    this.popupRef.close();
  }
}

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  animations: [convert(
    {},
    {time: '350ms'}
  )]
})
export class NotFoundComponent implements OnInit, OnDestroy {
  @HostBinding('@component') animate;
  public icon = faBan;

  constructor(
    @Inject(POPUP_DATA) public data: ErrorConfig,
    public location: Location,
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }
}

export interface ErrorConfig {
  code: number;
  info: string;
}
