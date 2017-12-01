import {Component, OnInit} from '@angular/core';
import {Resto, RestoService} from "../restaurant-service/restaurant-service";


@Component({
    moduleId: module.id,
    selector: 'my-form',
    templateUrl: 'searchForm.component.html'

})
export class SearchFormComponent implements OnInit {

    results: string[];
    inputLocation: string;
    inputTag: string;
    mesResto: Array<Resto>;
    // Inject HttpClient into your component or service.
    constructor() {
        this.mesResto = new RestoService().getRestaurants();
        console.log(this.mesResto);
    }

    ngOnInit(): void {

            console.log("Init");
    }

    getResult() {

    }
}