!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["utils/keymap-empty-action.ts"]=t():e["utils/keymap-empty-action.ts"]=t()}(globalThis,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var a in o)e.o(o,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:o[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{plugin:()=>o});const o={name:"keymap.actions.empty",displayName:"快捷键扩展 - 无动作",description:'在快捷键的动作列表里添加一个 "无动作", 将按键绑定到这个上面就可以阻止原有的快捷键行为.',setup:e=>{let{addData:t}=e;t("keymap.actions",(e=>{e.empty={displayName:"无动作",prevent:!0,run:none}})),t("keymap.presets",(e=>{e.empty=""}))},commitHash:"9920134d9a7d1daa1c45b8afde4421a2fc9a9ae8",coreVersion:"2.9.0"};return t=t.plugin})()));