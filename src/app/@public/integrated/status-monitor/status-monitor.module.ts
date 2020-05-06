import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusMonitorComponent } from './status-monitor/status-monitor.component';
import { CharacterModule } from '../../components/character/character.module';

@NgModule({
  declarations: [
    StatusMonitorComponent
  ],
  imports: [
    CommonModule,
    CharacterModule
  ],
  exports: [
    StatusMonitorComponent
  ]
})
export class StatusMonitorModule { }
