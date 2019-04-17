webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./views/car/car.module": [
		"../../../../../src/app/views/car/car.module.ts",
		"car.module",
		"common"
	],
	"./views/control-panel/control-panel.module": [
		"../../../../../src/app/views/control-panel/control-panel.module.ts",
		"control-panel.module",
		"common"
	],
	"./views/dashboard/dashboard.module": [
		"../../../../../src/app/views/dashboard/dashboard.module.ts",
		"dashboard.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loading></app-loading>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        $.material.init();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-my-app',
            template: __webpack_require__("../../../../../src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export httpFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_service_interceptor_interceptor_service__ = __webpack_require__("../../../../../src/app/service/interceptor/interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layouts_admin_admin_layout_component__ = __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reports_period_period_component__ = __webpack_require__("../../../../../src/app/reports/period/period.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_car_car_service__ = __webpack_require__("../../../../../src/app/service/car/car.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_loader_loader_service__ = __webpack_require__("../../../../../src/app/service/loader/loader-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__service_registration_registration_service__ = __webpack_require__("../../../../../src/app/service/registration/registration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_rest_rest_service__ = __webpack_require__("../../../../../src/app/service/rest/rest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_toast_notification_service_error_service_error_service__ = __webpack_require__("../../../../../src/app/service/toast-notification-service/error-service/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_toast_notification_service_toast_service_toast_service__ = __webpack_require__("../../../../../src/app/service/toast-notification-service/toast-service/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_fixedplugin_fixedplugin_module__ = __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_footer_footer_module__ = __webpack_require__("../../../../../src/app/shared/footer/footer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_loading_loading_component__ = __webpack_require__("../../../../../src/app/shared/loading/loading.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_navbar_navbar_module__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__util_parking_service__ = __webpack_require__("../../../../../src/app/util/parking.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























function httpFactory(xhrBackend, requestOptions, loaderService) {
    return new __WEBPACK_IMPORTED_MODULE_7_app_service_interceptor_interceptor_service__["a" /* InterceptedHttp */](xhrBackend, requestOptions, loaderService);
}
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["g" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["D" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["h" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["s" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["t" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["u" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["v" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["w" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["x" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["y" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["C" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["F" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["G" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["H" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["I" /* MatTooltipModule */],
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["g" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* AppRoutes */], { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                MaterialModule,
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_22__sidebar_sidebar_module__["a" /* SidebarModule */],
                __WEBPACK_IMPORTED_MODULE_21__shared_navbar_navbar_module__["a" /* NavbarModule */],
                __WEBPACK_IMPORTED_MODULE_19__shared_footer_footer_module__["a" /* FooterModule */],
                __WEBPACK_IMPORTED_MODULE_18__shared_fixedplugin_fixedplugin_module__["a" /* FixedpluginModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_20__shared_loading_loading_component__["a" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_11__reports_period_period_component__["a" /* PeriodComponent */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */],
                    useFactory: httpFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["h" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_13__service_loader_loader_service__["a" /* LoaderService */]],
                },
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MAT_DATE_LOCALE */], useValue: 'pt-br' },
                __WEBPACK_IMPORTED_MODULE_15__service_rest_rest_service__["a" /* RestService */],
                __WEBPACK_IMPORTED_MODULE_17__service_toast_notification_service_toast_service_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_16__service_toast_notification_service_error_service_error_service__["a" /* ErrorService */],
                __WEBPACK_IMPORTED_MODULE_13__service_loader_loader_service__["a" /* LoaderService */],
                __WEBPACK_IMPORTED_MODULE_12__service_car_car_service__["a" /* CarService */],
                __WEBPACK_IMPORTED_MODULE_14__service_registration_registration_service__["a" /* RegistrationService */],
                __WEBPACK_IMPORTED_MODULE_23__util_parking_service__["a" /* ParkingService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__ = __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reports_period_period_component__ = __webpack_require__("../../../../../src/app/reports/period/period.component.ts");


var AppRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full',
            },
            {
                path: 'dashboard',
                loadChildren: './views/dashboard/dashboard.module#DashboardModule',
            },
            {
                path: 'control',
                loadChildren: './views/control-panel/control-panel.module#ControlPanelModule',
            },
            {
                path: 'car',
                loadChildren: './views/car/car.module#CarModule',
            }
        ]
    },
    {
        path: 'reports/period',
        component: __WEBPACK_IMPORTED_MODULE_1__reports_period_period_component__["a" /* PeriodComponent */]
    }
];


/***/ }),

/***/ "../../../../../src/app/constant/constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WS_URL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constant; });
// export const WS_URL = 'http://localhost:8080/prk/';
var WS_URL = 'https://fast-cliffs-43524.herokuapp.com/prk/';
var Constant = {
    BASE_URL: WS_URL + 'rest/',
    CAR: 'vehicle/',
    REGISTRATION: 'registration/',
};


/***/ }),

/***/ "../../../../../src/app/constant/price-table.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Shifts; });
var PriceTable = {
    MORNING: 2.0,
    EVENING: 3.0,
    WEEKWND_AND_HOLYDAYS: 2.5
};
var Shifts;
(function (Shifts) {
    Shifts["MORNING"] = "MORNING";
    Shifts["EVENING"] = "EVENING";
    Shifts["NIGHT"] = "NIGHT";
})(Shifts || (Shifts = {}));
;


/***/ }),

/***/ "../../../../../src/app/layouts/admin/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-active-color=\"spare\" data-background-color=\"black\" data-image=\"../assets/img/sidebar-1.jpg\">\r\n        <app-sidebar-cmp></app-sidebar-cmp>\r\n        <div class=\"sidebar-background\"></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <app-navbar-cmp></app-navbar-cmp>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"!isMap()\">\r\n            <app-footer-cmp></app-footer-cmp>\r\n        </div>\r\n    </div>\r\n    <app-fixedplugin></app-fixedplugin>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/layouts/admin/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_perfect_scrollbar__ = __webpack_require__("../../../../perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__md_md_module__ = __webpack_require__("../../../../../src/app/md/md.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(router, location) {
        this.router = router;
        this.yScrollStack = [];
        this.location = location;
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* NavigationStart */]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new __WEBPACK_IMPORTED_MODULE_3_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps = new __WEBPACK_IMPORTED_MODULE_3_perfect_scrollbar__["a" /* default */](elemSidebar);
        }
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.navbar.sidebarClose();
        });
        this.navItems = [
            { type: __WEBPACK_IMPORTED_MODULE_5__md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Dashboard', iconClass: 'fa fa-dashboard' },
            {
                type: __WEBPACK_IMPORTED_MODULE_5__md_md_module__["b" /* NavItemType */].NavbarRight,
                title: '',
                iconClass: 'fa fa-bell-o',
                numNotifications: 5,
                dropdownItems: [
                    { title: 'Notification 1' },
                    { title: 'Notification 2' },
                    { title: 'Notification 3' },
                    { title: 'Notification 4' },
                    { title: 'Another Notification' }
                ]
            },
            {
                type: __WEBPACK_IMPORTED_MODULE_5__md_md_module__["b" /* NavItemType */].NavbarRight,
                title: '',
                iconClass: 'fa fa-list',
                dropdownItems: [
                    { iconClass: 'pe-7s-mail', title: 'Messages' },
                    { iconClass: 'pe-7s-help1', title: 'Help Center' },
                    { iconClass: 'pe-7s-tools', title: 'Settings' },
                    'separator',
                    { iconClass: 'pe-7s-lock', title: 'Lock Screen' },
                    { iconClass: 'pe-7s-close-circle', title: 'Log Out' }
                ]
            },
            { type: __WEBPACK_IMPORTED_MODULE_5__md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Search', iconClass: 'fa fa-search' },
            { type: __WEBPACK_IMPORTED_MODULE_5__md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Account' },
            {
                type: __WEBPACK_IMPORTED_MODULE_5__md_md_module__["b" /* NavItemType */].NavbarLeft,
                title: 'Dropdown',
                dropdownItems: [
                    { title: 'Action' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    'separator',
                    { title: 'Separated link' },
                ]
            },
            { type: __WEBPACK_IMPORTED_MODULE_5__md_md_module__["b" /* NavItemType */].NavbarLeft, title: 'Log out' }
        ];
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMap = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === '/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new __WEBPACK_IMPORTED_MODULE_3_perfect_scrollbar__["a" /* default */](elemMainPanel);
            ps = new __WEBPACK_IMPORTED_MODULE_3_perfect_scrollbar__["a" /* default */](elemSidebar);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])('sidebar'),
        __metadata("design:type", Object)
    ], AdminLayoutComponent.prototype, "sidebar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_6__shared_navbar_navbar_component__["a" /* NavbarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__shared_navbar_navbar_component__["a" /* NavbarComponent */])
    ], AdminLayoutComponent.prototype, "navbar", void 0);
    AdminLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-layout',
            template: __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_common__["f" /* Location */]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/md/md-chart/md-chart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/md/md-chart/md-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"header\">\r\n    <h4 class=\"title\">{{ title }}</h4>\r\n    <p class=\"category\">{{ subtitle }}</p>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div [attr.id]=\"chartId\" class=\"ct-chart {{ chartClass }}\"></div>\r\n\r\n    <div class=\"footer\">\r\n      <div class=\"legend\">\r\n        <span *ngFor=\"let item of legendItems\">\r\n          <i [ngClass]=\"item.imageClass\"></i> {{ item.title }}\r\n        </span>\r\n      </div>\r\n      <hr *ngIf=\"withHr\">\r\n      <div class=\"stats\">\r\n        <i [ngClass]=\"footerIconClass\"></i> {{ footerText }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/md/md-chart/md-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChartType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdChartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist__ = __webpack_require__("../../../../chartist/dist/chartist.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chartist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chartist__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartType;
(function (ChartType) {
    ChartType[ChartType["Pie"] = 0] = "Pie";
    ChartType[ChartType["Line"] = 1] = "Line";
    ChartType[ChartType["Bar"] = 2] = "Bar";
})(ChartType || (ChartType = {}));
var MdChartComponent = /** @class */ (function () {
    function MdChartComponent() {
    }
    MdChartComponent_1 = MdChartComponent;
    MdChartComponent.prototype.ngOnInit = function () {
        this.chartId = "md-chart-" + MdChartComponent_1.currentId++;
    };
    MdChartComponent.prototype.ngAfterViewInit = function () {
        switch (this.chartType) {
            case ChartType.Pie:
                new __WEBPACK_IMPORTED_MODULE_1_chartist__["Pie"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Line:
                new __WEBPACK_IMPORTED_MODULE_1_chartist__["Line"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Bar:
                new __WEBPACK_IMPORTED_MODULE_1_chartist__["Bar"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
        }
    };
    MdChartComponent.currentId = 1;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "chartClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Number)
    ], MdChartComponent.prototype, "chartType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MdChartComponent.prototype, "chartData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MdChartComponent.prototype, "chartOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MdChartComponent.prototype, "chartResponsive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "footerIconClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "footerText", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], MdChartComponent.prototype, "legendItems", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MdChartComponent.prototype, "withHr", void 0);
    MdChartComponent = MdChartComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-md-chart',
            template: __webpack_require__("../../../../../src/app/md/md-chart/md-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/md/md-chart/md-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MdChartComponent);
    return MdChartComponent;
    var MdChartComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/md/md-table/md-table.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"content table-responsive\">\r\n    <table class=\"table\">\r\n      <tbody>\r\n          <tr *ngFor=\"let row of data.dataRows\">\r\n            <!-- <td *ngFor=\"let cell of row\">{{ cell }}</td> -->\r\n            <td>\r\n                <div class=\"flag\">\r\n                    <img src=\"../../../assets/img/flags/{{row[0]}}.png\" alt=\"\">\r\n                </div>\r\n            </td>\r\n            <td>\r\n                {{row[1]}}\r\n            </td>\r\n            <td class=\"text-right\">\r\n                {{row[2]}}\r\n            </td>\r\n            <td class=\"text-right\">\r\n                {{row[3]}}\r\n            </td>\r\n          </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/md/md-table/md-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MdTableComponent = /** @class */ (function () {
    function MdTableComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "cardClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MdTableComponent.prototype, "data", void 0);
    MdTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-md-table',
            template: __webpack_require__("../../../../../src/app/md/md-table/md-table.component.html"),
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectionStrategy */].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], MdTableComponent);
    return MdTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/md/md.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NavItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MdModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__md_table_md_table_component__ = __webpack_require__("../../../../../src/app/md/md-table/md-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__md_chart_md_chart_component__ = __webpack_require__("../../../../../src/app/md/md-chart/md-chart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NavItemType;
(function (NavItemType) {
    NavItemType[NavItemType["Sidebar"] = 1] = "Sidebar";
    NavItemType[NavItemType["NavbarLeft"] = 2] = "NavbarLeft";
    NavItemType[NavItemType["NavbarRight"] = 3] = "NavbarRight"; // Right-aligned link on navbar in desktop mode, shown above sidebar items on collapsed sidebar in mobile mode
})(NavItemType || (NavItemType = {}));
var MdModule = /** @class */ (function () {
    function MdModule() {
    }
    MdModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__md_table_md_table_component__["a" /* MdTableComponent */],
                __WEBPACK_IMPORTED_MODULE_4__md_chart_md_chart_component__["a" /* MdChartComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__md_table_md_table_component__["a" /* MdTableComponent */],
                __WEBPACK_IMPORTED_MODULE_4__md_chart_md_chart_component__["a" /* MdChartComponent */]
            ]
        })
    ], MdModule);
    return MdModule;
}());



/***/ }),

/***/ "../../../../../src/app/reports/period/period.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"/assets/img/logo/logo.png\" alt=\"PARKING\">\n\n<div class=\"options\">\n  <h3>Relatório por período</h3>\n  <p>Defina Data de início, fim e se os veículos atualmente estacionados devem estar inclusos nos resultados.</p>\n</div>\n<div class=\"row options option\">\n  <div class=\"col-sm-2\">\n    <div class=\"row option\">\n      <label class=\"col-sm-2 label-on-top\">Início</label>\n      <div class=\"col-sm-7 titulo\">\n        <div class=\"form-group titulo2 label-floating is-empty  form-field\">\n          <label class=\"control-label\"></label>\n          <mat-input-container (click)=\"resultPicker1.open()\">\n            <input [(ngModel)]=\"startDate\" [max]=\"today\" disabled name=\"inicio\" matInput [matDatepicker]=\"resultPicker1\"\n              required>\n            <mat-datepicker-toggle matSuffix [for]=\"resultPicker1\">\n            </mat-datepicker-toggle>\n            <mat-datepicker disabled=\"false\" #resultPicker1 [touchUi]=\"touch\">\n            </mat-datepicker>\n          </mat-input-container>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-2\">\n    <div class=\"row option\">\n      <label class=\"col-sm-2 label-on-top\">Fim</label>\n      <div class=\"col-sm-7 titulo\">\n        <div class=\"form-group titulo2 label-floating is-empty  form-field\">\n          <label class=\"control-label\"></label>\n          <mat-input-container (click)=\"resultPicker2.open()\">\n            <input [(ngModel)]=\"endDate\" [max]=\"today\" disabled name=\"fim\" matInput [matDatepicker]=\"resultPicker2\"\n              required>\n            <mat-datepicker-toggle matSuffix [for]=\"resultPicker2\">\n            </mat-datepicker-toggle>\n            <mat-datepicker disabled=\"false\" #resultPicker2 [touchUi]=\"touch\">\n            </mat-datepicker>\n          </mat-input-container>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-3\">\n    <div class=\"option\">\n      <label>Incluir veículos estacionados</label>\n      <div class=\"togglebutton\">\n        <ng-container *ngIf=\"includeInsides\">\n          <label matTooltip=\"Ignorar veículos estacionados\" [matTooltipPosition]=\"'left'\">\n            <input type=\"checkbox\" [checked]=\"includeInsides\" (click)=\"changeInside()\">\n          </label>\n        </ng-container>\n        <ng-container *ngIf=\"!includeInsides\">\n          <label matTooltip=\"Incluir veículos estacionados\" [matTooltipPosition]=\"'left'\">\n            <input type=\"checkbox\" [checked]=\"includeInsides\" (click)=\"changeInside()\">\n          </label>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-sm-5\">\n    <button (click)=\"printPage()\" class=\"btn btn-small pull-right\" [disabled]=\"log < 1\"><i\n        class=\"material-icons\">print</i></button>\n    <button (click)=\"getSearch()\" class=\"btn btn-success btn-small pull-right\" [disabled]=\"!checkDates()\"><i\n        class=\"material-icons\">search</i></button>\n  </div>\n</div>\n\n<div class=\"report-infos\">\n  <h4>Relatório do período de {{startDate | date: 'dd/M/yy'}} até {{endDate | date: 'dd/M/yy'}}</h4>\n</div>\n\n<h3 *ngIf=\"log.length < 1\" class=\"text-center\">Listagem vazia!</h3>\n\n<table *ngIf=\"log.length > 0\" class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">Placa</th>\n      <th scope=\"col\">Modelo</th>\n      <th scope=\"col\">Cor</th>\n      <th scope=\"col\">Entrada</th>\n      <th scope=\"col\">Saída</th>\n      <th scope=\"col\">Valor Pago</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of log; let i = index\">\n      <th scope=\"row\">{{i + 1}}</th>\n      <td>{{item.car.plate}}</td>\n      <td>{{item.car.model}}</td>\n      <td>{{item.car.color}}</td>\n      <td>{{item.checkin | date: 'dd/M/yy H:mm'}}</td>\n      <td *ngIf=\"!item.checkout\">Ainda estacionado!</td>\n      <td *ngIf=\"item.checkout\">{{item.checkout | date: 'dd/M/yy H:mm'}}</td>\n      <td *ngIf=\"!item.value\">Ainda estacionado!</td>\n      <td *ngIf=\"item.value\">{{item.value | currency:'BRL':true}}</td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Total</th>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td>{{getTotal() | currency:'BRL':true}}</td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "../../../../../src/app/reports/period/period.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body,\nhtml {\n  background-color: #fff !important; }\n\n.options {\n  padding: 10px 20px; }\n\n.options .btn {\n    -webkit-transform: translateY(21px);\n            transform: translateY(21px); }\n\n.option {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline; }\n\nimg {\n  display: block;\n  margin: 20px auto;\n  width: 80px; }\n\ntable th,\ntable td {\n  font-size: 15px; }\n\ntable thead tr > th {\n  font-weight: 700; }\n\n.report-infos {\n  display: none; }\n\n@media print {\n  .options {\n    display: none; }\n  .report-infos {\n    display: inherit !important; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reports/period/period.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_registration_registration_service__ = __webpack_require__("../../../../../src/app/service/registration/registration.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PeriodComponent = /** @class */ (function () {
    function PeriodComponent(service) {
        this.service = service;
        this.today = new Date();
        this.includeInsides = false;
        this.log = [];
    }
    PeriodComponent.prototype.printPage = function () {
        window.print();
    };
    PeriodComponent.prototype.getSearch = function () {
        var _this = this;
        this.service.findBetween(this.startDate, this.endDate, this.includeInsides).subscribe(function (success) {
            _this.log = success;
        });
    };
    PeriodComponent.prototype.changeInside = function () {
        this.includeInsides = !this.includeInsides;
    };
    PeriodComponent.prototype.checkDates = function () {
        return this.startDate && this.endDate ? true : false;
    };
    PeriodComponent.prototype.getTotal = function () {
        if (this.log.length < 1) {
            return 0;
        }
        else {
            var total = 0;
            for (var i = 0; i < this.log.length; i++) {
                if (this.log[i].value) {
                    total += this.log[i].value;
                }
            }
            return total;
        }
    };
    PeriodComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-period',
            template: __webpack_require__("../../../../../src/app/reports/period/period.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reports/period/period.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_service_registration_registration_service__["a" /* RegistrationService */]])
    ], PeriodComponent);
    return PeriodComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/car/car.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_constant_constant__ = __webpack_require__("../../../../../src/app/constant/constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__generic_crud_generic_crud_service__ = __webpack_require__("../../../../../src/app/service/generic-crud/generic-crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toast_notification_service_error_service_error_service__ = __webpack_require__("../../../../../src/app/service/toast-notification-service/error-service/error.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CarService = /** @class */ (function (_super) {
    __extends(CarService, _super);
    function CarService(http, activatedRoute, errorHandler) {
        var _this = _super.call(this, http, __WEBPACK_IMPORTED_MODULE_3_app_constant_constant__["a" /* Constant */].CAR, errorHandler, activatedRoute) || this;
        _this.activatedRoute = activatedRoute;
        return _this;
    }
    CarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__toast_notification_service_error_service_error_service__["a" /* ErrorService */]])
    ], CarService);
    return CarService;
}(__WEBPACK_IMPORTED_MODULE_4__generic_crud_generic_crud_service__["a" /* CrudService */]));



