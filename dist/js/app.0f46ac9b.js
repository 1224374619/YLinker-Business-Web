(function(e){function t(t){for(var o,i,s=t[0],c=t[1],u=t[2],l=0,p=[];l<s.length;l++)i=s[l],r[i]&&p.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},i={app:0},r={app:0},a=[];function s(e){return c.p+"js/"+({about:"about",account:"account",enterprise:"enterprise","enterprise-info-update":"enterprise-info-update","enterprise-info-update-result":"enterprise-info-update-result","home~notifications~occupation~resume":"home~notifications~occupation~resume",home:"home",notifications:"notifications",occupation:"occupation",resume:"resume",login:"login",register:"register","reset-password":"reset-password","reset-result":"reset-result","user-license":"user-license"}[e]||e)+"."+{about:"3d76c320",account:"e1aa70e2",enterprise:"308b083f","enterprise-info-update":"4816f43b","enterprise-info-update-result":"f3d6e971","home~notifications~occupation~resume":"0646514f",home:"d2580e5f",notifications:"8c2eaf82",occupation:"7cc82216",resume:"01cf7492",login:"065a73f9",register:"21851950","reset-password":"40c03993","reset-result":"c92442c5","user-license":"f767b23f"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1,account:1,enterprise:1,"enterprise-info-update":1,"enterprise-info-update-result":1,"home~notifications~occupation~resume":1,home:1,notifications:1,occupation:1,resume:1,login:1,register:1,"reset-password":1,"reset-result":1,"user-license":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise(function(t,n){for(var o="css/"+({about:"about",account:"account",enterprise:"enterprise","enterprise-info-update":"enterprise-info-update","enterprise-info-update-result":"enterprise-info-update-result","home~notifications~occupation~resume":"home~notifications~occupation~resume",home:"home",notifications:"notifications",occupation:"occupation",resume:"resume",login:"login",register:"register","reset-password":"reset-password","reset-result":"reset-result","user-license":"user-license"}[e]||e)+"."+{about:"539e7be8",account:"78126587",enterprise:"eee04346","enterprise-info-update":"f06954a5","enterprise-info-update-result":"669cd061","home~notifications~occupation~resume":"57a11635",home:"001c9e46",notifications:"3c6905bc",occupation:"c61b6733",resume:"87a07d8b",login:"823b186e",register:"696f445d","reset-password":"76e56cb9","reset-result":"3b7cb5bb","user-license":"6e92ed27"}[e]+".css",r=c.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var u=a[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===o||l===r))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===o||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete i[e],f.parentNode.removeChild(f),n(a)},f.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){i[e]=0}));var o=r[e];if(0!==o)if(o)t.push(o[2]);else{var a=new Promise(function(t,n){o=r[e]=[t,n]});t.push(o[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e),u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+o+": "+i+")");a.type=o,a.request=i,n[1](a)}r[e]=void 0}};var p=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1af0":function(e,t,n){"use strict";var o=n("7afc"),i=n.n(o);i.a},"2d40":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i});var o="DONE_LOGIN",i="DONE_LOGOUT"},"3cd6":function(e,t,n){},"4b35":function(e,t,n){},"5dfa":function(e,t,n){},"676b":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[e.showSimple?n("div",{staticClass:"copyright"},[n("p",[e._v("Copyright © 2019 (银领人才网) All Right Reserved | 沪ICP备xxxxxxx号-1")])]):[e._m(0),e._m(1)]],2)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"appendix"},[n("div",[n("span",{staticClass:"title"},[e._v("银领人才网")]),n("div",{staticClass:"content"},[n("p",[e._v("静安区江静安区江静安区江静安区江静安区江静安区江静安区江静安区江静安区江")])])]),n("div",[n("span",{staticClass:"title"},[e._v("联系方式")]),n("div",{staticClass:"content"},[n("ul",[n("li",[e._v("邮编：200436")]),n("li",[e._v("联系电话：021-56057115")]),n("li",[e._v("邮箱：Nicole.yin@aliyun.com")]),n("li",[e._v("地址：上海市静安区江场西路299弄15号1428室")])])])]),n("div",[n("span",{staticClass:"title"},[e._v("使用与帮助")]),n("div",{staticClass:"content"},[n("ul",[n("li",[e._v("企业介绍")]),n("li",[e._v("投诉建议")]),n("li",[e._v("用户协议")])])])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"copyright full"},[n("p",[e._v("Copyright © 2019 (银领人才网) All Right Reserved | 沪ICP备xxxxxxx号-1")])])}],r=n("d225"),a=n("308d"),s=n("6bb5"),c=n("4e2b"),u=n("9ab4"),l=n("60a3"),p=function(e){function t(){return Object(r["a"])(this,t),Object(a["a"])(this,Object(s["a"])(t).apply(this,arguments))}return Object(c["a"])(t,e),t}(l["b"]);p=u["a"]([Object(l["a"])({props:{showSimple:{type:Boolean,default:!1}}})],p);var f=p,d=f,m=(n("c841"),n("2877")),h=Object(m["a"])(d,o,i,!1,null,"64ee1e6e",null);t["a"]=h.exports},"7afc":function(e,t,n){},"7faf":function(e,t,n){"use strict";var o=n("8fba"),i=n.n(o);i.a},"8fba":function(e,t,n){},"9d64":function(e,t,n){e.exports=n.p+"img/logo.7e590d48.png"},"9fa5":function(e,t,n){"use strict";var o=n("4b35"),i=n.n(o);i.a},c841:function(e,t,n){"use strict";var o=n("5dfa"),i=n.n(o);i.a},cd49:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),i=(n("0fae"),n("3cd6"),n("5c96")),r=n.n(i),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("customized-nav",{staticClass:"nav"}),n("div",{class:{"full-screen":e.isFullScreen,"default-bg":e.isDefaultBg,"main-container":!0}},[n("router-view")],1),n("customized-footer",{attrs:{showSimple:e.isSimpleFooter}})],1)},s=[],c=(n("6762"),n("2fdb"),n("7f7f"),n("d225")),u=n("b0b4"),l=n("308d"),p=n("6bb5"),f=n("4e2b"),d=n("9ab4"),m=n("60a3"),h=n("676b"),b=n("d8c9"),v=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(l["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.isFullScreen=!1,e.isSimpleFooter=!1,e.isDefaultBg=!1,e}return Object(f["a"])(t,e),Object(u["a"])(t,[{key:"updated",value:function(){this.$route.name&&(this.isFullScreen=["login","register","reset-password","reset-result","user-license","enterprise-info-update-result"].includes(this.$route.name),this.isSimpleFooter=!["home"].includes(this.$route.name),this.isDefaultBg=["login","register","reset-password","reset-result","user-license","enterprise-info-update-result"].includes(this.$route.name))}}]),t}(m["b"]);v=d["a"]([Object(m["a"])({components:{CustomizedFooter:h["a"],CustomizedNav:b["a"]}})],v);var g=v,_=g,w=(n("7faf"),n("2877")),y=Object(w["a"])(_,a,s,!1,null,null,null),O=y.exports,C=n("8c4f");o["default"].use(C["a"]);var k,j=new C["a"]({routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:function(){return Promise.all([n.e("home~notifications~occupation~resume"),n.e("home")]).then(n.bind(null,"bb51"))}},{path:"/login",name:"login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}},{path:"/register",name:"register",component:function(){return n.e("register").then(n.bind(null,"73cf"))}},{path:"/notifications",name:"notifications",component:function(){return Promise.all([n.e("home~notifications~occupation~resume"),n.e("notifications")]).then(n.bind(null,"fda7"))}},{path:"/reset-password",name:"reset-password",component:function(){return n.e("reset-password").then(n.bind(null,"0813"))}},{path:"/reset-result",name:"reset-result",component:function(){return n.e("reset-result").then(n.bind(null,"5f2a"))}},{path:"/user-license",name:"user-license",component:function(){return n.e("user-license").then(n.bind(null,"c848"))}},{path:"/occupation",name:"occupation",redirect:"/occupation/info",component:function(){return Promise.all([n.e("home~notifications~occupation~resume"),n.e("occupation")]).then(n.bind(null,"079a"))},children:[{path:":id(\\d+)",name:"occupation-detail",component:function(){return Promise.all([n.e("home~notifications~occupation~resume"),n.e("occupation")]).then(n.bind(null,"730b"))}},{path:"info",name:"occupation-info",component:function(){return Promise.all([n.e("home~notifications~occupation~resume"),n.e("occupation")]).then(n.bind(null,"2617"))}},{path:"add",name:"occupation-add",component:function(){return Promise.all([n.e("home~notifications~occupation~resume"),n.e("occupation")]).then(n.bind(null,"da71"))}},{path:"draft",name:"occupation-draft",component:function(){return Promise.all([n.e("home~notifications~occupation~resume"),n.e("occupation")]).then(n.bind(null,"d7d7"))}},{path:"recycle",name:"occupation-recycle",component:function(){return Promise.all([n.e("home~notifications~occupation~resume"),n.e("occupation")]).then(n.bind(null,"1df0"))}}]},{path:"/resume",name:"resume",redirect:"/resume/info",component:function(){return Promise.all([n.e("home~notifications~occupation~resume"),n.e("resume")]).then(n.bind(null,"052c"))},children:[{path:"info",name:"resume-info",component:function(){return Promise.all([n.e("home~notifications~occupation~resume"),n.e("resume")]).then(n.bind(null,"7937"))}},{path:"blacklist",name:"resume-blacklist",component:function(){return Promise.all([n.e("home~notifications~occupation~resume"),n.e("resume")]).then(n.bind(null,"5a35"))}},{path:":id(\\d+)",name:"resume-detail",component:function(){return Promise.all([n.e("home~notifications~occupation~resume"),n.e("resume")]).then(n.bind(null,"d019"))}},{path:"list/:id(\\d+)",name:"resume-list",component:function(){return Promise.all([n.e("home~notifications~occupation~resume"),n.e("resume")]).then(n.bind(null,"f71d"))}},{path:"enterprise",name:"resume-enterprise",component:function(){return Promise.all([n.e("home~notifications~occupation~resume"),n.e("resume")]).then(n.bind(null,"8c3d"))}},{path:"platform",name:"resume-platform",component:function(){return Promise.all([n.e("home~notifications~occupation~resume"),n.e("resume")]).then(n.bind(null,"9724"))}},{path:"platform/collection",name:"resume-platform-collection",component:function(){return Promise.all([n.e("home~notifications~occupation~resume"),n.e("resume")]).then(n.bind(null,"fd18"))}},{path:"platform/downloaded",name:"resume-platform-downloaded",component:function(){return Promise.all([n.e("home~notifications~occupation~resume"),n.e("resume")]).then(n.bind(null,"1209"))}}]},{path:"/enterprise",name:"enterprise",redirect:"/enterprise/info",component:function(){return n.e("enterprise").then(n.bind(null,"ca87"))},children:[{path:"info",name:"enterprise-info",component:function(){return n.e("enterprise").then(n.bind(null,"464b"))}},{path:"user",name:"enterprise-user",component:function(){return n.e("enterprise").then(n.bind(null,"b82b"))}},{path:"bill",name:"enterprise-bill",component:function(){return n.e("enterprise").then(n.bind(null,"d455"))}}]},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"0737"))},children:[{path:"intro",name:"about-intro",component:function(){return n.e("about").then(n.bind(null,"990f"))}},{path:"contact",name:"about-contact",component:function(){return n.e("about").then(n.bind(null,"ccc9"))}}]},{path:"/account",name:"account",component:function(){return n.e("account").then(n.bind(null,"da70"))},children:[{path:"basic",name:"account-basic",component:function(){return n.e("account").then(n.bind(null,"6673"))}},{path:"reset-password",name:"account-reset-password",component:function(){return n.e("account").then(n.bind(null,"fc13"))}}]},{path:"/enterprise/update",name:"enterprise-info-update",component:function(){return n.e("enterprise-info-update").then(n.bind(null,"de0f"))}},{path:"/enterprise/update-result",name:"enterprise-info-update-result",component:function(){return n.e("enterprise-info-update-result").then(n.bind(null,"f012"))}}]}),P=n("bd86"),x=n("2f62"),N=n("2d40");o["default"].use(x["a"]);var I={state:{hasLogin:!1},mutations:(k={},Object(P["a"])(k,N["a"],function(e){e.hasLogin=!0}),Object(P["a"])(k,N["b"],function(e){e.hasLogin=!1}),k)},S=new x["a"].Store(I);o["default"].use(r.a),o["default"].config.productionTip=!1,new o["default"]({router:j,store:S,render:function(e){return e(O)}}).$mount("#app")},d8c9:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("nav",[o("div",{staticClass:"nav-body"},[o("img",{attrs:{src:n("9d64")},on:{click:e.gotoHomeUI}}),o("div",{staticClass:"menu"},[e.ctlHideMenus?e._e():o("div",{staticClass:"group"},[o("router-link",{attrs:{to:"/home"}},[o("span",[e._v("首页")])]),o("router-link",{attrs:{to:"/resume"}},[o("span",[e._v("简历管理")])]),o("router-link",{attrs:{to:"/occupation"}},[o("span",[e._v("职位管理")])]),o("router-link",{attrs:{to:"/enterprise"}},[o("span",[e._v("企业中心")])])],1),e.hasLogin?o("div",{staticClass:"user-operations"},[o("el-popover",{ref:"popover",attrs:{placement:"bottom",width:"360",trigger:"click"},model:{value:e.showPopver,callback:function(t){e.showPopver=t},expression:"showPopver"}},[o("div",{staticClass:"nav-popover-content"},[o("div",{staticClass:"messages"},[o("ul",[o("li",{on:{click:e.gotoNotiUI}},[o("span",[e._v("职位【产品经理】已上线")]),o("span",[e._v("今天 10:00")])]),o("li",{on:{click:e.gotoNotiUI}},[o("span",[e._v("职位【产品经理】已上线")]),o("span",[e._v("今天 10:00")])]),o("li",{on:{click:e.gotoNotiUI}},[o("span",[e._v("职位【产品经理】已上线")]),o("span",[e._v("今天 10:00")])]),o("li",{on:{click:e.gotoNotiUI}},[o("span",[e._v("职位【产品经理】已上线")]),o("span",[e._v("今天 10:00")])]),o("li",{on:{click:e.gotoNotiUI}},[o("span",[e._v("职位【产品经理】已上线")]),o("span",[e._v("今天 10:00")])]),o("li",{on:{click:e.gotoNotiUI}},[o("span",[e._v("职位【产品经理】已上线")]),o("span",[e._v("今天 10:00")])]),o("li",{on:{click:e.gotoNotiUI}},[o("span",[e._v("职位【产品经理】已上线")]),o("span",[e._v("今天 10:00")])])])]),o("div",{staticClass:"footer"},[o("el-button",{attrs:{type:"primary main"}},[e._v("全部标记已读")])],1)])]),o("el-badge",{directives:[{name:"popover",rawName:"v-popover:popover",arg:"popover"}],staticClass:"item",attrs:{value:12}},[o("i",{staticClass:"el-icon-bell",on:{click:e.gotoNotiUI}})]),o("el-dropdown",{attrs:{placement:"bottom-start"},on:{command:e.handleMenuClick}},[o("img",{attrs:{src:e.placeholder}}),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",{attrs:{command:"/account/basic"}},[e._v("账号管理")]),o("el-dropdown-item",{attrs:{command:"/about/contact"}},[e._v("联系我们")]),o("el-dropdown-item",{attrs:{divided:"",command:"logout"}},[e._v("退出")])],1)],1)],1):o("div",{staticClass:"btn-set"},[o("button",{on:{click:e.gotoLoginUI}},[e._v("登录")]),o("button",{on:{click:e.gotoRegisterUI}},[e._v("注册")])])])])])},i=[],r=n("d225"),a=n("b0b4"),s=n("308d"),c=n("6bb5"),u=n("4e2b"),l=n("9ab4"),p=n("60a3"),f=n("2f62"),d=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(s["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.showPopver=!1,e}return Object(u["a"])(t,e),Object(a["a"])(t,[{key:"gotoNotiUI",value:function(){this.$router.push({path:"/notifications"}),this.showPopver=!1}},{key:"gotoHomeUI",value:function(){this.$router.push({path:"/"})}},{key:"gotoLoginUI",value:function(){this.$router.push({path:"/login"})}},{key:"gotoRegisterUI",value:function(){this.$router.push({path:"/register"})}},{key:"handleMenuClick",value:function(e){"logout"===e||this.$router.push({path:e})}}]),t}(p["b"]);d=l["a"]([Object(p["a"])({props:{ctlHideMenus:{type:Boolean,default:!1}},computed:Object(f["e"])({hasLogin:function(e){return e.hasLogin}})})],d);var m=d,h=m,b=(n("9fa5"),n("1af0"),n("2877")),v=Object(b["a"])(h,o,i,!1,null,"c739f4c0",null);t["a"]=v.exports}});
//# sourceMappingURL=app.0f46ac9b.js.map