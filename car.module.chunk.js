webpackJsonp(["car.module"],{

/***/ "../../../../../src/app/views/car/car.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarModule", function() { return CarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_md_md_module__ = __webpack_require__("../../../../../src/app/md/md.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__car_router__ = __webpack_require__("../../../../../src/app/views/car/car.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__form_form_component__ = __webpack_require__("../../../../../src/app/views/car/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_list_component__ = __webpack_require__("../../../../../src/app/views/car/list/list.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var CarModule = /** @class */ (function () {
    function CarModule() {
    }
    CarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__car_router__["a" /* CarRouter */]),
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5_app_md_md_module__["a" /* MdModule */],
                __WEBPACK_IMPORTED_MODULE_4_app_app_module__["b" /* MaterialModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_8__list_list_component__["a" /* ListComponent */], __WEBPACK_IMPORTED_MODULE_7__form_form_component__["a" /* FormComponent */]]
        })
    ], CarModule);
    return CarModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/car/car.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_list_component__ = __webpack_require__("../../../../../src/app/views/car/list/list.component.ts");

var CarRouter = [
    {
        path: '',
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__list_list_component__["a" /* ListComponent */]
            },
            {
                path: '**',
                component: __WEBPACK_IMPORTED_MODULE_0__list_list_component__["a" /* ListComponent */]
            }
        ]
    }
];


/***/ }),

/***/ "../../../../../src/app/views/car/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade generic-modal\" id=\"carModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"carModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content change-modal\">\n\n      <div class=\"card-header card-header-icon\" data-background-color=\"spare\">\n        <i *ngIf=\"!edit\" class=\"material-icons\">add</i>\n        <i *ngIf=\"edit\" class=\"material-icons\">edit</i>\n      </div>\n      <h5 class=\"modal-title\">\n        <strong *ngIf=\"!edit\">Cadastro de Veículo</strong>\n        <strong *ngIf=\"edit\">Edição de Veículo</strong>\n        <button type=\"button\" class=\"close fix-close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n          <i class=\"material-icons\">clear</i>\n        </button>\n      </h5>\n\n      <div class=\"modal-body\">\n\n        <form class=\"form-horizontal\" #carForm=\"ngForm\">\n\n          <div class=\"row\">\n\n            <div class=\"col-sm-12\">\n              <mat-form-field>\n                <input matInput [(ngModel)]=\"obj.model\" placeholder=\"Modelo\" name=\"model\" type=\"text\" maxlength=\"20\"\n                  required>\n              </mat-form-field>\n            </div>\n\n            <div class=\"col-sm-6\">\n              <mat-form-field>\n                <input matInput [(ngModel)]=\"obj.plate\" (keyup)=\"setToUpper()\" placeholder=\"Placa\" name=\"plate\" type=\"text\" maxlength=\"7\"\n                  required>\n              </mat-form-field>\n              <p *ngIf=\"plateAlreadyExists()\" class=\"alert-text\">Já existe um carro com esta placa</p>\n            </div>\n\n            <div class=\"col-sm-6\">\n              <mat-form-field>\n                <input matInput [(ngModel)]=\"obj.color\" placeholder=\"Cor\" name=\"color\" type=\"text\" maxlength=\"20\"\n                  required>\n              </mat-form-field>\n            </div>\n\n            <div class=\"btn-space\">\n              <button class=\"btn btn-spare btn-round btn-raised pull-right\" [disabled]=\"!carForm.form.valid || plateAlreadyExists()\"\n                (click)=\"updateOrCreate('#carModal')\">\n                Salvar\n              </button>\n              <button type=\"button\" class=\"btn btn-round pull-right\" (click)=\"closeModal('#carModal')\">\n                Voltar\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/car/form/form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert-text {\n  font-size: 12px;\n  -webkit-transform: translateY(-15px);\n          transform: translateY(-15px);\n  color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/car/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_model_car_model__ = __webpack_require__("../../../../../src/app/model/car.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_service_car_car_service__ = __webpack_require__("../../../../../src/app/service/car/car.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_views_generic_generic_form_generic_form_component__ = __webpack_require__("../../../../../src/app/views/generic/generic-form/generic-form.component.ts");
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






var FormComponent = /** @class */ (function (_super) {
    __extends(FormComponent, _super);
    function FormComponent(service, router, activatedRoute, location) {
        var _this = _super.call(this, router, activatedRoute, service, location, __WEBPACK_IMPORTED_MODULE_3_app_model_car_model__["a" /* Car */]) || this;
        _this.cars = [];
        return _this;
    }
    FormComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $('#carModal').on('hide.bs.modal', function () {
            _this.obj = new __WEBPACK_IMPORTED_MODULE_3_app_model_car_model__["a" /* Car */]();
        });
        $('#carModal').on('show.bs.modal', function () {
            _this.getCars();
        });
    };
    FormComponent.prototype.getCars = function () {
        var _this = this;
        this.service.getAll().subscribe(function (success) {
            _this.cars = success;
        });
    };
    FormComponent.prototype.plateAlreadyExists = function () {
        var _this = this;
        return this.cars.find(function (item) { return item.plate === _this.obj.plate && _this.obj.id !== item.id; }) ? true : false;
    };
    FormComponent.prototype.setToUpper = function () {
        this.obj.plate = this.obj.plate.toUpperCase();
    };
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-form',
            template: __webpack_require__("../../../../../src/app/views/car/form/form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/car/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_app_service_car_car_service__["a" /* CarService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["f" /* Location */]])
    ], FormComponent);
    return FormComponent;
}(__WEBPACK_IMPORTED_MODULE_5_app_views_generic_generic_form_generic_form_component__["a" /* GenericFormComponent */]));



