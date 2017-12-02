import {Component, OnInit} from '@angular/core';
import {Resto, RestoService} from "../restaurant-service/restaurant-service";

@Component({
    moduleId: module.id,
    selector: 'my-form',
    templateUrl: 'searchForm.component.html',
    styleUrls:['searchForm.component.css']

})
export class SearchFormComponent implements OnInit {

    results: Array<Resto>;
    inputLocation: string;
    inputTag: string;
    mesResto: Array<Resto>;
    tags: Array<string>;
    cities: Array<string>;
    markers: Array<Marker>;
    sortDirect:number;

    constructor() {
        this.mesResto = new RestoService().getRestaurants();
        this.sortDirect=1;
        this.inputLocation = "";
        this.inputTag= "";
        this.cities = [];
        this.tags = [];
        this.results = this.mesResto;
        this.mesResto.forEach(function (unResto) {
            if (!this.cities.includes(unResto.city)) this.cities.push(unResto.city);
            unResto.tag.forEach(function (unTag) {
                if (!this.tags.includes(unTag)) this.tags.push(unTag);
            },this);
        },this);
        //console.log(this.mesResto);
    }

    ngOnInit(): void {
        //TableComponent.
    }

    getResult() {
        let isSearch:boolean = false;
        this.results = [];
        this.markers = [];
        this.mesResto.forEach(function (unResto) {
            isSearch = false;
            if (this.inputLocation === unResto.city || this.inputLocation === ""){
                unResto.tag.forEach(function (unTag) {
                    if (unTag === this.inputTag || this.inputTag === ""){
                        isSearch = true;
                    }
                },this);
            }
            if (isSearch) {
              this.results.push(unResto);
              let restoMarker:Marker = {lat:unResto.lat,lng:unResto.long, restoId:unResto.id,label:unResto.name};
              this.markers.push(restoMarker);
            }
        },this);
    }

    sortByName(that){
      that.results.sort(function (a, b) {
        return that.sortDirect*a.name.localeCompare(b.name);
      });
      that.sortDirect*=-1;
    }

    sortByCity(that){
      that.results.sort(function (a, b) {
        return that.sortDirect*a.city.localeCompare(b.city);
      });
      that.sortDirect*=-1;
    }

    sortByRate(that){
      that.results.sort(function (a, b) {
        return that.sortDirect*(a.averageScore-b.averageScore);
      });
      that.sortDirect*=-1;
    }

  clickRow(restoId: Number) {
        console.log("clicked on resto with id :"+restoId);
    }

}
// just an interface for type safety.
interface Marker {
  lat: number;
  lng: number;
  restoId:number;
  label?: string;
}
