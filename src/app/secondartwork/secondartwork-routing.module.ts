import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecondartworkPage } from './secondartwork.page';

const routes: Routes = [
  {
    path: '',
    component: SecondartworkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondartworkPageRoutingModule {}
