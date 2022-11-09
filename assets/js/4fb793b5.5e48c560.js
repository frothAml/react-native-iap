"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7288],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(a),k=r,c=u["".concat(o,".").concat(k)]||u[k]||m[k]||i;return a?n.createElement(c,l(l({ref:t},s),{},{components:a})):n.createElement(c,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8056:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={},l=void 0,p={unversionedId:"api/modules/IapIosSk2",id:"api/modules/IapIosSk2",title:"IapIosSk2",description:"react-native-iap / Exports / IapIosSk2",source:"@site/docs/api/modules/IapIosSk2.md",sourceDirName:"api/modules",slug:"/api/modules/IapIosSk2",permalink:"/docs/api/modules/IapIosSk2",draft:!1,editUrl:"https://github.com/dooboolab/react-native-iap/edit/main/docs/docs/api/modules/IapIosSk2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"IapIos",permalink:"/docs/api/modules/IapIos"},next:{title:"modules",permalink:"/docs/api/modules"}},o={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Interfaces",id:"interfaces",level:3},{value:"Type Aliases",id:"type-aliases",level:3},{value:"Functions",id:"functions",level:3},{value:"Type Aliases",id:"type-aliases-1",level:2},{value:"BuyProduct",id:"buyproduct",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions-1",level:2},{value:"beginRefundRequest",id:"beginrefundrequest",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"currentEntitlement",id:"currententitlement",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"isEligibleForIntroOffer",id:"iseligibleforintrooffer",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"latestTransaction",id:"latesttransaction",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"subscriptionStatus",id:"subscriptionstatus",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"sync",id:"sync",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-6",level:4}],s={toc:d};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../.."},"react-native-iap")," / ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules"},"Exports")," / IapIosSk2"),(0,r.kt)("h1",{id:"namespace-iapiossk2"},"Namespace: IapIosSk2"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/interfaces/IapIosSk2.IosModulePropsSk2"},"IosModulePropsSk2"))),(0,r.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapIosSk2#buyproduct"},"BuyProduct"))),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapIosSk2#beginrefundrequest"},"beginRefundRequest")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapIosSk2#currententitlement"},"currentEntitlement")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapIosSk2#iseligibleforintrooffer"},"isEligibleForIntroOffer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapIosSk2#latesttransaction"},"latestTransaction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapIosSk2#subscriptionstatus"},"subscriptionStatus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/api/modules/IapIosSk2#sync"},"sync"))),(0,r.kt)("h2",{id:"type-aliases-1"},"Type Aliases"),(0,r.kt)("h3",{id:"buyproduct"},"BuyProduct"),(0,r.kt)("p",null,"\u01ac ",(0,r.kt)("strong",{parentName:"p"},"BuyProduct"),": (",(0,r.kt)("inlineCode",{parentName:"p"},"sku"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#sku"},(0,r.kt)("inlineCode",{parentName:"a"},"Sku")),", ",(0,r.kt)("inlineCode",{parentName:"p"},"andDangerouslyFinishTransactionAutomaticallyIOS"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"applicationUsername"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"quantity"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"withOffer"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Record"),"<keyof ",(0,r.kt)("inlineCode",{parentName:"p"},"PaymentDiscountSk2"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),">"," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#purchase"},(0,r.kt)("inlineCode",{parentName:"a"},"Purchase")),">"),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 (",(0,r.kt)("inlineCode",{parentName:"p"},"sku"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"andDangerouslyFinishTransactionAutomaticallyIOS"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"applicationUsername"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"quantity"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"withOffer"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#purchase"},(0,r.kt)("inlineCode",{parentName:"a"},"Purchase")),">"),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sku")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/api/modules#sku"},(0,r.kt)("inlineCode",{parentName:"a"},"Sku")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"andDangerouslyFinishTransactionAutomaticallyIOS")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"applicationUsername")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"quantity")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"withOffer")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Record"),"<keyof ",(0,r.kt)("inlineCode",{parentName:"td"},"PaymentDiscountSk2"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"string"),">"," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("a",{parentName:"p",href:"/docs/api/modules#purchase"},(0,r.kt)("inlineCode",{parentName:"a"},"Purchase")),">"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/ec3d97a/src/modules/iosSk2.ts#L22"},"modules/iosSk2.ts:22")),(0,r.kt)("h2",{id:"functions-1"},"Functions"),(0,r.kt)("h3",{id:"beginrefundrequest"},"beginRefundRequest"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"beginRefundRequest"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"sku"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"RefundRequestStatus"),">"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sku")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"RefundRequestStatus"),">"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/ec3d97a/src/modules/iosSk2.ts#L97"},"modules/iosSk2.ts:97")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"currententitlement"},"currentEntitlement"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"currentEntitlement"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"sku"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"TransactionSk2"),">"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sku")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"TransactionSk2"),">"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/ec3d97a/src/modules/iosSk2.ts#L85"},"modules/iosSk2.ts:85")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"iseligibleforintrooffer"},"isEligibleForIntroOffer"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"isEligibleForIntroOffer"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"groupID"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean"),">"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"groupID")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Boolean"),">"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/ec3d97a/src/modules/iosSk2.ts#L72"},"modules/iosSk2.ts:72")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"latesttransaction"},"latestTransaction"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"latestTransaction"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"sku"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"TransactionSk2"),">"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sku")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"TransactionSk2"),">"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/ec3d97a/src/modules/iosSk2.ts#L91"},"modules/iosSk2.ts:91")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"subscriptionstatus"},"subscriptionStatus"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"subscriptionStatus"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"sku"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ProductStatus"),"[]",">"),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sku")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ProductStatus"),"[]",">"),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/ec3d97a/src/modules/iosSk2.ts#L79"},"modules/iosSk2.ts:79")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sync"},"sync"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"sync"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null"),">"),(0,r.kt)("p",null,"Sync state with Appstore (iOS only)\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/storekit/appstore/3791906-sync"},"https://developer.apple.com/documentation/storekit/appstore/3791906-sync")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null"),">"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/dooboolab/react-native-iap/blob/ec3d97a/src/modules/iosSk2.ts#L67"},"modules/iosSk2.ts:67")))}m.isMDXComponent=!0}}]);