import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import HomePageComponent from './homePage/homePage.component';
import {SearchFormComponent} from "./searchForm/searchForm.component";
import ApplicationComponent from './application/application.component'
import FooterComponent from './footer/footer.component'
import MenuBarComponent from './menubar/menubar.component'
import ScoreComponent  from './score/score.component'
import {LoggerService}  from './logger-service/logger-service'
import AboutComponent from './about/about.component'
import PageNotFoundComponent from './pagenotfound/pagenotfound.component'
import RestaurantHomeComponent from './pages-Restaurant/restaurant-home/restaurant-home.component'
import RestaurantDetailComponent from './pages-Restaurant/restaurant-detail/restaurant-detail.component'
import RestaurantLocationComponent from './pages-Restaurant/restaurant-location/restaurant-location.component'
import RestaurantMenuComponent from './pages-Restaurant/restaurant-menu/restaurant-menu.component'

@NgModule({
    imports: [BrowserModule,FormsModule,
      RouterModule.forRoot([
            { path: '', component: HomePageComponent },
            { path: 'restaurant/:id', component: RestaurantHomeComponent, data: {displayPrice: true}  },
            { path: '**', component: PageNotFoundComponent },
            { path: 'about', component: AboutComponent  }
        ])
      ],
    declarations: [
      ApplicationComponent,
      SearchFormComponent,
      FooterComponent,
      AboutComponent,
      MenuBarComponent,
      HomePageComponent,
      RestaurantHomeComponent,
      RestaurantDetailComponent,
      RestaurantLocationComponent,
      RestaurantMenuComponent,
      ScoreComponent,
      PageNotFoundComponent
    ],
    bootstrap: [ApplicationComponent],
    providers: [LoggerService]
})
export default class AppModule {}
