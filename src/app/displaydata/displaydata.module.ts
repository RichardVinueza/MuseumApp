import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplaydataPageRoutingModule } from './displaydata-routing.module';

import { DisplaydataPage } from './displaydata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplaydataPageRoutingModule
  ],
  declarations: [DisplaydataPage]
})
export class DisplaydataPageModule {}
