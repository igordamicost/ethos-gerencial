import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalButtonComponent } from './shared/components/global-button/global-button.component';
import { FormCardComponent } from './shared/components/form-card/form-card.component';
import { UserComponent } from './modules/user/user.component';
import { DashComponent } from './modules/dash/dash.component';
import { EstoqueComponent } from './modules/estoque/estoque.component';
import { ComprasComponent } from './modules/compras/compras.component';
import { VendasComponent } from './modules/vendas/vendas.component';
import { ClientesComponent } from './modules/clientes/clientes.component';
import { UsuariosComponent } from './modules/usuarios/usuarios.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoComponentComponent } from './shared/components/logo-component/logo-component.component';


@NgModule({
  declarations: [
    AppComponent,
    GlobalButtonComponent,
    FormCardComponent,
    UserComponent,
    DashComponent,
    EstoqueComponent,
    ComprasComponent,
    VendasComponent,
    ClientesComponent,
    UsuariosComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    LandingPageComponent,
    LogoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
