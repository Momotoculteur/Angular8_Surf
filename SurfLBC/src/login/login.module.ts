import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { LoginComponent } from './login.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [InscriptionComponent, ConnexionComponent, LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule
  ]
})
export class LoginModule { }
