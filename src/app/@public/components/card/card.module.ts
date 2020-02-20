import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AccessCardComponent,
  AccessCardHeadComponent,
  AccessCardContentComponent,
  AccessCardFooterComponent
} from './access-card/access-card.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AccessCardComponent,
    AccessCardHeadComponent,
    AccessCardContentComponent,
    AccessCardFooterComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    AccessCardComponent,
    AccessCardHeadComponent,
    AccessCardContentComponent,
    AccessCardFooterComponent
  ]
})
export class CardModule { }
