import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'expositions',
    loadChildren: () => import('./expositions/expositions.module').then( m => m.ExpositionsPageModule)
  },  {
    path: 'firstartwork',
    loadChildren: () => import('./firstartwork/firstartwork.module').then( m => m.FirstartworkPageModule)
  },
  {
    path: 'secondartwork',
    loadChildren: () => import('./secondartwork/secondartwork.module').then( m => m.SecondartworkPageModule)
  },
  {
    path: 'thirdartwork',
    loadChildren: () => import('./thirdartwork/thirdartwork.module').then( m => m.ThirdartworkPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
