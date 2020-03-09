(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-ticketing-ticketing-module-ngfactory"],{

/***/ "./src/app/shared/models/Email.ts":
/*!****************************************!*\
  !*** ./src/app/shared/models/Email.ts ***!
  \****************************************/
/*! exports provided: Email */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return Email; });
var Email = /** @class */ (function () {
    function Email(params) {
        if (params === void 0) { params = {}; }
        for (var name_1 in params) {
            this[name_1] = params[name_1];
        }
    }
    return Email;
}());



/***/ }),

/***/ "./src/app/shared/tickets-list/tickets-list.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/shared/tickets-list/tickets-list.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: ViewChild_1, ɵangular_packages_core_core_b_2, Query_3, Input_9, Output_10, Injector_17, ɵangular_packages_core_core_c_18, defineInjectable_19, NgModuleFactoryLoader_20, Compiler_21, MatSort_4, _MatSortMixinBase_5, MatSortBase_8, mixinInitialized_6, mixinDisabled_7, Router_11, UrlSerializer_13, ChildrenOutletContexts_14, Location_15, LocationStrategy_16, RenderType_TicketsListComponent, View_TicketsListComponent_0, View_TicketsListComponent_Host_0, TicketsListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TicketsListComponent", function() { return RenderType_TicketsListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TicketsListComponent_0", function() { return View_TicketsListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TicketsListComponent_Host_0", function() { return View_TicketsListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsListComponentNgFactory", function() { return TicketsListComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewChild_1", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_2", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query_3", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input_9", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Output_10", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector_17", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_c_18", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineInjectable_19", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgModuleFactoryLoader_20", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Compiler_21", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"]; });

/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSort_4", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MatSortMixinBase_5", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["_MatSortMixinBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSortBase_8", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortBase"]; });

/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinInitialized_6", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinInitialized"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinDisabled_7", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"]; });

/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router_11", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlSerializer_13", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_3__["UrlSerializer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChildrenOutletContexts_14", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_3__["ChildrenOutletContexts"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location_15", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationStrategy_16", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]; });

/* harmony import */ var _tickets_list_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tickets-list.component.scss.ngstyle */ "./src/app/shared/tickets-list/tickets-list.component.scss.ngstyle.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _node_modules_angular_material_checkbox_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/checkbox/typings/index.ngfactory */ "./node_modules/@angular/material/checkbox/typings/index.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/core/translations/translate.directive */ "./src/common/core/translations/translate.directive.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/table/typings/index.ngfactory */ "./node_modules/@angular/material/table/typings/index.ngfactory.js");
/* harmony import */ var _highlight_open_ticket_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./highlight-open-ticket-directive */ "./src/app/shared/tickets-list/highlight-open-ticket-directive.ts");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _tickets_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tickets-list.component */ "./src/app/shared/tickets-list/tickets-list.component.ts");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/* harmony import */ var _ticketing_mailbox_tags_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../ticketing/mailbox-tags.service */ "./src/app/ticketing/mailbox-tags.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


























var styles_TicketsListComponent = [_tickets_list_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_5__["styles"]];
var RenderType_TicketsListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TicketsListComponent, data: {} });

