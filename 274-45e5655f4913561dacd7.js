(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{2257:function(e,t,n){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=i(n(0)),r=i(n(904)),c=(a=n(942))&&a.__esModule?a:{default:a};function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function i(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=a?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}return n.default=e,t&&t.set(e,n),n}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],l=!0,a=!1,o=void 0;try{for(var r,c=e[Symbol.iterator]();!(l=(r=c.next()).done)&&(n.push(r.value),!t||n.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var m=function(){var e,t=d((0,o.useState)([]),2),n=t[0],l=t[1],a=d((0,o.useState)(!1),2),s=a[0],i=a[1],u=c.default.length,m=function(e,t){e.preventDefault();var a=r.Utils.toggleArrayValue(n,t.key),o=a.length===u;i(s?!o:o),l(o?[]:a)},h=function(e){if(n.length){var t=n.indexOf(e)>=0;return s?!t:t}return s},p="empty";return n.length?p="indeterminate":s&&(p="checked"),o.default.createElement(r.default,{summaryId:"check-table",summary:"This table has rows that can be batch selected with the checkbox or disclosed for further details.",numberOfColumns:4,cellPaddingStyle:"standard",rowStyle:"disclose",checkStyle:"toggle",dividerStyle:"horizontal",headerData:{selectAllColumn:{checkStatus:p,checkLabel:"Batch Selection",onCheckAction:function(){i(!!n.length||!s),l([])}},cells:[{key:"cell-0",id:"toggle-0",children:"Column 0"},{key:"cell-1",id:"toggle-1",children:"Column 1"},{key:"cell-2",id:"toggle-2",children:"Column 2"},{key:"cell-3",id:"toggle-3",children:"Column 3"}]},bodyData:[{rows:(e=c.default,e.map((function(e){return{key:(t=e).key,cells:(n=t.cells,n.map((function(e){return function(e){return{key:e.key,children:e.title}}(e)}))),toggleAction:{metaData:{key:t.key},onToggle:m,toggleLabel:t.toggleText,isToggled:h(t.key)},discloseAction:{discloseLabel:t.discloseText,discloseCellIndex:t.primaryIndex}};var t,n})))}]})};t.default=m},3017:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var l=n(0),a=n.n(l),o=n(289),r=n(2257),c=n.n(r);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function u(e){var t=e.components,n=i(e,["components"]);return Object(o.mdx)("wrapper",s({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",s({parentName:"pre"},{className:"language-jsx"}),"import React, {\n  useState,\n} from 'react';\nimport Table, {\n  Utils,\n} from 'terra-table';\nimport mockData from './mock-data/mock-select';\n\nconst createCell = cell => ({ key: cell.key, children: cell.title });\n\nconst createCellsForRow = cells => cells.map(cell => createCell(cell));\n\nconst CheckMarkTable = () => {\n  const [checkedKeys, setCheckedKeys] = useState([]);\n  const [allChecked, setAllChecked] = useState(false);\n  const rowCount = mockData.length; // This value needs to exclude or account for section headers\n\n  const handleRowCheckAction = (event, metaData) => {\n    event.preventDefault();\n\n    const newKeys = Utils.toggleArrayValue(checkedKeys, metaData.key);\n    const isMax = newKeys.length === rowCount;\n    setAllChecked(allChecked ? !isMax : isMax);\n    setCheckedKeys(isMax ? [] : newKeys);\n  };\n\n  const handleHeaderCheckAction = () => {\n    setAllChecked(!!checkedKeys.length || !allChecked);\n    setCheckedKeys([]);\n  };\n\n  const getIsRowChecked = (key) => {\n    if (checkedKeys.length) {\n      const isPresent = checkedKeys.indexOf(key) >= 0;\n      return allChecked ? !isPresent : isPresent;\n    }\n    return allChecked;\n  };\n\n  const createRow = rowData => (\n    {\n      key: rowData.key,\n      cells: createCellsForRow(rowData.cells),\n      toggleAction: {\n        metaData: { key: rowData.key },\n        onToggle: handleRowCheckAction,\n        toggleLabel: rowData.toggleText,\n        isToggled: getIsRowChecked(rowData.key),\n      },\n      discloseAction: {\n        discloseLabel: rowData.discloseText,\n        discloseCellIndex: rowData.primaryIndex,\n      },\n    }\n  );\n\n  const createRows = data => data.map(childItem => createRow(childItem));\n\n  let status = 'empty';\n  if (checkedKeys.length) {\n    status = 'indeterminate';\n  } else if (allChecked) {\n    status = 'checked';\n  }\n\n  return (\n    <Table\n      summaryId=\"check-table\"\n      summary=\"This table has rows that can be batch selected with the checkbox or disclosed for further details.\"\n      numberOfColumns={4}\n      cellPaddingStyle=\"standard\"\n      rowStyle=\"disclose\"\n      checkStyle=\"toggle\"\n      dividerStyle=\"horizontal\"\n      headerData={{\n        selectAllColumn: {\n          checkStatus: status,\n          checkLabel: 'Batch Selection',\n          onCheckAction: handleHeaderCheckAction,\n        },\n        cells: [\n          { key: 'cell-0', id: 'toggle-0', children: 'Column 0' },\n          { key: 'cell-1', id: 'toggle-1', children: 'Column 1' },\n          { key: 'cell-2', id: 'toggle-2', children: 'Column 2' },\n          { key: 'cell-3', id: 'toggle-3', children: 'Column 3' },\n        ],\n      }}\n      bodyData={[{\n        rows: createRows(mockData),\n      }]}\n    />\n  );\n};\n\nexport default CheckMarkTable;\n\n")))}u.isMDXComponent=!0;var m=n(883),h=n.n(m),p=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.a.createElement(h.a,{title:t||"Check Mark Table",description:n,example:a.a.createElement(c.a,null),exampleSrc:a.a.createElement(u,null),isExpanded:l})};function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g={};function b(e){var t=e.components,n=y(e,["components"]);return Object(o.mdx)("wrapper",f({},g,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",{id:"terra-table---implementing-a-checkmark-table"},"Terra Table - Implementing a CheckMark Table"),Object(o.mdx)("p",null,"The terra-table implementation requires controlled state if selections are required. As a result selections are applied at child row generation from HOC state. The following guide show you how to implement that state within a multiple row selection variant of table, as well as implement the additional narrowing requirements of a max selection for rows."),Object(o.mdx)("h2",{id:"state-management"},"State Management"),Object(o.mdx)("p",null,"The state of selection needs to be managed for the table in a High Order Component (HOC). In this example we are going to be using a unique key to manage the selection state, but the type of state used is open to the implementor of the HOC. The ",Object(o.mdx)("inlineCode",{parentName:"p"},"selectedKeys")," will keep track of the keys that are active given the allSelected state. In the case where ",Object(o.mdx)("inlineCode",{parentName:"p"},"allSelected"),' is "false" the key values will be the keys that are selected, and in the case of "true" it will be the keys that are not selected. This dual behavior removes the need to copy all keys into state when the "select all" in checked.'),Object(o.mdx)("p",null," First defaulting our state to an empty array in the constructor. Then "),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"+ const [checkedKeys, setCheckedKeys] = useState([]);\n+ const [allChecked, setAllChecked] = useState(false);\n")),Object(o.mdx)("p",null,"Next creating an event handler callback method to pass to the table row check mark cell's ",Object(o.mdx)("inlineCode",{parentName:"p"},"onCheckAction")," prop. The ",Object(o.mdx)("inlineCode",{parentName:"p"},"onCheckAction")," will return the metaData prop passed it each check mark cell."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"+  const handleRowCheckAction = (event, metaData) => {\n+\n+  }\n")),Object(o.mdx)("p",null,"As a precaution we can prevent default on the event, in case the table has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"  const handleRowCheckAction = (event, metaData) => {\n+   event.preventDefault();\n+   event.stopPropagation();\n  }\n")),Object(o.mdx)("p",null,"Terra Table comes with additional helpers to manage state, in this case we want to determine if the selection has selected or unselected the table row key in our state. So we use the utility method ",Object(o.mdx)("inlineCode",{parentName:"p"},"toggleArrayValue"),", which takes an array of keys and returns a new array of keys following the addition or removal of the key passed. We then set this as our state. Comparing the length of the array returned to the number of selectable rows within your table we can determine if all values are selected. If all values are selected we reset the keys, as there are no exceptions to check for."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"  const handleRowCheckAction = (event, metaData) => {\n    event.preventDefault();\n    event.stopPropagation();\n  \n+   const newKeys = Utils.toggleArrayValue(checkedKeys, metaData.key);\n+   const isMax = newKeys.length === rowCount;\n+   setAllChecked(allChecked ? !isMax : isMax);\n+   setCheckedKeys(isMax ? [] : newKeys);\n  }\n")),Object(o.mdx)("p",null,"Next in our implementation we'll want to add the ability to select all checkmark values. If keys are present there is an intermediate state. In the case of the intermediate state select all values. If ",Object(o.mdx)("inlineCode",{parentName:"p"},"allSelected")," is true then set to false. In either case we will be setting to all or nothing selected, so the intermediate values will be reset to an empty array."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"+ const handleHeaderCheckAction = () => {\n+   setAllChecked(!!checkedKeys.length || !allChecked);\n+   setCheckedKeys([]);\n+ };\n")),Object(o.mdx)("p",null,"Before we create our method to populate our row with check mark state, we want to create a method to retrieve a selected value based upon a key and our dual state."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"+ const getIsRowChecked = (key) => {\n+   if (checkedKeys.length) {\n+     const isPresent = checkedKeys.indexOf(key) >= 0;\n+     return allChecked ? !isPresent : isPresent;\n+   }\n+   return allChecked;\n+ };\n")),Object(o.mdx)("p",null,"Setting state will trigger another render. So in the render method we need generate our table rows with the updated isToggled props. Each item needs a unique key, not necessarily associated to our own key, but it works as well. The table renders flat, so keys need to be unique even if they are placed within sections.\n",Object(o.mdx)("a",f({parentName:"p"},{href:"https://reactjs.org/docs/lists-and-keys.html"}),"React List & Key Documentation")),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"+ const createRow = rowData => (\n+   {\n+     key: rowData.key,\n+     cells: createCellsForRow(rowData.cells),\n+   }\n+ );\n")),Object(o.mdx)("p",null,'Next we need to set up our metaData object with our key value, and attach the "onCheckAction" to our handler. The toggleLabel will relate to the row or check style set as "toggle".'),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"  const createRow = rowData => (\n    {\n      key: rowData.key,\n+     toggleAction: {\n+       metaData: { key: rowData.key },\n+       onToggle: handleRowCheckAction,\n+       toggleLabel: rowData.toggleText,\n+     },\n      cells: createCellsForRow(rowData.cells),\n    }\n  );\n")),Object(o.mdx)("p",null,"Now pass the key from the rowData to our ",Object(o.mdx)("inlineCode",{parentName:"p"},"getIsRowChecked")," method to set whether or not the row is toggled."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"  const createRow = rowData => (\n    {\n      key: rowData.key,\n      toggleAction: {\n        metaData: { key: rowData.key },\n        onToggle: handleRowCheckAction,\n        toggleLabel: rowData.toggleText,\n        isToggled: getIsRowChecked(rowData.key),\n      },\n      cells: createCellsForRow(rowData.cells),\n    }\n  );\n")),Object(o.mdx)("p",null,"We also are going to implement disclosure on our rows, so we will need to set the ",Object(o.mdx)("inlineCode",{parentName:"p"},"discloseLabel")," and the ",Object(o.mdx)("inlineCode",{parentName:"p"},"primaryCellIndex"),". The ",Object(o.mdx)("inlineCode",{parentName:"p"},"primaryCellIndex")," relates to the cell that will function as an accessible link element in our row."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"  const createRow = rowData => (\n    {\n      key: rowData.key,\n      toggleAction: {\n        metaData: { key: rowData.key },\n        onToggle: handleRowCheckAction,\n        toggleLabel: rowData.toggleText,\n        isToggled: getIsRowChecked(rowData.key),\n      },\n      cells: createCellsForRow(rowData.cells),\n+     discloseAction: {\n+       discloseLabel: rowData.discloseText,\n+       discloseCellIndex: rowData.primaryIndex,\n+     },\n    }\n  );\n")),Object(o.mdx)("p",null,"We can then implement the unpack of our data into our row cells."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"+  const createCell = cell => ({ key: cell.key, children: cell.title });\n\n+  const createCellsForRow = cells => cells.map(cell => createCell(cell));\n")),Object(o.mdx)("p",null,"Next can implement a method to loop through our data and create the table with our methods and call it from our render method."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"+  const createRows = data => data.map(childItem => createRow(childItem));\n\n  return (\n+   <Table\n+     summaryId=\"check-table\"\n+     summary=\"This table has rows that can be batch selected with the checkbox or disclosed for further details.\"\n+     numberOfColumns={4}\n+     cellPaddingStyle=\"standard\"\n+     rowStyle=\"disclose\"\n+     checkStyle=\"toggle\"\n+     headerData={{\n+       cells: [\n+         { key: 'cell-0', id: 'toggle-0', children: 'Column 0' },\n+         { key: 'cell-1', id: 'toggle-1', children: 'Column 1' },\n+         { key: 'cell-2', id: 'toggle-2', children: 'Column 2' },\n+         { key: 'cell-3', id: 'toggle-3', children: 'Column 3' },\n+       ],\n+     }}\n+     bodyData={[{\n+       rows: createRows(mockData),\n+     }]}\n+   />\n  );\n")),Object(o.mdx)("p",null,"Finally we need to add an entry to the header for the check mark cell. The ",Object(o.mdx)("inlineCode",{parentName:"p"},"checkStatus")," prop will be in either the case of ",Object(o.mdx)("inlineCode",{parentName:"p"},"allChecked")," or in the presence of ",Object(o.mdx)("inlineCode",{parentName:"p"},"checkedKeys")," the ",Object(o.mdx)("inlineCode",{parentName:"p"},"indeterminate")," value will be sent.."),Object(o.mdx)("pre",null,Object(o.mdx)("code",f({parentName:"pre"},{className:"language-diff"}),"+ let status = 'empty';\n+ if (checkedKeys.length) {\n+   status = 'indeterminate';\n+ } else if (allChecked) {\n+   status = 'checked';\n+ }\n\n  return (\n    <Table\n      summaryId=\"check-table\"\n      summary=\"This table has rows that can be batch selected with the checkbox or disclosed for further details.\"\n      numberOfColumns={4}\n      cellPaddingStyle=\"standard\"\n      rowStyle=\"disclose\"\n      checkStyle=\"toggle\"\n      headerData={{\n+       selectAllColumn: {\n+         checkStatus: status,\n+         checkLabel: 'Batch Selection',\n+         onCheckAction: handleHeaderCheckAction,\n+       },\n        cells: [\n          { key: 'cell-0', id: 'toggle-0', children: 'Column 0' },\n          { key: 'cell-1', id: 'toggle-1', children: 'Column 1' },\n          { key: 'cell-2', id: 'toggle-2', children: 'Column 2' },\n          { key: 'cell-3', id: 'toggle-3', children: 'Column 3' },\n        ],\n      }}\n      bodyData={[{\n        rows: createRows(mockData),\n      }]}\n    />\n  );\n")),Object(o.mdx)("p",null,"Using these steps we get the following example:"),Object(o.mdx)(p,{mdxType:"CheckMarkTable"}))}b.isMDXComponent=!0},883:function(e,t,n){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=a?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(0)),o=m(n(3)),r=m(n(5)),c=n(82),s=m(n(887)),i=m(n(193)),d=n(22),u=m(n(888));function m(e){return e&&e.__esModule?e:{default:e}}function h(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],l=!0,a=!1,o=void 0;try{for(var r,c=e[Symbol.iterator]();!(l=(r=c.next()).done)&&(n.push(r.value),!t||n.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var y=r.default.bind(u.default),g={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},k=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},w=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,o=e.title,r=e.description,u=e.isExpanded,m=p((0,a.useState)(u),2),h=m[0],f=m[1],g=p((0,a.useState)(!1),2),w=g[0],x=g[1],C=a.default.useContext(c.ThemeContext),v=void 0!==l,O=function(){x(!w),h&&f(!h)},_=function(){f(!h),w&&x(!w)},j=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return a.default.createElement("div",{className:y("template",C.className)},a.default.createElement("div",{className:y("header")},o&&a.default.createElement("h2",{className:y("title")},o)),a.default.createElement("div",{className:y("content")},r&&a.default.createElement("div",{className:y("description")},r),t),a.default.createElement("div",{className:y("footer")},n?a.default.createElement("div",{className:y("button-container")},v&&a.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":w}),onClick:O,onKeyDown:function(e){return j(e,O)},onBlur:b,onMouseDown:k,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(s.default,{className:y("chevron")}),a.default.createElement("span",null,"CSS"),a.default.createElement(i.default,{className:y("chevron")})),a.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":h}),onClick:_,onKeyDown:function(e){return j(e,_)},onBlur:b,onMouseDown:k,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(s.default,{className:y("chevron")}),a.default.createElement("span",null,"Code"),a.default.createElement(i.default,{className:y("chevron")}))):null,a.default.createElement("div",null,w&&a.default.createElement("div",{className:y("css")},l),h&&a.default.createElement("div",{className:y("code")},n))))};w.propTypes=g,w.defaultProps={isExpanded:!1};var x=w;t.default=x},887:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(0)),a=o(n(17));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}var c=function(e){var t=r({},e);return l.default.createElement(a.default,t,l.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var s=c;t.default=s},888:function(e,t,n){e.exports={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___e4g6e","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___MlAIc",template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",css:"ExampleTemplate-module__css___3yyDQ",code:"ExampleTemplate-module__code____AmLF","css-toggle":"ExampleTemplate-module__css-toggle___2I9Yn","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","is-selected":"ExampleTemplate-module__is-selected___1H6Un",item:"ExampleTemplate-module__item___1N1C-",chevron:"ExampleTemplate-module__chevron___3Xlby",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},942:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=[{key:"unique-0",toggleText:"Toggle Power Row 0",discloseText:"Power Row 0 - Details",primaryIndex:1,cells:[{key:"unique-0-0",title:"Item 0-0"},{key:"unique-0-1",title:"Item 0-1"},{key:"unique-0-2",title:"Item 0-2"},{key:"unique-0-3",title:"Item 0-3"}]},{key:"unique-1",toggleText:"Toggle Power Row 1",discloseText:"Power Row 1 - Details",primaryIndex:1,cells:[{key:"unique-1-0",title:"Item 1-0"},{key:"unique-1-1",title:"Item 1-1"},{key:"unique-1-2",title:"Item 1-2"},{key:"unique-1-3",title:"Item 1-3"}]},{key:"unique-2",toggleText:"Toggle Power Row 2",discloseText:"Power Row 2 - Details",primaryIndex:1,cells:[{key:"unique-2-0",title:"Item 2-0"},{key:"unique-2-1",title:"Item 2-1"},{key:"unique-2-2",title:"Item 2-2"},{key:"unique-2-3",title:"Item 2-3"}]},{key:"unique-3",toggleText:"Toggle Power Row 3",discloseText:"Power Row 3 - Details",primaryIndex:1,cells:[{key:"unique-3-0",title:"Item 3-0"},{key:"unique-3-1",title:"Item 3-1"},{key:"unique-3-2",title:"Item 3-2"},{key:"unique-3-3",title:"Item 3-3"}]},{key:"unique-4",toggleText:"Toggle Power Row 4",discloseText:"Power Row 4 - Details",primaryIndex:1,cells:[{key:"unique-4-0",title:"Item 4-0"},{key:"unique-4-1",title:"Item 4-1"},{key:"unique-4-2",title:"Item 4-2"},{key:"unique-4-3",title:"Item 4-3"}]}];t.default=l}}]);
//# sourceMappingURL=274-45e5655f4913561dacd7.js.map