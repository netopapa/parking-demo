webpackJsonp(["common"],{

/***/ "../../../../../src/app/model/base.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseModel; });
var BaseModel = /** @class */ (function () {
    function BaseModel() {
    }
    return BaseModel;
}());



/***/ }),

/***/ "../../../../../src/app/model/car.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Car; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_model__ = __webpack_require__("../../../../../src/app/model/base.model.ts");
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

var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Car;
}(__WEBPACK_IMPORTED_MODULE_0__base_model__["a" /* BaseModel */]));



/***/ }),

/***/ "../../../../../src/app/views/generic/generic-form/base-commons.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseCommons; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_service_toast_notification_service_toast_service_toast_service__ = __webpack_require__("../../../../../src/app/service/toast-notification-service/toast-service/toast.service.ts");

var BaseCommons = /** @class */ (function () {
    function BaseCommons() {
    }
    BaseCommons.prototype.toast = function (msg, type) {
        __WEBPACK_IMPORTED_MODULE_0_app_service_toast_notification_service_toast_service_toast_service__["a" /* ToastService */].show(msg, type);
    };
    return BaseCommons;
}());



/***/ }),

/***/ "../../../../../src/app/views/generic/generic-form/generic-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_service_toast_notification_service_message_type_enum__ = __webpack_require__("../../../../../src/app/service/toast-notification-service/message-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_service_toast_notification_service_toast_service_toast_service__ = __webpack_require__("../../../../../src/app/service/toast-notification-service/toast-service/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_views_generic_generic_form_base_commons__ = __webpack_require__("../../../../../src/app/views/generic/generic-form/base-commons.ts");
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



var GenericFormComponent = /** @class */ (function (_super) {
    __extends(GenericFormComponent, _super);
    function GenericFormComponent(router, activatedRoute, service, location, modelType, cd) {
        var _this = _super.call(this) || this;
        _this.router = router;
        _this.activatedRoute = activatedRoute;
        _this.service = service;
        _this.location = location;
        _this.modelType = modelType;
        _this.cd = cd;
        _this.recordUpdateMsg = 'Item alterado !';
        _this.recordSaveMsg = 'Item salvo !';
        return _this;
    }
    GenericFormComponent.prototype.ngOnInit = function () {
        this.obj = this.getNew();
        this.modal = false;
        this.reload();
    };
    GenericFormComponent.prototype.removeDoubleSpace = function (str) {
        str = str.replace(/\s\s+/g, ' ');
        return str;
    };
    GenericFormComponent.prototype.reload = function () {
        var _this = this;
        if (this.activatedRoute.snapshot.paramMap.get('id') !== null) {
            var id = this.activatedRoute.snapshot.paramMap.get('id');
            this.service.getOne(id).subscribe(function (loadedObj) {
                _this.edit = true;
                _this.obj = loadedObj;
                _this.afterLoadObj(_this.obj);
                setTimeout(function () { _this.cd.detectChanges(); }, 500);
            });
        }
    };
    GenericFormComponent.prototype.afterLoadObj = function (data) {
    };
    GenericFormComponent.prototype.getNew = function () {
        return new this.modelType();
    };
    GenericFormComponent.prototype.toast = function (msg, type) {
        __WEBPACK_IMPORTED_MODULE_1_app_service_toast_notification_service_toast_service_toast_service__["a" /* ToastService */].show(msg, type);
    };
    GenericFormComponent.prototype.beforeSave = function () {
    };
    GenericFormComponent.prototype.updateOrCreate = function (idModal) {
        var _this = this;
        // tslint:disable-next-line:no-shadowed-variable
        var onError = function (error) {
            this.toast(error.headers.get('error'), __WEBPACK_IMPORTED_MODULE_0_app_service_toast_notification_service_message_type_enum__["a" /* MessageType */].ERROR);
        }.bind(this);
        try {
            this.beforeSave();
            if (!this.edit) {
                this.service.save(this.obj).subscribe(function (success) {
                    _this.obj = success;
                    _this.toast(_this.recordSaveMsg, __WEBPACK_IMPORTED_MODULE_0_app_service_toast_notification_service_message_type_enum__["a" /* MessageType */].SUCCESS);
                    if (idModal) {
                        _this.afterSaveModal(idModal);
                    }
                    else {
                        _this.afterSave();
                    }
                });
            }
            else {
                this.service.update(this.obj).subscribe(function (success) {
                    _this.obj = success;
                    _this.toast(_this.recordUpdateMsg, __WEBPACK_IMPORTED_MODULE_0_app_service_toast_notification_service_message_type_enum__["a" /* MessageType */].SUCCESS);
                    if (idModal) {
                        _this.afterSaveModal(idModal);
                    }
                    else {
                        _this.afterSave();
                    }
                });
            }
        }
        catch (error) {
            onError(error);
        }
    };
    GenericFormComponent.prototype.afterSave = function () {
        var _this = this;
        setTimeout(function () { return _this.returnScreen(); }, 300);
    };
    GenericFormComponent.prototype.afterSaveModal = function (idModal) {
        $(idModal).modal('hide');
        this.modal = true;
    };
    GenericFormComponent.prototype.clearForm = function (idForm) {
        idForm.resetForm();
    };
    GenericFormComponent.prototype.getLocation = function () {
        var tree = this.router.parseUrl(this.router.url);
        return tree.root.children['primary'].segments.map(function (it) { return it.path; }).join('/');
    };
    GenericFormComponent.prototype.getParentPath = function (path) {
        if (path) {
            return path.slice(0, Math.max(path.lastIndexOf('/'), 0));
        }
        return this.getLocation().slice(0, Math.max(this.getLocation().lastIndexOf('/'), 1));
    };
    GenericFormComponent.prototype.returnScreen = function () {
        if (!this.modal) {
            if (this.edit) {
                this.router.navigate([this.getParentPath(this.getParentPath())]);
            }
            else {
                this.router.navigate([this.getParentPath()]);
            }
        }
    };
    GenericFormComponent.prototype.closeModal = function (idModal) {
        $(idModal).modal('hide');
    };
    GenericFormComponent.prototype.initModal = function (idModal, item) {
        if (item) {
            Object.assign(this.obj, item);
            this.edit = true;
        }
        else {
            this.edit = false;
        }
        this.beforeShowModal();
        $(idModal).modal('show');
    };
    GenericFormComponent.prototype.beforeShowModal = function () { };
    return GenericFormComponent;
}(__WEBPACK_IMPORTED_MODULE_2_app_views_generic_generic_form_base_commons__["a" /* BaseCommons */]));



/***/ }),

