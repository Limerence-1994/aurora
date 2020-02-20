import {Component, OnInit, Inject, HostBinding, OnDestroy} from '@angular/core';
import {faBan} from '@fortawesome/free-solid-svg-icons';
import {Location} from '@angular/common';
import {ERRORS_DATA, ErrorsConfig} from '../errors.config';
import {slideIntoLeft} from '../../../../@design/animations';

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
    @Inject(ERRORS_DATA) public data: ErrorsConfig,
    public location: Location,
  ) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.a = 'out';
  }
}