function View_TicketsListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "mat-header-cell", [["class", "mat-header-cell"], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 3, "mat-checkbox", [["class", "mat-checkbox"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (($event ? _co.toggleAllTickets() : null) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_checkbox_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatCheckbox_0"], _node_modules_angular_material_checkbox_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatCheckbox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 8568832, null, 0, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [8, null], [2, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MAT_CHECKBOX_CLICK_ACTION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"]]], { checked: [0, "checked"], indeterminate: [1, "indeterminate"] }, { change: "change" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.allTicketsSelected(); var currVal_8 = (_co.anyTicketSelected() && !_co.allTicketsSelected()); _ck(_v, 5, 0, currVal_7, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).id; var currVal_1 = null; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).indeterminate; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).checked; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).disabled; var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).labelPosition == "before"); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._animationMode === "NoopAnimations"); _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_TicketsListComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 3, "mat-checkbox", [["class", "mat-checkbox"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null]], [[null, "click"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ($event.stopPropagation() !== false);
        ad = (pd_0 && ad);
    } if (("change" === en)) {
        var pd_1 = (($event ? _co.toggleTicket(_v.context.$implicit) : null) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_checkbox_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatCheckbox_0"], _node_modules_angular_material_checkbox_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatCheckbox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 8568832, null, 0, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [8, null], [2, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MAT_CHECKBOX_CLICK_ACTION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"]]], { checked: [0, "checked"] }, { change: "change" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.ticketSelected(_v.context.$implicit); _ck(_v, 5, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).id; var currVal_1 = null; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).indeterminate; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).checked; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).disabled; var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).labelPosition == "before"); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._animationMode === "NoopAnimations"); _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_TicketsListComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "mat-header-cell", [["class", "mat-header-cell"], ["role", "columnheader"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_13__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_14__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Customer"]))], null, null); }
function View_TicketsListComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = ((_v.context.$implicit == null) ? null : ((_v.context.$implicit.user == null) ? null : _v.context.$implicit.user.display_name)); _ck(_v, 2, 0, currVal_0); }); }
function View_TicketsListComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-header-cell", [["class", "mat-header-cell"], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null)], null, null); }
function View_TicketsListComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "mat-cell", [["class", "hidden-on-mobile mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 0, "img", [["alt", "customer avatar"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", ((_v.context.$implicit == null) ? null : ((_v.context.$implicit.user == null) ? null : _v.context.$implicit.user.avatar)), ""); _ck(_v, 2, 0, currVal_0); }); }
function View_TicketsListComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "mat-header-cell", [["class", "mat-header-cell"], ["role", "columnheader"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_13__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_14__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Ticket Summary"]))], null, null); }
function View_TicketsListComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "tag-label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.display_name; _ck(_v, 1, 0, currVal_0); }); }
function View_TicketsListComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TicketsListComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "]))], function (_ck, _v) { var currVal_0 = (_v.context.$implicit.type !== "status"); _ck(_v, 3, 0, currVal_0); }, null); }
function View_TicketsListComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 17, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 10, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 4, "div", [["class", "tags"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TicketsListComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "div", [["class", "title-text ticket-subject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](12, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "div", [["class", "ellipses ticket-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](16, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.tags; _ck(_v, 8, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _v.context.$implicit.subject; _ck(_v, 12, 0, currVal_1); var currVal_2 = _co.getTicketBody(_v.context.$implicit); _ck(_v, 16, 0, currVal_2); }); }
function View_TicketsListComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "mat-header-cell", [["class", "mat-header-cell"], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null)], null, null); }
function View_TicketsListComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "mat-cell", [["class", "hidden-on-mobile mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "span", [["title", "Replies count"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.$implicit.replies_count || 1); _ck(_v, 3, 0, currVal_0); }); }
function View_TicketsListComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "mat-header-cell", [["class", "mat-header-cell"], ["role", "columnheader"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_13__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_14__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Assigned To"]))], null, null); }
function View_TicketsListComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "mat-cell", [["class", "hidden-on-mobile mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.context.$implicit.assignee ? _v.context.$implicit.assignee.display_name : ""); _ck(_v, 2, 0, currVal_0); }); }
function View_TicketsListComponent_15(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "mat-header-cell", [["class", "mat-header-cell"], ["role", "columnheader"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_13__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_14__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Number"]))], null, null); }
function View_TicketsListComponent_16(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "mat-cell", [["class", "hidden-on-mobile mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; _ck(_v, 2, 0, currVal_0); }); }
function View_TicketsListComponent_17(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "mat-header-cell", [["class", "mat-header-cell"], ["role", "columnheader"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_13__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_14__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Last Updated"]))], null, null); }
function View_TicketsListComponent_18(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.updated_at_formatted; _ck(_v, 2, 0, currVal_0); }); }
function View_TicketsListComponent_19(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "mat-header-row", [["class", "mat-header-row"], ["role", "row"]], null, null, null, _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatHeaderRow_0"], _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatHeaderRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkHeaderRow"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], [], null, null)], null, null); }
function View_TicketsListComponent_20(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "mat-row", [["class", "animated mat-row"], ["role", "row"]], [[2, "selected", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openConversation(_v.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatRow_0"], _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkRow"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 540672, null, 0, _highlight_open_ticket_directive__WEBPACK_IMPORTED_MODULE_17__["HighlightOpenTicketDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { tags: [0, "tags"] }, null)], function (_ck, _v) { var currVal_1 = _v.context.$implicit.tags; _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.ticketSelected(_v.context.$implicit); _ck(_v, 0, 0, currVal_0); }); }
function View_TicketsListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { matSort: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 160, "mat-table", [["class", "responsive-material-table mat-table"]], null, null, null, _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatTable_0"], _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatTable"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 2342912, null, 4, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__["Directionality"]], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_19__["Platform"]], { dataSource: [0, "dataSource"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, { _contentColumnDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { _contentRowDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { _contentHeaderRowDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, { _contentFooterRowDefs: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 6, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 7, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 8, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[2, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_TicketsListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_TicketsListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[6, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](27, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 9, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 10, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 11, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[2, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_TicketsListComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[10, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_TicketsListComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](40, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[9, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](47, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 12, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 13, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 14, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[2, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_TicketsListComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](54, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[13, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_TicketsListComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](58, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[12, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](65, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 15, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 16, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 17, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[2, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_TicketsListComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](72, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[16, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_TicketsListComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](76, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[15, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](81, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](83, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 18, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 19, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 20, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[2, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_TicketsListComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](90, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[19, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_TicketsListComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](94, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[18, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](99, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](101, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 21, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 22, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 23, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[2, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_TicketsListComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](108, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[22, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_TicketsListComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](112, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[21, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](117, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](119, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 24, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 25, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 26, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[2, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_TicketsListComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](126, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[25, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_TicketsListComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](130, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[24, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](135, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](137, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 27, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 28, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 29, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[2, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_TicketsListComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](144, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[28, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_TicketsListComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](148, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[27, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 3, null, View_TicketsListComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](153, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { columns: [0, "columns"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](154, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[4, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkHeaderRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 3, null, View_TicketsListComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](158, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { columns: [0, "columns"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](159, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[3, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.tickets; _ck(_v, 2, 0, currVal_0); var currVal_1 = "select"; _ck(_v, 11, 0, currVal_1); var currVal_2 = "name"; _ck(_v, 29, 0, currVal_2); var currVal_3 = "avatar"; _ck(_v, 47, 0, currVal_3); var currVal_4 = "ticket-summary"; _ck(_v, 65, 0, currVal_4); var currVal_5 = "replies-count"; _ck(_v, 83, 0, currVal_5); var currVal_6 = "assignee"; _ck(_v, 101, 0, currVal_6); var currVal_7 = "number"; _ck(_v, 119, 0, currVal_7); var currVal_8 = "last-updated"; _ck(_v, 137, 0, currVal_8); var currVal_9 = _ck(_v, 154, 0, "select", "name", "avatar", "ticket-summary", "replies-count", "assignee", "number", "last-updated"); _ck(_v, 153, 0, currVal_9); var currVal_10 = _ck(_v, 159, 0, "select", "name", "avatar", "ticket-summary", "replies-count", "assignee", "number", "last-updated"); _ck(_v, 158, 0, currVal_10); }, null); }
function View_TicketsListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "tickets-list", [], null, null, null, View_TicketsListComponent_0, RenderType_TicketsListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _tickets_list_component__WEBPACK_IMPORTED_MODULE_20__["TicketsListComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_21__["Modal"], _ticketing_mailbox_tags_service__WEBPACK_IMPORTED_MODULE_22__["MailboxTagsService"]], null, null)], null, null); }
var TicketsListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("tickets-list", _tickets_list_component__WEBPACK_IMPORTED_MODULE_20__["TicketsListComponent"], View_TicketsListComponent_Host_0, { openTicketInModal: "openTicketInModal", tickets: "tickets" }, { ticketsSelected: "ticketsSelected" }, ["*"]);



/***/ }),

/***/ "./src/app/shared/tickets-list/tickets-list.component.scss.ngstyle.js":
/*!****************************************************************************!*\
  !*** ./src/app/shared/tickets-list/tickets-list.component.scss.ngstyle.js ***!
  \****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n\n\ntickets-list {\n  display: block;\n  background-color: #f1f1f1;\n  min-height: calc(100vh - 111px); }\ntickets-list .mat-table {\n    background-color: inherit; }\ntickets-list .mat-header-row {\n    min-height: 35px;\n    background-color: #FAFAFA; }\ntickets-list .mat-row {\n    border-bottom: 1px solid #E0E0E0;\n    height: 70px;\n    cursor: pointer; }\ntickets-list .mat-row.open {\n      background-color: #fff; }\ntickets-list .mat-row.open .title-text, tickets-list .mat-row.open .mat-column-number, tickets-list .mat-row.open .mat-column-last-updated {\n        font-weight: 500; }\ntickets-list .mat-row.selected {\n      background-color: #e8f0fe; }\ntickets-list .mat-row:hover:not(.selected) {\n      background-color: #f2f6fe; }\ntickets-list .mat-cell {\n    color: rgba(0, 0, 0, 0.87); }\ntickets-list .mat-column-select {\n    overflow: initial;\n    flex: 0 0 50px;\n    margin-right: 25px; }\ntickets-list .mat-column-number {\n    flex: 0 0 90px; }\ntickets-list .mat-column-last-updated {\n    flex: 0 0 120px;\n    margin-right: 25px;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\ntickets-list .mat-column-replies-count {\n    flex: 0 0 50px;\n    margin-left: 25px; }\ntickets-list .mat-column-replies-count span {\n      background-color: #FAFAFA;\n      color: rgba(0, 0, 0, 0.54);\n      border-radius: 4px;\n      padding: 1px 6px 0;\n      font-size: 1.1rem;\n      border: 1px solid #E0E0E0; }\ntickets-list .mat-column-avatar {\n    flex: 0 0 60px;\n    margin: 0 25px;\n    align-items: center; }\ntickets-list .mat-column-avatar img {\n      width: 38px;\n      height: 38px;\n      -o-object-fit: cover;\n         object-fit: cover;\n      box-shadow: 0 0 0 1px #fff, 0 0 1px 2px #AAAEB7;\n      border-radius: 50%;\n      margin: 0 3px; }\ntickets-list .mat-column-ticket-summary {\n    flex-grow: 6;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center; }\ntickets-list .mat-column-ticket-summary .title {\n      display: flex;\n      height: 50%;\n      align-items: center; }\ntickets-list .mat-column-ticket-summary .title .tags > .tag-label:last-of-type {\n        margin-right: 7px; }\ntickets-list .mat-column-ticket-summary .ticket-body {\n      height: 50%;\n      color: rgba(0, 0, 0, 0.54);\n      max-width: 98%;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      padding-top: 5px; }\ntickets-list .mat-column-name {\n    flex: 0 0 130px;\n    font-weight: 500;\n    color: rgba(0, 0, 0, 0.54); }\ntickets-list no-results-message {\n    margin-top: 50px; }\n"];



/***/ }),

/***/ "./src/app/shared/tickets-list/tickets-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/tickets-list/tickets-list.component.ts ***!
  \***************************************************************/
/*! exports provided: TicketsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketsListComponent", function() { return TicketsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/* harmony import */ var _conversation_conversation_modal_conversation_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../conversation/conversation-modal/conversation-modal.component */ "./src/app/conversation/conversation-modal/conversation-modal.component.ts");
/* harmony import */ var _ticketing_mailbox_tags_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ticketing/mailbox-tags.service */ "./src/app/ticketing/mailbox-tags.service.ts");






var TicketsListComponent = /** @class */ (function () {
    function TicketsListComponent(router, modal, mailboxTags) {
        this.router = router;
        this.modal = modal;
        this.mailboxTags = mailboxTags;
        this.openTicketInModal = false;
        this.tickets = [];
        this.ticketsSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.selectedTickets = [];
    }
    TicketsListComponent.prototype.openConversation = function (ticketId) {
        if (this.openTicketInModal) {
            this.modal.open(_conversation_conversation_modal_conversation_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConversationModalComponent"], { ticketId: ticketId }, { panelClass: 'conversation-modal-container' });
        }
        else {
            this.router.navigate(['/mailbox/tickets/tag', this.mailboxTags.getActiveTagId(), 'ticket', ticketId]);
        }
    };
    TicketsListComponent.prototype.toggleTicket = function (ticket) {
        var i = this.selectedTickets.indexOf(ticket);
        if (i > -1) {
            this.selectedTickets.splice(i, 1);
        }
        else {
            this.selectedTickets.push(ticket);
        }
        this.ticketsSelected.emit(this.selectedTickets.slice());
    };
    TicketsListComponent.prototype.toggleAllTickets = function () {
        if (this.allTicketsSelected()) {
            this.selectedTickets = [];
        }
        else {
            this.selectedTickets = this.tickets.slice();
        }
        this.ticketsSelected.emit(this.selectedTickets.slice());
    };
    TicketsListComponent.prototype.allTicketsSelected = function () {
        return this.tickets.length && this.selectedTickets.length === this.tickets.length;
    };
    TicketsListComponent.prototype.anyTicketSelected = function () {
        return this.selectedTickets.length > 0;
    };
    TicketsListComponent.prototype.ticketSelected = function (ticket) {
        return this.selectedTickets.indexOf(ticket) > -1;
    };
    TicketsListComponent.prototype.getTicketBody = function (ticket) {
        if (ticket.latest_reply && ticket.latest_reply.body) {
            return ticket.latest_reply.body;
        }
        if (ticket.replies && ticket.replies.length) {
            return ticket.replies[0].body;
        }
    };
    return TicketsListComponent;
}());



/***/ }),

/***/ "./src/app/ticketing/agent-mailbox-ticket-list/agent-mailbox-ticket-list.component.ngfactory.js":
/*!******************************************************************************************************!*\
  !*** ./src/app/ticketing/agent-mailbox-ticket-list/agent-mailbox-ticket-list.component.ngfactory.js ***!
  \******************************************************************************************************/
/*! exports provided: ViewChild_1, ɵangular_packages_core_core_b_2, Query_3, Input_9, Output_10, ChangeDetectorRef_12, Injector_23, ɵangular_packages_core_core_c_24, defineInjectable_25, NgModuleFactoryLoader_26, Compiler_27, MatPaginator_4, _MatPaginatorBase_5, MatPaginatorBase_8, MatPaginatorIntl_11, mixinDisabled_6, mixinInitialized_7, View_MatPaginator_0_13, RenderType_MatPaginator_14, MatPaginatorNgFactory_15, Router_17, UrlSerializer_19, ChildrenOutletContexts_20, ActivatedRoute_30, ActivatedRouteSnapshot_32, UrlSegmentGroup_36, Location_21, LocationStrategy_22, Observable_31, RenderType_AgentMailboxTicketListComponent, View_AgentMailboxTicketListComponent_0, View_AgentMailboxTicketListComponent_Host_0, AgentMailboxTicketListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AgentMailboxTicketListComponent", function() { return RenderType_AgentMailboxTicketListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AgentMailboxTicketListComponent_0", function() { return View_AgentMailboxTicketListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AgentMailboxTicketListComponent_Host_0", function() { return View_AgentMailboxTicketListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentMailboxTicketListComponentNgFactory", function() { return AgentMailboxTicketListComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewChild_1", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_2", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query_3", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input_9", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Output_10", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangeDetectorRef_12", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector_23", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_c_24", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineInjectable_25", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgModuleFactoryLoader_26", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Compiler_27", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"]; });

/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginator_4", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MatPaginatorBase_5", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["_MatPaginatorBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorBase_8", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl_11", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorIntl"]; });

/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinDisabled_6", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinInitialized_7", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinInitialized"]; });

/* harmony import */ var _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/paginator/typings/index.ngfactory */ "./node_modules/@angular/material/paginator/typings/index.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View_MatPaginator_0_13", function() { return _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatPaginator_0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderType_MatPaginator_14", function() { return _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatPaginator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorNgFactory_15", function() { return _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorNgFactory"]; });

/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router_17", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlSerializer_19", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_4__["UrlSerializer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChildrenOutletContexts_20", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRoute_30", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRouteSnapshot_32", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRouteSnapshot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlSegmentGroup_36", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_4__["UrlSegmentGroup"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location_21", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationStrategy_22", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_5__["LocationStrategy"]; });

/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable_31", function() { return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_6__["Observable"]; });

/* harmony import */ var _agent_mailbox_ticket_list_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./agent-mailbox-ticket-list.component.scss.ngstyle */ "./src/app/ticketing/agent-mailbox-ticket-list/agent-mailbox-ticket-list.component.scss.ngstyle.js");
/* harmony import */ var _common_core_ui_no_results_message_no_results_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/core/ui/no-results-message/no-results-message.component.ngfactory */ "./src/common/core/ui/no-results-message/no-results-message.component.ngfactory.js");
/* harmony import */ var _common_core_ui_no_results_message_no_results_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/core/ui/no-results-message/no-results-message.component */ "./src/common/core/ui/no-results-message/no-results-message.component.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/core/translations/translate.directive */ "./src/common/core/translations/translate.directive.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _shared_tickets_list_tickets_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/tickets-list/tickets-list.component.ngfactory */ "./src/app/shared/tickets-list/tickets-list.component.ngfactory.js");
/* harmony import */ var _shared_tickets_list_tickets_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/tickets-list/tickets-list.component */ "./src/app/shared/tickets-list/tickets-list.component.ts");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/* harmony import */ var _mailbox_tags_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../mailbox-tags.service */ "./src/app/ticketing/mailbox-tags.service.ts");
/* harmony import */ var _ticket_floating_toolbar_ticket_floating_toolbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ticket-floating-toolbar/ticket-floating-toolbar.component.ngfactory */ "./src/app/ticketing/ticket-floating-toolbar/ticket-floating-toolbar.component.ngfactory.js");
/* harmony import */ var _ticket_floating_toolbar_ticket_floating_toolbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../ticket-floating-toolbar/ticket-floating-toolbar.component */ "./src/app/ticketing/ticket-floating-toolbar/ticket-floating-toolbar.component.ts");
/* harmony import */ var _tickets_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../tickets.service */ "./src/app/ticketing/tickets.service.ts");
/* harmony import */ var _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../common/core/ui/toast.service */ "./src/common/core/ui/toast.service.ts");
/* harmony import */ var _common_auth_current_user__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../common/auth/current-user */ "./src/common/auth/current-user.ts");
/* harmony import */ var _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../common/core/ui/loading-indicator/loading-indicator.component.ngfactory */ "./src/common/core/ui/loading-indicator/loading-indicator.component.ngfactory.js");
/* harmony import */ var _common_core_ui_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../common/core/ui/loading-indicator/loading-indicator.component */ "./src/common/core/ui/loading-indicator/loading-indicator.component.ts");
/* harmony import */ var _common_admin_pagination_paginator_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../common/admin/pagination/paginator.service */ "./src/common/admin/pagination/paginator.service.ts");
/* harmony import */ var _common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../common/core/http/app-http-client.service */ "./src/common/core/http/app-http-client.service.ts");
/* harmony import */ var _agent_mailbox_ticket_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./agent-mailbox-ticket-list.component */ "./src/app/ticketing/agent-mailbox-ticket-list/agent-mailbox-ticket-list.component.ts");
/* harmony import */ var _shared_backend_events__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../shared/backend-events */ "./src/app/shared/backend-events.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

































var styles_AgentMailboxTicketListComponent = [_agent_mailbox_ticket_list_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_7__["styles"]];
var RenderType_AgentMailboxTicketListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AgentMailboxTicketListComponent, data: {} });

function View_AgentMailboxTicketListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "no-results-message", [["class", "no-results-message"]], null, null, null, _common_core_ui_no_results_message_no_results_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_NoResultsMessageComponent_0"], _common_core_ui_no_results_message_no_results_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_NoResultsMessageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _common_core_ui_no_results_message_no_results_message_component__WEBPACK_IMPORTED_MODULE_9__["NoResultsMessageComponent"], [_common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 2, "span", [["primary-text", ""], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_11__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_12__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Nothing To Display."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 1, 2, "span", [["secondary-text", ""], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_11__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_12__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Seems like there are no tickets in this category."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "]))], null, null); }
function View_AgentMailboxTicketListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { matPaginator: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 6, "tickets-list", [], null, [[null, "ticketsSelected"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ticketsSelected" === en)) {
        var pd_0 = (_co.dataSource.setSelectedItems($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_tickets_list_tickets_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_TicketsListComponent_0"], _shared_tickets_list_tickets_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_TicketsListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _shared_tickets_list_tickets_list_component__WEBPACK_IMPORTED_MODULE_14__["TicketsListComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_15__["Modal"], _mailbox_tags_service__WEBPACK_IMPORTED_MODULE_16__["MailboxTagsService"]], { tickets: [0, "tickets"] }, { ticketsSelected: "ticketsSelected" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 2, null, View_AgentMailboxTicketListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 1, "ticket-floating-toolbar", [], [[2, "hidden", null]], [[null, "onTicketsUpdated"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onTicketsUpdated" === en)) {
        var pd_0 = (_co.refreshTicketsList() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _ticket_floating_toolbar_ticket_floating_toolbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_TicketFloatingToolbarComponent_0"], _ticket_floating_toolbar_ticket_floating_toolbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_TicketFloatingToolbarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 49152, null, 0, _ticket_floating_toolbar_ticket_floating_toolbar_component__WEBPACK_IMPORTED_MODULE_18__["TicketFloatingToolbarComponent"], [_tickets_service__WEBPACK_IMPORTED_MODULE_19__["TicketsService"], _mailbox_tags_service__WEBPACK_IMPORTED_MODULE_16__["MailboxTagsService"], _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_20__["Toast"], _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_15__["Modal"], _common_auth_current_user__WEBPACK_IMPORTED_MODULE_21__["CurrentUser"]], { selectedTickets: [0, "selectedTickets"] }, { onTicketsUpdated: "onTicketsUpdated" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 2, "mat-paginator", [["class", "mat-paginator"]], null, null, null, _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatPaginator_0"], _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatPaginator"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 245760, [[1, 4]], 0, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { pageSize: [0, "pageSize"], pageSizeOptions: [1, "pageSizeOptions"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](14, 4), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 2, "loading-indicator", [["class", "overlay"]], [[40, "@visibility", 0]], null, null, _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_LoadingIndicatorComponent_0"], _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_LoadingIndicatorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 49152, null, 0, _common_core_ui_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_23__["LoadingIndicatorComponent"], [], { isVisible: [0, "isVisible"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.dataSource.getData(); _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).transform(_co.dataSource.noResults$)); _ck(_v, 5, 0, currVal_1); var currVal_3 = _co.dataSource.getSelectedItems(); _ck(_v, 10, 0, currVal_3); var currVal_4 = 15; var currVal_5 = _ck(_v, 14, 0, 5, 10, 15, 20); _ck(_v, 13, 0, currVal_4, currVal_5); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 17, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).transform(_co.dataSource.loading$)); _ck(_v, 17, 0, currVal_7); }, function (_ck, _v) { var _co = _v.component; var currVal_2 = !_co.dataSource.anyRowsSelected(); _ck(_v, 9, 0, currVal_2); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).isVisible; _ck(_v, 16, 0, currVal_6); }); }
function View_AgentMailboxTicketListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "agent-mailbox-ticket-list", [], null, null, null, View_AgentMailboxTicketListComponent_0, RenderType_AgentMailboxTicketListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _common_admin_pagination_paginator_service__WEBPACK_IMPORTED_MODULE_24__["Paginator"], _common_admin_pagination_paginator_service__WEBPACK_IMPORTED_MODULE_24__["Paginator"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_25__["AppHttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 245760, null, 0, _agent_mailbox_ticket_list_component__WEBPACK_IMPORTED_MODULE_26__["AgentMailboxTicketListComponent"], [_mailbox_tags_service__WEBPACK_IMPORTED_MODULE_16__["MailboxTagsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_15__["Modal"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _shared_backend_events__WEBPACK_IMPORTED_MODULE_27__["BackendEvents"], _common_admin_pagination_paginator_service__WEBPACK_IMPORTED_MODULE_24__["Paginator"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var AgentMailboxTicketListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("agent-mailbox-ticket-list", _agent_mailbox_ticket_list_component__WEBPACK_IMPORTED_MODULE_26__["AgentMailboxTicketListComponent"], View_AgentMailboxTicketListComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/ticketing/agent-mailbox-ticket-list/agent-mailbox-ticket-list.component.scss.ngstyle.js":
/*!*********************************************************************************************************!*\
  !*** ./src/app/ticketing/agent-mailbox-ticket-list/agent-mailbox-ticket-list.component.scss.ngstyle.js ***!
  \*********************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n\n\nagent-mailbox-ticket-list {\n  display: block;\n  height: calc(100vh - 70px);\n  overflow: auto; }\nagent-mailbox-ticket-list .mat-paginator {\n    background-color: #fff;\n    border-top: 1px solid #E0E0E0;\n    overflow: hidden; }\nagent-mailbox-ticket-list .mat-paginator-page-size {\n    height: 100%; }\nagent-mailbox-ticket-list .mat-paginator-page-size-select {\n    margin: 0 4px; }\nagent-mailbox-ticket-list .mat-paginator-container {\n    min-height: 40px;\n    height: 40px; }\n"];



/***/ }),

/***/ "./src/app/ticketing/agent-mailbox-ticket-list/agent-mailbox-ticket-list.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/ticketing/agent-mailbox-ticket-list/agent-mailbox-ticket-list.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AgentMailboxTicketListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentMailboxTicketListComponent", function() { return AgentMailboxTicketListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mailbox_tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mailbox-tags.service */ "./src/app/ticketing/mailbox-tags.service.ts");
/* harmony import */ var _common_admin_pagination_paginator_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/admin/pagination/paginator.service */ "./src/common/admin/pagination/paginator.service.ts");
/* harmony import */ var _shared_backend_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/backend-events */ "./src/app/shared/backend-events.ts");
/* harmony import */ var _common_admin_data_table_data_paginated_data_table_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/admin/data-table/data/paginated-data-table-source */ "./src/common/admin/data-table/data/paginated-data-table-source.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");








var AgentMailboxTicketListComponent = /** @class */ (function () {
    function AgentMailboxTicketListComponent(mailboxTags, router, modal, route, backendEvents, paginator) {
        this.mailboxTags = mailboxTags;
        this.router = router;
        this.modal = modal;
        this.route = route;
        this.backendEvents = backendEvents;
        this.paginator = paginator;
    }
    AgentMailboxTicketListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _common_admin_data_table_data_paginated_data_table_source__WEBPACK_IMPORTED_MODULE_5__["PaginatedDataTableSource"]({
            uri: 'tickets',
            dataPaginator: this.paginator,
            matPaginator: this.matPaginator,
        });
        this.route.params.subscribe(function () {
            var params = { tag_id: _this.getActiveTagId() };
            _this.dataSource.reset(params);
        });
        this.bindToBackendEvents();
    };
    AgentMailboxTicketListComponent.prototype.ngOnDestroy = function () {
        this.dataSource.disconnect();
    };
    AgentMailboxTicketListComponent.prototype.refreshTicketsList = function () {
        this.dataSource.reset();
    };
    AgentMailboxTicketListComponent.prototype.bindToBackendEvents = function () {
        var _this = this;
        this.backendEvents.ticketCreated.subscribe(function (newTicket) {
            // if new ticket does not have currently active status, bail
            if (!newTicket.tags || !newTicket.tags.find(function (tag) { return tag.id === _this.mailboxTags.getActiveTagId(); }))
                return;
            // if ticket is already in tickets list, bail
            var data = _this.dataSource.getData();
            if (data.find(function (ticket) { return ticket.id === newTicket.id; }))
                return;
            // add new ticket to tickets list and refresh mailbox tags
            newTicket['animated'] = true;
            _this.dataSource.setData([newTicket].concat(data));
            _this.mailboxTags.refresh();
        });
    };
    AgentMailboxTicketListComponent.prototype.getActiveTagId = function () {
        var openTag = this.mailboxTags.getTagByIdOrName('open'), tagId = this.route.snapshot.params.tag_id;
        return tagId ? tagId : openTag.id;
    };
    return AgentMailboxTicketListComponent;
}());



/***/ }),

/***/ "./src/app/ticketing/agent-search-modal/agent-search-modal.component.ngfactory.js":
/*!****************************************************************************************!*\
  !*** ./src/app/ticketing/agent-search-modal/agent-search-modal.component.ngfactory.js ***!
  \****************************************************************************************/
/*! exports provided: ViewChild_1, ɵangular_packages_core_core_b_2, Query_3, Inject_5, ɵangular_packages_core_core_a_6, InjectionToken_8, NgZone_12, ComponentFactoryResolver_20, ViewContainerRef_21, Output_22, Optional_23, ElementRef_24, PLATFORM_ID_28, ChangeDetectorRef_29, MAT_DIALOG_DATA_7, MatDialogRef_9, MatDialogContainer_17, MatDialogConfig_30, OverlayRef_10, OverlayKeyboardDispatcher_13, DOCUMENT_14, Location_15, LocationStrategy_16, BasePortalOutlet_18, CdkPortalOutlet_19, FocusTrapFactory_25, InteractivityChecker_26, Platform_27, View_MatDialogContainer_0_31, RenderType_MatDialogContainer_32, MatDialogContainerNgFactory_33, RenderType_AgentSearchModalComponent, View_AgentSearchModalComponent_0, View_AgentSearchModalComponent_Host_0, AgentSearchModalComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AgentSearchModalComponent", function() { return RenderType_AgentSearchModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AgentSearchModalComponent_0", function() { return View_AgentSearchModalComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AgentSearchModalComponent_Host_0", function() { return View_AgentSearchModalComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentSearchModalComponentNgFactory", function() { return AgentSearchModalComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewChild_1", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_2", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query_3", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Inject_5", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_a_6", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectionToken_8", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgZone_12", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentFactoryResolver_20", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewContainerRef_21", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Output_22", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Optional_23", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementRef_24", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLATFORM_ID_28", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangeDetectorRef_29", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]; });

/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA_7", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogRef_9", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainer_17", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogConfig_30", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]; });

/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayRef_10", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher_13", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayKeyboardDispatcher"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOCUMENT_14", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location_15", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationStrategy_16", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]; });

/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasePortalOutlet_18", function() { return _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["BasePortalOutlet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet_19", function() { return _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"]; });

/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusTrapFactory_25", function() { return _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusTrapFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InteractivityChecker_26", function() { return _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["InteractivityChecker"]; });

/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Platform_27", function() { return _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]; });

/* harmony import */ var _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/dialog/typings/index.ngfactory */ "./node_modules/@angular/material/dialog/typings/index.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View_MatDialogContainer_0_31", function() { return _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatDialogContainer_0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderType_MatDialogContainer_32", function() { return _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatDialogContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainerNgFactory_33", function() { return _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["MatDialogContainerNgFactory"]; });

/* harmony import */ var _agent_search_modal_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./agent-search-modal.component.scss.ngstyle */ "./src/app/ticketing/agent-search-modal/agent-search-modal.component.scss.ngstyle.js");
/* harmony import */ var _common_core_ui_no_results_message_no_results_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/core/ui/no-results-message/no-results-message.component.ngfactory */ "./src/common/core/ui/no-results-message/no-results-message.component.ngfactory.js");
/* harmony import */ var _common_core_ui_no_results_message_no_results_message_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/core/ui/no-results-message/no-results-message.component */ "./src/common/core/ui/no-results-message/no-results-message.component.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/core/translations/translate.directive */ "./src/common/core/translations/translate.directive.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_tickets_list_tickets_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared/tickets-list/tickets-list.component.ngfactory */ "./src/app/shared/tickets-list/tickets-list.component.ngfactory.js");
/* harmony import */ var _shared_tickets_list_tickets_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/tickets-list/tickets-list.component */ "./src/app/shared/tickets-list/tickets-list.component.ts");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/* harmony import */ var _mailbox_tags_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../mailbox-tags.service */ "./src/app/ticketing/mailbox-tags.service.ts");
/* harmony import */ var _ticket_floating_toolbar_ticket_floating_toolbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../ticket-floating-toolbar/ticket-floating-toolbar.component.ngfactory */ "./src/app/ticketing/ticket-floating-toolbar/ticket-floating-toolbar.component.ngfactory.js");
/* harmony import */ var _ticket_floating_toolbar_ticket_floating_toolbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../ticket-floating-toolbar/ticket-floating-toolbar.component */ "./src/app/ticketing/ticket-floating-toolbar/ticket-floating-toolbar.component.ts");
/* harmony import */ var _tickets_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../tickets.service */ "./src/app/ticketing/tickets.service.ts");
/* harmony import */ var _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../common/core/ui/toast.service */ "./src/common/core/ui/toast.service.ts");
/* harmony import */ var _common_auth_current_user__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../common/auth/current-user */ "./src/common/auth/current-user.ts");
/* harmony import */ var _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../common/core/ui/loading-indicator/loading-indicator.component.ngfactory */ "./src/common/core/ui/loading-indicator/loading-indicator.component.ngfactory.js");
/* harmony import */ var _common_core_ui_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../common/core/ui/loading-indicator/loading-indicator.component */ "./src/common/core/ui/loading-indicator/loading-indicator.component.ts");
/* harmony import */ var _agent_search_modal_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./agent-search-modal.component */ "./src/app/ticketing/agent-search-modal/agent-search-modal.component.ts");
/* harmony import */ var _help_center_shared_hc_urls_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../help-center/shared/hc-urls.service */ "./src/app/help-center/shared/hc-urls.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







































var styles_AgentSearchModalComponent = [_agent_search_modal_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_8__["styles"]];
var RenderType_AgentSearchModalComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_AgentSearchModalComponent, data: {} });

function View_AgentSearchModalComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "no-results-message", [["class", "no-results-message"]], null, null, null, _common_core_ui_no_results_message_no_results_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NoResultsMessageComponent_0"], _common_core_ui_no_results_message_no_results_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NoResultsMessageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _common_core_ui_no_results_message_no_results_message_component__WEBPACK_IMPORTED_MODULE_10__["NoResultsMessageComponent"], [_common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_11__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 2, "span", [["primary-text", ""], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_12__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_13__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_11__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Nothing To Display."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 1, 2, "span", [["secondary-text", ""], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_12__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_13__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_11__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Could not find any tickets matching this search query."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "]))], null, null); }
function View_AgentSearchModalComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 14, "a", [["class", "user"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](2, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 0, "img", [["alt", "customer avatar"], ["class", "avatar"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 7, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](12, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "]))], function (_ck, _v) { var currVal_2 = _ck(_v, 2, 0, "/mailbox/users", _v.context.$implicit.id); _ck(_v, 1, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _v.context.$implicit.avatar, ""); _ck(_v, 4, 0, currVal_3); var currVal_4 = _v.context.$implicit.display_name; _ck(_v, 9, 0, currVal_4); var currVal_5 = _v.context.$implicit.email; _ck(_v, 12, 0, currVal_5); }); }
function View_AgentSearchModalComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 14, "a", [["class", "article"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "description"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 7, "div", [["class", "article-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](12, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.urls.article(_v.context.$implicit); _ck(_v, 1, 0, currVal_2); var currVal_5 = "description"; _ck(_v, 4, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).inline; var currVal_4 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "warn")); _ck(_v, 3, 0, currVal_3, currVal_4); var currVal_6 = _v.context.$implicit.title; _ck(_v, 9, 0, currVal_6); var currVal_7 = _v.context.$implicit.body; _ck(_v, 12, 0, currVal_7); }); }
function View_AgentSearchModalComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { ticketsList: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 75, "mat-dialog-content", [["class", "mat-dialog-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 5, "button", [["class", "close-button"], ["mat-icon-button", ""], ["tabindex", "-1"], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.close() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 0, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "close"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 9, "div", [["class", "input-container search-input"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 6, "input", [["placeholder", "Search for anything..."], ["trans-placeholder", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_20__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_forms_forms_k"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_20__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_12__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_13__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_11__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 53, "div", [["class", "search-results"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 0, null, null, 19, "div", [["class", "tab-menu"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 4, "div", [["class", "tab-menu-item tickets-menu-item"]], [[2, "active", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setActiveTab("tickets") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](27, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 2, "span", [["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_12__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_13__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_11__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Tickets"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 4, "div", [["class", "tab-menu-item users-menu-item"]], [[2, "active", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setActiveTab("users") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](33, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 2, "span", [["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_12__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_13__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_11__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Users"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 4, "div", [["class", "tab-menu-item articles-menu-item"]], [[2, "active", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setActiveTab("articles") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](39, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](40, 0, null, null, 2, "span", [["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](41, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_12__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_13__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_11__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Articles"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](45, 0, null, null, 29, "div", [["class", "tabs"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](47, 0, null, null, 11, "div", [["class", "tab tickets-tab"]], [[2, "hidden", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 5, "tickets-list", [], null, null, null, _shared_tickets_list_tickets_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_TicketsListComponent_0"], _shared_tickets_list_tickets_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_TicketsListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](50, 49152, [[1, 4]], 0, _shared_tickets_list_tickets_list_component__WEBPACK_IMPORTED_MODULE_22__["TicketsListComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_23__["Modal"], _mailbox_tags_service__WEBPACK_IMPORTED_MODULE_24__["MailboxTagsService"]], { openTicketInModal: [0, "openTicketInModal"], tickets: [1, "tickets"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_AgentSearchModalComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](53, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 1, "ticket-floating-toolbar", [], [[2, "hidden", null]], null, null, _ticket_floating_toolbar_ticket_floating_toolbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_TicketFloatingToolbarComponent_0"], _ticket_floating_toolbar_ticket_floating_toolbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_TicketFloatingToolbarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](57, 49152, null, 0, _ticket_floating_toolbar_ticket_floating_toolbar_component__WEBPACK_IMPORTED_MODULE_26__["TicketFloatingToolbarComponent"], [_tickets_service__WEBPACK_IMPORTED_MODULE_27__["TicketsService"], _mailbox_tags_service__WEBPACK_IMPORTED_MODULE_24__["MailboxTagsService"], _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_28__["Toast"], _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_23__["Modal"], _common_auth_current_user__WEBPACK_IMPORTED_MODULE_29__["CurrentUser"]], { selectedTickets: [0, "selectedTickets"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](60, 0, null, null, 4, "div", [["class", "tab users-tab"]], [[2, "hidden", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AgentSearchModalComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](63, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 7, "div", [["class", "tab articles-tab"]], [[2, "hidden", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](68, 0, null, null, 4, "div", [["class", "articles-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_AgentSearchModalComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](71, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 1, "loading-indicator", [["class", "overlay overlay-light"]], [[40, "@visibility", 0]], null, null, _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__["View_LoadingIndicatorComponent_0"], _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_30__["RenderType_LoadingIndicatorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](79, 49152, null, 0, _common_core_ui_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_31__["LoadingIndicatorComponent"], [], { isVisible: [0, "isVisible"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_4 = "close"; _ck(_v, 8, 0, currVal_4); var currVal_12 = _co.searchQueryControl; _ck(_v, 16, 0, currVal_12); var currVal_20 = true; var currVal_21 = (((_co.results.tickets == null) ? null : _co.results.tickets.data) || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵEMPTY_ARRAY"]); _ck(_v, 50, 0, currVal_20, currVal_21); var currVal_22 = (!((_co.results.tickets == null) ? null : ((_co.results.tickets.data == null) ? null : _co.results.tickets.data.length)) && !_co.isSearching); _ck(_v, 53, 0, currVal_22); var currVal_24 = _co.ticketsList.selectedTickets; _ck(_v, 57, 0, currVal_24); var currVal_26 = ((_co.results.users == null) ? null : _co.results.users.data); _ck(_v, 63, 0, currVal_26); var currVal_28 = ((_co.results.articles == null) ? null : _co.results.articles.data); _ck(_v, 71, 0, currVal_28); var currVal_30 = _co.isSearching; _ck(_v, 79, 0, currVal_30); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._animationMode === "NoopAnimations"); _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).inline; var currVal_3 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).color !== "warn")); _ck(_v, 7, 0, currVal_2, currVal_3); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassUntouched; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassTouched; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassPristine; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassDirty; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassValid; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassInvalid; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassPending; _ck(_v, 13, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_13 = _co.activeTabIs("tickets"); _ck(_v, 26, 0, currVal_13); var currVal_14 = ((_co.results.tickets == null) ? null : _co.results.tickets.total); _ck(_v, 27, 0, currVal_14); var currVal_15 = _co.activeTabIs("users"); _ck(_v, 32, 0, currVal_15); var currVal_16 = ((_co.results.users == null) ? null : _co.results.users.total); _ck(_v, 33, 0, currVal_16); var currVal_17 = _co.activeTabIs("articles"); _ck(_v, 38, 0, currVal_17); var currVal_18 = ((_co.results.articles == null) ? null : _co.results.articles.total); _ck(_v, 39, 0, currVal_18); var currVal_19 = !_co.activeTabIs("tickets"); _ck(_v, 47, 0, currVal_19); var currVal_23 = !_co.ticketsList.anyTicketSelected(); _ck(_v, 56, 0, currVal_23); var currVal_25 = !_co.activeTabIs("users"); _ck(_v, 60, 0, currVal_25); var currVal_27 = !_co.activeTabIs("articles"); _ck(_v, 66, 0, currVal_27); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 79).isVisible; _ck(_v, 78, 0, currVal_29); }); }
function View_AgentSearchModalComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "agent-search-modal", [], null, null, null, View_AgentSearchModalComponent_0, RenderType_AgentSearchModalComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _agent_search_modal_component__WEBPACK_IMPORTED_MODULE_32__["AgentSearchModalComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], _tickets_service__WEBPACK_IMPORTED_MODULE_27__["TicketsService"], _help_center_shared_hc_urls_service__WEBPACK_IMPORTED_MODULE_33__["HcUrls"]], null, null)], null, null); }
var AgentSearchModalComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("agent-search-modal", _agent_search_modal_component__WEBPACK_IMPORTED_MODULE_32__["AgentSearchModalComponent"], View_AgentSearchModalComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/ticketing/agent-search-modal/agent-search-modal.component.scss.ngstyle.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/ticketing/agent-search-modal/agent-search-modal.component.scss.ngstyle.js ***!
  \*******************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n\n\n.agent-search-modal-container {\n  height: calc(100% - 50px);\n  width: 90%; }\n.agent-search-modal-container .mat-dialog-content {\n    max-height: none;\n    min-height: 100%; }\n.agent-search-modal-container .search-results {\n    border: 1px solid #E0E0E0;\n    border-radius: 4px;\n    background-color: #fff;\n    min-height: calc(100% - 75px); }\n.agent-search-modal-container .search-results .tab-menu {\n      display: flex;\n      border-bottom: 1px solid #E0E0E0; }\n.agent-search-modal-container .search-results .tab-menu .tab-menu-item {\n        padding: 15px;\n        border-bottom: 2px solid transparent;\n        cursor: pointer; }\n.agent-search-modal-container .search-results .tab-menu .tab-menu-item.active {\n          border-color: #689f38; }\n.agent-search-modal-container .search-results .tabs {\n      border: 1px solid #E0E0E0;\n      margin: 15px; }\n.agent-search-modal-container .search-results .tabs .tab {\n        min-height: 400px; }\n.agent-search-modal-container .search-results .tabs .users-tab {\n        padding: 8px; }\n.agent-search-modal-container .search-results .tabs .users-tab .user {\n          display: inline-flex;\n          width: 300px;\n          height: 80px;\n          border: 1px solid #E0E0E0;\n          padding: 15px;\n          margin: 8px;\n          color: rgba(0, 0, 0, 0.87); }\n.agent-search-modal-container .search-results .tabs .users-tab .user:hover {\n            background-color: #e8f0fe; }\n.agent-search-modal-container .search-results .tabs .users-tab .user img {\n            margin-right: 10px;\n            width: 50px;\n            height: 50px;\n            -o-object-fit: cover;\n               object-fit: cover; }\n.agent-search-modal-container .search-results .tabs .users-tab .user .text {\n            padding-top: 6px; }\n.agent-search-modal-container .search-results .tabs .users-tab .user .text .title {\n              font-size: 1.5rem; }\n.agent-search-modal-container .search-results .tabs .users-tab .user .text .body {\n              color: rgba(0, 0, 0, 0.54); }\n.agent-search-modal-container .search-results .tabs .articles-list .article {\n        display: flex;\n        padding: 13px;\n        border-bottom: 1px solid #E0E0E0;\n        color: rgba(0, 0, 0, 0.87); }\n.agent-search-modal-container .search-results .tabs .articles-list .article:last-of-type {\n          border-bottom: none; }\n.agent-search-modal-container .search-results .tabs .articles-list .article:hover {\n          background-color: #e8f0fe; }\n.agent-search-modal-container .search-results .tabs .articles-list .article .mat-icon {\n          width: 35px;\n          height: 35px;\n          color: rgba(0, 0, 0, 0.5);\n          margin-right: 5px; }\n.agent-search-modal-container .search-results .tabs .articles-list .article .article-info .title {\n          font-size: 1.6rem; }\n.agent-search-modal-container .search-results .tabs .articles-list .article .article-info .body {\n          word-wrap: break-word;\n          color: rgba(0, 0, 0, 0.54); }\n.agent-search-modal-container .search-results .tabs tickets-list {\n        background-color: transparent; }\n.agent-search-modal-container .search-input {\n    height: 50px;\n    margin-bottom: 25px; }\n.agent-search-modal-container .search-input input {\n      height: 100%;\n      border-radius: 4px; }\n.agent-search-modal-container .close-button {\n    position: absolute;\n    top: 0;\n    right: 0; }\n"];



/***/ }),

/***/ "./src/app/ticketing/agent-search-modal/agent-search-modal.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/ticketing/agent-search-modal/agent-search-modal.component.ts ***!
  \******************************************************************************/
/*! exports provided: AgentSearchModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentSearchModalComponent", function() { return AgentSearchModalComponent; });
/* harmony import */ var _tickets_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tickets.service */ "./src/app/ticketing/tickets.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _help_center_shared_hc_urls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../help-center/shared/hc-urls.service */ "./src/app/help-center/shared/hc-urls.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_tickets_list_tickets_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/tickets-list/tickets-list.component */ "./src/app/shared/tickets-list/tickets-list.component.ts");






var AgentSearchModalComponent = /** @class */ (function () {
    function AgentSearchModalComponent(dialogRef, data, tickets, urls) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.tickets = tickets;
        this.urls = urls;
        this.searchQueryControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.results = {};
        this.isSearching = false;
        this.hasResults = null;
        this.activeTab = 'tickets';
        this.hydrate();
    }
    AgentSearchModalComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AgentSearchModalComponent.prototype.hydrate = function () {
        this.bindToSearchInput();
        this.searchQueryControl.setValue(this.data.query);
    };
    AgentSearchModalComponent.prototype.setActiveTab = function (name) {
        this.activeTab = name;
    };
    AgentSearchModalComponent.prototype.activeTabIs = function (name) {
        return this.activeTab === name;
    };
    AgentSearchModalComponent.prototype.performSearch = function (query) {
        var _this = this;
        this.isSearching = true;
        this.tickets.search(query, { detailed: true, per_page: 20 }).subscribe(function (results) {
            _this.results = results.data;
            _this.isSearching = false;
            _this.openFirstTabWithResults();
        });
    };
    AgentSearchModalComponent.prototype.openFirstTabWithResults = function () {
        var _this = this;
        ['tickets', 'users', 'articles'].some(function (type) {
            if (_this.results[type] && _this.results[type]['total']) {
                _this.setActiveTab(type);
                return true;
            }
        });
    };
    AgentSearchModalComponent.prototype.bindToSearchInput = function () {
        var _this = this;
        this.searchQueryControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(function (query) {
            return _this.performSearch(query);
        });
    };
    return AgentSearchModalComponent;
}());



/***/ }),

/***/ "./src/app/ticketing/create-ticket/create-ticket.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/ticketing/create-ticket/create-ticket.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: FormBuilder_1, Router_7, UrlSerializer_9, ChildrenOutletContexts_10, ActivatedRoute_19, ActivatedRouteSnapshot_21, UrlSegmentGroup_25, Location_11, LocationStrategy_12, Injector_13, ɵangular_packages_core_core_c_14, defineInjectable_15, NgModuleFactoryLoader_16, Compiler_17, NgZone_30, Observable_20, RenderType_CreateTicketComponent, View_CreateTicketComponent_0, View_CreateTicketComponent_Host_0, CreateTicketComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CreateTicketComponent", function() { return RenderType_CreateTicketComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CreateTicketComponent_0", function() { return View_CreateTicketComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CreateTicketComponent_Host_0", function() { return View_CreateTicketComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTicketComponentNgFactory", function() { return CreateTicketComponentNgFactory; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormBuilder_1", function() { return _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]; });

/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router_7", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlSerializer_9", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["UrlSerializer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChildrenOutletContexts_10", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRoute_19", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRouteSnapshot_21", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRouteSnapshot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlSegmentGroup_25", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["UrlSegmentGroup"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location_11", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationStrategy_12", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector_13", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_c_14", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_core_core_c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineInjectable_15", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgModuleFactoryLoader_16", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModuleFactoryLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Compiler_17", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["Compiler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgZone_30", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]; });

/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable_20", function() { return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_4__["Observable"]; });

/* harmony import */ var _create_ticket_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-ticket.component.scss.ngstyle */ "./src/app/ticketing/create-ticket/create-ticket.component.scss.ngstyle.js");
/* harmony import */ var _node_modules_angular_material_core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/core/typings/index.ngfactory */ "./node_modules/@angular/material/core/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/core/translations/translate.directive */ "./src/common/core/translations/translate.directive.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _node_modules_angular_material_autocomplete_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/autocomplete/typings/index.ngfactory */ "./node_modules/@angular/material/autocomplete/typings/index.ngfactory.js");
/* harmony import */ var _common_text_editor_text_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/text-editor/text-editor.component.ngfactory */ "./src/common/text-editor/text-editor.component.ngfactory.js");
/* harmony import */ var _common_text_editor_editors_tinymce_text_editor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../common/text-editor/editors/tinymce-text-editor.service */ "./src/common/text-editor/editors/tinymce-text-editor.service.ts");
/* harmony import */ var _common_core_utils_lazy_loader_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../common/core/utils/lazy-loader.service */ "./src/common/core/utils/lazy-loader.service.ts");
/* harmony import */ var _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../common/core/ui/breakpoints.service */ "./src/common/core/ui/breakpoints.service.ts");
/* harmony import */ var _common_text_editor_editors_html_text_editor_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../common/text-editor/editors/html-text-editor.service */ "./src/common/text-editor/editors/html-text-editor.service.ts");
/* harmony import */ var _common_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../common/text-editor/text-editor.component */ "./src/common/text-editor/text-editor.component.ts");
/* harmony import */ var _common_auth_current_user__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../common/auth/current-user */ "./src/common/auth/current-user.ts");
/* harmony import */ var _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../common/uploads/upload-queue/upload-queue.service */ "./src/common/uploads/upload-queue/upload-queue.service.ts");
/* harmony import */ var _common_core_ui_overlay_panel_overlay_panel_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../common/core/ui/overlay-panel/overlay-panel.service */ "./src/common/core/ui/overlay-panel/overlay-panel.service.ts");
/* harmony import */ var _common_text_editor_validation_text_editor_image_validator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../common/text-editor/validation/text-editor-image-validator */ "./src/common/text-editor/validation/text-editor-image-validator.ts");
/* harmony import */ var _common_uploads_upload_progress_bar_upload_progress_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../common/uploads/upload-progress-bar/upload-progress-bar.component.ngfactory */ "./src/common/uploads/upload-progress-bar/upload-progress-bar.component.ngfactory.js");
/* harmony import */ var _common_uploads_upload_progress_bar_upload_progress_bar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../common/uploads/upload-progress-bar/upload-progress-bar.component */ "./src/common/uploads/upload-progress-bar/upload-progress-bar.component.ts");
/* harmony import */ var _shared_reply_attachment_list_reply_attachment_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../shared/reply-attachment-list/reply-attachment-list.component.ngfactory */ "./src/app/shared/reply-attachment-list/reply-attachment-list.component.ngfactory.js");
/* harmony import */ var _shared_reply_attachment_list_reply_attachment_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../shared/reply-attachment-list/reply-attachment-list.component */ "./src/app/shared/reply-attachment-list/reply-attachment-list.component.ts");
/* harmony import */ var _shared_file_mime_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../shared/file-mime.service */ "./src/app/shared/file-mime.service.ts");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _common_uploads_uploads_api_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../common/uploads/uploads-api.service */ "./src/common/uploads/uploads-api.service.ts");
/* harmony import */ var _common_uploads_validation_default_upload_validator__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../common/uploads/validation/default-upload-validator */ "./src/common/uploads/validation/default-upload-validator.ts");
/* harmony import */ var _tickets_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../tickets.service */ "./src/app/ticketing/tickets.service.ts");
/* harmony import */ var _common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../common/core/http/app-http-client.service */ "./src/common/core/http/app-http-client.service.ts");
/* harmony import */ var _create_ticket_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./create-ticket.component */ "./src/app/ticketing/create-ticket/create-ticket.component.ts");
/* harmony import */ var _common_auth_users_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../common/auth/users.service */ "./src/common/auth/users.service.ts");
/* harmony import */ var _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../common/core/ui/toast.service */ "./src/common/core/ui/toast.service.ts");
/* harmony import */ var _mailbox_tags_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../mailbox-tags.service */ "./src/app/ticketing/mailbox-tags.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
















































