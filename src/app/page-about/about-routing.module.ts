import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { IndexComponent } from './index/index.component';
import { LinksComponent } from './links/links.component';
import { DevLogComponent } from './dev-log/dev-log.component';
import { RouterMate } from '../@models/settings.module';

export const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
        data: { metadata: {identifier: 'About US'} }
      },
      {
        path: 'dev',
        component: DevLogComponent,
        data: { metadata: {identifier: 'Development Log'}, scrollTop: 750 }
      },
      {
        path: 'links',
        component: LinksComponent,
        data: { metadata: {identifier: 'Friendship Links'}, scrollTop: 750 }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutRoutingModule { }
