import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './@core/core.module';
import { StoreModule } from './@store/store.module';
import { NoticeModule } from './@public/integrated/notice/notice.module';
import { InitializeService } from './@initialize/initialize.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CoreOverlayContainerService } from './@core/core-overlay-container.service';
import { environment } from '../environments/environment';

export function InitServiceFactory(initService: InitializeService): () => void {
  return () => initService.load();
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule,
    CoreModule,
    NoticeModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [
    InitializeService,
    {
      provide: APP_INITIALIZER,
      useFactory: InitServiceFactory,
      deps: [InitializeService],
      multi: true
    },
    {provide: OverlayContainer, useClass: CoreOverlayContainerService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
