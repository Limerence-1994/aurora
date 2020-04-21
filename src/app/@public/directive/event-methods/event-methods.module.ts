import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowProgressDirective } from './show-progress/show-progress.directive';
import { OnceClickDirective } from './once-click/once-click.directive';



@NgModule({
  declarations: [
    ShowProgressDirective,
    OnceClickDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OnceClickDirective,
    ShowProgressDirective
  ]
})
export class EventMethodsModule { }
