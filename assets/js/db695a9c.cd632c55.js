"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1162],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,f=p["".concat(l,".").concat(u)]||p[u]||h[u]||o;return a?n.createElement(f,s(s({ref:t},d),{},{components:a})):n.createElement(f,s({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26414:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={title:"NFT Drop Strategies",sidebar_title:"NFT Drop Strategies"},s=void 0,i={unversionedId:"Tutorials/NFT-drop-styles",id:"Tutorials/NFT-drop-styles",title:"NFT Drop Strategies",description:"Exploring Different Strategies for NFT Drops",source:"@site/docs/Tutorials/NFT-drop-styles.md",sourceDirName:"Tutorials",slug:"/Tutorials/NFT-drop-styles",permalink:"/docs/Tutorials/NFT-drop-styles",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"NFT Drop Strategies",sidebar_title:"NFT Drop Strategies"},sidebar:"tutorialSidebar",previous:{title:"Dapp Architectures on the Flow Blockchain",permalink:"/docs/Tutorials/DappArchitectures"},next:{title:"Smart Contract Testing Guidelines",permalink:"/docs/Tutorials/contract-testing"}},l={},c=[{value:"Exploring Different Strategies for NFT Drops",id:"exploring-different-strategies-for-nft-drops",level:2},{value:"On-chain Sale of Pre-Minted NFTs",id:"on-chain-sale-of-pre-minted-nfts",level:2},{value:"Off-chain Sale of Pre-Minted NFTs",id:"off-chain-sale-of-pre-minted-nfts",level:2},{value:"Pre-sale of NFTs With Deferred Delivery",id:"pre-sale-of-nfts-with-deferred-delivery",level:2},{value:"On-chain On-demand Mint and Sale of NFTs",id:"on-chain-on-demand-mint-and-sale-of-nfts",level:2},{value:"Off-chain On-demand Mint and Sale of NFTs",id:"off-chain-on-demand-mint-and-sale-of-nfts",level:2},{value:"On-chain Sale of NFTs Gated by Vouchers",id:"on-chain-sale-of-nfts-gated-by-vouchers",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:c},p="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"exploring-different-strategies-for-nft-drops"},"Exploring Different Strategies for NFT Drops"),(0,r.kt)("p",null,"This is a brief overview of different strategies for releasing NFTs.\nEach strategy focuses on a few key aspects of NFT drops:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Where are the NFTs sold?"),(0,r.kt)("li",{parentName:"ul"},"When are the NFTs minted?"),(0,r.kt)("li",{parentName:"ul"},"Who is responsible for payment processing?"),(0,r.kt)("li",{parentName:"ul"},"When do buyers receive their NFTs?"),(0,r.kt)("li",{parentName:"ul"},"How much do buyers trust your project?"),(0,r.kt)("li",{parentName:"ul"},"How much do you trust NFT buyers?")),(0,r.kt)("h2",{id:"on-chain-sale-of-pre-minted-nfts"},"On-chain Sale of Pre-Minted NFTs"),(0,r.kt)("p",null,"With this strategy, the NFTs are pre-minted, so they are all minted before being sold.\nThen they are bought and sold in an on-chain storefront, this means that completed transactions are reflected on the blockchain. "),(0,r.kt)("p",null,"This allows a dapp to grow without dealing with additional payment rails because the blockchain handles the payment.\nNFT buyers like this strategy because they don't have to trust the dapp to complete a transaction successfully, all they need is their wallet.\nThis strategy doesn't need a backend, which lowers the costs and complexity for developers.\nHowever, while the lack of Know Your Customer (KYC) makes this strategy frictionless for buyers and developers, it also leaves the dapp susceptible to bot attacks because the developer can't verify that the customers are real people."),(0,r.kt)("p",null,"Real-world examples of dapps using this strategy include: ",(0,r.kt)("a",{parentName:"p",href:"https://viv3.com/"},"Viv3"),", ",(0,r.kt)("a",{parentName:"p",href:"https://bay.blocto.app/"},"BloctoBay"),", ",(0,r.kt)("a",{parentName:"p",href:"https://chainmonsters.com/"},"Chainmonsters"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://nbatopshot.com/"},"NBA Topshot"),".\n",(0,r.kt)("img",{alt:"On-chain pre-minted NFT diagram",src:a(4908).Z,width:"694",height:"532"})),(0,r.kt)("h2",{id:"off-chain-sale-of-pre-minted-nfts"},"Off-chain Sale of Pre-Minted NFTs"),(0,r.kt)("p",null,"Pre-minting the NFTs and selling them through the dapp\u2019s website is a similar alternative strategy.\nThis allows the dapp developers to have greater control over the NFT sale process, allowing developers to prevent bots from accessing the storefront. "),(0,r.kt)("p",null,"Another benefit to this strategy is that developers can implement traditional payment rails, like credit cards, into the storefront in addition to crypto payments.\nThis benefits both NFT sellers and buyers because they can use whichever payment method is most convenient, which opens up an NFT storefront to a broader buying audience."),(0,r.kt)("p",null,"This strategy requires NFT buyers to trust the dapp more, especially with crypto payments, because they are irreversible.\nIntegrating payment processors for traditional payment rails may also be a challenge in some markets, leading to very different user experiences for NFT buyers.\nAs a storefront owner, you also risk chargeback issues when you implement traditional payment rails."),(0,r.kt)("p",null,"Real-world examples include ",(0,r.kt)("a",{parentName:"p",href:"https://vault.cnn.com/"},"CNN Vault")," and ",(0,r.kt)("a",{parentName:"p",href:"https://app.rcrdshp.com/"},"RCRDSHP"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Off-chain pre-minted NFT diagram",src:a(1202).Z,width:"617",height:"451"})),(0,r.kt)("h2",{id:"pre-sale-of-nfts-with-deferred-delivery"},"Pre-sale of NFTs With Deferred Delivery"),(0,r.kt)("p",null,"Pre-selling claims to NFTs and agreeing to deliver them at a later date is also a popular strategy.\nThis is a great way to gauge interest in your project before investing in content or technology.\nBuyers receive their NFTs when your dapp is built, and you're ready to deliver content.\nYou can implement smart contracts for NFT pre-sales, and you can handle the transaction either on-chain or off-chain."),(0,r.kt)("p",null,"For this strategy to succeed, NFT buyers need to have a lot of trust in your project.\nBuyers can't choose which NFT they buy because it doesn't exist yet, and this strategy doesn't leave much room for secondary markets."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Pre-sale NFT deferred delivery diagram",src:a(16819).Z,width:"752",height:"610"})),(0,r.kt)("h2",{id:"on-chain-on-demand-mint-and-sale-of-nfts"},"On-chain On-demand Mint and Sale of NFTs"),(0,r.kt)("p",null,"With this strategy, NFTs are minted and sold when a buyer wants to buy them.\nThis strategy is less common than others because building it can be complex.\nTo accomplish this you need to have custom NFT sale contracts for each buyer, and you need to generate unique content for each user.\nGenerating purely random and unique content is challenging, and managing content drops is also a difficult problem to solve.\nAlso, because transactions are on-chain, your dapp will be susceptible to bot attacks."),(0,r.kt)("p",null,"But, there are some very unique benefits to this strategy.\nThe scarcity of the NFTs is predictable, and your dapp will never have unsold inventory.\nThis strategy also makes your project as decentralized as possible, because you don't need to maintain a centralized inventory or payment process."),(0,r.kt)("p",null,"Real-world examples include: ",(0,r.kt)("a",{parentName:"p",href:"https://bitku.art"},"Bitku"),", AMM driven NFT minting, and ",(0,r.kt)("a",{parentName:"p",href:"https://www.flowverse.co/applications/cryptopiggos"},"CryptoPiggos"),"\n",(0,r.kt)("img",{alt:"On-chain on-demand NFT diagram",src:a(30794).Z,width:"691",height:"537"})),(0,r.kt)("h2",{id:"off-chain-on-demand-mint-and-sale-of-nfts"},"Off-chain On-demand Mint and Sale of NFTs"),(0,r.kt)("p",null,"This strategy also uses on-demand minting, however, transactions are made off-chain so that developers can have greater control over the NFT sale process.\nWith on-demand minting, a dapp using this strategy will never have unsold inventory, and it benefits from the ability to implement traditional payment rails, like credit cards.\nDevelopers can also use KYC to prevent bots or other unauthorized buyers, from buying NFTs."),(0,r.kt)("p",null,"While this strategy has some very unique benefits, it is complex to set up, which leads to unique challenges.\nThe combination of off-chain transactions and on-demand minting means that this strategy needs more blockchain transactions to complete the NFT purchase flow.\nAlso, like other off-chain strategies, NFT buyers need to trust the dapp, and payment processors may be challenging to implement in some markets."),(0,r.kt)("p",null,"A real-world example of this strategy is ",(0,r.kt)("a",{parentName:"p",href:"https://dooverse.io/"},"Dooverse"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Off-chain on-demand NFT diagram",src:a(49559).Z,width:"584",height:"451"})),(0,r.kt)("h2",{id:"on-chain-sale-of-nfts-gated-by-vouchers"},"On-chain Sale of NFTs Gated by Vouchers"),(0,r.kt)("p",null,"The final strategy we're looking at allows NFT buyers to register on your website for vouchers that they can exchange for NFTs.\nThe vouchers act as authorization for a buyer, allowing your website to control who is allowed to buy your NFTs, while still gaining the benefits of on-chain transactions.\nThis is a great way to implement on-chain transactions while preventing bots and unauthorized buyers from accessing your NFTs."),(0,r.kt)("p",null,"However, this 2-step process may be too much friction for some NFT buyers, which may limit your NFT sales.\nAdditionally, the voucher system is imperfect, and there may be an unauthorized secondary market for your project's vouchers.\nReal-world examples of this strategy include ",(0,r.kt)("a",{parentName:"p",href:"https://www.jambb.com/"},"JAMBB")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.onflow.org/post/alpha-innovation-series-round-labs-on-cadence-and-building-on-flow"},"RoundLabs/Faze"),".\n",(0,r.kt)("img",{alt:"On-chain NFT with vouchers diagram",src:a(46604).Z,width:"841",height:"697"})),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Choosing an NFT drop strategy can be challenging.\nEach strategy comes with its own benefits and challenges, and it's important to weigh which factors are most important for your project.\nFor more examples of real-world NFT projects using a variety of different strategies, have a look at ",(0,r.kt)("a",{parentName:"p",href:"https://www.flowverse.co/"},"Flowverse")))}h.isMDXComponent=!0},4908:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image1-b4ddd4fc4cd63cf3fb4d98ee58f850bc.png"},1202:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image2-8a9995fdfa7b82012538ea8f0246e909.png"},16819:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image3-97b24c9a819fac3cbc98fb358ea5728b.png"},30794:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image4-937a26d3ec3131d37d5dfddcf7686347.png"},49559:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image5-bac91a6765eaeab7ea05c7cff80b7a56.png"},46604:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image6-3868864697fa6bdc2eea29bb6a546f8b.png"}}]);