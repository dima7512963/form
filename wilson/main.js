(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/oleksiida/projects/RCM-Lovato/git/new-wilson/src/main.ts */"zUnb");


/***/ }),

/***/ "4oE/":
/*!*****************************************************************************!*\
  !*** ./src/app/bottom-component/bottom-wrapper/bottom-wrapper.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BottomWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomWrapperComponent", function() { return BottomWrapperComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/model/model.service */ "mZMu");
/* harmony import */ var _shared_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/speed/speed.component */ "sLU7");





class BottomWrapperComponent {
    constructor(modelService) {
        this.modelService = modelService;
        this.r0063 = 0;
        this.r0064 = 0;
        this.r006f = 0;
        this.r006e = 0;
        this.r008F = 0;
        this.r0089 = 0;
        this.r0069 = 0;
    }
    ngOnInit() {
        this.modelService.generatorStatus$.subscribe(status => {
            this.r0063 = +status['0063'];
            this.r0064 = +status['0064'];
            this.r006f = +status['006f'];
            this.r006e = +status['006e'];
            this.r008F = +status['008F'];
            this.r0089 = +status['0089'] - 22980;
            this.r0069 = +status['0069'] - 23139;
            if (this.r0089 < 0) {
                this.r0089 = 0;
            }
            if (this.r0069 < 0) {
                this.r0069 = 0;
            }
        });
    }
}
BottomWrapperComponent.ɵfac = function BottomWrapperComponent_Factory(t) { return new (t || BottomWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"])); };
BottomWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BottomWrapperComponent, selectors: [["app-bottom-wrapper"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]])], decls: 28, vars: 18, consts: [[1, "generator", "wrap", "space", "m0"], [1, "title"], [1, "flex-col"], [1, "flex-row"], [1, "wrap", "p5"], [3, "value", "max", "label"], [1, "flex-row", "m-top-15", "bot-row"], [1, "en-op-h", "wrap"], ["type", "text", 1, "parameter-value", "digital-input", 2, "width", "100%", 3, "value", "valueChange"], ["type", "text", 1, "parameter-value", "digital-input", 2, "width", "95%", 3, "value", "valueChange"]], template: function BottomWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Generator status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-speed", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-speed", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-speed", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "app-speed", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "app-speed", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "TOTAL KW HOURS EXPORT:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function BottomWrapperComponent_Template_input_valueChange_19_listener($event) { return ctx.r008F = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "TOTAL APPARENT POWER:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function BottomWrapperComponent_Template_input_valueChange_23_listener($event) { return ctx.r0089 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "TOTAL REAL POWER:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function BottomWrapperComponent_Template_input_valueChange_27_listener($event) { return ctx.r0069 = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.r0063)("max", 300)("label", "VOLTAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.r0064)("max", 100)("label", "AVERAGE AC RMS CURRENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.r006f)("max", 100)("label", "PHASE B AC RMS CURRENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.r006e)("max", 100)("label", "PHASE A AC RMS CURRENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.r006e)("max", 100)("label", "PHASE C AC RMS CURRENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.r008F);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.r0089);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.r0069);
    } }, directives: [_shared_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_3__["SpeedComponent"]], styles: [".generator[_ngcontent-%COMP%] {\n  width: 950px;\n}\n.generator[_ngcontent-%COMP%]   .p5[_ngcontent-%COMP%] {\n  padding: 8px;\n  margin: 5px;\n}\n.m0[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n.bot-row[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BottomWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-bottom-wrapper',
                templateUrl: './bottom-wrapper.component.html',
                styleUrls: ['./bottom-wrapper.component.scss'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]]
            }]
    }], function () { return [{ type: src_app_shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"] }]; }, null); })();


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
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/Subject */ "ds6q");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _model_model_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/model.service */ "mZMu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class HttpService {
    constructor(httpClient, modelService, route) {
        this.httpClient = httpClient;
        this.modelService = modelService;
        this.route = route;
        this.backendUrl = '';
        this.reportUrl = '';
        this.enableLog = false;
        this.user = '';
        this.form = '';
        this.requestInProgress = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.ip = '10.228.10.193';
        this.port = 2008;
        this.type = '1';
        this.backendUrl = 'http://10.49.199.234:9092';
        this.reportUrl = 'http://127.0.0.1:9092';
        this.httpClient.get('assets/config.json').subscribe((config) => {
            this.backendUrl = config.backendUrl;
            this.enableLog = config.enableLog;
            this.reportUrl = config.reportUrl;
        });
        this.route.queryParams.subscribe(params => {
            try {
                this.ip = params['ip'] || '10.228.10.193';
                this.port = +params['port'] || 2008;
                this.type = params['type'] || '1';
            }
            catch (e) { }
        });
    }
    sendButtonAction(action, button) {
        const send = {
            "send": action
        };
        this.requestInProgress.next(true);
        this.reportAction(button);
        return this.httpClient.post(`${this.backendUrl}/socket`, this.getPostBody(send));
    }
    getPostBody(actions) {
        return Object.assign({ "token": "ef833caeec31f5b99a8fc997c1be3dbd", "ip": this.ip, "port": this.port }, actions);
    }
    getAllData() {
        this.requestInProgress.next(true);
        const allkeys = {
            "registers": [
                {
                    "reg": [
                        "0065",
                        "00C9",
                        "0323",
                        "00C7",
                        "00C8",
                        "00CA",
                        "012C",
                        "041c",
                        '0063',
                        '00cb',
                        '0064',
                        '006f',
                        '006e',
                        '008F',
                        '0089',
                        '0069',
                    ]
                }
            ],
            "type": this.type,
        };
        this.reportAction('REQUEST');
        this.httpClient.post(`${this.backendUrl}/read`, this.getPostBody(allkeys))
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
            //   let x = {
            //     result: [
            //       {
            //         values: {
            //           "0065": 6656,
            //           "00C9": 258,
            //           "0323": 65535,
            //           "00C7": 1810,
            //           "00C8": 9332,
            //           "00CA": 9792,
            //           "012C": 1,
            //           "041c": 3,
            //           '0063': '230',
            //           '00cb': '9807',
            //           '0064': '31',
            //           '006f': '30',
            //           '006e': '30',
            //           '008F': '2570',
            //           '0089': '30517',
            //           '0069': '3asdasd',
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
            'user': this.user,
            'button': action,
            'form': this.form
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
    constructor(modelService, decimalPipe) {
        this.modelService = modelService;
        this.decimalPipe = decimalPipe;
        this.operHours = '0 0 0 . 0 0 mh';
        this.engStatus = '';
        this.temperPerc = 0;
        this.tempValue = '0 0 . 0 0 C';
        this.eRpm = 0;
        this.eOilPr = 0;
        this.batV = 0;
        this.genFr = 0;
        this.maxFuel = 300;
        this.currentFuel = 0;
    }
    ngOnInit() {
        this.modelService.r00C9$.subscribe(status => {
            this.batV = +(+status * 0.05).toFixed(2);
        });
        this.modelService.r00C7$.subscribe(status => {
            this.eOilPr = +this.decimalPipe.transform((+status * 0.125) / 100, '1.0-2').replace(',', '');
        });
        this.modelService.r00CA$.subscribe(status => {
            this.eRpm = +(+status * 0.125).toFixed(2);
        });
        this.modelService.r0065$.subscribe(status => {
            this.genFr = +(+status / 128).toFixed(2);
        });
        this.modelService.r00C8$.subscribe(status => {
            this.temperPerc = +this.decimalPipe.transform((+status * 0.03125) - 271, '4.2-2').replace(',', '');
            let t;
            if (this.temperPerc.toString().length <= 3) {
                t = ['0', '0', '0', '0', ...this.temperPerc.toString().replace('.', ''), '0', '0'].reverse();
            }
            else if (this.temperPerc.toString().length < 5) {
                t = ['0', '0', '0', '0', ...this.temperPerc.toString().replace('.', ''), '0'].reverse();
            }
            if (this.temperPerc.toString().length >= 5) {
                t = ['0', '0', '0', '0', ...this.temperPerc.toString().replace('.', '')].reverse();
            }
            this.tempValue = `${t[3]} ${t[2]} . ${t[1]} ${t[0]} C`;
        });
        this.modelService.r00cb$.subscribe((status) => {
            const h = ['0', '0', '0', '0', '0', ...(status * 0.05).toFixed(2).toString().replace('.', '')].reverse();
            this.operHours = `${h[4]} ${h[3]} ${h[2]} . ${h[1]} ${h[0]} mh`;
        });
        this.modelService.r0323$.subscribe(status => {
            this.currentFuel = (+status * 0.0078125) - 251;
            if (this.currentFuel < 0) {
                this.currentFuel = 0;
            }
        });
        this.modelService.r041c$.subscribe(status => {
            if (status == '0') {
                this.engStatus = 'NOT READY TO GO';
            }
            if (status == '1') {
                this.engStatus = 'GOING IN AUTO';
            }
            if (status == '2') {
                this.engStatus = 'GOING IN RU';
            }
            if (status == '3') {
                this.engStatus = 'READY IN AUTO';
            }
            if (status == '4') {
                this.engStatus = 'STOPPING IN AUTO';
            }
            if (status == '5') {
                this.engStatus = 'STOPPING NOT READY';
            }
        });
    }
}
MotorBoardComponent.ɵfac = function MotorBoardComponent_Factory(t) { return new (t || MotorBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"])); };
MotorBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MotorBoardComponent, selectors: [["app-motor-board"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]])], decls: 40, vars: 18, consts: [[1, "board", "wrap"], [1, "flex-row", "m-top-10"], [1, "flex-col", "left"], [1, "e-rpm", "wrap", "p5", "h125"], [1, "title"], [3, "value", "max", "label"], [1, "e-rpm", "wrap", "m-top-10", "p5", "h125"], [1, "flex-col", "right"], [1, "e-oil-pr", "wrap", "p5", "h125"], [1, "bat-v", "wrap", "m-top-10", "p5", "h125"], [1, "flex-row"], [1, "term", "wrap"], ["type", "text", 1, "parameter-value", "digital-input", 3, "value", "valueChange"], [3, "value"], [1, "fuel", "wrap"], [3, "value", "max"], [1, "flex-row", "m-top-15", "bottom-wrap"], [1, "en-op-h", "wrap"], ["type", "text", 1, "parameter-value", "digital-input", 2, "width", "85%", 3, "value", "valueChange"]], template: function MotorBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Generator avarage AC:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-speed", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Engine rpm:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "app-speed", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Engine oil pressure:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "app-speed", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Battery voltage:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "app-speed", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Coolant temperature:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function MotorBoardComponent_Template_input_valueChange_25_listener($event) { return ctx.tempValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-termometer", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Fuel level:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "app-fuel", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Engine operating hours:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function MotorBoardComponent_Template_input_valueChange_35_listener($event) { return ctx.operHours = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Engine status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function MotorBoardComponent_Template_input_valueChange_39_listener($event) { return ctx.engStatus = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.genFr)("max", 100)("label", "RMS frequency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.eRpm)("max", 2000)("label", "rpm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.eOilPr)("max", 100)("label", "Bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.batV)("max", 50)("label", "V");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.tempValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.temperPerc);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.currentFuel)("max", ctx.maxFuel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.operHours);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.engStatus);
    } }, directives: [_shared_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_3__["SpeedComponent"], _shared_components_termometer_termometer_component__WEBPACK_IMPORTED_MODULE_4__["TermometerComponent"], _shared_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_5__["FuelComponent"]], styles: [".p5[_ngcontent-%COMP%] {\n  padding-left: 5px;\n  padding-right: 5px;\n  padding-bottom: 5px;\n}\n\n.h125[_ngcontent-%COMP%] {\n  height: 127px;\n}\n\n.board[_ngcontent-%COMP%] {\n  width: 616px;\n  margin-top: 15px;\n}\n\n.board[_ngcontent-%COMP%]   .en-op-h[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.board[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.board[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.board[_ngcontent-%COMP%]   .term[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 120px;\n  height: 278px;\n}\n\n.board[_ngcontent-%COMP%]   .fuel[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 278px;\n  margin-left: 10px;\n}\n\n.board[_ngcontent-%COMP%]   .bat-v[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.bottom-wrap[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MotorBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-motor-board',
                templateUrl: './motor-board.component.html',
                styleUrls: ['./motor-board.component.scss'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"]]
            }]
    }], function () { return [{ type: _shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["DecimalPipe"] }]; }, null); })();


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
/* harmony import */ var _bottom_component_bottom_wrapper_bottom_wrapper_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bottom-component/bottom-wrapper/bottom-wrapper.component */ "4oE/");
/* harmony import */ var _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/loading/loading.component */ "fqV1");









