import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BoardComponent} from './board/board.component';
import { MaterialModule} from './shared/material.module';



import { squareService } from '../app/square.service';
import { messageService } from '../app/message.service';
import { generalService } from '../app/services/general.service';
import { boardService} from '../app/services/board.service';

import { Board01Component } from './board01/board01.component';

import { Board02Component } from './board02/board02.component';
import { ActionComponent } from './action/action.component';
import { SurfaceComponent } from './surface/surface.component';
import { TesttooltipComponent } from './testtooltip/testtooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    Board01Component,
    Board02Component,
    ActionComponent,
    SurfaceComponent,
    TesttooltipComponent
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
