"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1502],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"Execute Scripts",sidebar_title:"Execute Scripts",description:"How to execute scripts"},o=void 0,i={unversionedId:"Tooling/flow-js-testing/execute-scripts",id:"Tooling/flow-js-testing/execute-scripts",title:"Execute Scripts",description:"How to execute scripts",source:"@site/docs/Tooling/flow-js-testing/execute-scripts.md",sourceDirName:"Tooling/flow-js-testing",slug:"/Tooling/flow-js-testing/execute-scripts",permalink:"/docs/Tooling/flow-js-testing/execute-scripts",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Execute Scripts",sidebar_title:"Execute Scripts",description:"How to execute scripts"},sidebar:"tutorialSidebar",previous:{title:"Additional Examples",permalink:"/docs/Tooling/flow-js-testing/examples/metadata"},next:{title:"FLOW Token Management",permalink:"/docs/Tooling/flow-js-testing/flow-token"}},s={},p=[{value:"<code>executeScript(props)</code>",id:"executescriptprops",level:2},{value:"Arguments",id:"arguments",level:4},{value:"Returns",id:"returns",level:4},{value:"Usage",id:"usage",level:4},{value:"<code>executeScript(name: string, args: [any])</code>",id:"executescriptname-string-args-any",level:2},{value:"Arguments",id:"arguments-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Usage",id:"usage-1",level:4}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It is often the case that you need to query current state of the network. For example, to check balance of the\naccount, read public value of the contract or ensure that user has specific resource in their storage."),(0,r.kt)("p",null,"We abstract this interaction into single method called ",(0,r.kt)("inlineCode",{parentName:"p"},"executeScript"),". Method have 2 different signatures."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Required:")," Your project must follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Tooling/flow-js-testing/structure"},"required structure")," it must be ",(0,r.kt)("a",{parentName:"p",href:"/docs/Tooling/flow-js-testing/init"},"initialized")," to use the following functions.")),(0,r.kt)("h2",{id:"executescriptprops"},(0,r.kt)("inlineCode",{parentName:"h2"},"executeScript(props)")),(0,r.kt)("p",null,"Provides explicit control over how you pass values."),(0,r.kt)("h4",{id:"arguments"},"Arguments"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"props")," object accepts following fields:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"code")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"string representation of Cadence script")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"name of the file in ",(0,r.kt)("inlineCode",{parentName:"td"},"scripts")," folder to use (sans ",(0,r.kt)("inlineCode",{parentName:"td"},".cdc")," extension)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:null},"[any]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"an array of arguments to pass to script. Optional if script does not expect any arguments.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"transformers")),(0,r.kt)("td",{parentName:"tr",align:null},"[",(0,r.kt)("a",{parentName:"td",href:"/docs/Tooling/flow-js-testing/api#cadencetransformer"},"CadenceTransformer"),"]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"an array of operators to modify the code, before submitting it to network")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Required:")," Either ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," field shall be specified. Method will throw an error if both of them are empty.\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," field provided, framework will source code from file and override value passed via ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," field.")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.onflow.org/fcl/reference/api/#responseobject"},"ResponseObject")),(0,r.kt)("td",{parentName:"tr",align:null},"Script result")))),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import path from "path"\nimport {init, emulator, executeScript} from "@onflow/flow-js-testing"\n\nconst main = async () => {\n  const basePath = path.resolve(__dirname, "../cadence")\n\n  // Init framework\n  init(basePath)\n  // Start emulator\n  await emulator.start()\n\n  // Define code and arguments we want to pass\n  const code = `\n    pub fun main(message: String): Int{\n      log(message)\n\n      return 42\n    }\n  `\n  const args = ["Hello, from Cadence"]\n\n  const [result, error, logs] = await executeScript({code, args})\n  console.log({result}, {error}, {logs})\n\n  // Stop emulator instance\n  await emulator.stop()\n}\n\nmain()\n')),(0,r.kt)("h2",{id:"executescriptname-string-args-any"},(0,r.kt)("inlineCode",{parentName:"h2"},"executeScript(name: string, args: [any])")),(0,r.kt)("p",null,"This signature provides simplified way of executing a script, since most of the time you will utilize existing\nCadence files."),(0,r.kt)("h4",{id:"arguments-1"},"Arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Optional"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"name of the file in ",(0,r.kt)("inlineCode",{parentName:"td"},"scripts")," folder to use (sans ",(0,r.kt)("inlineCode",{parentName:"td"},".cdc")," extension)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"args")),(0,r.kt)("td",{parentName:"tr",align:null},"[any]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"an array of arguments to pass to script. Optional if scripts don't expect any arguments. Default: ",(0,r.kt)("inlineCode",{parentName:"td"},"[]"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://docs.onflow.org/fcl/reference/api/#responseobject"},"ResponseObject")),(0,r.kt)("td",{parentName:"tr",align:null},"Script result")))),(0,r.kt)("h4",{id:"usage-1"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import path from "path"\nimport {init, emulator, executeScript} from "@onflow/flow-js-testing"\n\nconst main = async () => {\n  const basePath = path.resolve(__dirname, "../cadence")\n\n  // Init framework\n  init(basePath)\n  // Start emulator\n  await emulator.start()\n\n  // Define arguments we want to pass\n  const args = ["Hello, from Cadence"]\n\n  // We assume there is a file `scripts/log-message.cdc` under base path\n  const [result, error, logs] = await executeScript("log-message", args)\n  console.log({result}, {error}, {logs})\n\n  await emulator.stop()\n}\n\nmain()\n')))}d.isMDXComponent=!0}}]);