"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4753],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"The Cadence Programming Language"},i=void 0,l={unversionedId:"cadence/language/index",id:"cadence/language/index",title:"The Cadence Programming Language",description:"Introduction",source:"@site/docs/cadence/language/index.md",sourceDirName:"cadence/language",slug:"/cadence/language/",permalink:"/docs/cadence/language/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"The Cadence Programming Language"},sidebar:"tutorialSidebar",previous:{title:"JSON-Cadence Data Interchange Format",permalink:"/docs/cadence/json-cadence-spec"},next:{title:"Access control",permalink:"/docs/cadence/language/access-control"}},c={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Syntax and Behavior",id:"syntax-and-behavior",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"The Cadence Programming Language is a new high-level programming language\nintended for smart contract development."),(0,a.kt)("p",null,"The language's goals are, in order of importance:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Safety and security"),":\nProvide a strong static type system, design by contract (preconditions and postconditions),\nand resources (inspired by linear types).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Auditability"),":\nFocus on readability: Make it easy to verify what the code is doing,\nand make intentions explicit, at a small cost of verbosity.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Simplicity"),": Focus on developer productivity and usability:\nMake it easy to write code, provide good tooling."))),(0,a.kt)("h2",{id:"terminology"},"Terminology"),(0,a.kt)("p",null,"In this document, the following terminology is used to describe syntax\nor behavior that is not allowed in the language:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Invalid")," means that the invalid program will not even be allowed to run.\nThe program error is detected and reported statically by the type checker.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Run-time error")," means that the erroneous program will run,\nbut bad behavior will result in the execution of the program being aborted."))),(0,a.kt)("h2",{id:"syntax-and-behavior"},"Syntax and Behavior"),(0,a.kt)("p",null,"Much of the language's syntax is inspired by Swift, Kotlin, and TypeScript."),(0,a.kt)("p",null,"Much of the syntax, types, and standard library is inspired by Swift,\nwhich popularized e.g. optionals, argument labels,\nand provides safe handling of integers and strings."),(0,a.kt)("p",null,"Resources are based on linear types which were popularized by Rust."),(0,a.kt)("p",null,"Events are inspired by Solidity."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Disclaimer:")," In real Cadence code, all type definitions and code\nmust be declared and contained in ",(0,a.kt)("a",{parentName:"p",href:"contracts"},"contracts")," or ",(0,a.kt)("a",{parentName:"p",href:"transactions"},"transactions"),",\nbut we omit these containers in examples for simplicity."))}u.isMDXComponent=!0}}]);