function AppComponent_app_loading_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading");
} }
class AppComponent {
    /**
     *
     */
    constructor(httpService) {
        this.httpService = httpService;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 12, vars: 3, consts: [[4, "ngIf"], [1, "flex-col"], [1, "flex-row"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_loading_0_Template, 1, 0, "app-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-connection-parameters");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-main-board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-motor-board");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-bottom-wrapper");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.httpService.requestInProgress));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _connection_parameters_connection_parameters_component__WEBPACK_IMPORTED_MODULE_3__["ConnectionParametersComponent"], _main_board_main_board_component__WEBPACK_IMPORTED_MODULE_4__["MainBoardComponent"], _motor_board_motor_board_component__WEBPACK_IMPORTED_MODULE_5__["MotorBoardComponent"], _bottom_component_bottom_wrapper_bottom_wrapper_component__WEBPACK_IMPORTED_MODULE_6__["BottomWrapperComponent"], _shared_components_loading_loading_component__WEBPACK_IMPORTED_MODULE_7__["LoadingComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [""] });
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
        this.max = 65535;
        this.fuelMax = 300;
        this.fuelLvl = '0';
        this.fuelPerc = 0;
    }
    ngOnChanges() {
        this.fuelMax = this.max;
        this.fuelLvl = this.decimalPipe.transform(this.value, '1.1-1');
        if (+this.fuelLvl.replace(',', '') > this.fuelMax) {
            this.fuelLvl = this.decimalPipe.transform(this.fuelMax, '1.1-1');
        }
        if (+this.fuelLvl.replace(',', '') < 0) {
            this.fuelLvl = '0';
        }
        this.fuelPerc = (+this.fuelLvl / this.fuelMax) * 100;
    }
}
FuelComponent.ɵfac = function FuelComponent_Factory(t) { return new (t || FuelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"])); };
FuelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FuelComponent, selectors: [["app-fuel"]], inputs: { value: "value", max: "max" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 18, vars: 11, consts: [[1, "fuel-meter"], [2, "text-align", "center", "margin-bottom", "15px"], [1, "glass"], [1, "total", 2, "bottom", "0%"], [1, "total", 2, "bottom", "20%"], [1, "total", 2, "bottom", "45%"], [1, "total", 2, "bottom", "70%"], [1, "total", 2, "bottom", "95%"], [1, "amount", 3, "ngStyle"], [1, "value", 3, "ngStyle"], [1, "line"]], template: function FuelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "fuel left %");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "strong", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fuelMax * 0.25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fuelMax * 0.5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fuelMax * 0.75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fuelMax);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.fuelPerc + "%"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.fuelPerc - 4 + "%"));
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
/* harmony import */ var _shared_components_termometer_termometer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/termometer/termometer.component */ "dLIe");
/* harmony import */ var _shared_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/fuel/fuel.component */ "VmXq");
/* harmony import */ var _bottom_component_bottom_wrapper_bottom_wrapper_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bottom-component/bottom-wrapper/bottom-wrapper.component */ "4oE/");
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
        _shared_components_termometer_termometer_component__WEBPACK_IMPORTED_MODULE_10__["TermometerComponent"],
        _shared_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_11__["FuelComponent"],
        _bottom_component_bottom_wrapper_bottom_wrapper_component__WEBPACK_IMPORTED_MODULE_12__["BottomWrapperComponent"],
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
                    _shared_components_termometer_termometer_component__WEBPACK_IMPORTED_MODULE_10__["TermometerComponent"],
                    _shared_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_11__["FuelComponent"],
                    _bottom_component_bottom_wrapper_bottom_wrapper_component__WEBPACK_IMPORTED_MODULE_12__["BottomWrapperComponent"],
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
        this.baseStationName = 'IFR121';
        this.deviceName = 'WILSON';
        this.geographicalPosition = 'Lvov itd itp';
        this.user = '?';
        this.route.queryParams.subscribe(params => {
            try {
                this.baseStationName = params['tit'] || 'IFR121';
                this.deviceName = params['name'] || 'WILSON';
                this.geographicalPosition = params['geo'] || 'Lvov itd itp';
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
    } }, styles: ["[_nghost-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-content: center;\n  background-color: rgba(0, 0, 0, 0.75);\n  z-index: 999;\n  flex-direction: column;\n}\n\n.loader[_ngcontent-%COMP%] {\n  margin: 100px auto;\n  font-size: 25px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  animation: load5 1.1s infinite ease;\n  transform: translateZ(0);\n}\n\n@keyframes load5 {\n  0%, 100% {\n    box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n  }\n  12.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n  }\n  25% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  37.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  50% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  62.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  75% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n  }\n  87.5% {\n    box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n  }\n}"] });
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
        this.r0065$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.r00C9$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.r00C7$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.r00CA$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.r0323$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.r00C8$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.r00cb$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.r012C$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.r041c$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.generatorStatus$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    parseResponse(response) {
        let res = response.result[0].values;
        this.r0065$.next(this.checkValue(res['0065'] || 0));
        this.r00C9$.next(this.checkValue(res['00C9'] || 0));
        this.r00C7$.next(this.checkValue(res['00C7'] || 0));
        this.r00CA$.next(this.checkValue(res['00CA'] || 0));
        this.r0323$.next(this.checkValue(res['0323'] || 0));
        this.r00C8$.next(this.checkValue(res['00C8'] || 0));
        this.r00cb$.next(this.checkValue(res['00cb'] || 0));
        this.r012C$.next(this.checkValue(res['012C'] || 0));
        this.r041c$.next(this.checkValue(res['041c'] || 0));
        this.generatorStatus$.next({
            '0063': this.checkValue(res['0063'] || 0),
            '0064': this.checkValue(res['0064'] || 0),
            '006f': this.checkValue(res['006f'] || 0),
            '006e': this.checkValue(res['006e'] || 0),
            '008F': this.checkValue(res['008F'] || 0),
            '0089': this.checkValue(res['0089'] || 0),
            '0069': this.checkValue(res['0069'] || 0),
        });
    }
    checkValue(value) {
        return !!+value ? +value : 0;
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





const _c0 = function (a0) { return { "active": a0 }; };
class MainBoardComponent {
    constructor(httpService, modelService) {
        this.httpService = httpService;
        this.modelService = modelService;
        this.isActive = {
            run: false,
            stop: false,
            auto: false,
        };
        this.engineStatus = '';
        this.modelService.r012C$.subscribe(status => {
            if (status == '0') {
                this.setButtonState('stop', 'Ready in STOP');
            }
            if (status == '1') {
                this.setButtonState('auto', 'Ready in AUTO');
            }
            if (status == '2') {
                this.setButtonState('run', 'Ready in RUN');
            }
        });
    }
    buttonClick(name) {
        if (name === 'run' && !this.isActive.run) {
            this.sendAction('0106012d000299fe', 'RUN', this.setButtonState.bind(this, 'run', 'Ready in RUN'));
        }
        if (name === 'stop' && !this.isActive.stop) {
            this.sendAction('0106012d0000183f', 'STOP', this.setButtonState.bind(this, 'stop', 'Ready in STOP'));
        }
        if (name === 'auto' && !this.isActive.auto) {
            this.sendAction('0106012d0001d9ff', 'AUTO', this.setButtonState.bind(this, 'auto', 'Ready in AUTO'));
        }
    }
    setButtonState(trueKey, status) {
        Object.keys(this.isActive).forEach(element => {
            this.isActive[element] = false;
        });
        this.isActive[trueKey] = true;
        this.engineStatus = status;
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
            this.httpService.getAllData();
        }, (error) => {
            if (this.httpService.enableLog) {
                console.log('error', error);
            }
            this.httpService.getAllData();
        });
    }
}
MainBoardComponent.ɵfac = function MainBoardComponent_Factory(t) { return new (t || MainBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_http_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_model_model_service__WEBPACK_IMPORTED_MODULE_2__["ModelService"])); };
MainBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainBoardComponent, selectors: [["app-main-board"]], decls: 17, vars: 10, consts: [[1, "board-wrapper", "wrap"], [1, "title"], [1, "flex-column"], [1, "btn-block"], [1, "btn-wrap"], [1, "btn", "run", 3, "ngClass", "click"], [1, "btn", "stop", 3, "ngClass", "click"], [1, "btn", "auto", 3, "ngClass", "click"], [1, "parameter-label", "m-top-5"], ["type", "text", 1, "parameter-value", "input", 3, "value", "valueChange"]], template: function MainBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Engine operating mode:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_6_listener() { return ctx.buttonClick("run"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "RUN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_9_listener() { return ctx.buttonClick("stop"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "STOP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainBoardComponent_Template_div_click_12_listener() { return ctx.buttonClick("auto"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "AUTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Engine Status:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function MainBoardComponent_Template_input_valueChange_16_listener($event) { return ctx.engineStatus = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.isActive.run));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.isActive.stop));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c0, ctx.isActive.auto));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.engineStatus);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".board-wrapper[_ngcontent-%COMP%] {\n  width: 300px;\n  padding: 10px;\n  margin-left: 10px;\n  display: flex;\n  flex-direction: row;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  border: 1px solid gray;\n  padding: 5px;\n  background-color: #0A3E7F;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%] {\n  width: 74px;\n  height: 74px;\n  margin: 3px;\n  border: 3px solid black;\n  background-color: #E7E7E7;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n  border: 1px solid black;\n  border-radius: 8px;\n  margin: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.run[_ngcontent-%COMP%] {\n  background-color: #008604;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.stop[_ngcontent-%COMP%] {\n  background-color: #FA0305;\n}\n.board-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.active.auto[_ngcontent-%COMP%] {\n  background-color: #FCFE81;\n}\n.board-wrapper[_ngcontent-%COMP%]   .flex-column[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 290px;\n}"] });
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