"use strict";
var Resto = (function () {
    function Resto(id, name, lat, long, address, city, tag, menu, averagePrice, averageScore) {
        this.id = id;
        this.name = name;
        this.lat = lat;
        this.long = long;
        this.address = address;
        this.city = city;
        this.tag = tag;
        this.menu = menu;
        this.averagePrice = averagePrice;
        this.averageScore = averageScore;
    }
    return Resto;
}());
exports.Resto = Resto;
var RestoService = (function () {
    function RestoService() {
    }
    RestoService.prototype.getRestaurants = function () {
        var restos = [
            new Resto(0, "Nancy Hands Bar & Restaurant", 53.348, -6.294, "30 - 32 Parkgate St, Dublin 8, Co. Dublin, Ireland, Arran Quay", "Dublin", ["Irish", "Gastropub"], [["Tomato", "Beef with Fries", "Banoffe"], ["Salad", "Pork with Fries", "Yogurt"], ["Salad", "Pork with Fries", "Yogurt"]], 20.2, 4.1),
            new Resto(1, "Thai Garden Restaurant", 53.385, -6.374, "Church Ave, Blanchardstown", "Dublin", ["Classic"], [["Soup", "Beans", "Banoffe"], ["Salad", "Pork with Fries", "Yogurt"]], 25.2, 4.6),
            new Resto(2, "Liberty Grill", 51.897, -8.478, "32 Washington St, Centre", "Cork", ["Classic"], [["Soup", "Beans", "Banoffe"], ["Salad", "Pork with Fries", "Yogurt"]], 15.2, 4.6),
        ];
        return restos;
    };
    RestoService.prototype.getRestosById = function (id) {
        return this.getRestaurants()[id];
    };
    return RestoService;
}());
exports.RestoService = RestoService;
//# sourceMappingURL=restaurant-service.js.map