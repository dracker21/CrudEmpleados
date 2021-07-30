import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'listado', loadChildren: () => import('./pages/empleados/listado/listado.module').then(m => m.ListadoModule) }, { path: 'nuevo', loadChildren: () => import('./pages/empleados/nuevo/nuevo.module').then(m => m.NuevoModule) }, { path: 'detalles', loadChildren: () => import('./pages/empleados/detalles/detalles.module').then(m => m.DetallesModule) }, { path: 'editar', loadChildren: () => import('./pages/empleados/editar/editar.module').then(m => m.EditarModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
