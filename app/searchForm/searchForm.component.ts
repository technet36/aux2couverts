import {Component, OnInit} from '@angular/core';
import {Resto, RestoService} from "../restaurant-service/restaurant-service";


@Component({
    moduleId: module.id,
    selector: 'my-form',
    templateUrl: 'searchForm.component.html'

})
export class SearchFormComponent implements OnInit {

    results: Array<Resto>;
    inputLocation: string;
    inputTag: string;
    mesResto: Array<Resto>;
    tags: Array<string>;
    cities: Array<string>;
    constructor() {
        this.mesResto = new RestoService().getRestaurants();
        this.inputLocation = "";
        this.inputTag= "";
        this.cities = [];
        this.tags = [];
        this.results = [];
        this.mesResto.forEach(function (unResto) {
            if (!this.cities.includes(unResto.city)) this.cities.push(unResto.city);
            unResto.tag.forEach(function (unTag) {
                if (!this.tags.includes(unTag)) this.tags.push(unTag);
            },this);
        },this);
        console.log(this.mesResto);
    }

    ngOnInit(): void {

            console.log("Init");
    }

    getResult() {
        console.log(this.inputTag);
        console.log(this.inputLocation);
        let isSearch:boolean = false;
        this.mesResto.forEach(function (unResto) {
            isSearch = false;
            if (this.inputLocation === unResto.city){
                unResto.tag.forEach(function (unTag) {
                    if (unTag === this.inputTag){
                        isSearch = true;
                    }
                },this);
            }
            if (isSearch) this.results.push(unResto);
        },this);
        console.log(this.results)
    }
}