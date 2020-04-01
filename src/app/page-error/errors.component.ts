import {Component, OnInit, Inject, HostBinding, OnDestroy} from '@angular/core';
import {faBan} from '@fortawesome/free-solid-svg-icons';
import {Location} from '@angular/common';
import {PAGE_POPUP_DATA} from '../@public/integrated/popup/popup.config';
import {slideIntoLeft} from '../@design/animations';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss'],
  animations: [slideIntoLeft]
})

export class ErrorsComponent implements OnInit, OnDestroy {

  @HostBinding('@component') a = 'in';

  public icon = faBan;

  constructor(
    @Inject(PAGE_POPUP_DATA) public data: ErrorConfig,
    public location: Location,
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.a = 'out';
  }
}

export interface ErrorConfig {
  code: number;
  info: string;
}
