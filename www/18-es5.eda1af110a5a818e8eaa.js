(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{EpBj:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),i=u("mrSG"),o=u("r28Q"),t=u("ZZ/e"),r=u("Zr1d"),a=u("SPri");class s{constructor(l,n,u,e,i,o,t,r){this.route=l,this.server=n,this.toastController=u,this.keyboard=e,this.nav=i,this.loadingController=o,this.events=t,this.fb=r,this.email="",this.password="",this.isLoggedIn=!1,this.users={id:"",name:"",email:"",picture:{data:{url:""}}},this.isKeyboardHide=!0,this.text=JSON.parse(localStorage.getItem("app_text"))}ngOnInit(){this.keyboard.onKeyboardWillShow().subscribe(()=>{this.isKeyboardHide=!1}),this.keyboard.onKeyboardWillHide().subscribe(()=>{this.isKeyboardHide=!0})}login(l){return i.__awaiter(this,void 0,void 0,(function*(){const n=yield this.loadingController.create({message:"Porfavor Espere..."});yield n.present(),this.server.login(l).subscribe(l=>{"done"!=l.msg?this.presentToast(l.msg):(localStorage.setItem("user_id",l.user_id),this.events.publish("user_login",l.user_id),this.nav.navigateRoot("city")),n.dismiss()})}))}loginfb(l){return i.__awaiter(this,void 0,void 0,(function*(){const n=yield this.loadingController.create({message:"Porfavor Espere..."});yield n.present(),this.server.loginfb(l).subscribe(l=>{"done"!=l.msg?this.presentToast(l.msg):(localStorage.setItem("user_id",l.user_id),this.events.publish("user_login",l.user_id),this.nav.navigateRoot("city")),n.dismiss()})}))}fbLogin(){this.fb.login(["public_profile","email"]).then(l=>{"connected"==l.status&&this.server.signupWithfb("https://graph.facebook.com/me?fields=id,email&access_token="+l.authResponse.accessToken).subscribe(l=>{this.loginfb({email:l.email,password:l.id})})}).catch(l=>{alert("Error logging into Facebook "+l)}),this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART)}presentToast(l){return i.__awaiter(this,void 0,void 0,(function*(){(yield this.toastController.create({message:l,duration:3e3,position:"top",mode:"ios",color:"dark"})).present()}))}goBck(){this.nav.navigateRoot("welcome")}}class b{}var p=u("pMnS"),c=u("oBZk"),d=u("iInd"),g=u("SVse"),m=u("s7LF"),h=e.Bb({encapsulation:0,styles:[['.welcome_text[_ngcontent-%COMP%]{font-family:"SF Pro Display";font-weight:900;font-style:normal;letter-spacing:.8px;z-index:100}']],data:{}});function f(l){return e.Zb(0,[(l()(),e.Db(0,0,null,null,8,"ion-footer",[["style","padding: 15px;text-align: center;"]],null,null,null,c.tb,c.r)),e.Cb(1,49152,null,0,t.D,[e.j,e.p,e.F],null,null),(l()(),e.Db(2,0,null,0,6,"ion-label",[["color","medium"],["mode","ios"],["routerDirection","forward"],["routerLink","/signup"]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==e.Pb(l,4).onClick()&&i),"click"===n&&(i=!1!==e.Pb(l,5).onClick(u)&&i),i}),c.Eb,c.C)),e.Cb(3,49152,null,0,t.R,[e.j,e.p,e.F],{color:[0,"color"],mode:[1,"mode"]},null),e.Cb(4,16384,null,0,d.n,[d.m,d.a,[8,null],e.L,e.p],{routerLink:[0,"routerLink"]},null),e.Cb(5,737280,null,0,t.Tb,[g.h,t.Nb,e.p,d.m,[2,d.n]],{routerDirection:[0,"routerDirection"]},null),(l()(),e.Xb(-1,0,["No tienes una cuenta? "])),(l()(),e.Db(7,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Registrate"]))],(function(l,n){l(n,3,0,"medium","ios"),l(n,4,0,"/signup"),l(n,5,0,"forward")}),null)}function C(l){return e.Zb(0,[(l()(),e.Db(0,0,null,null,80,"ion-content",[["class","ion-padding"],["transparent",""]],null,null,null,c.qb,c.o)),e.Cb(1,49152,null,0,t.y,[e.j,e.p,e.F],null,null),(l()(),e.Db(2,0,null,0,67,"form",[["novalidate",""],["style","margin-top: 15px;"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0,o=l.component;return"submit"===n&&(i=!1!==e.Pb(l,4).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.Pb(l,4).onReset()&&i),"ngSubmit"===n&&(i=!1!==o.login(e.Pb(l,4).value)&&i),i}),null,null)),e.Cb(3,16384,null,0,m.o,[],null,null),e.Cb(4,4210688,[["form",4]],0,m.i,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),e.Ub(2048,null,m.a,null,[m.i]),e.Cb(6,16384,null,0,m.h,[[4,m.a]],null,null),(l()(),e.Db(7,0,null,null,5,"ion-row",[],null,null,null,c.Pb,c.N)),e.Cb(8,49152,null,0,t.nb,[e.j,e.p,e.F],null,null),(l()(),e.Db(9,0,null,0,3,"ion-col",[],null,null,null,c.pb,c.n)),e.Cb(10,49152,null,0,t.x,[e.j,e.p,e.F],null,null),(l()(),e.Db(11,0,null,0,1,"h1",[["class","welcome_text"]],null,null,null,null,null)),(l()(),e.Xb(12,null,[" "," "])),(l()(),e.Db(13,0,null,null,5,"ion-row",[],null,null,null,c.Pb,c.N)),e.Cb(14,49152,null,0,t.nb,[e.j,e.p,e.F],null,null),(l()(),e.Db(15,0,null,0,3,"ion-col",[],null,null,null,c.pb,c.n)),e.Cb(16,49152,null,0,t.x,[e.j,e.p,e.F],null,null),(l()(),e.Db(17,0,null,0,1,"p",[["style","color: rgb(82, 82, 82);font-family: 'SF Pro Display';font-weight: 400;"]],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Inicia Sesi\xf3n para continuar"])),(l()(),e.Db(19,0,null,null,16,"ion-row",[],null,null,null,c.Pb,c.N)),e.Cb(20,49152,null,0,t.nb,[e.j,e.p,e.F],null,null),(l()(),e.Db(21,0,null,0,3,"ion-col",[["size","3"],["style","margin-top: 10.5px !important;"]],null,null,null,c.pb,c.n)),e.Cb(22,49152,null,0,t.x,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Db(23,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Email"])),(l()(),e.Db(25,0,null,0,10,"ion-col",[["size","9"]],null,null,null,c.pb,c.n)),e.Cb(26,49152,null,0,t.x,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Db(27,0,null,0,8,"ion-input",[["clearInput",""],["name","email"],["placeholder","example@example.com"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,o=l.component;return"ionBlur"===n&&(i=!1!==e.Pb(l,30)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Pb(l,30)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(o.email=u)&&i),i}),c.zb,c.x)),e.Cb(28,16384,null,0,m.l,[],{required:[0,"required"]},null),e.Ub(1024,null,m.d,(function(l){return[l]}),[m.l]),e.Cb(30,16384,null,0,t.Vb,[e.p],null,null),e.Ub(1024,null,m.e,(function(l){return[l]}),[t.Vb]),e.Cb(32,671744,null,0,m.j,[[2,m.a],[6,m.d],[8,null],[6,m.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Ub(2048,null,m.f,null,[m.j]),e.Cb(34,16384,null,0,m.g,[[4,m.f]],null,null),e.Cb(35,49152,null,0,t.K,[e.j,e.p,e.F],{clearInput:[0,"clearInput"],name:[1,"name"],placeholder:[2,"placeholder"],required:[3,"required"],type:[4,"type"]},null),(l()(),e.Db(36,0,null,null,16,"ion-row",[],null,null,null,c.Pb,c.N)),e.Cb(37,49152,null,0,t.nb,[e.j,e.p,e.F],null,null),(l()(),e.Db(38,0,null,0,3,"ion-col",[["size","3"],["style","margin-top: 10.5px !important;"]],null,null,null,c.pb,c.n)),e.Cb(39,49152,null,0,t.x,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Db(40,0,null,0,1,"span",[],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Password"])),(l()(),e.Db(42,0,null,0,10,"ion-col",[["size","9"]],null,null,null,c.pb,c.n)),e.Cb(43,49152,null,0,t.x,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Db(44,0,null,0,8,"ion-input",[["clearInput",""],["name","password"],["placeholder","*********"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0,o=l.component;return"ionBlur"===n&&(i=!1!==e.Pb(l,47)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Pb(l,47)._handleInputEvent(u.target)&&i),"ngModelChange"===n&&(i=!1!==(o.password=u)&&i),i}),c.zb,c.x)),e.Cb(45,16384,null,0,m.l,[],{required:[0,"required"]},null),e.Ub(1024,null,m.d,(function(l){return[l]}),[m.l]),e.Cb(47,16384,null,0,t.Vb,[e.p],null,null),e.Ub(1024,null,m.e,(function(l){return[l]}),[t.Vb]),e.Cb(49,671744,null,0,m.j,[[2,m.a],[6,m.d],[8,null],[6,m.e]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Ub(2048,null,m.f,null,[m.j]),e.Cb(51,16384,null,0,m.g,[[4,m.f]],null,null),e.Cb(52,49152,null,0,t.K,[e.j,e.p,e.F],{clearInput:[0,"clearInput"],name:[1,"name"],placeholder:[2,"placeholder"],required:[3,"required"],type:[4,"type"]},null),(l()(),e.Db(53,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Db(54,0,null,null,7,"ion-row",[],null,null,null,c.Pb,c.N)),e.Cb(55,49152,null,0,t.nb,[e.j,e.p,e.F],null,null),(l()(),e.Db(56,0,null,0,5,"ion-col",[["size","12"]],null,null,null,c.pb,c.n)),e.Cb(57,49152,null,0,t.x,[e.j,e.p,e.F],{size:[0,"size"]},null),(l()(),e.Db(58,0,null,0,3,"a",[["routerDirection","forward"],["routerLink","/forgot"],["style","color: rgb(160, 23, 23) !important;font-family: 'SF Pro Display';font-weight: 400;float: right;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==e.Pb(l,59).onClick(u)&&i),"click"===n&&(i=!1!==e.Pb(l,60).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&i),i}),null,null)),e.Cb(59,737280,null,0,t.Tb,[g.h,t.Nb,e.p,d.m,[2,d.n]],{routerDirection:[0,"routerDirection"]},null),e.Cb(60,671744,null,0,d.o,[d.m,d.a,g.h],{routerLink:[0,"routerLink"]},null),(l()(),e.Xb(61,null,[" "," "])),(l()(),e.Db(62,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Db(63,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Db(64,0,null,null,5,"ion-button",[["color","primary"],["expand","block"],["style","font-family: 'SF Pro Display';font-weight: 400;position: relative;text-align: center;"],["type","submit"]],null,null,null,c.hb,c.f)),e.Cb(65,49152,null,0,t.o,[e.j,e.p,e.F],{color:[0,"color"],expand:[1,"expand"],type:[2,"type"]},null),(l()(),e.Db(66,0,null,0,1,"ion-icon",[["name","log-in"],["style","position: absolute;left: 10px;border-right: 1px solid #c3c3c3;padding-right: 5px;"]],null,null,null,c.wb,c.u)),e.Cb(67,49152,null,0,t.G,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Db(68,0,null,0,1,"span",[["class","capitalize"],["style","font-size: 14px;"]],null,null,null,null,null)),(l()(),e.Xb(69,null,["",""])),(l()(),e.Db(70,0,null,0,10,"ion-row",[],null,null,null,c.Pb,c.N)),e.Cb(71,49152,null,0,t.nb,[e.j,e.p,e.F],null,null),(l()(),e.Db(72,0,null,0,8,"ion-col",[],null,null,null,c.pb,c.n)),e.Cb(73,49152,null,0,t.x,[e.j,e.p,e.F],null,null),(l()(),e.Db(74,0,null,0,6,"div",[["class","row"],["style","border-top: 1px solid #cecece;padding-top: 12px;"]],null,null,null,null,null)),(l()(),e.Db(75,0,null,null,5,"ion-button",[["expand","block"],["style","--background: #3b5998 !important;font-family: 'SF Pro Display';font-weight: 400;position: relative;"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.fbLogin()&&e),e}),c.hb,c.f)),e.Cb(76,49152,null,0,t.o,[e.j,e.p,e.F],{expand:[0,"expand"]},null),(l()(),e.Db(77,0,null,0,1,"ion-icon",[["name","logo-facebook"],["style","position: absolute;left: 10px;border-right: 1px solid #c3c3c3;padding-right: 5px;"]],null,null,null,c.wb,c.u)),e.Cb(78,49152,null,0,t.G,[e.j,e.p,e.F],{name:[0,"name"]},null),(l()(),e.Db(79,0,null,0,1,"span",[["class","capitalize"],["style","position: absolute;left: 75px;font-size: 14px;"]],null,null,null,null,null)),(l()(),e.Xb(-1,null,["Entrar con Facebook"])),(l()(),e.sb(16777216,null,null,1,null,f)),e.Cb(82,16384,null,0,g.j,[e.Y,e.T],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,22,0,"3"),l(n,26,0,"9"),l(n,28,0,""),l(n,32,0,"email",u.email),l(n,35,0,"","email","example@example.com","","email"),l(n,39,0,"3"),l(n,43,0,"9"),l(n,45,0,""),l(n,49,0,"password",u.password),l(n,52,0,"","password","*********","","password"),l(n,57,0,"12"),l(n,59,0,"forward"),l(n,60,0,"/forgot"),l(n,65,0,"primary","block","submit"),l(n,67,0,"log-in"),l(n,76,0,"block"),l(n,78,0,"logo-facebook"),l(n,82,0,u.isKeyboardHide)}),(function(l,n){var u=n.component;l(n,2,0,e.Pb(n,6).ngClassUntouched,e.Pb(n,6).ngClassTouched,e.Pb(n,6).ngClassPristine,e.Pb(n,6).ngClassDirty,e.Pb(n,6).ngClassValid,e.Pb(n,6).ngClassInvalid,e.Pb(n,6).ngClassPending),l(n,12,0,u.text.login_title),l(n,27,0,e.Pb(n,28).required?"":null,e.Pb(n,34).ngClassUntouched,e.Pb(n,34).ngClassTouched,e.Pb(n,34).ngClassPristine,e.Pb(n,34).ngClassDirty,e.Pb(n,34).ngClassValid,e.Pb(n,34).ngClassInvalid,e.Pb(n,34).ngClassPending),l(n,44,0,e.Pb(n,45).required?"":null,e.Pb(n,51).ngClassUntouched,e.Pb(n,51).ngClassTouched,e.Pb(n,51).ngClassPristine,e.Pb(n,51).ngClassDirty,e.Pb(n,51).ngClassValid,e.Pb(n,51).ngClassInvalid,e.Pb(n,51).ngClassPending),l(n,58,0,e.Pb(n,60).target,e.Pb(n,60).href),l(n,61,0,u.text.login_forgot_password),l(n,69,0,u.text.login_button)}))}var y=e.zb("app-login",s,(function(l){return e.Zb(0,[(l()(),e.Db(0,0,null,null,1,"app-login",[],null,null,null,C,h)),e.Cb(1,114688,null,0,s,[d.a,o.a,t.Wb,r.a,t.Nb,t.Kb,t.h,a.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]);u.d(n,"LoginPageModuleNgFactory",(function(){return P}));var P=e.Ab(b,[],(function(l){return e.Mb([e.Nb(512,e.m,e.lb,[[8,[p.a,y]],[3,e.m],e.D]),e.Nb(4608,g.l,g.k,[e.z,[2,g.t]]),e.Nb(4608,m.n,m.n,[]),e.Nb(4608,t.c,t.c,[e.F,e.g]),e.Nb(4608,t.Mb,t.Mb,[t.c,e.m,e.w]),e.Nb(4608,t.Rb,t.Rb,[t.c,e.m,e.w]),e.Nb(1073742336,g.b,g.b,[]),e.Nb(1073742336,m.m,m.m,[]),e.Nb(1073742336,m.b,m.b,[]),e.Nb(1073742336,t.Ib,t.Ib,[]),e.Nb(1073742336,d.p,d.p,[[2,d.u],[2,d.m]]),e.Nb(1073742336,b,b,[]),e.Nb(1024,d.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);