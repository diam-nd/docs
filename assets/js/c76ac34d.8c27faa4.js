"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[7489],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},54349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={},i="Resource Interface Provider",l={unversionedId:"Concepts/token-standards/flow-nft/NonFungibleToken/NonFungibleToken_Provider",id:"Concepts/token-standards/flow-nft/NonFungibleToken/NonFungibleToken_Provider",title:"Resource Interface Provider",description:"Interface to mediate withdraws from the Collection",source:"@site/docs/Concepts/token-standards/flow-nft/NonFungibleToken/NonFungibleToken_Provider.md",sourceDirName:"Concepts/token-standards/flow-nft/NonFungibleToken",slug:"/Concepts/token-standards/flow-nft/NonFungibleToken/NonFungibleToken_Provider",permalink:"/docs/Concepts/token-standards/flow-nft/NonFungibleToken/NonFungibleToken_Provider",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Resource NFT",permalink:"/docs/Concepts/token-standards/flow-nft/NonFungibleToken/NonFungibleToken_NFT"},next:{title:"Resource Interface Receiver",permalink:"/docs/Concepts/token-standards/flow-nft/NonFungibleToken/NonFungibleToken_Receiver"}},c={},u=[{value:"Functions",id:"functions",level:2},{value:"<code>withdraw()</code>",id:"withdraw",level:3}],s={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resource-interface-provider"},"Resource Interface ",(0,o.kt)("inlineCode",{parentName:"h1"},"Provider")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"pub resource interface Provider {\n}\n")),(0,o.kt)("p",null,"Interface to mediate withdraws from the Collection"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"withdraw"},(0,o.kt)("inlineCode",{parentName:"h3"},"withdraw()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"fun withdraw(withdrawID: UInt64): NFT\n")),(0,o.kt)("p",null,"Removes an NFT from the resource implementing it and moves it to the caller"),(0,o.kt)("p",null,"Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"withdrawID : ",(0,o.kt)("em",{parentName:"li"},"The ID of the NFT that will be removed"))),(0,o.kt)("p",null,"Returns: The NFT resource removed from the implementing resource"),(0,o.kt)("hr",null))}p.isMDXComponent=!0}}]);