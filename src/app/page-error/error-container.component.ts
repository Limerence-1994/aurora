import { Component, OnInit, OnDestroy } from '@angular/core';
import { PagePopupService } from '../@public/integrated/popup/popup.service';
import { ErrorsComponent } from './errors.component';

@Component({
  selector: 'app-error',
  template: '<ng-container></ng-container>'
})
export class ErrorContainerComponent implements OnInit, OnDestroy {

  constructor(private popup: PagePopupService) { }

  ngOnInit() {
    this.popup.open(ErrorsComponent, {code: 404, info: '请求的页面不存在或已经失效'});
  }

  ngOnDestroy(): void {
    this.popup.close();
  }
}
