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
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var footer_component_1 = require('./footer/footer.component');
var menubar_component_1 = require('./menubar/menubar.component');
var score_component_1 = require('./score/score.component');
var logger_service_1 = require('./logger-service/logger-service');
var pagenotfound_component_1 = require('./pagenotfound/pagenotfound.component');
var homePage_component_1 = require('./homePage/homePage.component');
var searchForm_component_1 = require("./searchForm/searchForm.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: '**', component: pagenotfound_component_1.default }
                ])
            ],
            declarations: [
                footer_component_1.default,
                menubar_component_1.default,
                score_component_1.default,
                pagenotfound_component_1.default,
                homePage_component_1.default,
                searchForm_component_1.SearchFormComponent,
            ],
            bootstrap: [homePage_component_1.default],
            providers: [logger_service_1.LoggerService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppModule;
//# sourceMappingURL=module.js.map