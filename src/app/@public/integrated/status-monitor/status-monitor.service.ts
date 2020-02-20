import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Mode, MonitorConfig, MonitorOptions, Status} from './status-monitor.config';
import {distinctUntilChanged} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatusMonitorService {
  // 当前进度器状态
  private progress$: Subject<MonitorConfig> = new Subject<MonitorConfig>();
  private prevStatus: MonitorConfig;
  private using: boolean;

  constructor() {}

  private start(
    mode: Mode, caller: string, status: Status = MonitorOptions.STATUS_MAIN
  ): this {
    if (this.using) {
      console.warn('已有正在运行的任务');
      return;
    }
    this.using = true;
    this.prevStatus = {
      ...new MonitorConfig(),
      mode, caller, status,
      progress: mode !== MonitorOptions.DETERMINE ? 100 : 0
    };
    this.progress$.next(this.prevStatus);
    return this;
  }
  // 不确定的
  uncertain(caller: string, status?: Status) {
    return this.start(MonitorOptions.UNCERTAIN, caller);
  }
  // 确定的
  definite(caller: string, status?: Status) {
    return this.start(MonitorOptions.DETERMINE, caller, status);
  }

  getProgressStatus(): Observable<MonitorConfig> {
    return this.progress$.pipe(distinctUntilChanged());
  }

  delay(d: number): this {
    this.checkUsing();
    setTimeout(() => this.close(), d);
    return this;
  }

  setStatus(status: Status): this {
    this.checkUsing();
    this.prevStatus = {...this.prevStatus, status};
    this.progress$.next(this.prevStatus);
    return this;
  }

  setProgress(progress: number): void {
    this.checkUsing();
    this.prevStatus = {...this.prevStatus, progress};
    this.progress$.next(this.prevStatus);
  }

  close(): void {
    if (this.using) {
      this.using = false;
      this.progress$.next({ ...this.prevStatus, complete: true });
      this.prevStatus = new MonitorConfig();
    } else {
      throw new Error('不能调用已经关闭的实例');
    }
  }

  succ(delay = 500) {
    this.setStatus(MonitorOptions.STATUS_SUCC).delay(delay);
  }

  warn(delay = 500) {
    this.setStatus(MonitorOptions.STATUS_WARN).delay(delay);
  }

  error(delay = 500) {
    this.setStatus(MonitorOptions.STATUS_ERRO).delay(delay);
  }

  checkUsing() {
    if (!this.using) {
      throw new Error('不能调用已经关闭的实例');
    }
  }
}