/***/ }),

/***/ "../../../../../src/app/service/generic-crud/generic-crud.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CrudService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_constant_constant__ = __webpack_require__("../../../../../src/app/constant/constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_toast_notification_service_error_service_error_service__ = __webpack_require__("../../../../../src/app/service/toast-notification-service/error-service/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rest_rest_service__ = __webpack_require__("../../../../../src/app/service/rest/rest.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CrudService = /** @class */ (function (_super) {
    __extends(CrudService, _super);
    function CrudService(http, baseUrl, errorHandler, activatedRoute) {
        var _this = _super.call(this, http, errorHandler) || this;
        _this.activatedRoute = activatedRoute;
        _this.baseURL = __WEBPACK_IMPORTED_MODULE_3_app_constant_constant__["a" /* Constant */].BASE_URL;
        _this.baseURL += baseUrl;
        return _this;
    }
    CrudService.prototype.getAll = function () {
        return this.get(this.baseURL);
    };
    CrudService.prototype.getActives = function (route) {
        if (route !== undefined) {
            return this.get(this.baseURL + 'findActives');
        }
        else {
            return this.get(this.baseURL + 'findActives');
        }
    };
    CrudService.prototype.getOne = function (id) {
        var getAllUrl = this.baseURL + id;
        return this.get(getAllUrl);
    };
    CrudService.prototype.save = function (data) {
        var saveUrl = '';
        saveUrl = this.baseURL;
        return this.post(saveUrl, data);
    };
    CrudService.prototype.saveAll = function (data, pathParam) {
        var saveUrl = this.baseURL + 'collection' + (pathParam ? '/' + pathParam : '');
        return this.post(saveUrl, data);
    };
    CrudService.prototype.update = function (data) {
        var updateUrl = this.baseURL;
        return this.put(updateUrl, data);
    };
    CrudService.prototype.updateAll = function (data) {
        var updateUrl = this.baseURL;
        return this.put(updateUrl, data);
    };
    CrudService.prototype.delete = function (id) {
        var deleteURL = this.baseURL;
        return this.remove(deleteURL, id);
    };
    CrudService.prototype.enable = function (id) {
        var enableURL = this.baseURL + 'enable/' + id;
        return this.post(enableURL);
    };
    CrudService.prototype.disable = function (id) {
        var disableURL = this.baseURL + 'disable/' + id;
        return this.post(disableURL);
    };
    CrudService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], String, __WEBPACK_IMPORTED_MODULE_4_app_service_toast_notification_service_error_service_error_service__["a" /* ErrorService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], CrudService);
    return CrudService;
}(__WEBPACK_IMPORTED_MODULE_5__rest_rest_service__["a" /* RestService */]));



