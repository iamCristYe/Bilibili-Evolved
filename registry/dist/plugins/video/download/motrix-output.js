!function(o,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["video/download/motrix-output"]=e():o["video/download/motrix-output"]=e()}(globalThis,(()=>(()=>{"use strict";var o={d:(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o:(o,e)=>Object.prototype.hasOwnProperty.call(o,e)},e={};o.d(e,{plugin:()=>r});const t=coreApis.toast,r={name:"downloadVideo.outputs.motrix",displayName:"下载视频 - Motrix 输出支持",description:"为下载视频增加 Motrix 输出支持.",setup:o=>{let{addData:e}=o;e("downloadVideo.outputs",(o=>{o.push({name:"motrix",displayName:"Motrix",description:"调用 Motrix 下载.",runAction:async o=>{const e=o.infos.flatMap((o=>o.titledFragments));try{const o=new URLSearchParams({uris:e.map((o=>o.url)).join("\n"),referer:document.URL.replace(window.location.search,"")});window.open(`motrix://new-task?${o.toString()}`,"_self")}catch(o){t.Toast.error(String(o),"发生错误")}}})}))},commitHash:"07b5e5b1cb02dcaffde6c6847e54190bd34a9cc1",coreVersion:"2.8.13"};return e=e.plugin})()));