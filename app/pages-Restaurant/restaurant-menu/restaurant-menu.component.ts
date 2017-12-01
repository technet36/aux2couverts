import {Component,Input} from '@angular/core';
import {Resto} from '../../restaurant-service/restaurant-service';

@Component({
    moduleId:     module.id,
    selector:    'osl-restaurant-menu',
    templateUrl: 'restaurant-menu.component.html'
})
export default class RestaurantMenuComponent {
    @Input() resto: Resto;
  }
