import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThirdartworkPageRoutingModule } from './thirdartwork-routing.module';

import { ThirdartworkPage } from './thirdartwork.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThirdartworkPageRoutingModule
  ],
  declarations: [ThirdartworkPage]
})
export class ThirdartworkPageModule {}
