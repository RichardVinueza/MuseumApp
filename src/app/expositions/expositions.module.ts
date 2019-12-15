import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpositionsPageRoutingModule } from './expositions-routing.module';

import { ExpositionsPage } from './expositions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpositionsPageRoutingModule
  ],
  declarations: [ExpositionsPage]
})
export class ExpositionsPageModule {}