var styles_CreateTicketComponent = [_create_ticket_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_5__["styles"]];
var RenderType_CreateTicketComponent = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵcrt"]({ encapsulation: 2, styles: styles_CreateTicketComponent, data: {} });

function View_CreateTicketComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 1, "div", [["class", "error user-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.ngIf.user_id; _ck(_v, 1, 0, currVal_0); }); }
function View_CreateTicketComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 16, "mat-option", [["class", "mat-option"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1)._selectViaInteraction() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_MatOption_0"], _node_modules_angular_material_core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 8568832, [[1, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatOptgroup"]]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](3, 0, null, 0, 12, "div", [["class", "create-ticket-user-option"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](5, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](7, 0, null, null, 7, "div", [["class", "meta"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](9, 0, null, null, 1, "div", [["class", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](12, 0, null, null, 1, "div", [["class", "email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](13, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["\n        "]))], function (_ck, _v) { var currVal_8 = _v.context.$implicit; _ck(_v, 1, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1)._getTabIndex(); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1).selected; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1).multiple; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1).active; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1).id; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1)._getAriaSelected(); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1).disabled.toString(); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = _v.context.$implicit.avatar; _ck(_v, 5, 0, currVal_9); var currVal_10 = _v.context.$implicit.display_name; _ck(_v, 10, 0, currVal_10); var currVal_11 = _v.context.$implicit.email; _ck(_v, 13, 0, currVal_11); }); }
function View_CreateTicketComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 1, "div", [["class", "error subject-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.ngIf.subject; _ck(_v, 1, 0, currVal_0); }); }
function View_CreateTicketComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"]]], { ngValue: [0, "ngValue"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_s"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], [8, null]], { ngValue: [0, "ngValue"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](3, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.id; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.display_name; _ck(_v, 3, 0, currVal_2); }); }
function View_CreateTicketComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 1, "div", [["class", "error category-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.ngIf.category; _ck(_v, 1, 0, currVal_0); }); }
function View_CreateTicketComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 3, "option", [["class", "status-tag-option"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"]]], { ngValue: [0, "ngValue"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_s"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], [8, null]], { ngValue: [0, "ngValue"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](3, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.name; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.display_name; _ck(_v, 3, 0, currVal_2); }); }
function View_CreateTicketComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 1, "div", [["class", "error status-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.ngIf.status; _ck(_v, 1, 0, currVal_0); }); }
function View_CreateTicketComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 1, "div", [["class", "error body-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.ngIf.body; _ck(_v, 1, 0, currVal_0); }); }
function View_CreateTicketComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 128, "form", [["class", "many-inputs"], ["ngNativeValidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 1).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.createTicket() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], [[8, null], [8, null]], { form: [0, "form"] }, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](5, 0, null, null, 18, "div", [["class", "input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](7, 0, null, null, 2, "label", [["for", "user"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](8, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["Customer"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](11, 16777216, null, null, 8, "input", [["formControlName", "customer"], ["id", "user"], ["required", ""], ["type", "text"]], [[1, "required", 0], [1, "autocomplete", 0], [1, "role", 0], [1, "aria-autocomplete", 0], [1, "aria-activedescendant", 0], [1, "aria-expanded", 0], [1, "aria-owns", 0], [1, "aria-haspopup", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focusin"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 12)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 12).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 12)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 12)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("focusin" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15)._handleFocus() !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15)._onTouched() !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15)._handleInput($event) !== false);
        ad = (pd_6 && ad);
    } if (("keydown" === en)) {
        var pd_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15)._handleKeydown($event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](15, 147456, null, 0, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_12__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_13__["Directionality"]], [8, null], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ViewportRuler"]], { autocomplete: [0, "autocomplete"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteTrigger"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](17, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_k"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](19, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, null, 1, null, View_CreateTicketComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](22, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](25, 0, null, null, 9, "mat-autocomplete", [["class", "create-ticket-user-autocomplete mat-autocomplete"]], null, null, null, _node_modules_angular_material_autocomplete_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_MatAutocomplete_0"], _node_modules_angular_material_autocomplete_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_MatAutocomplete"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](27, 1097728, [["auto", 4]], 2, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocomplete"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MAT_AUTOCOMPLETE_DEFAULT_OPTIONS"]], { displayWith: [0, "displayWith"], classList: [1, "classList"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵqud"](603979776, 1, { options: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵqud"](603979776, 2, { optionGroups: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, 0, 2, null, View_CreateTicketComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](32, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](36, 0, null, null, 17, "div", [["class", "input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](38, 0, null, null, 2, "label", [["for", "subject"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](39, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["Subject"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](42, 0, null, null, 7, "input", [["formControlName", "subject"], ["id", "subject"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 43)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 43).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 43)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 43)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](43, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](44, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](47, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_k"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](49, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, null, 1, null, View_CreateTicketComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](52, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](55, 0, null, null, 21, "div", [["class", "input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](57, 0, null, null, 2, "label", [["for", "category-select"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](58, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["Category"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](61, 0, null, null, 11, "select", [["formControlName", "category"], ["id", "category-select"], ["name", "category"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 62).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 62).onTouched() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](62, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](63, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](66, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_k"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](68, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, null, 1, null, View_CreateTicketComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](71, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, null, 1, null, View_CreateTicketComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](75, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](78, 0, null, null, 21, "div", [["class", "input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](80, 0, null, null, 2, "label", [["for", "status-select"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](81, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](84, 0, null, null, 11, "select", [["formControlName", "status"], ["id", "status-select"], ["name", "status"], ["required", ""]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 85).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 85).onTouched() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](85, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](86, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](89, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_k"]]], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](91, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, null, 1, null, View_CreateTicketComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](94, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, null, 1, null, View_CreateTicketComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](98, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](101, 0, null, null, 16, "div", [["class", "input-container body-input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](103, 0, null, null, 2, "label", [["for", "description"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](104, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["Ticket Body"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](107, 0, null, null, 3, "text-editor", [["id", "description"], ["inlineUploadType", "ticket"]], null, [[null, "onFileUpload"], [null, "onChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onFileUpload" === en)) {
        var pd_0 = (_co.uploadFiles($event) !== false);
        ad = (pd_0 && ad);
    } if (("onChange" === en)) {
        var pd_1 = (_co.setBody($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _common_text_editor_text_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_TextEditorComponent_0"], _common_text_editor_text_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_TextEditorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](512, null, _common_text_editor_editors_tinymce_text_editor_service__WEBPACK_IMPORTED_MODULE_17__["TinymceTextEditor"], _common_text_editor_editors_tinymce_text_editor_service__WEBPACK_IMPORTED_MODULE_17__["TinymceTextEditor"], [_common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _common_core_utils_lazy_loader_service__WEBPACK_IMPORTED_MODULE_18__["LazyLoaderService"], _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_19__["BreakpointsService"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](512, null, _common_text_editor_editors_html_text_editor_service__WEBPACK_IMPORTED_MODULE_20__["HtmlTextEditor"], _common_text_editor_editors_html_text_editor_service__WEBPACK_IMPORTED_MODULE_20__["HtmlTextEditor"], []), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](110, 4374528, null, 0, _common_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_21__["TextEditorComponent"], [_common_text_editor_editors_tinymce_text_editor_service__WEBPACK_IMPORTED_MODULE_17__["TinymceTextEditor"], _common_text_editor_editors_html_text_editor_service__WEBPACK_IMPORTED_MODULE_20__["HtmlTextEditor"], _common_auth_current_user__WEBPACK_IMPORTED_MODULE_22__["CurrentUser"], _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_23__["UploadQueueService"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _common_core_ui_overlay_panel_overlay_panel_service__WEBPACK_IMPORTED_MODULE_24__["OverlayPanel"], _common_text_editor_validation_text_editor_image_validator__WEBPACK_IMPORTED_MODULE_25__["TextEditorImageValidator"]], { minHeight: [0, "minHeight"], inlineUploadType: [1, "inlineUploadType"] }, { onChange: "onChange", onFileUpload: "onFileUpload" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](112, 0, null, null, 1, "upload-progress-bar", [], [[2, "hidden", null]], null, null, _common_uploads_upload_progress_bar_upload_progress_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["View_UploadProgressBarComponent_0"], _common_uploads_upload_progress_bar_upload_progress_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["RenderType_UploadProgressBarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](113, 180224, null, 0, _common_uploads_upload_progress_bar_upload_progress_bar_component__WEBPACK_IMPORTED_MODULE_27__["UploadProgressBarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_23__["UploadQueueService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, null, 1, null, View_CreateTicketComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](116, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](119, 0, null, null, 2, "reply-attachment-list", [], null, [[null, "detached"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("detached" === en)) {
        var pd_0 = (_co.removeAttachment($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_reply_attachment_list_reply_attachment_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_28__["View_ReplyAttachmentListComponent_0"], _shared_reply_attachment_list_reply_attachment_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_28__["RenderType_ReplyAttachmentListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](120, 49152, null, 0, _shared_reply_attachment_list_reply_attachment_list_component__WEBPACK_IMPORTED_MODULE_29__["ReplyAttachmentListComponent"], [_shared_file_mime_service__WEBPACK_IMPORTED_MODULE_30__["FileMime"], _common_core_ui_overlay_panel_overlay_panel_service__WEBPACK_IMPORTED_MODULE_24__["OverlayPanel"], _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_23__["UploadQueueService"]], { attachments: [0, "attachments"] }, { detached: "detached" }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](123, 0, null, null, 4, "button", [["color", "accent"], ["mat-raised-button", ""], ["trans", ""], ["type", "submit"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_31__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_31__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](124, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](125, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_32__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_33__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_34__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__["ANIMATION_MODULE_TYPE"]]], { disabled: [0, "disabled"], color: [1, "color"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["Create"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.ticketForm; _ck(_v, 1, 0, currVal_7); var currVal_23 = ""; _ck(_v, 13, 0, currVal_23); var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 27); _ck(_v, 15, 0, currVal_24); var currVal_25 = "customer"; _ck(_v, 17, 0, currVal_25); var currVal_26 = _v.context.ngIf.user_id; _ck(_v, 22, 0, currVal_26); var currVal_27 = _co.displayUserFn; var currVal_28 = "create-ticket-user-autocomplete"; _ck(_v, 27, 0, currVal_27, currVal_28); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 32, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 33).transform(_co.users$)); _ck(_v, 32, 0, currVal_29); var currVal_38 = ""; _ck(_v, 44, 0, currVal_38); var currVal_39 = "subject"; _ck(_v, 47, 0, currVal_39); var currVal_40 = _v.context.ngIf.subject; _ck(_v, 52, 0, currVal_40); var currVal_49 = ""; _ck(_v, 63, 0, currVal_49); var currVal_50 = "category"; _ck(_v, 66, 0, currVal_50); var currVal_51 = _co.ticketCategories; _ck(_v, 71, 0, currVal_51); var currVal_52 = _v.context.ngIf.category; _ck(_v, 75, 0, currVal_52); var currVal_61 = ""; _ck(_v, 86, 0, currVal_61); var currVal_62 = "status"; _ck(_v, 89, 0, currVal_62); var currVal_63 = _co.statusTags; _ck(_v, 94, 0, currVal_63); var currVal_64 = _v.context.ngIf.status; _ck(_v, 98, 0, currVal_64); var currVal_65 = 230; var currVal_66 = "ticket"; _ck(_v, 110, 0, currVal_65, currVal_66); var currVal_68 = _v.context.ngIf.body; _ck(_v, 116, 0, currVal_68); var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 120, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 121).transform(_co.attachments$)); _ck(_v, 120, 0, currVal_69); var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 125, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 126).transform(_co.loading$)); var currVal_73 = "accent"; _ck(_v, 125, 0, currVal_72, currVal_73); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 3).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 3).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 3).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 3).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 3).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 3).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 3).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 13).required ? "" : null); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).autocompleteAttribute; var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).autocompleteDisabled ? null : "combobox"); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).autocompleteDisabled ? null : "list"); var currVal_12 = ((_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).panelOpen && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).activeOption) ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).activeOption.id : null); var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).autocompleteDisabled ? null : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).panelOpen.toString()); var currVal_14 = ((_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).autocompleteDisabled || !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).panelOpen) ? null : ((_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).autocomplete == null) ? null : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).autocomplete.id)); var currVal_15 = !_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).autocompleteDisabled; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 19).ngClassUntouched; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 19).ngClassTouched; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 19).ngClassPristine; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 19).ngClassDirty; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 19).ngClassValid; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 19).ngClassInvalid; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 19).ngClassPending; _ck(_v, 11, 1, [currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22]); var currVal_30 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 44).required ? "" : null); var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 49).ngClassUntouched; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 49).ngClassTouched; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 49).ngClassPristine; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 49).ngClassDirty; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 49).ngClassValid; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 49).ngClassInvalid; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 49).ngClassPending; _ck(_v, 42, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37); var currVal_41 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 63).required ? "" : null); var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 68).ngClassUntouched; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 68).ngClassTouched; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 68).ngClassPristine; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 68).ngClassDirty; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 68).ngClassValid; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 68).ngClassInvalid; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 68).ngClassPending; _ck(_v, 61, 0, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48); var currVal_53 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 86).required ? "" : null); var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 91).ngClassUntouched; var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 91).ngClassTouched; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 91).ngClassPristine; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 91).ngClassDirty; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 91).ngClassValid; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 91).ngClassInvalid; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 91).ngClassPending; _ck(_v, 84, 0, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60); var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 113).initiallyHidden; _ck(_v, 112, 0, currVal_67); var currVal_70 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 125).disabled || null); var currVal_71 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 125)._animationMode === "NoopAnimations"); _ck(_v, 123, 0, currVal_70, currVal_71); }); }
function View_CreateTicketComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](2, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, null, 2, null, View_CreateTicketComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 2).transform(_co.errors$)); _ck(_v, 1, 0, currVal_0); }, null); }
function View_CreateTicketComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 3, "create-ticket", [], null, null, null, View_CreateTicketComponent_0, RenderType_CreateTicketComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](512, null, _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_23__["UploadQueueService"], _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_23__["UploadQueueService"], [_common_uploads_uploads_api_service__WEBPACK_IMPORTED_MODULE_36__["UploadsApiService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _common_uploads_validation_default_upload_validator__WEBPACK_IMPORTED_MODULE_37__["DefaultUploadValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](512, null, _tickets_service__WEBPACK_IMPORTED_MODULE_38__["TicketsService"], _tickets_service__WEBPACK_IMPORTED_MODULE_38__["TicketsService"], [_common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_39__["AppHttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](3, 114688, null, 0, _create_ticket_component__WEBPACK_IMPORTED_MODULE_40__["CreateTicketComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"], _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_23__["UploadQueueService"], _common_auth_users_service__WEBPACK_IMPORTED_MODULE_41__["Users"], _tickets_service__WEBPACK_IMPORTED_MODULE_38__["TicketsService"], _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_42__["Toast"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _mailbox_tags_service__WEBPACK_IMPORTED_MODULE_43__["MailboxTagsService"]], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
var CreateTicketComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵccf"]("create-ticket", _create_ticket_component__WEBPACK_IMPORTED_MODULE_40__["CreateTicketComponent"], View_CreateTicketComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/ticketing/create-ticket/create-ticket.component.scss.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/ticketing/create-ticket/create-ticket.component.scss.ngstyle.js ***!
  \*********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n\n\ncreate-ticket {\n  display: block;\n  padding: 25px;\n  overflow: auto;\n  height: calc(100vh - 70px); }\ncreate-ticket form {\n    max-width: 800px; }\ncreate-ticket .error {\n    margin-top: 7px;\n    color: #F44336; }\ncreate-ticket select, create-ticket option {\n    text-transform: capitalize; }\n.create-ticket-user-autocomplete .mat-option {\n  height: auto;\n  line-height: initial; }\n.create-ticket-user-option {\n  display: flex;\n  padding: 8px 0; }\n.create-ticket-user-option img {\n    width: 40px;\n    height: 40px;\n    flex-shrink: 0;\n    margin-right: 10px;\n    border-radius: 4px;\n    overflow: hidden; }\n.create-ticket-user-option .name {\n    color: rgba(0, 0, 0, 0.87);\n    font-size: 1.5rem; }\n.create-ticket-user-option .email {\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 1.4rem; }\n"];



/***/ }),

/***/ "./src/app/ticketing/create-ticket/create-ticket.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/ticketing/create-ticket/create-ticket.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTicketComponent", function() { return CreateTicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/uploads/upload-queue/upload-queue.service */ "./src/common/uploads/upload-queue/upload-queue.service.ts");
/* harmony import */ var _tickets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tickets.service */ "./src/app/ticketing/tickets.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_auth_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/auth/users.service */ "./src/common/auth/users.service.ts");
/* harmony import */ var _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/core/ui/toast.service */ "./src/common/core/ui/toast.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _mailbox_tags_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mailbox-tags.service */ "./src/app/ticketing/mailbox-tags.service.ts");











var CreateTicketComponent = /** @class */ (function () {
    function CreateTicketComponent(fb, settings, uploadQueue, users, tickets, toast, router, route, mailboxTags) {
        this.fb = fb;
        this.settings = settings;
        this.uploadQueue = uploadQueue;
        this.users = users;
        this.tickets = tickets;
        this.toast = toast;
        this.router = router;
        this.route = route;
        this.mailboxTags = mailboxTags;
        this.errors$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.attachments$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.users$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.ticketCategories = [];
        this.statusTags = [];
        this.ticketForm = this.fb.group({
            customer: [''],
            subject: [''],
            category: [''],
            body: [''],
            status: [''],
        });
    }
    CreateTicketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bindToCustomerControl();
        this.statusTags = this.mailboxTags.getStatusTags(true);
        this.ticketForm.patchValue({ status: this.statusTags[0].name });
        this.route.data.subscribe(function (data) {
            _this.ticketCategories = data.categories;
            if (data.categories.length) {
                _this.ticketForm.patchValue({ category: _this.ticketCategories[0].id });
            }
        });
    };
    CreateTicketComponent.prototype.createTicket = function () {
        var _this = this;
        this.loading$.next(true);
        this.tickets.create(this.getPayload())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () { return _this.loading$.next(false); }))
            .subscribe(function () {
            _this.toast.open('Ticket created');
            _this.mailboxTags.refresh();
            _this.router.navigateByUrl('/mailbox/tickets');
        }, function (errResponse) { return _this.errors$.next(errResponse.messages); });
    };
    CreateTicketComponent.prototype.getPayload = function () {
        var payload = this.ticketForm.value;
        payload.user_id = payload.customer.id;
        payload.uploads = this.uploadQueue.getAllCompleted().map(function (entry) { return entry.id; });
        return payload;
    };
    CreateTicketComponent.prototype.setBody = function (value) {
        this.ticketForm.patchValue({ body: value });
    };
    CreateTicketComponent.prototype.uploadFiles = function (files) {
        var _this = this;
        this.uploadQueue.start(files).subscribe(function (entry) {
            _this.attachments$.next(_this.attachments$.value.concat([entry]));
        });
    };
    CreateTicketComponent.prototype.removeAttachment = function (entry) {
        var newAttachments = this.attachments$.value.slice();
        for (var i = 0; i < newAttachments.length; i++) {
            if (newAttachments[i].id === entry.id) {
                newAttachments.splice(i, 1);
            }
        }
        this.attachments$.next(newAttachments);
    };
    CreateTicketComponent.prototype.bindToCustomerControl = function () {
        var _this = this;
        this.ticketForm.get('customer').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(250), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (query) { return _this.searchUsers(query); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]); })).subscribe(function (users) {
            _this.users$.next(users);
        });
    };
    CreateTicketComponent.prototype.searchUsers = function (query) {
        if (!query || typeof query !== 'string') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }
        return this.users.getAll({ query: query });
    };
    CreateTicketComponent.prototype.displayUserFn = function (user) {
        return user ? user.email : undefined;
    };
    return CreateTicketComponent;
}());



/***/ }),

/***/ "./src/app/ticketing/mailbox/mailbox.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/ticketing/mailbox/mailbox.component.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: ActivatedRoute_2, ActivatedRouteSnapshot_5, UrlSegmentGroup_9, Observable_3, RenderType_MailboxComponent, View_MailboxComponent_0, View_MailboxComponent_Host_0, MailboxComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MailboxComponent", function() { return RenderType_MailboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MailboxComponent_0", function() { return View_MailboxComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MailboxComponent_Host_0", function() { return View_MailboxComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailboxComponentNgFactory", function() { return MailboxComponentNgFactory; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRoute_2", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRouteSnapshot_5", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRouteSnapshot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlSegmentGroup_9", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["UrlSegmentGroup"]; });

/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable_3", function() { return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]; });

/* harmony import */ var _mailbox_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mailbox.component.scss.ngstyle */ "./src/app/ticketing/mailbox/mailbox.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_core_translations_translate_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/core/translations/translate.pipe */ "./src/common/core/translations/translate.pipe.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _common_core_ui_material_navbar_material_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/core/ui/material-navbar/material-navbar.component.ngfactory */ "./src/common/core/ui/material-navbar/material-navbar.component.ngfactory.js");
/* harmony import */ var _common_core_ui_material_navbar_material_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/core/ui/material-navbar/material-navbar.component */ "./src/common/core/ui/material-navbar/material-navbar.component.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _common_auth_current_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/auth/current-user */ "./src/common/auth/current-user.ts");
/* harmony import */ var _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/core/ui/breakpoints.service */ "./src/common/core/ui/breakpoints.service.ts");
/* harmony import */ var _ticket_search_dropdown_ticket_search_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ticket-search-dropdown/ticket-search-dropdown.component.ngfactory */ "./src/app/ticketing/ticket-search-dropdown/ticket-search-dropdown.component.ngfactory.js");
/* harmony import */ var _tickets_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../tickets.service */ "./src/app/ticketing/tickets.service.ts");
/* harmony import */ var _common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/core/http/app-http-client.service */ "./src/common/core/http/app-http-client.service.ts");
/* harmony import */ var _ticket_search_dropdown_ticket_search_dropdown_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ticket-search-dropdown/ticket-search-dropdown.component */ "./src/app/ticketing/ticket-search-dropdown/ticket-search-dropdown.component.ts");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/* harmony import */ var _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/sidenav/typings/index.ngfactory */ "./node_modules/@angular/material/sidenav/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../common/core/translations/translate.directive */ "./src/common/core/translations/translate.directive.ts");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _mailbox_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./mailbox.component */ "./src/app/ticketing/mailbox/mailbox.component.ts");
/* harmony import */ var _mailbox_tags_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../mailbox-tags.service */ "./src/app/ticketing/mailbox-tags.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



































var styles_MailboxComponent = [_mailbox_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_2__["styles"]];
var RenderType_MailboxComponent = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵcrt"]({ encapsulation: 2, styles: styles_MailboxComponent, data: {} });

function View_MailboxComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 13, "div", [["class", "status-tag"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](2, 0, null, null, 10, "a", [["class", "aside-nav-item"]], [[2, "router-link-active", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](4, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](5, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](7, 0, null, null, 1, "span", [["class", "tag-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](10, 0, null, null, 1, "span", [["class", "label tickets-count"]], [[2, "hidden", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) { var currVal_3 = "aside-nav-item"; var currVal_4 = _v.context.$implicit.name; _ck(_v, 3, 0, currVal_3, currVal_4); var currVal_5 = _ck(_v, 5, 0, "/mailbox/tickets", "tag", _v.context.$implicit.id); _ck(_v, 4, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.mailboxTags.activeTagIs(_v.context.$implicit); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 4).target; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 4).href; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); var currVal_6 = ((_v.context.$implicit.name === "mine") ? _co.i18n.t(_v.context.$implicit.display_name) : _v.context.$implicit.display_name); _ck(_v, 8, 0, currVal_6); var currVal_7 = (!_v.context.$implicit.tickets_count || (_v.context.$implicit.name == "closed")); _ck(_v, 10, 0, currVal_7); var currVal_8 = _v.context.$implicit.tickets_count; _ck(_v, 11, 0, currVal_8); }); }
function View_MailboxComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 12, "div", [["class", "category-tag"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](2, 0, null, null, 9, "a", [["class", "aside-nav-item"]], [[2, "router-link-active", null], [1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 3).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](3, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpad"](4, 3), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](6, 0, null, null, 1, "span", [["class", "tag-name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](9, 0, null, null, 1, "span", [["class", "label tickets-count"]], [[2, "hidden", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) { var currVal_3 = _ck(_v, 4, 0, "/mailbox/tickets", "tag", _v.context.$implicit.id); _ck(_v, 3, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.mailboxTags.activeTagIs(_v.context.$implicit); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 3).target; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 3).href; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = _v.context.$implicit.display_name; _ck(_v, 7, 0, currVal_4); var currVal_5 = !_v.context.$implicit.tickets_count; _ck(_v, 9, 0, currVal_5); var currVal_6 = _v.context.$implicit.tickets_count; _ck(_v, 10, 0, currVal_6); }); }
function View_MailboxComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpid"](0, _common_core_translations_translate_pipe__WEBPACK_IMPORTED_MODULE_5__["TransPipe"], [_common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_6__["Translations"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](1, 0, null, null, 6, "material-navbar", [["menuPosition", "agent-mailbox"]], [[2, "transparent", null]], [[null, "toggleButtonClick"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("toggleButtonClick" === en)) {
        var pd_0 = (_co.toggleLeftSidebar() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _common_core_ui_material_navbar_material_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MaterialNavbar_0"], _common_core_ui_material_navbar_material_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MaterialNavbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](2, 114688, null, 0, _common_core_ui_material_navbar_material_navbar_component__WEBPACK_IMPORTED_MODULE_8__["MaterialNavbar"], [_common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_9__["Settings"], _common_auth_current_user__WEBPACK_IMPORTED_MODULE_10__["CurrentUser"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_11__["BreakpointsService"]], { menuPosition: [0, "menuPosition"], showToggleButton: [1, "showToggleButton"], hideToggleBtnOnDesktop: [2, "hideToggleBtnOnDesktop"] }, { toggleButtonClick: "toggleButtonClick" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](4, 0, null, 0, 2, "ticket-search-dropdown", [["class", "nav-searchbar"]], null, null, null, _ticket_search_dropdown_ticket_search_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_TicketSearchDropdownComponent_0"], _ticket_search_dropdown_ticket_search_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_TicketSearchDropdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](512, null, _tickets_service__WEBPACK_IMPORTED_MODULE_13__["TicketsService"], _tickets_service__WEBPACK_IMPORTED_MODULE_13__["TicketsService"], [_common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_14__["AppHttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](6, 114688, null, 0, _ticket_search_dropdown_ticket_search_dropdown_component__WEBPACK_IMPORTED_MODULE_15__["TicketSearchDropdownComponent"], [_tickets_service__WEBPACK_IMPORTED_MODULE_13__["TicketsService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_16__["Modal"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](9, 0, null, null, 57, "mat-sidenav-container", [["class", "mailbox-container mat-drawer-container mat-sidenav-container"]], [[2, "mat-drawer-container-explicit-backdrop", null]], null, null, _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatSidenavContainer_0"], _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatSidenavContainer"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](10, 1490944, null, 2, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavContainer"], [[2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"]], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MAT_DRAWER_DEFAULT_AUTOSIZE"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ANIMATION_MODULE_TYPE"]], [2, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["ViewportRuler"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵqud"](603979776, 1, { _drawers: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵqud"](335544320, 2, { _content: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 2, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](14, 0, null, 0, 44, "mat-sidenav", [["class", "left-column mat-drawer mat-sidenav"], ["tabIndex", "-1"]], [[40, "@transform", 0], [1, "align", 0], [2, "mat-drawer-end", null], [2, "mat-drawer-over", null], [2, "mat-drawer-push", null], [2, "mat-drawer-side", null], [2, "mat-sidenav-fixed", null], [4, "top", "px"], [4, "bottom", "px"]], [["component", "@transform.start"], ["component", "@transform.done"]], function (_v, en, $event) { var ad = true; if (("component:@transform.start" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15)._animationStarted.next($event) !== false);
        ad = (pd_0 && ad);
    } if (("component:@transform.done" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15)._animationEnd.next($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatSidenav_0"], _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatSidenav"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](15, 3325952, [[1, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenav"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["FocusTrapFactory"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["FocusMonitor"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_23__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]]], { mode: [0, "mode"], opened: [1, "opened"], fixedInViewport: [2, "fixedInViewport"], fixedTopGap: [3, "fixedTopGap"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](18, 0, null, 0, 12, "section", [["class", "aside-container status-tags"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](20, 0, null, null, 6, "div", [["class", "aside-container-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](21, 0, null, null, 1, "mat-icon", [["class", "title-icon mat-icon notranslate"], ["role", "img"], ["svgIcon", "inbox-custom"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](22, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, [" "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](24, 0, null, null, 2, "span", [["class", "aside-container-name"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](25, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_26__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_6__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_9__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["Inbox"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, null, 1, null, View_MailboxComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](29, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](32, 0, null, 0, 12, "section", [["class", "aside-container category-tags"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](34, 0, null, null, 6, "div", [["class", "aside-container-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](35, 0, null, null, 1, "mat-icon", [["class", "title-icon mat-icon notranslate"], ["role", "img"], ["svgIcon", "box-filled-custom"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](36, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, [" "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](38, 0, null, null, 2, "span", [["class", "aside-container-name"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](39, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_26__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_6__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_9__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["Folders"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵand"](16777216, null, null, 1, null, View_MailboxComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](43, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](46, 0, null, 0, 11, "div", [["class", "action-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](48, 16777216, null, null, 8, "button", [["mat-icon-button", ""], ["routerLink", "/mailbox/tickets/new"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 49).onClick() !== false);
        ad = (pd_0 && ad);
    } if (("longpress" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 51).show() !== false);
        ad = (pd_1 && ad);
    } if (("keydown" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 51)._handleKeydown($event) !== false);
        ad = (pd_2 && ad);
    } if (("touchend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 51)._handleTouchend() !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_27__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](49, 16384, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterLink"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](50, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_28__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_23__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](51, 147456, null, 0, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MatTooltip"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_30__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_23__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["AriaDescriber"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_22__["FocusMonitor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MAT_TOOLTIP_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"]], [2, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_29__["MAT_TOOLTIP_DEFAULT_OPTIONS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__["HAMMER_LOADER"]]], { message: [0, "message"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵppd"](52, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](54, 0, null, 0, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "new-ticket-custom"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](55, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 2, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](60, 0, null, 1, 5, "mat-sidenav-content", [["class", "right-column mat-drawer-content mat-sidenav-content"]], [[4, "margin-left", "px"], [4, "margin-right", "px"]], null, null, _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatSidenavContent_0"], _node_modules_angular_material_sidenav_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatSidenavContent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](61, 1294336, [[2, 4]], 0, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavContent"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__["MatSidenavContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_21__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](63, 16777216, null, 0, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](64, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, 2, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "agent-mailbox"; var currVal_2 = true; var currVal_3 = true; _ck(_v, 2, 0, currVal_1, currVal_2, currVal_3); _ck(_v, 6, 0); _ck(_v, 10, 0); var currVal_14 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 15, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 16).transform(_co.breakpoints.isMobile$)) ? "over" : "side"); var currVal_15 = !_co.leftColumnIsHidden; var currVal_16 = true; var currVal_17 = 70; _ck(_v, 15, 0, currVal_14, currVal_15, currVal_16, currVal_17); var currVal_20 = "inbox-custom"; _ck(_v, 22, 0, currVal_20); var currVal_21 = _co.mailboxTags.getStatusTags(); _ck(_v, 29, 0, currVal_21); var currVal_24 = "box-filled-custom"; _ck(_v, 36, 0, currVal_24); var currVal_25 = _co.mailboxTags.getCategoryTags(); _ck(_v, 43, 0, currVal_25); var currVal_28 = "/mailbox/tickets/new"; _ck(_v, 49, 0, currVal_28); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵunv"](_v, 51, 0, _ck(_v, 52, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 0), "Create new ticket")); _ck(_v, 51, 0, currVal_29); var currVal_32 = "new-ticket-custom"; _ck(_v, 55, 0, currVal_32); _ck(_v, 61, 0); _ck(_v, 64, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 2).transparent; _ck(_v, 1, 0, currVal_0); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 10)._backdropOverride; _ck(_v, 9, 0, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15)._animationState; var currVal_6 = null; var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).position === "end"); var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).mode === "over"); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).mode === "push"); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).mode === "side"); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).fixedInViewport; var currVal_12 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).fixedTopGap : null); var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).fixedInViewport ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 15).fixedBottomGap : null); _ck(_v, 14, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13); var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 22).inline; var currVal_19 = (((_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 22).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 22).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 22).color !== "warn")); _ck(_v, 21, 0, currVal_18, currVal_19); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 36).inline; var currVal_23 = (((_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 36).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 36).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 36).color !== "warn")); _ck(_v, 35, 0, currVal_22, currVal_23); var currVal_26 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 50).disabled || null); var currVal_27 = (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 50)._animationMode === "NoopAnimations"); _ck(_v, 48, 0, currVal_26, currVal_27); var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 55).inline; var currVal_31 = (((_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 55).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 55).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 55).color !== "warn")); _ck(_v, 54, 0, currVal_30, currVal_31); var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 61)._container._contentMargins.left; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 61)._container._contentMargins.right; _ck(_v, 60, 0, currVal_33, currVal_34); }); }
function View_MailboxComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 1, "mailbox", [], null, null, null, View_MailboxComponent_0, RenderType_MailboxComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 114688, null, 0, _mailbox_component__WEBPACK_IMPORTED_MODULE_32__["MailboxComponent"], [_mailbox_tags_service__WEBPACK_IMPORTED_MODULE_33__["MailboxTagsService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_6__["Translations"], _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_11__["BreakpointsService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MailboxComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵccf"]("mailbox", _mailbox_component__WEBPACK_IMPORTED_MODULE_32__["MailboxComponent"], View_MailboxComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/ticketing/mailbox/mailbox.component.scss.ngstyle.js":
/*!*********************************************************************!*\
  !*** ./src/app/ticketing/mailbox/mailbox.component.scss.ngstyle.js ***!
  \*********************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n\n\nmailbox {\n  display: block;\n  position: relative;\n  max-height: 100vh;\n  overflow: hidden; }\nmailbox material-navbar {\n    height: 70px; }\nmailbox .mailbox-container .left-column {\n    width: 225px;\n    background-color: #FAFAFA;\n    border-right: 1px solid #E0E0E0; }\nmailbox .mailbox-container .left-column .aside-container {\n      list-style: none;\n      padding-left: 0; }\nmailbox .mailbox-container .left-column .aside-container .aside-container-title {\n        position: relative;\n        padding: 20px 15px 15px 15px;\n        text-transform: uppercase;\n        letter-spacing: .03em;\n        color: rgba(0, 0, 0, 0.54);\n        font-weight: 500;\n        white-space: nowrap;\n        overflow: hidden; }\nmailbox .mailbox-container .left-column .aside-container .aside-container-title .title-icon {\n          position: absolute;\n          top: 17px; }\nmailbox .mailbox-container .left-column .aside-container .aside-container-title .aside-container-name {\n          padding-left: 30px; }\nmailbox .mailbox-container .left-column .aside-container .aside-nav-item {\n        display: block;\n        position: relative;\n        padding: 10px 0 10px 41px;\n        cursor: pointer;\n        clear: both;\n        text-transform: capitalize;\n        color: #858b94;\n        text-decoration: none;\n        width: 100%;\n        border-left: 3px solid transparent; }\nmailbox .mailbox-container .left-column .aside-container .aside-nav-item .label {\n          font-size: 1.1rem;\n          text-transform: none;\n          position: absolute;\n          top: 12px;\n          right: 5px;\n          border-radius: 20px;\n          padding: 1px 10px;\n          line-height: 15px; }\nmailbox .mailbox-container .left-column .aside-container .aside-nav-item .tag-name {\n          display: block;\n          max-width: 80%;\n          white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; }\nmailbox .mailbox-container .left-column .aside-container .aside-nav-item.router-link-active {\n          background-color: #eff1f2;\n          border-left-color: #689f38; }\nmailbox .mailbox-container .left-column .aside-container .aside-nav-item.router-link-active .label {\n            background-color: #689f38;\n            color: #fff; }\nmailbox .mailbox-container .left-column .aside-container .aside-nav-item:hover {\n          background-color: #eff1f2; }\nmailbox .mailbox-container .right-column {\n    background-color: #fff; }\nmailbox .mat-drawer-inner-container {\n    display: flex;\n    flex-direction: column; }\nmailbox .mat-drawer-inner-container .action-container {\n      margin-top: auto;\n      color: rgba(0, 0, 0, 0.5);\n      padding-left: 10px; }\nmailbox conversation {\n    margin-bottom: 15px; }\n"];



/***/ }),

/***/ "./src/app/ticketing/mailbox/mailbox.component.ts":
/*!********************************************************!*\
  !*** ./src/app/ticketing/mailbox/mailbox.component.ts ***!
  \********************************************************/
/*! exports provided: MailboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailboxComponent", function() { return MailboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mailbox_tags_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mailbox-tags.service */ "./src/app/ticketing/mailbox-tags.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/core/ui/breakpoints.service */ "./src/common/core/ui/breakpoints.service.ts");






var MailboxComponent = /** @class */ (function () {
    function MailboxComponent(mailboxTags, route, i18n, breakpoints) {
        this.mailboxTags = mailboxTags;
        this.route = route;
        this.i18n = i18n;
        this.breakpoints = breakpoints;
        this.leftColumnIsHidden = false;
    }
    MailboxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.leftColumnIsHidden = this.breakpoints.isMobile$.value;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.route.firstChild.params, this.route.params).subscribe(function (params) {
            // set active tag based on route params
            if (params.tag_id) {
                _this.mailboxTags.setActiveTag(params.tag_id);
            }
            // default to 'open' active tag if there are not route params
            if (!params.tag_id && !_this.mailboxTags.getActiveTagId()) {
                _this.mailboxTags.setActiveTag(null);
            }
        });
    };
    MailboxComponent.prototype.toggleLeftSidebar = function () {
        this.leftColumnIsHidden = !this.leftColumnIsHidden;
    };
    return MailboxComponent;
}());



/***/ }),

/***/ "./src/app/ticketing/ticket-floating-toolbar/ticket-floating-toolbar.component.ngfactory.js":
/*!**************************************************************************************************!*\
  !*** ./src/app/ticketing/ticket-floating-toolbar/ticket-floating-toolbar.component.ngfactory.js ***!
  \**************************************************************************************************/
/*! exports provided: Input_1, ɵangular_packages_core_core_b_2, Output_3, RenderType_TicketFloatingToolbarComponent, View_TicketFloatingToolbarComponent_0, View_TicketFloatingToolbarComponent_Host_0, TicketFloatingToolbarComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TicketFloatingToolbarComponent", function() { return RenderType_TicketFloatingToolbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TicketFloatingToolbarComponent_0", function() { return View_TicketFloatingToolbarComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TicketFloatingToolbarComponent_Host_0", function() { return View_TicketFloatingToolbarComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketFloatingToolbarComponentNgFactory", function() { return TicketFloatingToolbarComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input_1", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_2", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Output_3", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]; });

/* harmony import */ var _ticket_floating_toolbar_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket-floating-toolbar.component.scss.ngstyle */ "./src/app/ticketing/ticket-floating-toolbar/ticket-floating-toolbar.component.scss.ngstyle.js");
/* harmony import */ var _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/menu/typings/index.ngfactory */ "./node_modules/@angular/material/menu/typings/index.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _assign_ticket_dropdown_assign_ticket_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assign-ticket-dropdown/assign-ticket-dropdown.component.ngfactory */ "./src/app/ticketing/assign-ticket-dropdown/assign-ticket-dropdown.component.ngfactory.js");
/* harmony import */ var _assign_ticket_dropdown_assign_ticket_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assign-ticket-dropdown/assign-ticket-dropdown.component */ "./src/app/ticketing/assign-ticket-dropdown/assign-ticket-dropdown.component.ts");
/* harmony import */ var _common_auth_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/auth/users.service */ "./src/common/auth/users.service.ts");
/* harmony import */ var _common_auth_current_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/auth/current-user */ "./src/common/auth/current-user.ts");
/* harmony import */ var _tickets_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../tickets.service */ "./src/app/ticketing/tickets.service.ts");
/* harmony import */ var _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/core/ui/toast.service */ "./src/common/core/ui/toast.service.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _add_tag_dropdown_add_tag_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../add-tag-dropdown/add-tag-dropdown.component.ngfactory */ "./src/app/ticketing/add-tag-dropdown/add-tag-dropdown.component.ngfactory.js");
/* harmony import */ var _add_tag_dropdown_add_tag_dropdown_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../add-tag-dropdown/add-tag-dropdown.component */ "./src/app/ticketing/add-tag-dropdown/add-tag-dropdown.component.ts");
/* harmony import */ var _shared_tag_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/tag.service */ "./src/app/shared/tag.service.ts");
/* harmony import */ var _common_core_translations_translate_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../common/core/translations/translate.pipe */ "./src/common/core/translations/translate.pipe.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _ticket_floating_toolbar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ticket-floating-toolbar.component */ "./src/app/ticketing/ticket-floating-toolbar/ticket-floating-toolbar.component.ts");
/* harmony import */ var _mailbox_tags_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../mailbox-tags.service */ "./src/app/ticketing/mailbox-tags.service.ts");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





























var styles_TicketFloatingToolbarComponent = [_ticket_floating_toolbar_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"]];
var RenderType_TicketFloatingToolbarComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TicketFloatingToolbarComponent, data: {} });

function View_TicketFloatingToolbarComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "button", [["class", "mat-menu-item"], ["mat-menu-item", ""]], [[1, "role", 0], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.setStatusForSelectedTickets(_v.context.$implicit) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 180224, [[1, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["ɵf24"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, 0, ["\n            ", "\n        "]))], function (_ck, _v) { var currVal_6 = _v.context.$implicit.name; _ck(_v, 1, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).role; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._highlighted; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._triggersSubmenu; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2)._getTabIndex(); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).disabled.toString(); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).disabled || null); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_7 = (_v.context.$implicit.display_name || _v.context.$implicit.name); _ck(_v, 3, 0, currVal_7); }); }
function View_TicketFloatingToolbarComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 36, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 16777216, null, null, 3, "assign-ticket-dropdown", [], null, [[null, "assigned"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longpress" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).show() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("touchend" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4)._handleTouchend() !== false);
        ad = (pd_2 && ad);
    } if (("assigned" === en)) {
        var pd_3 = (_co.ticketsUpdated() !== false);
        ad = (pd_3 && ad);
    } return ad; }, _assign_ticket_dropdown_assign_ticket_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_AssignTicketDropdownComponent_0"], _assign_ticket_dropdown_assign_ticket_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_AssignTicketDropdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 114688, null, 0, _assign_ticket_dropdown_assign_ticket_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["AssignTicketDropdownComponent"], [_common_auth_users_service__WEBPACK_IMPORTED_MODULE_8__["Users"], _common_auth_current_user__WEBPACK_IMPORTED_MODULE_9__["CurrentUser"], _tickets_service__WEBPACK_IMPORTED_MODULE_10__["TicketsService"], _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_11__["Toast"]], { ticketIds: [0, "ticketIds"] }, { assigned: "assigned" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 147456, null, 0, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["AriaDescriber"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MAT_TOOLTIP_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"]], [2, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MAT_TOOLTIP_DEFAULT_OPTIONS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["HAMMER_LOADER"]]], { message: [0, "message"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](5, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 16777216, null, null, 5, "button", [["aria-haspopup", "true"], ["class", "toolbar-item no-style"]], [[1, "aria-expanded", 0]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8)._handleMousedown($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8)._handleClick($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 1196032, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MAT_MENU_SCROLL_STRATEGY"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenu"]], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"]], { menu: [0, "menu"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "flag-custom"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 8, "mat-menu", [["class", "status-menu"]], null, null, null, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatMenu_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["ɵf24"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenu"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 1294336, [["ticketStatusMenu", 4]], 2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MAT_MENU_DEFAULT_OPTIONS"]], { overlapTrigger: [0, "overlapTrigger"], panelClass: [1, "panelClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { items: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 2, { lazyContent: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_TicketFloatingToolbarComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](24, 16777216, null, null, 3, "add-tag-dropdown", [], null, [[null, "tagAdded"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longpress" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).show() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("touchend" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26)._handleTouchend() !== false);
        ad = (pd_2 && ad);
    } if (("tagAdded" === en)) {
        var pd_3 = (_co.ticketsUpdated() !== false);
        ad = (pd_3 && ad);
    } return ad; }, _add_tag_dropdown_add_tag_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_AddTagDropdownComponent_0"], _add_tag_dropdown_add_tag_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_AddTagDropdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 114688, null, 0, _add_tag_dropdown_add_tag_dropdown_component__WEBPACK_IMPORTED_MODULE_21__["AddTagDropdownComponent"], [_tickets_service__WEBPACK_IMPORTED_MODULE_10__["TicketsService"], _shared_tag_service__WEBPACK_IMPORTED_MODULE_22__["TagService"], _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_11__["Toast"]], { ticketIds: [0, "ticketIds"] }, { tagAdded: "tagAdded" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 147456, null, 0, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["AriaDescriber"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MAT_TOOLTIP_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"]], [2, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MAT_TOOLTIP_DEFAULT_OPTIONS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["HAMMER_LOADER"]]], { message: [0, "message"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](27, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 16777216, null, null, 6, "button", [["class", "no-style toolbar-item delete-tickets-button last"]], null, [[null, "click"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longpress" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).show() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("touchend" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30)._handleTouchend() !== false);
        ad = (pd_2 && ad);
    } if (("click" === en)) {
        var pd_3 = (_co.maybeDeleteSelectedTickets() !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 147456, null, 0, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["AriaDescriber"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MAT_TOOLTIP_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"]], [2, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MAT_TOOLTIP_DEFAULT_OPTIONS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["HAMMER_LOADER"]]], { message: [0, "message"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](31, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "delete-custom"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.selectedTickets; _ck(_v, 3, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 0), "Assign")); _ck(_v, 4, 0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16); _ck(_v, 8, 0, currVal_3); var currVal_6 = "flag-custom"; _ck(_v, 11, 0, currVal_6); var currVal_7 = false; var currVal_8 = "status-menu"; _ck(_v, 16, 0, currVal_7, currVal_8); var currVal_9 = _co.mailboxTags.getStatusTags(true); _ck(_v, 21, 0, currVal_9); var currVal_10 = _co.selectedTickets; _ck(_v, 25, 0, currVal_10); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 26, 0, _ck(_v, 27, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 0), "Add Tag")); _ck(_v, 26, 0, currVal_11); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 30, 0, _ck(_v, 31, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 0), "Delete")); _ck(_v, 30, 0, currVal_12); var currVal_15 = "delete-custom"; _ck(_v, 34, 0, currVal_15); }, function (_ck, _v) { var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).menuOpen || null); _ck(_v, 7, 0, currVal_2); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).inline; var currVal_5 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).color !== "warn")); _ck(_v, 10, 0, currVal_4, currVal_5); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).inline; var currVal_14 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).color !== "warn")); _ck(_v, 33, 0, currVal_13, currVal_14); }); }
function View_TicketFloatingToolbarComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _common_core_translations_translate_pipe__WEBPACK_IMPORTED_MODULE_23__["TransPipe"], [_common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_24__["Translations"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_TicketFloatingToolbarComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](3, 2)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.currentUser.hasPermissions(_ck(_v, 3, 0, "tickets.update", "replies.create")); _ck(_v, 2, 0, currVal_0); }, null); }
function View_TicketFloatingToolbarComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ticket-floating-toolbar", [], null, null, null, View_TicketFloatingToolbarComponent_0, RenderType_TicketFloatingToolbarComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _ticket_floating_toolbar_component__WEBPACK_IMPORTED_MODULE_25__["TicketFloatingToolbarComponent"], [_tickets_service__WEBPACK_IMPORTED_MODULE_10__["TicketsService"], _mailbox_tags_service__WEBPACK_IMPORTED_MODULE_26__["MailboxTagsService"], _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_11__["Toast"], _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_27__["Modal"], _common_auth_current_user__WEBPACK_IMPORTED_MODULE_9__["CurrentUser"]], null, null)], null, null); }
var TicketFloatingToolbarComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ticket-floating-toolbar", _ticket_floating_toolbar_component__WEBPACK_IMPORTED_MODULE_25__["TicketFloatingToolbarComponent"], View_TicketFloatingToolbarComponent_Host_0, { selectedTickets: "selectedTickets" }, { onTicketsUpdated: "onTicketsUpdated" }, []);



/***/ }),

/***/ "./src/app/ticketing/ticket-floating-toolbar/ticket-floating-toolbar.component.scss.ngstyle.js":
/*!*****************************************************************************************************!*\
  !*** ./src/app/ticketing/ticket-floating-toolbar/ticket-floating-toolbar.component.scss.ngstyle.js ***!
  \*****************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n\n\nticket-floating-toolbar {\n  display: flex;\n  position: fixed;\n  top: 78px;\n  background-color: #fff;\n  left: calc(50% - 117.5px);\n  min-width: 235px;\n  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  z-index: 10;\n  white-space: nowrap; }\nticket-floating-toolbar .toolbar-item {\n    position: relative;\n    cursor: pointer;\n    transition: all 0.2s ease-in-out;\n    padding: 15px;\n    border-right: 1px solid #E0E0E0;\n    line-height: inherit; }\nticket-floating-toolbar .toolbar-item.last {\n      border-bottom: none; }\nticket-floating-toolbar .toolbar-item:hover {\n      background-color: #e8f0fe; }\nticket-floating-toolbar .toolbar-item mat-icon {\n      color: rgba(0, 0, 0, 0.7);\n      vertical-align: bottom;\n      width: 28px;\n      height: 28px; }\nticket-floating-toolbar .toolbar-item .status-tag {\n      text-transform: capitalize; }\n"];



/***/ }),

/***/ "./src/app/ticketing/ticket-floating-toolbar/ticket-floating-toolbar.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/ticketing/ticket-floating-toolbar/ticket-floating-toolbar.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TicketFloatingToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketFloatingToolbarComponent", function() { return TicketFloatingToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tickets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tickets.service */ "./src/app/ticketing/tickets.service.ts");
/* harmony import */ var _mailbox_tags_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mailbox-tags.service */ "./src/app/ticketing/mailbox-tags.service.ts");
/* harmony import */ var _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/core/ui/toast.service */ "./src/common/core/ui/toast.service.ts");
/* harmony import */ var _common_auth_current_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/auth/current-user */ "./src/common/auth/current-user.ts");
/* harmony import */ var _common_core_ui_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/core/ui/confirm-modal/confirm-modal.component */ "./src/common/core/ui/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");







var TicketFloatingToolbarComponent = /** @class */ (function () {
    /**
     * TicketFloatingToolbarComponent Constructor.
     */
    function TicketFloatingToolbarComponent(tickets, mailboxTags, toast, modal, currentUser) {
        this.tickets = tickets;
        this.mailboxTags = mailboxTags;
        this.toast = toast;
        this.modal = modal;
        this.currentUser = currentUser;
        /**
         * Fired when selected tickets have been updated in any way.
         */
        this.onTicketsUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Delete tickets matching given ids.
     */
    TicketFloatingToolbarComponent.prototype.deleteTickets = function (ids) {
        var _this = this;
        this.tickets.deleteMultiple(ids).subscribe(function () {
            _this.ticketsUpdated();
            _this.toast.open('Tickets deleted');
        });
    };
    /**
     * Change status of all selected tickets.
     */
    TicketFloatingToolbarComponent.prototype.setStatusForSelectedTickets = function (tag) {
        var _this = this;
        this.tickets.changeMultipleTicketsStatus(this.selectedTickets.slice(), tag).subscribe(function () {
            _this.ticketsUpdated();
        });
    };
    /**
     * Delete selected tickets if user confirms it.
     */
    TicketFloatingToolbarComponent.prototype.maybeDeleteSelectedTickets = function () {
        var _this = this;
        this.modal.show(_common_core_ui_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalComponent"], {
            title: 'Delete Tickets',
            body: 'Are you sure you want to permanently delete selected tickets?',
            ok: 'Delete'
        }).afterClosed().subscribe(function (confirmed) {
            if (!confirmed)
                return;
            _this.deleteTickets(_this.selectedTickets.slice());
        });
    };
    /**
     * Called every time selected tickets are updated in any way.
     */
    TicketFloatingToolbarComponent.prototype.ticketsUpdated = function () {
        this.onTicketsUpdated.emit();
        this.mailboxTags.refresh();
    };
    return TicketFloatingToolbarComponent;
}());



/***/ }),

/***/ "./src/app/ticketing/ticket-search-dropdown/ticket-search-dropdown.component.ngfactory.js":
/*!************************************************************************************************!*\
  !*** ./src/app/ticketing/ticket-search-dropdown/ticket-search-dropdown.component.ngfactory.js ***!
  \************************************************************************************************/
/*! exports provided: Router_3, UrlSerializer_5, ChildrenOutletContexts_6, Location_7, LocationStrategy_8, Injector_9, ɵangular_packages_core_core_c_10, defineInjectable_11, NgModuleFactoryLoader_12, Compiler_13, RenderType_TicketSearchDropdownComponent, View_TicketSearchDropdownComponent_0, View_TicketSearchDropdownComponent_Host_0, TicketSearchDropdownComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TicketSearchDropdownComponent", function() { return RenderType_TicketSearchDropdownComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TicketSearchDropdownComponent_0", function() { return View_TicketSearchDropdownComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TicketSearchDropdownComponent_Host_0", function() { return View_TicketSearchDropdownComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketSearchDropdownComponentNgFactory", function() { return TicketSearchDropdownComponentNgFactory; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router_3", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlSerializer_5", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["UrlSerializer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChildrenOutletContexts_6", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ChildrenOutletContexts"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location_7", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationStrategy_8", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_1__["LocationStrategy"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector_9", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_c_10", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_core_core_c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineInjectable_11", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgModuleFactoryLoader_12", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModuleFactoryLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Compiler_13", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["Compiler"]; });

/* harmony import */ var _ticket_search_dropdown_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ticket-search-dropdown.component.scss.ngstyle */ "./src/app/ticketing/ticket-search-dropdown/ticket-search-dropdown.component.scss.ngstyle.js");
/* harmony import */ var _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/core/translations/translate.directive */ "./src/common/core/translations/translate.directive.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _node_modules_angular_material_core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/core/typings/index.ngfactory */ "./node_modules/@angular/material/core/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _node_modules_angular_material_autocomplete_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/autocomplete/typings/index.ngfactory */ "./node_modules/@angular/material/autocomplete/typings/index.ngfactory.js");
/* harmony import */ var _common_core_ui_custom_scrollbar_custom_scrollbar_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../common/core/ui/custom-scrollbar/custom-scrollbar.directive */ "./src/common/core/ui/custom-scrollbar/custom-scrollbar.directive.ts");
/* harmony import */ var _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../common/core/ui/breakpoints.service */ "./src/common/core/ui/breakpoints.service.ts");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _common_core_ui_custom_scrollbar_supports_native_scrollbar_styling__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../common/core/ui/custom-scrollbar/supports-native-scrollbar-styling */ "./src/common/core/ui/custom-scrollbar/supports-native-scrollbar-styling.ts");
/* harmony import */ var _tickets_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../tickets.service */ "./src/app/ticketing/tickets.service.ts");
/* harmony import */ var _common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../common/core/http/app-http-client.service */ "./src/common/core/http/app-http-client.service.ts");
/* harmony import */ var _ticket_search_dropdown_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./ticket-search-dropdown.component */ "./src/app/ticketing/ticket-search-dropdown/ticket-search-dropdown.component.ts");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

































var styles_TicketSearchDropdownComponent = [_ticket_search_dropdown_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_3__["styles"]];
var RenderType_TicketSearchDropdownComponent = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵcrt"]({ encapsulation: 2, styles: styles_TicketSearchDropdownComponent, data: {} });

function View_TicketSearchDropdownComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 2, "div", [["class", "header-item tickets-item"], ["trans", ""]], [[2, "active", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.setActiveCategory("tickets");
        var pd_0 = ($event.stopPropagation() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_5__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_6__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Conversations"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.activeCategory === "tickets"); _ck(_v, 0, 0, currVal_0); }); }
function View_TicketSearchDropdownComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 2, "div", [["class", "header-item users-item"], ["trans", ""]], [[2, "active", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        _co.setActiveCategory("users");
        var pd_0 = ($event.stopPropagation() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_5__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_6__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Users"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.activeCategory === "users"); _ck(_v, 0, 0, currVal_0); }); }
function View_TicketSearchDropdownComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 1, "div", [["class", "user"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigateToUser(_v.parent.context.$implicit.user.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.user.display_name; _ck(_v, 1, 0, currVal_0); }); }
function View_TicketSearchDropdownComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 11, "mat-option", [["class", "result mat-option"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1)._selectViaInteraction() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.navigateToTicket(_v.context.$implicit.id) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatOption_0"], _node_modules_angular_material_core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 8568832, [[1, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptgroup"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](3, 0, null, 0, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 0, null, 0, 1, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_TicketSearchDropdownComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["\n            "]))], function (_ck, _v) { var currVal_10 = _v.context.$implicit.user; _ck(_v, 10, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1)._getTabIndex(); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).selected; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).multiple; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).active; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).id; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1)._getAriaSelected(); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).disabled.toString(); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = _v.context.$implicit.subject; _ck(_v, 4, 0, currVal_8); var currVal_9 = (_v.context.$implicit.latest_reply && _v.context.$implicit.latest_reply.body); _ck(_v, 7, 0, currVal_9); }); }
function View_TicketSearchDropdownComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 4, "div", [["class", "results-panel tickets-panel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_TicketSearchDropdownComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.results.tickets.data; _ck(_v, 3, 0, currVal_0); }, null); }
function View_TicketSearchDropdownComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 13, "mat-option", [["class", "result media mat-option"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1)._selectViaInteraction() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.navigateToUser(_v.context.$implicit.id) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatOption_0"], _node_modules_angular_material_core_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatOption"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 8568832, [[1, 4]], 0, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_OPTION_PARENT_COMPONENT"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOptgroup"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](3, 0, null, 0, 0, "img", [["alt", "customer avatar"], ["class", "avatar"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](5, 0, null, 0, 7, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](7, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](8, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](10, 0, null, null, 1, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["\n            "]))], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1)._getTabIndex(); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).selected; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).multiple; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).active; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).id; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1)._getAriaSelected(); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).disabled.toString(); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵinlineInterpolate"](1, "", _v.context.$implicit.avatar, ""); _ck(_v, 3, 0, currVal_8); var currVal_9 = _v.context.$implicit.email; _ck(_v, 8, 0, currVal_9); var currVal_10 = _v.context.$implicit.display_name; _ck(_v, 11, 0, currVal_10); }); }
function View_TicketSearchDropdownComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 4, "div", [["class", "results-panel users-panel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_TicketSearchDropdownComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.results.users.data; _ck(_v, 3, 0, currVal_0); }, null); }
function View_TicketSearchDropdownComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 5, "div", [["class", "footer"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openSearchModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, null, 2, "span", [["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_5__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_6__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["View All Results"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n        "]))], null, null); }
function View_TicketSearchDropdownComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 19, "div", [["class", "results-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, null, 7, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_TicketSearchDropdownComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_TicketSearchDropdownComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_TicketSearchDropdownComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_TicketSearchDropdownComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_TicketSearchDropdownComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.results.tickets.total; _ck(_v, 5, 0, currVal_0); var currVal_1 = _co.results.users.total; _ck(_v, 8, 0, currVal_1); var currVal_2 = (_co.activeCategory === "tickets"); _ck(_v, 12, 0, currVal_2); var currVal_3 = (_co.activeCategory === "users"); _ck(_v, 15, 0, currVal_3); var currVal_4 = _co.searchQuery.value; _ck(_v, 18, 0, currVal_4); }, null); }
function View_TicketSearchDropdownComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 2, "div", [["class", "no-results"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_5__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_6__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n        No tickets or users matching your search query were found.\n    "]))], null, null); }
function View_TicketSearchDropdownComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 21, "form", [["class", "input-container"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 2).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 2).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.openSearchModal() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_bh"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](2, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](4, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](6, 16777216, [["input", 1]], null, 7, "input", [["class", "search-input"], ["placeholder", "Search..."], ["trans-placeholder", ""], ["type", "text"]], [[1, "autocomplete", 0], [1, "role", 0], [1, "aria-autocomplete", 0], [1, "aria-activedescendant", 0], [1, "aria-expanded", 0], [1, "aria-owns", 0], [1, "aria-haspopup", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "focusin"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 7)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 7).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 7)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 7)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("focusin" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8)._handleFocus() !== false);
        ad = (pd_4 && ad);
    } if (("blur" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8)._onTouched() !== false);
        ad = (pd_5 && ad);
    } if (("input" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8)._handleInput($event) !== false);
        ad = (pd_6 && ad);
    } if (("keydown" === en)) {
        var pd_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8)._handleKeydown($event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](8, 147456, null, 0, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_12__["Directionality"]], [8, null], [2, _angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ViewportRuler"]], { autocomplete: [0, "autocomplete"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteTrigger"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](10, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_k"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](13, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_5__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_6__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](15, 0, null, null, 5, "button", [["class", "search-button"], ["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](16, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_17__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](18, 0, null, 0, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "search"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](19, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](23, 0, null, null, 12, "mat-autocomplete", [["class", "agent-mailbox-autocomplete mat-autocomplete"], ["customScrollbar", ""]], null, null, null, _node_modules_angular_material_autocomplete_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_MatAutocomplete_0"], _node_modules_angular_material_autocomplete_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_MatAutocomplete"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](6144, null, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_OPTION_PARENT_COMPONENT"], null, [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocomplete"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](25, 4341760, null, 0, _common_core_ui_custom_scrollbar_custom_scrollbar_directive__WEBPACK_IMPORTED_MODULE_22__["CustomScrollbarDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"], _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_23__["BreakpointsService"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_24__["MutationObserverFactory"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_6__["Settings"], _common_core_ui_custom_scrollbar_supports_native_scrollbar_styling__WEBPACK_IMPORTED_MODULE_25__["SUPPORTS_NATIVE_SCROLLBAR_STYLING"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](26, 1097728, [["auto", 4]], 2, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocomplete"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MAT_AUTOCOMPLETE_DEFAULT_OPTIONS"]], { classList: [0, "classList"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵqud"](603979776, 1, { options: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵqud"](603979776, 2, { optionGroups: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_TicketSearchDropdownComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](31, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, 0, 1, null, View_TicketSearchDropdownComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](34, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 26); _ck(_v, 8, 0, currVal_21); var currVal_22 = _co.searchQuery; _ck(_v, 10, 0, currVal_22); var currVal_27 = "search"; _ck(_v, 19, 0, currVal_27); var currVal_28 = "agent-mailbox-autocomplete"; _ck(_v, 26, 0, currVal_28); var currVal_29 = _co.results; _ck(_v, 31, 0, currVal_29); var currVal_30 = (((_co.searchQuery.value && !_co.isLoading) && !_co.hasResults) && _co.loadedResultsAtLeastOnce); _ck(_v, 34, 0, currVal_30); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 4).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 4).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 4).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 4).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 4).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 4).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 4).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8).autocompleteAttribute; var currVal_8 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8).autocompleteDisabled ? null : "combobox"); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8).autocompleteDisabled ? null : "list"); var currVal_10 = ((_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8).panelOpen && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8).activeOption) ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8).activeOption.id : null); var currVal_11 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8).autocompleteDisabled ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8).panelOpen.toString()); var currVal_12 = ((_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8).autocompleteDisabled || !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8).panelOpen) ? null : ((_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8).autocomplete == null) ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8).autocomplete.id)); var currVal_13 = !_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 8).autocompleteDisabled; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 12).ngClassUntouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 12).ngClassTouched; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 12).ngClassPristine; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 12).ngClassDirty; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 12).ngClassValid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 12).ngClassInvalid; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 12).ngClassPending; _ck(_v, 6, 1, [currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20]); var currVal_23 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 16).disabled || null); var currVal_24 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 16)._animationMode === "NoopAnimations"); _ck(_v, 15, 0, currVal_23, currVal_24); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 19).inline; var currVal_26 = (((_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 19).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 19).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 19).color !== "warn")); _ck(_v, 18, 0, currVal_25, currVal_26); }); }
