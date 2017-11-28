import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import FooterComponent from './footer/footer.component'
import MenuBarComponent from './menubar/menubar.component'
import ScoreComponent  from './score/score.component'
import {LoggerService}  from './logger-service/logger-service'
import PageNotFoundComponent from './pagenotfound/pagenotfound.component'

@NgModule({
    imports: [BrowserModule,FormsModule,
      RouterModule.forRoot([
            { path: '**', component: PageNotFoundComponent }
        ])
      ],
    declarations: [
      FooterComponent,
      MenuBarComponent,
      ScoreComponent,
      PageNotFoundComponent
    ],
    //bootstrap: [ApplicationComponent],
    providers: [LoggerService]
})
export default class AppModule {}
