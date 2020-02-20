import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./page-home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./page-about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'session',
    loadChildren: () => import('./page-session/session.module').then(m => m.SessionModule),
  },
  {
    path: 'error',
    loadChildren: () => import('./page-error/error.module').then(m => m.ErrorModule),
    data: { locking: true }
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/error', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
