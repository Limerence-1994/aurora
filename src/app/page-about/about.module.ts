import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AboutRoutingModule } from './about-routing.module';
import { NoticeEventsModule } from '../@public/directive/notice-events/notice-events.module';
import { CharacterModule } from '../@public/components/character/character.module';
import { LinksComponent } from './links/links.component';
import { DevLogComponent } from './dev-log/dev-log.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    AboutComponent,
    LinksComponent,
    DevLogComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    CharacterModule,
    NoticeEventsModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
