"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3490],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>T});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),c=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=c(a),f=r,T=s["".concat(u,".").concat(f)]||s[f]||d[f]||i;return a?n.createElement(T,o(o({ref:t},p),{},{components:a})):n.createElement(T,o({ref:t},p))}));function T(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},66533:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={},o="Struct FTVaultData",l={unversionedId:"flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTVaultData",id:"flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTVaultData",title:"Struct FTVaultData",description:"View to expose the information needed store and interact with a FT vault.",source:"@site/docs/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTVaultData.md",sourceDirName:"flow/flow-ft/FungibleTokenMetadataViews",slug:"/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTVaultData",permalink:"/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTVaultData",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682541550,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Struct FTDisplay",permalink:"/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTDisplay"},next:{title:"Struct FTView",permalink:"/flow/flow-ft/FungibleTokenMetadataViews/FungibleTokenMetadataViews_FTView"}},u={},c=[{value:"Initializer",id:"initializer",level:3}],p={toc:c},s="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"struct-ftvaultdata"},"Struct ",(0,r.kt)("inlineCode",{parentName:"h1"},"FTVaultData")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"struct FTVaultData {\n\n    storagePath:  StoragePath\n\n    receiverPath:  PublicPath\n\n    metadataPath:  PublicPath\n\n    providerPath:  PrivatePath\n\n    receiverLinkedType:  Type\n\n    metadataLinkedType:  Type\n\n    providerLinkedType:  Type\n\n    createEmptyVault:  ((): @FungibleToken.Vault)\n}\n")),(0,r.kt)("p",null,"View to expose the information needed store and interact with a FT vault.\nThis can be used by applications to setup a FT vault with proper\nstorage and public capabilities."),(0,r.kt)("h3",{id:"initializer"},"Initializer"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"func init(storagePath StoragePath, receiverPath PublicPath, metadataPath PublicPath, providerPath PrivatePath, receiverLinkedType Type, metadataLinkedType Type, providerLinkedType Type, createEmptyVaultFunction ((): @FungibleToken.Vault))\n")))}d.isMDXComponent=!0}}]);