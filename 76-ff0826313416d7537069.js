(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1013:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),o=i(n(3)),r=i(n(1034)),l=i(n(912)),p=i(n(5)),s=i(n(975)),d=i(n(1017)),c=i(n(1020));function i(e){return e&&e.__esModule?e:{default:e}}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=p.default.bind(c.default),g={children:o.default.node,packageName:o.default.string,packageUrl:o.default.string,packageVersion:o.default.string,readme:o.default.string,srcPath:o.default.string,examples:o.default.arrayOf(o.default.shape({title:o.default.string,description:o.default.node,example:o.default.element,source:o.default.string})),propsTables:o.default.arrayOf(o.default.shape({componentSrc:o.default.string,componentName:o.default.string,componentProps:o.default.string,propsResolution:o.default.string}))},h=function(e){var t,n=e.packageName,o=e.packageVersion,p=e.packageUrl,c=e.readme,i=e.srcPath,g=e.examples,h=e.propsTables,b=e.children,y=u(e,["packageName","packageVersion","packageUrl","readme","srcPath","examples","propsTables","children"]),T=g;h&&(t=h);for(var x=0,v=0;v<T.length;v+=1)T[v].id=x,x+=1;if(t)for(var _=0;_<t.length;_+=1)t[_].id=x,x+=1;var k,w=f(["doc-template",y.className]);if(T.length>0){var E=T.length>1?"Examples":"Example";k=a.default.createElement("h1",{className:f("examples-header")},E)}var N=a.default.createElement(s.default,{packageName:n,packageUrl:p,packageVersion:o});return a.default.createElement("div",m({},y,{className:w}),a.default.createElement("div",{className:f("doc-card")},n&&N,c&&a.default.createElement(l.default,{src:c}),i&&a.default.createElement("a",{href:i},"View component source code")),k,T.map((function(e){return a.default.createElement(d.default,{title:e.title,example:e.example,exampleSrc:e.source,description:e.description,key:e.id})})),a.default.createElement("div",{className:f("doc-card")},h[0]&&h[0].componentProps?t.map((function(e){return a.default.createElement("div",{className:f("props-table-markdown"),key:e.id},a.default.createElement("h2",null,e.componentName," Props"),a.default.createElement(l.default,{src:e.componentProps}))})):t.map((function(e){return a.default.createElement(r.default,{src:e.componentSrc,componentName:e.componentName,key:e.id,propsResolution:e.propsResolution})}))),b&&a.default.createElement("div",{className:f("doc-card")},b))};h.propTypes=g,h.defaultProps={packageName:"",packageUrl:"",packageVersion:"",readme:"",srcPath:"",examples:[],propsTables:[]};var b=h;t.default=b},1017:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(0)),o=c(n(3)),r=c(n(1124)),l=c(n(1126)),p=c(n(5)),s=c(n(1018)),d=c(n(1019));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=T(e);if(t){var o=T(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return b(this,n)}}function b(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?y(e):t}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}r.default.registerLanguage("jsx",l.default);var x=p.default.bind(s.default),v={example:o.default.element,exampleSrc:o.default.string,title:o.default.string,description:o.default.node,children:o.default.element},_={example:void 0,exampleSrc:void 0,title:void 0,description:void 0,children:void 0},k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(p,e);var t,n,o,l=h(p);function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(t=l.call(this,e)).state={isExpanded:!1,isBackgroundTransparent:!1},t.handleBgToggle=t.handleBgToggle.bind(y(t)),t.handleCodeToggle=t.handleCodeToggle.bind(y(t)),t}return t=p,(n=[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.example,o=e.exampleSrc,l=e.children,p=e.description,s=u(e,["title","example","exampleSrc","children","description"]),c=this.state,i=c.isExpanded,f={};return c.isBackgroundTransparent&&(f={backgroundColor:"rgba(0, 0, 0, 0)"}),a.default.createElement("div",m({},s,{className:x("template",s.className)}),t&&a.default.createElement("div",{className:x("header")},a.default.createElement("h2",{className:x("title")},t)),a.default.createElement("div",{className:x("content"),style:f},p&&a.default.createElement("div",{className:x("description")},p),n,l),o&&a.default.createElement("div",{className:x("footer")},a.default.createElement("div",{className:x("button-container")},a.default.createElement("button",{type:"button",className:x("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:x("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:x("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:x("chevron-right")}))),a.default.createElement("div",{className:x("code",{"is-expanded":i}),"aria-hidden":!i},i?a.default.createElement(r.default,{language:"jsx",style:d.default,customStyle:{margin:"0",borderRadius:"0"}},o):void 0)))}}])&&f(t.prototype,n),o&&f(t,o),p}(a.default.Component);k.propTypes=v,k.defaultProps=_;var w=k;t.default=w},1018:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___MEAKz",header:"ExampleTemplate-module__header___13zqD",content:"ExampleTemplate-module__content___1Zdto",description:"ExampleTemplate-module__description___pnaPA",footer:"ExampleTemplate-module__footer___2jmFy","button-container":"ExampleTemplate-module__button-container___2JIjW",code:"ExampleTemplate-module__code___1u1x4","is-expanded":"ExampleTemplate-module__is-expanded___2fXEU","bg-toggle":"ExampleTemplate-module__bg-toggle___1rE0y","code-toggle":"ExampleTemplate-module__code-toggle___1B459","chevron-left":"ExampleTemplate-module__chevron-left___2hjZu","chevron-right":"ExampleTemplate-module__chevron-right___fnHrn",title:"ExampleTemplate-module__title___1qQfE"}},1019:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="#D8DEE9",o="#B2B2B2",r="#c5a5c5",l="#5a9bcf",p="#8dc891",s="#d7deea",d="#FAC863",c={'code[class*="language-"]':{color:"#f8f8f2",background:"none",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none"},'pre[class*="language-"]':{color:"#fff",background:"rgb(40, 44, 52)",textShadow:"0 1px rgba(0, 0, 0, 0.3)",fontFamily:'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',textAlign:"left",whiteSpace:"pre",wordSpacing:"normal",wordBreak:"normal",wordWrap:"normal",lineHeight:"1.5",MozTabSize:"4",OTabSize:"4",tabSize:"4",WebkitHyphens:"none",MozHyphens:"none",msHyphens:"none",hyphens:"none",padding:"1em",margin:".5em 0",overflow:"auto",borderRadius:"0.3em"},':not(pre) > code[class*="language-"]':{background:"rgb(40, 44, 52)",padding:".1em",borderRadius:".3em",whiteSpace:"normal"},"plain-text":{color:"#ffffff"},"attr-name":{color:r},comment:{color:o},"block-comment":{color:o},prolog:{color:o},doctype:{color:o},cdata:{color:o},property:{color:l},number:{color:l},"function-name":{color:l},constant:{color:l},symbol:{color:l},deleted:{color:l},boolean:{color:"#ff8b50"},tag:{color:"#fc929e"},string:{color:p},punctuation:{color:"#88C6BE"},selector:{color:a},char:{color:a},builtin:{color:a},inserted:{color:a},function:{color:"#79b6f2"},operator:{color:s},entity:{color:s,cursor:"help"},url:{color:s},".language-css .token.string":{color:s},".style .token.string":{color:s},variable:{color:s},"attr-value":{color:p},keyword:{color:r},"at-rule":{color:d},"class-name":{color:d},important:{fontWeight:400},bold:{fontWeight:700},italic:{fontStyle:"italic"},".namespace":{opacity:.7}};t.default=c},1020:function(e,t,n){e.exports={"examples-header":"DocTemplate-module__examples-header___P3qFL","doc-template":"DocTemplate-module__doc-template___JSxEJ","doc-card":"DocTemplate-module__doc-card___2jEVe","props-table-markdown":"DocTemplate-module__props-table-markdown___1926W"}},1041:function(e){e.exports=JSON.parse('{"name":"terra-doc-template","main":"lib/DocTemplate.js","version":"2.30.0","description":"Provides an adjustable template for documentation pages.","repository":{"type":"git","url":"git+https://github.com/cerner/terra-core.git"},"keywords":["Cerner","Terra","terra-doc-template","DocTemplate","UI"],"author":"Cerner Corporation","license":"Apache-2.0","bugs":{"url":"https://github.com/cerner/terra-core/issues"},"homepage":"https://github.com/cerner/terra-core#readme","peerDependencies":{"react":"^16.8.5","react-dom":"^16.8.5"},"dependencies":{"classnames":"^2.2.5","prop-types":"^15.5.8","react-syntax-highlighter":"^11.0.0","terra-markdown":"^2.43.0","terra-props-table":"^2.50.0"},"scripts":{"compile":"babel --root-mode upward src --out-dir lib --copy-files","lint":"npm run lint:js && npm run lint:scss","lint:js":"eslint --ext .js,.jsx . --ignore-path ../../.eslintignore","lint:scss":"stylelint src/**/*.scss","precompile":"rm -rf lib","test":"npm run lint && npm run jest && npm run wdio","jest":"jest --config ../../jestconfig.js","wdio-default":"cd ../.. && npx wdio","wdio-lowlight":"cd ../.. && THEME=clinical-lowlight-theme npx wdio","wdio-fusion":"cd ../.. && THEME=orion-fusion-theme npx wdio","wdio":"npm run wdio-default && npm run wdio-lowlight && npm run wdio-fusion"}}')},1870:function(e,t,n){"use strict";n.r(t),t.default="# Terra Doc Template\n\nThe terra-doc-template component provides an adjustable template for documentation pages.\n\n## Getting Started\n\n- Install with [npmjs](https://www.npmjs.com):\n  - `npm install terra-doc-template`\n\n\x3c!-- AUTO-GENERATED-CONTENT:START Peer Dependencies --\x3e\n## Peer Dependencies\n\nThis component requires the following peer dependencies be installed in your app for the component to properly function.\n\n| Peer Dependency | Version |\n|-|-|\n| react | ^16.8.5 |\n| react-dom | ^16.8.5 |\n\n\n\n\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n"},1871:function(e,t){e.exports='<table style="display: table; margin-bottom: 1.25rem"><thead><tr style="line-height: 1.5"><th style="width: 10%">Prop Name</th><th style="width: 25%">Type</th><th style="width: 10%">Is Required</th><th style="width: 10%">Default Value</th><th style="width: 45%">Description</th></tr></thead><tbody><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">children</td><td style="padding-bottom: 1.8rem">node</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">none</td><td style="padding-bottom: 1.8rem">Enables the ability to add custom content to doc template. Children will be rendered after all other content.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">packageName</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">\'\'</td><td style="padding-bottom: 1.8rem">The given component&#39;s npm package name.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">packageUrl</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">\'\'</td><td style="padding-bottom: 1.8rem">The url for the provided package if not in npm. This will be ignored if packageVersion is not set.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">packageVersion</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">\'\'</td><td style="padding-bottom: 1.8rem">The given component&#39;s package version.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">readme</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">\'\'</td><td style="padding-bottom: 1.8rem">The given component&#39;s readme file imported to a string.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">srcPath</td><td style="padding-bottom: 1.8rem">string</td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">\'\'</td><td style="padding-bottom: 1.8rem">The url to the source code for the given component.</td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">examples</td><td style="padding-bottom: 1.8rem">An array of objects structured like:<br /><pre style="white-space: pre-wrap">{\n "name": "shape",\n "value": {\n  "title": {\n   "name": "string",\n   "required": false\n  },\n  "description": {\n   "name": "node",\n   "required": false\n  },\n  "example": {\n   "name": "element",\n   "required": false\n  },\n  "source": {\n   "name": "string",\n   "required": false\n  }\n }\n}</pre></td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">[]</td><td style="padding-bottom: 1.8rem">All of the example(s) that will be displayed. An empty array is supported.<pre><code style="white-space: pre-wrap">title: The title of the example\ndescription: A description of the example to be displayed below the title\nexample: The example to be displayed\nsource: The source code of the example</code></pre></td></tr><tr style="vertical-align: top"><td style="font-weight: bold; padding-bottom: 1.8rem">propsTables</td><td style="padding-bottom: 1.8rem">An array of objects structured like:<br /><pre style="white-space: pre-wrap">{\n "name": "shape",\n "value": {\n  "componentSrc": {\n   "name": "string",\n   "required": false\n  },\n  "componentName": {\n   "name": "string",\n   "required": false\n  },\n  "componentProps": {\n   "name": "string",\n   "required": false\n  },\n  "propsResolution": {\n   "name": "string",\n   "required": false\n  }\n }\n}</pre></td><td style="padding-bottom: 1.8rem">optional</td><td style="font-weight: bold; padding-bottom: 1.8rem">[]</td><td style="padding-bottom: 1.8rem">All of the props table(s) that will be displayed. An empty array is supported.<pre><code style="white-space: pre-wrap">componentSrc: The source code of the component\ncomponentName: The name of the component\npropsResolution: Type of react-docgen resolver to use for prop-types resolution. Supported values are `default` or `findAllComponentDefinitions`. Will use `default` if left unspecified.</code></pre></td></tr></tbody></table>'},1872:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport PropTypes from 'prop-types';\nimport PropsTable from 'terra-props-table';\nimport Markdown from 'terra-markdown';\nimport classNames from 'classnames/bind';\nimport NpmBadge from './NpmBadge';\nimport IndexExampleTemplate from './ExampleTemplate';\nimport styles from './DocTemplate.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst propTypes = {\n  /**\n   * Enables the ability to add custom content to doc template. Children will be rendered after all other content.\n   */\n  children: PropTypes.node,\n  /**\n   * The given component's npm package name.\n   */\n  packageName: PropTypes.string,\n  /**\n   * The url for the provided package if not in npm. This will be ignored if packageVersion is not set.\n   */\n  packageUrl: PropTypes.string,\n  /**\n   * The given component's package version.\n   */\n  packageVersion: PropTypes.string,\n  /**\n   * The given component's readme file imported to a string.\n   */\n  readme: PropTypes.string,\n  /**\n   * The url to the source code for the given component.\n   */\n  srcPath: PropTypes.string,\n  /**\n   * All of the example(s) that will be displayed. An empty array is supported.\n   * ```\n   * title: The title of the example\n   * description: A description of the example to be displayed below the title\n   * example: The example to be displayed\n   * source: The source code of the example\n   * ```\n   */\n  examples: PropTypes.arrayOf(PropTypes.shape({\n    title: PropTypes.string,\n    description: PropTypes.node,\n    example: PropTypes.element,\n    source: PropTypes.string,\n  })),\n  /**\n   * All of the props table(s) that will be displayed. An empty array is supported.\n   * ```\n   * componentSrc: The source code of the component\n   * componentName: The name of the component\n   * propsResolution: Type of react-docgen resolver to use for prop-types resolution. Supported values are `default` or `findAllComponentDefinitions`. Will use `default` if left unspecified.\n   * ```\n   */\n  propsTables: PropTypes.arrayOf(PropTypes.shape({\n    componentSrc: PropTypes.string,\n    componentName: PropTypes.string,\n    componentProps: PropTypes.string,\n    propsResolution: PropTypes.string,\n  })),\n};\n\nconst defaultProps = {\n  packageName: '',\n  packageUrl: '',\n  packageVersion: '',\n  readme: '',\n  srcPath: '',\n  examples: [],\n  propsTables: [],\n};\n\nconst DocTemplate = ({\n  packageName, packageVersion, packageUrl, readme, srcPath, examples, propsTables, children, ...customProps\n}) => {\n  const localExamples = examples;\n  let localPropsTables;\n  if (propsTables) localPropsTables = propsTables;\n\n  // Assign unique identifiers to use as keys later\n  let id = 0;\n  for (let i = 0; i < localExamples.length; i += 1) {\n    localExamples[i].id = id;\n    id += 1;\n  }\n\n  if (localPropsTables) {\n    for (let i = 0; i < localPropsTables.length; i += 1) {\n      localPropsTables[i].id = id;\n      id += 1;\n    }\n  }\n\n  const docTemplateClassNames = cx([\n    'doc-template',\n    customProps.className,\n  ]);\n\n  let exampleHeader;\n  if (localExamples.length > 0) {\n    const exampleHeaderText = localExamples.length > 1 ? 'Examples' : 'Example';\n    exampleHeader = <h1 className={cx('examples-header')}>{exampleHeaderText}</h1>;\n  }\n\n  const badge = (\n    <NpmBadge\n      packageName={packageName}\n      packageUrl={packageUrl}\n      packageVersion={packageVersion}\n    />\n  );\n\n  return (\n    <div {...customProps} className={docTemplateClassNames}>\n      <div className={cx('doc-card')}>\n        {packageName && badge}\n        {readme && <Markdown src={readme} />}\n        {srcPath && <a href={srcPath}>View component source code</a>}\n      </div>\n\n      {exampleHeader}\n      {localExamples.map(example => (\n        <IndexExampleTemplate\n          title={example.title}\n          example={example.example}\n          exampleSrc={example.source}\n          description={example.description}\n          key={example.id}\n        />\n      ))}\n\n      <div className={cx('doc-card')}>\n        {propsTables[0] && propsTables[0].componentProps\n          ? localPropsTables.map(propsTable => (\n            <div className={cx('props-table-markdown')} key={propsTable.id}>\n              <h2>\n                {propsTable.componentName}\n                {' Props'}\n              </h2>\n              <Markdown src={propsTable.componentProps} />\n            </div>\n          ))\n          : localPropsTables.map(propsTable => (\n            <PropsTable\n              src={propsTable.componentSrc}\n              componentName={propsTable.componentName}\n              key={propsTable.id}\n              propsResolution={propsTable.propsResolution}\n            />\n          ))}\n      </div>\n      {children && <div className={cx('doc-card')}>{children}</div>}\n    </div>\n  );\n};\n\nDocTemplate.propTypes = propTypes;\nDocTemplate.defaultProps = defaultProps;\n\nexport default DocTemplate;\n"},1873:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),o=l(n(975)),r=n(1041);function l(e){return e&&e.__esModule?e:{default:e}}var p=function(){return a.default.createElement("div",null,a.default.createElement("p",null,"Dynamically generated npm badge:"),a.default.createElement(o.default,{packageName:r.name}),a.default.createElement("p",null,"Custom Badge with packageVersion prop set:"),a.default.createElement(o.default,{packageName:r.name,packageVersion:r.version}),a.default.createElement("p",null,"Custom Badge with packageUrl and packageVersion props set:"),a.default.createElement(o.default,{packageName:r.name,packageUrl:"https://engineering.cerner.com/terra-ui/components/terra-doc-template/doc-template/doc-template",packageVersion:r.version}))};t.default=p},1874:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport NpmBadge from '../../../NpmBadge';\nimport { name, version } from '../../../../package.json';\n\nconst packageUrl = 'https://engineering.cerner.com/terra-ui/components/terra-doc-template/doc-template/doc-template';\n\nconst BadgeExamples = () => (\n  <div>\n    <p>Dynamically generated npm badge:</p>\n    <NpmBadge packageName={name} />\n    <p>Custom Badge with packageVersion prop set:</p>\n    <NpmBadge packageName={name} packageVersion={version} />\n    <p>Custom Badge with packageUrl and packageVersion props set:</p>\n    <NpmBadge packageName={name} packageUrl={packageUrl} packageVersion={version} />\n  </div>\n);\n\nexport default BadgeExamples;\n"},1875:function(e,t,n){"use strict";n.r(t),t.default="import React from 'react';\nimport DocTemplate from '../../../../lib/DocTemplate';\nimport readme from '../../../../docs/README.md';\n\nimport { name, version } from '../../../../package.json';\n\n/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-duplicates */\nimport DocTemplatePropsTable from '!terra-props-table-loader!../../../../src/DocTemplate';\nimport DocTemplateSrc from '!raw-loader!../../../../src/DocTemplate';\nimport BadgeExamples from '../example/BadgeExamples';\nimport BadgeExamplesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/BadgeExamples';\n\n/* eslint-disable-next-line import/no-self-import */\nimport SelfSrc from '!raw-loader!../../../../src/terra-dev-site/doc/doc-template/DocTemplate.1.doc';\n\nconst DocTemplateExamples = () => (\n  <DocTemplate\n    packageName={name}\n    packageVersion={version}\n    readme={readme}\n    srcPath=\"https://github.com/cerner/terra-core/tree/main/packages/terra-doc-template\"\n    examples={[\n      {\n        title: 'DocTemplate',\n        source: SelfSrc,\n        example: (<p>This very page was generated using the DocTemplate. The template supports more than one Props Table and example, even though those were not featured here.</p>),\n      },\n      {\n        title: 'Package Badge Examples',\n        source: BadgeExamplesSrc,\n        example: <BadgeExamples />,\n      },\n    ]}\n    propsTables={[\n      {\n        componentName: 'Doc Template',\n        componentSrc: DocTemplateSrc,\n        componentProps: DocTemplatePropsTable,\n      },\n    ]}\n  />\n);\n\nexport default DocTemplateExamples;\n"},2396:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(0)),o=m(n(1013)),r=m(n(1870)),l=n(1041),p=m(n(1871)),s=m(n(1872)),d=m(n(1873)),c=m(n(1874)),i=m(n(1875));function m(e){return e&&e.__esModule?e:{default:e}}var u=function(){return a.default.createElement(o.default,{packageName:l.name,packageVersion:l.version,readme:r.default,srcPath:"https://github.com/cerner/terra-core/tree/main/packages/terra-doc-template",examples:[{title:"DocTemplate",source:i.default,example:a.default.createElement("p",null,"This very page was generated using the DocTemplate. The template supports more than one Props Table and example, even though those were not featured here.")},{title:"Package Badge Examples",source:c.default,example:a.default.createElement(d.default,null)}],propsTables:[{componentName:"Doc Template",componentSrc:s.default,componentProps:p.default}]})};t.default=u},975:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(0)),o=l(n(5)),r=l(n(991));function l(e){return e&&e.__esModule?e:{default:e}}var p=o.default.bind(r.default),s=function(e){var t=e.packageName,n=e.packageUrl,o=e.packageVersion;return o?a.default.createElement("div",{className:p("badge-container")},a.default.createElement("a",{className:p("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},a.default.createElement("span",{className:p("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:p("badge-version")},"v".concat(o)))):a.default.createElement("a",{href:"https://www.npmjs.org/package/".concat(t)},a.default.createElement("img",{src:"https://badgen.net/npm/v/".concat(t),alt:"NPM version"}))};t.default=s},991:function(e,t,n){e.exports={badge:"NpmBadge-module__badge___1Cu7Z","badge-container":"NpmBadge-module__badge-container___2zgQi","badge-name":"NpmBadge-module__badge-name___17OzL","badge-version":"NpmBadge-module__badge-version___2Vkei"}}}]);
//# sourceMappingURL=76-ff0826313416d7537069.js.map