/***/ "../../../../../src/app/views/generic/generic-list/generic-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenericListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_service_toast_notification_service_message_type_enum__ = __webpack_require__("../../../../../src/app/service/toast-notification-service/message-type.enum.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_service_toast_notification_service_toast_service_toast_service__ = __webpack_require__("../../../../../src/app/service/toast-notification-service/toast-service/toast.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2__ = __webpack_require__("../../../../sweetalert2/dist/sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var GenericListComponent = /** @class */ (function () {
    function GenericListComponent(service, router, activatedRoute, location) {
        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.location = location;
        this.displayedColumns = [];
        this.recordDeletedMsg = 'Item deletado !';
        this.recordEnabledMsg = 'Item ativado !';
        this.recordDisabledMsg = 'Item desativado !';
    }
    GenericListComponent.prototype.ngOnInit = function () {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTableDataSource */](this.list);
        this.refreshData();
    };
    GenericListComponent.prototype.toast = function (msg, type) {
        __WEBPACK_IMPORTED_MODULE_3_app_service_toast_notification_service_toast_service_toast_service__["a" /* ToastService */].show(msg, type);
    };
    GenericListComponent.prototype.getFilteredRows = function () {
        if (this.dataSource) {
            return this.dataSource.filteredData;
        }
        return [];
    };
    GenericListComponent.prototype.loadList = function () {
        return this.service.getAll();
    };
    GenericListComponent.prototype.refreshData = function () {
        var _this = this;
        var _onFinish = function (list) {
            _this.dataSource.data = list;
            console.log(_this.dataSource.data);
            // Nao esconde mais a sidebar
            // Util.hideSideBar();
        };
        this.loadList().subscribe(_onFinish, function () { return _onFinish([]); });
    };
    GenericListComponent.prototype.getLocation = function () {
        var tree = this.router.parseUrl(this.router.url);
        return tree.root.children['primary'].segments.map(function (it) { return it.path; }).join('/');
    };
    GenericListComponent.prototype.view = function (obj) {
        this.router.navigate([this.getLocation() + '/form', obj.id.toString()]);
    };
    GenericListComponent.prototype.edit = function (obj) {
        var url = this.getLocation();
        var formUrl = url.replace('/registros', '');
        formUrl += '/form';
        this.router.navigate([formUrl, obj.id.toString()]);
    };
    GenericListComponent.prototype.newRecord = function () {
        var url = this.getLocation();
        var formUrl = url.replace('/registros', '');
        formUrl += '/form';
        this.router.navigate([formUrl]);
    };
    GenericListComponent.prototype.delete = function (obj) {
        var _this = this;
        this.service.delete(obj.id).subscribe(function (success) {
            _this.refreshData();
            _this.toast(_this.recordDeletedMsg, __WEBPACK_IMPORTED_MODULE_2_app_service_toast_notification_service_message_type_enum__["a" /* MessageType */].SUCCESS);
        }, function (error) {
            console.log("erro: " + error);
        });
    };
    GenericListComponent.prototype.enable = function (obj) {
        var _this = this;
        this.service.enable(obj.id).subscribe(function (success) {
            _this.refreshData();
            _this.toast(_this.recordEnabledMsg, __WEBPACK_IMPORTED_MODULE_2_app_service_toast_notification_service_message_type_enum__["a" /* MessageType */].SUCCESS);
        }, function (error) {
            console.log("erro: " + error);
        });
    };
    GenericListComponent.prototype.disable = function (obj) {
        var _this = this;
        this.service.disable(obj.id).subscribe(function (success) {
            _this.refreshData();
            _this.toast(_this.recordDisabledMsg, __WEBPACK_IMPORTED_MODULE_2_app_service_toast_notification_service_message_type_enum__["a" /* MessageType */].SUCCESS);
        }, function (error) {
            console.log("erro: " + error);
        });
    };
    GenericListComponent.prototype.deleteItem = function (obj) {
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()(this.swalContent(__WEBPACK_IMPORTED_MODULE_2_app_service_toast_notification_service_message_type_enum__["b" /* SwalType */].DELETE)).then(function () {
            this.delete(obj);
        }.bind(this)).catch(__WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a.noop);
    };
    GenericListComponent.prototype.disableItem = function (obj) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_4_sweetalert2___default()(this.swalContent(__WEBPACK_IMPORTED_MODULE_2_app_service_toast_notification_service_message_type_enum__["b" /* SwalType */].DISABLE)).then(function () {
            this.disable(obj);
        }.bind(this), function (dismiss) {
            if (dismiss === 'cancel') {
                _this.refreshData();
            }
        }).catch(__WEBPACK_IMPORTED_MODULE_4_sweetalert2___default.a.noop);
        this.refreshData();
    };
    GenericListComponent.prototype.enableDisable = function (obj) {
        if (obj.status === 'ATIVO') {
            this.disableItem(obj);
        }
        else {
            this.enable(obj);
        }
    };
    GenericListComponent.prototype.swalContent = function (text, type) {
        if (type === void 0) { type = 'warning'; }
        return {
            title: 'Tem certeza?',
            text: text,
            type: type,
            showCancelButton: true,
            confirmButtonText: 'Sim!',
            cancelButtonText: 'Não',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
        };
    };
    // configurações da tabela
    GenericListComponent.prototype.ngAfterViewInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                setTimeout(function () {
                    this.displayedColumns = this.table._contentColumnDefs._results.map(function (o) { return o.name; });
                }.bind(this), 0);
                this.paginator._intl.itemsPerPageLabel = 'Itens por página';
                this.paginator._intl.firstPageLabel = 'Primeira página';
                this.paginator._intl.nextPageLabel = 'Próxima página';
                this.paginator._intl.previousPageLabel = 'Página anterior';
                this.paginator._intl.lastPageLabel = 'Última página';
                this.paginator._intl.getRangeLabel = this.getPortugueseRangeLabel;
                $('.generic-modal').on('hide.bs.modal', function (e) {
                    setTimeout(function () { return _this.refreshData(); }, 500);
                });
                return [2 /*return*/];
            });
        });
    };
    GenericListComponent.prototype.getPortugueseRangeLabel = function (page, pageSize, length) {
        if (length == 0 || pageSize == 0) {
            return "0 de " + length;
        }
        length = Math.max(length, 0);
        var startIndex = page * pageSize;
        var endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return startIndex + 1 + " - " + endIndex + " de " + length;
    };
    GenericListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatPaginator */])
    ], GenericListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatSort */])
    ], GenericListComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('table'),
        __metadata("design:type", Object)
    ], GenericListComponent.prototype, "table", void 0);
    return GenericListComponent;
}());



