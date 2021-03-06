import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Resto,RestoService} from '../../restaurant-service/restaurant-service';

@Component({
    moduleId: module.id,
    selector:    'osl-restaurant-home',
    templateUrl: 'restaurant-home.component.html',
    styleUrls:  ['restaurant-home.component.css'],
    providers: [RestoService]
})
export default class RestaurantHomeComponent implements OnInit, OnDestroy {

    resto: Resto;
    displayPrice: boolean;
    imageUrl: string;
    tagsString: string = "";

    subscriberParams: any;
    subscriberData: any;

    constructor(private restoService: RestoService, private route: ActivatedRoute) {}

    ngOnInit() {
        this.subscriberParams = this.route.params.subscribe(params => {
            let id: number = +params['id'];   // (+) converts string 'id' to a number
            this.resto = this.restoService.getRestosById(id);
            this.imageUrl = '/images/' + id + '.jpg';
        });

        this.subscriberData = this.route.data.subscribe(data => {
            this.displayPrice = data['displayPrice'];
        });

        //Display Array Tags
        for (let t of this.resto.tag)
        {
          this.tagsString += t + " * ";
        }

    }

    ngOnDestroy() {
        this.subscriberParams.unsubscribe();
        this.subscriberData.unsubscribe();
    }
}
