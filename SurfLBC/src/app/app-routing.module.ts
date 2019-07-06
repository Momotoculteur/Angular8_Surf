import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
