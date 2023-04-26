"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1620],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={},i="Development",l={unversionedId:"cadence/development",id:"cadence/development",title:"Development",description:"Running the latest version of the Language Server in the Visual Studio Code Extension",source:"@site/docs/cadence/development.md",sourceDirName:"cadence",slug:"/cadence/development",permalink:"/cadence/development",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682541550,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cadence Design Patterns",permalink:"/cadence/design-patterns"},next:{title:"GoLand",permalink:"/cadence/goland"}},c={},s=[{value:"Running the latest version of the Language Server in the Visual Studio Code Extension",id:"running-the-latest-version-of-the-language-server-in-the-visual-studio-code-extension",level:2},{value:"Debugging the Language Server",id:"debugging-the-language-server",level:2},{value:"Tools",id:"tools",level:2},{value:"How is it possible to detect non-determinism and data races in the checker?",id:"how-is-it-possible-to-detect-non-determinism-and-data-races-in-the-checker",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"development"},"Development"),(0,r.kt)("h2",{id:"running-the-latest-version-of-the-language-server-in-the-visual-studio-code-extension"},"Running the latest version of the Language Server in the Visual Studio Code Extension"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ensure that a ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," statement exists in ",(0,r.kt)("inlineCode",{parentName:"p"},"languageserver/go.mod"),", so that the language server compiles with the local changes to Cadence.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Find the Visual Studio Code preference named "Cadence: Flow Command" and change it to:'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-text"},"/path/to/cadence/languageserver/run.sh\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Restart Visual Studio Code"))),(0,r.kt)("p",null,"This will automatically recompile the language server every time it is started."),(0,r.kt)("h2",{id:"debugging-the-language-server"},"Debugging the Language Server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Follow the instructions above (see "Running the latest version of the Language Server in the Visual Studio Code Extension")')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Attach to the process of the language server started by Visual Studio Code."),(0,r.kt)("p",{parentName:"li"},"For example, in Goland, choose Run -> Attach to Process."),(0,r.kt)("p",{parentName:"li"},"This requires gops to be installed, which can be done using ",(0,r.kt)("inlineCode",{parentName:"p"},"go get github.com/google/gops"),"."))),(0,r.kt)("h2",{id:"tools"},"Tools"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/cadence/tree/master/runtime/cmd"},(0,r.kt)("inlineCode",{parentName:"a"},"runtime/cmd")," directory"),"\ncontains command-line tools that are useful when working on the implementation for Cadence, or with Cadence code:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/cadence/tree/master/runtime/cmd/parse"},(0,r.kt)("inlineCode",{parentName:"a"},"parse"))," tool\ncan be used to parse (syntactically analyze) Cadence code.\nBy default, it reports syntactical errors in the given Cadence program, if any, in a human-readable format.\nBy providing the ",(0,r.kt)("inlineCode",{parentName:"p"},"-json")," it returns the AST of the program in JSON format if the given program is syntactically valid,\nor syntactical errors in JSON format (including position information)."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'$ echo "X" |  go run ./runtime/cmd/parse\nerror: unexpected token: identifier\n --\x3e :1:0\n  |\n1 | X\n  | ^\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'$ echo "let x = 1" |  go run ./runtime/cmd/parse -json\n[\n  {\n    "program": {\n      "Type": "Program",\n      "Declarations": [\n        {\n          "Type": "VariableDeclaration",\n          "StartPos": {\n            "Offset": 0,\n            "Line": 1,\n            "Column": 0\n          },\n          "EndPos": {\n            "Offset": 8,\n            "Line": 1,\n            "Column": 8\n          },\n          [...]\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/cadence/tree/master/runtime/cmd/check"},(0,r.kt)("inlineCode",{parentName:"a"},"check"))," tool\ncan be used to check (semantically analyze) Cadence code.\nBy default, it reports semantic errors in the given Cadence program, if any, in a human-readable format.\nBy providing the ",(0,r.kt)("inlineCode",{parentName:"p"},"-json")," it returns the AST in JSON format, or semantic errors in JSON format (including position information)."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'$ echo "let x = 1" |  go run ./runtime/cmd/check                                                                                                                                                                                        1 \u21b5\nerror: error: missing access modifier for constant\n --\x3e :1:0\n  |\n1 | let x = 1\n  | ^\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/cadence/tree/master/runtime/cmd/check"},(0,r.kt)("inlineCode",{parentName:"a"},"main"))," tools\ncan be used to execute Cadence programs.\nIf a no argument is provided, the REPL (Read-Eval-Print-Loop) is started.\nIf an argument is provided, the Cadence program at the given path is executed.\nThe program must have a function named ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," which has no parameters and no return type."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," $ go run ./runtime/cmd/main                                                                                                                                                                                                           130 \u21b5\n Welcome to Cadence v0.12.3!\n Type '.help' for assistance.\n\n 1> let x = 2\n 2> x + 3\n 5\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'$ echo \'pub fun main () { log("Hello, world!") }\' > hello.cdc\n$ go run ./runtime/cmd/main hello.cdc\n"Hello, world!"\n')))),(0,r.kt)("h2",{id:"how-is-it-possible-to-detect-non-determinism-and-data-races-in-the-checker"},"How is it possible to detect non-determinism and data races in the checker?"),(0,r.kt)("p",null,"Run the checker tests with the ",(0,r.kt)("inlineCode",{parentName:"p"},"cadence.checkConcurrently")," flag, e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"go test -race -v ./runtime/tests/checker -cadence.checkConcurrently=10\n")),(0,r.kt)("p",null,"This runs each check of a checker test 10 times, concurrently,\nand asserts that the checker errors of all checks are equal."))}u.isMDXComponent=!0}}]);