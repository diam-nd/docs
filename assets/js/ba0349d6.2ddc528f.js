"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3978],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>w});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,w=u["".concat(c,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(w,o(o({ref:t},p),{},{components:n})):r.createElement(w,o({ref:t},p))}));function w(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},o="Struct NFTCollectionDisplay",l={unversionedId:"flow/flow-nft/MetdataViews/MetadataViews_NFTCollectionDisplay",id:"flow/flow-nft/MetdataViews/MetadataViews_NFTCollectionDisplay",title:"Struct NFTCollectionDisplay",description:"View to expose the information needed to showcase this NFT's",source:"@site/docs/flow/flow-nft/MetdataViews/MetadataViews_NFTCollectionDisplay.md",sourceDirName:"flow/flow-nft/MetdataViews",slug:"/flow/flow-nft/MetdataViews/MetadataViews_NFTCollectionDisplay",permalink:"/flow/flow-nft/MetdataViews/MetadataViews_NFTCollectionDisplay",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682541550,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Struct NFTCollectionData",permalink:"/flow/flow-nft/MetdataViews/MetadataViews_NFTCollectionData"},next:{title:"Struct NFTView",permalink:"/flow/flow-nft/MetdataViews/MetadataViews_NFTView"}},c={},s=[{value:"Initializer",id:"initializer",level:3}],p={toc:s},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"struct-nftcollectiondisplay"},"Struct ",(0,a.kt)("inlineCode",{parentName:"h1"},"NFTCollectionDisplay")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"pub struct NFTCollectionDisplay {\n\n    pub let name: String\n\n    pub let description: String\n\n    pub let externalURL: ExternalURL\n\n    pub let squareImage: Media\n\n    pub let bannerImage: Media\n\n    pub let socials: {String: ExternalURL}\n}\n")),(0,a.kt)("p",null,"View to expose the information needed to showcase this NFT's\ncollection. This can be used by applications to give an overview and\ngraphics of the NFT collection this NFT belongs to."),(0,a.kt)("h3",{id:"initializer"},"Initializer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cadence"},"init(name: String, description: String, externalURL: ExternalURL, squareImage: Media, bannerImage: Media, socials: {String: ExternalURL})\n")))}f.isMDXComponent=!0}}]);