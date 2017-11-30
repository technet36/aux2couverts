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
var router_1 = require('@angular/router');
var RestaurantHomeComponent = (function () {
    function RestaurantHomeComponent(route) {
        this.route = route;
    }
    RestaurantHomeComponent.prototype.ngOnInit = function () {
        this.subscriberParams = this.route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
        });
    };
    RestaurantHomeComponent.prototype.ngOnDestroy = function () {
        this.subscriberParams.unsubscribe();
    };
    RestaurantHomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'osl-restaurant-home',
            templateUrl: 'restaurant-home.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], RestaurantHomeComponent);
    return RestaurantHomeComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RestaurantHomeComponent;
//# sourceMappingURL=restaurant-home.component.js.map