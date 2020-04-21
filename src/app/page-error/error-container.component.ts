import {Component, OnInit, OnDestroy} from '@angular/core';
import {PopupService} from '../@public/services/popup/popup.service';
import {ErrorsComponent} from './errors.component';
import {PopupRef} from '../@public/services/popup/popup.ref';

@Component({
  selector: 'app-error',
  template: '<ng-container></ng-container>'
})
export class ErrorContainerComponent implements OnInit, OnDestroy {

  private popupRef: PopupRef<ErrorsComponent>;

  constructor(private popup: PopupService) {
  }

  ngOnInit() {
    this.popupRef = this.popup.open(
      ErrorsComponent,
      {code: 404, info: '请求的页面不存在或已经失效'}
    );
  }

  ngOnDestroy(): void {
    this.popupRef.close();
  }
}
