(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{1192:function(e,t,n){e.exports={"paginator-wrapper":"PaginatorExampleCommon-module__paginator-wrapper___22vdq"}},1193:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(0);var r=n(289);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={};function l(e){var t=e.components,n=o(e,["components"]);return Object(r.mdx)("wrapper",a({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("pre",null,Object(r.mdx)("code",a({parentName:"pre"},{className:"language-scss"}),":local {\n  .paginator-wrapper {\n    height: 500px;\n  }\n}\n\n")))}l.isMDXComponent=!0},1250:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=g(n(0)),a=g(n(3)),o=g(n(5)),i=g(n(7)),l=n(9),u=g(n(294)),s=g(n(142)),c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==b(e)&&"function"!=typeof e)return{default:e};var t=m();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(22)),d=g(n(1009)),p=n(1026),f=g(n(1027));function m(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return m=function(){return e},e}function g(e){return e&&e.__esModule?e:{default:e}}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=x(e);if(t){var a=x(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var j=o.default.bind(d.default),_={onPageChange:a.default.func.isRequired,selectedPage:a.default.number.isRequired,totalCount:a.default.number.isRequired,itemCountPerPage:a.default.number.isRequired,intl:l.intlShape.isRequired},w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(i,e);var t,n,a,o=y(i);function i(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var n=(t=o.call(this,e)).props,r=n.selectedPage,a=n.totalCount;return t.state={selectedPage:r&&a?r:void 0,showReducedPaginator:!1},t.handlePageChange=t.handlePageChange.bind(O(t)),t.defaultProgressivePaginator=t.defaultProgressivePaginator.bind(O(t)),t.reducedProgressivePaginator=t.reducedProgressivePaginator.bind(O(t)),t.setPaginator=t.setPaginator.bind(O(t)),t}return t=i,(n=[{key:"setPaginator",value:function(e){var t="tiny"===e;this.state.showReducedPaginator!==t&&this.setState({showReducedPaginator:t})}},{key:"handlePageChange",value:function(e){var t=this;return function(n){n.nativeEvent.keyCode!==c.KEY_RETURN&&n.nativeEvent.keyCode!==c.KEY_SPACE||n.preventDefault(),t.props.onPageChange(e),t.setState({selectedPage:e})}}},{key:"defaultProgressivePaginator",value:function(){var e=this.context,t=this.props.intl,n=(0,p.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),a=this.state.selectedPage,o=1===a?1:a-1,i=a===n?n:a+1;return r.default.createElement("div",{className:j("paginator","progressive",e.className),role:"navigation","aria-label":"pagination"},r.default.createElement("div",null,t.formatMessage({id:"Terra.paginator.pageCount"},{pageNumber:a,pageNumberTotal:n})),r.default.createElement("div",null,r.default.createElement(f.default,{ariaDisabled:1===a,ariaLabel:t.formatMessage({id:"Terra.paginator.first"}),className:j(["nav-link",1===a?"is-disabled":null]),disabled:1===a,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},t.formatMessage({id:"Terra.paginator.first"})),r.default.createElement(f.default,{ariaDisabled:1===a,ariaLabel:t.formatMessage({id:"Terra.paginator.previous"}),className:j(["nav-link","previous",1===a?"is-disabled":null]),disabled:1===a,onClick:this.handlePageChange(o),onKeyDown:this.handlePageChange(o)},r.default.createElement("span",{className:j("icon")}),t.formatMessage({id:"Terra.paginator.previous"})),r.default.createElement(f.default,{ariaDisabled:a===n,ariaLabel:t.formatMessage({id:"Terra.paginator.next"}),className:j(["nav-link","next",a===n?"is-disabled":null]),disabled:a===n,onClick:this.handlePageChange(i),onKeyDown:this.handlePageChange(i)},t.formatMessage({id:"Terra.paginator.next"}),r.default.createElement("span",{className:j("icon")})),r.default.createElement(f.default,{ariaDisabled:a===n,ariaLabel:t.formatMessage({id:"Terra.paginator.last"}),className:j(["nav-link",a===n?"is-disabled":null]),disabled:a===n,onClick:this.handlePageChange(n),onKeyDown:this.handlePageChange(n)},t.formatMessage({id:"Terra.paginator.last"}))))}},{key:"reducedProgressivePaginator",value:function(){var e=this.context,t=this.props.intl,n=(0,p.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),a=this.state.selectedPage,o=1===a?1:a-1,i=a===n?n:a+1;return r.default.createElement("div",{className:j("paginator",e.className),role:"navigation","aria-label":"pagination"},r.default.createElement("div",null,r.default.createElement(f.default,{ariaDisabled:1===a,ariaLabel:t.formatMessage({id:"Terra.paginator.first"}),className:j(["nav-link",1===a?"is-disabled":null]),disabled:1===a,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},t.formatMessage({id:"Terra.paginator.first"})),r.default.createElement(f.default,{ariaDisabled:1===a,ariaLabel:t.formatMessage({id:"Terra.paginator.previous"}),className:j(["nav-link","previous","icon-only",1===a?"is-disabled":null]),disabled:1===a,onClick:this.handlePageChange(o),onKeyDown:this.handlePageChange(o)},r.default.createElement(s.default,{text:t.formatMessage({id:"Terra.paginator.previous"})}),r.default.createElement("span",{className:j("icon")}))),r.default.createElement("div",null,t.formatMessage({id:"Terra.paginator.pageCount"},{pageNumber:a,pageNumberTotal:n})),r.default.createElement("div",null,r.default.createElement(f.default,{ariaDisabled:a===n,ariaLabel:t.formatMessage({id:"Terra.paginator.next"}),className:j(["nav-link","next","icon-only",a===n?"is-disabled":null]),disabled:a===n,onClick:this.handlePageChange(i),onKeyDown:this.handlePageChange(i)},r.default.createElement(s.default,{text:t.formatMessage({id:"Terra.paginator.next"})}),r.default.createElement("span",{className:j("icon")})),r.default.createElement(f.default,{ariaDisabled:a===n,ariaLabel:t.formatMessage({id:"Terra.paginator.last"}),className:j(["nav-link",a===n?"is-disabled":null]),disabled:a===n,onClick:this.handlePageChange(n),onKeyDown:this.handlePageChange(n)},t.formatMessage({id:"Terra.paginator.last"}))))}},{key:"render",value:function(){return r.default.createElement(u.default,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedProgressivePaginator():this.defaultProgressivePaginator())}}])&&h(t.prototype,n),a&&h(t,a),i}(r.default.Component);w.propTypes=_,w.contextType=i.default;var C=(0,l.injectIntl)(w);t.default=C},2149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(0)),a=u(n(963)),o=u(n(1250)),i=u(n(5)),l=u(n(1192));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var a=g(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return f(this,n)}}function f(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=i.default.bind(l.default),h=function(){return function(e,t){for(var n=[],a=0;a<t;a+=1)n.push(r.default.createElement("p",{key:Math.floor(Math.random()*Math.floor(1e5))},e));return n}("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. Aliquam eget maximus dui, ut rhoncus augue.",10)},v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(u,e);var t,n,i,l=p(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=l.call(this,e)).state={content:h(),currentPage:1},t.changePages=t.changePages.bind(m(t)),t}return t=u,(n=[{key:"changePages",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){return r.default.createElement("div",{className:b("paginator-wrapper")},r.default.createElement(a.default,{header:r.default.createElement("h1",null,"Page",this.state.currentPage),footer:r.default.createElement(o.default,{onPageChange:this.changePages,selectedPage:1,totalCount:450,itemCountPerPage:10})},this.state.content))}}])&&c(t.prototype,n),i&&c(t,i),u}(r.default.Component);t.default=v},3e3:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var r=n(0),a=n.n(r),o=n(289),i=n(994),l=n(2149),u=n.n(l);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function p(e){var t=e.components,n=c(e,["components"]);return Object(o.mdx)("wrapper",s({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",s({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';\nimport classNames from 'classnames/bind';\nimport styles from './PaginatorExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\nconst totalCount = 450;\n\nconst fillArray = (value, len) => {\n  const arr = [];\n  for (let i = 0; i < len; i += 1) {\n    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);\n  }\n  return arr;\n};\n\nconst buildPage = () => {\n  let fullContent = [];\n  const content = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '\n    + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. '\n    + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. '\n    + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. '\n    + 'Aliquam eget maximus dui, ut rhoncus augue.');\n\n  fullContent = fillArray(content, 10);\n\n  return (\n    fullContent\n  );\n};\n\nclass ProgressivePaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: buildPage(),\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1>\n              Page\n              {this.state.currentPage}\n            </h1>\n)}\n          footer={<ProgressivePaginator onPageChange={this.changePages} selectedPage={1} totalCount={totalCount} itemCountPerPage={10} />}\n        >\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default ProgressivePaginatorExample;\n\n")))}p.isMDXComponent=!0;var f=n(883),m=n.n(f),g=n(1193),b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.a.createElement(m.a,{title:t||"Progressive Paginator Example",description:n,example:a.a.createElement(u.a,null),exampleCssSrc:a.a.createElement(g.a,null),exampleSrc:a.a.createElement(p,null),isExpanded:r})},h=n(886),v=n.n(h);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var O=function(){return Object(o.mdx)(v.a,{rows:[{name:"onPageChange",type:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function to be executed when a navigation element is selected."))}return t.isMDXComponent=!0,t({})}},{name:"selectedPage",type:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The active/selected page."))}return t.isMDXComponent=!0,t({})}},{name:"totalCount",type:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Total number of all items being paginated."))}return t.isMDXComponent=!0,t({})}},{name:"itemCountPerPage",type:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,r=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,r,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Total number of items per page."))}return t.isMDXComponent=!0,t({})}}]})};function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _={};function w(e){var t=e.components,n=j(e,["components"]);return Object(o.mdx)("wrapper",x({},_,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(i.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-progressive-paginator"},"Terra Progressive Paginator"),Object(o.mdx)("p",null,"Paginator to be used for ordered data where the size of the data is known. Provides first, last, previous, next, and paged functionality."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",x({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-paginator"))))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",x({parentName:"pre"},{className:"language-jsx"}),"import ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",x({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",x({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",x({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(b,{mdxType:"ProgressivePaginatorExample"}),Object(o.mdx)("h2",{id:"progressive-paginator-props"},"Progressive Paginator Props"),Object(o.mdx)(O,{mdxType:"ProgressivePaginatorPropsTable"}))}w.isMDXComponent=!0},887:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(17));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l=function(e){var t=i({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=l;t.default=u},963:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(0)),a=p(n(3)),o=p(n(10)),i=p(n(5)),l=p(n(7)),u=p(n(46)),s=p(n(50)),c=n(9),d=p(n(987));function p(e){return e&&e.__esModule?e:{default:e}}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g=i.default.bind(d.default),b={children:a.default.node,footer:a.default.node.isRequired,header:a.default.node.isRequired,onClose:a.default.func},h=function(e){var t=e.children,n=e.footer,a=e.header,i=e.onClose,d=m(e,["children","footer","header","onClose"]),p=r.default.useContext(l.default),b=(0,o.default)(g("dialog",p.className),d.className),h=i?r.default.createElement("div",{className:g("dialog-header-close")},r.default.createElement(c.FormattedMessage,{id:"Terra.dialog.close"},(function(e){return r.default.createElement(u.default,{variant:"utility",text:e,onClick:i,isIconOnly:!0,icon:r.default.createElement("span",{className:g("close-icon")})})}))):null,v=r.default.createElement("div",{className:g("dialog-header")},r.default.createElement("div",{className:g("dialog-header-title")},a),h);return r.default.createElement("div",f({},d,{className:b}),r.default.createElement(s.default,{fill:!0,header:v,footer:r.default.createElement("div",{className:g("dialog-footer")},n)},r.default.createElement("div",{className:g("dialog-body")},t)))};h.propTypes=b,h.defaultProps={onClose:null,children:null};var v=h;t.default=v},987:function(e,t,n){e.exports={"clinical-lowlight-theme":"Dialog-module__clinical-lowlight-theme___15vVt","orion-fusion-theme":"Dialog-module__orion-fusion-theme___3T_AN",dialog:"Dialog-module__dialog___2m12i","dialog-header":"Dialog-module__dialog-header___tH-_K","dialog-header-title":"Dialog-module__dialog-header-title___2QmqU","dialog-header-close":"Dialog-module__dialog-header-close___1xiMB","close-icon":"Dialog-module__close-icon___2Q45c","dialog-body":"Dialog-module__dialog-body___B1Nle","dialog-footer":"Dialog-module__dialog-footer___noxrB"}},994:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),o=n(884),i=n.n(o),l=function(e){var t=e.url;return a.a.createElement(i.a,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-paginator",name:"terra-paginator",version:"2.60.0",url:t})}}}]);
//# sourceMappingURL=117-ea6ae252d2e2893cad9f.js.map