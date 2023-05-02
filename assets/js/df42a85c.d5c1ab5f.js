"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9406],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[p]="string"==typeof t?t:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},56410:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Testnet Testing Guidelines",sidebar_title:"3. Testnet Testing"},i=void 0,s={unversionedId:"Tutorials/testnet-testing",id:"Tutorials/testnet-testing",title:"Testnet Testing Guidelines",description:"It is critical to test your applications and contracts thoroughly on the testnet as part of your road to the mainnet. Testing will help you understand how to create stable and robust applications using the Flow development stack.",source:"@site/docs/Tutorials/testnet-testing.md",sourceDirName:"Tutorials",slug:"/Tutorials/testnet-testing",permalink:"/docs/Tutorials/testnet-testing",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Testnet Testing Guidelines",sidebar_title:"3. Testnet Testing"},sidebar:"tutorialSidebar",previous:{title:"Testnet Deployment Guidelines",permalink:"/docs/Tutorials/testnet-deployment"},next:{title:"Flow User Accounts & Wallets",permalink:"/docs/Tutorials/user-accounts-and-wallets"}},l={},c=[{value:"Testing Your Application",id:"testing-your-application",level:2},{value:"Automated Testing of Contract Code",id:"automated-testing-of-contract-code",level:3},{value:"Stress Testing Live Applications Before Mainnet",id:"stress-testing-live-applications-before-mainnet",level:3}],u={toc:c},p="wrapper";function d(t){let{components:e,...n}=t;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"It is critical to test your applications and contracts thoroughly on the testnet as part of your road to the mainnet. Testing will help you understand how to create stable and robust applications using the Flow development stack."),(0,o.kt)("h2",{id:"testing-your-application"},"Testing Your Application"),(0,o.kt)("h3",{id:"automated-testing-of-contract-code"},"Automated Testing of Contract Code"),(0,o.kt)("p",null,"All contracts should include test coverage for ",(0,o.kt)("em",{parentName:"p"},"all contract functions"),". Make sure you've accounted for success and failure cases appropriately."),(0,o.kt)("p",null,"Tests should also be runnable in automated environments (CI). You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-js-testing"},"JavaScript testing framework")," to create tests for your smart contract code."),(0,o.kt)("h3",{id:"stress-testing-live-applications-before-mainnet"},"Stress Testing Live Applications Before Mainnet"),(0,o.kt)("p",null,"Once you deployed your application to the testnet, you should record how your application handles non-trivial amounts of traffic to ensure there are no issues."),(0,o.kt)("p",null,"You should also get familiar with the ",(0,o.kt)("a",{parentName:"p",href:"/cadence/anti-patterns/"},"Cadence anti-patterns")," to avoid avoid problematic or unintended behavior."))}d.isMDXComponent=!0}}]);