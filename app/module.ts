import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import FooterComponent from './footer/footer.component'
import MenuBarComponent from './menubar/menubar.component'
import ScoreComponent  from './score/score.component'
import {LoggerService}  from './logger-service/logger-service'
import PageNotFoundComponent from './pagenotfound/pagenotfound.component'
import {ApiService} from "./api-service/api-service";
import { TableData } from './table';
import {AgmCoreModule} from "@agm/core";
import HomePageComponent from "./homePage/homePage.component";
import MapComponent from "./map/map.component";
import SearchFormComponent from "./searchForm/searchForm.component";
import TableComponent from "./table/table.component";

@NgModule({
    imports: [BrowserModule,FormsModule,TableData,
        AgmCoreModule.forRoot({
        apiKey: 'AIzaSyAqW1hwjAN3wlnU2eD0KVm4LUPzHmPmdBM'
    }),
        RouterModule.forRoot([
            { path: '**', component: PageNotFoundComponent }
        ])
      ],
    declarations: [
        FooterComponent,
        MenuBarComponent,
        ScoreComponent,
        HomePageComponent,
        MapComponent,
        SearchFormComponent,
        TableComponent,
        PageNotFoundComponent
    ],
    //bootstrap: [ApplicationComponent],
    providers: [LoggerService,ApiService]
})
export default class AppModule {}