/***/ }),

/***/ "../../../../../src/app/service/interceptor/interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptedHttp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loader_loader_service__ = __webpack_require__("../../../../../src/app/service/loader/loader-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_constant_constant__ = __webpack_require__("../../../../../src/app/constant/constant.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InterceptedHttp = /** @class */ (function (_super) {
    __extends(InterceptedHttp, _super);
    function InterceptedHttp(backend, defaultOptions, loaderService) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.loaderService = loaderService;
        return _this;
    }
    InterceptedHttp.prototype.getSynchronizedRequest = function (request, options) {
        var _this = this;
        if (request.url.indexOf(__WEBPACK_IMPORTED_MODULE_4_app_constant_constant__["a" /* Constant */].BASE_URL) < 0) {
            return _super.prototype.request.call(this, request, options);
        }
        var requestObservable = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].create(function (observer) {
            _this.setRequestOptionArgs(request);
            var req = _super.prototype.request.call(_this, request, options);
            req.subscribe(function (success) {
                requestObservable.isFinished = true;
                observer.next(success);
            }, function (error) {
                requestObservable.isFinished = true;
                observer.error(error);
            }, function () { requestObservable.isFinished = true; observer.complete(); });
            _this.lastRequest = requestObservable;
            _this.lastRequest.isFinished = false;
        });
        if (this.lastRequest) {
            var myLastRequest_1 = this.lastRequest;
            var waiterObservable_1 = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].create(function (observer) {
                var recursiveCheck = function () {
                    if (myLastRequest_1.isFinished) {
                        requestObservable.subscribe(function (success) { observer.next(success); waiterObservable_1.isFinished = true; }, function (error) { observer.error(error); waiterObservable_1.isFinished = true; }, function () { observer.complete(); waiterObservable_1.isFinished = true; });
                    }
                    else {
                        setTimeout(recursiveCheck, 0);
                    }
                };
                recursiveCheck();
            });
            waiterObservable_1.isFinished = false;
            return this.lastRequest = waiterObservable_1;
        }
        return requestObservable;
    };
    InterceptedHttp.prototype.request = function (url, options) {
        var _this = this;
        return this.loaderService.enqueueRequest(this.getSynchronizedRequest(url, options))
            .map(function (o) { return _this.handleResponse(url, o); })
            .catch(function (err) { return _this.handleError(url, err); });
    };
    InterceptedHttp.prototype.get = function (url, options) {
        url = this.updateUrl(url);
        return _super.prototype.get.call(this, url, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.post = function (url, body, options) {
        url = this.updateUrl(url);
        return _super.prototype.post.call(this, url, body, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.put = function (url, body, options) {
        url = this.updateUrl(url);
        return _super.prototype.put.call(this, url, body, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.delete = function (url, options) {
        url = this.updateUrl(url);
        return _super.prototype.delete.call(this, url, this.getRequestOptionArgs(options));
    };
    InterceptedHttp.prototype.updateUrl = function (req) {
        return req;
    };
    InterceptedHttp.prototype.getRequestOptionArgs = function (options) {
        if (options == null) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]();
        }
        if (options.headers == null) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        }
        if (localStorage.getItem('auth')) {
            options.headers.set('Authorization', "TEL=" + localStorage.getItem('auth'));
        }
        return options;
    };
    InterceptedHttp.prototype.setRequestOptionArgs = function (request) {
        if (!request) {
            return;
        }
        if (request.url.indexOf(__WEBPACK_IMPORTED_MODULE_4_app_constant_constant__["a" /* Constant */].BASE_URL) < 0) {
            return;
        }
        if (!request.headers) {
            request.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        }
        if (sessionStorage.getItem('auth')) {
            request.headers.set('Authorization', 'LEAN=' + sessionStorage.getItem('auth'));
        }
        if (sessionStorage.getItem('csrf')) {
            request.headers.set('csrf', sessionStorage.getItem('csrf'));
        }
    };
    InterceptedHttp.prototype.handleResponse = function (req, response) {
        if (req.url.indexOf(__WEBPACK_IMPORTED_MODULE_4_app_constant_constant__["a" /* Constant */].BASE_URL) < 0) {
            return response;
        }
        if (response.headers.has('csrf')) {
            sessionStorage.setItem('csrf', response.headers.get('csrf'));
        }
        return response;
    };
    InterceptedHttp.prototype.handleError = function (req, error) {
        if (req.url.indexOf(__WEBPACK_IMPORTED_MODULE_4_app_constant_constant__["a" /* Constant */].BASE_URL) < 0) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
        }
        if (error.headers.has('csrf')) {
            sessionStorage.setItem('csrf', error.headers.get('csrf'));
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
    };
    InterceptedHttp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* ConnectionBackend */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */], __WEBPACK_IMPORTED_MODULE_3__loader_loader_service__["a" /* LoaderService */]])
    ], InterceptedHttp);
    return InterceptedHttp;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]));



