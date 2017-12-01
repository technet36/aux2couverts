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
var RestaurantDetailComponent = (function () {
    function RestaurantDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', restaurant_service_1.Resto)
    ], RestaurantDetailComponent.prototype, "resto", void 0);
    RestaurantDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'osl-restaurant-detail',
            templateUrl: 'restaurant-detail.component.html',
            styleUrls: ['restaurant-detail.component.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], RestaurantDetailComponent);
    return RestaurantDetailComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RestaurantDetailComponent;
//# sourceMappingURL=restaurant-detail.component.js.map