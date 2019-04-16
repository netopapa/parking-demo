webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/views/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n\r\n        <a href=\"#/reports/period\" target=\"_blanc\" class=\"btn btn-warning\">Relatório por período</a>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header\" data-background-color=\"spare\">\r\n                        <i class=\"material-icons\">assignment</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\">Total de Registros</p>\r\n                        <h3 class=\"card-title\">{{log.length + insides.length}}</h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header\" data-background-color=\"spare\">\r\n                        <i class=\"material-icons\">directions_car</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\">Total de Veículos</p>\r\n                        <h3 class=\"card-title\">{{cars.length}}</h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header\" data-background-color=\"spare\">\r\n                        <i class=\"material-icons\">timer</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\">Veículos Estacionados</p>\r\n                        <h3 class=\"card-title\">{{insides.length}}</h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6 col-sm-6\">\r\n                <div class=\"card card-stats\">\r\n                    <div class=\"card-header\" data-background-color=\"spare\">\r\n                        <i class=\"material-icons\">attach_money</i>\r\n                    </div>\r\n                    <div class=\"card-content\">\r\n                        <p class=\"category\">Lucro do dia</p>\r\n                        <h3 class=\"card-title\">{{dayProfit | currency:'BRL':true}}</h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-9\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h3>Tabela de Preços</h3>\r\n                    </div>\r\n                    <div class=\"card-content fixed-table-height\">\r\n                        <table class=\"table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th scope=\"col\">Horário</th>\r\n                                    <th scope=\"col\">Segunda à Sexta</th>\r\n                                    <th scope=\"col\">Sábado & Domingo</th>\r\n                                    <th scope=\"col\">Feriados</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <th scope=\"row\">08h às 12h</th>\r\n                                    <td>{{ 2 | currency:'BRL':true}}</td>\r\n                                    <td>{{ 2.5 | currency:'BRL':true}}</td>\r\n                                    <td>{{ 2.5 | currency:'BRL':true}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <th scope=\"row\">12h às 18h</th>\r\n                                    <td>{{ 3 | currency:'BRL':true}}</td>\r\n                                    <td>{{ 2.5 | currency:'BRL':true}}</td>\r\n                                    <td>{{ 2.5 | currency:'BRL':true}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <h3>Preço do dia ({{getDayName()}})</h3>\r\n                    </div>\r\n                    <div class=\"card-content fixed-table-height\">\r\n                        <h1 class=\"green-text text-center\">{{getDayPrice() | currency:'BRL':true}}</h1>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_car_car_service__ = __webpack_require__("../../../../../src/app/service/car/car.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_registration_registration_service__ = __webpack_require__("../../../../../src/app/service/registration/registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_util_parking_service__ = __webpack_require__("../../../../../src/app/util/parking.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(service, carService, parkingService) {
        this.service = service;
        this.carService = carService;
        this.parkingService = parkingService;
        this.log = [];
        this.insides = [];
        this.cars = [];
        this.dayProfit = 0;
        this.weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        this.today = new Date();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getLog();
        this.getInsides();
        this.getCars();
    };
    DashboardComponent.prototype.getLog = function () {
        var _this = this;
        this.service.getAll().subscribe(function (success) {
            _this.log = success;
            _this.getDayProfit();
        });
    };
    DashboardComponent.prototype.getInsides = function () {
        var _this = this;
        this.service.findAllInside().subscribe(function (success) {
            _this.insides = success;
        });
    };
    DashboardComponent.prototype.getCars = function () {
        var _this = this;
        this.carService.getAll().subscribe(function (success) {
            _this.cars = success;
        });
    };
    DashboardComponent.prototype.getDayProfit = function () {
        var _this = this;
        this.dayProfit = 0;
        this.today.setHours(0, 0, 0, 0);
        this.log.forEach(function (item) {
            var itemDay = new Date(item.checkout);
            itemDay.setHours(0, 0, 0, 0);
            if (itemDay >= _this.today) {
                _this.dayProfit += item.value;
            }
        });
    };
    DashboardComponent.prototype.getDayName = function () {
        return this.weekDays[this.today.getDay()];
    };
    DashboardComponent.prototype.getDayPrice = function () {
        return this.parkingService.generateValue();
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_service_registration_registration_service__["a" /* RegistrationService */],
            __WEBPACK_IMPORTED_MODULE_1_app_service_car_car_service__["a" /* CarService */],
            __WEBPACK_IMPORTED_MODULE_3_app_util_parking_service__["a" /* ParkingService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_md_md_module__ = __webpack_require__("../../../../../src/app/md/md.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_component__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_routing__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__dashboard_routing__["a" /* DashboardRoutes */]),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_app_md_md_module__["a" /* MdModule */],
                __WEBPACK_IMPORTED_MODULE_4_app_app_module__["b" /* MaterialModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__dashboard_component__["a" /* DashboardComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.ts");

var DashboardRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a" /* DashboardComponent */]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map