/***/ }),

/***/ "../../../../sweetalert2/dist/sweetalert2.js":
/***/ (function(module, exports, __webpack_require__) {

/*!
 * sweetalert2 v6.10.1
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Sweetalert2 = factory());
}(this, (function () { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  type: null,
  customClass: '',
  target: 'body',
  animation: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: '#3085d6',
  confirmButtonClass: null,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: '#aaa',
  cancelButtonClass: null,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: null,
  timer: null,
  width: 500,
  padding: 20,
  background: '#fff',
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: null,
  inputAttributes: {},
  inputValidator: null,
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: '40px',
  onOpen: null,
  onClose: null,
  useRejections: true
};

var swalPrefix = 'swal2-';

var prefix = function prefix(items) {
  var result = {};
  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }
  return result;
};

var swalClasses = prefix(['container', 'shown', 'iosfix', 'modal', 'overlay', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'content', 'buttonswrapper', 'confirm', 'cancel', 'icon', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea', 'inputerror', 'validationerror', 'progresssteps', 'activeprogressstep', 'progresscircle', 'progressline', 'loading', 'styled']);

var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var consolePrefix = 'SweetAlert2:';

/*
 * Set hover, active and focus-states for buttons (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
 */
var colorLuminance = function colorLuminance(hex, lum) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // Convert to decimal and change luminosity
  var rgb = '#';
  for (var i = 0; i < 3; i++) {
    var c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
};

var uniqueArray = function uniqueArray(arr) {
  var result = [];
  for (var i in arr) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  return result;
};

/**
 * Standardise console warnings
 * @param message
 */
var warn = function warn(message) {
  console.warn(consolePrefix + ' ' + message);
};

/**
 * Standardise console errors
 * @param message
 */
var error = function error(message) {
  console.error(consolePrefix + ' ' + message);
};

// Remember state in cases where opening and handling a modal will fiddle with it.
var states = {
  previousWindowKeyDown: null,
  previousActiveElement: null,
  previousBodyPadding: null

  /*
   * Add modal + overlay to DOM
   */
};var init = function init(params) {
  // Clean up the old modal if it exists
  var c = getContainer();
  if (c) {
    c.parentNode.removeChild(c);
  }

  if (typeof document === 'undefined') {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;

  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  targetElement.appendChild(container);

  var modal = getModal();
  var input = getChildByClass(modal, swalClasses.input);
  var file = getChildByClass(modal, swalClasses.file);
  var range = modal.querySelector('.' + swalClasses.range + ' input');
  var rangeOutput = modal.querySelector('.' + swalClasses.range + ' output');
  var select = getChildByClass(modal, swalClasses.select);
  var checkbox = modal.querySelector('.' + swalClasses.checkbox + ' input');
  var textarea = getChildByClass(modal, swalClasses.textarea);

  input.oninput = function () {
    sweetAlert.resetValidationError();
  };

  input.onkeydown = function (event) {
    setTimeout(function () {
      if (event.keyCode === 13 && params.allowEnterKey) {
        event.stopPropagation();
        sweetAlert.clickConfirm();
      }
    }, 0);
  };

  file.onchange = function () {
    sweetAlert.resetValidationError();
  };

  range.oninput = function () {
    sweetAlert.resetValidationError();
    rangeOutput.value = range.value;
  };

  range.onchange = function () {
    sweetAlert.resetValidationError();
    range.previousSibling.value = range.value;
  };

  select.onchange = function () {
    sweetAlert.resetValidationError();
  };

  checkbox.onchange = function () {
    sweetAlert.resetValidationError();
  };

  textarea.oninput = function () {
    sweetAlert.resetValidationError();
  };

  return modal;
};

/*
 * Manipulate DOM
 */

var sweetHTML = ('\n <div role="dialog" aria-labelledby="' + swalClasses.title + '" aria-describedby="' + swalClasses.content + '" class="' + swalClasses.modal + '" tabindex="-1">\n   <ul class="' + swalClasses.progresssteps + '"></ul>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.error + '">\n     <span class="swal2-x-mark"><span class="swal2-x-mark-line-left"></span><span class="swal2-x-mark-line-right"></span></span>\n   </div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.question + '">?</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.warning + '">!</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.info + '">i</div>\n   <div class="' + swalClasses.icon + ' ' + iconTypes.success + '">\n     <div class="swal2-success-circular-line-left"></div>\n     <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n     <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n     <div class="swal2-success-circular-line-right"></div>\n   </div>\n   <img class="' + swalClasses.image + '" />\n   <h2 class="' + swalClasses.title + '" id="' + swalClasses.title + '"></h2>\n   <div id="' + swalClasses.content + '" class="' + swalClasses.content + '"></div>\n   <input class="' + swalClasses.input + '" />\n   <input type="file" class="' + swalClasses.file + '" />\n   <div class="' + swalClasses.range + '">\n     <output></output>\n     <input type="range" />\n   </div>\n   <select class="' + swalClasses.select + '"></select>\n   <div class="' + swalClasses.radio + '"></div>\n   <label for="' + swalClasses.checkbox + '" class="' + swalClasses.checkbox + '">\n     <input type="checkbox" />\n   </label>\n   <textarea class="' + swalClasses.textarea + '"></textarea>\n   <div class="' + swalClasses.validationerror + '" id="' + swalClasses.validationerror + '"></div>\n   <div class="' + swalClasses.buttonswrapper + '">\n     <button type="button" class="' + swalClasses.confirm + '">OK</button>\n     <button type="button" class="' + swalClasses.cancel + '">Cancel</button>\n   </div>\n   <button type="button" class="' + swalClasses.close + '">\xD7</button>\n </div>\n').replace(/(^|\n)\s*/g, '');

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};

var getModal = function getModal() {
  return getContainer() ? getContainer().querySelector('.' + swalClasses.modal) : null;
};

var getIcons = function getIcons() {
  var modal = getModal();
  return modal.querySelectorAll('.' + swalClasses.icon);
};

var elementByClass = function elementByClass(className) {
  return getContainer() ? getContainer().querySelector('.' + className) : null;
};

var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};

var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};

var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};

var getButtonsWrapper = function getButtonsWrapper() {
  return elementByClass(swalClasses.buttonswrapper);
};

var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses.progresssteps);
};

var getValidationError = function getValidationError() {
  return elementByClass(swalClasses.validationerror);
};

var getConfirmButton = function getConfirmButton() {
  return elementByClass(swalClasses.confirm);
};

