import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorContainerComponent } from './error-container.component';
import { PagePopupModule } from '../@public/integrated/popup/popup.module';
import { ErrorsComponent } from './errors.component';
import { ErrorRoutingModule } from './error-routing.module';
import { CardModule } from '../@public/components/card/card.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ErrorsComponent,
    ErrorContainerComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    MatButtonModule,
    PagePopupModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule { }
