(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n<div class=\"container\">\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <form [formGroup]=\"this.productService.form\" (ngSubmit)=\"onSubmit()\">\n      <input type=\"hidden\" formControlName=\"$key\">\n      <div class=\"form-group\">\n          <label>Product Name</label>\n          <input formControlName=\"prodName\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.prodName.errors}\">\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.prodName.errors\">\n            This field is required.</div>\n        </div>\n        <div class=\"form-group\">\n            <label>Product Description</label>\n            <input formControlName=\"prodDesc\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.prodDesc.errors}\">\n            <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.prodDesc.errors\">\n              This field is required.</div>\n          </div>\n          <div class=\"form-group\">\n              <label>Product Cost</label>\n              <input formControlName=\"prodCost\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.prodCost.errors}\">\n              <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.prodCost.errors\">\n                This field is required.</div>\n            </div>\n            <div class=\"form-group\">\n                <label>Product URL</label>\n                <input formControlName=\"prodUrl\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.prodUrl.errors}\">\n                <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.prodUrl.errors\">\n                  This field is required.</div>\n              </div>\n              <div class=\"form-group\">\n                  <label>Product Discount</label>\n                  <input formControlName=\"prodDisc\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.prodDisc.errors}\">\n                  <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.prodDisc.errors\">\n                    This field is required.</div>\n                </div>\n      <div class=\"form-group\">\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n      </div>\n    </form>\n    <div class=\"alert alert-info\"  *ngIf=\"showSuccess\">\n        Submitted successfully.\n      </div>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/product.service */ "./src/app/shared/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(productService) {
        this.productService = productService;
        this.formControls = this.productService.form.controls;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.productService.getProducts();
    };
    AdminComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.productService.form.valid) {
            if (this.productService.form.get('$key').value == null) {
                this.productService.insertProduct(this.productService.form.value);
                this.showSuccess = true;
                setTimeout(function () { return _this.showSuccess = false; }, 3000);
                this.submitted = false;
            }
        }
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-3 col-md-3\">\n                <div class=\"site-logo\">\n                    <img src= \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdkN_Md7XEHO0F1YuC13-dLBa3zcwmQC4P-XBDwuouWcDonCP\" alt=\"tutorialspoint\" style=\"height:10px width:10px;\">\n                </div>\n                <div class=\"nav-switch\">\n                    <i class=\"fa fa-bars\"></i>\n                </div>\n            </div>\n            <div class=\"col-lg-9 col-md-9\">\n                <a class=\"site-btn header-btn\" routerLink='login'>Login</a>\n                <nav class=\"main-menu\">\n                    <ul>\n                        <li><a routerLink='home' routerLinkActibe=\"active\">Home</a></li>\n                        <li><a routerLink='coding'>Coding Examples</a></li>\n                        <li><a routerLink='courses'>Courses</a></li>\n                        <li><a routerLink='ebook'>Ebooks</a></li>\n                    </ul>\n                </nav>\n            </div>\n        </div>\n    </div>\n</header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'Tutorials';
        this.btnClick = function () {
            this.router.navigateByUrl('/login');
        };
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _student_student_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./student/student.component */ "./src/app/student/student.component.ts");
/* harmony import */ var _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./student-list/student-list.component */ "./src/app/student-list/student-list.component.ts");
/* harmony import */ var _shared_student_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/student.service */ "./src/app/shared/student.service.ts");
/* harmony import */ var _shared_fireauth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/fireauth.service */ "./src/app/shared/fireauth.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/auth.guard */ "./src/app/shared/auth.guard.ts");
/* harmony import */ var _student_user_resolver__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./student/user.resolver */ "./src/app/student/user.resolver.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _coding_coding_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./coding/coding.component */ "./src/app/coding/coding.component.ts");
/* harmony import */ var _courses_courses_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./courses/courses.component */ "./src/app/courses/courses.component.ts");
/* harmony import */ var _ebook_ebook_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ebook/ebook.component */ "./src/app/ebook/ebook.component.ts");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./shared/product.service */ "./src/app/shared/product.service.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _student_student_component__WEBPACK_IMPORTED_MODULE_8__["StudentComponent"],
                _student_list_student_list_component__WEBPACK_IMPORTED_MODULE_9__["StudentListComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _coding_coding_component__WEBPACK_IMPORTED_MODULE_19__["CodingComponent"],
                _courses_courses_component__WEBPACK_IMPORTED_MODULE_20__["CoursesComponent"],
                _ebook_ebook_component__WEBPACK_IMPORTED_MODULE_21__["EbookComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_23__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebaseConfig),
                angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabaseModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuthModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forRoot([
                    { path: "", redirectTo: '/home', pathMatch: "full" },
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"] },
                    { path: 'coding', component: _coding_coding_component__WEBPACK_IMPORTED_MODULE_19__["CodingComponent"] },
                    { path: 'ebook', component: _ebook_ebook_component__WEBPACK_IMPORTED_MODULE_21__["EbookComponent"] },
                    { path: 'courses', component: _courses_courses_component__WEBPACK_IMPORTED_MODULE_20__["CoursesComponent"] },
                    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_23__["AdminComponent"] },
                    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
                    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"], canActivate: [_shared_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]] },
                    { path: 'student', component: _student_student_component__WEBPACK_IMPORTED_MODULE_8__["StudentComponent"], resolve: { data: _student_user_resolver__WEBPACK_IMPORTED_MODULE_17__["UserResolver"] } },
                ])
            ],
            providers: [_shared_student_service__WEBPACK_IMPORTED_MODULE_10__["StudentService"], _shared_fireauth_service__WEBPACK_IMPORTED_MODULE_11__["FireauthService"], _shared_auth_guard__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"], _student_user_resolver__WEBPACK_IMPORTED_MODULE_17__["UserResolver"], _shared_product_service__WEBPACK_IMPORTED_MODULE_22__["ProductService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/coding/coding.component.css":
/*!*********************************************!*\
  !*** ./src/app/coding/coding.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/coding/coding.component.html":
/*!**********************************************!*\
  !*** ./src/app/coding/coding.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body background=\"https://pre00.deviantart.net/402c/th/pre/i/2010/191/3/b/blue_website_background___psd_by_fisher_12.jpg\">\n<div class=\"page-info-section set-bg\" style=\"background-image:url(/assets/page-bg/1.jpg)\">\n  <div class=\"container\">\n    <div class=\"site-breadcrumb\">\n      <a href=\"#\">Home</a>\n      <span>Coding Examples</span>\n    </div>\n  </div>\n</div>\n<!-- Page info end -->\n\n\n<!-- search section -->\n<section class=\"search-section ss-other-page\">\n  <div class=\"container\">\n    <div class=\"search-warp\">\n      <div class=\"section-title text-white\">\n        <h2><span>Search your any Coding Example</span></h2>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-10 offset-lg-1\">\n          <!-- search form -->\n          <form class=\"course-search-form\">\n            <input type=\"text\" placeholder=\"Code Name\">\n            <input type=\"text\" class=\"last-m\" placeholder=\"Category program (e.g java,c,c++)\">\n            <button class=\"site-btn btn-dark\">Search Course</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- search section end -->\n\n<section style=\"background:url(http://blog.hostbaby.com/backgrounds/bg_grungehalftone.jpg); background-repeat: no-repeat;\">\n<!-- course section -->\n\n<div class=\"container\">\n<div class=\"row\">\n<div class=\"col-12 text-center\">\n\n</div>\n<div class=\"text-center margin-20\">\n<div class=\"fb-like\" data-href=\"http://www.studytonight.com/c/programs/\" data-send=\"false\" data-layout=\"button_count\" data-width=\"100\" data-show-faces=\"false\" data-font=\"arial\"></div>\n</div>\n</div>\n<br /><hr />\n<div class=\"row\">\n<div class=\"col-12\"><h3 class=\"roboto darkest-grey\">Program List in C</h3></div>\n</div>\n<br />\n<div class=\"row\">\n<div class=\"col-4\">\n<div class=\"card card-light\">\n<p class=\"card-heading font-20 roboto\"><b>Start with Basic Programs</b></p>\n<ul class=\"counter-list\">\n<li><a href=\"basic/hello-world\">Hello World</a></li>\n<li><a href=\"basic/different-data-type-input\">Taking Input from User</a></li>\n<li><a href=\"basic/ascii-value-of-character\">Find ASCII Value of Character</a></li>\n<li><a href=\"basic/use-of-gets\">Using gets() function</a></li>\n<li><a href=\"basic/if-else\">If-Else</a></li>\n<li><a href=\"basic/switch-case\">Switch Case</a></li>\n<li><a href=\"basic/check-vowel-using-switch-case\">Checking for Vowel</a></li>\n<li><a href=\"basic/reversing-case-of-character\">Reversing Case of Character</a></li>\n<li><a href=\"basic/swapping-two-numbers-program\">Swapping Two Numbers</a></li>\n<li><a href=\"basic/largest-and-smallest-using-global-declaration\">Largest and Smallest using Global Declaration</a></li>\n</ul>\n</div>\n</div>\n<div class=\"col-4\">\n<div class=\"card card-light\">\n<p class=\"card-heading font-20 roboto\"><b>Loops</b></p>\n<ul class=\"counter-list\">\n<li><a href=\"loop/for-loop\">Basic <code>for</code> Loop</a></li>\n<li><a href=\"loop/while-loop\">Basic <code>while</code> Loop</a></li>\n<li><a href=\"loop/do-while-loop\">Basic do-while Loop</a></li>\n<li><a href=\"loop/nested-loops\">Nested <code>for</code> Loops</a></li>\n<li><a href=\"loop/factorial-program\">Program to find Factorial of number</a></li>\n<li><a href=\"loop/fibonacci-series-program\">Fibonacci Series Program</a></li>\n<li><a href=\"loop/palindrome-program\">Palindrome Program</a></li>\n<li><a href=\"loop/sum-of-digits-program\">Program to find Sum of Digits</a></li>\n<li><a href=\"loop/reverse-a-string-program\">Program to reverse a String</a></li>\n</ul>\n</div>\n</div>\n<div class=\"col-4\">\n<div class=\"card card-light\">\n<p class=\"card-heading font-20 roboto\"><b>Number Crunching</b></p>\n<ul class=\"counter-list\">\n<li><a href=\"numbers/average-of-n-numbers\">Program to find Average of <code>n</code> Numbers</a></li>\n<li><a href=\"numbers/armstrong-number-program\">Armstrong Number</a></li>\n<li><a href=\"numbers/checking-for-odd-or-even\">Checking input number for Odd or Even</a></li>\n<li><a href=\"numbers/factors-of-a-number\">Print Factors of a Number</a></li>\n<li><a href=\"numbers/sum-of-n-numbers\">Find sum of <code>n</code> Numbers</a></li>\n<li><a href=\"numbers/first-n-prime-numbers\">Print first <code>n</code> Prime Numbers</a></li>\n<li><a href=\"numbers/finding-largest-among-n-numbers\">Find Largest among <code>n</code> Numbers</a></li>\n<li><a href=\"numbers/finding-exponential-without-pow()-method\">Exponential without <code>pow()</code>method</a></li>\n<li><a href=\"numbers/input-number-is-int-or-float\">Find whether number is <code>int</code> or <code>float</code></a></li>\n<li><a href=\"numbers/multiplication-table-of-a-number\">Print Multiplication Table of input Number</a></li>\n</ul>\n</div>\n</div>\n</div>\n\n<br>\n<br>\n<div class=\"row\">\n<div class=\"col-4\">\n<div class=\"card card-light\">\n<p class=\"card-heading font-20 roboto\"><b>Concept of Arrays</b></p>\n<ul class=\"counter-list\">\n<li><a href=\"array/reverse-an-array\">Reverse an Array</a></li>\n<li><a href=\"array/inserting-an-element-in-array\">Insert Element to Array</a></li>\n<li><a href=\"array/deleting-an-element-from-array\">Delete Element from Array</a></li>\n<li><a href=\"array/largest-and-smallest-element-in-array\">Largest and Smallest Element in Array</a></li>\n<li><a href=\"array/sum-of-n-numbers-using-arrays\">Sum of N Numbers using Arrays</a></li>\n<li><a href=\"array/sort-array-element-program\">Sort Array Elements</a></li>\n<li><a href=\"array/remove-duplicate-element-program\">Remove Duplicate Elements</a></li>\n<li><a href=\"array/checking-for-sparse-matrix\">Sparse Matrix</a></li>\n<li><a href=\"array/check-square-matrix-is-symmetric-or-not\">Square Matrix</a></li>\n<li><a href=\"array/determinant-of-2x2-matrix\">Determinant of 2x2 matrix</a></li>\n<li><a href=\"array/normal-and-trace-of-square-matrix\">Normal and Trace of Square Matrix</a></li>\n<li><a href=\"array/addition-and-subtraction-of-matrices\">Addition and Subtraction of Matrices</a></li>\n<li><a href=\"array/matrix-multiplication-program\">Matrix Mulitplication</a></li>\n</ul>\n</div>\n</div>\n<div class=\"col-4\">\n<div class=\"card card-light\">\n<p class=\"card-heading font-20 roboto\"><b>Pointers</b></p>\n<ul class=\"counter-list\">\n<li><a href=\"pointer/simple-pointer-program\">Simple Program</a></li>\n<li><a href=\"pointer/memory-management-program\">Memory Management</a></li>\n<li><a href=\"pointer/arrays-of-pointers\">Array of Pointers</a></li>\n<li><a href=\"pointer/pointer-increment-and-decrement\">Pointer Increment and Decrement</a></li>\n<li><a href=\"pointer/pointer-comparison-program\">Pointer Comparison</a></li>\n<li><a href=\"pointer/pointer-to-a-pointer\">Pointer to a Pointer</a></li>\n<li><a href=\"pointer/concatenate-strings-using-pointers\">Concatenate Strings using Pointer</a></li>\n<li><a href=\"pointer/reverse-a-string-using-pointer\">Reverse a String using Pointer</a></li>\n<li><a href=\"pointer/swapping-two-numbers-using-pointers\">Swapping Two Numbers</a></li>\n<li><a href=\"pointer/pointer-to-a-function\">Pointer to a Function</a></li>\n<li><a href=\"pointer/null-pointer-program\">Null Pointer</a></li>\n</ul>\n</div>\n</div>\n<div class=\"col-4\">\n<div class=\"card card-light\">\n<p class=\"card-heading font-20 roboto\"><b>Concept of Recursion</b></p>\n<ul class=\"counter-list\">\n<li><a href=\"recursion/adding-two-numbers-using-recursion\">Adding Two Numbers</a></li>\n<li><a href=\"recursion/factorial-using-recursion\">Factorial</a></li>\n<li><a href=\"recursion/fibonacci-series-using-recursion\">Fibonacci Series</a></li>\n<li><a href=\"recursion/sum-of-first-n-numbers\">Sum of First N Numbers</a></li>\n<li><a href=\"recursion/sum-of-digits-using-recursion\">Sum of Digits</a></li>\n<li><a href=\"recursion/palindrome-using-recursion\">Palindrome</a></li>\n<li><a href=\"recursion/power-of-n-using-recursion\">Power of N</a></li>\n<li><a href=\"recursion/largest-array-element-using-recursion\">Largest Array Element</a></li>\n<li><a href=\"recursion/prime-or-composite-using-recursion\">Prime or Composite</a></li>\n<li><a href=\"recursion/lcm-of-two-numbers-using-recursion\">LCM of Two Numbers</a></li>\n<li><a href=\"recursion/gcd-of-two-numbers-using-recursion\">GCD of Two Numbers</a></li>\n<li><a href=\"recursion/reverse-a-string-using-recursion\">Reverse a String</a></li>\n</ul>\n</div>\n</div>\n</div>\n</div>\n<br>\n<br>\n<br>\n</section>\n<!-- course section end -->\n\n\n<!-- banner section -->\n\n\n<!-- banner section end -->\n\n\n\n<!-- footer section -->\n<footer>\n  <div class=\"container-fluid\" style=\"background-color:yellowgreen\">\n\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-3 col-xl-4\">\n        <div class=\"margin-b-30\">\n          <br>\n          <a class=\"logo margin-b-10\" href=\"#\"><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdkN_Md7XEHO0F1YuC13-dLBa3zcwmQC4P-XBDwuouWcDonCP\" alt=\"Tutorialspoint\" style=\"height:20% width:20%;\"></a>\n          <br>\n          <br>\n           <ul>\n            <a href=\"#\" class=\"fa fa-facebook\"></a>\n      <a href=\"#\" class=\"fa fa-twitter\"></a>\n      <a href=\"#\" class=\"fa fa-google\"></a>\n          </ul>\nCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Made by Tutorialspoint by <a href=\"https://www.tutorialspoint.com\" target=\"_blank\">Tutorialspoint</a>\n\n\n    \n        </div><!-- margin-b-30 -->\n      </div><!-- col-sm-6 -->\n      \n      <div class=\"hidden-lg-down col-xl-2\"></div>\n      \n      <div class=\"col-md-6 col-lg-2 col-xl-2\">\n        <div class=\"footer\">\n          <br>\n          <h5 class=\"title margin-b-20\"><b>ABOUT US</b></h5>\n       <ul class=\"\">\n             <li><i class=\"fa fa-check\"></i> <a href=\"/about/index.htm\">Company</a></li>\n             <li><i class=\"fa fa-check\"></i> <a href=\"/about/about_team.htm\">Our Team</a></li>\n             <li><i class=\"fa fa-check\"></i> <a href=\"/about/about_careers.htm\">Careers</a></li>\n             <li><i class=\"fa fa-check\"></i> <a href=\"/about/about_privacy.htm\">Privacy Policy</a></li>\n             <li><i class=\"fa fa-check\"></i> <a href=\"/about/about_cookies.htm\">Cookies Policy</a></li>\n             <li><i class=\"fa fa-check\"></i> <a href=\"/about/about_terms_of_use.htm\">Terms of use</a></li>\n             <li><i class=\"fa fa-check\"></i> <a href=\"/investors/index.htm\">Investors</a></li>\n          </ul>\n\n          <p>www.tutorialspoint.com</p>\n        </div><!-- footer-section -->\n      </div><!-- col-sm-2 -->\n      \n      <div class=\"col-md-6 col-lg-3 col-xl-2\">\n        <div class=\"footer\">\n            <br>\n          <h5 class=\"title margin-b-20\"><b>EXTRA LINKS</b></h5>\n           <ul class=\"\">\n             <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/articles/\">Articles</a></li>\n             <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/online_dev_tools.htm\">Dev Tools</a></li>\n             <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/free_web_graphics.htm\">Free Graphics</a></li>\n             <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/online_file_conversion.htm\">File Conversion</a></li>\n             <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/shared-tutorials.php\">Shared Tutorials</a></li>\n             <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/netmeeting.php\">NetMeeting</a></li>\n             <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/free_online_whiteboard.htm\">Whiteboard</a></li>\n          </ul>\n        </div><!-- footer-section -->\n      </div><!-- col-sm-2 -->\n      \n      <div class=\"col-md-6 col-lg-3 col-xl-2\">\n\n        <div class=\"footer\">\n            <br>\n          <h5 class=\"title margin-b-20\"><b>CONTACT US</b></h5>\n           <ul>\n             <li><p><i class=\"icon icon-map-marker\"></i> <strong>Address:</strong>7th Floor, SP Road, Malabar Hills, Mumbai, Maharashtra,404041</p></li>\n             <li><p><i class=\"icon icon-dribbble\"></i> <strong>Website:</strong> <a href=\"http://www.tutorialspoint.com\">www.tutorialspoint.com</a></p></li>\n          </ul>\n        </div><!-- footer-section -->\n      </div><!-- col-sm-2 -->\n      \n    </div><!-- row -->\n  </div><!-- container -->\n\n</footer>\n<!-- footer section end -->\n\n\n  <script src=\"js/jquery-3.2.1.min.js\"></script>\n    <script src=\"js/bootstrap.min.js\"></script>\n    <script src=\"js/mixitup.min.js\"></script>\n    <script src=\"js/circle-progress.min.js\"></script>\n    <script src=\"js/owl.carousel.min.js\"></script>\n    <script src=\"js/main.js\"></script>\n  </body>\n\n"

/***/ }),

