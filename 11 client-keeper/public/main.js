(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <app-clients></app-clients>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Client Keeper';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/clients/clients.component */ "./src/app/components/clients/clients.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/client.service */ "./src/app/services/client.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_clients_clients_component__WEBPACK_IMPORTED_MODULE_3__["ClientsComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [
                _services_client_service__WEBPACK_IMPORTED_MODULE_6__["ClientService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/clients/clients.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/clients/clients.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/clients/clients.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/clients/clients.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isEdit\">\n  <div class=\"client-form mb-5\">\n    <form (submit)=\"onEditSubmit()\" class=\"well\">\n      <div class=\"form-group\">\n        <label for=\"firstname\">First Name</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"first_name\" name=\"first_name\" placeholder=\"First Name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"lastname\">Last Name</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"last_name\" name=\"last_name\" placeholder=\"Last Name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"phone\">Phone</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"Phone\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary\">submit</button>\n    </form>\n  </div>\n</div>\n<div *ngIf=\"!isEdit\">\n  <div class=\"client-form mb-5\">\n    <form (submit)=\"onAddSubmit()\" class=\"well\">\n      <div class=\"form-group\">\n        <label for=\"firstname\">First Name</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"first_name\" name=\"first_name\" placeholder=\"First Name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"lastname\">Last Name</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"last_name\" name=\"last_name\" placeholder=\"Last Name\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" name=\"email\" placeholder=\"Email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"phone\">Phone</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"First Name\">\n      </div>\n\n      <button type=\"submit\" class=\"btn btn-primary\">submit</button>\n    </form>\n  </div>\n</div>\n<div *ngIf=\"clients.length>0\">\n  <table class=\"table table-striped\">\n    <tr>\n      <th>First Name</th>\n      <th>Last Name</th>\n      <th>Phone</th>\n      <th>Email</th>\n      <th></th>\n    </tr>\n    <tr *ngFor=\"let client of clients\">\n      <td>{{client.first_name}}</td>\n      <td>{{client.last_name}}</td>\n      <td>{{client.phone}}</td>\n      <td>{{client.email}}</td>\n      <td>\n        <a (click)=\"onEditClick(client)\" class=\"btn btn-primary mr-1\">Edit</a>\n        <a (click)=\"onDeleteClick(client._id)\" class=\"btn btn-danger\">Delete</a>\n      </td>\n    </tr>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/components/clients/clients.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/clients/clients.component.ts ***!
  \*********************************************************/
/*! exports provided: ClientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsComponent", function() { return ClientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/client.service */ "./src/app/services/client.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(clientService) {
        this.clientService = clientService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.clientService.getClients());
        this.clientService.getClients().subscribe(function (clients) {
            console.log(clients);
            _this.clients = clients;
        });
        this.isEdit = false;
    };
    ClientsComponent.prototype.onAddSubmit = function () {
        var _this = this;
        console.log("onAddSubmit");
        var newClient = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            phone: this.phone,
        };
        console.log(newClient);
        if (newClient.first_name == undefined || newClient.last_name == undefined || newClient.email == undefined || newClient.phone == undefined) {
            return;
        }
        else {
            this.clientService.saveClient(newClient).subscribe(function (client) {
                _this.first_name = '';
                _this.last_name = '';
                _this.email = '';
                _this.phone = '';
                window.location.href = "/";
            });
        }
    };
    ClientsComponent.prototype.onEditClick = function (client) {
        this.isEdit = !this.isEdit;
        this.first_name = client.first_name;
        this.last_name = client.last_name;
        this.email = client.email;
        this.phone = client.phone;
        this._id = client._id;
        console.log(this._id);
    };
    ClientsComponent.prototype.onEditSubmit = function () {
        var _this = this;
        console.log();
        var updatedClient = {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            phone: this.phone,
            _id: this._id
        };
        if (this.first_name == undefined || this.last_name == undefined || this.email == undefined || this.phone == undefined) {
            return;
        }
        this.clientService.updateClient(updatedClient, updatedClient._id).subscribe(function (client) {
            _this.first_name = '';
            _this.last_name = '';
            _this.email = '';
            _this.phone = '';
            window.location.href = '/';
        });
    };
    ClientsComponent.prototype.onDeleteClick = function (id) {
        var _this = this;
        this.clientService.deleteClient(id).subscribe(function (client) {
            console.log("Here is the client : ", client);
            for (var i = 0; i < _this.clients.length; i++) {
                if (id == _this.clients[i]._id) {
                    _this.clients.splice(i, 1);
                }
            }
        });
    };
    ClientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clients',
            template: __webpack_require__(/*! ./clients.component.html */ "./src/app/components/clients/clients.component.html"),
            styles: [__webpack_require__(/*! ./clients.component.css */ "./src/app/components/clients/clients.component.css")]
        }),
        __metadata("design:paramtypes", [_services_client_service__WEBPACK_IMPORTED_MODULE_1__["ClientService"]])
    ], ClientsComponent);
    return ClientsComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light mb-5\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\"> <span class=\"text-primary\">Client</span><span class=\"text-danger\">Keeper</span></a>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/client.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/client.service.ts ***!
  \********************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
    }
    ClientService.prototype.getClients = function () {
        return this.http.get("http://localhost:3000/api/clients");
    };
    ClientService.prototype.saveClient = function (client) {
        return this.http.post('http://localhost:3000/api/clients', client);
    };
    ClientService.prototype.updateClient = function (client, id) {
        console.log("updating Client");
        return this.http.put("http://localhost:3000/api/clients/" + id, client);
    };
    ClientService.prototype.deleteClient = function (id) {
        console.log("http://localhost:3000/api/clients/" + id);
        return this.http.delete("http://localhost:3000/api/clients/" + id);
    };
    ClientService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mohsin\Desktop\client-keeper\client-keeper-front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map