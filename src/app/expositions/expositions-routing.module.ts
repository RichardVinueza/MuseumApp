import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpositionsPage } from './expositions.page';

const routes: Routes = [
  {
    path: '',
    component: ExpositionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpositionsPageRoutingModule {}
