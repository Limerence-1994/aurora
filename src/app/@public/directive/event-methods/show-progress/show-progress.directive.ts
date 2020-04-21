import {
  Directive, Input, HostListener,
  Output, EventEmitter, ElementRef
} from '@angular/core';
import {Renderer2} from '@angular/core';

export interface ProgressStatusFn {
  succ: () => void;
  fail: () => void;
  $event: Event;
}

@Directive({
  selector: '[showProgress]'
})
export class ShowProgressDirective {

  @Output('click.status') emitter = new EventEmitter<ProgressStatusFn>();

  @Input() status: string;

  readonly eleClassNames: string;

  constructor(
    private renderer: Renderer2,
    private elr: ElementRef
  ) {
    this.eleClassNames = this.elr.nativeElement.classList.value;
  }

  @HostListener('click', ['$event'])
  handleClick($event) {
    this.setEleClass('start');
    const succ = this._succ.bind(this);
    const fail = this._fail.bind(this);
    $event.preventDefault();
    this.emitter.emit({succ, fail, $event});
  }

  _succ() {
    this.setEleClass('succ');
  }

  _fail() {
    this.setEleClass('fail');
  }

  setEleClass(className: 'start' | 'succ' | 'fail') {
    this.renderer.setAttribute(
      this.elr.nativeElement,
      'class',
      `${this.eleClassNames} ${className}`);
  }
}
