(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-category-category"],{"180e":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.header[data-v-6ac1cfc5]{width:92%;padding:0 4%;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:fixed;z-index:10;background-color:#fff;top:0}.header .addr[data-v-6ac1cfc5]{width:%?120?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?28?%}.header .addr .icon[data-v-6ac1cfc5]{height:%?60?%;margin-right:%?5?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?42?%;color:#ffc50a}.header .input-box[data-v-6ac1cfc5]{width:100%;height:%?60?%;background-color:#f5f5f5;border-radius:%?30?%;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.header .input-box .icon[data-v-6ac1cfc5]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:absolute;top:0;right:0;width:%?60?%;height:%?60?%;font-size:%?34?%;color:silver}.header .input-box uni-input[data-v-6ac1cfc5]{padding-left:%?28?%;height:%?28?%;font-size:%?28?%}.header .icon-btn[data-v-6ac1cfc5]{width:%?60?%;height:%?60?%;-webkit-flex-shrink:0;flex-shrink:0;display:-webkit-box;display:-webkit-flex;display:flex}.header .icon-btn .icon[data-v-6ac1cfc5]{width:%?60?%;height:%?60?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;align-items:center;font-size:%?42?%}.place[data-v-6ac1cfc5]{background-color:#fff;height:%?100?%}',""])},2702:function(t,e,i){"use strict";var a=i("7961"),n=i.n(a);n.a},5524:function(t,e,i){"use strict";var a=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("b86f")),c=a(i("aedc")),r={data:function(){return{categoryList:[],showCategoryIdx:0}},components:{pageHeader:n.default},methods:{onLoad:function(){this.initData()},initData:function(){var t=this;this.request({url:c.default.getCategory,success:function(e){console.log(e),t.categoryList=e.data}})},handleCategory:function(t){this.showCategoryIdx=t},handleCategoryList:function(t){uni.navigateTo({url:"../../goods/goodsList?name="+t.name})}}};e.default=r},"633a":function(t,e,i){var a=i("8137");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("ef00f29c",a,!0,{sourceMap:!1,shadowMode:!1})},"6c5c":function(t,e,i){"use strict";i.r(e);var a=i("fb60"),n=i.n(a);for(var c in a)"default"!==c&&function(t){i.d(e,t,function(){return a[t]})}(c);e["default"]=n.a},"777a":function(t,e,i){"use strict";i.r(e);var a=i("5524"),n=i.n(a);for(var c in a)"default"!==c&&function(t){i.d(e,t,function(){return a[t]})}(c);e["default"]=n.a},7961:function(t,e,i){var a=i("180e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("29e67f86",a,!0,{sourceMap:!1,shadowMode:!1})},8137:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.category-list[data-v-ce93c62e]{width:100%;background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex}.category-list .left[data-v-ce93c62e]{width:24%;background-color:#f2f2f2}.category-list .left .row[data-v-ce93c62e]{width:100%;height:%?90?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.category-list .left .row .text[data-v-ce93c62e]{width:100%;position:relative;font-size:%?28?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#3c3c3c}.category-list .left .row .text .block[data-v-ce93c62e]{position:absolute;width:%?0?%;left:0}.category-list .left .row.on[data-v-ce93c62e]{height:%?100?%;background-color:#fff}.category-list .left .row.on .text[data-v-ce93c62e]{font-size:%?30?%;font-weight:600;color:#2d2d2d}.category-list .left .row.on .text .block[data-v-ce93c62e]{width:%?10?%;height:80%;top:10%;background-color:#f06c7a}.category-list .right[data-v-ce93c62e]{position:absolute;width:76%;left:24%}.category-list .right .category[data-v-ce93c62e]{width:94%;padding:%?20?% 3%}.category-list .right .category .banner[data-v-ce93c62e]{width:100%;height:28vw;border-radius:%?10?%;overflow:hidden;box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.3)}.category-list .right .category .banner uni-image[data-v-ce93c62e]{width:100%;height:100%}.category-list .right .category .list[data-v-ce93c62e]{margin-top:%?40?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.category-list .right .category .list .box[data-v-ce93c62e]{width:calc(71.44vw / 3);margin-bottom:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.category-list .right .category .list .box uni-image[data-v-ce93c62e]{width:60%;height:calc(71.44vw / 3 * .6)}.category-list .right .category .list .box .text[data-v-ce93c62e]{margin-top:%?5?%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:%?26?%}',""])},"90dc":function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("page-status"),i("pageHeader"),i("v-uni-view",{staticClass:"category-list"},[i("v-uni-scroll-view",{staticClass:"left",attrs:{"scroll-y":"true"}},t._l(t.categoryList,function(e,a){return i("v-uni-view",{key:a,staticClass:"row",class:{on:a==t.showCategoryIdx},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.handleCategory(a)}}},[i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"block"}),t._v(t._s(e.title))],1)],1)}),1),i("v-uni-scroll-view",{staticClass:"right",attrs:{"scroll-y":"true"}},t._l(t.categoryList,function(e,a){return i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:a==t.showCategoryIdx,expression:"index == showCategoryIdx"}],key:e.id,staticClass:"category"},[i("v-uni-view",{staticClass:"banner"},[i("v-uni-image",{attrs:{src:e.banner,mode:"widthFix"}})],1),i("v-uni-view",{staticClass:"list"},t._l(e.list,function(e,a){return i("v-uni-view",{key:a,staticClass:"box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.handleCategoryList(e)}}},[i("v-uni-image",{attrs:{src:"/static/img/category/list/"+e.img,mode:"widthFix"}}),i("v-uni-view",{staticClass:"text"},[t._v(t._s(e.name))])],1)}),1)],1)}),1)],1)],1)},c=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return c}),i.d(e,"a",function(){return a})},aedc:function(t,e,i){"use strict";var a="https://uniapp-interface.herokuapp.com/",n={getMallData:a+"api/profiles/mall_list",getCategory:a+"api/profiles/category",getGoodsList:a+"api/profiles/goodslist",getGoods:a+"api/profiles/goods"};t.exports=n},b86f:function(t,e,i){"use strict";i.r(e);var a=i("c0be"),n=i("6c5c");for(var c in n)"default"!==c&&function(t){i.d(e,t,function(){return n[t]})}(c);i("2702");var r,o=i("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"6ac1cfc5",null,!1,a["a"],r);e["default"]=s.exports},c0be:function(t,e,i){"use strict";var a,n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"header"},[i("v-uni-view",{staticClass:"addr"},[i("v-uni-view",{staticClass:"icon iconfont"},[t._v("")]),t._v(t._s(t.city))],1),i("v-uni-view",{staticClass:"input-box"},[i("v-uni-input",{attrs:{type:"text",placeholder:"搜索关键字","placeholder-style":"color:#c0c0c0"}}),i("v-uni-view",{staticClass:"icon iconfont"},[t._v("")])],1),i("v-uni-view",{staticClass:"icon-btn"},[i("v-uni-view",{staticClass:"icon iconfont"},[t._v("")])],1)],1),i("v-uni-view",{staticClass:"place"})],1)},c=[];i.d(e,"b",function(){return n}),i.d(e,"c",function(){return c}),i.d(e,"a",function(){return a})},f355:function(t,e,i){"use strict";var a=i("633a"),n=i.n(a);n.a},fb60:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{city:"深圳"}}};e.default=a},fc2e:function(t,e,i){"use strict";i.r(e);var a=i("90dc"),n=i("777a");for(var c in n)"default"!==c&&function(t){i.d(e,t,function(){return n[t]})}(c);i("f355");var r,o=i("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"ce93c62e",null,!1,a["a"],r);e["default"]=s.exports}}]);