/***/ "./src/app/coding/coding.component.ts":
/*!********************************************!*\
  !*** ./src/app/coding/coding.component.ts ***!
  \********************************************/
/*! exports provided: CodingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodingComponent", function() { return CodingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CodingComponent = /** @class */ (function () {
    function CodingComponent() {
    }
    CodingComponent.prototype.ngOnInit = function () {
    };
    CodingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-coding',
            template: __webpack_require__(/*! ./coding.component.html */ "./src/app/coding/coding.component.html"),
            styles: [__webpack_require__(/*! ./coding.component.css */ "./src/app/coding/coding.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CodingComponent);
    return CodingComponent;
}());



/***/ }),

/***/ "./src/app/courses/courses.component.css":
/*!***********************************************!*\
  !*** ./src/app/courses/courses.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img{\n    margin: 0 auto;\n    width: 200px;\n    height: 150px;\n}\n.card-body{\n    text-justify: auto;\n}\n.center {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n}\n.card{\n    border: 1px solid silver;\n    box-shadow: 5px 8px 10px silver;\n    border-radius: 5px;\n\n}\n"

/***/ }),

/***/ "./src/app/courses/courses.component.html":
/*!************************************************!*\
  !*** ./src/app/courses/courses.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section style=\"background-image: url(\n  https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJ34U1IAGS0XeYgc0JLYm2BrFJdAKWtn_XxTopq7QBoL22nZl)\">\n<!-- Page info -->\n<div class=\"page-info-section set-bg\" style=\"background-image:url(/assets/page-bg/3.jpg)\">\n  <div class=\"container\">\n    <div class=\"site-breadcrumb\">\n      <a href=\"#\">Home</a>\n      <span>Courses</span>\n    </div>\n  </div>\n</div>\n<!-- Page info end -->\n\n<!-- search section -->\n<section class=\"search-section ss-other-page\">\n  <div class=\"container\">\n    <div class=\"search-warp\">\n      <div class=\"section-title text-white\">\n        <h2><span>Course</span></h2>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-10 offset-lg-1\">\n          <!-- search form -->\n          <form class=\"course-search-form\">\n            <input type=\"text\" placeholder=\"Course\">\n            <input type=\"text\" class=\"last-m\" placeholder=\"Category\">\n            <button class=\"site-btn btn-dark\">Search Course</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br><br><br><br><br><br>\n</section>\n<h1 style=\"text-align:center;\"><a href=\"https://www.tutorialspoint.com/tutorialslibrary.htm\" title=\"tutorialspoint library\"><i class=\"fa fa-cubes\"></i> Tutorials <b>Library</b> <br/></a></h1>   \n<!-- search section end -->\n<!-- <app-admin></app-admin> -->\n<div class=\"container\" style=\"margin-top:5%;\">\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\" *ngFor=\"let product of productArray\">\n        <div class=\"card\">\n            <div class=\"card-header bg-light\">\n                <img src={{product.prodUrl}} class=\"card-img-top center\">\n            </div>    \n            <div class=\"card-body\">\n                <h3 class=\"text-center text-primary\">{{product.prodName}}</h3>\n                <p class=\"card-text\">{{product.prodDesc}}</p>\n                <a type=\"button\" class=\"btn btn-info btn-block\" (click)=\"onEnroll(product)\">Enroll Now</a>\n            </div>\n            <div class=\"card-footer bg-light\">\n                <h5 class=\"text-center\">Cost: {{product.prodCost | currency:'INR':symbol}}/- <small class=\"text-success\"><b>[ {{product.prodDisc}} discount ]</b></small></h5></div>\n        </div>\n        <br><hr><br>\n    </div>\n</div>\n</div>\n</section>"

/***/ }),

