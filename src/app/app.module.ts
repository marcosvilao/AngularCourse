import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormularioComponent } from './formulario/formulario.component';
import { LoopsComponent } from './loops/loops.component';
import { SwitchComponent } from './switch/switch.component';
import { Formulario2Component } from './formulario2/formulario2.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    ButtonsComponent,
    FormularioComponent,
    LoopsComponent,
    SwitchComponent,
    Formulario2Component,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
