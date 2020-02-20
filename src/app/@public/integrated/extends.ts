import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';


export abstract class Methods {

  protected constructor(protected _overlay: Overlay) {}

  protected getPositionConfig() {
    return this._overlay.position().global();
  }

  protected createOverlay(
    config: OverlayConfig
  ): OverlayRef {
    return this._overlay.create({...new OverlayConfig(), ...config});
  }
}