/***/ }),

/***/ "../../../../../src/app/service/loader/loader-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_util_util__ = __webpack_require__("../../../../../src/app/util/util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.minimalTimeMS = 500;
        this.loadQueue = [];
        this.busyListener = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    LoaderService.prototype.enqueue = function () {
        return __WEBPACK_IMPORTED_MODULE_2_app_util_util__["a" /* Util */].newGuid();
    };
    LoaderService.prototype.dequeue = function (token) {
        this.dequeueRequest(token);
    };
    LoaderService.prototype.enqueueRequest = function (request) {
        var _this = this;
        this.loadQueue.push(request);
        this.busyListener.emit(true);
        var req = request;
        req.loadingRequestTime = __WEBPACK_IMPORTED_MODULE_2_app_util_util__["a" /* Util */].toDate();
        return request
            .map(function (o) { return _this.handleResponse(request, o); })
            .catch(function (err) { return _this.handleError(request, err); });
    };
    LoaderService.prototype.getListener = function () {
        return this.busyListener;
    };
    LoaderService.prototype.handleResponse = function (req, obj) {
        this.dequeueRequest(req);
        return obj;
    };
    LoaderService.prototype.handleError = function (req, error) {
        this.dequeueRequest(req);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
    };
    LoaderService.prototype.dequeueRequest = function (req) {
        var _this = this;
        setTimeout(function () {
            var index = _this.loadQueue.indexOf(req, 0);
            if (index > -1) {
                _this.loadQueue.splice(index, 1);
            }
            if (_this.loadQueue.length === 0) {
                _this.busyListener.emit(false);
            }
        }, this.getRemaining(req.lastLoadTime));
    };
    LoaderService.prototype.getRemaining = function (lastLoadTime) {
        lastLoadTime = nvl(lastLoadTime, __WEBPACK_IMPORTED_MODULE_2_app_util_util__["a" /* Util */].toDate());
        var diff = (__WEBPACK_IMPORTED_MODULE_2_app_util_util__["a" /* Util */].toDate().getTime() - lastLoadTime.getTime()) / 1000;
        return Math.max(0, this.minimalTimeMS - diff);
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "../../../../../src/app/service/registration/registration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_constant_constant__ = __webpack_require__("../../../../../src/app/constant/constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__generic_crud_generic_crud_service__ = __webpack_require__("../../../../../src/app/service/generic-crud/generic-crud.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toast_notification_service_error_service_error_service__ = __webpack_require__("../../../../../src/app/service/toast-notification-service/error-service/error.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistrationService = /** @class */ (function (_super) {
    __extends(RegistrationService, _super);
    function RegistrationService(http, activatedRoute, errorHandler) {
        var _this = _super.call(this, http, __WEBPACK_IMPORTED_MODULE_3_app_constant_constant__["a" /* Constant */].REGISTRATION, errorHandler, activatedRoute) || this;
        _this.activatedRoute = activatedRoute;
        return _this;
    }
    RegistrationService.prototype.findAllInside = function () {
        return this.get(this.baseURL + 'inside');
    };
    RegistrationService.prototype.findBetween = function (start, end, inside) {
        var searchParameters = { start: start, end: end, inside: inside };
        return this.post(this.baseURL + 'findbetween', searchParameters);
    };
    RegistrationService.prototype.enableExit = function (data) {
        return this.put(this.baseURL + 'enableExit', data);
    };
    RegistrationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__toast_notification_service_error_service_error_service__["a" /* ErrorService */]])
    ], RegistrationService);
    return RegistrationService;
}(__WEBPACK_IMPORTED_MODULE_4__generic_crud_generic_crud_service__["a" /* CrudService */]));



