"use strict";(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[43312],{167175:(e,t,n)=>{n.d(t,{mobiletouch:()=>i,touch:()=>a,isChrome:()=>s,isFF:()=>l,isEdge:()=>c,isSafari:()=>u,isMac:()=>g,isWindows:()=>d,isLinux:()=>_,isAndroid:()=>h,isBlackBerry:()=>f,isIOS:()=>p,isOperaMini:()=>m,isIPad:()=>w,isAnyMobile:()=>b});const o="undefined"!=typeof window&&"undefined"!=typeof navigator,r=o&&"ontouchstart"in window,i=o&&r&&"onorientationchange"in window,a=o&&(r||!!navigator.maxTouchPoints),s=o&&window.chrome&&window.chrome.runtime,l=o&&window.navigator.userAgent.toLowerCase().indexOf("firefox")>-1,c=o&&/\sEdge\/\d\d\b/.test(navigator.userAgent),u=o&&Boolean(navigator.vendor)&&navigator.vendor.indexOf("Apple")>-1&&-1===navigator.userAgent.indexOf("CriOS")&&-1===navigator.userAgent.indexOf("FxiOS"),g=o&&/mac/i.test(navigator.platform),d=o&&/Win32|Win64/i.test(navigator.platform),_=o&&/Linux/i.test(navigator.platform),h=o&&/Android/i.test(navigator.userAgent),f=o&&/BlackBerry/i.test(navigator.userAgent),p=o&&/iPhone|iPad|iPod/.test(navigator.platform),m=o&&/Opera Mini/i.test(navigator.userAgent),w=o&&("MacIntel"===navigator.platform&&navigator.maxTouchPoints>1||/iPad/.test(navigator.platform)),b=h||f||p||m},43464:(e,t,n)=>{n.r(t),n.d(t,{cookieBannerDomain:()=>d,oldBannerKey:()=>_,bannerPrivacyPreferenceKey:()=>h,cookieBannerDelegate:()=>w,removeOldCookieBannerKey:()=>b,checkCookiePolicy:()=>v,checkCookiePolicyInLs:()=>y,onAccept:()=>k,setCookiePolicy:()=>S,showCookiesNotification:()=>x,initCookiesNotification:()=>I});var o=n(49437),r=n(314802),i=(n(659863),n(76797)),a=n(114968),s=n(261030),l=n(634786),c=n(66974),u=n(891343);const g=window.location.hostname.split("."),d=(0,c.isLocal)()?"":"."+g.slice(1,g.length).join("."),_="cookieBanner",h=(0,c.isProd)()?"cookiePrivacyPreferenceBannerProduction":"cookiePrivacyPreferenceBannerLocal",f="accepted",p="ignored",m="notApplicable",w=(0,i.createDeferredPromise)();function b(){return o.TVLocalStorage.removeItem(_)}function v(e){return u.get(e)===f||u.get(e)===m}function y(e){return o.TVLocalStorage.getItem(e)===f||o.TVLocalStorage.getItem(e)===m}function k(){S(f)}function S(e){u.set(h,e,3653,"/",d)}let L=!1;async function x(){if(L)return;L=!0;const e=await Promise.all([n.e(81550),n.e(18619),n.e(96246),n.e(41770),n.e(21009),n.e(91217),n.e(37742),n.e(41130),n.e(39089),n.e(10046),n.e(962),n.e(59255),n.e(13830),n.e(38869)]).then(n.bind(n,110681));await e.showCookiesNotification()&&(k(),(0,l.trackCookies)("click","accept_all")),L=!1}async function I(){const e=document.querySelector(".js-main-page-promo-container");if(!v(h)&&!(0,r.isOnMobileAppPage)("any")){if(e||w.resolve(),u.get(h)===p)return s.cookieSettingsReady.resolve(),w.promise.then((()=>x()));{const e=await(0,a.userGeoInfo)();if(e.is_in_european_union||(t=e.country_code,["is","li","no","gb"].includes(t)))return S(p),s.cookieSettingsReady.resolve(),w.promise.then((()=>x()));S(m),(0,s.setCookieSetting)(s.CookieSettings.Analytics,!0),(0,s.setCookieSetting)(s.CookieSettings.Advertising,!0)}}var t
;s.cookieSettingsReady.resolve()}},691805:(e,t,n)=>{n.d(t,{appendScript:()=>r});var o=n(503031);function r(e){const t=document.createElement("script");t.async=!0,t.src=e;const n=(0,o.getCspNonce)();return n&&t.setAttribute("nonce",n),document.head.appendChild(t),t}},261030:(e,t,n)=>{n.d(t,{CookieSettings:()=>o,cookieSettingsChangeEvent:()=>u,cookieSettingsReady:()=>g,setCookieSetting:()=>p,getCookieSetting:()=>m});var o,r=n(251954),i=n(76797),a=n(49437),s=n(43464),l=n(66974),c=n(891343);!function(e){e.Analytics="analytics",e.Advertising="advertising"}(o||(o={}));const u="cookie_settings_changed",g=(0,i.createDeferredPromise)(),d="cookiesSettings",_="localCookiesSettings",h="cookiePrivacyPreferenceBanner",f={[o.Analytics]:!1,[o.Advertising]:!1};function p(e,t){f[e]=t,c.set((0,l.isProd)()?d:_,JSON.stringify(f),3653,"/",s.cookieBannerDomain),r.emit(u,e,t)}function m(e){return f[e]}function w(){return a.TVLocalStorage.removeItem(h)}!function(){const e=c.get((0,l.isProd)()?d:_),t=a.TVLocalStorage.getItem(h),n=a.TVLocalStorage.getItem(d);if(e){t&&n&&(w(),a.TVLocalStorage.removeItem(d)),(0,s.checkCookiePolicyInLs)(s.oldBannerKey)&&(0,s.removeOldCookieBannerKey)();try{const t=JSON.parse(e);f[o.Analytics]=(null==t?void 0:t[o.Analytics])||!1,f[o.Advertising]=(null==t?void 0:t[o.Advertising])||!1}catch(e){}}else if((0,s.checkCookiePolicyInLs)(s.oldBannerKey)&&(p(o.Analytics,!0),p(o.Advertising,!0),(0,s.onAccept)(),(0,s.removeOldCookieBannerKey)()),t&&n){const e=JSON.parse(n);(0,s.setCookiePolicy)(t),p(o.Analytics,null==e?void 0:e[o.Analytics]),p(o.Advertising,null==e?void 0:e[o.Advertising]),w(),a.TVLocalStorage.removeItem(d)}}()},503031:(e,t,n)=>{function o(){const e=document.querySelector("script[nonce]");if(null!==e)return e.getAttribute("nonce")||e.nonce}n.d(t,{getCspNonce:()=>o})},66974:(e,t,n)=>{function o(e=location.host){return-1!==["i18n.tradingview.com","partial.tradingview.com","www.tradingview.com","wwwcn.tradingview.com"].indexOf(e)||-1!==["d33t3vvu2t2yu5.cloudfront.net","dwq4do82y8xi7.cloudfront.net","s.tradingview.com","s3.tradingview.com"].indexOf(e)||e.match(/^[a-z]{2}\.tradingview\.com/)||e.match(/prod-[^.]+.tradingview.com/)?"battle":e.includes("tradingview.com")||e.includes("staging")?"staging":e.match(/webcharts/)?"staging_local":(e.match(/^localhost(:\d+)?$/),"local")}function r(){return"local"===o()}function i(){return"battle"===o()}function a(){return!i()}n.r(t),n.d(t,{environment:()=>o,isLocal:()=>r,isProd:()=>i,isDebug:()=>a})},125226:(e,t,n)=>{var o=n(49437).TVLocalStorage,r=n(869403),i=n(855385);n(638456);var a=new r;TradingView.FeatureToggle={force_prefix:"forcefeaturetoggle.",onChanged:new r,enableFeature:function(e){o.setItem(this.force_prefix+e,"true"),a.fire(e)},disableFeature:function(e){o.setItem(this.force_prefix+e,"false"),a.fire(e)},resetFeature:function(e){o.removeItem(this.force_prefix+e),a.fire(e)},onFeaturesStateChanged:function(){return a}},TradingView.isFeatureEnabled=function(e){var t="featuretoggle_seed";function r(e){try{var n=i(e+function(){
if(window.user&&window.user.id)return window.user.id;var e=o.getItem(t);return null!==e||(e=Math.floor(1e6*Math.random()),o.setItem(t,e)),e}());return new DataView(n).getUint32(0,!0)/4294967296}catch(e){return.5}}function s(t){return!("local"!==window.environment||!function(e){
var t=["broker_FXCM_token_v2","broker_TRADESTATION_V3","broker_TRADOVATE_dev","black_friday_mainpage","black_friday_popup","datawindow","trading-fast-renew-oauth-token","switching_trial_year_to_month_disabled","switching_year_to_month_disabled","default_year_billing_cycle_switcher","marketing-analytics","google-ads","visible_address_fields_by_default","slow-support-warning","hide-trading-floating-toolbar","tvcoins_donations","save-short-streams","details_disable_bid_ask","vat_disabled","pro_plan_upgrades_disabled","pro_plan_downgrades_disabled","disable_recaptcha_on_signup","braintree-trial-implementation","braintree-gopro-in-order-dialog","braintree-apple-pay","braintree-apple-pay-trial","braintree-venmo","braintree-venmo-trial","braintree-3ds-enabled","braintree-3ds-enabled-globaly","braintree-3ds-allow-liability-shifted-transactions-only","hide_gopro_popup_upgrade_button","tradestation_use_sync_mapper","yandex_metric_enabled","broker_id_session","remove_line_tools_from_content","disable_retry_load_linetools_from_storage","modular_broker_use_sync_mapper","do_not_save_shared_line_tools_to_charts","save_shared_line_tools","chart_storage_with_broker_name","do_not_invalidate_chart_on_changing_line_tools","oanda-european-accounts-warning","mobile_show_bottom_panel","disable_save_settings","desktop_version_notification_enabled","favorites-in-broker-dropdown","streams_stats_profile","hide_ecomonic_events","mobile_trading_web","mobile_trading_ios","mobile_trading_android","hide_real_brokers_on_mobile","disable_tradestation_country_block","enable_trading_server_logger","hide_ranges_label_colors","disable_user_specific_encryption","show_checkbox_of_house_rules_to_idea_and_script","minds_widget_enabled","enable_partner_program","disable_phone_verification_sms","disable_sms_for_particular_countries","no_overlap_mode_enabled","collapse_pane_buttons_when_connected_to_broker","enable_new_execution_style","pushstream_connections_observer","use_new_paper_status_mapping","use_staging_verifier","ally_use_new_sso_url","ibkr_use_new_init_session_api","test_minds_connections","enable_eventsource_pushstream_transport","enable_eventsource_pushstream_mobile","ftx_request_server_logger","ibkr_request_server_logger","check_ibkr_side_maintenance","tradestation_request_server_logger","trading_request_server_logger","hide_ideas_on_chart","hide_ideas_in_mobile_apps","new_error_card_icons","RU_SF_disable","RU_VOR_disable","enable_monaco_editor","enable_new_custom_public_chats","bottom_panel_track_events","vertex-tax-included","enable_place_order_context_in_instant_mode","nyse_agreement","websocket_send_locale","multiple_SoS","enable_edit_order_context_in_instant_mode","show_data_problems_in_help_center","enable_trading_in_replay","stretch_data_over_chart_area","chart_storage_hibernation_delay_60min","chart_storage_hibernation_delay_10min","chart_storage_hibernation_delay_5min","widget-sheriff","enable_sign_in_popup_with_evercookie","center_alignment_replay_position","start_replay_right_after_point_selection","nse_attention_popup"],n="[A-Z]+[a-zA-Z0-9_]+",o=new RegExp(`broker_${n}_dev`,"g"),r=new RegExp(`hide_${n}_on_ios`,"g"),i=new RegExp(`hide_${n}_on_android`,"g"),a=new RegExp(`hide_${n}_on_mobile_web`,"g")
;return-1===t.indexOf(e)&&-1===e.indexOf("-maintenance")&&!1===o.test(e)&&!1===r.test(e)&&!1===i.test(e)&&!1===a.test(e)}(t))||(!e[t]||-1!==e[t])&&(!!("true"===o.getItem(TradingView.FeatureToggle.force_prefix+t)||window.is_authenticated&&"undefined"!=typeof user&&user.settings&&"true"===user.settings[TradingView.FeatureToggle.force_prefix+t])||!("false"===o.getItem(TradingView.FeatureToggle.force_prefix+t)||window.is_authenticated&&"undefined"!=typeof user&&user.settings&&"false"===user.settings[TradingView.FeatureToggle.force_prefix+t])&&(!!e[t]&&(1===e[t]||r(t)<=e[t])))}return TradingView.onWidget()||Promise.all([n.e(41346),n.e(34604)]).then(n.bind(n,441346)).then((t=>{t.pushStreamMultiplexer.on("featuretoggle",(function(t){var n=s(t.name);e[t.name]=t.state,n!==s(t.name)&&a.fire(t.name)}))})),s}(window.featureToggleState||{}),t.FeatureToggle=TradingView.FeatureToggle,t.isFeatureEnabled=TradingView.isFeatureEnabled,t.onFeaturesStateChanged=TradingView.FeatureToggle.onFeaturesStateChanged.bind(TradingView.FeatureToggle)},251954:(e,t,n)=>{n.r(t),n.d(t,{unsubscribe:()=>l,on:()=>c,subscribe:()=>u,subscribeToAll:()=>g,emit:()=>d,emitOnce:()=>_});var o=n(869403),r=n.n(o);const i={},a=[],s={};function l(e,t,n){i[e].unsubscribe(n,t)}function c(e,t,n){u(e,t,n)}function u(e,t,n,o){i.hasOwnProperty(e)||(i[e]=new(r())),s[e]?t.call(n):i[e].subscribe(n,t,o)}function g(e){a.push(e)}function d(e,...t){const n=[e].concat(t);a.forEach((e=>{e.apply(null,n)})),i.hasOwnProperty(e)&&i[e].fire.apply(i[e],t)}function _(e){s[e]&&console.warn(`Something went wrong: emitOnce called multiple times with same event (${e})`),s[e]=!0,d.apply(null,arguments)}},588948:(e,t,n)=>{n.r(t),n.d(t,{updateInitData:()=>a,getInitData:()=>s,getFreshInitData:()=>l,deleteField:()=>c});var o=n(650151);const r=(0,n(272001).getLogger)("Common.InitData"),i=window.initData||{};function a(){window.initData&&window.initData!==i&&(Object.assign(i,window.initData),window.initData=i);const e=document.querySelectorAll('script[type="application/prs.init-data+json"]');for(let t=0;t<e.length;t++){const n=e[t];try{const e=JSON.parse((0,o.ensureNotNull)(n.textContent));Object.assign(i,e)}catch(e){r.logWarn(`Failed to parse initData element. ${e}`)}finally{(0,o.ensureNotNull)(n.parentNode).removeChild(n)}}}function s(){return i}function l(){return a(),i}function c(e){delete i[e]}},49437:(e,t,n)=>{const{getLogger:o}=n(272001),r=o("TVLocalStorage");var i=function(){try{this.isAvailable=!0,this.localStorage=window.localStorage,this.localStorage.setItem("tvlocalstorage.available","true")}catch(e){delete this.isAvailable,delete this.localStorage}this._updateLength();try{this._report()}catch(e){}};i.prototype._report=function(){if(this.isAvailable){const e=10,t=[];for(let e=0;e<this.localStorage.length;e++){const n=this.key(e);t.push({key:n,length:String(this.getItem(n)).length})}t.sort(((e,t)=>t.length-e.length));const n=t.slice(0,e);t.sort(((e,t)=>t.key.length-e.key.length));const o=t.slice(0,e);r.logNormal(`Total amount of keys in Local Storage: ${this.length}`),
r.logNormal(`Top ${e} keys with longest values: ${JSON.stringify(n)}`),r.logNormal(`Top ${e} longest key names: ${JSON.stringify(o)}`);try{navigator.storage.estimate().then((e=>{r.logNormal(`Storage estimate: ${JSON.stringify(e)}`)}))}catch(e){}}},i.prototype.length=0,i.prototype.isAvailable=!1,i.prototype.localStorage={"tvlocalstorage.available":"false"},i.prototype._updateLength=function(){if(this.isAvailable)this.length=this.localStorage.length;else{var e,t=0;for(e in this.localStorage)this.localStorage.hasOwnProperty(e)&&t++;this.length=t}},i.prototype.key=function(e){return this.isAvailable?this.localStorage.key(e):Object.keys(this.localStorage)[e]},i.prototype.getItem=function(e){return this.isAvailable?this.localStorage.getItem(e):void 0===this.localStorage[e]?null:this.localStorage[e]},i.prototype.setItem=function(e,t){this.isAvailable?this.localStorage.setItem(e,t):this.localStorage[e]=t,this._updateLength()},i.prototype.removeItem=function(e){this.isAvailable?this.localStorage.removeItem(e):delete this.localStorage[e],this._updateLength()},i.prototype.clear=function(){this.isAvailable?this.localStorage.clear():this.localStorage={},this._updateLength()};var a=function(e){this.storage=e};a.prototype.getItem=function(e){return Promise.resolve(this.storage.getItem(e))},a.prototype.setItem=function(e,t){return Promise.resolve(this.storage.setItem(e,t))},window.TVLocalStorage=new i,window.TVLocalStorageAsync=new a(window.TVLocalStorage),e.exports={TVLocalStorage:window.TVLocalStorage,TVLocalStorageAsync:window.TVLocalStorageAsync}},849204:(e,t,n)=>{n.r(t),n.d(t,{LogoSize:()=>o,LogoUrlResolver:()=>a,getLogoUrlResolver:()=>l});var o,r=n(650151),i=n(588948);!function(e){e[e.Medium=0]="Medium",e[e.Large=1]="Large"}(o||(o={}));class a{constructor(e){(0,r.assert)(""!==e,"S3 base url must be a non-empty string"),this._baseUrl=e}getSymbolLogoUrl(e,t){switch((0,r.assert)(""!==e,"logo id must be a non-empty string"),t){case o.Medium:return this._baseUrl+`${e}.svg`;case o.Large:return this._baseUrl+`${e}--big.svg`}}getCountryFlagUrl(e,t){return this.getSymbolLogoUrl("country/"+e,t)}getCryptoLogoUrl(e,t){return this.getSymbolLogoUrl("crypto/"+e,t)}getProviderLogoUrl(e,t){return this.getSymbolLogoUrl("provider/"+e,t)}}let s;function l(){if(!s){const e=(0,i.getInitData)(),t=e.settings?e.settings.S3_LOGO_SERVICE_BASE_URL:"";s=new a(t)}return s}},314802:(e,t,n)=>{n.d(t,{isOnMobileAppPage:()=>r,urlWithMobileAppParams:()=>i});var o=n(891343);function r(e,t=!1){const{searchParams:n}=new URL(String(location));let r="true"===n.get("mobileapp_new"),i="true"===n.get("mobileapp");if(!t){const e=o.get("tv_app")||"";r||(r=["android","android_nps"].includes(e)),i||(i="ios"===e)}return!("new"!==e&&"any"!==e||!r)||!("new"===e||!i)}function i(e,t=!1){if(r("new",t)){const t=new URL(e,location.href);t.searchParams.set("mobileapp_new","true"),e=t.toString()}if(r("old",t)){const t=new URL(e,location.href);t.searchParams.set("mobileapp","true"),e=t.toString()}return e}},659863:(e,t,n)=>{n.r(t),n.d(t,{qaGlobals:()=>o});const o=new class{
constructor(e,t){this._test=e[t]={}}provide(e,t){this._test[e]=t}}(window,"qaGlobals")},776734:(e,t,n)=>{async function o(){if(!window.user||window.user.do_not_track)return null;{const e=(await Promise.all([n.e(26904),n.e(24081)]).then(n.bind(n,823623))).getTrackerInstance();return e||null}}n.d(t,{getTracker:()=>o})},634786:(e,t,n)=>{n.d(t,{trackCookies:()=>r});var o=n(776734);async function r(e,t){var n;let r,i;r="/"===window.location.pathname?"index":window.location.pathname.split("/")[1];const a=null!==(n=window.user.pro_plan)&&void 0!==n?n:window.is_authenticated?"free":"visitor";window.is_authenticated&&(i=window.user.id);const s=await(0,o.getTracker)();s&&s.trackToastDialog("cookies",e,t,r,a,i)}},777754:(e,t,n)=>{n.r(t),n.d(t,{t:()=>o});n(984919);function o(e,t={},i){if(null===e)return Array.isArray(i)?(i[r(t.count)]||i[0]).format(t.replace||t):"object"==typeof i?o(null,t,i[n.g.language]||i.en):o(i,t);if(i&&e){const n=`${`${e}`.trim().replace(/ {2,}/g," ")}${t.context?`_${t.context}`:""}`;if(i[n])return o(null,t,i[n])}return"number"==typeof e?e.toString():"string"!=typeof e?"":(t.plural&&1!=+t.count?t.plural:e).format(t.replace||t)}const r={ca_ES:(e=1)=>+(1!=e),cs:(e=1)=>+(1==e?0:e>=2&&e<=4?1:2),el:(e=1)=>+(1!=e),da_DK:(e=1)=>+(1!=e),en:(e=1)=>+(1!=e),et_EE:(e=1)=>+(1!=e),fa:(e=1)=>0,hu_HU:(e=1)=>0,id_ID:(e=1)=>0,it:(e=1)=>+(1!=e),ms_MY:(e=1)=>0,no:(e=1)=>+(1!=e),nl_NL:(e=1)=>+(1!=e),ro:(e=1)=>+(1==e?0:e%100>19||e%100==0&&0!=e?2:1),sk_SK:(e=1)=>+(1==e?0:e>=2&&e<=4?1:2),sv:(e=1)=>+(1!=e),zh:(e=1)=>0,zh_TW:(e=1)=>0,de:(e=1)=>+(1!=e),es:(e=1)=>+(1!=e),fr:(e=1)=>+(e>1),he_IL:(e=1)=>+(1==e?0:2==e?1:e>10&&e%10==0?2:3),ko:(e=1)=>0,ja:(e=1)=>0,pl:(e=1)=>+(1==e?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2),pt:(e=1)=>+(1!=e),tr:(e=1)=>+(1!=e),vi:(e=1)=>0,ar:(e=1)=>+(0==e?0:1==e?1:2==e?2:e%100>=3&&e%100<=10?3:e%100>=11&&e%100<=99?4:5),ru:(e=1)=>+(e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2),th:(e=1)=>0}[n.g.language]},869403:(e,t,n)=>{e=n.nmd(e);const o=n(272001).getLogger("Common.Delegate");function r(){this._listeners=[]}function i(e){return!e.singleshot}r.prototype.subscribe=function(e,t,n){const o={object:e,member:t,singleshot:!!n,skip:!1};this._listeners.push(o)},r.prototype.unsubscribe=function(e,t){for(let n=0;n<this._listeners.length;++n){const o=this._listeners[n];if(o.object===e&&o.member===t){o.skip=!0,this._listeners.splice(n,1);break}}},r.prototype.unsubscribeAll=function(e){for(let t=this._listeners.length-1;t>=0;--t){const n=this._listeners[t];n.object===e&&(n.skip=!0,this._listeners.splice(t,1))}},r.prototype.destroy=function(){delete this._listeners},r.prototype.fire=function(){const e=this._listeners;this._listeners=this._listeners.filter(i);const t=e.length;for(let n=0;n<t;++n){const t=e[n];if(!t.skip)try{t.member.apply(t.object||null,arguments)}catch(e){o.logError(e.stack||e.message)}}},"undefined"!=typeof window&&(window.Delegate=r),e&&e.exports&&(e.exports=r)},988411:(e,t,n)=>{e=n.nmd(e);var o=n(272001).getLogger("Common.WatchedValue");function r(){}function i(e){
if(!(this instanceof i))return new i(e);arguments.length>0&&(this._value=e),this._listeners=[]}i.prototype.value=function(){return this._owner?this._owner._value:this._value},i.prototype.setValue=function(e,t){var n=this._owner?this._owner:this;if("function"==typeof n.hook&&(e=n.hook(e)),n.writeLock)return n._value;var r=n._value===e||Number.isNaN(n._value)&&Number.isNaN(e);if(!t&&r&&n.hasOwnProperty("_value"))return e;n._value=e;for(var i=n._listeners.slice(),a=0,s=0;s<i.length;s++){i[s].once&&(n._listeners.splice(s-a,1),a++);try{i[s].cb(e)}catch(e){o.logError(e.stack||e.message)}}return e},i.prototype.deleteValue=function(){var e=this._owner?this._owner:this;if(e.hasOwnProperty("_value")){if(e.writeLock)return e._value;delete e._value;for(var t=e._listeners.slice(),n=0,r=0;r<t.length;r++){t[r].once&&(e._listeners.splice(r-n,1),n++);try{t[r].cb()}catch(e){o.logError(e.stack||e.message)}}}},i.prototype.subscribe=function(e,t){if("function"!=typeof e)throw new TypeError("callback must be a function");var n=!!t&&!!t.once,r=!!t&&!!t.callWithLast,i=this._owner?this._owner:this;if(r&&i.hasOwnProperty("_value")){try{e(i._value)}catch(e){o.logError(e.stack||e.message)}if(n)return}i._listeners.push({cb:e,owner:this,once:!!t&&!!t.once})},i.prototype.unsubscribe=function(e){var t=this._owner?this._owner:this;void 0===e&&(e=null);for(var n=t._listeners,o=n.length;o--;)n[o].owner!==this&&t!==this||n[o].cb!==e&&null!==e||n.splice(o,1)},i.prototype.listeners=function(){return(this._owner?this._owner:this)._listeners},i.prototype.readonly=function(){if(this._readonlyInstance)return this._readonlyInstance;var e=this._readonlyInstance=new r;return e.subscribe=this.subscribe.bind(this),e.unsubscribe=this.unsubscribe.bind(this),e.value=this.value.bind(this),e.when=this.when.bind(this),e.spawn=function(){return this.spawn.apply(this,arguments).readonly()}.bind(this),this.destroy&&(e.destroy=this.destroy.bind(this)),e},i.prototype.spawn=function(e){var t=new i;return delete t._listeners,t._owner=this._owner||this,t.destroy=function(){if("function"==typeof e)try{e()}catch(e){o.logError(e.stack||e.message)}this.unsubscribe(),delete this._owner},t},i.prototype.when=function(e){var t=this;if(this.value())try{e()}catch(e){o.logError(e.stack||e.message)}else{var n=function(o){o&&(t.unsubscribe(n),e())};t.subscribe(n)}},i.prototype.opposite=function(){if(!this._opposite){var e=this,t=new i(!this.value());this.subscribe((function(e){t.setValue(!e)})),t.subscribe((function(t){e.setValue(!t)})),this._opposite=t}return this._opposite},"undefined"!=typeof window&&(window.WatchedValue=i),e&&e.exports&&(e.exports=i)},890740:(e,t,n)=>{n.d(t,{fetch:()=>r});const o=(0,n(272001).getLogger)("Fetch");function r(e,t,n={}){{t=t||{},function(e){return new URL(e,document.baseURI).origin===location.origin}(e)&&(t.headers?t.headers instanceof Headers||(t.headers=new Headers(t.headers)):t.headers=new Headers,window.locale&&t.headers.set("X-Language",window.locale),t.headers.set("X-Requested-With","XMLHttpRequest")),
void 0===t.credentials&&(t.credentials="same-origin");const r=window.fetch(e,t);return r.then((r=>{if(!r.ok){let i="";t.method&&(i+=`${t.method.toUpperCase()} `),i+=e,i+=`. Status ${r.status}`,r.statusText&&(i+=`. ${r.statusText}`),r.headers.via&&(i+=`. Via: ${r.headers.via}`),n.logBodyOnError&&"string"==typeof t.body&&(i+=`. Body: ${t.body.slice(0,1024)}`),o.logError(i)}return r}),(n=>{if(n&&"AbortError"===n.name)return;let r="";t.method&&(r+=`${t.method.toUpperCase()} `),r+=e,navigator.onLine?r+=`. ${n}`:r+=". User is offline.",o.logError(r)})),r}}},272001:(e,t,n)=>{n.r(t),n.d(t,{LOGLEVEL:()=>i,getLogLevel:()=>p,isHighRateEnabled:()=>m,setLogLevel:()=>w,getRawLogHistory:()=>b,serializeLogHistoryEntry:()=>v,getLogHistory:()=>y,getLogger:()=>S,loggingOn:()=>x,loggingOff:()=>I});const o="undefined"!=typeof window?window:{};let r=!1;try{localStorage.getItem(""),r=!0}catch(e){}var i;!function(e){e[e.ERROR=1]="ERROR",e[e.WARNING=2]="WARNING",e[e.INFO=3]="INFO",e[e.NORMAL=4]="NORMAL",e[e.DEBUG=5]="DEBUG"}(i||(i={}));let a=0;const s="tv.logger.loglevel",l="tv.logger.logHighRate",c=[];let u=null,g=null,d=null,_=NaN,h=i.WARNING,f=!1;function p(){return h}function m(){return f}function w(e){e=Math.max(i.ERROR,Math.min(i.DEBUG,e)),h=e,A()}function b(e,t){let n=c.reduce(((e,t)=>e.concat(t)),[]);return n.sort(((e,t)=>e.id-t.id)),void 0!==t&&(n=n.filter((e=>e.subSystemId===t))),"number"==typeof e&&(n=n.slice(-e)),n}function v(e){return new Date(e.timestamp).toISOString()+":"+e.subSystemId+":"+e.message.replace(/"/g,"'")}function y(e,t){return function(e,t){let n,o=0,r=0;for(n=e.length-1;n>=1&&(o+=8*(1+encodeURIComponent(e[n]).length),!(n-1>0&&(r=8*(1+encodeURIComponent(e[n-1]).length),o+r>t)));n--);return e.slice(n)}(b(e,t).map(v),75497472)}function k(e,t,n,r){if(t===g&&r.id===d)return;const s=new Date;if(e<=i.NORMAL&&function(e,t,n,r,i){"function"===o.structuredClone&&(t=o.structuredClone(t));const s={id:a,message:t,subSystemId:r,timestamp:Number(e)};a+=1,n.push(s),void 0!==i&&n.length>i&&n.splice(0,1)}(s,t,n,r.id,r.maxCount),e<=h&&(!r.highRate||m())&&(!u||r.id.match(u))){const n=s.toISOString()+":"+r.id+":"+t;switch(e){case i.DEBUG:console.debug(n);break;case i.INFO:case i.NORMAL:r.color?console.log("%c"+n,"color: "+r.color):console.log(n);break;case i.WARNING:console.warn(n);break;case i.ERROR:console.error(n)}g=t,d=r.id,_&&clearTimeout(_),_=setTimeout((()=>{g=null,d=null,_=NaN}),1e3)}}function S(e,t={}){const n=[];c.push(n);const o=Object.assign(t,{id:e});function r(e){return t=>k(e,String(t),n,o)}return{logDebug:r(i.DEBUG),logError:r(i.ERROR),logInfo:r(i.INFO),logNormal:r(i.NORMAL),logWarn:r(i.WARNING)}}const L=S("logger"),x=o.lon=(e,t)=>{w(i.DEBUG),L.logNormal("Debug logging enabled"),f=Boolean(e),u=t||null,A()},I=o.loff=()=>{w(i.INFO),L.logInfo("Debug logging disabled")};function A(){try{r&&(localStorage.setItem(l,String(f)),localStorage.setItem(s,String(h)))}catch(e){L.logWarn(`Cannot save logger state (level: ${h}, high-rate: ${f}) to localStorage: ${e.message}`)}}!function(){f=!!r&&"true"===localStorage.getItem(l)
;let e=parseInt(r&&localStorage.getItem(s)||"");Number.isNaN(e)&&(e=i.WARNING),w(e),L.logNormal(`Init with settings - level: ${h}, high-rate: ${f}`)}(),o.performance&&o.performance.now?L.logNormal(`Sync logger and perf times, now is ${o.performance.now()}`):L.logWarn("Perf time is not available")},768038:(e,t,n)=>{n.r(t),n.d(t,{isRtl:()=>r,stripLTRMarks:()=>s,startWithLTR:()=>l,forceLTRStr:()=>c,forceLTRStrSsr:()=>u,forceRTLStr:()=>g,getLTRScrollLeft:()=>d,getLTRScrollLeftOffset:()=>_,detectAutoDirection:()=>p});var o=n(64531);const r=()=>"rtl"===window.document.dir,i="‬",a=new RegExp("‎|‪|‫|‬","g");function s(e){return""!==e&&r()&&null!=e?e.replace(a,""):e}function l(e){return""!==e&&r()&&null!=e?"‎"+e:e}function c(e){return""!==e&&r()&&null!=e?"‪"+e+i:e}function u(e){return"‪"+e+i}function g(e){return""!==e&&r()&&null!=e?"‫"+e+i:e}function d(e){return(0,o.getNormalizedScrollLeft)(e,"rtl")}function _(e,t){const n=(0,o.detectScrollType)();if("indeterminate"===n)return 0;switch(n){case"negative":t=e.clientWidth-e.scrollWidth+t;break;case"reverse":t=e.scrollWidth-e.clientWidth-t}return t}const h=/[^\u0000-\u0040\u005B-\u0060\u007B-\u00BF\u00D7\u00F7\u02B9-\u02FF\u2000-\u200E\u2010-\u2029\u202C\u202F-\u2BFF]/,f=/[\u0590-\u07FF\u200F\u202B\u202E\uFB1D-\uFDFD\uFE70-\uFEFC]/;function p(e){const t=h.exec(e);return t?f.test(t[0])?"rtl":"ltr":""}},114968:(e,t,n)=>{n.d(t,{userGeoInfo:()=>a});var o=n(890740);const r=(0,n(272001).getLogger)("User.GeoInfo");let i;function a(){if(void 0!==i)return i;return i=(0,o.fetch)("/check_language/",{method:"POST"}).then((e=>{if(e.ok)return e.json();throw new Error(e.statusText)})).catch((e=>(r.logWarn(e.message),{}))),i}},891343:(e,t,n)=>{function o(e,t,n,o,r){let i="";if(o=o?"; path="+o:"",r=r?"; domain="+r:"",n){const e=new Date;e.setTime(e.getTime()+24*n*60*60*1e3),i="; expires="+e.toUTCString()}else i="";document.cookie=e+"="+t+i+r+o}function r(e){const t=e+"=",n=document.cookie.split(";");for(let e=0;e<n.length;e++){let o=n[e];for(;" "===o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(t))return o.substring(t.length,o.length)}return null}n.d(t,{set:()=>o,get:()=>r})},76797:(e,t,n)=>{function o(){let e,t;return{promise:new Promise(((n,o)=>{e=n,t=o})),reject:t,resolve:e}}n.d(t,{createDeferredPromise:()=>o})},777491:(e,t,n)=>{n.r(t),n.d(t,{guid:()=>r,randomHash:()=>i,randomHashN:()=>a});const o="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function r(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}function i(){return a(12)}function a(e){let t="";for(let n=0;n<e;++n){const e=Math.floor(Math.random()*o.length);t+=o[e]}return t}},798062:(e,t,n)=>{function o(e){return decodeURIComponent(e.replace(/\+/g," ")).replace(/<\/?[^>]+(>|$)/g,"")}function r(e){const t=/([^&=]+)=?([^&]*)/g,n={};if(!e)return n;let r=t.exec(e);for(;r;)n[o(r[1])]=o(r[2]),r=t.exec(e);return n}function i(){return r(window.location.search.substring(1))}function a(){return r(window.location.hash.split("#")[1])}
function s(e){const t=[];for(const n in e)e.hasOwnProperty(n)&&null!=e[n]&&t.push({key:n,pair:encodeURIComponent(n)+"="+encodeURIComponent(e[n])});return t.sort(((e,t)=>e.key>t.key?1:e.key<t.key?-1:0)).map((e=>e.pair)).join("&")}n.r(t),n.d(t,{decode:()=>o,getQueryParams:()=>r,getUrlParams:()=>i,getHashUrlParams:()=>a,createUrlParams:()=>s})},10571:(e,t,n)=>{function o(e,t=!1){"loading"!==document.readyState?t?setTimeout((()=>e()),1):e():document.addEventListener("DOMContentLoaded",(()=>e()))}n.d(t,{whenDocumentReady:()=>o,whenDocumentReadyPromise:()=>r});const r=new Promise((e=>{o(e)}))}}]);