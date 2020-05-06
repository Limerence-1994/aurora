import {Component} from '@angular/core';

@Component({
  selector: 'app-error',
  template: '<ng-container><router-outlet></router-outlet></ng-container>'
})
export class ErrorContainerComponent {
  constructor() {
  }
}
