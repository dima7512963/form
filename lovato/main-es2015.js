(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/oleksiida/projects/RCM-Lovato/git/levato/src/main.ts */"zUnb");


/***/ }),

/***/ "2m7U":
/*!************************************************!*\
  !*** ./src/app/panel-id/panel-id.component.ts ***!
  \************************************************/
/*! exports provided: PanelIdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelIdComponent", function() { return PanelIdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/model/model.service */ "mZMu");



class PanelIdComponent {
    constructor(modelService) {
        this.modelService = modelService;
    }
    ngOnInit() {
        this.id = '';
        this.modelService.id$.subscribe(id => this.id = id);
    }
}
PanelIdComponent.ɵfac = function PanelIdComponent_Factory(t) { return new (t || PanelIdComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"])); };
PanelIdComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelIdComponent, selectors: [["app-panel-id"]], decls: 4, vars: 1, consts: [[1, "content-wrapper", "wrap"], [1, "title"], ["type", "text", 1, "parameter-value", "full-width", 3, "value", "valueChange"]], template: function PanelIdComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Panel identificator:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function PanelIdComponent_Template_input_valueChange_3_listener($event) { return ctx.id = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.id);
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelIdComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-panel-id',
                templateUrl: 'app-panel-id.html',
                styleUrls: []
            }]
    }], function () { return [{ type: _shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"] }]; }, null); })();


/***/ }),

/***/ "3jUc":
/*!************************************************************!*\
  !*** ./src/app/general-status/general-status.component.ts ***!
  \************************************************************/
/*! exports provided: GeneralStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralStatusComponent", function() { return GeneralStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/model/model.service */ "mZMu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function GeneralStatusComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", status_r1, " ");
} }
class GeneralStatusComponent {
    constructor(modelService) {
        this.modelService = modelService;
        this.statuses = [];
    }
    ngOnInit() {
        this.modelService.st$.subscribe(st => {
            this.statuses = [];
            if (st[0] === 'O') {
                this.statuses.push('The system is in OFF mode');
            }
            if (st[0] === 'M') {
                this.statuses.push('The system is in MAN mode');
            }
            if (st[0] === 'A') {
                this.statuses.push('The system is in AUT mode');
            }
            if (st[0] === 'T') {
                this.statuses.push('The system is in TEST mode');
            }
            if (st[1] === 'R') {
                this.statuses.push('The engine is running');
            }
            if (st[2] === 'A') {
                this.statuses.push('The alarm delay (oil+temp) has elapsed');
            }
            if (st[3] === 'M') {
                this.statuses.push('The mains voltage is present (inside limits)');
            }
            if (st[4] === 'G') {
                this.statuses.push('The generator voltage is present (inside limits)');
            }
            if (st[5] === 'M') {
                this.statuses.push('The mains contactor is closed');
            }
            if (st[6] === 'G') {
                this.statuses.push('The general contactor is closed');
            }
            if (st[7] === 'E') {
                this.statuses.push('There are live alarms');
            }
            if (st[8] === 'T') {
                this.statuses.push('Automatic test is enabled');
            }
        });
    }
}
GeneralStatusComponent.ɵfac = function GeneralStatusComponent_Factory(t) { return new (t || GeneralStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"])); };
GeneralStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneralStatusComponent, selectors: [["app-general-status"]], decls: 4, vars: 1, consts: [[1, "wrapper", "wrap"], [1, "title"], ["class", "m-top-10", 4, "ngFor", "ngForOf"], [1, "m-top-10"]], template: function GeneralStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "General status request:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GeneralStatusComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.statuses);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  border: 2px solid gray;\n  padding: 10px;\n  margin: 10px;\n  width: 510px;\n  height: 520px;\n}\n.wrapper[_ngcontent-%COMP%]   .request-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 245px;\n  background: white;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-general-status',
                templateUrl: './general-status.component.html',
                styleUrls: ['./general-status.component.scss']
            }]
    }], function () { return [{ type: _shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Gvy4":
/*!******************************************************!*\
  !*** ./src/app/shared/services/http/http.service.ts ***!
  \******************************************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _model_model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/model.service */ "mZMu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class HttpService {
    constructor(httpClient, modelService, route) {
        this.httpClient = httpClient;
        this.modelService = modelService;
        this.route = route;
        this.backendUrl = '';
        this.enableLog = false;
        this.reportUrl = '';
        this.user = '';
        this.form = '';
        this.ObjectItemID = '';
        this.requestInProgress = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.ip = '10.228.208.79';
        this.port = 2006;
        this.type = '3';
        this.backendUrl = 'http://10.49.199.234:9092/read';
        this.reportUrl = 'http://127.0.0.1:9092';
        this.httpClient.get('assets/config.json').subscribe((config) => {
            this.backendUrl = config.backendUrl;
            this.enableLog = config.enableLog;
            this.reportUrl = config.reportUrl || 'http://127.0.0.1:9092';
        });
        this.route.queryParams.subscribe(params => {
            try {
                this.ip = params['ip'] || '10.228.208.79';
                this.port = +params['port'] || 2006;
                this.type = params['type'] || '3';
                this.ObjectItemID = params['ObjectItemID'] || '';
            }
            catch (e) { }
        });
    }
    sendButtonAction(action, button) {
        this.requestInProgress.next(true);
        this.reportAction(button);
        return this.httpClient.post(this.backendUrl, this.getPostBody([action]));
    }
    getPostBody(actions) {
        return {
            "token": "ef833caeec31f5b99a8fc997c1be3dbd",
            "ip": this.ip,
            "port": this.port,
            "type": this.type,
            "registers": [{ "reg": [...actions] }]
        };
    }
    getAllData() {
        this.requestInProgress.next(true);
        this.reportAction("REQUEST");
        const allkeys = [
            'ID',
            'ST',
            'ER',
            'MV',
            'GV',
            'FR',
            'BV',
            'HR',
            'MN',
            'AV',
            'IO',
            'PS',
            'AT'
        ];
        this.httpClient.post(this.backendUrl, this.getPostBody(allkeys))
            .subscribe((response) => {
            if (this.enableLog) {
                console.log('response', response);
            }
            this.modelService.parseResponse(response);
            this.requestInProgress.next(false);
        }, (error) => {
            if (this.enableLog) {
                console.log('error', error);
            }
            // let x = {
            //   result: [
            //     {
            //       values: {
            //         MV: '2',
            //         ST: 'AR.MG'
            //       }
            //     }
            //   ]
            // }
            // this.modelService.parseResponse(x);
            this.requestInProgress.next(false);
        });
    }
    reportAction(action) {
        const reportBody = {
            'user': this.user,
            'button': action,
            'form': this.form,
            'ObjectItemID': this.ObjectItemID,
            'ip': this.ip
        };
        this.httpClient.post(this.reportUrl, reportBody).subscribe();
    }
}
HttpService.ɵfac = function HttpService_Factory(t) { return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_model_model_service__WEBPACK_IMPORTED_MODULE_3__["ModelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpService, factory: HttpService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _model_model_service__WEBPACK_IMPORTED_MODULE_3__["ModelService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/http/http.service */ "Gvy4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _connection_parameters_connection_parameters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connection-parameters/connection-parameters.component */ "bnM0");
/* harmony import */ var _panel_id_panel_id_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel-id/panel-id.component */ "2m7U");
/* harmony import */ var _main_board_main_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-board/main-board.component */ "uP7T");
/* harmony import */ var _tab_container_tab_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-container/tab-container.component */ "tKvE");
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/loading/loading.component */ "fqV1");









