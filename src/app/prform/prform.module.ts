import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrformPageRoutingModule } from './prform-routing.module';

import { PrformPage } from './prform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrformPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PrformPage]
})
export class PrformPageModule {}
