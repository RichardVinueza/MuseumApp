import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstartworkPageRoutingModule } from './firstartwork-routing.module';

import { FirstartworkPage } from './firstartwork.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstartworkPageRoutingModule
  ],
  declarations: [FirstartworkPage]
})
export class FirstartworkPageModule {}