/***/ "./src/app/courses/courses.component.ts":
/*!**********************************************!*\
  !*** ./src/app/courses/courses.component.ts ***!
  \**********************************************/
/*! exports provided: CoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesComponent", function() { return CoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/product.service */ "./src/app/shared/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_fireauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/fireauth.service */ "./src/app/shared/fireauth.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CoursesComponent = /** @class */ (function () {
    function CoursesComponent(productService, router, auth) {
        this.productService = productService;
        this.router = router;
        this.auth = auth;
        this.message = '';
        this.productArray = [];
    }
    CoursesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProducts().subscribe(function (list) {
            _this.productArray = list.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
            console.log(_this.productArray);
        });
    };
    CoursesComponent.prototype.onEnroll = function (product) {
        console.log(product.$key);
    };
    CoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-courses',
            template: __webpack_require__(/*! ./courses.component.html */ "./src/app/courses/courses.component.html"),
            styles: [__webpack_require__(/*! ./courses.component.css */ "./src/app/courses/courses.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_fireauth_service__WEBPACK_IMPORTED_MODULE_3__["FireauthService"]])
    ], CoursesComponent);
    return CoursesComponent;
}());



/***/ }),

/***/ "./src/app/ebook/ebook.component.css":
/*!*******************************************!*\
  !*** ./src/app/ebook/ebook.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ebook/ebook.component.html":
/*!********************************************!*\
  !*** ./src/app/ebook/ebook.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<body background=\"https://pre00.deviantart.net/402c/th/pre/i/2010/191/3/b/blue_website_background___psd_by_fisher_12.jpg\">\n\n<!-- Page info -->\n<div class=\"page-info-section set-bg\" style=\"background-image:url(/assets/page-bg/4.jpg)\">\n  <div class=\"container\">\n    <div class=\"site-breadcrumb\">\n      <a href=\"#\">Home</a>\n      <span>Ebooks</span>\n    </div>\n  </div>\n</div>\n<!-- Page info end -->\n\n\n<!-- search section -->\n<section class=\"search-section ss-other-page\">\n  <div class=\"container\">\n    <div class=\"search-warp\">\n      <div class=\"section-title text-white\">\n        <h2><span>Search your Ebook</span></h2>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-10 offset-lg-1\">\n          <!-- search form -->\n          <form class=\"course-search-form\">\n            <input type=\"text\" placeholder=\"Book Name\">\n            <input type=\"text\" class=\"last-m\" placeholder=\"Publication\">\n            <button class=\"site-btn btn-dark\">Search</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- search section end -->\n\n<br>\n<br>\n<br>\n<br>\n<br>\n\n\n<!-- <iframe src=\"demo_iframe.htm\" height=\"200\" width=\"300\"> -->\n\n\n   <div class=\"row\" style=\"background-image: url(https://media.freestocktextures.com/cache/b9/71/b97113e32d32944ef1daad2644f1882d.jpg);\">\n      \n      <div class=\"col-lg-4 col-md-6\">\n  <article class=\"pdf premium\" data-premium=\"0\" data-popularity=\"175\" data-rating=\"473\" data-published=\"1390780800\">\n              <a href=\"/en/automation-and-robotics-ebook\">\n                  <h3>Automation and Robotics</h3>\n\n                  <img src=\"https://bookboon.com/thumbnail/140/cad3ee13-0f5e-e011-bd88-22a08ed629e5/a55e9eb4-f178-4be6-b662-a47400cad150/automation-and-robotics.jpg\" alt=\"\" class=\"thumb\" />\n\n                  <div class=\"author\">\n                      Dr. Miltiadis A. Boboulos\n                  </div>\n                  \n                  <div class=\"pages\">\n                          <span>\n                              <b class=\"pricePremium\">Premium</b>\n                              <b class=\"priceFree\">Free</b>\n                          </span>\n                          <span>PDF</span>\n                          <span>English</span>    \n                          <span>Pages 127</span>\n                  </div>\n\n<span class=\"rating\">\n  <span class=\"stars\" style=\"width: 95%\"></span>\n</span>\n                      <span class=\"reviews\">(101 reviews)\n                      </span>\n\n                  <em>\n                      In this book we are dealing with series part production featured by a medium complexity degree and a medium number of individual components and assembly technique alternatives.\n                  </em>\n                </a></article></div>\n      \n      <div class=\"col-lg-4 col-md-6\">\n          <article class=\"pdf premium\" data-premium=\"0\" data-popularity=\"174\" data-rating=\"465\" data-published=\"1427414400\">\n              <a href=\"/en/structured-programming-with-c-plus-plus-ebook\">\n                  <h3>Structured Programming with C++</h3>\n\n                  <img src=\"https://bookboon.com/thumbnail/140/79aca396-0bc5-4749-bc9d-a02100f14337/ffe839c2-2cee-4ade-8004-a59900d82739/structured-programming-with-c-plus-plus.jpg\" alt=\"\" class=\"thumb\" />\n\n                  <div class=\"author\">\n                      Kjell B&#228;ckman\n                  </div>\n\n                  <div class=\"pages\">\n                          <span>\n                              <b class=\"pricePremium\">Premium</b>\n                              <b class=\"priceFree\">Free</b>\n                          </span>\n                          <span>PDF</span>\n                          <span>English</span>    \n                          <span>Pages 246</span>\n                  </div>\n\n<span class=\"rating\">\n  <span class=\"stars\" style=\"width: 93%\"></span>\n</span>\n                      <span class=\"reviews\">(170 reviews)\n                      </span>\n\n                    <em>\n                      Structured Programming with C++ is intended as course material for the course Structured Programming with C/C++ at university level.\n                    </em>\n                \n      </a></article></div>\n      <div class=\"col-lg-4 col-md-6\">\n        <article class=\"pdf premium\" data-premium=\"0\" data-popularity=\"172\" data-rating=\"481\" data-published=\"1483228800\">\n              <a href=\"/en/java-1-basic-syntax-and-semantics-ebook\">\n                  <h3>Java 1: Basic syntax and semantics</h3>\n\n                  <img src=\"https://bookboon.com/thumbnail/140/25afd2bb-00a8-4c17-86c5-1f8e08bf13da/358563ec-c4b7-4f3a-9edd-6ef96c38c8d4/java-1-basic-syntax-and-semantics.jpg\" alt=\"\" class=\"thumb\" />\n\n                  <div class=\"author\">\n                      Poul Klausen\n                  </div>\n\n                  <div class=\"pages\">\n                          <span>\n                              <b class=\"pricePremium\">Premium</b>\n                              <b class=\"priceFree\">Free</b>\n                          </span>\n                          <span>PDF</span>\n                          <span>English</span>    \n                          <span>Pages 135</span>\n                  </div>\n\n<span class=\"rating\">\n  <span class=\"stars\" style=\"width: 96%\"></span>\n</span>\n                      <span class=\"reviews\">(16 reviews)\n                      </span>\n\n                    <em>\n                      This book is the first in a series of books on software development in Java.\n                    </em>\n                  </a></article></div>\n              \n      \n\n       <div class=\"col-lg-4 col-md-6\">\n          <article class=\"pdf premium\" data-premium=\"0\" data-popularity=\"171\" data-rating=\"477\" data-published=\"1436400000\">\n              <a href=\"/en/database-design-and-implementation-ebook\">\n                  <h3>Database Design and Implementation</h3>\n\n                  <img src=\"https://bookboon.com/thumbnail/140/055917d6-7e80-4b84-850a-a4d000c4276a/5fd64c5d-40d7-421a-ae21-a5d900d9d963/database-design-and-implementation.jpg\" alt=\"\" class=\"thumb\" />\n\n                  <div class=\"author\">\n                      Howard Gould\n                  </div>\n\n                  <div class=\"pages\">\n                          <span>\n                              <b class=\"pricePremium\">Premium</b>\n                              <b class=\"priceFree\">Free</b>\n                          </span>\n                          <span>PDF</span>\n                          <span>English</span>    \n                          <span>Pages 164</span>\n                  </div>\n\n<span class=\"rating\">\n  <span class=\"stars\" style=\"width: 95%\"></span>\n</span>\n                      <span class=\"reviews\">(30 reviews)\n                      </span>\n\n                    <em>\n                      This book explains the essential relational database design modelling techniques and shows how SQL can be used to implement a database. There are numerous practical exercises with feedback.\n                    </em>\n                  \n          \n                </a></article></div>\n\n\n      <div class=\"col-lg-4 col-md-6\">\n         <article class=\"pdf premium\" data-premium=\"0\" data-popularity=\"162\" data-rating=\"473\" data-published=\"1521158400\">\n              <a href=\"/en/object-oriented-programming-using-c-sharp-ebook\">\n                  <h3>Object Oriented Programming using C#</h3>\n\n                  <img src=\"https://bookboon.com/thumbnail/140/c9684c3e-0fc2-4cba-a403-9f5600caa96b/784ac7de-b361-4f07-90b0-5d148ce0b10b/object-oriented-programming-using-c-sharp.jpg\" alt=\"\" class=\"thumb\" />\n\n                  <div class=\"author\">\n                      Simon Kendal\n                  </div>\n\n                  <div class=\"pages\">\n                          <span>\n                              <b class=\"pricePremium\">Premium</b>\n                              <b class=\"priceFree\">Free</b>\n                          </span>\n                          <span>PDF</span>\n                          <span>English</span>    \n                          <span>Pages 421</span>\n                  </div>\n\n<span class=\"rating\">\n  <span class=\"stars\" style=\"width: 95%\"></span>\n</span>\n                      <span class=\"reviews\">(63 reviews)\n                      </span>\n\n                  <em>\n                      This book will explain the Object Oriented approach to programming and through the use of small exercises, for which feedback is provided, develop some practical skills as well.\n                    </em>\n                  \n              \n\n                </a></article></div>\n\n      <div class=\"col-lg-4 col-md-6\">\n         <article class=\"pdf premium\" data-premium=\"0\" data-popularity=\"160\" data-rating=\"0\" data-published=\"1479254400\">\n              <a href=\"/en/introduction-to-e-commerce-ebook\">\n                  <h3>Introduction to E-Commerce</h3>\n\n                  <img src=\"https://bookboon.com/thumbnail/140/175d04a7-1fbf-4d32-9590-07ba550f673b/8e3908d9-941e-417b-874c-08ac9c9a0f8b/introduction-to-e-commerce.jpg\" alt=\"\" class=\"thumb\" />\n\n                  <div class=\"author\">\n                      Prof. Dr. Martin K&#252;tz\n                  </div>\n\n                  <div class=\"pages\">\n                          <span>\n                              <b class=\"pricePremium\">Premium</b>\n                              <b class=\"priceFree\">Free</b>\n                          </span>\n                          <span>PDF</span>\n                          <span>English</span>    \n                          <span>Pages 209</span>\n                  </div>\n\n\n                  <em>\n                      From technologies to processes, from B2C to B2B, from payment to security, the book investigates E-Commerce integratedly – for readers with an economic as well as with a computer science background.\n                    </em>\n                  \n              \n                </a></article></div>\n\n \n\n      <div class=\"col-lg-4 col-md-6\">\n        <article class=\"pdf premium\" data-premium=\"0\" data-popularity=\"155\" data-rating=\"0\" data-published=\"1533254400\">\n              <a href=\"/en/java-17-more-about-java-and-android-ebook\">\n                  <h3>Java 17: More about Java and Android</h3>\n\n                  <img src=\"https://bookboon.com/thumbnail/140/162503ab-7234-4cb9-9d26-2c1fb929a93f/60ac29bc-d7c6-4a7b-a565-ab701c3642ab/java-17-more-about-java-and-android.jpg\" alt=\"\" class=\"thumb\" />\n\n                  <div class=\"author\">\n                      Poul Klausen\n                  </div>\n\n                  <div class=\"pages\">\n                          <span>\n                              <b class=\"pricePremium\">Premium</b>\n                              <b class=\"priceFree\">Free</b>\n                          </span>\n                          <span>PDF</span>\n                          <span>English</span>    \n                          <span>Pages 147</span>\n                  </div>\n\n\n                  <em>\n                      The book is about writing applications for Android and is a continuation of the previous book in this series.\n                    </em>\n                </a></article></div>\n          \n\n \n\n      <div class=\"col-lg-4 col-md-6\">\n         <article class=\"pdf premium\" data-premium=\"0\" data-popularity=\"141\" data-rating=\"485\" data-published=\"1508198400\">\n              <a href=\"/en/an-introduction-to-windows-operating-system-ebook\">\n                  <h3>An Introduction to Windows Operating System</h3>\n\n                  <img src=\"https://bookboon.com/thumbnail/140/257240c2-8117-45f4-916a-a56100abe384/f00a1435-ac82-409e-a89d-a56100d0d6d5/an-introduction-to-windows-operating-system.jpg\" alt=\"\" class=\"thumb\" />\n\n                  <div class=\"author\">\n                      Einar Krogh\n                  </div>\n\n                  <div class=\"pages\">\n                          <span>\n                              <b class=\"pricePremium\">Premium</b>\n                              <b class=\"priceFree\">Free</b>\n                          </span>\n                          <span>PDF</span>\n                          <span>English</span>    \n                          <span>Pages 137</span>\n                  </div>\n\n<span class=\"rating\">\n  <span class=\"stars\" style=\"width: 97%\"></span>\n</span>\n                      <span class=\"reviews\">(13 reviews)\n                      </span>\n\n                    <em>\n                      This book is about Windows operating system written for courses in operating systems. \n                    </em>\n                  \n\n                </a></article></div>\n     \n\n      <div class=\"col-lg-4 col-md-6\">\n        <article class=\"pdf premium\" data-premium=\"0\" data-popularity=\"134\" data-rating=\"430\" data-published=\"1411257600\">\n              <a href=\"/en/artificial-intelligence-agent-behaviour-i-ebook\">\n                  <h3>Artificial Intelligence – Agent Behaviour</h3>\n\n                  <img src=\"https://bookboon.com/thumbnail/140/bfd3ee13-0f5e-e011-bd88-22a08ed629e5/e26ae33c-ab9e-4ed4-9b5c-a54f00a4c337/artificial-intelligence-agent-behaviour-i.jpg\" alt=\"\" class=\"thumb\" />\n\n                  <div class=\"author\">\n                      William John Teahan\n                  </div>\n\n                  <div class=\"pages\">\n                          <span>\n                              <b class=\"pricePremium\">Premium</b>\n                              <b class=\"priceFree\">Free</b>\n                          </span>\n                          <span>PDF</span>\n                          <span>English</span>    \n                          <span>Pages 257</span>\n                  </div>\n\n<span class=\"rating\">\n  <span class=\"stars\" style=\"width: 86%\"></span>\n</span>\n                      <span class=\"reviews\">(23 reviews)\n                      </span>\n\n                    <em>\n                      This book is the second in a series on Artificial Intelligence. It adopts a behaviour-based approach to the design of agent-oriented systems.\n                    </em>\n                  \n                </a></article></div>\n\n\n<!-- banner section -->\n</div>\n<div style=\"background-color: yellowgreen;\">\n<br>\n<br>\n<br>\n</div>\n<!-- banner section end -->\n\n\n<!-- footer section -->\n<footer >\n  <div class=\"container-fluid\" style=\"background-color:yellowgreen\">\n\n      <div class=\"row\">\n          <div class=\"col-md-6 col-lg-3 col-xl-4\">\n              <div class=\"margin-b-30\">\n                  <br>\n                  <a class=\"logo margin-b-10\" href=\"#\"><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdkN_Md7XEHO0F1YuC13-dLBa3zcwmQC4P-XBDwuouWcDonCP\" alt=\"Tutorialspoint\" style=\"height:20% width:20%;\"></a>\n                  <br>\n                  <br>\n                   <ul>\n        <a href=\"#\" class=\"fa fa-facebook\"></a>\n          <a href=\"#\" class=\"fa fa-twitter\"></a>\n          <a href=\"#\" class=\"fa fa-google\"></a>\n      </ul>\nCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Made by Tutorialspoint by <a href=\"https://www.tutorialspoint.com\" target=\"_blank\">Tutorialspoint</a>      \n              </div><!-- margin-b-30 -->\n          </div><!-- col-sm-6 -->\n          \n          <div class=\"hidden-lg-down col-xl-2\"></div>\n          \n          <div class=\"col-md-6 col-lg-2 col-xl-2\">\n              <div class=\"footer\">\n                  <br>\n                  <h5 class=\"title margin-b-20\"><b>ABOUT US</b></h5>\n         <ul class=\"\">\n         <li><i class=\"fa fa-check\"></i> <a href=\"/about/index.htm\">Company</a></li>\n         <li><i class=\"fa fa-check\"></i> <a href=\"/about/about_team.htm\">Our Team</a></li>\n         <li><i class=\"fa fa-check\"></i> <a href=\"/about/about_careers.htm\">Careers</a></li>\n         <li><i class=\"fa fa-check\"></i> <a href=\"/about/about_privacy.htm\">Privacy Policy</a></li>\n         <li><i class=\"fa fa-check\"></i> <a href=\"/about/about_cookies.htm\">Cookies Policy</a></li>\n         <li><i class=\"fa fa-check\"></i> <a href=\"/about/about_terms_of_use.htm\">Terms of use</a></li>\n         <li><i class=\"fa fa-check\"></i> <a href=\"/investors/index.htm\">Investors</a></li>\n      </ul>\n\n                  <p>www.tutorialspoint.com</p>\n              </div><!-- footer-section -->\n          </div><!-- col-sm-2 -->\n          \n          <div class=\"col-md-6 col-lg-3 col-xl-2\">\n              <div class=\"footer\">\n                      <br>\n                  <h5 class=\"title margin-b-20\"><b>EXTRA LINKS</b></h5>\n                   <ul class=\"\">\n         <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/articles/\">Articles</a></li>\n         <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/online_dev_tools.htm\">Dev Tools</a></li>\n         <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/free_web_graphics.htm\">Free Graphics</a></li>\n         <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/online_file_conversion.htm\">File Conversion</a></li>\n         <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/shared-tutorials.php\">Shared Tutorials</a></li>\n         <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/netmeeting.php\">NetMeeting</a></li>\n         <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/free_online_whiteboard.htm\">Whiteboard</a></li>\n      </ul>\n              </div><!-- footer-section -->\n          </div><!-- col-sm-2 -->\n          \n          <div class=\"col-md-6 col-lg-3 col-xl-2\">\n\n              <div class=\"footer\">\n                      <br>\n                  <h5 class=\"title margin-b-20\"><b>CONTACT US</b></h5>\n                   <ul>\n         <li><p><i class=\"icon icon-map-marker\"></i> <strong>Address:</strong>7th Floor, SP Road, Malabar Hills, Mumbai, Maharashtra,404041</p></li>\n         <li><p><i class=\"icon icon-dribbble\"></i> <strong>Website:</strong> <a href=\"http://www.tutorialspoint.com\">www.tutorialspoint.com</a></p></li>\n      </ul>\n              </div><!-- footer-section -->\n          </div><!-- col-sm-2 -->\n          \n      </div><!-- row -->\n  </div><!-- container -->\n\n</footer>\n<!-- footer section end -->\n</body>"

/***/ }),

/***/ "./src/app/ebook/ebook.component.ts":
/*!******************************************!*\
  !*** ./src/app/ebook/ebook.component.ts ***!
  \******************************************/
/*! exports provided: EbookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EbookComponent", function() { return EbookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EbookComponent = /** @class */ (function () {
    function EbookComponent() {
    }
    EbookComponent.prototype.ngOnInit = function () {
    };
    EbookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ebook',
            template: __webpack_require__(/*! ./ebook.component.html */ "./src/app/ebook/ebook.component.html"),
            styles: [__webpack_require__(/*! ./ebook.component.css */ "./src/app/ebook/ebook.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EbookComponent);
    return EbookComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"hero-section set-bg\" style=\"background-image: url(https://st.depositphotos.com/3223379/4561/i/950/depositphotos_45617079-stock-photo-global-computer-network-on-abstract.jpg)\">\r\n    <div class=\"container\">\r\n        <div class=\"hero-text text-white\">\r\n            <h2 style=\"color:black \">Get The Best Free Online Courses</h2>\r\n            <h2 style=\"color:black \">New User Sign Up Now!!</h2>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-10 offset-lg-1\">\r\n                <form class=\"intro-newslatter\">\r\n                    <input type=\"text\" placeholder=\"Name\">\r\n                    <input type=\"text\" class=\"last-s\" placeholder=\"E-mail\">\r\n                    <button class=\"site-btn\">Sign Up Now</button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"categories-section spad\" style=\"background-color:#ccff99\">\r\n    <div class=\"container\">\r\n        <div class=\"section-title\">\r\n            <h2>Tutorials Library</h2>\r\n            <h4>learn online courses from our website with easy and lucid explanation!!</h4>\r\n        </div>\r\n        <div class=\"row\">\r\n            <!-- categorie -->\r\n            <div class=\"col-lg-4 col-md-6\">\r\n                <div class=\"categorie-item\">\r\n                    <div class=\"ci-thumb set-bg\" style=\"background-image:url(/assets/categories/1.jpg)\"></div>\r\n                    <div class=\"ci-text\">\r\n                        <h5>Computer Science</h5>\r\n                        \r\n                        <span>120 Courses</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- categorie -->\r\n            <div class=\"col-lg-4 col-md-6\">\r\n                <div class=\"categorie-item\">\r\n                    <div class=\"ci-thumb set-bg\" style=\"background-image:url(/assets/categories/2.jpg)\"></div>\r\n                    <div class=\"ci-text\">\r\n                        <h5>Web Development</h5>\r\n                    \r\n                        <span>70 Courses</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- categorie -->\r\n            <div class=\"col-lg-4 col-md-6\">\r\n                <div class=\"categorie-item\">\r\n                    <div class=\"ci-thumb set-bg\" style=\"background-image:url(/assets/categories/3.jpg)\"></div>\r\n                    <div class=\"ci-text\">\r\n                        <h5>Programming Tutorials</h5>\r\n                    \r\n                        <span>55 Courses</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- categorie -->\r\n            <div class=\"col-lg-4 col-md-6\">\r\n                <div class=\"categorie-item\">\r\n                    <div class=\"ci-thumb set-bg\" style=\"background-image:url(/assets/categories/4.jpg)\"></div>\r\n                    <div class=\"ci-text\">\r\n                        <h5>Java technologies</h5>\r\n                    \r\n                        <span>40 Courses</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- categorie -->\r\n            <div class=\"col-lg-4 col-md-6\">\r\n                <div class=\"categorie-item\">\r\n                    <div class=\"ci-thumb set-bg\" style=\"background-image:url(/assets/categories/5.jpg)\"></div>\r\n                    <div class=\"ci-text\">\r\n                        <h5>Mobile Development</h5>\r\n                    \r\n                        <span>220 Courses</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- categorie -->\r\n            <div class=\"col-lg-4 col-md-6\">\r\n                <div class=\"categorie-item\">\r\n                    <div class=\"ci-thumb set-bg\" style=\"background-image:url(/assets/categories/6.jpg)\"></div>\r\n                    <div class=\"ci-text\">\r\n                        <h5>DataBase tutorials</h5>\r\n                    \r\n                        <span>25 Courses</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"search-section\" style=\"background-color:#ccff99;\">\r\n    <div class=\"container\">\r\n        <div class=\"search-warp\">\r\n            <div class=\"section-title text-white\">\r\n                <h2>Search your course</h2>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-10 offset-md-1\">\r\n                    <!-- search form -->\r\n                    <form class=\"course-search-form\">\r\n                        <input type=\"text\" placeholder=\"Course\">\r\n                        <input type=\"text\" class=\"last-m\" placeholder=\"Category\">\r\n                        <button class=\"site-btn\">Search Course</button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</section>\r\n<!-- search section end -->\r\n\r\n\r\n<!-- course section -->\r\n\r\n<!-- course section end -->\r\n\r\n\r\n<!-- signup section -->\r\n\r\n<!-- signup section end -->\r\n\r\n\r\n<!-- banner section -->\r\n<div style=\"background-color: #ccff99;\">\r\n<br>\r\n<br>\r\n<br>\r\n</div>\r\n<footer >\r\n    <div class=\"container-fluid\" style=\"background-color:yellowgreen\">\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6 col-lg-3 col-xl-4\">\r\n                <div class=\"margin-b-30\">\r\n                    <br>\r\n                    <a class=\"logo margin-b-10\" href=\"#\"><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdkN_Md7XEHO0F1YuC13-dLBa3zcwmQC4P-XBDwuouWcDonCP\" alt=\"Tutorialspoint\" style=\"height:20% width:20%;\"></a>\r\n                    <br>\r\n                    <br>\r\n                     <ul>\r\n          <a href=\"#\" class=\"fa fa-facebook\"></a>\r\n            <a href=\"#\" class=\"fa fa-twitter\"></a>\r\n            <a href=\"#\" class=\"fa fa-google\"></a>\r\n        </ul>\r\nCopyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | Made by Tutorialspoint by <a href=\"https://www.tutorialspoint.com\" target=\"_blank\">Tutorialspoint</a>\r\n\r\n        \r\n                </div><!-- margin-b-30 -->\r\n            </div><!-- col-sm-6 -->\r\n            \r\n            <div class=\"hidden-lg-down col-xl-2\"></div>\r\n            \r\n            <div class=\"col-md-6 col-lg-2 col-xl-2\">\r\n                <div class=\"footer\">\r\n                    <br>\r\n                    <h5 class=\"title margin-b-20\"><b>ABOUT US</b></h5>\r\n           <ul class=\"\">\r\n           <li><i class=\"fa fa-check\"></i> <a href=\"/about/index.htm\">Company</a></li>\r\n           <li><i class=\"fa fa-check\"></i> <a href=\"/about/about_team.htm\">Our Team</a></li>\r\n           <li><i class=\"fa fa-check\"></i> <a href=\"/about/about_careers.htm\">Careers</a></li>\r\n           <li><i class=\"fa fa-check\"></i> <a href=\"/about/about_privacy.htm\">Privacy Policy</a></li>\r\n           <li><i class=\"fa fa-check\"></i> <a href=\"/about/about_cookies.htm\">Cookies Policy</a></li>\r\n           <li><i class=\"fa fa-check\"></i> <a href=\"/about/about_terms_of_use.htm\">Terms of use</a></li>\r\n           <li><i class=\"fa fa-check\"></i> <a href=\"/investors/index.htm\">Investors</a></li>\r\n        </ul>\r\n\r\n                    <p>www.tutorialspoint.com</p>\r\n                </div><!-- footer-section -->\r\n            </div><!-- col-sm-2 -->\r\n            \r\n            <div class=\"col-md-6 col-lg-3 col-xl-2\">\r\n                <div class=\"footer\">\r\n                        <br>\r\n                    <h5 class=\"title margin-b-20\"><b>EXTRA LINKS</b></h5>\r\n                     <ul class=\"\">\r\n           <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/articles/\">Articles</a></li>\r\n           <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/online_dev_tools.htm\">Dev Tools</a></li>\r\n           <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/free_web_graphics.htm\">Free Graphics</a></li>\r\n           <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/online_file_conversion.htm\">File Conversion</a></li>\r\n           <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/shared-tutorials.php\">Shared Tutorials</a></li>\r\n           <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/netmeeting.php\">NetMeeting</a></li>\r\n           <li><i class=\"fa fa-check\"></i> <a href=\"https://www.tutorialspoint.com/free_online_whiteboard.htm\">Whiteboard</a></li>\r\n        </ul>\r\n                </div><!-- footer-section -->\r\n            </div><!-- col-sm-2 -->\r\n            \r\n            <div class=\"col-md-6 col-lg-3 col-xl-2\">\r\n\r\n                <div class=\"footer\">\r\n                        <br>\r\n                    <h5 class=\"title margin-b-20\"><b>CONTACT US</b></h5>\r\n                     <ul>\r\n           <li><p><i class=\"icon icon-map-marker\"></i> <strong>Address:</strong>7th Floor, SP Road, Malabar Hills, Mumbai, Maharashtra,404041</p></li>\r\n           <li><p><i class=\"icon icon-dribbble\"></i> <strong>Website:</strong> <a href=\"http://www.tutorialspoint.com\">www.tutorialspoint.com</a></p></li>\r\n        </ul>\r\n                </div><!-- footer-section -->\r\n            </div><!-- col-sm-2 -->\r\n            \r\n        </div><!-- row -->\r\n    </div><!-- container -->\r\n\r\n</footer>\r\n<!-- footer section end -->\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\n  text-align: center;\n  font-size: 30px;\n  margin-bottom: 40px;\n}\n\n.row{\n  margin-top: 10px;\n}\n\n.error{\n  color: red;\n}\n\n#login_div{\n  padding: 20px;\n  border-color: transparent;\n  border: 1px solid white;\n  border-radius:15px;\n  box-shadow: 2px 5px 8px 8px silver;\n  position: relative;\n}\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section style=\"background-image :url(https://unblast.com/wp-content/uploads/2018/12/Wood-Pattern-2.jpg);\">\n<div class=\"page-info-section set-bg\">\n  <div class=\"container\">\n    <div class=\"site-breadcrumb\">\n      <a href=\"#\">Home</a>\n      <span>Login</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\" id=\"login_div\" style=\"top:1px;\" >\n  <div class=\"row\" >\n    <div class=\"col-md-12\" >\n      <form [formGroup]=\"loginForm\">\n        <div class=\"form-group\">\n          <label>Email address</label>\n          <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Enter Email\">\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Enter Password\">\n          <label class=\"error\">{{errorMessage}}</label>\n        </div>\n        <button type=\"submit\" (click)=\"tryLogin(loginForm.value)\" class=\"btn btn-danger\">Login</button>\n      </form>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"tryFacebookLogin()\">Login with Facebook</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"tryGoogleLogin()\">Login with Google</button>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <p>New to Tutorialspoint ? <a routerLink=\"/register\">Create an account</a></p>\n    </div>\n  </div>\n</div>\n<br><br>  <br><br>\n</section>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_fireauth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/fireauth.service */ "./src/app/shared/fireauth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.errorMessage = '';
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    LoginComponent.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.authService.doFacebookLogin()
            .then(function (res) {
            _this.router.navigate(['/student']);
        });
    };
    LoginComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.router.navigate(['/student']);
        });
    };
    LoginComponent.prototype.tryLogin = function (value) {
        var _this = this;
        this.authService.doLogin(value)
            .then(function (res) {
            _this.router.navigate(['/student']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_fireauth_service__WEBPACK_IMPORTED_MODULE_1__["FireauthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header{\n    text-align: center;\n    font-size: 30px;\n    margin-bottom: 40px;\n  }\n  \n  .row{\n    margin-top: 10px;\n  }\n  \n  .error{\n    color: red;\n  }\n  \n  .success{\n    color: green;\n  }\n  \n  #register_div{\n  padding: 20px;\n  border-color: transparent;\n  border: 1px solid white;\n  border-radius:15px;\n  box-shadow: 2px 5px 8px 8px silver;\n  position: relative;\n}  \n  "

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section style=\"background-image :url(https://unblast.com/wp-content/uploads/2018/12/Wood-Pattern-2.jpg);\">\n<div class=\"page-info-section set-bg\">\n  <div class=\"container\">\n    <div class=\"site-breadcrumb\">\n      <a href=\"#\">Home</a>\n      <span>Register</span>\n    </div>\n  </div>\n</div>\n<div class=\"container\" id=\"register_div\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <form [formGroup]=\"registerForm\">\n        <div class=\"form-group\">\n          <label>Email address</label>\n          <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Enter Email\">\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Enter Password\">\n          <label class=\"error\">{{errorMessage}}</label>\n          <label class=\"success\">{{successMessage}}</label>\n        </div>\n        <button type=\"submit\" (click)=\"tryRegister(registerForm.value)\" class=\"btn btn-danger\">Register</button>\n      </form>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"tryFacebookLogin()\">Register with Facebook</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <button type=\"button\" class=\"btn btn-danger btn-block\" (click)=\"tryGoogleLogin()\">Register with Google</button>\n    </div>\n  </div>\n  \n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <p>Already have an account? <a routerLink=\"/login\">Login</a></p>\n    </div>\n  </div>\n</div>\n<br><br><br>\n</section>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_fireauth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/fireauth.service */ "./src/app/shared/fireauth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router, fb) {
        this.authService = authService;
        this.router = router;
        this.fb = fb;
        this.errorMessage = '';
        this.successMessage = '';
        this.createForm();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    RegisterComponent.prototype.tryFacebookLogin = function () {
        var _this = this;
        this.authService.doFacebookLogin()
            .then(function (res) {
            _this.router.navigate(['/student']);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent.prototype.tryGoogleLogin = function () {
        var _this = this;
        this.authService.doGoogleLogin()
            .then(function (res) {
            _this.router.navigate(['/student']);
        }, function (err) { return console.log(err); });
    };
    RegisterComponent.prototype.tryRegister = function (value) {
        var _this = this;
        this.authService.doRegister(value)
            .then(function (res) {
            console.log(res);
            _this.errorMessage = '';
            _this.successMessage = 'Your account has been created';
        }, function (err) {
            console.log(err);
            _this.errorMessage = err.message;
            _this.successMessage = '';
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_fireauth_service__WEBPACK_IMPORTED_MODULE_1__["FireauthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/shared/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(afAuth, userService, router) {
        this.afAuth = afAuth;
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.userService.getCurrentUser()
                .then(function (user) {
                _this.router.navigate(['/student']);
                return resolve(false);
            }, function (err) {
                return resolve(true);
            });
        });
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
            _shared_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/fireauth.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/fireauth.service.ts ***!
  \********************************************/
/*! exports provided: FireauthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireauthService", function() { return FireauthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FireauthService = /** @class */ (function () {
    function FireauthService(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    FireauthService.prototype.doFacebookLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].FacebookAuthProvider();
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            }, function (err) {
                console.log(err);
                reject(err);
            });
        });
    };
    FireauthService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
            provider.addScope('profile');
            provider.addScope('email');
            _this.afAuth.auth
                .signInWithPopup(provider)
                .then(function (res) {
                resolve(res);
            });
        });
    };
    FireauthService.prototype.doRegister = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().createUserWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    FireauthService.prototype.doLogin = function (value) {
        return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().signInWithEmailAndPassword(value.email, value.password)
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    FireauthService.prototype.doLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser) {
                _this.afAuth.auth.signOut();
                resolve();
            }
            else {
                reject();
            }
        });
    };
    FireauthService.prototype.doAuth = function (provider) {
        var _this = this;
        if (!window.cordova) {
            return this.afAuth.auth.signInWithPopup(provider);
        }
        else {
            this.afAuth.auth.signInWithRedirect(provider)
                .then(function () {
                return _this.afAuth.auth.getRedirectResult().then(function (result) {
                    if (result.user) {
                        _this.router.navigate(['/student']);
                    }
                }).catch(function (error) {
                    console.log('auth error', error);
                });
            });
        }
    };
    FireauthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FireauthService);
    return FireauthService;
}());



