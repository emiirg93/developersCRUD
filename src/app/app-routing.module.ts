import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListarComponent } from './components/listar/listar.component';
import { AboutComponent } from './components/about/about.component';
import { AgregarComponent } from './components/agregar/agregar.component';
import { EditarComponent } from './components/editar/editar.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'listar',component:ListarComponent},
  {path:'about',component:AboutComponent},
  {path:'agregar',component:AgregarComponent},
  {path:'editar/:id', component:EditarComponent},
  { path: '**', pathMatch:'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
