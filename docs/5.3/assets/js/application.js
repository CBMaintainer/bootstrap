(()=>{var W=Object.create;var M=Object.defineProperty;var Z=Object.getOwnPropertyDescriptor;var tt=Object.getOwnPropertyNames;var et=Object.getPrototypeOf,nt=Object.prototype.hasOwnProperty;var ot=(d,y)=>()=>(y||d((y={exports:{}}).exports,y),y.exports);var rt=(d,y,b,l)=>{if(y&&typeof y=="object"||typeof y=="function")for(let i of tt(y))!nt.call(d,i)&&i!==b&&M(d,i,{get:()=>y[i],enumerable:!(l=Z(y,i))||l.enumerable});return d};var it=(d,y,b)=>(b=d!=null?W(et(d)):{},rt(y||!d||!d.__esModule?M(b,"default",{value:d,enumerable:!0}):b,d));var B=ot((A,P)=>{(function(y,b){typeof A=="object"&&typeof P=="object"?P.exports=b():typeof define=="function"&&define.amd?define([],b):typeof A=="object"?A.ClipboardJS=b():y.ClipboardJS=b()})(A,function(){return function(){var d={686:function(l,i,t){"use strict";t.d(i,{default:function(){return Q}});var r=t(279),c=t.n(r),e=t(370),p=t.n(e),v=t(817),E=t.n(v);function g(u){try{return document.execCommand(u)}catch{return!1}}var h=function(o){var n=E()(o);return g("cut"),n},m=h;function T(u){var o=document.documentElement.getAttribute("dir")==="rtl",n=document.createElement("textarea");n.style.fontSize="12pt",n.style.border="0",n.style.padding="0",n.style.margin="0",n.style.position="absolute",n.style[o?"right":"left"]="-9999px";var a=window.pageYOffset||document.documentElement.scrollTop;return n.style.top="".concat(a,"px"),n.setAttribute("readonly",""),n.value=u,n}var I=function(o,n){var a=T(o);n.container.appendChild(a);var s=E()(a);return g("copy"),a.remove(),s},D=function(o){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},a="";return typeof o=="string"?a=I(o,n):o instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(o==null?void 0:o.type)?a=I(o.value,n):(a=E()(o),g("copy")),a},L=D;function C(u){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?C=function(n){return typeof n}:C=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},C(u)}var $=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=o.action,a=n===void 0?"copy":n,s=o.container,f=o.target,S=o.text;if(a!=="copy"&&a!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(f!==void 0)if(f&&C(f)==="object"&&f.nodeType===1){if(a==="copy"&&f.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(a==="cut"&&(f.hasAttribute("readonly")||f.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(S)return L(S,{container:s});if(f)return a==="cut"?m(f):L(f,{container:s})},F=$;function w(u){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?w=function(n){return typeof n}:w=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},w(u)}function z(u,o){if(!(u instanceof o))throw new TypeError("Cannot call a class as a function")}function N(u,o){for(var n=0;n<o.length;n++){var a=o[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(u,a.key,a)}}function J(u,o,n){return o&&N(u.prototype,o),n&&N(u,n),u}function U(u,o){if(typeof o!="function"&&o!==null)throw new TypeError("Super expression must either be null or a function");u.prototype=Object.create(o&&o.prototype,{constructor:{value:u,writable:!0,configurable:!0}}),o&&k(u,o)}function k(u,o){return k=Object.setPrototypeOf||function(a,s){return a.__proto__=s,a},k(u,o)}function V(u){var o=X();return function(){var a=x(u),s;if(o){var f=x(this).constructor;s=Reflect.construct(a,arguments,f)}else s=a.apply(this,arguments);return Y(this,s)}}function Y(u,o){return o&&(w(o)==="object"||typeof o=="function")?o:K(u)}function K(u){if(u===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return u}function X(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function x(u){return x=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},x(u)}function O(u,o){var n="data-clipboard-".concat(u);if(o.hasAttribute(n))return o.getAttribute(n)}var G=function(u){U(n,u);var o=V(n);function n(a,s){var f;return z(this,n),f=o.call(this),f.resolveOptions(s),f.listenClick(a),f}return J(n,[{key:"resolveOptions",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof s.action=="function"?s.action:this.defaultAction,this.target=typeof s.target=="function"?s.target:this.defaultTarget,this.text=typeof s.text=="function"?s.text:this.defaultText,this.container=w(s.container)==="object"?s.container:document.body}},{key:"listenClick",value:function(s){var f=this;this.listener=p()(s,"click",function(S){return f.onClick(S)})}},{key:"onClick",value:function(s){var f=s.delegateTarget||s.currentTarget,S=this.action(f)||"copy",_=F({action:S,container:this.container,target:this.target(f),text:this.text(f)});this.emit(_?"success":"error",{action:S,text:_,trigger:f,clearSelection:function(){f&&f.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(s){return O("action",s)}},{key:"defaultTarget",value:function(s){var f=O("target",s);if(f)return document.querySelector(f)}},{key:"defaultText",value:function(s){return O("text",s)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(s){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return L(s,f)}},{key:"cut",value:function(s){return m(s)}},{key:"isSupported",value:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],f=typeof s=="string"?[s]:s,S=!!document.queryCommandSupported;return f.forEach(function(_){S=S&&!!document.queryCommandSupported(_)}),S}}]),n}(c()),Q=G},828:function(l){var i=9;if(typeof Element!="undefined"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function r(c,e){for(;c&&c.nodeType!==i;){if(typeof c.matches=="function"&&c.matches(e))return c;c=c.parentNode}}l.exports=r},438:function(l,i,t){var r=t(828);function c(v,E,g,h,m){var T=p.apply(this,arguments);return v.addEventListener(g,T,m),{destroy:function(){v.removeEventListener(g,T,m)}}}function e(v,E,g,h,m){return typeof v.addEventListener=="function"?c.apply(null,arguments):typeof g=="function"?c.bind(null,document).apply(null,arguments):(typeof v=="string"&&(v=document.querySelectorAll(v)),Array.prototype.map.call(v,function(T){return c(T,E,g,h,m)}))}function p(v,E,g,h){return function(m){m.delegateTarget=r(m.target,E),m.delegateTarget&&h.call(v,m)}}l.exports=e},879:function(l,i){i.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},i.nodeList=function(t){var r=Object.prototype.toString.call(t);return t!==void 0&&(r==="[object NodeList]"||r==="[object HTMLCollection]")&&"length"in t&&(t.length===0||i.node(t[0]))},i.string=function(t){return typeof t=="string"||t instanceof String},i.fn=function(t){var r=Object.prototype.toString.call(t);return r==="[object Function]"}},370:function(l,i,t){var r=t(879),c=t(438);function e(g,h,m){if(!g&&!h&&!m)throw new Error("Missing required arguments");if(!r.string(h))throw new TypeError("Second argument must be a String");if(!r.fn(m))throw new TypeError("Third argument must be a Function");if(r.node(g))return p(g,h,m);if(r.nodeList(g))return v(g,h,m);if(r.string(g))return E(g,h,m);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function p(g,h,m){return g.addEventListener(h,m),{destroy:function(){g.removeEventListener(h,m)}}}function v(g,h,m){return Array.prototype.forEach.call(g,function(T){T.addEventListener(h,m)}),{destroy:function(){Array.prototype.forEach.call(g,function(T){T.removeEventListener(h,m)})}}}function E(g,h,m){return c(document.body,g,h,m)}l.exports=e},817:function(l){function i(t){var r;if(t.nodeName==="SELECT")t.focus(),r=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var c=t.hasAttribute("readonly");c||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),c||t.removeAttribute("readonly"),r=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var e=window.getSelection(),p=document.createRange();p.selectNodeContents(t),e.removeAllRanges(),e.addRange(p),r=e.toString()}return r}l.exports=i},279:function(l){function i(){}i.prototype={on:function(t,r,c){var e=this.e||(this.e={});return(e[t]||(e[t]=[])).push({fn:r,ctx:c}),this},once:function(t,r,c){var e=this;function p(){e.off(t,p),r.apply(c,arguments)}return p._=r,this.on(t,p,c)},emit:function(t){var r=[].slice.call(arguments,1),c=((this.e||(this.e={}))[t]||[]).slice(),e=0,p=c.length;for(e;e<p;e++)c[e].fn.apply(c[e].ctx,r);return this},off:function(t,r){var c=this.e||(this.e={}),e=c[t],p=[];if(e&&r)for(var v=0,E=e.length;v<E;v++)e[v].fn!==r&&e[v].fn._!==r&&p.push(e[v]);return p.length?c[t]=p:delete c[t],this}},l.exports=i,l.exports.TinyEmitter=i}},y={};function b(l){if(y[l])return y[l].exports;var i=y[l]={exports:{}};return d[l](i,i.exports,b),i.exports}return function(){b.n=function(l){var i=l&&l.__esModule?function(){return l.default}:function(){return l};return b.d(i,{a:i}),i}}(),function(){b.d=function(l,i){for(var t in i)b.o(i,t)&&!b.o(l,t)&&Object.defineProperty(l,t,{enumerable:!0,get:i[t]})}}(),function(){b.o=function(l,i){return Object.prototype.hasOwnProperty.call(l,i)}}(),b(686)}().default})});var j=()=>{let d=document.querySelector(".bd-sidebar"),y=document.querySelector(".bd-links-nav .active");if(!d||!y)return;let b=d.clientHeight,l=y.offsetTop,i=y.clientHeight,t=l,r=t-b+i;(d.scrollTop>t||d.scrollTop<r)&&(d.scrollTop=t-b/2+i/2)};var q=it(B()),R=()=>{let d="Copy to clipboard",y="Edit on StackBlitz",b=['<div class="bd-code-snippet">','  <div class="bd-clipboard">','    <button type="button" class="btn-clipboard">','      <svg class="bi" role="img" aria-label="Copy"><use xlink:href="#clipboard"/></svg>',"    </button>","  </div>","</div>"].join("");document.querySelectorAll(".highlight").forEach(t=>{t.closest(".bd-example-snippet")||(t.insertAdjacentHTML("beforebegin",b),t.previousElementSibling.append(t))});function l(t,r){document.querySelectorAll(t).forEach(c=>{bootstrap.Tooltip.getOrCreateInstance(c,{title:r})})}l(".btn-clipboard",d),l(".btn-edit",y);let i=new q.default(".btn-clipboard",{target:t=>t.closest(".bd-code-snippet").querySelector(".highlight"),text:t=>t.closest(".bd-code-snippet").querySelector(".highlight").textContent.trimEnd()});i.on("success",t=>{let r=t.trigger.querySelector(".bi").firstElementChild,c=bootstrap.Tooltip.getInstance(t.trigger),e="http://www.w3.org/1999/xlink",p=r.getAttributeNS(e,"href"),v=t.trigger.title;p!=="#check2"&&(c.setContent({".tooltip-inner":"Copied!"}),t.trigger.addEventListener("hidden.bs.tooltip",()=>{c.setContent({".tooltip-inner":d})},{once:!0}),t.clearSelection(),r.setAttributeNS(e,"href",p.replace("clipboard","check2")),setTimeout(()=>{r.setAttributeNS(e,"href",p),t.trigger.title=v},2e3))}),i.on("error",t=>{let c=`Press ${/mac/i.test(navigator.userAgent)?"\u2318":"Ctrl-"}C to copy`,e=bootstrap.Tooltip.getInstance(t.trigger);e.setContent({".tooltip-inner":c}),t.trigger.addEventListener("hidden.bs.tooltip",()=>{e.setContent({".tooltip-inner":d})},{once:!0})})};var H=()=>{document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(e=>{new bootstrap.Tooltip(e)}),document.querySelectorAll('[data-bs-toggle="popover"]').forEach(e=>{new bootstrap.Popover(e)});let d=document.getElementById("toastPlacement");d&&document.getElementById("selectToastPlacement").addEventListener("change",function(){d.dataset.originalClass||(d.dataset.originalClass=d.className),d.className=`${d.dataset.originalClass} ${this.value}`}),document.querySelectorAll(".bd-example .toast").forEach(e=>{new bootstrap.Toast(e,{autohide:!1}).show()});let y=document.getElementById("liveToastBtn"),b=document.getElementById("liveToast");if(y){let e=bootstrap.Toast.getOrCreateInstance(b);y.addEventListener("click",()=>{e.show()})}let l=document.getElementById("liveAlertPlaceholder"),i=(e,p)=>{let v=document.createElement("div");v.innerHTML=[`<div class="alert alert-${p} alert-dismissible" role="alert">`,`   <div>${e}</div>`,'   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',"</div>"].join(""),l.append(v)},t=document.getElementById("liveAlertBtn");t&&t.addEventListener("click",()=>{i("Nice, you triggered this alert message!","success")}),document.querySelectorAll('.carousel:not([data-bs-ride="carousel"])').forEach(e=>{bootstrap.Carousel.getOrCreateInstance(e)}),document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]').forEach(e=>{e.id.includes("Indeterminate")&&(e.indeterminate=!0)}),document.querySelectorAll('.bd-content [href="#"]').forEach(e=>{e.addEventListener("click",p=>{p.preventDefault()})});let r=document.getElementById("exampleModal");r&&r.addEventListener("show.bs.modal",e=>{let v=e.relatedTarget.getAttribute("data-bs-whatever"),E=r.querySelector(".modal-title"),g=r.querySelector(".modal-body input");E.textContent=`New message to ${v}`,g.value=v});let c=document.querySelectorAll(".bd-example-offcanvas .offcanvas");c&&c.forEach(e=>{e.addEventListener("show.bs.offcanvas",p=>{p.preventDefault()},!1)})};j();R();H();})();
/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2025 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */
/*! Bundled license information:

clipboard/dist/clipboard.js:
  (*!
   * clipboard.js v2.0.11
   * https://clipboardjs.com/
   *
   * Licensed MIT © Zeno Rocha
   *)
*/
