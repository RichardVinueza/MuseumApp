import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstartworkPage } from './firstartwork.page';

const routes: Routes = [
  {
    path: '',
    component: FirstartworkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstartworkPageRoutingModule {}
