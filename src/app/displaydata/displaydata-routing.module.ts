import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplaydataPage } from './displaydata.page';

const routes: Routes = [
  {
    path: '',
    component: DisplaydataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplaydataPageRoutingModule {}
