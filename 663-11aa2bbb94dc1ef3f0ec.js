(window.webpackJsonp=window.webpackJsonp||[]).push([[663],{1253:function(t,e,n){t.exports={"programattic-button":"examplestyles__programattic-button___1mNbr"}},2821:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==r(t)&&"function"!=typeof t)return{default:t};var e=f();if(e&&e.has(t))return e.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if(Object.prototype.hasOwnProperty.call(t,u)){var a=o?Object.getOwnPropertyDescriptor(t,u):null;a&&(a.get||a.set)?Object.defineProperty(n,u,a):n[u]=t[u]}n.default=t,e&&e.set(t,n);return n}(n(0)),u=l(n(5)),a=l(n(46)),i=l(n(292)),c=l(n(1253));function l(t){return t&&t.__esModule?t:{default:t}}function f(){if("function"!=typeof WeakMap)return null;var t=new WeakMap;return f=function(){return t},t}function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,u=void 0;try{for(var a,i=t[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,u=t}finally{try{r||null==i.return||i.return()}finally{if(o)throw u}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var d=u.default.bind(c.default),y=function(){var t=p((0,o.useState)(""),2),e=t[0],n=t[1],r=p((0,o.useState)(""),2),u=r[0],c=r[1],l=p((0,o.useState)(""),2),f=l[0],s=l[1],y=(0,o.useRef)(null);return o.default.createElement("div",null,o.default.createElement("div",null," Minimum Search Length is 3 "),o.default.createElement(i.default,{inputRef:!0,id:"searchfield",onSearch:function(t){n(t),c("Search Text: ")},onInvalidSearch:function(t){n(t),c("INVALID Search Text: ")},onChange:function(t,e){s(e)},onInput:function(t){s(t.target.value)},minimumSearchTextLength:3,value:f,inputRefCallback:function(t){y.current=t}}),o.default.createElement(a.default,{text:"Set search field text",onClick:function(){y.current&&setTimeout((function(){var t;y.current.value="IpsumLorem","function"==typeof Event?t=new Event("input",{bubbles:!0,cancelable:!1}):(t=document.createEvent("Event")).initEvent("input",!0,!1),y.current.dispatchEvent(t)}),1e3)},id:"search-field-set-text-button",className:d("programattic-button")}),o.default.createElement("div",{id:"search-callback-text"},u,e))};e.default=y}}]);
//# sourceMappingURL=663-11aa2bbb94dc1ef3f0ec.js.map