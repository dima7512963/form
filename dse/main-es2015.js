(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/oleksiida/projects/RCM-Lovato/git/new-dse/src/main.ts */"zUnb");


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
            this.s1 = +status['s1'] / 10;
            this.s2 = +status['s2'] / 10;
            this.s3 = +status['s3'] / 10;
            this.s4 = +status['s4'] / 10;
            this.s5 = +status['s5'] / 10;
            this.s6 = +status['s6'] / 10;
            this.s7 = +status['s7'] / 10;
            this.s8 = +status['s8'] / 10;
            this.s9 = +status['s9'] / 10;
            this.s10 = +status['s10'] / 10;
            this.s11 = +status['s11'] / 10;
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s1)("max", 600)("label", "Generator L1-N voltage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s2)("max", 600)("label", "Generator L2-N voltage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s3)("max", 600)("label", "Generator L3-N voltage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s4)("max", 600)("label", "Generator L1-L2 voltage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s5)("max", 600)("label", "Generator L2-L3 voltage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s6)("max", 600)("label", "Generator L3-L1 voltage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s7)("max", 100)("label", "Generator frequency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s8)("max", 600)("label", "Generator L1 current");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s9)("max", 600)("label", "Generator L2 current");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s10)("max", 600)("label", "Generator L3 current");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.s11)("max", 600)("label", "Generator earth current");
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
        this.ObjectItemID = '';
        this.requestInProgress = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.defIp = '10.228.75.77';
        this.defPort = 2007;
        this.ip = '';
        this.port = 0;
        this.baudrate = 0;
        this.type = "";
        this.unit = 0;
        this.backendUrl = 'http://localhost:9092';
        this.reportUrl = 'https://ioms.kyivstar.ua/api/v1/object-items';
        this.httpClient.get('assets/config.json').subscribe((config) => {
            this.backendUrl = config.backendUrl || 'http://localhost:9092';
            this.enableLog = config.enableLog;
            this.reportUrl = config.reportUrl || 'https://ioms.kyivstar.ua/api/v1/object-items';
        });
        this.route.queryParams.subscribe(params => {
            try {
                this.ip = params['ip'] || this.defIp;
                this.port = +params['port'] || this.defPort;
                this.baudrate = +params['baudrate'] || this.defBaudrate;
                this.type = params['type'] || this.defType;
                this.unit = +params['unit'] || this.defUnit;
                this.ObjectItemID = params['ObjectItemID'] || '';
            }
            catch (e) {
                this.ip = this.defIp;
                this.port = this.defPort;
                this.baudrate = this.defBaudrate;
                this.type = this.defType;
                this.unit = this.defUnit;
            }
        });
    }
    sendButtonAction(action, button) {
        this.requestInProgress.next(true);
        this.reportAction(button);
        return this.httpClient.post(`${this.backendUrl}/socket`, this.getPostBody({ "send": action }));
    }
    getPostBody(actions) {
        return Object.assign({ "token": "ef833caeec31f5b99a8fc997c1be3dbd", "ip": this.ip, "port": this.port }, actions);
    }
    getAllData() {
        this.requestInProgress.next(true);
        this.reportAction('REQUEST');
        const allkeys = [
            '0401',
            '0402',
            '0403',
            '0400',
            '0405',
            '0406',
            '0409',
            '040B',
            '040D',
            '040F',
            '0411',
            '0413',
            '0407',
            '0415',
            '0417',
            '0419',
            '041B',
            '0304',
        ];
        const allObj = {
            baudrate: this.baudrate,
            type: this.type,
            unit: this.unit,
            registers: [{ "reg": [...allkeys] }]
        };
        this.httpClient.post(`${this.backendUrl}/read`, this.getPostBody(allObj))
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
            //     result: [
            //       {
            //         values: {
            //           '0401': '12345',
            //           '0402': '23456',
            //           '0403': '65530',
            //           '0400': '45678',
            //           '0405': '1233',
            //           '0406': '1234',
            //           '0409': '1111',
            //           '040B': '2222',
            //           '040D': '3333',
            //           '040F': 'errror',
            //           '0411': '5555',
            //           '0413': '6666',
            //           '0407': '777',
            //           '0415': '8888',
            //           '0417': '9999',
            //           '0419': '1010',
            //           '041B': '1111',
            //           '0304': '5',
            //         }
            //       }
            //     ]
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
        this.oilP = 0;
        this.engBatV = 0;
        this.engSpeed = 0;
        this.coolantTemp = 0;
        this.coolantTempText = '0 0 0 C';
        this.oilTemp = 0;
        this.oilTempText = '0 0 0 C';
        this.fuelLvl = 0;
        this.controlPanel = '';
    }
    ngOnInit() {
        this.modelService.oilP$.subscribe((status) => this.oilP = +(+status / 1000).toFixed(2));
        this.modelService.batV$.subscribe((status) => this.engBatV = +status / 10);
        this.modelService.engSpeed$.subscribe((status) => this.engSpeed = +status);
        this.modelService.coolantTemp$.subscribe((status) => {
            this.coolantTemp = +(+status / 1000).toFixed(0);
            this.coolantTempText = [...this.coolantTemp.toString(), 'C'].join(' ');
        });
        this.modelService.oilTemp$.subscribe((status) => {
            this.oilTemp = +(+status / 1000).toFixed(0);
            this.oilTempText = [...this.oilTemp.toString(), 'C'].join(' ');
        });
        this.modelService.fuelLvl$.subscribe((status) => this.fuelLvl = +(+status * 0.0078125 - 251).toFixed(1));
        this.modelService.controlPanel$.subscribe((status) => this.controlPanel = this.checkStatus(+status));
    }
    checkStatus(status) {
        switch (status) {
            case 0:
                return 'Stop mode';
            case 1:
                return 'Auto mode';
            case 2:
                return 'Manual mode';
            case 3:
                return 'Test on load mode';
            case 4:
                return 'Auto with manual restore mode/Prohibit Return';
            case 5:
                return 'User configuration mode';
            case 6:
                return 'Test off load mode';
            case 7:
                return 'Off Mode';
            default:
                return '';
        }
    }
}
MotorBoardComponent.ɵfac = function MotorBoardComponent_Factory(t) { return new (t || MotorBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"])); };
MotorBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MotorBoardComponent, selectors: [["app-motor-board"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]])], decls: 28, vars: 16, consts: [[1, "board"], [1, "flex-row", "m-top-7"], [1, "flex-col", "left"], [1, "wrap", "p5", 2, "padding-top", "0", "padding-bottom", "8px"], [3, "value", "max", "label"], [1, "flex-col", "right"], [1, "flex-row"], [1, "term", "wrap", "m-left-10"], [1, "title"], ["type", "text", 1, "parameter-value", "digital-input", 3, "value", "valueChange"], [3, "value"], [1, "fuel", "wrap", "m-left-10"], [3, "value", "max"], [1, "fex-row", "m-top-10", "m-left-10"], [1, "e-status", "wrap"]], template: function MotorBoardComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Coolant temperature:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function MotorBoardComponent_Template_input_valueChange_12_listener($event) { return ctx.coolantTempText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "app-termometer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Oil temperature:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function MotorBoardComponent_Template_input_valueChange_17_listener($event) { return ctx.oilTempText = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "app-termometer", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Fuel level:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "app-fuel", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Control mode:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function MotorBoardComponent_Template_input_valueChange_27_listener($event) { return ctx.controlPanel = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.oilP)("max", 1000)("label", "Oil pressure");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.engBatV)("max", 50)("label", "Engine Battery voltage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.engSpeed)("max", 3000)("label", "Engine speed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.coolantTempText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.coolantTemp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.oilTempText);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.oilTemp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.fuelLvl)("max", 600);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.controlPanel);
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
        this.defName = 'DSE';
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "25");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "75");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "100");
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
        this.coolantTemp$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.oilTemp$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.fuelLvl$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.oilP$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.batV$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.engSpeed$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.speeds$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
    }
    parseResponse(response) {
        let res = response.result[0].values;
        this.controlPanel$.next(this.checkValue(res['0304']));
        this.coolantTemp$.next(this.checkValue(res['0401']));
        this.oilTemp$.next(this.checkValue(res['0402']));
        this.fuelLvl$.next(this.checkValue(res['0403']));
        this.oilP$.next(this.checkValue(res['0400']));
        this.batV$.next(this.checkValue(res['0405']));
        this.engSpeed$.next(this.checkValue(res['0406']));
        this.speeds$.next({
            "s1": this.checkValue(res['0409']),
            "s2": this.checkValue(res['040B']),
            "s3": this.checkValue(res['040D']),
            "s4": this.checkValue(res['040F']),
            "s5": this.checkValue(res['0411']),
            "s6": this.checkValue(res['0413']),
            "s7": this.checkValue(res['0407']),
            "s8": this.checkValue(res['0415']),
            "s9": this.checkValue(res['0417']),
            "s10": this.checkValue(res['0419']),
            "s11": this.checkValue(res['041B']),
        });
    }
    checkValue(val) {
        return val == '' || !+val ? 0 : val;
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
} }
function MainBoardComponent_img_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} }
function MainBoardComponent_img_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 23);
} }
function MainBoardComponent_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 24);
} }
function MainBoardComponent_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 25);
} }
const _c0 = function (a0) { return { "active": a0 }; };
class MainBoardComponent {
    constructor(httpService, modelService) {
        this.httpService = httpService;
        this.modelService = modelService;
        this.isActive = {
            manMode: false,
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
            this.lamp.l1 = +status['s8'] > 0;
            this.lamp.l2 = +status['s9'] > 0;
            this.lamp.l3 = +status['s10'] > 0;
        });
        this.modelService.controlPanel$.subscribe(status => {
            this.isActive.auto = false;
            this.isActive.manMode = false;
            this.switch.start = false;
            this.switch.stop = false;
            if (status == '0') {
                this.trigerSwitch('stop');
            }
            if (status == '1') {
                this.isActive.auto = true;
            }
            if (status == '2') {
                this.isActive.manMode = true;
            }
            // if (status == '') {
            //   this.trigerSwitch('start');
            // }
            // if (status == '') {
            //   this.isActive.reset = true;
            // }
        });
    }
    buttonClick(name) {
        if (name === 'manMode' && !this.isActive.manMode) {
            this.sendAction('0a1010080002048b7674893675', 'MANUAL', this.setButtonState.bind(this, 'manMode'));
        }
        if (name === 'auto' && !this.isActive.auto) {
            this.sendAction('0a1010080002048b75748a8674', 'AUTO', this.setButtonState.bind(this, 'auto'));
        }
        if (name === 'start' && !this.switch.start) {
            this.sendAction('0a1010080002048b7974864672', 'START', this.trigerSwitch.bind(this, 'start'));
        }
        if (name === 'stop' && !this.switch.stop) {
            this.sendAction('0a1010080002048b74748b1674', 'STOP', this.trigerSwitch.bind(this, 'stop'));
        }
        if (name === 'mains' && !this.mangen.mains) {
            this.sendAction('0a1010080002048b74748b1674', 'MAINS', this.switchManGen.bind(this, 'mains'));
        }
        if (name === 'gen' && !this.mangen.gen) {
            this.sendAction('0a1010080002048b7d74820670', 'GEN', this.switchManGen.bind(this, 'gen'));
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
MainBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainBoardComponent, selectors: [["app-main-board"]], decls: 30, vars: 23, consts: [[1, "board-wrapper"], [1, "flex-column", "full-width"], [1, "flex-row", "main-img"], ["src", "assets/main.png", "alt", "", 1, "image"], [1, "btn-wrap", "mains-btn"], [1, "btn", "mains", 3, "ngClass", "click"], [1, "btn-wrap", "gen-btn"], [1, "btn", "gen", 3, "ngClass", "click"], ["class", "icon l1-icon", "src", "assets/green.png", "alt", "", 4, "ngIf"], ["class", "icon l2-icon", "src", "assets/green.png", "alt", "", 4, "ngIf"], ["class", "icon l3-icon", "src", "assets/green.png", "alt", "", 4, "ngIf"], ["class", "icon mains-icon", "src", "assets/yellow.png", "alt", "", 4, "ngIf"], ["class", "icon gen-icon", "src", "assets/yellow.png", "alt", "", 4, "ngIf"], [1, "flex-row", "btns-wrap"], [1, "flex-column", "buttons"], [1, "btn-block"], [1, "btn-wrap"], [1, "btn", "auto", 3, "ngClass", "click"], [1, "btn", "manual-mode", 2, "font-size", "13px", 3, "ngClass", "click"], [1, "btn", "stop", 3, "ngClass", "click"], [1, "btn", "start", 3, "ngClass", "click"], ["src", "assets/green.png", "alt", "", 1, "icon", "l1-icon"], ["src", "assets/green.png", "alt", "", 1, "icon", "l2-icon"], ["src", "assets/green.png", "alt", "", 1, "icon", "l3-icon"], ["src", "assets/yellow.png", "alt", "", 1, "icon", "mains-icon"], ["src", "assets/yellow.png", "alt", "", 1, "icon", "gen-icon"]], template: function MainBoardComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_22_listener() { return ctx.buttonClick("manMode"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "MANUAL MODE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_25_listener() { return ctx.buttonClick("stop"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "STOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_28_listener() { return ctx.buttonClick("start"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "START");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.isActive.manMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c0, ctx.switch.stop));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.switch.start));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".board-wrapper[_ngcontent-%COMP%] {\n  width: 500px;\n  margin-left: 10px;\n  display: flex;\n  flex-direction: row;\n}\n.board-wrapper[_ngcontent-%COMP%]   .main-img[_ngcontent-%COMP%] {\n  position: relative;\n}\n.board-wrapper[_ngcontent-%COMP%]   .main-img[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  padding-left: 35px;\n}\n.board-wrapper[_ngcontent-%COMP%]   .gen-btn[_ngcontent-%COMP%], .board-wrapper[_ngcontent-%COMP%]   .mains-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 265px;\n  text-align: center;\n}\n.board-wrapper[_ngcontent-%COMP%]   .gen-btn[_ngcontent-%COMP%] {\n  left: 394px;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n  border: 1px solid gray;\n  padding: 5px;\n  background-color: #0A3E7F;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%] {\n  width: 74px;\n  height: 74px;\n  margin: 3px;\n  border: 3px solid black;\n  background-color: #E7E7E7;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n  border: 1px solid black;\n  border-radius: 8px;\n  margin: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.start[_ngcontent-%COMP%] {\n  background-color: #008604;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.stop[_ngcontent-%COMP%], .board-wrapper[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.off[_ngcontent-%COMP%] {\n  background-color: #FA0305;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.auto[_ngcontent-%COMP%], .board-wrapper[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.manual-mode[_ngcontent-%COMP%], .board-wrapper[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.test[_ngcontent-%COMP%], .board-wrapper[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.mains[_ngcontent-%COMP%], .board-wrapper[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.gen[_ngcontent-%COMP%] {\n  background-color: #FCFE81;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btns-wrap[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-top: 30px;\n}\n.board-wrapper[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n  width: 350px;\n}\n.icon[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n}\n.a-icon[_ngcontent-%COMP%] {\n  top: 124px;\n  left: 38px;\n}\n.b-icon[_ngcontent-%COMP%] {\n  top: 124px;\n  left: 82px;\n}\n.c-icon[_ngcontent-%COMP%] {\n  top: 124px;\n  left: 128px;\n}\n.l1-icon[_ngcontent-%COMP%] {\n  top: 124px;\n  left: 298px;\n}\n.l2-icon[_ngcontent-%COMP%] {\n  top: 124px;\n  left: 343px;\n}\n.l3-icon[_ngcontent-%COMP%] {\n  top: 124px;\n  left: 389px;\n}\n.mains-icon[_ngcontent-%COMP%] {\n  top: 285px;\n  left: 90px;\n}\n.gen-icon[_ngcontent-%COMP%] {\n  top: 285px;\n  left: 348px;\n}"] });
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