function View_TicketSearchDropdownComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 2, "ticket-search-dropdown", [], null, null, null, View_TicketSearchDropdownComponent_0, RenderType_TicketSearchDropdownComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵprd"](512, null, _tickets_service__WEBPACK_IMPORTED_MODULE_26__["TicketsService"], _tickets_service__WEBPACK_IMPORTED_MODULE_26__["TicketsService"], [_common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_27__["AppHttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](2, 114688, null, 0, _ticket_search_dropdown_component__WEBPACK_IMPORTED_MODULE_28__["TicketSearchDropdownComponent"], [_tickets_service__WEBPACK_IMPORTED_MODULE_26__["TicketsService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_29__["Modal"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var TicketSearchDropdownComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵccf"]("ticket-search-dropdown", _ticket_search_dropdown_component__WEBPACK_IMPORTED_MODULE_28__["TicketSearchDropdownComponent"], View_TicketSearchDropdownComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/ticketing/ticket-search-dropdown/ticket-search-dropdown.component.scss.ngstyle.js":
/*!***************************************************************************************************!*\
  !*** ./src/app/ticketing/ticket-search-dropdown/ticket-search-dropdown.component.scss.ngstyle.js ***!
  \***************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n\n\nticket-search-dropdown {\n  display: block;\n  position: relative;\n  max-width: 700px;\n  width: 100%; }\nticket-search-dropdown .input-container {\n    position: relative; }\nticket-search-dropdown .input-container .search-button {\n      position: absolute;\n      top: 2px;\n      left: 0; }\nticket-search-dropdown .input-container input {\n      padding-left: 36px; }\nticket-search-dropdown .input-container input::-webkit-input-placeholder {\n        color: #fff; }\nticket-search-dropdown .input-container input:-ms-input-placeholder {\n        color: #fff; }\nticket-search-dropdown .input-container input::-ms-input-placeholder {\n        color: #fff; }\nticket-search-dropdown .input-container input::placeholder {\n        color: #fff; }\n.agent-mailbox-autocomplete.mat-autocomplete-panel {\n  max-height: 750px;\n  background-color: #fff; }\n.agent-mailbox-autocomplete.mat-autocomplete-panel .header {\n    display: flex;\n    background-color: #FAFAFA; }\n.agent-mailbox-autocomplete.mat-autocomplete-panel .header .header-item {\n      width: 50%;\n      flex: 0 0 50%;\n      padding: 12px;\n      border-bottom: 2px solid #E0E0E0;\n      cursor: pointer; }\n.agent-mailbox-autocomplete.mat-autocomplete-panel .header .header-item.active {\n        border-color: #689f38; }\n.agent-mailbox-autocomplete.mat-autocomplete-panel .no-results {\n    font-size: 1.5rem;\n    text-align: center;\n    width: 100%;\n    padding: 10px; }\n.agent-mailbox-autocomplete.mat-autocomplete-panel .footer {\n    background-color: #FAFAFA;\n    text-align: center;\n    padding: 10px;\n    cursor: pointer; }\n.agent-mailbox-autocomplete.mat-autocomplete-panel .result {\n    border-bottom: 1px solid #E0E0E0;\n    padding: 10px 15px;\n    height: auto;\n    line-height: initial;\n    font-size: 1.4rem; }\n.agent-mailbox-autocomplete.mat-autocomplete-panel .result:hover {\n      background-color: #FAFAFA; }\n.agent-mailbox-autocomplete.mat-autocomplete-panel .title {\n    font-weight: 500;\n    color: rgba(0, 0, 0, 0.87);\n    overflow: hidden; }\n.agent-mailbox-autocomplete.mat-autocomplete-panel .body {\n    color: rgba(0, 0, 0, 0.54);\n    font-size: 1.3rem;\n    word-wrap: break-word;\n    white-space: -webkit-pre-wrap;\n    word-break: break-all;\n    white-space: normal; }\n.agent-mailbox-autocomplete.mat-autocomplete-panel .user {\n    margin-top: 5px;\n    font-size: 1.25rem;\n    font-weight: 500;\n    color: rgba(0, 0, 0, 0.54); }\n.agent-mailbox-autocomplete.mat-autocomplete-panel .media .mat-option-text {\n    display: flex;\n    align-items: center; }\n.agent-mailbox-autocomplete.mat-autocomplete-panel .media .mat-option-text img {\n      margin-right: 10px;\n      width: 50px;\n      height: 50px;\n      -o-object-fit: cover;\n         object-fit: cover; }\n"];



/***/ }),

/***/ "./src/app/ticketing/ticket-search-dropdown/ticket-search-dropdown.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/ticketing/ticket-search-dropdown/ticket-search-dropdown.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TicketSearchDropdownComponent, ɵ0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketSearchDropdownComponent", function() { return TicketSearchDropdownComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/* harmony import */ var _tickets_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tickets.service */ "./src/app/ticketing/tickets.service.ts");
/* harmony import */ var _agent_search_modal_agent_search_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../agent-search-modal/agent-search-modal.component */ "./src/app/ticketing/agent-search-modal/agent-search-modal.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");








