(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-customer-mailbox-customer-mailbox-module-ngfactory"],{

/***/ "./src/app/customer-mailbox/customer-conversation/customer-conversation.component.ngfactory.js":
/*!*****************************************************************************************************!*\
  !*** ./src/app/customer-mailbox/customer-conversation/customer-conversation.component.ngfactory.js ***!
  \*****************************************************************************************************/
/*! exports provided: ActivatedRoute_1, ActivatedRouteSnapshot_4, UrlSegmentGroup_8, Observable_2, RenderType_CustomerConversationComponent, View_CustomerConversationComponent_0, View_CustomerConversationComponent_Host_0, CustomerConversationComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CustomerConversationComponent", function() { return RenderType_CustomerConversationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomerConversationComponent_0", function() { return View_CustomerConversationComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomerConversationComponent_Host_0", function() { return View_CustomerConversationComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerConversationComponentNgFactory", function() { return CustomerConversationComponentNgFactory; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRoute_1", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRouteSnapshot_4", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRouteSnapshot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlSegmentGroup_8", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["UrlSegmentGroup"]; });

/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable_2", function() { return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"]; });

/* harmony import */ var _customer_conversation_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer-conversation.component.scss.ngstyle */ "./src/app/customer-mailbox/customer-conversation/customer-conversation.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_conversation_infinite_scroll_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/conversation-infinite-scroll.directive */ "./src/app/shared/conversation-infinite-scroll.directive.ts");
/* harmony import */ var _conversation_conversation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../conversation/conversation.service */ "./src/app/conversation/conversation.service.ts");
/* harmony import */ var _conversation_conversation_header_conversation_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../conversation/conversation-header/conversation-header.component.ngfactory */ "./src/app/conversation/conversation-header/conversation-header.component.ngfactory.js");
/* harmony import */ var _conversation_conversation_header_conversation_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../conversation/conversation-header/conversation-header.component */ "./src/app/conversation/conversation-header/conversation-header.component.ts");
/* harmony import */ var _ticketing_tickets_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../ticketing/tickets.service */ "./src/app/ticketing/tickets.service.ts");
/* harmony import */ var _common_auth_current_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/auth/current-user */ "./src/common/auth/current-user.ts");
/* harmony import */ var _ticketing_mailbox_tags_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../ticketing/mailbox-tags.service */ "./src/app/ticketing/mailbox-tags.service.ts");
/* harmony import */ var _conversation_conversation_text_editor_conversation_text_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../conversation/conversation-text-editor/conversation-text-editor.component.ngfactory */ "./src/app/conversation/conversation-text-editor/conversation-text-editor.component.ngfactory.js");
/* harmony import */ var _conversation_conversation_text_editor_conversation_text_editor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../conversation/conversation-text-editor/conversation-text-editor.component */ "./src/app/conversation/conversation-text-editor/conversation-text-editor.component.ts");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/* harmony import */ var _common_core_services_browser_events_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/core/services/browser-events.service */ "./src/common/core/services/browser-events.service.ts");
/* harmony import */ var _help_center_shared_hc_urls_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../help-center/shared/hc-urls.service */ "./src/app/help-center/shared/hc-urls.service.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _conversation_conversation_replies_conversation_replies_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../conversation/conversation-replies/conversation-replies.component.ngfactory */ "./src/app/conversation/conversation-replies/conversation-replies.component.ngfactory.js");
/* harmony import */ var _conversation_conversation_replies_conversation_replies_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../conversation/conversation-replies/conversation-replies.component */ "./src/app/conversation/conversation-replies/conversation-replies.component.ts");
/* harmony import */ var _shared_backend_events__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../shared/backend-events */ "./src/app/shared/backend-events.ts");
/* harmony import */ var _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../common/core/ui/loading-indicator/loading-indicator.component.ngfactory */ "./src/common/core/ui/loading-indicator/loading-indicator.component.ngfactory.js");
/* harmony import */ var _common_core_ui_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../common/core/ui/loading-indicator/loading-indicator.component */ "./src/common/core/ui/loading-indicator/loading-indicator.component.ts");
/* harmony import */ var _ticketing_ticket_attachments_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../ticketing/ticket-attachments.service */ "./src/app/ticketing/ticket-attachments.service.ts");
/* harmony import */ var _common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../common/core/http/app-http-client.service */ "./src/common/core/http/app-http-client.service.ts");
/* harmony import */ var _customer_conversation_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./customer-conversation.component */ "./src/app/customer-mailbox/customer-conversation/customer-conversation.component.ts");
/* harmony import */ var _common_uploads_uploads_api_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../common/uploads/uploads-api.service */ "./src/common/uploads/uploads-api.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



























var styles_CustomerConversationComponent = [_customer_conversation_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_2__["styles"]];
var RenderType_CustomerConversationComponent = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵcrt"]({ encapsulation: 2, styles: styles_CustomerConversationComponent, data: {} });

function View_CustomerConversationComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 14, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](2, 0, null, null, 11, "div", [["class", "ticket-container"], ["conversationInfiniteScroll", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](3, 212992, null, 0, _shared_conversation_infinite_scroll_directive__WEBPACK_IMPORTED_MODULE_4__["ConversationInfiniteScrollDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], _conversation_conversation_service__WEBPACK_IMPORTED_MODULE_5__["Conversation"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](5, 0, null, null, 1, "conversation-header", [], null, null, null, _conversation_conversation_header_conversation_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ConversationHeaderComponent_0"], _conversation_conversation_header_conversation_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ConversationHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](6, 49152, null, 0, _conversation_conversation_header_conversation_header_component__WEBPACK_IMPORTED_MODULE_7__["ConversationHeaderComponent"], [_ticketing_tickets_service__WEBPACK_IMPORTED_MODULE_8__["TicketsService"], _common_auth_current_user__WEBPACK_IMPORTED_MODULE_9__["CurrentUser"], _ticketing_mailbox_tags_service__WEBPACK_IMPORTED_MODULE_10__["MailboxTagsService"], _conversation_conversation_service__WEBPACK_IMPORTED_MODULE_5__["Conversation"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](8, 0, null, null, 1, "conversation-text-editor", [], null, null, null, _conversation_conversation_text_editor_conversation_text_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_ConversationTextEditorComponent_0"], _conversation_conversation_text_editor_conversation_text_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_ConversationTextEditorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](9, 245760, null, 0, _conversation_conversation_text_editor_conversation_text_editor_component__WEBPACK_IMPORTED_MODULE_12__["ConversationTextEditorComponent"], [_common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_13__["Modal"], _common_auth_current_user__WEBPACK_IMPORTED_MODULE_9__["CurrentUser"], _conversation_conversation_service__WEBPACK_IMPORTED_MODULE_5__["Conversation"], _common_core_services_browser_events_service__WEBPACK_IMPORTED_MODULE_14__["BrowserEvents"], _ticketing_mailbox_tags_service__WEBPACK_IMPORTED_MODULE_10__["MailboxTagsService"], _help_center_shared_hc_urls_service__WEBPACK_IMPORTED_MODULE_15__["HcUrls"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_16__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](11, 0, null, null, 1, "conversation-replies", [], null, null, null, _conversation_conversation_replies_conversation_replies_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_ConversationRepliesComponent_0"], _conversation_conversation_replies_conversation_replies_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_ConversationRepliesComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](12, 4308992, null, 0, _conversation_conversation_replies_conversation_replies_component__WEBPACK_IMPORTED_MODULE_18__["ConversationRepliesComponent"], [_common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_13__["Modal"], _common_auth_current_user__WEBPACK_IMPORTED_MODULE_9__["CurrentUser"], _ticketing_tickets_service__WEBPACK_IMPORTED_MODULE_8__["TicketsService"], _conversation_conversation_service__WEBPACK_IMPORTED_MODULE_5__["Conversation"], _shared_backend_events__WEBPACK_IMPORTED_MODULE_19__["BackendEvents"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](16, 0, null, null, 1, "loading-indicator", [["class", "overlay"]], [[40, "@visibility", 0]], null, null, _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["View_LoadingIndicatorComponent_0"], _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["RenderType_LoadingIndicatorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](17, 49152, null, 0, _common_core_ui_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_21__["LoadingIndicatorComponent"], [], { isVisible: [0, "isVisible"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 3, 0); _ck(_v, 9, 0); _ck(_v, 12, 0); var currVal_1 = (_co.conversation.replies.isLoading || _co.conversation.isLoading); _ck(_v, 17, 0, currVal_1); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵnov"](_v, 17).isVisible; _ck(_v, 16, 0, currVal_0); }); }
function View_CustomerConversationComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 2, "customer-conversation", [], null, null, null, View_CustomerConversationComponent_0, RenderType_CustomerConversationComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵprd"](4608, null, _ticketing_ticket_attachments_service__WEBPACK_IMPORTED_MODULE_22__["TicketAttachmentsService"], _ticketing_ticket_attachments_service__WEBPACK_IMPORTED_MODULE_22__["TicketAttachmentsService"], [_common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_23__["AppHttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](2, 114688, null, 0, _customer_conversation_component__WEBPACK_IMPORTED_MODULE_24__["CustomerConversationComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _common_uploads_uploads_api_service__WEBPACK_IMPORTED_MODULE_25__["UploadsApiService"], _common_auth_current_user__WEBPACK_IMPORTED_MODULE_9__["CurrentUser"], _conversation_conversation_service__WEBPACK_IMPORTED_MODULE_5__["Conversation"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var CustomerConversationComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵccf"]("customer-conversation", _customer_conversation_component__WEBPACK_IMPORTED_MODULE_24__["CustomerConversationComponent"], View_CustomerConversationComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/customer-mailbox/customer-conversation/customer-conversation.component.scss.ngstyle.js":
/*!********************************************************************************************************!*\
  !*** ./src/app/customer-mailbox/customer-conversation/customer-conversation.component.scss.ngstyle.js ***!
  \********************************************************************************************************/
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
var styles = ["\n\n\ncustomer-conversation {\n  display: block;\n  padding: 50px 0;\n  position: relative; }\n"];



/***/ }),

/***/ "./src/app/customer-mailbox/customer-conversation/customer-conversation.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/customer-mailbox/customer-conversation/customer-conversation.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CustomerConversationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerConversationComponent", function() { return CustomerConversationComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _conversation_conversation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../conversation/conversation.service */ "./src/app/conversation/conversation.service.ts");
/* harmony import */ var _common_uploads_uploads_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/uploads/uploads-api.service */ "./src/common/uploads/uploads-api.service.ts");
/* harmony import */ var _common_auth_current_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/auth/current-user */ "./src/common/auth/current-user.ts");




var CustomerConversationComponent = /** @class */ (function () {
    /**
     * CustomerConversationComponent Constructor.
     */
    function CustomerConversationComponent(route, uploads, currentUser, conversation) {
        this.route = route;
        this.uploads = uploads;
        this.currentUser = currentUser;
        this.conversation = conversation;
    }
    CustomerConversationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.conversation.init(data.ticket);
        });
    };
    return CustomerConversationComponent;
}());



/***/ }),

/***/ "./src/app/customer-mailbox/customer-mailbox.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/customer-mailbox/customer-mailbox.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_CustomerMailboxComponent, View_CustomerMailboxComponent_0, View_CustomerMailboxComponent_Host_0, CustomerMailboxComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CustomerMailboxComponent", function() { return RenderType_CustomerMailboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomerMailboxComponent_0", function() { return View_CustomerMailboxComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomerMailboxComponent_Host_0", function() { return View_CustomerMailboxComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerMailboxComponentNgFactory", function() { return CustomerMailboxComponentNgFactory; });
/* harmony import */ var _customer_mailbox_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-mailbox.component.scss.ngstyle */ "./src/app/customer-mailbox/customer-mailbox.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_customer_footer_customer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/customer-footer/customer-footer.component.ngfactory */ "./src/app/shared/customer-footer/customer-footer.component.ngfactory.js");
/* harmony import */ var _shared_customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/customer-footer/customer-footer.component */ "./src/app/shared/customer-footer/customer-footer.component.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _common_core_ui_material_navbar_material_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/core/ui/material-navbar/material-navbar.component.ngfactory */ "./src/common/core/ui/material-navbar/material-navbar.component.ngfactory.js");
/* harmony import */ var _common_core_ui_material_navbar_material_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/core/ui/material-navbar/material-navbar.component */ "./src/common/core/ui/material-navbar/material-navbar.component.ts");
/* harmony import */ var _common_auth_current_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/auth/current-user */ "./src/common/auth/current-user.ts");
/* harmony import */ var _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/core/ui/breakpoints.service */ "./src/common/core/ui/breakpoints.service.ts");
/* harmony import */ var _help_center_suggested_articles_dropdown_suggested_articles_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../help-center/suggested-articles-dropdown/suggested-articles-dropdown.component.ngfactory */ "./src/app/help-center/suggested-articles-dropdown/suggested-articles-dropdown.component.ngfactory.js");
/* harmony import */ var _help_center_suggested_articles_dropdown_suggested_articles_dropdown_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../help-center/suggested-articles-dropdown/suggested-articles-dropdown.component */ "./src/app/help-center/suggested-articles-dropdown/suggested-articles-dropdown.component.ts");
/* harmony import */ var _help_center_shared_help_center_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../help-center/shared/help-center.service */ "./src/app/help-center/shared/help-center.service.ts");
/* harmony import */ var _help_center_shared_hc_urls_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../help-center/shared/hc-urls.service */ "./src/app/help-center/shared/hc-urls.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/core/translations/translate.directive */ "./src/common/core/translations/translate.directive.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _help_center_front_breadcrumbs_breadcrumbs_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../help-center/front/breadcrumbs/breadcrumbs.component.ngfactory */ "./src/app/help-center/front/breadcrumbs/breadcrumbs.component.ngfactory.js");
/* harmony import */ var _help_center_front_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../help-center/front/breadcrumbs/breadcrumbs.component */ "./src/app/help-center/front/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customer_mailbox_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./customer-mailbox.component */ "./src/app/customer-mailbox/customer-mailbox.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





















var styles_CustomerMailboxComponent = [_customer_mailbox_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CustomerMailboxComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_CustomerMailboxComponent, data: {} });

