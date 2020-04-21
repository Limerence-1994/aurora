import {Injectable, Injector} from '@angular/core';
import {ComponentType, Overlay, OverlayConfig, PositionStrategy} from '@angular/cdk/overlay';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {POPUP_DATA, PopupConfig} from './popup.config';
import {PopupRef} from './popup.ref';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(
    private _overlay: Overlay,
    private injector: Injector
  ) { }

  // 自定义依赖注入
  private _createInjector(data: unknown) {
    const weakMap = new WeakMap();
    weakMap.set(POPUP_DATA, data);
    return new PortalInjector(this.injector, weakMap);
  }
  // 设置定位策略
  private createPosition(config?: PopupConfig): PositionStrategy {
    let position: PositionStrategy;
    if (config.origin) {
      position = this._overlay.position()
        .flexibleConnectedTo(config.origin);
    } else {
      position = this._overlay.position().global();
      position[config.horizontal](config.horizontal === 'centerHorizontally' ? '0' : '16px');
      position[config.vertical](config.vertical === 'centerVertically' ? '0' : '16px');
    }
    return position
  }

  open<T>(
    component: ComponentType<T>,
    data?: unknown,
    config?: PopupConfig
  ): PopupRef<T, any> {
    config = {...new PopupConfig(), ...config};
    const position      = this.createPosition(config);
    const injector      = this._createInjector(data);
    const portal        = new ComponentPortal(component, null, injector);
    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.clickBackdropClose,
      positionStrategy: position,
    });
    const overlayRef    = this._overlay.create(overlayConfig);
    overlayRef.attach(portal);

    return new PopupRef(overlayRef, config);
  }
}
