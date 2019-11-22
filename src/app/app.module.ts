import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ListarComponent } from './components/listar/listar.component';
import { AboutComponent } from './components/about/about.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditarComponent } from './components/editar/editar.component';
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    ListarComponent,
    AboutComponent,
    AgregarComponent,
    EditarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
