import { Component, OnInit, OnDestroy } from '@angular/core';
import { ErrorsService } from '../@public/integrated/errors';

@Component({
  selector: 'app-error',
  template: '<ng-container></ng-container>'
})
export class ErrorComponent implements OnInit, OnDestroy {

  constructor(private errorService: ErrorsService) { }

  ngOnInit() {
    this.errorService.open({code: 404, info: '请求的文件找不到'});
  }

  ngOnDestroy(): void {
    this.errorService.close();
  }
}