var getCancelButton = function getCancelButton() {
  return elementByClass(swalClasses.cancel);
};

var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};

var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = Array.from(getModal().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'))
  // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }
    return 0;
  });

  var otherFocusableElements = Array.prototype.slice.call(getModal().querySelectorAll('button, input:not([type=hidden]), textarea, select, a, [tabindex="0"]'));

  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements));
};

var hasClass = function hasClass(elem, className) {
  if (elem.classList) {
    return elem.classList.contains(className);
  }
  return false;
};

var focusInput = function focusInput(input) {
  input.focus();

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915/1331425
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};

var addClass = function addClass(elem, className) {
  if (!elem || !className) {
    return;
  }
  var classes = className.split(/\s+/).filter(Boolean);
  classes.forEach(function (className) {
    elem.classList.add(className);
  });
};

var removeClass = function removeClass(elem, className) {
  if (!elem || !className) {
    return;
  }
  var classes = className.split(/\s+/).filter(Boolean);
  classes.forEach(function (className) {
    elem.classList.remove(className);
  });
};

var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};

var show = function show(elem, display) {
  if (!display) {
    display = 'block';
  }
  elem.style.opacity = '';
  elem.style.display = display;
};

var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var empty = function empty(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
};

// borrowed from jqeury $(elem).is(':visible') implementation
var isVisible = function isVisible(elem) {
  return elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length;
};

var removeStyleProperty = function removeStyleProperty(elem, property) {
  if (elem.style.removeProperty) {
    elem.style.removeProperty(property);
  } else {
    elem.style.removeAttribute(property);
  }
};

var animationEndEvent = function () {
  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };
  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && testEl.style[i] !== undefined) {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Reset previous window keydown handler and focued element
var resetPrevState = function resetPrevState() {
  window.onkeydown = states.previousWindowKeyDown;
  if (states.previousActiveElement && states.previousActiveElement.focus) {
    var x = window.scrollX;
    var y = window.scrollY;
    states.previousActiveElement.focus();
    if (x && y) {
      // IE has no scrollX/scrollY support
      window.scrollTo(x, y);
    }
  }
};

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
  if (supportsTouch) {
    return 0;
  }
  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

// JavaScript Debounce Function
// Simplivied version of https://davidwalsh.name/javascript-debounce-function
var debounce = function debounce(func, wait) {
  var timeout = void 0;
  return function () {
    var later = function later() {
      timeout = null;
      func();
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};





var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();















var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var modalParams = _extends({}, defaultParams);
var queue = [];
var swal2Observer = void 0;

/*
 * Check for the existence of Promise
 * Hopefully to avoid many github issues
 */
if (typeof Promise === 'undefined') {
  error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/limonte/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
}

/*
 * Set type, text and actions on modal
 */
var setParameters = function setParameters(params) {
  // If a custom element is set, determine if it is valid
  if (typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }

  var modal = void 0;
  var oldModal = getModal();
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
  // If the model target has changed, refresh the modal
  if (oldModal && targetElement && oldModal.parentNode !== targetElement.parentNode) {
    modal = init(params);
  } else {
    modal = oldModal || init(params);
  }

  for (var param in params) {
    if (!sweetAlert.isValidParameter(param)) {
      warn('Unknown parameter "' + param + '"');
    }
  }

  // Set modal width
  modal.style.width = typeof params.width === 'number' ? params.width + 'px' : params.width;

  modal.style.padding = params.padding + 'px';
  modal.style.background = params.background;
  var successIconParts = modal.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.background = params.background;
  }

  var title = getTitle();
  var content = getContent();
  var buttonsWrapper = getButtonsWrapper();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  var closeButton = getCloseButton();

  // Title
  if (params.titleText) {
    title.innerText = params.titleText;
  } else {
    title.innerHTML = params.title.split('\n').join('<br />');
  }

  // Content
  if (params.text || params.html) {
    if (_typeof(params.html) === 'object') {
      content.innerHTML = '';
      if (0 in params.html) {
        for (var _i = 0; _i in params.html; _i++) {
          content.appendChild(params.html[_i].cloneNode(true));
        }
      } else {
        content.appendChild(params.html.cloneNode(true));
      }
    } else if (params.html) {
      content.innerHTML = params.html;
    } else if (params.text) {
      content.textContent = params.text;
    }
    show(content);
  } else {
    hide(content);
  }

  // Close button
  if (params.showCloseButton) {
    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
    show(closeButton);
  } else {
    hide(closeButton);
  }

  // Custom Class
  modal.className = swalClasses.modal;
  if (params.customClass) {
    addClass(modal, params.customClass);
  }

  // Progress steps
  var progressStepsContainer = getProgressSteps();
  var currentProgressStep = parseInt(params.currentProgressStep === null ? sweetAlert.getQueueStep() : params.currentProgressStep, 10);
  if (params.progressSteps.length) {
    show(progressStepsContainer);
    empty(progressStepsContainer);
    if (currentProgressStep >= params.progressSteps.length) {
      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
    }
    params.progressSteps.forEach(function (step, index) {
      var circle = document.createElement('li');
      addClass(circle, swalClasses.progresscircle);
      circle.innerHTML = step;
      if (index === currentProgressStep) {
        addClass(circle, swalClasses.activeprogressstep);
      }
      progressStepsContainer.appendChild(circle);
      if (index !== params.progressSteps.length - 1) {
        var line = document.createElement('li');
        addClass(line, swalClasses.progressline);
        line.style.width = params.progressStepsDistance;
        progressStepsContainer.appendChild(line);
      }
    });
  } else {
    hide(progressStepsContainer);
  }

  // Icon
  var icons = getIcons();
  for (var _i2 = 0; _i2 < icons.length; _i2++) {
    hide(icons[_i2]);
  }
  if (params.type) {
    var validType = false;
    for (var iconType in iconTypes) {
      if (params.type === iconType) {
        validType = true;
        break;
      }
    }
    if (!validType) {
      error('Unknown alert type: ' + params.type);
      return false;
    }
    var icon = modal.querySelector('.' + swalClasses.icon + '.' + iconTypes[params.type]);
    show(icon);

    // Animate icon
    if (params.animation) {
      switch (params.type) {
        case 'success':
          addClass(icon, 'swal2-animate-success-icon');
          addClass(icon.querySelector('.swal2-success-line-tip'), 'swal2-animate-success-line-tip');
          addClass(icon.querySelector('.swal2-success-line-long'), 'swal2-animate-success-line-long');
          break;
        case 'error':
          addClass(icon, 'swal2-animate-error-icon');
          addClass(icon.querySelector('.swal2-x-mark'), 'swal2-animate-x-mark');
          break;
        default:
          break;
      }
    }
  }

  // Custom image
  var image = getImage();
  if (params.imageUrl) {
    image.setAttribute('src', params.imageUrl);
    image.setAttribute('alt', params.imageAlt);
    show(image);

    if (params.imageWidth) {
      image.setAttribute('width', params.imageWidth);
    } else {
      image.removeAttribute('width');
    }

    if (params.imageHeight) {
      image.setAttribute('height', params.imageHeight);
    } else {
      image.removeAttribute('height');
    }

    image.className = swalClasses.image;
    if (params.imageClass) {
      addClass(image, params.imageClass);
    }
  } else {
    hide(image);
  }

  // Cancel button
  if (params.showCancelButton) {
    cancelButton.style.display = 'inline-block';
  } else {
    hide(cancelButton);
  }

  // Confirm button
  if (params.showConfirmButton) {
    removeStyleProperty(confirmButton, 'display');
  } else {
    hide(confirmButton);
  }

  // Buttons wrapper
  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(buttonsWrapper);
  } else {
    show(buttonsWrapper);
  }

  // Edit text on confirm and cancel buttons
  confirmButton.innerHTML = params.confirmButtonText;
  cancelButton.innerHTML = params.cancelButtonText;

  // ARIA labels for confirm and cancel buttons
  confirmButton.setAttribute('aria-label', params.confirmButtonAriaLabel);
  cancelButton.setAttribute('aria-label', params.cancelButtonAriaLabel);

  // Set buttons to selected background colors
  if (params.buttonsStyling) {
    confirmButton.style.backgroundColor = params.confirmButtonColor;
    cancelButton.style.backgroundColor = params.cancelButtonColor;
  }

  // Add buttons custom classes
  confirmButton.className = swalClasses.confirm;
  addClass(confirmButton, params.confirmButtonClass);
  cancelButton.className = swalClasses.cancel;
  addClass(cancelButton, params.cancelButtonClass);

  // Buttons styling
  if (params.buttonsStyling) {
    addClass(confirmButton, swalClasses.styled);
    addClass(cancelButton, swalClasses.styled);
  } else {
    removeClass(confirmButton, swalClasses.styled);
    removeClass(cancelButton, swalClasses.styled);

    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }

  // CSS animation
  if (params.animation === true) {
    removeClass(modal, swalClasses.noanimation);
  } else {
    addClass(modal, swalClasses.noanimation);
  }

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://limonte.github.io/sweetalert2/#ajax-request');
  }
};

