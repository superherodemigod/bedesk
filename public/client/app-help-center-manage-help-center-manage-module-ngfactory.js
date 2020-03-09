(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-help-center-manage-help-center-manage-module-ngfactory"],{

/***/ "./src/app/help-center/manage/articles-list/articles-list-filters/articles-list-filters.component.ngfactory.js":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/help-center/manage/articles-list/articles-list-filters/articles-list-filters.component.ngfactory.js ***!
  \*********************************************************************************************************************/
/*! exports provided: ViewChild_1, ɵangular_packages_core_core_b_2, Query_3, Output_6, RenderType_ArticlesListFiltersComponent, View_ArticlesListFiltersComponent_0, View_ArticlesListFiltersComponent_Host_0, ArticlesListFiltersComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ArticlesListFiltersComponent", function() { return RenderType_ArticlesListFiltersComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ArticlesListFiltersComponent_0", function() { return View_ArticlesListFiltersComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ArticlesListFiltersComponent_Host_0", function() { return View_ArticlesListFiltersComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesListFiltersComponentNgFactory", function() { return ArticlesListFiltersComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewChild_1", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_2", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query_3", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Output_6", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]; });

/* harmony import */ var _articles_list_filters_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articles-list-filters.component.scss.ngstyle */ "./src/app/help-center/manage/articles-list/articles-list-filters/articles-list-filters.component.scss.ngstyle.js");
/* harmony import */ var _categories_manager_categories_manager_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../categories-manager/categories-manager.component.ngfactory */ "./src/app/help-center/manage/categories-manager/categories-manager.component.ngfactory.js");
/* harmony import */ var _categories_manager_categories_manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../categories-manager/categories-manager.component */ "./src/app/help-center/manage/categories-manager/categories-manager.component.ts");
/* harmony import */ var _shared_categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/categories.service */ "./src/app/help-center/shared/categories.service.ts");
/* harmony import */ var _common_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../common/core/services/local-storage.service */ "./src/common/core/services/local-storage.service.ts");
/* harmony import */ var _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../common/core/translations/translate.directive */ "./src/common/core/translations/translate.directive.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _shared_tags_manager_tags_manager_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/tags-manager/tags-manager.component.ngfactory */ "./src/app/shared/tags-manager/tags-manager.component.ngfactory.js");
/* harmony import */ var _shared_tags_manager_tags_manager_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/tags-manager/tags-manager.component */ "./src/app/shared/tags-manager/tags-manager.component.ts");
/* harmony import */ var _shared_tag_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/tag.service */ "./src/app/shared/tag.service.ts");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _articles_list_filters_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./articles-list-filters.component */ "./src/app/help-center/manage/articles-list/articles-list-filters/articles-list-filters.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



















var styles_ArticlesListFiltersComponent = [_articles_list_filters_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"]];
var RenderType_ArticlesListFiltersComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ArticlesListFiltersComponent, data: {} });

function View_ArticlesListFiltersComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { tagsManager: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, { categoriesManager: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 42, "div", [["class", "filters-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 1, "categories-manager", [["class", "article-categories-filter"]], null, [[null, "onChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onChange" === en)) {
        var pd_0 = (_co.applyFilter("categories", $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _categories_manager_categories_manager_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CategoriesManagerComponent_0"], _categories_manager_categories_manager_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CategoriesManagerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 114688, [[2, 4]], 0, _categories_manager_categories_manager_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesManagerComponent"], [_shared_categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"], _common_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorage"]], null, { onChange: "onChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 11, "div", [["class", "panel tags-filter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 2, "div", [["class", "panel-header"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_6__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_7__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_8__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Tags"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 4, "div", [["class", "panel-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 1, "tags-manager", [], null, [[null, "onChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onChange" === en)) {
        var pd_0 = (_co.applyFilter("tags", $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_tags_manager_tags_manager_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_TagsManagerComponent_0"], _shared_tags_manager_tags_manager_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_TagsManagerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 114688, [[1, 4]], 0, _shared_tags_manager_tags_manager_component__WEBPACK_IMPORTED_MODULE_10__["TagsManagerComponent"], [_shared_tag_service__WEBPACK_IMPORTED_MODULE_11__["TagService"]], null, { onChange: "onChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 23, "div", [["class", "panel article-type-filter"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](22, 0, null, null, 2, "div", [["class", "panel-header"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](23, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_6__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_7__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_8__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Article Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 16, "div", [["class", "panel-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 3, "button", [["class", "filter-button all-filter-button"], ["color", "gray"], ["mat-flat-button", ""], ["trans", ""]], [[2, "active", null], [8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.applyFilter("draft", null) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_6__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_7__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_8__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["All"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 3, "button", [["class", "filter-button not-draft-filter-button"], ["color", "gray"], ["mat-flat-button", ""], ["trans", ""]], [[2, "active", null], [8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.applyFilter("draft", 0) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_6__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_7__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_8__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Published"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 3, "button", [["class", "filter-button draft-filter-button"], ["color", "gray"], ["mat-flat-button", ""], ["trans", ""]], [[2, "active", null], [8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.applyFilter("draft", 1) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](39, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_6__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_7__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_8__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](40, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_14__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_15__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Draft"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { _ck(_v, 5, 0); _ck(_v, 16, 0); var currVal_3 = "gray"; _ck(_v, 30, 0, currVal_3); var currVal_7 = "gray"; _ck(_v, 35, 0, currVal_7); var currVal_11 = "gray"; _ck(_v, 40, 0, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.filterIsActive("draft", null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).disabled || null); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30)._animationMode === "NoopAnimations"); _ck(_v, 28, 0, currVal_0, currVal_1, currVal_2); var currVal_4 = _co.filterIsActive("draft", 0); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35).disabled || null); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 35)._animationMode === "NoopAnimations"); _ck(_v, 33, 0, currVal_4, currVal_5, currVal_6); var currVal_8 = _co.filterIsActive("draft", 1); var currVal_9 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).disabled || null); var currVal_10 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40)._animationMode === "NoopAnimations"); _ck(_v, 38, 0, currVal_8, currVal_9, currVal_10); }); }
function View_ArticlesListFiltersComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "articles-list-filters", [], null, null, null, View_ArticlesListFiltersComponent_0, RenderType_ArticlesListFiltersComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _articles_list_filters_component__WEBPACK_IMPORTED_MODULE_17__["ArticlesListFiltersComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ArticlesListFiltersComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("articles-list-filters", _articles_list_filters_component__WEBPACK_IMPORTED_MODULE_17__["ArticlesListFiltersComponent"], View_ArticlesListFiltersComponent_Host_0, {}, { onChange: "onChange" }, []);



/***/ }),

/***/ "./src/app/help-center/manage/articles-list/articles-list-filters/articles-list-filters.component.scss.ngstyle.js":
/*!************************************************************************************************************************!*\
  !*** ./src/app/help-center/manage/articles-list/articles-list-filters/articles-list-filters.component.scss.ngstyle.js ***!
  \************************************************************************************************************************/
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
var styles = ["\n\n\narticles-list-filters {\n  display: block;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  position: relative;\n  z-index: 1; }\narticles-list-filters .filters-list {\n    padding: 15px; }\n"];



/***/ }),

/***/ "./src/app/help-center/manage/articles-list/articles-list-filters/articles-list-filters.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/help-center/manage/articles-list/articles-list-filters/articles-list-filters.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ArticlesListFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesListFiltersComponent", function() { return ArticlesListFiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _categories_manager_categories_manager_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../categories-manager/categories-manager.component */ "./src/app/help-center/manage/categories-manager/categories-manager.component.ts");
/* harmony import */ var _shared_tags_manager_tags_manager_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/tags-manager/tags-manager.component */ "./src/app/shared/tags-manager/tags-manager.component.ts");



var ArticlesListFiltersComponent = /** @class */ (function () {
    function ArticlesListFiltersComponent() {
        /**
         * Fired when any of the filters onChange.
         */
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Available filters for articles list.
         */
        this.filters = { draft: null };
    }
    ArticlesListFiltersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesManager.refresh().then(function () { return _this.onChange.emit(); });
    };
    /**
     * Get current articles list filters.
     */
    ArticlesListFiltersComponent.prototype.getFilters = function () {
        return Object.assign(this.filters, { categories: this.categoriesManager.getExactSelectedCategories() });
    };
    /**
     * Apply specified filter to articles list.
     */
    ArticlesListFiltersComponent.prototype.applyFilter = function (name, value) {
        this.filters[name] = value;
        this.onChange.emit();
    };
    /**
     * Check whether specified filter is currently applied to articles list.
     */
    ArticlesListFiltersComponent.prototype.filterIsActive = function (name, value) {
        if (value !== undefined) {
            return this.filters[name] === value;
        }
        else {
            return this.filters[name] || this.filters[name] === 0;
        }
    };
    return ArticlesListFiltersComponent;
}());



/***/ }),

/***/ "./src/app/help-center/manage/articles-list/articles-list.component.ngfactory.js":
/*!***************************************************************************************!*\
  !*** ./src/app/help-center/manage/articles-list/articles-list.component.ngfactory.js ***!
  \***************************************************************************************/
/*! exports provided: ViewChild_1, ɵangular_packages_core_core_b_2, Query_3, Injector_13, ɵangular_packages_core_core_c_14, defineInjectable_15, NgModuleFactoryLoader_16, Compiler_17, Router_7, UrlSerializer_9, ChildrenOutletContexts_10, Location_11, LocationStrategy_12, ViewportScroller_21, RenderType_ArticlesListComponent, View_ArticlesListComponent_0, View_ArticlesListComponent_Host_0, ArticlesListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ArticlesListComponent", function() { return RenderType_ArticlesListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ArticlesListComponent_0", function() { return View_ArticlesListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ArticlesListComponent_Host_0", function() { return View_ArticlesListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesListComponentNgFactory", function() { return ArticlesListComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewChild_1", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_2", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query_3", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector_13", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_c_14", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineInjectable_15", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgModuleFactoryLoader_16", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Compiler_17", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"]; });

/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router_7", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlSerializer_9", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["UrlSerializer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChildrenOutletContexts_10", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location_11", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationStrategy_12", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewportScroller_21", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"]; });

/* harmony import */ var _articles_list_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articles-list.component.scss.ngstyle */ "./src/app/help-center/manage/articles-list/articles-list.component.scss.ngstyle.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _common_core_ui_no_results_message_no_results_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../common/core/ui/no-results-message/no-results-message.component.ngfactory */ "./src/common/core/ui/no-results-message/no-results-message.component.ngfactory.js");
/* harmony import */ var _common_core_ui_no_results_message_no_results_message_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../common/core/ui/no-results-message/no-results-message.component */ "./src/common/core/ui/no-results-message/no-results-message.component.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../common/core/translations/translate.directive */ "./src/common/core/translations/translate.directive.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../common/core/ui/loading-indicator/loading-indicator.component.ngfactory */ "./src/common/core/ui/loading-indicator/loading-indicator.component.ngfactory.js");
/* harmony import */ var _common_core_ui_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../common/core/ui/loading-indicator/loading-indicator.component */ "./src/common/core/ui/loading-indicator/loading-indicator.component.ts");
/* harmony import */ var _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/paginator/typings/index.ngfactory */ "./node_modules/@angular/material/paginator/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _common_core_translations_translate_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../common/core/translations/translate.pipe */ "./src/common/core/translations/translate.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_articles_order_select_articles_order_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../shared/articles-order-select/articles-order-select.component.ngfactory */ "./src/app/help-center/shared/articles-order-select/articles-order-select.component.ngfactory.js");
/* harmony import */ var _shared_articles_order_select_articles_order_select_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../shared/articles-order-select/articles-order-select.component */ "./src/app/help-center/shared/articles-order-select/articles-order-select.component.ts");
/* harmony import */ var _articles_list_filters_articles_list_filters_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./articles-list-filters/articles-list-filters.component.ngfactory */ "./src/app/help-center/manage/articles-list/articles-list-filters/articles-list-filters.component.ngfactory.js");
/* harmony import */ var _articles_list_filters_articles_list_filters_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./articles-list-filters/articles-list-filters.component */ "./src/app/help-center/manage/articles-list/articles-list-filters/articles-list-filters.component.ts");
/* harmony import */ var _common_admin_pagination_paginator_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../common/admin/pagination/paginator.service */ "./src/common/admin/pagination/paginator.service.ts");
/* harmony import */ var _common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../common/core/http/app-http-client.service */ "./src/common/core/http/app-http-client.service.ts");
/* harmony import */ var _articles_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./articles-list.component */ "./src/app/help-center/manage/articles-list/articles-list.component.ts");
/* harmony import */ var _shared_help_center_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../shared/help-center.service */ "./src/app/help-center/shared/help-center.service.ts");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




































var styles_ArticlesListComponent = [_articles_list_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_3__["styles"]];
var RenderType_ArticlesListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ArticlesListComponent, data: {} });

