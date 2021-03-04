import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'pr/:id',
    loadChildren: () => import('./view-pr/view-pr.module').then( m => m.ViewPrPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },{
    path: 'addpr',
    loadChildren: () => import('./prform/prform.module').then( m => m.PrformPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
