(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/customer-mailbox/new-ticket-categories-resolve.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customer-mailbox/new-ticket-categories-resolve.ts ***!
  \*******************************************************************/
/*! exports provided: NewTicketCategoriesResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTicketCategoriesResolve", function() { return NewTicketCategoriesResolve; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_core_http_http_cache_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/core/http/http-cache-client */ "./src/common/core/http/http-cache-client.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var NewTicketCategoriesResolve = /** @class */ (function () {
    function NewTicketCategoriesResolve(router, http) {
        this.router = router;
        this.http = http;
    }
    NewTicketCategoriesResolve.prototype.resolve = function (route) {
        var _this = this;
        return this.http.get('new-ticket/categories')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function () {
            _this.router.navigateByUrl('/');
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (response) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(response.tags);
        }));
    };
    NewTicketCategoriesResolve.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"]({ factory: function NewTicketCategoriesResolve_Factory() { return new NewTicketCategoriesResolve(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"](_common_core_http_http_cache_client__WEBPACK_IMPORTED_MODULE_1__["HttpCacheClient"])); }, token: NewTicketCategoriesResolve, providedIn: "root" });
    return NewTicketCategoriesResolve;
}());



/***/ })

}]);