function View_ArticlesListComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "parent-category"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", " > "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.parent.context.$implicit.categories[0].parent.name; _ck(_v, 1, 0, currVal_0); }); }
function View_ArticlesListComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "div", [["class", "article-categories"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ArticlesListComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "span", [["class", "category"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "]))], function (_ck, _v) { var currVal_0 = ((_v.parent.context.$implicit.categories[0] == null) ? null : _v.parent.context.$implicit.categories[0].parent); _ck(_v, 3, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.parent.context.$implicit.categories[0].name; _ck(_v, 6, 0, currVal_1); }); }
function View_ArticlesListComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "tag-label large"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 1, 0, currVal_0); }); }
function View_ArticlesListComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 24, "div", [["class", "articles-list-item"]], [[2, "draft", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.goToUpdateArticle(_v.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 16777216, null, null, 6, "button", [["class", "no-style delete-article-button"]], null, [[null, "click"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longpress" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).show() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("touchend" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._handleTouchend() !== false);
        ad = (pd_2 && ad);
    } if (("click" === en)) {
        _co.maybeDeleteArticle(_v.context.$implicit);
        var pd_3 = ($event.stopPropagation() !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 147456, null, 0, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["AriaDescriber"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_8__["FocusMonitor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MAT_TOOLTIP_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_9__["Directionality"]], [2, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MAT_TOOLTIP_DEFAULT_OPTIONS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["HAMMER_LOADER"]]], { message: [0, "message"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](4, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "mat-icon", [["class", "size-20 mat-icon notranslate"], ["role", "img"], ["svgIcon", "delete"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ArticlesListComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 1, "div", [["class", "article-title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](14, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 1, "div", [["class", "article-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](17, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 4, "div", [["class", "article-tags"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ArticlesListComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 3, 0, _ck(_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 0), "Delete Article")); _ck(_v, 3, 0, currVal_1); var currVal_4 = "delete"; _ck(_v, 7, 0, currVal_4); var currVal_5 = _v.context.$implicit.categories.length; _ck(_v, 11, 0, currVal_5); var currVal_8 = _v.context.$implicit.tags; _ck(_v, 22, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.draft; _ck(_v, 0, 0, currVal_0); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).inline; var currVal_3 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).color !== "warn")); _ck(_v, 6, 0, currVal_2, currVal_3); var currVal_6 = _v.context.$implicit.title; _ck(_v, 14, 0, currVal_6); var currVal_7 = _v.context.$implicit.body; _ck(_v, 17, 0, currVal_7); }); }
function View_ArticlesListComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 10, "no-results-message", [["class", "no-results-message"]], null, null, null, _common_core_ui_no_results_message_no_results_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_NoResultsMessageComponent_0"], _common_core_ui_no_results_message_no_results_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_NoResultsMessageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _common_core_ui_no_results_message_no_results_message_component__WEBPACK_IMPORTED_MODULE_14__["NoResultsMessageComponent"], [_common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 2, "span", [["primary-text", ""], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_16__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_17__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Could not find any articles."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 1, 2, "span", [["secondary-text", ""], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_16__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_17__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Try to make article files less specific."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "]))], null, null); }
function View_ArticlesListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, [[3, 0], ["scrollContainer", 1]], null, 20, "div", [["class", "articles-list-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 9, "div", [["class", "articles-list"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ArticlesListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_ArticlesListComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 2, "loading-indicator", [["class", "overlay"]], [[40, "@visibility", 0]], null, null, _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_LoadingIndicatorComponent_0"], _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_LoadingIndicatorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 49152, null, 0, _common_core_ui_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_19__["LoadingIndicatorComponent"], [], { isVisible: [0, "isVisible"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 2, "mat-paginator", [["class", "mat-paginator"]], null, [[null, "page"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("page" === en)) {
        var pd_0 = (_co.matPaginatorPageChanged($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_MatPaginator_0"], _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_MatPaginator"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 245760, null, 0, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginator"], [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__["MatPaginatorIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { pageIndex: [0, "pageIndex"], length: [1, "length"], pageSize: [2, "pageSize"], pageSizeOptions: [3, "pageSizeOptions"] }, { page: "page" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](19, 4), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "articles-list"; var currVal_1 = _co.selectedLayout; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = _v.context.ngIf.data; _ck(_v, 6, 0, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).transform(_co.paginator.noResults$)); _ck(_v, 9, 0, currVal_3); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 14, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).transform(_co.paginator.loading$)); _ck(_v, 14, 0, currVal_5); var currVal_6 = (_v.context.ngIf.current_page - 1); var currVal_7 = _v.context.ngIf.total; var currVal_8 = 15; var currVal_9 = _ck(_v, 19, 0, 5, 10, 15, 20); _ck(_v, 18, 0, currVal_6, currVal_7, currVal_8, currVal_9); }, function (_ck, _v) { var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).isVisible; _ck(_v, 13, 0, currVal_4); }); }
function View_ArticlesListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _common_core_translations_translate_pipe__WEBPACK_IMPORTED_MODULE_22__["TransPipe"], [_common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_17__["Translations"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { articlesOrder: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, { articlesListFilters: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 3, { scrollContainer: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 69, "div", [["class", "action-bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 26, "div", [["class", "nav"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 7, "a", [["class", "nav-item home-nav-item"], ["routerLinkActive", "router-link-active"], ["trans", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 671744, [[5, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](13, { exact: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_16__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_17__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 6, "a", [["class", "nav-item categories-nav-item"], ["routerLinkActive", "router-link-active"], ["trans", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 671744, [[7, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 7, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_16__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_17__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Categories"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 6, "a", [["class", "nav-item articles-nav-item"], ["routerLinkActive", "router-link-active"], ["trans", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 671744, [[9, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 8, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 9, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_16__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_17__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Articles"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](34, 0, null, null, 38, "div", [["class", "actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](36, 0, null, null, 12, "div", [["class", "search-bar input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 6, "input", [["class", "articles-search-input"], ["placeholder", "Search"], ["trans-placeholder", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](39, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](41, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_k"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](44, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_16__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_17__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "search"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](47, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 9, "div", [["class", "action change-layout-action"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 2, "button", [["class", "no-style grid-layout-button"]], [[2, "active", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setLayout("grid") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](53, 0, null, null, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "view-comfy"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](54, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 2, "button", [["class", "no-style list-layout-button"]], [[2, "active", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.setLayout("list") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](57, 0, null, null, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "view-list"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](58, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 1, "articles-order-select", [["class", "action"]], null, [[null, "onChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onChange" === en)) {
        var pd_0 = (_co.reloadArticles() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_articles_order_select_articles_order_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_ArticlesOrderSelectComponent_0"], _shared_articles_order_select_articles_order_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_ArticlesOrderSelectComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](62, 114688, [[1, 4]], 0, _shared_articles_order_select_articles_order_select_component__WEBPACK_IMPORTED_MODULE_25__["ArticlesOrderSelectComponent"], [_common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__["Settings"]], null, { onChange: "onChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 7, "a", [["class", "new-article-button new-item-button"], ["routerLink", "new"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 65).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](65, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "add"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](67, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, [" "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 2, "span", [["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](70, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_16__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_17__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Create New Article"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, null, 8, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](77, 0, null, null, 1, "articles-list-filters", [], null, [[null, "onChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onChange" === en)) {
        var pd_0 = (_co.reloadArticles() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _articles_list_filters_articles_list_filters_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["View_ArticlesListFiltersComponent_0"], _articles_list_filters_articles_list_filters_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["RenderType_ArticlesListFiltersComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](78, 114688, [[2, 4]], 0, _articles_list_filters_articles_list_filters_component__WEBPACK_IMPORTED_MODULE_27__["ArticlesListFiltersComponent"], [], null, { onChange: "onChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_ArticlesListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](81, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/help-center"; _ck(_v, 9, 0, currVal_2); var currVal_3 = _ck(_v, 13, 0, true); var currVal_4 = "router-link-active"; _ck(_v, 10, 0, currVal_3, currVal_4); var currVal_7 = "/help-center/manage/categories"; _ck(_v, 18, 0, currVal_7); var currVal_8 = "router-link-active"; _ck(_v, 19, 0, currVal_8); var currVal_11 = "/help-center/manage/articles"; _ck(_v, 26, 0, currVal_11); var currVal_12 = "router-link-active"; _ck(_v, 27, 0, currVal_12); var currVal_20 = _co.searchQuery; _ck(_v, 41, 0, currVal_20); var currVal_23 = "search"; _ck(_v, 47, 0, currVal_23); var currVal_27 = "view-comfy"; _ck(_v, 54, 0, currVal_27); var currVal_31 = "view-list"; _ck(_v, 58, 0, currVal_31); _ck(_v, 62, 0); var currVal_34 = "new"; _ck(_v, 65, 0, currVal_34); var currVal_37 = "add"; _ck(_v, 67, 0, currVal_37); _ck(_v, 78, 0); var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 81, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).transform(_co.paginator.pagination$)); _ck(_v, 81, 0, currVal_38); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).href; _ck(_v, 8, 0, currVal_0, currVal_1); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).target; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).href; _ck(_v, 17, 0, currVal_5, currVal_6); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).target; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).href; _ck(_v, 25, 0, currVal_9, currVal_10); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 43).ngClassUntouched; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 43).ngClassTouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 43).ngClassPristine; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 43).ngClassDirty; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 43).ngClassValid; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 43).ngClassInvalid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 43).ngClassPending; _ck(_v, 38, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).inline; var currVal_22 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 47).color !== "warn")); _ck(_v, 46, 0, currVal_21, currVal_22); var currVal_24 = _co.isLayoutActive("grid"); _ck(_v, 52, 0, currVal_24); var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).inline; var currVal_26 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 54).color !== "warn")); _ck(_v, 53, 0, currVal_25, currVal_26); var currVal_28 = _co.isLayoutActive("list"); _ck(_v, 56, 0, currVal_28); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).inline; var currVal_30 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 58).color !== "warn")); _ck(_v, 57, 0, currVal_29, currVal_30); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 65).target; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 65).href; _ck(_v, 64, 0, currVal_32, currVal_33); var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 67).inline; var currVal_36 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 67).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 67).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 67).color !== "warn")); _ck(_v, 66, 0, currVal_35, currVal_36); }); }
function View_ArticlesListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "articles-list", [], null, null, null, View_ArticlesListComponent_0, RenderType_ArticlesListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _common_admin_pagination_paginator_service__WEBPACK_IMPORTED_MODULE_28__["Paginator"], _common_admin_pagination_paginator_service__WEBPACK_IMPORTED_MODULE_28__["Paginator"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_29__["AppHttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 4374528, null, 0, _articles_list_component__WEBPACK_IMPORTED_MODULE_30__["ArticlesListComponent"], [_shared_help_center_service__WEBPACK_IMPORTED_MODULE_31__["HelpCenterService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _common_admin_pagination_paginator_service__WEBPACK_IMPORTED_MODULE_28__["Paginator"], _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_32__["Modal"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["ViewportScroller"]], null, null)], null, null); }
var ArticlesListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("articles-list", _articles_list_component__WEBPACK_IMPORTED_MODULE_30__["ArticlesListComponent"], View_ArticlesListComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/help-center/manage/articles-list/articles-list.component.scss.ngstyle.js":
/*!******************************************************************************************!*\
  !*** ./src/app/help-center/manage/articles-list/articles-list.component.scss.ngstyle.js ***!
  \******************************************************************************************/
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
var styles = ["\n\n\narticles-list {\n  display: block;\n  max-height: calc(100vh - 70px);\n  overflow: hidden;\n  background-color: #FAFAFA; }\narticles-list .content {\n    display: flex; }\narticles-list articles-list-filters {\n    display: block;\n    height: calc(100vh - 125px);\n    overflow: auto;\n    flex: 0 0 302px;\n    min-width: 0; }\narticles-list no-results-message {\n    margin-top: 50px; }\narticles-list .articles-list-container {\n    flex: 1 1 auto;\n    height: calc(100vh - 120px);\n    overflow: auto; }\narticles-list .articles-list-container .mat-paginator {\n      border-top: 1px solid #E0E0E0;\n      overflow: hidden; }\narticles-list .articles-list-container .mat-paginator .mat-paginator-page-size {\n        height: 100%; }\narticles-list .articles-list-container .mat-paginator .mat-paginator-page-size-select {\n        margin: 0 4px; }\narticles-list .articles-list-container .mat-paginator .mat-paginator-container {\n        min-height: 40px;\n        height: 40px; }\narticles-list .articles-list {\n    padding: 10px;\n    min-height: calc(100% - 41px); }\narticles-list .articles-list .articles-list-item {\n      background-color: #fff;\n      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n      padding: 15px;\n      border-radius: 4px;\n      color: rgba(0, 0, 0, 0.54);\n      cursor: pointer;\n      margin-bottom: 10px;\n      transition: background-color 0.2s ease-in-out;\n      position: relative; }\narticles-list .articles-list .articles-list-item:hover {\n        background-color: #e8f0fe; }\narticles-list .articles-list .articles-list-item .delete-article-button {\n        position: absolute;\n        bottom: 10px;\n        right: 10px;\n        color: rgba(0, 0, 0, 0.5); }\narticles-list .articles-list .articles-list-item .article-categories {\n        font-size: 1.3rem;\n        font-style: italic;\n        margin-bottom: 15px; }\narticles-list .articles-list .articles-list-item .article-title {\n        font-weight: 500;\n        font-size: 1.9rem; }\narticles-list .articles-list .articles-list-item .article-body {\n        font-size: 1.4rem;\n        word-wrap: break-word; }\narticles-list .articles-list .articles-list-item .article-tags {\n        margin-top: 15px; }\narticles-list .articles-list.grid {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-content: flex-start;\n    padding: 5px; }\narticles-list .articles-list.grid .articles-list-item {\n      width: calc(25% - 10px);\n      max-height: 260px;\n      margin: 5px;\n      overflow: hidden; }\n@media screen and (max-width: 1280px) {\n        articles-list .articles-list.grid .articles-list-item {\n          width: calc(33.33% - 10px); } }\n@media screen and (max-width: 1024px) {\n        articles-list .articles-list.grid .articles-list-item {\n          width: calc(50% - 10px); } }\n@media screen and (max-width: 768px) {\n        articles-list .articles-list.grid .articles-list-item {\n          width: 100%; } }\narticles-list .articles-list.grid .articles-list-item .article-title {\n        margin-bottom: 10px;\n        font-size: 2rem; }\narticles-list .articles-list.grid .articles-list-item .article-body {\n        font-size: 1.6rem; }\narticles-list .action-bar .action {\n    display: flex;\n    border-right: 1px solid #E0E0E0;\n    padding: 0 20px;\n    height: 100%; }\narticles-list .action-bar .action button {\n      color: rgba(102, 102, 102, 0.54); }\narticles-list .action-bar .action button .mat-icon {\n        width: 26px;\n        height: 26px; }\narticles-list .action-bar .action button:first-of-type {\n        margin-right: 5px; }\narticles-list .action-bar .action button.active {\n        color: rgba(51, 51, 51, 0.54); }\narticles-list .action-bar .action select {\n      height: 100%;\n      border: none; }\n"];



/***/ }),

/***/ "./src/app/help-center/manage/articles-list/articles-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/help-center/manage/articles-list/articles-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ArticlesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesListComponent", function() { return ArticlesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _articles_list_filters_articles_list_filters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articles-list-filters/articles-list-filters.component */ "./src/app/help-center/manage/articles-list/articles-list-filters/articles-list-filters.component.ts");
/* harmony import */ var _shared_articles_order_select_articles_order_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/articles-order-select/articles-order-select.component */ "./src/app/help-center/shared/articles-order-select/articles-order-select.component.ts");
/* harmony import */ var _shared_help_center_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/help-center.service */ "./src/app/help-center/shared/help-center.service.ts");
/* harmony import */ var _common_admin_pagination_paginator_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/admin/pagination/paginator.service */ "./src/common/admin/pagination/paginator.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/* harmony import */ var _common_core_ui_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/core/ui/confirm-modal/confirm-modal.component */ "./src/common/core/ui/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};











var ArticlesListComponent = /** @class */ (function () {
    function ArticlesListComponent(helpCenter, router, paginator, modal, scroller) {
        this.helpCenter = helpCenter;
        this.router = router;
        this.paginator = paginator;
        this.modal = modal;
        this.scroller = scroller;
        this.searchQuery = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.selectedLayout = 'grid';
    }
    ArticlesListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.searchQuery.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])())
            .subscribe(function () { return _this.reloadArticles(); });
    };
    ArticlesListComponent.prototype.goToUpdateArticle = function (articleId) {
        this.router.navigate(['/help-center/manage/', 'articles', articleId, 'edit']);
    };
    ArticlesListComponent.prototype.maybeDeleteArticle = function (article) {
        var _this = this;
        this.modal.show(_common_core_ui_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_9__["ConfirmModalComponent"], {
            title: 'Delete Article',
            body: 'Are you sure you want to delete this article?',
            ok: 'Delete'
        }).afterClosed().subscribe(function (confirmed) {
            if (!confirmed)
                return;
            _this.helpCenter.deleteArticles([article.id]).subscribe(function () { return _this.paginator.paginate(); });
        });
    };
    ArticlesListComponent.prototype.setLayout = function (name) {
        this.selectedLayout = name;
    };
    ArticlesListComponent.prototype.isLayoutActive = function (name) {
        return this.selectedLayout === name;
    };
    ArticlesListComponent.prototype.reloadArticles = function (pagination) {
        var _this = this;
        if (pagination === void 0) { pagination = {}; }
        var params = __assign({}, this.getQueryParams(), pagination);
        this.paginator.paginate(params, 'help-center/articles')
            .subscribe(function () {
            if (_this.scrollContainer) {
                _this.scrollContainer.nativeElement.scrollTop = 0;
            }
        });
    };
    ArticlesListComponent.prototype.matPaginatorPageChanged = function (e) {
        // material paginator is zero based, laravel is one based, need to sync page number here
        var page = e.pageIndex ? e.pageIndex + 1 : undefined;
        this.reloadArticles({ page: page, perPage: e.pageSize });
    };
    ArticlesListComponent.prototype.getQueryParams = function () {
        var filters = this.articlesListFilters.getFilters(), merged = {};
        // only specify filters with 'thruthy' or 0 value
        for (var name_1 in filters) {
            if (filters[name_1] || filters[name_1] === 0) {
                merged[name_1] = filters[name_1];
            }
        }
        if (this.searchQuery.value) {
            merged.query = this.searchQuery.value;
        }
        merged.orderBy = this.articlesOrder.selectedValue;
        return merged;
    };
    ArticlesListComponent.prototype.ngOnDestroy = function () {
        this.paginator.destroy();
    };
    return ArticlesListComponent;
}());



/***/ }),

/***/ "./src/app/help-center/manage/categories-list/categories-list.component.ngfactory.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/help-center/manage/categories-list/categories-list.component.ngfactory.js ***!
  \*******************************************************************************************/
/*! exports provided: RenderType_CategoriesListComponent, View_CategoriesListComponent_0, View_CategoriesListComponent_Host_0, CategoriesListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CategoriesListComponent", function() { return RenderType_CategoriesListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategoriesListComponent_0", function() { return View_CategoriesListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategoriesListComponent_Host_0", function() { return View_CategoriesListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesListComponentNgFactory", function() { return CategoriesListComponentNgFactory; });
/* harmony import */ var _categories_list_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./categories-list.component.scss.ngstyle */ "./src/app/help-center/manage/categories-list/categories-list.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_list_item_category_list_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-list-item/category-list-item.component.ngfactory */ "./src/app/help-center/manage/categories-list/category-list-item/category-list-item.component.ngfactory.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _category_list_item_category_list_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category-list-item/category-list-item.component */ "./src/app/help-center/manage/categories-list/category-list-item/category-list-item.component.ts");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/* harmony import */ var _shared_categories_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/categories.service */ "./src/app/help-center/shared/categories.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/core/services/local-storage.service */ "./src/common/core/services/local-storage.service.ts");
/* harmony import */ var _common_core_translations_translate_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../common/core/translations/translate.pipe */ "./src/common/core/translations/translate.pipe.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../common/core/translations/translate.directive */ "./src/common/core/translations/translate.directive.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _categories_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./categories-list.component */ "./src/app/help-center/manage/categories-list/categories-list.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




























var styles_CategoriesListComponent = [_categories_list_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CategoriesListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_CategoriesListComponent, data: {} });

function View_CategoriesListComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 6, "category-list-item", [["cdkDrag", ""], ["class", "category-list-item child-category cdk-drag"]], [[1, "data-id", 0], [2, "cdk-drag-disabled", null], [2, "cdk-drag-dragging", null]], [[null, "onChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onChange" === en)) {
        var pd_0 = (_co.updateCategories() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _category_list_item_category_list_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CategoryListItemComponent_0"], _category_list_item_category_list_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CategoryListItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["ɵb"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4866048, [[11, 4]], 3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DROP_LIST"]], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropRegistry"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DRAG_CONFIG"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { data: [0, "data"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, { _handles: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 13, { _previewTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 14, { _placeholderTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 49152, null, 0, _category_list_item_category_list_item_component__WEBPACK_IMPORTED_MODULE_7__["CategoryListItemComponent"], [_common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_8__["Modal"], _shared_categories_service__WEBPACK_IMPORTED_MODULE_9__["CategoriesService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _common_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__["LocalStorage"]], { category: [0, "category"] }, { onChange: "onChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_3 = _v.context.$implicit; _ck(_v, 2, 0, currVal_3); var currVal_4 = _v.context.$implicit; _ck(_v, 6, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._dragRef.isDragging(); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_CategoriesListComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "div", [["cdkDropList", ""], ["class", "category-children cdk-drop-list"]], [[2, "hidden", null], [8, "id", 0], [2, "cdk-drop-list-disabled", null], [2, "cdk-drop-list-dragging", null], [2, "cdk-drop-list-receiving", null]], [[null, "cdkDropListDropped"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("cdkDropListDropped" === en)) {
        var pd_0 = (_co.reorderCategories($event, _v.parent.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DROP_LIST"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1196032, null, 1, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropRegistry"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropListGroup"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDrop"]], { disabled: [0, "disabled"] }, { dropped: "cdkDropListDropped" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, { _draggables: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropListGroup"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CategoriesListComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_5 = _co.shouldDisableReorder(); _ck(_v, 2, 0, currVal_5); var currVal_6 = _v.parent.context.$implicit.children; _ck(_v, 7, 0, currVal_6); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.categoryChildrenVisible; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).id; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._dropListRef.isDragging(); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._dropListRef.isReceiving(); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }); }
function View_CategoriesListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["class", "category-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 16777216, null, null, 6, "category-list-item", [["cdkDrag", ""], ["class", "category-list-item parent-category cdk-drag"]], [[1, "data-id", 0], [2, "cdk-drag-disabled", null], [2, "cdk-drag-dragging", null]], [[null, "onChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onChange" === en)) {
        var pd_0 = (_co.updateCategories() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _category_list_item_category_list_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CategoryListItemComponent_0"], _category_list_item_category_list_item_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CategoryListItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["ɵb"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4866048, [[7, 4]], 3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDrag"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DROP_LIST"]], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropRegistry"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DRAG_CONFIG"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDrop"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { data: [0, "data"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, { _handles: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 9, { _previewTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](335544320, 10, { _placeholderTemplate: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 49152, null, 0, _category_list_item_category_list_item_component__WEBPACK_IMPORTED_MODULE_7__["CategoryListItemComponent"], [_common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_8__["Modal"], _shared_categories_service__WEBPACK_IMPORTED_MODULE_9__["CategoriesService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _common_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_11__["LocalStorage"]], { category: [0, "category"] }, { onChange: "onChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CategoriesListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "]))], function (_ck, _v) { var currVal_3 = _v.context.$implicit; _ck(_v, 4, 0, currVal_3); var currVal_4 = _v.context.$implicit; _ck(_v, 8, 0, currVal_4); var currVal_5 = _v.context.$implicit.children.length; _ck(_v, 11, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).disabled; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._dragRef.isDragging(); _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); }); }
function View_CategoriesListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _common_core_translations_translate_pipe__WEBPACK_IMPORTED_MODULE_12__["TransPipe"], [_common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_13__["Translations"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 68, "div", [["class", "action-bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 26, "div", [["class", "nav"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 7, "a", [["class", "nav-item"], ["routerLinkActive", "router-link-active"], ["trans", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 671744, [[2, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](10, { exact: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_14__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_13__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 6, "a", [["class", "nav-item"], ["routerLinkActive", "router-link-active"], ["trans", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 671744, [[4, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_14__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_13__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Categories"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 6, "a", [["class", "nav-item"], ["routerLinkActive", "router-link-active"], ["trans", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 671744, [[6, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_14__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_13__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Articles"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 37, "div", [["class", "actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 10, "div", [["class", "action"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 16777216, null, null, 7, "button", [["class", "toggle-children-btn"], ["mat-icon-button", ""]], [[2, "active", null], [8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longpress" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37).show() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("touchend" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 37)._handleTouchend() !== false);
        ad = (pd_2 && ad);
    } if (("click" === en)) {
        var pd_3 = (_co.toggleCategoryChildren() !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 147456, null, 0, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MatTooltip"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_22__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_18__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__["AriaDescriber"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_19__["FocusMonitor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MAT_TOOLTIP_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [2, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_21__["MAT_TOOLTIP_DEFAULT_OPTIONS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__["HAMMER_LOADER"]]], { message: [0, "message"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](38, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, null, 0, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "unfold-more"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 12, "div", [["class", "search-bar input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 6, "input", [["class", "categories-search-input"], ["placeholder", "Search"], ["trans-placeholder", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ɵangular_packages_forms_forms_k"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_26__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_14__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_13__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](55, 0, null, null, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "search"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](56, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](59, 0, null, null, 8, "button", [["class", "new-category-button new-item-button"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.showNewCategoryModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](61, 0, null, null, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "add"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 2, "span", [["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_14__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_13__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_15__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["New Category"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, null, 11, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, null, 8, "section", [["cdkDropList", ""], ["class", "categories-list cdk-drop-list"]], [[8, "id", 0], [2, "cdk-drop-list-disabled", null], [2, "cdk-drop-list-dragging", null], [2, "cdk-drop-list-receiving", null]], [[null, "cdkDropListDropped"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("cdkDropListDropped" === en)) {
        var pd_0 = (_co.reorderCategories($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CDK_DROP_LIST"], null, [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 1196032, null, 1, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropRegistry"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"]], [3, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropListGroup"]], [2, _angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDrop"]], { disabled: [0, "disabled"] }, { dropped: "cdkDropListDropped" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, { _draggables: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](256, null, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropListGroup"], undefined, []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CategoriesListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/help-center"; _ck(_v, 6, 0, currVal_2); var currVal_3 = _ck(_v, 10, 0, true); var currVal_4 = "router-link-active"; _ck(_v, 7, 0, currVal_3, currVal_4); var currVal_7 = "/help-center/manage/categories"; _ck(_v, 15, 0, currVal_7); var currVal_8 = "router-link-active"; _ck(_v, 16, 0, currVal_8); var currVal_11 = "/help-center/manage/articles"; _ck(_v, 23, 0, currVal_11); var currVal_12 = "router-link-active"; _ck(_v, 24, 0, currVal_12); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 37, 0, _ck(_v, 38, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), "Toggle child categories")); _ck(_v, 37, 0, currVal_16); var currVal_19 = "unfold-more"; _ck(_v, 41, 0, currVal_19); var currVal_27 = _co.searchQuery; _ck(_v, 50, 0, currVal_27); var currVal_30 = "search"; _ck(_v, 56, 0, currVal_30); var currVal_33 = "add"; _ck(_v, 62, 0, currVal_33); var currVal_38 = _co.shouldDisableReorder(); _ck(_v, 75, 0, currVal_38); var currVal_39 = _co.filteredCategories; _ck(_v, 80, 0, currVal_39); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).href; _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).target; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).href; _ck(_v, 14, 0, currVal_5, currVal_6); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).target; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).href; _ck(_v, 22, 0, currVal_9, currVal_10); var currVal_13 = _co.categoryChildrenVisible; var currVal_14 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36).disabled || null); var currVal_15 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 36)._animationMode === "NoopAnimations"); _ck(_v, 35, 0, currVal_13, currVal_14, currVal_15); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).inline; var currVal_18 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).color !== "warn")); _ck(_v, 40, 0, currVal_17, currVal_18); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).ngClassUntouched; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).ngClassTouched; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).ngClassPristine; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).ngClassDirty; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).ngClassValid; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).ngClassInvalid; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 52).ngClassPending; _ck(_v, 47, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).inline; var currVal_29 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 56).color !== "warn")); _ck(_v, 55, 0, currVal_28, currVal_29); var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).inline; var currVal_32 = (((_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).color !== "warn")); _ck(_v, 61, 0, currVal_31, currVal_32); var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).id; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75).disabled; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75)._dropListRef.isDragging(); var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 75)._dropListRef.isReceiving(); _ck(_v, 73, 0, currVal_34, currVal_35, currVal_36, currVal_37); }); }
function View_CategoriesListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "categories-list", [], null, null, null, View_CategoriesListComponent_0, RenderType_CategoriesListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _categories_list_component__WEBPACK_IMPORTED_MODULE_27__["CategoriesListComponent"], [_shared_categories_service__WEBPACK_IMPORTED_MODULE_9__["CategoriesService"], _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_8__["Modal"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CategoriesListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("categories-list", _categories_list_component__WEBPACK_IMPORTED_MODULE_27__["CategoriesListComponent"], View_CategoriesListComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/help-center/manage/categories-list/categories-list.component.scss.ngstyle.js":
/*!**********************************************************************************************!*\
  !*** ./src/app/help-center/manage/categories-list/categories-list.component.scss.ngstyle.js ***!
  \**********************************************************************************************/
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
var styles = ["\n\n\ncategories-list {\n  display: block;\n  background-color: #FAFAFA; }\ncategories-list .container {\n    min-height: calc(100vh - 125px);\n    margin: 0 auto;\n    padding-top: 35px; }\ncategories-list category-list-item {\n    background-color: #fff;\n    padding: 15px;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n    font-size: 1.6rem;\n    margin-bottom: 10px;\n    transition: background-color 0.2s ease-in-out;\n    border-radius: 4px; }\ncategories-list category-list-item:hover {\n      background-color: #e8f0fe; }\ncategories-list .category-children {\n    margin-left: 20px; }\ncategories-list .toggle-children-btn {\n    color: rgba(0, 0, 0, 0.5);\n    margin-right: 10px; }\ncategories-list .toggle-children-btn.active {\n      color: #689f38; }\ncategories-list .cdk-drop-list-disabled .drag-handle {\n    color: rgba(0, 0, 0, 0.26);\n    cursor: not-allowed; }\ncategories-list .cdk-drag-placeholder {\n    opacity: 0; }\ncategories-list .cdk-drag-animating {\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\ncategories-list .cdk-drop-list-dragging .cdk-drag:not(.cdk-drag-placeholder) {\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n"];



/***/ }),

/***/ "./src/app/help-center/manage/categories-list/categories-list.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/help-center/manage/categories-list/categories-list.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CategoriesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesListComponent", function() { return CategoriesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category-modal/category-modal.component */ "./src/app/help-center/manage/category-modal/category-modal.component.ts");
/* harmony import */ var _shared_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/categories.service */ "./src/app/help-center/shared/categories.service.ts");
/* harmony import */ var _categories_filterer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../categories-filterer */ "./src/app/help-center/manage/categories-filterer.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");








var CategoriesListComponent = /** @class */ (function () {
    function CategoriesListComponent(api, modal) {
        this.api = api;
        this.modal = modal;
        this.searchQuery = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.allCategories = [];
        this.filteredCategories = [];
        this.categoryChildrenVisible = true;
    }
    CategoriesListComponent.prototype.ngOnInit = function () {
        this.updateCategories();
        this.bindSearchQuery();
    };
    CategoriesListComponent.prototype.showNewCategoryModal = function () {
        var _this = this;
        this.modal.show(_category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_2__["CategoryModalComponent"]).
            afterClosed()
            .subscribe(function (category) {
            if (!category)
                return;
            _this.updateCategories();
        });
    };
    CategoriesListComponent.prototype.updateCategories = function () {
        var _this = this;
        this.api.getCategories().subscribe(function (response) {
            _this.filteredCategories = response.categories;
            _this.allCategories = response.categories;
            _this.filterCategories(_this.searchQuery.value);
        });
    };
    CategoriesListComponent.prototype.bindSearchQuery = function () {
        var _this = this;
        this.searchQuery.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["distinctUntilChanged"])())
            .subscribe(function (query) { return _this.filterCategories(query); });
    };
    CategoriesListComponent.prototype.filterCategories = function (searchQuery) {
        this.filteredCategories = (new _categories_filterer__WEBPACK_IMPORTED_MODULE_4__["CategoriesFilterer"]).filter(searchQuery, this.allCategories);
    };
    CategoriesListComponent.prototype.reorderCategories = function (e, parent) {
        var array = parent ? parent.children : this.filteredCategories;
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["moveItemInArray"])(array, e.previousIndex, e.currentIndex);
        var ids = array.map(function (category) { return category.id; });
        this.api.reorderCategories(ids, parent ? parent.id : null).subscribe();
    };
    CategoriesListComponent.prototype.toggleCategoryChildren = function () {
        this.categoryChildrenVisible = !this.categoryChildrenVisible;
    };
    CategoriesListComponent.prototype.shouldDisableReorder = function () {
        return this.searchQuery.value;
    };
    return CategoriesListComponent;
}());



/***/ }),

/***/ "./src/app/help-center/manage/categories-list/category-list-item/category-list-item.component.ngfactory.js":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/help-center/manage/categories-list/category-list-item/category-list-item.component.ngfactory.js ***!
  \*****************************************************************************************************************/
/*! exports provided: Router_3, UrlSerializer_5, ChildrenOutletContexts_6, Location_7, LocationStrategy_8, Injector_9, ɵangular_packages_core_core_c_10, defineInjectable_11, NgModuleFactoryLoader_12, Compiler_13, Input_16, ɵangular_packages_core_core_b_17, Output_18, RenderType_CategoryListItemComponent, View_CategoryListItemComponent_0, View_CategoryListItemComponent_Host_0, CategoryListItemComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CategoryListItemComponent", function() { return RenderType_CategoryListItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategoryListItemComponent_0", function() { return View_CategoryListItemComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategoryListItemComponent_Host_0", function() { return View_CategoryListItemComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListItemComponentNgFactory", function() { return CategoryListItemComponentNgFactory; });
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input_16", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_17", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_core_core_b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Output_18", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"]; });

/* harmony import */ var _category_list_item_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category-list-item.component.scss.ngstyle */ "./src/app/help-center/manage/categories-list/category-list-item/category-list-item.component.scss.ngstyle.js");
/* harmony import */ var _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../common/core/translations/translate.directive */ "./src/common/core/translations/translate.directive.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _common_core_translations_translate_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../../common/core/translations/translate.pipe */ "./src/common/core/translations/translate.pipe.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _category_list_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./category-list-item.component */ "./src/app/help-center/manage/categories-list/category-list-item/category-list-item.component.ts");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/* harmony import */ var _shared_categories_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/categories.service */ "./src/app/help-center/shared/categories.service.ts");
/* harmony import */ var _common_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../../common/core/services/local-storage.service */ "./src/common/core/services/local-storage.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




























var styles_CategoryListItemComponent = [_category_list_item_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_3__["styles"]];
var RenderType_CategoryListItemComponent = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵcrt"]({ encapsulation: 2, styles: styles_CategoryListItemComponent, data: {} });

function View_CategoryListItemComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 2, "span", [["class", "no-articles"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_5__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_6__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["No Articles"]))], null, null); }
function View_CategoryListItemComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 4, "span", [["class", "plural"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](1, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](2, 0, null, null, 2, "span", [["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_5__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_6__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["Articles"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.category.articles_count; _ck(_v, 1, 0, currVal_0); }); }
function View_CategoryListItemComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 2, "span", [["class", "singular"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_5__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_6__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["1 Article"]))], null, null); }
function View_CategoryListItemComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 7, "span", [["class", "has-articles"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_CategoryListItemComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_CategoryListItemComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.category.articles_count > 1); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_co.category.articles_count == 1); _ck(_v, 6, 0, currVal_1); }, null); }
function View_CategoryListItemComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 16777216, null, null, 7, "button", [["class", "new-child-category-button"], ["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longpress" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 2).show() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 2)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("touchend" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 2)._handleTouchend() !== false);
        ad = (pd_2 && ad);
    } if (("click" === en)) {
        var pd_3 = (_co.openCreateChildCategoryModal() !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](2, 147456, null, 0, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["AriaDescriber"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MAT_TOOLTIP_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"]], [2, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MAT_TOOLTIP_DEFAULT_OPTIONS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["HAMMER_LOADER"]]], { message: [0, "message"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵppd"](3, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](5, 0, null, 0, 1, "mat-icon", [["class", "size-20 mat-icon notranslate"], ["role", "img"], ["svgIcon", "create-new-folder"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](6, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v.parent, 0), "Create Child Category")); _ck(_v, 2, 0, currVal_2); var currVal_5 = "create-new-folder"; _ck(_v, 6, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 6).inline; var currVal_4 = (((_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 6).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 6).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 6).color !== "warn")); _ck(_v, 5, 0, currVal_3, currVal_4); }); }
function View_CategoryListItemComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 16777216, null, null, 7, "button", [["class", "detach-category-button"], ["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longpress" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 2).show() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 2)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("touchend" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 2)._handleTouchend() !== false);
        ad = (pd_2 && ad);
    } if (("click" === en)) {
        var pd_3 = (_co.maybeDetachCategory(_co.category.id) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](2, 147456, null, 0, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["AriaDescriber"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MAT_TOOLTIP_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"]], [2, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MAT_TOOLTIP_DEFAULT_OPTIONS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["HAMMER_LOADER"]]], { message: [0, "message"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵppd"](3, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](5, 0, null, 0, 1, "mat-icon", [["class", "size-20 mat-icon notranslate"], ["role", "img"], ["svgIcon", "delete"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](6, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](0, null, null, 0))], function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v.parent, 0), "Detach Category")); _ck(_v, 2, 0, currVal_2); var currVal_5 = "delete"; _ck(_v, 6, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1).disabled || null); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 1)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 6).inline; var currVal_4 = (((_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 6).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 6).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 6).color !== "warn")); _ck(_v, 5, 0, currVal_3, currVal_4); }); }
function View_CategoryListItemComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵpid"](0, _common_core_translations_translate_pipe__WEBPACK_IMPORTED_MODULE_19__["TransPipe"], [_common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_5__["Translations"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](1, 0, null, null, 9, "div", [["class", "category-name-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](3, 0, null, null, 3, "button", [["cdkDragHandle", ""], ["class", "no-style drag-handle cdk-drag-handle"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](4, 147456, null, 0, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__["CdkDragHandle"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], [2, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__["ɵb"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](5, 0, null, null, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "drag-handle"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](6, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](8, 0, null, null, 1, "span", [["class", "category-name"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.navigateToArticlesList(_co.category) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](12, 0, null, null, 10, "div", [["class", "info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](14, 0, null, null, 7, "div", [["class", "articles-count"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_CategoryListItemComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_CategoryListItemComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](24, 0, null, null, 25, "div", [["class", "actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](26, 16777216, null, null, 7, "button", [["class", "update-category-button"], ["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longpress" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 28).show() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 28)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("touchend" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 28)._handleTouchend() !== false);
        ad = (pd_2 && ad);
    } if (("click" === en)) {
        var pd_3 = (_co.openUpdateCategoryModal(_co.category) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](27, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](28, 147456, null, 0, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["AriaDescriber"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MAT_TOOLTIP_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"]], [2, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MAT_TOOLTIP_DEFAULT_OPTIONS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["HAMMER_LOADER"]]], { message: [0, "message"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵppd"](29, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](31, 0, null, 0, 1, "mat-icon", [["class", "size-20 mat-icon notranslate"], ["role", "img"], ["svgIcon", "settings"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](32, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_CategoryListItemComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](36, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵand"](16777216, null, null, 1, null, View_CategoryListItemComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](39, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](41, 16777216, null, null, 7, "button", [["class", "delete-category-button"], ["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longpress" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 43).show() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 43)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("touchend" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 43)._handleTouchend() !== false);
        ad = (pd_2 && ad);
    } if (("click" === en)) {
        var pd_3 = (_co.maybeDeleteCategory(_co.category.id) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](42, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](43, 147456, null, 0, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["AriaDescriber"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_10__["FocusMonitor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MAT_TOOLTIP_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"]], [2, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MAT_TOOLTIP_DEFAULT_OPTIONS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["HAMMER_LOADER"]]], { message: [0, "message"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵppd"](44, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](46, 0, null, 0, 1, "mat-icon", [["class", "size-20 mat-icon notranslate"], ["role", "img"], ["svgIcon", "delete-forever"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](47, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "drag-handle"; _ck(_v, 6, 0, currVal_2); var currVal_4 = !_co.category.articles_count; _ck(_v, 17, 0, currVal_4); var currVal_5 = _co.category.articles_count; _ck(_v, 20, 0, currVal_5); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵunv"](_v, 28, 0, _ck(_v, 29, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 0), "Update Category")); _ck(_v, 28, 0, currVal_8); var currVal_11 = "settings"; _ck(_v, 32, 0, currVal_11); var currVal_12 = !_co.category.parent_id; _ck(_v, 36, 0, currVal_12); var currVal_13 = _co.category.parent_id; _ck(_v, 39, 0, currVal_13); var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵunv"](_v, 43, 0, _ck(_v, 44, 0, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 0), "Delete Category")); _ck(_v, 43, 0, currVal_16); var currVal_19 = "delete-forever"; _ck(_v, 47, 0, currVal_19); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 6).inline; var currVal_1 = (((_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 6).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 6).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 6).color !== "warn")); _ck(_v, 5, 0, currVal_0, currVal_1); var currVal_3 = _co.category.name; _ck(_v, 9, 0, currVal_3); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 27).disabled || null); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 27)._animationMode === "NoopAnimations"); _ck(_v, 26, 0, currVal_6, currVal_7); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 32).inline; var currVal_10 = (((_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 32).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 32).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 32).color !== "warn")); _ck(_v, 31, 0, currVal_9, currVal_10); var currVal_14 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 42).disabled || null); var currVal_15 = (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 42)._animationMode === "NoopAnimations"); _ck(_v, 41, 0, currVal_14, currVal_15); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 47).inline; var currVal_18 = (((_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 47).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 47).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵnov"](_v, 47).color !== "warn")); _ck(_v, 46, 0, currVal_17, currVal_18); }); }
function View_CategoryListItemComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵeld"](0, 0, null, null, 1, "category-list-item", [], null, null, null, View_CategoryListItemComponent_0, RenderType_CategoryListItemComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵdid"](1, 49152, null, 0, _category_list_item_component__WEBPACK_IMPORTED_MODULE_21__["CategoryListItemComponent"], [_common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_22__["Modal"], _shared_categories_service__WEBPACK_IMPORTED_MODULE_23__["CategoriesService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _common_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_24__["LocalStorage"]], null, null)], null, null); }
var CategoryListItemComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵccf"]("category-list-item", _category_list_item_component__WEBPACK_IMPORTED_MODULE_21__["CategoryListItemComponent"], View_CategoryListItemComponent_Host_0, { category: "category" }, { onChange: "onChange" }, []);



/***/ }),

/***/ "./src/app/help-center/manage/categories-list/category-list-item/category-list-item.component.scss.ngstyle.js":
/*!********************************************************************************************************************!*\
  !*** ./src/app/help-center/manage/categories-list/category-list-item/category-list-item.component.scss.ngstyle.js ***!
  \********************************************************************************************************************/
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
var styles = ["\n\n\ncategory-list-item {\n  display: flex;\n  vertical-align: middle;\n  justify-content: center; }\ncategory-list-item .category-name-container {\n    flex: 1 1 auto;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center; }\ncategory-list-item .category-name-container .drag-handle, category-list-item .category-name-container .category-name {\n      vertical-align: middle; }\ncategory-list-item .category-name-container .category-name:hover {\n      text-decoration: underline;\n      cursor: pointer; }\ncategory-list-item .drag-handle {\n    color: rgba(0, 0, 0, 0.5);\n    margin-right: 8px;\n    cursor: move; }\ncategory-list-item .info {\n    flex: 0 0 150px;\n    display: flex;\n    align-items: center;\n    color: rgba(0, 0, 0, 0.54); }\ncategory-list-item .actions {\n    flex: 0 0 150px;\n    text-align: right; }\ncategory-list-item .actions button {\n      color: rgba(0, 0, 0, 0.5); }\n"];



/***/ }),

/***/ "./src/app/help-center/manage/categories-list/category-list-item/category-list-item.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/help-center/manage/categories-list/category-list-item/category-list-item.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CategoryListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListItemComponent", function() { return CategoryListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../category-modal/category-modal.component */ "./src/app/help-center/manage/category-modal/category-modal.component.ts");
/* harmony import */ var _shared_models_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/models/Category */ "./src/app/shared/models/Category.ts");
/* harmony import */ var _shared_categories_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/categories.service */ "./src/app/help-center/shared/categories.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../common/core/services/local-storage.service */ "./src/common/core/services/local-storage.service.ts");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/* harmony import */ var _common_core_ui_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../common/core/ui/confirm-modal/confirm-modal.component */ "./src/common/core/ui/confirm-modal/confirm-modal.component.ts");








var CategoryListItemComponent = /** @class */ (function () {
    function CategoryListItemComponent(modal, api, router, storage) {
        this.modal = modal;
        this.api = api;
        this.router = router;
        this.storage = storage;
        /**
         * Fired when this category model changes or is deleted.
         */
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * Show modal for creating child category.
     */
    CategoryListItemComponent.prototype.openCreateChildCategoryModal = function () {
        var _this = this;
        this.modal.show(_category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_1__["CategoryModalComponent"], { parentId: this.category.id })
            .afterClosed().subscribe(function () { return _this.onChange.emit(); });
    };
    /**
     * Show modal for updating specified category.
     */
    CategoryListItemComponent.prototype.openUpdateCategoryModal = function (category) {
        var _this = this;
        this.modal.show(_category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_1__["CategoryModalComponent"], { category: category })
            .afterClosed().subscribe(function () { return _this.onChange.emit(); });
    };
    /**
     * Delete specified category if user confirms.
     */
    CategoryListItemComponent.prototype.maybeDeleteCategory = function (id) {
        var _this = this;
        this.modal.show(_common_core_ui_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalComponent"], {
            title: 'Delete Category',
            body: 'Are you sure you want to delete this category?',
            bodyBold: 'Children of this category will not be deleted.',
            ok: 'Delete'
        }).afterClosed().subscribe(function (confirmed) {
            if (!confirmed)
                return;
            _this.api.deleteCategory(id).subscribe(function () { return _this.onChange.emit(); });
        });
    };
    /**
     * Detach specified category from parent if user confirms.
     */
    CategoryListItemComponent.prototype.maybeDetachCategory = function (id) {
        var _this = this;
        this.modal.show(_common_core_ui_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalComponent"], {
            title: 'Detach Category',
            body: 'Are you sure you want to detach this category from its parent?',
            ok: 'Detach'
        }).afterClosed().subscribe(function (confirmed) {
            if (!confirmed)
                return;
            _this.api.detachCategory(id).subscribe(function () { return _this.onChange.emit(); });
        });
    };
    /**
     * Select specified category and navigate to articles list route.
     */
    CategoryListItemComponent.prototype.navigateToArticlesList = function (category) {
        var ids = [category.id];
        if (category.parent_id)
            ids.push(category.parent_id);
        this.storage.set('selectedCategories', ids);
        this.router.navigate(['/help-center/manage/articles']);
    };
    return CategoryListItemComponent;
}());



/***/ }),

/***/ "./src/app/help-center/manage/categories-manager/categories-manager.component.ngfactory.js":
/*!*************************************************************************************************!*\
  !*** ./src/app/help-center/manage/categories-manager/categories-manager.component.ngfactory.js ***!
  \*************************************************************************************************/
/*! exports provided: ViewChild_1, ɵangular_packages_core_core_b_2, Query_3, Output_5, Input_6, RenderType_CategoriesManagerComponent, View_CategoriesManagerComponent_0, View_CategoriesManagerComponent_Host_0, CategoriesManagerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CategoriesManagerComponent", function() { return RenderType_CategoriesManagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategoriesManagerComponent_0", function() { return View_CategoriesManagerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategoriesManagerComponent_Host_0", function() { return View_CategoriesManagerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesManagerComponentNgFactory", function() { return CategoriesManagerComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewChild_1", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_2", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query_3", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Output_5", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input_6", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony import */ var _categories_manager_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./categories-manager.component.scss.ngstyle */ "./src/app/help-center/manage/categories-manager/categories-manager.component.scss.ngstyle.js");
/* harmony import */ var _node_modules_angular_material_checkbox_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/checkbox/typings/index.ngfactory */ "./node_modules/@angular/material/checkbox/typings/index.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/core/translations/translate.directive */ "./src/common/core/translations/translate.directive.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _common_core_translations_translate_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/core/translations/translate.pipe */ "./src/common/core/translations/translate.pipe.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _categories_manager_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./categories-manager.component */ "./src/app/help-center/manage/categories-manager/categories-manager.component.ts");
/* harmony import */ var _shared_categories_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared/categories.service */ "./src/app/help-center/shared/categories.service.ts");
/* harmony import */ var _common_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../common/core/services/local-storage.service */ "./src/common/core/services/local-storage.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
























var styles_CategoriesManagerComponent = [_categories_manager_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"]];
var RenderType_CategoriesManagerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CategoriesManagerComponent, data: {} });

function View_CategoriesManagerComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [["class", "category child-category"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "mat-checkbox", [["class", "mat-checkbox"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.toggle(_v.context.$implicit, _v.parent.context.$implicit.id) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_checkbox_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCheckbox_0"], _node_modules_angular_material_checkbox_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCheckbox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckbox"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 8568832, null, 0, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [8, null], [2, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MAT_CHECKBOX_CLICK_ACTION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], { id: [0, "id"], checked: [1, "checked"] }, { change: "change" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = ((_v.parent.context.index + "") + _v.context.index); var currVal_8 = _co.categoryIsSelected(_v.context.$implicit.id); _ck(_v, 4, 0, currVal_7, currVal_8); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).id; var currVal_1 = null; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).indeterminate; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).checked; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).disabled; var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).labelPosition == "before"); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4)._animationMode === "NoopAnimations"); _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_9 = _v.context.$implicit.name; _ck(_v, 5, 0, currVal_9); }); }
function View_CategoriesManagerComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 12, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 6, "div", [["class", "category parent-category"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 3, "mat-checkbox", [["class", "mat-checkbox"]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checkbox-indeterminate", null], [2, "mat-checkbox-checked", null], [2, "mat-checkbox-disabled", null], [2, "mat-checkbox-label-before", null], [2, "_mat-animation-noopable", null]], [[null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_co.toggle(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_checkbox_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MatCheckbox_0"], _node_modules_angular_material_checkbox_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MatCheckbox"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckbox"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 8568832, null, 0, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckbox"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [8, null], [2, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MAT_CHECKBOX_CLICK_ACTION"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["ANIMATION_MODULE_TYPE"]]], { id: [0, "id"], checked: [1, "checked"] }, { change: "change" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CategoriesManagerComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_7 = _v.context.index; var currVal_8 = (_co.categoryIsSelected(_v.context.$implicit.id) || _co.childIsSelected(_v.context.$implicit)); _ck(_v, 6, 0, currVal_7, currVal_8); var currVal_10 = _v.context.$implicit.children; _ck(_v, 11, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).id; var currVal_1 = null; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).indeterminate; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).checked; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).disabled; var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).labelPosition == "before"); var currVal_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6)._animationMode === "NoopAnimations"); _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_9 = _v.context.$implicit.name; _ck(_v, 7, 0, currVal_9); }); }
function View_CategoriesManagerComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "div", [["class", "no-results"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["No Results Found."]))], null, null); }
function View_CategoriesManagerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _common_core_translations_translate_pipe__WEBPACK_IMPORTED_MODULE_11__["TransPipe"], [_common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { scrollbar: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 44, "div", [["class", "panel"], ["customScrollbar", "lite"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 13, "div", [["class", "panel-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 2, "span", [["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Categories"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 16777216, null, null, 6, "button", [["class", "clear-all-button"], ["mat-icon-button", ""]], null, [[null, "click"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longpress" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).show() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("touchend" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11)._handleTouchend() !== false);
        ad = (pd_2 && ad);
    } if (("click" === en)) {
        var pd_3 = (_co.deselectAll() !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 147456, null, 0, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_15__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["AriaDescriber"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MAT_TOOLTIP_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_16__["Directionality"]], [2, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MAT_TOOLTIP_DEFAULT_OPTIONS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__["HAMMER_LOADER"]]], { message: [0, "message"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](12, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "clear-all"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](19, 0, null, null, 26, "div", [["class", "panel-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 12, "div", [["class", "input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 6, "input", [["id", "categories-manager-search"], ["placeholder", "Search..."], ["trans-placeholder", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_k"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](28, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](29, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "search"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](32, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 7, "section", [["class", "categories"], ["customScrollbar", "lite"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CategoriesManagerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CategoriesManagerComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](41, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵncd"](null, 0), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 11, 0, _ck(_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 0), "Clear All")); _ck(_v, 11, 0, currVal_0); var currVal_3 = "clear-all"; _ck(_v, 15, 0, currVal_3); var currVal_11 = _co.searchQuery; _ck(_v, 26, 0, currVal_11); var currVal_14 = "search"; _ck(_v, 32, 0, currVal_14); var currVal_15 = _co.categories; _ck(_v, 38, 0, currVal_15); var currVal_16 = (!_co.categories.length && _co.searchQuery.value); _ck(_v, 41, 0, currVal_16); }, function (_ck, _v) { var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).inline; var currVal_2 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 15).color !== "warn")); _ck(_v, 14, 0, currVal_1, currVal_2); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassUntouched; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassTouched; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassPristine; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassDirty; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassValid; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassInvalid; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 28).ngClassPending; _ck(_v, 23, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).inline; var currVal_13 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 32).color !== "warn")); _ck(_v, 31, 0, currVal_12, currVal_13); }); }
function View_CategoriesManagerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "categories-manager", [], null, null, null, View_CategoriesManagerComponent_0, RenderType_CategoriesManagerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _categories_manager_component__WEBPACK_IMPORTED_MODULE_20__["CategoriesManagerComponent"], [_shared_categories_service__WEBPACK_IMPORTED_MODULE_21__["CategoriesService"], _common_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_22__["LocalStorage"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CategoriesManagerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("categories-manager", _categories_manager_component__WEBPACK_IMPORTED_MODULE_20__["CategoriesManagerComponent"], View_CategoriesManagerComponent_Host_0, { initialCategories: "initialCategories" }, { onChange: "onChange" }, ["*"]);



/***/ }),

/***/ "./src/app/help-center/manage/categories-manager/categories-manager.component.scss.ngstyle.js":
/*!****************************************************************************************************!*\
  !*** ./src/app/help-center/manage/categories-manager/categories-manager.component.scss.ngstyle.js ***!
  \****************************************************************************************************/
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
var styles = ["\n\n\ncategories-manager {\n  display: block; }\ncategories-manager .input-container {\n    margin-bottom: 10px;\n    position: relative; }\ncategories-manager .input-container > input {\n      padding-left: 33px; }\ncategories-manager .input-container > mat-icon {\n      position: absolute;\n      top: 7px;\n      left: 7px;\n      color: rgba(0, 0, 0, 0.5); }\ncategories-manager .categories {\n    max-height: 250px;\n    overflow: auto;\n    padding: 10px;\n    border: 1px solid #E0E0E0; }\ncategories-manager .categories > .category {\n      margin-bottom: 8px;\n      overflow: hidden;\n      text-overflow: ellipsis; }\ncategories-manager .categories > .child-category {\n      margin-left: 20px; }\ncategories-manager .categories > .parent-category > label {\n      font-weight: 500; }\ncategories-manager .categories > .no-results {\n      font-style: italic;\n      font-size: 1.3rem; }\n"];



/***/ }),

/***/ "./src/app/help-center/manage/categories-manager/categories-manager.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/help-center/manage/categories-manager/categories-manager.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CategoriesManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesManagerComponent", function() { return CategoriesManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/categories.service */ "./src/app/help-center/shared/categories.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _categories_filterer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../categories-filterer */ "./src/app/help-center/manage/categories-filterer.ts");
/* harmony import */ var _common_core_ui_custom_scrollbar_custom_scrollbar_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/core/ui/custom-scrollbar/custom-scrollbar.directive */ "./src/common/core/ui/custom-scrollbar/custom-scrollbar.directive.ts");
/* harmony import */ var _common_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/core/services/local-storage.service */ "./src/common/core/services/local-storage.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var CategoriesManagerComponent = /** @class */ (function () {
    /**
     * CategoriesManagerComponent Constructor.
     */
    function CategoriesManagerComponent(api, storage) {
        this.api = api;
        this.storage = storage;
        /**
         * Fired only when changes have originated from component and not setters.
         */
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Control for categories search field.
         */
        this.searchQuery = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        /**
         * Currently selected categories.
         */
        this.selectedCategories = [];
        /**
         * Categories filtered by search query.
         */
        this.categories = [];
        /**
         * All available categories.
         */
        this.allCategories = [];
    }
    CategoriesManagerComponent.prototype.ngOnInit = function () {
        this.bindSearchQuery();
        if (this.initialCategories) {
            this.selectedCategories = this.initialCategories.slice();
        }
        else {
            this.selectedCategories = this.storage.get('selectedCategories', []);
        }
        if (!this.allCategories.length) {
            this.refresh();
        }
    };
    /**
     * Return currently selected categories.
     */
    CategoriesManagerComponent.prototype.getSelectedCategories = function () {
        return this.selectedCategories;
    };
    /**
     * Select specified categories.
     */
    CategoriesManagerComponent.prototype.setSelectedCategories = function (categories) {
        if (!categories)
            return;
        this.selectedCategories = categories.map(function (category) { return category.id; });
    };
    /**
     * Set specified categories on component.
     */
    CategoriesManagerComponent.prototype.setCategories = function (categories) {
        this.categories = categories;
        this.allCategories = categories;
    };
    /**
     * Refresh all categories from backend.
     */
    CategoriesManagerComponent.prototype.refresh = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.api.getCategories().subscribe(function (response) {
                _this.setCategories(response.categories);
                resolve();
            });
        });
    };
    /**
     * Check if specified category is selected.
     */
    CategoriesManagerComponent.prototype.categoryIsSelected = function (id) {
        return this.selectedCategories.indexOf(id) > -1;
    };
    /**
     * Check if any of specified category children are selected.
     */
    CategoriesManagerComponent.prototype.childIsSelected = function (category) {
        if (!category.children.length)
            return false;
        for (var i = 0; i < category.children.length; i++) {
            if (this.categoryIsSelected(category.children[i].id)) {
                return true;
            }
        }
    };
    /**
     * Select or deselect specified category and its parent (if specified)
     */
    CategoriesManagerComponent.prototype.toggle = function (category, parentId) {
        var index = this.selectedCategories.indexOf(category.id);
        console.log("AAA");
        // toggle category
        if (index > -1) {
            this.selectedCategories.splice(index, 1);
        }
        else {
            this.selectedCategories.push(category.id);
        }
        // also select parent if we are toggling child category
        if (parentId && !this.categoryIsSelected(parentId)) {
            this.selectedCategories.push(parentId);
        }
        // deselect all child categories as well
        this.deselectChildren(category);
        this.storage.set('selectedCategories', this.selectedCategories);
        this.onChange.emit();
    };
    /**
     * Deselect all categories.
     */
    CategoriesManagerComponent.prototype.deselectAll = function () {
        this.selectedCategories = [];
        this.storage.set('selectedCategories', []);
        this.onChange.emit();
    };
    /**
     * Deselect all children of specified category.
     */
    CategoriesManagerComponent.prototype.deselectChildren = function (parent) {
        var _this = this;
        if (!parent.children)
            return;
        parent.children.forEach(function (child) {
            var index = _this.selectedCategories.indexOf(child.id);
            index > -1 && _this.selectedCategories.splice(index, 1);
        });
    };
    /**
     * Get child categories and parent categories
     * whose children are not selected.
     */
    CategoriesManagerComponent.prototype.getExactSelectedCategories = function () {
        var _this = this;
        return this.selectedCategories.filter(function (id) {
            var category = _this.categories.find(function (category) { return category.id === id; });
            return !category || !_this.childIsSelected(category);
        });
    };
    /**
     * Bind categories search bar events needed
     * for filtering on keyup.
     */
    CategoriesManagerComponent.prototype.bindSearchQuery = function () {
        var _this = this;
        this.searchQuery.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["distinctUntilChanged"])())
            .subscribe(function (query) {
            _this.categories = (new _categories_filterer__WEBPACK_IMPORTED_MODULE_3__["CategoriesFilterer"]).filter(query, _this.allCategories);
            _this.scrollbar.update();
        });
    };
    return CategoriesManagerComponent;
}());



