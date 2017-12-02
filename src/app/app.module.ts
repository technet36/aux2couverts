import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import {SearchFormComponent} from "./searchForm/searchForm.component";
import {HttpClientModule} from "@angular/common/http";
import {RestoService} from "./restaurant-service/restaurant-service";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAqW1hwjAN3wlnU2eD0KVm4LUPzHmPmdBM'
    })
  ],
  providers: [RestoService],
  declarations: [ SearchFormComponent ],
  bootstrap: [ SearchFormComponent ]
})
export class AppModule {}
