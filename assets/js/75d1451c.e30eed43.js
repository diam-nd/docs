"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5666],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var c=n.createContext({}),s=function(t){var e=n.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=s(a),h=r,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(f,l(l({ref:e},p),{},{components:a})):n.createElement(f,l({ref:e},p))}));function f(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=h;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[u]="string"==typeof t?t:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},46962:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"The Anatomy of a Flow Dapp",sidebar_title:"Anatomy of a Flow Dapp"},l=void 0,i={unversionedId:"Tutorials/flow-dapp-anatomy",id:"Tutorials/flow-dapp-anatomy",title:"The Anatomy of a Flow Dapp",description:"The diagram below outlines the components of a typical dapp built on the Flow blockchain. While many dapps are structured differently, this architecture introduces fundamental concepts that will be discussed throughout this guide.",source:"@site/docs/Tutorials/flow-dapp-anatomy.md",sourceDirName:"Tutorials",slug:"/Tutorials/flow-dapp-anatomy",permalink:"/docs/Tutorials/flow-dapp-anatomy",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"The Anatomy of a Flow Dapp",sidebar_title:"Anatomy of a Flow Dapp"},sidebar:"tutorialSidebar",previous:{title:"Flow App Quickstart",permalink:"/docs/Tutorials/flow-app-quickstart"},next:{title:"How to Launch a Fungible Token on Flow",permalink:"/docs/Tutorials/fungible-tokens"}},c={},s=[{value:"Dapp Client",id:"dapp-client",level:2},{value:"Smart Contract",id:"smart-contract",level:2},{value:"User Account",id:"user-account",level:2},{value:"Transaction",id:"transaction",level:2},{value:"State Query",id:"state-query",level:2},{value:"User Wallet",id:"user-wallet",level:2},{value:"Flow Client Library (FCL)",id:"flow-client-library-fcl",level:2}],p={toc:s},u="wrapper";function d(t){let{components:e,...o}=t;return(0,r.kt)(u,(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The diagram below outlines the components of a typical dapp built on the Flow blockchain. While many dapps are structured differently, this architecture introduces fundamental concepts that will be discussed throughout this guide."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Flow Dapp Anatomy",src:a(51918).Z,width:"1176",height:"754"})),(0,r.kt)("h2",{id:"dapp-client"},"Dapp Client"),(0,r.kt)("p",null,"The dapp client is the interface through which users interact with your dapp. Web and mobile applications are common examples of dapp clients."),(0,r.kt)("h2",{id:"smart-contract"},"Smart Contract"),(0,r.kt)("p",null,"A smart contract is a collection of code, deployed to a permanent location on the blockchain, that defines the core logic for a dapp."),(0,r.kt)("h2",{id:"user-account"},"User Account"),(0,r.kt)("p",null,"A user account is a record on the blockchain that stores the digital assets owned by a single user."),(0,r.kt)("h2",{id:"transaction"},"Transaction"),(0,r.kt)("p",null,"A transaction is a piece of code submitted to the blockchain that mutates the state of one or more user accounts and smart contracts. All transactions originate from at least one user account. In most cases, a transaction passes data between a user account and a smart contract."),(0,r.kt)("h2",{id:"state-query"},"State Query"),(0,r.kt)("p",null,"A state query is a request made to the blockchain that returns information about the state of your dapp\u2019s smart contracts."),(0,r.kt)("h2",{id:"user-wallet"},"User Wallet"),(0,r.kt)("p",null,"A user wallet is software or hardware that controls access to a user\u2019s account on the blockchain. The application client typically connects to the user\u2019s wallet in order to send transactions to the blockchain. In many cases, the dapp physically transmits the transaction to the blockchain on behalf of the user. However, it\u2019s important to note that the wallet has final say on what is signed or not, and therefore, has control over any transactions that interact with the user\u2019s account."),(0,r.kt)("h2",{id:"flow-client-library-fcl"},"Flow Client Library (FCL)"),(0,r.kt)("p",null,"The Flow Client Library is a framework that provides a standard interface to connect client applications and user wallets."),(0,r.kt)("p",null,"THanks for reading and happy hacking! \ud83d\ude80"))}d.isMDXComponent=!0},51918:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/flow-dapp-anatomy-076bc37cc34f469734989b7aa9185372.png"}}]);