function View_CustomerMailboxComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "customer-footer", [["id", "customer-footer"]], null, null, null, _shared_customer_footer_customer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_CustomerFooterComponent_0"], _shared_customer_footer_customer_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_CustomerFooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _shared_customer_footer_customer_footer_component__WEBPACK_IMPORTED_MODULE_3__["CustomerFooterComponent"], [_common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_4__["Settings"]], null, null)], null, null); }
function View_CustomerMailboxComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "material-navbar", [["class", "hc-content-navbar"], ["menuPosition", "header"]], [[2, "transparent", null]], null, null, _common_core_ui_material_navbar_material_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_MaterialNavbar_0"], _common_core_ui_material_navbar_material_navbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_MaterialNavbar"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _common_core_ui_material_navbar_material_navbar_component__WEBPACK_IMPORTED_MODULE_6__["MaterialNavbar"], [_common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_4__["Settings"], _common_auth_current_user__WEBPACK_IMPORTED_MODULE_7__["CurrentUser"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_8__["BreakpointsService"]], { menuPosition: [0, "menuPosition"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 2, "suggested-articles-dropdown", [["class", "nav-searchbar"], ["placeholder", "Search help center..."], ["trans-placeholder", ""]], null, null, null, _help_center_suggested_articles_dropdown_suggested_articles_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_SuggestedArticlesDropdownComponent_0"], _help_center_suggested_articles_dropdown_suggested_articles_dropdown_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_SuggestedArticlesDropdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 114688, null, 0, _help_center_suggested_articles_dropdown_suggested_articles_dropdown_component__WEBPACK_IMPORTED_MODULE_10__["SuggestedArticlesDropdownComponent"], [_help_center_shared_help_center_service__WEBPACK_IMPORTED_MODULE_11__["HelpCenterService"], _help_center_shared_hc_urls_service__WEBPACK_IMPORTED_MODULE_12__["HcUrls"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["DomSanitizer"]], { placeholder: [0, "placeholder"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_15__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_16__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_4__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "breadcrumbs", [["class", "container"], ["resource", "Tickets"], ["resourceType", "static"]], null, null, null, _help_center_front_breadcrumbs_breadcrumbs_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["View_BreadCrumbsComponent_0"], _help_center_front_breadcrumbs_breadcrumbs_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["RenderType_BreadCrumbsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 573440, null, 0, _help_center_front_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_18__["BreadCrumbsComponent"], [_help_center_shared_hc_urls_service__WEBPACK_IMPORTED_MODULE_12__["HcUrls"], _angular_router__WEBPACK_IMPORTED_MODULE_13__["ActivatedRoute"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_16__["Translations"]], { resource: [0, "resource"], resourceType: [1, "resourceType"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_13__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CustomerMailboxComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = "header"; _ck(_v, 1, 0, currVal_1); var currVal_2 = "Search help center..."; _ck(_v, 4, 0, currVal_2); var currVal_3 = "Tickets"; var currVal_4 = "static"; _ck(_v, 9, 0, currVal_3, currVal_4); _ck(_v, 12, 0); var currVal_5 = !_co.settings.get("hc.hide_footer"); _ck(_v, 15, 0, currVal_5); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).transparent; _ck(_v, 0, 0, currVal_0); }); }
function View_CustomerMailboxComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "customer-mailbox", [["class", "customer-mailbox"]], null, null, null, View_CustomerMailboxComponent_0, RenderType_CustomerMailboxComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _customer_mailbox_component__WEBPACK_IMPORTED_MODULE_20__["CustomerMailboxComponent"], [_common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_4__["Settings"]], null, null)], null, null); }
var CustomerMailboxComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("customer-mailbox.customer-mailbox", _customer_mailbox_component__WEBPACK_IMPORTED_MODULE_20__["CustomerMailboxComponent"], View_CustomerMailboxComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/customer-mailbox/customer-mailbox.component.scss.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/customer-mailbox/customer-mailbox.component.scss.ngstyle.js ***!
  \*****************************************************************************/
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
var styles = ["\n\n\ncustomer-mailbox {\n  display: block;\n  padding-top: 70px; }\ncustomer-mailbox breadcrumbs.container {\n    margin: 0 auto;\n    padding: 36px;\n    font-size: 1.6rem; }\ncustomer-mailbox customer-conversation, customer-mailbox customer-tickets-list, customer-mailbox new-ticket {\n    min-height: calc(100vh - 165px); }\n@media screen and (max-width: 768px) {\n    customer-mailbox breadcrumbs {\n      display: none; } }\n"];



/***/ }),

/***/ "./src/app/customer-mailbox/customer-mailbox.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/customer-mailbox/customer-mailbox.component.ts ***!
  \****************************************************************/
/*! exports provided: CustomerMailboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerMailboxComponent", function() { return CustomerMailboxComponent; });
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");

var CustomerMailboxComponent = /** @class */ (function () {
    function CustomerMailboxComponent(settings) {
        this.settings = settings;
    }
    return CustomerMailboxComponent;
}());



/***/ }),

/***/ "./src/app/customer-mailbox/customer-mailbox.module.ngfactory.js":
/*!***********************************************************************!*\
  !*** ./src/app/customer-mailbox/customer-mailbox.module.ngfactory.js ***!
  \***********************************************************************/
/*! exports provided: ɵEmptyOutletComponent_1, Router_157, ROUTES_168, RouterModule_172, ɵangular_packages_router_router_a_173, ɵEmptyOutletComponentNgFactory_2, MatDialogContainer_3, MatDialog_98, MAT_DIALOG_DEFAULT_OPTIONS_99, MAT_DIALOG_SCROLL_STRATEGY_100, MatDialogModule_101, MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY_102, MatDialogContainerNgFactory_4, MatSnackBarContainer_7, SimpleSnackBar_9, MatSnackBarModule_185, MatSnackBarContainerNgFactory_8, SimpleSnackBarNgFactory_10, TooltipComponent_11, MAT_TOOLTIP_SCROLL_STRATEGY_110, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_111, MatTooltipModule_112, TooltipComponentNgFactory_12, ColorPickerComponent_31, ColorPickerService_133, ColorPickerModule_134, ColorPickerComponentNgFactory_32, NgLocalization_59, NgLocaleLocalization_60, ɵangular_packages_common_common_a_62, CommonModule_63, DOCUMENT_74, Location_94, LOCALE_ID_61, PLATFORM_ID_75, Injector_82, ComponentFactoryResolver_89, NgZone_92, ɵangular_packages_forms_forms_j_64, FormsModule_65, FormBuilder_66, ReactiveFormsModule_67, ɵangular_packages_forms_forms_bc_171, ɵangular_packages_common_http_http_h_68, HttpXsrfTokenExtractor_69, ɵangular_packages_common_http_http_f_70, HttpClientXsrfModule_71, HTTP_INTERCEPTORS_72, ɵangular_packages_common_http_http_g_73, ɵangular_packages_common_http_http_e_76, HttpClientModule_77, HttpClient_78, HttpHandler_79, ɵHttpInterceptingHandler_80, HttpBackend_81, HttpXhrBackend_83, XhrFactory_84, ɵangular_packages_common_http_http_d_85, Overlay_86, ScrollStrategyOptions_87, OverlayContainer_88, OverlayPositionBuilder_90, OverlayKeyboardDispatcher_91, OverlayModule_95, ɵc_96, ɵd_97, Directionality_93, BidiModule_175, MAT_MENU_SCROLL_STRATEGY_105, ɵd24_106, MatMenuModule_107, MutationObserverFactory_108, ObserversModule_109, HAMMER_GESTURE_CONFIG_113, DomSanitizer_121, HAMMER_LOADER_180, GestureConfig_114, MAT_HAMMER_OPTIONS_115, MatCommonModule_116, ErrorStateMatcher_129, MATERIAL_SANITY_CHECKS_179, MatRippleModule_181, MatPseudoCheckboxModule_195, MatOptionModule_196, BreakpointObserver_118, MatIconRegistry_120, MatIconModule_183, MatSortHeaderIntl_126, MAT_SORT_HEADER_INTL_PROVIDER_FACTORY_127, MatSortModule_128, MatChipsModule_130, MAT_CHIPS_DEFAULT_OPTIONS_131, ENTER_132, MAT_SELECT_SCROLL_STRATEGY_135, MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY_136, MatSelectModule_137, MatPaginatorIntl_138, MAT_PAGINATOR_INTL_PROVIDER_FACTORY_139, MatPaginatorModule_140, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_143, MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_144, MatAutocompleteModule_145, PortalModule_176, PlatformModule_177, ScrollingModule_178, MatButtonModule_182, MatCheckboxModule_186, A11yModule_187, MatProgressBarModule_188, CdkTableModule_190, MatTableModule_191, MatFormFieldModule_197, CustomerMailboxModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerMailboxModuleNgFactory", function() { return CustomerMailboxModuleNgFactory; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵEmptyOutletComponent_1", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ɵEmptyOutletComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router_157", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ROUTES_168", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ROUTES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterModule_172", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_router_router_a_173", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_router_router_a"]; });

/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵEmptyOutletComponentNgFactory_2", function() { return _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_1__["ɵEmptyOutletComponentNgFactory"]; });

/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainer_3", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialog_98", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_DEFAULT_OPTIONS_99", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DEFAULT_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_100", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogModule_101", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY_102", function() { return _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"]; });

/* harmony import */ var _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@angular/material/dialog/typings/index.ngfactory */ "./node_modules/@angular/material/dialog/typings/index.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogContainerNgFactory_4", function() { return _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDialogContainerNgFactory"]; });

/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarContainer_7", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleSnackBar_9", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["SimpleSnackBar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarModule_185", function() { return _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"]; });

/* harmony import */ var _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@angular/material/snack-bar/typings/index.ngfactory */ "./node_modules/@angular/material/snack-bar/typings/index.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSnackBarContainerNgFactory_8", function() { return _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarContainerNgFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SimpleSnackBarNgFactory_10", function() { return _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["SimpleSnackBarNgFactory"]; });

/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent_11", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["TooltipComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_110", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MAT_TOOLTIP_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_111", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTooltipModule_112", function() { return _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"]; });

/* harmony import */ var _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../node_modules/@angular/material/tooltip/typings/index.ngfactory */ "./node_modules/@angular/material/tooltip/typings/index.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TooltipComponentNgFactory_12", function() { return _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["TooltipComponentNgFactory"]; });

/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent_31", function() { return ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerService_133", function() { return ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerModule_134", function() { return ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"]; });

/* harmony import */ var _node_modules_ngx_color_picker_dist_ngx_color_picker_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../node_modules/ngx-color-picker/dist/ngx-color-picker.ngfactory */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponentNgFactory_32", function() { return _node_modules_ngx_color_picker_dist_ngx_color_picker_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ColorPickerComponentNgFactory"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgLocalization_59", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocalization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgLocaleLocalization_60", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocaleLocalization"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_common_a_62", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_common_a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonModule_63", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DOCUMENT_74", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location_94", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]; });

/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOCALE_ID_61", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_11__["LOCALE_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PLATFORM_ID_75", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_11__["PLATFORM_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector_82", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentFactoryResolver_89", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ComponentFactoryResolver"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgZone_92", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgZone"]; });

/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_j_64", function() { return _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_j"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormsModule_65", function() { return _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormBuilder_66", function() { return _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormsModule_67", function() { return _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_forms_forms_bc_171", function() { return _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_bc"]; });

/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_h_68", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpXsrfTokenExtractor_69", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_f_70", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClientXsrfModule_71", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HTTP_INTERCEPTORS_72", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_g_73", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_g"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_e_76", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClientModule_77", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpClient_78", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpHandler_79", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵHttpInterceptingHandler_80", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵHttpInterceptingHandler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpBackend_81", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HttpXhrBackend_83", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XhrFactory_84", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_common_http_http_d_85", function() { return _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"]; });

/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Overlay_86", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollStrategyOptions_87", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ScrollStrategyOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayContainer_88", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayPositionBuilder_90", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayPositionBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayKeyboardDispatcher_91", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayKeyboardDispatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverlayModule_95", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵc_96", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ɵc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵd_97", function() { return _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ɵd"]; });

/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Directionality_93", function() { return _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BidiModule_175", function() { return _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["BidiModule"]; });

/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_MENU_SCROLL_STRATEGY_105", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MAT_MENU_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵd24_106", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["ɵd24"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatMenuModule_107", function() { return _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"]; });

/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MutationObserverFactory_108", function() { return _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["MutationObserverFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObserversModule_109", function() { return _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["ObserversModule"]; });

/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HAMMER_GESTURE_CONFIG_113", function() { return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HAMMER_GESTURE_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DomSanitizer_121", function() { return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["DomSanitizer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HAMMER_LOADER_180", function() { return _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HAMMER_LOADER"]; });

/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GestureConfig_114", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["GestureConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_HAMMER_OPTIONS_115", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MAT_HAMMER_OPTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCommonModule_116", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatCommonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher_129", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["ErrorStateMatcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS_179", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MATERIAL_SANITY_CHECKS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatRippleModule_181", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule_195", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatPseudoCheckboxModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatOptionModule_196", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOptionModule"]; });

/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakpointObserver_118", function() { return _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["BreakpointObserver"]; });

/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatIconRegistry_120", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatIconModule_183", function() { return _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"]; });

/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSortHeaderIntl_126", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortHeaderIntl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SORT_HEADER_INTL_PROVIDER_FACTORY_127", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MAT_SORT_HEADER_INTL_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSortModule_128", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"]; });

/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatChipsModule_130", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_CHIPS_DEFAULT_OPTIONS_131", function() { return _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MAT_CHIPS_DEFAULT_OPTIONS"]; });

/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ENTER_132", function() { return _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__["ENTER"]; });

/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_135", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MAT_SELECT_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY_136", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSelectModule_137", function() { return _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"]; });

/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl_138", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorIntl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_PAGINATOR_INTL_PROVIDER_FACTORY_139", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorModule_140", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"]; });

/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_143", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY_144", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule_145", function() { return _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MatAutocompleteModule"]; });

/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortalModule_176", function() { return _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_28__["PortalModule"]; });

/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlatformModule_177", function() { return _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_29__["PlatformModule"]; });

/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollingModule_178", function() { return _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__["ScrollingModule"]; });

/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatButtonModule_182", function() { return _angular_material_button__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"]; });

/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCheckboxModule_186", function() { return _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__["MatCheckboxModule"]; });

/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "A11yModule_187", function() { return _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__["A11yModule"]; });

/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatProgressBarModule_188", function() { return _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"]; });

/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CdkTableModule_190", function() { return _angular_cdk_table__WEBPACK_IMPORTED_MODULE_35__["CdkTableModule"]; });

/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTableModule_191", function() { return _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"]; });

/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldModule_197", function() { return _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__["MatFormFieldModule"]; });

