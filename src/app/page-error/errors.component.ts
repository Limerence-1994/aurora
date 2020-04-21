import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {faBan} from '@fortawesome/free-solid-svg-icons';
import {Location} from '@angular/common';
import {POPUP_DATA} from '../@public/services/popup/popup.config';
import {slideIntoLeft} from '../@design/animations';
import {ComponentAnimation} from '../@extends/components';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss'],
  animations: [slideIntoLeft]
})

export class ErrorsComponent extends ComponentAnimation implements OnInit, OnDestroy {

  public icon = faBan;

  constructor(
    @Inject(POPUP_DATA) public data: ErrorConfig,
    public location: Location,
  ) {
    super();
    super.setEnter('translate3d(100%, 0, 0)', 'translate3d(0%, 0, 0)')
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    super.setLeave('translate3d(0, 0, 0)', 'translate3d(100%, 0, 0)')
  }
}

export interface ErrorConfig {
  code: number;
  info: string;
}
