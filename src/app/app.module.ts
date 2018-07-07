import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BoardComponent} from './board/board.component';
import { MaterialModule} from './shared/material.module';



import { SquareService } from '../app/services/square.service';
import { MessageService } from '../app/services/message.service';
import { GeneralService } from '../app/services/general.service';
import { BoardService} from '../app/services/board.service';
import { PlaymasterService } from '../app/services/playmaster.service';

import { Board01Component } from './board01/board01.component';

import { Board02Component } from './board02/board02.component';
import { ActionComponent } from './action/action.component';
import { SurfaceComponent } from './surface/surface.component';
import { TesttooltipComponent } from './testtooltip/testtooltip.component';

import { NgxPopper } from 'angular-popper';
import { TestdragdropComponent } from './testdragdrop/testdragdrop.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    Board01Component,
    Board02Component,
    ActionComponent,
    SurfaceComponent,
    TesttooltipComponent,
    TestdragdropComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    NgxPopper
  ],
  providers: [SquareService,
              MessageService,
              BoardService,
              PlaymasterService,
              GeneralService],
  bootstrap: [AppComponent]
})
export class AppModule { }