/* harmony import */ var _customer_mailbox_module__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./customer-mailbox.module */ "./src/app/customer-mailbox/customer-mailbox.module.ts");
/* harmony import */ var _common_core_ui_confirm_modal_confirm_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../common/core/ui/confirm-modal/confirm-modal.component.ngfactory */ "./src/common/core/ui/confirm-modal/confirm-modal.component.ngfactory.js");
/* harmony import */ var _common_file_preview_text_preview_text_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../common/file-preview/text-preview/text-preview.component.ngfactory */ "./src/common/file-preview/text-preview/text-preview.component.ngfactory.js");
/* harmony import */ var _common_file_preview_video_preview_video_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../common/file-preview/video-preview/video-preview.component.ngfactory */ "./src/common/file-preview/video-preview/video-preview.component.ngfactory.js");
/* harmony import */ var _common_file_preview_image_preview_image_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../../common/file-preview/image-preview/image-preview.component.ngfactory */ "./src/common/file-preview/image-preview/image-preview.component.ngfactory.js");
/* harmony import */ var _common_file_preview_pdf_preview_pdf_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../../common/file-preview/pdf-preview/pdf-preview.component.ngfactory */ "./src/common/file-preview/pdf-preview/pdf-preview.component.ngfactory.js");
/* harmony import */ var _common_file_preview_default_preview_default_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../../common/file-preview/default-preview/default-preview.component.ngfactory */ "./src/common/file-preview/default-preview/default-preview.component.ngfactory.js");
/* harmony import */ var _common_file_preview_audio_preview_audio_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../../common/file-preview/audio-preview/audio-preview.component.ngfactory */ "./src/common/file-preview/audio-preview/audio-preview.component.ngfactory.js");
/* harmony import */ var _common_file_preview_google_docs_viewer_google_docs_viewer_component_ngfactory__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../../common/file-preview/google-docs-viewer/google-docs-viewer.component.ngfactory */ "./src/common/file-preview/google-docs-viewer/google-docs-viewer.component.ngfactory.js");
/* harmony import */ var _shared_email_address_modal_email_address_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../shared/email-address-modal/email-address-modal.component.ngfactory */ "./src/app/shared/email-address-modal/email-address-modal.component.ngfactory.js");
/* harmony import */ var _shared_file_preview_overlay_file_preview_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../shared/file-preview-overlay/file-preview-overlay.component.ngfactory */ "./src/app/shared/file-preview-overlay/file-preview-overlay.component.ngfactory.js");
/* harmony import */ var _common_core_ui_color_picker_colorpicker_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../common/core/ui/color-picker/colorpicker-panel.component.ngfactory */ "./src/common/core/ui/color-picker/colorpicker-panel.component.ngfactory.js");
/* harmony import */ var _common_auth_find_users_modal_find_users_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ../../common/auth/find-users-modal/find-users-modal.component.ngfactory */ "./src/common/auth/find-users-modal/find-users-modal.component.ngfactory.js");
/* harmony import */ var _ticketing_canned_replies_crupdate_canned_reply_modal_crupdate_canned_reply_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../ticketing/canned-replies/crupdate-canned-reply-modal/crupdate-canned-reply-modal.component.ngfactory */ "./src/app/ticketing/canned-replies/crupdate-canned-reply-modal/crupdate-canned-reply-modal.component.ngfactory.js");
/* harmony import */ var _conversation_confirm_reply_delete_modal_confirm_reply_delete_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../conversation/confirm-reply-delete-modal/confirm-reply-delete-modal.component.ngfactory */ "./src/app/conversation/confirm-reply-delete-modal/confirm-reply-delete-modal.component.ngfactory.js");
/* harmony import */ var _ticketing_add_note_modal_add_note_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ../ticketing/add-note-modal/add-note-modal.component.ngfactory */ "./src/app/ticketing/add-note-modal/add-note-modal.component.ngfactory.js");
/* harmony import */ var _conversation_conversation_modal_conversation_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ../conversation/conversation-modal/conversation-modal.component.ngfactory */ "./src/app/conversation/conversation-modal/conversation-modal.component.ngfactory.js");
/* harmony import */ var _ticketing_update_reply_modal_update_reply_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ../ticketing/update-reply-modal/update-reply-modal.component.ngfactory */ "./src/app/ticketing/update-reply-modal/update-reply-modal.component.ngfactory.js");
/* harmony import */ var _conversation_conversation_replies_show_original_reply_modal_show_original_reply_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ../conversation/conversation-replies/show-original-reply-modal/show-original-reply-modal.component.ngfactory */ "./src/app/conversation/conversation-replies/show-original-reply-modal/show-original-reply-modal.component.ngfactory.js");
/* harmony import */ var _help_center_shared_article_modal_article_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ../help-center/shared/article-modal/article-modal.component.ngfactory */ "./src/app/help-center/shared/article-modal/article-modal.component.ngfactory.js");
/* harmony import */ var _customer_mailbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./customer-mailbox.component.ngfactory */ "./src/app/customer-mailbox/customer-mailbox.component.ngfactory.js");
/* harmony import */ var _customer_tickets_list_customer_tickets_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./customer-tickets-list/customer-tickets-list.component.ngfactory */ "./src/app/customer-mailbox/customer-tickets-list/customer-tickets-list.component.ngfactory.js");
/* harmony import */ var _ticketing_new_ticket_new_ticket_component_ngfactory__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ../ticketing/new-ticket/new-ticket.component.ngfactory */ "./src/app/ticketing/new-ticket/new-ticket.component.ngfactory.js");
/* harmony import */ var _customer_conversation_customer_conversation_component_ngfactory__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./customer-conversation/customer-conversation.component.ngfactory */ "./src/app/customer-mailbox/customer-conversation/customer-conversation.component.ngfactory.js");
/* harmony import */ var _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../../common/core/ui/dialogs/modal.service */ "./src/common/core/ui/dialogs/modal.service.ts");
/* harmony import */ var _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ../../common/core/ui/breakpoints.service */ "./src/common/core/ui/breakpoints.service.ts");
/* harmony import */ var _common_file_preview_available_previews__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ../../common/file-preview/available-previews */ "./src/common/file-preview/available-previews.ts");
/* harmony import */ var _common_core_ui_overlay_panel_overlay_panel_service__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ../../common/core/ui/overlay-panel/overlay-panel.service */ "./src/common/core/ui/overlay-panel/overlay-panel.service.ts");
/* harmony import */ var _ticketing_canned_replies_canned_replies_service__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ../ticketing/canned-replies/canned-replies.service */ "./src/app/ticketing/canned-replies/canned-replies.service.ts");
/* harmony import */ var _common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! ../../common/core/http/app-http-client.service */ "./src/common/core/http/app-http-client.service.ts");
/* harmony import */ var _ticketing_ticket_attachments_service__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! ../ticketing/ticket-attachments.service */ "./src/app/ticketing/ticket-attachments.service.ts");
/* harmony import */ var _ticketing_tickets_service__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! ../ticketing/tickets.service */ "./src/app/ticketing/tickets.service.ts");
/* harmony import */ var _conversation_draft_service__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! ../conversation/draft.service */ "./src/app/conversation/draft.service.ts");
/* harmony import */ var _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! ../../common/uploads/upload-queue/upload-queue.service */ "./src/common/uploads/upload-queue/upload-queue.service.ts");
/* harmony import */ var _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! ../../common/core/ui/toast.service */ "./src/common/core/ui/toast.service.ts");
/* harmony import */ var _conversation_conversation_replies_service__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! ../conversation/conversation-replies.service */ "./src/app/conversation/conversation-replies.service.ts");
/* harmony import */ var _conversation_after_reply_action_service__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! ../conversation/after-reply-action.service */ "./src/app/conversation/after-reply-action.service.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! ../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _ticketing_mailbox_tags_service__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! ../ticketing/mailbox-tags.service */ "./src/app/ticketing/mailbox-tags.service.ts");
/* harmony import */ var _common_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! ../../common/core/services/local-storage.service */ "./src/common/core/services/local-storage.service.ts");
/* harmony import */ var _conversation_conversation_service__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! ../conversation/conversation.service */ "./src/app/conversation/conversation.service.ts");
/* harmony import */ var _conversation_conversation_resolve_service__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! ../conversation/conversation-resolve.service */ "./src/app/conversation/conversation-resolve.service.ts");
/* harmony import */ var _shared_tag_service__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! ../shared/tag.service */ "./src/app/shared/tag.service.ts");
/* harmony import */ var _common_core_http_http_cache_client__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! ../../common/core/http/http-cache-client */ "./src/common/core/http/http-cache-client.ts");
/* harmony import */ var _help_center_shared_help_center_service__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! ../help-center/shared/help-center.service */ "./src/app/help-center/shared/help-center.service.ts");
/* harmony import */ var _help_center_front_search_term_logger_service__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! ../help-center/front/search-term-logger.service */ "./src/app/help-center/front/search-term-logger.service.ts");
/* harmony import */ var _help_center_shared_categories_service__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! ../help-center/shared/categories.service */ "./src/app/help-center/shared/categories.service.ts");
/* harmony import */ var _help_center_shared_article_article_resolve_service__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! ../help-center/shared/article/article-resolve.service */ "./src/app/help-center/shared/article/article-resolve.service.ts");
/* harmony import */ var _new_ticket_categories_resolve__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! ./new-ticket-categories-resolve */ "./src/app/customer-mailbox/new-ticket-categories-resolve.ts");
/* harmony import */ var _common_core_ui_custom_scrollbar_custom_scrollbar_module__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! ../../common/core/ui/custom-scrollbar/custom-scrollbar.module */ "./src/common/core/ui/custom-scrollbar/custom-scrollbar.module.ts");
/* harmony import */ var _common_core_ui_confirm_modal_confirm_modal_module__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! ../../common/core/ui/confirm-modal/confirm-modal.module */ "./src/common/core/ui/confirm-modal/confirm-modal.module.ts");
/* harmony import */ var _common_core_translations_translations_module__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! ../../common/core/translations/translations.module */ "./src/common/core/translations/translations.module.ts");
/* harmony import */ var _common_core_ui_ui_module__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! ../../common/core/ui/ui.module */ "./src/common/core/ui/ui.module.ts");
/* harmony import */ var _common_file_preview_file_preview_module__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! ../../common/file-preview/file-preview.module */ "./src/common/file-preview/file-preview.module.ts");
/* harmony import */ var _common_uploads_uploads_module__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! ../../common/uploads/uploads.module */ "./src/common/uploads/uploads.module.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! ../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _common_core_http_http_module__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! ../../common/core/http/http.module */ "./src/common/core/http/http.module.ts");
/* harmony import */ var _common_core_core_module__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! ../../common/core/core.module */ "./src/common/core/core.module.ts");
/* harmony import */ var _common_text_editor_text_editor_module__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! ../../common/text-editor/text-editor.module */ "./src/common/text-editor/text-editor.module.ts");
/* harmony import */ var _common_auth_find_users_modal_find_users_modal_module__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! ../../common/auth/find-users-modal/find-users-modal.module */ "./src/common/auth/find-users-modal/find-users-modal.module.ts");
/* harmony import */ var _help_center_suggested_articles_dropdown_suggested_article_dropdown_module__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! ../help-center/suggested-articles-dropdown/suggested-article-dropdown.module */ "./src/app/help-center/suggested-articles-dropdown/suggested-article-dropdown.module.ts");
/* harmony import */ var _conversation_conversation_module__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! ../conversation/conversation.module */ "./src/app/conversation/conversation.module.ts");
/* harmony import */ var _help_center_shared_help_center_shared_module__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! ../help-center/shared/help-center-shared.module */ "./src/app/help-center/shared/help-center-shared.module.ts");
/* harmony import */ var _customer_mailbox_component__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! ./customer-mailbox.component */ "./src/app/customer-mailbox/customer-mailbox.component.ts");
/* harmony import */ var _common_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! ../../common/guards/auth-guard.service */ "./src/common/guards/auth-guard.service.ts");
/* harmony import */ var _customer_tickets_list_customer_tickets_list_component__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! ./customer-tickets-list/customer-tickets-list.component */ "./src/app/customer-mailbox/customer-tickets-list/customer-tickets-list.component.ts");
/* harmony import */ var _ticketing_new_ticket_new_ticket_component__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! ../ticketing/new-ticket/new-ticket.component */ "./src/app/ticketing/new-ticket/new-ticket.component.ts");
/* harmony import */ var _customer_conversation_customer_conversation_component__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! ./customer-conversation/customer-conversation.component */ "./src/app/customer-mailbox/customer-conversation/customer-conversation.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
















































































































































var CustomerMailboxModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵcmf"](_customer_mailbox_module__WEBPACK_IMPORTED_MODULE_38__["CustomerMailboxModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_1__["ɵEmptyOutletComponentNgFactory"], _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["MatDialogContainerNgFactory"], _common_core_ui_confirm_modal_confirm_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_39__["ConfirmModalComponentNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["SimpleSnackBarNgFactory"], _node_modules_angular_material_tooltip_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_7__["TooltipComponentNgFactory"], _common_file_preview_text_preview_text_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_40__["TextPreviewComponentNgFactory"], _common_file_preview_video_preview_video_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_41__["VideoPreviewComponentNgFactory"], _common_file_preview_image_preview_image_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_42__["ImagePreviewComponentNgFactory"], _common_file_preview_pdf_preview_pdf_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_43__["PdfPreviewComponentNgFactory"], _common_file_preview_default_preview_default_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_44__["DefaultPreviewComponentNgFactory"], _common_file_preview_audio_preview_audio_preview_component_ngfactory__WEBPACK_IMPORTED_MODULE_45__["AudioPreviewComponentNgFactory"], _common_file_preview_google_docs_viewer_google_docs_viewer_component_ngfactory__WEBPACK_IMPORTED_MODULE_46__["GoogleDocsViewerComponentNgFactory"], _shared_email_address_modal_email_address_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_47__["EmailAddressModalComponentNgFactory"], _shared_file_preview_overlay_file_preview_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_48__["FilePreviewOverlayComponentNgFactory"], _node_modules_ngx_color_picker_dist_ngx_color_picker_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ColorPickerComponentNgFactory"], _common_core_ui_color_picker_colorpicker_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_49__["ColorpickerPanelComponentNgFactory"], _common_auth_find_users_modal_find_users_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_50__["FindUsersModalComponentNgFactory"], _ticketing_canned_replies_crupdate_canned_reply_modal_crupdate_canned_reply_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_51__["CrupdateCannedReplyModalComponentNgFactory"], _conversation_confirm_reply_delete_modal_confirm_reply_delete_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_52__["ConfirmReplyDeleteModalComponentNgFactory"], _ticketing_add_note_modal_add_note_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_53__["AddNoteModalComponentNgFactory"], _conversation_conversation_modal_conversation_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_54__["ConversationModalComponentNgFactory"], _ticketing_update_reply_modal_update_reply_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_55__["UpdateReplyModalComponentNgFactory"], _conversation_conversation_replies_show_original_reply_modal_show_original_reply_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_56__["ShowOriginalReplyModalComponentNgFactory"], _help_center_shared_article_modal_article_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_57__["ArticleModalComponentNgFactory"], _customer_mailbox_component_ngfactory__WEBPACK_IMPORTED_MODULE_58__["CustomerMailboxComponentNgFactory"], _customer_tickets_list_customer_tickets_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_59__["CustomerTicketsListComponentNgFactory"], _ticketing_new_ticket_new_ticket_component_ngfactory__WEBPACK_IMPORTED_MODULE_60__["NewTicketComponentNgFactory"], _customer_conversation_customer_conversation_component_ngfactory__WEBPACK_IMPORTED_MODULE_61__["CustomerConversationComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_11__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_j"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_j"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_62__["Modal"], _common_core_ui_dialogs_modal_service__WEBPACK_IMPORTED_MODULE_62__["Modal"], [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MAT_MENU_SCROLL_STRATEGY"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["ɵd24"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["MutationObserverFactory"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["MutationObserverFactory"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MAT_TOOLTIP_SCROLL_STRATEGY"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HAMMER_GESTURE_CONFIG"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["GestureConfig"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MAT_HAMMER_OPTIONS"]], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatCommonModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_63__["BreakpointsService"], _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_63__["BreakpointsService"], [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_20__["BreakpointObserver"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _common_file_preview_available_previews__WEBPACK_IMPORTED_MODULE_64__["AVAILABLE_PREVIEWS"], _common_file_preview_available_previews__WEBPACK_IMPORTED_MODULE_64__["DefaultPreviews"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortHeaderIntl"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MAT_SORT_HEADER_INTL_PROVIDER_FACTORY"], [[3, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortHeaderIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["ErrorStateMatcher"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["ErrorStateMatcher"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerService"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MAT_SELECT_SCROLL_STRATEGY"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorIntl"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MAT_PAGINATOR_INTL_PROVIDER_FACTORY"], [[3, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorIntl"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _common_core_ui_overlay_panel_overlay_panel_service__WEBPACK_IMPORTED_MODULE_65__["OverlayPanel"], _common_core_ui_overlay_panel_overlay_panel_service__WEBPACK_IMPORTED_MODULE_65__["OverlayPanel"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"], _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_63__["BreakpointsService"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](5120, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MAT_AUTOCOMPLETE_SCROLL_STRATEGY_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _ticketing_canned_replies_canned_replies_service__WEBPACK_IMPORTED_MODULE_66__["CannedRepliesService"], _ticketing_canned_replies_canned_replies_service__WEBPACK_IMPORTED_MODULE_66__["CannedRepliesService"], [_common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_67__["AppHttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _ticketing_ticket_attachments_service__WEBPACK_IMPORTED_MODULE_68__["TicketAttachmentsService"], _ticketing_ticket_attachments_service__WEBPACK_IMPORTED_MODULE_68__["TicketAttachmentsService"], [_common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_67__["AppHttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _ticketing_tickets_service__WEBPACK_IMPORTED_MODULE_69__["TicketsService"], _ticketing_tickets_service__WEBPACK_IMPORTED_MODULE_69__["TicketsService"], [_common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_67__["AppHttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _conversation_draft_service__WEBPACK_IMPORTED_MODULE_70__["Draft"], _conversation_draft_service__WEBPACK_IMPORTED_MODULE_70__["Draft"], [_ticketing_ticket_attachments_service__WEBPACK_IMPORTED_MODULE_68__["TicketAttachmentsService"], _ticketing_tickets_service__WEBPACK_IMPORTED_MODULE_69__["TicketsService"], _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_71__["UploadQueueService"], _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_72__["Toast"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _conversation_conversation_replies_service__WEBPACK_IMPORTED_MODULE_73__["ConversationReplies"], _conversation_conversation_replies_service__WEBPACK_IMPORTED_MODULE_73__["ConversationReplies"], [_ticketing_tickets_service__WEBPACK_IMPORTED_MODULE_69__["TicketsService"], _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_72__["Toast"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _conversation_after_reply_action_service__WEBPACK_IMPORTED_MODULE_74__["AfterReplyAction"], _conversation_after_reply_action_service__WEBPACK_IMPORTED_MODULE_74__["AfterReplyAction"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_72__["Toast"], _ticketing_tickets_service__WEBPACK_IMPORTED_MODULE_69__["TicketsService"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_75__["Settings"], _ticketing_mailbox_tags_service__WEBPACK_IMPORTED_MODULE_76__["MailboxTagsService"], _common_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_77__["LocalStorage"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _conversation_conversation_service__WEBPACK_IMPORTED_MODULE_78__["Conversation"], _conversation_conversation_service__WEBPACK_IMPORTED_MODULE_78__["Conversation"], [_conversation_draft_service__WEBPACK_IMPORTED_MODULE_70__["Draft"], _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_72__["Toast"], _ticketing_tickets_service__WEBPACK_IMPORTED_MODULE_69__["TicketsService"], _conversation_conversation_replies_service__WEBPACK_IMPORTED_MODULE_73__["ConversationReplies"], _conversation_after_reply_action_service__WEBPACK_IMPORTED_MODULE_74__["AfterReplyAction"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _conversation_conversation_resolve_service__WEBPACK_IMPORTED_MODULE_79__["TicketResolve"], _conversation_conversation_resolve_service__WEBPACK_IMPORTED_MODULE_79__["TicketResolve"], [_ticketing_tickets_service__WEBPACK_IMPORTED_MODULE_69__["TicketsService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _shared_tag_service__WEBPACK_IMPORTED_MODULE_80__["TagService"], _shared_tag_service__WEBPACK_IMPORTED_MODULE_80__["TagService"], [_common_core_http_http_cache_client__WEBPACK_IMPORTED_MODULE_81__["HttpCacheClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _help_center_shared_help_center_service__WEBPACK_IMPORTED_MODULE_82__["HelpCenterService"], _help_center_shared_help_center_service__WEBPACK_IMPORTED_MODULE_82__["HelpCenterService"], [_common_core_http_http_cache_client__WEBPACK_IMPORTED_MODULE_81__["HttpCacheClient"], _help_center_front_search_term_logger_service__WEBPACK_IMPORTED_MODULE_83__["SearchTermLoggerService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _help_center_shared_categories_service__WEBPACK_IMPORTED_MODULE_84__["CategoriesService"], _help_center_shared_categories_service__WEBPACK_IMPORTED_MODULE_84__["CategoriesService"], [_common_core_http_http_cache_client__WEBPACK_IMPORTED_MODULE_81__["HttpCacheClient"], _common_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_77__["LocalStorage"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _help_center_shared_article_article_resolve_service__WEBPACK_IMPORTED_MODULE_85__["ArticleResolve"], _help_center_shared_article_article_resolve_service__WEBPACK_IMPORTED_MODULE_85__["ArticleResolve"], [_help_center_shared_help_center_service__WEBPACK_IMPORTED_MODULE_82__["HelpCenterService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](4608, _new_ticket_categories_resolve__WEBPACK_IMPORTED_MODULE_86__["NewTicketCategoriesResolve"], _new_ticket_categories_resolve__WEBPACK_IMPORTED_MODULE_86__["NewTicketCategoriesResolve"], [_angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"], _common_core_http_http_cache_client__WEBPACK_IMPORTED_MODULE_81__["HttpCacheClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_bc"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_bc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_core_ui_custom_scrollbar_custom_scrollbar_module__WEBPACK_IMPORTED_MODULE_87__["CustomScrollbarModule"], _common_core_ui_custom_scrollbar_custom_scrollbar_module__WEBPACK_IMPORTED_MODULE_87__["CustomScrollbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_15__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_28__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_28__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_29__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_29__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_14__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_31__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_core_ui_confirm_modal_confirm_modal_module__WEBPACK_IMPORTED_MODULE_88__["ConfirmModalModule"], _common_core_ui_confirm_modal_confirm_modal_module__WEBPACK_IMPORTED_MODULE_88__["ConfirmModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_core_translations_translations_module__WEBPACK_IMPORTED_MODULE_89__["TranslationsModule"], _common_core_translations_translations_module__WEBPACK_IMPORTED_MODULE_89__["TranslationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["ObserversModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_17__["ObserversModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__["MatCheckboxModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_32__["MatCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__["A11yModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_33__["A11yModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_6__["MatTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_core_ui_ui_module__WEBPACK_IMPORTED_MODULE_90__["UiModule"], _common_core_ui_ui_module__WEBPACK_IMPORTED_MODULE_90__["UiModule"], [_angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["DomSanitizer"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_75__["Settings"]]), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_file_preview_file_preview_module__WEBPACK_IMPORTED_MODULE_91__["FilePreviewModule"], _common_file_preview_file_preview_module__WEBPACK_IMPORTED_MODULE_91__["FilePreviewModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_34__["MatProgressBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_uploads_uploads_module__WEBPACK_IMPORTED_MODULE_92__["UploadsModule"], _common_uploads_uploads_module__WEBPACK_IMPORTED_MODULE_92__["UploadsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_35__["CdkTableModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_35__["CdkTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_36__["MatTableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_22__["MatSortModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MatChipsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _shared_module__WEBPACK_IMPORTED_MODULE_93__["SharedModule"], _shared_module__WEBPACK_IMPORTED_MODULE_93__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_core_http_http_module__WEBPACK_IMPORTED_MODULE_94__["HttpModule"], _common_core_http_http_module__WEBPACK_IMPORTED_MODULE_94__["HttpModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_core_core_module__WEBPACK_IMPORTED_MODULE_95__["CoreModule"], _common_core_core_module__WEBPACK_IMPORTED_MODULE_95__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatPseudoCheckboxModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatPseudoCheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOptionModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatOptionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__["MatFormFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_37__["MatFormFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_26__["MatPaginatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_text_editor_text_editor_module__WEBPACK_IMPORTED_MODULE_96__["TextEditorModule"], _common_text_editor_text_editor_module__WEBPACK_IMPORTED_MODULE_96__["TextEditorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _common_auth_find_users_modal_find_users_modal_module__WEBPACK_IMPORTED_MODULE_97__["FindUsersModalModule"], _common_auth_find_users_modal_find_users_modal_module__WEBPACK_IMPORTED_MODULE_97__["FindUsersModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MatAutocompleteModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_27__["MatAutocompleteModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _help_center_suggested_articles_dropdown_suggested_article_dropdown_module__WEBPACK_IMPORTED_MODULE_98__["SuggestedArticleDropdownModule"], _help_center_suggested_articles_dropdown_suggested_article_dropdown_module__WEBPACK_IMPORTED_MODULE_98__["SuggestedArticleDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _conversation_conversation_module__WEBPACK_IMPORTED_MODULE_99__["ConversationModule"], _conversation_conversation_module__WEBPACK_IMPORTED_MODULE_99__["ConversationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _help_center_shared_help_center_shared_module__WEBPACK_IMPORTED_MODULE_100__["HelpCenterSharedModule"], _help_center_shared_help_center_shared_module__WEBPACK_IMPORTED_MODULE_100__["HelpCenterSharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1073742336, _customer_mailbox_module__WEBPACK_IMPORTED_MODULE_38__["CustomerMailboxModule"], _customer_mailbox_module__WEBPACK_IMPORTED_MODULE_38__["CustomerMailboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](256, _angular_material_chips__WEBPACK_IMPORTED_MODULE_23__["MAT_CHIPS_DEFAULT_OPTIONS"], { separatorKeyCodes: [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_24__["ENTER"]] }, []), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_0__["ROUTES"], function () { return [[{ path: "", component: _customer_mailbox_component__WEBPACK_IMPORTED_MODULE_101__["CustomerMailboxComponent"], canActivate: [_common_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_102__["AuthGuard"]], children: [{ path: "", component: _customer_tickets_list_customer_tickets_list_component__WEBPACK_IMPORTED_MODULE_103__["CustomerTicketsListComponent"] }, { path: "new", component: _ticketing_new_ticket_new_ticket_component__WEBPACK_IMPORTED_MODULE_104__["NewTicketComponent"], resolve: { categories: _new_ticket_categories_resolve__WEBPACK_IMPORTED_MODULE_86__["NewTicketCategoriesResolve"] }, data: { permissions: ["tickets.create", "tags.view"] } }, { path: ":id", component: _customer_conversation_customer_conversation_component__WEBPACK_IMPORTED_MODULE_105__["CustomerConversationComponent"], resolve: { ticket: _conversation_conversation_resolve_service__WEBPACK_IMPORTED_MODULE_79__["TicketResolve"] } }] }]]; }, [])]); });



/***/ }),

/***/ "./src/app/customer-mailbox/customer-mailbox.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/customer-mailbox/customer-mailbox.module.ts ***!
  \*************************************************************/
/*! exports provided: CustomerMailboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerMailboxModule", function() { return CustomerMailboxModule; });
var CustomerMailboxModule = /** @class */ (function () {
    function CustomerMailboxModule() {
    }
    return CustomerMailboxModule;
}());



/***/ }),

/***/ "./src/app/customer-mailbox/customer-tickets-list/customer-tickets-list.component.ngfactory.js":
/*!*****************************************************************************************************!*\
  !*** ./src/app/customer-mailbox/customer-tickets-list/customer-tickets-list.component.ngfactory.js ***!
  \*****************************************************************************************************/
/*! exports provided: ViewChild_1, ɵangular_packages_core_core_b_2, Query_3, Input_9, Output_10, ChangeDetectorRef_15, Injector_27, ɵangular_packages_core_core_c_28, defineInjectable_29, NgModuleFactoryLoader_30, Compiler_31, MatSort_4, _MatSortMixinBase_5, MatSortBase_8, mixinInitialized_6, mixinDisabled_7, MatPaginator_11, _MatPaginatorBase_12, MatPaginatorBase_13, MatPaginatorIntl_14, View_MatPaginator_0_16, RenderType_MatPaginator_17, MatPaginatorNgFactory_18, Router_21, UrlSerializer_23, ChildrenOutletContexts_24, Location_25, LocationStrategy_26, RenderType_CustomerTicketsListComponent, View_CustomerTicketsListComponent_0, View_CustomerTicketsListComponent_Host_0, CustomerTicketsListComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CustomerTicketsListComponent", function() { return RenderType_CustomerTicketsListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomerTicketsListComponent_0", function() { return View_CustomerTicketsListComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomerTicketsListComponent_Host_0", function() { return View_CustomerTicketsListComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerTicketsListComponentNgFactory", function() { return CustomerTicketsListComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewChild_1", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_2", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query_3", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input_9", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Output_10", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChangeDetectorRef_15", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector_27", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_c_28", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineInjectable_29", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgModuleFactoryLoader_30", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Compiler_31", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"]; });

/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSort_4", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MatSortMixinBase_5", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["_MatSortMixinBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSortBase_8", function() { return _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortBase"]; });

/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinInitialized_6", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinInitialized"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mixinDisabled_7", function() { return _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["mixinDisabled"]; });

/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginator_11", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_MatPaginatorBase_12", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["_MatPaginatorBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorBase_13", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorBase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorIntl_14", function() { return _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorIntl"]; });

/* harmony import */ var _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/paginator/typings/index.ngfactory */ "./node_modules/@angular/material/paginator/typings/index.ngfactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "View_MatPaginator_0_16", function() { return _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatPaginator_0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderType_MatPaginator_17", function() { return _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatPaginator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorNgFactory_18", function() { return _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorNgFactory"]; });

/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router_21", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlSerializer_23", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_5__["UrlSerializer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChildrenOutletContexts_24", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildrenOutletContexts"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location_25", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationStrategy_26", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]; });

/* harmony import */ var _customer_tickets_list_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./customer-tickets-list.component.scss.ngstyle */ "./src/app/customer-mailbox/customer-tickets-list/customer-tickets-list.component.scss.ngstyle.js");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/core/translations/translate.directive */ "./src/common/core/translations/translate.directive.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _node_modules_angular_material_sort_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/sort/typings/index.ngfactory */ "./node_modules/@angular/material/sort/typings/index.ngfactory.js");
/* harmony import */ var _node_modules_angular_material_chips_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/chips/typings/index.ngfactory */ "./node_modules/@angular/material/chips/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/table/typings/index.ngfactory */ "./node_modules/@angular/material/table/typings/index.ngfactory.js");
/* harmony import */ var _shared_tickets_list_highlight_open_ticket_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../shared/tickets-list/highlight-open-ticket-directive */ "./src/app/shared/tickets-list/highlight-open-ticket-directive.ts");
/* harmony import */ var _common_core_ui_no_results_message_no_results_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../common/core/ui/no-results-message/no-results-message.component.ngfactory */ "./src/common/core/ui/no-results-message/no-results-message.component.ngfactory.js");
/* harmony import */ var _common_core_ui_no_results_message_no_results_message_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../common/core/ui/no-results-message/no-results-message.component */ "./src/common/core/ui/no-results-message/no-results-message.component.ts");
/* harmony import */ var _common_core_ui_formatted_date_pipe__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../common/core/ui/formatted-date.pipe */ "./src/common/core/ui/formatted-date.pipe.ts");
/* harmony import */ var _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../common/core/ui/loading-indicator/loading-indicator.component.ngfactory */ "./src/common/core/ui/loading-indicator/loading-indicator.component.ngfactory.js");
/* harmony import */ var _common_core_ui_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../common/core/ui/loading-indicator/loading-indicator.component */ "./src/common/core/ui/loading-indicator/loading-indicator.component.ts");
/* harmony import */ var _common_admin_pagination_paginator_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../common/admin/pagination/paginator.service */ "./src/common/admin/pagination/paginator.service.ts");
/* harmony import */ var _common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../common/core/http/app-http-client.service */ "./src/common/core/http/app-http-client.service.ts");
/* harmony import */ var _customer_tickets_list_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./customer-tickets-list.component */ "./src/app/customer-mailbox/customer-tickets-list/customer-tickets-list.component.ts");
/* harmony import */ var _common_auth_current_user__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../common/auth/current-user */ "./src/common/auth/current-user.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










































var styles_CustomerTicketsListComponent = [_customer_tickets_list_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_7__["styles"]];
var RenderType_CustomerTicketsListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_CustomerTicketsListComponent, data: {} });

function View_CustomerTicketsListComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "a", [["color", "accent"], ["mat-raised-button", ""], ["routerLink", "/help-center/tickets/new"], ["trans", ""]], [[1, "target", 0], [8, "href", 4], [1, "tabindex", 0], [1, "disabled", 0], [1, "aria-disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._haltDisabledEvents($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MatAnchor_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MatAnchor"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_9__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_10__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_11__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatAnchor"], [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_14__["FocusMonitor"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["New Request"]))], function (_ck, _v) { var currVal_6 = "/help-center/tickets/new"; _ck(_v, 1, 0, currVal_6); var currVal_7 = "accent"; _ck(_v, 3, 0, currVal_7); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).href; var currVal_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).disabled ? (0 - 1) : (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).tabIndex || 0)); var currVal_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).disabled || null); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).disabled.toString(); var currVal_5 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._animationMode === "NoopAnimations"); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); }); }
function View_CustomerTicketsListComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "mat-header-cell", [["class", "mat-header-cell"], ["role", "columnheader"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_9__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_10__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_11__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Subject"]))], null, null); }
function View_CustomerTicketsListComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.subject; _ck(_v, 2, 0, currVal_0); }); }
function View_CustomerTicketsListComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "mat-header-cell", [["class", "mat-header-cell"], ["role", "columnheader"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["ID"]))], null, null); }
function View_CustomerTicketsListComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "mat-cell", [["class", "hidden-on-mobile mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["#", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.id; _ck(_v, 2, 0, currVal_0); }); }
function View_CustomerTicketsListComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "mat-header-cell", [["class", "mat-header-cell"], ["mat-sort-header", "created_at"], ["role", "columnheader"], ["trans", ""]], [[1, "aria-sort", 0], [2, "mat-sort-header-disabled", null]], [[null, "click"], [null, "mouseenter"], [null, "longpress"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._handleClick() !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._setIndicatorHintVisible(true) !== false);
        ad = (pd_1 && ad);
    } if (("longpress" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._setIndicatorHintVisible(true) !== false);
        ad = (pd_2 && ad);
    } if (("mouseleave" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._setIndicatorHintVisible(false) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_angular_material_sort_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_MatSortHeader_0"], _node_modules_angular_material_sort_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_MatSortHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_9__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_10__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_11__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 245760, null, 0, _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeaderIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"]], [2, "MAT_SORT_HEADER_COLUMN_DEF"]], { id: [0, "id"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Created"]))], function (_ck, _v) { var currVal_2 = "created_at"; _ck(_v, 3, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._getAriaSortAttribute(); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._isDisabled(); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_CustomerTicketsListComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "mat-cell", [["class", "hidden-on-mobile mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](3, 1)], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 2, 0, _ck(_v, 3, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent, 0), _v.context.$implicit.created_at)); _ck(_v, 2, 0, currVal_0); }); }
function View_CustomerTicketsListComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "mat-header-cell", [["class", "mat-header-cell"], ["mat-sort-header", "updated_at"], ["role", "columnheader"], ["trans", ""]], [[1, "aria-sort", 0], [2, "mat-sort-header-disabled", null]], [[null, "click"], [null, "mouseenter"], [null, "longpress"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._handleClick() !== false);
        ad = (pd_0 && ad);
    } if (("mouseenter" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._setIndicatorHintVisible(true) !== false);
        ad = (pd_1 && ad);
    } if (("longpress" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._setIndicatorHintVisible(true) !== false);
        ad = (pd_2 && ad);
    } if (("mouseleave" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._setIndicatorHintVisible(false) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_angular_material_sort_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["View_MatSortHeader_0"], _node_modules_angular_material_sort_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_18__["RenderType_MatSortHeader"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_9__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_10__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_11__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 245760, null, 0, _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeaderIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"]], [2, "MAT_SORT_HEADER_COLUMN_DEF"]], { id: [0, "id"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["Last Updated"]))], function (_ck, _v) { var currVal_2 = "updated_at"; _ck(_v, 3, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._getAriaSortAttribute(); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3)._isDisabled(); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_CustomerTicketsListComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.updated_at_formatted; _ck(_v, 2, 0, currVal_0); }); }
function View_CustomerTicketsListComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "mat-header-cell", [["class", "mat-header-cell"], ["role", "columnheader"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_9__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_10__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_11__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Status"]))], null, null); }
function View_CustomerTicketsListComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 16, "mat-cell", [["class", "mat-cell"], ["role", "gridcell"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCell"], [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkColumnDef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 12, "mat-chip-list", [["class", "mat-chip-list"]], [[1, "tabindex", 0], [1, "aria-describedby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-multiselectable", 0], [1, "role", 0], [2, "mat-chip-list-disabled", null], [2, "mat-chip-list-invalid", null], [2, "mat-chip-list-required", null], [1, "aria-orientation", 0], [8, "id", 0]], [[null, "focus"], [null, "blur"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("focus" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).focus() !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._blur() !== false);
        ad = (pd_1 && ad);
    } if (("keydown" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._keydown($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_angular_material_chips_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_MatChipList_0"], _node_modules_angular_material_chips_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_MatChipList"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__["MatFormFieldControl"], null, [_angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipList"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 1556480, null, 1, _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipList"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__["Directionality"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgForm"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormGroupDirective"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["ErrorStateMatcher"], [8, null]], { selectable: [0, "selectable"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 22, { chips: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n                    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, 0, 6, "mat-chip", [["class", "mat-chip"], ["role", "option"], ["selected", ""]], [[1, "tabindex", 0], [2, "mat-chip-selected", null], [2, "mat-chip-with-avatar", null], [2, "mat-chip-with-trailing-icon", null], [2, "mat-chip-disabled", null], [1, "disabled", 0], [1, "aria-disabled", 0], [1, "aria-selected", 0]], [[null, "click"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10)._handleClick($event) !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } if (("focus" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).focus() !== false);
        ad = (pd_2 && ad);
    } if (("blur" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10)._blur() !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]], { ngClass: [0, "ngClass"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 147456, [[22, 4]], 3, _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChip"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"], [2, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__["MAT_RIPPLE_GLOBAL_OPTIONS"]]], { color: [0, "color"], selected: [1, "selected"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 23, { avatar: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 24, { trailingIcon: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 25, { removeIcon: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](14, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, 0, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_12 = false; _ck(_v, 5, 0, currVal_12); var currVal_21 = ("status-" + _co.getStatus(_v.context.$implicit).name); _ck(_v, 9, 0, currVal_21); var currVal_22 = (_co.ticketIsOpen(_v.context.$implicit) ? "accent" : "standard"); var currVal_23 = ""; _ck(_v, 10, 0, currVal_22, currVal_23); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).disabled ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._tabIndex); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._ariaDescribedby || null); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).required.toString(); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).disabled.toString(); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).errorState; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).multiple; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).role; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).disabled; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).errorState; var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).required; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).ariaOrientation; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._uid; _ck(_v, 3, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11]); var currVal_13 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).disabled ? null : (0 - 1)); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).selected; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).avatar; var currVal_16 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).trailingIcon || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).removeIcon); var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).disabled; var currVal_18 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).disabled || null); var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).disabled.toString(); var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 10).ariaSelected; _ck(_v, 8, 0, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20); var tmp_24_0 = null; var currVal_24 = (((tmp_24_0 = _co.getStatus(_v.context.$implicit)) == null) ? null : tmp_24_0.display_name); _ck(_v, 14, 0, currVal_24); }); }
function View_CustomerTicketsListComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "mat-header-row", [["class", "mat-header-row"], ["role", "row"]], null, null, null, _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_MatHeaderRow_0"], _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_MatHeaderRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkHeaderRow"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderRow"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 49152, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderRow"], [], null, null)], null, null); }
function View_CustomerTicketsListComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "mat-row", [["class", "mat-row"], ["role", "row"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.openConversation(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_MatRow_0"], _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_MatRow"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkRow"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatRow"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 540672, null, 0, _shared_tickets_list_highlight_open_ticket_directive__WEBPACK_IMPORTED_MODULE_25__["HighlightOpenTicketDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], { tags: [0, "tags"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 49152, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatRow"], [], null, null)], function (_ck, _v) { var currVal_0 = _v.context.$implicit.tags; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CustomerTicketsListComponent_14(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 18, "no-results-message", [["class", "no-results-message"]], null, null, null, _common_core_ui_no_results_message_no_results_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["View_NoResultsMessageComponent_0"], _common_core_ui_no_results_message_no_results_message_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["RenderType_NoResultsMessageComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _common_core_ui_no_results_message_no_results_message_component__WEBPACK_IMPORTED_MODULE_27__["NoResultsMessageComponent"], [_common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_11__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, 0, 2, "span", [["primary-text", ""], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_9__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_10__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_11__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["You have not created any tickets yet."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, 1, 10, "span", [["secondary-text", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](9, 0, null, null, 2, "span", [["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](10, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_9__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_10__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_11__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Nothing to show."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 3, "a", [["routerLink", "/help-center/tickets/new"], ["trans", ""]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"]], { routerLink: [0, "routerLink"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](15, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_9__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_10__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_11__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Create a ticket?"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "]))], function (_ck, _v) { var currVal_2 = "/help-center/tickets/new"; _ck(_v, 14, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).href; _ck(_v, 13, 0, currVal_0, currVal_1); }); }
function View_CustomerTicketsListComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _common_core_ui_formatted_date_pipe__WEBPACK_IMPORTED_MODULE_28__["FormattedDatePipe"], [_common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_11__["Settings"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 1, { matSort: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](402653184, 2, { matPaginator: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 130, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 9, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](7, 0, null, null, 2, "h1", [["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_9__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_10__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_11__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["My requests"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_CustomerTicketsListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](16, 0, null, null, 107, "mat-table", [["class", "responsive-material-table mat-table"], ["matSort", ""]], null, null, null, _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_MatTable_0"], _node_modules_angular_material_table_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_MatTable"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](17, 2342912, null, 4, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTable"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [8, null], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_22__["Directionality"]], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DOCUMENT"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_13__["Platform"]], { dataSource: [0, "dataSource"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 3, { _contentColumnDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 4, { _contentRowDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 5, { _contentHeaderRowDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 6, { _contentFooterRowDefs: 1 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 737280, [[1, 4]], 0, _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](25, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](27, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 7, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 8, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 9, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[3, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_CustomerTicketsListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[8, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_CustomerTicketsListComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[7, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](45, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 10, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 11, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 12, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[3, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_CustomerTicketsListComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](52, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[11, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_CustomerTicketsListComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](56, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[10, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](61, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](63, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 13, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 14, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 15, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[3, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_CustomerTicketsListComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](70, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[14, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_CustomerTicketsListComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](74, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[13, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](79, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](81, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 16, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 17, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 18, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[3, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_CustomerTicketsListComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](88, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[17, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_CustomerTicketsListComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](92, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[16, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](97, 0, null, null, 15, null, null, null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](6144, null, "MAT_SORT_HEADER_COLUMN_DEF", null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](99, 16384, null, 3, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 19, { cell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 20, { headerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](335544320, 21, { footerCell: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[3, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkColumnDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatColumnDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_CustomerTicketsListComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](106, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[20, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkHeaderCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 2, null, View_CustomerTicketsListComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](110, 16384, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCellDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[19, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkCellDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatCellDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 3, null, View_CustomerTicketsListComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](115, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { columns: [0, "columns"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](116, 5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[5, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkHeaderRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatHeaderRowDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](0, null, null, 3, null, View_CustomerTicketsListComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](120, 540672, null, 0, _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatRowDef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { columns: [0, "columns"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](121, 5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, [[4, 4]], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkRowDef"], null, [_angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatRowDef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_CustomerTicketsListComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](126, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](129, 0, null, null, 3, "mat-paginator", [["class", "mat-paginator"]], [[2, "hidden", null]], null, null, _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatPaginator_0"], _node_modules_angular_material_paginator_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatPaginator"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](130, 245760, [[2, 4]], 0, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorIntl"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]], { pageSize: [0, "pageSize"], pageSizeOptions: [1, "pageSizeOptions"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](131, 4), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](135, 0, null, null, 2, "loading-indicator", [["class", "overlay"]], [[40, "@visibility", 0]], null, null, _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_29__["View_LoadingIndicatorComponent_0"], _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_29__["RenderType_LoadingIndicatorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](136, 49152, null, 0, _common_core_ui_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_30__["LoadingIndicatorComponent"], [], { isVisible: [0, "isVisible"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 12, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 13).transform(_co.paginator.noResults$)); _ck(_v, 12, 0, currVal_0); var currVal_1 = _co.dataSource; _ck(_v, 17, 0, currVal_1); _ck(_v, 22, 0); var currVal_2 = "subject"; _ck(_v, 27, 0, currVal_2); var currVal_3 = "id"; _ck(_v, 45, 0, currVal_3); var currVal_4 = "created-at"; _ck(_v, 63, 0, currVal_4); var currVal_5 = "last-updated"; _ck(_v, 81, 0, currVal_5); var currVal_6 = "status"; _ck(_v, 99, 0, currVal_6); var currVal_7 = _ck(_v, 116, 0, "subject", "id", "created-at", "last-updated", "status"); _ck(_v, 115, 0, currVal_7); var currVal_8 = _ck(_v, 121, 0, "subject", "id", "created-at", "last-updated", "status"); _ck(_v, 120, 0, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 126, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 127).transform(_co.paginator.noResults$)); _ck(_v, 126, 0, currVal_9); var currVal_11 = 15; var currVal_12 = _ck(_v, 131, 0, 5, 10, 15, 20); _ck(_v, 130, 0, currVal_11, currVal_12); var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 136, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 137).transform(_co.paginator.loading$)); _ck(_v, 136, 0, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_10 = !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 129, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 132).transform(_co.paginator.noResults$)); _ck(_v, 129, 0, currVal_10); var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 136).isVisible; _ck(_v, 135, 0, currVal_13); }); }
function View_CustomerTicketsListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 2, "customer-tickets-list", [], null, null, null, View_CustomerTicketsListComponent_0, RenderType_CustomerTicketsListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _common_admin_pagination_paginator_service__WEBPACK_IMPORTED_MODULE_31__["Paginator"], _common_admin_pagination_paginator_service__WEBPACK_IMPORTED_MODULE_31__["Paginator"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_32__["AppHttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 245760, null, 0, _customer_tickets_list_component__WEBPACK_IMPORTED_MODULE_33__["CustomerTicketsListComponent"], [_common_admin_pagination_paginator_service__WEBPACK_IMPORTED_MODULE_31__["Paginator"], _common_auth_current_user__WEBPACK_IMPORTED_MODULE_34__["CurrentUser"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
var CustomerTicketsListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("customer-tickets-list", _customer_tickets_list_component__WEBPACK_IMPORTED_MODULE_33__["CustomerTicketsListComponent"], View_CustomerTicketsListComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/customer-mailbox/customer-tickets-list/customer-tickets-list.component.scss.ngstyle.js":
/*!********************************************************************************************************!*\
  !*** ./src/app/customer-mailbox/customer-tickets-list/customer-tickets-list.component.scss.ngstyle.js ***!
  \********************************************************************************************************/
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
var styles = ["\n\n\ncustomer-tickets-list {\n  display: block;\n  width: 100%;\n  padding: 30px 0 50px 0; }\ncustomer-tickets-list .title {\n    display: flex;\n    align-items: center;\n    margin-bottom: 30px;\n    padding: 0 20px; }\ncustomer-tickets-list .title h1 {\n      font-size: 3.2rem;\n      font-weight: 400;\n      margin: 0; }\ncustomer-tickets-list .title a {\n      margin-left: auto;\n      height: 36px; }\ncustomer-tickets-list .mat-row {\n    min-height: 60px;\n    cursor: pointer; }\ncustomer-tickets-list .mat-row:hover {\n      background-color: #e8f0fe; }\ncustomer-tickets-list .mat-column-subject {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    margin-right: 25px; }\ncustomer-tickets-list .mat-column-id {\n    flex: 0 0 110px; }\ncustomer-tickets-list .mat-column-status {\n    flex: 0 0 110px; }\ncustomer-tickets-list .mat-column-created-at, customer-tickets-list .mat-column-last-updated {\n    flex: 0 0 140px; }\ncustomer-tickets-list .mat-chip {\n    min-width: 63px;\n    justify-content: center;\n    text-transform: capitalize; }\ncustomer-tickets-list .no-results-message {\n    margin-top: 60px;\n    margin-bottom: 60px; }\n"];



/***/ }),

/***/ "./src/app/customer-mailbox/customer-tickets-list/customer-tickets-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/customer-mailbox/customer-tickets-list/customer-tickets-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CustomerTicketsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerTicketsListComponent", function() { return CustomerTicketsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_admin_pagination_paginator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/admin/pagination/paginator.service */ "./src/common/admin/pagination/paginator.service.ts");
/* harmony import */ var _common_auth_current_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/auth/current-user */ "./src/common/auth/current-user.ts");
/* harmony import */ var _common_admin_data_table_data_paginated_data_table_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/admin/data-table/data/paginated-data-table-source */ "./src/common/admin/data-table/data/paginated-data-table-source.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var CustomerTicketsListComponent = /** @class */ (function () {
    function CustomerTicketsListComponent(paginator, currentUser, router) {
        this.paginator = paginator;
        this.currentUser = currentUser;
        this.router = router;
    }
    CustomerTicketsListComponent.prototype.ngOnInit = function () {
        this.dataSource = new _common_admin_data_table_data_paginated_data_table_source__WEBPACK_IMPORTED_MODULE_3__["PaginatedDataTableSource"]({
            uri: 'users/' + this.currentUser.get('id') + '/tickets',
            dataPaginator: this.paginator,
            matPaginator: this.matPaginator,
            matSort: this.matSort,
        }).init();
    };
    CustomerTicketsListComponent.prototype.ngOnDestroy = function () {
        this.dataSource.disconnect();
    };
    CustomerTicketsListComponent.prototype.getStatus = function (ticket) {
        return ticket.tags.filter(function (tag) { return tag.type === 'status'; })[0];
    };
    CustomerTicketsListComponent.prototype.ticketIsOpen = function (ticket) {
        var status = this.getStatus(ticket);
        if (!status)
            return false;
        return status.name === 'open' || status.name === 'pending';
    };
    CustomerTicketsListComponent.prototype.openConversation = function (ticket) {
        this.router.navigate(['/help-center/tickets', ticket.id]);
    };
    return CustomerTicketsListComponent;
}());



