!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["live/original"]=t():e["live/original"]=t()}(globalThis,(()=>(()=>{"use strict";var e={844:(e,t,o)=>{o.d(t,{u:()=>n});const n=e=>{const t=e.match(/^https:\/\/live\.bilibili\.com\/([\d]+)/);return t?`https://live.bilibili.com/blanc/${t[1]}`:e}},157:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var n=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("a",{attrs:{href:e.href,tabindex:"-1"}},[t("DefaultWidget",{attrs:{name:"返回原版直播间",icon:"mdi-arrow-left-circle-outline"}})],1)};n._withStripped=!0;const i=coreApis.ui;var r=o(844);var a=function(e,t,o,n,i,r,a,s){var l,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=o,d._compiled=!0),n&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),a?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},d._ssrRegister=l):i&&(l=s?function(){i.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:i),l)if(d.functional){d._injectStyles=l;var c=d.render;d.render=function(e,t){return l.call(t),c(e,t)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,l):[l]}return{exports:e,options:d}}(Vue.extend({components:{DefaultWidget:i.DefaultWidget},data:()=>({href:(0,r.u)(document.URL)})}),n,[],!1,null,null,null);const s=a.exports}},t={};function o(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{o.d(n,{component:()=>r});const e=coreApis.componentApis.define,t=coreApis.utils;var i=o(844);const r=(0,e.defineComponentMetadata)({name:"originalLiveroom",displayName:"返回原版直播间",description:"在直播间中提供返回原版直播间的按钮, 原版直播间将无视活动皮肤, 强制使用标准的直播页面.",tags:[componentsTags.live],entry:e=>{let{settings:o}=e;(0,t.isNotHtml)()||(0,t.isIframe)()||o.options.defaultBack&&window.location.assign((0,i.u)(document.URL))},options:{defaultBack:{displayName:"默认返回原版直播间",defaultValue:!1}},urlInclude:[/^https:\/\/live\.bilibili\.com\/[\d]+/],widget:{component:()=>Promise.resolve().then(o.bind(o,157)).then((e=>e.default)),condition:()=>(0,t.matchUrlPattern)(/^https:\/\/live\.bilibili\.com\/([\d]+)/)},commitHash:"9920134d9a7d1daa1c45b8afde4421a2fc9a9ae8",coreVersion:"2.9.0"})})(),n=n.component})()));