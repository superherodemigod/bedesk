(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~app-help-center-manage-help-center-manage-module-ngfactory~app-ticketing-ticketing-module-ng~60eff890"],{

/***/ "./src/app/shared/tags-manager/tags-manager.component.ngfactory.js":
/*!*************************************************************************!*\
  !*** ./src/app/shared/tags-manager/tags-manager.component.ngfactory.js ***!
  \*************************************************************************/
/*! exports provided: Output_1, ɵangular_packages_core_core_b_2, Input_3, RenderType_TagsManagerComponent, View_TagsManagerComponent_0, View_TagsManagerComponent_Host_0, TagsManagerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_TagsManagerComponent", function() { return RenderType_TagsManagerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TagsManagerComponent_0", function() { return View_TagsManagerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_TagsManagerComponent_Host_0", function() { return View_TagsManagerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsManagerComponentNgFactory", function() { return TagsManagerComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Output_1", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_2", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input_3", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony import */ var _tags_manager_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tags-manager.component.scss.ngstyle */ "./src/app/shared/tags-manager/tags-manager.component.scss.ngstyle.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/core/translations/translate.directive */ "./src/common/core/translations/translate.directive.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_angular_material_chips_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/chips/typings/index.ngfactory */ "./node_modules/@angular/material/chips/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _tags_manager_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./tags-manager.component */ "./src/app/shared/tags-manager/tags-manager.component.ts");
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../tag.service */ "./src/app/shared/tag.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






















var styles_TagsManagerComponent = [_tags_manager_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"]];
var RenderType_TagsManagerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_TagsManagerComponent, data: {} });

