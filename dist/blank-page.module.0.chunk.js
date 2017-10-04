webpackJsonp(["blank-page.module.0"],{

/***/ "../../../../../src/app/godsview/blank-page-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankPageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blank_page_component__ = __webpack_require__("../../../../../src/app/godsview/blank-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__blank_page_component__["a" /* BlankPageComponent */] }
];
var BlankPageRoutingModule = /** @class */ (function () {
    function BlankPageRoutingModule() {
    }
    BlankPageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], BlankPageRoutingModule);
    return BlankPageRoutingModule;
}());

//# sourceMappingURL=blank-page-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/godsview/blank-page.component.html":
/***/ (function(module, exports) {

module.exports = "<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n    <agm-marker *ngFor=\"let marker of pendingTaks\" [latitude]=\"marker.latlng.lat\" [longitude]=\"marker.latlng.lng\" >\n        <agm-info-window>\n            <h2>{{marker.type}}</h2>\n            <button (click)=\"show(marker)\">View</button>\n        </agm-info-window>\n    </agm-marker>\n  </agm-map>\n\n\n  <div style=\"display:block;position:absolute;top:20px;padding:10px;font-size:20px;color:red;left:30px;width:250px;background:#1b1b1b;\">\n    Pending Tasks : {{pendingTaks.length}}\n\n    <a routerLink=\"/dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"list-group-item\">\n        <i class=\"fa fa-fw fa-dashboard\"></i> Back to Dashboard\n    </a>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/godsview/blank-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 100vh; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/godsview/blank-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlankPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_task_task_service__ = __webpack_require__("../../../../../src/app/shared/services/task/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlankPageComponent = /** @class */ (function () {
    function BlankPageComponent(services, router) {
        var _this = this;
        this.services = services;
        this.router = router;
        this.title = 'My first AGM project';
        this.lat = 6.927079;
        this.lng = 79.861243;
        this.zoom = 9;
        this.pendingTaks = [];
        this.services.getGodsallTasks().subscribe(function (res) {
            _this.tasks = res;
            _this.pendingTaks = _this.services.getAllPendingTasks(_this.tasks);
            console.log(_this.pendingTaks);
        });
    }
    BlankPageComponent.prototype.ngOnInit = function () {
    };
    BlankPageComponent.prototype.show = function (task) {
        this.router.navigate(['/task-view', { task: task.$key, god: true }]);
    };
    BlankPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blank-page',
            template: __webpack_require__("../../../../../src/app/godsview/blank-page.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_services_task_task_service__["a" /* TaskService */]],
            styles: [__webpack_require__("../../../../../src/app/godsview/blank-page.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_task_task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_services_task_task_service__["a" /* TaskService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
    ], BlankPageComponent);
    return BlankPageComponent;
    var _a, _b;
}());

//# sourceMappingURL=blank-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/godsview/blank-page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankPageModule", function() { return BlankPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__blank_page_routing_module__ = __webpack_require__("../../../../../src/app/godsview/blank-page-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blank_page_component__ = __webpack_require__("../../../../../src/app/godsview/blank-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BlankPageModule = /** @class */ (function () {
    function BlankPageModule() {
    }
    BlankPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__blank_page_routing_module__["a" /* BlankPageRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBf0G_rJKN8FCnBmGx1bvBPcnY8ncDklKA'
                }),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__blank_page_component__["a" /* BlankPageComponent */]]
        })
    ], BlankPageModule);
    return BlankPageModule;
}());

//# sourceMappingURL=blank-page.module.js.map

/***/ })

});
//# sourceMappingURL=blank-page.module.0.chunk.js.map