"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1326],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=r,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return t?a.createElement(m,i(i({ref:n},d),{},{components:t})):a.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},76207:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={},i=void 0,l={unversionedId:"Tooling/flow-cli/developer-updates/release-notes-v18",id:"Tooling/flow-cli/developer-updates/release-notes-v18",title:"release-notes-v18",description:"\u2b06\ufe0f Install or Upgrade",source:"@site/docs/Tooling/flow-cli/developer-updates/release-notes-v18.md",sourceDirName:"Tooling/flow-cli/developer-updates",slug:"/Tooling/flow-cli/developer-updates/release-notes-v18",permalink:"/docs/Tooling/flow-cli/developer-updates/release-notes-v18",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"release-notes-v17",permalink:"/docs/Tooling/flow-cli/developer-updates/release-notes-v17"},next:{title:"release-notes-v19",permalink:"/docs/Tooling/flow-cli/developer-updates/release-notes-v19"}},s={},c=[{value:"\u2b06\ufe0f Install or Upgrade",id:"\ufe0f-install-or-upgrade",level:2},{value:"\u2b50 Features",id:"-features",level:2},{value:"Resolve Contract Imports in Scripts and Transactions",id:"resolve-contract-imports-in-scripts-and-transactions",level:3},{value:"Build, Sign and Send Transactions",id:"build-sign-and-send-transactions",level:3},{value:"Build Transaction",id:"build-transaction",level:4},{value:"Sign Transaction",id:"sign-transaction",level:4},{value:"Send Signed Transaction",id:"send-signed-transaction",level:4},{value:"Version Check",id:"version-check",level:3},{value:"Create Account With Multiple Keys and Weights",id:"create-account-with-multiple-keys-and-weights",level:3},{value:"\ud83c\udf89 Improvements",id:"-improvements",level:2},{value:"Account Response Improved",id:"account-response-improved",level:3},{value:"Transaction Result Improved",id:"transaction-result-improved",level:3},{value:"\ud83d\udc1e Bug Fixes",id:"-bug-fixes",level:2},{value:"New Transaction ID Log",id:"new-transaction-id-log",level:3},{value:"Init Reset Fix",id:"init-reset-fix",level:3},{value:"Emulator Config Path",id:"emulator-config-path",level:3}],d={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\ufe0f-install-or-upgrade"},"\u2b06\ufe0f Install or Upgrade"),(0,r.kt)("p",null,"Follow the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Tooling/flow-cli/install"},"Flow CLI installation guide")," for instructions on how to install or upgrade the CLI."),(0,r.kt)("h2",{id:"-features"},"\u2b50 Features"),(0,r.kt)("h3",{id:"resolve-contract-imports-in-scripts-and-transactions"},"Resolve Contract Imports in Scripts and Transactions"),(0,r.kt)("p",null,"This is a new feature that allows you to send transactions and scripts that reference\ncontracts deployed using the ",(0,r.kt)("inlineCode",{parentName:"p"},"project deploy")," command. Imports are resolved\nby matching contract source paths to their declarations in ",(0,r.kt)("inlineCode",{parentName:"p"},"flow.json"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("p",null,"Example script: ",(0,r.kt)("inlineCode",{parentName:"p"},"get_supply.cdc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import Kibble from "../../contracts/Kibble.cdc"\n\npub fun main(): UFix64 {\n    let supply = Kibble.totalSupply\n    return supply\n}\n\n')),(0,r.kt)("p",null,"Example command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flow scripts execute ./get_supply.cdc\n")),(0,r.kt)("p",null,"Note: Please make sure you first deploy the contract using ",(0,r.kt)("inlineCode",{parentName:"p"},"flow project deploy"),"\ncommand and that contracts are correctly added to the flow configuration."),(0,r.kt)("h3",{id:"build-sign-and-send-transactions"},"Build, Sign and Send Transactions"),(0,r.kt)("p",null,"New functionality allows you to build a transaction, sign it\nand send signed to the network in separated steps. "),(0,r.kt)("h4",{id:"build-transaction"},"Build Transaction"),(0,r.kt)("p",null,"Build new transaction and specify who will be the proposer, signer and payer account\nor address. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flow transactions build ./transaction.cdc --proposer alice --payer bob --authorizer bob --filter payload --save payload1.rlp\n")),(0,r.kt)("p",null,"Check more about ",(0,r.kt)("a",{parentName:"p",href:"/docs/Tooling/flow-cli/build-transactions"},"this functionality in docs"),"."),(0,r.kt)("h4",{id:"sign-transaction"},"Sign Transaction"),(0,r.kt)("p",null,"After using build command and saving payload to a file you should sign the transaction\nwith each account. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flow transactions sign ./payload1.rlp --signer alice --filter payload --save payload2.rlp \n")),(0,r.kt)("h4",{id:"send-signed-transaction"},"Send Signed Transaction"),(0,r.kt)("p",null,"When authorizer, payer and proposer sign the transaction it is ready to be\nsent to the network. Anyone can execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"send-signed")," command. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"flow transactions send-signed ./payload3.rlp\n")),(0,r.kt)("h3",{id:"version-check"},"Version Check"),(0,r.kt)("p",null,"Automatically checks if a new version exists and outputs a warning in case there\nis a newer version. Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u26a0\ufe0f  Version Warning: New version v0.18.0 of Flow CLI is available.\nFollow the Flow [CLI installation guide](../install.md) for instructions on how to install or upgrade the CLI\n")),(0,r.kt)("h3",{id:"create-account-with-multiple-keys-and-weights"},"Create Account With Multiple Keys and Weights"),(0,r.kt)("p",null,"Account creation can be done using multiple keys (",(0,r.kt)("inlineCode",{parentName:"p"},"--key"),") and new ",(0,r.kt)("inlineCode",{parentName:"p"},"--key-weight"),"\nflag. Flag enables you to set key weight for each of the keys. Command example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"accounts create \\\n    --key ca8cc7...76f67 --key-weight 500 \\\n    --key da8123...043ce --key-weight 500\n\nAddress  0x179b6b1cb6755e31\nBalance  0.10000000\nKeys     2\n\nKey 0   Public Key       ca8cc7...76f67\n    Weight           500\n    Signature Algorithm  ECDSA_P256\n    Hash Algorithm       SHA3_256\n    Revoked          false\n    Sequence Number      0\n    Index            0\n\n\nKey 1   Public Key       da8123...043ce\n    Weight           500\n    Signature Algorithm  ECDSA_P256\n    Hash Algorithm       SHA3_256\n    Revoked          false\n    Sequence Number      0\n    Index            1\n\n")),(0,r.kt)("h2",{id:"-improvements"},"\ud83c\udf89 Improvements"),(0,r.kt)("h3",{id:"account-response-improved"},"Account Response Improved"),(0,r.kt)("p",null,"Account response includes two new fields in key section: ",(0,r.kt)("inlineCode",{parentName:"p"},"Sequence Number")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Index"),"."),(0,r.kt)("h3",{id:"transaction-result-improved"},"Transaction Result Improved"),(0,r.kt)("p",null,"Transaction result displays more information about the transaction. New format example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Status      \u2705 SEALED\nID      b6430b35ba23849a8acb4fa1a4a1d5cce3ed4589111ecbb3984de1b6bd1ba39e\nPayer       a2c4941b5f3c7151\nAuthorizers [a2c4941b5f3c7151]\n\nProposal Key:   \n    Address a2c4941b5f3c7151\n    Index   0\n    Sequence    9\n\nNo Payload Signatures\n\nEnvelope Signature 0:\n    Address a2c4941b5f3c7151\n    Signature   5391a6fed0fe...2742048166f9d5c925a8dcb78a6d8c710921d67\n    Key Index   0\n\n\nEvents:  None\n\n\nArguments (1):\n    - Argument 0: {"type":"String","value":"Meow"}\n\n\nCode\n\ntransaction(greeting: String) {\n  let guest: Address\n\n  prepare(authorizer: AuthAccount) {\n    self.guest = authorizer.address\n  }\n\n  execute {\n    log(greeting.concat(",").concat(self.guest.toString()))\n  }\n}\n\n\nPayload:\nf90184f90138...8a9462751237da2742048166f9d5c925a8dcb78a6d8c710921d67\n')),(0,r.kt)("p",null,"Transaction error is now shown at the top of the result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Transaction 0dd6294a7614bc0fbeb39b44a6e9f68e821225caa4baf4104a17dc1193d4f011 sealed\n\nStatus: SEALED\nExecution Error: Execution failed:\nerror: invalid move operation for non-resource\n  --\x3e 0dd6294a7614bc0fbeb39b44a6e9f68e821225caa4baf4104a17dc1193d4f011:15:15\n   |\n15 |         useRes(<-result)\n   |                ^^^ unexpected `<-`\n\nerror: mismatched types\n  --\x3e 0dd6294a7614bc0fbeb39b44a6e9f68e821225caa4baf4104a17dc1193d4f011:15:15\n   |\n15 |         useRes(<-result)\n   |                ^^^^^^^^ expected `AnyResource`, got `&AnyResource`\n\nEvents:\n  None\n")),(0,r.kt)("h2",{id:"-bug-fixes"},"\ud83d\udc1e Bug Fixes"),(0,r.kt)("h3",{id:"new-transaction-id-log"},"New Transaction ID Log"),(0,r.kt)("p",null,"While sending transaction was in progress output displayed wrong transaction ID."),(0,r.kt)("h3",{id:"init-reset-fix"},"Init Reset Fix"),(0,r.kt)("p",null,"Old configuration format caused an error saying to reset the\nconfiguration using reset flag, but when ran it produced the same error again.\nThis bug was fixed."),(0,r.kt)("h3",{id:"emulator-config-path"},"Emulator Config Path"),(0,r.kt)("p",null,"When running emulator command ",(0,r.kt)("inlineCode",{parentName:"p"},"flow emulator")," config flag ",(0,r.kt)("inlineCode",{parentName:"p"},"-f")," was ignored.\nThis has been fixed, so you can provide a custom path to the config while running\nthe start emulator command."))}u.isMDXComponent=!0}}]);