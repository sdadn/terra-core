(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{2130:function(e,t,n){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(0)),a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var l=o?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(n,a,l):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(83)),l=s(n(900)),c=s(n(5)),i=s(n(936));function u(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function s(e){return e&&e.__esModule?e:{default:e}}var p=c.default.bind(i.default),m=function(){return o.default.createElement(a.default,{role:"listbox","aria-label":"example-label"},o.default.createElement(a.Item,{key:"default"},o.default.createElement(l.default,{title:"Default ListItem",className:p("placeholder")})),o.default.createElement(a.Item,{key:"chevron",hasChevron:!0},o.default.createElement(l.default,{title:"Chevron ListItem",className:p("placeholder")})),o.default.createElement(a.Item,{key:"selectable",isSelectable:!0},o.default.createElement(l.default,{title:"Selectable ListItem",className:p("placeholder")})),o.default.createElement(a.Item,{key:"selected",isSelectable:!0,isSelected:!0},o.default.createElement(l.default,{title:"Selected ListItem",className:p("placeholder")})))};t.default=m},3006:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return D}));var r=n(0),o=n.n(r),a=n(289),l=n(916),c=n(2130),i=n.n(c);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p={};function m(e){var t=e.components,n=s(e,["components"]);return Object(a.mdx)("wrapper",u({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport List, { Item } from \'terra-list/lib/index\';\nimport Placeholder from \'terra-doc-template/lib/Placeholder\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./ListDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ListSectionExample = () => (\n  <List role="listbox" aria-label="example-label">\n    <Item\n      key="default"\n    >\n      <Placeholder title="Default ListItem" className={cx(\'placeholder\')} />\n    </Item>\n    <Item\n      key="chevron"\n      hasChevron\n    >\n      <Placeholder title="Chevron ListItem" className={cx(\'placeholder\')} />\n    </Item>\n    <Item\n      key="selectable"\n      isSelectable\n    >\n      <Placeholder title="Selectable ListItem" className={cx(\'placeholder\')} />\n    </Item>\n    <Item\n      key="selected"\n      isSelectable\n      isSelected\n    >\n      <Placeholder title="Selected ListItem" className={cx(\'placeholder\')} />\n    </Item>\n  </List>\n);\n\nexport default ListSectionExample;\n\n')))}m.isMDXComponent=!0;var d=n(883),f=n.n(d),b=n(937),y=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"List Item",description:n,example:o.a.createElement(i.a,null),exampleCssSrc:o.a.createElement(b.a,null),exampleSrc:o.a.createElement(m,null),isExpanded:r})},v=n(886),h=n.n(v);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var j=function(){return Object(a.mdx)(h.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",O({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"[]",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",O({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The content element to be placed inside the list item for display."))}return t.isMDXComponent=!0,t({})}},{name:"hasChevron",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",O({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",O({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the list item has a disclosure indicator presented."))}return t.isMDXComponent=!0,t({})}},{name:"isSelected",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",O({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",O({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the list item should have selection styles applied."))}return t.isMDXComponent=!0,t({})}},{name:"isSelectable",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",O({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",O({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the list item should have styles to indicate the item is selectable."))}return t.isMDXComponent=!0,t({})}},{name:"metaData",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",O({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",O({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))}return t.isMDXComponent=!0,t({})}},{name:"onSelect",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",O({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",O({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)"))}return t.isMDXComponent=!0,t({})}},{name:"refCallback",type:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",O({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=x(t,["components"]);return Object(a.mdx)("wrapper",O({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Function callback for the ref of the li."))}return t.isMDXComponent=!0,t({})}}]})};function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var L={};function D(e){var t=e.components,n=w(e,["components"]);return Object(a.mdx)("wrapper",g({},L,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(l.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"list-item"},"List Item"),Object(a.mdx)("p",null,"The list item provides a pattern for selection/selectability for li surrounded child content. Whenever, the list item has a prop ",Object(a.mdx)("inlineCode",{parentName:"p"},"isSelectable=true")," then ",Object(a.mdx)("inlineCode",{parentName:"p"},"aria-label")," must be provided to List for accessibility.  The onSelect event is the primary means for interaction, as it yields the associated metaData when valid selection occurs, though individual onClick and onKeyDown events can be applied through the use of customProps if greater granularity is required."),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",g({parentName:"pre"},{className:"language-jsx"}),"import List, { Item } from 'terra-list/lib/List';\n")),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(y,{mdxType:"ListItemExample"}),Object(a.mdx)("h2",{id:"list-item-props"},"List Item Props"),Object(a.mdx)(j,{mdxType:"ListItemPropsTable"}))}D.isMDXComponent=!0},887:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(17));function a(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c=function(e){var t=l({},e);return r.default.createElement(o.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=c;t.default=i},900:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(0)),o=c(n(3)),a=c(n(5)),l=c(n(909));function c(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.default.bind(l.default),p={variant:o.default.oneOf(["light","dark"]),title:o.default.string},m=function(e){var t=e.variant,n=e.title,o=u(e,["variant","title"]),a=s(["placeholder",o.className]),l=s(["inner","is-".concat(t)]);return r.default.createElement("div",i({},o,{className:a}),r.default.createElement("div",{className:l},r.default.createElement("h2",null,n)))};m.propTypes=p,m.defaultProps={variant:"dark",title:""};var d=m;t.default=d},909:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___tuGWe",inner:"Placeholder-module__inner___1irlA","is-light":"Placeholder-module__is-light___3LkLU","is-dark":"Placeholder-module__is-dark___5pLAg"}},916:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),o=n.n(r),a=n(884),l=n.n(a),c=function(e){var t=e.url;return o.a.createElement(l.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-list",name:"terra-list",version:"4.37.0",url:t})}},936:function(e,t,n){e.exports={placeholder:"ListDocCommon-module__placeholder___cpXI4"}},937:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(0);var r=n(289);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l={};function c(e){var t=e.components,n=a(e,["components"]);return Object(r.mdx)("wrapper",o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",o({parentName:"pre"},{className:"language-scss"}),":local {\n  .placeholder {\n    height: 50px;\n  }\n}\n\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=138-c6b47e3fc53cde0a1771.js.map