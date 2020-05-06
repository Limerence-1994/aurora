import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ErrorContainerComponent} from './error-container.component';
import {NotFoundContainerComponent} from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: ErrorContainerComponent,
    children: [
      {
        path: '404',
        component: NotFoundContainerComponent,
        data: {metadata: {identifier: '404 not found'}, locking: true}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {
}