/***/ }),

/***/ "./src/app/shared/product.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/product.service.ts ***!
  \*******************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = /** @class */ (function () {
    function ProductService(firebase) {
        this.firebase = firebase;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            prodName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            prodDesc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            prodCost: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            prodUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            prodDisc: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
    }
    ProductService.prototype.getProducts = function () {
        this.productList = this.firebase.list('products');
        return this.productList.snapshotChanges();
    };
    ProductService.prototype.insertProduct = function (product) {
        this.productList.push({
            prodName: product.prodName,
            prodDesc: product.prodDesc,
            prodCost: product.prodCost,
            prodUrl: product.prodUrl,
            prodDisc: product.prodDisc
        });
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/shared/student.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/student.service.ts ***!
  \*******************************************/
/*! exports provided: StudentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentService", function() { return StudentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentService = /** @class */ (function () {
    function StudentService(firebase) {
        this.firebase = firebase;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            location: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    StudentService.prototype.getStudents = function () {
        this.studentList = this.firebase.list('students');
        return this.studentList.snapshotChanges();
    };
    StudentService.prototype.insertStudent = function (student) {
        this.studentList.push({
            fullName: student.fullName,
            email: student.email,
            mobile: student.mobile,
            location: student.location
        });
    };
    StudentService.prototype.populateForm = function (student) {
        this.form.setValue(student);
    };
    StudentService.prototype.updateStudent = function (student) {
        this.studentList.update(student.$key, {
            fullName: student.fullName,
            email: student.email,
            mobile: student.mobile,
            location: student.location
        });
    };
    StudentService.prototype.deleteStudent = function ($key) {
        this.studentList.remove($key);
    };
    StudentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/shared/user.modal.ts":
/*!**************************************!*\
  !*** ./src/app/shared/user.modal.ts ***!
  \**************************************/
/*! exports provided: FirebaseUserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseUserModel", function() { return FirebaseUserModel; });
var FirebaseUserModel = /** @class */ (function () {
    function FirebaseUserModel() {
        this.image = '';
        this.name = '';
        this.provider = '';
    }
    return FirebaseUserModel;
}());



/***/ }),

/***/ "./src/app/shared/user.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/user.service.ts ***!
  \****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(db, afAuth) {
        this.db = db;
        this.afAuth = afAuth;
    }
    UserService.prototype.getCurrentUser = function () {
        return new Promise(function (resolve, reject) {
            var user = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().onAuthStateChanged(function (user) {
                if (user) {
                    resolve(user);
                }
                else {
                    reject('No user logged in');
                }
            });
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/student-list/student-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/student-list/student-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/student-list/student-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/student-list/student-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-inline\">\n  <input class=\"form-control\" name=\"searchInput\" placeholder=\"Search\" #searchInput=\"ngModel\" [(ngModel)]=\"searchText\" style=\"width: 80%;\">\n  <button class=\"btn btn-outline-primary\" (click)=\"searchText=''\">X</button>\n</form><br>\n<div class=\"table-responsive\">\n<table class=\"table table-striped table-condensed table-hover table-bordered\">\n  <thead>\n    <th>Name</th>\n    <th>Email</th>\n    <th>Mobile</th>\n    <th>Location</th>\n    <th></th>\n  </thead>\n  <ng-container *ngFor=\"let student of studentArray\">\n    <tr *ngIf=\"filterCondition(student)\">\n      <td>{{student.fullName}}</td>\n      <td>{{student.email}}</td>\n        <td>{{student.mobile}}</td>\n        <td>{{student.location}}</td>\n        <td>\n          <button class=\"btn btn-outline-info\" (click)=\"studentService.populateForm(student)\"><i class=\"fa fa-pencil\"></i></button>&nbsp;\n          <button class=\"btn btn-outline-danger\" (click)=\"onDelete(student.$key)\"><i class=\"fa fa-trash\"></i></button>\n        </td>\n    </tr>\n    \n  </ng-container>\n</table>\n</div>\n<div class=\"alert alert-danger\" *ngIf=\"showDeletedMessage\">\n  Deleted successfully.\n</div>\n"

/***/ }),

/***/ "./src/app/student-list/student-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/student-list/student-list.component.ts ***!
  \********************************************************/
/*! exports provided: StudentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentListComponent", function() { return StudentListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/student.service */ "./src/app/shared/student.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StudentListComponent = /** @class */ (function () {
    function StudentListComponent(studentService) {
        this.studentService = studentService;
        this.studentArray = [];
        this.searchText = '';
    }
    StudentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.studentService.getStudents().subscribe(function (list) {
            _this.studentArray = list.map(function (item) {
                return __assign({ $key: item.key }, item.payload.val());
            });
        });
    };
    StudentListComponent.prototype.onDelete = function ($key) {
        var _this = this;
        if (confirm('Are you sure to delete this record ?')) {
            this.studentService.deleteStudent($key);
            this.showDeletedMessage = true;
            setTimeout(function () { return _this.showDeletedMessage = false; }, 3000);
        }
    };
    StudentListComponent.prototype.filterCondition = function (student) {
        return student.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1;
    };
    StudentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student-list',
            template: __webpack_require__(/*! ./student-list.component.html */ "./src/app/student-list/student-list.component.html"),
            styles: [__webpack_require__(/*! ./student-list.component.css */ "./src/app/student-list/student-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"]])
    ], StudentListComponent);
    return StudentListComponent;
}());



