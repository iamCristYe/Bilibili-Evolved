!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["utils/v1-migrate"]=o():e["utils/v1-migrate"]=o()}(self,(function(){return function(){"use strict";var e,o,t={764:function(e){e.exports=coreApis.filePicker},414:function(e){e.exports=coreApis.utils.log}},n={};function a(e){var o=n[e];if(void 0!==o)return o.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,a),i.exports}o=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},a.t=function(t,n){if(1&n&&(t=this(t)),8&n)return t;if("object"==typeof t&&t){if(4&n&&t.__esModule)return t;if(16&n&&"function"==typeof t.then)return t}var i=Object.create(null);a.r(i);var r={};e=e||[null,o({}),o([]),o(o)];for(var l=2&n&&t;"object"==typeof l&&!~e.indexOf(l);l=o(l))Object.getOwnPropertyNames(l).forEach((function(e){r[e]=function(){return t[e]}}));return r.default=function(){return t},a.d(i,r),i},a.d=function(e,o){for(var t in o)a.o(o,t)&&!a.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:o[t]})},a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){a.d(i,{component:function(){return f}});var e=coreApis.componentApis.define,o=coreApis.pluginApis.data,t=coreApis.componentApis.component,n=coreApis.componentApis.userComponent,r=coreApis.ajax,l=coreApis.cdnTypes,s=coreApis.meta,c=coreApis.settings,d=coreApis.toast,p=a(414),m=coreApis.pluginApis.hook,u=coreApis.pluginApis.plugin;const f=(0,e.defineComponentMetadata)({name:"v1Migrate",displayName:"v1 设置迁移",description:{"zh-CN":"在设置的 `关于` 面板中添加 `导入 v1 设置` 按钮, 点击导入可以导入 v1 的设置, 并根据打开的选项自动下载安装 v2 中对应的功能."},tags:[componentsTags.utils],entry:()=>{(0,o.addData)("settingsPanel.about.actions",(e=>{e.push({icon:"mdi-inbox-arrow-down-outline",name:"importV1Settings",displayName:"导入 v1 设置",run:async()=>{const{logError:e}=await Promise.resolve().then(a.t.bind(a,414,23)),{pickFile:o}=await Promise.resolve().then(a.t.bind(a,764,23)),i=await o({accept:"*.json"});if(0===i.length)return;const[f]=i;try{const e=JSON.parse(await f.text());await(async e=>{const o=d.Toast.info("下载功能列表中","导入 v1 设置");try{console.log("下载功能列表中");const a=`${l.cdnRoots[(0,c.getGeneralSettings)().cdnRoot](s.meta.compilationInfo.branch)}doc/features/features.json`,i=await(0,r.monkey)({url:a});console.log(i);const d=JSON.parse(i);console.log("下载功能列表完成");const p=(o,a,i)=>async()=>{if(!e[o])return void console.log(`跳过了未开启的选项 ${o}`);const p={component:t.componentsMap,plugin:u.pluginsMap},f={component:n.installComponent,plugin:u.installPlugin};if(a in p[i])console.log(`${a} 已经存在, 跳过安装`);else{const e=d.find((e=>e.type===i&&e.name===a)),o=null==e?void 0:e.fullAbsolutePath;if(!o||!e)return void console.log(`没有找到名为 ${a} 的功能`);const t=`${l.cdnRoots[(0,c.getGeneralSettings)().cdnRoot](s.meta.compilationInfo.branch,e.owner)}${o}`,n=await(0,r.monkey)({url:t}),{before:p,after:u}=(0,m.getHook)(`user${lodash.startCase(i)}s.add`,n,t);await p();const{metadata:g,message:v}=await f[i](n);await u(g),console.log(v)}},f=(o,t,n)=>()=>{const a=e[o],i=(null==n?void 0:n(a))??a;if(void 0!==i){const[e,...o]=t.split("."),{options:n}=(0,c.getComponentSettings)(e);lodash.set(n,o,i)}console.log(`迁移了选项 ${o} -> ${t}`)},g=()=>()=>{const{customStyles:o}=e;o.filter((e=>e.enabled)).forEach((e=>{c.settings.userStyles[e.name]=lodash.omit(e,"enabled")}))},v=e=>p("guiSettings",e,"plugin"),y=()=>none,b={category:"home",activities:"feeds",bangumi:"subscriptions",watchlaterList:"watchlater",favoritesList:"favorites",historyList:"history",rankingLink:"ranking",drawingLink:"drawing",bangumiLink:"bangumi",musicLink:"music",matchLink:"match",shopLink:"shop"},h=[p("useDarkStyle","darkMode","component"),p("darkColorScheme","darkModeFollowSystem","component"),p("hideBanner","hideBanner","component"),p("expandDanmakuList","expandDanmakuList","component"),f("expandDanmakuListIgnoreMediaList","expandDanmakuList.ignoreMediaList"),p("expandDescription","fullVideoDescription","component"),p("watchlaterRedirect","watchlaterRedirect","component"),f("watchLaterRedirectNavbar","watchlaterRedirect.navbar"),f("watchLaterRedirectPage","watchlaterRedirect.page"),p("touchVideoPlayer","touchPlayerGestures","component"),p("touchVideoPlayer","touchPlayerControl","component"),p("customControlBackground","playerControlBackground","component"),f("customControlBackgroundOpacity","playerControlBackground.opacity",(e=>{const o=parseFloat(e);return Math.round(100*o)})),p("darkSchedule","darkModeSchedule","component"),f("darkScheduleStart","darkModeSchedule.range.start"),f("darkScheduleEnd","darkModeSchedule.range.end"),p("fullTweetsTitle","fullFeedsTitle","component"),p("fullPageTitle","fullEpisodeTitle","component"),p("removeVideoTopMask","hideVideoTopMask","component"),p("removeLiveWatermark","removeLiveWatermark","component"),p("harunaScale","dpiLiveShowgirl","component"),p("harunaScale","dpiLiveShowgirl","component"),p("removeAds","removePromotions","component"),f("showBlockedAdsTip","removePromotions.showPlaceholder"),f("preserveEventBanner","removePromotions.preserveEventBanner"),p("touchVideoPlayerDoubleTapControl","doubleClickControl","component"),f("customStyleColor","settingsPanel.themeColor"),p("useDefaultPlayerMode","defaultPlayerMode","component"),f("applyPlayerModeOnPlay","defaultPlayerMode.applyOnPlay"),f("defaultPlayerMode","defaultPlayerMode.mode"),p("skipChargeList","skipChargeList","component"),p("comboLike","touchComboLike","component"),p("autoLightOff","playerAutoLight","component"),p("airborne","danmakuAirborne","component"),p("useBiliplusRedirect","biliplusRedirect","component"),p("biliplusRedirect","biliplusRedirect","component"),p("framePlayback","seekByFrames","component"),p("useCommentStyle","simplifyComments","component"),p("imageResolution","imageResolution","component"),f("imageResolutionScale","imageResolution.scale"),p("playerFocus","playerFocus","component"),f("playerFocusOffset","playerFocus.offset"),p("simplifyLiveroom","simplifyLiveroom","component"),f("simplifyLiveroomSettings","simplifyLiveroom",(e=>{const{options:o}=(0,c.getComponentSettings)("simplifyLiveroom");Object.assign(o,Object.fromEntries(Object.entries(e).map((e=>{let[o,t]=e;return[`switch-${o}`,t]}))))})),p("customNavbar","customNavbar","component"),v("customNavbar.items.darkMode"),f("favoritesListCurrentSelect","customNavbar.lastFavoriteFolder"),f("touchNavBar","customNavbar.touch"),f("customNavbarFill","customNavbar.fill"),f("customNavbarTransparent","customNavbar.transparent"),f("customNavbarShadow","customNavbar.shadow"),f("customNavbarBlur","customNavbar.blur"),f("customNavbarOrder","customNavbar.order",(e=>(Object.keys(e).forEach((o=>{o in b&&(e[b[o]]=e[o],delete e[o])})),delete e.mangaLink,e))),f("customNavbarHidden","customNavbar.hidden",(e=>([...e].forEach((o=>{o in b&&(e.push(b[o]),lodash.pull(e,o))})),lodash.pull(e,"mangaLink"),e))),f("customNavbarBoundsPadding","customNavbar.padding",(e=>parseFloat(e))),f("customNavbarGlobalFixed","customNavbar.globalFixed"),f("customNavbarSeasonLogo","customNavbar.seasonLogo"),f("customNavbarShowDeadVideos","customNavbar.showDeadVideos"),p("playerShadow","playerShadow","component"),p("narrowDanmaku","preserveDanmakuInput","component"),p("outerWatchlater","outerWatchlater","component"),p("videoScreenshot","videoScreenshot","component"),p("hideBangumiReviews","hideBangumiReviews","component"),f("filenameFormat","settingsPanel.filenameFormat"),f("batchFilenameFormat","settingsPanel.batchFilenameFormat"),p("sidebarOffset","sidebarOffset","component"),f("sidebarOffset","sidebarOffset.offset"),p("noLiveAutoplay","liveHomeMute","component"),p("foldComment","rememberVideoSpeed","component"),f("defaultVideoSpeed","rememberVideoSpeed.speed"),f("rememberVideoSpeedList","rememberVideoSpeed.individualRememberList"),f("rememberVideoSpeed","rememberVideoSpeed.individualRemember"),f("extendVideoSpeed","rememberVideoSpeed.extend"),f("extendVideoSpeedList","rememberVideoSpeed.extendList"),p("foldComment","foldComments","component"),p("autoDraw","liveAutoDraw","component"),p("keymap","keymap","component"),f("keymapPreset","keymap.preset"),f("keymapJumpSeconds","keymap.longJumpSeconds"),f("customKeyBindings","keymap.customKeyBindings"),p("doubleClickFullscreen","doubleClickFullscreen","component"),f("doubleClickFullscreenPreventSingleClick","doubleClickFullscreen.preventSingleClick"),f("scriptLoadingMode","settingsPanel.scriptLoadingMode",(e=>e.replace(/\(自动\)$/,""))),f("guiSettingsDockSide","settingsPanel.dockSide"),p("fullActivityContent","fullFeedsContent","component"),p("feedsFilter","feedsFilter","component"),f("feedsFilterPatterns","feedsFilter.patterns"),f("feedsSpecialFilterTypes","feedsFilter.types"),f("feedsFilterSideCards","feedsFilter.sideCards"),p("selectableColumnText","columnUnlock","component"),p("miniPlayerTouchMove","touchMiniPlayer","component"),p("hideBangumiSponsors","hideBangumiSponsors","component"),p("hideRecommendLive","hideRecommendedLive","component"),p("hideRelatedVideos","hideRelatedVideos","component"),p("urlParamsClean","urlParamsClean","component"),p("collapseLiveSideBar","collapseLiveSideBar","component"),f("foregroundColorMode","settingsPanel.textColor"),f("updateCdn","settingsPanel.cdnRoot"),f("downloadPackageEmitMode","settingsPanel.downloadPackageEmitMode",(e=>"分别下载"===e?"单独下载":e)),p("bvidConvert","bvidConvert","component"),p("fixedSidebars","fixedFeedsSidebars","component"),p("autoHideSideBar","autoHideSidebar","component"),p("livePip","livePip","component"),p("extendFeedsLive","extendFeedsLive","component"),p("playerOnTop","playerOnTop","component"),p("quickFavorite","quickFavorite","component"),f("quickFavoriteID","quickFavorite.favoriteFolderID"),p("disableFeedsDetails","disableFeedsDetails","component"),p("elegantScrollbar","elegantScrollbar","component"),p("danmakuSendBar","liveDanmakuSendbar","component"),p("showCoverBeforePlay","showCoverBeforePlay","component"),p("seoJump","seoRedirect","component"),p("copyFeedsLink","copyFeedsLink","component"),p("copyCommentLink","copyCommentsLink","component"),p("unfoldFeeds","unfoldFeeds","component"),p("feedsImageExporter","imageExporter","component"),p("columnImageExporter","imageExporter","component"),p("preferAvUrl","avUrl","component"),p("homeHidden","simplifyHome","component"),f("homeHiddenItems","simplifyHome",(e=>{const{options:o}=(0,c.getComponentSettings)("simplifyHome");e.forEach((e=>o[`switch-${e}`]=!0))})),p("alwaysShowDuration","alwaysShowDuration","component"),p("removeVideoPopup","removePlayerPopup","component"),p("removeGuidePopup","removePlayerPopup","component"),p("removeVotePopup","removePlayerPopup","component"),f("removeVideoPopup","removePlayerPopup.relatedVideos"),f("removeGuidePopup","removePlayerPopup.comboLikes"),f("removeVotePopup","removePlayerPopup.votes"),p("checkInCenter","checkInCenter","component"),p("fullscreenGiftBox","liveGiftBox","component"),p("autoPlayControl","legacyAutoPlay","component"),p("scrollOutPlayer","playerIntersectionActions","component"),f("scrollOutPlayerTriggerPlace","playerIntersectionActions.triggerLocation"),f("scrollOutPlayerAutoPause","playerIntersectionActions.pause"),f("scrollOutPlayerAutoLightOn","playerIntersectionActions.light"),p("disableDanmakuHighlights","disableSpecialDanmaku","component"),p("disableUpDanmakuStyle","disableSpecialDanmaku","component"),f("disableDanmakuHighlights","disableSpecialDanmaku.highlight"),f("disableUpDanmakuStyle","disableSpecialDanmaku.up"),p("viewCover","viewCover","component"),p("downloadVideo","downloadVideo","component"),v("downloadVideo.outputs.aria2"),v("downloadVideo.outputs.idm"),f("downloadVideoQuality","downloadVideo.basicConfig.quality"),f("downloadVideoFormat","downloadVideo.basicConfig.api",(o=>({flv:"video.flv",dash:e.downloadVideoDashCodec.startsWith("HEVC")?"video.dash.hevc":"video.dash.avc"}[o]))),f("downloadVideoDefaultDanmaku","downloadVideo.danmakuType"),f("downloadVideoDefaultSubtitle","downloadVideo.subtitleType"),f("aria2RpcOptionProfiles","downloadVideo.rpcProfiles"),p("downloadDanmaku","downloadDanmaku","component"),p("downloadSubtitle","downloadSubtitle","component"),p("downloadAudio","downloadAudio","component"),p("downloadLiveRecords","downloadLiveRecords","component"),p("medalHelper","badgeHelper","component"),f("defaultMedalID","badgeHelper.defaultMedalID"),f("autoMatchMedal","badgeHelper.autoMatchMedal"),g(),y()];let k=0;o.message=`导入中... (${k}/${h.length})`;let S=0,P=0;for(const e of h)try{await e(),S++}catch(e){console.log(e),P++}finally{k++,o.message=`导入中... (${k}/${h.length})`}o.message=`导入完成. 成功 ${S} 个, 失败 ${P} 个, 可在控制台查看详细日志.`}catch(e){o.close(),(0,p.logError)(e)}})(e)}catch(o){e(o)}}})}))},commitHash:"dab6500b7fe9fc61537c20c8f2426455fc5a99de",coreVersion:"2.5.0"})}(),i=i.component}()}));