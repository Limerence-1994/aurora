import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './message/message.component';
import { NoticeContainerComponent } from './notice.service';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProgressCircleModule } from '../../components/progress-circle/progress-circle.module';

@NgModule({
  declarations: [
    MessageComponent,
    NoticeContainerComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FontAwesomeModule,
    ProgressCircleModule
  ]
})
export class NoticeModule { }
