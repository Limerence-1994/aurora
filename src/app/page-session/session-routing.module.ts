import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionComponent } from './session.component';
import { SignInContainerComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';

export const routes: Routes = [
  {
    path: '',
    component: SessionComponent,
    data: { identifier: 'session' },
  },
  {
    path: 'signin',
    component: SignInContainerComponent,
    data: { identifier: 'sign in' }
  },
  {
    path: 'signout',
    component: SignoutComponent,
    data: { identifier: 'sign out' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionRoutingModule { }
