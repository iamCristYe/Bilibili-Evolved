!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["live/gift-box"]=t():n["live/gift-box"]=t()}(globalThis,(()=>(()=>{var n={739:(n,t,e)=>{var r=e(218)((function(n){return n[1]}));r.push([n.id,".full-win-gift-btn-wrapper.full-win-gift-btn-wrapper {\n  position: relative;\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .wrap {\n  right: -28px;\n  bottom: calc(100% + 3px);\n  color: #666;\n  font-size: 12px;\n  line-height: 1.4;\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .wrap .text {\n  margin: auto;\n  padding: auto;\n  color: inherit;\n  cursor: inherit;\n  line-height: inherit;\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .wrap .popup::before,\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .wrap .popup::after {\n  left: auto;\n  right: calc(1em + 33px);\n  transform: translateX(50%);\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .gift-package {\n  margin: auto;\n  width: auto;\n  height: 100%;\n  color: inherit;\n  fill: inherit;\n  background: inherit !important;\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .gift-package-btn {\n  padding-top: 0 !important;\n  color: rgba(255, 255, 255, 0.9) !important;\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .gift-package-btn:hover {\n  background-color: transparent !important;\n  color: #fff !important;\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .gift-package .bg-text {\n  height: auto !important;\n  line-height: normal !important;\n}\n.full-win-gift-btn-wrapper.full-win-gift-btn-wrapper .gift-package .bag-icon {\n  display: none;\n}\n\n.new-silver-wallet {\n  background-color: var(--Ga1_u) !important;\n}\n\n.new-list-box * .num > span {\n  color: var(--text3) !important;\n}\n\n.click-root > .content-box {\n  color: #000 !important;\n}\n.click-root > .content-box > .text {\n  color: #000 !important;\n}\n\n.new-list-box * .static-bg-root {\n  --static-bg-color: #ffecf1 !important;\n  --static-bg-border-color: #ff6699 !important;\n}",""]),n.exports=r},218:n=>{"use strict";
// eslint-disable-next-line func-names
n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},
// eslint-disable-next-line func-names
t.i=function(n,e,r){"string"==typeof n&&(
// eslint-disable-next-line no-param-reassign
n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var l=this[i][0];null!=l&&(o[l]=!0)}for(var a=0;a<n.length;a++){var c=[].concat(n[a]);r&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),t.push(c))}},t}},411:(n,t,e)=>{var r=e(739);r&&r.__esModule&&(r=r.default),n.exports="string"==typeof r?r:r.toString()}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t);var r={};return(()=>{"use strict";e.d(r,{component:()=>x});const n=coreApis.componentApis.live.liveControlBar,t=coreApis.componentApis.define,o=coreApis.spinQuery,i=coreApis.style,l=coreApis.utils.urls;var a=e(411),c=e.n(a);const p="player-full-win",f="fullscreen-fix",u="full-win-gift-btn-wrapper",s="liveGiftBox";let d=null,g=null,b=null;function w(){return document.body.classList.contains(p)||document.body.classList.contains(f)}function m(n,t){const e=dq(n,".right-area");if(e){const n=document.createElement("div");n.className=u,n.appendChild(t),e.appendChild(n)}else console.warn("[liveGiftBox] .right-area could not be found in control bar")}function v(n,t){return function(n){function t(n){const t=w(),e=n.oldValue.split(" ");return t===(e.includes(p)||e.includes(f))?null:t}const e=new MutationObserver((e=>{for(const r of e){const e=t(r);null!==e&&n(e)}}));return e?.observe(document.body,{attributes:!0,attributeFilter:["class"],attributeOldValue:!0}),()=>e.disconnect()}((e=>{e?function(n){const t=dq(".control-area");t&&m(t,n)}(n):function(n,t){t.appendChild(n)}(n,t)}))}async function h(){(0,i.addStyle)(c(),s);const n=await async function(){const n=await(0,o.select)(".z-gift-package",{maxRetry:15,queryInterval:200});return n||console.warn("[liveGiftBox] the parent element of gift button not found"),n}();d=n?.children[0],n&&d&&(g=v(d,n),b=function(n){const t=dq("#live-player");if(!t)return console.warn("[liveGiftBox] live player not found"),null;function e(){dq(".full-win-gift-btn-wrapper .wrap")&&n.click()}return t.addEventListener("mouseleave",e),()=>t.removeEventListener("mouseleave",e)}(d))}const x=(0,t.defineComponentMetadata)({name:s,displayName:"直播全屏包裹",description:{"zh-CN":"在直播的网页全屏(不能是全屏)模式下往控制栏添加包裹按钮."},urlInclude:l.liveUrls,tags:[componentsTags.live],entry:function(){(0,n.waitForControlBar)({callback:function(n){const t=w();d&&t&&m(n,d)}}),h()},reload:h,unload:function(){b?.call(null),b=null,g?.call(null),g=null,d=null,(0,i.removeStyle)(s)},commitHash:"d113a6712d84d30f283ef7e8cbdc0148b7c4dbb9",coreVersion:"2.9.1"})})(),r=r.component})()));