/***/ }),

/***/ "./src/app/help-center/manage/category-modal/category-modal.component.ngfactory.js":
/*!*****************************************************************************************!*\
  !*** ./src/app/help-center/manage/category-modal/category-modal.component.ngfactory.js ***!
  \*****************************************************************************************/
/*! exports provided: Inject_1, ɵangular_packages_core_core_a_2, InjectionToken_4, NgZone_8, ViewChild_15, ɵangular_packages_core_core_b_16, Query_17, ComponentFactoryResolver_19, ViewContainerRef_20, Output_21, Optional_22, ElementRef_23, PLATFORM_ID_27, ChangeDetectorRef_28, MAT_DIALOG_DATA_3, MatDialogRef_5, MatDialogContainer_13, MatDialogConfig_29, OverlayRef_6, OverlayKeyboardDispatcher_9, DOCUMENT_10, Location_11, LocationStrategy_12, BasePortalOutlet_14, CdkPortalOutlet_18, FocusTrapFactory_24, InteractivityChecker_25, Platform_26, View_MatDialogContainer_0_30, RenderType_MatDialogContainer_31, MatDialogContainerNgFactory_32, RenderType_CategoryModalComponent, View_CategoryModalComponent_0, View_CategoryModalComponent_Host_0, CategoryModalComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CategoryModalComponent", function() { return RenderType_CategoryModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategoryModalComponent_0", function() { return View_CategoryModalComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CategoryModalComponent_Host_0", function() { return View_CategoryModalComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModalComponentNgFactory", function() { return CategoryModalComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Inject_1", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_a_2", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectionToken_4", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgZone_8", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewChild_15", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_16", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query_17", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentFactoryResolver_19", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewContainerRef_20", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Output_21", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Optional_22", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementRef_23", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLATFORM_ID_27", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangeDetectorRef_28", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]; });

/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA_3", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogRef_5", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainer_13", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogConfig_29", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]; });

/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayRef_6", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher_9", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayKeyboardDispatcher"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOCUMENT_10", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location_11", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationStrategy_12", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]; });

/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasePortalOutlet_14", function() { return _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["BasePortalOutlet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet_18", function() { return _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"]; });

/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusTrapFactory_24", function() { return _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusTrapFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InteractivityChecker_25", function() { return _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["InteractivityChecker"]; });

/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Platform_26", function() { return _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]; });

/* harmony import */ var _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/dialog/typings/index.ngfactory */ "./node_modules/@angular/material/dialog/typings/index.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View_MatDialogContainer_0_30", function() { return _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatDialogContainer_0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderType_MatDialogContainer_31", function() { return _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatDialogContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainerNgFactory_32", function() { return _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["MatDialogContainerNgFactory"]; });

