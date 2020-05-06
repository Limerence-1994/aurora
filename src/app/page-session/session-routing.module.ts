import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SessionComponent } from './session.component';
import { SignInContainerComponent } from './signin/signin.component';
import { SignoutComponent } from './signout/signout.component';

export const routes: Routes = [
  {
    path: '',
    component: SessionComponent,
    data: { metadata: {identifier: 'HOME'} },
  },
  {
    path: 'signin',
    component: SignInContainerComponent,
    data: { metadata: {identifier: 'Sign in'} }
  },
  {
    path: 'signout',
    component: SignoutComponent,
    data: { metadata: {identifier: 'Sign out'} }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SessionRoutingModule { }
