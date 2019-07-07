import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AcheterComponent} from "../app/acheter/acheter.component";
import {LoginComponent} from "./login.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import {InscriptionComponent} from "./inscription/inscription.component";


const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
