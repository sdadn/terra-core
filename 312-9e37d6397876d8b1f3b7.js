(window.webpackJsonp=window.webpackJsonp||[]).push([[312],{1028:function(e,o,l){e.exports={"clinical-lowlight-theme":"ProgressBar-module__clinical-lowlight-theme___qLQPu","orion-fusion-theme":"ProgressBar-module__orion-fusion-theme___2n2Bw","progress-bar":"ProgressBar-module__progress-bar___RnSdv","default-color":"ProgressBar-module__default-color___2k9lZ",tiny:"ProgressBar-module__tiny___2O6Dl",small:"ProgressBar-module__small___2452Z",medium:"ProgressBar-module__medium___3VPS8",large:"ProgressBar-module__large___1Dd94",huge:"ProgressBar-module__huge___3_Syb"}},1094:function(e,o,l){e.exports={"clinical-lowlight-theme":"colors-module__clinical-lowlight-theme___198mD","orion-fusion-theme":"colors-module__orion-fusion-theme___X_1Ca","color-bar-example-1":"colors-module__color-bar-example-1___33oPT","color-bar-example-2":"colors-module__color-bar-example-2___3mUZ9","color-bar-example-3":"colors-module__color-bar-example-3___2xZY3","two-colors-bar-2-colors-example-1":"colors-module__two-colors-bar-2-colors-example-1___2VQFl","two-colors-bar-2-colors-example-2":"colors-module__two-colors-bar-2-colors-example-2___DTjK3","two-colors-bar-2-colors-example-3":"colors-module__two-colors-bar-2-colors-example-3___3-C1U","customized-color-bar-example-1":"colors-module__customized-color-bar-example-1___2eaSv","customized-color-bar-example-2":"colors-module__customized-color-bar-example-2___T5N82"}},2794:function(e,o,l){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var r=s(l(0)),a=s(l(5)),t=s(l(979)),u=s(l(1094));function s(e){return e&&e.__esModule?e:{default:e}}var _=a.default.bind(u.default);o.default=function(){return r.default.createElement("div",null,r.default.createElement(t.default,{valueText:"8%",value:8,max:10,colorClass:_(["customized-color-bar-example-2"])}))}},979:function(e,o,l){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.ProgressBarHeightSize=o.default=void 0;var r=c(l(0)),a=c(l(3)),t=c(l(10)),u=c(l(5)),s=c(l(7)),_=c(l(1028));function c(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var l=arguments[o];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function n(e,o){if(null==e)return{};var l,r,a=function(e,o){if(null==e)return{};var l,r,a={},t=Object.keys(e);for(r=0;r<t.length;r++)l=t[r],o.indexOf(l)>=0||(a[l]=e[l]);return a}(e,o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)l=t[r],o.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var m=u.default.bind(_.default);o.ProgressBarHeightSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"};var d={heightSize:a.default.oneOf(["tiny","small","medium","large","huge"]),value:a.default.number.isRequired,max:a.default.number,valueText:a.default.string,colorClass:a.default.string},f={heightSize:"small",max:100,valueText:void 0,colorClass:"default-color"},p=function(e){var o=e.heightSize,l=e.value,a=e.max,u=e.valueText,_=e.colorClass,c=n(e,["heightSize","value","max","valueText","colorClass"]),d=r.default.useContext(s.default),f=(0,t.default)(m("progress-bar",o,_,d.className),c.className),p=l/a*100;return r.default.createElement("progress",i({},c,{className:f,max:100,value:p,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":p,"aria-valuetext":u,tabIndex:"-1"}))};p.propTypes=d,p.defaultProps=f;var g=p;o.default=g}}]);
//# sourceMappingURL=312-9e37d6397876d8b1f3b7.js.map