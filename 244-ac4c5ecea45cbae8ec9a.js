(window.webpackJsonp=window.webpackJsonp||[]).push([[244],{2545:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),r=n(a(934));function n(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return l.default.createElement(r.default,{id:"post-menstrual-no-label",postMenstrualAge:"April 5, 2016"})}},899:function(e,t,a){e.exports={"clinical-lowlight-theme":"DemographicsBanner-module__clinical-lowlight-theme___3Pxzl","orion-fusion-theme":"DemographicsBanner-module__orion-fusion-theme___hQZqq","demographics-banner":"DemographicsBanner-module__demographics-banner___25HQW","profile-photo":"DemographicsBanner-module__profile-photo___1Px_m",value:"DemographicsBanner-module__value___nKrr0","value-text":"DemographicsBanner-module__value-text___xM0Lf","value-label":"DemographicsBanner-module__value-label___xeVI3","person-name":"DemographicsBanner-module__person-name___2NtnX",identifiers:"DemographicsBanner-module__identifiers___3TyN9","person-details":"DemographicsBanner-module__person-details___3Gh5Z","preferred-first-name":"DemographicsBanner-module__preferred-first-name___3i69_",deceased:"DemographicsBanner-module__deceased___yZ9hb",abbreviation:"DemographicsBanner-module__abbreviation___2ME-P",row:"DemographicsBanner-module__row___LRY4o",content:"DemographicsBanner-module__content___376Js","application-content":"DemographicsBanner-module__application-content___QP1ii","large-demographics-banner":"DemographicsBanner-module__large-demographics-banner___suzHO"}},924:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(a(5)),r=i(a(0)),n=i(a(142)),s=i(a(899));function i(e){return e&&e.__esModule?e:{default:e}}var o=l.default.bind(s.default),d=function(e){var t,a=e.label,l=e.value,s=e.abbrTitle;return a&&s?t=r.default.createElement("span",{className:o("value-label")},r.default.createElement("abbr",{className:o("abbreviation"),title:s,"aria-hidden":"true"},"".concat(a,":"))):a&&(t=r.default.createElement("span",{className:o("value-label")},"".concat(a,":"))),r.default.createElement("span",{className:o("value")},s&&r.default.createElement(n.default,{text:s}),t,r.default.createElement("span",{className:o("value-text")},l))},u={personDetails:function(e){var t=[r.default.createElement(d,{key:"age",value:e.age}),r.default.createElement(d,{key:"gender",value:e.gender}),r.default.createElement(d,{key:"dob",abbrTitle:e.dateOfBirthFullText,label:e.dateOfBirthLabel,value:e.dateOfBirth})];return e.gestationalAge&&t.push(r.default.createElement(d,{key:"ga",abbrTitle:e.gestationalAgeFullText,label:e.gestationalAgeLabel,value:e.gestationalAge})),e.postMenstrualAge&&t.push(r.default.createElement(d,{key:"pma",abbrTitle:e.postMenstrualAgeFullText,label:e.postMenstrualAgeLabel,value:e.postMenstrualAge})),e.deceasedDate&&t.push(r.default.createElement(d,{key:"deceased",label:e.deceasedDateLabel,value:e.deceasedDate})),t},applicationIdentifiers:function(e){var t=e.identifiers;return t?Object.keys(t).map((function(e){return r.default.createElement(d,{key:"identifier-".concat(e),label:e,value:t[e]})})):null}};t.default=u},934:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(a(0)),r=i(a(3)),n=a(9),s=i(a(967));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u={applicationContent:r.default.node,age:r.default.string,dateOfBirth:r.default.string,deceasedDate:r.default.string,gender:r.default.string,gestationalAge:r.default.string,identifiers:r.default.object,intl:n.intlShape.isRequired,personName:r.default.string,photo:r.default.node,postMenstrualAge:r.default.string,preferredFirstName:r.default.string},f={applicationContent:null,age:void 0,dateOfBirth:void 0,deceasedDate:null,gender:void 0,gestationalAge:null,identifiers:{},personName:void 0,photo:null,postMenstrualAge:null,preferredFirstName:null},c=function(e){var t=e.age,a=e.dateOfBirth,r=e.gender,n=e.intl,i=e.personName,u=d(e,["age","dateOfBirth","gender","intl","personName"]),f=n.formatMessage({id:"Terra.demographicsBanner.noDataProvided"});return l.default.createElement(s.default,o({},u,{age:t||f,dateOfBirth:a||f,gender:r||f,personName:i||f,dateOfBirthLabel:n.formatMessage({id:"Terra.demographicsBanner.dateOfBirth"}),dateOfBirthFullText:n.formatMessage({id:"Terra.demographicsBanner.dateOfBirthFullText"}),deceasedDateLabel:n.formatMessage({id:"Terra.demographicsBanner.deceased"}),gestationalAgeLabel:n.formatMessage({id:"Terra.demographicsBanner.gestationalAge"}),gestationalAgeFullText:n.formatMessage({id:"Terra.demographicsBanner.gestationalAgeFullText"}),postMenstrualAgeLabel:n.formatMessage({id:"Terra.demographicsBanner.postMenstrualAge"}),postMenstrualAgeFullText:n.formatMessage({id:"Terra.demographicsBanner.postMenstrualAgeFullText"})}))};c.propTypes=u,c.defaultProps=f;var p=(0,n.injectIntl)(c);t.default=p},967:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(a(0)),r=o(a(3)),n=o(a(294));a(899);var s=o(a(968)),i=o(a(969));function o(e){return e&&e.__esModule?e:{default:e}}var d={applicationContent:r.default.node,age:r.default.string,dateOfBirth:r.default.string,dateOfBirthLabel:r.default.string,dateOfBirthFullText:r.default.string,deceasedDate:r.default.string,deceasedDateLabel:r.default.string,gender:r.default.string,gestationalAge:r.default.string,gestationalAgeLabel:r.default.string,gestationalAgeFullText:r.default.string,identifiers:r.default.object,personName:r.default.string,photo:r.default.node,postMenstrualAge:r.default.string,postMenstrualAgeLabel:r.default.string,postMenstrualAgeFullText:r.default.string,preferredFirstName:r.default.string},u=function(e){return l.default.createElement(n.default,{tiny:l.default.createElement(s.default,e),small:l.default.createElement(i.default,e)})};u.propTypes=d,u.defaultProps={applicationContent:null,age:"--",dateOfBirth:"--",dateOfBirthLabel:"DOB",dateOfBirthFullText:"Date of Birth",deceasedDate:null,deceasedDateLabel:"Deceased",gender:"--",gestationalAge:null,gestationalAgeLabel:"GA",gestationalAgeFullText:"Gestational Age",identifiers:{},personName:"--",photo:null,postMenstrualAge:null,postMenstrualAgeLabel:"PMA",postMenstrualAgeFullText:"Post Menstrual Age",preferredFirstName:null};var f=u;t.default=f},968:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(0)),r=d(a(10)),n=d(a(5)),s=d(a(7)),i=d(a(899)),o=d(a(924));function d(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.default.bind(i.default);t.default=function(e){e.age;var t=e.applicationContent,a=(e.dateOfBirth,e.dateOfBirthFullText,e.dateOfBirthLabel,e.deceasedDate),n=(e.deceasedDateLabel,e.gender,e.gestationalAge,e.gestationalAgeFullText,e.gestationalAgeLabel,e.identifiers,e.personName),i=(e.photo,e.postMenstrualAge,e.postMenstrualAgeFullText,e.postMenstrualAgeLabel,e.preferredFirstName),d=f(e,["age","applicationContent","dateOfBirth","dateOfBirthFullText","dateOfBirthLabel","deceasedDate","deceasedDateLabel","gender","gestationalAge","gestationalAgeFullText","gestationalAgeLabel","identifiers","personName","photo","postMenstrualAge","postMenstrualAgeFullText","postMenstrualAgeLabel","preferredFirstName"]),p=l.default.useContext(s.default),g=(0,r.default)(c("demographics-banner",{deceased:a},p.className),d.className);return delete d.className,l.default.createElement("section",u({className:g},d),l.default.createElement("h1",{className:c("person-name")},l.default.createElement("span",null,n,i&&l.default.createElement("span",{className:c("preferred-first-name")},i))),l.default.createElement("div",{className:c("person-details")},o.default.personDetails(e),o.default.applicationIdentifiers(e)),l.default.createElement("div",{className:c("application-content")},t))}},969:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(a(0)),r=d(a(10)),n=d(a(5)),s=d(a(7)),i=d(a(899)),o=d(a(924));function d(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.default.bind(i.default);t.default=function(e){e.age;var t=e.applicationContent,a=(e.dateOfBirth,e.dateOfBirthFullText,e.dateOfBirthLabel,e.deceasedDate),n=(e.deceasedDateLabel,e.gender,e.gestationalAge,e.gestationalAgeFullText,e.gestationalAgeLabel,e.identifiers,e.personName),i=(e.photo,e.postMenstrualAge,e.postMenstrualAgeFullText,e.postMenstrualAgeLabel,e.preferredFirstName),d=f(e,["age","applicationContent","dateOfBirth","dateOfBirthFullText","dateOfBirthLabel","deceasedDate","deceasedDateLabel","gender","gestationalAge","gestationalAgeFullText","gestationalAgeLabel","identifiers","personName","photo","postMenstrualAge","postMenstrualAgeFullText","postMenstrualAgeLabel","preferredFirstName"]),p=l.default.useContext(s.default),g=(0,r.default)(c("demographics-banner","large-demographics-banner",{deceased:a},p.className),d.className);return delete d.className,l.default.createElement("section",u({className:g},d),e.photo&&l.default.createElement("div",{className:c("profile-photo")},e.photo),l.default.createElement("div",{className:c("content")},l.default.createElement("div",{className:c("row")},l.default.createElement("h1",{className:c("person-name")},n,i&&l.default.createElement("span",{className:c("preferred-first-name")},i)),l.default.createElement("div",{className:c("application-content")},t)),l.default.createElement("div",{className:c("row")},l.default.createElement("div",{className:c("person-details")},o.default.personDetails(e)),l.default.createElement("div",{className:c("identifiers")},o.default.applicationIdentifiers(e)))))}}}]);
//# sourceMappingURL=244-ac4c5ecea45cbae8ec9a.js.map