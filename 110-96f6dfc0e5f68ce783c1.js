(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{1011:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n.n(r),a=n(884),l=n.n(a),c=function(e){var t=e.url;return o.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-action-footer",name:"terra-action-footer",version:"2.52.0",url:t})}},1012:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=c(n(5)),a=c(n(3)),l=c(n(1097));function c(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(l.default),u={children:a.default.node.isRequired},p=function(e){var t=e.children;return r.default.createElement("div",{className:i("content-wrapper")},t)};p.propTypes=u;var f=p;t.default=f},1033:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(3)),a=i(n(5)),l=i(n(305)),c=i(n(1048));function i(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=a.default.bind(c.default),d={center:o.default.node},m={center:void 0},s=function(e){var t=e.center,n=p(e,["center"]),o=f(["centered-action-footer",n.className]);return r.default.createElement(l.default,u({},n,{className:o}),t)};s.propTypes=d,s.defaultProps=m;var b=s;t.default=b},1048:function(e,t,n){e.exports={"centered-action-footer":"CenteredActionFooter-module__centered-action-footer___3J56e"}},1097:function(e,t,n){e.exports={"content-wrapper":"ExampleTemplate__content-wrapper___4Jde5"}},1582:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=c(n(295)),a=c(n(1033)),l=c(n(1012));function c(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(l.default,null,r.default.createElement(a.default,{center:r.default.createElement(o.default,{href:"#"},"A link")}))}},1583:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(46)),a=i(n(296)),l=i(n(1033)),c=i(n(1012));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(c.default,null,r.default.createElement(l.default,{center:r.default.createElement(r.default.Fragment,null,r.default.createElement(a.default,{isInlineBlock:!0,marginRight:"medium"},r.default.createElement(o.default,{text:"Action One"})),r.default.createElement(o.default,{text:"Action Two"}))}))}},2982:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return C}));var r=n(0),o=n.n(r),a=n(289),l=n(1011),c=n(1582),i=n.n(c);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f={};function d(e){var t=e.components,n=p(e,["components"]);return Object(a.mdx)("wrapper",u({},f,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Hyperlink from 'terra-hyperlink';\nimport CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <CenteredActionFooter\n      center={<Hyperlink href=\"#\">A link</Hyperlink>}\n    />\n  </ExampleTemplate>\n);\n\n")))}d.isMDXComponent=!0;var m=n(883),s=n.n(m),b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(s.a,{title:t||"Single Action",description:n,example:o.a.createElement(i.a,null),exampleSrc:o.a.createElement(d,null),isExpanded:r})},O=n(1583),y=n.n(O);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var j={};function g(e){var t=e.components,n=x(e,["components"]);return Object(a.mdx)("wrapper",v({},j,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",v({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\nimport CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <CenteredActionFooter\n      center={(\n        <React.Fragment>\n          <Spacer isInlineBlock marginRight=\"medium\">\n            <Button text=\"Action One\" />\n          </Spacer>\n          <Button text=\"Action Two\" />\n        </React.Fragment>\n      )}\n    />\n  </ExampleTemplate>\n);\n\n")))}g.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(s.a,{title:t||"Multiple Actions",description:n,example:o.a.createElement(y.a,null),exampleSrc:o.a.createElement(g,null),isExpanded:r})},E=n(886),w=n.n(E);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var P=function(){return Object(a.mdx)(w.a,{rows:[{name:"center",type:function(){var e={};function t(t){var n=t.components,r=A(t,["components"]);return Object(a.mdx)("wrapper",_({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=A(t,["components"]);return Object(a.mdx)("wrapper",_({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Actions to be displayed in the center socket"))}return t.isMDXComponent=!0,t({})}}]})};function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var k={};function C(e){var t=e.components,n=M(e,["components"]);return Object(a.mdx)("wrapper",T({},k,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(l.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-centered-action-footer"},"Terra Centered Action Footer"),Object(a.mdx)("p",null,"The centered action footer component is a footer bar that contains a single, centered socket for placing actionable items such as buttons and hyperlinks. If no actions are provided, the footer bar collapses to a themeable height and maintains the top border."),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",T({parentName:"pre"},{className:"language-jsx"}),"import CenteredActionFooter from 'terra-action-footer/lib/CenteredActionFooter';\n")),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(b,{title:"Single Action",mdxType:"SingleActionExample"}),Object(a.mdx)(h,{title:"Multiple Actions",mdxType:"MultipleActionsExample"}),Object(a.mdx)("h2",{id:"centered-action-footer-props"},"Centered Action Footer Props"),Object(a.mdx)(P,{mdxType:"CenteredActionFooterPropsTable"}))}C.isMDXComponent=!0},887:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(17));function a(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e){var t=l({},e);return r.default.createElement(o.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=c;t.default=i}}]);
//# sourceMappingURL=110-96f6dfc0e5f68ce783c1.js.map