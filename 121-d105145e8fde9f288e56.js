(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{1069:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),o=u(n(3)),i=u(n(971)),a=u(n(893));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var o=x(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v={children:o.default.node.isRequired,title:o.default.string.isRequired,level:o.default.oneOf([1,2,3,4,5,6]),onClose:o.default.func,onOpen:o.default.func,sectionHeaderAttrs:o.default.object,isAnimated:o.default.bool,isInitiallyOpen:o.default.bool,isTransparent:o.default.bool,isOpen:o.default.bool},y={level:2,sectionHeaderAttrs:{},isAnimated:!1,isInitiallyOpen:!1,isTransparent:!1,isOpen:void 0},j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(l,e);var t,n,o,u=b(l);function l(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);var n=(t=u.call(this,e)).props.isInitiallyOpen,r=void 0!==n&&n;return t.state={isOpen:r},t.handleOnClick=t.handleOnClick.bind(O(t)),t.wrapOnClick=t.wrapOnClick.bind(O(t)),t}return t=l,o=[{key:"getDerivedStateFromProps",value:function(e,t){return void 0!==e.isOpen&&t.isOpen!==e.isOpen?{isOpen:e.isOpen}:{isOpen:t.isOpen}}}],(n=[{key:"handleOnClick",value:function(e){e.preventDefault();var t=this.props,n=t.onOpen,r=t.onClose;void 0===t.isOpen&&(n&&!this.state.isOpen?n():r&&this.state.isOpen&&r(),this.setState((function(e){return{isOpen:!e.isOpen}})))}},{key:"wrapOnClick",value:function(e){var t=this;return function(n){t.handleOnClick(n),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.title,o=e.level,u=e.sectionHeaderAttrs,l=e.isAnimated,m=(e.isInitiallyOpen,e.isTransparent),f=(e.isOpen,e.onOpen,e.onClose,d(e,["children","title","level","sectionHeaderAttrs","isAnimated","isInitiallyOpen","isTransparent","isOpen","onOpen","onClose"])),b=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},u);return b.onClick=this.wrapOnClick(u.onClick),r.default.createElement("div",f,r.default.createElement(i.default,c({},b,{"aria-expanded":this.state.isOpen,isOpen:this.state.isOpen,level:o,title:n,isTransparent:m})),r.default.createElement(a.default,{isAnimated:l,isOpen:this.state.isOpen},t))}}])&&m(t.prototype,n),o&&m(t,o),l}(r.default.Component);j.propTypes=v,j.defaultProps=y;var h=j;t.default=h},1164:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),o=n.n(r),i=n(884),a=n.n(i),u=function(e){var t=e.url;return o.a.createElement(a.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-toggle-section-header",name:"terra-toggle-section-header",version:"2.41.0",url:t})}},1260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(3)),i=a(n(1069));function a(e){return e&&e.__esModule?e:{default:e}}var u={exampleProps:o.default.object.isRequired,children:o.default.node.isRequired},l=function(e){var t=e.exampleProps,n=e.children;return r.default.createElement("div",null,r.default.createElement(i.default,t,n))};l.propTypes=u;var c=l;t.default=c},2278:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(1260));function i(e){return e&&e.__esModule?e:{default:e}}var a={title:"Default Example"},u=function(){return r.default.createElement(o.default,{exampleProps:a},r.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))};t.default=u},2279:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(1260));function i(e){return e&&e.__esModule?e:{default:e}}var a={title:"Animated Example",isAnimated:!0},u=function(){return r.default.createElement(o.default,{exampleProps:a},r.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))};t.default=u},2280:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(1260));function i(e){return e&&e.__esModule?e:{default:e}}var a={title:"Transparent Example",isTransparent:!0},u=function(){return r.default.createElement(o.default,{exampleProps:a},r.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),r.default.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))};t.default=u},2970:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var r=n(0),o=n.n(r),i=n(289),a=n(1164),u=n(2278),l=n.n(u);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s={};function d(e){var t=e.components,n=p(e,["components"]);return Object(i.mdx)("wrapper",c({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport ToggleSectionHeaderExampleTemplate from 'terra-toggle-section-header/lib/terra-dev-site/doc/example/ToggleSectionHeaderExampleTemplate';\n\nconst componentProps = {\n  title: 'Default Example',\n};\n\nconst DefaultToggleSectionHeader = () => (\n  <ToggleSectionHeaderExampleTemplate exampleProps={componentProps}>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n  </ToggleSectionHeaderExampleTemplate>\n);\n\nexport default DefaultToggleSectionHeader;\n\n")))}d.isMDXComponent=!0;var m=n(883),f=n.n(m),b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"Default Toggle Section Header",description:n,example:o.a.createElement(l.a,null),exampleSrc:o.a.createElement(d,null),isExpanded:r})},g=n(2279),O=n.n(g);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var y={};function j(e){var t=e.components,n=v(e,["components"]);return Object(i.mdx)("wrapper",x({},y,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",x({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport ToggleSectionHeaderExampleTemplate from 'terra-toggle-section-header/lib/terra-dev-site/doc/example/ToggleSectionHeaderExampleTemplate';\n\nconst componentProps = {\n  title: 'Animated Example',\n  isAnimated: true,\n};\n\nconst AnimatedToggleSectionHeader = () => (\n  <ToggleSectionHeaderExampleTemplate exampleProps={componentProps}>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n  </ToggleSectionHeaderExampleTemplate>\n);\n\nexport default AnimatedToggleSectionHeader;\n\n")))}j.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"Animated Toggle Section Header",description:n,example:o.a.createElement(O.a,null),exampleSrc:o.a.createElement(j,null),isExpanded:r})},q=n(2280),T=n.n(q);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var D={};function P(e){var t=e.components,n=E(e,["components"]);return Object(i.mdx)("wrapper",w({},D,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",w({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport ToggleSectionHeaderExampleTemplate from 'terra-toggle-section-header/lib/terra-dev-site/doc/example/ToggleSectionHeaderExampleTemplate';\n\nconst componentProps = {\n  title: 'Transparent Example',\n  isTransparent: true,\n};\n\nconst DefaultToggleSectionHeader = () => (\n  <ToggleSectionHeaderExampleTemplate exampleProps={componentProps}>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n  </ToggleSectionHeaderExampleTemplate>\n);\n\nexport default DefaultToggleSectionHeader;\n\n")))}P.isMDXComponent=!0;var M=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"Transparent Toggle Section Header",description:n,example:o.a.createElement(T.a,null),exampleSrc:o.a.createElement(P,null),isExpanded:r})},S=n(886),L=n.n(S);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var _=function(){return Object(i.mdx)(L.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(i.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(i.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Content in the body of the toggle section header component that will be expanded or hidden."))}return t.isMDXComponent=!0,t({})}},{name:"title",type:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(i.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(i.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Text to be displayed in the section header."))}return t.isMDXComponent=!0,t({})}},{name:"level",type:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(i.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"enum"),Object(i.mdx)("pre",null,Object(i.mdx)("code",C({parentName:"pre"},{className:"language-json"}),'[\n "1",\n "2",\n "3",\n "4",\n "5",\n "6"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"2",description:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(i.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Sets the heading level. One of h1, h2, h3, h4, h5, or h6."))}return t.isMDXComponent=!0,t({})}},{name:"onClose",type:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(i.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(i.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Callback function triggered when toggle-section-header is closed."))}return t.isMDXComponent=!0,t({})}},{name:"onOpen",type:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(i.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(i.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Callback function triggered when toggle-section-header is opened."))}return t.isMDXComponent=!0,t({})}},{name:"sectionHeaderAttrs",type:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(i.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(i.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Used to set props and HTML attributes on the underlying section-header."))}return t.isMDXComponent=!0,t({})}},{name:"isAnimated",type:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(i.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(i.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Sets the toggle-section-header to be animated when it is opened or closed."))}return t.isMDXComponent=!0,t({})}},{name:"isInitiallyOpen",type:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(i.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(i.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Sets the toggle-section-header initial state to open."))}return t.isMDXComponent=!0,t({})}},{name:"isTransparent",type:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(i.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(i.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Sets the background of the section header to transparent."))}return t.isMDXComponent=!0,t({})}},{name:"isOpen",type:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(i.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=X(t,["components"]);return Object(i.mdx)("wrapper",C({},e,r,{components:n,mdxType:"MDXLayout"}),Object(i.mdx)("p",null,"Programmatically toggle the toggle-section-header component."))}return t.isMDXComponent=!0,t({})}}]})};function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var k={};function A(e){var t=e.components,n=N(e,["components"]);return Object(i.mdx)("wrapper",H({},k,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(a.a,{mdxType:"Badge"}),Object(i.mdx)("h1",{id:"terra-toggle-section-header"},"Terra Toggle Section Header"),Object(i.mdx)("p",null,"Toggle section header component that transitions content in and out with a click."),Object(i.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Install with ",Object(i.mdx)("a",H({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"npm install terra-toggle-section-header"))))),Object(i.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(i.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",H({parentName:"tr"},{align:null}),"Peer Dependency"),Object(i.mdx)("th",H({parentName:"tr"},{align:null}),"Version"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",H({parentName:"tr"},{align:null}),"react"),Object(i.mdx)("td",H({parentName:"tr"},{align:null}),"^16.8.5")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",H({parentName:"tr"},{align:null}),"react-dom"),Object(i.mdx)("td",H({parentName:"tr"},{align:null}),"^16.8.5")))),Object(i.mdx)("h2",{id:"usage"},"Usage"),Object(i.mdx)("pre",null,Object(i.mdx)("code",H({parentName:"pre"},{className:"language-jsx"}),"import ToggleSectionHeader from 'terra-toggle-section-header';\n")),Object(i.mdx)("h2",{id:"component-features"},"Component Features"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",H({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",H({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#ltr--rtl-support"}),"LTR/RTL Support"))),Object(i.mdx)("h2",{id:"examples"},"Examples"),Object(i.mdx)(b,{title:"Default",mdxType:"DefaultToggleSectionHeader"}),Object(i.mdx)(h,{title:"Animated",mdxType:"AnimatedToggleSectionHeader"}),Object(i.mdx)(M,{title:"Transparent",mdxType:"TransparentToggleSectionHeader"}),Object(i.mdx)("h2",{id:"toggle-section-header-props"},"Toggle Section Header Props"),Object(i.mdx)(_,{mdxType:"ToggleSectionHeaderPropsTable"}))}A.isMDXComponent=!0},887:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(17));function i(e){return e&&e.__esModule?e:{default:e}}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){var t=a({},e);return r.default.createElement(o.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var l=u;t.default=l},893:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),o=l(n(3)),i=l(n(5)),a=l(n(894)),u=l(n(895));function l(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.default.bind(u.default),d={children:o.default.node.isRequired,isAnimated:o.default.bool,isOpen:o.default.bool},m=function(e){var t,n=e.isAnimated,o=e.isOpen,i=e.children,u=p(e,["isAnimated","isOpen","children"]),l=o?"auto":0;return t=n?r.default.createElement(a.default,{duration:250,height:l},i):o&&i,r.default.createElement("div",c({},u,{className:s("toggle",u.className),"aria-hidden":!o}),t)};m.propTypes=d,m.defaultProps={isAnimated:!1,isOpen:!1};var f=m;t.default=f},895:function(e,t,n){e.exports={toggle:"Toggle-module__toggle___3Y29L"}}}]);
//# sourceMappingURL=121-d105145e8fde9f288e56.js.map