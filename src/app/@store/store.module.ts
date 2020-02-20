import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule as ngrxStoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ngrxStoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
  ]
})
export class StoreModule { }
