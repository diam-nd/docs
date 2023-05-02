"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},64255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},i="Resource Interface Receiver",c={unversionedId:"Concepts/token-standards/flow-ft/FungibleToken/FungibleToken_Receiver",id:"Concepts/token-standards/flow-ft/FungibleToken/FungibleToken_Receiver",title:"Resource Interface Receiver",description:"The interface that enforces the requirements for depositing",source:"@site/docs/Concepts/token-standards/flow-ft/FungibleToken/FungibleToken_Receiver.md",sourceDirName:"Concepts/token-standards/flow-ft/FungibleToken",slug:"/Concepts/token-standards/flow-ft/FungibleToken/FungibleToken_Receiver",permalink:"/docs/Concepts/token-standards/flow-ft/FungibleToken/FungibleToken_Receiver",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Resource Interface Provider",permalink:"/docs/Concepts/token-standards/flow-ft/FungibleToken/FungibleToken_Provider"},next:{title:"Resource Vault",permalink:"/docs/Concepts/token-standards/flow-ft/FungibleToken/FungibleToken_Vault"}},l={},s=[{value:"Functions",id:"functions",level:2},{value:"fun <code>deposit()</code>",id:"fun-deposit",level:3}],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resource-interface-receiver"},"Resource Interface ",(0,o.kt)("inlineCode",{parentName:"h1"},"Receiver")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"resource interface Receiver {\n}\n")),(0,o.kt)("p",null,"The interface that enforces the requirements for depositing\ntokens into the implementing type."),(0,o.kt)("p",null,"We do not include a condition that checks the balance because\nwe want to give users the ability to make custom receivers that\ncan do custom things with the tokens, like split them up and\nsend them to different places."),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"fun-deposit"},"fun ",(0,o.kt)("inlineCode",{parentName:"h3"},"deposit()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"func deposit(from Vault)\n")),(0,o.kt)("p",null,"Takes a Vault and deposits it into the implementing resource type"),(0,o.kt)("p",null,"Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"from : ",(0,o.kt)("em",{parentName:"li"},"The Vault resource containing the funds that will be deposited"))),(0,o.kt)("hr",null))}d.isMDXComponent=!0}}]);