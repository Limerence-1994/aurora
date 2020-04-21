import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SessionComponent } from './session.component';
import { SignInContainerComponent, SignInComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import { CardModule } from '../@public/components/card/card.module';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SessionRoutingModule } from './session-routing.module';

@NgModule({
  declarations: [
    SessionComponent,
    SignInContainerComponent,
    SignInComponent,
    SignoutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    MatButtonModule,
    ScrollingModule,
    FontAwesomeModule,
    SessionRoutingModule
  ],
})
export class SessionModule { }
