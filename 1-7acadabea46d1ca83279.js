(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{2045:function(e,t,r){e.exports={"clinical-lowlight-theme":"Textarea-module__clinical-lowlight-theme___oGe5q","orion-fusion-theme":"Textarea-module__orion-fusion-theme___3IGjQ",textarea:"Textarea-module__textarea___2LAQp","full-size":"Textarea-module__full-size___oV5Sf","no-resize":"Textarea-module__no-resize___1iAys",resizable:"Textarea-module__resizable___MaiV4","form-error":"Textarea-module__form-error___3YkPI","form-incomplete":"Textarea-module__form-incomplete___30YTC"}},905:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextareaSize=t.default=void 0;var o=u(r(0)),a=u(r(3)),i=u(r(10)),n=u(r(5)),l=u(r(7)),s=u(r(2045));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function b(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=_(e);if(t){var a=_(this).constructor;r=Reflect.construct(o,arguments,a)}else r=o.apply(this,arguments);return v(this,r)}}function v(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var x=n.default.bind(s.default);t.TextareaSize={SMALL:"small",MEDIUM:"medium",LARGE:"large",FULL:"full"};var w={small:2,medium:5,large:10},O={ariaLabel:a.default.string,defaultValue:a.default.string,disabled:a.default.bool,isAutoResizable:a.default.bool,isIncomplete:a.default.bool,isInvalid:a.default.bool,name:a.default.string,onChange:a.default.func,onFocus:a.default.func,required:a.default.bool,rows:a.default.number,size:a.default.oneOf(["small","medium","large","full"]),value:a.default.string,refCallback:a.default.func,disableResize:a.default.bool},z={defaultValue:void 0,disabled:!1,name:null,isAutoResizable:!1,isIncomplete:!1,isInvalid:!1,onChange:void 0,required:!1,rows:null,size:"small",value:void 0,refCallback:void 0,disableResize:!1},j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(l,e);var t,r,a,n=y(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=n.call(this,e)).isMobileDevice=window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),t.onChange=t.onChange.bind(g(t)),t.onFocus=t.onFocus.bind(g(t)),t}return t=l,(r=[{key:"componentDidMount",value:function(){var e=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight=e,this.setBaseHeights(),this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){this.props.size===e.size&&this.props.rows===e.rows||this.setBaseHeights()}},{key:"onFocus",value:function(e){if(this.props.isAutoResizable&&!this.isMobileDevice){var t=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight!==t&&(this.textarea.currentLineHeight=t,this.setBaseHeights())}this.props.onFocus&&this.props.onFocus(e)}},{key:"onChange",value:function(e){this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea(),this.props.onChange&&this.props.onChange(e)}},{key:"setBaseHeights",value:function(){var e=this.textarea.value;this.textarea.value="",this.textarea.baseScrollHeight=this.textarea.scrollHeight,this.textarea.style.minHeight="0px",this.textarea.style.minHeight="".concat(this.textarea.scrollHeight,"px"),this.textarea.value=e}},{key:"resizeTextarea",value:function(){var e=this.props.rows||w[this.props.size];this.textarea.rows=e;var t=Math.ceil((this.textarea.scrollHeight-this.textarea.baseScrollHeight)/this.textarea.currentLineHeight);this.textarea.rows=e+t}},{key:"render",value:function(){var e,t=this,r=this.props,a=r.name,n=r.required,l=(r.onChange,r.onFocus,r.isAutoResizable),s=r.isIncomplete,u=r.isInvalid,c=r.value,b=r.defaultValue,m=r.rows,y=r.size,v=r.ariaLabel,g=r.refCallback,_=r.disableResize,O=d(r,["name","required","onChange","onFocus","isAutoResizable","isIncomplete","isInvalid","value","defaultValue","rows","size","ariaLabel","refCallback","disableResize"]),z=this.context,j=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},O),P=(0,i.default)(x("textarea",{"form-error":u},{"form-incomplete":s&&n&&!u},{"full-size":"full"===y},{resizable:l&&!this.isMobileDevice},{"no-resize":_},z.className),j.className);j&&Object.prototype.hasOwnProperty.call(j,"aria-label")?e=v||j["aria-label"]:v&&(e=v),j["aria-label"]=e,n&&(j["aria-required"]="true");var T=m||w[y];return void 0!==c?j.value=c:j.defaultValue=b,j.placeholder&&(j.placeholder=null),o.default.createElement("textarea",f({},j,{ref:function(e){t.textarea=e,g&&g(e)},name:a,onFocus:this.onFocus,onChange:this.onChange,required:n,rows:T,className:P}))}}])&&b(t.prototype,r),a&&b(t,a),l}(o.default.Component);j.propTypes=O,j.defaultProps=z,j.isTextarea=!0,j.contextType=l.default;var P=j;t.default=P}}]);
//# sourceMappingURL=1-7acadabea46d1ca83279.js.map