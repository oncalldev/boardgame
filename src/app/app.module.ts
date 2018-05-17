import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {BoardComponent} from './board/board.component';
import {MaterialModule} from './shared/material.module';
import { TeststyleComponent } from './teststyle/teststyle.component';
import { TesthttpComponent } from './testhttp/testhttp.component';
import { TestfilterComponent } from './testfilter/testfilter.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TeststyleComponent,
    TesthttpComponent,
    TestfilterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
