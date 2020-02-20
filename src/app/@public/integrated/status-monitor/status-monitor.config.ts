

// 选项
import {Type} from '@angular/core';

export enum MonitorOptions {
  DISMISS       = 'dismiss',      // 关闭
  DETERMINE     = 'determine',    // 确定的
  UNCERTAIN     = 'uncertain',    // 不确定的
  REVERSE       = 'reverse',      // 反向的
  STATUS_MAIN   = 'main',
  STATUS_SUCC   = 'succ',
  STATUS_WARN   = 'warn',
  STATUS_ERRO   = 'error',
}

// 显示模式
export type Mode = MonitorOptions.DETERMINE
  | MonitorOptions.UNCERTAIN
  | MonitorOptions.REVERSE
  | MonitorOptions.DISMISS;

// 目前状态
export type Status = MonitorOptions.STATUS_MAIN
  | MonitorOptions.STATUS_SUCC
  | MonitorOptions.STATUS_WARN
  | MonitorOptions.STATUS_ERRO;

// 配置
export class MonitorConfig {
  // 显示模式
  mode?:        Mode = MonitorOptions.DISMISS;
  // 显示状态(颜色)
  status?:      Status = MonitorOptions.STATUS_MAIN;
  // 调用
  caller        = 'standby';
  // 进度展示
  progress      = 0;
  // 是否完成
  complete?:    boolean;
}

export interface OperationalSet {
  close():                            void;
  delay(d: number):                   this;
  setStatus(status: Status):          this;
  setProgress(progress: number):      void;
}

export interface StaTemplate {
  handler(config: MonitorConfig): void;
}
