!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/column-unlock"]=t():e["utils/column-unlock"]=t()}(self,(function(){return function(){"use strict";var e,t,o={356:function(e){e.exports=coreApis.style}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var c=n[e]={exports:{}};return o[e](c,c.exports,r),c.exports}t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var c=Object.create(null);r.r(c);var i={};e=e||[null,t({}),t([]),t(t)];for(var u=2&n&&o;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){i[e]=function(){return o[e]}}));return i.default=function(){return o},r.d(c,i),c},r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return function(){r.d(c,{component:function(){return u}});var e=coreApis.componentApis.define;let t=!1,o=!0;const n="column-unlock",i=async()=>{o=!0;const{addStyle:e}=await Promise.resolve().then(r.t.bind(r,356,23));e(".article-holder { user-select: text !important }",n),t||(t=!0,document.addEventListener("copy",(e=>{o&&e.stopImmediatePropagation()}),{capture:!0}))},u=(0,e.defineComponentMetadata)({name:"columnUnlock",displayName:"专栏文字选择",entry:i,reload:i,unload:async()=>{var e;null===(e=document.getElementById(n))||void 0===e||e.remove(),o=!1},tags:[componentsTags.utils],description:{"zh-CN":"使专栏的文字可以选择."},urlInclude:["//www.bilibili.com/read/"],commitHash:"dab6500b7fe9fc61537c20c8f2426455fc5a99de",coreVersion:"2.5.0"})}(),c=c.component}()}));