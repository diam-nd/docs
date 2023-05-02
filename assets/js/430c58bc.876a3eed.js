"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6579],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>k});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,k=d["".concat(c,".").concat(f)]||d[f]||p[f]||l;return t?r.createElement(k,a(a({ref:n},s),{},{components:t})):r.createElement(k,a({ref:n},s))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8882:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(87462),o=(t(67294),t(3905));const l={},a="Resource Collection",i={unversionedId:"Concepts/token-standards/flow-nft/NonFungibleToken/NonFungibleToken_Collection",id:"Concepts/token-standards/flow-nft/NonFungibleToken/NonFungibleToken_Collection",title:"Resource Collection",description:"Requirement for the concrete resource type",source:"@site/docs/Concepts/token-standards/flow-nft/NonFungibleToken/NonFungibleToken_Collection.md",sourceDirName:"Concepts/token-standards/flow-nft/NonFungibleToken",slug:"/Concepts/token-standards/flow-nft/NonFungibleToken/NonFungibleToken_Collection",permalink:"/docs/Concepts/token-standards/flow-nft/NonFungibleToken/NonFungibleToken_Collection",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contract Interface NonFungibleToken",permalink:"/docs/Concepts/token-standards/flow-nft/NonFungibleToken/"},next:{title:"Resource Interface CollectionPublic",permalink:"/docs/Concepts/token-standards/flow-nft/NonFungibleToken/NonFungibleToken_CollectionPublic"}},c={},u=[{value:"Functions",id:"functions",level:2},{value:"<code>withdraw()</code>",id:"withdraw",level:3},{value:"<code>deposit()</code>",id:"deposit",level:3},{value:"<code>getIDs()</code>",id:"getids",level:3},{value:"<code>borrowNFT()</code>",id:"borrownft",level:3}],s={toc:u},d="wrapper";function p(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"resource-collection"},"Resource ",(0,o.kt)("inlineCode",{parentName:"h1"},"Collection")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"pub resource Collection {\n\n    pub var ownedNFTs: {UInt64: NFT}\n}\n")),(0,o.kt)("p",null,"Requirement for the concrete resource type\nto be declared in the implementing contract"),(0,o.kt)("p",null,"Implemented Interfaces:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Provider")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Receiver")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CollectionPublic"))),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("h3",{id:"withdraw"},(0,o.kt)("inlineCode",{parentName:"h3"},"withdraw()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"fun withdraw(withdrawID: UInt64): NFT\n")),(0,o.kt)("p",null,"Removes an NFT from the collection and moves it to the caller"),(0,o.kt)("p",null,"Parameters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"withdrawID : ",(0,o.kt)("em",{parentName:"li"},"The ID of the NFT that will be withdrawn"))),(0,o.kt)("p",null,"Returns: The resource containing the desired NFT"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"deposit"},(0,o.kt)("inlineCode",{parentName:"h3"},"deposit()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"fun deposit(token: NFT)\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"getids"},(0,o.kt)("inlineCode",{parentName:"h3"},"getIDs()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"fun getIDs(): [UInt64]\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"borrownft"},(0,o.kt)("inlineCode",{parentName:"h3"},"borrowNFT()")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"fun borrowNFT(id: UInt64): &NFT\n")),(0,o.kt)("hr",null))}p.isMDXComponent=!0}}]);