/***/ }),

/***/ "./src/app/student/student.component.css":
/*!***********************************************!*\
  !*** ./src/app/student/student.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n    padding: 20px;\n    border-color: transparent;\n    border: 1px solid white;\n    border-radius:15px;\n    box-shadow: 2px 5px 8px 8px silver;\n    \n}\n#student{\n    padding: 20px;\n    border-color: transparent;\n    border: 1px solid white;\n    border-radius:15px;\n    box-shadow: 2px 5px 8px 8px silver;\n    \n}\n#student-list{\n    padding: 20px;\n    border-color: transparent;\n    border: 1px solid white;\n    border-radius:15px;\n    box-shadow: 2px 5px 8px 8px silver;\n}\n.image{\n    width: 50px;\n    height: 50px;\n    border-radius: 50px;\n}"

/***/ }),

/***/ "./src/app/student/student.component.html":
/*!************************************************!*\
  !*** ./src/app/student/student.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-md-12\" class=\"card\" style=\"top:200px;\">\n    <div class=\"row\" >  \n    <div class=\"col-md-6\">\n        <img style=\"display:inline;\" class=\"image img-rounded img-reponsive\" [src]=\"user.image\" alt=\"User Image\">&nbsp;&nbsp;\n        <h3 style=\"display:inline; white-space:nowrap;\" >{{user.name}}</h3>&nbsp;       \n    </div>      \n    <div class=\"col-md-2\">  \n        \n    </div> \n    <div class=\"col-md-4\">     \n        <button style=\"float:right;\" type=\"button\" class=\"btn btn-danger\" (click)=\"logout()\">Logout</button>\n    </div>    \n    </div>      \n    </div>\n<br><br><br><br><br>\n  <div class=\"row\">\n  <div class=\"col-md-4 col-xs-12\" id=\"student\" style=\"top:200px;\">\n    <div class=\"well\">\n      <h2>Insert Records</h2>\n    </div>\n    <form [formGroup]=\"this.studentService.form\" (ngSubmit)=\"onSubmit()\">\n      <input type=\"hidden\" formControlName=\"$key\">\n      <div class=\"form-group\">\n        <label>Full Name</label>\n        <input formControlName=\"fullName\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.fullName.errors}\">\n        <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.fullName.errors\">\n          This field is required.</div>\n      </div>\n      <div class=\"form-group\">\n        <label>Email</label>\n        <input formControlName=\"email\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.email.errors}\">\n        <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.email.errors\">\n          Invalid email address.</div>\n      </div>\n      <div class=\"form-group\">\n        <label>Mobile</label>\n        <input formControlName=\"mobile\" class=\"form-control\" [ngClass]=\"{'is-invalid':submitted && formControls.mobile.errors}\">\n        <div class=\"invalid-feedback\" *ngIf=\"submitted && formControls.mobile.errors\">\n          <label *ngIf=\"formControls.mobile.errors.required\">This field is required.</label>\n          <label *ngIf=\"formControls.mobile.errors.minlength\">Atleast 8 numbers.</label>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label>Location</label>\n        <input formControlName=\"location\" class=\"form-control\">\n      </div>\n      <div class=\"form-group\">\n        <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n      </div>\n    </form>\n    <div class=\"alert alert-info\"  *ngIf=\"showSuccessMessage\">\n      Submitted successfully.\n    </div>\n  </div><br><br><br><br><br>\n  <div class=\"col-md-1 col-xs-12\">\n  </div>\n  <div class=\"col-md-7 col-xs-12\" id=\"student-list\" style=\"top:200px;\">\n      <div class=\"well\">\n          <h2>Recent Records</h2>\n        </div>\n    <app-student-list></app-student-list>\n  </div>\n</div>\n</div>\n<br><br>\n"

/***/ }),

