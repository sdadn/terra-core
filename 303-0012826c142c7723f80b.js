(window.webpackJsonp=window.webpackJsonp||[]).push([[303],{2605:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(5)),u=a(n(896)),l=a(n(911));function a(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(l.default),f=function(){return r.default.createElement("div",{className:i("content-wrapper")},r.default.createElement(u.default,{required:!0,isInvalid:!0,isIncomplete:!0,id:"form-input-invalid-with-incomplete",ariaLabel:"label"}))};t.default=f},896:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n(0)),o=f(n(3)),u=f(n(10)),l=f(n(5)),a=f(n(7)),i=f(n(901));function f(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var o=h(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return O(this,n)}}function O(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=l.default.bind(i.default),w={defaultValue:o.default.oneOfType([o.default.string,o.default.number]),disabled:o.default.bool,isIncomplete:o.default.bool,isInvalid:o.default.bool,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,name:o.default.string,pattern:o.default.string,refCallback:o.default.func,required:o.default.bool,type:o.default.string,value:o.default.oneOfType([o.default.string,o.default.number]),ariaLabel:o.default.string},j={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(a,e);var t,n,o,l=_(a);function a(){return y(this,a),l.apply(this,arguments)}return t=a,(n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,o=t.disabled,l=t.isIncomplete,a=t.isInvalid,i=t.onBlur,f=t.onChange,c=t.onFocus,y=t.name,m=t.pattern,v=t.refCallback,_=t.required,O=t.type,h=t.ariaLabel,w=t.value,j=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},b(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","name","pattern","refCallback","required","type","ariaLabel","value"])),P=this.context,I=(0,u.default)(g("form-input",{"form-error":a},{"form-incomplete":l&&_&&!a},P.className),j.className);return j&&Object.prototype.hasOwnProperty.call(j,"aria-label")?e=h||j["aria-label"]:h&&(e=h),j["aria-label"]=e,_&&(j["aria-required"]="true"),void 0!==w?j.value=w:void 0!==n&&(j.defaultValue=n),j.placeholder&&(j.placeholder=null),r.default.createElement("input",p({},j,{ref:function(e){v&&v(e)},name:y,type:O,pattern:m,onBlur:i,onChange:f,onFocus:c,disabled:o,required:_,className:I}))}}])&&m(t.prototype,n),o&&m(t,o),a}(r.default.Component);P.propTypes=w,P.defaultProps=j,P.contextType=a.default,P.isInput=!0;var I=P;t.default=I},901:function(e,t,n){e.exports={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___2ILS5","orion-fusion-theme":"Input-module__orion-fusion-theme___33ZoB","form-input":"Input-module__form-input___1P2d6","form-error":"Input-module__form-error___j0fiD","form-incomplete":"Input-module__form-incomplete___3wIAu"}},911:function(e,t,n){e.exports={"content-wrapper":"Input-test-module__content-wrapper___dsRQD"}}}]);
//# sourceMappingURL=303-0012826c142c7723f80b.js.map