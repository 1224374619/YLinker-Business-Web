(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["enterprise-info-update"],{"124c":function(e,t,r){},2062:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"captcha"},[r("el-input",{staticClass:"input",attrs:{type:"captcha",placeholder:"验证码"},model:{value:e.captchaInput,callback:function(t){e.captchaInput=t},expression:"captchaInput"}}),r("el-button",{staticClass:"btn",attrs:{disabled:e.frozen||e.disabled},on:{click:e.getCaptcha}},[e._v(e._s(e.captchaStatusText))])],1)},n=[],i=(r("c5f6"),r("96cf"),r("3b8d")),o=r("d225"),s=r("b0b4"),l=r("308d"),c=r("6bb5"),p=r("4e2b"),u=r("9ab4"),m=r("60a3"),d=r("94c9"),f="获取验证码",b=60,h=function(e){function t(){var e;return Object(o["a"])(this,t),e=Object(l["a"])(this,Object(c["a"])(t).apply(this,arguments)),e.frozen=!1,e.counter=b,e.captchaInput="",e.captchaStatusText=f,e}return Object(p["a"])(t,e),Object(s["a"])(t,[{key:"getCaptcha",value:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t,r=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.frozen=!0,e.next=3,Object(d["e"])({phone:Number(this.$props.phoneNumber)});case 3:t=setInterval(function(){r.captchaStatusText="".concat(f,"(").concat(--r.counter,"s)"),0===r.counter&&(clearInterval(t),r.counter=b,r.captchaStatusText=f,r.frozen=!1)},1e3);case 4:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"function",value:function(e,t){this.$emit("input",this.captchaInput)}}]),t}(m["b"]);u["a"]([Object(m["c"])("captchaInput",{immediate:!0,deep:!0})],h.prototype,"function",null),h=u["a"]([Object(m["a"])({props:{phoneNumber:{type:[String,Number],default:!1},disabled:{type:Boolean,default:!1}}})],h);var g=h,v=g,y=(r("6dce"),r("2877")),O=Object(y["a"])(v,a,n,!1,null,"768849b1",null);t["a"]=O.exports},3470:function(e,t,r){"use strict";var a=r("d622"),n=r.n(a);n.a},"6dce":function(e,t,r){"use strict";var a=r("b8de"),n=r.n(a);n.a},"7e1e":function(e,t,r){},a201:function(e,t,r){"use strict";var a=r("7e1e"),n=r.n(a);n.a},a33f:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAWJJREFUSA3tkT1LA0EQhmd270KiaWwFPxpFsMoZEUIqQfAniGAT4wfWqYSExVT+ASHBnGBnMIWloBKxUDAfKKayEINWFjaCMWZ3zAbOQi5JZXdb7CzvzLsvPAPgHY+AR+DfCWC/hHye+OlDdZlATQBhAxBM7SHC4kHauuzn7xkQF+V5khQxfPwokww9rolqhHF40+946naBEKMcIZcV4Xq3oK4Bq6IUJ8Xe7R2roM2xZHmbUD0h4RhwVrKFdbaeKZnyFRJErGinrWu3EOYmbolaUEmYG2WhE6dPjIYYcINxuiEpLa1nN8Lfps84BKaWnLm/1TVgT0x/mH5I1am8uymq4x2TgmNCOaUULg4EgjmtaUzNZitmDEOiM+NydUWkZ4Ug41lVVtobHUGEq4B/8L6hPoPQUiEimmXIzvfFzIXLv79SzwBnSoia7wUaUSVpsr3YLzSwYqesO6fvVY+AR6A3gR8Gnn7H5r0QZgAAAABJRU5ErkJggg=="},b8de:function(e,t,r){},d14f:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"passwordInput"},[a("el-input",{staticClass:"input",attrs:{"prefix-icon":e.showPrefix?"el-icon-goods":"",type:e.type,placeholder:e.placeholder},model:{value:e.input,callback:function(t){e.input=t},expression:"input"}}),e.input?a("span",{on:{mousedown:e.toggleTType,mouseup:e.togglePType}},[a("img",{attrs:{src:r("a33f")}})]):e._e()],1)},n=[],i=r("d225"),o=r("b0b4"),s=r("308d"),l=r("6bb5"),c=r("4e2b"),p=r("9ab4"),u=r("60a3"),m=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(s["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.type="password",e.input="",e}return Object(c["a"])(t,e),Object(o["a"])(t,[{key:"toggleTType",value:function(){this.type="text"}},{key:"togglePType",value:function(){this.type="password"}},{key:"function",value:function(e,t){this.$emit("input",this.input)}}]),t}(u["b"]);p["a"]([Object(u["c"])("input",{immediate:!0,deep:!0})],m.prototype,"function",null),m=p["a"]([Object(u["a"])({props:{placeholder:{type:String,default:"请输入登录密码（6-24位数字和字母）"},showPrefix:{type:Boolean,default:!0}}})],m);var d=m,f=d,b=(r("a201"),r("2877")),h=Object(b["a"])(f,a,n,!1,null,"1434d070",null);t["a"]=h.exports},d622:function(e,t,r){},dbc0:function(e,t,r){"use strict";var a=r("124c"),n=r.n(a);n.a},de0f:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"enterprise-info-update-container"},[r("div",{staticClass:"form"},[r("el-form",{ref:"form",attrs:{rules:e.rules,model:e.form,"label-width":"140px"}},[r("p",{staticClass:"header"},[r("span",[e._v("企业资质审核")])]),r("el-form-item",{attrs:{label:"企业名称",prop:"companyName"}},[r("el-input",{attrs:{placeholder:"请输入与企业证件材料一致的全称"},model:{value:e.form.companyName,callback:function(t){e.$set(e.form,"companyName",t)},expression:"form.companyName"}})],1),r("el-form-item",{attrs:{label:"企业注册地",prop:"registeredAddress"}},[r("el-input",{attrs:{placeholder:"请输入企业注册地（省份、城市）"},model:{value:e.form.registeredAddress,callback:function(t){e.$set(e.form,"registeredAddress",t)},expression:"form.registeredAddress"}})],1),r("el-form-item",{attrs:{label:"统一社会信用代码",prop:"uniformSocialCreditCode"}},[r("el-input",{attrs:{maxlength:"18",placeholder:"请输入与企业证件材料一致的代码"},model:{value:e.form.uniformSocialCreditCode,callback:function(t){e.$set(e.form,"uniformSocialCreditCode",t)},expression:"form.uniformSocialCreditCode"}})],1),r("el-form-item",{attrs:{label:"企业类别",prop:"enterpriseForm"}},[r("el-cascader",{attrs:{options:e.enterpriseTypes,placeholder:"请选择企业类型"},model:{value:e.form.enterpriseForm,callback:function(t){e.$set(e.form,"enterpriseForm",t)},expression:"form.enterpriseForm"}})],1),r("el-form-item",{attrs:{label:"上传证件原件照片",prop:"file"}},[r("el-upload",{staticClass:"upload",attrs:{action:e.uploadCompanyFile,"file-list":e.tempFile,"on-success":e.dealWithUploadLicense,"with-credentials":!0,"list-type":"picture"}},[r("i",{staticClass:"el-icon-upload"}),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("支持图片格式：png、jpg、jpeg、gif，最大不超过 3M。")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("提示：确保企业名称与提交审核公司一致；如为复印件、黑白扫描件，需加盖企业公章；不可使用屏幕截图或翻拍照片提交审核；上传图片不可有与银领人才网无关的标注或水印；不可使用电子版营业执照提交审核；所上传证照照片，信息需清晰完整；")]),r("div",{staticClass:"el-upload__tip warning",attrs:{slot:"tip"},slot:"tip"},[e._v("企业营业执照仅用审核，不会向第三方透露，请放心上传！")])])],1),r("span",{staticClass:"line"}),r("p",{staticClass:"header"},[r("span",[e._v("联系人信息")])]),r("el-form-item",{attrs:{label:"姓名",prop:"realName"}},[r("el-input",{attrs:{placeholder:"请输入真实姓名，信息仅用于招聘"},model:{value:e.form.realName,callback:function(t){e.$set(e.form,"realName",t)},expression:"form.realName"}})],1),r("el-form-item",{attrs:{label:"联系电话",prop:"phone"}},[r("el-input",{attrs:{maxlength:"11",placeholder:"请输入联系人电话"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1),r("el-form-item",{attrs:{label:"联系邮箱",prop:"email"}},[r("el-input",{attrs:{placeholder:"请输入联系人邮箱"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),r("el-form-item",[r("el-button",{staticClass:"full main",attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("提交")])],1)],1)],1)])},n=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),o=(r("96cf"),r("3b8d")),s=r("d225"),l=r("b0b4"),c=r("308d"),p=r("6bb5"),u=r("4e2b"),m=r("9ab4"),d=r("60a3"),f=r("2f62"),b=r("676b"),h=r("d8c9"),g=r("2062"),v=r("d14f"),y=r("fc7b"),O=r("d21a");function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(r,!0).forEach(function(t){Object(i["a"])(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var j=function(e){function t(){var e;return Object(s["a"])(this,t),e=Object(c["a"])(this,Object(p["a"])(t).apply(this,arguments)),e.uploadCompanyFile=y["f"],e.tempFile=[],e.form={companyName:"",serialNuuniformSocialCreditCodember:"",registeredAddress:"",realName:"",occupation:"",phone:"",email:"",file:{}},e.rules={uniformSocialCreditCode:[{required:!0,message:"请输入统一社会信用代码",trigger:"blur"},{len:18,message:"统一社会信用代码为18位数字",trigger:"blur"}],enterpriseForm:[{required:!0,message:"请选择企业类别",trigger:"blur"}],companyName:[{required:!0,message:"请输入企业名称",trigger:"blur"}],registeredAddress:[{required:!0,message:"请输入企业注册地",trigger:"blur"}],realName:[{required:!0,message:"请输入联系人姓名",trigger:"blur"}],phone:[{required:!0,message:"请输入联系人电话",trigger:"blur"},{len:11,message:"手机号为11位数字",trigger:"blur"}],email:[{required:!0,message:"请输入联系人邮箱",trigger:"blur"}],file:[{required:!0,message:"请上传证件原件照片",trigger:"blur"}]},e}return Object(u["a"])(t,e),Object(l["a"])(t,[{key:"onSubmit",value:function(){var e=this,t=this.$refs.form;t.validate(function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(r){var a,n,i,o,s,l,c,p;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=6;break}return a=e.form,n=a.companyName,i=a.enterpriseForm,o=a.file,s=a.registeredAddress,l=a.uniformSocialCreditCode,c=a.email,p=a.realName,t.next=4,Object(y["c"])({audit:{companyName:n,enterpriseForm:i[i.length-1],file:o,registeredAddress:s,uniformSocialCreditCode:l},contact:{email:c,realName:p}});case 4:t.sent,e.$router.push("/enterprise/info");case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"dealWithUploadLicense",value:function(e,t,r){this.form=C({},this.form,{file:e.data})}}]),t}(d["b"]);j=m["a"]([Object(d["a"])({components:{CustomizedFooter:b["a"],CustomizedNav:h["a"],Captcha:g["a"],PasswordInput:v["a"]},computed:Object(f["e"])({enterpriseTypes:function(e){return Object(O["b"])(e.constants.enterpriseForm)}})})],j);var x=j,w=x,k=(r("3470"),r("dbc0"),r("2877")),N=Object(k["a"])(w,a,n,!1,null,"7d78a6ee",null);t["default"]=N.exports}}]);
//# sourceMappingURL=enterprise-info-update.31581f11.js.map