/***/ }),

/***/ "./src/app/ticketing/new-ticket/new-ticket.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/ticketing/new-ticket/new-ticket.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: ViewChild_1, ɵangular_packages_core_core_b_2, Query_3, Injector_14, ɵangular_packages_core_core_c_15, defineInjectable_16, NgModuleFactoryLoader_17, Compiler_18, NgZone_33, Router_8, UrlSerializer_10, ChildrenOutletContexts_11, ActivatedRoute_21, ActivatedRouteSnapshot_23, UrlSegmentGroup_27, Location_12, LocationStrategy_13, Observable_22, RenderType_NewTicketComponent, View_NewTicketComponent_0, View_NewTicketComponent_Host_0, NewTicketComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_NewTicketComponent", function() { return RenderType_NewTicketComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NewTicketComponent_0", function() { return View_NewTicketComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_NewTicketComponent_Host_0", function() { return View_NewTicketComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTicketComponentNgFactory", function() { return NewTicketComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewChild_1", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_2", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query_3", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Query"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Injector_14", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_c_15", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineInjectable_16", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgModuleFactoryLoader_17", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Compiler_18", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgZone_33", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]; });

/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Router_8", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlSerializer_10", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["UrlSerializer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChildrenOutletContexts_11", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["ChildrenOutletContexts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRoute_21", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActivatedRouteSnapshot_23", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRouteSnapshot"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UrlSegmentGroup_27", function() { return _angular_router__WEBPACK_IMPORTED_MODULE_1__["UrlSegmentGroup"]; });

/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Location_12", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationStrategy_13", function() { return _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"]; });

/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable_22", function() { return rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"]; });

/* harmony import */ var _new_ticket_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-ticket.component.scss.ngstyle */ "./src/app/ticketing/new-ticket/new-ticket.component.scss.ngstyle.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _suggested_articles_drawer_suggested_articles_drawer_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../suggested-articles-drawer/suggested-articles-drawer.component.ngfactory */ "./src/app/ticketing/suggested-articles-drawer/suggested-articles-drawer.component.ngfactory.js");
/* harmony import */ var _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/core/translations/translate.directive */ "./src/common/core/translations/translate.directive.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _suggested_articles_drawer_suggested_articles_drawer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../suggested-articles-drawer/suggested-articles-drawer.component */ "./src/app/ticketing/suggested-articles-drawer/suggested-articles-drawer.component.ts");
/* harmony import */ var _help_center_shared_help_center_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../help-center/shared/help-center.service */ "./src/app/help-center/shared/help-center.service.ts");
/* harmony import */ var _help_center_shared_hc_urls_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../help-center/shared/hc-urls.service */ "./src/app/help-center/shared/hc-urls.service.ts");
/* harmony import */ var _help_center_front_search_term_logger_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../help-center/front/search-term-logger.service */ "./src/app/help-center/front/search-term-logger.service.ts");
/* harmony import */ var _common_text_editor_text_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/text-editor/text-editor.component.ngfactory */ "./src/common/text-editor/text-editor.component.ngfactory.js");
/* harmony import */ var _common_text_editor_editors_tinymce_text_editor_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/text-editor/editors/tinymce-text-editor.service */ "./src/common/text-editor/editors/tinymce-text-editor.service.ts");
/* harmony import */ var _common_core_utils_lazy_loader_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/core/utils/lazy-loader.service */ "./src/common/core/utils/lazy-loader.service.ts");
/* harmony import */ var _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../common/core/ui/breakpoints.service */ "./src/common/core/ui/breakpoints.service.ts");
/* harmony import */ var _common_text_editor_editors_html_text_editor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../common/text-editor/editors/html-text-editor.service */ "./src/common/text-editor/editors/html-text-editor.service.ts");
/* harmony import */ var _common_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../common/text-editor/text-editor.component */ "./src/common/text-editor/text-editor.component.ts");
/* harmony import */ var _common_auth_current_user__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../common/auth/current-user */ "./src/common/auth/current-user.ts");
/* harmony import */ var _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../common/uploads/upload-queue/upload-queue.service */ "./src/common/uploads/upload-queue/upload-queue.service.ts");
/* harmony import */ var _common_core_ui_overlay_panel_overlay_panel_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../common/core/ui/overlay-panel/overlay-panel.service */ "./src/common/core/ui/overlay-panel/overlay-panel.service.ts");
/* harmony import */ var _common_text_editor_validation_text_editor_image_validator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../common/text-editor/validation/text-editor-image-validator */ "./src/common/text-editor/validation/text-editor-image-validator.ts");
/* harmony import */ var _common_uploads_upload_progress_bar_upload_progress_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../common/uploads/upload-progress-bar/upload-progress-bar.component.ngfactory */ "./src/common/uploads/upload-progress-bar/upload-progress-bar.component.ngfactory.js");
/* harmony import */ var _common_uploads_upload_progress_bar_upload_progress_bar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../common/uploads/upload-progress-bar/upload-progress-bar.component */ "./src/common/uploads/upload-progress-bar/upload-progress-bar.component.ts");
/* harmony import */ var _shared_reply_attachment_list_reply_attachment_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../shared/reply-attachment-list/reply-attachment-list.component.ngfactory */ "./src/app/shared/reply-attachment-list/reply-attachment-list.component.ngfactory.js");
/* harmony import */ var _shared_reply_attachment_list_reply_attachment_list_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../shared/reply-attachment-list/reply-attachment-list.component */ "./src/app/shared/reply-attachment-list/reply-attachment-list.component.ts");
/* harmony import */ var _shared_file_mime_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../shared/file-mime.service */ "./src/app/shared/file-mime.service.ts");
/* harmony import */ var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/button/typings/index.ngfactory */ "./node_modules/@angular/material/button/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../common/core/ui/loading-indicator/loading-indicator.component.ngfactory */ "./src/common/core/ui/loading-indicator/loading-indicator.component.ngfactory.js");
/* harmony import */ var _common_core_ui_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../common/core/ui/loading-indicator/loading-indicator.component */ "./src/common/core/ui/loading-indicator/loading-indicator.component.ts");
/* harmony import */ var _tickets_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../tickets.service */ "./src/app/ticketing/tickets.service.ts");
/* harmony import */ var _common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../common/core/http/app-http-client.service */ "./src/common/core/http/app-http-client.service.ts");
/* harmony import */ var _common_uploads_uploads_api_service__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../common/uploads/uploads-api.service */ "./src/common/uploads/uploads-api.service.ts");
/* harmony import */ var _common_uploads_validation_default_upload_validator__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../common/uploads/validation/default-upload-validator */ "./src/common/uploads/validation/default-upload-validator.ts");
/* harmony import */ var _new_ticket_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./new-ticket.component */ "./src/app/ticketing/new-ticket/new-ticket.component.ts");
/* harmony import */ var _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../../../common/core/ui/toast.service */ "./src/common/core/ui/toast.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 













































