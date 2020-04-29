function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Drive\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\" style=\"color: brown;\" class=\"ion-text-center\">Drive</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <div id=\"container\">\n    <ion-row>\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Battery</ion-card-title>\n        <ion-card-subtitle>50%</ion-card-subtitle>\n       \n      </ion-card-header>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Speed</ion-card-title>\n        <ion-card-subtitle>00 M/S</ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-title>Position</ion-card-title>\n        <ion-card-subtitle>X=0 Y=0</ion-card-subtitle>\n      </ion-card-header>\n    </ion-card>\n\n    <ion-list>\n      <ion-list-header>\n        <ion-label>\n          Select your Car\n        </ion-label>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>Car</ion-label>\n        <ion-select multiple=\"false\" [value]=\"['one']\">\n          <ion-select-option value=\"one\">1</ion-select-option>\n          <ion-select-option value=\"tow\">2</ion-select-option>\n          <ion-select-option value=\"three\">3</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-list>\n  </ion-row>\n  </div>\n<ion-row>\n<ion-col class=\"up\">\n  <div>\n  <ion-button color=\"dark\" > <ion-icon style=\"font-size:xx-large;\" name=\"caret-up\"></ion-icon></ion-button>\n</div>\n<div>\n  <ion-button  color=\"dark\" > <ion-icon style=\"font-size:xx-large;\" name=\"caret-down\"></ion-icon></ion-button>\n</div>\n</ion-col>\n\n<ion-row class=\"right\">\n  <div>\n    <ion-button color=\"dark\" > <ion-icon style=\"font-size:xx-large;\" name=\"caret-back\"></ion-icon></ion-button>\n  </div>\n  <div>\n  <ion-button color=\"dark\" > <ion-icon style=\"font-size:xx-large;\" name=\"caret-forward\"></ion-icon></ion-button>\n</div>\n</ion-row>\n</ion-row>\n  \n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/home/home-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/home/home-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.module.ts":
  /*!*************************************!*\
    !*** ./src/app/home/home.module.ts ***!
    \*************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/home/home.page.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/home/home-routing.module.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/home/home.page.scss":
  /*!*************************************!*\
    !*** ./src/app/home/home.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#container {\n  text-align: center;\n  position: relative;\n  left: 0;\n  right: 0;\n  top: 20%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 15px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.rightleft {\n  top: 0%;\n  width: 30%;\n  left: 70%;\n}\n\n.up {\n  top: 9%;\n  width: 8%;\n  left: 10%;\n  right: 0%;\n}\n\n.down {\n  top: 20%;\n  width: 8%;\n  left: 0%;\n  right: 0%;\n}\n\n.right {\n  top: 0%;\n  width: 40%;\n  left: 60%;\n  right: 0%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYWlmc2xpdGkvRGVza3RvcC9LVE1hcHAvbXlDYXIvc3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FDRkY7O0FES0E7RUFDRSxxQkFBQTtBQ0ZGOztBREtBO0VBQ0UsT0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDRkY7O0FES0E7RUFDRSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDRkY7O0FES0E7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDRkY7O0FET0E7RUFDRSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDIwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5yaWdodGxlZnR7XG4gIHRvcDogMCU7XG4gIHdpZHRoOiAzMCU7XG4gIGxlZnQ6IDcwJTtcbn1cblxuLnVwe1xuICB0b3A6IDklO1xuICB3aWR0aDogOCU7XG4gIGxlZnQ6IDEwJTtcbiAgcmlnaHQ6IDAlO1xuXG59XG4uZG93bntcbiAgdG9wOiAyMCU7XG4gIHdpZHRoOiA4JTtcbiAgbGVmdDogMCU7XG4gIHJpZ2h0OiAwJTtcblxufVxuXG5cbi5yaWdodHtcbiAgdG9wOiAwJTtcbiAgd2lkdGg6IDQwJTtcbiAgbGVmdDogNjAlO1xuICByaWdodDogMCU7XG59XG4iLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDIwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnJpZ2h0bGVmdCB7XG4gIHRvcDogMCU7XG4gIHdpZHRoOiAzMCU7XG4gIGxlZnQ6IDcwJTtcbn1cblxuLnVwIHtcbiAgdG9wOiA5JTtcbiAgd2lkdGg6IDglO1xuICBsZWZ0OiAxMCU7XG4gIHJpZ2h0OiAwJTtcbn1cblxuLmRvd24ge1xuICB0b3A6IDIwJTtcbiAgd2lkdGg6IDglO1xuICBsZWZ0OiAwJTtcbiAgcmlnaHQ6IDAlO1xufVxuXG4ucmlnaHQge1xuICB0b3A6IDAlO1xuICB3aWR0aDogNDAlO1xuICBsZWZ0OiA2MCU7XG4gIHJpZ2h0OiAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.page.ts":
  /*!***********************************!*\
    !*** ./src/app/home/home.page.ts ***!
    \***********************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomePage = function HomePage() {
      _classCallCheck(this, HomePage);
    };

    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/home/home.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=home-home-module-es5.js.map