/*
 * Animations
 */
var openModal = function openModal(animation, onComplete) {
  var container = getContainer();
  var modal = getModal();

  if (animation) {
    addClass(modal, swalClasses.show);
    addClass(container, swalClasses.fade);
    removeClass(modal, swalClasses.hide);
  } else {
    removeClass(modal, swalClasses.fade);
  }
  show(modal);

  // scrolling is 'hidden' until animation is done, after that 'auto'
  container.style.overflowY = 'hidden';
  if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
    modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
      container.style.overflowY = 'auto';
    });
  } else {
    container.style.overflowY = 'auto';
  }

  addClass(document.documentElement, swalClasses.shown);
  addClass(document.body, swalClasses.shown);
  addClass(container, swalClasses.shown);
  fixScrollbar();
  iOSfix();
  states.previousActiveElement = document.activeElement;
  if (onComplete !== null && typeof onComplete === 'function') {
    setTimeout(function () {
      onComplete(modal);
    });
  }
};

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = document.body.style.paddingRight;
    document.body.style.paddingRight = measureScrollbar() + 'px';
  }
};

var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding;
    states.previousBodyPadding = null;
  }
};

// Fix iOS scrolling http://stackoverflow.com/q/39626302/1331425
var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
  }
};

var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

// SweetAlert entry point
var sweetAlert = function sweetAlert() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args[0] === undefined) {
    error('SweetAlert2 expects at least 1 attribute!');
    return false;
  }

  var params = _extends({}, modalParams);

  switch (_typeof(args[0])) {
    case 'string':
      params.title = args[0];
      params.html = args[1];
      params.type = args[2];

      break;

    case 'object':
      _extends(params, args[0]);
      params.extraParams = args[0].extraParams;

      if (params.input === 'email' && params.inputValidator === null) {
        params.inputValidator = function (email) {
          return new Promise(function (resolve, reject) {
            var emailRegex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (emailRegex.test(email)) {
              resolve();
            } else {
              reject('Invalid email address');
            }
          });
        };
      }

      if (params.input === 'url' && params.inputValidator === null) {
        params.inputValidator = function (url) {
          return new Promise(function (resolve, reject) {
            // taken from https://stackoverflow.com/a/3809435/1331425
            var urlRegex = /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;
            if (urlRegex.test(url)) {
              resolve();
            } else {
              reject('Invalid URL');
            }
          });
        };
      }
      break;

    default:
      error('Unexpected type of argument! Expected "string" or "object", got ' + _typeof(args[0]));
      return false;
  }

  setParameters(params);

  var container = getContainer();
  var modal = getModal();

  return new Promise(function (resolve, reject) {
    // Close on timer
    if (params.timer) {
      modal.timeout = setTimeout(function () {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          reject('timer');
        } else {
          resolve({ dismiss: 'timer' });
        }
      }, params.timer);
    }

    // Get input element by specified type or, if type isn't specified, by params.input
    var getInput = function getInput(inputType) {
      inputType = inputType || params.input;
      if (!inputType) {
        return null;
      }
      switch (inputType) {
        case 'select':
        case 'textarea':
        case 'file':
          return getChildByClass(modal, swalClasses[inputType]);
        case 'checkbox':
          return modal.querySelector('.' + swalClasses.checkbox + ' input');
        case 'radio':
          return modal.querySelector('.' + swalClasses.radio + ' input:checked') || modal.querySelector('.' + swalClasses.radio + ' input:first-child');
        case 'range':
          return modal.querySelector('.' + swalClasses.range + ' input');
        default:
          return getChildByClass(modal, swalClasses.input);
      }
    };

    // Get the value of the modal input
    var getInputValue = function getInputValue() {
      var input = getInput();
      if (!input) {
        return null;
      }
      switch (params.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;
        case 'radio':
          return input.checked ? input.value : null;
        case 'file':
          return input.files.length ? input.files[0] : null;
        default:
          return params.inputAutoTrim ? input.value.trim() : input.value;
      }
    };

    // input autofocus
    if (params.input) {
      setTimeout(function () {
        var input = getInput();
        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (params.showLoaderOnConfirm) {
        sweetAlert.showLoading();
      }

      if (params.preConfirm) {
        params.preConfirm(value, params.extraParams).then(function (preConfirmValue) {
          sweetAlert.closeModal(params.onClose);
          resolve(preConfirmValue || value);
        }, function (error$$1) {
          sweetAlert.hideLoading();
          if (error$$1) {
            sweetAlert.showValidationError(error$$1);
          }
        });
      } else {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          resolve(value);
        } else {
          resolve({ value: value });
        }
      }
    };

    // Mouse interactions
    var onButtonEvent = function onButtonEvent(event) {
      var e = event || window.event;
      var target = e.target || e.srcElement;
      var confirmButton = getConfirmButton();
      var cancelButton = getCancelButton();
      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'mouseover':
        case 'mouseup':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.1);
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.1);
            }
          }
          break;
        case 'mouseout':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = params.confirmButtonColor;
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = params.cancelButtonColor;
            }
          }
          break;
        case 'mousedown':
          if (params.buttonsStyling) {
            if (targetedConfirm) {
              confirmButton.style.backgroundColor = colorLuminance(params.confirmButtonColor, -0.2);
            } else if (targetedCancel) {
              cancelButton.style.backgroundColor = colorLuminance(params.cancelButtonColor, -0.2);
            }
          }
          break;
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm && sweetAlert.isVisible()) {
            sweetAlert.disableButtons();
            if (params.input) {
              var inputValue = getInputValue();

              if (params.inputValidator) {
                sweetAlert.disableInput();
                params.inputValidator(inputValue, params.extraParams).then(function () {
                  sweetAlert.enableButtons();
                  sweetAlert.enableInput();
                  confirm(inputValue);
                }, function (error$$1) {
                  sweetAlert.enableButtons();
                  sweetAlert.enableInput();
                  if (error$$1) {
                    sweetAlert.showValidationError(error$$1);
                  }
                });
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            }

            // Clicked 'cancel'
          } else if (targetedCancel && sweetAlert.isVisible()) {
            sweetAlert.disableButtons();
            sweetAlert.closeModal(params.onClose);
            if (params.useRejections) {
              reject('cancel');
            } else {
              resolve({ dismiss: 'cancel' });
            }
          }
          break;
        default:
      }
    };

    var buttons = modal.querySelectorAll('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    }

    // Closing modal by close button
    getCloseButton().onclick = function () {
      sweetAlert.closeModal(params.onClose);
      if (params.useRejections) {
        reject('close');
      } else {
        resolve({ dismiss: 'close' });
      }
    };

    // Closing modal by overlay click
    container.onclick = function (e) {
      if (e.target !== container) {
        return;
      }
      if (params.allowOutsideClick) {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          reject('overlay');
        } else {
          resolve({ dismiss: 'overlay' });
        }
      }
    };

    var buttonsWrapper = getButtonsWrapper();
    var confirmButton = getConfirmButton();
    var cancelButton = getCancelButton();

    // Reverse buttons (Confirm on the right side)
    if (params.reverseButtons) {
      confirmButton.parentNode.insertBefore(cancelButton, confirmButton);
    } else {
      confirmButton.parentNode.insertBefore(confirmButton, cancelButton);
    }

    // Focus handling
    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(params.focusCancel);
      // search for visible elements and select the next possible match
      for (var _i3 = 0; _i3 < focusableElements.length; _i3++) {
        index = index + increment;

        // rollover to first item
        if (index === focusableElements.length) {
          index = 0;

          // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        // determine if element is visible
        var el = focusableElements[index];
        if (isVisible(el)) {
          return el.focus();
        }
      }
    };

    var handleKeyDown = function handleKeyDown(event) {
      var e = event || window.event;
      var keyCode = e.keyCode || e.which;

      if ([9, 13, 32, 27, 37, 38, 39, 40].indexOf(keyCode) === -1) {
        // Don't do work on keys we don't care about.
        return;
      }

      var targetElement = e.target || e.srcElement;

      var focusableElements = getFocusableElements(params.focusCancel);
      var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
      for (var _i4 = 0; _i4 < focusableElements.length; _i4++) {
        if (targetElement === focusableElements[_i4]) {
          btnIndex = _i4;
          break;
        }
      }

      // TAB
      if (keyCode === 9) {
        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }
        e.stopPropagation();
        e.preventDefault();

        // ARROWS - switch focus between buttons
      } else if (keyCode === 37 || keyCode === 38 || keyCode === 39 || keyCode === 40) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === confirmButton && isVisible(cancelButton)) {
          cancelButton.focus();
          // and vice versa
        } else if (document.activeElement === cancelButton && isVisible(confirmButton)) {
          confirmButton.focus();
        }

        // ESC
      } else if (keyCode === 27 && params.allowEscapeKey === true) {
        sweetAlert.closeModal(params.onClose);
        if (params.useRejections) {
          reject('esc');
        } else {
          resolve({ dismiss: 'esc' });
        }
      }
    };

    if (!window.onkeydown || window.onkeydown.toString() !== handleKeyDown.toString()) {
      states.previousWindowKeyDown = window.onkeydown;
      window.onkeydown = handleKeyDown;
    }

    // Loading state
    if (params.buttonsStyling) {
      confirmButton.style.borderLeftColor = params.confirmButtonColor;
      confirmButton.style.borderRightColor = params.confirmButtonColor;
    }

    /**
     * Show spinner instead of Confirm button and disable Cancel button
     */
    sweetAlert.hideLoading = sweetAlert.disableLoading = function () {
      if (!params.showConfirmButton) {
        hide(confirmButton);
        if (!params.showCancelButton) {
          hide(getButtonsWrapper());
        }
      }
      removeClass(buttonsWrapper, swalClasses.loading);
      removeClass(modal, swalClasses.loading);
      modal.removeAttribute('aria-busy');
      confirmButton.disabled = false;
      cancelButton.disabled = false;
    };

    sweetAlert.getTitle = function () {
      return getTitle();
    };
    sweetAlert.getContent = function () {
      return getContent();
    };
    sweetAlert.getInput = function () {
      return getInput();
    };
    sweetAlert.getImage = function () {
      return getImage();
    };
    sweetAlert.getButtonsWrapper = function () {
      return getButtonsWrapper();
    };
    sweetAlert.getConfirmButton = function () {
      return getConfirmButton();
    };
    sweetAlert.getCancelButton = function () {
      return getCancelButton();
    };

    sweetAlert.enableButtons = function () {
      confirmButton.disabled = false;
      cancelButton.disabled = false;
    };

    sweetAlert.disableButtons = function () {
      confirmButton.disabled = true;
      cancelButton.disabled = true;
    };

    sweetAlert.enableConfirmButton = function () {
      confirmButton.disabled = false;
    };

    sweetAlert.disableConfirmButton = function () {
      confirmButton.disabled = true;
    };

    sweetAlert.enableInput = function () {
      var input = getInput();
      if (!input) {
        return false;
      }
      if (input.type === 'radio') {
        var radiosContainer = input.parentNode.parentNode;
        var radios = radiosContainer.querySelectorAll('input');
        for (var _i5 = 0; _i5 < radios.length; _i5++) {
          radios[_i5].disabled = false;
        }
      } else {
        input.disabled = false;
      }
    };

    sweetAlert.disableInput = function () {
      var input = getInput();
      if (!input) {
        return false;
      }
      if (input && input.type === 'radio') {
        var radiosContainer = input.parentNode.parentNode;
        var radios = radiosContainer.querySelectorAll('input');
        for (var _i6 = 0; _i6 < radios.length; _i6++) {
          radios[_i6].disabled = true;
        }
      } else {
        input.disabled = true;
      }
    };

    // Set modal min-height to disable scrolling inside the modal
    sweetAlert.recalculateHeight = debounce(function () {
      var modal = getModal();
      if (!modal) {
        return;
      }
      var prevState = modal.style.display;
      modal.style.minHeight = '';
      show(modal);
      modal.style.minHeight = modal.scrollHeight + 1 + 'px';
      modal.style.display = prevState;
    }, 50);

    // Show block with validation error
    sweetAlert.showValidationError = function (error$$1) {
      var validationError = getValidationError();
      validationError.innerHTML = error$$1;
      show(validationError);

      var input = getInput();
      if (input) {
        input.setAttribute('aria-invalid', true);
        input.setAttribute('aria-describedBy', swalClasses.validationerror);
        focusInput(input);
        addClass(input, swalClasses.inputerror);
      }
    };

    // Hide block with validation error
    sweetAlert.resetValidationError = function () {
      var validationError = getValidationError();
      hide(validationError);
      sweetAlert.recalculateHeight();

      var input = getInput();
      if (input) {
        input.removeAttribute('aria-invalid');
        input.removeAttribute('aria-describedBy');
        removeClass(input, swalClasses.inputerror);
      }
    };

    sweetAlert.getProgressSteps = function () {
      return params.progressSteps;
    };

    sweetAlert.setProgressSteps = function (progressSteps) {
      params.progressSteps = progressSteps;
      setParameters(params);
    };

    sweetAlert.showProgressSteps = function () {
      show(getProgressSteps());
    };

    sweetAlert.hideProgressSteps = function () {
      hide(getProgressSteps());
    };

    sweetAlert.enableButtons();
    sweetAlert.hideLoading();
    sweetAlert.resetValidationError();

    // inputs
    var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];
    var input = void 0;
    for (var _i7 = 0; _i7 < inputTypes.length; _i7++) {
      var inputClass = swalClasses[inputTypes[_i7]];
      var inputContainer = getChildByClass(modal, inputClass);
      input = getInput(inputTypes[_i7]);

      // set attributes
      if (input) {
        for (var j in input.attributes) {
          if (input.attributes.hasOwnProperty(j)) {
            var attrName = input.attributes[j].name;
            if (attrName !== 'type' && attrName !== 'value') {
              input.removeAttribute(attrName);
            }
          }
        }
        for (var attr in params.inputAttributes) {
          input.setAttribute(attr, params.inputAttributes[attr]);
        }
      }

      // set class
      inputContainer.className = inputClass;
      if (params.inputClass) {
        addClass(inputContainer, params.inputClass);
      }

      hide(inputContainer);
    }

    var populateInputOptions = void 0;
    switch (params.input) {
      case 'text':
      case 'email':
      case 'password':
      case 'number':
      case 'tel':
      case 'url':
        input = getChildByClass(modal, swalClasses.input);
        input.value = params.inputValue;
        input.placeholder = params.inputPlaceholder;
        input.type = params.input;
        show(input);
        break;
      case 'file':
        input = getChildByClass(modal, swalClasses.file);
        input.placeholder = params.inputPlaceholder;
        input.type = params.input;
        show(input);
        break;
      case 'range':
        var range = getChildByClass(modal, swalClasses.range);
        var rangeInput = range.querySelector('input');
        var rangeOutput = range.querySelector('output');
        rangeInput.value = params.inputValue;
        rangeInput.type = params.input;
        rangeOutput.value = params.inputValue;
        show(range);
        break;
      case 'select':
        var select = getChildByClass(modal, swalClasses.select);
        select.innerHTML = '';
        if (params.inputPlaceholder) {
          var placeholder = document.createElement('option');
          placeholder.innerHTML = params.inputPlaceholder;
          placeholder.value = '';
          placeholder.disabled = true;
          placeholder.selected = true;
          select.appendChild(placeholder);
        }
        populateInputOptions = function populateInputOptions(inputOptions) {
          for (var optionValue in inputOptions) {
            var option = document.createElement('option');
            option.value = optionValue;
            option.innerHTML = inputOptions[optionValue];
            if (params.inputValue === optionValue) {
              option.selected = true;
            }
            select.appendChild(option);
          }
          show(select);
          select.focus();
        };
        break;
      case 'radio':
        var radio = getChildByClass(modal, swalClasses.radio);
        radio.innerHTML = '';
        populateInputOptions = function populateInputOptions(inputOptions) {
          for (var radioValue in inputOptions) {
            var radioInput = document.createElement('input');
            var radioLabel = document.createElement('label');
            var radioLabelSpan = document.createElement('span');
            radioInput.type = 'radio';
            radioInput.name = swalClasses.radio;
            radioInput.value = radioValue;
            if (params.inputValue === radioValue) {
              radioInput.checked = true;
            }
            radioLabelSpan.innerHTML = inputOptions[radioValue];
            radioLabel.appendChild(radioInput);
            radioLabel.appendChild(radioLabelSpan);
            radioLabel.for = radioInput.id;
            radio.appendChild(radioLabel);
          }
          show(radio);
          var radios = radio.querySelectorAll('input');
          if (radios.length) {
            radios[0].focus();
          }
        };
        break;
      case 'checkbox':
        var checkbox = getChildByClass(modal, swalClasses.checkbox);
        var checkboxInput = getInput('checkbox');
        checkboxInput.type = 'checkbox';
        checkboxInput.value = 1;
        checkboxInput.id = swalClasses.checkbox;
        checkboxInput.checked = Boolean(params.inputValue);
        var label = checkbox.getElementsByTagName('span');
        if (label.length) {
          checkbox.removeChild(label[0]);
        }
        label = document.createElement('span');
        label.innerHTML = params.inputPlaceholder;
        checkbox.appendChild(label);
        show(checkbox);
        break;
      case 'textarea':
        var textarea = getChildByClass(modal, swalClasses.textarea);
        textarea.value = params.inputValue;
        textarea.placeholder = params.inputPlaceholder;
        show(textarea);
        break;
      case null:
        break;
      default:
        error('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "' + params.input + '"');
        break;
    }

    if (params.input === 'select' || params.input === 'radio') {
      if (params.inputOptions instanceof Promise) {
        sweetAlert.showLoading();
        params.inputOptions.then(function (inputOptions) {
          sweetAlert.hideLoading();
          populateInputOptions(inputOptions);
        });
      } else if (_typeof(params.inputOptions) === 'object') {
        populateInputOptions(params.inputOptions);
      } else {
        error('Unexpected type of inputOptions! Expected object or Promise, got ' + _typeof(params.inputOptions));
      }
    }

    openModal(params.animation, params.onOpen);

    if (!params.allowEnterKey) {
      if (document.activeElement) {
        document.activeElement.blur();
      }
    } else if (params.focusCancel && isVisible(cancelButton)) {
      cancelButton.focus();
    } else if (params.focusConfirm && isVisible(confirmButton)) {
      confirmButton.focus();
    } else {
      setFocus(-1, 1);
    }

    // fix scroll
    getContainer().scrollTop = 0;

    // Observe changes inside the modal and adjust height
    if (typeof MutationObserver !== 'undefined' && !swal2Observer) {
      swal2Observer = new MutationObserver(sweetAlert.recalculateHeight);
      swal2Observer.observe(modal, { childList: true, characterData: true, subtree: true });
    }
  });
};