/***/ }),

/***/ "../../../../../src/app/views/car/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button (click)=\"showModal()\" class=\"btn btn-spare btn-raised pull-right\">\n          <i class=\"material-icons\">add</i> Veículo\n        </button>\n        <div class=\"card\">\n          <div class=\"card-header card-header-icon\" data-background-color=\"spare\">\n            <i class=\"material-icons\">list</i>\n          </div>\n          <div class=\"card-content\">\n            <h5 class=\"card-title\">\n              <strong>Lista de Veículos</strong>\n            </h5>\n\n            <div class=\"row\">\n              <div class=\"col-sm-6 pull-right\">\n                <mat-form-field class=\"busca\">\n                  <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Pesquisar\">\n                  <i class=\"material-icons\">search</i>\n                </mat-form-field>\n              </div>\n            </div>\n\n            <div class=\"example-container\">\n\n              <mat-table #table [dataSource]=\"dataSource\" matSort>\n                <ng-container matColumnDef=\"plate\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> Placa\n                  </mat-header-cell>\n                  <mat-cell *matCellDef=\"let item\"> {{ item.plate }} </mat-cell>\n                </ng-container>\n\n                <ng-container matColumnDef=\"model\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> Modelo\n                  </mat-header-cell>\n                  <mat-cell *matCellDef=\"let item\"> {{ item.model }} </mat-cell>\n                </ng-container>\n\n                <ng-container matColumnDef=\"color\">\n                  <mat-header-cell *matHeaderCellDef mat-sort-header> Cor\n                  </mat-header-cell>\n                  <mat-cell *matCellDef=\"let item\"> {{ item.color }} </mat-cell>\n                </ng-container>\n\n                <ng-container matColumnDef=\"acoes\">\n                  <mat-header-cell class=\"text-right\" *matHeaderCellDef> Opções </mat-header-cell>\n                  <mat-cell class=\"text-right acoes\" *matCellDef=\"let item\">\n                    <button class=\"btn btn-simple btn-info btn-icon edit\" matTooltip=\"Editar\"\n                      [matTooltipPosition]=\"'left'\" (click)=\"showModal(item)\">\n                      <i class=\"material-icons\">edit</i>\n                    </button>\n                    <button class=\"btn btn-simple btn-danger btn-icon edit\" matTooltip=\"Excluir\"\n                      [matTooltipPosition]=\"'left'\" data-toggle=\"modal\" (click)=\"deleteItem(item)\">\n                      <i class=\"material-icons\">delete</i>\n                    </button>\n                  </mat-cell>\n                </ng-container>\n\n                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                <mat-row *matRowDef=\"let item; columns: displayedColumns;\">\n                </mat-row>\n              </mat-table>\n\n              <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n            </div>\n          </div>\n          <app-form #carForm></app-form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/views/car/list/list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/views/car/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_car_car_service__ = __webpack_require__("../../../../../src/app/service/car/car.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_views_generic_generic_list_generic_list_component__ = __webpack_require__("../../../../../src/app/views/generic/generic-list/generic-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__form_form_component__ = __webpack_require__("../../../../../src/app/views/car/form/form.component.ts");
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






var ListComponent = /** @class */ (function (_super) {
    __extends(ListComponent, _super);
    function ListComponent(service, router, activedRouter, location) {
        return _super.call(this, service, router, activedRouter, location) || this;
    }
    ListComponent.prototype.showModal = function (car) {
        this.carForm.initModal('#carModal', car);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* ViewChild */])('carForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__form_form_component__["a" /* FormComponent */])
    ], ListComponent.prototype, "carForm", void 0);
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/views/car/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/views/car/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_app_service_car_car_service__["a" /* CarService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["f" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["f" /* Location */]])
    ], ListComponent);
    return ListComponent;
}(__WEBPACK_IMPORTED_MODULE_4_app_views_generic_generic_list_generic_list_component__["a" /* GenericListComponent */]));



/***/ })

});
//# sourceMappingURL=car.module.chunk.js.map