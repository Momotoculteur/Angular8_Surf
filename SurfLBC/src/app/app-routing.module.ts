import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {AcheterComponent} from './acheter/acheter.component';
import {VendreComponent} from "./vendre/vendre.component";

const routes: Routes = [
  {
    path: 'acheter',
    component: AcheterComponent
  },
  {
    path: 'vendre',
    component: VendreComponent
  },
  {
    path: '',
    redirectTo: 'acheter',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: '../login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
