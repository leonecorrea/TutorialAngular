import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AplicativosRoutingModule } from './aplicativos-routing.module';
import { AplicativosComponent } from './aplicativos.component';

@NgModule({
  imports: [
    CommonModule,
    AplicativosRoutingModule
  ],
  declarations: [AplicativosComponent]
})
export class AplicativosModule { }
