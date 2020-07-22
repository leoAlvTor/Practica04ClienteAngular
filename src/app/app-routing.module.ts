import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BodegaComponent} from "./bodega/bodega.component";
import {CategoriaComponent} from "./categoria/categoria.component";
import {LoginComponent} from "./login/login.component";
import {PedidoComponent} from "./pedido/pedido.component";
import {ProductosComponent} from "./productos/productos.component";
import {RegistroComponent} from "./registro/registro.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import { NavbarComponent } from './navbar/navbar.component';



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: BodegaComponent},
  {path: 'categoria', component: CategoriaComponent},
  {path: 'categoria/:bodega', component: CategoriaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pedido', component: PedidoComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'productos/:bodega', component: ProductosComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'nav', component:NavbarComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
