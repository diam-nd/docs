"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[380],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return n?i.createElement(m,r(r({ref:t},u),{},{components:n})):i.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99862:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const o={title:"Flow CLI security",sidebar_title:"Security",description:"How to securely use CLI"},r=void 0,l={unversionedId:"Tooling/flow-cli/security",id:"Tooling/flow-cli/security",title:"Flow CLI security",description:"How to securely use CLI",source:"@site/docs/Tooling/flow-cli/security.md",sourceDirName:"Tooling/flow-cli",slug:"/Tooling/flow-cli/security",permalink:"/docs/Tooling/flow-cli/security",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Flow CLI security",sidebar_title:"Security",description:"How to securely use CLI"},sidebar:"tutorialSidebar",previous:{title:"Run Cadence tests with the Flow CLI",permalink:"/docs/Tooling/flow-cli/run-tests"},next:{title:"Send Signed Transaction with the Flow CLI",permalink:"/docs/Tooling/flow-cli/send-signed-transactions"}},c={},s=[{value:"Private Account Configuration File",id:"private-account-configuration-file",level:3},{value:"Main configuration file",id:"main-configuration-file",level:4},{value:"Separate account key file",id:"separate-account-key-file",level:4},{value:"Private configuration file",id:"private-configuration-file",level:4},{value:"Store Configuration in Environment Variables",id:"store-configuration-in-environment-variables",level:3},{value:"Private Dotenv File",id:"private-dotenv-file",level:3},{value:"Composing Multiple Configuration Files",id:"composing-multiple-configuration-files",level:3}],u={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The managing of accounts and private keys is intrinsically dangerous.\nWe must take extra precautions to not expose private key data when using\nthe CLI."),(0,a.kt)("p",null,"The Flow CLI provides several options to secure private account data."),(0,a.kt)("p",null,"\u26a0\ufe0f Warning: please be careful when using private keys in configuration files.\nNever commit private key data to source control.\nIf private key data must be kept in text, we suggest using a separate file\nthat is not checked into source control (e.g. excluded with ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore"),")."),(0,a.kt)("h3",{id:"private-account-configuration-file"},"Private Account Configuration File"),(0,a.kt)("p",null,"Storing an account key to a separate file which is not checked into source control (e.g. excluded with ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore"),")\ncan be the first step towards better security. "),(0,a.kt)("h4",{id:"main-configuration-file"},"Main configuration file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'...\n"accounts": {\n  "my-testnet-account": { \n    "address": "3ae53cb6e3f42a79",\n    "key": {\n      "type": "file",\n      "location": "./my-testnet-account.key"\n    } \n  }\n}\n...\n')),(0,a.kt)("h4",{id:"separate-account-key-file"},"Separate account key file"),(0,a.kt)("p",null,"\u26a0\ufe0f Put this file in ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"my-testnet-account.key")," file only contains the hex-encoded private key."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"334232967f52bd75234ae9037dd4694c1f00baad63a10c35172bf65fbb8ad1111\n")),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"private-configuration-file"},"Private configuration file"),(0,a.kt)("p",null,"\u26a0\ufe0f Put this file in ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// flow.testnet.json\n{\n  "accounts": {\n    "my-testnet-account": {\n      "address": "3ae53cb6e3f42a79",\n      "key": "334232967f52bd75234ae9037dd4694c1f00baad63a10c35172bf65fbb8ad1111"\n    }\n  }\n}\n')),(0,a.kt)("h3",{id:"store-configuration-in-environment-variables"},"Store Configuration in Environment Variables"),(0,a.kt)("p",null,"You can use environment variables for values that should be kept private (e.g. private keys, addresses)."),(0,a.kt)("p",null,"See example below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"PRIVATE_KEY=key flow project deploy\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// flow.json\n{\n  ...\n  "accounts": {\n    "my-testnet-account": {\n      "address": "3ae53cb6e3f42a79",\n      "key": "$PRIVATE_KEY"\n    }\n  }\n  ...\n}\n')),(0,a.kt)("h3",{id:"private-dotenv-file"},"Private Dotenv File"),(0,a.kt)("p",null,"The CLI will load environment variables defined in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file in the active directory, if one exists.\nThese variables can be substituted inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"flow.json"),",\njust like any other environment variable."),(0,a.kt)("p",null,"\u26a0\ufe0f You should never commit ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," to source control,\nespecially if it contains sensitive information\nlike a private key."),(0,a.kt)("p",null,"Example ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"PRIVATE_KEY=123\n")),(0,a.kt)("h3",{id:"composing-multiple-configuration-files"},"Composing Multiple Configuration Files"),(0,a.kt)("p",null,"You can merge multiple configuration files like so:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"flow project deploy -f main.json -f private.json\n")))}f.isMDXComponent=!0}}]);