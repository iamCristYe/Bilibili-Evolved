!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/column-unlock"]=t():e["utils/column-unlock"]=t()}(globalThis,(()=>(()=>{var e,t,o={280:e=>{function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=280,e.exports=t},780:e=>{"use strict";e.exports="(原名: 专栏文字选择, 现在专栏已经不限制选中文字了)\n\n避免专栏的文字复制后在最后带上出处信息, 更贴近原生的复制行为.\n"},356:e=>{"use strict";e.exports=coreApis.style}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var c=n[e]={exports:{}};return o[e](c,c.exports,r),c.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(o,n){if(1&n&&(o=this(o)),8&n)return o;if("object"==typeof o&&o){if(4&n&&o.__esModule)return o;if(16&n&&"function"==typeof o.then)return o}var c=Object.create(null);r.r(c);var i={};e=e||[null,t({}),t([]),t(t)];for(var a=2&n&&o;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>i[e]=()=>o[e]));return i.default=()=>o,r.d(c,i),c},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return(()=>{"use strict";r.d(c,{component:()=>a});const e=coreApis.componentApis.define;let t=!1,o=!0;const n="column-unlock",i=async()=>{o=!0;const{addStyle:e}=await Promise.resolve().then(r.t.bind(r,356,23));e(".article-holder { user-select: text !important }",n),t||(t=!0,document.addEventListener("copy",(e=>{o&&e.stopImmediatePropagation()}),{capture:!0}))},a=(0,e.defineComponentMetadata)({name:"columnUnlock",displayName:"专栏复制优化",entry:i,reload:i,unload:async()=>{document.getElementById(n)?.remove(),o=!1},tags:[componentsTags.utils],urlInclude:["//www.bilibili.com/read/"],commitHash:"9920134d9a7d1daa1c45b8afde4421a2fc9a9ae8",coreVersion:"2.9.0",description:(()=>{const e=r(280);return{...Object.fromEntries(e.keys().map((t=>[t.match(/index\.(.+)\.md$/)[1],e(t)]))),"zh-CN":()=>Promise.resolve().then(r.t.bind(r,780,17)).then((e=>e.default))}})()})})(),c=c.component})()));