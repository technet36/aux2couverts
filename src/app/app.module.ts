import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import {SearchFormComponent} from "./searchForm/searchForm.component";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqW1hwjAN3wlnU2eD0KVm4LUPzHmPmdBM'
    })
  ],
  providers: [],
  declarations: [ SearchFormComponent ],
  bootstrap: [ SearchFormComponent ]
})
export class AppModule {}
