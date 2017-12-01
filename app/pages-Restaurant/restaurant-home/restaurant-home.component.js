"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var restaurant_service_1 = require('../../restaurant-service/restaurant-service');
var RestaurantHomeComponent = (function () {
    //constructor(private restoService: RestoService, private route: ActivatedRoute) {}
    function RestaurantHomeComponent() {
        this.tagsString = "";
    }
    RestaurantHomeComponent.prototype.ngOnInit = function () {
        /*this.subscriberParams = this.route.params.subscribe(params => {
            let id: number = +params['id'];   // (+) converts string 'id' to a number
            this.resto = this.restoService.getRestosById(id);
        });*/
        this.restoServ = new restaurant_service_1.RestoService(); //Suppr Router
        this.resto = this.restoServ.getRestosById(0); //Suppr Router
        this.imageUrl = '/images/' + 0 + '.jpg';
        for (var _i = 0, _a = this.resto.tag; _i < _a.length; _i++) {
            var t = _a[_i];
            this.tagsString += t + " * ";
        }
    };
    RestaurantHomeComponent.prototype.ngOnDestroy = function () {
        this.subscriberParams.unsubscribe();
    };
    RestaurantHomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'osl-restaurant-home',
            templateUrl: 'restaurant-home.component.html',
            styleUrls: ['restaurant-home.component.css'],
            providers: [restaurant_service_1.RestoService]
        }), 
        __metadata('design:paramtypes', [])
    ], RestaurantHomeComponent);
    return RestaurantHomeComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RestaurantHomeComponent;
//# sourceMappingURL=restaurant-home.component.js.map