/*
 * Global function to determine if swal2 modal is shown
 */
sweetAlert.isVisible = function () {
  return !!getModal();
};

/*
 * Global function for chaining sweetAlert modals
 */
sweetAlert.queue = function (steps) {
  queue = steps;
  var resetQueue = function resetQueue() {
    queue = [];
    document.body.removeAttribute('data-swal2-queue-step');
  };
  var queueResult = [];
  return new Promise(function (resolve, reject) {
    (function step(i, callback) {
      if (i < queue.length) {
        document.body.setAttribute('data-swal2-queue-step', i);

        sweetAlert(queue[i]).then(function (result) {
          queueResult.push(result);
          step(i + 1, callback);
        }, function (dismiss) {
          resetQueue();
          reject(dismiss);
        });
      } else {
        resetQueue();
        resolve(queueResult);
      }
    })(0);
  });
};

/*
 * Global function for getting the index of current modal in queue
 */
sweetAlert.getQueueStep = function () {
  return document.body.getAttribute('data-swal2-queue-step');
};

/*
 * Global function for inserting a modal to the queue
 */
sweetAlert.insertQueueStep = function (step, index) {
  if (index && index < queue.length) {
    return queue.splice(index, 0, step);
  }
  return queue.push(step);
};

/*
 * Global function for deleting a modal from the queue
 */
