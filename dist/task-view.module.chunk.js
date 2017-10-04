webpackJsonp(["task-view.module"],{

/***/ "../../../../../src/app/layout/task-view/task-view-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskViewRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_view_component__ = __webpack_require__("../../../../../src/app/layout/task-view/task-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__task_view_component__["a" /* TaskViewComponent */] }
];
var TaskViewRoutingModule = /** @class */ (function () {
    function TaskViewRoutingModule() {
    }
    TaskViewRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], TaskViewRoutingModule);
    return TaskViewRoutingModule;
}());

//# sourceMappingURL=task-view-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/layout/task-view/task-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div [@routerTransition]>\n        <h2 class=\"text-muted\">Dashboard <small>Statistics Overview</small></h2>\n    \n       \n    \n    \n       \n    \n       \n        \n        \n        <div class=\"row\" *ngIf=\"loaded\">\n            <div class=\"col-lg-8\">\n    \n                \n                    <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\">\n                            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n                          </agm-map>\n\n                         \n    \n                          <gallery></gallery>\n\n                         \n            \n            </div>\n            <!-- /.col-lg-8 -->\n            <div class=\"col-lg-4\">\n                <!-- chat card-->\n                <div class=\"card card-default\">\n                    \n                    <div class=\"chat-panel card card-default\">\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-comments fa-fw\"></i>\n                                Chat\n                            </div>\n                            <!-- /.panel-heading -->\n                            <div class=\"card-block\">\n\n                                   \n                                            <ul class=\"chat\">\n                                                    <li class=\" clearfix\" *ngFor=\"let c of chat | async\" [ngClass]=\"{'left': c.sender == 1, 'right': c.sender != 1}\">\n                                                        <span class=\"chat-img pull-left\">\n                                                            <img src=\"https://pickaface.net/gallery/avatar/20151205_194059_2696_Chat.png\" alt=\"User Avatar\" class=\"img-circle\">\n                                                        </span>\n                                                        <div class=\"chat-body clearfix\" >\n                                                            <div class=\"header\">\n                                                                <strong class=\"primary-font\" *ngIf=\"task != null\">{{task.agentname}}</strong>\n                                                                <small class=\"pull-right text-muted\">\n                                                                   <!-- <i class=\"fa fa-clock-o fa-fw\"></i> 12 mins ago -->\n                                                                </small>\n                                                            </div>\n                                                            <p>\n                                                               {{c.message}}\n                                                            </p>\n                                                        </div>\n                                                    </li>\n                                                    \n                                                    \n                                                    \n                                                </ul>\n\n                                   \n                               \n                            </div>\n                            <!-- /.card-body -->\n                            <div class=\"card-footer\">\n                                    <fieldset [disabled]=\"status || god\">\n                                            <div class=\"input-group\">\n                                                    <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\" name=\"Message\" [(ngModel)]=\"message\">\n                                                    <span class=\"input-group-btn\">\n                                                        <button class=\"btn btn-warning btn-sm\" id=\"btn-chat\" (click)=\"sendchatMessage(message)\">\n                                                            Send\n                                                        </button>\n                                                    </span>\n                                                </div>\n                                    </fieldset>\n                                \n                            </div>\n                            <!-- /.card-footer -->\n\n                            \n                        </div>\n                        \n                </div>\n                <!-- /.card -->\n\n                \n                <!-- Status-->\n                <div class=\"card card-default\" style=\"margin-top:10px;\" >\n                        \n                        <div class=\"chat-panel card card-default\" >\n                                <div class=\"card-header\">\n                                    <i class=\"fa fa-comments fa-fw\"></i>\n                                    Task Status\n                                </div>\n                                <!-- /.panel-heading -->\n                                \n                                <div class=\"card-block\">\n                                   <div class=\"chat\" style=\"height:200px;\">\n                                        \n\n                                            <fieldset [disabled]=\"status || god\">\n                                                    \n                                                    <div class=\"input-group\">\n                                                            <input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your Closing reason...\" name=\"Message\" [(ngModel)]=\"statusmessage\">\n                                                        \n                                                        </div>\n            \n                                                        <button class=\"btn btn-danger btn-lg\" id=\"btn-chat\" style=\"margin-top:10px;width:100%;\" (click)=\"closestatus(statusmessage)\">\n                                                               Close Ticket\n                                                        </button>\n            \n                                                        <div class=\"ticketdetails\">\n                                                            <p>Status : {{task.status}}</p>\n                                                            <p>Response Message : {{task.responseMessage}}</p>\n                                                            <p>Details : {{task.statusdetails}}</p>\n                                                        </div>              \n                                                    \n                                            </fieldset>\n                                   </div>\n                                </div>\n                                <!-- /.card-body -->\n                               \n                                <!-- /.card-footer -->\n                            </div>\n                            \n                    </div>\n                    <!-- /.card -->\n                    \n                     <!-- Status-->\n                <div class=\"card card-default\" style=\"margin-top:10px;\" >\n                    \n                    <div class=\"chat-panel card card-default\" >\n                            <div class=\"card-header\">\n                                <i class=\"fa fa-comments fa-fw\"></i>\n                                Vistim Details\n                            </div>\n                            <!-- /.panel-heading -->\n                            \n                            <div class=\"card-block\">\n                               <div class=\"chat\" style=\"height:150px;\">\n                                    \n                                <div class=\"container\" style=\"padding:15px;\">\n                                    <h2 style=\"font-size:20px;\"> Name : {{victim.fullname}}</h2>\n                                    <h2 style=\"font-size:20px;\"> Phone : {{victim.phone}}</h2>\n                                    <h2 style=\"font-size:20px;\"> NIC : {{victim.nic}}</h2>\n                                    <h2 style=\"font-size:20px;\"> Contact : {{task.contact}}</h2>\n                                </div>\n                                \n                               </div>\n                            </div>\n                            <!-- /.card-body -->\n                           \n                            <!-- /.card-footer -->\n                        </div>\n                        \n                </div>\n                <!-- /.card -->\n\n\n                   \n                \n                <!-- /.card .chat-card -->\n            </div>\n            <!-- /.col-lg-4 -->\n        </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/layout/task-view/task-view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chat-dropdown {\n  margin-top: -3px; }\n\n.chat {\n  height: 350px;\n  overflow-y: scroll;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n  .chat .left img {\n    margin-right: 15px;\n    margin-left: 10px; }\n  .chat .right img {\n    margin-left: 15px;\n    margin-right: 10px; }\n  .chat li {\n    margin-bottom: 10px;\n    margin-right: 15px;\n    padding-bottom: 5px;\n    border-bottom: 1px dotted #999; }\n\n.card-footer input {\n  padding: 3px; }\n\nagm-map {\n  height: 500px; }\n\n.img-circle {\n  border-radius: 50%;\n  height: 50px;\n  width: 50px; }\n\n.ticketdetails p {\n  margin-bottom: 2px; }\n\n.ticketdetails {\n  margin-top: 5px;\n  padding: 5px;\n  background: whitesmoke; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/task-view/task-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_task_task_service__ = __webpack_require__("../../../../../src/app/shared/services/task/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_animations__ = __webpack_require__("../../../../../src/app/router.animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_gallery__ = __webpack_require__("../../../../ng-gallery/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TaskViewComponent = /** @class */ (function () {
    function TaskViewComponent(route, gallery, router, taskservice) {
        this.route = route;
        this.gallery = gallery;
        this.router = router;
        this.taskservice = taskservice;
        this.task = null;
        this.title = 'My first AGM project';
        this.lat = 6.927079;
        this.lng = 79.861243;
        this.zoom = 16;
        this.victim = null;
        this.loaded = false;
        this.status = true;
        this.statusmessage = null;
        this.god = false;
        var i = JSON.parse(localStorage.getItem("user"));
        this.agentId = i.uid;
    }
    TaskViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (res) {
            _this.taskId = res.task;
            _this.god = res.god;
            _this.getTask();
            _this.getChat();
        });
    };
    TaskViewComponent.prototype.getChat = function () {
        this.chat = this.taskservice.getChat(this.taskId);
    };
    TaskViewComponent.prototype.sendchatMessage = function (message) {
        var _this = this;
        if (this.task.status = !"Closed") {
            this.chat.push({
                sender: 0,
                message: message,
                time: __WEBPACK_IMPORTED_MODULE_4_moment__["now"]().toString()
            }).then(function (res) {
                _this.message = "";
            });
        }
    };
    TaskViewComponent.prototype.closestatus = function (message) {
        var _this = this;
        console.log(message);
        if (message == null) {
            alert("Please enter Response Message");
        }
        else {
            this.taskservice.closeTask(this.taskId, message).then(function (res) {
                _this.status = true;
                _this.statusmessage = null;
            });
        }
    };
    TaskViewComponent.prototype.getTask = function () {
        var _this = this;
        this.taskservice.getTask(this.taskId).subscribe(function (res) {
            _this.task = res;
            _this.images = [
                {
                    src: _this.task.photo,
                    thumbnail: _this.task.photo,
                    text: 'Disaster Preview'
                }
            ];
            _this.gallery.load(_this.images);
            //console.log(res);
            if (_this.task.agent != _this.agentId && _this.god == false) {
                alert("Insufficient Permissions");
            }
            else {
                if (res.status != "Closed") {
                    console.log("setting status to false");
                    _this.status = false;
                }
                _this.taskservice.getVictimDetails(_this.task.userid).then(function (user) {
                    _this.victim = user;
                    console.log(_this.victim);
                    _this.loaded = true;
                });
                _this.lat = _this.task.latlng.lat;
                _this.lng = _this.task.latlng.lng;
                console.log(_this.task.agent == _this.agentId);
            }
        });
    };
    TaskViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-blank-page',
            template: __webpack_require__("../../../../../src/app/layout/task-view/task-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/task-view/task-view.component.scss")],
            animations: [Object(__WEBPACK_IMPORTED_MODULE_3__router_animations__["a" /* routerTransition */])()]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_ng_gallery__["b" /* GalleryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_ng_gallery__["b" /* GalleryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_task_task_service__["a" /* TaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_task_task_service__["a" /* TaskService */]) === "function" && _d || Object])
    ], TaskViewComponent);
    return TaskViewComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=task-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/task-view/task-view.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "galleryConfig", function() { return galleryConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskViewModule", function() { return TaskViewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_task_task_service__ = __webpack_require__("../../../../../src/app/shared/services/task/task.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__task_view_routing_module__ = __webpack_require__("../../../../../src/app/layout/task-view/task-view-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__task_view_component__ = __webpack_require__("../../../../../src/app/layout/task-view/task-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_gallery__ = __webpack_require__("../../../../ng-gallery/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var galleryConfig = {};
var TaskViewModule = /** @class */ (function () {
    function TaskViewModule() {
    }
    TaskViewModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng_gallery__["a" /* GalleryModule */].forRoot(galleryConfig),
                __WEBPACK_IMPORTED_MODULE_3__task_view_routing_module__["a" /* TaskViewRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyBf0G_rJKN8FCnBmGx1bvBPcnY8ncDklKA'
                }),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_task_task_service__["a" /* TaskService */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__task_view_component__["a" /* TaskViewComponent */]]
        })
    ], TaskViewModule);
    return TaskViewModule;
}());

//# sourceMappingURL=task-view.module.js.map

/***/ })

});
//# sourceMappingURL=task-view.module.chunk.js.map