import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterNavModule } from '../@public/components/router-nav/router-nav.module';
import { StatusMonitorModule } from '../@public/integrated/status-monitor/status-monitor.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { CurtainWallComponent } from './curtain-wall/curtain-wall.component';
import { FooterComponent } from './footer/footer.component';
import { EventMethodsModule } from '../@public/directive/event-methods/event-methods.module';

import { faGithub, faWeixin } from '@fortawesome/free-brands-svg-icons';
import {
  faTimesCircle, faCompass, faIdCardAlt, faUserSecret, faTrophy,
  faFire, faIdCard, faDungeon, faComment, faCommentAlt, faEnvelope,
  faBook, faToolbox, faLink, faBookReader, faUserCircle, faBell, faSearch, faExpand,
  faSignInAlt, faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';

@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    CurtainWallComponent,
    FooterComponent,
    SearchComponent,
    SearchResultComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    EventMethodsModule,
    MatInputModule,
    RouterNavModule,
    MatButtonModule,
    MatTooltipModule,
    ScrollingModule,
    FontAwesomeModule,
    StatusMonitorModule,
    MatAutocompleteModule,
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule {
  constructor(private iconLibrary: FaIconLibrary) {
    iconLibrary.addIcons(
      faTimesCircle, faCompass, faGithub, faWeixin, faIdCardAlt, faUserSecret,
      faTrophy, faFire, faIdCard, faDungeon, faComment, faCommentAlt, faEnvelope,
      faBook, faToolbox, faLink, faBookReader, faUserCircle, faBell, faSearch, faExpand,
      faSignInAlt, faSignOutAlt
    );
  }
}
