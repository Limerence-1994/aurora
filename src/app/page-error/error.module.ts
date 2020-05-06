import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ErrorContainerComponent} from './error-container.component';
import {ErrorRoutingModule} from './error-routing.module';
import {CardModule} from '../@public/components/card/card.module';
import {MatButtonModule} from '@angular/material/button';
import {NotFoundComponent, NotFoundContainerComponent} from './not-found/not-found.component';

@NgModule({
  declarations: [
    ErrorContainerComponent,
    NotFoundComponent,
    NotFoundContainerComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    MatButtonModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule {
}
