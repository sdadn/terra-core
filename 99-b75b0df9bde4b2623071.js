(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{1198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(0))&&r.__esModule?r:{default:r};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var a=m(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){return function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(m,t);var n,r,o,p=u(m);function m(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),(t=p.call(this,e)).handleOnSelect=t.handleOnSelect.bind(s(t)),t.state={colorVariant:"auto"},t}return n=m,(r=[{key:"handleOnSelect",value:function(e){this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e.target.name,e.target.value))}},{key:"render",value:function(){return a.default.createElement("div",null,a.default.createElement(e,i({color:this.state.colorVariant},this.props)),a.default.createElement("p",null,a.default.createElement("label",{htmlFor:"colorVariant"},"Select a color variant:")),a.default.createElement("select",{id:"colorVariant",name:"colorVariant",value:this.state.colorVariant,onChange:this.handleOnSelect},a.default.createElement("option",{value:"auto"},"Auto"),a.default.createElement("option",{value:"neutral"},"Neutral"),a.default.createElement("option",{value:"one"},"One"),a.default.createElement("option",{value:"two"},"Two"),a.default.createElement("option",{value:"three"},"Three"),a.default.createElement("option",{value:"four"},"Four"),a.default.createElement("option",{value:"five"},"Five"),a.default.createElement("option",{value:"six"},"Six"),a.default.createElement("option",{value:"seven"},"Seven"),a.default.createElement("option",{value:"eight"},"Eight"),a.default.createElement("option",{value:"nine"},"Nine"),a.default.createElement("option",{value:"ten"},"Ten")))}}])&&l(n.prototype,r),o&&l(n,o),m}(a.default.Component)};t.default=d},1612:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(143));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement(a.default,{alt:"The Last Airbender",initials:"JS"})};t.default=i},1613:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(143));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement(a.default,{alt:"John",initials:"J"})};t.default=i},1614:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(143));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement(a.default,{alt:"John Doe",initials:"JD"})};t.default=i},1615:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(143)),o=i(n(973));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement(a.default,{image:o.default,initials:"JS",alt:"Deep Space"})};t.default=l},1616:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(143));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return r.default.createElement(a.default,{alt:"Patient #1",isDeceased:!0,initials:"JS"})};t.default=i},1617:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),a=i(n(143)),o=i(n(973));function i(e){return e&&e.__esModule?e:{default:e}}var l=function(){return r.default.createElement(a.default,{alt:"User",image:o.default,size:"2em",initials:"JS"})};t.default=l},1618:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),a=l(n(3)),o=l(n(143)),i=l(n(1198));function l(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u={color:a.default.string},p=function(e){var t=c({},e);return r.default.createElement(o.default,{alt:"Joe Shane",initials:"JS",color:t.color})};p.propTypes=u;var s=(0,i.default)(p);t.default=s},2938:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return me}));var r=n(0),a=n.n(r),o=n(289),i=n(981),l=n(1612),c=n.n(l);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={};function m(e){var t=e.components,n=p(e,["components"]);return Object(o.mdx)("wrapper",u({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",u({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Avatar from 'terra-avatar';\n\nconst AvatarUser = () => (\n  <Avatar alt=\"The Last Airbender\" initials=\"JS\" />\n);\n\nexport default AvatarUser;\n\n")))}m.isMDXComponent=!0;var d=n(883),f=n.n(d),v=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Avatar User",description:n,example:a.a.createElement(c.a,null),exampleSrc:a.a.createElement(m,null),isExpanded:r})},b=n(1613),O=n.n(b);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j={};function g(e){var t=e.components,n=x(e,["components"]);return Object(o.mdx)("wrapper",y({},j,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",y({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Avatar from 'terra-avatar';\n\nconst AvatarOneInitial = () => (\n  <Avatar alt=\"John\" initials=\"J\" />\n);\n\nexport default AvatarOneInitial;\n\n")))}g.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Avatar One Initial",description:n,example:a.a.createElement(O.a,null),exampleSrc:a.a.createElement(g,null),isExpanded:r})},w=n(1614),E=n.n(w);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var D={};function A(e){var t=e.components,n=S(e,["components"]);return Object(o.mdx)("wrapper",M({},D,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",M({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Avatar from 'terra-avatar';\n\nconst AvatarTwoInitials = () => (\n  <Avatar alt=\"John Doe\" initials=\"JD\" />\n);\n\nexport default AvatarTwoInitials;\n\n")))}A.isMDXComponent=!0;var T=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Avatar Two Initials",description:n,example:a.a.createElement(E.a,null),exampleSrc:a.a.createElement(A,null),isExpanded:r})},C=n(1615),P=n.n(C);function X(){return(X=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _={};function I(e){var t=e.components,n=N(e,["components"]);return Object(o.mdx)("wrapper",X({},_,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",X({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Avatar from 'terra-avatar';\nimport exampleAvatarImage from '../../../assets/150x150.jpg';\n\nconst AvatarImage = () => (\n  <Avatar image={exampleAvatarImage} initials=\"JS\" alt=\"Deep Space\" />\n);\n\nexport default AvatarImage;\n\n")))}I.isMDXComponent=!0;var L=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Avatar Image",description:n,example:a.a.createElement(P.a,null),exampleSrc:a.a.createElement(I,null),isExpanded:r})},V=n(1616),J=n.n(V);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var z={};function q(e){var t=e.components,n=R(e,["components"]);return Object(o.mdx)("wrapper",k({},z,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",k({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Avatar from 'terra-avatar';\n\nconst AvatarImage = () => (\n  <Avatar alt=\"Patient #1\" isDeceased initials=\"JS\" />\n);\n\nexport default AvatarImage;\n\n")))}q.isMDXComponent=!0;var U=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Avatar Is Deceased",description:n,example:a.a.createElement(J.a,null),exampleSrc:a.a.createElement(q,null),isExpanded:r})},F=n(1617),W=n.n(F);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function G(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var H={};function K(e){var t=e.components,n=G(e,["components"]);return Object(o.mdx)("wrapper",B({},H,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",B({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Avatar from 'terra-avatar';\nimport exampleAvatarImage from '../../../assets/150x150.jpg';\n\nconst AvatarSize = () => (\n  <Avatar alt=\"User\" image={exampleAvatarImage} size=\"2em\" initials=\"JS\" />\n);\n\nexport default AvatarSize;\n\n")))}K.isMDXComponent=!0;var Q=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Avatar Size",description:n,example:a.a.createElement(W.a,null),exampleSrc:a.a.createElement(K,null),isExpanded:r})},Y=n(1618),Z=n.n(Y);function $(){return($=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var te={};function ne(e){var t=e.components,n=ee(e,["components"]);return Object(o.mdx)("wrapper",$({},te,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",$({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport PropTypes from 'prop-types';\nimport Avatar from 'terra-avatar';\nimport ColorVariantsWrapper from 'terra-avatar/lib/terra-dev-site/doc/example/common/ColorVariantsWrapper';\n\nconst propTypes = { color: PropTypes.string };\n\nconst AvatarColorVariants = ({\n  ...props\n}) => (\n  <Avatar alt=\"Joe Shane\" initials=\"JS\" color={props.color} />\n);\n\nAvatarColorVariants.propTypes = propTypes;\nexport default ColorVariantsWrapper(AvatarColorVariants);\n\n")))}ne.isMDXComponent=!0;var re=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(f.a,{title:t||"Avatar Color Variants",description:n,example:a.a.createElement(Z.a,null),exampleSrc:a.a.createElement(ne,null),isExpanded:r})},ae=n(886),oe=n.n(ae);function ie(){return(ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function le(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ce=function(){return Object(o.mdx)(oe.a,{rows:[{name:"alt",type:function(){var e={};function t(t){var n=t.components,r=le(t,["components"]);return Object(o.mdx)("wrapper",ie({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=le(t,["components"]);return Object(o.mdx)("wrapper",ie({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Specifies the alternative text for the image."))}return t.isMDXComponent=!0,t({})}},{name:"color",type:function(){var e={};function t(t){var n=t.components,r=le(t,["components"]);return Object(o.mdx)("wrapper",ie({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"enum"),Object(o.mdx)("pre",null,Object(o.mdx)("code",ie({parentName:"pre"},{className:"language-json"}),'[\n "auto",\n "neutral",\n "one",\n "two",\n "three",\n "four",\n "five",\n "six",\n "seven",\n "eight",\n "nine",\n "ten"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"'auto'",description:function(){var e={};function t(t){var n=t.components,r=le(t,["components"]);return Object(o.mdx)("wrapper",ie({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Sets the background color. Defaults to ",Object(o.mdx)("inlineCode",{parentName:"p"},"auto"),". Accepted color variants are theme specific.\nOne of: ",Object(o.mdx)("inlineCode",{parentName:"p"},"'auto'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'neutral'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'one'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'two'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'three'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'four'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'five'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'six'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'seven'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'eight'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'nine'"),", ",Object(o.mdx)("inlineCode",{parentName:"p"},"'ten'"),"."))}return t.isMDXComponent=!0,t({})}},{name:"hashValue",type:function(){var e={};function t(t){var n=t.components,r=le(t,["components"]);return Object(o.mdx)("wrapper",ie({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=le(t,["components"]);return Object(o.mdx)("wrapper",ie({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Value used for the hash function when color is set to ",Object(o.mdx)("inlineCode",{parentName:"p"},"auto"),". If not provided, hash function utilizes alt."))}return t.isMDXComponent=!0,t({})}},{name:"image",type:function(){var e={};function t(t){var n=t.components,r=le(t,["components"]);return Object(o.mdx)("wrapper",ie({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=le(t,["components"]);return Object(o.mdx)("wrapper",ie({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The image to display."))}return t.isMDXComponent=!0,t({})}},{name:"initials",type:function(){var e={};function t(t){var n=t.components,r=le(t,["components"]);return Object(o.mdx)("wrapper",ie({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=le(t,["components"]);return Object(o.mdx)("wrapper",ie({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"One or two letters to display."))}return t.isMDXComponent=!0,t({})}},{name:"isAriaHidden",type:function(){var e={};function t(t){var n=t.components,r=le(t,["components"]);return Object(o.mdx)("wrapper",ie({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=le(t,["components"]);return Object(o.mdx)("wrapper",ie({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether to hide avatar from the accessibility tree."))}return t.isMDXComponent=!0,t({})}},{name:"isDeceased",type:function(){var e={};function t(t){var n=t.components,r=le(t,["components"]);return Object(o.mdx)("wrapper",ie({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=le(t,["components"]);return Object(o.mdx)("wrapper",ie({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Whether the person is deceased. Overrides any color variant."))}return t.isMDXComponent=!0,t({})}},{name:"size",type:function(){var e={};function t(t){var n=t.components,r=le(t,["components"]);return Object(o.mdx)("wrapper",ie({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=le(t,["components"]);return Object(o.mdx)("wrapper",ie({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Overrides the default size."))}return t.isMDXComponent=!0,t({})}}]})};function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function pe(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var se={};function me(e){var t=e.components,n=pe(e,["components"]);return Object(o.mdx)("wrapper",ue({},se,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(i.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-avatar"},"Terra Avatar"),Object(o.mdx)("p",null,"The ",Object(o.mdx)("inlineCode",{parentName:"p"},"Avatar")," variant represents a person - it displays an image or initials in a circular frame. If a valid image is not provided then the avatar falls back to displaying initials. This is the default export of the ",Object(o.mdx)("inlineCode",{parentName:"p"},"terra-avatar")," package."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",ue({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-avatar"))))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",ue({parentName:"pre"},{className:"language-jsx"}),"import Avatar from 'terra-avatar';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",ue({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",ue({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(v,{title:"Default - Fallback Icon",mdxType:"AvatarUser"}),Object(o.mdx)(h,{title:"Initials (1)",mdxType:"AvatarOneInitial"}),Object(o.mdx)(T,{title:"Initials (2)",mdxType:"AvatarTwoInitials"}),Object(o.mdx)(U,{title:"Is Deceased",mdxType:"AvatarIsDeceased"}),Object(o.mdx)(L,{title:"Image",mdxType:"AvatarImage"}),Object(o.mdx)(Q,{title:"Override Size",mdxType:"AvatarSize"}),Object(o.mdx)(re,{title:"Toggle Color Variants - Theme Specific",mdxType:"AvatarColorVariants"}),Object(o.mdx)("h2",{id:"avatar-props"},"Avatar Props"),Object(o.mdx)(ce,{mdxType:"AvatarPropsTable"}))}me.isMDXComponent=!0},887:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(17));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){var t=i({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=l;t.default=c},973:function(e,t,n){e.exports=n.p+"87ec563ff16c288f58b0747d553762d6.jpg"},981:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),o=n(884),i=n.n(o),l=function(e){var t=e.url;return a.a.createElement(i.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-avatar",name:"terra-avatar",version:"3.8.0",url:t})}}}]);
//# sourceMappingURL=99-b75b0df9bde4b2623071.js.map