import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy} from '@angular/core';
import {sleep} from 'src/app/@public/toolset/functions';

@Component({
  selector: 'pub-text-distortion',
  templateUrl: './text-distortion.component.html',
  styleUrls: ['./text-distortion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextDistortionComponent implements OnDestroy {

  private _text: string;
  private _prev = [];
  @Input('interval')
  interval: number = 50;

  @Input('text')
  set text(next: string) {
    if (!this._prev || this._prev.length === 0) {
      this._text = next;
      this._prev = next.split('');
      return;
    }
    void this.transform(next);
  }

  get text() {
    return this._text;
  }

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnDestroy(): void {
    this._prev = null;
  }

  async transform(next: string) {
    const len = next.length;
    let index = 0;
    for (;index < len; index++) {
      this._prev[index] = next.substr(index, 1);
      this._text = this._prev.join('');
      this.cdr.detectChanges();
      await sleep(this.interval);
    }
    this._text = next;
    this.cdr.detectChanges();
  }
}