/* harmony import */ var _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/core/translations/translate.directive */ "./src/common/core/translations/translate.directive.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_core_translations_translate_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../common/core/translations/translate.pipe */ "./src/common/core/translations/translate.pipe.ts");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _node_modules_angular_material_slide_toggle_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/slide-toggle/typings/index.ngfactory */ "./node_modules/@angular/material/slide-toggle/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../common/uploads/upload-queue/upload-queue.service */ "./src/common/uploads/upload-queue/upload-queue.service.ts");
/* harmony import */ var _common_uploads_uploads_api_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../common/uploads/uploads-api.service */ "./src/common/uploads/uploads-api.service.ts");
/* harmony import */ var _common_uploads_validation_default_upload_validator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../common/uploads/validation/default-upload-validator */ "./src/common/uploads/validation/default-upload-validator.ts");
/* harmony import */ var _category_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./category-modal.component */ "./src/app/help-center/manage/category-modal/category-modal.component.ts");
/* harmony import */ var _shared_categories_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../shared/categories.service */ "./src/app/help-center/shared/categories.service.ts");
/* harmony import */ var _common_account_settings_avatar_validator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../common/account-settings/avatar-validator */ "./src/common/account-settings/avatar-validator.ts");
/* harmony import */ var _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../common/core/ui/toast.service */ "./src/common/core/ui/toast.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





































var styles_CategoryModalComponent = [];
var RenderType_CategoryModalComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CategoryModalComponent, data: {} });

