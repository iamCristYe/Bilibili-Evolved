!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["feeds/fold-comments"]=n():e["feeds/fold-comments"]=n()}(globalThis,(()=>(()=>{var e,n,t={555:(e,n,t)=>{var o=t(218)((function(e){return e[1]}));o.push([e.id,":host(bili-comments) #end .bottombar {\n  padding-bottom: 8px !important;\n}",""]),e.exports=o},918:(e,n,t)=>{var o=t(218)((function(e){return e[1]}));o.push([e.id,".bb-comment .fold-comment,\n.bili-comment-container .fold-comment {\n  position: sticky;\n  bottom: 0;\n  height: 40px;\n  width: 100%;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: white;\n  color: #99a2aa;\n  cursor: pointer;\n  transition: all 0.2s ease-out;\n  z-index: 110;\n  border-radius: 4px;\n}\n.bb-comment .fold-comment:hover,\n.bili-comment-container .fold-comment:hover {\n  color: black;\n}\nbody.dark .bb-comment .fold-comment,\nbody.dark .bili-comment-container .fold-comment {\n  background-color: #444;\n  color: #eee;\n}\nbody.dark .bb-comment .fold-comment:hover,\nbody.dark .bili-comment-container .fold-comment:hover {\n  color: var(--theme-color);\n}\n\n.bili-comment-container.bili-dyn-comment .reply-list {\n  padding-bottom: 8px !important;\n}\n.bili-comment-container .fold-comment {\n  font-size: 13px;\n}\n.bili-comment-container .at-panel,\n.bili-comment-container .emoji-panel,\n.bili-comment-container .reply-box .box-expand,\n.bili-comment-container .reply-operation .operation-list {\n  z-index: 111 !important;\n}",""]),e.exports=o},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
n.i=function(e,t,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){
// eslint-disable-next-line prefer-destructuring
var c=this[i][0];null!=c&&(r[c]=!0)}for(var s=0;s<e.length;s++){var a=[].concat(e[s]);o&&r[a[0]]||(t&&(a[2]?a[2]="".concat(t," and ").concat(a[2]):a[2]=t),n.push(a))}},n}},708:(e,n,t)=>{var o=t(555);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()},279:(e,n,t)=>{var o=t(918);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()},799:e=>{"use strict";e.exports=coreApis.componentApis.feeds.api},391:e=>{"use strict";e.exports=coreApis.observer},137:e=>{"use strict";e.exports=coreApis.shadowRoot}},o={};function r(e){var n=o[e];if(void 0!==n)return n.exports;var i=o[e]={id:e,exports:{}};return t[e](i,i.exports,r),i.exports}n=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(t,o){if(1&o&&(t=this(t)),8&o)return t;if("object"==typeof t&&t){if(4&o&&t.__esModule)return t;if(16&o&&"function"==typeof t.then)return t}var i=Object.create(null);r.r(i);var c={};e=e||[null,n({}),n([]),n(n)];for(var s=2&o&&t;"object"==typeof s&&!~e.indexOf(s);s=n(s))Object.getOwnPropertyNames(s).forEach((e=>c[e]=()=>t[e]));return c.default=()=>t,r.d(i,c),i},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return(()=>{"use strict";r.d(i,{component:()=>a});const e=coreApis.componentApis.define,n=coreApis.componentApis.styledComponent,t=coreApis.utils.urls;var o=r(799);const c=coreApis.spinQuery;var s=r(391);const a=(0,e.defineComponentMetadata)({name:"foldComments",displayName:"快速收起评论",description:{"zh-CN":"动态里查看评论区时, 在底部添加一个`收起评论`按钮, 这样就不用再回到上面收起了."},urlInclude:t.feedsUrlsWithoutDetail,tags:[componentsTags.feeds],entry:(0,n.styledComponentEntry)((()=>Promise.resolve().then(r.t.bind(r,279,23))),(async()=>{const{shadowRootStyles:e}=await Promise.resolve().then(r.t.bind(r,137,23)),{forEachFeedsCard:n}=await Promise.resolve().then(r.t.bind(r,799,23)),{childList:t}=await Promise.resolve().then(r.t.bind(r,391,23)),i=".bb-comment, .bili-comment-container";n({added:e=>(e=>{const n=async(n,t)=>{const o=await(0,c.select)((()=>dq(n,i)));if(null!==o.querySelector(".fold-comment"))return;if(null===o)return void console.error("未找到评论区");const r=document.createElement("div");r.classList.add("fold-comment"),r.innerHTML="收起评论",r.addEventListener("click",(()=>{t(),e.scrollIntoView(),window.scrollBy({top:-75})})),o.insertAdjacentElement("beforeend",r)};if("v2"!==o.feedsCardsManager.managerType)if("v1"!==o.feedsCardsManager.managerType)console.warn("unrecognized card type",e);else{const o=e.querySelector(".panel-area");if(null===o)return void console.warn("panelArea not found",e);const r=()=>{e.querySelector(".button-bar").children[1]?.click()};if(0===o.childElementCount){const[e]=t(o,(t=>{t.length>0&&(n(o,r),e.disconnect())}))}else n(o,r)}else{const t=()=>dq(e,i),o=()=>{const e=t();return null!==e&&dq(e,"bili-comments")},r=()=>{dq(e,".bili-dyn-action.comment")?.click()};o()?n(t(),r):(0,s.childListSubtree)(e,(()=>{o()&&n(e,r)}))}})(e.element)});const a=await Promise.resolve().then(r.t.bind(r,708,23)).then((e=>e.default));e.addStyle({id:"foldComments",style:a})})),commitHash:"aeb103476397eee3659e7b4c22a38a4162ae6bf0",coreVersion:"2.9.2"})})(),i=i.component})()));