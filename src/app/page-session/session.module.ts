import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionComponent } from './session.component';
import { SigninComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CardModule } from '../@public/components/card/card.module';

import { SessionRoutingModule } from './session-routing.module';

@NgModule({
  declarations: [
    SessionComponent,
    SigninComponent,
    SignoutComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ScrollingModule,
    SessionRoutingModule
  ]
})
export class SessionModule { }
