import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
} from '@angular/material';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatCardModule
  ]
})
export class MaterialModule { }