/***/ }),

/***/ "../../../../../src/app/service/rest/rest.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_toast_notification_service_error_service_error_service__ = __webpack_require__("../../../../../src/app/service/toast-notification-service/error-service/error.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_util_util__ = __webpack_require__("../../../../../src/app/util/util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var RestService = /** @class */ (function () {
    function RestService(http, errorHandler) {
        this.http = http;
        this.errorHandler = errorHandler;
    }
    RestService.prototype.getRequestOptions = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: this.headers });
        if (!options.headers) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        }
        if (!options.headers.has('Content-Type')) {
            options.headers.set('Content-Type', 'application/json');
        }
        if (!options.headers.has('Accept')) {
            options.headers.set('Accept', 'application/json');
        }
        return options;
    };
    RestService.prototype.get = function (url, params) {
        if (params === undefined) {
            return this.http
                .get(url, this.optionsHeader())
                .map(this.extractData)
                .catch(this.handleError.bind(this));
        }
        else {
            var param_1 = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
            params.forEach(function (element) {
                param_1.set(element.paramName, element.param);
            });
            return this.http
                .get(url, this.optionsHeader(param_1))
                .map(this.extractData)
                .catch(this.handleError.bind(this));
        }
    };
    RestService.prototype.post = function (url, payload) {
        var body = payload ? JSON.stringify(payload) : null;
        return this.http
            .post(url, body, this.optionsHeader())
            .map(this.extractData)
            .catch(this.handleError.bind(this));
    };
    RestService.prototype.postFile = function (url, param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Accept', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(url, param, options)
            .map(this.extractData)
            .catch(this.handleError.bind(this));
    };
    RestService.prototype.put = function (url, param) {
        var body = JSON.stringify(param);
        return this.http
            .put(url, body, this.getRequestOptions())
            .map(this.extractData)
            .catch(this.handleError.bind(this));
    };
    RestService.prototype.patch = function (url, param) {
        var body = JSON.stringify(param);
        return this.http
            .patch(url, body, this.getRequestOptions())
            .map(this.extractData)
            .catch(this.handleError.bind(this));
    };
    // HTTP DELETE usando Observable com objeto complexo como parâmetro
    // O campo de pesquisa desse objeto pode ser usado para definir uma string ou um objeto URLSearchParams
    RestService.prototype.delete = function (url, param) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        for (var key in param) {
            if (param.hasOwnProperty(key)) {
                var val = param[key];
                params.set(key, val);
            }
        }
        var options = this.getRequestOptions();
        options.search = params;
        return this.http
            .delete(url, this.getRequestOptions())
            .map(this.extractData)
            .catch(this.handleError.bind(this));
    };
    // HTTP DELETE usando Observable com ID como parâmetro
    RestService.prototype.remove = function (url, val) {
        return this.http
            .delete(url + val, this.getRequestOptions())
            .map(this.extractData)
            .catch(this.handleError.bind(this));
    };
    RestService.prototype.extractData = function (res) {
        try {
            var body = res.json();
            return body;
        }
        catch (error) {
            return res;
        }
    };
    RestService.prototype.checkJson = function (resp) {
        try {
            resp.json();
            return true;
        }
        catch (err) {
            return false;
        }
    };
    RestService.prototype.handleError = function (error) {
        console.log(error);
        var errMsg;
        if (error.status === 401) {
            error._body = 'Não autorizado';
        }
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Response */] && this.checkJson(error)) {
            var body = error.json() || '';
            if (body instanceof Array && body.length > 0) {
                errMsg = body[0];
            }
            else {
                errMsg = body.message;
            }
        }
        else {
            errMsg = error._body ? error._body : error.toString();
        }
        if (errMsg === undefined) {
            errMsg = 'Erro com a conexão';
        }
        if (this.errorHandler) {
            this.errorHandler.throwError(new Error(errMsg));
        }
        return __WEBPACK_IMPORTED_MODULE_13_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    RestService.prototype.optionsHeader = function (params) {
        var options = this.getRequestOptions();
        if (params !== null) {
            options.params = params;
        }
        return this.getRequestOptions();
    };
    RestService.prototype.insertParam = function (baseUrl, key, value) {
        return __WEBPACK_IMPORTED_MODULE_3_app_util_util__["a" /* Util */].insertRequestParam(baseUrl, key, value);
    };
    RestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2_app_service_toast_notification_service_error_service_error_service__["a" /* ErrorService */]])
    ], RestService);
    return RestService;
}());



/***/ }),

/***/ "../../../../../src/app/service/toast-notification-service/error-service/error.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_toast_notification_service_message_type_enum__ = __webpack_require__("../../../../../src/app/service/toast-notification-service/message-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_toast_notification_service_toast_service_toast_service__ = __webpack_require__("../../../../../src/app/service/toast-notification-service/toast-service/toast.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorService = /** @class */ (function () {
    function ErrorService() {
        this.listener = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ErrorService.prototype.throwError = function (error) {
        this.toast(error.message, __WEBPACK_IMPORTED_MODULE_1_app_service_toast_notification_service_message_type_enum__["a" /* MessageType */].ERROR);
    };
    ErrorService.prototype.toast = function (msg, type) {
        console.log(msg);
        __WEBPACK_IMPORTED_MODULE_2_app_service_toast_notification_service_toast_service_toast_service__["a" /* ToastService */].show(msg, type);
    };
    ErrorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ErrorService);
    return ErrorService;
}());



/***/ }),

