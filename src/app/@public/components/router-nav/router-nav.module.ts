import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { RouterTabDirective, RouterNavComponent, RouterNavItemComponent } from './router-nav.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatTabsModule
  ],
  declarations: [
    RouterNavComponent,
    RouterNavItemComponent,
    RouterTabDirective
  ],
  exports: [
    RouterNavComponent,
    RouterNavItemComponent,
    RouterTabDirective
  ]
})
export class RouterNavModule { }
