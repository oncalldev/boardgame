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
import { generalService } from '../app/services/general.service';
import { boardService} from '../app/services/board.service';
import { TestrxjsComponent } from './testrxjs/testrxjs.component';
import { Board01Component } from './board01/board01.component';
import { TestarrayComponent } from './testarray/testarray.component';
import { Testhttp01Component } from './testhttp01/testhttp01.component';
import { Testhttp02Component } from './testhttp02/testhttp02.component';
import { Board02Component } from './board02/board02.component';
import { ActionComponent } from './action/action.component';
import { SurfaceComponent } from './surface/surface.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    TeststyleComponent,
    TesthttpComponent,
    TestFilterComponent,
    TestrxjsComponent,
    Board01Component,
    TestarrayComponent,
    Testhttp01Component,
    Testhttp02Component,
    Board02Component,
    ActionComponent,
    SurfaceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [squareService,
              messageService,
              boardService,
              generalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
