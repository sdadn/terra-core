(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{1151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(0),o=n.n(r),a=n(884),i=n.n(a),p=function(e){var t=e.url;return o.a.createElement(i.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-responsive-element",name:"terra-responsive-element",version:"5.23.0",url:t})}},2159:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(0)),a=p(n(900)),i=p(n(294));function p(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,p=e[Symbol.iterator]();!(r=(i=p.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==p.return||p.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=function(){var e=l((0,o.useState)(""),2),t=e[0],n=e[1];return o.default.createElement(i.default,{onChange:function(e){return n(e)}},o.default.createElement(a.default,{title:t}))};t.default=s},2160:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=o?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(n,a,i):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(0)),a=p(n(900)),i=p(n(294));function p(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,a=void 0;try{for(var i,p=e[Symbol.iterator]();!(r=(i=p.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==p.return||p.return()}finally{if(o)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=function(){var e=l((0,o.useState)(""),2),t=e[0],n=e[1];return o.default.createElement(i.default,{onResize:function(e){return n(e)}},o.default.createElement(a.default,{title:t}))};t.default=s},2986:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var r=n(0),o=n.n(r),a=n(289),i=n(1151),p=n(2159),c=n.n(p);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s={};function m(e){var t=e.components,n=u(e,["components"]);return Object(a.mdx)("wrapper",l({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",l({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport ResponsiveElement from 'terra-responsive-element';\n\nconst BreakpointExample = () => {\n  const [breakpoint, setBreakpoint] = useState('');\n\n  return (\n    <ResponsiveElement onChange={value => setBreakpoint(value)}>\n      <Placeholder title={breakpoint} />\n    </ResponsiveElement>\n  );\n};\n\nexport default BreakpointExample;\n\n")))}m.isMDXComponent=!0;var d=n(883),f=n.n(d),b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"Breakpoint Example",description:n,example:o.a.createElement(c.a,null),exampleSrc:o.a.createElement(m,null),isExpanded:r})},y=n(2160),v=n.n(y);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var j={};function h(e){var t=e.components,n=x(e,["components"]);return Object(a.mdx)("wrapper",O({},j,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",O({parentName:"pre"},{className:"language-jsx"}),"import React, { useState } from 'react';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport ResponsiveElement from 'terra-responsive-element';\n\nconst ResizeExample = () => {\n  const [width, setWidth] = useState('');\n\n  return (\n    <ResponsiveElement onResize={value => setWidth(value)}>\n      <Placeholder title={width} />\n    </ResponsiveElement>\n  );\n};\n\nexport default ResizeExample;\n\n")))}h.isMDXComponent=!0;var g=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"Resize Example",description:n,example:o.a.createElement(v.a,null),exampleSrc:o.a.createElement(h,null),isExpanded:r})},w=n(886),M=n.n(w);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var E=function(){return Object(a.mdx)(M.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=k(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=k(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Child nodes."))}return t.isMDXComponent=!0,t({})}},{name:"onChange",type:function(){var e={};function t(t){var n=t.components,r=k(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=k(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"A callback function invoked when the breakpoint size changes. ",Object(a.mdx)("inlineCode",{parentName:"p"},"onChange(<string>breakpoint)")))}return t.isMDXComponent=!0,t({})}},{name:"onResize",type:function(){var e={};function t(t){var n=t.components,r=k(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=k(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"A callback function invoked when the responsive target resizes. ",Object(a.mdx)("inlineCode",{parentName:"p"},"onResize(<number>width)")))}return t.isMDXComponent=!0,t({})}},{name:"tiny",type:function(){var e={};function t(t){var n=t.components,r=k(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=k(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"[Deprecated]"," An element to be displayed at tiny breakpoints."))}return t.isMDXComponent=!0,t({})}},{name:"small",type:function(){var e={};function t(t){var n=t.components,r=k(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=k(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"[Deprecated]"," An element to be displayed at small breakpoints."))}return t.isMDXComponent=!0,t({})}},{name:"medium",type:function(){var e={};function t(t){var n=t.components,r=k(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=k(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"[Deprecated]"," An element to be displayed at medium breakpoints."))}return t.isMDXComponent=!0,t({})}},{name:"large",type:function(){var e={};function t(t){var n=t.components,r=k(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=k(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"[Deprecated]"," An element to be displayed at large breakpoints."))}return t.isMDXComponent=!0,t({})}},{name:"huge",type:function(){var e={};function t(t){var n=t.components,r=k(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=k(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"[Deprecated]"," An element to be displayed at huge breakpoints."))}return t.isMDXComponent=!0,t({})}},{name:"enormous",type:function(){var e={};function t(t){var n=t.components,r=k(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=k(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"[Deprecated]"," An element to be displayed at enormous breakpoints."))}return t.isMDXComponent=!0,t({})}},{name:"responsiveTo",type:function(){var e={};function t(t){var n=t.components,r=k(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"enum"),Object(a.mdx)("pre",null,Object(a.mdx)("code",D({parentName:"pre"},{className:"language-json"}),'[\n "window",\n "parent"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'parent'",description:function(){var e={};function t(t){var n=t.components,r=k(t,["components"]);return Object(a.mdx)("wrapper",D({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The viewport the element will be responsive to. One of ",Object(a.mdx)("inlineCode",{parentName:"p"},"window")," or ",Object(a.mdx)("inlineCode",{parentName:"p"},"parent"),"."))}return t.isMDXComponent=!0,t({})}}]})};function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var S={};function N(e){var t=e.components,n=X(e,["components"]);return Object(a.mdx)("wrapper",P({},S,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(i.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-responsive-element"},"Terra Responsive Element"),Object(a.mdx)("p",null,"The Responsive Element provides a way to conditionally render components during breakpoint or resize changes."),Object(a.mdx)("p",null,"The Responsive Element can be set to be responsive to the parent of the component or the window. By default, event listeners will be bound to the immediate parent of the component and invoke the onChange and onResize callback functions as a result of resize changes to the bound target."),Object(a.mdx)("h2",{id:"additional-notes"},"Additional Notes"),Object(a.mdx)("p",null,"The Responsive Element observes the total width of the bound container. Padding and borders are included in the calculation to determine the available width. Margins are not included. For breakpoint accuracy it is not recommended to set padding on the parent container when responsiveTo is set to parent. For more details on how box-sizing affects the dom box model see: ",Object(a.mdx)("a",P({parentName:"p"},{href:"https://css-tricks.com/almanac/properties/b/box-sizing/"}),"https://css-tricks.com/almanac/properties/b/box-sizing/")),Object(a.mdx)("p",null,"For consistency, breakpoint ranges are inherited from ",Object(a.mdx)("a",P({parentName:"p"},{href:"https://engineering.cerner.com/terra-ui/#/components/terra-breakpoints/breakpoints/about"}),"terra-breakpoints"),"."),Object(a.mdx)("p",null,"For the uncontrolled version of this component it is not necessary to set each breakpoint. If a breakpoint is not set the component will look at each successive smaller breakpoint until one is found."),Object(a.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Install with ",Object(a.mdx)("a",P({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install terra-responsive-element"))))),Object(a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(a.mdx)("table",null,Object(a.mdx)("thead",{parentName:"table"},Object(a.mdx)("tr",{parentName:"thead"},Object(a.mdx)("th",P({parentName:"tr"},{align:null}),"Peer Dependency"),Object(a.mdx)("th",P({parentName:"tr"},{align:null}),"Version"))),Object(a.mdx)("tbody",{parentName:"table"},Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",P({parentName:"tr"},{align:null}),"react"),Object(a.mdx)("td",P({parentName:"tr"},{align:null}),"^16.8.5")),Object(a.mdx)("tr",{parentName:"tbody"},Object(a.mdx)("td",P({parentName:"tr"},{align:null}),"react-dom"),Object(a.mdx)("td",P({parentName:"tr"},{align:null}),"^16.8.5")))),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",P({parentName:"pre"},{className:"language-jsx"}),"import ResponsiveElement from 'terra-responsive-element';\n")),Object(a.mdx)("h2",{id:"component-features"},"Component Features"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(b,{title:"Responsive Breakpoints",description:"An example demonstrating the callback events during a breakpoint change.",mdxType:"BreakpointExample"}),Object(a.mdx)(g,{title:"Responsive Resizing",description:"An example demonstrating the callback events during a resize.",mdxType:"ResizeExample"}),Object(a.mdx)("h2",{id:"responsive-element-props"},"Responsive Element Props"),Object(a.mdx)(E,{mdxType:"ResponsiveElementPropsTable"}))}N.isMDXComponent=!0},887:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(17));function a(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var p=function(e){var t=i({},e);return r.default.createElement(o.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};p.displayName="IconChevronLeft",p.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=p;t.default=c},900:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(0)),o=p(n(3)),a=p(n(5)),i=p(n(909));function p(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.default.bind(i.default),s={variant:o.default.oneOf(["light","dark"]),title:o.default.string},m=function(e){var t=e.variant,n=e.title,o=l(e,["variant","title"]),a=u(["placeholder",o.className]),i=u(["inner","is-".concat(t)]);return r.default.createElement("div",c({},o,{className:a}),r.default.createElement("div",{className:i},r.default.createElement("h2",null,n)))};m.propTypes=s,m.defaultProps={variant:"dark",title:""};var d=m;t.default=d},909:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___tuGWe",inner:"Placeholder-module__inner___1irlA","is-light":"Placeholder-module__is-light___3LkLU","is-dark":"Placeholder-module__is-dark___5pLAg"}}}]);
//# sourceMappingURL=233-30da948d371d0b86ac37.js.map