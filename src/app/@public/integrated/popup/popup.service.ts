import {Injectable, Injector} from '@angular/core';
import {PagePopupModule} from './popup.module';
import {Methods} from '../extends';
import {ComponentType, Overlay, OverlayRef} from '@angular/cdk/overlay';
import {PAGE_POPUP_DATA, PagePopupConfig} from './popup.config';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';

@Injectable({
  providedIn: PagePopupModule
})
export class PagePopupService extends Methods {

  private overlayRef: OverlayRef;

  constructor(_overlay: Overlay, private injector: Injector) {
    super(_overlay);
  }

  // 自定义依赖注入
  private _createInjector(data: unknown) {
    const weakMap = new WeakMap();
    weakMap.set(PAGE_POPUP_DATA, data);
    return new PortalInjector(this.injector, weakMap);
  }

  open(component: ComponentType<any>, data?: any, config?: PagePopupConfig) {
    config = {...new PagePopupConfig(), ...config};
    // 定位
    const _position = super.getPositionConfig()
      [config.horizontal](config.horizontal === 'centerHorizontally' ? '0' : '16px')
      [config.vertical](config.vertical === 'centerVertically' ? '0' : '16px');
    const injector  = this._createInjector(data);
    const portal    = new ComponentPortal(component, null, injector);

    this.overlayRef = super.createOverlay({positionStrategy: _position});
    this.overlayRef.attach(portal);
  }

  close() {
    this.overlayRef.detach();
  }
}
