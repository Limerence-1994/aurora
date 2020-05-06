import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Mode, MonitorConfig, MonitorOptions, StaTemplate, Status} from '../status-monitor.config';
import {StatusMonitorService} from '../status-monitor.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'con-status-monitor',
  templateUrl: './status-monitor.component.html',
  styleUrls: ['./status-monitor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusMonitorComponent implements OnInit, StaTemplate, OnDestroy {

  @Input() panelClass:  string;
  @Input() width:       number;
  @Input() value:       number;

  @Output() isComplete: EventEmitter<any> = new EventEmitter();

  monitorStatus: MonitorConfig = new MonitorConfig();

  private subscription: Subscription;
  private timer;

  constructor(
    private cdr:        ChangeDetectorRef,
    public monitor:     StatusMonitorService
  ) { }

  ngOnInit() {
    this.subscription = this.monitor
      .getProgressStatus()
      .subscribe(this.handler.bind(this));
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handler(config: MonitorConfig): void {
    if (this.timer){
      clearTimeout(this.timer);
    }
    this.monitorStatus = {...this.monitorStatus, ...config};
    if (config.complete) {
      this.dismiss();
    }
    this.cdr.detectChanges();
  };

  dismiss() {
    this.monitorStatus.caller = 'complete';
    this.monitorStatus.mode = MonitorOptions.DISMISS;
    this.isComplete.emit();
    this.timer = setTimeout(_ => {
      this.monitorStatus.caller = 'ready';
      this.cdr.detectChanges();
    }, 1500);
  }
}
