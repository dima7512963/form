(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/oleksiida/projects/RCM-Lovato/git/new-telys/src/main.ts */"zUnb");


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

/***/ "DaAC":
/*!**********************************************************!*\
  !*** ./src/app/engine-status/engine-status.component.ts ***!
  \**********************************************************/
/*! exports provided: EngineStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EngineStatusComponent", function() { return EngineStatusComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/model/model.service */ "mZMu");
/* harmony import */ var _shared_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/speed/speed.component */ "sLU7");





class EngineStatusComponent {
    constructor(modelService) {
        this.modelService = modelService;
        this.s1 = 0;
        this.s2 = 0;
        this.s3 = 0;
        this.s4 = 0;
        this.s5 = 0;
        this.s6 = 0;
        this.s7 = 0;
        this.s8 = 0;
        this.s9 = 0;
        this.s10 = 0;
        this.s11 = 0;
    }
    ngOnInit() {
        this.modelService.speeds$.subscribe(status => {
            this.s1 = +status['s1'] / 100;
            this.s2 = +status['s2'] / 100;
            this.s3 = +status['s3'] / 100;
            this.s4 = +status['s4'] / 100;
            this.s5 = +status['s5'] / 100;
            this.s6 = +status['s6'] / 100;
            this.s7 = +status['s7'] / 10;
            this.s8 = +status['s8'];
            this.s9 = +status['s9'];
            this.s10 = +status['s10'];
            this.s11 = +status['s11'] / 1000;
        });
    }
}
EngineStatusComponent.ɵfac = function EngineStatusComponent_Factory(t) { return new (t || EngineStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"])); };
EngineStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EngineStatusComponent, selectors: [["app-engine-status"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]])], decls: 27, vars: 33, consts: [[1, "engine", "m0"], [1, "flex-col"], [1, "flex-row"], [1, "wrap", "p5"], [3, "value", "max", "label"]], template: function EngineStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-speed", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-speed", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-speed", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "app-speed", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-speed", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-speed", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-speed", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "app-speed", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "app-speed", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "app-speed", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-speed", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s1)("max", 600)("label", "U12");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s2)("max", 600)("label", "U23");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s3)("max", 600)("label", "U31");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s4)("max", 500)("label", "V1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s5)("max", 500)("label", "V2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s6)("max", 500)("label", "V3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s7)("max", 70)("label", "frequency Hz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s8)("max", 600)("label", "l1 current A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s9)("max", 600)("label", "l2 current A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s10)("max", 600)("label", "l3 current A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s11)("max", 600)("label", "Neutral A");
    } }, directives: [_shared_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_3__["SpeedComponent"]], styles: [".engine[_ngcontent-%COMP%]   .p5[_ngcontent-%COMP%] {\n  padding: 3px;\n  margin: 3px;\n}\n\n.m0[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EngineStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-engine-status',
                templateUrl: './engine-status.component.html',
                styleUrls: ['./engine-status.component.scss'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]]
            }]
    }], function () { return [{ type: _shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"] }]; }, null); })();


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
        this.requestInProgress = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.defIp = '10.228.183.141';
        this.defPort = 2008;
        this.ip = '';
        this.port = 0;
        this.ObjectItemID = '';
        this.backendUrl = 'http://127.0.0.1:9092';
        this.reportUrl = 'https://ioms.kyivstar.ua/api/v1/object-items';
        this.httpClient.get('assets/config.json').subscribe((config) => {
            this.backendUrl = config.backendUrl || 'http://127.0.0.1:9092';
            this.enableLog = config.enableLog;
            this.reportUrl = config.reportUrl || 'https://ioms.kyivstar.ua/api/v1/object-items';
        });
        this.route.queryParams.subscribe(params => {
            try {
                this.ip = params['ip'] || this.defIp;
                this.port = +params['port'] || this.defPort;
                this.ObjectItemID = params['ObjectItemID'] || '';
            }
            catch (e) { }
        });
    }
    sendButtonAction(action, button) {
        this.requestInProgress.next(true);
        this.reportAction(button);
        return this.httpClient.post(`${this.backendUrl}/socket`, this.getPostBody(action));
    }
    getPostBody(action) {
        return {
            "token": "ef833caeec31f5b99a8fc997c1be3dbd",
            "ip": this.ip,
            "port": this.port,
            "send": action
        };
    }
    getAllData() {
        this.requestInProgress.next(true);
        this.reportAction('REQUEST');
        const allkeys = [
            '020300510001d5e8',
            '0203003d000115f5',
            '0203005e0001e5eb',
            '0203003b0001f5f4',
            '0203003f0001b435',
            '02030043000175ed',
            '020300c8000105c7',
            '020300420001242d',
            '02030032000125f6',
            '0203003300017436',
            '020300340001c5f7',
            '0203003500019437',
            '0203003600016437',
            '02030037000135f7',
            '0203003c00014435',
            '02030038000105f4',
            '0203003900015434',
            '0203003a0001a434',
            '0203003b0001f5f4',
        ];
        this.httpClient.post(`${this.backendUrl}/hardsocket`, this.getPostBody(allkeys))
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
            // if (true) {
            //   const x = {
            //     result: {
            //           '020300510001d5e8': '277',
            //           '0203003d000115f5': '10',
            //           '0203005e0001e5eb': '2',
            //           '020300c2000125c5': '120',
            //           '0203003f0001b435': '30',
            //           '02030043000175ed': '12604',
            //           '020300c8000105c7': '4',
            //           '020300420001242d': '1554',
            //           '02030032000125f6': '11111',
            //           '0203003300017436': '22222',
            //           '020300340001c5f7': '33333',
            //           '0203003500019437': '44444',
            //           '0203003600016437': '55555',
            //           '02030037000135f7': '66666',
            //           '0203003c00014435': '520',
            //           '02030038000105f4': '1',
            //           '0203003900015434': '2',
            //           '0203003a0001a434': '3',
            //           '0203003b0001f5f4': '123456'
            //         }
            //   }
            //   this.modelService.parseResponse(x);
            // }
            this.requestInProgress.next(false);
        });
    }
    reportAction(action) {
        const reportBody = {
            'userName': this.user,
            'operation': action,
        };
        this.httpClient.post(`${this.reportUrl}/${this.ObjectItemID}/action`, reportBody).subscribe();
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

/***/ "RoBY":
/*!******************************************************!*\
  !*** ./src/app/motor-board/motor-board.component.ts ***!
  \******************************************************/
/*! exports provided: MotorBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MotorBoardComponent", function() { return MotorBoardComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/model/model.service */ "mZMu");
/* harmony import */ var _shared_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/speed/speed.component */ "sLU7");
/* harmony import */ var _shared_components_termometer_termometer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/termometer/termometer.component */ "dLIe");
/* harmony import */ var _shared_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/fuel/fuel.component */ "VmXq");







