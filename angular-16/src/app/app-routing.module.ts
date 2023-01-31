import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChileComponent } from './principal/chile/chile.component';
import { ContactoComponent } from './principal/contacto/contacto.component';
import { HomeComponent } from './principal/home/home.component';
import { PeruComponent } from './principal/peru/peru.component';
import { ProductosComponent } from './principal/productos/productos.component';
import { UsuruguayComponent } from './principal/usuruguay/usuruguay.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"peru",component:PeruComponent},
  {path:"chile",component:ChileComponent},
  {path:"uruguay",component:UsuruguayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