function View_CategoryModalComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "span", [["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Update Category"]))], null, null); }
function View_CategoryModalComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "span", [["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["New Category"]))], null, null); }
function View_CategoryModalComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "error name-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errors.name; _ck(_v, 1, 0, currVal_0); }); }
function View_CategoryModalComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "error image-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errors.image; _ck(_v, 1, 0, currVal_0); }); }
function View_CategoryModalComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_s"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.id; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.name; _ck(_v, 3, 0, currVal_2); }); }
function View_CategoryModalComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "error parent-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errors.parent_id; _ck(_v, 1, 0, currVal_0); }); }
function View_CategoryModalComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "error description-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.errors.description; _ck(_v, 1, 0, currVal_0); }); }
function View_CategoryModalComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "span", [["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Update"]))], null, null); }
function View_CategoryModalComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "span", [["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Create"]))], null, null); }
function View_CategoryModalComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _common_core_translations_translate_pipe__WEBPACK_IMPORTED_MODULE_12__["TransPipe"], [_common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 18, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 8, "h2", [["class", "mat-dialog-title"], ["mat-dialog-title", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CategoryModalComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CategoryModalComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 5, "button", [["class", "close-button"], ["mat-icon-button", ""], ["tabindex", "-1"], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.close() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, 0, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "close"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 133, "form", [["ngNativeValidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.confirm() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](24, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](26, 0, null, null, 108, "mat-dialog-content", [["class", "many-inputs mat-dialog-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 15, "div", [["class", "input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](31, 0, null, null, 2, "label", [["for", "name"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](32, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Name"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 5, "input", [["id", "name"], ["name", "name"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 36)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 36).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 36)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 36)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.name = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](36, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](40, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CategoryModalComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](43, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 27, "div", [["class", "input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](48, 0, null, null, 2, "label", [["for", "image"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](49, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Image"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 17, "div", [["class", "input-with-action"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](54, 16777216, null, null, 7, "button", [["class", "addon"], ["color", "accent"], ["mat-flat-button", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longpress" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56).show() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("touchend" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 56)._handleTouchend() !== false);
        ad = (pd_2 && ad);
    } if (("click" === en)) {
        var pd_3 = (_co.openInsertImageDialog() !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](55, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](56, 147456, null, 0, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltip"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_19__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["AriaDescriber"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MAT_TOOLTIP_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["Directionality"]], [2, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MAT_TOOLTIP_DEFAULT_OPTIONS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["HAMMER_LOADER"]]], { message: [0, "message"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](57, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](59, 0, null, 0, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "file-upload"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](60, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](63, 0, null, null, 5, "input", [["id", "image"], ["name", "image"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 64)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 64).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 64)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 64)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.image = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](64, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](66, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](68, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CategoryModalComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](72, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, null, 25, "div", [["class", "input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](77, 0, null, null, 2, "label", [["for", "name"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](78, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Parent Category"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](81, 0, null, null, 15, "select", [["id", "parent_id"], ["name", "parent_id"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 82).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.model.parent_id = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](82, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](84, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](86, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](88, 0, null, null, 4, "option", [["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](89, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"]]], { ngValue: [0, "ngValue"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](90, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_s"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { ngValue: [0, "ngValue"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](91, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["No Parent Category"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CategoryModalComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](95, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CategoryModalComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](99, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](102, 0, null, null, 15, "div", [["class", "input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](104, 0, null, null, 2, "label", [["for", "description"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](105, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Description"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](108, 0, null, null, 5, "textarea", [["id", "description"], ["name", "description"], ["rows", "4"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 109)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 109).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 109)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 109)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.description = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](109, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](111, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](113, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_CategoryModalComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](116, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](119, 0, null, null, 14, "div", [["class", "setting-toggle-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](121, 0, null, null, 7, "mat-slide-toggle", [["class", "mat-slide-toggle"], ["id", "hidden"], ["name", "hidden"], ["trans", ""]], [[8, "id", 0], [1, "tabindex", 0], [2, "mat-checked", null], [2, "mat-disabled", null], [2, "mat-slide-toggle-label-before", null], [2, "_mat-animation-noopable", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "focus"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("focus" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 122)._inputElement.nativeElement.focus() !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = ((_co.model.hidden = $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_slide_toggle_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_22__["View_MatSlideToggle_0"], _node_modules_angular_material_slide_toggle_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_22__["RenderType_MatSlideToggle"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](122, 1228800, null, 0, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggle"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ANIMATION_MODULE_TYPE"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_20__["Directionality"]]], { name: [0, "name"], id: [1, "id"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_23__["MatSlideToggle"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](124, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](126, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](127, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Hidden"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](130, 0, null, null, 2, "p", [["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](131, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Whether this category should be displayed in help center."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](136, 0, null, null, 17, "mat-dialog-actions", [["class", "mat-dialog-actions"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](137, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](139, 0, null, null, 3, "button", [["class", "cancel-button"], ["mat-button", ""], ["trans", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.close() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](140, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](141, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](144, 0, null, null, 8, "button", [["class", "submit-button"], ["color", "accent"], ["mat-raised-button", ""], ["type", "submit"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](145, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_CategoryModalComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](148, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_CategoryModalComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](151, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 4, 0); var currVal_1 = _co.updating; _ck(_v, 7, 0, currVal_1); var currVal_2 = !_co.updating; _ck(_v, 10, 0, currVal_2); var currVal_7 = "close"; _ck(_v, 17, 0, currVal_7); var currVal_22 = "name"; var currVal_23 = _co.model.name; _ck(_v, 38, 0, currVal_22, currVal_23); var currVal_24 = _co.errors.name; _ck(_v, 43, 0, currVal_24); var currVal_27 = "accent"; _ck(_v, 55, 0, currVal_27); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 56, 0, _ck(_v, 57, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 0), "Upload image")); _ck(_v, 56, 0, currVal_28); var currVal_31 = "file-upload"; _ck(_v, 60, 0, currVal_31); var currVal_39 = "image"; var currVal_40 = _co.model.image; _ck(_v, 66, 0, currVal_39, currVal_40); var currVal_41 = _co.errors.image; _ck(_v, 72, 0, currVal_41); var currVal_49 = "parent_id"; var currVal_50 = _co.model.parent_id; _ck(_v, 84, 0, currVal_49, currVal_50); var currVal_51 = null; _ck(_v, 89, 0, currVal_51); var currVal_52 = null; _ck(_v, 90, 0, currVal_52); var currVal_53 = _co.categories; _ck(_v, 95, 0, currVal_53); var currVal_54 = _co.errors.parent_id; _ck(_v, 99, 0, currVal_54); var currVal_62 = "description"; var currVal_63 = _co.model.description; _ck(_v, 111, 0, currVal_62, currVal_63); var currVal_64 = _co.errors.description; _ck(_v, 116, 0, currVal_64); var currVal_78 = "hidden"; var currVal_79 = "hidden"; _ck(_v, 122, 0, currVal_78, currVal_79); var currVal_80 = "hidden"; var currVal_81 = _co.model.hidden; _ck(_v, 124, 0, currVal_80, currVal_81); var currVal_86 = "accent"; _ck(_v, 145, 0, currVal_86); var currVal_87 = _co.updating; _ck(_v, 148, 0, currVal_87); var currVal_88 = !_co.updating; _ck(_v, 151, 0, currVal_88); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).id; _ck(_v, 3, 0, currVal_0); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).disabled || null); var currVal_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14)._animationMode === "NoopAnimations"); _ck(_v, 13, 0, currVal_3, currVal_4); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).inline; var currVal_6 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).color !== "warn")); _ck(_v, 16, 0, currVal_5, currVal_6); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 24).ngClassPending; _ck(_v, 21, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).ngClassUntouched; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).ngClassTouched; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).ngClassPristine; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).ngClassDirty; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).ngClassValid; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).ngClassInvalid; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 40).ngClassPending; _ck(_v, 35, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21); var currVal_25 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55).disabled || null); var currVal_26 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 55)._animationMode === "NoopAnimations"); _ck(_v, 54, 0, currVal_25, currVal_26); var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 60).inline; var currVal_30 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 60).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 60).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 60).color !== "warn")); _ck(_v, 59, 0, currVal_29, currVal_30); var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassUntouched; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassTouched; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassPristine; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassDirty; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassValid; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassInvalid; var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 68).ngClassPending; _ck(_v, 63, 0, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 86).ngClassUntouched; var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 86).ngClassTouched; var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 86).ngClassPristine; var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 86).ngClassDirty; var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 86).ngClassValid; var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 86).ngClassInvalid; var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 86).ngClassPending; _ck(_v, 81, 0, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48); var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 113).ngClassUntouched; var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 113).ngClassTouched; var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 113).ngClassPristine; var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 113).ngClassDirty; var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 113).ngClassValid; var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 113).ngClassInvalid; var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 113).ngClassPending; _ck(_v, 108, 0, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61); var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 122).id; var currVal_66 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 122).disabled ? null : (0 - 1)); var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 122).checked; var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 122).disabled; var currVal_69 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 122).labelPosition == "before"); var currVal_70 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 122)._animationMode === "NoopAnimations"); var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassUntouched; var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassTouched; var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassPristine; var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassDirty; var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassValid; var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassInvalid; var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).ngClassPending; _ck(_v, 121, 1, [currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77]); var currVal_82 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 141).disabled || null); var currVal_83 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 141)._animationMode === "NoopAnimations"); _ck(_v, 139, 0, currVal_82, currVal_83); var currVal_84 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 145).disabled || null); var currVal_85 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 145)._animationMode === "NoopAnimations"); _ck(_v, 144, 0, currVal_84, currVal_85); }); }
function View_CategoryModalComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "category-modal", [], null, null, null, View_CategoryModalComponent_0, RenderType_CategoryModalComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_24__["UploadQueueService"], _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_24__["UploadQueueService"], [_common_uploads_uploads_api_service__WEBPACK_IMPORTED_MODULE_25__["UploadsApiService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _common_uploads_validation_default_upload_validator__WEBPACK_IMPORTED_MODULE_26__["DefaultUploadValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _category_modal_component__WEBPACK_IMPORTED_MODULE_27__["CategoryModalComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"], _shared_categories_service__WEBPACK_IMPORTED_MODULE_28__["CategoriesService"], _common_account_settings_avatar_validator__WEBPACK_IMPORTED_MODULE_29__["AvatarValidator"], _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_24__["UploadQueueService"], _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_30__["Toast"]], null, null)], null, null); }
var CategoryModalComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("category-modal", _category_modal_component__WEBPACK_IMPORTED_MODULE_27__["CategoryModalComponent"], View_CategoryModalComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/help-center/manage/category-modal/category-modal.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/help-center/manage/category-modal/category-modal.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CategoryModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModalComponent", function() { return CategoryModalComponent; });
/* harmony import */ var _shared_models_Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/models/Category */ "./src/app/shared/models/Category.ts");
/* harmony import */ var _shared_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/categories.service */ "./src/app/help-center/shared/categories.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_account_settings_avatar_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/account-settings/avatar-validator */ "./src/common/account-settings/avatar-validator.ts");
/* harmony import */ var _common_uploads_utils_open_upload_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/uploads/utils/open-upload-window */ "./src/common/uploads/utils/open-upload-window.ts");
/* harmony import */ var _common_uploads_upload_input_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/uploads/upload-input-config */ "./src/common/uploads/upload-input-config.ts");
/* harmony import */ var _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/uploads/upload-queue/upload-queue.service */ "./src/common/uploads/upload-queue/upload-queue.service.ts");
/* harmony import */ var _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/core/ui/toast.service */ "./src/common/core/ui/toast.service.ts");








var CategoryModalComponent = /** @class */ (function () {
    function CategoryModalComponent(dialogRef, data, api, imageValidator, uploadQueue, toast) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.api = api;
        this.imageValidator = imageValidator;
        this.uploadQueue = uploadQueue;
        this.toast = toast;
        this.categories = [];
        this.model = new _shared_models_Category__WEBPACK_IMPORTED_MODULE_0__["Category"]({ parent_id: null });
        this.updating = false;
        this.errors = {};
        this.hydrate();
    }
    CategoryModalComponent.prototype.close = function (category) {
        this.dialogRef.close(category);
    };
    CategoryModalComponent.prototype.confirm = function () {
        var _this = this;
        this.api.createOrUpdateCategory(this.getPayload()).subscribe(function (category) {
            if (_this.model.id) {
                _this.toast.open('Updated category.');
            }
            else {
                _this.toast.open('Created category.');
            }
            _this.close(category);
        }, function (errorResponse) { return _this.errors = errorResponse.messages; });
    };
    CategoryModalComponent.prototype.hydrate = function () {
        this.fetchCategories(this.data.category);
        if (this.data.category) {
            this.updating = true;
            this.model = this.data.category;
        }
        if (this.data.parentId)
            this.model.parent_id = this.data.parentId;
    };
    CategoryModalComponent.prototype.getPayload = function () {
        return {
            id: this.model.id,
            name: this.model.name,
            image: this.model.image,
            description: this.model.description,
            parent_id: this.model.parent_id || null,
            hidden: this.model.hidden,
        };
    };
    CategoryModalComponent.prototype.fetchCategories = function (category) {
        var _this = this;
        this.api.getCategories().subscribe(function (response) {
            // remove category we're currently editing from parent_id
            // select so category can't be select as parent to itself
            _this.categories = response.categories.filter(function (current) {
                return !category || category.id !== current.id;
            });
        });
    };
    CategoryModalComponent.prototype.openInsertImageDialog = function () {
        var _this = this;
        var params = {
            uri: 'uploads/images',
            httpParams: { type: 'category' },
            validator: this.imageValidator
        };
        Object(_common_uploads_utils_open_upload_window__WEBPACK_IMPORTED_MODULE_4__["openUploadWindow"])({ types: [_common_uploads_upload_input_config__WEBPACK_IMPORTED_MODULE_5__["UploadInputTypes"].image], multiple: false }).then(function (uploadedFiles) {
            if (!uploadedFiles)
                return;
            _this.uploadQueue.start(uploadedFiles, params).subscribe(function (fileEntry) {
                _this.model.image = fileEntry.url;
            });
        });
    };
    return CategoryModalComponent;
}());



/***/ }),

/***/ "./src/app/help-center/manage/help-center-manage.component.ngfactory.js":
/*!******************************************************************************!*\
  !*** ./src/app/help-center/manage/help-center-manage.component.ngfactory.js ***!
  \******************************************************************************/
/*! exports provided: RenderType_HelpCenterManageComponent, View_HelpCenterManageComponent_0, View_HelpCenterManageComponent_Host_0, HelpCenterManageComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HelpCenterManageComponent", function() { return RenderType_HelpCenterManageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HelpCenterManageComponent_0", function() { return View_HelpCenterManageComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HelpCenterManageComponent_Host_0", function() { return View_HelpCenterManageComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpCenterManageComponentNgFactory", function() { return HelpCenterManageComponentNgFactory; });
/* harmony import */ var _help_center_manage_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-center-manage.component.scss.ngstyle */ "./src/app/help-center/manage/help-center-manage.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_core_ui_material_navbar_material_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/core/ui/material-navbar/material-navbar.component.ngfactory */ "./src/common/core/ui/material-navbar/material-navbar.component.ngfactory.js");
/* harmony import */ var _common_core_ui_material_navbar_material_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/core/ui/material-navbar/material-navbar.component */ "./src/common/core/ui/material-navbar/material-navbar.component.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _common_auth_current_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/auth/current-user */ "./src/common/auth/current-user.ts");
/* harmony import */ var _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/core/ui/breakpoints.service */ "./src/common/core/ui/breakpoints.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _help_center_manage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./help-center-manage.component */ "./src/app/help-center/manage/help-center-manage.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_HelpCenterManageComponent = [_help_center_manage_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HelpCenterManageComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_HelpCenterManageComponent, data: {} });

function View_HelpCenterManageComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "material-navbar", [["menuPosition", "agent-mailbox"]], [[2, "transparent", null]], null, null, _common_core_ui_material_navbar_material_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_MaterialNavbar_0"], _common_core_ui_material_navbar_material_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_MaterialNavbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _common_core_ui_material_navbar_material_navbar_component__WEBPACK_IMPORTED_MODULE_3__["MaterialNavbar"], [_common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_4__["Settings"], _common_auth_current_user__WEBPACK_IMPORTED_MODULE_5__["CurrentUser"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_6__["BreakpointsService"]], { menuPosition: [0, "menuPosition"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var currVal_1 = "agent-mailbox"; _ck(_v, 1, 0, currVal_1); _ck(_v, 6, 0); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).transparent; _ck(_v, 0, 0, currVal_0); }); }
function View_HelpCenterManageComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "help-center-manage", [], null, null, null, View_HelpCenterManageComponent_0, RenderType_HelpCenterManageComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _help_center_manage_component__WEBPACK_IMPORTED_MODULE_8__["HelpCenterManageComponent"], [_common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_4__["Settings"], _common_auth_current_user__WEBPACK_IMPORTED_MODULE_5__["CurrentUser"]], null, null)], null, null); }
var HelpCenterManageComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("help-center-manage", _help_center_manage_component__WEBPACK_IMPORTED_MODULE_8__["HelpCenterManageComponent"], View_HelpCenterManageComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/help-center/manage/help-center-manage.component.scss.ngstyle.js":
/*!*********************************************************************************!*\
  !*** ./src/app/help-center/manage/help-center-manage.component.scss.ngstyle.js ***!
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
var styles = ["\n\n\nhelp-center-manage .navbar {\n  box-shadow: none; }\nhelp-center-manage .navbar .logo {\n    margin-right: 50px; }\nhelp-center-manage .body {\n  height: calc(100vh - 70px); }\nhelp-center-manage .action-bar {\n  background-color: #fff;\n  height: 55px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  display: flex;\n  justify-content: center;\n  position: relative;\n  z-index: 2; }\nhelp-center-manage .action-bar .nav {\n    flex: 1 1 auto;\n    display: flex;\n    align-items: center; }\nhelp-center-manage .action-bar .nav .nav-item {\n      display: inline-block;\n      color: rgba(0, 0, 0, 0.54);\n      font-size: 1.6rem;\n      margin-left: 25px;\n      border-bottom: 2px solid transparent;\n      height: 100%;\n      line-height: 55px; }\nhelp-center-manage .action-bar .nav .nav-item.router-link-active {\n        border-color: #689f38; }\nhelp-center-manage .action-bar .actions {\n    flex: 1 1 auto;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    margin-right: 30px; }\nhelp-center-manage .action-bar .actions .input-container {\n      flex: 0 0 300px;\n      height: 100%;\n      position: relative; }\nhelp-center-manage .action-bar .actions .input-container .mat-icon {\n        position: absolute;\n        top: 16px;\n        left: 10px;\n        color: rgba(38, 38, 38, 0.5); }\nhelp-center-manage .action-bar .actions .input-container input {\n        font-size: 1.7rem;\n        padding-left: 40px;\n        border-top: none;\n        border-bottom: none;\n        height: 100%; }\nhelp-center-manage .action-bar .actions .action {\n      width: auto; }\nhelp-center-manage .action-bar .actions .new-item-button {\n      background-color: #689f38;\n      color: #fff;\n      border-radius: 50px;\n      padding: 1px 20px;\n      border: none;\n      line-height: 30px;\n      vertical-align: middle;\n      white-space: nowrap;\n      margin-left: 30px; }\nhelp-center-manage .action-bar .actions .new-item-button .mat-icon {\n        transition: -webkit-transform 0.2s ease-in-out;\n        transition: transform 0.2s ease-in-out;\n        transition: transform 0.2s ease-in-out, -webkit-transform 0.2s ease-in-out;\n        vertical-align: middle; }\nhelp-center-manage .action-bar .actions .new-item-button:hover mat-icon {\n        -webkit-transform: rotate(180deg);\n                transform: rotate(180deg); }\nhelp-center-manage .panel {\n  margin-bottom: 15px;\n  background-color: #fff;\n  border: 1px solid #E0E0E0;\n  border-radius: 3px; }\nhelp-center-manage .panel .panel-header {\n    display: flex;\n    align-items: center;\n    padding: 0 10px;\n    background-color: #FAFAFA;\n    border-bottom: 1px solid #E0E0E0;\n    min-height: 41px; }\nhelp-center-manage .panel .panel-header button {\n      margin-left: auto; }\nhelp-center-manage .panel .panel-body {\n    overflow: auto;\n    padding: 10px; }\nhelp-center-manage .panel .panel-body .filter-button {\n      min-width: 75px;\n      padding: 0 5px; }\nhelp-center-manage .panel .panel-body .filter-button.active {\n        background-color: #689f38;\n        color: #fff; }\n"];



/***/ }),

/***/ "./src/app/help-center/manage/help-center-manage.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/help-center/manage/help-center-manage.component.ts ***!
  \********************************************************************/
/*! exports provided: HelpCenterManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpCenterManageComponent", function() { return HelpCenterManageComponent; });
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _common_auth_current_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/auth/current-user */ "./src/common/auth/current-user.ts");


var HelpCenterManageComponent = /** @class */ (function () {
    function HelpCenterManageComponent(settings, currentUser) {
        this.settings = settings;
        this.currentUser = currentUser;
    }
    return HelpCenterManageComponent;
}());



/***/ }),

/***/ "./src/app/help-center/manage/help-center-manage.module.ngfactory.js":
/*!***************************************************************************!*\
  !*** ./src/app/help-center/manage/help-center-manage.module.ngfactory.js ***!
  \***************************************************************************/