class MotorBoardComponent {
    constructor(modelService) {
        this.modelService = modelService;
        this.waterC = 0;
        this.waterCText = '0 0 0 C';
        this.batV = 0;
        this.oilP = 0;
        this.engRPM = 0;
        this.fuelLvl = 0;
        this.engOpHours = 0;
        this.engWorkTime = 0;
        this.controlPanel = 0;
    }
    ngOnInit() {
        this.modelService.batV$.subscribe((status) => this.batV = +status / 1000);
        this.modelService.oilP$.subscribe((status) => this.oilP = +status);
        this.modelService.engRPM$.subscribe((status) => this.engRPM = +status);
        this.modelService.fuelLvl$.subscribe((status) => this.fuelLvl = +status);
        this.modelService.engOpHours$.subscribe((status) => this.engOpHours = +status);
        this.modelService.engWorkTime$.subscribe((status) => this.engWorkTime = +status);
        this.modelService.controlPanel$.subscribe((status) => this.controlPanel = +status);
        this.modelService.waterC$.subscribe((status) => {
            this.waterC = +status;
            this.waterCText = [...status.toString(), 'C'].join(' ');
        });
    }
}
MotorBoardComponent.ɵfac = function MotorBoardComponent_Factory(t) { return new (t || MotorBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"])); };
MotorBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MotorBoardComponent, selectors: [["app-motor-board"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]])], decls: 32, vars: 16, consts: [[1, "board"], [1, "flex-row", "m-top-7"], [1, "flex-col", "left"], [1, "wrap", "p5"], [3, "value", "max", "label"], [1, "flex-col", "right"], [1, "flex-row"], [1, "term", "wrap", "m-left-10"], [1, "title"], ["type", "text", 1, "parameter-value", "digital-input", 3, "value", "valueChange"], [3, "value"], [1, "fuel", "wrap", "m-left-10"], [3, "value", "max"], [1, "fex-row", "m-top-10", "m-left-10"], [1, "e-status", "wrap"], [1, "flex-row", "m-top-15"], [1, "e-status", "wrap", 2, "margin-left", "18px"]], template: function MotorBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-speed", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "app-speed", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-speed", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Water C:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function MotorBoardComponent_Template_input_valueChange_12_listener($event) { return ctx.waterCText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-termometer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Fuel level:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "app-fuel", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Control panel:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function MotorBoardComponent_Template_input_valueChange_22_listener($event) { return ctx.controlPanel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "ENGINE OPERATING HOURS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function MotorBoardComponent_Template_input_valueChange_27_listener($event) { return ctx.engOpHours = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "ENGINE WORKING TIME:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function MotorBoardComponent_Template_input_valueChange_31_listener($event) { return ctx.engWorkTime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.batV)("max", 30)("label", "Battery voltage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.oilP)("max", 16)("label", "Oil pressure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.engRPM)("max", 3000)("label", "Engine rpm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.waterCText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.waterC);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.fuelLvl)("max", 600);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.controlPanel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.engOpHours);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.engWorkTime);
    } }, directives: [_shared_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_3__["SpeedComponent"], _shared_components_termometer_termometer_component__WEBPACK_IMPORTED_MODULE_4__["TermometerComponent"], _shared_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_5__["FuelComponent"]], styles: [".p5[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 17px;\n}\n\n.h125[_ngcontent-%COMP%] {\n  height: 127px;\n}\n\n.board[_ngcontent-%COMP%] {\n  width: 616px;\n  margin-top: 15px;\n  margin-left: 3px;\n}\n\n.board[_ngcontent-%COMP%]   .e-status[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.board[_ngcontent-%COMP%]   .e-status[_ngcontent-%COMP%]   .parameter-value[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 95%;\n}\n\n.board[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.board[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.board[_ngcontent-%COMP%]   .term[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 120px;\n  height: 278px;\n}\n\n.board[_ngcontent-%COMP%]   .fuel[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 278px;\n  margin-left: 10px;\n}\n\n.board[_ngcontent-%COMP%]   .bat-v[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.m-left-10[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MotorBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-motor-board',
                templateUrl: './motor-board.component.html',
                styleUrls: ['./motor-board.component.scss'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]]
            }]
    }], function () { return [{ type: _shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"] }]; }, null); })();


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
/* harmony import */ var _main_board_main_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-board/main-board.component */ "uP7T");
/* harmony import */ var _motor_board_motor_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./motor-board/motor-board.component */ "RoBY");
/* harmony import */ var _engine_status_engine_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./engine-status/engine-status.component */ "DaAC");
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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 3, consts: [[4, "ngIf"], [1, "flex-col"], [1, "flex-row"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_loading_0_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-connection-parameters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-main-board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-motor-board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-engine-status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.httpService.requestInProgress));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _connection_parameters_connection_parameters_component__WEBPACK_IMPORTED_MODULE_3__["ConnectionParametersComponent"], _main_board_main_board_component__WEBPACK_IMPORTED_MODULE_4__["MainBoardComponent"], _motor_board_motor_board_component__WEBPACK_IMPORTED_MODULE_5__["MotorBoardComponent"], _engine_status_engine_status_component__WEBPACK_IMPORTED_MODULE_6__["EngineStatusComponent"], _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [""] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: 'app.component.html',
                styleUrls: ['app.component.scss']
            }]
    }], function () { return [{ type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }]; }, null); })();


