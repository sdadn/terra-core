(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{1133:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r),l=n(884),o=n.n(l),i=function(e){var t=e.url;return a.a.createElement(o.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-fieldset",name:"terra-form-fieldset",version:"2.49.0",url:t})}},1134:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),a=d(n(3)),l=d(n(10)),o=d(n(5)),i=d(n(7)),u=d(n(1135));function d(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.default.bind(u.default),f={children:a.default.node,help:a.default.node,legend:a.default.string,legendAttrs:a.default.object,required:a.default.bool,isLegendHidden:a.default.bool},m=function(e){var t=e.children,n=e.help,a=e.legend,o=e.legendAttrs,u=e.isLegendHidden,d=e.required,f=s(e,["children","help","legend","legendAttrs","isLegendHidden","required"]),m=r.default.useContext(i.default),b=(0,l.default)(p(["fieldset",{"fieldset-required":d},m.className]),f.className),h=p(["legend",o.className,{"legend-visually-hidden":u}]);return r.default.createElement("fieldset",c({},f,{className:b}),a&&r.default.createElement("legend",c({},o,{className:h}),a),n&&r.default.createElement("small",{className:p("help-text"),tabIndex:"-1"},n),r.default.createElement("div",{className:p("fieldset-children")},t))};m.propTypes=f,m.defaultProps={legendAttrs:{},required:!1,isLegendHidden:!1};var b=m;t.default=b},1135:function(e,t,n){e.exports={"clinical-lowlight-theme":"Fieldset-module__clinical-lowlight-theme___1Gu9R","orion-fusion-theme":"Fieldset-module__orion-fusion-theme___2ijUo",fieldset:"Fieldset-module__fieldset___QRtAv","fieldset-required":"Fieldset-module__fieldset-required___YM_28",legend:"Fieldset-module__legend___2fbSJ","legend-visually-hidden":"Fieldset-module__legend-visually-hidden___3tERW","help-text":"Fieldset-module__help-text___3_p45","fieldset-children":"Fieldset-module__fieldset-children___VKKPH"}},1925:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),a=d(n(291)),l=d(n(896)),o=d(n(1134)),i=d(n(5)),u=d(n(1926));function d(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y=i.default.bind(u.default),O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(d,e);var t,n,i,u=f(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=u.call(this,e)).state={first:"",middle:"",last:""},t.handleFirstChange=t.handleFirstChange.bind(b(t)),t.handleMiddleChange=t.handleMiddleChange.bind(b(t)),t.handleLastChange=t.handleLastChange.bind(b(t)),t}return t=d,(n=[{key:"handleFirstChange",value:function(e){this.setState({first:e.target.value})}},{key:"handleMiddleChange",value:function(e){this.setState({middle:e.target.value})}},{key:"handleLastChange",value:function(e){this.setState({last:e.target.value})}},{key:"render",value:function(){return r.default.createElement("div",null,r.default.createElement(o.default,{type:"checkbox",legend:"Give your full name here",name:"children_present",value:"children_present",error:"All fields must be filled out",help:"Families are eligible for family package plans",required:!0},r.default.createElement(a.default,{label:"First",isInline:!0,required:!0,htmlFor:"first"},r.default.createElement(l.default,{id:"first",type:"text",name:"first",defaultValue:"",onChange:this.handleFirstChange})),r.default.createElement(a.default,{label:"Middle",isInline:!0,required:!0,htmlFor:"middle"},r.default.createElement(l.default,{id:"middle",type:"text",name:"middle",defaultValue:"",onChange:this.handleMiddleChange})),r.default.createElement(a.default,{label:"Last",isInline:!0,required:!0,htmlFor:"last"},r.default.createElement(l.default,{id:"last",type:"text",name:"last",defaultValue:"",onChange:this.handleLastChange}))),r.default.createElement("hr",null),r.default.createElement("p",null,"Full Name Provided:",r.default.createElement("span",{className:y("fieldset-wrapper")},this.state.first," ",this.state.middle," ",this.state.last)),r.default.createElement("br",null))}}])&&s(t.prototype,n),i&&s(t,i),d}(r.default.Component);t.default=O},1926:function(e,t,n){e.exports={"fieldset-wrapper":"FieldsetExamples-module__fieldset-wrapper___3xp3J"}},2992:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var r=n(0),a=n.n(r),l=n(289),o=n(1133),i=n(1925),u=n.n(i);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={};function p(e){var t=e.components,n=c(e,["components"]);return Object(l.mdx)("wrapper",d({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",d({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport Field from \'terra-form-field\';\nimport Input from \'terra-form-input\';\nimport Fieldset from \'terra-form-fieldset\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./FieldsetExamples.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nclass FieldsetExamples extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      first: \'\',\n      middle: \'\',\n      last: \'\',\n    };\n    this.handleFirstChange = this.handleFirstChange.bind(this);\n    this.handleMiddleChange = this.handleMiddleChange.bind(this);\n    this.handleLastChange = this.handleLastChange.bind(this);\n  }\n\n  handleFirstChange(event) {\n    this.setState({ first: event.target.value });\n  }\n\n  handleMiddleChange(event) {\n    this.setState({ middle: event.target.value });\n  }\n\n  handleLastChange(event) {\n    this.setState({ last: event.target.value });\n  }\n\n  render() {\n    return (\n      <div>\n        <Fieldset\n          type="checkbox"\n          legend="Give your full name here"\n          name="children_present"\n          value="children_present"\n          error="All fields must be filled out"\n          help="Families are eligible for family package plans"\n          required\n        >\n          <Field label="First" isInline required htmlFor="first">\n            <Input id="first" type="text" name="first" defaultValue="" onChange={this.handleFirstChange} />\n          </Field>\n          <Field label="Middle" isInline required htmlFor="middle">\n            <Input id="middle" type="text" name="middle" defaultValue="" onChange={this.handleMiddleChange} />\n          </Field>\n          <Field label="Last" isInline required htmlFor="last">\n            <Input id="last" type="text" name="last" defaultValue="" onChange={this.handleLastChange} />\n          </Field>\n        </Fieldset>\n        <hr />\n        <p>\n          Full Name Provided:\n          <span className={cx(\'fieldset-wrapper\')}>\n            {this.state.first}\n            {\' \'}\n            {this.state.middle}\n            {\' \'}\n            {this.state.last}\n          </span>\n        </p>\n        <br />\n      </div>\n    );\n  }\n}\nexport default FieldsetExamples;\n\n')))}p.isMDXComponent=!0;var f=n(883),m=n.n(f);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y={};function O(e){var t=e.components,n=h(e,["components"]);return Object(l.mdx)("wrapper",b({},y,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",b({parentName:"pre"},{className:"language-scss"}),":local { \n  .fieldset-wrapper {\n    display: inline-block;\n  }\n}\n\n")))}O.isMDXComponent=!0;var g=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:t||"Fieldset Examples",description:n,example:a.a.createElement(u.a,null),exampleCssSrc:a.a.createElement(O,null),exampleSrc:a.a.createElement(p,null),isExpanded:r})},v=n(886),j=n.n(v);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w=function(){return Object(l.mdx)(j.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(l.mdx)("wrapper",x({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(l.mdx)("wrapper",x({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Children the Field contains."))}return t.isMDXComponent=!0,t({})}},{name:"help",type:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(l.mdx)("wrapper",x({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(l.mdx)("wrapper",x({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Help element to display with other elements."))}return t.isMDXComponent=!0,t({})}},{name:"legend",type:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(l.mdx)("wrapper",x({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(l.mdx)("wrapper",x({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Legend for the input group."))}return t.isMDXComponent=!0,t({})}},{name:"legendAttrs",type:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(l.mdx)("wrapper",x({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(l.mdx)("wrapper",x({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Attributes to attach to the legend."))}return t.isMDXComponent=!0,t({})}},{name:"required",type:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(l.mdx)("wrapper",x({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(l.mdx)("wrapper",x({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Determines whether the fieldset is required."))}return t.isMDXComponent=!0,t({})}},{name:"isLegendHidden",type:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(l.mdx)("wrapper",x({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=_(t,["components"]);return Object(l.mdx)("wrapper",x({},e,r,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("p",null,"Whether or not the legend is visible. Use this prop to hide a legend while still creating it on the DOM for accessibility."))}return t.isMDXComponent=!0,t({})}}]})};function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var P={};function N(e){var t=e.components,n=F(e,["components"]);return Object(l.mdx)("wrapper",C({},P,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(o.a,{mdxType:"Badge"}),Object(l.mdx)("h1",{id:"terra-form-fieldset"},"Terra Form Fieldset"),Object(l.mdx)("p",null,"Generic form fieldset component which handles the layout of a standard form fieldset including help text, legend, value and widget placement."),Object(l.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Install with ",Object(l.mdx)("a",C({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-fieldset"))))),Object(l.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(l.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(l.mdx)("table",null,Object(l.mdx)("thead",{parentName:"table"},Object(l.mdx)("tr",{parentName:"thead"},Object(l.mdx)("th",C({parentName:"tr"},{align:null}),"Peer Dependency"),Object(l.mdx)("th",C({parentName:"tr"},{align:null}),"Version"))),Object(l.mdx)("tbody",{parentName:"table"},Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",C({parentName:"tr"},{align:null}),"react"),Object(l.mdx)("td",C({parentName:"tr"},{align:null}),"^16.8.5")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",C({parentName:"tr"},{align:null}),"react-dom"),Object(l.mdx)("td",C({parentName:"tr"},{align:null}),"^16.8.5")),Object(l.mdx)("tr",{parentName:"tbody"},Object(l.mdx)("td",C({parentName:"tr"},{align:null}),"react-intl"),Object(l.mdx)("td",C({parentName:"tr"},{align:null}),"^2.8.0")))),Object(l.mdx)("h2",{id:"usage"},"Usage"),Object(l.mdx)("pre",null,Object(l.mdx)("code",C({parentName:"pre"},{className:"language-jsx"}),"import Fieldset from 'terra-form-fieldset/lib/Fieldset';\n")),Object(l.mdx)("h2",{id:"component-features"},"Component Features"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",C({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",C({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",C({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",C({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Internationalization Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",C({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Localization Support")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",C({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#ltr--rtl-support"}),"LTR/RTL Support"))),Object(l.mdx)("h2",{id:"examples"},"Examples"),Object(l.mdx)(g,{mdxType:"FieldsetExamples"}),Object(l.mdx)("h2",{id:"form-fieldset-props"},"Form Fieldset Props"),Object(l.mdx)(w,{mdxType:"FormFieldsetPropsTable"}))}N.isMDXComponent=!0},887:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(17));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=i;t.default=u},896:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(0)),a=d(n(3)),l=d(n(10)),o=d(n(5)),i=d(n(7)),u=d(n(901));function d(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var a=v(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=o.default.bind(u.default),x={defaultValue:a.default.oneOfType([a.default.string,a.default.number]),disabled:a.default.bool,isIncomplete:a.default.bool,isInvalid:a.default.bool,onBlur:a.default.func,onChange:a.default.func,onFocus:a.default.func,name:a.default.string,pattern:a.default.string,refCallback:a.default.func,required:a.default.bool,type:a.default.string,value:a.default.oneOfType([a.default.string,a.default.number]),ariaLabel:a.default.string},_={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(i,e);var t,n,a,o=O(i);function i(){return b(this,i),o.apply(this,arguments)}return t=i,(n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,a=t.disabled,o=t.isIncomplete,i=t.isInvalid,u=t.onBlur,d=t.onChange,c=t.onFocus,b=t.name,h=t.pattern,y=t.refCallback,O=t.required,g=t.type,v=t.ariaLabel,x=t.value,_=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},m(t,["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","name","pattern","refCallback","required","type","ariaLabel","value"])),w=this.context,C=(0,l.default)(j("form-input",{"form-error":i},{"form-incomplete":o&&O&&!i},w.className),_.className);return _&&Object.prototype.hasOwnProperty.call(_,"aria-label")?e=v||_["aria-label"]:v&&(e=v),_["aria-label"]=e,O&&(_["aria-required"]="true"),void 0!==x?_.value=x:void 0!==n&&(_.defaultValue=n),_.placeholder&&(_.placeholder=null),r.default.createElement("input",s({},_,{ref:function(e){y&&y(e)},name:b,type:g,pattern:h,onBlur:u,onChange:d,onFocus:c,disabled:a,required:O,className:C}))}}])&&h(t.prototype,n),a&&h(t,a),i}(r.default.Component);w.propTypes=x,w.defaultProps=_,w.contextType=i.default,w.isInput=!0;var C=w;t.default=C},901:function(e,t,n){e.exports={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___2ILS5","orion-fusion-theme":"Input-module__orion-fusion-theme___33ZoB","form-input":"Input-module__form-input___1P2d6","form-error":"Input-module__form-error___j0fiD","form-incomplete":"Input-module__form-incomplete___3wIAu"}}}]);
//# sourceMappingURL=100-2a41b9f415e1faa92e86.js.map