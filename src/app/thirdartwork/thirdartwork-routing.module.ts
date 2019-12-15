import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThirdartworkPage } from './thirdartwork.page';

const routes: Routes = [
  {
    path: '',
    component: ThirdartworkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThirdartworkPageRoutingModule {}
