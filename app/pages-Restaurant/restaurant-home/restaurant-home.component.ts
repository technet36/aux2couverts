import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Resto,RestoService} from '../../restaurant-service/restaurant-service';

@Component({
    moduleId:     module.id,
    selector:    'osl-restaurant-home',
    templateUrl: 'restaurant-home.component.html',
<<<<<<< HEAD
=======
    styleUrls:  ['restaurant-home.component.css'],
>>>>>>> page2
    providers: [RestoService]
})
export default class RestaurantHomeComponent implements OnInit, OnDestroy {

    resto: Resto;
<<<<<<< HEAD
=======
    restoServ: RestoService; //Suppr Router
>>>>>>> page2
    subscriberParams: any;
    imageUrl: string;
    tagsString: string = "";

<<<<<<< HEAD
    constructor(private restoService: RestoService, private route: ActivatedRoute) {}
=======
    //constructor(private restoService: RestoService, private route: ActivatedRoute) {}
    constructor() {}
>>>>>>> page2

    ngOnInit() {
        /*this.subscriberParams = this.route.params.subscribe(params => {
            let id: number = +params['id'];   // (+) converts string 'id' to a number
            this.resto = this.restoService.getRestosById(id);
<<<<<<< HEAD
        });
=======
        });*/
        this.restoServ = new RestoService()            //Suppr Router
        this.resto = this.restoServ.getRestosById(0);  //Suppr Router

        this.imageUrl = '/images/' + 0 + '.jpg';
        for (let t of this.resto.tag)
        {
          this.tagsString += t + " * ";
        }
>>>>>>> page2

    }

    ngOnDestroy() {
        this.subscriberParams.unsubscribe();
    }
}
