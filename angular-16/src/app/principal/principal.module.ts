import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductosComponent } from './productos/productos.component';
import { AppRoutingModule } from '../app-routing.module';
import { PeruComponent } from './peru/peru.component';
import { UsuruguayComponent } from './usuruguay/usuruguay.component';
import { ChileComponent } from './chile/chile.component';
import { TituloComponent } from './titulo/titulo.component';



@NgModule({
  declarations: [
    MenuComponent,
    HomeComponent,
    ContactoComponent,
    ProductosComponent,
    PeruComponent,
    UsuruguayComponent,
    ChileComponent,
    TituloComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[
    MenuComponent,
    HomeComponent,
    ContactoComponent,
    ProductosComponent,
    PeruComponent,
    UsuruguayComponent,
    ChileComponent,
    TituloComponent
  ]
})
export class PrincipalModule { }