sweetAlert.deleteQueueStep = function (index) {
  if (typeof queue[index] !== 'undefined') {
    queue.splice(index, 1);
  }
};

/*
 * Global function to close sweetAlert
 */
sweetAlert.close = sweetAlert.closeModal = function (onComplete) {
  var container = getContainer();
  var modal = getModal();
  if (!modal) {
    return;
  }
  removeClass(modal, swalClasses.show);
  addClass(modal, swalClasses.hide);
  clearTimeout(modal.timeout);

  resetPrevState();

  var removeModalAndResetState = function removeModalAndResetState() {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    removeClass(document.documentElement, swalClasses.shown);
    removeClass(document.body, swalClasses.shown);
    undoScrollbar();
    undoIOSfix();
  };

  // If animation is supported, animate
  if (animationEndEvent && !hasClass(modal, swalClasses.noanimation)) {
    modal.addEventListener(animationEndEvent, function swalCloseEventFinished() {
      modal.removeEventListener(animationEndEvent, swalCloseEventFinished);
      if (hasClass(modal, swalClasses.hide)) {
        removeModalAndResetState();
      }
    });
  } else {
    // Otherwise, remove immediately
    removeModalAndResetState();
  }
  if (onComplete !== null && typeof onComplete === 'function') {
    setTimeout(function () {
      onComplete(modal);
    });
  }
};

