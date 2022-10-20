!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/default-location"]=t():e["video/default-location"]=t()}(self,(function(){return function(){var e={823:function(e,t,n){"use strict";n.d(t,{component:function(){return u},E:function(){return l},F:function(){return r}});var o=coreApis.componentApis.define,i=coreApis.utils.urls,a=coreApis.spinQuery;const s="//www.bilibili.com/video/",r={withTitle:{displayName:"带标题视频页",urls:[s,...i.mediaListUrls]},noTitle:{displayName:"无标题视频页",urls:[...i.bangumiUrls,...i.cheeseUrls]},bnj:{displayName:"拜年纪视频页",urls:[/\/\/www\.bilibili\.com\/festival\/(\d+)bnj/]}},l=lodash.once((()=>{for(const[e,{urls:t}]of Object.entries(r))if((0,i.matchCurrentPage)(t))return e;return null}));class c{constructor(e,t){this.lastMoment=e,this.result=t}}const d=async()=>{const e=6e4,t=(0,a.select)(".bb-comment",{maxRetry:50,queryInterval:600}),n=[e/2,e,3*e].map((e=>({time:e,callback:async e=>{console.warn(`[videoDefaultLocation] waiting more than ${e}ms for the page to load`)}}))),o=(await async function(e,t){let n={time:0,callback:none},o=null;const i=t[Symbol.iterator](),a=()=>{const e=i.next();if(!e.done){const t=e.value;o=setTimeout((()=>{o=null,n.callback(n.time),n=t,a()}),t.time-n.time)}};a();const s=await e;return null!==o&&clearTimeout(o),new c(n.time,s)}(t,n)).result;return null!==o||(console.error("[videoDefaultLocation] waiting for page load timeout"),!1)},u=(0,o.defineComponentMetadata)({name:"videoDefaultLocation",displayName:"视频页默认定位",tags:[componentsTags.video],urlInclude:i.allVideoUrls,description:{"zh-CN":'打开视频/番剧时自动定位到指定位置\r\n\r\n<div class="video-default-location-desc-detail">\r\n\r\n位置：距离页面顶部的像素距离\\\r\n默认位置：打开视频时自动定位到此处\\\r\n位置测试：查看、调整当前页面所在位置\r\n\r\n当前版本限制默认位置的最大值为 4000。\\\r\n若有其他希望支持的页面，请提交反馈。\\\r\n脚本不会等待评论完全加载，因此较大的默认位置将无法正确定位。\r\n\r\n</div>\r\n\r\n<style>\r\n.video-default-location-desc-detail.video-default-location-desc-detail p {\r\n  margin-top: 1ex;\r\n}\r\n</style>\r\n'},extraOptions:()=>Promise.resolve().then(n.bind(n,566)).then((e=>e.default)),options:{locations:{defaultValue:lodash.mapValues(r,(()=>0)),hidden:!0}},entry:async e=>{var t,n;let{settings:{options:{locations:o}}}=e;const a=null===(t=window)||void 0===t||null===(n=t.performance)||void 0===n?void 0:n.getEntriesByType("navigation");if(1!==(null==a?void 0:a.length))return void console.error(`[videoDefaultLocation] 无法处理 PerformanceNavigationTiming 不是一个的情况。url: ${window.location.href}`);if("navigate"!==a[0].type)return;if((0,i.matchCurrentPage)(s)){const e=unsafeWindow.scrollTo;unsafeWindow.scrollTo=()=>{unsafeWindow.scrollTo=e}}const r=l();if(null===r)return void console.error(`[videoDefaultLocation] unknown page type. url: ${window.location.href}`);const c=o[r],u=document.documentElement;(c<u.scrollHeight-u.clientHeight||await d())&&window.scrollTo(0,c)},commitHash:"dab6500b7fe9fc61537c20c8f2426455fc5a99de",coreVersion:"2.5.0"})},327:function(e,t,n){var o=n(355)((function(e){return e[1]}));o.push([e.id,".video-default-location-extend-box {\n  border-radius: 4px;\n  box-shadow: 0 0 0 1px rgba(136, 136, 136, 0.2666666667);\n}\n.video-default-location-extend-box-bar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 4px;\n  box-shadow: 0 1px rgba(136, 136, 136, 0.2666666667);\n  cursor: pointer;\n}\n.video-default-location-extend-box-bar-text {\n  height: 24px;\n  line-height: 24px;\n  padding: 0 8px;\n}\n.video-default-location-extend-box-bar-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 24px;\n  width: 24px;\n  color: rgba(136, 136, 136, 0.6666666667);\n}\n.video-default-location-extend-box-bar-btn-animation {\n  animation: video-default-location-extend-box-bar-btn-animation-keyframes 0.3s;\n}\n@keyframes video-default-location-extend-box-bar-btn-animation-keyframes {\n50% {\n    transform: rotateX(90deg);\n}\n}\n.video-default-location-extend-box-bar {\n  transition: box-shadow 0.2s ease-out;\n}\n.video-default-location-extend-box-hidden .video-default-location-extend-box-bar {\n  box-shadow: 0 0 rgba(136, 136, 136, 0.2666666667);\n}\n.video-default-location-extend-box-content-wrap {\n  overflow: hidden;\n}\n.video-default-location-extend-box-content-transition-enter-active,\n.video-default-location-extend-box-content-transition-leave-active {\n  transition: margin-top 0.2s ease-out;\n}\n.video-default-location-extend-box-content-transition-enter,\n.video-default-location-extend-box-content-transition-leave-to {\n  margin-top: -100%;\n}",""]),e.exports=o},687:function(e,t,n){var o=n(355)((function(e){return e[1]}));o.push([e.id,".video-default-location-form-line {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  column-gap: 10px;\n}\n.video-default-location-form-item-grow {\n  flex: 1 auto;\n}\n.video-default-location-form-item-not-grow {\n  flex: 0 auto;\n}\n.video-default-location-vertical-space {\n  height: 8px;\n}\n.video-default-location-options-advanced {\n  margin: 8px;\n}",""]),e.exports=o},344:function(e,t,n){var o=n(355)((function(e){return e[1]}));o.push([e.id,".video-default-location-page-type-selector-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 24px;\n  width: 24px;\n  color: rgba(136, 136, 136, 0.6666666667);\n}",""]),e.exports=o},355:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var i={};if(o)for(var a=0;a<this.length;a++){
// eslint-disable-next-line prefer-destructuring
var s=this[a][0];null!=s&&(i[s]=!0)}for(var r=0;r<e.length;r++){var l=[].concat(e[r]);o&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},648:function(e,t,n){"use strict";var o,i=function(){return void 0===o&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function r(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],i=0;i<e.length;i++){var a=e[i],l=t.base?a[0]+t.base:a[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var u=r(d),f={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(s[u].references++,s[u].updater(f)):s.push({identifier:d,updater:h(f,t),references:1}),o.push(d)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var s=a(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,u=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function f(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var a=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function v(e,t,n){var o=n.css,i=n.media,a=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var p=null,m=0;function h(e,t){var n,o,i;if(t.singleton){var a=m++;n=p||(p=c(t)),o=f.bind(null,n,a,!1),i=f.bind(null,n,a,!0)}else n=c(t),o=v.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=r(n[o]);s[i].references--}for(var a=l(e,t),c=0;c<n.length;c++){var d=r(n[c]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=a}}}},566:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"video-default-location-options"},[n("div",{staticClass:"video-default-location-form-line"},[n("div",{staticClass:"video-default-location-form-item-not-grow"},[e._v("页面")]),e._v(" "),n("PageTypeSelector",{staticClass:"video-default-location-form-item-grow",on:{change:e.onChangePageType},model:{value:e.pageType,callback:function(t){e.pageType=t},expression:"pageType"}})],1),e._v(" "),n("div",{staticClass:"video-default-location-vertical-space"}),e._v(" "),n("div",{staticClass:"video-default-location-form-line"},[n("div",{staticClass:"video-default-location-form-item-not-grow"},[e._v("默认位置")]),e._v(" "),n("TextBox",{staticClass:"video-default-location-form-item-grow",attrs:{linear:"","change-on-blur":""},on:{change:e.onChangeDefaultLocation},model:{value:e.defaultLocation,callback:function(t){e.defaultLocation=t},expression:"defaultLocation"}})],1),e._v(" "),n("div",{staticClass:"video-default-location-vertical-space"}),e._v(" "),n("div",{staticClass:"video-default-location-options-test"},[n("ExtendBox",{on:{change:e.resetObservePosition},model:{value:e.hiddenAdvance,callback:function(t){e.hiddenAdvance=t},expression:"hiddenAdvance"}},[n("div",{staticClass:"video-default-location-options-advanced"},[n("Advanced",{attrs:{"observe-position":e.observePosition,"location-limit":e.locationLimit},on:{"set-default-location":e.setDefaultLocation}})],1)])],1)])};o._withStripped=!0;var i=coreApis.settings,a=coreApis.ui,s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"video-default-location-extend-box",class:{"video-default-location-extend-box-hidden":e.realHidden}},[n("div",{staticClass:"video-default-location-extend-box-bar",on:{click:e.setRealHidden}},[n("div",{staticClass:"video-default-location-extend-box-bar-text"},[e._v("位置测试")]),e._v(" "),n("div",{staticClass:"video-default-location-extend-box-bar-btn",class:e.btnClass,on:{animationend:e.onBarBtnAnimationEnd}},[n("VIcon",{attrs:{icon:e.btnIcon,size:15}})],1)]),e._v(" "),n("div",{staticClass:"video-default-location-extend-box-content-wrap"},[n("transition",{attrs:{name:"video-default-location-extend-box-content-transition"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:!e.realHidden,expression:"!realHidden"}],staticClass:"video-default-location-extend-box-content"},[e._t("default")],2)])],1)])};s._withStripped=!0;const r=e=>e?"mdi-unfold-more-horizontal":"mdi-unfold-less-horizontal",l="video-default-location-extend-box-bar-btn-animation";var c=Vue.extend({components:{VIcon:a.VIcon},model:{prop:"hidden",event:"change"},props:{title:{type:String,default:""},size:{type:Number,default:12},hidden:{type:Boolean,default:!0}},data(){return{realHidden:this.hidden,barBottom:!this.hidden,btnIcon:r(this.hidden),btnClass:{[l]:!1}}},watch:{hidden(e){this.setRealHidden(e)}},methods:{setRealHidden(e){e!==this.realHidden&&(this.realHidden=!this.realHidden,this.$emit("change",this.realHidden),this.btnClass[l]=!1,this.$nextTick((()=>{this.btnClass[l]=!0,setTimeout((()=>{this.btnIcon=r(this.realHidden)}),150)})))},onBarBtnAnimationEnd(){this.btnClass[l]=!1}}}),d=n(648),u=n.n(d),f=n(327),v=n.n(f),p={insert:"head",singleton:!1};u()(v(),p),v().locals;function m(e,t,n,o,i,a,s,r){var l,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),o&&(c.functional=!0),a&&(c._scopeId="data-v-"+a),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=l):i&&(l=r?function(){i.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(c.functional){c._injectStyles=l;var d=c.render;c.render=function(e,t){return l.call(t),d(e,t)}}else{var u=c.beforeCreate;c.beforeCreate=u?[].concat(u,l):[l]}return{exports:e,options:c}}var h=m(c,s,[],!1,null,null,null);h.options.__file="registry/lib/components/video/default-location/ExtendBox.vue";var b=h.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"video-default-location-form-line"},[n("div",{staticClass:"video-default-location-form-item-not-grow"},[e._v("当前位置")]),e._v(" "),n("TextBox",{staticClass:"video-default-location-form-item-grow",attrs:{text:String(e.curPosition),"change-on-blur":"",readonly:"",linear:""}})],1),e._v(" "),n("div",{staticClass:"video-default-location-vertical-space"}),e._v(" "),n("div",{staticClass:"video-default-location-form-line"},[n("VButton",{staticClass:"video-default-location-form-item-grow",on:{click:function(t){return e.$emit("set-default-location",e.curPosition)}}},[e._v("\n      将当前位置设为默认值\n    ")])],1),e._v(" "),n("div",{staticClass:"video-default-location-vertical-space"}),e._v(" "),n("div",{staticClass:"video-default-location-form-line"},[n("TextBox",{staticClass:"video-default-location-form-item-grow",attrs:{linear:"","change-on-blur":""},on:{change:e.onLocationInput},model:{value:e.locationInput,callback:function(t){e.locationInput=t},expression:"locationInput"}}),e._v(" "),n("VButton",{on:{click:e.locateTo}},[e._v(" 定位 ")])],1),e._v(" "),n("div",{staticClass:"video-default-location-vertical-space"}),e._v(" "),n("div",{staticClass:"video-default-location-form-line"},[n("TextBox",{staticClass:"video-default-location-form-item-grow",attrs:{linear:"","change-on-blur":""},on:{change:e.onOffsetInput},model:{value:e.offsetInput,callback:function(t){e.offsetInput=t},expression:"offsetInput"}}),e._v(" "),n("VButton",{on:{click:e.offsetTo}},[e._v(" 偏移 ")])],1)])};x._withStripped=!0;let g=null;const y=()=>Math.round(window.scrollY),w=e=>{const t=parseFloat(e);return isNaN(t)?null:Math.round(t)};var _=m(Vue.extend({components:{VButton:a.VButton,TextBox:a.TextBox},props:{observePosition:{type:Boolean,default:!1},locationLimit:{type:Number,required:!0}},data:()=>({curPosition:y(),locationInput:"0",offsetInput:"0",location:0,offset:0}),created(){this.setupObserveScroll()},beforeDestroy(){g.stop()},methods:{setLocation(e){this.location=e,this.locationInput=String(e)},onLocationInput(e){let t=w(e);null===t?this.setLocation(0):(t=lodash.clamp(t,0,this.locationLimit),this.setLocation(t))},locateTo(){unsafeWindow.scrollTo(0,this.location)},setOffset(e){this.offset=e,this.offsetInput=String(e)},onOffsetInput(e){let t=w(e);null===t?this.setOffset(0):(t=lodash.clamp(t,-this.locationLimit,this.locationLimit),this.setOffset(t))},offsetTo(){unsafeWindow.scrollBy(0,this.offset)},setupObserveScroll(){const e=()=>{this.curPosition=y()};let t=!1;g={start:()=>{t||(e(),window.addEventListener("scroll",e),t=!0)},stop:()=>{t&&(window.removeEventListener("scroll",e),t=!1)}},this.$watch("observePosition",(e=>g[e?"start":"stop"]()),{immediate:!0})}}}),x,[],!1,null,null,null);_.options.__file="registry/lib/components/video/default-location/Advanced.vue";var C=_.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"video-default-location-page-type-selector"},[n("VDropdown",{attrs:{items:e.items},on:{change:e.onChange},scopedSlots:e._u([{key:"arrow",fn:function(){return[n("div",{staticClass:"video-default-location-page-type-selector-icon"},[n("VIcon",{attrs:{size:15,icon:"mdi-chevron-down"}})],1)]},proxy:!0}]),model:{value:e.curItem,callback:function(t){e.curItem=t},expression:"curItem"}})],1)};T._withStripped=!0;var S=n(823);const I=lodash.mapValues(S.F,((e,t)=>({name:t,displayName:e.displayName})));var L=Vue.extend({components:{VDropdown:a.VDropdown,VIcon:a.VIcon},model:{prop:"value",event:"change"},props:{value:{type:String,required:!0}},data(){return{items:Object.values(I),curItem:I[this.value]}},watch:{value(e){this.curItem.name!==e&&(this.curItem=I[e])}},methods:{onChange(e){this.$emit("change",e.name)}}}),P=n(344),B=n.n(P),O={insert:"head",singleton:!1},V=(u()(B(),O),B().locals,m(L,T,[],!1,null,null,null));V.options.__file="registry/lib/components/video/default-location/PageTypeSelector.vue";var E=V.exports;let j=null;var N=Vue.extend({components:{TextBox:a.TextBox,ExtendBox:b,Advanced:C,PageTypeSelector:E},props:{componentData:{type:Object,required:!0}},data(){const{options:{locations:e}}=(0,i.getComponentSettings)(this.componentData),t=(0,S.E)()??Object.keys(S.F)[0];return{locations:e,defaultLocation:String(e[t]),hiddenAdvance:!0,observePosition:!1,locationLimit:4e3,pageType:t}},created(){this.setupPanelSwitch()},mounted(){j&&j.start()},beforeDestroy(){j&&j.stop()},methods:{onChangePageType(e){this.defaultLocation=String(this.locations[e])},setDefaultLocation(e){this.locations[this.pageType]=e,this.defaultLocation=String(e)},onChangeDefaultLocation(e){let t=(e=>{const t=parseFloat(e);return isNaN(t)?null:Math.round(t)})(e);null===t?this.setDefaultLocation(0):(t=lodash.clamp(t,0,4e3),this.setDefaultLocation(t))},resetObservePosition(){this.observePosition=!this.hiddenAdvance},setupPanelSwitch(){const e=dq(".component-detail-panel");if(!e)return void console.error("[videoPageOrientation] Could not find element '.component-detail-panel'");const t=()=>{e.classList.contains("open")?this.resetObservePosition():this.observePosition=!1},n=new MutationObserver(t),o={attributeFilter:["class"],attributes:!0};j={start:()=>{t(),n.observe(e,o)},stop:()=>n.disconnect()}}}}),k=N,A=n(687),D=n.n(A),$={insert:"head",singleton:!1},H=(u()(D(),$),D().locals,m(k,o,[],!1,null,null,null));H.options.__file="registry/lib/components/video/default-location/Options.vue";var M=H.exports}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o=n(823);return o=o.component}()}));