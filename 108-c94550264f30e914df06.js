(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1013:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=p(t(0)),o=p(t(3)),r=p(t(1034)),d=p(t(912)),l=p(t(5)),i=p(t(975)),c=p(t(1017)),s=p(t(1020));function p(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var f=l.default.bind(s.default),g={children:o.default.node,packageName:o.default.string,packageUrl:o.default.string,packageVersion:o.default.string,readme:o.default.string,srcPath:o.default.string,examples:o.default.arrayOf(o.default.shape({title:o.default.string,description:o.default.node,example:o.default.element,source:o.default.string})),propsTables:o.default.arrayOf(o.default.shape({componentSrc:o.default.string,componentName:o.default.string,componentProps:o.default.string,propsResolution:o.default.string}))},h=function(e){var n,t=e.packageName,o=e.packageVersion,l=e.packageUrl,s=e.readme,p=e.srcPath,g=e.examples,h=e.propsTables,b=e.children,y=m(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),v=g;h&&(n=h);for(var _=0,x=0;x<v.length;x+=1)v[x].id=_,_+=1;if(n)for(var k=0;k<n.length;k+=1)n[k].id=_,_+=1;var E,C=f(["doc-template",y.className]);if(v.length>0){var w=v.length>1?"Examples":"Example";E=a.default.createElement("h1",{className:f("examples-header")},w)}var M=a.default.createElement(i.default,{packageName:t,packageUrl:l,packageVersion:o});return a.default.createElement("div",u({},y,{className:C}),a.default.createElement("div",{className:f("doc-card")},t&&M,s&&a.default.createElement(d.default,{src:s}),p&&a.default.createElement("a",{href:p},"View component source code")),E,v.map((function(e){return a.default.createElement(c.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),a.default.createElement("div",{className:f("doc-card")},h[0]&&h[0].componentProps?n.map((function(e){return a.default.createElement("div",{className:f("props-table-markdown"),key:e.id},a.default.createElement("h2",null,e.componentName," Props"),a.default.createElement(d.default,{src:e.componentProps}))})):n.map((function(e){return a.default.createElement(r.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),b&&a.default.createElement("div",{className:f("doc-card")},b))};h.propTypes=g,h.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var b=h;n.default=b},1017:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=s(t(0)),o=s(t(3)),r=s(t(1124)),d=s(t(1126)),l=s(t(5)),i=s(t(1018)),c=s(t(1019));function s(e){return e&&e.__esModule?e:{default:e}}function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function f(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,n){return(g=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function h(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=v(e);if(n){var o=v(this).constructor;t=Reflect.construct(a,arguments,o)}else t=a.apply(this,arguments);return b(this,t)}}function b(e,n){return!n||"object"!==p(n)&&"function"!=typeof n?y(e):n}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.default.registerLanguage("jsx",d.default);var _=l.default.bind(i.default),x={example:o.default.element,exampleSrc:o.default.string,title:o.default.string,description:o.default.node,children:o.default.element},k={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},E=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&g(e,n)}(l,e);var n,t,o,d=h(l);function l(e){var n;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,l),(n=d.call(this,e)).state={isExpanded:!1,isBackgroundTransparent:!1},n.handleBgToggle=n.handleBgToggle.bind(y(n)),n.handleCodeToggle=n.handleCodeToggle.bind(y(n)),n}return n=l,(t=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,n=e.title,t=e.example,o=e.exampleSrc,d=e.children,l=e.description,i=m(e,["title","example","exampleSrc","children","description"]),s=this.state,p=s.isExpanded,f={};return s.isBackgroundTransparent&&(f={backgroundColor:"rgba(0, 0, 0, 0)"}),a.default.createElement("div",u({},i,{className:_("template",i.className)}),n&&a.default.createElement("div",{className:_("header")},a.default.createElement("h2",{className:_("title")},n)),a.default.createElement("div",{className:_("content"),style:f},l&&a.default.createElement("div",{className:_("description")},l),t,d),o&&a.default.createElement("div",{className:_("footer")},a.default.createElement("div",{className:_("button-container")},a.default.createElement("button",{type:"button",className:_("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:_("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:_("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:_("chevron-right")}))),a.default.createElement("div",{className:_("code",{"is-expanded":p}),"aria-hidden":!p},p?a.default.createElement(r.default,{language:"jsx",style:c.default,customStyle:{margin:"0",borderRadius:"0"}},o):void 0)))}}])&&f(n.prototype,t),o&&f(n,o),l}(a.default.Component);E.propTypes=x,E.defaultProps=k;var C=E;n.default=C},1018:function(e,n,t){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},1019:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a="#D8DEE9",o="#B2B2B2",r="#c5a5c5",d="#5a9bcf",l="#8dc891",i="#d7deea",c="#FAC863",s={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:r},comment:{color:o},"block-comment":{color:o},prolog:{color:o},doctype:{color:o},cdata:{color:o},property:{color:d},number:{color:d},"function-name":{color:d},constant:{color:d},symbol:{color:d},deleted:{color:d},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:l},punctuation:{color:"#88C6BE"},selector:{color:a},char:{color:a},builtin:{color:a},inserted:{color:a},function:{color:"#79b6f2"},operator:{color:i},entity:{color:i,cursor:"help"},url:{color:i},".language-css .token.string":{color:i},".style .token.string":{color:i},variable:{color:i},"attr-value":{color:l},keyword:{color:r},"at-rule":{color:c},"class-name":{color:c},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};n.default=s},1020:function(e,n,t){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},1884:function(e,n,t){"use strict";t.r(n),n.default='# Changelog\n\n## Unreleased\n\n## 2.30.0 - (August 4, 2020)\n\n* Changed\n  * Minor dependency version bump\n\n## 2.29.0 - (July 29, 2020)\n\n* Changed\n  * Update changelog formatting\n\n## 2.28.0 - (July 7, 2020)\n\n* Changed\n  * updated `master` references to `main`.\n\n## 2.27.0 - (June 9, 2020)\n\n* Changed\n  * Minor file changes to comply with eslint rules\n  * Update wdio test configuration to use root wdio config\n\n## 2.26.0 - (May 12, 2020)\n\n* Changed\nMoved linter ignores to the files in this package rather than at the root package.json level\n\n## 2.25.0 - (April 28, 2020)\n\n* Added\n  * Added clinical-lowlight-theme wdio screenshots\n\n## 2.24.0 - (February 18, 2020)\n\n* Added\n  * Added clinical-lowlight-theme theming files\n\n## 2.23.0 - (January 7, 2020)\n\n* Removed\n  * Removed yarn reference in docs\n\n## 2.22.0 - (December 3, 2019)\n\n* Added\n  * Added reference wdio screenshots for "orion-fusion-theme".\n\n## 2.21.0 - (October 30, 2019)\n\n* Fixed\n  * Fixed lint warnings for multiple empty lines\n\n## 2.20.0 - (October 3, 2019)\n\n* Removed\n  * Removed `overflow: hidden` from ExampleTemplate css\n\n## 2.19.0 - (September 19, 2019)\n\n* Changed\n  * Removed `details` tag from doc-site.\n\n## 2.18.0 - (September 6, 2019)\n\n* Added\n  * Props table markdown file import added to doc site page\n  * Added markdown version of props table to package\n\n## 2.17.0 - (August 21, 2019)\n\n* Changed\n  * Import for package version from package.json added to doc page\n  * Added comments for ESlint v6\n\n* Removed\n  * NPM badge wdio test\n\n## 2.16.0 - (August 14, 2019)\n\n* Added\n  * Conditional rendering added for package version badge to allow for customization\n  * `packageVersion` prop added to set version on badge if package is not available on npm\n  * `packageUrl` prop added to link version badge to custom package url\n\n* Changed\n  * updated package.json test scripts\n\n## 2.15.0 - (July 30, 2019)\n\n* Changed\n  * Minor dependency version bump\n\n## 2.14.0 - (July 24, 2019)\n\n* Changed\n  * Updated ExampleTemplate to not render example source markup until it is expanded\n\n## 2.13.0 - (July 16, 2019)\n\n* Added\n  * Added documentation on required peerDependencies\n\n## 2.12.0  - (July 11, 2019)\n\n* Changed\n  * Updated version of react-syntax-highlighter\n  * Update tests to use `Terra.describeViewports` for setting viewports and use `Terra.it.validatesElement`\n  * Cleaned up tests\n\n## 2.11.0 - (June 28, 2019)\n\n* Changed\n  * Removed all inline styles from Dev-site components and implemented the same styles using external css.\n\n## 2.10.0 - (June 11, 2019)\n\n* Removed\n  * Removed node_modules from .npmignore\n\n* Changed\n  * Made required updates to consume terra-toolkit v5 and terra-dev-site v5\n\n## 2.9.0 - (May 1, 2019)\n\n* Changed\n  * Minor dependency version bump\n  * Updated version of react-syntax-highlighter\n\n## 2.8.0 - (April 16, 2019)\n\n* Changed\n  * Minor dependency version bump\n\n## 2.7.0 - (March 26, 2019)\n\n* Changed\n  * Update react/react-dom peer-dependency to latest stable minor release\n\n## 2.6.0 - (March 21, 2019)\n\n* Changed\n  * Minor dependency version bump\n\n## 2.5.0 - (February 26, 2019)\n\n* Changed\n  * Minor dependency version bump\n\n## 2.4.0 - (February 12, 2019)\n\n* Changed\n  * Add overflow style hidden to prevent incorrect size calculation.\n\n## 2.3.0 - (February 5, 2019)\n\n* Changed\n  * Minor dependency version bump\n\n## 2.2.0 - (January 22, 2019)\n\n* Changed\n  * Minor dependency version bump\n\n## 2.1.0 - (January 22, 2019)\n\n* Changed\n  * Minor dependency version bump\n\n## 2.0.0 - (January 8, 2019)\n\n* Changed\n  * Updated theme variables\n\n## 1.23.0 - (January 2, 2019)\n\n* Changed\n  * Minor dependency version bump\n\n## 1.22.0 - (November 19, 2018)\n\n* Changed\n  * Minor dependency version bump\n\n## 1.21.0 - (November 13, 2018)\n\n* Changed\n  * Minor dependency version bump\n\n## 1.20.0 - (November 9, 2018)\n\n* Changed\n  * Fixed lint errors\n\n## 1.19.0 - (October 24, 2018)\n\n* Changed\n  * Set language on syntax highlight to JSX to improve highlighting\n  * Improved syntax highlighter theme - based on ReactJS.org syntax highlighter theme\n  * Added aria-hidden to code examples to hide code from screen readers when closed\n  * Improve doc example styling to be more usable in theme repos\n\n* Added\n  * Created placeholder component for documentation.\n\n## 1.18.0 - (October 16, 2018)\n\n* Changed\n  * Minor dependency version bump\n\n## 1.17.0 - (October 8, 2018)\n\n* Changed\n  * Updated react-syntax-highlighter version to ^8\n\n## 1.16.0 - (September 25, 2018)\n\n* Changed\n  * Minor dependency version bump\n\n## 1.15.1 - (September 6, 2018)\n\n* Changed\n  * Patch dependency version bump\n\n## 1.15.0 - (September 5, 2018)\n\n* Changed\n  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2\n  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2\n  * Expose propsResolution prop in propTable via doc-template component\n\n## 1.14.0 - (September 4, 2018)\n\n* Changed\n  * Minor dependency version bump\n\n## 1.13.0 - (August 29, 2018)\n\n* Added\n  * Added support for rendering custom content in doc template via children API\n\n* Changed\n  * Switched badge services for npm version display\n  * Minor dependency version bump\n\n## 1.12.0 - (August 1, 2018)\n\n* Fixed\n  * Fixed styles not being applied to the Examples header\n\n## 1.11.0 - (July 19, 2018)\n\n* Changed\n  * Add .module extension to SCSS file(s)\n\n## 1.10.0 - (July 17, 2018)\n\n* Changed\n  * Minor dependency version bump\n  * Formatting changes per eslint v4 update\n\n## 1.9.0 - (July 10, 2018)\n\n* Changed\n  * Minor dependency version bump\n\n## 1.8.0 - (June 28, 2018)\n\n* Changed\n  * Minor dependency version bump\n\n* Added\n  * Added change log to the documentation on terra-dev-site\n\n## 1.7.0 - (June 22, 2018)\n\n* Changed\n  * Moved terra-base from dependency to peerDependency\n\n## 1.6.0 - (June 12, 2018)\n\n* Changed\n  * Updated "test:jest" script to work on windows.\n\n## 1.5.0 - (May 30, 2018)\n\n* Changed\n  * Updated structure to match terra-dev-site 1.0 and moved doc examples internal.\n\n## 1.4.0 - (May 25, 2018)\n\n* Fixed\n  * Update example header to display the singular or pluralized form of example (Example or Examples)\n\n## 1.3.0 - (May 23, 2018)\n\n* Changed\n  * Added a visible CSS layout\n  * Removed terra-toggle-button as a dependency\n\n* Fixed\n  * Use https to get the shield\n\n## 1.2.0 - (May 16, 2018)\n\n* Changed\n  * Add 15px padding to template\n  * Limit syntax hilighting support to jsx only to limit package size.\n  * Open up description prop to accept node\n\n* Fixed\n  * Fix example template to only display example source code toggle when source code is provided\n\n## 1.1.0 - (May 9, 2018)\n\n* Changed\n  * Add syntax highlighting to source code examples\n  * Add a link to the component\'s source code\n\n* Fixed\n  * Update hash key reference in render to match the defined key in the propsTables prop\n\n## 1.0.0 - (May 2, 2018)\n\n* Initial stable release\n'},2399:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=d(t(0)),o=d(t(1013)),r=d(t(1884));function d(e){return e&&e.__esModule?e:{default:e}}var l=function(){return a.default.createElement(o.default,{packageName:"terra-doc-template",srcPath:"https://github.com/cerner/terra-core/tree/main/packages/terra-doc-template",readme:r.default})};n.default=l},975:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=d(t(0)),o=d(t(5)),r=d(t(991));function d(e){return e&&e.__esModule?e:{default:e}}var l=o.default.bind(r.default),i=function(e){var n=e.packageName,t=e.packageUrl,o=e.packageVersion;return o?a.default.createElement("div",{className:l("badge-container")},a.default.createElement("a",{className:l("badge"),href:t||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},a.default.createElement("span",{className:l("badge-name")},t?"package":"npm"),a.default.createElement("span",{className:l("badge-version")},"v".concat(o)))):a.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(n)},a.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(n),alt:"NPM version"}))};n.default=i},991:function(e,n,t){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}}}]);
//# sourceMappingURL=108-c94550264f30e914df06.js.map