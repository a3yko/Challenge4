import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ViewPrPage } from './view-pr.page';

import { IonicModule } from '@ionic/angular';

import { ViewPrPageRoutingModule } from './view-pr-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewPrPageRoutingModule
  ],
  declarations: [ViewPrPage]
})
export class ViewPrPageModule {}
