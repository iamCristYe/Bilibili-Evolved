!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["feeds/full-content"]=e():t["feeds/full-content"]=e()}(globalThis,(()=>(()=>{var t,e,n={267:(t,e,n)=>{var o=n(218)((function(t){return t[1]}));o.push([t.id,".bili-rich-text__content.folded {\n  -webkit-line-clamp: unset !important;\n  display: block !important;\n  height: auto !important;\n  max-height: unset !important;\n}\n.bili-rich-text__content.folded ~ .bili-rich-text__action {\n  display: none !important;\n}\n\n.card .main-content .expand-btn,\n.card .main-content .content-ellipsis {\n  display: none !important;\n}\n.card .main-content .content-full {\n  -webkit-line-clamp: unset !important;\n  display: block !important;\n  height: auto !important;\n  max-height: unset !important;\n}",""]),t.exports=o},218:t=>{"use strict";
// eslint-disable-next-line func-names
t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
e.i=function(t,n,o){"string"==typeof t&&(
// eslint-disable-next-line no-param-reassign
t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var c=0;c<t.length;c++){var s=[].concat(t[c]);o&&r[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),e.push(s))}},e}},957:(t,e,n)=>{var o=n(267);o&&o.__esModule&&(o=o.default),t.exports="string"==typeof o?o:o.toString()},660:t=>{function e(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}e.keys=()=>[],e.resolve=e,e.id=660,t.exports=e},230:t=>{"use strict";t.exports="不管内容多长, 总是完全展开动态的内容. (专栏不算)\n"}},o={};function r(t){var e=o[t];if(void 0!==e)return e.exports;var i=o[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}e=Object.getPrototypeOf?t=>Object.getPrototypeOf(t):t=>t.__proto__,r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var i=Object.create(null);r.r(i);var a={};t=t||[null,e({}),e([]),e(e)];for(var c=2&o&&n;"object"==typeof c&&!~t.indexOf(c);c=e(c))Object.getOwnPropertyNames(c).forEach((t=>a[t]=()=>n[t]));return a.default=()=>n,r.d(i,a),i},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.d(i,{component:()=>n});const t=coreApis.componentApis.define,e=coreApis.utils.urls,n=(0,t.defineComponentMetadata)({name:"fullFeedsContent",instantStyles:[{name:"full-feeds-content",style:()=>Promise.resolve().then(r.t.bind(r,957,23))}],displayName:"展开动态内容",tags:[componentsTags.style,componentsTags.feeds],urlInclude:e.feedsUrlsWithoutDetail,entry:none,commitHash:"07b5e5b1cb02dcaffde6c6847e54190bd34a9cc1",coreVersion:"2.8.13",description:(()=>{const t=r(660);return{...Object.fromEntries(t.keys().map((e=>[e.match(/index\.(.+)\.md$/)[1],t(e)]))),"zh-CN":()=>Promise.resolve().then(r.t.bind(r,230,17)).then((t=>t.default))}})()})})(),i=i.component})()));