var styles_NewTicketComponent = [_new_ticket_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_4__["styles"]];
var RenderType_NewTicketComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_NewTicketComponent, data: {} });

function View_NewTicketComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "option", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]], { ngValue: [0, "ngValue"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 147456, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_s"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], [8, null]], { ngValue: [0, "ngValue"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var currVal_2 = _v.context.$implicit.name; _ck(_v, 3, 0, currVal_2); }); }
function View_NewTicketComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "errors category-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.ngIf.category; _ck(_v, 1, 0, currVal_0); }); }
function View_NewTicketComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "errors subject-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.ngIf.subject; _ck(_v, 1, 0, currVal_0); }); }
function View_NewTicketComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "div", [["class", "errors body-error"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.ngIf.body; _ck(_v, 1, 0, currVal_0); }); }
function View_NewTicketComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 68, "form", [["ngNativeValidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.createTicket() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 4210688, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 18, "div", [["class", "input-container category-input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "label", [["for", "category-select"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 9, "select", [["id", "category-select"], ["name", "category"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "change"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("change" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).onChange($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 14).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.ticketModel.category = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](14, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], [[2, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_NewTicketComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](21, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_NewTicketComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](28, 0, null, null, 11, "div", [["class", "input-container subject-input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](30, 0, null, null, 1, "label", [["for", "subject"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](31, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](33, 0, null, null, 2, "suggested-articles-drawer", [["id", "subject"], ["trans-placeholder", ""]], null, [[null, "inputValue"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("inputValue" === en)) {
        var pd_0 = ((_co.ticketModel.subject = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _suggested_articles_drawer_suggested_articles_drawer_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_SuggestedArticlesDrawerComponent_0"], _suggested_articles_drawer_suggested_articles_drawer_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_SuggestedArticlesDrawerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](34, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_7__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_8__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_9__["Settings"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](35, 114688, null, 0, _suggested_articles_drawer_suggested_articles_drawer_component__WEBPACK_IMPORTED_MODULE_10__["SuggestedArticlesDrawerComponent"], [_help_center_shared_help_center_service__WEBPACK_IMPORTED_MODULE_11__["HelpCenterService"], _help_center_shared_hc_urls_service__WEBPACK_IMPORTED_MODULE_12__["HcUrls"], _help_center_front_search_term_logger_service__WEBPACK_IMPORTED_MODULE_13__["SearchTermLoggerService"]], { categories: [0, "categories"] }, { inputValue: "inputValue" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_NewTicketComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](38, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](41, 0, null, null, 15, "div", [["class", "input-container description-input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](43, 0, null, null, 1, "label", [["for", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](44, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](46, 0, null, null, 3, "text-editor", [["id", "description"], ["inlineUploadType", "ticket"]], null, [[null, "onFileUpload"], [null, "onChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("onFileUpload" === en)) {
        var pd_0 = (_co.uploadFiles($event) !== false);
        ad = (pd_0 && ad);
    } if (("onChange" === en)) {
        var pd_1 = ((_co.ticketModel.body = $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _common_text_editor_text_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["View_TextEditorComponent_0"], _common_text_editor_text_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["RenderType_TextEditorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _common_text_editor_editors_tinymce_text_editor_service__WEBPACK_IMPORTED_MODULE_15__["TinymceTextEditor"], _common_text_editor_editors_tinymce_text_editor_service__WEBPACK_IMPORTED_MODULE_15__["TinymceTextEditor"], [_common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_9__["Settings"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _common_core_utils_lazy_loader_service__WEBPACK_IMPORTED_MODULE_16__["LazyLoaderService"], _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_17__["BreakpointsService"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_8__["Translations"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _common_text_editor_editors_html_text_editor_service__WEBPACK_IMPORTED_MODULE_18__["HtmlTextEditor"], _common_text_editor_editors_html_text_editor_service__WEBPACK_IMPORTED_MODULE_18__["HtmlTextEditor"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](49, 4374528, [[1, 4]], 0, _common_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_19__["TextEditorComponent"], [_common_text_editor_editors_tinymce_text_editor_service__WEBPACK_IMPORTED_MODULE_15__["TinymceTextEditor"], _common_text_editor_editors_html_text_editor_service__WEBPACK_IMPORTED_MODULE_18__["HtmlTextEditor"], _common_auth_current_user__WEBPACK_IMPORTED_MODULE_20__["CurrentUser"], _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_21__["UploadQueueService"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_9__["Settings"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_ui_overlay_panel_overlay_panel_service__WEBPACK_IMPORTED_MODULE_22__["OverlayPanel"], _common_text_editor_validation_text_editor_image_validator__WEBPACK_IMPORTED_MODULE_23__["TextEditorImageValidator"]], { minHeight: [0, "minHeight"], inlineUploadType: [1, "inlineUploadType"] }, { onChange: "onChange", onFileUpload: "onFileUpload" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](51, 0, null, null, 1, "upload-progress-bar", [], [[2, "hidden", null]], null, null, _common_uploads_upload_progress_bar_upload_progress_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_UploadProgressBarComponent_0"], _common_uploads_upload_progress_bar_upload_progress_bar_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_UploadProgressBarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](52, 180224, null, 0, _common_uploads_upload_progress_bar_upload_progress_bar_component__WEBPACK_IMPORTED_MODULE_25__["UploadProgressBarComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_21__["UploadQueueService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_NewTicketComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](55, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](58, 0, null, null, 2, "reply-attachment-list", [], null, [[null, "detached"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("detached" === en)) {
        var pd_0 = (_co.removeAttachment($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _shared_reply_attachment_list_reply_attachment_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["View_ReplyAttachmentListComponent_0"], _shared_reply_attachment_list_reply_attachment_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_26__["RenderType_ReplyAttachmentListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](59, 49152, null, 0, _shared_reply_attachment_list_reply_attachment_list_component__WEBPACK_IMPORTED_MODULE_27__["ReplyAttachmentListComponent"], [_shared_file_mime_service__WEBPACK_IMPORTED_MODULE_28__["FileMime"], _common_core_ui_overlay_panel_overlay_panel_service__WEBPACK_IMPORTED_MODULE_22__["OverlayPanel"], _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_21__["UploadQueueService"]], { attachments: [0, "attachments"] }, { detached: "detached" }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](62, 0, null, null, 5, "div", [["class", "buttons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](64, 0, null, null, 2, "button", [["class", "submit-button"], ["color", "accent"], ["mat-raised-button", ""], ["type", "submit"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], null, null, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_29__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_29__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](65, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_31__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_32__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__["ANIMATION_MODULE_TYPE"]]], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](66, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_16 = "category"; var currVal_17 = _co.ticketModel.category; _ck(_v, 16, 0, currVal_16, currVal_17); var currVal_18 = _co.ticketCategories; _ck(_v, 21, 0, currVal_18); var currVal_19 = _v.context.ngIf.category; _ck(_v, 25, 0, currVal_19); var currVal_21 = _co.getArticleCategories(); _ck(_v, 35, 0, currVal_21); var currVal_22 = _v.context.ngIf.subject; _ck(_v, 38, 0, currVal_22); var currVal_24 = 230; var currVal_25 = "ticket"; _ck(_v, 49, 0, currVal_24, currVal_25); var currVal_27 = _v.context.ngIf.body; _ck(_v, 55, 0, currVal_27); var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 59, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 60).transform(_co.attachments$)); _ck(_v, 59, 0, currVal_28); var currVal_31 = "accent"; _ck(_v, 65, 0, currVal_31); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 3).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _co.settings.get("hc.new-ticket.title"); _ck(_v, 6, 0, currVal_7); var currVal_8 = _co.settings.get("hc.new-ticket.category_label"); _ck(_v, 11, 0, currVal_8); var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassUntouched; var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassTouched; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassPristine; var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassDirty; var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassValid; var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassInvalid; var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 18).ngClassPending; _ck(_v, 13, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_20 = _co.settings.get("hc.new-ticket.subject_label"); _ck(_v, 31, 0, currVal_20); var currVal_23 = _co.settings.get("hc.new-ticket.description_label"); _ck(_v, 44, 0, currVal_23); var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 52).initiallyHidden; _ck(_v, 51, 0, currVal_26); var currVal_29 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 65).disabled || null); var currVal_30 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 65)._animationMode === "NoopAnimations"); _ck(_v, 64, 0, currVal_29, currVal_30); var currVal_32 = _co.settings.get("hc.new-ticket.submit_button_text"); _ck(_v, 66, 0, currVal_32); }); }
function View_NewTicketComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 7, "div", [["class", "tip-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](5, 0, null, null, 1, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "]))], null, function (_ck, _v) { var currVal_0 = _v.context.$implicit.title; _ck(_v, 3, 0, currVal_0); var currVal_1 = _v.context.$implicit.content; _ck(_v, 6, 0, currVal_1); }); }
function View_NewTicketComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](2, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, { textEditor: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 5, "div", [["class", "left-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_NewTicketComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](8, 0, null, null, 11, "div", [["class", "right-column"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](10, 0, null, null, 1, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](11, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](13, 0, null, null, 5, "div", [["class", "tips"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_NewTicketComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](16, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 2, "loading-indicator", [["class", "overlay"]], [[40, "@visibility", 0]], null, null, _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_34__["View_LoadingIndicatorComponent_0"], _common_core_ui_loading_indicator_loading_indicator_component_ngfactory__WEBPACK_IMPORTED_MODULE_34__["RenderType_LoadingIndicatorComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 49152, null, 0, _common_core_ui_loading_indicator_loading_indicator_component__WEBPACK_IMPORTED_MODULE_35__["LoadingIndicatorComponent"], [], { isVisible: [0, "isVisible"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 4, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).transform(_co.errors$)); _ck(_v, 4, 0, currVal_0); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 16, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 17).transform(_co.tips$)); _ck(_v, 16, 0, currVal_2); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 22, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 23).transform(_co.loading$)); _ck(_v, 22, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.settings.get("hc.new-ticket.sidebar_title"); _ck(_v, 11, 0, currVal_1); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 22).isVisible; _ck(_v, 21, 0, currVal_3); }); }
function View_NewTicketComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 3, "new-ticket", [["id", "new-ticket"]], null, null, null, View_NewTicketComponent_0, RenderType_NewTicketComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _tickets_service__WEBPACK_IMPORTED_MODULE_36__["TicketsService"], _tickets_service__WEBPACK_IMPORTED_MODULE_36__["TicketsService"], [_common_core_http_app_http_client_service__WEBPACK_IMPORTED_MODULE_37__["AppHttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_21__["UploadQueueService"], _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_21__["UploadQueueService"], [_common_uploads_uploads_api_service__WEBPACK_IMPORTED_MODULE_38__["UploadsApiService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _common_uploads_validation_default_upload_validator__WEBPACK_IMPORTED_MODULE_39__["DefaultUploadValidator"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 245760, null, 0, _new_ticket_component__WEBPACK_IMPORTED_MODULE_40__["NewTicketComponent"], [_common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_9__["Settings"], _tickets_service__WEBPACK_IMPORTED_MODULE_36__["TicketsService"], _common_uploads_uploads_api_service__WEBPACK_IMPORTED_MODULE_38__["UploadsApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _help_center_shared_hc_urls_service__WEBPACK_IMPORTED_MODULE_12__["HcUrls"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_41__["Toast"], _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_21__["UploadQueueService"], _help_center_front_search_term_logger_service__WEBPACK_IMPORTED_MODULE_13__["SearchTermLoggerService"]], null, null)], function (_ck, _v) { _ck(_v, 3, 0); }, null); }
var NewTicketComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("new-ticket", _new_ticket_component__WEBPACK_IMPORTED_MODULE_40__["NewTicketComponent"], View_NewTicketComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/ticketing/new-ticket/new-ticket.component.scss.ngstyle.js":
/*!***************************************************************************!*\
  !*** ./src/app/ticketing/new-ticket/new-ticket.component.scss.ngstyle.js ***!
  \***************************************************************************/
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
var styles = ["\n\n\nnew-ticket {\n  display: flex;\n  flex-wrap: wrap-reverse;\n  width: 100%;\n  max-width: 1800px;\n  margin: 0 auto;\n  border-top: 1px solid #eff1f2; }\nnew-ticket .left-column {\n    flex: 0 0 70%;\n    padding: 45px 20px; }\nnew-ticket .left-column form {\n      margin: 0 auto;\n      width: 660px; }\nnew-ticket .right-column {\n    flex: 0 0 30%;\n    border-left: 1px solid #eff1f2;\n    padding: 45px 30px; }\nnew-ticket .right-column .header {\n      font-size: 2.1rem;\n      color: #689f38;\n      font-weight: 500;\n      margin-bottom: 35px; }\nnew-ticket .right-column .tip-container {\n      margin-bottom: 30px;\n      font-size: 1.6rem; }\nnew-ticket .right-column .tip-container .title {\n        font-weight: 400; }\nnew-ticket .right-column .tip-container .content {\n        font-weight: 300; }\nnew-ticket .input-container {\n    margin-bottom: 25px; }\nnew-ticket .input-container .input-container {\n      margin-bottom: 0; }\nnew-ticket .input-container input, new-ticket .input-container select {\n      height: 50px; }\nnew-ticket .input-container label {\n      font-size: 1.6rem;\n      font-weight: 300;\n      margin-bottom: 5px; }\nnew-ticket .errors {\n    margin-top: 7px;\n    color: #F44336; }\nnew-ticket h1 {\n    margin: 0 0 25px;\n    color: #43484d;\n    font-weight: 300;\n    font-size: 4rem; }\nnew-ticket .buttons {\n    margin-bottom: 15px; }\n@media only screen and (max-width: 768px) {\n    new-ticket .left-column {\n      flex: 0 0 100%;\n      padding-top: 0;\n      padding-bottom: 0; }\n      new-ticket .left-column > form {\n        width: auto; }\n    new-ticket .right-column {\n      flex: 0 0 100%;\n      border-bottom: 1px solid #eff1f2;\n      margin-bottom: 10px;\n      padding: 20px 30px 0 30px; } }\n"];



/***/ }),

/***/ "./src/app/ticketing/new-ticket/new-ticket.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/ticketing/new-ticket/new-ticket.component.ts ***!
  \**************************************************************/
/*! exports provided: NewTicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTicketComponent", function() { return NewTicketComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tickets_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tickets.service */ "./src/app/ticketing/tickets.service.ts");
/* harmony import */ var _help_center_shared_hc_urls_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../help-center/shared/hc-urls.service */ "./src/app/help-center/shared/hc-urls.service.ts");
/* harmony import */ var _common_text_editor_text_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/text-editor/text-editor.component */ "./src/common/text-editor/text-editor.component.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _common_uploads_uploads_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/uploads/uploads-api.service */ "./src/common/uploads/uploads-api.service.ts");
/* harmony import */ var _common_core_ui_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/core/ui/toast.service */ "./src/common/core/ui/toast.service.ts");
/* harmony import */ var _common_uploads_upload_queue_upload_queue_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/uploads/upload-queue/upload-queue.service */ "./src/common/uploads/upload-queue/upload-queue.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _help_center_front_search_term_logger_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../help-center/front/search-term-logger.service */ "./src/app/help-center/front/search-term-logger.service.ts");












var NewTicketComponent = /** @class */ (function () {
    function NewTicketComponent(settings, tickets, uploads, router, urls, route, toast, uploadQueue, searchLogger) {
        this.settings = settings;
        this.tickets = tickets;
        this.uploads = uploads;
        this.router = router;
        this.urls = urls;
        this.route = route;
        this.toast = toast;
        this.uploadQueue = uploadQueue;
        this.searchLogger = searchLogger;
        this.tips$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"]([]);
        this.errors$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"]({});
        this.loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](false);
        this.attachments$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"]([]);
        this.ticketCategories = [];
        this.ticketModel = {};
    }
    NewTicketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            _this.ticketCategories = data.categories;
            _this.ticketModel.category = _this.ticketCategories[0];
        });
        this.tips$.next(this.settings.getJson('hc.new-ticket.sidebar_tips'));
    };
    NewTicketComponent.prototype.ngOnDestroy = function () {
        this.textEditor.destroyEditor();
    };
    NewTicketComponent.prototype.createTicket = function () {
        var _this = this;
        this.loading$.next(true);
        var payload = {
            subject: this.ticketModel.subject,
            body: this.ticketModel.body,
            category: this.ticketModel.category && this.ticketModel.category.id,
            uploads: this.uploadQueue.getAllCompleted().map(function (entry) { return entry.id; })
        };
        this.tickets.create(payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["finalize"])(function () {
            _this.loading$.next(false);
            _this.searchLogger.updateSessionAndStore({ createdTicket: true });
        }))
            .subscribe(function () {
            _this.router.navigate(_this.urls.customerTicketList());
            _this.toast.open('Your request was successfully submitted.');
        }, function (errors) {
            _this.errors$.next(errors.messages);
        });
    };
    NewTicketComponent.prototype.uploadFiles = function (files) {
        var _this = this;
        this.uploadQueue.start(files).subscribe(function (entry) {
            _this.attachments$.next(_this.attachments$.value.concat([entry]));
        });
    };
    NewTicketComponent.prototype.removeAttachment = function (entry) {
        var newAttachments = this.attachments$.value.slice();
        for (var i = 0; i < newAttachments.length; i++) {
            if (newAttachments[i].id === entry.id) {
                newAttachments.splice(i, 1);
            }
        }
        this.attachments$.next(newAttachments);
    };
    NewTicketComponent.prototype.getArticleCategories = function () {
        return this.ticketModel.category.categories.map(function (cat) { return cat.id; });
    };
    return NewTicketComponent;
}());



