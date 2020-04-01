import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  headTag: HTMLElement;
  styleTag: HTMLLinkElement;
  private _isLoaded = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.headTag = this.document.getElementsByTagName('head')[0];
    this.styleTag = this.document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;
  }

  loadStyle(styleName: string) {
    if (!this._isLoaded) {
      this._isLoaded = true;
      this.styleTag = this.document.createElement('link');
      this.styleTag.id = 'client-theme';
      this.styleTag.rel = 'stylesheet';
      this.styleTag.href = `${styleName}.css`;
      this.headTag.appendChild(this.styleTag);
    }
    return new Promise((resolve, reject) => {
      this.styleTag.onload  = () => resolve(true);
      this.styleTag.onerror = (e) => reject(e);
    });
  }

  reload(styleName: string) {
    this.styleTag.href = styleName;
  }
}
