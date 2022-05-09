import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearComponent } from './catalogo/crear/crear.component';

const routes: Routes = [
  { path: 'crearArticulo', component: CrearComponent },
  { path: '',   redirectTo: '/projects', pathMatch: 'full' },
  { path: '**',   redirectTo: '/projects', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
