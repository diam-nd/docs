"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4313],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(o),h=a,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return o?n.createElement(m,l(l({ref:t},u),{},{components:o})):n.createElement(m,l({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=o[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},32372:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=o(87462),a=(o(67294),o(3905));const r={},l="Flow SDK for Unity",i={unversionedId:"Tooling/unity-sdk/index",id:"Tooling/unity-sdk/index",title:"Flow SDK for Unity",description:"The Flow SDK for Unity allows Unity developers to integrate their games and applications with the Flow blockchain.",source:"@site/docs/Tooling/unity-sdk/index.md",sourceDirName:"Tooling/unity-sdk",slug:"/Tooling/unity-sdk/",permalink:"/docs/Tooling/unity-sdk/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Selling NFTs",permalink:"/docs/Tooling/nft-marketplace/selling-nfts"},next:{title:"API Reference",permalink:"/docs/Tooling/unity-sdk/api-reference"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Why Blockchain?",id:"why-blockchain",level:2},{value:"So blockchains are awesome... why Flow?",id:"so-blockchains-are-awesome-why-flow",level:2},{value:"Overview of the Flow SDK",id:"overview-of-the-flow-sdk",level:2},{value:"Adding the Flow SDK",id:"adding-the-flow-sdk",level:2},{value:"Updating the Flow SDK",id:"updating-the-flow-sdk",level:2},{value:"Samples",id:"samples",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Support",id:"support",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flow-sdk-for-unity"},"Flow SDK for Unity"),(0,a.kt)("p",null,"The Flow SDK for Unity allows Unity developers to integrate their games and applications with the Flow blockchain."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"As games developers ourselves, we understand that most games developers don\u2019t have any background in blockchain technology or even understand why it is used. The Flow SDK for Unity has been developed by games developers, for games developers. Our aim is to make blockchain integration as easy as possible, so that you can focus on making a great game."),(0,a.kt)("p",null,"First, it helps to understand why you would want to make a game on blockchain, and what you can do."),(0,a.kt)("h2",{id:"why-blockchain"},"Why Blockchain?"),(0,a.kt)("p",null,"Here at Dapper Labs we\u2019re big believers in Web3. The two main advantages of blockchain that we believe in are:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Trustlessness")," \u2013 there is no trust required in any particular platform or service. Once something is on the blockchain, it\u2019s there to stay. Users have full confidence that the data you put on-chain will always be available \u2013 there are no servers or databases that can be taken down."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Composability")," \u2013 once your Smart Contracts have been deployed, other developers can utilize them. They can deploy additional Smart Contracts that leverage your own, or develop other client applications which use them. Creating composable pieces of software like this gives new experiences to existing audiences \u2013 it's a win-win for everyone."),(0,a.kt)("h2",{id:"so-blockchains-are-awesome-why-flow"},"So blockchains are awesome... why Flow?"),(0,a.kt)("p",null,"Flow is a fast, decentralized and developer-friendly layer-1 blockchain. It was created to solve problems that Dapper Labs encountered while scaling CryptoKitties on Ethereum. Flow differs from other blockchains because it was explicitly designed to support games and consumer applications on day one, with the throughput necessary to scale to millions of active users. Some points which are unique to Flow include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Multi-node architecture which facilitates scalability"),(0,a.kt)("li",{parentName:"ul"},"Very low transaction fees"),(0,a.kt)("li",{parentName:"ul"},"Eco-friendly due to its proof-of-stake consensus and multi-node architecture"),(0,a.kt)("li",{parentName:"ul"},"Cadence \u2013 Flow's Smart Contract language, a resource-oriented programming language which has in-built security features"),(0,a.kt)("li",{parentName:"ul"},"Upgradable Smart Contracts")),(0,a.kt)("h2",{id:"overview-of-the-flow-sdk"},"Overview of the Flow SDK"),(0,a.kt)("p",null,"The Flow SDK allows Unity games to read and write from","\\","to a Flow blockchain. There are three chains","\\","environments","\\","networks developers should be aware of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Emulator \u2013 this is an executable you can run locally, or on your own network, which emulates a Flow blockchain."),(0,a.kt)("li",{parentName:"ul"},"Testnet \u2013 the publicly available Flow blockchain used for testing."),(0,a.kt)("li",{parentName:"ul"},"Mainnet \u2013 the publicly available Flow blockchain used for production.")),(0,a.kt)("p",null,"We highly recommend you do most of your development against a local emulator, and only deploy to Testnet when your Smart Contracts are finalised. While Flow does have \u201cupgradable Smart Contracts\u201d, there are many caveats to this, and you should get into the mindset that Smart Contracts are completely immutable once deployed. On an emulator, you can simply erase the entire chain and start again."),(0,a.kt)("p",null,"The types of things you can do with the Flow blockchain include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Mint, burn and trade NFTs and Fungible Tokens"),(0,a.kt)("li",{parentName:"ul"},"Store game data"),(0,a.kt)("li",{parentName:"ul"},"Read any publicly available information"),(0,a.kt)("li",{parentName:"ul"},"Run game logic")),(0,a.kt)("p",null,"It is completely up to you, the developer, to decide how much data","\\","logic you want to store","\\","run on-chain, and how much (if any) on off-chain architecture such as servers and databases. We encourage you to experiment on an emulator, and when you\u2019re ready, test on Testnet to get an indication of performance."),(0,a.kt)("h2",{id:"adding-the-flow-sdk"},"Adding the Flow SDK"),(0,a.kt)("p",null,"The Flow SDK for Unity is hosted on github here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/UnityFlowSDK"},"https://github.com/onflow/UnityFlowSDK")),(0,a.kt)("p",null,"To add it to your Unity project:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Unity Editor, go to Window, Package Manager. "),(0,a.kt)("li",{parentName:"ol"},"Click the + dropdown in the top left corner. "),(0,a.kt)("li",{parentName:"ol"},'Select "Add package from git URL" and enter ',(0,a.kt)("inlineCode",{parentName:"li"},"https://github.com/onflow/UnityFlowSDK.git"),". ")),(0,a.kt)("h2",{id:"updating-the-flow-sdk"},"Updating the Flow SDK"),(0,a.kt)("p",null,"Check the Package Manager regularly for updates to the Flow SDK. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the Unity Editor, go to Window, Package Manager. "),(0,a.kt)("li",{parentName:"ol"},"Under Packages - Dapper Labs, select Flow SDK. "),(0,a.kt)("li",{parentName:"ol"},"Click Update. If there is no Update button then you are already up to date. ")),(0,a.kt)("h2",{id:"samples"},"Samples"),(0,a.kt)("p",null,"To add any of the SDKs Samples, click the related import button, from the Flow SDK package panel, in the Unity Package Manager window."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("p",null,"The Flow SDK is compatible with Unity version 2021.3 or higher."),(0,a.kt)("p",null,"Supported Platforms: Windows, OSX, Android"),(0,a.kt)("h2",{id:"support"},"Support"),(0,a.kt)("p",null,"Email: ",(0,a.kt)("a",{parentName:"p",href:"mailto:unity-sdk-support@dapperlabs.com"},"unity-sdk-support@dapperlabs.com")),(0,a.kt)("p",null,"Discord: ",(0,a.kt)("a",{parentName:"p",href:"https://onflow.org/discord"},"https://onflow.org/discord")))}p.isMDXComponent=!0}}]);