/***/ }),

/***/ "./src/app/ticketing/suggested-articles-drawer/suggested-articles-drawer.component.ngfactory.js":
/*!******************************************************************************************************!*\
  !*** ./src/app/ticketing/suggested-articles-drawer/suggested-articles-drawer.component.ngfactory.js ***!
  \******************************************************************************************************/
/*! exports provided: Input_1, ɵangular_packages_core_core_b_2, Output_3, RenderType_SuggestedArticlesDrawerComponent, View_SuggestedArticlesDrawerComponent_0, View_SuggestedArticlesDrawerComponent_Host_0, SuggestedArticlesDrawerComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_SuggestedArticlesDrawerComponent", function() { return RenderType_SuggestedArticlesDrawerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SuggestedArticlesDrawerComponent_0", function() { return View_SuggestedArticlesDrawerComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_SuggestedArticlesDrawerComponent_Host_0", function() { return View_SuggestedArticlesDrawerComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestedArticlesDrawerComponentNgFactory", function() { return SuggestedArticlesDrawerComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input_1", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵangular_packages_core_core_b_2", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Output_3", function() { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]; });

/* harmony import */ var _suggested_articles_drawer_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./suggested-articles-drawer.component.scss.ngstyle */ "./src/app/ticketing/suggested-articles-drawer/suggested-articles-drawer.component.scss.ngstyle.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@angular/material/icon/typings/index.ngfactory */ "./node_modules/@angular/material/icon/typings/index.ngfactory.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/core/translations/translate.directive */ "./src/common/core/translations/translate.directive.ts");
/* harmony import */ var _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/core/translations/translations.service */ "./src/common/core/translations/translations.service.ts");
/* harmony import */ var _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/core/config/settings.service */ "./src/common/core/config/settings.service.ts");
/* harmony import */ var _common_core_ui_custom_scrollbar_custom_scrollbar_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/core/ui/custom-scrollbar/custom-scrollbar.directive */ "./src/common/core/ui/custom-scrollbar/custom-scrollbar.directive.ts");
/* harmony import */ var _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/core/ui/breakpoints.service */ "./src/common/core/ui/breakpoints.service.ts");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _common_core_ui_custom_scrollbar_supports_native_scrollbar_styling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/core/ui/custom-scrollbar/supports-native-scrollbar-styling */ "./src/common/core/ui/custom-scrollbar/supports-native-scrollbar-styling.ts");
/* harmony import */ var _suggested_articles_drawer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./suggested-articles-drawer.component */ "./src/app/ticketing/suggested-articles-drawer/suggested-articles-drawer.component.ts");
/* harmony import */ var _help_center_shared_help_center_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../help-center/shared/help-center.service */ "./src/app/help-center/shared/help-center.service.ts");
/* harmony import */ var _help_center_shared_hc_urls_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../help-center/shared/hc-urls.service */ "./src/app/help-center/shared/hc-urls.service.ts");
/* harmony import */ var _help_center_front_search_term_logger_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../help-center/front/search-term-logger.service */ "./src/app/help-center/front/search-term-logger.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



















