import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextDistortionComponent} from './text-distortion/text-distortion.component';


@NgModule({
  declarations: [
    TextDistortionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TextDistortionComponent
  ]
})
export class CharacterModule {
}
