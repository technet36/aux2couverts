import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Resto} from '../../restaurant-service/restaurant-service';

@Component({
    moduleId:     module.id,
    selector:    'osl-restaurant-home',
    templateUrl: 'restaurant-home.component.html'
})
export default class RestaurantHomeComponent implements OnInit, OnDestroy {

    resto: Resto;
    displayPrice: boolean;

    subscriberParams: any;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.subscriberParams = this.route.params.subscribe(params => {
            let id: number = +params['id'];   // (+) converts string 'id' to a number
        });

    }

    ngOnDestroy() {
        this.subscriberParams.unsubscribe();
    }
}
