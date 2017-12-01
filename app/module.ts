import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import FooterComponent from './footer/footer.component';
import MenuBarComponent from './menubar/menubar.component';
import ScoreComponent  from './score/score.component';
import {LoggerService}  from './logger-service/logger-service';
import PageNotFoundComponent from './pagenotfound/pagenotfound.component';
<<<<<<< HEAD
import HomePageComponent from './homePage/homePage.component';
import {SearchFormComponent} from "./searchForm/searchForm.component";
=======
import RestaurantHomeComponent from './pages-Restaurant/restaurant-home/restaurant-home.component';
import RestaurantDetailComponent from './pages-Restaurant/restaurant-detail/restaurant-detail.component';
import RestaurantLocationComponent from './pages-Restaurant/restaurant-location/restaurant-location.component';
import RestaurantMenuComponent from './pages-Restaurant/restaurant-menu/restaurant-menu.component';
>>>>>>> page2

@NgModule({
    imports: [BrowserModule,FormsModule,
      RouterModule.forRoot([
            { path: '**', component: PageNotFoundComponent }
        ])
      ],
    declarations: [
<<<<<<< HEAD
        FooterComponent,
        MenuBarComponent,
        ScoreComponent,
        PageNotFoundComponent,
        HomePageComponent,
        SearchFormComponent,
    ],
    bootstrap: [HomePageComponent],
=======
      FooterComponent,
      MenuBarComponent,
      ScoreComponent,
      PageNotFoundComponent,
      RestaurantHomeComponent,
      RestaurantDetailComponent,
      RestaurantLocationComponent,
      RestaurantMenuComponent
    ],
    bootstrap: [RestaurantHomeComponent],
>>>>>>> page2
    providers: [LoggerService]
})
export default class AppModule {}
