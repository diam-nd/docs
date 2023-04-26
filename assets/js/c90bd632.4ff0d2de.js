"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},i=void 0,l={unversionedId:"tools/flow-cli/developer-updates/release-notes-v28",id:"tools/flow-cli/developer-updates/release-notes-v28",title:"release-notes-v28",description:"\u2b06\ufe0f Install or Upgrade",source:"@site/docs/tools/flow-cli/developer-updates/release-notes-v28.md",sourceDirName:"tools/flow-cli/developer-updates",slug:"/tools/flow-cli/developer-updates/release-notes-v28",permalink:"/tools/flow-cli/developer-updates/release-notes-v28",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682541550,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u2b06\ufe0f Install or Upgrade",permalink:"/tools/flow-cli/developer-updates/release-notes-v26"},next:{title:"Create Emulator Snapshot with the Flow CLI",permalink:"/tools/flow-cli/emulator-snapshot"}},s={},p=[{value:"\u2b06\ufe0f Install or Upgrade",id:"\ufe0f-install-or-upgrade",level:2},{value:"\ud83d\udc1e Bug Fixes",id:"-bug-fixes",level:2},{value:"Block Transaction IDs",id:"block-transaction-ids",level:3},{value:"Script Execution Error",id:"script-execution-error",level:3},{value:"Parsing Boolean in Configuration",id:"parsing-boolean-in-configuration",level:3},{value:"Cross-referencing Composed Configuration",id:"cross-referencing-composed-configuration",level:3},{value:"\ud83d\udee0 Improvements",id:"-improvements",level:2},{value:"Arguments Without Types",id:"arguments-without-types",level:3},{value:"Idiomatic Accessors",id:"idiomatic-accessors",level:3},{value:"Configuration Loader Improvement",id:"configuration-loader-improvement",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\ufe0f-install-or-upgrade"},"\u2b06\ufe0f Install or Upgrade"),(0,o.kt)("p",null,"Follow the Flow CLI installation guide for instructions on how to install or upgrade the CLI."),(0,o.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1e Bug Fixes"),(0,o.kt)("h3",{id:"block-transaction-ids"},"Block Transaction IDs"),(0,o.kt)("p",null,"Fetching a block didn't include transaction IDs when using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--include transactions")," flag due to a regression in the command layer."),(0,o.kt)("h3",{id:"script-execution-error"},"Script Execution Error"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Implemented by the community: @bjartek")," \ud83d\ude4c"),(0,o.kt)("p",null,"Script execution error wasn't returned when using hosted gateway\nimplementation."),(0,o.kt)("h3",{id:"parsing-boolean-in-configuration"},"Parsing Boolean in Configuration"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Implemented by the community: @bluesign")," \ud83d\ude4c"),(0,o.kt)("p",null,"Parsing booleans in the flow configuration deployment arguments weren't working properly. This bugfix addresses that problem and allows you to pass boolean type in the ",(0,o.kt)("inlineCode",{parentName:"p"},"args")," section such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'...\n"args": [\n    {"type": "Bool", "value": true}\n]\n...\n')),(0,o.kt)("h3",{id:"cross-referencing-composed-configuration"},"Cross-referencing Composed Configuration"),(0,o.kt)("p",null,"Cross-referencing values in the composed configuration wasn't working correctly as the validation was done per configuration instead on the higher level on the composed configuration."),(0,o.kt)("h2",{id:"-improvements"},"\ud83d\udee0 Improvements"),(0,o.kt)("h3",{id:"arguments-without-types"},"Arguments Without Types"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Implemented by the community: @bluesign")," \ud83d\ude4c"),(0,o.kt)("p",null,"Great improvement to the argument parsing. CLI now infers types from transaction parameters and script parameters, so it's not needed anymore to specify the type explicitly. This new improvement also supports passing arrays and dictionaries."),(0,o.kt)("p",null,"The new command format is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"flow scripts execute <filename> [<argument> <argument> ...] [flags]\n")),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'> flow scripts execute script.cdc "Meow" "Woof"\n')),(0,o.kt)("p",null,"In the example above the string, type is inferred from the script source code."),(0,o.kt)("p",null,"More complex example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"> flow transactions send tx1.cdc Foo 1 2 10.9 0x1 '[123,222]' '[\"a\",\"b\"]'\n")),(0,o.kt)("p",null,"Transaction code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"transaction(a: String, b: Int, c: UInt16, d: UFix64, e: Address, f: [Int], g: [String]) {\n    prepare(authorizer: AuthAccount) {}\n}\n")),(0,o.kt)("h3",{id:"idiomatic-accessors"},"Idiomatic Accessors"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Implemented by the community: @bjartek")," \ud83d\ude4c"),(0,o.kt)("p",null,"Getter methods were rewritten in idiomatic Go, containing a value and an error. This solves some edge case bugs where the value is missing but the returned value is not\nchecked for nil."),(0,o.kt)("h3",{id:"configuration-loader-improvement"},"Configuration Loader Improvement"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Implemented by the community: @bjartek")," \ud83d\ude4c"),(0,o.kt)("p",null,"Configuration loading logic was improved, and it now only loads global configuration if local isn't present. Furthermore, it improves the ",(0,o.kt)("inlineCode",{parentName:"p"},"configuration add")," commands that now only allow passing a single config by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"-f")," flag and it requires at least one local configuration to be present."))}d.isMDXComponent=!0}}]);