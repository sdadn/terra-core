(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{1136:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(0)),l=p(n(3)),a=p(n(291)),o=p(n(303)),i=p(n(75)),c=p(n(60));function p(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m={allowClear:l.default.bool,children:l.default.node,label:l.default.string.isRequired,defaultValue:l.default.oneOfType([l.default.string,l.default.number,l.default.array]),disabled:l.default.bool,error:l.default.node,help:l.default.node,hideRequired:l.default.bool,isIncomplete:l.default.bool,isInline:l.default.bool,isInvalid:l.default.bool,isLabelHidden:l.default.bool,labelAttrs:l.default.object,maxHeight:l.default.number,maxWidth:l.default.string,onChange:l.default.func,placeholder:l.default.string,required:l.default.bool,selectAttrs:l.default.object,selectId:l.default.string.isRequired,showOptional:l.default.bool,value:l.default.oneOfType([l.default.string,l.default.number,l.default.array])},s={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},f=function(e){var t,n=e.allowClear,l=e.children,i=e.defaultValue,c=e.disabled,p=e.error,m=e.help,s=e.hideRequired,f=e.isIncomplete,b=e.isInline,x=e.isInvalid,O=e.isLabelHidden,y=e.label,v=e.labelAttrs,g=e.maxHeight,h=e.maxWidth,j=e.onChange,S=e.placeholder,M=e.required,w=e.selectAttrs,D=e.selectId,X=e.showOptional,L=e.value,C=d(e,["allowClear","children","defaultValue","disabled","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"]);return m&&p&&x?t="".concat(D,"-error ").concat(D,"-help"):(m&&(t="".concat(D,"-help")),p&&x&&(t="".concat(D,"-error"))),r.default.createElement(a.default,u({},C,{label:y,labelAttrs:v,error:p,help:m,hideRequired:s,required:M,showOptional:X,isInvalid:x,isInline:b,isLabelHidden:O,htmlFor:D,maxWidth:h}),r.default.createElement(o.default,u({},w,{ariaLabel:y,allowClear:n,"aria-describedby":t,disabled:w.disabled||c,id:D,isIncomplete:f,isInvalid:x,defaultValue:i,maxHeight:g||w.maxHeight,onChange:j,placeholder:S,required:M,value:L}),l))};f.propTypes=m,f.defaultProps=s,f.Option=c.default,f.OptGroup=i.default;var b=f;t.default=b},1983:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),l=i(n(1136)),a=i(n(5)),o=i(n(891));function i(e){return e&&e.__esModule?e:{default:e}}var c=a.default.bind(o.default),p=function(){return r.default.createElement(l.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-3",className:c("form-select")},r.default.createElement(l.default.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(l.default.Option,{value:"small",display:"Small"}),r.default.createElement(l.default.Option,{value:"medium",display:"Medium"}),r.default.createElement(l.default.Option,{value:"large",display:"Large"}),r.default.createElement(l.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=p},1984:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),l=i(n(1136)),a=i(n(5)),o=i(n(891));function i(e){return e&&e.__esModule?e:{default:e}}var c=a.default.bind(o.default),p=function(){return r.default.createElement(l.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-2",required:!0,className:c("form-select")},r.default.createElement(l.default.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(l.default.Option,{value:"small",display:"Small"}),r.default.createElement(l.default.Option,{value:"medium",display:"Medium"}),r.default.createElement(l.default.Option,{value:"large",display:"Large"}),r.default.createElement(l.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=p},1985:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),l=i(n(1136)),a=i(n(5)),o=i(n(891));function i(e){return e&&e.__esModule?e:{default:e}}var c=a.default.bind(o.default),p=function(){return r.default.createElement(l.default,{required:!0,isIncomplete:!0,label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-1",className:c("form-select")},r.default.createElement(l.default.Option,{value:"xSmall",display:"Extra Small"}),r.default.createElement(l.default.Option,{value:"small",display:"Small"}),r.default.createElement(l.default.Option,{value:"medium",display:"Medium"}),r.default.createElement(l.default.Option,{value:"large",display:"Large"}),r.default.createElement(l.default.Option,{value:"xLarge",display:"Extra Large"}))};t.default=p},2963:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return z}));var r=n(0),l=n.n(r),a=n(289),o=n(903),i=n(1983),c=n.n(i);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d={};function m(e){var t=e.components,n=u(e,["components"]);return Object(a.mdx)("wrapper",p({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",p({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport SingleSelectField from \'terra-form-select/lib/SingleSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SingleSelectFieldExample = () => (\n  <SingleSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-3" className={cx(\'form-select\')}>\n    <SingleSelectField.Option value="xSmall" display="Extra Small" />\n    <SingleSelectField.Option value="small" display="Small" />\n    <SingleSelectField.Option value="medium" display="Medium" />\n    <SingleSelectField.Option value="large" display="Large" />\n    <SingleSelectField.Option value="xLarge" display="Extra Large" />\n  </SingleSelectField>\n);\n\nexport default SingleSelectFieldExample;\n\n')))}m.isMDXComponent=!0;var s=n(883),f=n.n(s),b=n(892),x=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.a.createElement(f.a,{title:t||"Single Select Field",description:n,example:l.a.createElement(c.a,null),exampleCssSrc:l.a.createElement(b.a,null),exampleSrc:l.a.createElement(m,null),isExpanded:r})},O=n(1984),y=n.n(O);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var h={};function j(e){var t=e.components,n=g(e,["components"]);return Object(a.mdx)("wrapper",v({},h,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",v({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport SingleSelectField from \'terra-form-select/lib/SingleSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SingleSelectFieldExample = () => (\n  <SingleSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-2" required className={cx(\'form-select\')}>\n    <SingleSelectField.Option value="xSmall" display="Extra Small" />\n    <SingleSelectField.Option value="small" display="Small" />\n    <SingleSelectField.Option value="medium" display="Medium" />\n    <SingleSelectField.Option value="large" display="Large" />\n    <SingleSelectField.Option value="xLarge" display="Extra Large" />\n  </SingleSelectField>\n);\n\nexport default SingleSelectFieldExample;\n\n')))}j.isMDXComponent=!0;var S=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.a.createElement(f.a,{title:t||"Required Single Select Field",description:n,example:l.a.createElement(y.a,null),exampleCssSrc:l.a.createElement(b.a,null),exampleSrc:l.a.createElement(j,null),isExpanded:r})},M=n(1985),w=n.n(M);function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var L={};function C(e){var t=e.components,n=X(e,["components"]);return Object(a.mdx)("wrapper",D({},L,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("pre",null,Object(a.mdx)("code",D({parentName:"pre"},{className:"language-jsx"}),'import React from \'react\';\nimport SingleSelectField from \'terra-form-select/lib/SingleSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SingleSelectFieldExample = () => (\n  <SingleSelectField required isIncomplete label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-1" className={cx(\'form-select\')}>\n    <SingleSelectField.Option value="xSmall" display="Extra Small" />\n    <SingleSelectField.Option value="small" display="Small" />\n    <SingleSelectField.Option value="medium" display="Medium" />\n    <SingleSelectField.Option value="large" display="Large" />\n    <SingleSelectField.Option value="xLarge" display="Extra Large" />\n  </SingleSelectField>\n);\n\nexport default SingleSelectFieldExample;\n\n')))}C.isMDXComponent=!0;var E=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.a.createElement(f.a,{title:t||"Incomplete Single Select Field",description:n,example:l.a.createElement(w.a,null),exampleCssSrc:l.a.createElement(b.a,null),exampleSrc:l.a.createElement(C,null),isExpanded:r})},T=n(886),F=n.n(T);function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var I=function(){return Object(a.mdx)(F.a,{rows:[{name:"allowClear",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether a clear option is available to clear the selection."))}return t.isMDXComponent=!0,t({})}},{name:"children",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The select options."))}return t.isMDXComponent=!0,t({})}},{name:"label",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The field label."))}return t.isMDXComponent=!0,t({})}},{name:"defaultValue",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"union"),Object(a.mdx)("pre",null,Object(a.mdx)("code",N({parentName:"pre"},{className:"language-json"}),'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n },\n {\n  "name": "array"\n }\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The default value of the select. Can be a string, number, or array of strings/numbers."))}return t.isMDXComponent=!0,t({})}},{name:"disabled",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the input is disabled."))}return t.isMDXComponent=!0,t({})}},{name:"error",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Error message displayed when the select is invalid."))}return t.isMDXComponent=!0,t({})}},{name:"help",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"node"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Help message to display with the select."))}return t.isMDXComponent=!0,t({})}},{name:"hideRequired",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether to hide the required indicator on the label."))}return t.isMDXComponent=!0,t({})}},{name:"isIncomplete",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",Object(a.mdx)("em",{parentName:"p"},"(usage note: ",Object(a.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))}return t.isMDXComponent=!0,t({})}},{name:"isInline",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field is displayed inline. Displays block by default."))}return t.isMDXComponent=!0,t({})}},{name:"isInvalid",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))}return t.isMDXComponent=!0,t({})}},{name:"isLabelHidden",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines."))}return t.isMDXComponent=!0,t({})}},{name:"labelAttrs",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Additional attributes to spread onto the label."))}return t.isMDXComponent=!0,t({})}},{name:"maxHeight",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The max height of the dropdown."))}return t.isMDXComponent=!0,t({})}},{name:"maxWidth",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Set the max-width of a field using ",Object(a.mdx)("inlineCode",{parentName:"p"},"length")," or ",Object(a.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",Object(a.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))}return t.isMDXComponent=!0,t({})}},{name:"onChange",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Callback function triggered when the select value changes. function(value)"))}return t.isMDXComponent=!0,t({})}},{name:"placeholder",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Placeholder text."))}return t.isMDXComponent=!0,t({})}},{name:"required",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether the field is required."))}return t.isMDXComponent=!0,t({})}},{name:"selectAttrs",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Additional attributes to spread onto the select."))}return t.isMDXComponent=!0,t({})}},{name:"selectId",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The Select identifier. Links the htmlFor of the field to the select identifier."))}return t.isMDXComponent=!0,t({})}},{name:"showOptional",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"Whether to append the 'optional' label to a non-required field label."))}return t.isMDXComponent=!0,t({})}},{name:"value",type:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"union"),Object(a.mdx)("pre",null,Object(a.mdx)("code",N({parentName:"pre"},{className:"language-json"}),'[\n {\n  "name": "string"\n },\n {\n  "name": "number"\n },\n {\n  "name": "array"\n }\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,r=q(t,["components"]);return Object(a.mdx)("wrapper",N({},e,r,{components:n,mdxType:"MDXLayout"}),Object(a.mdx)("p",null,"The value of the select. Can be a string, number, or array of strings/numbers."))}return t.isMDXComponent=!0,t({})}}]})};function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function V(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var _={};function z(e){var t=e.components,n=V(e,["components"]);return Object(a.mdx)("wrapper",P({},_,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(o.a,{mdxType:"Badge"}),Object(a.mdx)("h1",{id:"terra-form-single-select-field"},"Terra Form Single Select Field"),Object(a.mdx)("p",null,"A convenience wrapper assembling a ",Object(a.mdx)("a",P({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select/src/SingleSelect.jsx"}),"terra-form-select SingleSelect")," within a ",Object(a.mdx)("a",P({parentName:"p"},{href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"}),"terra-form-field"),"."),Object(a.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Install with ",Object(a.mdx)("a",P({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(a.mdx)("ul",{parentName:"li"},Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),Object(a.mdx)("h2",{id:"usage"},"Usage"),Object(a.mdx)("pre",null,Object(a.mdx)("code",P({parentName:"pre"},{className:"language-jsx"}),"import SingleSelectField from 'terra-form-select/lib/SingleSelectField';\n")),Object(a.mdx)("h2",{id:"component-features"},"Component Features"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Internationalization Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#internationalization-i18n-support"}),"Localization Support")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",P({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#ltr--rtl-support"}),"LTR/RTL Support"))),Object(a.mdx)("h2",{id:"examples"},"Examples"),Object(a.mdx)(x,{title:"Single Select Field Example",mdxType:"SingleSelectFieldExample"}),Object(a.mdx)(S,{title:"Required Single Select Field Example",mdxType:"RequiredSingleSelectFieldExample"}),Object(a.mdx)(E,{title:"Incomplete Single Select Field Example",description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteSingleSelectFieldExample"}),Object(a.mdx)("h2",{id:"single-select-field-props"},"Single Select Field Props"),Object(a.mdx)(I,{mdxType:"SingleSelectFieldPropsTable"}))}z.isMDXComponent=!0},887:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),l=a(n(17));function a(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=function(e){var t=o({},e);return r.default.createElement(l.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=i;t.default=c},891:function(e,t,n){e.exports={"form-select":"FormSelectDocCommon-module__form-select___3HVkD"}},892:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(0);var r=n(289);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o={};function i(e){var t=e.components,n=a(e,["components"]);return Object(r.mdx)("wrapper",l({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",l({parentName:"pre"},{className:"language-scss"}),":local {\n  .form-select {\n    max-width: 300px;\n  }\n}\n\n")))}i.isMDXComponent=!0},903:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),l=n.n(r),a=n(884),o=n.n(a),i=function(e){var t=e.url;return l.a.createElement(o.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select",name:"terra-form-select",version:"6.16.0",url:t})}}}]);
//# sourceMappingURL=135-ecbc404f454d55984007.js.map