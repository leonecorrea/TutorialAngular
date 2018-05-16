import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AplicativosComponent } from './aplicativos.component';
import { DetalheComponent } from './detalhe/detalhe.component';

const routes: Routes = [
  { path: '', component: AplicativosComponent },
  { path: '/:id', component: DetalheComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AplicativosRoutingModule { }
