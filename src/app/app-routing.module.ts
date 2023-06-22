import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { UsuarioComponent } from './usuarios/usuario/usuario.component';

const routes: Routes = [
  {
    path:'home',
    component:ListaUsuariosComponent
  },
  {
    path:'usuario/:id',
    component:UsuarioComponent
  },
  {
    path:'**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