var ɵ0 = {
    tickets: {},
    users: {},
    articles: {},
};
var EMPTY_RESPONSE = {
    data: ɵ0
};
var TicketSearchDropdownComponent = /** @class */ (function () {
    function TicketSearchDropdownComponent(tickets, router, modal) {
        this.tickets = tickets;
        this.router = router;
        this.modal = modal;
        /**
         * FormControl bound to search input.
         */
        this.searchQuery = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        /**
         * Controls for which category results are currently shown.
         */
        this.activeCategory = 'tickets';
        /**
         * Whether any results were found on last search.
         */
        this.hasResults = false;
        /**
         * Whether at least one search call to backend was made already.
         */
        this.loadedResultsAtLeastOnce = false;
        /**
         * Whether results are currently being loaded from backend.
         */
        this.isLoading = false;
        /**
         * Search results.
         */
        this.results = { tickets: { data: [] }, users: { data: [] } };
    }
    TicketSearchDropdownComponent.prototype.ngOnInit = function () {
        this.bindToQueryChangeEvent();
    };
    /**
     * Set specified category as active one.
     */
    TicketSearchDropdownComponent.prototype.setActiveCategory = function (name) {
        this.activeCategory = name;
    };
    /**
     * Open specified ticket route.
     */
    TicketSearchDropdownComponent.prototype.navigateToTicket = function (id) {
        this.reset();
        this.router.navigate(['/mailbox/tickets', 'tag', 1, 'ticket', id]);
    };
    /**
     * Open specified user route.
     */
    TicketSearchDropdownComponent.prototype.navigateToUser = function (id) {
        this.reset();
        this.router.navigate(['/mailbox/users', id]);
    };
    /**
     * Open search modal with current search query.
     */
    TicketSearchDropdownComponent.prototype.openSearchModal = function () {
        if (!this.searchQuery.value)
            return;
        var searchQuery = this.searchQuery.value;
        this.reset();
        this.modal.open(_agent_search_modal_agent_search_modal_component__WEBPACK_IMPORTED_MODULE_6__["AgentSearchModalComponent"], { query: searchQuery }, { panelClass: 'agent-search-modal-container' });
    };
    /**
     * Search for tickets and users matching specified query.
     */
    TicketSearchDropdownComponent.prototype.search = function (query) {
        var _this = this;
        if (query === void 0) { query = null; }
        if (!query)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(EMPTY_RESPONSE);
        this.isLoading = true;
        return this.tickets.search(query).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (results) {
            _this.hasResults = !!(results.data.tickets.total || results.data.users.total);
            _this.loadedResultsAtLeastOnce = true;
            _this.results = results.data;
            _this.isLoading = false;
            // switch to category that has any results
            if (!results.data.tickets.total) {
                _this.setActiveCategory('users');
            }
            else {
                _this.setActiveCategory('tickets');
            }
        }));
    };
    /**
     * Reset component to initial state.
     */
    TicketSearchDropdownComponent.prototype.reset = function () {
        this.searchQuery.setValue(null);
        this.hasResults = false;
        this.results = null;
        this.activeCategory = 'tickets';
        this.loadedResultsAtLeastOnce = false;
    };
    /**
     * Bind to search form control and search when user types into input.
     */
    TicketSearchDropdownComponent.prototype.bindToQueryChangeEvent = function () {
        var _this = this;
        this.searchQuery.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(250), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (query) { return _this.search(query); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(EMPTY_RESPONSE); })).subscribe();
    };
    return TicketSearchDropdownComponent;
}());