/*
 * Global function to click 'Confirm' button
 */
sweetAlert.clickConfirm = function () {
  return getConfirmButton().click();
};

/*
 * Global function to click 'Cancel' button
 */
sweetAlert.clickCancel = function () {
  return getCancelButton().click();
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */
sweetAlert.showLoading = sweetAlert.enableLoading = function () {
  var modal = getModal();
  if (!modal) {
    sweetAlert('');
  }
  modal = getModal();
  var buttonsWrapper = getButtonsWrapper();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();

  show(buttonsWrapper);
  show(confirmButton, 'inline-block');
  addClass(buttonsWrapper, swalClasses.loading);
  addClass(modal, swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;

  modal.setAttribute('aria-busy', true);
  modal.focus();
};

/**
 * Is valid parameter
 * @param {String} paramName
 */
sweetAlert.isValidParameter = function (paramName) {
  return defaultParams.hasOwnProperty(paramName) || paramName === 'extraParams';
};

/**
* Set default params for each popup
* @param {Object} userParams
*/
sweetAlert.setDefaults = function (userParams) {
  if (!userParams || (typeof userParams === 'undefined' ? 'undefined' : _typeof(userParams)) !== 'object') {
    return error('the argument for setDefaults() is required and has to be a object');
  }

  for (var param in userParams) {
    if (!sweetAlert.isValidParameter(param)) {
      warn('Unknown parameter "' + param + '"');
      delete userParams[param];
    }
  }

  _extends(modalParams, userParams);
};

/**
 * Reset default params for each popup
 */
sweetAlert.resetDefaults = function () {
  modalParams = _extends({}, defaultParams);
};

sweetAlert.noop = function () {};

sweetAlert.version = '6.10.1';

sweetAlert.default = sweetAlert;

return sweetAlert;

})));
if (window.Sweetalert2) window.sweetAlert = window.swal = window.Sweetalert2;


/***/ })

});
//# sourceMappingURL=common.chunk.js.map