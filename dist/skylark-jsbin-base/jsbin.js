/**
 * skylark-jsbin-base - A version of jsbin-client  that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-jsbin-base/
 * @license MIT
 */
define(["skylark-langx-ns","skylark-langx-objects","skylark-jquery","./storage"],function(t,e,n,i){"use strict";var o=t.attach("intg.jsbin");window.jsbin&&(e.mixin(o,window.jsbin),window.jsbin=o);try{console.log("Dave is ready.")}catch(t){window.console={log:function(){},warn:function(){},trace:function(){},error:function(){}}}function s(t,e){var n=function(){var i=this,o=arguments;n.cancel(),n.timer=setTimeout(function(){t.apply(i,o)},e)};return n.cancel=function(){clearTimeout(n.timer)},n}n.expr[":"].host=function(t,e,n){return t.host===n[3]};var r=i.localStorage.getItem("settings");return("undefined"===r||o.embed)&&(r=null),o.user&&o.user.name?(o.settings=n.extend(!0,{},o.user.settings,o.settings),o.user.settings.font&&(o.settings.font=parseInt(o.user.settings.font,10))):o.settings=n.extend({},o.settings,JSON.parse(r||"{}")),o.mobile=/WebKit.*Mobile.*|Android/.test(navigator.userAgent),o.tablet=/iPad/i.test(navigator.userAgent),o.ie=function(){for(var t=3,e=document.createElement("div"),n=e.getElementsByTagName("i");e.innerHTML="\x3c!--[if gt IE "+ ++t+"]><i></i><![endif]--\x3e",n[0];);return t>4?t:void 0}(),r||location.origin+location.pathname!==o.root+"/"||i.localStorage.setItem("settings","{}"),o.settings.editor||(o.settings.editor={}),o.settings.codemirror&&n.extend(o.settings.editor,o.settings.codemirror),o.settings.editor.theme&&n(document.documentElement).addClass("cm-s-"+o.settings.editor.theme.split(" ")[0]),n.ajaxPrefilter(function(t,e,n){({head:1,get:1})[t.type.toLowerCase()]||t.url.match(/^https:\/\/api.github.com/)||n.setRequestHeader("x-csrf-token",o.state.token)}),o.owner=function(){return o.user&&o.user.name&&o.state.metadata&&o.state.metadata.name===o.user.name},o.getURL=function(t){t||(t={});var e=t.withoutRoot,n=t.root||o.root,i=e?"":n,s=o.state;return s.code&&(i+="/"+s.code,s.latest&&!t.withRevision||!1!==t.withRevision&&(i+="/"+(s.revision||1))),i},o.state.updateSettings=s(function(t,e){e||(e="POST"),o.state.code&&(t.checksum=o.state.checksum,n.ajax({type:e,url:o.getURL({withRevision:!0})+"/settings",data:t}))},500),o.$document=n(document),o.$body=n("body"),o.$window=n(window),o.throttle=s,o.escapeHTML=function(t){return String(t).replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},o.debounceAsync=function(t){var e=!1,n=null;return function(){var i=[].slice.call(arguments,0);if(i.push(function(){e=!1,n&&(t.apply(n.context,n.args),n=null)}),!e)return e=!0,t.apply(this,i);n={args:i,context:this}}},o.objectValue=function(t,e){var n=t.split("."),i=n.length,o=1,s=e||window,r=s[t];try{if(void 0!==s[n[0]])for(s=s[n[0]];o<i&&void 0!==s[n[o]];o++)o===i-1&&(r=s[n[o]]),s=s[n[o]]}catch(t){r=void 0}return r},o.loginVisible=!1,o.dropdownOpen=!1,o.keyboardHelpVisible=!1,o.urlHelpVisible=!1,o.sideNavVisible=!1,o.infocardVisible=!1,o});
//# sourceMappingURL=sourcemaps/jsbin.js.map