/*! exports provided: ɵEmptyOutletComponent_1, Router_143, ROUTES_149, RouterModule_153, ɵangular_packages_router_router_a_154, ɵEmptyOutletComponentNgFactory_2, MatDialogContainer_3, MatDialog_88, MAT_DIALOG_DEFAULT_OPTIONS_89, MAT_DIALOG_SCROLL_STRATEGY_90, MatDialogModule_91, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY_92, MatDialogContainerNgFactory_4, MatSnackBarContainer_7, SimpleSnackBar_9, MatSnackBarModule_166, MatSnackBarContainerNgFactory_8, SimpleSnackBarNgFactory_10, TooltipComponent_11, MAT_TOOLTIP_SCROLL_STRATEGY_100, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_101, MatTooltipModule_102, TooltipComponentNgFactory_12, ColorPickerComponent_31, ColorPickerService_123, ColorPickerModule_124, ColorPickerComponentNgFactory_32, NgLocalization_49, NgLocaleLocalization_50, ɵangular_packages_common_common_a_52, CommonModule_53, DOCUMENT_64, Location_84, LOCALE_ID_51, PLATFORM_ID_65, Injector_72, ComponentFactoryResolver_79, NgZone_82, ɵangular_packages_forms_forms_j_54, FormsModule_55, FormBuilder_56, ReactiveFormsModule_57, ɵangular_packages_forms_forms_bc_152, ɵangular_packages_common_http_http_h_58, HttpXsrfTokenExtractor_59, ɵangular_packages_common_http_http_f_60, HttpClientXsrfModule_61, HTTP_INTERCEPTORS_62, ɵangular_packages_common_http_http_g_63, ɵangular_packages_common_http_http_e_66, HttpClientModule_67, HttpClient_68, HttpHandler_69, ɵHttpInterceptingHandler_70, HttpBackend_71, HttpXhrBackend_73, XhrFactory_74, ɵangular_packages_common_http_http_d_75, Overlay_76, ScrollStrategyOptions_77, OverlayContainer_78, OverlayPositionBuilder_80, OverlayKeyboardDispatcher_81, OverlayModule_85, ɵc_86, ɵd_87, Directionality_83, BidiModule_156, MAT_MENU_SCROLL_STRATEGY_95, ɵd24_96, MatMenuModule_97, MutationObserverFactory_98, ObserversModule_99, HAMMER_GESTURE_CONFIG_103, DomSanitizer_111, HAMMER_LOADER_161, GestureConfig_104, MAT_HAMMER_OPTIONS_105, MatCommonModule_106, ErrorStateMatcher_119, MATERIAL_SANITY_CHECKS_160, MatRippleModule_162, MatPseudoCheckboxModule_176, MatOptionModule_177, BreakpointObserver_108, MatIconRegistry_110, MatIconModule_164, MatSortHeaderIntl_116, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY_117, MatSortModule_118, MatChipsModule_120, MAT_CHIPS_DEFAULT_OPTIONS_121, ENTER_122, MAT_SELECT_SCROLL_STRATEGY_125, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY_126, MatSelectModule_127, MatPaginatorIntl_128, MAT_PAGINATOR_INTL_PROVIDER_FACTORY_129, MatPaginatorModule_130, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_133, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_134, MatAutocompleteModule_135, MatSlideToggleModule_144, DragDrop_145, DragDropRegistry_147, DragDropModule_148, ViewportRuler_146, ScrollingModule_159, PortalModule_157, PlatformModule_158, MatButtonModule_163, MatCheckboxModule_167, A11yModule_168, MatProgressBarModule_169, CdkTableModule_171, MatTableModule_172, MatFormFieldModule_178, HcManageModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcManageModuleNgFactory", function() { return HcManageModuleNgFactory; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵEmptyOutletComponent_1", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ɵEmptyOutletComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router_143", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROUTES_149", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ROUTES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterModule_153", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_router_router_a_154", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_router_router_a"]; });

/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵEmptyOutletComponentNgFactory_2", function() { return _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_1__["ɵEmptyOutletComponentNgFactory"]; });

/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainer_3", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialog_88", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS_89", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_90", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogModule_91", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY_92", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"]; });

/* harmony import */ var _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/dialog/typings/index.ngfactory */ "./node_modules/@angular/material/dialog/typings/index.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainerNgFactory_4", function() { return _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDialogContainerNgFactory"]; });

/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarContainer_7", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleSnackBar_9", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["SimpleSnackBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarModule_166", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"]; });

/* harmony import */ var _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/snack-bar/typings/index.ngfactory */ "./node_modules/@angular/material/snack-bar/typings/index.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarContainerNgFactory_8", function() { return _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarContainerNgFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleSnackBarNgFactory_10", function() { return _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["SimpleSnackBarNgFactory"]; });

/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent_11", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_100", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MAT_TOOLTIP_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_101", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTooltipModule_102", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"]; });

/* harmony import */ var _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/tooltip/typings/index.ngfactory */ "./node_modules/@angular/material/tooltip/typings/index.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipComponentNgFactory_12", function() { return _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["TooltipComponentNgFactory"]; });

/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent_31", function() { return ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerService_123", function() { return ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerModule_124", function() { return ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"]; });

/* harmony import */ var _node_modules_ngx_color_picker_dist_ngx_color_picker_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../node_modules/ngx-color-picker/dist/ngx-color-picker.ngfactory */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponentNgFactory_32", function() { return _node_modules_ngx_color_picker_dist_ngx_color_picker_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ColorPickerComponentNgFactory"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgLocalization_49", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocalization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgLocaleLocalization_50", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocaleLocalization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_common_a_52", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_common_a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonModule_53", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOCUMENT_64", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location_84", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOCALE_ID_51", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_11__["LOCALE_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLATFORM_ID_65", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_11__["PLATFORM_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector_72", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentFactoryResolver_79", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ComponentFactoryResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgZone_82", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgZone"]; });

/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j_54", function() { return _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormsModule_55", function() { return _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormBuilder_56", function() { return _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule_57", function() { return _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc_152", function() { return _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_bc"]; });

/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h_58", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor_59", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f_60", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule_61", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS_62", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g_63", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e_66", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule_67", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClient_68", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpHandler_69", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler_70", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵHttpInterceptingHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpBackend_71", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend_73", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XhrFactory_74", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d_75", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"]; });

/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overlay_76", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions_77", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ScrollStrategyOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayContainer_78", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder_80", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayPositionBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher_81", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayKeyboardDispatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayModule_85", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵc_86", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ɵc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵd_87", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ɵd"]; });

/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Directionality_83", function() { return _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BidiModule_156", function() { return _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["BidiModule"]; });

/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_SCROLL_STRATEGY_95", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MAT_MENU_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵd24_96", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["ɵd24"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatMenuModule_97", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"]; });

/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MutationObserverFactory_98", function() { return _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["MutationObserverFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObserversModule_99", function() { return _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["ObserversModule"]; });

/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HAMMER_GESTURE_CONFIG_103", function() { return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HAMMER_GESTURE_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomSanitizer_111", function() { return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["DomSanitizer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HAMMER_LOADER_161", function() { return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HAMMER_LOADER"]; });

/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GestureConfig_104", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["GestureConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_HAMMER_OPTIONS_105", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MAT_HAMMER_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCommonModule_106", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatCommonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher_119", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["ErrorStateMatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS_160", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MATERIAL_SANITY_CHECKS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRippleModule_162", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule_176", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatPseudoCheckboxModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatOptionModule_177", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOptionModule"]; });

/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakpointObserver_108", function() { return _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["BreakpointObserver"]; });

/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatIconRegistry_110", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatIconModule_164", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"]; });

/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl_116", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortHeaderIntl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY_117", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MAT_SORT_HEADER_INTL_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSortModule_118", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"]; });

/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChipsModule_120", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS_121", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MAT_CHIPS_DEFAULT_OPTIONS"]; });

/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ENTER_122", function() { return _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__["ENTER"]; });

/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_125", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MAT_SELECT_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY_126", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSelectModule_127", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"]; });

/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl_128", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorIntl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY_129", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorModule_130", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"]; });

/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_133", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_134", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule_135", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MatAutocompleteModule"]; });

/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSlideToggleModule_144", function() { return _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"]; });

/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragDrop_145", function() { return _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_29__["DragDrop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragDropRegistry_147", function() { return _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_29__["DragDropRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DragDropModule_148", function() { return _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_29__["DragDropModule"]; });

/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewportRuler_146", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__["ViewportRuler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollingModule_159", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__["ScrollingModule"]; });

/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalModule_157", function() { return _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__["PortalModule"]; });

/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlatformModule_158", function() { return _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_32__["PlatformModule"]; });

/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatButtonModule_163", function() { return _angular_material_button__WEBPACK_IMPORTED_MODULE_33__["MatButtonModule"]; });

/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxModule_167", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__["MatCheckboxModule"]; });

/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "A11yModule_168", function() { return _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__["A11yModule"]; });

/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatProgressBarModule_169", function() { return _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__["MatProgressBarModule"]; });

/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdkTableModule_171", function() { return _angular_cdk_table__WEBPACK_IMPORTED_MODULE_37__["CdkTableModule"]; });

/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTableModule_172", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"]; });

/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldModule_178", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__["MatFormFieldModule"]; });

/* harmony import */ var _help_center_manage_module__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./help-center-manage.module */ "./src/app/help-center/manage/help-center-manage.module.ts");
/* harmony import */ var _common_core_ui_confirm_modal_confirm_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../common/core/ui/confirm-modal/confirm-modal.component.ngfactory */ "./src/common/core/ui/confirm-modal/confirm-modal.component.ngfactory.js");
/* harmony import */ var _common_file_preview_text_preview_text_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../common/file-preview/text-preview/text-preview.component.ngfactory */ "./src/common/file-preview/text-preview/text-preview.component.ngfactory.js");
/* harmony import */ var _common_file_preview_video_preview_video_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../common/file-preview/video-preview/video-preview.component.ngfactory */ "./src/common/file-preview/video-preview/video-preview.component.ngfactory.js");
/* harmony import */ var _common_file_preview_image_preview_image_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../../common/file-preview/image-preview/image-preview.component.ngfactory */ "./src/common/file-preview/image-preview/image-preview.component.ngfactory.js");
/* harmony import */ var _common_file_preview_pdf_preview_pdf_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../common/file-preview/pdf-preview/pdf-preview.component.ngfactory */ "./src/common/file-preview/pdf-preview/pdf-preview.component.ngfactory.js");
/* harmony import */ var _common_file_preview_default_preview_default_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../../common/file-preview/default-preview/default-preview.component.ngfactory */ "./src/common/file-preview/default-preview/default-preview.component.ngfactory.js");
/* harmony import */ var _common_file_preview_audio_preview_audio_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../common/file-preview/audio-preview/audio-preview.component.ngfactory */ "./src/common/file-preview/audio-preview/audio-preview.component.ngfactory.js");
/* harmony import */ var _common_file_preview_google_docs_viewer_google_docs_viewer_component_ngfactory__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../../common/file-preview/google-docs-viewer/google-docs-viewer.component.ngfactory */ "./src/common/file-preview/google-docs-viewer/google-docs-viewer.component.ngfactory.js");
/* harmony import */ var _shared_email_address_modal_email_address_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../shared/email-address-modal/email-address-modal.component.ngfactory */ "./src/app/shared/email-address-modal/email-address-modal.component.ngfactory.js");
/* harmony import */ var _shared_file_preview_overlay_file_preview_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../shared/file-preview-overlay/file-preview-overlay.component.ngfactory */ "./src/app/shared/file-preview-overlay/file-preview-overlay.component.ngfactory.js");
/* harmony import */ var _common_core_ui_color_picker_colorpicker_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../../../common/core/ui/color-picker/colorpicker-panel.component.ngfactory */ "./src/common/core/ui/color-picker/colorpicker-panel.component.ngfactory.js");
/* harmony import */ var _shared_article_modal_article_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../shared/article-modal/article-modal.component.ngfactory */ "./src/app/help-center/shared/article-modal/article-modal.component.ngfactory.js");
/* harmony import */ var _help_center_manage_component_ngfactory__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./help-center-manage.component.ngfactory */ "./src/app/help-center/manage/help-center-manage.component.ngfactory.js");
/* harmony import */ var _articles_list_articles_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./articles-list/articles-list.component.ngfactory */ "./src/app/help-center/manage/articles-list/articles-list.component.ngfactory.js");
/* harmony import */ var _categories_list_categories_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./categories-list/categories-list.component.ngfactory */ "./src/app/help-center/manage/categories-list/categories-list.component.ngfactory.js");
/* harmony import */ var _new_article_new_article_component_ngfactory__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./new-article/new-article.component.ngfactory */ "./src/app/help-center/manage/new-article/new-article.component.ngfactory.js");
/* harmony import */ var _category_modal_category_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./category-modal/category-modal.component.ngfactory */ "./src/app/help-center/manage/category-modal/category-modal.component.ngfactory.js");
/* harmony import */ var _new_article_article_settings_modal_article_settings_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./new-article/article-settings-modal/article-settings-modal.component.ngfactory */ "./src/app/help-center/manage/new-article/article-settings-modal/article-settings-modal.component.ngfactory.js");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/* harmony import */ var _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../../../common/core/ui/breakpoints.service */ "./src/common/core/ui/breakpoints.service.ts");
/* harmony import */ var _common_file_preview_available_previews__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../../../common/file-preview/available-previews */ "./src/common/file-preview/available-previews.ts");
/* harmony import */ var _common_core_ui_overlay_panel_overlay_panel_service__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../../../common/core/ui/overlay-panel/overlay-panel.service */ "./src/common/core/ui/overlay-panel/overlay-panel.service.ts");
/* harmony import */ var _shared_help_center_service__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../shared/help-center.service */ "./src/app/help-center/shared/help-center.service.ts");
/* harmony import */ var _common_core_http_http_cache_client__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../../../common/core/http/http-cache-client */ "./src/common/core/http/http-cache-client.ts");
/* harmony import */ var _front_search_term_logger_service__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../front/search-term-logger.service */ "./src/app/help-center/front/search-term-logger.service.ts");
/* harmony import */ var _shared_categories_service__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../shared/categories.service */ "./src/app/help-center/shared/categories.service.ts");
/* harmony import */ var _common_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../../../common/core/services/local-storage.service */ "./src/common/core/services/local-storage.service.ts");
/* harmony import */ var _shared_article_article_resolve_service__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../shared/article/article-resolve.service */ "./src/app/help-center/shared/article/article-resolve.service.ts");
/* harmony import */ var _new_article_new_article_resolve_service__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ./new-article/new-article-resolve.service */ "./src/app/help-center/manage/new-article/new-article-resolve.service.ts");
/* harmony import */ var _common_core_ui_custom_scrollbar_custom_scrollbar_module__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../../../common/core/ui/custom-scrollbar/custom-scrollbar.module */ "./src/common/core/ui/custom-scrollbar/custom-scrollbar.module.ts");
/* harmony import */ var _common_core_ui_confirm_modal_confirm_modal_module__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../../../common/core/ui/confirm-modal/confirm-modal.module */ "./src/common/core/ui/confirm-modal/confirm-modal.module.ts");
/* harmony import */ var _common_core_translations_translations_module__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ../../../common/core/translations/translations.module */ "./src/common/core/translations/translations.module.ts");
/* harmony import */ var _common_core_ui_ui_module__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ../../../common/core/ui/ui.module */ "./src/common/core/ui/ui.module.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _common_file_preview_file_preview_module__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ../../../common/file-preview/file-preview.module */ "./src/common/file-preview/file-preview.module.ts");
/* harmony import */ var _common_uploads_uploads_module__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ../../../common/uploads/uploads.module */ "./src/common/uploads/uploads.module.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _common_core_http_http_module__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ../../../common/core/http/http.module */ "./src/common/core/http/http.module.ts");
/* harmony import */ var _common_core_core_module__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ../../../common/core/core.module */ "./src/common/core/core.module.ts");
/* harmony import */ var _common_text_editor_text_editor_module__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ../../../common/text-editor/text-editor.module */ "./src/common/text-editor/text-editor.module.ts");
/* harmony import */ var _shared_help_center_shared_module__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ../shared/help-center-shared.module */ "./src/app/help-center/shared/help-center-shared.module.ts");
/* harmony import */ var _categories_manager_categories_manager_module__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ./categories-manager/categories-manager.module */ "./src/app/help-center/manage/categories-manager/categories-manager.module.ts");
/* harmony import */ var _help_center_manage_component__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ./help-center-manage.component */ "./src/app/help-center/manage/help-center-manage.component.ts");
/* harmony import */ var _common_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ../../../common/guards/auth-guard.service */ "./src/common/guards/auth-guard.service.ts");
/* harmony import */ var _articles_list_articles_list_component__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ./articles-list/articles-list.component */ "./src/app/help-center/manage/articles-list/articles-list.component.ts");
/* harmony import */ var _categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./categories-list/categories-list.component */ "./src/app/help-center/manage/categories-list/categories-list.component.ts");
/* harmony import */ var _new_article_new_article_component__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ./new-article/new-article.component */ "./src/app/help-center/manage/new-article/new-article.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
































































































































var HcManageModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵcmf"](_help_center_manage_module__WEBPACK_IMPORTED_MODULE_40__["HcManageModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_1__["ɵEmptyOutletComponentNgFactory"], _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDialogContainerNgFactory"], _common_core_ui_confirm_modal_confirm_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_41__["ConfirmModalComponentNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["SimpleSnackBarNgFactory"], _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["TooltipComponentNgFactory"], _common_file_preview_text_preview_text_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_42__["TextPreviewComponentNgFactory"], _common_file_preview_video_preview_video_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_43__["VideoPreviewComponentNgFactory"], _common_file_preview_image_preview_image_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_44__["ImagePreviewComponentNgFactory"], _common_file_preview_pdf_preview_pdf_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_45__["PdfPreviewComponentNgFactory"], _common_file_preview_default_preview_default_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_46__["DefaultPreviewComponentNgFactory"], _common_file_preview_audio_preview_audio_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_47__["AudioPreviewComponentNgFactory"], _common_file_preview_google_docs_viewer_google_docs_viewer_component_ngfactory__WEBPACK_IMPORTED_MODULE_48__["GoogleDocsViewerComponentNgFactory"], _shared_email_address_modal_email_address_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_49__["EmailAddressModalComponentNgFactory"], _shared_file_preview_overlay_file_preview_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_50__["FilePreviewOverlayComponentNgFactory"], _node_modules_ngx_color_picker_dist_ngx_color_picker_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ColorPickerComponentNgFactory"], _common_core_ui_color_picker_colorpicker_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_51__["ColorpickerPanelComponentNgFactory"], _shared_article_modal_article_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_52__["ArticleModalComponentNgFactory"], _help_center_manage_component_ngfactory__WEBPACK_IMPORTED_MODULE_53__["HelpCenterManageComponentNgFactory"], _articles_list_articles_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_54__["ArticlesListComponentNgFactory"], _categories_list_categories_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_55__["CategoriesListComponentNgFactory"], _new_article_new_article_component_ngfactory__WEBPACK_IMPORTED_MODULE_56__["NewArticleComponentNgFactory"], _category_modal_category_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_57__["CategoryModalComponentNgFactory"], _new_article_article_settings_modal_article_settings_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_58__["ArticleSettingsModalComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_11__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_59__["Modal"], _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_59__["Modal"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["ɵd24"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HAMMER_GESTURE_CONFIG"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["GestureConfig"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MAT_HAMMER_OPTIONS"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatCommonModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_60__["BreakpointsService"], _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_60__["BreakpointsService"], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["BreakpointObserver"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _common_file_preview_available_previews__WEBPACK_IMPORTED_MODULE_61__["AVAILABLE_PREVIEWS"], _common_file_preview_available_previews__WEBPACK_IMPORTED_MODULE_61__["DefaultPreviews"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortHeaderIntl"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MAT_SORT_HEADER_INTL_PROVIDER_FACTORY"], [[3, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortHeaderIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerService"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorIntl"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"], [[3, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _common_core_ui_overlay_panel_overlay_panel_service__WEBPACK_IMPORTED_MODULE_62__["OverlayPanel"], _common_core_ui_overlay_panel_overlay_panel_service__WEBPACK_IMPORTED_MODULE_62__["OverlayPanel"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_60__["BreakpointsService"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _shared_help_center_service__WEBPACK_IMPORTED_MODULE_63__["HelpCenterService"], _shared_help_center_service__WEBPACK_IMPORTED_MODULE_63__["HelpCenterService"], [_common_core_http_http_cache_client__WEBPACK_IMPORTED_MODULE_64__["HttpCacheClient"], _front_search_term_logger_service__WEBPACK_IMPORTED_MODULE_65__["SearchTermLoggerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _shared_categories_service__WEBPACK_IMPORTED_MODULE_66__["CategoriesService"], _shared_categories_service__WEBPACK_IMPORTED_MODULE_66__["CategoriesService"], [_common_core_http_http_cache_client__WEBPACK_IMPORTED_MODULE_64__["HttpCacheClient"], _common_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_67__["LocalStorage"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _shared_article_article_resolve_service__WEBPACK_IMPORTED_MODULE_68__["ArticleResolve"], _shared_article_article_resolve_service__WEBPACK_IMPORTED_MODULE_68__["ArticleResolve"], [_shared_help_center_service__WEBPACK_IMPORTED_MODULE_63__["HelpCenterService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_29__["DragDrop"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_29__["DragDrop"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgZone"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__["ViewportRuler"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_29__["DragDropRegistry"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _new_article_new_article_resolve_service__WEBPACK_IMPORTED_MODULE_69__["NewArticleResolve"], _new_article_new_article_resolve_service__WEBPACK_IMPORTED_MODULE_69__["NewArticleResolve"], [_shared_help_center_service__WEBPACK_IMPORTED_MODULE_63__["HelpCenterService"], _shared_categories_service__WEBPACK_IMPORTED_MODULE_66__["CategoriesService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_core_ui_custom_scrollbar_custom_scrollbar_module__WEBPACK_IMPORTED_MODULE_70__["CustomScrollbarModule"], _common_core_ui_custom_scrollbar_custom_scrollbar_module__WEBPACK_IMPORTED_MODULE_70__["CustomScrollbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_31__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_32__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_32__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_33__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_33__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_core_ui_confirm_modal_confirm_modal_module__WEBPACK_IMPORTED_MODULE_71__["ConfirmModalModule"], _common_core_ui_confirm_modal_confirm_modal_module__WEBPACK_IMPORTED_MODULE_71__["ConfirmModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_core_translations_translations_module__WEBPACK_IMPORTED_MODULE_72__["TranslationsModule"], _common_core_translations_translations_module__WEBPACK_IMPORTED_MODULE_72__["TranslationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_34__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_core_ui_ui_module__WEBPACK_IMPORTED_MODULE_73__["UiModule"], _common_core_ui_ui_module__WEBPACK_IMPORTED_MODULE_73__["UiModule"], [_angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["DomSanitizer"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_74__["Settings"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_file_preview_file_preview_module__WEBPACK_IMPORTED_MODULE_75__["FilePreviewModule"], _common_file_preview_file_preview_module__WEBPACK_IMPORTED_MODULE_75__["FilePreviewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_36__["MatProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_uploads_uploads_module__WEBPACK_IMPORTED_MODULE_76__["UploadsModule"], _common_uploads_uploads_module__WEBPACK_IMPORTED_MODULE_76__["UploadsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_37__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_37__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _shared_module__WEBPACK_IMPORTED_MODULE_77__["SharedModule"], _shared_module__WEBPACK_IMPORTED_MODULE_77__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_core_http_http_module__WEBPACK_IMPORTED_MODULE_78__["HttpModule"], _common_core_http_http_module__WEBPACK_IMPORTED_MODULE_78__["HttpModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_core_core_module__WEBPACK_IMPORTED_MODULE_79__["CoreModule"], _common_core_core_module__WEBPACK_IMPORTED_MODULE_79__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_text_editor_text_editor_module__WEBPACK_IMPORTED_MODULE_80__["TextEditorModule"], _common_text_editor_text_editor_module__WEBPACK_IMPORTED_MODULE_80__["TextEditorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MatAutocompleteModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MatAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _shared_help_center_shared_module__WEBPACK_IMPORTED_MODULE_81__["HelpCenterSharedModule"], _shared_help_center_shared_module__WEBPACK_IMPORTED_MODULE_81__["HelpCenterSharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_28__["MatSlideToggleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_29__["DragDropModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_29__["DragDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _categories_manager_categories_manager_module__WEBPACK_IMPORTED_MODULE_82__["CategoriesManagerModule"], _categories_manager_categories_manager_module__WEBPACK_IMPORTED_MODULE_82__["CategoriesManagerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _help_center_manage_module__WEBPACK_IMPORTED_MODULE_40__["HcManageModule"], _help_center_manage_module__WEBPACK_IMPORTED_MODULE_40__["HcManageModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MAT_CHIPS_DEFAULT_OPTIONS"], { separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__["ENTER"]] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_0__["ROUTES"], function () { return [[{ path: "", component: _help_center_manage_component__WEBPACK_IMPORTED_MODULE_83__["HelpCenterManageComponent"], canActivate: [_common_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_84__["AuthGuard"]], children: [{ path: "", redirectTo: "articles" }, { path: "articles", component: _articles_list_articles_list_component__WEBPACK_IMPORTED_MODULE_85__["ArticlesListComponent"], data: { permissions: ["categories.view", "tags.view", "articles.view", "articles.create"] } }, { path: "categories", component: _categories_list_categories_list_component__WEBPACK_IMPORTED_MODULE_86__["CategoriesListComponent"], data: { permissions: ["categories.view", "categories.create"] } }, { path: "articles/new", component: _new_article_new_article_component__WEBPACK_IMPORTED_MODULE_87__["NewArticleComponent"], resolve: { data: _new_article_new_article_resolve_service__WEBPACK_IMPORTED_MODULE_69__["NewArticleResolve"] }, data: { permissions: ["articles.create"] } }, { path: "articles/:article_id/edit", component: _new_article_new_article_component__WEBPACK_IMPORTED_MODULE_87__["NewArticleComponent"], resolve: { data: _new_article_new_article_resolve_service__WEBPACK_IMPORTED_MODULE_69__["NewArticleResolve"] }, data: { permissions: ["articles.update"] } }] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/help-center/manage/help-center-manage.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/help-center/manage/help-center-manage.module.ts ***!
  \*****************************************************************/
/*! exports provided: HcManageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HcManageModule", function() { return HcManageModule; });
var HcManageModule = /** @class */ (function () {
    function HcManageModule() {
    }
    return HcManageModule;
}());



/***/ }),

/***/ "./src/app/help-center/manage/new-article/article-settings-modal/article-settings-modal.component.ngfactory.js":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/help-center/manage/new-article/article-settings-modal/article-settings-modal.component.ngfactory.js ***!
  \*********************************************************************************************************************/
/*! exports provided: Inject_1, ɵangular_packages_core_core_a_2, InjectionToken_4, NgZone_8, ViewChild_15, ɵangular_packages_core_core_b_16, Query_17, ComponentFactoryResolver_19, ViewContainerRef_20, Output_21, Optional_22, ElementRef_23, PLATFORM_ID_27, ChangeDetectorRef_28, MAT_DIALOG_DATA_3, MatDialogRef_5, MatDialogContainer_13, MatDialogConfig_29, OverlayRef_6, OverlayKeyboardDispatcher_9, DOCUMENT_10, Location_11, LocationStrategy_12, BasePortalOutlet_14, CdkPortalOutlet_18, FocusTrapFactory_24, InteractivityChecker_25, Platform_26, View_MatDialogContainer_0_30, RenderType_MatDialogContainer_31, MatDialogContainerNgFactory_32, RenderType_ArticleSettingsModalComponent, View_ArticleSettingsModalComponent_0, View_ArticleSettingsModalComponent_Host_0, ArticleSettingsModalComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ArticleSettingsModalComponent", function() { return RenderType_ArticleSettingsModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ArticleSettingsModalComponent_0", function() { return View_ArticleSettingsModalComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ArticleSettingsModalComponent_Host_0", function() { return View_ArticleSettingsModalComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleSettingsModalComponentNgFactory", function() { return ArticleSettingsModalComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Inject_1", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_a_2", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InjectionToken_4", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgZone_8", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewChild_15", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_16", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query_17", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentFactoryResolver_19", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewContainerRef_20", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Output_21", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Optional_22", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementRef_23", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLATFORM_ID_27", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangeDetectorRef_28", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]; });

/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DATA_3", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogRef_5", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainer_13", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogConfig_29", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]; });

/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayRef_6", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher_9", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayKeyboardDispatcher"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOCUMENT_10", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location_11", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationStrategy_12", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]; });

/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasePortalOutlet_14", function() { return _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["BasePortalOutlet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdkPortalOutlet_18", function() { return _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["CdkPortalOutlet"]; });

/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FocusTrapFactory_24", function() { return _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusTrapFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InteractivityChecker_25", function() { return _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["InteractivityChecker"]; });

/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Platform_26", function() { return _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]; });

/* harmony import */ var _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/dialog/typings/index.ngfactory */ "./node_modules/@angular/material/dialog/typings/index.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View_MatDialogContainer_0_30", function() { return _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_MatDialogContainer_0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderType_MatDialogContainer_31", function() { return _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_MatDialogContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainerNgFactory_32", function() { return _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["MatDialogContainerNgFactory"]; });

/* harmony import */ var _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../common/core/translations/translate.directive */ "./src/common/core/translations/translate.directive.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _article_settings_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./article-settings-modal.component */ "./src/app/help-center/manage/new-article/article-settings-modal/article-settings-modal.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






















var styles_ArticleSettingsModalComponent = [];
var RenderType_ArticleSettingsModalComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_ArticleSettingsModalComponent, data: {} });

function View_ArticleSettingsModalComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 13, "div", [["class", "modal-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 3, "h2", [["class", "mat-dialog-title"], ["mat-dialog-title", ""], ["trans", ""]], [[8, "id", 0]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 81920, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], [[2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Article Settings"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 5, "button", [["class", "close-button"], ["mat-icon-button", ""], ["tabindex", "-1"], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.close() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, 0, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "close"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 73, "form", [["ngNativeValidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.confirm() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](20, 0, null, null, 53, "mat-dialog-content", [["class", "many-inputs mat-dialog-content"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](23, 0, null, null, 12, "div", [["class", "input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 2, "label", [["for", "article-slug"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Slug"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](29, 0, null, null, 5, "input", [["id", "article-slug"], ["name", "article-slug"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 30)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.slug = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](30, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](32, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 16, "div", [["class", "input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](39, 0, null, null, 2, "label", [["for", "article-description"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](40, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Description"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 5, "textarea", [["id", "article-description"], ["name", "article-description"], ["rows", "7"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 44)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.model.description = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](44, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](46, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](48, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](50, 0, null, null, 2, "p", [["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](51, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["This will appear when searching the help center. Excerpt from article will be used otherwise."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](55, 0, null, null, 17, "div", [["class", "input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](57, 0, null, null, 2, "label", [["for", "article-position"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](58, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Position"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 6, "input", [["id", "article-position"], ["min", "0"], ["name", "article-position"], ["type", "number"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"], [null, "change"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 62)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 62).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 62)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 62)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("change" === en)) {
        var pd_4 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 63).onChange($event.target.value) !== false);
        ad = (pd_4 && ad);
    } if (("input" === en)) {
        var pd_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 63).onChange($event.target.value) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 63).onTouched() !== false);
        ad = (pd_6 && ad);
    } if (("ngModelChange" === en)) {
        var pd_7 = ((_co.model.position = $event) !== false);
        ad = (pd_7 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](62, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](63, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_be"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NG_VALUE_ACCESSOR"], function (p0_0, p1_0) { return [p0_0, p1_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_forms_forms_be"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](65, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](67, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_16__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](69, 0, null, null, 2, "p", [["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](70, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Order for article on help center homepage. Lower position will be first."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](75, 0, null, null, 12, "mat-dialog-actions", [["class", "mat-dialog-actions"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](76, 16384, null, 0, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](78, 0, null, null, 3, "button", [["class", "cancel-button"], ["mat-button", ""], ["trans", ""], ["type", "button"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.close() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](79, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](80, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](83, 0, null, null, 3, "button", [["class", "submit-button"], ["color", "accent"], ["mat-raised-button", ""], ["trans", ""], ["type", "submit"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](84, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_8__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_9__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_10__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](85, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_5__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Update"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; _ck(_v, 4, 0); var currVal_5 = "close"; _ck(_v, 11, 0, currVal_5); var currVal_20 = "article-slug"; var currVal_21 = _co.model.slug; _ck(_v, 32, 0, currVal_20, currVal_21); var currVal_29 = "article-description"; var currVal_30 = _co.model.description; _ck(_v, 46, 0, currVal_29, currVal_30); var currVal_38 = "article-position"; var currVal_39 = _co.model.position; _ck(_v, 65, 0, currVal_38, currVal_39); var currVal_44 = "accent"; _ck(_v, 85, 0, currVal_44); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).id; _ck(_v, 2, 0, currVal_0); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8).disabled || null); var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 8)._animationMode === "NoopAnimations"); _ck(_v, 7, 0, currVal_1, currVal_2); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).inline; var currVal_4 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11).color !== "warn")); _ck(_v, 10, 0, currVal_3, currVal_4); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassUntouched; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassTouched; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassPristine; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassDirty; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassValid; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassInvalid; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassPending; _ck(_v, 15, 0, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).ngClassUntouched; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).ngClassTouched; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).ngClassPristine; var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).ngClassDirty; var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).ngClassValid; var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).ngClassInvalid; var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 34).ngClassPending; _ck(_v, 29, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 48).ngClassUntouched; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 48).ngClassTouched; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 48).ngClassPristine; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 48).ngClassDirty; var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 48).ngClassValid; var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 48).ngClassInvalid; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 48).ngClassPending; _ck(_v, 43, 0, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28); var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 67).ngClassUntouched; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 67).ngClassTouched; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 67).ngClassPristine; var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 67).ngClassDirty; var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 67).ngClassValid; var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 67).ngClassInvalid; var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 67).ngClassPending; _ck(_v, 61, 0, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37); var currVal_40 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 80).disabled || null); var currVal_41 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 80)._animationMode === "NoopAnimations"); _ck(_v, 78, 0, currVal_40, currVal_41); var currVal_42 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 85).disabled || null); var currVal_43 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 85)._animationMode === "NoopAnimations"); _ck(_v, 83, 0, currVal_42, currVal_43); }); }
function View_ArticleSettingsModalComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "article-settings-modal", [], null, null, null, View_ArticleSettingsModalComponent_0, RenderType_ArticleSettingsModalComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _article_settings_modal_component__WEBPACK_IMPORTED_MODULE_17__["ArticleSettingsModalComponent"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]], null, null)], null, null); }
var ArticleSettingsModalComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("article-settings-modal", _article_settings_modal_component__WEBPACK_IMPORTED_MODULE_17__["ArticleSettingsModalComponent"], View_ArticleSettingsModalComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/help-center/manage/new-article/article-settings-modal/article-settings-modal.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/help-center/manage/new-article/article-settings-modal/article-settings-modal.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: ArticleSettingsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleSettingsModalComponent", function() { return ArticleSettingsModalComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_core_utils_slugify_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../common/core/utils/slugify-string */ "./src/common/core/utils/slugify-string.ts");


var ArticleSettingsModalComponent = /** @class */ (function () {
    function ArticleSettingsModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.model = {};
        this.hydrate();
    }
    ArticleSettingsModalComponent.prototype.close = function (settings) {
        this.dialogRef.close(settings);
    };
    ArticleSettingsModalComponent.prototype.hydrate = function () {
        this.model.slug = this.data.article.slug;
        this.model.description = this.data.article.description;
        this.model.position = this.data.article.position;
    };
    ArticleSettingsModalComponent.prototype.confirm = function () {
        this.close({
            slug: Object(_common_core_utils_slugify_string__WEBPACK_IMPORTED_MODULE_1__["slugifyString"])(this.model.slug),
            description: this.model.description,
            position: parseInt(this.model.position),
        });
    };
    return ArticleSettingsModalComponent;
}());



/***/ }),

/***/ "./src/app/help-center/manage/new-article/new-article-resolve.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/help-center/manage/new-article/new-article-resolve.service.ts ***!
  \*******************************************************************************/
/*! exports provided: NewArticleResolve */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewArticleResolve", function() { return NewArticleResolve; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_help_center_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/help-center.service */ "./src/app/help-center/shared/help-center.service.ts");
/* harmony import */ var _shared_categories_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/categories.service */ "./src/app/help-center/shared/categories.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var NewArticleResolve = /** @class */ (function () {
    function NewArticleResolve(helpCenter, categories, router) {
        this.helpCenter = helpCenter;
        this.categories = categories;
        this.router = router;
    }
    NewArticleResolve.prototype.resolve = function (route) {
        var _this = this;
        var articleId = route.params['article_id'];
        if (articleId) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.categories.getCategories(), this.helpCenter.getArticle(route.params['article_id'])).toPromise().then(function (response) {
                return { categories: response[0].categories, article: response[1].article };
            }, function () {
                _this.router.navigate(['/help-center/manage/articles']);
                return false;
            });
        }
        else {
            return this.categories.getCategories().toPromise().then(function (response) {
                return { categories: response.categories };
            }, function () {
                _this.router.navigate(['/help-center/manage/articles']);
                return false;
            });
        }
    };
    return NewArticleResolve;
}());



/***/ }),

/***/ "./src/app/help-center/manage/new-article/new-article.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./src/app/help-center/manage/new-article/new-article.component.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: ViewChild_1, ɵangular_packages_core_core_b_2, Query_3, Injector_24, ɵangular_packages_core_core_c_25, defineInjectable_26, NgModuleFactoryLoader_27, Compiler_28, ActivatedRoute_10, ActivatedRouteSnapshot_13, UrlSegmentGroup_17, Router_19, UrlSerializer_20, ChildrenOutletContexts_21, Observable_11, Location_22, LocationStrategy_23, RenderType_NewArticleComponent, View_NewArticleComponent_0, View_NewArticleComponent_Host_0, NewArticleComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NewArticleComponent", function() { return RenderType_NewArticleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NewArticleComponent_0", function() { return View_NewArticleComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NewArticleComponent_Host_0", function() { return View_NewArticleComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewArticleComponentNgFactory", function() { return NewArticleComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewChild_1", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_2", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query_3", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector_24", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_c_25", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineInjectable_26", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgModuleFactoryLoader_27", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Compiler_28", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"]; });

/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRoute_10", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRouteSnapshot_13", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRouteSnapshot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlSegmentGroup_17", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["UrlSegmentGroup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router_19", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlSerializer_20", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["UrlSerializer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChildrenOutletContexts_21", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"]; });

/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable_11", function() { return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location_22", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationStrategy_23", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]; });

/* harmony import */ var _new_article_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-article.component.scss.ngstyle */ "./src/app/help-center/manage/new-article/new-article.component.scss.ngstyle.js");
/* harmony import */ var _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/core/translations/translate.directive */ "./src/common/core/translations/translate.directive.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _common_core_translations_translate_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/core/translations/translate.pipe */ "./src/common/core/translations/translate.pipe.ts");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_text_editor_text_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../common/text-editor/text-editor.component.ngfactory */ "./src/common/text-editor/text-editor.component.ngfactory.js");
/* harmony import */ var _common_text_editor_editors_tinymce_text_editor_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../common/text-editor/editors/tinymce-text-editor.service */ "./src/common/text-editor/editors/tinymce-text-editor.service.ts");
/* harmony import */ var _common_core_utils_lazy_loader_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../common/core/utils/lazy-loader.service */ "./src/common/core/utils/lazy-loader.service.ts");
/* harmony import */ var _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../common/core/ui/breakpoints.service */ "./src/common/core/ui/breakpoints.service.ts");
/* harmony import */ var _common_text_editor_editors_html_text_editor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../common/text-editor/editors/html-text-editor.service */ "./src/common/text-editor/editors/html-text-editor.service.ts");
/* harmony import */ var _common_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../common/text-editor/text-editor.component */ "./src/common/text-editor/text-editor.component.ts");
/* harmony import */ var _common_auth_current_user__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../common/auth/current-user */ "./src/common/auth/current-user.ts");
/* harmony import */ var _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../common/uploads/upload-queue/upload-queue.service */ "./src/common/uploads/upload-queue/upload-queue.service.ts");
/* harmony import */ var _common_core_ui_overlay_panel_overlay_panel_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../common/core/ui/overlay-panel/overlay-panel.service */ "./src/common/core/ui/overlay-panel/overlay-panel.service.ts");
/* harmony import */ var _common_text_editor_validation_text_editor_image_validator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../common/text-editor/validation/text-editor-image-validator */ "./src/common/text-editor/validation/text-editor-image-validator.ts");
/* harmony import */ var _common_core_ui_custom_scrollbar_custom_scrollbar_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../common/core/ui/custom-scrollbar/custom-scrollbar.directive */ "./src/common/core/ui/custom-scrollbar/custom-scrollbar.directive.ts");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _common_core_ui_custom_scrollbar_supports_native_scrollbar_styling__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../common/core/ui/custom-scrollbar/supports-native-scrollbar-styling */ "./src/common/core/ui/custom-scrollbar/supports-native-scrollbar-styling.ts");
/* harmony import */ var _categories_manager_categories_manager_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../categories-manager/categories-manager.component.ngfactory */ "./src/app/help-center/manage/categories-manager/categories-manager.component.ngfactory.js");
/* harmony import */ var _categories_manager_categories_manager_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../categories-manager/categories-manager.component */ "./src/app/help-center/manage/categories-manager/categories-manager.component.ts");
/* harmony import */ var _shared_categories_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../shared/categories.service */ "./src/app/help-center/shared/categories.service.ts");
/* harmony import */ var _common_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../common/core/services/local-storage.service */ "./src/common/core/services/local-storage.service.ts");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_tags_manager_tags_manager_component_ngfactory__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../shared/tags-manager/tags-manager.component.ngfactory */ "./src/app/shared/tags-manager/tags-manager.component.ngfactory.js");
/* harmony import */ var _shared_tags_manager_tags_manager_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../shared/tags-manager/tags-manager.component */ "./src/app/shared/tags-manager/tags-manager.component.ts");
/* harmony import */ var _shared_tag_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../shared/tag.service */ "./src/app/shared/tag.service.ts");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../../../common/core/ui/loading-indicator/loading-indicator.component.ngfactory */ "./src/common/core/ui/loading-indicator/loading-indicator.component.ngfactory.js");
/* harmony import */ var _common_core_ui_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../../../common/core/ui/loading-indicator/loading-indicator.component */ "./src/common/core/ui/loading-indicator/loading-indicator.component.ts");
/* harmony import */ var _new_article_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./new-article.component */ "./src/app/help-center/manage/new-article/new-article.component.ts");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/* harmony import */ var _shared_help_center_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../shared/help-center.service */ "./src/app/help-center/shared/help-center.service.ts");
/* harmony import */ var _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../../../common/core/ui/toast.service */ "./src/common/core/ui/toast.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



















































