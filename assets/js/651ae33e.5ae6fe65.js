"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,h=u["".concat(l,".").concat(b)]||u[b]||p[b]||o;return n?a.createElement(h,i(i({ref:t},s),{},{components:n})):a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},12062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={},i="Contract FungibleTokenSwitchboard",c={unversionedId:"Concepts/token-standards/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard",id:"Concepts/token-standards/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard",title:"Contract FungibleTokenSwitchboard",description:"The contract that allows an account to receive payments in multiple fungible",source:"@site/docs/Concepts/token-standards/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard.md",sourceDirName:"Concepts/token-standards/flow-ft/FungibleTokenSwitchboard",slug:"/Concepts/token-standards/flow-ft/FungibleTokenSwitchboard/",permalink:"/docs/Concepts/token-standards/flow-ft/FungibleTokenSwitchboard/",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Struct FTView",permalink:"/docs/Concepts/token-standards/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTView"},next:{title:"Resource Switchboard",permalink:"/docs/Concepts/token-standards/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard_Switchboard"}},l={},d=[{value:"Interfaces",id:"interfaces",level:2},{value:"resource interface <code>SwitchboardPublic</code>",id:"resource-interface-switchboardpublic",level:3},{value:"Structs &amp; Resources",id:"structs--resources",level:2},{value:"resource <code>Switchboard</code>",id:"resource-switchboard",level:3},{value:"Functions",id:"functions",level:2},{value:"fun <code>createSwitchboard()</code>",id:"fun-createswitchboard",level:3},{value:"Events",id:"events",level:2},{value:"event <code>VaultCapabilityAdded</code>",id:"event-vaultcapabilityadded",level:3},{value:"event <code>VaultCapabilityRemoved</code>",id:"event-vaultcapabilityremoved",level:3},{value:"event <code>NotCompletedDeposit</code>",id:"event-notcompleteddeposit",level:3}],s={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contract-fungibletokenswitchboard"},"Contract ",(0,r.kt)("inlineCode",{parentName:"h1"},"FungibleTokenSwitchboard")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"contract FungibleTokenSwitchboard {\n\n    StoragePath:  StoragePath\n\n    PublicPath:  PublicPath\n\n    ReceiverPublicPath:  PublicPath\n}\n")),(0,r.kt)("p",null,"The contract that allows an account to receive payments in multiple fungible\ntokens using a single ",(0,r.kt)("inlineCode",{parentName:"p"},"{FungibleToken.Receiver}")," capability.\nThis capability should ideally be stored at the\n",(0,r.kt)("inlineCode",{parentName:"p"},"FungibleTokenSwitchboard.ReceiverPublicPath = /public/GenericFTReceiver"),"\nbut it can be stored anywhere."),(0,r.kt)("h2",{id:"interfaces"},"Interfaces"),(0,r.kt)("h3",{id:"resource-interface-switchboardpublic"},"resource interface ",(0,r.kt)("inlineCode",{parentName:"h3"},"SwitchboardPublic")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"resource interface SwitchboardPublic {\n}\n")),(0,r.kt)("p",null,"The interface that enforces the method to allow anyone to check on the\navailable capabilities of a switchboard resource and also exposes the\ndeposit methods to deposit funds on it."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/Concepts/token-standards/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard_SwitchboardPublic"},"More...")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"structs--resources"},"Structs & Resources"),(0,r.kt)("h3",{id:"resource-switchboard"},"resource ",(0,r.kt)("inlineCode",{parentName:"h3"},"Switchboard")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"resource Switchboard {\n\n    receiverCapabilities:  {Type: Capability<&{FungibleToken.Receiver}>}\n}\n")),(0,r.kt)("p",null,"The resource that stores the multiple fungible token receiver\ncapabilities, allowing the owner to add and remove them and anyone to\ndeposit any fungible token among the available types."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/Concepts/token-standards/flow-ft/FungibleTokenSwitchboard/FungibleTokenSwitchboard_Switchboard"},"More...")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("h3",{id:"fun-createswitchboard"},"fun ",(0,r.kt)("inlineCode",{parentName:"h3"},"createSwitchboard()")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"func createSwitchboard(): Switchboard\n")),(0,r.kt)("p",null,"Function that allows to create a new blank switchboard. A user must call\nthis function and store the returned resource in their storage."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"events"},"Events"),(0,r.kt)("h3",{id:"event-vaultcapabilityadded"},"event ",(0,r.kt)("inlineCode",{parentName:"h3"},"VaultCapabilityAdded")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"event VaultCapabilityAdded(type Type, switchboardOwner Address?, capabilityOwner Address?)\n")),(0,r.kt)("p",null,"The event that is emitted when a new vault capability is added to a\nswitchboard resource."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"event-vaultcapabilityremoved"},"event ",(0,r.kt)("inlineCode",{parentName:"h3"},"VaultCapabilityRemoved")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"event VaultCapabilityRemoved(type Type, switchboardOwner Address?, capabilityOwner Address?)\n")),(0,r.kt)("p",null,"The event that is emitted when a vault capability is removed from a\nswitchboard resource."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"event-notcompleteddeposit"},"event ",(0,r.kt)("inlineCode",{parentName:"h3"},"NotCompletedDeposit")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"event NotCompletedDeposit(type Type, amount UFix64, switchboardOwner Address?)\n")),(0,r.kt)("p",null,"The event that is emitted when a deposit can not be completed."),(0,r.kt)("hr",null))}p.isMDXComponent=!0}}]);