function AppComponent_app_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
class AppComponent {
    constructor(httpService) {
        this.httpService = httpService;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 3, consts: [[4, "ngIf"], [1, "flex-row"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_loading_0_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-connection-parameters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-panel-id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-main-board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-tab-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.httpService.requestInProgress));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _connection_parameters_connection_parameters_component__WEBPACK_IMPORTED_MODULE_3__["ConnectionParametersComponent"], _panel_id_panel_id_component__WEBPACK_IMPORTED_MODULE_4__["PanelIdComponent"], _main_board_main_board_component__WEBPACK_IMPORTED_MODULE_5__["MainBoardComponent"], _tab_container_tab_container_component__WEBPACK_IMPORTED_MODULE_6__["TabContainerComponent"], _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".flex-row[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: row;\n      }"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: 'app.component.html',
                styles: [
                    `
      .flex-row {
        display: flex;
        flex-direction: row;
      }
    `
                ]
            }]
    }], function () { return [{ type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _connection_parameters_connection_parameters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./connection-parameters/connection-parameters.component */ "bnM0");
/* harmony import */ var _main_board_main_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-board/main-board.component */ "uP7T");
/* harmony import */ var _panel_id_panel_id_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./panel-id/panel-id.component */ "2m7U");
/* harmony import */ var _general_status_general_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./general-status/general-status.component */ "3jUc");
/* harmony import */ var _tab_container_tab_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab-container/tab-container.component */ "tKvE");
/* harmony import */ var _speed_speed_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./speed/speed.component */ "hDcc");
/* harmony import */ var angular_gauge_chart__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-gauge-chart */ "Ceye");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/loading/loading.component */ "fqV1");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            angular_gauge_chart__WEBPACK_IMPORTED_MODULE_9__["GaugeChartModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot([]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _connection_parameters_connection_parameters_component__WEBPACK_IMPORTED_MODULE_3__["ConnectionParametersComponent"],
        _main_board_main_board_component__WEBPACK_IMPORTED_MODULE_4__["MainBoardComponent"],
        _panel_id_panel_id_component__WEBPACK_IMPORTED_MODULE_5__["PanelIdComponent"],
        _general_status_general_status_component__WEBPACK_IMPORTED_MODULE_6__["GeneralStatusComponent"],
        _tab_container_tab_container_component__WEBPACK_IMPORTED_MODULE_7__["TabContainerComponent"],
        _speed_speed_component__WEBPACK_IMPORTED_MODULE_8__["SpeedComponent"],
        _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        angular_gauge_chart__WEBPACK_IMPORTED_MODULE_9__["GaugeChartModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _connection_parameters_connection_parameters_component__WEBPACK_IMPORTED_MODULE_3__["ConnectionParametersComponent"],
                    _main_board_main_board_component__WEBPACK_IMPORTED_MODULE_4__["MainBoardComponent"],
                    _panel_id_panel_id_component__WEBPACK_IMPORTED_MODULE_5__["PanelIdComponent"],
                    _general_status_general_status_component__WEBPACK_IMPORTED_MODULE_6__["GeneralStatusComponent"],
                    _tab_container_tab_container_component__WEBPACK_IMPORTED_MODULE_7__["TabContainerComponent"],
                    _speed_speed_component__WEBPACK_IMPORTED_MODULE_8__["SpeedComponent"],
                    _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_12__["LoadingComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    angular_gauge_chart__WEBPACK_IMPORTED_MODULE_9__["GaugeChartModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"].forRoot([]),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bnM0":
/*!**************************************************************************!*\
  !*** ./src/app/connection-parameters/connection-parameters.component.ts ***!
  \**************************************************************************/
/*! exports provided: ConnectionParametersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectionParametersComponent", function() { return ConnectionParametersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/http/http.service */ "Gvy4");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ConnectionParametersComponent {
    constructor(httpService, route) {
        this.httpService = httpService;
        this.route = route;
        this.baseStationName = 'FR122';
        this.deviceName = 'lovato';
        this.geographicalPosition = 'Kharkov itd itp';
        this.user = '?';
        this.route.queryParams.subscribe(params => {
            try {
                this.baseStationName = params['tit'] || 'FR122';
                this.deviceName = params['name'] || 'lovato';
                this.geographicalPosition = params['geo'] || 'Kharkov itd itp';
                this.user = params['user'] || '?';
                this.httpService.user = this.user;
                this.httpService.form = this.deviceName;
            }
            catch (e) { }
        });
    }
    sendRequest() {
        this.httpService.getAllData();
    }
}
ConnectionParametersComponent.ɵfac = function ConnectionParametersComponent_Factory(t) { return new (t || ConnectionParametersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ConnectionParametersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConnectionParametersComponent, selectors: [["app-connection-parameters"]], decls: 21, vars: 4, consts: [[1, "content-wrapper", "wrap"], [1, "title"], [1, "row"], [1, "left"], [1, "parameter-label"], ["type", "text", 1, "parameter-value", 3, "value", "valueChange"], [1, "right"], [1, "btn-wrap"], [1, "btn", 3, "click"], ["type", "text", 1, "parameter-value", "full-width", 3, "value", "valueChange"]], template: function ConnectionParametersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Conection parameters:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "User:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ConnectionParametersComponent_Template_input_valueChange_7_listener($event) { return ctx.user = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Base station name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ConnectionParametersComponent_Template_input_valueChange_10_listener($event) { return ctx.baseStationName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Device name:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ConnectionParametersComponent_Template_input_valueChange_13_listener($event) { return ctx.deviceName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConnectionParametersComponent_Template_div_click_16_listener() { return ctx.sendRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "REQUEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Geographical position:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ConnectionParametersComponent_Template_input_valueChange_20_listener($event) { return ctx.geographicalPosition = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.baseStationName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.deviceName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.geographicalPosition);
    } }, styles: [".row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.row[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  min-width: 300px;\n}\n.row[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.row[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n}\n.row[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%] {\n  width: 98px;\n  height: 52px;\n  margin: 3px;\n  border: 3px solid black;\n  background-color: #E7E7E7;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.row[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 84px;\n  height: 28px;\n  border: 1px solid black;\n  border-radius: 8px;\n  margin: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConnectionParametersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-connection-parameters',
                templateUrl: 'app-connection-parameters.html',
                styleUrls: ['app-connection-parameters.scss']
            }]
    }], function () { return [{ type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "fqV1":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/loading/loading.component.ts ***!
  \****************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoadingComponent {
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 2, vars: 0, consts: [[1, "loader"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  background-color: rgba(0, 0, 0, 0.75);\n  z-index: 999;\n  flex-direction: column;\n}\n\n.loader[_ngcontent-%COMP%] {\n  margin: 100px auto;\n  font-size: 25px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: load5 1.1s infinite ease;\n  animation: load5 1.1s infinite ease;\n  transform: translateZ(0);\n}\n\n@-webkit-keyframes load5 {\n  0%, 100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}\n\n@keyframes load5 {\n  0%, 100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading',
                template: '<div class="loader">Loading...</div>',
                styleUrls: ['./loading.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "hDcc":
/*!******************************************!*\
  !*** ./src/app/speed/speed.component.ts ***!
  \******************************************/
/*! exports provided: SpeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeedComponent", function() { return SpeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_gauge_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-gauge-chart */ "Ceye");



class SpeedComponent {
    constructor() {
        this.value = 0;
        this.max = 0;
        this.label = '';
        this.canvasWidth = 160;
        this.needleValue = 0;
        this.centralLabel = '';
        this.bottomLabel = '';
        this.options = {
            hasNeedle: true,
            needleColor: 'gray',
            needleUpdateSpeed: 1000,
            arcColors: ['green', 'lightgray'],
            arcDelimiters: [0],
            rangeLabel: ['0', this.max.toString()],
            needleStartValue: 0,
        };
    }
    ngOnChanges() {
        this.centralLabel = this.value.toString();
        if (this.value > 0) {
            if (this.value < this.max) {
                this.needleValue = (this.value / this.max) * 100;
            }
            else {
                this.needleValue = 99;
            }
        }
        else {
            this.needleValue = 1;
        }
        this.options.arcDelimiters = [this.needleValue];
        this.options.rangeLabel[1] = this.max.toString();
        this.bottomLabel = this.label;
    }
}
SpeedComponent.ɵfac = function SpeedComponent_Factory(t) { return new (t || SpeedComponent)(); };
SpeedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpeedComponent, selectors: [["app-speed"]], inputs: { value: "value", max: "max", label: "label" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 5, consts: [[3, "canvasWidth", "needleValue", "centralLabel", "options", "bottomLabel"]], template: function SpeedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "rg-gauge-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("canvasWidth", ctx.canvasWidth)("needleValue", ctx.needleValue)("centralLabel", ctx.centralLabel)("options", ctx.options)("bottomLabel", ctx.bottomLabel);
    } }, directives: [angular_gauge_chart__WEBPACK_IMPORTED_MODULE_1__["GaugeChartComponent"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpeedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-speed',
                templateUrl: './speed.component.html',
                styleUrls: ['./speed.component.scss']
            }]
    }], function () { return []; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "mZMu":
/*!********************************************************!*\
  !*** ./src/app/shared/services/model/model.service.ts ***!
  \********************************************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ModelService {
    constructor() {
        this.id$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.st$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.er$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.mv$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.gv$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.fr$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.bv$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.hr$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.mn$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.av$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.io$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.ps$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.at$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    parseResponse(response) {
        const res = response.result[0].values;
        if (res.ID) {
            this.id$.next(res.ID);
        }
        if (res.ST) {
            this.st$.next(res.ST);
        }
        if (res.GV) {
            this.gv$.next(res.GV);
        }
        if (res.FR) {
            this.fr$.next(res.FR);
        }
        if (res.BV) {
            this.bv$.next(res.BV);
        }
        if (res.HR) {
            this.hr$.next(res.HR);
        }
        if (res.MN) {
            this.mn$.next(res.MN);
        }
        if (res.AV) {
            this.av$.next(res.AV);
        }
        if (res.IO) {
            this.io$.next(res.IO);
        }
        if (res.PS) {
            this.ps$.next(res.PS);
        }
        if (res.AT) {
            this.at$.next(res.AT);
        }
        if (res.MV) {
            this.mv$.next([res.MV, res.MV, res.MV]);
        }
        try {
            this.er$.next([...res.ER.split('=')]);
        }
        catch (e) { }
    }
}
ModelService.ɵfac = function ModelService_Factory(t) { return new (t || ModelService)(); };
ModelService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ModelService, factory: ModelService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModelService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "tKvE":
/*!**********************************************************!*\
  !*** ./src/app/tab-container/tab-container.component.ts ***!
  \**********************************************************/
/*! exports provided: TabContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabContainerComponent", function() { return TabContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/model/model.service */ "mZMu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _speed_speed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../speed/speed.component */ "hDcc");
/* harmony import */ var _general_status_general_status_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../general-status/general-status.component */ "3jUc");






function TabContainerComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mains phase to phase voltage readings:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-speed", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-speed", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-speed", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Generator readings:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-speed", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-speed", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Battery readings: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-speed", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-speed", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Working hours: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TabContainerComponent_div_11_Template_input_valueChange_30_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.workingHours = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TabContainerComponent_div_11_Template_input_valueChange_31_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.workingMinutes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Maintenance interval: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TabContainerComponent_div_11_Template_input_valueChange_35_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.intervalHours = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TabContainerComponent_div_11_Template_input_valueChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.intervalMinutes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Panel powered up for: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TabContainerComponent_div_11_Template_input_valueChange_41_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.poweredDays = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TabContainerComponent_div_11_Template_input_valueChange_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.poweredHours = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TabContainerComponent_div_11_Template_input_valueChange_43_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.poweredMinutes = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function TabContainerComponent_div_11_Template_input_valueChange_44_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.poweredSeconds = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.l1)("max", 600)("label", "L1-L2 voltage (VAC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.l2)("max", 600)("label", "L2-L3 voltage (VAC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.l3)("max", 600)("label", "L1-L3 voltage (VAC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.gv)("max", 600)("label", "Voltage (VAC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.fr)("max", 80)("label", "Frequency (Hz)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.bv)("max", 40)("label", "Battery voltage (VDC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.av)("max", 40)("label", "Batt. chg. alt. voltage (VDC)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.workingHours);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.workingMinutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.intervalHours);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.intervalMinutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.poweredDays);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.poweredHours);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.poweredMinutes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.poweredSeconds);
} }
const _c0 = function (a0) { return { "active": a0 }; };
function TabContainerComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Inputs:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "OIL PRESSURE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "HIGH TEMPERATURE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "LOW FUEL LEVEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "EMERGENCY STOP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "REMOTE STARTING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "THERMAL PROTECTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "MAINS CONTACTOR CLOSED SIGNAL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "GENERATOR CONTACTOR CLOSED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Outputs:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "MAINS RELAY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "GEN RELAY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "FUEL VALUE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "START");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "SLOW RUNNING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "AUDIBLE ALARM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "COMMON ALARM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Alarms:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "A01 LOW IOL PLEASSURE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "A02 ENGINE OVERHEATING");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "A03 LOW FUEL LEVEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "A04 STARTING FAILURE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "A05 LOW BATTERY VOLTAGE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "A06 HIGH BATERY VOLTAGE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "A07 BATT CHGR ALTERNATOR FAULT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "A08 GENERATOR VOLTAGE FAILURE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "A09 HIGH GENERATOR FREQUENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "A10 LOW GENERATOR FREQUENCY");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "A11 GENERATOR OVERLOAD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "A12 ENGINE STOPPING FAILURE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "A13 EMERGENCY STOP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "A14 UNEXPECTED STOP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "A15 MAINTENANCE REQUESTED");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "A16 MAINS CONTACTOR FAILURE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "A17 GEN CONTACTOR FAILURE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, ctx_r1.io[0] === "O"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c0, ctx_r1.io[1] === "T"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c0, ctx_r1.io[2] === "F"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c0, ctx_r1.io[3] === "S"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c0, ctx_r1.io[4] === "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c0, ctx_r1.io[5] === "6"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](44, _c0, ctx_r1.io[6] === "7"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](46, _c0, ctx_r1.io[7] === "8"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](48, _c0, ctx_r1.io[8] === "N"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](50, _c0, ctx_r1.io[9] === "G"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](52, _c0, ctx_r1.io[10] === "V"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](54, _c0, ctx_r1.io[11] === "S"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](56, _c0, ctx_r1.io[12] === "5"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](58, _c0, ctx_r1.io[13] === "6"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](60, _c0, ctx_r1.io[14] === "7"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](62, _c0, ctx_r1.er.indexOf("001") !== -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](64, _c0, ctx_r1.er.indexOf("002") !== -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](66, _c0, ctx_r1.er.indexOf("003") !== -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](68, _c0, ctx_r1.er.indexOf("004") !== -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](70, _c0, ctx_r1.er.indexOf("005") !== -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](72, _c0, ctx_r1.er.indexOf("006") !== -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](74, _c0, ctx_r1.er.indexOf("007") !== -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](76, _c0, ctx_r1.er.indexOf("008") !== -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](78, _c0, ctx_r1.er.indexOf("009") !== -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](80, _c0, ctx_r1.er.indexOf("010") !== -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](82, _c0, ctx_r1.er.indexOf("011") !== -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](84, _c0, ctx_r1.er.indexOf("012") !== -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](86, _c0, ctx_r1.er.indexOf("013") !== -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](88, _c0, ctx_r1.er.indexOf("014") !== -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](90, _c0, ctx_r1.er.indexOf("015") !== -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](92, _c0, ctx_r1.er.indexOf("016") !== -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](94, _c0, ctx_r1.er.indexOf("017") !== -1));
} }
function TabContainerComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alarm_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", alarm_r14, " ");
} }
function TabContainerComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TabContainerComponent_div_13_div_2_Template, 2, 1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.ps);
} }
function TabContainerComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-general-status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TabContainerComponent {
    constructor(modelService) {
        this.modelService = modelService;
        this.selectedTabIndex = 0;
        this.workingHours = '0 0 0 h';
        this.workingMinutes = '0 0 m';
        this.intervalHours = '0 0 0 h';
        this.intervalMinutes = '0 0 m';
        this.poweredDays = '0 0 0 0 0 Days';
        this.poweredHours = '0 0 0 Hours';
        this.poweredMinutes = '0 0 0 Minutes';
        this.poweredSeconds = '0 0 0 Seconds';
        this.l1 = 0;
        this.l2 = 0;
        this.l3 = 0;
        this.gv = 0;
        this.fr = 0;
        this.bv = 0;
        this.av = 0;
        this.io = [];
        this.ps = [];
        this.er = [];
    }
    selectTab(index) {
        this.selectedTabIndex = index;
    }
    ngOnInit() {
        this.modelService.mv$.subscribe((mv) => {
            this.l1 = Number(mv[0]);
            this.l2 = Number(mv[1]);
            this.l3 = Number(mv[2]);
        });
        this.modelService.gv$.subscribe(gv => this.gv = Number(gv));
        this.modelService.fr$.subscribe(fr => this.fr = Number(fr) / 10);
        this.modelService.bv$.subscribe(bv => this.bv = Number(bv) / 10);
        this.modelService.av$.subscribe(av => this.av = Number(av) / 10);
        this.modelService.hr$.subscribe(hr => {
            this.workingHours = `${hr[0]} ${hr[1]} ${hr[2]} h`;
            this.workingMinutes = `${hr[3]} ${hr[4]} m`;
        });
        this.modelService.mn$.subscribe(mn => {
            const h = ['0', '0', '0', ...Number.parseInt((Number(mn) / 60).toString()).toString()].reverse();
            const m = ['0', '0', '0', ...(Number(mn) % 60).toString()].reverse();
            this.intervalHours = `${h[2]} ${h[1]} ${h[0]} h`;
            this.intervalMinutes = `${m[1]} ${m[0]} m`;
        });
        this.modelService.at$.subscribe(at => {
            let days = Number.parseInt((Number.parseInt((Number(at) / 60).toString()) / 24).toString());
            let hours = Number.parseInt((Number(at) / 60).toString()) % 24;
            let minutes = Number(at) % 60;
            const d = ['0', '0', '0', '0', ...days.toString()].reverse();
            const h = ['0', '0', '0', ...hours.toString()].reverse();
            const m = ['0', '0', '0', ...minutes.toString()].reverse();
            this.poweredDays = `${d[3]} ${d[2]} ${d[1]} ${d[0]} Days`;
            this.poweredHours = `${h[2]} ${h[1]} ${h[0]} Hours`;
            this.poweredMinutes = `${m[2]} ${m[1]} ${m[0]} Minutes`;
        });
        this.modelService.io$.subscribe(io => {
            this.io = [...io];
        });
        this.modelService.ps$.subscribe(ps => {
            this.ps = [];
            if (ps[0] === 'O') {
                this.ps.push('led OFF is lit');
            }
            if (ps[0] === 'M') {
                this.ps.push('led MAN is lit');
            }
            if (ps[0] === 'A') {
                this.ps.push('led AUT is lit');
            }
            if (ps[0] === 'T') {
                this.ps.push('led TEST is lit');
            }
            if (ps[1] === 'N') {
                this.ps.push('led NET is lit');
            }
            if (ps[1] === 'G') {
                this.ps.push('led GEN is lit');
            }
            if (ps[1] === 'F') {
                this.ps.push('led FREQ is lit');
            }
            if (ps[1] === 'B') {
                this.ps.push('led BATT is lit');
            }
            if (ps[1] === 'H') {
                this.ps.push('led HOUR is lit');
            }
            if (ps[2] === 'E') {
                this.ps.push('ENGINE ON');
            }
            if (ps[3] === 'N') {
                this.ps.push('mains contactor closed is lit');
            }
            if (ps[4] === 'G') {
                this.ps.push('generator contactor closed is lit');
            }
            if (ps[5] === '1') {
                this.ps.push('mains L1-L2 voltage present is lit');
            }
            if (ps[6] === '2') {
                this.ps.push('mains L2-L3 voltage present is lit');
            }
            if (ps[7] === '3') {
                this.ps.push('mains L1-L3 voltage present is lit');
            }
            if (ps[8] === 'G') {
                this.ps.push('generator voltage present is lit');
            }
            const volt = ps.substring(9);
            if (volt) {
                this.ps.push(volt + ' V');
            }
        });
        this.modelService.er$.subscribe(er => this.er = [...er]);
    }
}
TabContainerComponent.ɵfac = function TabContainerComponent_Factory(t) { return new (t || TabContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"])); };
TabContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TabContainerComponent, selectors: [["app-tab-container"]], decls: 15, vars: 16, consts: [[1, "tabs-wrapper", "wrap"], [1, "tabs-header"], [1, "tab-header", 3, "ngClass", "click"], [1, "tab-body"], [4, "ngIf"], [1, "main-voltage", "wrap"], [1, "title"], [1, "volt-wrap"], [1, "volt-block"], [3, "value", "max", "label"], [1, "bottom-content"], [1, "generator-reading", "wrap"], [1, "volt-block", "m-top-15"], [1, "battery-container"], [1, "battery", "wrap"], [1, "bat-block"], [1, "working-hours", "wrap", "padding-bot-5"], ["type", "text", 1, "parameter-value", "working", "hours", "digital-input", 3, "value", "valueChange"], ["type", "text", 1, "parameter-value", "working", "minutes", "digital-input", 3, "value", "valueChange"], [1, "main-interval", "wrap", "padding-bot-5"], ["type", "text", 1, "parameter-value", "hours", "digital-input", 3, "value", "valueChange"], ["type", "text", 1, "parameter-value", "minutes", "digital-input", 3, "value", "valueChange"], [1, "powered-up", "wrap", "padding-bot-5"], [1, "container"], ["type", "text", 1, "parameter-value", "position", "digital-input", 3, "value", "valueChange"], [1, "input-output"], [1, "input", "wrap"], [1, "inp-val", 3, "ngClass"], [1, "output", "wrap"], [1, "wrap", "alarms"], [1, "left"], [1, "alarm", 3, "ngClass"], [1, "right"], [1, "status"], ["class", "alarm", 4, "ngFor", "ngForOf"], [1, "alarm"]], template: function TabContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabContainerComponent_Template_div_click_2_listener() { return ctx.selectTab(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "FG Parameters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabContainerComponent_Template_div_click_4_listener() { return ctx.selectTab(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "FG Alarms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabContainerComponent_Template_div_click_6_listener() { return ctx.selectTab(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Front panel status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TabContainerComponent_Template_div_click_8_listener() { return ctx.selectTab(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Request status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TabContainerComponent_div_11_Template, 45, 29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TabContainerComponent_div_12_Template, 77, 96, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TabContainerComponent_div_13_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TabContainerComponent_div_14_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.selectedTabIndex === 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.selectedTabIndex === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.selectedTabIndex === 2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.selectedTabIndex === 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTabIndex === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTabIndex === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTabIndex === 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedTabIndex === 3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _speed_speed_component__WEBPACK_IMPORTED_MODULE_3__["SpeedComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _general_status_general_status_component__WEBPACK_IMPORTED_MODULE_4__["GeneralStatusComponent"]], styles: [".tabs-wrapper[_ngcontent-%COMP%] {\n  width: 556px;\n  height: 595px;\n  margin: 15px 10px;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tabs-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tabs-header[_ngcontent-%COMP%]   .tab-header[_ngcontent-%COMP%] {\n  padding: 5px;\n  display: flex;\n  border-top: 1px solid gray;\n  border-left: 1px solid gray;\n  border-right: 1px solid gray;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tabs-header[_ngcontent-%COMP%]   .tab-header[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tabs-header[_ngcontent-%COMP%]   .tab-header.active[_ngcontent-%COMP%] {\n  background-color: lightgray;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%] {\n  height: 564px;\n  display: flex;\n  border: 1px solid gray;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .main-voltage[_ngcontent-%COMP%] {\n  display: flex;\n  width: 510px;\n  margin: 15px 10px;\n  height: 140px;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .main-voltage[_ngcontent-%COMP%]   .volt-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .volt-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 170px;\n  height: 140px;\n  color: #37784C;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%]   .generator-reading[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  height: 338px;\n  width: 170px;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%]   .battery-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 362px;\n  width: 330px;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%]   .battery-container[_ngcontent-%COMP%]   .battery[_ngcontent-%COMP%] {\n  height: 139px;\n  display: flex;\n  flex-direction: row;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%]   .battery-container[_ngcontent-%COMP%]   .battery[_ngcontent-%COMP%]   .bat-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-star;\n  align-items: flex-end;\n  width: 155px;\n  color: #37784C;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%]   .battery-container[_ngcontent-%COMP%]   .working-hours[_ngcontent-%COMP%] {\n  height: 24px;\n  display: flex;\n  flex-direction: row;\n  margin-top: 10px;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%]   .battery-container[_ngcontent-%COMP%]   .main-interval[_ngcontent-%COMP%] {\n  height: 24px;\n  display: flex;\n  flex-direction: row;\n  margin-top: 10px;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%]   .battery-container[_ngcontent-%COMP%]   .powered-up[_ngcontent-%COMP%] {\n  height: 64px;\n  display: flex;\n  flex-direction: row;\n  margin-top: 10px;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .bottom-content[_ngcontent-%COMP%]   .battery-container[_ngcontent-%COMP%]   .powered-up[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .position[_ngcontent-%COMP%] {\n  width: 136px;\n  margin: 3px;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .input-output[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 240px;\n  padding: 5px;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .input-output[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%], .tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .input-output[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 238px;\n  margin-top: 10px;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .input-output[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .inp-val[_ngcontent-%COMP%], .tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .input-output[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .inp-val[_ngcontent-%COMP%] {\n  border: 1px solid gray;\n  text-align: center;\n  margin-bottom: 5px;\n  height: 16px;\n  font-size: 13px;\n  padding-top: 4px;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .input-output[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   .inp-val.active[_ngcontent-%COMP%], .tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .input-output[_ngcontent-%COMP%]   .output[_ngcontent-%COMP%]   .inp-val.active[_ngcontent-%COMP%] {\n  background-color: red;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .input-output[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%] {\n  margin-right: 15px;\n  margin-left: 3px;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .alarms[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 240px;\n  margin: 13px;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .alarms[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .alarms[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 48%;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .alarms[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .alarm[_ngcontent-%COMP%], .tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .alarms[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .alarm[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 5px;\n  height: 16px;\n  font-size: 13px;\n  padding-top: 4px;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .alarms[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .alarm.active[_ngcontent-%COMP%], .tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .alarms[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .alarm.active[_ngcontent-%COMP%] {\n  background-color: red;\n}\n.tabs-wrapper[_ngcontent-%COMP%]   .tab-body[_ngcontent-%COMP%]   .alarms[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n.margin-left[_ngcontent-%COMP%] {\n  margin-left: 25%;\n}\n.padding-bot-5[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n}\n.digital-input[_ngcontent-%COMP%] {\n  height: 20px;\n  font-size: 18px;\n  text-align: right;\n  padding-right: 4px;\n}\n.hours[_ngcontent-%COMP%] {\n  width: 70px;\n  margin-left: 76px;\n}\n.minutes[_ngcontent-%COMP%] {\n  width: 56px;\n  margin-left: 10px;\n}\n.status[_ngcontent-%COMP%] {\n  padding: 15px;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tab-container',
                templateUrl: './tab-container.component.html',
                styleUrls: ['./tab-container.component.scss']
            }]
    }], function () { return [{ type: _shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"] }]; }, null); })();


/***/ }),

/***/ "uP7T":
/*!****************************************************!*\
  !*** ./src/app/main-board/main-board.component.ts ***!
  \****************************************************/
/*! exports provided: MainBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBoardComponent", function() { return MainBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/http/http.service */ "Gvy4");
/* harmony import */ var _shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/model/model.service */ "mZMu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MainBoardComponent_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 28);
} }
function MainBoardComponent_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 29);
} }
function MainBoardComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 30);
} }
function MainBoardComponent_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 31);
} }
function MainBoardComponent_img_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
} }
function MainBoardComponent_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 33);
} }
function MainBoardComponent_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 34);
} }
const _c0 = function (a0) { return { "active": a0 }; };
const _c1 = function (a0, a1) { return { "active": a0, "inactive": a1 }; };
class MainBoardComponent {
    constructor(httpService, modelService) {
        this.httpService = httpService;
        this.modelService = modelService;
        this.isActive = {
            KT: false,
            KA: false,
            KM: false,
            KO: false,
            KS: false,
            KP: false,
            KN: false,
            KG: false,
            KR: false,
        };
        this.l1 = false;
        this.l2 = false;
        this.l3 = false;
        this.rActive = false;
        this.modelService.st$.subscribe(st => {
            Object.keys(this.isActive).forEach(element => {
                this.isActive[element] = false;
            });
            if (st[0] === 'O') {
                this.isActive.KO = true;
            }
            if (st[0] === 'M') {
                this.isActive.KM = true;
            }
            if (st[0] === 'A') {
                this.isActive.KA = true;
            }
            if (st[0] === 'T') {
                this.isActive.KT = true;
            }
            if (st[1] === 'R') {
                this.rActive = true;
            }
            if (st[3] === 'M') {
                this.isActive.KN = true;
            }
            if (st[4] === 'G') {
                this.isActive.KG = true;
            }
        });
        this.modelService.mv$.subscribe((mv) => {
            this.l1 = Number(mv[0]) > 0;
            this.l2 = Number(mv[1]) > 0;
            this.l3 = Number(mv[2]) > 0;
        });
    }
    buttonClick(name) {
        if (name === 'KR') {
            const prep = [
                {
                    key: 'KR',
                    value: !this.isActive.KR
                }
            ];
            this.sendAction('KR!', 'RESET', this.setButtonState.bind(this, prep));
        }
        if (name === 'KS' && !this.isActive.KS) {
            const prep = [
                {
                    key: 'KS',
                    value: true
                },
                {
                    key: 'KP',
                    value: false
                },
            ];
            this.sendAction('KS!', 'START', this.setButtonState.bind(this, prep));
        }
        if (name === 'KP' && !this.isActive.KP) {
            const prep = [
                {
                    key: 'KS',
                    value: false
                },
                {
                    key: 'KP',
                    value: true
                },
            ];
            this.sendAction('KP!', 'STOP', this.setButtonState.bind(this, prep));
        }
        if (name === 'KN' && !this.isActive.KN) {
            const prep = [
                {
                    key: 'KG',
                    value: false
                },
                {
                    key: 'KN',
                    value: true
                },
            ];
            this.sendAction('KN!', 'MAINS', this.setButtonState.bind(this, prep));
        }
        if (name === 'KG' && this.rActive && !this.isActive.KG) {
            const prep = [
                {
                    key: 'KG',
                    value: true
                },
                {
                    key: 'KN',
                    value: false
                },
            ];
            this.sendAction('KG!', 'GEN', this.setButtonState.bind(this, prep));
        }
        if (name === 'KT' && !this.isActive.KT) {
            const prep = [
                {
                    key: 'KT',
                    value: true
                },
                {
                    key: 'KA',
                    value: false
                },
                {
                    key: 'KM',
                    value: false
                },
                {
                    key: 'KO',
                    value: false
                },
            ];
            this.sendAction('KT!', 'TEST', this.setButtonState.bind(this, prep));
        }
        if (name === 'KA' && !this.isActive.KA) {
            const prep = [
                {
                    key: 'KT',
                    value: false
                },
                {
                    key: 'KA',
                    value: true
                },
                {
                    key: 'KM',
                    value: false
                },
                {
                    key: 'KO',
                    value: false
                },
            ];
            this.sendAction('KA!', 'AUT', this.setButtonState.bind(this, prep));
        }
        if (name === 'KM' && !this.isActive.KM) {
            const prep = [
                {
                    key: 'KT',
                    value: false
                },
                {
                    key: 'KA',
                    value: false
                },
                {
                    key: 'KM',
                    value: true
                },
                {
                    key: 'KO',
                    value: false
                },
            ];
            this.sendAction('KM!', 'MAN', this.setButtonState.bind(this, prep));
        }
        if (name === 'KO' && !this.isActive.KO) {
            const prep = [
                {
                    key: 'KT',
                    value: false
                },
                {
                    key: 'KA',
                    value: false
                },
                {
                    key: 'KM',
                    value: false
                },
                {
                    key: 'KO',
                    value: true
                },
            ];
            this.sendAction('KO!', 'OFF', this.setButtonState.bind(this, prep));
        }
    }
    setButtonState(trueKey) {
        trueKey.forEach(e => {
            this.isActive[e.key] = e.value;
        });
    }
    sendAction(act, button, callback) {
        this.httpService.sendButtonAction(act, button)
            .subscribe((data) => {
            if (this.httpService.enableLog) {
                console.log('data', data);
            }
            if (callback) {
                callback();
            }
            setTimeout(() => {
                this.httpService.getAllData();
            }, 2000);
        }, (error) => {
            if (this.httpService.enableLog) {
                console.log('error', error);
            }
            setTimeout(() => {
                this.httpService.getAllData();
            }, 2000);
        });
    }
}
MainBoardComponent.ɵfac = function MainBoardComponent_Factory(t) { return new (t || MainBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"])); };
MainBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainBoardComponent, selectors: [["app-main-board"]], decls: 50, vars: 35, consts: [[1, "board-wrapper"], [1, "btn-block", "m-top-5", "mains-button"], [1, "small-title"], [1, "btn-wrap"], [1, "btn", "mains", 3, "ngClass", "click"], [1, "main"], ["class", "icon engine-icon", "src", "assets/green.png", "alt", "", 4, "ngIf"], ["class", "icon start-icon", "src", "assets/green.png", "alt", "", 4, "ngIf"], ["class", "icon l1-icon", "src", "assets/green.png", "alt", "", 4, "ngIf"], ["class", "icon l2-icon", "src", "assets/green.png", "alt", "", 4, "ngIf"], ["class", "icon l3-icon", "src", "assets/green.png", "alt", "", 4, "ngIf"], ["class", "icon mains-icon", "src", "assets/yellow.png", "alt", "", 4, "ngIf"], ["class", "icon gen-icon", "src", "assets/yellow.png", "alt", "", 4, "ngIf"], [1, "left-panel"], [1, "btn-block", "center"], [1, "btn", "reset", 3, "ngClass", "click"], [1, "m-top-10"], [1, "btn-block", "vertical", "m-top-5", "start-stop"], [1, "btn", "start", 3, "ngClass", "click"], [1, "btn", "stop", 3, "ngClass", "click"], [1, "btn-block", "gen-button"], [1, "btn", "gen", 3, "ngClass", "click"], [1, "right-panel"], [1, "btn-block", "vertical"], [1, "btn", "test", 3, "ngClass", "click"], [1, "btn", "aut", 3, "ngClass", "click"], [1, "btn", "man", 3, "ngClass", "click"], [1, "btn", "off", 3, "ngClass", "click"], ["src", "assets/green.png", "alt", "", 1, "icon", "engine-icon"], ["src", "assets/green.png", "alt", "", 1, "icon", "start-icon"], ["src", "assets/green.png", "alt", "", 1, "icon", "l1-icon"], ["src", "assets/green.png", "alt", "", 1, "icon", "l2-icon"], ["src", "assets/green.png", "alt", "", 1, "icon", "l3-icon"], ["src", "assets/yellow.png", "alt", "", 1, "icon", "mains-icon"], ["src", "assets/yellow.png", "alt", "", 1, "icon", "gen-icon"]], template: function MainBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "line power");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_5_listener() { return ctx.buttonClick("KN"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "MAINS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MainBoardComponent_img_8_Template, 1, 0, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MainBoardComponent_img_9_Template, 1, 0, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MainBoardComponent_img_10_Template, 1, 0, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MainBoardComponent_img_11_Template, 1, 0, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MainBoardComponent_img_12_Template, 1, 0, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MainBoardComponent_img_13_Template, 1, 0, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MainBoardComponent_img_14_Template, 1, 0, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_18_listener() { return ctx.buttonClick("KR"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "SELECT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "RESET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_25_listener() { return ctx.buttonClick("KS"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "START");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_28_listener() { return ctx.buttonClick("KP"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "STOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "generator power");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_34_listener() { return ctx.buttonClick("KG"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "GEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_39_listener() { return ctx.buttonClick("KT"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "TEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_42_listener() { return ctx.buttonClick("KA"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "AUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_45_listener() { return ctx.buttonClick("KM"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "MAN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_48_listener() { return ctx.buttonClick("KO"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "OFF");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx.isActive.KN));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActive.KG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.l1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.l2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.l3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActive.KN);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isActive.KG);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx.isActive.KR));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.isActive.KS));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.isActive.KP));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c1, ctx.isActive.KG, !ctx.rActive));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.isActive.KT));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx.isActive.KA));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](31, _c0, ctx.isActive.KM));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](33, _c0, ctx.isActive.KO));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".board-wrapper[_ngcontent-%COMP%] {\n  width: 556px;\n  border: 2px solid gray;\n  padding: 10px;\n  margin: 10px;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  border: 1px solid gray;\n  padding: 1px;\n  background-color: #0A3E7F;\n  position: relative;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%] {\n  width: 74px;\n  height: 74px;\n  margin: 3px;\n  border: 3px solid black;\n  background-color: #E7E7E7;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n  border: 1px solid black;\n  border-radius: 8px;\n  margin: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.start[_ngcontent-%COMP%] {\n  background-color: #008604;\n  cursor: not-allowed;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.stop[_ngcontent-%COMP%] {\n  background-color: #FA0305;\n  cursor: not-allowed;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.mains[_ngcontent-%COMP%], .board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.gen[_ngcontent-%COMP%] {\n  background-color: #FCFE81;\n  cursor: not-allowed;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.reset[_ngcontent-%COMP%] {\n  background-color: #b7c975;\n  cursor: not-allowed;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.test[_ngcontent-%COMP%], .board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.man[_ngcontent-%COMP%], .board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.off[_ngcontent-%COMP%], .board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.aut[_ngcontent-%COMP%] {\n  background-color: #FA0305;\n  cursor: not-allowed;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.inactive[_ngcontent-%COMP%] {\n  cursor: not-allowed;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.reset[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-block.center[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-block.vertical[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.board-wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 340px;\n  width: 340px;\n  height: 500px;\n  background-image: url('main.png');\n  margin-left: 29px;\n  position: relative;\n}\n.board-wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n}\n.board-wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .engine-icon[_ngcontent-%COMP%] {\n  right: 41px;\n  top: 30px;\n}\n.board-wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .mains-icon[_ngcontent-%COMP%] {\n  left: 53px;\n  bottom: 90px;\n}\n.board-wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .gen-icon[_ngcontent-%COMP%] {\n  right: -1px;\n  bottom: 90px;\n}\n.board-wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .start-icon[_ngcontent-%COMP%] {\n  right: -1px;\n  top: 181px;\n}\n.board-wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .l1-icon[_ngcontent-%COMP%] {\n  left: 6px;\n  top: 207px;\n}\n.board-wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .l2-icon[_ngcontent-%COMP%] {\n  left: 52px;\n  top: 207px;\n}\n.board-wrapper[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .l3-icon[_ngcontent-%COMP%] {\n  left: 98px;\n  top: 207px;\n}\n.board-wrapper[_ngcontent-%COMP%]   .start-stop[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.board-wrapper[_ngcontent-%COMP%]   .mains-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  z-index: 10;\n}\n.board-wrapper[_ngcontent-%COMP%]   .gen-button[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n}\n.board-wrapper[_ngcontent-%COMP%]   .left-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.board-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 10px;\n  flex-direction: column;\n  justify-content: center;\n}\n.small-title[_ngcontent-%COMP%] {\n  position: absolute;\n  background: white;\n  top: -10px;\n  font-size: 13px;\n  padding: 1px;\n}\n.wrap-icon-r[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: center;\n  padding-right: 20px;\n}\n.wrap-icon-r[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-board',
                templateUrl: 'app-main-board.html',
                styleUrls: ['app-main-board.scss']
            }]
    }], function () { return [{ type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);