var styles_SuggestedArticlesDrawerComponent = [_suggested_articles_drawer_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"]];
var RenderType_SuggestedArticlesDrawerComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 2, styles: styles_SuggestedArticlesDrawerComponent, data: {} });

function View_SuggestedArticlesDrawerComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 8, "a", [["class", "result"], ["target", "_blank"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.updateSearchLogger() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 671744, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"]], { target: [0, "target"], routerLink: [1, "routerLink"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "mat-icon", [["class", "mat-icon notranslate"], ["role", "img"], ["svgIcon", "description"]], [[2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n                "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](6, 0, null, null, 1, "span", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = "_blank"; var currVal_3 = _co.urls.article(_v.context.$implicit); _ck(_v, 1, 0, currVal_2, currVal_3); var currVal_6 = "description"; _ck(_v, 4, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).target; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 1).href; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).inline; var currVal_5 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 4).color !== "warn")); _ck(_v, 3, 0, currVal_4, currVal_5); var currVal_7 = _v.context.$implicit.title; _ck(_v, 7, 0, currVal_7); }); }
function View_SuggestedArticlesDrawerComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 28, "div", [["class", "suggestions-container"]], [[2, "has-results", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](2, 0, null, null, 11, "div", [["class", "input-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](4, 0, null, null, 5, "input", [["class", "search-input"], ["type", "text"]], [[1, "placeholder", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 5)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](7, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], [[8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_k"]]], { form: [0, "form"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](11, 0, null, null, 1, "mat-icon", [["class", "search-icon input-icon mat-icon notranslate"], ["role", "img"], ["svgIcon", "search"]], [[2, "searching", null], [2, "mat-icon-inline", null], [2, "mat-icon-no-color", null]], null, null, _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatIcon_0"], _node_modules_angular_material_icon_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatIcon"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](12, 9158656, null, 0, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconRegistry"], [8, null], [2, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MAT_ICON_LOCATION"]]], { svgIcon: [0, "svgIcon"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](15, 0, null, null, 12, "section", [["class", "results-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](17, 0, null, null, 2, "div", [["class", "results-header"], ["trans", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](18, 4341760, null, 0, _common_core_translations_translate_directive__WEBPACK_IMPORTED_MODULE_7__["TranslateDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _common_core_translations_translations_service__WEBPACK_IMPORTED_MODULE_8__["Translations"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_9__["Settings"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Were you looking for:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](21, 0, null, null, 5, "div", [["class", "results"], ["customScrollbar", ""]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](22, 4341760, null, 0, _common_core_ui_custom_scrollbar_custom_scrollbar_directive__WEBPACK_IMPORTED_MODULE_10__["CustomScrollbarDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _common_core_ui_breakpoints_service__WEBPACK_IMPORTED_MODULE_11__["BreakpointsService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_12__["MutationObserverFactory"], _common_core_config_settings_service__WEBPACK_IMPORTED_MODULE_9__["Settings"], _common_core_ui_custom_scrollbar_supports_native_scrollbar_styling__WEBPACK_IMPORTED_MODULE_13__["SUPPORTS_NATIVE_SCROLLBAR_STYLING"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n            "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_SuggestedArticlesDrawerComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](25, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n        "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n    "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_9 = _co.searchQuery; _ck(_v, 7, 0, currVal_9); var currVal_13 = "search"; _ck(_v, 12, 0, currVal_13); var currVal_14 = _co.articles; _ck(_v, 25, 0, currVal_14); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.articles.length; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.placeholder; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 9).ngClassPending; _ck(_v, 4, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); var currVal_10 = _co.searching; var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).inline; var currVal_12 = (((_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).color !== "primary") && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).color !== "accent")) && (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 12).color !== "warn")); _ck(_v, 11, 0, currVal_10, currVal_11, currVal_12); }); }
function View_SuggestedArticlesDrawerComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "suggested-articles-drawer", [], null, null, null, View_SuggestedArticlesDrawerComponent_0, RenderType_SuggestedArticlesDrawerComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _suggested_articles_drawer_component__WEBPACK_IMPORTED_MODULE_14__["SuggestedArticlesDrawerComponent"], [_help_center_shared_help_center_service__WEBPACK_IMPORTED_MODULE_15__["HelpCenterService"], _help_center_shared_hc_urls_service__WEBPACK_IMPORTED_MODULE_16__["HcUrls"], _help_center_front_search_term_logger_service__WEBPACK_IMPORTED_MODULE_17__["SearchTermLoggerService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var SuggestedArticlesDrawerComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("suggested-articles-drawer", _suggested_articles_drawer_component__WEBPACK_IMPORTED_MODULE_14__["SuggestedArticlesDrawerComponent"], View_SuggestedArticlesDrawerComponent_Host_0, { placeholder: "placeholder", categories: "categories" }, { inputValue: "inputValue" }, []);



/***/ }),

/***/ "./src/app/ticketing/suggested-articles-drawer/suggested-articles-drawer.component.scss.ngstyle.js":
/*!*********************************************************************************************************!*\
  !*** ./src/app/ticketing/suggested-articles-drawer/suggested-articles-drawer.component.scss.ngstyle.js ***!
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
var styles = ["\n\n\nsuggested-articles-drawer {\n  display: block; }\nsuggested-articles-drawer .results-container {\n    max-height: 0;\n    transition: all .3s ease-out;\n    margin: 0;\n    overflow: hidden; }\nsuggested-articles-drawer .results-container > .results-header {\n      font-size: 2.1rem;\n      font-weight: 300;\n      margin-bottom: 20px; }\nsuggested-articles-drawer .results-container > .results > .result {\n      display: flex;\n      align-items: center;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      margin-bottom: 12px;\n      width: 100%;\n      color: #1565c0;\n      cursor: pointer; }\nsuggested-articles-drawer .results-container > .results > .result:hover {\n        text-decoration: underline; }\nsuggested-articles-drawer .results-container > .results > .result > mat-icon {\n        margin-right: 10px; }\nsuggested-articles-drawer .results-container > .results > .result > .title {\n        color: inherit; }\nsuggested-articles-drawer .suggestions-container .input-container {\n    position: relative;\n    width: 100%; }\nsuggested-articles-drawer .suggestions-container .input-container > .input-icon {\n      position: absolute;\n      visibility: hidden;\n      top: 13px;\n      right: 11px;\n      color: rgba(0, 0, 0, 0.5); }\nsuggested-articles-drawer .suggestions-container .input-container > .input-icon.searching {\n        visibility: visible;\n        -webkit-animation: flickerAnimation 0.5s infinite;\n                animation: flickerAnimation 0.5s infinite; }\n@-webkit-keyframes flickerAnimation {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0.4; }\n  100% {\n    opacity: 1; } }\n@keyframes flickerAnimation {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0.4; }\n  100% {\n    opacity: 1; } }\nsuggested-articles-drawer .suggestions-container.has-results .results-container {\n    max-height: 230px;\n    margin: 20px 0;\n    transition: all .3s ease-in; }\n"];



/***/ }),

/***/ "./src/app/ticketing/suggested-articles-drawer/suggested-articles-drawer.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/ticketing/suggested-articles-drawer/suggested-articles-drawer.component.ts ***!
  \********************************************************************************************/
/*! exports provided: SuggestedArticlesDrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestedArticlesDrawerComponent", function() { return SuggestedArticlesDrawerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _help_center_shared_help_center_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../help-center/shared/help-center.service */ "./src/app/help-center/shared/help-center.service.ts");
/* harmony import */ var _help_center_shared_hc_urls_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../help-center/shared/hc-urls.service */ "./src/app/help-center/shared/hc-urls.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _help_center_front_search_term_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../help-center/front/search-term-logger.service */ "./src/app/help-center/front/search-term-logger.service.ts");







var SuggestedArticlesDrawerComponent = /** @class */ (function () {
    function SuggestedArticlesDrawerComponent(helpCenter, urls, searchLogger) {
        this.helpCenter = helpCenter;
        this.urls = urls;
        this.searchLogger = searchLogger;
        /**
         * Input field value emitter.
         */
        this.inputValue = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Help center search query control.
         */
        this.searchQuery = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        /**
         * Articles returned by search.
         */
        this.articles = [];
        /**
         * If search is in progress at the moment.
         */
        this.searching = false;
    }
    SuggestedArticlesDrawerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchQuery.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (query) { return _this.searchArticles(query); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({ pagination: { data: [] } }); })).subscribe(function (response) {
            _this.inputValue.emit(_this.searchQuery.value);
            _this.searching = false;
            _this.setSearchResults(response.pagination.data);
        });
    };
    /**
     * Search help center articles by specified query.
     */
    SuggestedArticlesDrawerComponent.prototype.searchArticles = function (query) {
        if (!query)
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])({ pagination: { data: [] } });
        this.searching = true;
        var params = { per_page: 4, categories: this.categories };
        return this.helpCenter.findArticles(query, params);
    };
    /**
     * Set specified search result on component instance.
     */
    SuggestedArticlesDrawerComponent.prototype.setSearchResults = function (articles) {
        var _this = this;
        if (!articles || !articles.length) {
            // if we've found no articles, wait until drawer
            // animation completes before removing old articles
            setTimeout(function () {
                _this.articles = [];
            }, 300);
        }
        else {
            this.articles = articles;
        }
    };
    SuggestedArticlesDrawerComponent.prototype.updateSearchLogger = function () {
        this.searchLogger.updateSession({
            clickedArticle: true,
        });
    };
    return SuggestedArticlesDrawerComponent;
}());



/***/ })

}]);