/**
 * skylark-jsbin-base - A version of jsbin-client  that ported to running on skylarkjs.
 * @author Hudaokeji, Inc.
 * @version v0.9.0
 * @link https://github.com/skylark-integration/skylark-jsbin-base/
 * @license MIT
 */
define(["skylark-jquery"],function(n){function e(n){try{return n in window&&null!==window[n]}catch(n){return!1}}var t,o,i,r,l,a=!1;return e("sessionStorage")?t=window.sessionStorage:(a=!0,i=window.name?JSON.parse(window.name):{},r=Object.keys(i),l={key:function(n){return Object.keys(i)[n]||null},length:r.length,clear:function(){i={},window.name="",l.length=0},getItem:function(n){return i[n]||null},removeItem:function(n){delete i[n],window.name=JSON.stringify(i),l.length--},setItem:function(n,e){i[n]=e,window.name=JSON.stringify(i),l.length++}},r.forEach(function(n){l[n]=i[n]}),t=l),e("localStorage")?e("localStorage")&&(o=window.localStorage):o=n.extend({},t),{polyfill:a,sessionStorage:t,localStorage:o}});
//# sourceMappingURL=sourcemaps/storage.js.map