/***/ "./src/app/student/student.component.ts":
/*!**********************************************!*\
  !*** ./src/app/student/student.component.ts ***!
  \**********************************************/
/*! exports provided: StudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentComponent", function() { return StudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_student_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/student.service */ "./src/app/shared/student.service.ts");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _shared_fireauth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/fireauth.service */ "./src/app/shared/fireauth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_user_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/user.modal */ "./src/app/shared/user.modal.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var StudentComponent = /** @class */ (function () {
    function StudentComponent(studentService, userService, authService, route, location, fb) {
        this.studentService = studentService;
        this.userService = userService;
        this.authService = authService;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.formControls = this.studentService.form.controls;
        this.user = new _shared_user_modal__WEBPACK_IMPORTED_MODULE_7__["FirebaseUserModel"]();
    }
    StudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (routeData) {
            var data = routeData['data'];
            if (data) {
                _this.user = data;
                _this.createForm(_this.user.name);
            }
        });
    };
    StudentComponent.prototype.createForm = function (name) {
        this.profileForm = this.fb.group({
            name: [name, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    };
    StudentComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.studentService.form.valid) {
            if (this.studentService.form.get('$key').value == null) {
                this.studentService.insertStudent(this.studentService.form.value);
            }
            else {
                this.studentService.updateStudent(this.studentService.form.value);
            }
            this.showSuccessMessage = true;
            setTimeout(function () { return _this.showSuccessMessage = false; }, 6000);
            this.submitted = false;
            this.studentService.form.reset();
            this.studentService.form.setValue({
                $key: null,
                fullName: '',
                email: '',
                mobile: '',
                location: ''
            });
        }
    };
    StudentComponent.prototype.logout = function () {
        var _this = this;
        this.authService.doLogout()
            .then(function (res) {
            _this.location.back();
        }, function (error) {
            console.log('Logout error', error);
        });
    };
    StudentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-student',
            template: __webpack_require__(/*! ./student.component.html */ "./src/app/student/student.component.html"),
            styles: [__webpack_require__(/*! ./student.component.css */ "./src/app/student/student.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_student_service__WEBPACK_IMPORTED_MODULE_1__["StudentService"],
            _shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _shared_fireauth_service__WEBPACK_IMPORTED_MODULE_3__["FireauthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/student/user.resolver.ts":
/*!******************************************!*\
  !*** ./src/app/student/user.resolver.ts ***!
  \******************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user.service */ "./src/app/shared/user.service.ts");
/* harmony import */ var _shared_user_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user.modal */ "./src/app/shared/user.modal.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserResolver = /** @class */ (function () {
    function UserResolver(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserResolver.prototype.resolve = function (route) {
        var _this = this;
        var user = new _shared_user_modal__WEBPACK_IMPORTED_MODULE_3__["FirebaseUserModel"]();
        return new Promise(function (resolve, reject) {
            _this.userService.getCurrentUser()
                .then(function (res) {
                if (res.providerData[0].providerId === 'password') {
                    user.image = '/assets/bg-01.jpg';
                    user.name = res.displayName;
                    user.provider = res.providerData[0].providerId;
                    return resolve(user);
                }
                else {
                    user.image = res.photoURL;
                    user.name = res.displayName;
                    user.provider = res.providerData[0].providerId;
                    return resolve(user);
                }
            }, function (err) {
                _this.router.navigate(['/login']);
                return reject(err);
            });
        });
    };
    UserResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_shared_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserResolver);
    return UserResolver;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyDMuft5ZVO4WSUsEJrV7eyU0Yth0OCuX0M",
        authDomain: "angulartut-92e06.firebaseapp.com",
        databaseURL: "https://angulartut-92e06.firebaseio.com",
        projectId: "angulartut-92e06",
        storageBucket: "angulartut-92e06.appspot.com",
        messagingSenderId: "1070900210440"
    }
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Tutorials\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map