/***/ }),

/***/ "VmXq":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/fuel/fuel.component.ts ***!
  \**********************************************************/
/*! exports provided: FuelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuelComponent", function() { return FuelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "height": a0 }; };
const _c1 = function (a0) { return { "bottom": a0 }; };
class FuelComponent {
    constructor(decimalPipe) {
        this.decimalPipe = decimalPipe;
        this.value = 0;
        this.max = 600;
        this.fuelMax = 600;
        this.fuelLvl = '0';
        this.fuelPerc = 0;
    }
    ngOnChanges() {
        this.fuelMax = this.max;
        this.fuelLvl = this.value.toString();
        if (+this.fuelLvl > this.fuelMax) {
            this.fuelLvl = this.fuelMax.toString();
        }
        if (+this.fuelLvl < 0) {
            this.fuelLvl = '0';
        }
        this.fuelPerc = (+this.fuelLvl / this.fuelMax) * 100;
    }
}
FuelComponent.ɵfac = function FuelComponent_Factory(t) { return new (t || FuelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"])); };
FuelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FuelComponent, selectors: [["app-fuel"]], inputs: { value: "value", max: "max" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 18, vars: 7, consts: [[1, "fuel-meter"], [2, "text-align", "center", "margin-bottom", "15px"], [1, "glass"], [1, "total", 2, "bottom", "0%"], [1, "total", 2, "bottom", "20%"], [1, "total", 2, "bottom", "45%"], [1, "total", 2, "bottom", "70%"], [1, "total", 2, "bottom", "95%"], [1, "amount", 3, "ngStyle"], [1, "value", 3, "ngStyle"], [1, "line"]], template: function FuelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "fuel left %");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "150");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "300");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "450");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "600");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.fuelPerc + "%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.fuelPerc - 4 + "%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.fuelLvl, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".fuel-meter[_ngcontent-%COMP%] {\n  width: 80px;\n  position: relative;\n}\n.fuel-meter[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%] {\n  height: 230px;\n  width: 40px;\n  position: relative;\n  display: block;\n  padding: 5px;\n  background: #e5e5e5;\n}\n.fuel-meter[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  background: #067707;\n  display: block;\n  width: 40px;\n  position: absolute;\n  bottom: 0;\n  z-index: 35;\n}\n.fuel-meter[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  font-size: 16px;\n  position: absolute;\n  z-index: 40;\n}\n.fuel-meter[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: red;\n  position: absolute;\n  right: -38px;\n}\n.fuel-meter[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 45px;\n  background-color: red;\n  display: inline-block;\n  z-index: 50;\n  position: relative;\n  margin-bottom: 3px;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FuelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-fuel',
                templateUrl: './fuel.component.html',
                styleUrls: ['./fuel.component.scss'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]]
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _shared_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/speed/speed.component */ "sLU7");
/* harmony import */ var angular_gauge_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-gauge-chart */ "Ceye");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _motor_board_motor_board_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./motor-board/motor-board.component */ "RoBY");
/* harmony import */ var _engine_status_engine_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./engine-status/engine-status.component */ "DaAC");
/* harmony import */ var _shared_components_termometer_termometer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/termometer/termometer.component */ "dLIe");
/* harmony import */ var _shared_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/fuel/fuel.component */ "VmXq");
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/components/loading/loading.component */ "fqV1");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            angular_gauge_chart__WEBPACK_IMPORTED_MODULE_6__["GaugeChartModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _connection_parameters_connection_parameters_component__WEBPACK_IMPORTED_MODULE_3__["ConnectionParametersComponent"],
        _main_board_main_board_component__WEBPACK_IMPORTED_MODULE_4__["MainBoardComponent"],
        _shared_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_5__["SpeedComponent"],
        _motor_board_motor_board_component__WEBPACK_IMPORTED_MODULE_9__["MotorBoardComponent"],
        _engine_status_engine_status_component__WEBPACK_IMPORTED_MODULE_10__["EngineStatusComponent"],
        _shared_components_termometer_termometer_component__WEBPACK_IMPORTED_MODULE_11__["TermometerComponent"],
        _shared_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_12__["FuelComponent"],
        _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        angular_gauge_chart__WEBPACK_IMPORTED_MODULE_6__["GaugeChartModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _connection_parameters_connection_parameters_component__WEBPACK_IMPORTED_MODULE_3__["ConnectionParametersComponent"],
                    _main_board_main_board_component__WEBPACK_IMPORTED_MODULE_4__["MainBoardComponent"],
                    _shared_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_5__["SpeedComponent"],
                    _motor_board_motor_board_component__WEBPACK_IMPORTED_MODULE_9__["MotorBoardComponent"],
                    _engine_status_engine_status_component__WEBPACK_IMPORTED_MODULE_10__["EngineStatusComponent"],
                    _shared_components_termometer_termometer_component__WEBPACK_IMPORTED_MODULE_11__["TermometerComponent"],
                    _shared_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_12__["FuelComponent"],
                    _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_13__["LoadingComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    angular_gauge_chart__WEBPACK_IMPORTED_MODULE_6__["GaugeChartModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([]),
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
        this.defStation = '?';
        this.defName = 'TELYS';
        this.defGeo = '?';
        this.defUser = '?';
        this.baseStationName = '';
        this.deviceName = '';
        this.geographicalPosition = '';
        this.baseStationName = this.defStation;
        this.deviceName = this.defName;
        this.geographicalPosition = this.defGeo;
        this.route.queryParams.subscribe(params => {
            try {
                this.baseStationName = params['tit'] || this.defStation;
                this.deviceName = params['name'] || this.defName;
                this.geographicalPosition = params['geo'] || this.defGeo;
                this.user = params['user'] || this.defUser;
                this.httpService.user = this.user;
            }
            catch (e) { }
        });
    }
    sendRequest() {
        this.httpService.getAllData();
    }
}
ConnectionParametersComponent.ɵfac = function ConnectionParametersComponent_Factory(t) { return new (t || ConnectionParametersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ConnectionParametersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConnectionParametersComponent, selectors: [["app-connection-parameters"]], decls: 21, vars: 4, consts: [[1, "connection", "wrap"], [1, "title"], [1, "row"], [1, "left"], [1, "parameter-label"], ["type", "text", 1, "parameter-value", 3, "value", "valueChange"], [1, "right"], [1, "btn-wrap", "request"], [1, "btn", 3, "click"], ["type", "text", 1, "parameter-value", "full-width", 3, "value", "valueChange"]], template: function ConnectionParametersComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: [".connection[_ngcontent-%COMP%] {\n  width: 300px;\n  margin: 15px 10px;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.row[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  min-width: 195px;\n}\n\n.row[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.row[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n}\n\n.row[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .request[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.row[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%] {\n  width: 98px;\n  height: 52px;\n  margin: 3px;\n  border: 3px solid black;\n  background-color: #E7E7E7;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.row[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 84px;\n  height: 28px;\n  border: 1px solid black;\n  border-radius: 8px;\n  margin: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConnectionParametersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-connection-parameters',
                templateUrl: 'app-connection-parameters.html',
                styleUrls: ['app-connection-parameters.scss']
            }]
    }], function () { return [{ type: _shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "dLIe":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/termometer/termometer.component.ts ***!
  \**********************************************************************/
/*! exports provided: TermometerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermometerComponent", function() { return TermometerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { "height": a0 }; };
class TermometerComponent {
    constructor() {
        this.value = 0;
    }
    ngOnInit() {
    }
}
TermometerComponent.ɵfac = function TermometerComponent_Factory(t) { return new (t || TermometerComponent)(); };
TermometerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TermometerComponent, selectors: [["app-termometer"]], inputs: { value: "value" }, decls: 19, vars: 3, consts: [[1, "donation-meter"], [2, "text-align", "center"], [1, "glass"], [1, "total", 2, "bottom", "0%"], [1, "total", 2, "bottom", "20%"], [1, "total", 2, "bottom", "45%"], [1, "total", 2, "bottom", "70%"], [1, "total", 2, "bottom", "95%"], [1, "amount", 3, "ngStyle"], [1, "bulb"], [1, "red-circle"], [1, "filler"]], template: function TermometerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00B0C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "35");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "70");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "105");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "140");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.value + "%"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".donation-meter[_ngcontent-%COMP%] {\n  width: 80px;\n  margin-top: 20px;\n}\n.donation-meter[_ngcontent-%COMP%]   .glass[_ngcontent-%COMP%] {\n  background: #e5e5e5;\n  border-radius: 100px 100px 0 0;\n  display: block;\n  height: 180px;\n  margin: 0 35px 10px;\n  padding: 5px;\n  position: relative;\n  width: 6px;\n}\n.donation-meter[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  background: #067707;\n  border-radius: 100px;\n  display: block;\n  width: 6px;\n  position: absolute;\n  bottom: 5px;\n  z-index: 35;\n}\n.donation-meter[_ngcontent-%COMP%]   .total[_ngcontent-%COMP%] {\n  font-size: 16px;\n  position: absolute;\n  right: 26px;\n}\n.bulb[_ngcontent-%COMP%] {\n  background: #e5e5e5;\n  border-radius: 100px;\n  display: block;\n  height: 20px;\n  margin: 0 35px 10px;\n  padding: 5px;\n  position: relative;\n  top: -20px;\n  right: 7px;\n  width: 20px;\n}\n.bulb[_ngcontent-%COMP%]   .red-circle[_ngcontent-%COMP%] {\n  background: #067707;\n  border-radius: 100px;\n  display: block;\n  height: 20px;\n  width: 20px;\n}\n.bulb[_ngcontent-%COMP%]   .filler[_ngcontent-%COMP%] {\n  background: #067707;\n  border-radius: 100px 100px 0 0;\n  display: block;\n  height: 10px;\n  width: 6px;\n  position: relative;\n  top: -25px;\n  right: -7px;\n  z-index: 30;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermometerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-termometer',
                templateUrl: './termometer.component.html',
                styleUrls: ['./termometer.component.scss']
            }]
    }], function () { return []; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
        // generatorSpeeds$ = new ReplaySubject(1);
        this.controlPanel$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.engOpHours$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.engWorkTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.fuelLvl$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.waterC$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.batV$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.oilP$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.engRPM$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.speeds$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    parseResponse(response) {
        let res = response.result;
        this.controlPanel$.next(this.checkValue(res['0203005e0001e5eb']));
        this.engOpHours$.next(this.checkValue(res['020300510001d5e8']));
        this.engWorkTime$.next(this.checkValue(res['0203003d000115f5']));
        this.fuelLvl$.next(this.checkValue(res['020300c2000125c5']));
        this.waterC$.next(this.checkValue(res['0203003f0001b435']));
        this.batV$.next(this.checkValue(res['02030043000175ed']));
        this.oilP$.next(this.checkValue(res['020300c8000105c7']));
        this.engRPM$.next(this.checkValue(res['020300420001242d']));
        this.speeds$.next({
            "s1": this.checkValue(res['02030032000125f6']),
            "s2": this.checkValue(res['0203003300017436']),
            "s3": this.checkValue(res['020300340001c5f7']),
            "s4": this.checkValue(res['0203003500019437']),
            "s5": this.checkValue(res['0203003600016437']),
            "s6": this.checkValue(res['02030037000135f7']),
            "s7": this.checkValue(res['0203003c00014435']),
            "s8": this.checkValue(res['02030038000105f4']),
            "s9": this.checkValue(res['0203003900015434']),
            "s10": this.checkValue(res['0203003a0001a434']),
            "s11": this.checkValue(res['0203003b0001f5f4']),
        });
    }
    checkValue(val) {
        return val == '' || !val ? 0 : val;
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

/***/ "sLU7":
/*!************************************************************!*\
  !*** ./src/app/shared/components/speed/speed.component.ts ***!
  \************************************************************/
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





function MainBoardComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} }
function MainBoardComponent_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
} }
function MainBoardComponent_img_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
} }
function MainBoardComponent_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
} }
function MainBoardComponent_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 26);
} }
const _c0 = function (a0) { return { "active": a0 }; };
class MainBoardComponent {
    constructor(httpService, modelService) {
        this.httpService = httpService;
        this.modelService = modelService;
        this.isActive = {
            test: false,
            auto: false,
        };
        this.engineStatus = '';
        this.mangen = {
            mains: false,
            gen: false,
        };
        this.lamp = {
            l1: false,
            l2: false,
            l3: false,
        };
        this.switch = {
            start: false,
            stop: false
        };
        this.modelService.speeds$.subscribe(status => {
            this.lamp.l1 = +status['s4'] > 0;
            this.lamp.l2 = +status['s5'] > 0;
            this.lamp.l3 = +status['s6'] > 0;
        });
        this.modelService.controlPanel$.subscribe(status => {
            this.isActive.auto = false;
            this.isActive.test = false;
            this.switch.start = false;
            this.switch.stop = false;
            if (status == '1') {
                this.isActive.auto = true;
            }
            if (status == '2') {
                this.isActive.test = true;
            }
            if (status == '3') {
                this.trigerSwitch('stop');
            }
            if (status == '4') {
                this.trigerSwitch('start');
            }
            // if (status == '5') {
            //   this.isActive.reset = true;
            // }
        });
    }
    buttonClick(name) {
        if (name === 'test' && !this.isActive.test) {
            this.sendAction('0206005f0003F9EA', 'TEST', this.setButtonState.bind(this, 'test'));
        }
        if (name === 'auto' && !this.isActive.auto) {
            this.sendAction('0206005f0001782b', 'AUTO', this.setButtonState.bind(this, 'auto'));
        }
        if (name === 'start' && !this.switch.start) {
            this.sendAction('0206005f000579e8', 'START', this.trigerSwitch.bind(this, 'start'));
        }
        if (name === 'stop' && !this.switch.stop) {
            this.sendAction('0206005f0002382A', 'STOP', this.trigerSwitch.bind(this, 'stop'));
        }
        if (name === 'mains' && !this.mangen.mains) {
            this.sendAction('0206005f000979ed', 'MAINS', this.switchManGen.bind(this, 'mains'));
        }
        if (name === 'gen' && !this.mangen.gen) {
            this.sendAction('0206005f0008b82d', 'GEN', this.switchManGen.bind(this, 'gen'));
        }
        if (name === 'reset') {
            this.sendAction('0206005f0004B828', 'RESET', this.setButtonState.bind(this, 'reset'));
        }
    }
    setButtonState(trueKey) {
        Object.keys(this.isActive).forEach(element => {
            this.isActive[element] = false;
        });
    }
    trigerSwitch(buttonName) {
        this.setButtonState('');
        if (buttonName == 'start') {
            this.switch.start = true;
            this.switch.stop = false;
        }
        if (buttonName == 'stop') {
            this.switch.stop = true;
            this.switch.start = false;
        }
    }
    switchManGen(buttonName) {
        if (buttonName == 'gen') {
            this.mangen.gen = true;
            this.mangen.mains = false;
        }
        if (buttonName == 'mains') {
            this.mangen.mains = true;
            this.mangen.gen = false;
        }
    }
    sendAction(act, button, callback) {
        this.httpService.sendButtonAction(act, button)
            .subscribe((data) => {
            if (callback) {
                callback();
            }
            if (this.httpService.enableLog) {
                console.log('data', data);
            }
            setTimeout(() => {
                this.httpService.getAllData();
            }, 3000);
        }, (error) => {
            // if (callback) {
            //   callback();
            // }
            setTimeout(() => {
                this.httpService.getAllData();
            }, 3000);
        });
    }
}
MainBoardComponent.ɵfac = function MainBoardComponent_Factory(t) { return new (t || MainBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"])); };
MainBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainBoardComponent, selectors: [["app-main-board"]], decls: 33, vars: 23, consts: [[1, "board-wrapper"], [1, "flex-column", "full-width"], [1, "flex-row", "main-img"], ["src", "assets/telys.png", "alt", "", 1, "image"], [1, "btn-wrap", "mains-btn"], [1, "btn", "mains", 3, "ngClass", "click"], [1, "btn-wrap", "gen-btn"], [1, "btn", "gen", 3, "ngClass", "click"], ["class", "icon l1-icon", "src", "assets/green.png", "alt", "", 4, "ngIf"], ["class", "icon l2-icon", "src", "assets/green.png", "alt", "", 4, "ngIf"], ["class", "icon l3-icon", "src", "assets/green.png", "alt", "", 4, "ngIf"], ["class", "icon mains-icon", "src", "assets/yellow.png", "alt", "", 4, "ngIf"], ["class", "icon gen-icon", "src", "assets/yellow.png", "alt", "", 4, "ngIf"], [1, "flex-row", "btns-wrap"], [1, "flex-column", "buttons"], [1, "btn-block"], [1, "btn-wrap"], [1, "btn", "auto", 3, "ngClass", "click"], [1, "btn", "test", 3, "ngClass", "click"], [1, "btn", 3, "click"], [1, "btn", "stop", 3, "ngClass", "click"], [1, "btn", "start", 3, "ngClass", "click"], ["src", "assets/green.png", "alt", "", 1, "icon", "l1-icon"], ["src", "assets/green.png", "alt", "", 1, "icon", "l2-icon"], ["src", "assets/green.png", "alt", "", 1, "icon", "l3-icon"], ["src", "assets/yellow.png", "alt", "", 1, "icon", "mains-icon"], ["src", "assets/yellow.png", "alt", "", 1, "icon", "gen-icon"]], template: function MainBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_5_listener() { return ctx.buttonClick("mains"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "K1 MAINS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_8_listener() { return ctx.buttonClick("gen"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "K2 GEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MainBoardComponent_img_10_Template, 1, 0, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MainBoardComponent_img_11_Template, 1, 0, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MainBoardComponent_img_12_Template, 1, 0, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MainBoardComponent_img_13_Template, 1, 0, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MainBoardComponent_img_14_Template, 1, 0, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_19_listener() { return ctx.buttonClick("auto"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "AUTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_22_listener() { return ctx.buttonClick("test"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "TEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_25_listener() { return ctx.buttonClick("reset"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "RESET");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_28_listener() { return ctx.buttonClick("stop"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "STOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_31_listener() { return ctx.buttonClick("start"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "START");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.mangen.mains));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.mangen.gen));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lamp.l1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lamp.l2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.lamp.l3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mangen.mains);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mangen.gen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.isActive.auto));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.isActive.test));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.switch.stop));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.switch.start));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".board-wrapper[_ngcontent-%COMP%] {\n  width: 500px;\n  margin-left: 10px;\n  display: flex;\n  flex-direction: row;\n}\n.board-wrapper[_ngcontent-%COMP%]   .main-img[_ngcontent-%COMP%] {\n  position: relative;\n}\n.board-wrapper[_ngcontent-%COMP%]   .main-img[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  padding-left: 35px;\n}\n.board-wrapper[_ngcontent-%COMP%]   .gen-btn[_ngcontent-%COMP%], .board-wrapper[_ngcontent-%COMP%]   .mains-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 265px;\n  text-align: center;\n}\n.board-wrapper[_ngcontent-%COMP%]   .gen-btn[_ngcontent-%COMP%] {\n  left: 394px;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n  border: 1px solid gray;\n  padding: 5px;\n  background-color: #0A3E7F;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%] {\n  width: 74px;\n  height: 74px;\n  margin: 3px;\n  border: 3px solid black;\n  background-color: #E7E7E7;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n  border: 1px solid black;\n  border-radius: 8px;\n  margin: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.start[_ngcontent-%COMP%] {\n  background-color: #008604;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.stop[_ngcontent-%COMP%], .board-wrapper[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.off[_ngcontent-%COMP%] {\n  background-color: #FA0305;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.auto[_ngcontent-%COMP%], .board-wrapper[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.man[_ngcontent-%COMP%], .board-wrapper[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.test[_ngcontent-%COMP%], .board-wrapper[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.mains[_ngcontent-%COMP%], .board-wrapper[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.gen[_ngcontent-%COMP%] {\n  background-color: #FCFE81;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btns-wrap[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-top: 30px;\n}\n.board-wrapper[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  width: 290px;\n}\n.icon[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n}\n.a-icon[_ngcontent-%COMP%] {\n  top: 124px;\n  left: 38px;\n}\n.b-icon[_ngcontent-%COMP%] {\n  top: 124px;\n  left: 82px;\n}\n.c-icon[_ngcontent-%COMP%] {\n  top: 124px;\n  left: 128px;\n}\n.l1-icon[_ngcontent-%COMP%] {\n  top: 124px;\n  left: 298px;\n}\n.l2-icon[_ngcontent-%COMP%] {\n  top: 124px;\n  left: 343px;\n}\n.l3-icon[_ngcontent-%COMP%] {\n  top: 124px;\n  left: 389px;\n}\n.mains-icon[_ngcontent-%COMP%] {\n  top: 285px;\n  left: 90px;\n}\n.gen-icon[_ngcontent-%COMP%] {\n  top: 285px;\n  left: 348px;\n}"] });
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