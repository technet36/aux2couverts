import {Component} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'my-home-page',
    templateUrl: 'homePage.component.html'
})
export default class HomePageComponent {
    constructor() {
        console.log("homePage.ts");
        //todo : init the map and the table
    }
}