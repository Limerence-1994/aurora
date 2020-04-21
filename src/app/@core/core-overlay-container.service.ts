import {Inject, Injectable, OnDestroy} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';
import {DOCUMENT} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CoreOverlayContainerService
  extends OverlayContainer
  implements OnDestroy {

  constructor(@Inject(DOCUMENT) _document: any) {
    super(_document);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  getRootElement(): Element {
    return this._document.querySelector('#core');
  }

  protected _createContainer(): void {
    const container = document.createElement('div');
    container.classList.add('app-overlay-container');
    this._containerElement = container;
    this._appendToRootComponent();
  }

  private _appendToRootComponent(): void {
    if (!this._containerElement) {
      return;
    }

    const rootElement = this.getRootElement();
    const parent = rootElement || this._document.body;
    parent.appendChild(this._containerElement);
  }
}
