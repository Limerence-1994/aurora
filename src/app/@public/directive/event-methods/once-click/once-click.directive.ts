import {Directive, Output, EventEmitter, HostListener} from '@angular/core';

@Directive({
  selector: '[onceClick]'
})
export class OnceClickDirective {
  @Output('click.once') stopPropEvent = new EventEmitter();

  constructor() {
  }

  @HostListener('click', ['$event'])
  click($event) {
    $event.stopPropagation();
    this.stopPropEvent.emit($event);
  }
}
