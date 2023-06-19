import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AulamoduloComponent } from './aulamodulo.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    AulamoduloComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AulamoduloComponent
  ]
})
export class AulamoduloModule { }
