"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[9755],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>k});var n=l(67294);function i(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){i(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,n,i=function(e,t){if(null==e)return{};var l,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var c=n.createContext({}),d=function(e){var t=n.useContext(c),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=d(l),m=i,k=p["".concat(c,".").concat(m)]||p[m]||s[m]||o;return l?n.createElement(k,a(a({ref:t},u),{},{components:l})):n.createElement(k,a({ref:t},u))}));function k(e,t){var l=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=l.length,a=new Array(o);a[0]=m;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[p]="string"==typeof e?e:i,a[1]=r;for(var d=2;d<o;d++)a[d]=l[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},84168:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=l(87462),i=(l(67294),l(3905));const o={title:"Decode Public Keys with the Flow CLI",sidebar_title:"Decode Public Keys",description:"How to decode Flow public keys from the command line"},a=void 0,r={unversionedId:"Tooling/flow-cli/decode-keys",id:"Tooling/flow-cli/decode-keys",title:"Decode Public Keys with the Flow CLI",description:"How to decode Flow public keys from the command line",source:"@site/docs/Tooling/flow-cli/decode-keys.md",sourceDirName:"Tooling/flow-cli",slug:"/Tooling/flow-cli/decode-keys",permalink:"/docs/Tooling/flow-cli/decode-keys",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Decode Public Keys with the Flow CLI",sidebar_title:"Decode Public Keys",description:"How to decode Flow public keys from the command line"},sidebar:"tutorialSidebar",previous:{title:"Data Collection",permalink:"/docs/Tooling/flow-cli/data-collection"},next:{title:"Decode a Transaction with the Flow CLI",permalink:"/docs/Tooling/flow-cli/decode-transactions"}},c={},d=[{value:"Example Usage",id:"example-usage",level:2},{value:"Decode RLP Encoded Public Key",id:"decode-rlp-encoded-public-key",level:3},{value:"Decode PEM Encoded Public Key From File",id:"decode-pem-encoded-public-key-from-file",level:3},{value:"Arguments",id:"arguments",level:2},{value:"Encoding",id:"encoding",level:3},{value:"Optional: Public Key",id:"optional-public-key",level:3},{value:"Flags",id:"flags",level:2},{value:"From File",id:"from-file",level:3},{value:"Filter",id:"filter",level:3},{value:"Output",id:"output",level:3},{value:"Save",id:"save",level:3},{value:"Version Check",id:"version-check",level:3}],u={toc:d},p="wrapper";function s(e){let{components:t,...l}=e;return(0,i.kt)(p,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Flow CLI provides a command to decode encoded public account keys."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"flow keys decode <rlp|pem> <encoded public key>\n")),(0,i.kt)("h2",{id:"example-usage"},"Example Usage"),(0,i.kt)("h3",{id:"decode-rlp-encoded-public-key"},"Decode RLP Encoded Public Key"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"> flow keys decode rlp f847b84084d716c14b051ad6b001624f738f5d302636e6b07cc75e4530af7776a4368a2b586dbefc0564ee28384c2696f178cbed52e62811bcc9ecb59568c996d342db2402038203e8\n\nPublic Key       84d716c1...bcc9ecb59568c996d342db24 \nSignature algorithm      ECDSA_P256\nHash algorithm       SHA3_256\nWeight           1000\nRevoked          false\n")),(0,i.kt)("h3",{id:"decode-pem-encoded-public-key-from-file"},"Decode PEM Encoded Public Key From File"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"> flow keys decode pem --from-file key.pem\n\nPublic Key       d479b3c...c4615360039a6660a366a95f \nSignature algorithm      ECDSA_P256\nHash algorithm       UNKNOWN\nRevoked          false\n\n")),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("h3",{id:"encoding"},"Encoding"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,i.kt)("inlineCode",{parentName:"li"},"rlp"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"pem")," ")),(0,i.kt)("p",null,"First argument specifies a valid encoding of the public key provided."),(0,i.kt)("h3",{id:"optional-public-key"},"Optional: Public Key"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Name: ",(0,i.kt)("inlineCode",{parentName:"li"},"encoded public key")),(0,i.kt)("li",{parentName:"ul"},"Valid inputs: valid encoded key content")),(0,i.kt)("p",null,"Optional second argument provides content of the encoded public key.\nIf this argument is omitted the ",(0,i.kt)("inlineCode",{parentName:"p"},"--from-file")," must be used instead.  "),(0,i.kt)("h2",{id:"flags"},"Flags"),(0,i.kt)("h3",{id:"from-file"},"From File"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Flag: ",(0,i.kt)("inlineCode",{parentName:"li"},"--from-file")),(0,i.kt)("li",{parentName:"ul"},"Valid inputs: valid filepath")),(0,i.kt)("p",null,"Provide file with the encoded public key. "),(0,i.kt)("h3",{id:"filter"},"Filter"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Flag: ",(0,i.kt)("inlineCode",{parentName:"li"},"--filter")),(0,i.kt)("li",{parentName:"ul"},"Short Flag: ",(0,i.kt)("inlineCode",{parentName:"li"},"-x")),(0,i.kt)("li",{parentName:"ul"},"Valid inputs: a case-sensitive name of the result property.")),(0,i.kt)("p",null,"Specify any property name from the result you want to return as the only value."),(0,i.kt)("h3",{id:"output"},"Output"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Flag: ",(0,i.kt)("inlineCode",{parentName:"li"},"--output")),(0,i.kt)("li",{parentName:"ul"},"Short Flag: ",(0,i.kt)("inlineCode",{parentName:"li"},"-o")),(0,i.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,i.kt)("inlineCode",{parentName:"li"},"json"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"inline"))),(0,i.kt)("p",null,"Specify the format of the command results."),(0,i.kt)("h3",{id:"save"},"Save"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Flag: ",(0,i.kt)("inlineCode",{parentName:"li"},"--save")),(0,i.kt)("li",{parentName:"ul"},"Short Flag: ",(0,i.kt)("inlineCode",{parentName:"li"},"-s")),(0,i.kt)("li",{parentName:"ul"},"Valid inputs: a path in the current filesystem.")),(0,i.kt)("p",null,"Specify the filename where you want the result to be saved"),(0,i.kt)("h3",{id:"version-check"},"Version Check"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Flag: ",(0,i.kt)("inlineCode",{parentName:"li"},"--skip-version-check")),(0,i.kt)("li",{parentName:"ul"},"Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"))),(0,i.kt)("p",null,"Skip version check during start up to speed up process for slow connections."))}s.isMDXComponent=!0}}]);