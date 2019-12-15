import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondartworkPageRoutingModule } from './secondartwork-routing.module';

import { SecondartworkPage } from './secondartwork.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondartworkPageRoutingModule
  ],
  declarations: [SecondartworkPage]
})
export class SecondartworkPageModule {}
