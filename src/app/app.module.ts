import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { BodegaComponent } from './bodega/bodega.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ProductosComponent } from './productos/productos.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from '@angular/forms';
import {ConfigService} from './config/config.service';
import {CookieService} from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    BodegaComponent,
    CategoriaComponent,
    ProductosComponent,
    PedidoComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ConfigService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
