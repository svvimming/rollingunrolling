(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{254:function(t,e,o){var content=o(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(49).default)("1c99a682",content,!0,{sourceMap:!1})},255:function(t,e,o){"use strict";o(254)},256:function(t,e,o){var r=o(48)(!1);r.push([t.i,'.image[data-v-163b3a9a]{width:100%}.portfolio-card[data-v-163b3a9a]{padding:10rem 0;font-family:"Spectral"}.subtitle[data-v-163b3a9a],.title[data-v-163b3a9a]{margin-bottom:.5rem}.date[data-v-163b3a9a],.description[data-v-163b3a9a]{margin-bottom:1.5rem}.date a[data-v-163b3a9a],.description a[data-v-163b3a9a]{color:coral}.title[data-v-163b3a9a]{font-size:28px;letter-spacing:0;font-weight:600;font-style:italic}.date[data-v-163b3a9a],.subtitle[data-v-163b3a9a]{font-size:14px}.description[data-v-163b3a9a]{margin-bottom:1.5rem}.image-container[data-v-163b3a9a]{position:relative;width:100%}.flower[data-v-163b3a9a]{position:absolute;top:-50%;left:-25%;width:150%;height:200%;background-image:url(/images/flower.png);background-size:100%;background-repeat:no-repeat;z-index:-1}',""]),t.exports=r},257:function(t,e,o){"use strict";o.r(e);var r={name:"PortfolioCard",props:{work:{type:Object,required:!0,default:{}},reversed:{type:Boolean,required:!1,default:!1}},computed:{gridClasses:function(){return this.reversed?"grid-reverse-middle":"grid-middle"}},methods:{getOffset:function(t){return t?"off-1":"off-0"}}},d=(o(255),o(23)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"portfolio-card"},[o("div",{staticClass:"grid"},[o("div",{staticClass:"col-12 title"},[t._v("\n      "+t._s(t.work.title)+"\n    ")]),t._v(" "),o("div",{staticClass:"col-7 subtitle",attrs:{"data-push-left":"off-1"}},[t._v("\n      "+t._s(t.work.subtitle)+"\n    ")]),t._v(" "),o("div",{staticClass:"col-4 date",attrs:{"data-push-left":"off-2"}},[t._v("\n      "+t._s(t.work.date)+"\n    ")]),t._v(" "),o("div",{staticClass:"col-12 description",domProps:{innerHTML:t._s(t.work.description)}}),t._v(" "),t._l(t.work.images,(function(path){return o("div",{staticClass:"col-12"},[o("div",{staticClass:"image-container"},[o("img",{staticClass:"image",attrs:{src:path}})])])}))],2)])}),[],!1,null,"163b3a9a",null);e.default=component.exports}}]);