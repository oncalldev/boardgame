import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BoardComponent} from './board/board.component';
import {MaterialModule} from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