/***/ "../../../../../src/app/service/toast-notification-service/message-type.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SwalType; });
var MessageType;
(function (MessageType) {
    MessageType["INFO"] = "info";
    MessageType["SUCCESS"] = "success";
    MessageType["WARNING"] = "warning";
    MessageType["ERROR"] = "danger";
})(MessageType || (MessageType = {}));
var SwalType;
(function (SwalType) {
    SwalType["DELETE"] = "Ao remover esse item n\u00E3o ser\u00E1 poss\u00EDvel recuper\u00E1-lo";
    SwalType["DISABLE"] = "Ao desabilitar esse item n\u00E3o ser\u00E1 poss\u00EDvel associ\u00E1-lo a nenhuma ocorr\u00EAncia";
    SwalType["DELETESUCCESS"] = "Removido";
    SwalType["DISABLESUCCESS"] = "Desabilitado";
})(SwalType || (SwalType = {}));


/***/ }),

/***/ "../../../../../src/app/service/toast-notification-service/toast-service/toast.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_toast_notification_service_message_type_enum__ = __webpack_require__("../../../../../src/app/service/toast-notification-service/message-type.enum.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ToastService = /** @class */ (function () {
    function ToastService() {
    }
    ToastService.show = function (msg, type) {
        if (!type) {
            type = __WEBPACK_IMPORTED_MODULE_1_app_service_toast_notification_service_message_type_enum__["a" /* MessageType */].INFO;
        }
        $.notify({ 'message': msg }, { 'type': type, 'timer': 3000, 'placement': { 'from': 'top', 'align': 'right' } });
    };
    ToastService.showAlert = function (msg) {
        var type = ['', 'info', 'success', 'warning', 'danger', 'rose', 'primary'];
        var color = Math.floor((Math.random() * 6) + 1);
        $.notify({
            message: '',
        }, {
            timer: 3000,
            allow_dismiss: true,
            template: '<div class="alert alert-warning alert-with-icon" data-notify="container">' +
                '<i class="material-icons" data-notify="icon">notifications</i>' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="material-icons">close</i></button>' +
                '<span data-notify="message">' + msg + '</span>' +
                '</div>',
            placement: {
                from: 'bottom',
                align: 'right'
            }
        });
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], ToastService);
    return ToastService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Fixed Plugin configurator, used just for Demo Purpose -->\r\n<!-- <div class=\"fixed-plugin\">\r\n    <div class=\"dropdown show-dropdown\">\r\n        <a href=\"#\" data-toggle=\"dropdown\">\r\n            <i class=\"fa fa-cog fa-2x\"> </i>\r\n        </a>\r\n        <ul class=\"dropdown-menu\">\r\n            <li class=\"header-title\"> Sidebar Filters</li>\r\n            <li class=\"adjustments-line\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\r\n                    <div class=\"badge-colors text-center\">\r\n                        <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\r\n                        <span class=\"badge filter badge-blue\" data-color=\"blue\"></span>\r\n                        <span class=\"badge filter badge-green\" data-color=\"green\"></span>\r\n                        <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\r\n                        <span class=\"badge filter badge-red\" data-color=\"red\"></span>\r\n                        <span class=\"badge filter badge-white active\" data-color=\"white\"></span>\r\n                        <span class=\"badge filter badge-rose\" data-color=\"rose\"></span>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </a>\r\n            </li>\r\n            <li class=\"header-title\">Sidebar Background</li>\r\n            <li class=\"adjustments-line\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\r\n                    <div class=\"text-center\">\r\n                        <span class=\"badge filter badge-white\" data-color=\"white\"></span>\r\n                        <span class=\"badge filter badge-black\" data-color=\"black\"></span>\r\n                        <span class=\"badge filter badge-red active\" data-color=\"red\"></span>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </a>\r\n            </li>\r\n            <li class=\"adjustments-line\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\r\n                    <p>Sidebar Mini</p>\r\n                    <div class=\"togglebutton switch-sidebar-mini\">\r\n                        <label>\r\n                            <input type=\"checkbox\" unchecked=\"\">\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </a>\r\n            </li>\r\n            <li class=\"adjustments-line\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger\">\r\n                    <p>Sidebar Image</p>\r\n                    <div class=\"togglebutton switch-sidebar-image\">\r\n                        <label>\r\n                            <input type=\"checkbox\" checked=\"\">\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </a>\r\n            </li>\r\n            <li class=\"header-title\">Images</li>\r\n            <li class=\"active\">\r\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                    <img src=\"../assets/img/sidebar-1.jpg\" alt=\"\" />\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                    <img src=\"../assets/img/sidebar-2.jpg\" alt=\"\" />\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                    <img src=\"../assets/img/sidebar-3.jpg\" alt=\"\" />\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                    <img src=\"../assets/img/sidebar-4.jpg\" alt=\"\" />\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedpluginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var md = {
    misc: {
        navbar_menu_visible: 0,
        active_collapse: true,
        disabled_collapse_init: 0,
    }
};
var FixedpluginComponent = /** @class */ (function () {
    function FixedpluginComponent() {
    }
    FixedpluginComponent.prototype.ngOnInit = function () {
        // fixed plugin
        var $sidebar = $('.sidebar');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        //
        var $full_page = $('.full-page');
        //
        var $sidebar_responsive = $('body > .navbar-collapse');
        var window_width = $(window).width();
        var fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();
        if (window_width > 767 && fixed_plugin_open === 'Dashboard') {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex: if we click on switch, stop propagation of the event,
            // so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .active-color span').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-active-color', new_color);
            }
            if ($full_page.length !== 0) {
                $full_page.attr('filter-color', new_color);
            }
            if ($sidebar_responsive.length !== 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        $('.fixed-plugin .background-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-background-color', new_color);
            }
        });
        $('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).parent('li').siblings().removeClass('active');
            $(this).parent('li').addClass('active');
            var new_image = $(this).find('img').attr('src');
            if ($sidebar_img_container.length !== 0 && $('.switch-sidebar-image input:checked').length !== 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length !== 0 && $('.switch-sidebar-image input:checked').length !== 0) {
                var new_image_full_page_1 = $('.fixed-plugin li.active .img-holder').find('img').data('src');
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image_full_page_1 + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($('.switch-sidebar-image input:checked').length === 0) {
                new_image = $('.fixed-plugin li.active .img-holder').find('img').attr('src');
                var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');
                $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
            }
            if ($sidebar_responsive.length !== 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
        $('.switch-sidebar-image input').change(function () {
            var $full_page_background = $('.full-page-background');
            var $input = $(this);
            if ($input.is(':checked')) {
                if ($sidebar_img_container.length !== 0) {
                    $sidebar_img_container.fadeIn('fast');
                    $sidebar.attr('data-image', '#');
                }
                if ($full_page_background.length !== 0) {
                    $full_page_background.fadeIn('fast');
                    $full_page.attr('data-image', '#');
                }
                var background_image = true;
            }
            else {
                if ($sidebar_img_container.length !== 0) {
                    $sidebar.removeAttr('data-image');
                    $sidebar_img_container.fadeOut('fast');
                }
                if ($full_page_background.length !== 0) {
                    $full_page.removeAttr('data-image', '#');
                    $full_page_background.fadeOut('fast');
                }
                var background_image = false;
            }
        });
        $('.switch-sidebar-mini input').change(function () {
            var $body = $('body');
            var $input = $(this);
            if (md.misc.sidebar_mini_active === true) {
                $('body').removeClass('sidebar-mini');
                md.misc.sidebar_mini_active = false;
            }
            else {
                setTimeout(function () {
                    $('body').addClass('sidebar-mini');
                    $('.sidebar .collapse').css('height', 'auto');
                    md.misc.sidebar_mini_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
    };
    FixedpluginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fixedplugin',
            template: __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FixedpluginComponent);
    return FixedpluginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/fixedplugin/fixedplugin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FixedpluginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fixedplugin_component__ = __webpack_require__("../../../../../src/app/shared/fixedplugin/fixedplugin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FixedpluginModule = /** @class */ (function () {
    function FixedpluginModule() {
    }
    FixedpluginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__fixedplugin_component__["a" /* FixedpluginComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__fixedplugin_component__["a" /* FixedpluginComponent */]]
        })
    ], FixedpluginModule);
    return FixedpluginModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"pull-left\">\r\n        </nav>\r\n        <p class=\"copyright pull-right\">\r\n            &copy;\r\n            {{test | date: 'yyyy'}}\r\n        </p>\r\n    </div>\r\n</footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer-cmp',
            template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"loading\">\r\n  <div class=\"loader\">\r\n    <svg class=\"circular\" viewBox=\"25 25 50 50\">\r\n      <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n    </svg>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/loading/loading.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#loading {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.2);\n  z-index: 9999;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 2s linear;\n  -moz-transition: opacity 2s linear;\n  /* Firefox 4 */\n  -webkit-transition: opacity 2s linear;\n  /* Safari and Chrome */\n  -o-transition: opacity 2s linear;\n  /* Opera */\n  -ms-transition: opacity 2s linear;\n  /* Explorer 10 */ }\n\n@-webkit-keyframes my-animation {\n  from {\n    opacity: 0.1; }\n  to {\n    opacity: 1; } }\n\n@keyframes my-animation {\n  from {\n    opacity: 0.1; }\n  to {\n    opacity: 1; } }\n\n#loading.visible {\n  visibility: visible;\n  opacity: 1;\n  -webkit-animation: my-animation 0.5s ease;\n          animation: my-animation 0.5s ease; }\n\n@-webkit-keyframes my-animation2 {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0.2; } }\n\n@keyframes my-animation2 {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0.2; } }\n\n#loading.hidden {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-animation: my-animation2 0.5s ease;\n          animation: my-animation2 0.5s ease; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_util_util__ = __webpack_require__("../../../../../src/app/util/util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_loader_loader_service__ = __webpack_require__("../../../../../src/app/service/loader/loader-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoadingComponent = /** @class */ (function () {
    function LoadingComponent(service, router) {
        var _this = this;
        this.minimalTimeMS = 500;
        this.lastRequestLoadTime = __WEBPACK_IMPORTED_MODULE_1_app_util_util__["a" /* Util */].toDate();
        this.isAnyResquestLoading = false;
        this.isOnRouteChanging = [];
        this.lastRouteLoadTime = __WEBPACK_IMPORTED_MODULE_1_app_util_util__["a" /* Util */].toDate();
        this.getRemaining = this.getRemaining.bind(this);
        service.getListener().subscribe(function (val) {
            if (val) {
                _this.lastRequestLoadTime = __WEBPACK_IMPORTED_MODULE_1_app_util_util__["a" /* Util */].toDate();
                _this.isAnyResquestLoading = val;
                _this.onLoadingChange();
            }
            else {
                // setTimeout(() => {
                _this.isAnyResquestLoading = false;
                _this.onLoadingChange();
                // }, this.getRemaining(this.lastRequestLoadTime));
            }
        });
        router.events.subscribe(function (e) {
            if (e instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* NavigationStart */]) {
                _this.lastRouteLoadTime = __WEBPACK_IMPORTED_MODULE_1_app_util_util__["a" /* Util */].toDate();
                _this.isOnRouteChanging.push();
                _this.onLoadingChange();
            }
            else if (e instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* NavigationEnd */]
                || e instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* NavigationError */]
                || e instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* NavigationCancel */]) {
                // setTimeout(() => {
                _this.isOnRouteChanging.pop();
                _this.onLoadingChange();
                // }, this.getRemaining());
            }
        });
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent.prototype.onLoadingChange = function () {
        if (this.isOnRouteChanging.length || this.isAnyResquestLoading) {
            this.setLoading('loading', true);
        }
        else {
            this.setLoading('loading', false);
        }
    };
    LoadingComponent.prototype.getRemaining = function (lastLoadTime) {
        var diff = (__WEBPACK_IMPORTED_MODULE_1_app_util_util__["a" /* Util */].toDate().getTime() - lastLoadTime.getTime()) / 1000;
        return Math.max(0, this.minimalTimeMS - diff);
    };
    LoadingComponent.prototype.setLoading = function (id, val) {
        var elem;
        var _class = val ? 'visible' : 'hidden';
        if (document.getElementById) {
            if (elem = document.getElementById(id)) {
                if (val) {
                    if (elem.classList.contains('visible')) {
                        elem.classList.remove('visible');
                    }
                    if (elem.classList.contains('hidden')) {
                        elem.classList.remove('hidden');
                    }
                }
                if (!val) {
                    if (elem.classList.contains('visible')) {
                        elem.classList.remove('visible');
                    }
                }
                elem.classList.add(_class);
            }
        }
    };
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-loading',
            template: __webpack_require__("../../../../../src/app/shared/loading/loading.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_app_service_loader_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* Router */]])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav #navbar class=\"navbar navbar-transparent navbar-absolute\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"navbar-minimize\">\r\n            <button id=\"minimizeSidebar\" class=\"btn btn-round btn-white btn-fill btn-just-icon\">\r\n                <i class=\"material-icons visible-on-sidebar-regular\">more_vert</i>\r\n                <i class=\"material-icons visible-on-sidebar-mini\">view_list</i>\r\n            </button>\r\n        </div>\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"javascript:void(0)\"> Menu </a>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router) {
        this.element = element;
        this.router = router;
        this.opened = false;
        this.userId = '';
        this.oldPass = '';
        this.newPass = '';
        this.confirmPass = '';
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        if ($('body').hasClass('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        if ($('body').hasClass('hide-sidebar')) {
            misc.hide_sidebar_active = true;
        }
        $('#minimizeSidebar').click(function () {
            if (misc.sidebar_mini_active === true) {
                $('body').removeClass('sidebar-mini');
                misc.sidebar_mini_active = false;
            }
            else {
                setTimeout(function () {
                    $('body').addClass('sidebar-mini');
                    misc.sidebar_mini_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
        $('#hideSidebar').click(function () {
            if (misc.hide_sidebar_active === true) {
                setTimeout(function () {
                    $('body').removeClass('hide-sidebar');
                    misc.hide_sidebar_active = false;
                }, 300);
                setTimeout(function () {
                    $('.sidebar').removeClass('animation');
                }, 600);
                $('.sidebar').addClass('animation');
            }
            else {
                setTimeout(function () {
                    $('body').addClass('hide-sidebar');
                    // $('.sidebar').addClass('animation');
                    misc.hide_sidebar_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */]; }).subscribe(function (event) {
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
            }
        });
    };
    NavbarComponent.prototype.onResize = function (event) {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])('app-navbar-cmp'),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-navbar-cmp',
            template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common__["f" /* Location */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_md_md_module__ = __webpack_require__("../../../../../src/app/md/md.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["I" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_6_app_md_md_module__["a" /* MdModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["w" /* MatSelectModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__navbar_component__["a" /* NavbarComponent */]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n    <div class=\"logo-normal\">\r\n        <div class=\"logo-img\">\r\n            <img id=\"img-logo\" src=\"assets/img/logo/logo.png\"/>\r\n        </div>\r\n        <a href=\"#\" class=\"simple-text\">\r\n            Parking Panel\r\n        </a>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"sidebar-wrapper\">\r\n    <div *ngIf=\"isMobileMenu()\">\r\n        <form class=\"navbar-form navbar-right\" role=\"search\">\r\n            <div class=\"form-group form-search is-empty\">\r\n                <input class=\"form-control\" placeholder=\"Search\" type=\"text\">\r\n                <span class=\"material-input\"></span>\r\n                <span class=\"material-input\"></span>\r\n            </div>\r\n            <button class=\"btn btn-white btn-round btn-just-icon\" type=\"submit\">\r\n                <i class=\"material-icons\">search</i>\r\n                <div class=\"ripple-container\"></div>\r\n            </button>\r\n        </form>\r\n        <ul class=\"nav nav-mobile-menu\">\r\n            <li class=\"dropdown\">\r\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n                    <i class=\"material-icons\">person</i>\r\n                    <p class=\"hidden-lg hidden-md\">Perfil</p>\r\n                </a>\r\n                <ul class=\"dropdown-menu\">\r\n                    <li>\r\n                        <a [routerLink]=\"['/editar-dados']\">Editar conta</a>\r\n                    </li>\r\n                    <li>\r\n                        <a (click)=\"logout()\" style=\"cursor: pointer\">Sair</a>\r\n                    </li>\r\n                </ul>\r\n            </li>\r\n            <li class=\"separator hidden-lg hidden-md\"></li>\r\n        </ul>\r\n    </div>\r\n    <div class=\"nav-container\">\r\n        <ul class=\"nav\">\r\n            <ng-container *ngFor=\"let menuitem of menuItems\">\r\n                <li routerLinkActive=\"active\">\r\n                    <!--If is a single link-->\r\n                    <ng-container>\r\n                        <a class=\"custom-link\" [routerLink]=\"[menuitem.path]\" *ngIf=\"menuitem.type === 'link'\">\r\n                            <i class=\"material-icons\">{{menuitem.icontype}}</i>\r\n                            <p>{{menuitem.title}}</p>\r\n                        </a>\r\n                    </ng-container>\r\n                    <!--If it have a submenu-->\r\n                    <a class=\"custom-link\" data-toggle=\"collapse\" href=\"#{{menuitem.collapse}}\"\r\n                        *ngIf=\"menuitem.type === 'sub'\" (click)=\"updatePS()\">\r\n                        <i class=\"material-icons\">{{menuitem.icontype}}</i>\r\n                        <p>{{menuitem.title}}\r\n                            <b class=\"caret\"></b>\r\n                        </p>\r\n                    </a>\r\n\r\n                    <!--Display the submenu items-->\r\n                    <div id=\"{{menuitem.collapse}}\" class=\"collapse\" *ngIf=\"menuitem.type === 'sub'\">\r\n                        <ul class=\"nav\">\r\n                            <li routerLinkActive=\"active\" *ngFor=\"let childitem of menuitem.children\">\r\n                                <ng-container>\r\n                                    <a [routerLink]=\"[menuitem.path, childitem.path]\">\r\n                                        <span class=\"sidebar-mini\">{{childitem.ab}}</span>\r\n                                        <span class=\"sidebar-normal\">{{childitem.title}}</span>\r\n                                    </a>\r\n                                </ng-container>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </li>\r\n            </ng-container>\r\n        </ul>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//Menu Items
var ROUTES = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'assessment'
    },
    {
        path: '/control/inside',
        title: 'Estacionamento',
        type: 'link',
        icontype: 'timer'
    },
    {
        path: '/control/log',
        title: 'Histórico',
        type: 'link',
        icontype: 'assignment'
    },
    {
        path: '/car',
        title: 'Veículos',
        type: 'link',
        icontype: 'directions_car'
    }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        setInterval(function () {
            $('#img-logo').addClass('anime-rotate');
            setTimeout(function () {
                $('#img-logo').removeClass('anime-rotate');
            }, 3000);
        }, 15000);
    };
    SidebarComponent.prototype.updatePS = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
            // let ps = new PerfectScrollbar(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
        }
        $('.collapse').collapse('hide');
    };
    SidebarComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar-cmp',
            template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["g" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_3__sidebar_component__["b" /* SidebarComponent */]]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "../../../../../src/app/util/parking.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParkingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_constant_price_table__ = __webpack_require__("../../../../../src/app/constant/price-table.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ParkingService = /** @class */ (function () {
    function ParkingService() {
    }
    ParkingService.prototype.generateValue = function (isHolyday) {
        if (isHolyday === void 0) { isHolyday = false; }
        var dateNow = new Date();
        var weekDay = dateNow.getDay();
        var shift = this.getShift();
        if (isHolyday || weekDay === 0 || weekDay === 6) {
            return __WEBPACK_IMPORTED_MODULE_1_app_constant_price_table__["a" /* PriceTable */].WEEKWND_AND_HOLYDAYS;
        }
        else if (shift === __WEBPACK_IMPORTED_MODULE_1_app_constant_price_table__["b" /* Shifts */].MORNING) {
            return __WEBPACK_IMPORTED_MODULE_1_app_constant_price_table__["a" /* PriceTable */].MORNING;
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_app_constant_price_table__["a" /* PriceTable */].EVENING;
        }
    };
    ParkingService.prototype.getShift = function () {
        var hours = new Date().getHours();
        if (hours > 7 && hours < 12) {
            return __WEBPACK_IMPORTED_MODULE_1_app_constant_price_table__["b" /* Shifts */].MORNING;
        }
        else if (hours >= 12 && hours < 18) {
            return __WEBPACK_IMPORTED_MODULE_1_app_constant_price_table__["b" /* Shifts */].EVENING;
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_app_constant_price_table__["b" /* Shifts */].NIGHT;
        }
    };
    ParkingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ParkingService);
    return ParkingService;
}());



/***/ }),

/***/ "../../../../../src/app/util/util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.isViewMode = function (activatedRoute) {
        return (!activatedRoute.snapshot.queryParamMap.has('mode') || activatedRoute.snapshot.queryParamMap.get('mode') === 'view');
    };
    Util.isEditMode = function (activatedRoute) {
        return (!activatedRoute.snapshot.queryParamMap.has('mode') || activatedRoute.snapshot.queryParamMap.get('mode') === 'edit');
    };
    Util.insertRequestParam = function (baseUrl, key, value) {
        key = encodeURI(key);
        value = encodeURI(value);
        var paramsUrl = '';
        if (baseUrl.split('?').length > 1) {
            paramsUrl = baseUrl.split('?')[1];
        }
        var kvp = paramsUrl.split('&');
        var i = kvp.length;
        var x;
        while (i--) {
            x = kvp[i].split('=');
            if (x[0] === key) {
                x[1] = value;
                kvp[i] = x.join('=');
                break;
            }
        }
        if (i < 0) {
            kvp[paramsUrl === '' ? 0 : kvp.length] = [key, value].join('=');
        }
        return baseUrl.split('?')[0] + '?' + kvp.join('&');
    };
    Util.isDateBeforeToday = function (date) {
        return date && new Date(date.toDateString()) < new Date(new Date().toDateString());
    };
    Util.hideSideBar = function () {
        // Hide SideBar
        setTimeout(function () {
            if (!$('body').hasClass('sidebar-mini')) {
                $('#minimizeSidebar').click();
            }
        }, 250);
    };
    Util.showSideBar = function () {
        // Hide SideBar
        setTimeout(function () {
            if ($('body').hasClass('sidebar-mini')) {
                $('#minimizeSidebar').click();
            }
        }, 250);
    };
    Util.toDate = function (args) {
        var date = new Date();
        if (args && typeof (args) === 'string') {
            date = new Date(args);
        }
        else {
            return args || date;
        }
        var userTimezoneOffset = date.getTimezoneOffset() * 60000;
        var dateWithout = new Date(date.getTime() + userTimezoneOffset);
        return dateWithout;
    };
    Util.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            // tslint:disable-next-line:no-bitwise
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    return Util;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map