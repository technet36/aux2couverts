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
    tags:Array<Tag>;
    cities: Array<string>;
    markers: Array<Marker>;
    sortDirect:number;
    initPos:Marker;

    constructor(private restoService:RestoService) {
        this.mesResto = this.restoService.getRestaurants();
        this.results = [];
        this.initPos = {lng:0,lat:0,restoId:0};
        if(window.navigator.geolocation){
          window.navigator.geolocation.getCurrentPosition((pos)=> {
            this.initPos.lat = pos.coords.latitude;
            this.initPos.lng = pos.coords.longitude;
          });
        }

        this.restoService.getRestos("dublin",135).subscribe(searchedResto=>{
          this.results=searchedResto;
        });

        this.sortDirect=1;
        this.inputLocation = "";
        this.inputTag= "";
        this.cities = [];
        this.tags = [];
        this.restoService.getAllTags(91).subscribe(data=>{
            this.tags = data['cuisines'].map(function (eachCuisine) {
              return eachCuisine['cuisine'];
            });
          });
        //this.results = this.mesResto;
        this.mesResto.forEach(function (unResto) {
            if (!this.cities.includes(unResto.city)) this.cities.push(unResto.city);
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
interface Tag {
  cuisine_id:number;
  cuisine_name:string;
}
