import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  MdCardModule, MdButtonModule, MdCheckboxModule } from '@angular/material';

import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MdCardModule, MdButtonModule, MdCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
