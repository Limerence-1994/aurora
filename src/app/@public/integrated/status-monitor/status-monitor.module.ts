import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusMonitorComponent } from './status-monitor/status-monitor.component';

@NgModule({
  declarations: [
    StatusMonitorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusMonitorComponent
  ]
})
export class StatusMonitorModule { }
