import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { AulamoduloComponent } from './aulamodulo/aulamodulo.component';
import { audit } from 'rxjs';
import { AulamoduloModule } from './aulamodulo/aulamodulo.module';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent

  ],
  imports: [
    BrowserModule,
    AulamoduloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
