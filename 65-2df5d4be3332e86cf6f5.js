(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1013:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(a(0)),r=u(a(3)),o=u(a(1034)),l=u(a(912)),c=u(a(5)),d=u(a(975)),i=u(a(1017)),s=u(a(1020));function u(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var f=c.default.bind(s.default),h={children:r.default.node,packageName:r.default.string,packageUrl:r.default.string,packageVersion:r.default.string,readme:r.default.string,srcPath:r.default.string,examples:r.default.arrayOf(r.default.shape({title:r.default.string,description:r.default.node,example:r.default.element,source:r.default.string})),propsTables:r.default.arrayOf(r.default.shape({componentSrc:r.default.string,componentName:r.default.string,componentProps:r.default.string,propsResolution:r.default.string}))},g=function(e){var t,a=e.packageName,r=e.packageVersion,c=e.packageUrl,s=e.readme,u=e.srcPath,h=e.examples,g=e.propsTables,b=e.children,_=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),y=h;g&&(t=g);for(var v=0,x=0;x<y.length;x+=1)y[x].id=v,v+=1;if(t)for(var E=0;E<t.length;E+=1)t[E].id=v,v+=1;var w,k=f(["doc-template",_.className]);if(y.length>0){var P=y.length>1?"Examples":"Example";w=n.default.createElement("h1",{className:f("examples-header")},P)}var T=n.default.createElement(d.default,{packageName:a,packageUrl:c,packageVersion:r});return n.default.createElement("div",p({},_,{className:k}),n.default.createElement("div",{className:f("doc-card")},a&&T,s&&n.default.createElement(l.default,{src:s}),u&&n.default.createElement("a",{href:u},"View component source code")),w,y.map((function(e){return n.default.createElement(i.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),n.default.createElement("div",{className:f("doc-card")},g[0]&&g[0].componentProps?t.map((function(e){return n.default.createElement("div",{className:f("props-table-markdown"),key:e.id},n.default.createElement("h2",null,e.componentName," Props"),n.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return n.default.createElement(o.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),b&&n.default.createElement("div",{className:f("doc-card")},b))};g.propTypes=h,g.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var b=g;t.default=b},1017:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(0)),r=s(a(3)),o=s(a(1124)),l=s(a(1126)),c=s(a(5)),d=s(a(1018)),i=s(a(1019));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function f(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=y(e);if(t){var r=y(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return b(this,a)}}function b(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}o.default.registerLanguage("jsx",l.default);var v=c.default.bind(d.default),x={example:r.default.element,exampleSrc:r.default.string,title:r.default.string,description:r.default.node,children:r.default.element},E={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(c,e);var t,a,r,l=g(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=l.call(this,e)).state={isExpanded:!1,isBackgroundTransparent:!1},t.handleBgToggle=t.handleBgToggle.bind(_(t)),t.handleCodeToggle=t.handleCodeToggle.bind(_(t)),t}return t=c,(a=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.example,r=e.exampleSrc,l=e.children,c=e.description,d=m(e,["title","example","exampleSrc","children","description"]),s=this.state,u=s.isExpanded,f={};return s.isBackgroundTransparent&&(f={backgroundColor:"rgba(0, 0, 0, 0)"}),n.default.createElement("div",p({},d,{className:v("template",d.className)}),t&&n.default.createElement("div",{className:v("header")},n.default.createElement("h2",{className:v("title")},t)),n.default.createElement("div",{className:v("content"),style:f},c&&n.default.createElement("div",{className:v("description")},c),a,l),r&&n.default.createElement("div",{className:v("footer")},n.default.createElement("div",{className:v("button-container")},n.default.createElement("button",{type:"button",className:v("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),n.default.createElement("button",{type:"button",className:v("code-toggle"),onClick:this.handleCodeToggle},n.default.createElement("span",{className:v("chevron-left")}),n.default.createElement("span",null,"Code"),n.default.createElement("span",{className:v("chevron-right")}))),n.default.createElement("div",{className:v("code",{"is-expanded":u}),"aria-hidden":!u},u?n.default.createElement(o.default,{language:"jsx",style:i.default,customStyle:{margin:"0",borderRadius:"0"}},r):void 0)))}}])&&f(t.prototype,a),r&&f(t,r),c}(n.default.Component);w.propTypes=x,w.defaultProps=E;var k=w;t.default=k},1018:function(e,t,a){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},1019:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="#D8DEE9",r="#B2B2B2",o="#c5a5c5",l="#5a9bcf",c="#8dc891",d="#d7deea",i="#FAC863",s={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:o},comment:{color:r},"block-comment":{color:r},prolog:{color:r},doctype:{color:r},cdata:{color:r},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:c},punctuation:{color:"#88C6BE"},selector:{color:n},char:{color:n},builtin:{color:n},inserted:{color:n},function:{color:"#79b6f2"},operator:{color:d},entity:{color:d,cursor:"help"},url:{color:d},".language-css .token.string":{color:d},".style .token.string":{color:d},variable:{color:d},"attr-value":{color:c},keyword:{color:o},"at-rule":{color:i},"class-name":{color:i},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=s},1020:function(e,t,a){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},1041:function(e){e.exports=JSON.parse('{"name":"terra-doc-template","main":"lib/DocTemplate.js","version":"2.30.0","description":"Provides an adjustable template for documentation pages.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-doc-template","DocTemplate","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","react-syntax-highlighter":"^11.0.0","terra-markdown":"^2.43.0","terra-props-table":"^2.50.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run lint && npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio-default":"cd ../.. && npx wdio","wdio-lowlight":"cd ../.. && THEME=clinical-lowlight-theme npx wdio","wdio-fusion":"cd ../.. && THEME=orion-fusion-theme npx wdio","wdio":"npm run wdio-default && npm run wdio-lowlight && npm run wdio-fusion"}}')},1346:function(e,t,a){e.exports={"placeholder-default":"DocTemplateDocCommon-module__placeholder-default___1iRyA","placeholder-light":"DocTemplateDocCommon-module__placeholder-light___3YvGF"}},1876:function(e,t,a){"use strict";a.r(t),t.default="# Terra Placeholder\n\nThe placeholder component should be used within documentation examples in place of other child/content elements.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-doc-template`\n\n## Usage\n\n```jsx\nimport React from 'react';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\n\n<Placeholder variant=\"dark\" />\n```\n"},1877:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">variant</td><td style="padding-bottom: 1.8rem">enum</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">\'dark\'</td><td style="padding-bottom: 1.8rem">The themed variant of the text and border. Example, use the light variant when against a dark background.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">title</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">\'\'</td><td style="padding-bottom: 1.8rem">The placeholder text to be displayed.</td></tr></tbody></table>'},1878:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport styles from './Placeholder.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * The themed variant of the text and border. Example, use the light variant when against a dark background.\n   */\n  variant: PropTypes.oneOf(['light', 'dark']),\n  /**\n   * The placeholder text to be displayed.\n   */\n  title: PropTypes.string,\n};\n\nconst defaultProps = {\n  variant: 'dark',\n  title: '',\n};\n\nconst Placeholder = ({\n  variant,\n  title,\n  ...customProps\n}) => {\n  const placeholderClassNames = cx([\n    'placeholder',\n    customProps.className,\n  ]);\n\n  const innerClassNames = cx([\n    'inner',\n    `is-${variant}`,\n  ]);\n\n  return (\n    <div {...customProps} className={placeholderClassNames}>\n      <div className={innerClassNames}>\n        <h2>{title}</h2>\n      </div>\n    </div>\n  );\n};\n\nPlaceholder.propTypes = propTypes;\nPlaceholder.defaultProps = defaultProps;\n\nexport default Placeholder;\n"},1879:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(0)),r=c(a(900)),o=c(a(5)),l=c(a(1346));function c(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(l.default),i=function(){return n.default.createElement("div",{className:d("placeholder-default")},n.default.createElement(r.default,{title:"Dark Placeholder"}))};t.default=i},1880:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport classNames from 'classnames/bind';\nimport styles from './DocTemplateDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst placeholder = () => (\n  <div className={cx('placeholder-default')}>\n    <Placeholder title=\"Dark Placeholder\" />\n  </div>\n);\n\nexport default placeholder;\n"},1881:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(0)),r=c(a(900)),o=c(a(5)),l=c(a(1346));function c(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(l.default),i=function(){return n.default.createElement("div",{className:d("placeholder-light")},n.default.createElement(r.default,{title:"Light Placeholder",variant:"light"}))};t.default=i},1882:function(e,t,a){"use strict";a.r(t),t.default="import React from 'react';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport classNames from 'classnames/bind';\nimport styles from './DocTemplateDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst placeholder = () => (\n  <div className={cx('placeholder-light')}>\n    <Placeholder title=\"Light Placeholder\" variant=\"light\" />\n  </div>\n);\n\nexport default placeholder;\n"},2397:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=m(a(0)),r=m(a(1013)),o=m(a(1876)),l=a(1041),c=m(a(1877)),d=m(a(1878)),i=m(a(1879)),s=m(a(1880)),u=m(a(1881)),p=m(a(1882));function m(e){return e&&e.__esModule?e:{default:e}}var f=function(){return n.default.createElement(r.default,{packageName:l.name,packageVersion:l.version,readme:o.default,srcPath:"https://github.com/cerner/terra-core/tree/main/packages/".concat(l.name),examples:[{title:"Dark Placeholder",example:n.default.createElement(i.default,null),source:s.default},{title:"Light Placeholder",example:n.default.createElement(u.default,null),source:p.default}],propsTables:[{componentName:"Placeholder",componentSrc:d.default,componentProps:c.default}]})};t.default=f},900:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(a(0)),r=c(a(3)),o=c(a(5)),l=c(a(909));function c(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.default.bind(l.default),u={variant:r.default.oneOf(["light","dark"]),title:r.default.string},p=function(e){var t=e.variant,a=e.title,r=i(e,["variant","title"]),o=s(["placeholder",r.className]),l=s(["inner","is-".concat(t)]);return n.default.createElement("div",d({},r,{className:o}),n.default.createElement("div",{className:l},n.default.createElement("h2",null,a)))};p.propTypes=u,p.defaultProps={variant:"dark",title:""};var m=p;t.default=m},909:function(e,t,a){e.exports={placeholder:"Placeholder-module__placeholder___tuGWe",inner:"Placeholder-module__inner___1irlA","is-light":"Placeholder-module__is-light___3LkLU","is-dark":"Placeholder-module__is-dark___5pLAg"}},975:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),r=l(a(5)),o=l(a(991));function l(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(o.default),d=function(e){var t=e.packageName,a=e.packageUrl,r=e.packageVersion;return r?n.default.createElement("div",{className:c("badge-container")},n.default.createElement("a",{className:c("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},n.default.createElement("span",{className:c("badge-name")},a?"package":"npm"),n.default.createElement("span",{className:c("badge-version")},"v".concat(r)))):n.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},n.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=d},991:function(e,t,a){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}}}]);
//# sourceMappingURL=65-2df5d4be3332e86cf6f5.js.map