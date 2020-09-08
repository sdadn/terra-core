(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{1065:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),o=n.n(r),a=n(884),p=n.n(a),u=function(e){var t=e.url;return o.a.createElement(p.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-textarea",name:"terra-form-textarea",version:"5.3.0",url:t})}},1066:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(3)),a=i(n(199)),p=i(n(291)),u=i(n(905));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d={inputId:o.default.string.isRequired,label:o.default.string.isRequired,defaultValue:o.default.oneOfType([o.default.string,o.default.number]),disabled:o.default.bool,error:o.default.node,errorIcon:o.default.element,help:o.default.node,hideRequired:o.default.bool,inputAttrs:o.default.object,isIncomplete:o.default.bool,isInline:o.default.bool,isInvalid:o.default.bool,isLabelHidden:o.default.bool,labelAttrs:o.default.object,maxWidth:o.default.string,onChange:o.default.func,required:o.default.bool,showOptional:o.default.bool,value:o.default.oneOfType([o.default.string,o.default.number])},m={defaultValue:void 0,disabled:!1,error:null,errorIcon:r.default.createElement(a.default,null),help:null,hideRequired:!1,inputAttrs:{},isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},maxWidth:void 0,onChange:void 0,required:!1,showOptional:!1,value:void 0},s=function(e){var t,n=e.defaultValue,o=e.disabled,a=e.error,i=e.errorIcon,d=e.help,m=e.hideRequired,s=e.inputAttrs,f=e.inputId,x=e.isIncomplete,b=e.isInline,O=e.isInvalid,v=e.isLabelHidden,y=e.label,j=e.labelAttrs,h=e.maxWidth,w=e.required,T=e.showOptional,g=e.onChange,M=e.value,D=c(e,["defaultValue","disabled","error","errorIcon","help","hideRequired","inputAttrs","inputId","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxWidth","required","showOptional","onChange","value"]);return d&&a&&O?t="".concat(f,"-error ").concat(f,"-help"):(d&&(t="".concat(f,"-help")),a&&O&&(t="".concat(f,"-error"))),D.placeholder&&(D.placeholder=null),r.default.createElement(p.default,l({},D,{label:y,labelAttrs:j,error:a,errorIcon:i,help:d,hideRequired:m,required:w,showOptional:T,isInvalid:O,isInline:b,isLabelHidden:v,htmlFor:f,maxWidth:h}),r.default.createElement(u.default,l({},s,{disabled:s.disabled||o,id:f,isIncomplete:x,onChange:g,value:M,defaultValue:n,"aria-describedby":t})))};s.propTypes=d,s.defaultProps=m;var f=s;t.default=f},2054:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(1066));function a(e){return e&&e.__esModule?e:{default:e}}var p=function(){return r.default.createElement(o.default,{inputId:"textarea",label:"Textarea",help:"Note: This is help text",inputAttrs:{name:"textarea"}})};t.default=p},2055:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(1066));function a(e){return e&&e.__esModule?e:{default:e}}var p=function(){return r.default.createElement(o.default,{inputId:"requiredTextarea",label:"Required Textarea",help:"Note: This is help text",required:!0,inputAttrs:{name:"requiredTextarea"}})};t.default=p},2056:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(1066));function a(e){return e&&e.__esModule?e:{default:e}}var p=function(){return r.default.createElement(o.default,{inputId:"incompleteTextarea",label:"Incomplete Textarea",help:"Note: This is help text",required:!0,isIncomplete:!0,inputAttrs:{name:"requiredTextarea"}})};t.default=p},2974:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var r=n(0),o=n.n(r),a=n(289),p=n(1065),u=n(2054),i=n.n(u);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d={};function m(e){var t=e.components,n=c(e,["components"]);return Object(a.mdx)("wrapper",l({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",l({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport TextareaField from 'terra-form-textarea/lib/TextareaField';\n\nconst DefaultTextAreaField = () => (\n  <TextareaField\n    inputId=\"textarea\"\n    label=\"Textarea\"\n    help=\"Note: This is help text\"\n    inputAttrs={{\n      name: 'textarea',\n    }}\n  />\n);\n\nexport default DefaultTextAreaField;\n\n")))}m.isMDXComponent=!0;var s=n(883),f=n.n(s),x=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"Textarea Field",description:n,example:o.a.createElement(i.a,null),exampleSrc:o.a.createElement(m,null),isExpanded:r})},b=n(2055),O=n.n(b);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var j={};function h(e){var t=e.components,n=y(e,["components"]);return Object(a.mdx)("wrapper",v({},j,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",v({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport TextareaField from 'terra-form-textarea/lib/TextareaField';\n\nconst DefaultTextAreaField = () => (\n  <TextareaField\n    inputId=\"requiredTextarea\"\n    label=\"Required Textarea\"\n    help=\"Note: This is help text\"\n    required\n    inputAttrs={{\n      name: 'requiredTextarea',\n    }}\n  />\n);\n\nexport default DefaultTextAreaField;\n\n")))}h.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"Required Textarea Field",description:n,example:o.a.createElement(O.a,null),exampleSrc:o.a.createElement(h,null),isExpanded:r})},T=n(2056),g=n.n(T);function M(){return(M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var X={};function C(e){var t=e.components,n=D(e,["components"]);return Object(a.mdx)("wrapper",M({},X,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",M({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport TextareaField from 'terra-form-textarea/lib/TextareaField';\n\nconst DefaultTextAreaField = () => (\n  <TextareaField\n    inputId=\"incompleteTextarea\"\n    label=\"Incomplete Textarea\"\n    help=\"Note: This is help text\"\n    required\n    isIncomplete\n    inputAttrs={{\n      name: 'requiredTextarea',\n    }}\n  />\n);\n\nexport default DefaultTextAreaField;\n\n")))}C.isMDXComponent=!0;var L=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.a.createElement(f.a,{title:t||"Incomplete Textarea Field",description:n,example:o.a.createElement(g.a,null),exampleSrc:o.a.createElement(C,null),isExpanded:r})},I=n(886),q=n.n(I);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var F=function(){return Object(a.mdx)(q.a,{rows:[{name:"inputId",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Id of the input. Populates both the input and the htmlFor prop of the wrapper Field."))}return t.isMDXComponent=!0,t({})}},{name:"label",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The label of the form control children."))}return t.isMDXComponent=!0,t({})}},{name:"defaultValue",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"union"),Object(a.mdx)("pre",null,Object(a.mdx)("code",N({parentName:"pre"},{className:"language-json"}),'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n }\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The defaultValue of the input field. Use this to create an uncontrolled input."))}return t.isMDXComponent=!0,t({})}},{name:"disabled",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the input is disabled."))}return t.isMDXComponent=!0,t({})}},{name:"error",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Error message for when the input is invalid."))}return t.isMDXComponent=!0,t({})}},{name:"errorIcon",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"<IconError />",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Error Icon to display when the input is invalid."))}return t.isMDXComponent=!0,t({})}},{name:"help",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Help element to display with the input."))}return t.isMDXComponent=!0,t({})}},{name:"hideRequired",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not to hide the required indicator on the label."))}return t.isMDXComponent=!0,t({})}},{name:"inputAttrs",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Attributes to attach to the input object"))}return t.isMDXComponent=!0,t({})}},{name:"isIncomplete",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",Object(a.mdx)("em",{parentName:"p"},"(usage note: ",Object(a.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))}return t.isMDXComponent=!0,t({})}},{name:"isInline",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the field is an inline field."))}return t.isMDXComponent=!0,t({})}},{name:"isInvalid",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))}return t.isMDXComponent=!0,t({})}},{name:"isLabelHidden",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility."))}return t.isMDXComponent=!0,t({})}},{name:"labelAttrs",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Attributes to attach to the label."))}return t.isMDXComponent=!0,t({})}},{name:"maxWidth",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Set the max-width of a field using ",Object(a.mdx)("inlineCode",{parentName:"p"},"length")," or ",Object(a.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",Object(a.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))}return t.isMDXComponent=!0,t({})}},{name:"onChange",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Function to trigger when user changes the input value. Provide a function to create a controlled input."))}return t.isMDXComponent=!0,t({})}},{name:"required",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not the field is required."))}return t.isMDXComponent=!0,t({})}},{name:"showOptional",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether or not to append the 'optional' label to a non-required field label."))}return t.isMDXComponent=!0,t({})}},{name:"value",type:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"union"),Object(a.mdx)("pre",null,Object(a.mdx)("code",N({parentName:"pre"},{className:"language-json"}),'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n }\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=E(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The value of the input field. Use this to create a controlled input."))}return t.isMDXComponent=!0,t({})}}]})};function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function A(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var V={};function S(e){var t=e.components,n=A(e,["components"]);return Object(a.mdx)("wrapper",P({},V,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(p.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-form-textarea-field"},"Terra Form Textarea Field"),Object(a.mdx)("p",null,Object(a.mdx)("a",P({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-textarea"}),"terra-form-textarea")," component that is wrapped inside a\n",Object(a.mdx)("a",P({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"}),"terra-form-field")," component."),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"Note:")," To follow ",Object(a.mdx)("a",P({parentName:"p"},{href:"https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Placeholder_Research"}),"UX Best Practices"),", this component does not allow ",Object(a.mdx)("inlineCode",{parentName:"p"},"placeholder"),"."),Object(a.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Install with ",Object(a.mdx)("a",P({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-textarea"))))),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",P({parentName:"pre"},{className:"language-jsx"}),"import TextareaField from 'terra-form-textarea/lib/TextareaField';\n")),Object(a.mdx)("h2",{id:"component-features"},"Component Features"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#ltr--rtl-support"}),"LTR/RTL Support"))),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(x,{mdxType:"TextareaFieldExample"}),Object(a.mdx)(w,{mdxType:"RequiredTextareaFieldExample"}),Object(a.mdx)(L,{mdxType:"IncompleteTextareaFieldExample"}),Object(a.mdx)("h2",{id:"form-textarea-field-props"},"Form Textarea Field Props"),Object(a.mdx)(F,{mdxType:"FormTextareaFieldPropsTable"}))}S.isMDXComponent=!0},887:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(17));function a(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){var t=p({},e);return r.default.createElement(o.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=u;t.default=i}}]);
//# sourceMappingURL=270-3b73bfdeb631d405ab59.js.map