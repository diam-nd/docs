"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3043],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=l.createContext({}),p=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,m=d["".concat(u,".").concat(k)]||d[k]||c[k]||i;return n?l.createElement(m,o(o({ref:t},s),{},{components:n})):l.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[d]="string"==typeof e?e:a,o[1]=r;for(var p=2;p<i;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},46814:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var l=n(87462),a=(n(67294),n(3905));const i={title:"Get Events with the Flow CLI",sidebar_title:"Get Event",description:"How to get an event from the command line"},o=void 0,r={unversionedId:"Tooling/flow-cli/get-events",id:"Tooling/flow-cli/get-events",title:"Get Events with the Flow CLI",description:"How to get an event from the command line",source:"@site/docs/Tooling/flow-cli/get-events.md",sourceDirName:"Tooling/flow-cli",slug:"/Tooling/flow-cli/get-events",permalink:"/docs/Tooling/flow-cli/get-events",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Get Events with the Flow CLI",sidebar_title:"Get Event",description:"How to get an event from the command line"},sidebar:"tutorialSidebar",previous:{title:"Get Collection with the Flow CLI",permalink:"/docs/Tooling/flow-cli/get-collections"},next:{title:"Get Network Status",permalink:"/docs/Tooling/flow-cli/get-status"}},u={},p=[{value:"Example Usage",id:"example-usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Event Name",id:"event-name",level:3},{value:"Flags",id:"flags",level:2},{value:"Start",id:"start",level:3},{value:"End",id:"end",level:3},{value:"Last",id:"last",level:3},{value:"Batch",id:"batch",level:3},{value:"Workers",id:"workers",level:3},{value:"Host",id:"host",level:3},{value:"Network Key",id:"network-key",level:3},{value:"Network",id:"network",level:3},{value:"Filter",id:"filter",level:3},{value:"Output",id:"output",level:3},{value:"Save",id:"save",level:3},{value:"Log",id:"log",level:3},{value:"Configuration",id:"configuration",level:3},{value:"Version Check",id:"version-check",level:3}],s={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Use the event command to fetch a single or multiple events in a specific range of blocks.\nYou can provide start and end block height range, but also specify number of the latest blocks to\nbe used to search for specified event. Events are fetched concurrently by using multiple workers which\noptionally you can also control by specifying the flags."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"flow events get <event_name>\n")),(0,a.kt)("h2",{id:"example-usage"},"Example Usage"),(0,a.kt)("p",null,"Get the event by name ",(0,a.kt)("inlineCode",{parentName:"p"},"A.0b2a3299cc857e29.TopShot.Deposit")," from the last 20 blocks on mainnet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> flow events get A.0b2a3299cc857e29.TopShot.Deposit --last 20 --network mainnet\n\n  Events Block #12913388:\n     Index   2\n     Type    A.0b2a3299cc857e29.TopShot.Deposit\n     Tx ID   0a1e6cdc4eeda0e23402193d7ad5ba01a175df4c08f48fa7ac8d53e811c5357c\n     Values\n         id (UInt64)    3102159\n         to ({}?)   24214cf0faa7844d\n\n     Index   2\n     Type    A.0b2a3299cc857e29.TopShot.Deposit\n     Tx ID   1fa5e64dcdc8ed5dad87ba58207ee4c058feb38fa271fff659ab992dc2ec2645\n     Values\n         id (UInt64)    5178448\n         to ({}?)   26c96b6c2c31e419\n\n     Index   9\n     Type    A.0b2a3299cc857e29.TopShot.Deposit\n     Tx ID   262ab3996bdf98f5f15804c12b4e5d4e89c0fa9b71d57be4d7c6e8288c507c4a\n     Values\n         id (UInt64)    1530408\n         to ({}?)   2da5c6d1a541971b\n\n...\n")),(0,a.kt)("p",null,"Get two events ",(0,a.kt)("inlineCode",{parentName:"p"},"A.1654653399040a61.FlowToken.TokensDeposited"),"\nand ",(0,a.kt)("inlineCode",{parentName:"p"},"A.1654653399040a61.FlowToken.TokensWithdrawn")," in the block height range on mainnet. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"> flow events get \\\n  A.1654653399040a61.FlowToken.TokensDeposited \\\n  A.1654653399040a61.FlowToken.TokensWithdrawn \\ \n  --start 11559500 --end 11559600 --network mainnet\n  \n  Events Block #17015045:\n    Index   0\n    Type    A.1654653399040a61.FlowToken.TokensWithdrawn\n    Tx ID   6dcf60d54036acb52b2e01e69890ce34c3146849998d64364200e4b21e9ac7f1\n    Values\n        - amount (UFix64): 0.00100000 \n        - from (Address?): 0x9e06eebf494e2d78 \n\n    Index   1\n    Type    A.1654653399040a61.FlowToken.TokensWithdrawn\n    Tx ID   6dcf60d54036acb52b2e01e69890ce34c3146849998d64364200e4b21e9ac7f1\n    Values\n        - amount (UFix64): 0.00100000 \n        - from (Never?): nil \n\n  Events Block #17015047:\n    Index   0\n    Type    A.1654653399040a61.FlowToken.TokensWithdrawn\n    Tx ID   24979a3c0203f514f7f5822cc8ae7046e24f25d4a775bef697a654898fb7673e\n    Values\n        - amount (UFix64): 0.00100000 \n        - from (Address?): 0x18eb4ee6b3c026d2 \n\n    Index   1\n    Type    A.1654653399040a61.FlowToken.TokensWithdrawn\n    Tx ID   24979a3c0203f514f7f5822cc8ae7046e24f25d4a775bef697a654898fb7673e\n    Values\n        - amount (UFix64): 0.00100000 \n        - from (Never?): nil \n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("h3",{id:"event-name"},"Event Name"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: ",(0,a.kt)("inlineCode",{parentName:"li"},"event_name")),(0,a.kt)("li",{parentName:"ul"},"Valid Input: String")),(0,a.kt)("p",null,"Fully-qualified identifier for the events.\nYou can provide multiple event names separated by a space."),(0,a.kt)("h2",{id:"flags"},"Flags"),(0,a.kt)("h3",{id:"start"},"Start"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--start")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: valid block height")),(0,a.kt)("p",null,"Specify the start block height used alongside the end flag.\nThis will define the lower boundary of the block range."),(0,a.kt)("h3",{id:"end"},"End"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--end")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: valid block height")),(0,a.kt)("p",null,"Specify the end block height used alongside the start flag.\nThis will define the upper boundary of the block range."),(0,a.kt)("h3",{id:"last"},"Last"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--last")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: number"),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"10"))),(0,a.kt)("p",null,"Specify the number of blocks relative to the last block. Ignored if the\nstart flag is set. Used as a default if no flags are provided."),(0,a.kt)("h3",{id:"batch"},"Batch"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--batch")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: number"),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"25"))),(0,a.kt)("p",null,"Number of blocks each worker will fetch."),(0,a.kt)("h3",{id:"workers"},"Workers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--workers")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: number"),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"10"))),(0,a.kt)("p",null,"Number of workers to use when fetching events concurrently."),(0,a.kt)("h3",{id:"host"},"Host"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--host")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: an IP address or hostname."),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"127.0.0.1:3569")," (Flow Emulator)")),(0,a.kt)("p",null,"Specify the hostname of the Access API that will be\nused to execute the command. This flag overrides\nany host defined by the ",(0,a.kt)("inlineCode",{parentName:"p"},"--network")," flag."),(0,a.kt)("h3",{id:"network-key"},"Network Key"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--network-key")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: A valid network public key of the host in hex string format")),(0,a.kt)("p",null,"Specify the network public key of the Access API that will be\nused to create a secure GRPC client when executing the command."),(0,a.kt)("h3",{id:"network"},"Network"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--network")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-n")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: the name of a network defined in the configuration (",(0,a.kt)("inlineCode",{parentName:"li"},"flow.json"),")"),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"emulator"))),(0,a.kt)("p",null,"Specify which network you want the command to use for execution."),(0,a.kt)("h3",{id:"filter"},"Filter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--filter")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-x")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: a case-sensitive name of the result property.")),(0,a.kt)("p",null,"Specify any property name from the result you want to return as the only value."),(0,a.kt)("h3",{id:"output"},"Output"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--output")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-o")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,a.kt)("inlineCode",{parentName:"li"},"json"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"inline"))),(0,a.kt)("p",null,"Specify the format of the command results."),(0,a.kt)("h3",{id:"save"},"Save"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--save")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-s")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: a path in the current filesystem.")),(0,a.kt)("p",null,"Specify the filename where you want the result to be saved"),(0,a.kt)("h3",{id:"log"},"Log"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--log")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-l")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: ",(0,a.kt)("inlineCode",{parentName:"li"},"none"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"error"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"debug")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"info"))),(0,a.kt)("p",null,"Specify the log level. Control how much output you want to see during command execution."),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--config-path")),(0,a.kt)("li",{parentName:"ul"},"Short Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"-f")),(0,a.kt)("li",{parentName:"ul"},"Valid inputs: a path in the current filesystem."),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"flow.json"))),(0,a.kt)("p",null,"Specify the path to the ",(0,a.kt)("inlineCode",{parentName:"p"},"flow.json")," configuration file.\nYou can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"-f")," flag multiple times to merge\nseveral configuration files."),(0,a.kt)("h3",{id:"version-check"},"Version Check"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flag: ",(0,a.kt)("inlineCode",{parentName:"li"},"--skip-version-check")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"Skip version check during start up to speed up process for slow connections."))}c.isMDXComponent=!0}}]);