webpackJsonp([17],{0:function(t,e,n){t.exports=n("cDNt")},"20fz":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(){}return t}()},JZIl:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n("2LMR"),r=n("BkNc"),a=n("HAwn"),i=function(){function t(t,e,n){this.af=t,this.router=e,this.afDB=n}return t.prototype.login=function(t,e){var n=this;return new Promise(function(o,r){n.af.auth.signInWithEmailAndPassword(t,e).then(function(t){var e=n.getuserdetails(t.uid);e.subscribe(function(r){e.update({status:"online"});var a={uid:t.uid,details:r};localStorage.setItem("user",JSON.stringify(a)),n.setLogginSession(!0),o("Login Success")})}).catch(function(t){r(t)})})},t.prototype.getuserdetails=function(t){return this.afDB.object("/agents/"+t)},t.prototype.logout=function(){var t=this.getuseruid();this.getuserdetails(t).update({status:"offline"}),this.setLogginSession(!1),this.af.auth.signOut(),this.router.navigate(["./login"])},t.prototype.setLogginSession=function(t){t?localStorage.setItem("isLogged","true"):localStorage.removeItem("isLogged")},t.prototype.getLoginState=function(){return!!localStorage.getItem("isLogged")},t.prototype.getuseruid=function(){return JSON.parse(localStorage.getItem("user")).uid},t.ctorParameters=function(){return[{type:o.a},{type:r.l},{type:a.a}]},t}()},aoCP:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(){this.isActive=!1,this.showMenu=""}return t.prototype.eventCalled=function(){this.isActive=!this.isActive},t.prototype.addExpandClass=function(t){t===this.showMenu?this.showMenu="0":this.showMenu=t},t}()},cDNt:function(t,e,n){"use strict";function o(t){return new d.a(t,"/assets/i18n/",".json")}function r(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),i["\u0275did"](212992,null,0,f.p,[f.b,i.ViewContainerRef,i.ComponentFactoryResolver,[8,null],i.ChangeDetectorRef],null,null),(t()(),i["\u0275ted"](null,["\n"]))],function(t,e){t(e,1,0)},null)}function a(t){return i["\u0275vid"](0,[(t()(),i["\u0275eld"](0,null,null,2,"app-root",[],null,[["window","beforeunload"]],function(t,e,n){var o=!0;if("window:beforeunload"===e){o=!1!==i["\u0275nov"](t,2).beforeunloadHandler(n)&&o}return o},r,v)),i["\u0275prd"](512,null,p.a,p.a,[g.a,f.l,h.a]),i["\u0275did"](49152,null,0,s,[y.a,p.a],null,null)],null,null)}Object.defineProperty(e,"__esModule",{value:!0});var i=n("/oeL"),u={production:!0},d=n("kkjc"),l=function(){function t(){}return t}(),c=n("9Qcf"),p=n("JZIl"),s=function(){function t(t,e){this.translate=t,this.authService=e,t.addLangs(["en","fr","ur","es","it","fa"]),t.setDefaultLang("en");var n=t.getBrowserLang();t.use(n.match(/en|fr|ur|es|it|fa/)?n:"en")}return t.prototype.beforeunloadHandler=function(t){this.authService.logout()},t.ctorParameters=function(){return[{type:c.b},{type:p.a}]},t}(),m=[""],f=n("BkNc"),g=n("2LMR"),h=n("HAwn"),y=n("WDs4"),b=[m],v=i["\u0275crt"]({encapsulation:0,styles:b,data:{}}),I=i["\u0275ccf"]("app-root",s,a,{},{},[]),L=n("qbdv"),C=n("fc+i"),S=n("f9zQ"),A=n("fL27"),w=n("EyWH"),N=n("bm2B"),k=n("CPp0"),P=n("13je"),R=n("d0aI"),M=n("8gzm"),j=n("niyx"),B=n("wW3n"),D=n("wvx+"),F=n("a3e3"),O=n("t0d0"),E=n("R08E"),J=n("Qg/J"),T=n("maBJ"),_=function(){function t(t){this.router=t}return t.prototype.canActivate=function(){return!!localStorage.getItem("isLogged")||(this.router.navigate(["/login"]),!1)},t.ctorParameters=function(){return[{type:f.l}]},t}(),q=(function(){function t(){}}(),n("o+mL"),n("aoCP"),n("20fz"),n("tCmA"),function(){function t(){}return t}()),Z=n("q+Vp"),z=i["\u0275cmf"](l,[s],function(t){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[I]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](5120,i.LOCALE_ID,i["\u0275m"],[[3,i.LOCALE_ID]]),i["\u0275mpd"](4608,L.n,L.m,[i.LOCALE_ID]),i["\u0275mpd"](5120,i.APP_ID,i["\u0275f"],[]),i["\u0275mpd"](5120,i.IterableDiffers,i["\u0275k"],[]),i["\u0275mpd"](5120,i.KeyValueDiffers,i["\u0275l"],[]),i["\u0275mpd"](4608,C.c,C.t,[L.d]),i["\u0275mpd"](6144,i.Sanitizer,null,[C.c]),i["\u0275mpd"](4608,C.f,C.g,[]),i["\u0275mpd"](5120,C.d,function(t,e,n,o){return[new C.l(t),new C.p(e),new C.o(n,o)]},[L.d,L.d,L.d,C.f]),i["\u0275mpd"](4608,C.e,C.e,[C.d,i.NgZone]),i["\u0275mpd"](135680,C.n,C.n,[L.d]),i["\u0275mpd"](4608,C.m,C.m,[C.e,C.n]),i["\u0275mpd"](5120,S.a,A.d,[]),i["\u0275mpd"](5120,S.c,A.e,[]),i["\u0275mpd"](4608,S.b,A.c,[S.a,S.c]),i["\u0275mpd"](5120,i.RendererFactory2,A.f,[C.m,S.b,i.NgZone]),i["\u0275mpd"](6144,C.q,null,[C.n]),i["\u0275mpd"](4608,i.Testability,i.Testability,[i.NgZone]),i["\u0275mpd"](4608,C.h,C.h,[L.d]),i["\u0275mpd"](4608,C.j,C.j,[L.d]),i["\u0275mpd"](4608,w.b,A.b,[i.RendererFactory2,C.b]),i["\u0275mpd"](4608,N.u,N.u,[]),i["\u0275mpd"](4608,k.c,k.c,[]),i["\u0275mpd"](4608,k.g,k.b,[]),i["\u0275mpd"](5120,k.i,k.j,[]),i["\u0275mpd"](4608,k.h,k.h,[k.c,k.g,k.i]),i["\u0275mpd"](4608,k.f,k.a,[]),i["\u0275mpd"](5120,k.d,k.k,[k.h,k.f]),i["\u0275mpd"](5120,f.a,f.x,[f.l]),i["\u0275mpd"](4608,f.e,f.e,[]),i["\u0275mpd"](6144,f.g,null,[f.e]),i["\u0275mpd"](135680,f.q,f.q,[f.l,i.NgModuleFactoryLoader,i.Compiler,i.Injector,f.g]),i["\u0275mpd"](4608,f.f,f.f,[]),i["\u0275mpd"](5120,f.i,f.A,[f.y]),i["\u0275mpd"](5120,i.APP_BOOTSTRAP_LISTENER,function(t){return[t]},[f.i]),i["\u0275mpd"](5120,P.b,P.f,[P.c,P.d]),i["\u0275mpd"](5120,h.a,h.c,[P.b]),i["\u0275mpd"](5120,g.a,g.c,[P.b]),i["\u0275mpd"](5120,R.a,M.c,[M.a]),i["\u0275mpd"](4608,j.c,j.c,[]),i["\u0275mpd"](4608,j.b,j.b,[]),i["\u0275mpd"](4608,B.a,D.b,[D.a,j.c,j.b]),i["\u0275mpd"](5120,F.b,o,[k.d]),i["\u0275mpd"](4608,O.a,O.b,[]),i["\u0275mpd"](4608,E.b,E.a,[]),i["\u0275mpd"](4608,J.b,J.a,[]),i["\u0275mpd"](4608,T.a,T.a,[]),i["\u0275mpd"](4608,y.a,y.a,[T.a,F.b,O.a,E.b,J.b,y.b,y.c]),i["\u0275mpd"](4608,_,_,[f.l]),i["\u0275mpd"](512,L.c,L.c,[]),i["\u0275mpd"](1024,i.ErrorHandler,C.r,[]),i["\u0275mpd"](1024,i.NgProbeToken,function(){return[f.u()]},[]),i["\u0275mpd"](512,f.y,f.y,[i.Injector]),i["\u0275mpd"](1024,i.APP_INITIALIZER,function(t,e,n){return[C.s(t,e),f.z(n)]},[[2,C.i],[2,i.NgProbeToken],f.y]),i["\u0275mpd"](512,i.ApplicationInitStatus,i.ApplicationInitStatus,[[2,i.APP_INITIALIZER]]),i["\u0275mpd"](131584,i["\u0275e"],i["\u0275e"],[i.NgZone,i["\u0275Console"],i.Injector,i.ErrorHandler,i.ComponentFactoryResolver,i.ApplicationInitStatus]),i["\u0275mpd"](2048,i.ApplicationRef,null,[i["\u0275e"]]),i["\u0275mpd"](512,i.ApplicationModule,i.ApplicationModule,[i.ApplicationRef]),i["\u0275mpd"](512,C.a,C.a,[[3,C.a]]),i["\u0275mpd"](512,A.a,A.a,[]),i["\u0275mpd"](512,N.r,N.r,[]),i["\u0275mpd"](512,N.g,N.g,[]),i["\u0275mpd"](512,k.e,k.e,[]),i["\u0275mpd"](1024,f.t,f.v,[[3,f.l]]),i["\u0275mpd"](512,f.s,f.c,[]),i["\u0275mpd"](512,f.b,f.b,[]),i["\u0275mpd"](512,L.i,L.e,[L.r,[2,L.a]]),i["\u0275mpd"](512,L.h,L.h,[L.i]),i["\u0275mpd"](512,i.Compiler,i.Compiler,[]),i["\u0275mpd"](512,i.NgModuleFactoryLoader,i.SystemJsNgModuleLoader,[i.Compiler,[2,i.SystemJsNgModuleLoaderConfig]]),i["\u0275mpd"](1024,f.j,function(){return[[{path:"",loadChildren:"./layout/layout.module#LayoutModule",canActivate:[_]},{path:"login",loadChildren:"./login/login.module#LoginModule"},{path:"godsview",loadChildren:"./godsview/blank-page.module#BlankPageModule"},{path:"signup",loadChildren:"./signup/signup.module#SignupModule"},{path:"not-found",loadChildren:"./not-found/not-found.module#NotFoundModule"},{path:"**",redirectTo:"not-found"}]]},[]),i["\u0275mpd"](256,f.h,{},[]),i["\u0275mpd"](1024,f.l,f.w,[i.ApplicationRef,f.s,f.b,L.h,i.Injector,i.NgModuleFactoryLoader,i.Compiler,f.j,f.h,[2,f.r],[2,f.k]]),i["\u0275mpd"](512,f.o,f.o,[[2,f.t],[2,f.l]]),i["\u0275mpd"](512,q,q,[]),i["\u0275mpd"](512,M.b,M.b,[]),i["\u0275mpd"](512,P.a,P.a,[]),i["\u0275mpd"](512,Z.a,Z.a,[]),i["\u0275mpd"](512,h.b,h.b,[]),i["\u0275mpd"](512,g.b,g.b,[]),i["\u0275mpd"](512,c.a,c.a,[]),i["\u0275mpd"](512,l,l,[]),i["\u0275mpd"](256,P.c,{apiKey:"AIzaSyCc4h9Ovb4aCbUpyNcBNEUUUHtqciNLneI",authDomain:"disastermanagement-ee84a.firebaseapp.com",databaseURL:"https://disastermanagement-ee84a.firebaseio.com",projectId:"disastermanagement-ee84a",storageBucket:"disastermanagement-ee84a.appspot.com",messagingSenderId:"895647762366"},[]),i["\u0275mpd"](256,P.d,void 0,[]),i["\u0275mpd"](256,M.a,{},[]),i["\u0275mpd"](256,D.a,{apiKey:"AIzaSyBf0G_rJKN8FCnBmGx1bvBPcnY8ncDklKA"},[]),i["\u0275mpd"](256,y.c,void 0,[]),i["\u0275mpd"](256,y.b,void 0,[])])});u.production&&Object(i.enableProdMode)(),Object(C.k)().bootstrapModuleFactory(z)},gFIY:function(t,e,n){function o(t){var e=r[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var r={"./blank-page/blank-page.module.ngfactory":["HQfz",13],"./bs-component/bs-component.module.ngfactory":["ZpkU",0,15],"./bs-element/bs-element.module.ngfactory":["/JGO",0,12],"./charts/charts.module.ngfactory":["GYnh",0,1],"./dashboard/dashboard.module.ngfactory":["wfpq",0,11],"./form/form.module.ngfactory":["QgKB",0,10],"./godsview/blank-page.module.ngfactory":["4/tR",0,14],"./grid/grid.module.ngfactory":["LuXh",0,9],"./layout/layout.module.ngfactory":["7fD3",0,8],"./login/login.module.ngfactory":["njmd",0,4],"./not-found/not-found.module.ngfactory":["Vg0N",3],"./signup/signup.module.ngfactory":["uI9u",2],"./tables/tables.module.ngfactory":["ypbM",0,7],"./task-view/task-view.module.ngfactory":["JaSw",0,6],"./taskmanager/blank-page.module.ngfactory":["TFBI",0,5]};o.keys=function(){return Object.keys(r)},o.id="gFIY",t.exports=o},"o+mL":function(t,e,n){"use strict";n.d(e,"a",function(){return i});var o=n("BkNc"),r=n("9Qcf"),a=n("JZIl"),i=function(){function t(t,e,n){var r=this;this.translate=t,this.router=e,this.authservice=n,this.pushRightClass="push-right",this.router.events.subscribe(function(t){t instanceof o.d&&window.innerWidth<=992&&r.isToggled()&&r.toggleSidebar()})}return t.prototype.ngOnInit=function(){localStorage.getItem("isLogged")&&(this.user=JSON.parse(localStorage.getItem("user")))},t.prototype.isToggled=function(){return document.querySelector("body").classList.contains(this.pushRightClass)},t.prototype.toggleSidebar=function(){document.querySelector("body").classList.toggle(this.pushRightClass)},t.prototype.rltAndLtr=function(){document.querySelector("body").classList.toggle("rtl")},t.prototype.onLoggedout=function(){localStorage.removeItem("isLoggedin")},t.prototype.changeLang=function(t){this.translate.use(t)},t.prototype.logout=function(){this.authservice.logout()},t.ctorParameters=function(){return[{type:r.b},{type:o.l},{type:a.a}]},t}()},tCmA:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o=function(){function t(){}return t}()}},[0]);