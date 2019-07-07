import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcheterComponent} from "../app/acheter/acheter.component";
import {LoginComponent} from "./login.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {InscriptionComponent} from "./inscription/inscription.component";


const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {path: '', redirectTo: 'inscription', pathMatch: 'full'},
      {path: 'inscription', component: InscriptionComponent},
      {path: 'connexion', component: ConnexionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
