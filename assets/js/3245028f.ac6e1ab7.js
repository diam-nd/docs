"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={title:"Key Concepts"},i=void 0,c={unversionedId:"Concepts/flow-token/concepts",id:"Concepts/flow-token/concepts",title:"Key Concepts",description:"The FLOW token is an integral part of the overall Flow ecosystem. There is a lot more to cover,",source:"@site/docs/Concepts/flow-token/concepts.mdx",sourceDirName:"Concepts/flow-token",slug:"/Concepts/flow-token/concepts",permalink:"/docs/Concepts/flow-token/concepts",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Key Concepts"},sidebar:"tutorialSidebar",previous:{title:"Flow Wallets",permalink:"/docs/Concepts/flow-token/available-wallets"},next:{title:"FLOW Delivery Instructions",permalink:"/docs/Concepts/flow-token/delivery"}},s={},l=[{value:"Fees",id:"fees",level:2},{value:"Segmented Transaction Fees",id:"segmented-transaction-fees",level:3},{value:"Storage/Account Fees",id:"storageaccount-fees",level:3},{value:"Accounts",id:"accounts",level:2},{value:"Flow Service Account",id:"flow-service-account",level:2},{value:"Tokens &amp; Fees",id:"tokens--fees",level:3},{value:"Network Management",id:"network-management",level:3},{value:"Governance",id:"governance",level:3},{value:"Key Format",id:"key-format",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The FLOW token is an integral part of the overall Flow ecosystem. There is a lot more to cover,\nbut here are a few key concepts."),(0,a.kt)("h2",{id:"fees"},"Fees"),(0,a.kt)("p",null,"There are two types of fees that occur on the Flow blockchain: variable transaction fees and storage fees."),(0,a.kt)("h3",{id:"segmented-transaction-fees"},"Segmented Transaction Fees"),(0,a.kt)("p",null,"Transaction fees are applied only once per transaction, at time of execution."),(0,a.kt)("p",null,"Transactions without a valid payer signature will fail and not be included in a block, prior to when the fee would be charged.\nIf there is no one to charge, the transaction never goes through."),(0,a.kt)("p",null,"If a transaction fails for some other reason, you will still be charged. The fee covers the cost of the network looking at the transaction\nand thus must be paid even if no change to your account is made."),(0,a.kt)("p",null,"Transaction fees are charged based upon how much work is done by the transaction during execution, including creating accounts, reading and updating state, and executing of cadence logic. For more information, see ",(0,a.kt)("a",{parentName:"p",href:"/concepts/variable-transaction-fees"},"Segmented Transaction Fees on Flow"),"."),(0,a.kt)("h3",{id:"storageaccount-fees"},"Storage/Account Fees"),(0,a.kt)("p",null,'The account creation fee is applied only when a new account is created.\nThis fee covers the cost of storing up to 100kB of data in perpetuity.\nThis fee is applied only once and can be "topped up" to add additional storage to an account.'),(0,a.kt)("p",null,"More information: ",(0,a.kt)("a",{parentName:"p",href:"/concepts/storage"},"Storing Data on Flow")),(0,a.kt)("h2",{id:"accounts"},"Accounts"),(0,a.kt)("p",null,"An account on Flow is a record in the chain state that holds the following information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Address"),": unique identifier for the account"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Balance"),": default token balance"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Public Keys"),": public keys authorized on the account"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Code"),": Cadence contracts deployed to the account"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Storage"),": area of the account used to store resource assets")),(0,a.kt)("p",null,"More information: ",(0,a.kt)("a",{parentName:"p",href:"/concepts/accounts-and-keys"},"Accounts & Keys")),(0,a.kt)("h2",{id:"flow-service-account"},"Flow Service Account"),(0,a.kt)("p",null,"The Service Account is a special account in Flow that has special permissions to manage system contracts.\nIt is able to mint tokens, set fees, and update network-level contracts."),(0,a.kt)("h3",{id:"tokens--fees"},"Tokens & Fees"),(0,a.kt)("p",null,"The Service Account has administrator access to the FLOW token smart contract, so it has authorization to mint and burn tokens. It also has access to the transaction fee smart contract and can adjust the fees charged for transactions execution on Flow."),(0,a.kt)("h3",{id:"network-management"},"Network Management"),(0,a.kt)("p",null,"The Service Account administrates other smart contracts that manage various aspects of the Flow network, such as epochs and (in the future) validator staking auctions."),(0,a.kt)("h3",{id:"governance"},"Governance"),(0,a.kt)("p",null,"Besides its special permissions, the Service Account is an account like any other in Flow. During the early phases of Flow's development, the account will be controlled by keys held by Dapper Labs. As Flow matures, the service account will transition to being controlled by a smart contract governed by the Flow community."),(0,a.kt)("h2",{id:"key-format"},"Key Format"),(0,a.kt)("p",null,"We are supporting ECDSA with the curves ",(0,a.kt)("inlineCode",{parentName:"p"},"P-256")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"secp256k1"),". For these curves, the public key is encoded into 64 bytes as ",(0,a.kt)("inlineCode",{parentName:"p"},"X||Y")," where ",(0,a.kt)("inlineCode",{parentName:"p"},"||")," is the concatenation operator."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"X")," is 32 bytes and is the big endian byte encoding of the ",(0,a.kt)("inlineCode",{parentName:"li"},"x"),"-coordinate of the public key padded to 32, i.e. ",(0,a.kt)("inlineCode",{parentName:"li"},"X=x_31||x_30||...||x_0")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"X = x_31*256^31 + ... + x_i*256^i + ... + x_0"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Y")," is 32 bytes and is the big endian byte encoding of the ",(0,a.kt)("inlineCode",{parentName:"li"},"y"),"-coordinate of the public key padded to 32, i.e. ",(0,a.kt)("inlineCode",{parentName:"li"},"Y=y_31||y_30||...||y_0")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"Y = y_31*256^31 + ... + y_i*256^i + ... + y_0"))))}d.isMDXComponent=!0}}]);