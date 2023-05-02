"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2026],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>v});var r=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var l=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(l),m=a,v=s["".concat(p,".").concat(m)]||s[m]||d[m]||n;return l?r.createElement(v,i(i({ref:t},c),{},{components:l})):r.createElement(v,i({ref:t},c))}));function v(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=l.length,i=new Array(n);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<n;u++)i[u]=l[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}m.displayName="MDXCreateElement"},7115:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var r=l(87462),a=(l(67294),l(3905));const n={title:"Derive Public Key with the Flow CLI",sidebar_title:"Derive Public Key",description:"How to derive Flow public key from a private key from the command line"},i=void 0,o={unversionedId:"Tooling/flow-cli/derive-keys",id:"Tooling/flow-cli/derive-keys",title:"Derive Public Key with the Flow CLI",description:"How to derive Flow public key from a private key from the command line",source:"@site/docs/Tooling/flow-cli/derive-keys.md",sourceDirName:"Tooling/flow-cli",slug:"/Tooling/flow-cli/derive-keys",permalink:"/docs/Tooling/flow-cli/derive-keys",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Derive Public Key with the Flow CLI",sidebar_title:"Derive Public Key",description:"How to derive Flow public key from a private key from the command line"},sidebar:"tutorialSidebar",previous:{title:"Deploy a Flow Project",permalink:"/docs/Tooling/flow-cli/deploy-project-contracts"},next:{title:"release-notes-v17",permalink:"/docs/Tooling/flow-cli/developer-updates/release-notes-v17"}},p={},u=[{value:"Example Usage",id:"example-usage",level:2},{value:"Derive Public Key from a Private Key",id:"derive-public-key-from-a-private-key",level:3},{value:"Example response",id:"example-response",level:3},{value:"Arguments",id:"arguments",level:2},{value:"Private Key",id:"private-key",level:3},{value:"Flags",id:"flags",level:2},{value:"Signature Algorithm",id:"signature-algorithm",level:3},{value:"Filter",id:"filter",level:3},{value:"Output",id:"output",level:3},{value:"Save",id:"save",level:3}],c={toc:u},s="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(s,(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Flow CLI provides a command to derive Public Key from a Private Key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"flow keys derive <private key>\n")),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)("h3",{id:"derive-public-key-from-a-private-key"},"Derive Public Key from a Private Key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> flow keys derive c778170793026a9a7a3815dabed68ded445bde7f40a8c66889908197412be89f \n")),(0,a.kt)("h3",{id:"example-response"},"Example response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> flow keys generate\n\n\ud83d\udd34\ufe0f Store Private Key safely and don't share with anyone! \nPrivate Key     c778170793026a9a7a3815dabed68ded445bde7f40a8c66889908197412be89f \nPublic Key      584245c57e5316d6606c53b1ce46dae29f5c9bd26e9e8...aaa5091b2eebcb2ac71c75cf70842878878a2d650f7 \n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"private-key"},"Private Key"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: ",(0,a.kt)("inlineCode",{parentName:"li"},"private key")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: valid private key content")),(0,a.kt)("h2",{id:"flags"},"Flags"),(0,a.kt)("h3",{id:"signature-algorithm"},"Signature Algorithm"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--sig-algo")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,a.kt)("inlineCode",{parentName:"li"},'"ECDSA_P256", "ECDSA_secp256k1"'))),(0,a.kt)("p",null,"Specify the ECDSA signature algorithm for the key pair."),(0,a.kt)("p",null,"Flow supports the secp256k1 and P-256 curves."),(0,a.kt)("h3",{id:"filter"},"Filter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--filter")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-x")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: a case-sensitive name of the result property.")),(0,a.kt)("p",null,"Specify any property name from the result you want to return as the only value."),(0,a.kt)("h3",{id:"output"},"Output"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--output")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-o")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,a.kt)("inlineCode",{parentName:"li"},"json"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"inline"))),(0,a.kt)("p",null,"Specify the format of the command results."),(0,a.kt)("h3",{id:"save"},"Save"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--save")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-s")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: a path in the current filesystem.")),(0,a.kt)("p",null,"Specify the filename where you want the result to be saved"))}d.isMDXComponent=!0}}]);