function View_TagsManagerComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 18, "form", [["class", "input-container input-group"], ["ngNativeValidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.addTags(_co.tagsString) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 7, "input", [["class", "tags-string-model"], ["name", "tag-input"], ["required", ""], ["type", "text"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.tagsString = $event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], [], { required: [0, "required"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ControlContainer"]], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"]], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](14, 0, null, null, 3, "button", [["class", "add-tags-button"], ["color", "accent"], ["mat-flat-button", ""], ["trans", ""], ["type", "submit"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_5__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_6__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Add"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_15 = ""; _ck(_v, 7, 0, currVal_15); var currVal_16 = "tag-input"; var currVal_17 = _co.tagsString; _ck(_v, 10, 0, currVal_16, currVal_17); var currVal_20 = "accent"; _ck(_v, 16, 0, currVal_20); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 7).required ? "" : null); var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassUntouched; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassTouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassPristine; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassDirty; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassValid; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassInvalid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).ngClassPending; _ck(_v, 5, 0, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_18 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16).disabled || null); var currVal_19 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 16)._animationMode === "NoopAnimations"); _ck(_v, 14, 0, currVal_18, currVal_19); }); }
function View_TagsManagerComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "p", [["class", "main-info"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_5__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_6__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Separate tags with comma."]))], null, null); }
function View_TagsManagerComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 12, "mat-chip", [["class", "mat-chip"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-chip-selected", null], [2, "mat-chip-with-avatar", null], [2, "mat-chip-with-trailing-icon", null], [2, "mat-chip-disabled", null], [1, "disabled", 0], [1, "aria-disabled", 0], [1, "aria-selected", 0]], [[null, "removed"], [null, "click"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._handleClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("focus" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).focus() !== false);
        ad = (pd_2 && ad);
    } if (("blur" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1)._blur() !== false);
        ad = (pd_3 && ad);
    } if (("removed" === en)) {
        var pd_4 = (_co.removeTag(_v.context.$implicit) !== false);
        ad = (pd_4 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, [[1, 4]], 3, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChip"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_8__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MAT_RIPPLE_GLOBAL_OPTIONS"]]], { removable: [0, "removable"] }, { removed: "removed" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 2, { avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 3, { trailingIcon: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 4, { removeIcon: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 2, "mat-icon", [["class", "mat-icon notranslate mat-chip-remove mat-chip-trailing-icon"], ["matChipRemove", ""], ["role", "img"], ["svgIcon", "cancel"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 11)._handleClick($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](11, 16384, [[4, 4]], 0, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipRemove"], [_angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChip"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "]))], function (_ck, _v) { var _co = _v.component; var currVal_8 = !_co.readonly; _ck(_v, 1, 0, currVal_8); var currVal_12 = "cancel"; _ck(_v, 10, 0, currVal_12); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled ? null : (0 - 1)); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).selected; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).avatar; var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).trailingIcon || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).removeIcon); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled; var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled || null); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).disabled.toString(); var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).ariaSelected; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = _v.context.$implicit; _ck(_v, 7, 0, currVal_9); var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).inline; var currVal_11 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).color !== "warn")); _ck(_v, 9, 0, currVal_10, currVal_11); }); }
function View_TagsManagerComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "tag-name"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.addTag(_v.context.$implicit.name) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.name; _ck(_v, 1, 0, currVal_0); }); }
function View_TagsManagerComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 11, "div", [["class", "existing-tags"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 2, "p", [["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_4__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_5__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_6__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Choose from existing tags:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 4, "div", [["class", "tags-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TagsManagerComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.existingTags; _ck(_v, 9, 0, currVal_0); }, null); }
function View_TagsManagerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TagsManagerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TagsManagerComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 10, "div", [["class", "selected-tags"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 7, "mat-chip-list", [["class", "mat-chip-list"]], [[1, "tabindex", 0], [1, "aria-describedby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-multiselectable", 0], [1, "role", 0], [2, "mat-chip-list-disabled", null], [2, "mat-chip-list-invalid", null], [2, "mat-chip-list-required", null], [1, "aria-orientation", 0], [8, "id", 0]], [[null, "focus"], [null, "blur"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).focus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10)._blur() !== false);
        ad = (pd_1 && ad);
    } if (("keydown" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10)._keydown($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_chips_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["View_MatChipList_0"], _node_modules_angular_material_chips_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_16__["RenderType_MatChipList"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldControl"], null, [_angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 1556480, null, 1, _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipList"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["ErrorStateMatcher"], [8, null]], { selectable: [0, "selectable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, { chips: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, 0, 1, null, View_TagsManagerComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_TagsManagerComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_15__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.readonly; _ck(_v, 1, 0, currVal_0); var currVal_1 = !_co.readonly; _ck(_v, 4, 0, currVal_1); var currVal_14 = false; _ck(_v, 10, 0, currVal_14); var currVal_15 = _co.selectedTags; _ck(_v, 14, 0, currVal_15); var currVal_16 = (_co.existingTags.length && !_co.readonly); _ck(_v, 19, 0, currVal_16); }, function (_ck, _v) { var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).disabled ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10)._tabIndex); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10)._ariaDescribedby || null); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).required.toString(); var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).disabled.toString(); var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).errorState; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).multiple; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).role; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).disabled; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).errorState; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).required; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ariaOrientation; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10)._uid; _ck(_v, 8, 1, [currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13]); }); }
function View_TagsManagerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "tags-manager", [], null, null, null, View_TagsManagerComponent_0, RenderType_TagsManagerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _tags_manager_component__WEBPACK_IMPORTED_MODULE_19__["TagsManagerComponent"], [_tag_service__WEBPACK_IMPORTED_MODULE_20__["TagService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var TagsManagerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("tags-manager", _tags_manager_component__WEBPACK_IMPORTED_MODULE_19__["TagsManagerComponent"], View_TagsManagerComponent_Host_0, { selectedTags: "selectedTags", readonly: "readonly" }, { onChange: "onChange" }, []);



/***/ }),

/***/ "./src/app/shared/tags-manager/tags-manager.component.scss.ngstyle.js":
/*!****************************************************************************!*\
  !*** ./src/app/shared/tags-manager/tags-manager.component.scss.ngstyle.js ***!
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
var styles = ["\n\n\ntags-manager {\n  display: block; }\ntags-manager .selected-tags .tag {\n    margin: 0 10px 10px 0;\n    display: inline-block; }\ntags-manager .input-group {\n    display: flex;\n    flex-direction: row; }\ntags-manager .input-group button {\n      border-top-left-radius: 0;\n      border-bottom-left-radius: 0; }\ntags-manager .input-group input {\n      border-right: none; }\ntags-manager .main-info {\n    margin-top: 5px;\n    font-size: 1.3rem; }\ntags-manager .existing-tags {\n    margin-top: 25px; }\ntags-manager .existing-tags > p {\n      margin-bottom: 5px;\n      font-size: 1.3rem;\n      color: rgba(0, 0, 0, 0.54); }\ntags-manager .existing-tags .tags-list {\n      border: 1px solid #E0E0E0;\n      padding: 8px;\n      max-height: 60px;\n      overflow: auto; }\ntags-manager .existing-tags .tags-list > .tag-name {\n        display: inline-block;\n        margin-right: 6px;\n        color: #1565c0;\n        text-decoration: underline;\n        font-size: 1.2rem;\n        cursor: pointer; }\n"];



/***/ }),

/***/ "./src/app/shared/tags-manager/tags-manager.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/tags-manager/tags-manager.component.ts ***!
  \***************************************************************/
/*! exports provided: TagsManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TagsManagerComponent", function() { return TagsManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tag_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tag.service */ "./src/app/shared/tag.service.ts");


var TagsManagerComponent = /** @class */ (function () {
    function TagsManagerComponent(tagService) {
        this.tagService = tagService;
        /**
         * Fired when selected tags change.
         */
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Currently selected tag names.
         */
        this.selectedTags = [];
        /**
         * List of all tags from the database.
         */
        this.existingTags = [];
        /**
         * Whether tags manager should be readonly
         * or allow adding and removing tags.
         */
        this.readonly = false;
    }
    TagsManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tagService.getTags().subscribe(function (response) {
            _this.existingTags = response.pagination.data.filter(function (tag) { return tag.type !== 'status'; });
        });
    };
    /**
     * Return copy of selected tags array.
     */
    TagsManagerComponent.prototype.getSelectedTags = function () {
        return this.selectedTags.slice();
    };
    /**
     * Set selected tags.
     */
    TagsManagerComponent.prototype.setSelectedTags = function (tags) {
        return this.selectedTags = tags;
    };
    /**
     * Parse given tags string and push resulting tags into tags array.
     */
    TagsManagerComponent.prototype.addTags = function (tags) {
        var _this = this;
        if (!tags)
            return;
        var tagsArray = tags.split(',');
        tagsArray.forEach(function (name) {
            var tagName = name.trim();
            if (_this.selectedTags.indexOf(tagName) === -1) {
                _this.selectedTags.push(tagName);
            }
        });
        this.tagsString = '';
        this.onChange.emit(this.selectedTags);
    };
    /**
     * Push given tag name into tags array if it's not in array already.
     */
    TagsManagerComponent.prototype.addTag = function (tagName) {
        if (this.selectedTags.indexOf(tagName) === -1) {
            this.selectedTags.push(tagName);
            this.onChange.emit(this.selectedTags);
        }
    };
    /**
     * Remove specified tag from selected tags list.
     */
    TagsManagerComponent.prototype.removeTag = function (tagName) {
        var index = this.selectedTags.indexOf(tagName);
        this.selectedTags.splice(index, 1);
        this.onChange.emit(this.selectedTags);
    };
    /**
     * Deselect all tags.
     */
    TagsManagerComponent.prototype.deselectAll = function () {
        this.selectedTags = [];
        this.onChange.emit(this.selectedTags);
    };
    return TagsManagerComponent;
}());



/***/ })

}]);