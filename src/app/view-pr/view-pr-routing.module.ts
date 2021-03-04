import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewPrPage } from './view-pr.page';

const routes: Routes = [
  {
    path: '',
    component: ViewPrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewPrPageRoutingModule {}
