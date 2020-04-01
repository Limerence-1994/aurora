import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorContainerComponent } from './error-container.component';

export const routes: Routes = [
  {
    path: '',
    component: ErrorContainerComponent,
    data: { identifier: 'error' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule { }
