import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcheterComponent} from './acheter/acheter.component';
import {VendreComponent} from "./vendre/vendre.component";
import {LoginModule} from "../login/login.module";
import {LoginComponent} from "../login/login.component";
import {ConnexionComponent} from "../login/connexion/connexion.component";
import {InscriptionComponent} from "../login/inscription/inscription.component";

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
    component: LoginComponent,
    children: [
      {path: '', redirectTo: 'inscription', pathMatch: 'full'},
      {path: 'connexion', component: ConnexionComponent},
      {path: 'inscription', component: InscriptionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
