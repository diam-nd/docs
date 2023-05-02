"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6301],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(m,c(c({ref:t},s),{},{components:n})):o.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:r,c[1]=l;for(var p=2;p<a;p++)c[p]=n[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},27931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={title:"Add Contracts to a Flow Project",sidebar_title:"Add Project Contracts",description:"How to define the Cadence contracts for Flow project"},c=void 0,l={unversionedId:"Tooling/flow-cli/project-contracts",id:"Tooling/flow-cli/project-contracts",title:"Add Contracts to a Flow Project",description:"How to define the Cadence contracts for Flow project",source:"@site/docs/Tooling/flow-cli/project-contracts.md",sourceDirName:"Tooling/flow-cli",slug:"/Tooling/flow-cli/project-contracts",permalink:"/docs/Tooling/flow-cli/project-contracts",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Add Contracts to a Flow Project",sidebar_title:"Add Project Contracts",description:"How to define the Cadence contracts for Flow project"},sidebar:"tutorialSidebar",previous:{title:"Create Flow app from scaffold",permalink:"/docs/Tooling/flow-cli/project-app"},next:{title:"Run Cadence tests with the Flow CLI",permalink:"/docs/Tooling/flow-cli/run-tests"}},i={},p=[{value:"Add a Contract",id:"add-a-contract",level:2},{value:"Define Contract Deployment Targets",id:"define-contract-deployment-targets",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"add-a-contract"},"Add a Contract"),(0,r.kt)("p",null,"To add a contract to your project, update the ",(0,r.kt)("inlineCode",{parentName:"p"},'"contracts"')," section of your ",(0,r.kt)("inlineCode",{parentName:"p"},"flow.json")," file."),(0,r.kt)("p",null,"Contracts are specified as key-value pairs, where the key is the contract name,\nand the value is the location of the Cadence source code."),(0,r.kt)("p",null,"For example, the configuration below will register the\ncontract ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo")," from the ",(0,r.kt)("inlineCode",{parentName:"p"},"FooContract.cdc")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "contracts": {\n    "Foo": "./cadence/contracts/FooContract.cdc"\n  }\n}\n')),(0,r.kt)("h2",{id:"define-contract-deployment-targets"},"Define Contract Deployment Targets"),(0,r.kt)("p",null,"Once a contract is added, it can then be assigned to one or more deployment targets."),(0,r.kt)("p",null,"A deployment target is an account to which the contract will be deployed.\nIn a typical project, a contract has one deployment target per network (e.g. Emulator, Testnet, Mainnet)."),(0,r.kt)("p",null,"Deployment targets are defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},'"deployments"')," section of your ",(0,r.kt)("inlineCode",{parentName:"p"},"flow.json")," file."),(0,r.kt)("p",null,"Targets are grouped by their network, where each network is a mapping from target account to contract list.\nMultiple contracts can be deployed to the same target account."),(0,r.kt)("p",null,"For example, here's how we'd deploy contracts ",(0,r.kt)("inlineCode",{parentName:"p"},"Foo")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Bar")," to the account ",(0,r.kt)("inlineCode",{parentName:"p"},"my-testnet-account"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "contracts": {\n    "Foo": "./cadence/contracts/FooContract.cdc",\n    "Bar": "./cadence/contracts/BarContract.cdc"\n  },\n  "deployments": {\n    "testnet": {\n      "my-testnet-account": ["Foo", "Bar"]\n    }\n  }\n}\n')))}u.isMDXComponent=!0}}]);