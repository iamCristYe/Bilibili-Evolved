!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["style/hide/video/share"]=t():e["style/hide/video/share"]=t()}(globalThis,(()=>(()=>{var e,t,o={643:(e,t,o)=>{var n=o(218)((function(e){return e[1]}));n.push([e.id,".video-toolbar-v1 .share-wrap {\n  display: none !important;\n}\n\n.video-toolbar-container .video-share-wrap {\n  display: none !important;\n}\n\n.player-left-components [class*=toolbar_share_info] {\n  display: none !important;\n}",""]),e.exports=n},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o=e(t);return t[2]?"@media ".concat(t[2]," {").concat(o,"}"):o})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,o,n){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(n)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);n&&r[c[0]]||(o&&(c[2]?c[2]="".concat(o," and ").concat(c[2]):c[2]=o),t.push(c))}},t}},776:(e,t,o)=>{var n=o(643);n&&n.__esModule&&(n=n.default),e.exports="string"==typeof n?n:n.toString()},799:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=799,e.exports=t},9:e=>{"use strict";e.exports="隐藏视频和番剧播放器下方的分享按钮.\n"}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var i=n[e]={id:e,exports:{}};return o[e](i,i.exports,r),i.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var i=Object.create(null);r.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&o;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>a[e]=()=>o[e]));return a.default=()=>o,r.d(i,a),i},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.d(i,{component:()=>e});const e=(0,coreApis.componentApis.define.defineComponentMetadata)({name:"hideVideoShare",displayName:"隐藏视频分享",tags:[componentsTags.style,componentsTags.video],instantStyles:[{name:"hideVideoShare",style:()=>Promise.resolve().then(r.t.bind(r,776,23))}],entry:none,commitHash:"0f6a1fd3119f44fbc7d4e4c2fc97214f7ed1e4cc",coreVersion:"2.9.0",description:(()=>{const e=r(799);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(r.t.bind(r,9,17)).then((e=>e.default))}})()})})(),i=i.component})()));