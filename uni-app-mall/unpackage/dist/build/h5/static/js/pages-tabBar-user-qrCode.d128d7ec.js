(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-user-qrCode"],{"222e":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-4279abf5]{background-color:#f06c7a}.block[data-v-4279abf5]{width:100%;height:30vh;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.QR[data-v-4279abf5]{width:60vw;height:75vw;margin:-40vw auto 0 auto;background-color:rgba(96,197,123,.5);border:1px solid #60c57b;border-radius:15%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.QR uni-image[data-v-4279abf5]{width:50vw;height:50vw}.heath[data-v-4279abf5]{width:100%;height:%?100?%;opacity:.3;margin-top:%?100?%}.title[data-v-4279abf5]{width:100%;margin-top:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?36?%;color:#fff}.btn[data-v-4279abf5]{width:50%;height:%?80?%;border-radius:%?80?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 %?20?%;margin:0 auto;margin-top:%?50?%;background-color:hsla(0,0%,100%,.8)}body.?%PAGE?%[data-v-4279abf5]{background-color:#f06c7a}',""])},2476:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{savePhotos:"保存到相册",showBtn:!1}},onLoad:function(){},methods:{handleSavePhotos:function(){var t=this;this.savePhotos="正在保存";var e=this.$mp.page.$getAppWebview(),n=new plus.nativeObj.Bitmap;this.$nextTick(function(){setTimeout(function(){e.draw(n,function(e){n.save("_doc/Qr.jpg",{overwrite:!0,quality:100},function(e){plus.gallery.save(e.target,function(e){uni.showToast({title:"保存成功"}),t.savePhotos="保存到相册",n.clear()})})},function(t){console.log("保存图片失败")},function(t){console.log("bitmap绘制图片失败")})},200)})}}};e.default=i},7688:function(t,e,n){"use strict";n.r(e);var i=n("2476"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"795d":function(t,e,n){var i=n("222e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("fd16029a",i,!0,{sourceMap:!1,shadowMode:!1})},ee0a:function(t,e,n){"use strict";n.r(e);var i=n("f98c"),a=n("7688");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("ee47");var s,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"4279abf5",null,!1,i["a"],s);e["default"]=c.exports},ee47:function(t,e,n){"use strict";var i=n("795d"),a=n.n(i);a.a},f98c:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{staticClass:"block"}),n("v-uni-view",{staticClass:"QR"},[n("v-uni-image",{attrs:{src:"../../../static/img/myQRCode.jpg"}})],1),n("v-uni-view",{staticClass:"title"},[t._v("天之涯，海之角")]),n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.showBtn,expression:"showBtn"}],staticClass:"btn",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleSavePhotos.apply(void 0,arguments)}}},[t._v(t._s(t.savePhotos))]),n("v-uni-view",[n("v-uni-image",{staticClass:"heath",attrs:{src:"../../../static/img/heath_jump.gif",mode:"aspectFill"}})],1)],1)},o=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})}}]);