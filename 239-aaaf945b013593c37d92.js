(window.webpackJsonp=window.webpackJsonp||[]).push([[239],{2497:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),r=l(n(962));function l(e){return e&&e.__esModule?e:{default:e}}var i=function(){return a.default.createElement("div",null,a.default.createElement(r.default,{text:"Low",visuallyHiddenText:"Risk Factor Low"})," ",a.default.createElement(r.default,{text:"Medium",visuallyHiddenText:"Risk Factor Medium"})," ",a.default.createElement(r.default,{text:"High",visuallyHiddenText:"Risk Factor High"})," ",a.default.createElement(r.default,{text:"Critical",visuallyHiddenText:"Risk Factor Critical"}))};t.default=i},962:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BadgeSize=t.BadgeIntent=t.default=void 0;var a=s(n(0)),r=s(n(3)),l=s(n(10)),i=s(n(5)),o=s(n(982)),u=s(n(142)),d=s(n(986));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=i.default.bind(d.default);t.BadgeIntent={DEFAULT:"default",PRIMARY:"primary",SECONDARY:"secondary",INFO:"info",WARNING:"warning",POSITIVE:"positive",NEGATIVE:"negative"};t.BadgeSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"};var g={children:r.default.node,icon:r.default.element,intent:r.default.oneOf(["default","primary","secondary","info","warning","positive","negative"]),isReversed:r.default.bool,size:r.default.oneOf(["tiny","small","medium","large","huge"]),text:r.default.string,visuallyHiddenText:r.default.string},y={children:null,icon:null,intent:"default",isReversed:!1,size:"small",text:null,visuallyHiddenText:void 0},v=function(e){var t=e.size,n=e.intent,r=e.isReversed,i=e.text,s=e.icon,c=e.visuallyHiddenText,f=p(e,["size","intent","isReversed","text","icon","visuallyHiddenText"]),g=a.default.useContext(o.default),y=(0,l.default)(m("badge",{"has-icon":s},{"is-reversed":r},t,n,g.className),f.className),v=i?a.default.createElement("span",{className:d.default.text,"aria-hidden":"true"},i):null,O=c?a.default.createElement(u.default,{text:c}):null,b=r?[O,v,s,f.children]:[s,O,v,f.children];return a.default.createElement.apply(a.default,["span",_(_({},f),{},{className:y})].concat(b))};v.propTypes=g,v.defaultProps=y;var O=v;t.default=O},982:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.themeContextShape=t.default=void 0;var r=a(n(0)),l=a(n(983)),i=r.default.createContext({}),o=l.default.shape({className:l.default.string});t.themeContextShape=o;var u=i;t.default=u},983:function(e,t,n){e.exports=n(984)()},984:function(e,t,n){"use strict";var a=n(985);function r(){}function l(){}l.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,l,i){if(i!==a){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:r};return n.PropTypes=n,n}},985:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},986:function(e,t,n){e.exports={"clinical-lowlight-theme":"Badge-module__clinical-lowlight-theme___3V7VQ","orion-fusion-theme":"Badge-module__orion-fusion-theme___9BG4x",badge:"Badge-module__badge___20KZ3","is-reversed":"Badge-module__is-reversed___2z3k1","has-icon":"Badge-module__has-icon___2R0fy",text:"Badge-module__text___2Y8yP",tiny:"Badge-module__tiny___1mem2",small:"Badge-module__small___ow-O5",medium:"Badge-module__medium___1w1TM",large:"Badge-module__large___2dMPP",huge:"Badge-module__huge___29Jcf",default:"Badge-module__default___3JkGW",primary:"Badge-module__primary___WLzak",secondary:"Badge-module__secondary___2Eyvs",positive:"Badge-module__positive___17Lg_",negative:"Badge-module__negative___3GJ0z",warning:"Badge-module__warning___Gqrsa",info:"Badge-module__info___1RQe6"}}}]);
//# sourceMappingURL=239-aaaf945b013593c37d92.js.map