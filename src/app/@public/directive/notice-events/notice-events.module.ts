import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewAppearNoticeDirective } from './view-appear-notice/view-appear-notice.directive';


@NgModule({
  declarations: [
    ViewAppearNoticeDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViewAppearNoticeDirective
  ]
})
export class NoticeEventsModule { }