/***/ }),

/***/ "./src/app/ticketing/ticketing.module.ngfactory.js":
/*!*********************************************************!*\
  !*** ./src/app/ticketing/ticketing.module.ngfactory.js ***!
  \*********************************************************/
/*! exports provided: ɵEmptyOutletComponent_1, Router_159, ROUTES_165, RouterModule_171, ɵangular_packages_router_router_a_172, ɵEmptyOutletComponentNgFactory_2, MatDialogContainer_3, MatDialog_100, MAT_DIALOG_DEFAULT_OPTIONS_101, MAT_DIALOG_SCROLL_STRATEGY_102, MatDialogModule_103, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY_104, MatDialogContainerNgFactory_4, MatSnackBarContainer_7, SimpleSnackBar_9, MatSnackBarModule_184, MatSnackBarContainerNgFactory_8, SimpleSnackBarNgFactory_10, TooltipComponent_11, MAT_TOOLTIP_SCROLL_STRATEGY_112, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_113, MatTooltipModule_114, TooltipComponentNgFactory_12, ColorPickerComponent_31, ColorPickerService_135, ColorPickerModule_136, ColorPickerComponentNgFactory_32, NgLocalization_61, NgLocaleLocalization_62, ɵangular_packages_common_common_a_64, CommonModule_65, DOCUMENT_76, Location_96, LOCALE_ID_63, PLATFORM_ID_77, Injector_84, ComponentFactoryResolver_91, NgZone_94, ɵangular_packages_forms_forms_j_66, FormsModule_67, FormBuilder_68, ReactiveFormsModule_69, ɵangular_packages_forms_forms_bc_170, ɵangular_packages_common_http_http_h_70, HttpXsrfTokenExtractor_71, ɵangular_packages_common_http_http_f_72, HttpClientXsrfModule_73, HTTP_INTERCEPTORS_74, ɵangular_packages_common_http_http_g_75, ɵangular_packages_common_http_http_e_78, HttpClientModule_79, HttpClient_80, HttpHandler_81, ɵHttpInterceptingHandler_82, HttpBackend_83, HttpXhrBackend_85, XhrFactory_86, ɵangular_packages_common_http_http_d_87, Overlay_88, ScrollStrategyOptions_89, OverlayContainer_90, OverlayPositionBuilder_92, OverlayKeyboardDispatcher_93, OverlayModule_97, ɵc_98, ɵd_99, Directionality_95, BidiModule_174, MAT_MENU_SCROLL_STRATEGY_107, ɵd24_108, MatMenuModule_109, MutationObserverFactory_110, ObserversModule_111, HAMMER_GESTURE_CONFIG_115, DomSanitizer_123, HAMMER_LOADER_179, GestureConfig_116, MAT_HAMMER_OPTIONS_117, MatCommonModule_118, ErrorStateMatcher_131, MATERIAL_SANITY_CHECKS_178, MatRippleModule_180, MatPseudoCheckboxModule_194, MatOptionModule_195, BreakpointObserver_120, MatIconRegistry_122, MatIconModule_182, MatSortHeaderIntl_128, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY_129, MatSortModule_130, MatChipsModule_132, MAT_CHIPS_DEFAULT_OPTIONS_133, ENTER_134, MAT_SELECT_SCROLL_STRATEGY_137, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY_138, MatSelectModule_139, MatPaginatorIntl_140, MAT_PAGINATOR_INTL_PROVIDER_FACTORY_141, MatPaginatorModule_142, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_145, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_146, MatAutocompleteModule_147, PortalModule_175, PlatformModule_176, ScrollingModule_177, MatButtonModule_181, MatCheckboxModule_185, A11yModule_186, MatProgressBarModule_187, CdkTableModule_189, MatTableModule_190, MatFormFieldModule_196, MatSidenavModule_199, TicketingModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketingModuleNgFactory", function() { return TicketingModuleNgFactory; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵEmptyOutletComponent_1", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ɵEmptyOutletComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router_159", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROUTES_165", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ROUTES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterModule_171", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_router_router_a_172", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_router_router_a"]; });

/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵEmptyOutletComponentNgFactory_2", function() { return _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_1__["ɵEmptyOutletComponentNgFactory"]; });

/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainer_3", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialog_100", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS_101", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_102", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogModule_103", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY_104", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"]; });

/* harmony import */ var _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/material/dialog/typings/index.ngfactory */ "./node_modules/@angular/material/dialog/typings/index.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainerNgFactory_4", function() { return _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDialogContainerNgFactory"]; });

/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarContainer_7", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleSnackBar_9", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["SimpleSnackBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarModule_184", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"]; });

/* harmony import */ var _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/material/snack-bar/typings/index.ngfactory */ "./node_modules/@angular/material/snack-bar/typings/index.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarContainerNgFactory_8", function() { return _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarContainerNgFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleSnackBarNgFactory_10", function() { return _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["SimpleSnackBarNgFactory"]; });

/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent_11", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_112", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MAT_TOOLTIP_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_113", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTooltipModule_114", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"]; });

/* harmony import */ var _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@angular/material/tooltip/typings/index.ngfactory */ "./node_modules/@angular/material/tooltip/typings/index.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipComponentNgFactory_12", function() { return _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["TooltipComponentNgFactory"]; });

/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent_31", function() { return ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerService_135", function() { return ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerModule_136", function() { return ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"]; });

/* harmony import */ var _node_modules_ngx_color_picker_dist_ngx_color_picker_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../node_modules/ngx-color-picker/dist/ngx-color-picker.ngfactory */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponentNgFactory_32", function() { return _node_modules_ngx_color_picker_dist_ngx_color_picker_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ColorPickerComponentNgFactory"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgLocalization_61", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocalization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgLocaleLocalization_62", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocaleLocalization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_common_a_64", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_common_a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonModule_65", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOCUMENT_76", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location_96", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOCALE_ID_63", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_11__["LOCALE_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLATFORM_ID_77", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_11__["PLATFORM_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector_84", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentFactoryResolver_91", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ComponentFactoryResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgZone_94", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgZone"]; });

/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j_66", function() { return _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormsModule_67", function() { return _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormBuilder_68", function() { return _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule_69", function() { return _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc_170", function() { return _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_bc"]; });

/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h_70", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor_71", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f_72", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule_73", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS_74", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g_75", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e_78", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule_79", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClient_80", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpHandler_81", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler_82", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵHttpInterceptingHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpBackend_83", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend_85", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XhrFactory_86", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d_87", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"]; });

/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overlay_88", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions_89", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ScrollStrategyOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayContainer_90", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder_92", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayPositionBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher_93", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayKeyboardDispatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayModule_97", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵc_98", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ɵc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵd_99", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ɵd"]; });

/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Directionality_95", function() { return _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BidiModule_174", function() { return _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["BidiModule"]; });

/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_SCROLL_STRATEGY_107", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MAT_MENU_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵd24_108", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["ɵd24"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatMenuModule_109", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"]; });

/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MutationObserverFactory_110", function() { return _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["MutationObserverFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObserversModule_111", function() { return _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["ObserversModule"]; });

/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HAMMER_GESTURE_CONFIG_115", function() { return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HAMMER_GESTURE_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomSanitizer_123", function() { return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["DomSanitizer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HAMMER_LOADER_179", function() { return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HAMMER_LOADER"]; });

/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GestureConfig_116", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["GestureConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_HAMMER_OPTIONS_117", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MAT_HAMMER_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCommonModule_118", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatCommonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher_131", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["ErrorStateMatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS_178", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MATERIAL_SANITY_CHECKS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRippleModule_180", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule_194", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatPseudoCheckboxModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatOptionModule_195", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOptionModule"]; });

/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakpointObserver_120", function() { return _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["BreakpointObserver"]; });

/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatIconRegistry_122", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatIconModule_182", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"]; });

/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl_128", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortHeaderIntl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY_129", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MAT_SORT_HEADER_INTL_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSortModule_130", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"]; });

/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChipsModule_132", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS_133", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MAT_CHIPS_DEFAULT_OPTIONS"]; });

/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ENTER_134", function() { return _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__["ENTER"]; });

/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_137", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MAT_SELECT_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY_138", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSelectModule_139", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"]; });

/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl_140", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorIntl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY_141", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorModule_142", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"]; });

/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_145", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_146", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule_147", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MatAutocompleteModule"]; });

/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalModule_175", function() { return _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_28__["PortalModule"]; });

/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlatformModule_176", function() { return _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_29__["PlatformModule"]; });

/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollingModule_177", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__["ScrollingModule"]; });

/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatButtonModule_181", function() { return _angular_material_button__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"]; });

/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxModule_185", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__["MatCheckboxModule"]; });

/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "A11yModule_186", function() { return _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__["A11yModule"]; });

/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatProgressBarModule_187", function() { return _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"]; });

/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdkTableModule_189", function() { return _angular_cdk_table__WEBPACK_IMPORTED_MODULE_35__["CdkTableModule"]; });

/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTableModule_190", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]; });

/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldModule_196", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__["MatFormFieldModule"]; });

/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSidenavModule_199", function() { return _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_38__["MatSidenavModule"]; });

/* harmony import */ var _ticketing_module__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ticketing.module */ "./src/app/ticketing/ticketing.module.ts");
/* harmony import */ var _common_core_ui_confirm_modal_confirm_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../common/core/ui/confirm-modal/confirm-modal.component.ngfactory */ "./src/common/core/ui/confirm-modal/confirm-modal.component.ngfactory.js");
/* harmony import */ var _common_file_preview_text_preview_text_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../common/file-preview/text-preview/text-preview.component.ngfactory */ "./src/common/file-preview/text-preview/text-preview.component.ngfactory.js");
/* harmony import */ var _common_file_preview_video_preview_video_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../common/file-preview/video-preview/video-preview.component.ngfactory */ "./src/common/file-preview/video-preview/video-preview.component.ngfactory.js");
/* harmony import */ var _common_file_preview_image_preview_image_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../common/file-preview/image-preview/image-preview.component.ngfactory */ "./src/common/file-preview/image-preview/image-preview.component.ngfactory.js");
/* harmony import */ var _common_file_preview_pdf_preview_pdf_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../common/file-preview/pdf-preview/pdf-preview.component.ngfactory */ "./src/common/file-preview/pdf-preview/pdf-preview.component.ngfactory.js");
/* harmony import */ var _common_file_preview_default_preview_default_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../common/file-preview/default-preview/default-preview.component.ngfactory */ "./src/common/file-preview/default-preview/default-preview.component.ngfactory.js");
/* harmony import */ var _common_file_preview_audio_preview_audio_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../common/file-preview/audio-preview/audio-preview.component.ngfactory */ "./src/common/file-preview/audio-preview/audio-preview.component.ngfactory.js");
/* harmony import */ var _common_file_preview_google_docs_viewer_google_docs_viewer_component_ngfactory__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../common/file-preview/google-docs-viewer/google-docs-viewer.component.ngfactory */ "./src/common/file-preview/google-docs-viewer/google-docs-viewer.component.ngfactory.js");
/* harmony import */ var _shared_email_address_modal_email_address_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../shared/email-address-modal/email-address-modal.component.ngfactory */ "./src/app/shared/email-address-modal/email-address-modal.component.ngfactory.js");
/* harmony import */ var _shared_file_preview_overlay_file_preview_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../shared/file-preview-overlay/file-preview-overlay.component.ngfactory */ "./src/app/shared/file-preview-overlay/file-preview-overlay.component.ngfactory.js");
/* harmony import */ var _common_core_ui_color_picker_colorpicker_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../common/core/ui/color-picker/colorpicker-panel.component.ngfactory */ "./src/common/core/ui/color-picker/colorpicker-panel.component.ngfactory.js");
/* harmony import */ var _common_auth_find_users_modal_find_users_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../common/auth/find-users-modal/find-users-modal.component.ngfactory */ "./src/common/auth/find-users-modal/find-users-modal.component.ngfactory.js");
/* harmony import */ var _canned_replies_crupdate_canned_reply_modal_crupdate_canned_reply_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./canned-replies/crupdate-canned-reply-modal/crupdate-canned-reply-modal.component.ngfactory */ "./src/app/ticketing/canned-replies/crupdate-canned-reply-modal/crupdate-canned-reply-modal.component.ngfactory.js");
/* harmony import */ var _conversation_confirm_reply_delete_modal_confirm_reply_delete_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../conversation/confirm-reply-delete-modal/confirm-reply-delete-modal.component.ngfactory */ "./src/app/conversation/confirm-reply-delete-modal/confirm-reply-delete-modal.component.ngfactory.js");
/* harmony import */ var _add_note_modal_add_note_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./add-note-modal/add-note-modal.component.ngfactory */ "./src/app/ticketing/add-note-modal/add-note-modal.component.ngfactory.js");
/* harmony import */ var _conversation_conversation_modal_conversation_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../conversation/conversation-modal/conversation-modal.component.ngfactory */ "./src/app/conversation/conversation-modal/conversation-modal.component.ngfactory.js");
/* harmony import */ var _update_reply_modal_update_reply_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./update-reply-modal/update-reply-modal.component.ngfactory */ "./src/app/ticketing/update-reply-modal/update-reply-modal.component.ngfactory.js");
/* harmony import */ var _conversation_conversation_replies_show_original_reply_modal_show_original_reply_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../conversation/conversation-replies/show-original-reply-modal/show-original-reply-modal.component.ngfactory */ "./src/app/conversation/conversation-replies/show-original-reply-modal/show-original-reply-modal.component.ngfactory.js");
/* harmony import */ var _mailbox_mailbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./mailbox/mailbox.component.ngfactory */ "./src/app/ticketing/mailbox/mailbox.component.ngfactory.js");
/* harmony import */ var _agent_mailbox_ticket_list_agent_mailbox_ticket_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./agent-mailbox-ticket-list/agent-mailbox-ticket-list.component.ngfactory */ "./src/app/ticketing/agent-mailbox-ticket-list/agent-mailbox-ticket-list.component.ngfactory.js");
/* harmony import */ var _create_ticket_create_ticket_component_ngfactory__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./create-ticket/create-ticket.component.ngfactory */ "./src/app/ticketing/create-ticket/create-ticket.component.ngfactory.js");
/* harmony import */ var _conversation_conversation_component_ngfactory__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../conversation/conversation.component.ngfactory */ "./src/app/conversation/conversation.component.ngfactory.js");
/* harmony import */ var _user_profile_user_profile_component_ngfactory__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./user-profile/user-profile.component.ngfactory */ "./src/app/ticketing/user-profile/user-profile.component.ngfactory.js");
/* harmony import */ var _agent_search_modal_agent_search_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./agent-search-modal/agent-search-modal.component.ngfactory */ "./src/app/ticketing/agent-search-modal/agent-search-modal.component.ngfactory.js");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/* harmony import */ var _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../../common/core/ui/breakpoints.service */ "./src/common/core/ui/breakpoints.service.ts");
/* harmony import */ var _common_file_preview_available_previews__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../../common/file-preview/available-previews */ "./src/common/file-preview/available-previews.ts");
/* harmony import */ var _common_core_ui_overlay_panel_overlay_panel_service__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../../common/core/ui/overlay-panel/overlay-panel.service */ "./src/common/core/ui/overlay-panel/overlay-panel.service.ts");
/* harmony import */ var _canned_replies_canned_replies_service__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ./canned-replies/canned-replies.service */ "./src/app/ticketing/canned-replies/canned-replies.service.ts");
/* harmony import */ var _common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../../common/core/http/app-http-client.service */ "./src/common/core/http/app-http-client.service.ts");
/* harmony import */ var _ticket_attachments_service__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ./ticket-attachments.service */ "./src/app/ticketing/ticket-attachments.service.ts");
/* harmony import */ var _tickets_service__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ./tickets.service */ "./src/app/ticketing/tickets.service.ts");
/* harmony import */ var _conversation_draft_service__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ../conversation/draft.service */ "./src/app/conversation/draft.service.ts");
/* harmony import */ var _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ../../common/uploads/upload-queue/upload-queue.service */ "./src/common/uploads/upload-queue/upload-queue.service.ts");
/* harmony import */ var _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ../../common/core/ui/toast.service */ "./src/common/core/ui/toast.service.ts");
/* harmony import */ var _conversation_conversation_replies_service__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ../conversation/conversation-replies.service */ "./src/app/conversation/conversation-replies.service.ts");
/* harmony import */ var _conversation_after_reply_action_service__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ../conversation/after-reply-action.service */ "./src/app/conversation/after-reply-action.service.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _mailbox_tags_service__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ./mailbox-tags.service */ "./src/app/ticketing/mailbox-tags.service.ts");
/* harmony import */ var _common_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ../../common/core/services/local-storage.service */ "./src/common/core/services/local-storage.service.ts");
/* harmony import */ var _conversation_conversation_service__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ../conversation/conversation.service */ "./src/app/conversation/conversation.service.ts");
/* harmony import */ var _conversation_conversation_resolve_service__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ../conversation/conversation-resolve.service */ "./src/app/conversation/conversation-resolve.service.ts");
/* harmony import */ var _shared_tag_service__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ../shared/tag.service */ "./src/app/shared/tag.service.ts");
/* harmony import */ var _common_core_http_http_cache_client__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ../../common/core/http/http-cache-client */ "./src/common/core/http/http-cache-client.ts");
/* harmony import */ var _user_profile_user_profile_resolve_service__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ./user-profile/user-profile-resolve.service */ "./src/app/ticketing/user-profile/user-profile-resolve.service.ts");
/* harmony import */ var _common_auth_users_service__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ../../common/auth/users.service */ "./src/common/auth/users.service.ts");
/* harmony import */ var _common_core_ui_custom_scrollbar_custom_scrollbar_module__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ../../common/core/ui/custom-scrollbar/custom-scrollbar.module */ "./src/common/core/ui/custom-scrollbar/custom-scrollbar.module.ts");
/* harmony import */ var _common_core_ui_confirm_modal_confirm_modal_module__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ../../common/core/ui/confirm-modal/confirm-modal.module */ "./src/common/core/ui/confirm-modal/confirm-modal.module.ts");
/* harmony import */ var _common_core_translations_translations_module__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ../../common/core/translations/translations.module */ "./src/common/core/translations/translations.module.ts");
/* harmony import */ var _common_core_ui_ui_module__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ../../common/core/ui/ui.module */ "./src/common/core/ui/ui.module.ts");
/* harmony import */ var _common_file_preview_file_preview_module__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ../../common/file-preview/file-preview.module */ "./src/common/file-preview/file-preview.module.ts");
/* harmony import */ var _common_uploads_uploads_module__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ../../common/uploads/uploads.module */ "./src/common/uploads/uploads.module.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _common_core_http_http_module__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ../../common/core/http/http.module */ "./src/common/core/http/http.module.ts");
/* harmony import */ var _common_core_core_module__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ../../common/core/core.module */ "./src/common/core/core.module.ts");
/* harmony import */ var _common_text_editor_text_editor_module__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ../../common/text-editor/text-editor.module */ "./src/common/text-editor/text-editor.module.ts");
/* harmony import */ var _common_auth_find_users_modal_find_users_modal_module__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ../../common/auth/find-users-modal/find-users-modal.module */ "./src/common/auth/find-users-modal/find-users-modal.module.ts");
/* harmony import */ var _help_center_suggested_articles_dropdown_suggested_article_dropdown_module__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ../help-center/suggested-articles-dropdown/suggested-article-dropdown.module */ "./src/app/help-center/suggested-articles-dropdown/suggested-article-dropdown.module.ts");
/* harmony import */ var _conversation_conversation_module__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ../conversation/conversation.module */ "./src/app/conversation/conversation.module.ts");
/* harmony import */ var _common_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ../../common/guards/auth-guard.service */ "./src/common/guards/auth-guard.service.ts");
/* harmony import */ var _mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ./mailbox/mailbox.component */ "./src/app/ticketing/mailbox/mailbox.component.ts");
/* harmony import */ var _agent_mailbox_ticket_list_agent_mailbox_ticket_list_component__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./agent-mailbox-ticket-list/agent-mailbox-ticket-list.component */ "./src/app/ticketing/agent-mailbox-ticket-list/agent-mailbox-ticket-list.component.ts");
/* harmony import */ var _customer_mailbox_new_ticket_categories_resolve__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ../customer-mailbox/new-ticket-categories-resolve */ "./src/app/customer-mailbox/new-ticket-categories-resolve.ts");
/* harmony import */ var _create_ticket_create_ticket_component__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./create-ticket/create-ticket.component */ "./src/app/ticketing/create-ticket/create-ticket.component.ts");
/* harmony import */ var _conversation_conversation_component__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ../conversation/conversation.component */ "./src/app/conversation/conversation.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/ticketing/user-profile/user-profile.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

















































































































































var TicketingModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵcmf"](_ticketing_module__WEBPACK_IMPORTED_MODULE_39__["TicketingModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_1__["ɵEmptyOutletComponentNgFactory"], _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDialogContainerNgFactory"], _common_core_ui_confirm_modal_confirm_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_40__["ConfirmModalComponentNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["SimpleSnackBarNgFactory"], _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["TooltipComponentNgFactory"], _common_file_preview_text_preview_text_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_41__["TextPreviewComponentNgFactory"], _common_file_preview_video_preview_video_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_42__["VideoPreviewComponentNgFactory"], _common_file_preview_image_preview_image_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_43__["ImagePreviewComponentNgFactory"], _common_file_preview_pdf_preview_pdf_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_44__["PdfPreviewComponentNgFactory"], _common_file_preview_default_preview_default_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_45__["DefaultPreviewComponentNgFactory"], _common_file_preview_audio_preview_audio_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_46__["AudioPreviewComponentNgFactory"], _common_file_preview_google_docs_viewer_google_docs_viewer_component_ngfactory__WEBPACK_IMPORTED_MODULE_47__["GoogleDocsViewerComponentNgFactory"], _shared_email_address_modal_email_address_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_48__["EmailAddressModalComponentNgFactory"], _shared_file_preview_overlay_file_preview_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_49__["FilePreviewOverlayComponentNgFactory"], _node_modules_ngx_color_picker_dist_ngx_color_picker_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ColorPickerComponentNgFactory"], _common_core_ui_color_picker_colorpicker_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_50__["ColorpickerPanelComponentNgFactory"], _common_auth_find_users_modal_find_users_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_51__["FindUsersModalComponentNgFactory"], _canned_replies_crupdate_canned_reply_modal_crupdate_canned_reply_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_52__["CrupdateCannedReplyModalComponentNgFactory"], _conversation_confirm_reply_delete_modal_confirm_reply_delete_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_53__["ConfirmReplyDeleteModalComponentNgFactory"], _add_note_modal_add_note_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_54__["AddNoteModalComponentNgFactory"], _conversation_conversation_modal_conversation_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_55__["ConversationModalComponentNgFactory"], _update_reply_modal_update_reply_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_56__["UpdateReplyModalComponentNgFactory"], _conversation_conversation_replies_show_original_reply_modal_show_original_reply_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_57__["ShowOriginalReplyModalComponentNgFactory"], _mailbox_mailbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_58__["MailboxComponentNgFactory"], _agent_mailbox_ticket_list_agent_mailbox_ticket_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_59__["AgentMailboxTicketListComponentNgFactory"], _create_ticket_create_ticket_component_ngfactory__WEBPACK_IMPORTED_MODULE_60__["CreateTicketComponentNgFactory"], _conversation_conversation_component_ngfactory__WEBPACK_IMPORTED_MODULE_61__["ConversationComponentNgFactory"], _user_profile_user_profile_component_ngfactory__WEBPACK_IMPORTED_MODULE_62__["UserProfileComponentNgFactory"], _agent_search_modal_agent_search_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_63__["AgentSearchModalComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_11__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_64__["Modal"], _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_64__["Modal"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["ɵd24"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HAMMER_GESTURE_CONFIG"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["GestureConfig"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MAT_HAMMER_OPTIONS"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatCommonModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_65__["BreakpointsService"], _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_65__["BreakpointsService"], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["BreakpointObserver"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _common_file_preview_available_previews__WEBPACK_IMPORTED_MODULE_66__["AVAILABLE_PREVIEWS"], _common_file_preview_available_previews__WEBPACK_IMPORTED_MODULE_66__["DefaultPreviews"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortHeaderIntl"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MAT_SORT_HEADER_INTL_PROVIDER_FACTORY"], [[3, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortHeaderIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerService"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorIntl"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"], [[3, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _common_core_ui_overlay_panel_overlay_panel_service__WEBPACK_IMPORTED_MODULE_67__["OverlayPanel"], _common_core_ui_overlay_panel_overlay_panel_service__WEBPACK_IMPORTED_MODULE_67__["OverlayPanel"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_65__["BreakpointsService"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _canned_replies_canned_replies_service__WEBPACK_IMPORTED_MODULE_68__["CannedRepliesService"], _canned_replies_canned_replies_service__WEBPACK_IMPORTED_MODULE_68__["CannedRepliesService"], [_common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_69__["AppHttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _ticket_attachments_service__WEBPACK_IMPORTED_MODULE_70__["TicketAttachmentsService"], _ticket_attachments_service__WEBPACK_IMPORTED_MODULE_70__["TicketAttachmentsService"], [_common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_69__["AppHttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _tickets_service__WEBPACK_IMPORTED_MODULE_71__["TicketsService"], _tickets_service__WEBPACK_IMPORTED_MODULE_71__["TicketsService"], [_common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_69__["AppHttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _conversation_draft_service__WEBPACK_IMPORTED_MODULE_72__["Draft"], _conversation_draft_service__WEBPACK_IMPORTED_MODULE_72__["Draft"], [_ticket_attachments_service__WEBPACK_IMPORTED_MODULE_70__["TicketAttachmentsService"], _tickets_service__WEBPACK_IMPORTED_MODULE_71__["TicketsService"], _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_73__["UploadQueueService"], _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_74__["Toast"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _conversation_conversation_replies_service__WEBPACK_IMPORTED_MODULE_75__["ConversationReplies"], _conversation_conversation_replies_service__WEBPACK_IMPORTED_MODULE_75__["ConversationReplies"], [_tickets_service__WEBPACK_IMPORTED_MODULE_71__["TicketsService"], _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_74__["Toast"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _conversation_after_reply_action_service__WEBPACK_IMPORTED_MODULE_76__["AfterReplyAction"], _conversation_after_reply_action_service__WEBPACK_IMPORTED_MODULE_76__["AfterReplyAction"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_74__["Toast"], _tickets_service__WEBPACK_IMPORTED_MODULE_71__["TicketsService"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_77__["Settings"], _mailbox_tags_service__WEBPACK_IMPORTED_MODULE_78__["MailboxTagsService"], _common_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_79__["LocalStorage"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _conversation_conversation_service__WEBPACK_IMPORTED_MODULE_80__["Conversation"], _conversation_conversation_service__WEBPACK_IMPORTED_MODULE_80__["Conversation"], [_conversation_draft_service__WEBPACK_IMPORTED_MODULE_72__["Draft"], _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_74__["Toast"], _tickets_service__WEBPACK_IMPORTED_MODULE_71__["TicketsService"], _conversation_conversation_replies_service__WEBPACK_IMPORTED_MODULE_75__["ConversationReplies"], _conversation_after_reply_action_service__WEBPACK_IMPORTED_MODULE_76__["AfterReplyAction"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _conversation_conversation_resolve_service__WEBPACK_IMPORTED_MODULE_81__["TicketResolve"], _conversation_conversation_resolve_service__WEBPACK_IMPORTED_MODULE_81__["TicketResolve"], [_tickets_service__WEBPACK_IMPORTED_MODULE_71__["TicketsService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _shared_tag_service__WEBPACK_IMPORTED_MODULE_82__["TagService"], _shared_tag_service__WEBPACK_IMPORTED_MODULE_82__["TagService"], [_common_core_http_http_cache_client__WEBPACK_IMPORTED_MODULE_83__["HttpCacheClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _user_profile_user_profile_resolve_service__WEBPACK_IMPORTED_MODULE_84__["UserProfileResolve"], _user_profile_user_profile_resolve_service__WEBPACK_IMPORTED_MODULE_84__["UserProfileResolve"], [_tickets_service__WEBPACK_IMPORTED_MODULE_71__["TicketsService"], _common_auth_users_service__WEBPACK_IMPORTED_MODULE_85__["Users"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_core_ui_custom_scrollbar_custom_scrollbar_module__WEBPACK_IMPORTED_MODULE_86__["CustomScrollbarModule"], _common_core_ui_custom_scrollbar_custom_scrollbar_module__WEBPACK_IMPORTED_MODULE_86__["CustomScrollbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_28__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_28__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_29__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_29__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_core_ui_confirm_modal_confirm_modal_module__WEBPACK_IMPORTED_MODULE_87__["ConfirmModalModule"], _common_core_ui_confirm_modal_confirm_modal_module__WEBPACK_IMPORTED_MODULE_87__["ConfirmModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_core_translations_translations_module__WEBPACK_IMPORTED_MODULE_88__["TranslationsModule"], _common_core_translations_translations_module__WEBPACK_IMPORTED_MODULE_88__["TranslationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_core_ui_ui_module__WEBPACK_IMPORTED_MODULE_89__["UiModule"], _common_core_ui_ui_module__WEBPACK_IMPORTED_MODULE_89__["UiModule"], [_angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["DomSanitizer"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_77__["Settings"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_file_preview_file_preview_module__WEBPACK_IMPORTED_MODULE_90__["FilePreviewModule"], _common_file_preview_file_preview_module__WEBPACK_IMPORTED_MODULE_90__["FilePreviewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_uploads_uploads_module__WEBPACK_IMPORTED_MODULE_91__["UploadsModule"], _common_uploads_uploads_module__WEBPACK_IMPORTED_MODULE_91__["UploadsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_35__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_35__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _shared_module__WEBPACK_IMPORTED_MODULE_92__["SharedModule"], _shared_module__WEBPACK_IMPORTED_MODULE_92__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_core_http_http_module__WEBPACK_IMPORTED_MODULE_93__["HttpModule"], _common_core_http_http_module__WEBPACK_IMPORTED_MODULE_93__["HttpModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_core_core_module__WEBPACK_IMPORTED_MODULE_94__["CoreModule"], _common_core_core_module__WEBPACK_IMPORTED_MODULE_94__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_text_editor_text_editor_module__WEBPACK_IMPORTED_MODULE_95__["TextEditorModule"], _common_text_editor_text_editor_module__WEBPACK_IMPORTED_MODULE_95__["TextEditorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_auth_find_users_modal_find_users_modal_module__WEBPACK_IMPORTED_MODULE_96__["FindUsersModalModule"], _common_auth_find_users_modal_find_users_modal_module__WEBPACK_IMPORTED_MODULE_96__["FindUsersModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MatAutocompleteModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MatAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _help_center_suggested_articles_dropdown_suggested_article_dropdown_module__WEBPACK_IMPORTED_MODULE_97__["SuggestedArticleDropdownModule"], _help_center_suggested_articles_dropdown_suggested_article_dropdown_module__WEBPACK_IMPORTED_MODULE_97__["SuggestedArticleDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _conversation_conversation_module__WEBPACK_IMPORTED_MODULE_98__["ConversationModule"], _conversation_conversation_module__WEBPACK_IMPORTED_MODULE_98__["ConversationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_38__["MatSidenavModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_38__["MatSidenavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _ticketing_module__WEBPACK_IMPORTED_MODULE_39__["TicketingModule"], _ticketing_module__WEBPACK_IMPORTED_MODULE_39__["TicketingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MAT_CHIPS_DEFAULT_OPTIONS"], { separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__["ENTER"]] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_0__["ROUTES"], function () { return [[{ path: "", canActivateChild: [_common_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_99__["AuthGuard"]], children: [{ path: "", redirectTo: "tickets", pathMatch: "full" }, { path: "tickets", component: _mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_100__["MailboxComponent"], data: { permissions: ["tickets.view"] }, children: [{ path: "", component: _agent_mailbox_ticket_list_agent_mailbox_ticket_list_component__WEBPACK_IMPORTED_MODULE_101__["AgentMailboxTicketListComponent"] }] }, { path: "tickets/new", component: _mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_100__["MailboxComponent"], resolve: { categories: _customer_mailbox_new_ticket_categories_resolve__WEBPACK_IMPORTED_MODULE_102__["NewTicketCategoriesResolve"] }, data: { permissions: ["tickets.create"] }, children: [{ path: "", component: _create_ticket_create_ticket_component__WEBPACK_IMPORTED_MODULE_103__["CreateTicketComponent"] }] }, { path: "tickets/tag/:tag_id", component: _mailbox_mailbox_component__WEBPACK_IMPORTED_MODULE_100__["MailboxComponent"], data: { permissions: ["tickets.view"] }, children: [{ path: "", component: _agent_mailbox_ticket_list_agent_mailbox_ticket_list_component__WEBPACK_IMPORTED_MODULE_101__["AgentMailboxTicketListComponent"] }, { path: "ticket/:ticket_id", component: _conversation_conversation_component__WEBPACK_IMPORTED_MODULE_104__["ConversationComponent"], resolve: { ticket: _conversation_conversation_resolve_service__WEBPACK_IMPORTED_MODULE_81__["TicketResolve"] } }] }, { path: "users/:id", component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_105__["UserProfileComponent"], resolve: { user: _user_profile_user_profile_resolve_service__WEBPACK_IMPORTED_MODULE_84__["UserProfileResolve"] }, data: { permissions: ["users.view", "tickets.view", "tags.view"] } }] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/ticketing/ticketing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/ticketing/ticketing.module.ts ***!
  \***********************************************/
/*! exports provided: TicketingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketingModule", function() { return TicketingModule; });
var TicketingModule = /** @class */ (function () {
    function TicketingModule() {
    }
    return TicketingModule;
}());



/***/ }),

/***/ "./src/app/ticketing/user-profile/user-profile-resolve.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/ticketing/user-profile/user-profile-resolve.service.ts ***!
  \************************************************************************/
/*! exports provided: UserProfileResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileResolve", function() { return UserProfileResolve; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tickets_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tickets.service */ "./src/app/ticketing/tickets.service.ts");
/* harmony import */ var _common_auth_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/auth/users.service */ "./src/common/auth/users.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var UserProfileResolve = /** @class */ (function () {
    function UserProfileResolve(tickets, users, router) {
        this.tickets = tickets;
        this.users = users;
        this.router = router;
    }
    UserProfileResolve.prototype.resolve = function (route, state) {
        var _this = this;
        return this.users.get(route.params.id, { with: 'tags,purchase_codes,secondary_emails,details' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            if (response.user) {
                return response.user;
            }
            else {
                _this.router.navigate(['/mailbox']);
            }
        }));
    };
    return UserProfileResolve;
}());



/***/ }),

/***/ "./src/app/ticketing/user-profile/user-profile.component.ngfactory.js":
/*!****************************************************************************!*\
  !*** ./src/app/ticketing/user-profile/user-profile.component.ngfactory.js ***!
  \****************************************************************************/
/*! exports provided: ViewChild_1, ɵangular_packages_core_core_b_2, Query_3, Input_9, Output_10, ChangeDetectorRef_12, MatPaginator_4, _MatPaginatorBase_5, MatPaginatorBase_8, MatPaginatorIntl_11, mixinDisabled_6, mixinInitialized_7, View_MatPaginator_0_13, RenderType_MatPaginator_14, MatPaginatorNgFactory_15, ActivatedRoute_18, ActivatedRouteSnapshot_21, UrlSegmentGroup_25, Router_33, Observable_19, RenderType_UserProfileComponent, View_UserProfileComponent_0, View_UserProfileComponent_Host_0, UserProfileComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_UserProfileComponent", function() { return RenderType_UserProfileComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UserProfileComponent_0", function() { return View_UserProfileComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_UserProfileComponent_Host_0", function() { return View_UserProfileComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponentNgFactory", function() { return UserProfileComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewChild_1", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_2", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query_3", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input_9", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Output_10", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangeDetectorRef_12", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]; });

/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginator_4", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MatPaginatorBase_5", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["_MatPaginatorBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorBase_8", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl_11", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorIntl"]; });

/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinDisabled_6", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinInitialized_7", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinInitialized"]; });

/* harmony import */ var _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/paginator/typings/index.ngfactory */ "./node_modules/@angular/material/paginator/typings/index.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View_MatPaginator_0_13", function() { return _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatPaginator_0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderType_MatPaginator_14", function() { return _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatPaginator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorNgFactory_15", function() { return _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorNgFactory"]; });

/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRoute_18", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRouteSnapshot_21", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRouteSnapshot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlSegmentGroup_25", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_4__["UrlSegmentGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router_33", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]; });

/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable_19", function() { return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_5__["Observable"]; });

/* harmony import */ var _user_profile_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile.component.scss.ngstyle */ "./src/app/ticketing/user-profile/user-profile.component.scss.ngstyle.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../common/core/translations/translate.directive */ "./src/common/core/translations/translate.directive.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _common_core_ui_material_navbar_material_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../common/core/ui/material-navbar/material-navbar.component.ngfactory */ "./src/common/core/ui/material-navbar/material-navbar.component.ngfactory.js");
/* harmony import */ var _common_core_ui_material_navbar_material_navbar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../common/core/ui/material-navbar/material-navbar.component */ "./src/common/core/ui/material-navbar/material-navbar.component.ts");
/* harmony import */ var _common_auth_current_user__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../common/auth/current-user */ "./src/common/auth/current-user.ts");
/* harmony import */ var _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../common/core/ui/breakpoints.service */ "./src/common/core/ui/breakpoints.service.ts");
/* harmony import */ var _ticket_search_dropdown_ticket_search_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../ticket-search-dropdown/ticket-search-dropdown.component.ngfactory */ "./src/app/ticketing/ticket-search-dropdown/ticket-search-dropdown.component.ngfactory.js");
/* harmony import */ var _tickets_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../tickets.service */ "./src/app/ticketing/tickets.service.ts");
/* harmony import */ var _common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../common/core/http/app-http-client.service */ "./src/common/core/http/app-http-client.service.ts");
/* harmony import */ var _ticket_search_dropdown_ticket_search_dropdown_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../ticket-search-dropdown/ticket-search-dropdown.component */ "./src/app/ticketing/ticket-search-dropdown/ticket-search-dropdown.component.ts");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/* harmony import */ var _common_core_ui_custom_scrollbar_custom_scrollbar_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../common/core/ui/custom-scrollbar/custom-scrollbar.directive */ "./src/common/core/ui/custom-scrollbar/custom-scrollbar.directive.ts");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _common_core_ui_custom_scrollbar_supports_native_scrollbar_styling__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../common/core/ui/custom-scrollbar/supports-native-scrollbar-styling */ "./src/common/core/ui/custom-scrollbar/supports-native-scrollbar-styling.ts");
/* harmony import */ var _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/menu/typings/index.ngfactory */ "./node_modules/@angular/material/menu/typings/index.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_tags_manager_tags_manager_component_ngfactory__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../shared/tags-manager/tags-manager.component.ngfactory */ "./src/app/shared/tags-manager/tags-manager.component.ngfactory.js");
/* harmony import */ var _shared_tags_manager_tags_manager_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../shared/tags-manager/tags-manager.component */ "./src/app/shared/tags-manager/tags-manager.component.ts");
/* harmony import */ var _shared_tag_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../shared/tag.service */ "./src/app/shared/tag.service.ts");
/* harmony import */ var _shared_tickets_list_tickets_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../shared/tickets-list/tickets-list.component.ngfactory */ "./src/app/shared/tickets-list/tickets-list.component.ngfactory.js");
/* harmony import */ var _shared_tickets_list_tickets_list_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../shared/tickets-list/tickets-list.component */ "./src/app/shared/tickets-list/tickets-list.component.ts");
/* harmony import */ var _mailbox_tags_service__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../mailbox-tags.service */ "./src/app/ticketing/mailbox-tags.service.ts");
/* harmony import */ var _common_core_ui_no_results_message_no_results_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../common/core/ui/no-results-message/no-results-message.component.ngfactory */ "./src/common/core/ui/no-results-message/no-results-message.component.ngfactory.js");
/* harmony import */ var _common_core_ui_no_results_message_no_results_message_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../common/core/ui/no-results-message/no-results-message.component */ "./src/common/core/ui/no-results-message/no-results-message.component.ts");
/* harmony import */ var _ticket_floating_toolbar_ticket_floating_toolbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../ticket-floating-toolbar/ticket-floating-toolbar.component.ngfactory */ "./src/app/ticketing/ticket-floating-toolbar/ticket-floating-toolbar.component.ngfactory.js");
/* harmony import */ var _ticket_floating_toolbar_ticket_floating_toolbar_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../ticket-floating-toolbar/ticket-floating-toolbar.component */ "./src/app/ticketing/ticket-floating-toolbar/ticket-floating-toolbar.component.ts");
/* harmony import */ var _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../common/core/ui/toast.service */ "./src/common/core/ui/toast.service.ts");
/* harmony import */ var _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../common/core/ui/loading-indicator/loading-indicator.component.ngfactory */ "./src/common/core/ui/loading-indicator/loading-indicator.component.ngfactory.js");
/* harmony import */ var _common_core_ui_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../common/core/ui/loading-indicator/loading-indicator.component */ "./src/common/core/ui/loading-indicator/loading-indicator.component.ts");
/* harmony import */ var _common_admin_pagination_paginator_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../common/admin/pagination/paginator.service */ "./src/common/admin/pagination/paginator.service.ts");
/* harmony import */ var _user_profile_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./user-profile.component */ "./src/app/ticketing/user-profile/user-profile.component.ts");
/* harmony import */ var _common_auth_users_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../../common/auth/users.service */ "./src/common/auth/users.service.ts");
/* harmony import */ var _common_account_settings_avatar_validator__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../../common/account-settings/avatar-validator */ "./src/common/account-settings/avatar-validator.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
























































var styles_UserProfileComponent = [_user_profile_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_6__["styles"]];
var RenderType_UserProfileComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_UserProfileComponent, data: {} });

