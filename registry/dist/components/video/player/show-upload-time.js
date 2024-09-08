!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["video/player/show-upload-time"]=t():e["video/player/show-upload-time"]=t()}(globalThis,(()=>(()=>{var e,t,n={325:(e,t,n)=>{var o=n(218)((function(e){return e[1]}));o.push([e.id,".video-page-card .card-box .info .count.up {\n  white-space: pre !important;\n  display: flex !important;\n  height: auto !important;\n}\n\n.video-page-card-small .card-box .info .upname {\n  height: auto !important;\n}\n.video-page-card-small .card-box .info .upname a .name {\n  -webkit-line-clamp: unset !important;\n  white-space: pre !important;\n}",""]),e.exports=o},218:e=>{"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},
// eslint-disable-next-line func-names
t.i=function(e,n,o){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var r={};if(o)for(var a=0;a<this.length;a++){
// eslint-disable-next-line prefer-destructuring
var i=this[a][0];null!=i&&(r[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},839:(e,t,n)=>{var o=n(325);o&&o.__esModule&&(o=o.default),e.exports="string"==typeof o?o:o.toString()}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var a=o[e]={id:e,exports:{}};return n[e](a,a.exports,r),a.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(n,o){if(1&o&&(n=this(n)),8&o)return n;if("object"==typeof n&&n){if(4&o&&n.__esModule)return n;if(16&o&&"function"==typeof n.then)return n}var a=Object.create(null);r.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>n[e]));return i.default=()=>n,r.d(a,i),a},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{"use strict";r.d(a,{component:()=>d});const e=coreApis.componentApis.define,t=coreApis.observer,n=coreApis.utils,o=coreApis.utils.urls,i=coreApis.componentApis.video.videoInfo,s=coreApis.utils.log,c=coreApis.settings,l="显示视频投稿时间",p=(0,s.useScopedConsole)(l),d=(0,e.defineComponentMetadata)({author:{name:"wisokey",link:"https://github.com/wisokey"},name:"showUploadTime",displayName:l,description:"为视频播放页面的推荐列表中的视频添加显示视频投稿时间.\n\n`时间格式` 替换up名的文本格式 (默认为'up · yyyy-MM-dd'):\n  - y: 年\n  - M: 月\n  - d: 日\n  - h: 时\n  - m: 分\n  - s: 秒\n  - q: 季度\n  - up: up名\n  - \\r: 回车符\n  - \\n：换行符\n  - \\t：制表符",tags:[componentsTags.video],urlInclude:o.videoUrls,options:{formatString:{displayName:"文本格式",defaultValue:"up · yyyy-MM-dd",validator:(e,t)=>e?.trim()?e:t}},instantStyles:[{name:"showUploadTime",style:()=>Promise.resolve().then(r.t.bind(r,839,23))}],entry:async e=>{let{metadata:o}=e;const r=(e,t,n)=>{const o={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3)},r={up:n,"\\\\r":"\r","\\\\n":"\n","\\\\t":"\t"};let a=t.match(/(y+)/);null!==a&&(t=t.replace(a[0],`${e.getFullYear()}`.substring(4-a[0].length)));for(const e in o)e&&(a=t.match(new RegExp(`(${e})`)),null!==a&&(t=t.replace(a[0],1===a[0].length?o[e]:`00${o[e]}`.substring(`${o[e]}`.length))));for(const e in r)e&&(a=t.match(new RegExp(`(${e})`)),null!==a&&(t=t.replace(a[0],r[e])));return t},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";if(!n){const{options:e}=(0,c.getComponentSettings)(o.name);n=e.formatString?.toString()}e.forEach((async e=>{if(t||!e.item.owner.mark){if(e.item.owner.mark=!0,t||!e.mark){if(e.mark=!0,!e.item.pubdate){const t=new i.VideoInfo(e.item.aid);await t.fetchInfo(),e.item.pubdate=t.pubdate}const t=new Date(1e3*e.item.pubdate);e.oldname||(e.oldname=e.name),e.name=r(t,n,e.oldname)}e.item.owner.name=e.name}}))},s=()=>{const e=dq("#reco_list");let t=(0,n.getVue2Data)(e);return void 0===t.isOpen&&(t=t.$children[0],void 0===t.isOpen&&(p.log("结构获取失败"),p.log(document.URL),p.log(t))),t};(0,c.addComponentListener)(`${o.name}.formatString`,(e=>{const t=s().$children.filter((e=>-1===e.$el.className.indexOf("special")));a(t,!0,e)}),!1),(0,t.urlChange)((async()=>{p.debug("urlChange now url is",document.URL),await(0,n.playerReady)();const e=s();p.debug("urlChange recoList.mark",e.mark),e.mark||(e.mark=!0,e.$watch("recListItems",(()=>{p.debug("recoListItems changed, now url is",document.URL);const t=e.$children.filter((e=>-1===e.$el.className.indexOf("special")));a(t)}),{deep:!0,immediate:!0}))}))},commitHash:"aeb103476397eee3659e7b4c22a38a4162ae6bf0",coreVersion:"2.9.2"})})(),a=a.component})()));