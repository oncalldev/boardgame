import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BoardComponent} from './board/board.component';
import { MaterialModule} from './shared/material.module';
import { TeststyleComponent } from './teststyle/teststyle.component';
import { TesthttpComponent } from './testhttp/testhttp.component';
import { TestFilterComponent } from './testfilter/testfilter.component';
import { squareService } from '../app/square.service';
import { messageService } from '../app/message.service';
import { TestrxjsComponent } from './testrxjs/testrxjs.component';
import { Board01Component } from './board01/board01.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TeststyleComponent,
    TesthttpComponent,
    TestFilterComponent,
    TestrxjsComponent,
    Board01Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [squareService,
              messageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
