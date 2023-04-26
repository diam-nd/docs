"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[835],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=c(n),d=a,m=s["".concat(u,".").concat(d)]||s[d]||f[d]||l;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={},i="Resource NFT",o={unversionedId:"flow/flow-nft/ExampleNFT/ExampleNFT_NFT",id:"flow/flow-nft/ExampleNFT/ExampleNFT_NFT",title:"Resource NFT",description:"The core resource that represents a Non Fungible Token.",source:"@site/docs/flow/flow-nft/ExampleNFT/ExampleNFT_NFT.md",sourceDirName:"flow/flow-nft/ExampleNFT",slug:"/flow/flow-nft/ExampleNFT/ExampleNFT_NFT",permalink:"/flow/flow-nft/ExampleNFT/ExampleNFT_NFT",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682541550,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Resource Interface ExampleNFTCollectionPublic",permalink:"/flow/flow-nft/ExampleNFT/ExampleNFT_ExampleNFTCollectionPublic"},next:{title:"Resource NFTMinter",permalink:"/flow/flow-nft/ExampleNFT/ExampleNFT_NFTMinter"}},u={},c=[{value:"Initializer",id:"initializer",level:3},{value:"Functions",id:"functions",level:2},{value:"fun <code>getViews()</code>",id:"fun-getviews",level:3},{value:"fun <code>resolveView()</code>",id:"fun-resolveview",level:3}],p={toc:c},s="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resource-nft"},"Resource ",(0,a.kt)("inlineCode",{parentName:"h1"},"NFT")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"resource NFT {\n\n    id:  UInt64\n\n    name:  String\n\n    description:  String\n\n    thumbnail:  String\n\n    royalties:  [MetadataViews.Royalty]\n\n    metadata:  {String: AnyStruct}\n}\n")),(0,a.kt)("p",null,"The core resource that represents a Non Fungible Token.\nNew instances will be created using the NFTMinter resource\nand stored in the Collection resource"),(0,a.kt)("p",null,"Implemented Interfaces:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"NonFungibleToken.INFT")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MetadataViews.Resolver"))),(0,a.kt)("h3",{id:"initializer"},"Initializer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"func init(id UInt64, name String, description String, thumbnail String, royalties [MetadataViews.Royalty], metadata {String: AnyStruct})\n")),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("h3",{id:"fun-getviews"},"fun ",(0,a.kt)("inlineCode",{parentName:"h3"},"getViews()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"func getViews(): [Type]\n")),(0,a.kt)("p",null,"Function that returns all the Metadata Views implemented by a Non Fungible Token"),(0,a.kt)("p",null,"developers to know which parameter to pass to the resolveView() method."),(0,a.kt)("p",null,"Returns: An array of Types defining the implemented views. This value will be used by"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fun-resolveview"},"fun ",(0,a.kt)("inlineCode",{parentName:"h3"},"resolveView()")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"func resolveView(_ Type): AnyStruct?\n")),(0,a.kt)("p",null,"Function that resolves a metadata view for this token."),(0,a.kt)("p",null,"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"view : ",(0,a.kt)("em",{parentName:"li"},"The Type of the desired view."))),(0,a.kt)("p",null,"Returns: A structure representing the requested view."),(0,a.kt)("hr",null))}f.isMDXComponent=!0}}]);