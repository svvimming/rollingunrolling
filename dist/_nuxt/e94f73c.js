(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{253:function(t,e,r){var content=r(255);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(61).default)("1cb1c49c",content,!0,{sourceMap:!1})},254:function(t,e,r){"use strict";r(253)},255:function(t,e,r){var o=r(60)(!1);o.push([t.i,'.image[data-v-3559c923]{width:100%}.portfolio-card[data-v-3559c923]{padding:10rem 0;font-family:"Spectral"}.title[data-v-3559c923]{font-size:28px;letter-spacing:0;font-weight:600;font-style:italic}.subtitle[data-v-3559c923]{font-size:14px}.image-container[data-v-3559c923]{position:relative}.flower[data-v-3559c923]{position:absolute;top:-50%;left:-25%;width:150%;height:200%;background-image:url(/images/flower.png);background-size:100%;background-repeat:no-repeat;z-index:-1}',""]),t.exports=o},257:function(t,e,r){"use strict";r.r(e);var o={name:"PortfolioCard",props:{work:{type:Object,required:!0,default:{}},reversed:{type:Boolean,required:!1,default:!1}},computed:{gridClasses:function(){return this.reversed?"grid-reverse-middle":"grid-middle"}},methods:{getOffset:function(t){return t?"off-1":"off-0"}}},d=(r(254),r(26)),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"portfolio-card"},[r("div",{class:t.gridClasses},[r("div",{staticClass:"col-5",attrs:{"data-push-left":t.getOffset(t.reversed),"data-push-right":t.getOffset(!t.reversed)}},[r("div",{staticClass:"title"},[t._v("\n        "+t._s(t.work.title)+"\n      ")]),t._v(" "),r("div",{staticClass:"subtitle"},[t._v("\n        "+t._s(t.work.subtitle)+"\n      ")]),t._v(" "),r("div",{staticClass:"date"},[t._v("\n        "+t._s(t.work.date)+"\n      ")]),t._v(" "),r("div",{staticClass:"description"},[t._v("\n        "+t._s(t.work.description)+"\n      ")])]),t._v(" "),r("div",{staticClass:"col-5 image-container",attrs:{"data-push-left":t.getOffset(!t.reversed),"data-push-right":t.getOffset(t.reversed)}},[r("img",{staticClass:"image",attrs:{src:t.work.image}})])])])}),[],!1,null,"3559c923",null);e.default=component.exports}}]);