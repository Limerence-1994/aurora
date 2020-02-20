import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { ErrorsModule } from '../@public/integrated/errors/errors.module';

import { ErrorRoutingModule } from './error-routing.module';

@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    ErrorsModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule { }
