import {Injectable, Injector} from '@angular/core';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';
import {ErrorsComponent} from './errors/errors.component';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {Methods} from '../extends';
import {ERRORS_DATA, ErrorsConfig} from './errors.config';

@Injectable({
  providedIn: 'root'
})
export class ErrorsService extends Methods {

  private overlayRef: OverlayRef;

  constructor(_overlay: Overlay, private injector: Injector) {
    super(_overlay);
  }

  // 自定义依赖注入
  private _createInjector(data: ErrorsConfig) {
    const weakMap = new WeakMap();
    weakMap.set(ERRORS_DATA, data);
    return new PortalInjector(this.injector, weakMap);
  }

  open(data: ErrorsConfig) {
    const injector  = this._createInjector(data);
    const component = new ComponentPortal(ErrorsComponent, null, injector);
    const _position = super.getPositionConfig().right('8').centerVertically();

    this.overlayRef = super.createOverlay({positionStrategy: _position});
    this.overlayRef.attach(component);
  }

  close() {
    this.overlayRef.detach();
  }
}
