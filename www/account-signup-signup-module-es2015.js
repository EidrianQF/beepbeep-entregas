(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/signup/signup.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/signup/signup.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\">\r\n<form #form=\"ngForm\" (ngSubmit)=\"signup(form.value)\">\r\n  <div class=\"content\"></div>\r\n  <ion-row>\r\n    <ion-col>\r\n      <h1 class=\"welcome_text\">\r\n        {{text.signup_title}}\r\n      </h1>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col>\r\n      <p style=\"color: rgb(82, 82, 82);font-family: 'SF Pro Display';font-weight: 400;\">Unete a la familia <b>BeepBeep Entregas</b></p>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"4\" style=\"margin-top: 10.5px !important;\">\r\n    <span>Tu Nombre</span>\r\n    </ion-col>\r\n    <ion-col size=\"8\">\r\n      <ion-input type=\"text\" clearInput name=\"name\" ngModel required placeholder=\"Tu nombre completo\"></ion-input>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"4\" style=\"margin-top: 10.5px !important;\">\r\n    <span>Email</span>\r\n    </ion-col>\r\n    <ion-col size=\"8\">\r\n      <ion-input type=\"email\" clearInput name=\"email\" ngModel required placeholder=\"Ej.- example@hotmail.com\"></ion-input>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <ion-row>\r\n    <ion-col size=\"4\" style=\"margin-top: 10.5px !important;\">\r\n    <span>Password</span>\r\n    </ion-col>\r\n    <ion-col size=\"8\">\r\n      <ion-input type=\"password\" clearInput name=\"password\" ngModel required placeholder=\"*******\"></ion-input>\r\n    </ion-col>\r\n  </ion-row>\r\n  <br />\r\n  <div class=\"row\">\r\n    <ion-button expand=\"block\" [disabled]=\"!form.valid\" type=\"submit\" color=\"primary\" style=\"font-family: 'SF Pro Display';font-weight: 400;position: relative;text-align: center;\">\r\n      <ion-icon name=\"person-add\" style=\"position: absolute;left: 10px;border-right: 1px solid #c3c3c3;padding-right: 5px;\"></ion-icon> <span class=\"capitalize\" style=\"font-size: 14px;\">{{ text.signup_button }}</span>\r\n    </ion-button>\r\n  </div>\r\n</form>\r\n\r\n<ion-row>\r\n  <ion-col>\r\n    <div class=\"row\" style=\"border-top: 1px solid #cecece;padding-top: 12px;\">\r\n      <ion-button expand=\"block\" (click)=\"fbSignup()\" style=\"--background: #3b5998 !important;font-family: 'SF Pro Display';font-weight: 400;position: relative;\">\r\n        <ion-icon name=\"logo-facebook\" style=\"position: absolute;left: 10px;border-right: 1px solid #c3c3c3;padding-right: 5px;\"></ion-icon> <span class=\"capitalize\" style=\"position: absolute;left: 75px;font-size: 14px;\">Registrate con Facebook</span>\r\n      </ion-button>\r\n    </div>\r\n  </ion-col>\r\n  \r\n</ion-row>\r\n\r\n<br />\r\n<ion-row>\r\n  <ion-col>\r\n    <div style=\"text-align: center;\">\r\n      <small style=\"color: rgb(31, 31, 31);font-family: 'SF Pro Display', 'normal';font-weight: 100;\">\r\n        Al hacer clic en Registrarse, crear?? una cuenta y aceptar?? nuestros <b>t??rminos de servicio</b> y <b>pol??tica de privacidad</b>\r\n      </small>\r\n    </div>\r\n  </ion-col>\r\n</ion-row>\r\n</ion-content>\r\n\r\n<ion-footer style=\"padding: 15px;text-align: center;\">\r\n  <ion-label color=\"medium\"  mode=\"ios\" routerLink=\"/login\" routerDirection=\"back\">Ya tienes una cuenta? <b>Inicia Sesi??n</b></ion-label> \r\n</ion-footer>\r\n  ");

/***/ }),

/***/ "./src/app/account/signup/signup.module.ts":
/*!*************************************************!*\
  !*** ./src/app/account/signup/signup.module.ts ***!
  \*************************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/account/signup/signup.page.ts");







const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
let SignupPageModule = class SignupPageModule {
};
SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/account/signup/signup.page.scss":
/*!*************************************************!*\
  !*** ./src/app/account/signup/signup.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".welcome_text {\n  font-family: \"SF Pro Display\";\n  font-weight: 900;\n  font-style: normal;\n  letter-spacing: 0.8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9zaWdudXAvQzpcXGlvbmljXFxiZWVwYmVlcFxcdXN1YXJpb3Mvc3JjXFxhcHBcXGFjY291bnRcXHNpZ251cFxcc2lnbnVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWNjb3VudC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L3NpZ251cC9zaWdudXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi53ZWxjb21lX3RleHQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdTRiBQcm8gRGlzcGxheSc7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuOHB4XHJcbn0iLCIud2VsY29tZV90ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgUHJvIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogMC44cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/account/signup/signup.page.ts":
/*!***********************************************!*\
  !*** ./src/app/account/signup/signup.page.ts ***!
  \***********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_server_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/server.service */ "./src/app/service/server.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");





// Facebook


let SignupPage = class SignupPage {
    constructor(route, server, toastController, nav, loadingController, events, fb, fireAuth) {
        this.route = route;
        this.server = server;
        this.toastController = toastController;
        this.nav = nav;
        this.loadingController = loadingController;
        this.events = events;
        this.fb = fb;
        this.fireAuth = fireAuth;
        this.dating = [];
        this.text = JSON.parse(localStorage.getItem('app_text'));
    }
    ngOnInit() {
    }
    signup(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                message: 'Porfavor Espere...',
            });
            yield loading.present();
            this.server.signup(data).subscribe((response) => {
                if (response.msg != "done") {
                    this.presentToast(response.msg, 'danger');
                }
                else {
                    localStorage.setItem('user_id', response.user_id);
                    this.events.publish('user_login', response.user_id);
                    this.presentToast("Cuenta Creada con exito, Bienvenido(a)", 'success');
                    this.nav.navigateRoot('/home');
                }
                loading.dismiss();
            });
        });
    }
    fbSignup() {
        this.fb.login(['public_profile', 'email'])
            .then((res) => {
            if (res.status == 'connected') {
                // Usuarios Logeado...
                let url = "https://graph.facebook.com/me?fields=id,name,email&access_token=" + res.authResponse.accessToken;
                this.server.signupWithfb(url).subscribe(data => {
                    this.signup({ name: data['name'],
                        email: data['email'],
                        phone: 'null',
                        password: data['id'],
                        pswfb: data['id'] });
                });
            }
        }).catch(e => {
            this.presentToast("Error logging into Facebook " + e, 'danger');
        });
        this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);
    }
    presentToast(txt, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: txt,
                duration: 3000,
                position: 'top',
                mode: 'ios',
                color: color
            });
            toast.present();
        });
    }
    goBck() {
        this.nav.navigateRoot('welcome');
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__["Facebook"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/signup/signup.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.page.scss */ "./src/app/account/signup/signup.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _service_server_service__WEBPACK_IMPORTED_MODULE_3__["ServerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Events"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_5__["Facebook"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=account-signup-signup-module-es2015.js.map