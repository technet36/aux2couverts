import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Resto,RestoService} from '../../restaurant-service/restaurant-service';

@Component({
    moduleId:     module.id,
    selector:    'osl-restaurant-home',
    templateUrl: 'restaurant-home.component.html',
    providers: [RestoService]
})
export default class RestaurantHomeComponent implements OnInit, OnDestroy {

    resto: Resto;
    restoServ: RestoService; //Suppr Router
    subscriberParams: any;

    //constructor(private restoService: RestoService, private route: ActivatedRoute) {}
    constructor() {}

    ngOnInit() {
        /*this.subscriberParams = this.route.params.subscribe(params => {
            let id: number = +params['id'];   // (+) converts string 'id' to a number
            this.resto = this.restoService.getRestosById(id);
        });*/
        this.restoServ = new RestoService()            //Suppr Router
        this.resto = this.restoServ.getRestosById(0);  //Suppr Router
    }

    ngOnDestroy() {
        this.subscriberParams.unsubscribe();
    }
}