var styles_NewArticleComponent = [_new_article_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_4__["styles"]];
var RenderType_NewArticleComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_NewArticleComponent, data: {} });

function View_NewArticleComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "span", [["class", "create-article-submit"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_6__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_7__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Create Article"]))], null, null); }
function View_NewArticleComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "span", [["class", "update-article-submit"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_6__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_7__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Update Article"]))], null, null); }
function View_NewArticleComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _common_core_translations_translate_pipe__WEBPACK_IMPORTED_MODULE_8__["TransPipe"], [_common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_6__["Translations"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { textEditor: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, { categoriesManager: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 3, { tagsManager: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 46, "div", [["class", "action-bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 27, "div", [["class", "nav"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 7, "a", [["class", "nav-item"], ["routerLinkActive", "router-link-active"], ["trans", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 671744, [[5, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](13, { exact: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_6__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_7__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Home"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 6, "a", [["class", "nav-item"], ["routerLinkActive", "router-link-active"], ["trans", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 671744, [[7, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { routerLinkActive: [0, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 7, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_6__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_7__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Categories"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 7, "a", [["class", "nav-item"], ["routerLinkActive", "router-link-active"], ["trans", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](26, 671744, [[9, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { routerLinkActiveOptions: [0, "routerLinkActiveOptions"], routerLinkActive: [1, "routerLinkActive"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 8, { links: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 9, { linksWithHrefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpod"](30, { exact: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](31, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_6__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_7__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Articles"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](35, 0, null, null, 14, "div", [["class", "actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](37, 0, null, null, 2, "button", [["class", "no-style action article-settings-action"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openArticleSettingsModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](38, 0, null, null, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "settings"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](39, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 7, "button", [["class", "no-style publish-article-button new-item-button"], ["id", "submit"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.saveOrUpdateArticle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_NewArticleComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](44, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_NewArticleComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](47, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](52, 0, null, null, 83, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](54, 0, null, null, 40, "section", [["class", "middle-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](56, 0, null, null, 29, "div", [["class", "input-container title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](58, 0, null, null, 6, "input", [["class", "article-title-input"], ["placeholder", "Title"], ["trans-placeholder", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 59)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.articleModel.title = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](59, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](61, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](63, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](64, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_6__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_7__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](66, 0, null, null, 18, "select", [["class", "article-status-input"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 67).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 67).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.articleModel.draft = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](67, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](69, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](71, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](73, 0, null, null, 4, "option", [["trans", ""], ["value", "0"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](74, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](75, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_s"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](76, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_6__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_7__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Published"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](79, 0, null, null, 4, "option", [["trans", ""], ["value", "1"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](80, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["SelectControlValueAccessor"]]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](81, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_s"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { value: [0, "value"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](82, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_6__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_7__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Draft"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](87, 0, null, null, 6, "div", [["class", "text-editor-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](89, 0, null, null, 3, "text-editor", [["class", "text-editor"], ["inlineUploadType", "article"], ["minHeight", "auto"]], null, null, null, _common_text_editor_text_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_TextEditorComponent_0"], _common_text_editor_text_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_TextEditorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _common_text_editor_editors_tinymce_text_editor_service__WEBPACK_IMPORTED_MODULE_13__["TinymceTextEditor"], _common_text_editor_editors_tinymce_text_editor_service__WEBPACK_IMPORTED_MODULE_13__["TinymceTextEditor"], [_common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_7__["Settings"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _common_core_utils_lazy_loader_service__WEBPACK_IMPORTED_MODULE_14__["LazyLoaderService"], _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_15__["BreakpointsService"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_6__["Translations"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _common_text_editor_editors_html_text_editor_service__WEBPACK_IMPORTED_MODULE_16__["HtmlTextEditor"], _common_text_editor_editors_html_text_editor_service__WEBPACK_IMPORTED_MODULE_16__["HtmlTextEditor"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](92, 4374528, [[1, 4], ["editorEl", 4]], 0, _common_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_17__["TextEditorComponent"], [_common_text_editor_editors_tinymce_text_editor_service__WEBPACK_IMPORTED_MODULE_13__["TinymceTextEditor"], _common_text_editor_editors_html_text_editor_service__WEBPACK_IMPORTED_MODULE_16__["HtmlTextEditor"], _common_auth_current_user__WEBPACK_IMPORTED_MODULE_18__["CurrentUser"], _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_19__["UploadQueueService"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_7__["Settings"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_ui_overlay_panel_overlay_panel_service__WEBPACK_IMPORTED_MODULE_20__["OverlayPanel"], _common_text_editor_validation_text_editor_image_validator__WEBPACK_IMPORTED_MODULE_21__["TextEditorImageValidator"]], { showAdvancedControls: [0, "showAdvancedControls"], minHeight: [1, "minHeight"], inlineUploadType: [2, "inlineUploadType"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](96, 0, null, null, 27, "aside", [["class", "right-column"], ["customScrollbar", "lite"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](97, 4341760, null, 0, _common_core_ui_custom_scrollbar_custom_scrollbar_directive__WEBPACK_IMPORTED_MODULE_22__["CustomScrollbarDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_15__["BreakpointsService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_23__["MutationObserverFactory"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_7__["Settings"], _common_core_ui_custom_scrollbar_supports_native_scrollbar_styling__WEBPACK_IMPORTED_MODULE_24__["SUPPORTS_NATIVE_SCROLLBAR_STYLING"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](99, 0, null, null, 10, "categories-manager", [["class", "categories-panel"]], null, null, null, _categories_manager_categories_manager_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["View_CategoriesManagerComponent_0"], _categories_manager_categories_manager_component_ngfactory__WEBPACK_IMPORTED_MODULE_25__["RenderType_CategoriesManagerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](100, 114688, [[2, 4]], 0, _categories_manager_categories_manager_component__WEBPACK_IMPORTED_MODULE_26__["CategoriesManagerComponent"], [_shared_categories_service__WEBPACK_IMPORTED_MODULE_27__["CategoriesService"], _common_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_28__["LocalStorage"]], { initialCategories: [0, "initialCategories"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](102, 0, null, 0, 6, "div", [["class", "new-category-button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](104, 0, null, null, 3, "button", [["color", "accent"], ["mat-flat-button", ""], ["trans", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openNewCategoryModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_29__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_29__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](105, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_6__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_7__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](106, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_31__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_32__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["+ Add New Category"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](111, 0, null, null, 11, "div", [["class", "panel"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](113, 0, null, null, 2, "div", [["class", "panel-header"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](114, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_5__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_6__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_7__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Tags"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](117, 0, null, null, 4, "div", [["class", "panel-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](119, 0, null, null, 1, "tags-manager", [], null, null, null, _shared_tags_manager_tags_manager_component_ngfactory__WEBPACK_IMPORTED_MODULE_34__["View_TagsManagerComponent_0"], _shared_tags_manager_tags_manager_component_ngfactory__WEBPACK_IMPORTED_MODULE_34__["RenderType_TagsManagerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](120, 114688, [[3, 4]], 0, _shared_tags_manager_tags_manager_component__WEBPACK_IMPORTED_MODULE_35__["TagsManagerComponent"], [_shared_tag_service__WEBPACK_IMPORTED_MODULE_36__["TagService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](125, 16777216, null, null, 6, "button", [["class", "preview-article-button"]], null, [[null, "click"], [null, "longpress"], [null, "keydown"], [null, "touchend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("longpress" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126).show() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("touchend" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 126)._handleTouchend() !== false);
        ad = (pd_2 && ad);
    } if (("click" === en)) {
        var pd_3 = (_co.openPreviewModal() !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](126, 147456, null, 0, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__["MatTooltip"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_38__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__["ScrollDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_31__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_32__["AriaDescriber"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_32__["FocusMonitor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__["MAT_TOOLTIP_SCROLL_STRATEGY"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_40__["Directionality"]], [2, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_37__["MAT_TOOLTIP_DEFAULT_OPTIONS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_41__["HAMMER_LOADER"]]], { message: [0, "message"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](127, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](129, 0, null, null, 1, "mat-icon", [["class", "size-20 mat-icon notranslate"], ["role", "img"], ["svgIcon", "remove-red-eye"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](130, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](133, 0, null, null, 1, "loading-indicator", [["class", "overlay"]], [[40, "@visibility", 0]], null, null, _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_42__["View_LoadingIndicatorComponent_0"], _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_42__["RenderType_LoadingIndicatorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](134, 49152, null, 0, _common_core_ui_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_43__["LoadingIndicatorComponent"], [], { isVisible: [0, "isVisible"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "/help-center"; _ck(_v, 9, 0, currVal_2); var currVal_3 = _ck(_v, 13, 0, true); var currVal_4 = "router-link-active"; _ck(_v, 10, 0, currVal_3, currVal_4); var currVal_7 = "/help-center/manage/categories"; _ck(_v, 18, 0, currVal_7); var currVal_8 = "router-link-active"; _ck(_v, 19, 0, currVal_8); var currVal_11 = "/help-center/manage/articles"; _ck(_v, 26, 0, currVal_11); var currVal_12 = _ck(_v, 30, 0, true); var currVal_13 = "router-link-active"; _ck(_v, 27, 0, currVal_12, currVal_13); var currVal_16 = "settings"; _ck(_v, 39, 0, currVal_16); var currVal_17 = !_co.articleModel.id; _ck(_v, 44, 0, currVal_17); var currVal_18 = _co.articleModel.id; _ck(_v, 47, 0, currVal_18); var currVal_26 = _co.articleModel.title; _ck(_v, 61, 0, currVal_26); var currVal_34 = _co.articleModel.draft; _ck(_v, 69, 0, currVal_34); var currVal_35 = "0"; _ck(_v, 74, 0, currVal_35); var currVal_36 = "0"; _ck(_v, 75, 0, currVal_36); var currVal_37 = "1"; _ck(_v, 80, 0, currVal_37); var currVal_38 = "1"; _ck(_v, 81, 0, currVal_38); var currVal_39 = true; var currVal_40 = "auto"; var currVal_41 = "article"; _ck(_v, 92, 0, currVal_39, currVal_40, currVal_41); var currVal_42 = _co.getCategories(); _ck(_v, 100, 0, currVal_42); var currVal_45 = "accent"; _ck(_v, 106, 0, currVal_45); _ck(_v, 120, 0); var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 126, 0, _ck(_v, 127, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 0), "Preview Article")); _ck(_v, 126, 0, currVal_46); var currVal_49 = "remove-red-eye"; _ck(_v, 130, 0, currVal_49); var currVal_51 = _co.updating; _ck(_v, 134, 0, currVal_51); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).href; _ck(_v, 8, 0, currVal_0, currVal_1); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).target; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).href; _ck(_v, 17, 0, currVal_5, currVal_6); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).target; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 26).href; _ck(_v, 25, 0, currVal_9, currVal_10); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).inline; var currVal_15 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 39).color !== "warn")); _ck(_v, 38, 0, currVal_14, currVal_15); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 63).ngClassUntouched; var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 63).ngClassTouched; var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 63).ngClassPristine; var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 63).ngClassDirty; var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 63).ngClassValid; var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 63).ngClassInvalid; var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 63).ngClassPending; _ck(_v, 58, 0, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25); var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 71).ngClassUntouched; var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 71).ngClassTouched; var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 71).ngClassPristine; var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 71).ngClassDirty; var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 71).ngClassValid; var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 71).ngClassInvalid; var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 71).ngClassPending; _ck(_v, 66, 0, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33); var currVal_43 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 106).disabled || null); var currVal_44 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 106)._animationMode === "NoopAnimations"); _ck(_v, 104, 0, currVal_43, currVal_44); var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 130).inline; var currVal_48 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 130).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 130).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 130).color !== "warn")); _ck(_v, 129, 0, currVal_47, currVal_48); var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 134).isVisible; _ck(_v, 133, 0, currVal_50); }); }
function View_NewArticleComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "new-article", [], null, null, null, View_NewArticleComponent_0, RenderType_NewArticleComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _new_article_component__WEBPACK_IMPORTED_MODULE_44__["NewArticleComponent"], [_common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_45__["Modal"], _shared_help_center_service__WEBPACK_IMPORTED_MODULE_46__["HelpCenterService"], _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_47__["Toast"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var NewArticleComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("new-article", _new_article_component__WEBPACK_IMPORTED_MODULE_44__["NewArticleComponent"], View_NewArticleComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/help-center/manage/new-article/new-article.component.scss.ngstyle.js":
/*!**************************************************************************************!*\
  !*** ./src/app/help-center/manage/new-article/new-article.component.scss.ngstyle.js ***!
  \**************************************************************************************/
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
var styles = ["\n\n\nnew-article {\n  display: block;\n  overflow: hidden;\n  background-color: #FAFAFA; }\nnew-article .action-bar .action {\n    color: rgba(0, 0, 0, 0.5); }\nnew-article .text-editor-container {\n    height: calc(100% - 50px); }\nnew-article .container {\n    display: flex;\n    max-width: 1300px;\n    margin: 20px auto;\n    height: calc(100vh - 165px); }\nnew-article .container .middle-column {\n      flex: 1 1 auto;\n      height: 100%;\n      margin-right: 20px;\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n      background-color: #fff;\n      border: 1px solid;\n      border-color: #d3d3d3 #d3d3d3 #c4c4c4 #d3d3d3;\n      border-radius: 4px;\n      overflow: hidden; }\nnew-article .container .middle-column .title {\n        display: flex; }\nnew-article .container .middle-column .title .article-title-input, new-article .container .middle-column .title .article-status-input {\n          border: none;\n          height: 50px; }\nnew-article .container .middle-column .title .article-title-input {\n          flex: 1 1 auto;\n          font-size: 2rem;\n          padding: 10px 25px; }\nnew-article .container .middle-column .title .article-status-input {\n          flex: 0 0 130px;\n          border-left: 1px solid #E0E0E0; }\nnew-article .container .middle-column text-editor {\n        max-height: none;\n        border-left: none;\n        border-right: none;\n        border-bottom: none; }\nnew-article .container .middle-column text-editor .editor-header, new-article .container .middle-column text-editor .editor-footer {\n          background-color: #fff; }\nnew-article .container .right-column {\n      width: 302px;\n      flex: 0 0 302px;\n      overflow: auto;\n      padding: 0 2px;\n      height: 100%; }\nnew-article .container .right-column .panel {\n        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n        background-color: #fff;\n        border: 1px solid;\n        border-color: #d3d3d3 #d3d3d3 #c4c4c4 #d3d3d3;\n        border-radius: 4px; }\nnew-article .container .right-column .new-category-button {\n        margin: 15px 0 5px; }\nnew-article .container .preview-article-button {\n      width: 50px;\n      height: 50px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border-radius: 50%;\n      box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 3px 3px -2px rgba(0, 0, 0, 0.12);\n      background-color: #689f38;\n      color: #fff;\n      position: absolute;\n      right: 20px;\n      bottom: 20px;\n      border: none;\n      outline: none;\n      cursor: pointer; }\n"];



/***/ }),

/***/ "./src/app/help-center/manage/new-article/new-article.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/help-center/manage/new-article/new-article.component.ts ***!
  \*************************************************************************/
/*! exports provided: NewArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewArticleComponent", function() { return NewArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _article_settings_modal_article_settings_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article-settings-modal/article-settings-modal.component */ "./src/app/help-center/manage/new-article/article-settings-modal/article-settings-modal.component.ts");
/* harmony import */ var _categories_manager_categories_manager_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../categories-manager/categories-manager.component */ "./src/app/help-center/manage/categories-manager/categories-manager.component.ts");
/* harmony import */ var _shared_help_center_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/help-center.service */ "./src/app/help-center/shared/help-center.service.ts");
/* harmony import */ var _shared_article_modal_article_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/article-modal/article-modal.component */ "./src/app/help-center/shared/article-modal/article-modal.component.ts");
/* harmony import */ var _shared_models_Article__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/models/Article */ "./src/app/shared/models/Article.ts");
/* harmony import */ var _category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../category-modal/category-modal.component */ "./src/app/help-center/manage/category-modal/category-modal.component.ts");
/* harmony import */ var _common_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/text-editor/text-editor.component */ "./src/common/text-editor/text-editor.component.ts");
/* harmony import */ var _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/core/ui/toast.service */ "./src/common/core/ui/toast.service.ts");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/* harmony import */ var _shared_tags_manager_tags_manager_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/tags-manager/tags-manager.component */ "./src/app/shared/tags-manager/tags-manager.component.ts");












var NewArticleComponent = /** @class */ (function () {
    function NewArticleComponent(modal, helpCenter, toast, route, router) {
        this.modal = modal;
        this.helpCenter = helpCenter;
        this.toast = toast;
        this.route = route;
        this.router = router;
        this.updating = false;
        this.articleModel = new _shared_models_Article__WEBPACK_IMPORTED_MODULE_6__["Article"]({ categories: [], draft: 0 });
    }
    NewArticleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (resolves) { return _this.hydrate(resolves['data']); });
    };
    NewArticleComponent.prototype.getCategories = function () {
        return this.articleModel.categories.map(function (category) { return category.id; });
    };
    NewArticleComponent.prototype.saveOrUpdateArticle = function () {
        var _this = this;
        var method = this.articleModel.id ? 'updateArticle' : 'createArticle';
        this.updating = true;
        this.helpCenter[method](this.getPayload()).subscribe(function (response) {
            _this.toast.open('Article ' + (_this.articleModel.id ? 'updated.' : 'created.'));
            _this.router.navigateByUrl('help-center/manage/articles');
        }, function (errors) {
            var message = errors['messages'][Object.keys(errors['messages'])[0]];
            _this.toast.open(message);
            _this.updating = false;
        });
    };
    NewArticleComponent.prototype.openPreviewModal = function () {
        this.modal.open(_shared_article_modal_article_modal_component__WEBPACK_IMPORTED_MODULE_5__["ArticleModalComponent"], { article: this.getPayload() }, { panelClass: 'article-modal-container' });
    };
    NewArticleComponent.prototype.openArticleSettingsModal = function () {
        var _this = this;
        this.modal.show(_article_settings_modal_article_settings_modal_component__WEBPACK_IMPORTED_MODULE_2__["ArticleSettingsModalComponent"], { article: this.articleModel })
            .afterClosed()
            .subscribe(function (data) {
            if (!data)
                return;
            _this.articleModel = Object.assign(_this.articleModel, data);
        });
    };
    NewArticleComponent.prototype.getPayload = function () {
        var model = Object.assign({}, this.articleModel);
        model['body'] = this.textEditor.getContents();
        model['categories'] = this.categoriesManager.getSelectedCategories();
        model['tags'] = this.tagsManager.getSelectedTags();
        return model;
    };
    NewArticleComponent.prototype.hydrate = function (data) {
        if (data.article) {
            this.articleModel = data.article;
            this.textEditor.setContents(data.article.body);
            this.categoriesManager.setSelectedCategories(this.articleModel.categories);
            this.tagsManager.setSelectedTags(this.articleModel.tags.map(function (tag) { return tag.name; }));
        }
        if (data.categories) {
            this.categoriesManager.setCategories(data.categories);
        }
    };
    NewArticleComponent.prototype.openNewCategoryModal = function () {
        var _this = this;
        this.modal.show(_category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_7__["CategoryModalComponent"])
            .afterClosed()
            .subscribe(function (category) {
            if (!category)
                return;
            _this.categoriesManager.refresh()
                .then(function () { return _this.categoriesManager.toggle(category); });
        });
    };
    return NewArticleComponent;
}());



/***/ })

}]);