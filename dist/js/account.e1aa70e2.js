(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["account"],{"0063":function(t,e,a){},"0235":function(t,e,a){"use strict";var i=a("1313"),n=a.n(i);n.a},"0c43":function(t,e,a){"use strict";var i=a("0063"),n=a.n(i);n.a},1313:function(t,e,a){},"14ea":function(t,e,a){"use strict";var i=a("48ab"),n=a.n(i);n.a},"1bf2":function(t,e,a){},2062:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"captcha"},[a("el-input",{staticClass:"input",attrs:{type:"captcha",placeholder:"验证码"},model:{value:t.captchaInput,callback:function(e){t.captchaInput=e},expression:"captchaInput"}}),a("el-button",{staticClass:"btn",attrs:{disabled:t.frozen},on:{click:t.getCaptcha}},[t._v(t._s(t.captchaStatusText))])],1)},n=[],o=a("d225"),s=a("b0b4"),c=a("308d"),r=a("6bb5"),l=a("4e2b"),u=a("9ab4"),f=a("60a3"),p="获取验证码",b=60,d=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.frozen=!1,t.counter=b,t.captchaInput="",t.captchaStatusText=p,t}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"getCaptcha",value:function(){var t=this;this.frozen=!0;var e=setInterval(function(){t.captchaStatusText="".concat(p,"(").concat(--t.counter,"s)"),0===t.counter&&(clearInterval(e),t.counter=b,t.captchaStatusText=p,t.frozen=!1)},1e3)}},{key:"function",value:function(t,e){this.$emit("input",this.captchaInput)}}]),e}(f["b"]);u["a"]([Object(f["c"])("captchaInput",{immediate:!0,deep:!0})],d.prototype,"function",null),d=u["a"]([Object(f["a"])({})],d);var m=d,h=m,v=(a("14ea"),a("2877")),g=Object(v["a"])(h,i,n,!1,null,"242d87ce",null);e["a"]=g.exports},2672:function(t,e,a){"use strict";var i=a("bfed"),n=a.n(i);n.a},"48a4":function(t,e,a){"use strict";var i=a("6d25"),n=a.n(i);n.a},"48ab":function(t,e,a){},"57ac":function(t,e,a){"use strict";var i=a("cfe8"),n=a.n(i);n.a},"601d":function(t,e,a){"use strict";var i=a("6dcb"),n=a.n(i);n.a},6673:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"account-basic"},[i("el-dialog",{attrs:{center:"",title:"更换手机号",visible:t.dialogChangeTelVisible,width:"30%"},on:{"update:visible":function(e){t.dialogChangeTelVisible=e}}},[i("el-form",{attrs:{model:t.form,"label-width":"60px"}},[i("el-form-item",{attrs:{label:"手机号","label-width":t.formLabelWidth}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),i("el-form-item",{attrs:{label:"验证码",prop:"captcha"}},[i("captcha",{model:{value:t.form.captcha,callback:function(e){t.$set(t.form,"captcha",e)},expression:"form.captcha"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogChangeTelVisible=!1}}},[t._v("取消")]),i("el-button",{attrs:{type:"primary main"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确定")])],1)],1),i("el-dialog",{attrs:{center:"",title:"更换绑定邮箱",visible:t.dialogChangeMailVisible,width:"30%"},on:{"update:visible":function(e){t.dialogChangeMailVisible=e}}},[i("el-form",{attrs:{model:t.form,"label-width":"70px"}},[i("el-form-item",{attrs:{label:"邮箱账号","label-width":t.formLabelWidth}},[i("el-input",{attrs:{"auto-complete":"off"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),i("el-form-item",{attrs:{label:"验证码",prop:"captcha"}},[i("captcha",{model:{value:t.form.captcha,callback:function(e){t.$set(t.form,"captcha",e)},expression:"form.captcha"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogChangeMailVisible=!1}}},[t._v("取消")]),i("el-button",{attrs:{type:"primary main"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确定")])],1)],1),i("el-dialog",{attrs:{center:"",title:"更换头像",visible:t.dialogChangeAvatarVisible,width:"30%"},on:{"update:visible":function(e){t.dialogChangeAvatarVisible=e}}},[i("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":t.handleAvatarSuccess,"before-upload":t.beforeAvatarUpload}},[t.imageUrl?i("img",{staticClass:"avatar",attrs:{src:t.imageUrl}}):i("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.dialogChangeAvatarVisible=!1}}},[t._v("取消")]),i("el-button",{attrs:{type:"primary main"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("确定")])],1)],1),i("board",{staticClass:"body",attrs:{title:"基本信息"}},[i("div",{staticClass:"content"},[i("div",{staticClass:"avatar"},[i("img",{attrs:{src:a("decf")}}),i("el-button",{attrs:{type:"text"},on:{click:function(e){t.dialogChangeAvatarVisible=!0}}},[t._v("更换头像")])],1),i("div",{staticClass:"form"},[i("el-form",{ref:"form",attrs:{rules:t.rules,model:t.form,"label-width":"80px"}},[i("el-form-item",{attrs:{label:"姓名"}},[t._v("\n              "+t._s(t.staticInfo.name)+"\n            ")]),i("el-form-item",{attrs:{label:"角色"}},[t._v("\n              "+t._s(t.staticInfo.role)+"\n            ")]),i("el-form-item",{attrs:{label:"手机号"}},[t._v("\n              "+t._s(t.staticInfo.tel)+"\n              "),i("el-button",{attrs:{type:"text"},on:{click:function(e){t.dialogChangeTelVisible=!0}}},[t._v("更换绑定手机号")])],1),i("el-form-item",{attrs:{label:"邮箱"}},[t._v("\n              "+t._s(t.staticInfo.email)+"\n              "),i("el-button",{attrs:{type:"text"},on:{click:function(e){t.dialogChangeMailVisible=!0}}},[t._v("更换绑定邮箱")])],1)],1)],1)])])],1)},n=[],o=a("d225"),s=a("b0b4"),c=a("308d"),r=a("6bb5"),l=a("4e2b"),u=a("9ab4"),f=a("60a3"),p=a("69fb"),b=a("2062"),d=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.form={comment:""},t.dialogChangeTelVisible=!1,t.dialogChangeMailVisible=!1,t.dialogChangeAvatarVisible=!1,t.staticInfo={accountName:"阿里巴巴",name:"中国杭州",role:"123123",org:"123123123123",tel:"ffff@alibaba-inc.com",email:"asdfasdf"},t.rules={comment:[{required:!0,message:"请输入留言内容",trigger:"blur"}]},t}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"onSubmit",value:function(){var t=this.$refs.form;t.validate(function(t){return!1})}},{key:"mounted",value:function(){}}]),e}(f["b"]);d=u["a"]([Object(f["a"])({components:{Board:p["a"],Captcha:b["a"]}})],d);var m=d,h=m,v=(a("2672"),a("e2cc"),a("2877")),g=Object(v["a"])(h,i,n,!1,null,"386b86d2",null);e["default"]=g.exports},"69fb":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"board"},[a("div",{staticClass:"header"},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.title))]),t.desc?a("span",{staticClass:"desc"},[t._v(t._s(t.desc))]):t._e()]),t.seeMoreAction?a("el-button",{attrs:{type:"text"},on:{click:t.seeMoreAction}},[t._v("更多 >")]):t._e()],1),a("div",{staticClass:"body"},[t._t("default")],2)])},n=[],o=a("d225"),s=a("308d"),c=a("6bb5"),r=a("4e2b"),l=a("9ab4"),u=a("60a3"),f=function(t){function e(){return Object(o["a"])(this,e),Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(r["a"])(e,t),e}(u["b"]);f=l["a"]([Object(u["a"])({props:{title:{type:String,default:"看板"},desc:{type:String,default:""},seeMoreAction:{type:Function,default:null}}})],f);var p=f,b=p,d=(a("57ac"),a("2877")),m=Object(d["a"])(b,i,n,!1,null,"a1511822",null);e["a"]=m.exports},"6d25":function(t,e,a){},"6dcb":function(t,e,a){},"7eda":function(t,e,a){},"984d":function(t,e,a){"use strict";var i=a("1bf2"),n=a.n(i);n.a},a33f:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWJJREFUSA3tkT1LA0EQhmd270KiaWwFPxpFsMoZEUIqQfAniGAT4wfWqYSExVT+ASHBnGBnMIWloBKxUDAfKKayEINWFjaCMWZ3zAbOQi5JZXdb7CzvzLsvPAPgHY+AR+DfCWC/hHye+OlDdZlATQBhAxBM7SHC4kHauuzn7xkQF+V5khQxfPwokww9rolqhHF40+946naBEKMcIZcV4Xq3oK4Bq6IUJ8Xe7R2roM2xZHmbUD0h4RhwVrKFdbaeKZnyFRJErGinrWu3EOYmbolaUEmYG2WhE6dPjIYYcINxuiEpLa1nN8Lfps84BKaWnLm/1TVgT0x/mH5I1am8uymq4x2TgmNCOaUULg4EgjmtaUzNZitmDEOiM+NydUWkZ4Ug41lVVtobHUGEq4B/8L6hPoPQUiEimmXIzvfFzIXLv79SzwBnSoia7wUaUSVpsr3YLzSwYqesO6fvVY+AR6A3gR8Gnn7H5r0QZgAAAABJRU5ErkJggg=="},bfed:function(t,e,a){},cfe8:function(t,e,a){},d14f:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"passwordInput"},[i("el-input",{staticClass:"input",attrs:{"prefix-icon":"el-icon-goods",type:t.type,placeholder:t.placeholder},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t.input?i("span",{on:{mousedown:t.toggleTType,mouseup:t.togglePType}},[i("img",{attrs:{src:a("a33f")}})]):t._e()],1)},n=[],o=a("d225"),s=a("b0b4"),c=a("308d"),r=a("6bb5"),l=a("4e2b"),u=a("9ab4"),f=a("60a3"),p=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.type="password",t.input="",t}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"toggleTType",value:function(){this.type="text"}},{key:"togglePType",value:function(){this.type="password"}},{key:"function",value:function(t,e){this.$emit("input",this.input)}}]),e}(f["b"]);u["a"]([Object(f["c"])("input",{immediate:!0,deep:!0})],p.prototype,"function",null),p=u["a"]([Object(f["a"])({props:{placeholder:{type:String,default:"请输入登录密码（6-24位数字和字母）"}}})],p);var b=p,d=b,m=(a("0c43"),a("2877")),h=Object(m["a"])(d,i,n,!1,null,"ce77496c",null);e["a"]=h.exports},da70:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"account"},[a("el-container",[a("el-aside",{attrs:{width:"177px"}},[a("el-menu",{staticClass:"el-menu",attrs:{router:!0,"default-active":t.activedMenu},on:{select:t.toggleActivedMenu}},t._l(t.subRoutes,function(e,i){return a("el-menu-item",{key:i,attrs:{index:e.path}},[e.icon?a("span",{staticClass:"icon",domProps:{innerHTML:t._s(e.icon)}}):a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v(t._s(e.label))])])}),1)],1),a("el-main",[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[t._v("您的位置：账号管理")]),t._l(t.subRoutes,function(e,i){return[t.currentRoute===e.path?a("el-breadcrumb-item",{key:i,attrs:{to:{path:e.path}}},[t._v(t._s(e.label))]):t._e()]})],2),a("router-view")],1)],1)],1)},n=[],o=a("d225"),s=a("b0b4"),c=a("308d"),r=a("6bb5"),l=a("4e2b"),u=a("9ab4"),f=a("60a3"),p=a("676b"),b=a("d8c9"),d=[{path:"/account/basic",label:"基本信息"},{icon:"&#xe616;",path:"/account/reset-password",label:"重置密码"}],m=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.currentRoute="",t.activedMenu="/account/basic",t.subRoutes=d,t}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"syncRoute",value:function(t){this.currentRoute=t,this.activedMenu=this.currentRoute}},{key:"mounted",value:function(){this.syncRoute(this.$route.path)}},{key:"updated",value:function(){this.syncRoute(this.$route.path)}},{key:"toggleActivedMenu",value:function(t){this.syncRoute(t)}}]),e}(f["b"]);m=u["a"]([Object(f["a"])({components:{CustomizedFooter:p["a"],CustomizedNav:b["a"]}})],m);var h=m,v=h,g=(a("984d"),a("0235"),a("2877")),y=Object(g["a"])(v,i,n,!1,null,"10c51d3a",null);e["default"]=y.exports},decf:function(t,e,a){t.exports=a.p+"img/company1.1623ed55.jpg"},e2cc:function(t,e,a){"use strict";var i=a("7eda"),n=a.n(i);n.a},fc13:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"account-reset-password"},[a("board",{staticClass:"body"},[a("div",{staticClass:"form"},[a("el-form",{ref:"form",attrs:{rules:t.rules,model:t.form,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"手机号",prop:"tel"}},[a("el-input",{attrs:{placeholder:"请输入登录手机号"},model:{value:t.form.tel,callback:function(e){t.$set(t.form,"tel",t._n(e))},expression:"form.tel"}})],1),a("el-form-item",{attrs:{label:"验证码",prop:"captcha"}},[a("captcha",{model:{value:t.form.captcha,callback:function(e){t.$set(t.form,"captcha",e)},expression:"form.captcha"}})],1),a("el-form-item",{attrs:{label:"新密码",prop:"password"}},[a("password-input",{attrs:{placeholder:"请输入新密码（6-24位数字和字母）"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("el-form-item",{attrs:{label:"确认密码",prop:"confirm-password"}},[a("password-input",{attrs:{placeholder:"请再次输入新密码"},model:{value:t.form.confirmPassword,callback:function(e){t.$set(t.form,"confirmPassword",e)},expression:"form.confirmPassword"}})],1),a("el-form-item",[a("el-button",{staticClass:"full main",attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("重置密码")])],1)],1)],1)])],1)},n=[],o=a("d225"),s=a("b0b4"),c=a("308d"),r=a("6bb5"),l=a("4e2b"),u=a("9ab4"),f=a("60a3"),p=a("2062"),b=a("d14f"),d=a("69fb"),m=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(c["a"])(this,Object(r["a"])(e).apply(this,arguments)),t.form={tel:"",password:"",confirmPassword:"",captcha:""},t.rules={tel:[{required:!0,message:"请输入登录手机号",trigger:"blur"},{type:"number",message:"手机号必须为数字值",trigger:"blur"}],password:[{required:!0,message:"请输入新登录密码",trigger:"blur"}],"confirm-password":[{required:!0,message:"请再次输入新登录密码",trigger:"blur"}],captcha:[{required:!0,message:"请输入验证码",trigger:"blur"}]},t}return Object(l["a"])(e,t),Object(s["a"])(e,[{key:"onSubmit",value:function(){var t=this.$refs.form;t.validate(function(t){return!1})}}]),e}(f["b"]);m=u["a"]([Object(f["a"])({components:{Board:d["a"],Captcha:p["a"],PasswordInput:b["a"]}})],m);var h=m,v=h,g=(a("601d"),a("48a4"),a("2877")),y=Object(g["a"])(v,i,n,!1,null,"77bf17b9",null);e["default"]=y.exports}}]);
//# sourceMappingURL=account.e1aa70e2.js.map