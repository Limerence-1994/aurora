import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export type ProgressMode = 'determinate' | 'indeterminate';

@Component({
  selector: 'progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss']
})
export class ProgressCircleComponent implements OnInit {

  // 直径
  @Input() diameter = 50;

  @Input() mode: ProgressMode = 'indeterminate';

  @Input() cycle: number;

  @Output() done: EventEmitter<any> = new EventEmitter();

  size: number;
  center: number;

  constructor() {}

  ngOnInit() {
    this.size = this.diameter * 3;
    this.center = this.diameter * 1.5;
    if (this.mode === 'determinate' && this.cycle) {
      setTimeout(() => this.done.emit(), this.cycle);
    }
  }

}
