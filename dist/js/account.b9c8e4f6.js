(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["account"],{"0235":function(t,e,a){"use strict";var n=a("1313"),r=a.n(n);r.a},"02ab":function(t,e,a){"use strict";var n=a("3287"),r=a.n(n);r.a},"0f03":function(t,e,a){"use strict";var n=a("50d6"),r=a.n(n);r.a},"11e9":function(t,e,a){var n=a("52a7"),r=a("4630"),o=a("6821"),i=a("6a99"),c=a("69a8"),s=a("c69a"),l=Object.getOwnPropertyDescriptor;e.f=a("9e1e")?l:function(t,e){if(t=o(t),e=i(e,!0),s)try{return l(t,e)}catch(a){}if(c(t,e))return r(!n.f.call(t,e),t[e])}},1313:function(t,e,a){},2062:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"captcha"},[a("el-input",{staticClass:"input",attrs:{type:"captcha",placeholder:"验证码"},model:{value:t.captchaInput,callback:function(e){t.captchaInput=e},expression:"captchaInput"}}),a("el-button",{staticClass:"btn",attrs:{disabled:t.frozen},on:{click:t.getCaptcha}},[t._v(t._s(t.captchaStatusText))])],1)},r=[],o=(a("c5f6"),a("96cf"),a("3b8d")),i=a("d225"),c=a("b0b4"),s=a("308d"),l=a("6bb5"),u=a("4e2b"),f=a("9ab4"),p=a("60a3"),b=a("94c9"),d="获取验证码",m=60,h=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(s["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.frozen=!1,t.counter=m,t.captchaInput="",t.captchaStatusText=d,t}return Object(u["a"])(e,t),Object(c["a"])(e,[{key:"getCaptcha",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.frozen=!0,t.next=3,Object(b["d"])({phone:Number(this.$props.phoneNumber)});case 3:e=setInterval(function(){a.captchaStatusText="".concat(d,"(").concat(--a.counter,"s)"),0===a.counter&&(clearInterval(e),a.counter=m,a.captchaStatusText=d,a.frozen=!1)},1e3);case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"function",value:function(t,e){this.$emit("input",this.captchaInput)}}]),e}(p["b"]);f["a"]([Object(p["c"])("captchaInput",{immediate:!0,deep:!0})],h.prototype,"function",null),h=f["a"]([Object(p["a"])({props:{phoneNumber:{type:[String,Number],default:!1}}})],h);var v=h,g=v,y=(a("0f03"),a("2877")),_=Object(y["a"])(g,n,r,!1,null,"581285bf",null);e["a"]=_.exports},3287:function(t,e,a){},4580:function(t,e,a){},"48a4":function(t,e,a){"use strict";var n=a("6d25"),r=a.n(n);r.a},"50d6":function(t,e,a){},"57ac":function(t,e,a){"use strict";var n=a("cfe8"),r=a.n(n);r.a},"5dbc":function(t,e,a){var n=a("d3f4"),r=a("8b97").set;t.exports=function(t,e,a){var o,i=e.constructor;return i!==a&&"function"==typeof i&&(o=i.prototype)!==a.prototype&&n(o)&&r&&r(t,o),t}},6673:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"account-basic"},[n("el-dialog",{attrs:{center:"",title:"更换手机号",visible:t.dialogChangeTelVisible,width:"30%"},on:{"update:visible":function(e){t.dialogChangeTelVisible=e}}},[n("el-form",{attrs:{model:t.form,"label-width":"60px"}},[n("el-form-item",{attrs:{label:"手机号","label-width":t.formLabelWidth}},[n("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"验证码",prop:"captcha"}},[n("captcha",{model:{value:t.form.captcha,callback:function(e){t.$set(t.form,"captcha",e)},expression:"form.captcha"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogChangeTelVisible=!1}}},[t._v("取消")]),n("el-button",{attrs:{type:"primary main"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确定")])],1)],1),n("el-dialog",{attrs:{center:"",title:"更换绑定邮箱",visible:t.dialogChangeMailVisible,width:"30%"},on:{"update:visible":function(e){t.dialogChangeMailVisible=e}}},[n("el-form",{attrs:{model:t.form,"label-width":"70px"}},[n("el-form-item",{attrs:{label:"邮箱账号","label-width":t.formLabelWidth}},[n("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),n("el-form-item",{attrs:{label:"验证码",prop:"captcha"}},[n("captcha",{model:{value:t.form.captcha,callback:function(e){t.$set(t.form,"captcha",e)},expression:"form.captcha"}})],1)],1),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogChangeMailVisible=!1}}},[t._v("取消")]),n("el-button",{attrs:{type:"primary main"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确定")])],1)],1),n("el-dialog",{attrs:{center:"",title:"更换头像",visible:t.dialogChangeAvatarVisible,width:"30%"},on:{"update:visible":function(e){t.dialogChangeAvatarVisible=e}}},[n("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.imageUrl?n("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):n("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.dialogChangeAvatarVisible=!1}}},[t._v("取消")]),n("el-button",{attrs:{type:"primary main"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确定")])],1)],1),n("board",{staticClass:"body",attrs:{title:"基本信息"}},[n("div",{staticClass:"content"},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:t.userInfo.avatarUrl||a("2419")}}),n("el-button",{attrs:{type:"text"},on:{click:function(e){t.dialogChangeAvatarVisible=!0}}},[t._v("更换头像")])],1),n("div",{staticClass:"form"},[n("el-form",{ref:"form",attrs:{rules:t.rules,model:t.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"姓名"}},[t._v("\n              "+t._s(t.staticInfo.name)+"\n            ")]),n("el-form-item",{attrs:{label:"角色"}},[t._v("\n              "+t._s(t.staticInfo.role)+"\n            ")]),n("el-form-item",{attrs:{label:"手机号"}},[t._v("\n              "+t._s(t.staticInfo.tel)+"\n              "),n("el-button",{attrs:{type:"text"},on:{click:function(e){t.dialogChangeTelVisible=!0}}},[t._v("更换绑定手机号")])],1),n("el-form-item",{attrs:{label:"邮箱"}},[t._v("\n              "+t._s(t.staticInfo.email)+"\n              "),n("el-button",{attrs:{type:"text"},on:{click:function(e){t.dialogChangeMailVisible=!0}}},[t._v("更换绑定邮箱")])],1)],1)],1)])])],1)},r=[],o=a("d225"),i=a("b0b4"),c=a("308d"),s=a("6bb5"),l=a("4e2b"),u=a("9ab4"),f=a("60a3"),p=a("2f62"),b=a("69fb"),d=a("2062"),m=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.form={comment:""},t.dialogChangeTelVisible=!1,t.dialogChangeMailVisible=!1,t.dialogChangeAvatarVisible=!1,t.staticInfo={accountName:"阿里巴巴",name:"中国杭州",role:"123123",org:"123123123123",tel:"ffff@alibaba-inc.com",email:"asdfasdf"},t.rules={comment:[{required:!0,message:"请输入留言内容",trigger:"blur"}]},t}return Object(l["a"])(e,t),Object(i["a"])(e,[{key:"onSubmit",value:function(){var t=this.$refs.form;t.validate(function(t){return!1})}},{key:"mounted",value:function(){}}]),e}(f["b"]);m=u["a"]([Object(f["a"])({components:{Board:b["a"],Captcha:d["a"]},computed:Object(p["e"])({userInfo:function(t){return t.userInfo}})})],m);var h=m,v=h,g=(a("81e2"),a("e2cc"),a("2877")),y=Object(g["a"])(v,n,r,!1,null,"3ac08099",null);e["default"]=y.exports},"69fb":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board"},[a("div",{staticClass:"header"},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.title))]),t.desc?a("span",{staticClass:"desc"},[t._v(t._s(t.desc))]):t._e()]),t.seeMoreAction?a("el-button",{attrs:{type:"text"},on:{click:t.seeMoreAction}},[t._v("更多 >")]):t._e()],1),a("div",{staticClass:"body"},[t._t("default")],2)])},r=[],o=a("d225"),i=a("308d"),c=a("6bb5"),s=a("4e2b"),l=a("9ab4"),u=a("60a3"),f=function(t){function e(){return Object(o["a"])(this,e),Object(i["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(u["b"]);f=l["a"]([Object(u["a"])({props:{title:{type:String,default:"看板"},desc:{type:String,default:""},seeMoreAction:{type:Function,default:null}}})],f);var p=f,b=p,d=(a("57ac"),a("2877")),m=Object(d["a"])(b,n,r,!1,null,"a1511822",null);e["a"]=m.exports},"6d25":function(t,e,a){},7845:function(t,e,a){"use strict";var n=a("4580"),r=a.n(n);r.a},"7eda":function(t,e,a){},"81e2":function(t,e,a){"use strict";var n=a("dd9f"),r=a.n(n);r.a},"8b97":function(t,e,a){var n=a("d3f4"),r=a("cb7c"),o=function(t,e){if(r(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=a("9b43")(Function.call,a("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(r){e=!0}return function(t,a){return o(t,a),e?t.__proto__=a:n(t,a),t}}({},!1):void 0),check:o}},9093:function(t,e,a){var n=a("ce10"),r=a("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,r)}},9301:function(t,e,a){},"94a2":function(t,e,a){"use strict";var n=a("9301"),r=a.n(n);r.a},a33f:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWJJREFUSA3tkT1LA0EQhmd270KiaWwFPxpFsMoZEUIqQfAniGAT4wfWqYSExVT+ASHBnGBnMIWloBKxUDAfKKayEINWFjaCMWZ3zAbOQi5JZXdb7CzvzLsvPAPgHY+AR+DfCWC/hHye+OlDdZlATQBhAxBM7SHC4kHauuzn7xkQF+V5khQxfPwokww9rolqhHF40+946naBEKMcIZcV4Xq3oK4Bq6IUJ8Xe7R2roM2xZHmbUD0h4RhwVrKFdbaeKZnyFRJErGinrWu3EOYmbolaUEmYG2WhE6dPjIYYcINxuiEpLa1nN8Lfps84BKaWnLm/1TVgT0x/mH5I1am8uymq4x2TgmNCOaUULg4EgjmtaUzNZitmDEOiM+NydUWkZ4Ug41lVVtobHUGEq4B/8L6hPoPQUiEimmXIzvfFzIXLv79SzwBnSoia7wUaUSVpsr3YLzSwYqesO6fvVY+AR6A3gR8Gnn7H5r0QZgAAAABJRU5ErkJggg=="},aa77:function(t,e,a){var n=a("5ca1"),r=a("be13"),o=a("79e5"),i=a("fdef"),c="["+i+"]",s="​",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),f=function(t,e,a){var r={},c=o(function(){return!!i[t]()||s[t]()!=s}),l=r[t]=c?e(p):i[t];a&&(r[a]=l),n(n.P+n.F*c,"String",r)},p=f.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(u,"")),t};t.exports=f},c5f6:function(t,e,a){"use strict";var n=a("7726"),r=a("69a8"),o=a("2d95"),i=a("5dbc"),c=a("6a99"),s=a("79e5"),l=a("9093").f,u=a("11e9").f,f=a("86cc").f,p=a("aa77").trim,b="Number",d=n[b],m=d,h=d.prototype,v=o(a("2aeb")(h))==b,g="trim"in String.prototype,y=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():p(e,3);var a,n,r,o=e.charCodeAt(0);if(43===o||45===o){if(a=e.charCodeAt(2),88===a||120===a)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var i,s=e.slice(2),l=0,u=s.length;l<u;l++)if(i=s.charCodeAt(l),i<48||i>r)return NaN;return parseInt(s,n)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof d&&(v?s(function(){h.valueOf.call(a)}):o(a)!=b)?i(new m(y(e)),a,d):y(e)};for(var _,A=a("9e1e")?l(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;A.length>O;O++)r(m,_=A[O])&&!r(d,_)&&f(d,_,u(m,_));d.prototype=h,h.constructor=d,a("2aba")(n,b,d)}},cfe8:function(t,e,a){},d14f:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"passwordInput"},[n("el-input",{staticClass:"input",attrs:{"prefix-icon":t.showPrefix?"el-icon-goods":"",type:t.type,placeholder:t.placeholder},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t.input?n("span",{on:{mousedown:t.toggleTType,mouseup:t.togglePType}},[n("img",{attrs:{src:a("a33f")}})]):t._e()],1)},r=[],o=a("d225"),i=a("b0b4"),c=a("308d"),s=a("6bb5"),l=a("4e2b"),u=a("9ab4"),f=a("60a3"),p=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.type="password",t.input="",t}return Object(l["a"])(e,t),Object(i["a"])(e,[{key:"toggleTType",value:function(){this.type="text"}},{key:"togglePType",value:function(){this.type="password"}},{key:"function",value:function(t,e){this.$emit("input",this.input)}}]),e}(f["b"]);u["a"]([Object(f["c"])("input",{immediate:!0,deep:!0})],p.prototype,"function",null),p=u["a"]([Object(f["a"])({props:{placeholder:{type:String,default:"请输入登录密码（6-24位数字和字母）"},showPrefix:{type:Boolean,default:!0}}})],p);var b=p,d=b,m=(a("94a2"),a("2877")),h=Object(m["a"])(d,n,r,!1,null,"9f49ca14",null);e["a"]=h.exports},da70:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"account"},[a("el-container",{staticClass:"occupation"},[a("el-aside",{attrs:{width:"177px"}},[a("el-menu",{staticClass:"el-menu",attrs:{router:!0,"default-active":t.activedMenu},on:{select:t.toggleActivedMenu}},t._l(t.subRoutes,function(e,n){return a("el-menu-item",{key:n,attrs:{index:e.path}},[e.icon?a("span",{staticClass:"icon",domProps:{innerHTML:t._s(e.icon)}}):a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.label))])])}),1)],1),a("el-main",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[t._v("您的位置：账号管理")]),t._l(t.subRoutes,function(e,n){return[t.currentRoute===e.path?a("el-breadcrumb-item",{key:n,attrs:{to:{path:e.path}}},[t._v(t._s(e.label))]):t._e()]})],2),a("router-view")],1)],1)],1)},r=[],o=a("d225"),i=a("b0b4"),c=a("308d"),s=a("6bb5"),l=a("4e2b"),u=a("9ab4"),f=a("60a3"),p=a("676b"),b=a("d8c9"),d=[{path:"/account/basic",label:"基本信息"},{icon:"&#xe616;",path:"/account/reset-password",label:"重置密码"}],m=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.currentRoute="",t.activedMenu="/account/basic",t.subRoutes=d,t}return Object(l["a"])(e,t),Object(i["a"])(e,[{key:"syncRoute",value:function(t){this.currentRoute=t,this.activedMenu=this.currentRoute}},{key:"mounted",value:function(){this.syncRoute(this.$route.path)}},{key:"updated",value:function(){this.syncRoute(this.$route.path)}},{key:"toggleActivedMenu",value:function(t){this.syncRoute(t)}}]),e}(f["b"]);m=u["a"]([Object(f["a"])({components:{CustomizedFooter:p["a"],CustomizedNav:b["a"]}})],m);var h=m,v=h,g=(a("02ab"),a("0235"),a("2877")),y=Object(g["a"])(v,n,r,!1,null,"4844a431",null);e["default"]=y.exports},dd9f:function(t,e,a){},e2cc:function(t,e,a){"use strict";var n=a("7eda"),r=a.n(n);r.a},fc13:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"account-reset-password"},[a("board",{staticClass:"body"},[a("div",{staticClass:"form"},[a("el-form",{ref:"form",attrs:{rules:t.rules,model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"手机号",prop:"tel"}},[a("el-input",{attrs:{placeholder:"请输入登录手机号"},model:{value:t.form.tel,callback:function(e){t.$set(t.form,"tel",t._n(e))},expression:"form.tel"}})],1),a("el-form-item",{attrs:{label:"验证码",prop:"captcha"}},[a("captcha",{model:{value:t.form.captcha,callback:function(e){t.$set(t.form,"captcha",e)},expression:"form.captcha"}})],1),a("el-form-item",{attrs:{label:"新密码",prop:"password"}},[a("password-input",{attrs:{placeholder:"请输入新密码（6-24位数字和字母）"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("el-form-item",{attrs:{label:"确认密码",prop:"confirm-password"}},[a("password-input",{attrs:{placeholder:"请再次输入新密码"},model:{value:t.form.confirmPassword,callback:function(e){t.$set(t.form,"confirmPassword",e)},expression:"form.confirmPassword"}})],1),a("el-form-item",[a("el-button",{staticClass:"full main",attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("重置密码")])],1)],1)],1)])],1)},r=[],o=a("d225"),i=a("b0b4"),c=a("308d"),s=a("6bb5"),l=a("4e2b"),u=a("9ab4"),f=a("60a3"),p=a("2062"),b=a("d14f"),d=a("69fb"),m=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(s["a"])(e).apply(this,arguments)),t.form={tel:"",password:"",confirmPassword:"",captcha:""},t.rules={tel:[{required:!0,message:"请输入登录手机号",trigger:"blur"},{type:"number",message:"手机号必须为数字值",trigger:"blur"}],password:[{required:!0,message:"请输入新登录密码",trigger:"blur"}],"confirm-password":[{required:!0,message:"请再次输入新登录密码",trigger:"blur"}],captcha:[{required:!0,message:"请输入验证码",trigger:"blur"}]},t}return Object(l["a"])(e,t),Object(i["a"])(e,[{key:"onSubmit",value:function(){var t=this.$refs.form;t.validate(function(t){return!1})}}]),e}(f["b"]);m=u["a"]([Object(f["a"])({components:{Board:d["a"],Captcha:p["a"],PasswordInput:b["a"]}})],m);var h=m,v=h,g=(a("7845"),a("48a4"),a("2877")),y=Object(g["a"])(v,n,r,!1,null,"0583c0dd",null);e["default"]=y.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=account.b9c8e4f6.js.map