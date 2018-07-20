import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BoardComponent} from './board/board.component';
import { MaterialModule} from './shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { SquareService } from '../app/services/square.service';
import { MessageService } from '../app/services/message.service';
import { GeneralService } from '../app/services/general.service';
import { BoardService} from '../app/services/board.service';
import { PlaymasterService } from '../app/services/playmaster.service';
import { CatService } from '../app/services/cat.service';

import { Board01Component } from './board01/board01.component';

import { Board02Component } from './board02/board02.component';
import { ActionComponent } from './action/action.component';
import { SurfaceComponent } from './surface/surface.component';
import { TesttooltipComponent } from './testtooltip/testtooltip.component';

import { NgxPopper } from 'angular-popper';
import { TestdragdropComponent } from './testdragdrop/testdragdrop.component';
import { BuildboardComponent } from './buildboard/buildboard.component';
import { TestarrayComponent } from './testarray/testarray.component';
import { Testdragdrop01Component } from './testdragdrop01/testdragdrop01.component';
import { TestlocalstorageComponent } from './testlocalstorage/testlocalstorage.component';

import { TestwebapiComponent } from './testwebapi/testwebapi.component';
import { TestinputComponent } from './testinput/testinput.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    Board01Component,
    Board02Component,
    ActionComponent,
    SurfaceComponent,
    TesttooltipComponent,
    TestdragdropComponent,
    BuildboardComponent,
    TestarrayComponent,
    Testdragdrop01Component,
    TestlocalstorageComponent,
    TestwebapiComponent,
    TestinputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    NgxPopper
  ],
  providers: [SquareService,
              MessageService,
              BoardService,
              PlaymasterService,
              GeneralService,
              CatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