function View_UserProfileComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 16777216, null, null, 2, "mat-icon", [["aria-haspopup", "true"], ["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "edit"]], [[1, "aria-expanded", 0], [2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], [[null, "mousedown"], [null, "keydown"], [null, "click"]], function (_v, en, $event) { var ad = true; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._handleMousedown($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._handleClick($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 1196032, null, 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_9__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MAT_MENU_SCROLL_STRATEGY"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"]], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_10__["Directionality"]], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"]], { menu: [0, "menu"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 33); _ck(_v, 1, 0, currVal_3); var currVal_4 = "edit"; _ck(_v, 2, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).menuOpen || null); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).inline; var currVal_2 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 2).color !== "warn")); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_UserProfileComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "div", [["class", "details-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "div", [["class", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Envato"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "div", [["class", "value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.user.purchase_codes[0].envato_username; _ck(_v, 6, 0, currVal_0); }); }
function View_UserProfileComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "button", [["class", "remove-email-button"], ["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeEmail(_v.parent.context.$implicit.address) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n                                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "close"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n                                "]))], function (_ck, _v) { var currVal_4 = "close"; _ck(_v, 4, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).inline; var currVal_3 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "warn")); _ck(_v, 3, 0, currVal_2, currVal_3); }); }
function View_UserProfileComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "div", [["class", "email secondary-email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_UserProfileComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                            "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.detailsEditable; _ck(_v, 3, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.context.$implicit.address; _ck(_v, 6, 0, currVal_1); }); }
function View_UserProfileComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [["class", "details-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "button", [["class", "add-email-button"], ["color", "accent"], ["mat-flat-button", ""], ["trans", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openAddEmailModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_18__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_19__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_20__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Add Email"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "]))], function (_ck, _v) { var currVal_2 = "accent"; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4)._animationMode === "NoopAnimations"); _ck(_v, 2, 0, currVal_0, currVal_1); }); }
function View_UserProfileComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { matPaginator: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, { tagsManager: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 6, "material-navbar", [["menuPosition", "agent-mailbox"]], [[2, "transparent", null]], null, null, _common_core_ui_material_navbar_material_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_MaterialNavbar_0"], _common_core_ui_material_navbar_material_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_MaterialNavbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 114688, null, 0, _common_core_ui_material_navbar_material_navbar_component__WEBPACK_IMPORTED_MODULE_22__["MaterialNavbar"], [_common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_20__["Settings"], _common_auth_current_user__WEBPACK_IMPORTED_MODULE_23__["CurrentUser"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_24__["BreakpointsService"]], { menuPosition: [0, "menuPosition"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, 0, 2, "ticket-search-dropdown", [["class", "nav-searchbar"]], null, null, null, _ticket_search_dropdown_ticket_search_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_TicketSearchDropdownComponent_0"], _ticket_search_dropdown_ticket_search_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_TicketSearchDropdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _tickets_service__WEBPACK_IMPORTED_MODULE_26__["TicketsService"], _tickets_service__WEBPACK_IMPORTED_MODULE_26__["TicketsService"], [_common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_27__["AppHttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 114688, null, 0, _ticket_search_dropdown_ticket_search_dropdown_component__WEBPACK_IMPORTED_MODULE_28__["TicketSearchDropdownComponent"], [_tickets_service__WEBPACK_IMPORTED_MODULE_26__["TicketsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_29__["Modal"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 154, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](12, 0, null, null, 120, "aside", [["class", "sidebar"], ["customScrollbar", "lite"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](13, 4341760, null, 0, _common_core_ui_custom_scrollbar_custom_scrollbar_directive__WEBPACK_IMPORTED_MODULE_30__["CustomScrollbarDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_24__["BreakpointsService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_31__["MutationObserverFactory"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_20__["Settings"], _common_core_ui_custom_scrollbar_supports_native_scrollbar_styling__WEBPACK_IMPORTED_MODULE_32__["SUPPORTS_NATIVE_SCROLLBAR_STYLING"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 103, "div", [["class", "panel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 100, "div", [["class", "panel-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 38, "div", [["class", "user-info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 9, "div", [["class", "avatar-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 0, "img", [["alt", "user avatar"], ["class", "user-avatar"]], [[8, "src", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 4, "div", [["class", "hover-overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_UserProfileComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](32, 0, null, null, 15, "mat-menu", [["class", "update-avatar-menu"]], null, null, null, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_33__["View_MatMenu_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_33__["RenderType_MatMenu"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](33, 1294336, [["updateAvatarMenu", 4]], 2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MAT_MENU_DEFAULT_OPTIONS"]], { panelClass: [0, "panelClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { items: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 4, { lazyContent: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["ɵf24"], null, [_angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenu"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, 0, 3, "button", [["class", "upload-avatar-item mat-menu-item"], ["mat-menu-item", ""], ["trans", ""]], [[1, "role", 0], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.openAvatarUploadDialog() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_33__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_33__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](39, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_18__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_19__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_20__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](40, 180224, [[3, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["ɵf24"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Upload"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, 0, 3, "button", [["class", "delete-avatar-item mat-menu-item"], ["mat-menu-item", ""], ["trans", ""]], [[1, "role", 0], [2, "mat-menu-item-highlighted", null], [2, "mat-menu-item-submenu-trigger", null], [1, "tabindex", 0], [1, "aria-disabled", 0], [1, "disabled", 0]], [[null, "click"], [null, "mouseenter"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45)._checkDisabled($event) !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45)._handleMouseEnter() !== false);
        ad = (pd_1 && ad);
    } if (("click" === en)) {
        var pd_2 = (_co.deleteAvatar() !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_33__["View_MatMenuItem_0"], _node_modules_angular_material_menu_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_33__["RenderType_MatMenuItem"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](44, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_18__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_19__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_20__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 180224, [[3, 4]], 0, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_11__["FocusMonitor"], [2, _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["ɵf24"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Remove"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](49, 0, null, null, 7, "div", [["class", "names"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 1, "div", [["class", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](52, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](54, 0, null, null, 1, "div", [["class", "email primary-email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](55, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](59, 0, null, null, 57, "div", [["class", "user-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 15, "div", [["class", "details-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 2, "div", [["class", "name"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](64, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_18__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_19__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_20__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Details"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](67, 0, null, null, 8, "div", [["class", "input-container value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 5, "textarea", [["id", "details"], ["name", "details"]], [[8, "readOnly", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 70)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](70, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_34__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](72, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["ɵangular_packages_forms_forms_k"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_34__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](74, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 15, "div", [["class", "details-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](80, 0, null, null, 2, "div", [["class", "name"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](81, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_18__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_19__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_20__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Notes"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](84, 0, null, null, 8, "div", [["class", "input-container value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](86, 0, null, null, 5, "textarea", [["id", "notes"], ["name", "notes"]], [[8, "readOnly", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 87)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 87).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 87)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 87)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](87, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_34__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](89, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["ɵangular_packages_forms_forms_k"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_34__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](91, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_34__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_UserProfileComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](96, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](98, 0, null, null, 14, "div", [["class", "details-row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](100, 0, null, null, 2, "div", [["class", "name"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](101, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_18__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_19__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_20__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Emails"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](104, 0, null, null, 7, "div", [["class", "emails value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](106, 0, null, null, 1, "div", [["class", "email primary-email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](107, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_UserProfileComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](110, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_UserProfileComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](115, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](120, 0, null, null, 11, "div", [["class", "panel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](122, 0, null, null, 2, "div", [["class", "panel-header"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](123, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_18__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_19__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_20__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Tags"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](126, 0, null, null, 4, "div", [["class", "panel-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](128, 0, null, null, 1, "tags-manager", [], null, [[null, "onChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onChange" === en)) {
        var pd_0 = (_co.syncUserTags($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_tags_manager_tags_manager_component_ngfactory__WEBPACK_IMPORTED_MODULE_35__["View_TagsManagerComponent_0"], _shared_tags_manager_tags_manager_component_ngfactory__WEBPACK_IMPORTED_MODULE_35__["RenderType_TagsManagerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](129, 114688, [[2, 4]], 0, _shared_tags_manager_tags_manager_component__WEBPACK_IMPORTED_MODULE_36__["TagsManagerComponent"], [_shared_tag_service__WEBPACK_IMPORTED_MODULE_37__["TagService"]], { readonly: [0, "readonly"] }, { onChange: "onChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](134, 0, null, null, 29, "div", [["class", "tickets"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](136, 0, null, null, 15, "tickets-list", [], null, [[null, "ticketsSelected"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ticketsSelected" === en)) {
        var pd_0 = (_co.dataSource.setSelectedItems($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_tickets_list_tickets_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_38__["View_TicketsListComponent_0"], _shared_tickets_list_tickets_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_38__["RenderType_TicketsListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](137, 49152, null, 0, _shared_tickets_list_tickets_list_component__WEBPACK_IMPORTED_MODULE_39__["TicketsListComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_29__["Modal"], _mailbox_tags_service__WEBPACK_IMPORTED_MODULE_40__["MailboxTagsService"]], { openTicketInModal: [0, "openTicketInModal"], tickets: [1, "tickets"] }, { ticketsSelected: "ticketsSelected" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](139, 0, null, 0, 11, "no-results-message", [["class", "no-results-message"]], [[2, "hidden", null]], null, null, _common_core_ui_no_results_message_no_results_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_41__["View_NoResultsMessageComponent_0"], _common_core_ui_no_results_message_no_results_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_41__["RenderType_NoResultsMessageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](140, 49152, null, 0, _common_core_ui_no_results_message_no_results_message_component__WEBPACK_IMPORTED_MODULE_42__["NoResultsMessageComponent"], [_common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_20__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_17__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](143, 0, null, 0, 2, "span", [["primary-text", ""], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](144, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_18__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_19__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_20__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Nothing To Display."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](147, 0, null, 1, 2, "span", [["secondary-text", ""], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](148, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_18__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_19__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_20__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Seems like this user did not create any tickets yet."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](153, 0, null, null, 1, "ticket-floating-toolbar", [], [[2, "hidden", null]], [[null, "onTicketsUpdated"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onTicketsUpdated" === en)) {
        var pd_0 = (_co.refreshTicketsList() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _ticket_floating_toolbar_ticket_floating_toolbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_43__["View_TicketFloatingToolbarComponent_0"], _ticket_floating_toolbar_ticket_floating_toolbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_43__["RenderType_TicketFloatingToolbarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](154, 49152, null, 0, _ticket_floating_toolbar_ticket_floating_toolbar_component__WEBPACK_IMPORTED_MODULE_44__["TicketFloatingToolbarComponent"], [_tickets_service__WEBPACK_IMPORTED_MODULE_26__["TicketsService"], _mailbox_tags_service__WEBPACK_IMPORTED_MODULE_40__["MailboxTagsService"], _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_45__["Toast"], _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_29__["Modal"], _common_auth_current_user__WEBPACK_IMPORTED_MODULE_23__["CurrentUser"]], { selectedTickets: [0, "selectedTickets"] }, { onTicketsUpdated: "onTicketsUpdated" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](156, 0, null, null, 2, "mat-paginator", [["class", "mat-paginator"]], null, null, null, _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatPaginator_0"], _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatPaginator"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](157, 245760, [[1, 4]], 0, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { pageSize: [0, "pageSize"], pageSizeOptions: [1, "pageSizeOptions"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](158, 4), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](160, 0, null, null, 2, "loading-indicator", [["class", "overlay"]], [[40, "@visibility", 0]], null, null, _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_46__["View_LoadingIndicatorComponent_0"], _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_46__["RenderType_LoadingIndicatorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](161, 49152, null, 0, _common_core_ui_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_47__["LoadingIndicatorComponent"], [], { isVisible: [0, "isVisible"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_17__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = "agent-mailbox"; _ck(_v, 3, 0, currVal_1); _ck(_v, 7, 0); var currVal_3 = _co.detailsEditable; _ck(_v, 28, 0, currVal_3); var currVal_4 = "update-avatar-menu"; _ck(_v, 33, 0, currVal_4); var currVal_27 = _co.profile.controls["details"]; _ck(_v, 72, 0, currVal_27); var currVal_36 = _co.profile.controls["notes"]; _ck(_v, 89, 0, currVal_36); var currVal_37 = (_co.user.purchase_codes && ((_co.user.purchase_codes[0] == null) ? null : _co.user.purchase_codes[0].envato_username)); _ck(_v, 96, 0, currVal_37); var currVal_39 = _co.user.secondary_emails; _ck(_v, 110, 0, currVal_39); var currVal_40 = _co.detailsEditable; _ck(_v, 115, 0, currVal_40); var currVal_41 = !_co.detailsEditable; _ck(_v, 129, 0, currVal_41); var currVal_42 = true; var currVal_43 = _co.dataSource.getData(); _ck(_v, 137, 0, currVal_42, currVal_43); var currVal_46 = _co.dataSource.getSelectedItems(); _ck(_v, 154, 0, currVal_46); var currVal_47 = 15; var currVal_48 = _ck(_v, 158, 0, 5, 10, 15, 20); _ck(_v, 157, 0, currVal_47, currVal_48); var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 161, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 162).transform(_co.dataSource.loading$)); _ck(_v, 161, 0, currVal_50); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).transparent; _ck(_v, 2, 0, currVal_0); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵinlineInterpolate"](1, "", _co.user.avatar, ""); _ck(_v, 23, 0, currVal_2); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).role; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40)._highlighted; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40)._triggersSubmenu; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40)._getTabIndex(); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).disabled.toString(); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).disabled || null); _ck(_v, 38, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).role; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45)._highlighted; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45)._triggersSubmenu; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45)._getTabIndex(); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).disabled.toString(); var currVal_16 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 45).disabled || null); _ck(_v, 43, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16); var currVal_17 = _co.user.display_name; _ck(_v, 52, 0, currVal_17); var currVal_18 = _co.user.email; _ck(_v, 55, 0, currVal_18); var currVal_19 = !_co.detailsEditable; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 74).ngClassUntouched; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 74).ngClassTouched; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 74).ngClassPristine; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 74).ngClassDirty; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 74).ngClassValid; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 74).ngClassInvalid; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 74).ngClassPending; _ck(_v, 69, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_28 = !_co.detailsEditable; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 91).ngClassUntouched; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 91).ngClassTouched; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 91).ngClassPristine; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 91).ngClassDirty; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 91).ngClassValid; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 91).ngClassInvalid; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 91).ngClassPending; _ck(_v, 86, 0, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35); var currVal_38 = _co.user.email; _ck(_v, 107, 0, currVal_38); var currVal_44 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 139, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 141).transform(_co.dataSource.noResults$)); _ck(_v, 139, 0, currVal_44); var currVal_45 = !_co.dataSource.anyRowsSelected(); _ck(_v, 153, 0, currVal_45); var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 161).isVisible; _ck(_v, 160, 0, currVal_49); }); }
function View_UserProfileComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "user-profile", [], null, null, null, View_UserProfileComponent_0, RenderType_UserProfileComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _common_admin_pagination_paginator_service__WEBPACK_IMPORTED_MODULE_48__["Paginator"], _common_admin_pagination_paginator_service__WEBPACK_IMPORTED_MODULE_48__["Paginator"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_27__["AppHttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 114688, null, 0, _user_profile_component__WEBPACK_IMPORTED_MODULE_49__["UserProfileComponent"], [_common_auth_users_service__WEBPACK_IMPORTED_MODULE_50__["Users"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_45__["Toast"], _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_29__["Modal"], _common_account_settings_avatar_validator__WEBPACK_IMPORTED_MODULE_51__["AvatarValidator"], _common_auth_current_user__WEBPACK_IMPORTED_MODULE_23__["CurrentUser"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_20__["Settings"], _common_admin_pagination_paginator_service__WEBPACK_IMPORTED_MODULE_48__["Paginator"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var UserProfileComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("user-profile", _user_profile_component__WEBPACK_IMPORTED_MODULE_49__["UserProfileComponent"], View_UserProfileComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/ticketing/user-profile/user-profile.component.scss.ngstyle.js":
/*!*******************************************************************************!*\
  !*** ./src/app/ticketing/user-profile/user-profile.component.scss.ngstyle.js ***!
  \*******************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n\n\nuser-profile {\n  display: block;\n  width: 100%;\n  height: 100%;\n  background-color: #FAFAFA; }\nuser-profile .content {\n    display: flex;\n    padding: 25px;\n    width: 100%;\n    height: calc(100vh - 70px);\n    overflow: hidden; }\nuser-profile .content .sidebar {\n      flex: 0 0 320px;\n      width: 320px;\n      margin-right: 15px;\n      height: 100%;\n      overflow: auto; }\nuser-profile .content .sidebar .panel {\n        margin-bottom: 15px;\n        background-color: #fff;\n        border: 1px solid #E0E0E0;\n        padding: 10px; }\nuser-profile .content .sidebar .panel .panel-header {\n          padding: 5px; }\nuser-profile .content .sidebar .user-info {\n        display: flex;\n        align-items: center;\n        border-bottom: 1px solid #E0E0E0;\n        margin-bottom: 15px;\n        padding-bottom: 15px; }\nuser-profile .content .sidebar .user-info .avatar-container {\n          width: 65px;\n          height: 65px;\n          position: relative; }\nuser-profile .content .sidebar .user-info .avatar-container:hover .hover-overlay {\n            display: flex; }\nuser-profile .content .sidebar .user-info .avatar-container.disabled {\n            cursor: default; }\nuser-profile .content .sidebar .user-info .avatar-container.disabled > .hover-overlay {\n              display: none; }\nuser-profile .content .sidebar .user-info .avatar-container .hover-overlay {\n            display: none;\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            width: 100%;\n            height: 100%;\n            background-color: rgba(255, 255, 255, 0.5);\n            justify-content: center;\n            align-items: center;\n            cursor: pointer; }\nuser-profile .content .sidebar .user-info .avatar-container .hover-overlay > mat-icon {\n              width: 34px;\n              height: 34px;\n              color: rgba(0, 0, 0, 0.54); }\nuser-profile .content .sidebar .user-info .avatar-container > img {\n            width: 100%;\n            height: 100%;\n            -o-object-fit: cover;\n               object-fit: cover; }\nuser-profile .content .sidebar .user-info > .names {\n          margin-left: 10px; }\nuser-profile .content .sidebar .user-info > .names > .name {\n            font-size: 1.5rem; }\nuser-profile .content .sidebar .user-info > .names > .email {\n            color: rgba(0, 0, 0, 0.54); }\nuser-profile .content .sidebar .user-details {\n        margin-top: 15px; }\nuser-profile .content .sidebar .user-details .details-row {\n          display: flex;\n          align-items: center;\n          margin-bottom: 15px; }\nuser-profile .content .sidebar .user-details .details-row .name {\n            flex: 0 0 30%;\n            max-width: 40px;\n            margin-right: 20px; }\nuser-profile .content .sidebar .user-details .details-row .value {\n            flex: 1 1 auto; }\nuser-profile .content .sidebar .user-details .details-row .value.input-container {\n              height: auto; }\nuser-profile .content .sidebar .user-details .details-row .value.input-container > textarea {\n                height: auto;\n                padding: 5px;\n                border-radius: 3px; }\nuser-profile .content .sidebar .user-details .emails .primary-email {\n          font-weight: 500; }\nuser-profile .content .sidebar .user-details .emails .secondary-email {\n          margin-top: 8px; }\nuser-profile .content .tickets {\n      flex: 1 1 auto;\n      overflow: auto;\n      height: 100%;\n      border: 1px solid #E0E0E0; }\nuser-profile .content .tickets tickets-list {\n        min-height: calc(100% - 41px);\n        max-width: 100%; }\nuser-profile .content .tickets .mat-paginator {\n        border-top: 1px solid #E0E0E0;\n        background-color: #fff;\n        overflow: hidden; }\nuser-profile .content .tickets .mat-paginator .mat-paginator-container {\n          height: 40px;\n          min-height: 40px; }\n"];



/***/ }),

/***/ "./src/app/ticketing/user-profile/user-profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/ticketing/user-profile/user-profile.component.ts ***!
  \******************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/models/User */ "./src/app/shared/models/User.ts");
/* harmony import */ var _shared_models_Email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/Email */ "./src/app/shared/models/Email.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_admin_pagination_paginator_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/admin/pagination/paginator.service */ "./src/common/admin/pagination/paginator.service.ts");
/* harmony import */ var _common_auth_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/auth/users.service */ "./src/common/auth/users.service.ts");
/* harmony import */ var _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/core/ui/toast.service */ "./src/common/core/ui/toast.service.ts");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/* harmony import */ var _common_auth_current_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/auth/current-user */ "./src/common/auth/current-user.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_email_address_modal_email_address_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/email-address-modal/email-address-modal.component */ "./src/app/shared/email-address-modal/email-address-modal.component.ts");
/* harmony import */ var _common_uploads_utils_open_upload_window__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/uploads/utils/open-upload-window */ "./src/common/uploads/utils/open-upload-window.ts");
/* harmony import */ var _common_uploads_upload_input_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/uploads/upload-input-config */ "./src/common/uploads/upload-input-config.ts");
/* harmony import */ var _common_account_settings_avatar_validator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/account-settings/avatar-validator */ "./src/common/account-settings/avatar-validator.ts");
/* harmony import */ var _shared_tags_manager_tags_manager_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/tags-manager/tags-manager.component */ "./src/app/shared/tags-manager/tags-manager.component.ts");
/* harmony import */ var _common_admin_data_table_data_paginated_data_table_source__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../common/admin/data-table/data/paginated-data-table-source */ "./src/common/admin/data-table/data/paginated-data-table-source.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



















var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(users, route, toast, modal, avatarValidator, currentUser, settings, paginator) {
        this.users = users;
        this.route = route;
        this.toast = toast;
        this.modal = modal;
        this.avatarValidator = avatarValidator;
        this.currentUser = currentUser;
        this.settings = settings;
        this.paginator = paginator;
        this.user = new _shared_models_User__WEBPACK_IMPORTED_MODULE_2__["User"]({ purchase_codes: [] });
        this.detailsEditable = false;
        this.profile = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            details: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            notes: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
        });
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.hydrateProfile(data.user);
            _this.bindFormControls();
            _this.createDataSource();
        });
        this.detailsEditable = this.currentUser.hasPermission('users.update');
    };
    UserProfileComponent.prototype.openAddEmailModal = function () {
        var _this = this;
        this.modal.show(_shared_email_address_modal_email_address_modal_component__WEBPACK_IMPORTED_MODULE_12__["EmailAddressModalComponent"], { userId: this.user.id }).afterClosed().subscribe(function (email) {
            _this.user.secondary_emails.push(new _shared_models_Email__WEBPACK_IMPORTED_MODULE_3__["Email"]({ address: email }));
        });
    };
    UserProfileComponent.prototype.removeEmail = function (emailAddress) {
        var _this = this;
        this.users.removeEmail(this.user.id, { emails: [emailAddress] }).subscribe(function () {
            var index = _this.user.secondary_emails.findIndex(function (email) { return email.address === emailAddress; });
            _this.user.secondary_emails.splice(index, 1);
        });
    };
    UserProfileComponent.prototype.openAvatarUploadDialog = function () {
        var _this = this;
        Object(_common_uploads_utils_open_upload_window__WEBPACK_IMPORTED_MODULE_13__["openUploadWindow"])({ types: [_common_uploads_upload_input_config__WEBPACK_IMPORTED_MODULE_14__["UploadInputTypes"].image] }).then(function (files) {
            if (_this.avatarValidator.validateWithToast(files[0]).failed)
                return;
            _this.users.uploadAvatar(_this.user.id, files).subscribe(function (user) {
                _this.user.avatar = user.avatar;
                _this.currentUser.set('avatar', user.avatar);
                _this.toast.open('Avatar updated');
            }, function (response) {
                var key = Object.keys(response.messages)[0];
                _this.toast.open(response.messages[key]);
            });
        });
    };
    UserProfileComponent.prototype.deleteAvatar = function () {
        var _this = this;
        this.users.deleteAvatar(this.user.id).subscribe(function (user) {
            _this.user.avatar = user.avatar;
            _this.toast.open('Avatar removed.');
        });
    };
    UserProfileComponent.prototype.syncUserTags = function (tags) {
        this.users.syncTags(this.user.id, { tags: tags }).subscribe();
    };
    UserProfileComponent.prototype.refreshTicketsList = function () {
        this.dataSource.reset();
    };
    UserProfileComponent.prototype.hydrateProfile = function (user) {
        this.user = user;
        this.tagsManager.selectedTags = user.tags.map(function (tag) { return tag.name; });
        if (!user.details)
            return;
        this.profile.setValue({
            details: user.details.details,
            notes: user.details.notes
        });
    };
    UserProfileComponent.prototype.createDataSource = function () {
        this.dataSource = new _common_admin_data_table_data_paginated_data_table_source__WEBPACK_IMPORTED_MODULE_17__["PaginatedDataTableSource"]({
            uri: 'tickets',
            staticParams: { user_id: this.user.id },
            dataPaginator: this.paginator,
            matPaginator: this.matPaginator,
        }).init();
    };
    UserProfileComponent.prototype.bindFormControls = function () {
        var _this = this;
        this.profile.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(600), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["distinctUntilChanged"])())
            .subscribe(function (payload) {
            _this.users.updateDetails(_this.user.id, payload).subscribe(function () {
                _this.toast.open('Updated user details.');
            });
        });
    };
    return UserProfileComponent;
}());



/***/ })

}]);