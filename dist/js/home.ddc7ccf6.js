(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"69fb":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"board"},[e("div",{staticClass:"header"},[e("div",{staticClass:"title"},[e("span",[t._v(t._s(t.title))]),t.desc?e("span",{staticClass:"desc"},[t._v(t._s(t.desc))]):t._e()]),t.seeMoreAction?e("el-button",{attrs:{type:"text"},on:{click:t.seeMoreAction}},[t._v("更多 >")]):t._e()],1),e("div",{staticClass:"body"},[t._t("default")],2)])},o=[],i=e("d225"),c=e("308d"),s=e("6bb5"),r=e("4e2b"),u=e("9ab4"),p=e("60a3"),l=function(t){function n(){return Object(i["a"])(this,n),Object(c["a"])(this,Object(s["a"])(n).apply(this,arguments))}return Object(r["a"])(n,t),n}(p["b"]);l=u["a"]([Object(p["a"])({props:{title:{type:String,default:"我的看板"},desc:{type:String,default:""},seeMoreAction:{type:Function,default:null}}})],l);var f=l,d=f,b=(e("f92c"),e("2877")),m=Object(b["a"])(d,a,o,!1,null,"0123d87b",null);n["a"]=m.exports},"7fee":function(t,n,e){},bb51:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=this,e=n.$createElement,a=n._self._c||e;return a("div",{staticClass:"container"},[a("el-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:"/"}},[a("el-breadcrumb-item",[n._v("您的位置：首页")])],1),a("div",{staticClass:"content"},[a("div",{staticClass:"left"},[a("board",{attrs:{title:"简历看板",seeMoreAction:function(){return t.$router.push({path:"/resume/info"})}}},[a("ul",[a("li",[a("span",[n._v("本日新增")]),a("span",[n._v(n._s(n.resumeBoardStatistics.incrementDaily))])]),a("li",[a("span",[n._v("待处理")]),a("span",[a("el-button",{attrs:{type:"text"},on:{click:n.gotoResumeUI}},[n._v(n._s(n.resumeBoardStatistics.toProcessNum))])],1)])])]),a("board",{attrs:{title:"职位看板",seeMoreAction:function(){return t.$router.push({path:"/occupation/info"})}}},[a("ul",[a("li",[a("span",[n._v("已上线")]),a("span",[a("el-button",{attrs:{type:"text"},on:{click:function(t){return n.gotoOccupationPanel("ONLINE")}}},[n._v(n._s(n.occupationBoardStatistics.onlineNum))])],1)]),a("li",[a("span",[n._v("编辑中")]),a("span",[a("el-button",{attrs:{type:"text"},on:{click:function(t){return n.gotoOccupationPanel("PENDING")}}},[n._v(n._s(n.occupationBoardStatistics.editingNum))])],1)]),a("li",[a("span",[n._v("审核中")]),a("span",[a("el-button",{attrs:{type:"text"},on:{click:function(t){return n.gotoOccupationPanel("CHECKING")}}},[n._v(n._s(n.occupationBoardStatistics.auditingNum))])],1)]),a("li",[a("span",[n._v("审核未通过")]),a("span",[a("el-button",{attrs:{type:"text"},on:{click:function(t){return n.gotoOccupationPanel("FAILED")}}},[n._v(n._s(n.occupationBoardStatistics.auditFailedNum))])],1)]),a("li",[a("span",[n._v("已下线")]),a("span",[a("el-button",{attrs:{type:"text"},on:{click:function(t){return n.gotoOccupationPanel("OFFLINE")}}},[n._v(n._s(n.occupationBoardStatistics.offlineNum))])],1)])])])],1),a("div",{staticClass:"right"},[a("board",{attrs:{title:"企业摘要",seeMoreAction:function(){return t.$router.push({path:"/enterprise/info"})}}},[a("div",{staticClass:"enterprise"},[a("div",{staticClass:"enter-head"},[n.companyInfo.logoUrl?a("img",{attrs:{src:n.companyInfo.logoUrl}}):n._e(),a("div",[a("span",[n._v("企业信息完整度")]),a("el-progress",{attrs:{percentage:n.companyInfo.completedPercent}})],1)]),a("div",{staticClass:"enter-content"},[a("p",[n._v("企业名称："+n._s(n.companyInfo.fullName)+" "),a("span",{staticClass:"tag"},[n._v(n._s(1===n.companyInfo.state?"审核中":"已上线"))])]),a("p",[n._v("企业简称："+n._s(n.companyInfo.shortName))])])])])],1)])],1)},o=[],i=(e("96cf"),e("3b8d")),c=e("d225"),s=e("b0b4"),r=e("308d"),u=e("6bb5"),p=e("4e2b"),l=e("9ab4"),f=e("60a3"),d=e("69fb"),b=e("dbfb"),m=e("fc7b"),v=function(t){function n(){var t;return Object(c["a"])(this,n),t=Object(r["a"])(this,Object(u["a"])(n).apply(this,arguments)),t.resumeBoardStatistics={incrementDaily:0,toProcessNum:0},t.occupationBoardStatistics={auditFailedNum:0,auditingNum:0,editingNum:0,offlineNum:0,onlineNum:0},t.companyInfo={completedPercent:0,fullName:"",shortName:"",state:1,logoUrl:""},t}return Object(p["a"])(n,t),Object(s["a"])(n,[{key:"gotoOccupationPanel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$router.push({path:"/occupation/info".concat(t&&"?tab="+t)})}},{key:"gotoNotiUI",value:function(){this.$router.push({path:"/notifications"})}},{key:"gotoResumeUI",value:function(){this.$router.push({path:"/resume/info"})}},{key:"created",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(b["a"])();case 2:return this.occupationBoardStatistics=t.sent.data,t.next=5,Object(b["b"])();case 5:return this.resumeBoardStatistics=t.sent.data,t.next=8,Object(m["a"])();case 8:this.companyInfo=t.sent.data;case 9:case"end":return t.stop()}},t,this)}));function n(){return t.apply(this,arguments)}return n}()}]),n}(f["b"]);v=l["a"]([Object(f["a"])({components:{Board:d["a"]}})],v);var _=v,h=_,y=(e("cec7"),e("2877")),g=Object(y["a"])(h,a,o,!1,null,"3989da87",null);n["default"]=g.exports},cec7:function(t,n,e){"use strict";var a=e("f579"),o=e.n(a);o.a},dbfb:function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i});var a=e("e423"),o=function(){return a["a"].get("/dashboard/position")},i=function(){return a["a"].get("/dashboard/resume")}},f579:function(t,n,e){},f92c:function(t,n,e){"use strict";var a=e("7fee"),o=e.n(a);o.a},fc7b:function(t,n,e){"use strict";e.d(n,"b",function(){return i}),e.d(n,"e",function(){return c}),e.d(n,"d",function(){return s}),e.d(n,"a",function(){return r}),e.d(n,"c",function(){return u}),e.d(n,"f",function(){return p}),e.d(n,"g",function(){return l});var a=e("e423"),o=!1,i=function(){return a["a"].get("/company")},c=function(t){return a["a"].put("/company",t)},s=function(t){return a["a"].put("/company/audit",t)},r=function(t){return a["a"].get("/company/brief",t)},u=function(t){return a["a"].post("/company",t)},p=o?"/api/company/audit/file":"/backtestbusiness/company/audit/file",l=o?"/api/company/logo":"/backtestbusiness/company/logo"}}]);
//# sourceMappingURL=home.ddc7ccf6.js.map