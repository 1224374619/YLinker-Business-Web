(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["home"],{"427f":function(t,e,n){},"4c2f":function(t,e,n){},5190:function(t,e,n){"use strict";var a=n("4c2f"),s=n.n(a);s.a},"69fb":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"board"},[n("div",{staticClass:"header"},[n("div",{staticClass:"title"},[n("span",[t._v(t._s(t.title))]),t.desc?n("span",{staticClass:"desc"},[t._v(t._s(t.desc))]):t._e()]),t.seeMoreAction?n("el-button",{attrs:{type:"text"},on:{click:t.seeMoreAction}},[n("span",{staticClass:"more"},[t._v("更多 >")])]):t._e()],1),n("div",{staticClass:"body"},[t._t("default")],2)])},s=[],i=n("d225"),o=n("308d"),c=n("6bb5"),r=n("4e2b"),u=n("9ab4"),l=n("60a3"),p=function(t){function e(){return Object(i["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(r["a"])(e,t),e}(l["b"]);p=u["a"]([Object(l["a"])({props:{title:{type:String,default:"我的看板"},desc:{type:String,default:""},seeMoreAction:{type:Function,default:null}}})],p);var d=p,f=d,b=(n("c6b3"),n("2877")),v=Object(b["a"])(f,a,s,!1,null,"38ecad48",null);e["a"]=v.exports},bb51:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"container"},[a("el-breadcrumb",{staticClass:"breadcrumb",attrs:{separator:"/"}},[a("el-breadcrumb-item",[e._v("您的位置：首页")])],1),a("div",{staticClass:"content"},[a("div",{staticClass:"left"},[a("board",{attrs:{title:"简历看板",seeMoreAction:function(){return t.$router.push({path:"/resume/info"})}}},[a("ul",[a("li",[a("span",[e._v("本日新增")]),a("span",[e._v(e._s(e.resumeBoardStatistics.incrementDaily))])]),a("li",[a("span",[e._v("待处理")]),a("span",[a("el-button",{attrs:{type:"text"},on:{click:e.gotoResumeUI}},[e._v(e._s(e.resumeBoardStatistics.toProcessNum))])],1)])])]),a("board",{attrs:{title:"职位看板",seeMoreAction:function(){return t.$router.push({path:"/occupation/info"})}}},[a("ul",[a("li",[a("span",[e._v("已上线")]),a("span",[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.gotoOccupationPanel("ONLINE")}}},[e._v(e._s(e.occupationBoardStatistics.onlineNum))])],1)]),a("li",[a("span",[e._v("待上线")]),a("span",[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.gotoOccupationPanel("EDITING")}}},[e._v(e._s(e.occupationBoardStatistics.editingNum))])],1)]),a("li",[a("span",[e._v("审核中")]),a("span",[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.gotoOccupationPanel("CHECKING")}}},[e._v(e._s(e.occupationBoardStatistics.auditingNum))])],1)]),a("li",[a("span",[e._v("审核未通过")]),a("span",[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.gotoOccupationPanel("INVALID")}}},[e._v(e._s(e.occupationBoardStatistics.auditFailedNum))])],1)]),a("li",[a("span",[e._v("已下线")]),a("span",[a("el-button",{attrs:{type:"text"},on:{click:function(t){return e.gotoOccupationPanel("OFFLINE")}}},[e._v(e._s(e.occupationBoardStatistics.offlineNum))])],1)])])])],1),a("div",{staticClass:"right"},[a("board",{attrs:{title:"企业摘要",seeMoreAction:function(){return t.$router.push({path:"/enterprise/info"})}}},[a("div",{staticClass:"enterprise"},[a("div",{staticClass:"enter-head"},[e.companyInfo.logoUrl?a("img",{attrs:{src:e.companyInfo.logoUrl}}):e._e(),a("div",[a("span",[e._v("企业信息完整度")]),a("el-progress",{attrs:{percentage:e.companyInfo.completedPercent}})],1)]),a("div",{staticClass:"enter-content"},[a("p",[e._v("企业名称："+e._s(e.companyInfo.fullName)+" "),a("span",{staticClass:"tag"},[e._v(e._s(1===e.companyInfo.state?"审核中":"已上线"))])]),a("p",[e._v("企业简称："+e._s(e.companyInfo.shortName))])])])])],1)])],1)},s=[],i=(n("96cf"),n("3b8d")),o=n("d225"),c=n("b0b4"),r=n("308d"),u=n("6bb5"),l=n("4e2b"),p=n("9ab4"),d=n("60a3"),f=n("69fb"),b=n("dbfb"),v=n("fc7b"),m=function(t){function e(){var t;return Object(o["a"])(this,e),t=Object(r["a"])(this,Object(u["a"])(e).apply(this,arguments)),t.resumeBoardStatistics={incrementDaily:0,toProcessNum:0},t.occupationBoardStatistics={auditFailedNum:0,auditingNum:0,editingNum:0,offlineNum:0,onlineNum:0},t.companyInfo={completedPercent:0,fullName:"",shortName:"",state:1,logoUrl:""},t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"gotoOccupationPanel",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.$router.push({path:"/occupation/info".concat(t&&"?tab="+t)})}},{key:"gotoNotiUI",value:function(){this.$router.push({path:"/notifications"})}},{key:"gotoResumeUI",value:function(){this.$router.push({path:"/resume/info"})}},{key:"created",value:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(b["a"])();case 2:return this.occupationBoardStatistics=t.sent.data,t.next=5,Object(b["b"])();case 5:return this.resumeBoardStatistics=t.sent.data,t.next=8,Object(v["a"])();case 8:this.companyInfo=t.sent.data;case 9:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}]),e}(d["b"]);m=p["a"]([Object(d["a"])({components:{Board:f["a"]}})],m);var _=m,h=_,g=(n("5190"),n("2877")),y=Object(g["a"])(h,a,s,!1,null,"61182b92",null);e["default"]=y.exports},c6b3:function(t,e,n){"use strict";var a=n("427f"),s=n.n(a);s.a},dbfb:function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return i});var a=n("e423"),s=function(){return a["a"].get("/dashboard/position")},i=function(){return a["a"].get("/dashboard/resume")}}}]);
//# sourceMappingURL=home.9ed01360.js.map