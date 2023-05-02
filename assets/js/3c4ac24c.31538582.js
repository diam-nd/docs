"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5247],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65189:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const r={title:"Mainnet Deployment Guidelines",sidebar_title:"5. Mainnet Deployment"},i=void 0,l={unversionedId:"Tutorials/mainnet-deployment",id:"Tutorials/mainnet-deployment",title:"Mainnet Deployment Guidelines",description:"Note: Anyone can deploy and update contracts on mainnet. Smart contract reviews (to discover any issues that may affect your users) are still provided upon request. However, they are not mandatory.",source:"@site/docs/Tutorials/mainnet-deployment.md",sourceDirName:"Tutorials",slug:"/Tutorials/mainnet-deployment",permalink:"/docs/Tutorials/mainnet-deployment",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Mainnet Deployment Guidelines",sidebar_title:"5. Mainnet Deployment"},sidebar:"tutorialSidebar",previous:{title:"Mainnet Account Setup Guidelines",permalink:"/docs/Tutorials/mainnet-account-setup"},next:{title:"Smart Contracts for Flow Dapps",permalink:"/docs/Tutorials/smart-contracts"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Deploy a contract on mainnet using the CLI",id:"deploy-a-contract-on-mainnet-using-the-cli",level:2},{value:"Update/Re-deploy a contract on mainnet using the CLI",id:"updatere-deploy-a-contract-on-mainnet-using-the-cli",level:2},{value:"NFT Discoverabilty",id:"nft-discoverabilty",level:2},{value:"Risks for Early Adopters",id:"risks-for-early-adopters",level:2},{value:"Breaking Changes",id:"breaking-changes",level:3},{value:"Version Compatibility",id:"version-compatibility",level:3},{value:"Mainnet Sporking",id:"mainnet-sporking",level:3},{value:"&quot;Real Value&quot; on Mainnet",id:"real-value-on-mainnet",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": Anyone can deploy and update contracts on mainnet. ",(0,a.kt)("a",{parentName:"p",href:"https://flowsolutionseng.zendesk.com/hc/en-us/requests/new?ticket_form_id=360001936012&tc_360045236671=b5ba92954c2f2692b56099fe653ac92d35c1e6e6"},"Smart contract reviews")," (to discover any issues that may affect your users) are still provided upon request. However, they are not mandatory.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Testnet testing: Smart contracts include test coverage and follow any additional guidelines set out here: ",(0,a.kt)("a",{parentName:"li",href:"/dapp-development/contract-testing"},"Smart Contract Testing Guidelines"),". Application live on testnet and handling real world traffic for an extended period of time as suggested here: ",(0,a.kt)("a",{parentName:"li",href:"/dapp-development/testnet-testing"},"Testnet Testing Guidelines")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/onflow/flow-cli"},"Flow CLI"),": You have the CLI installed and ran ",(0,a.kt)("inlineCode",{parentName:"li"},"flow init")," in your project folder, generating a ",(0,a.kt)("inlineCode",{parentName:"li"},"flow.json")," file"),(0,a.kt)("li",{parentName:"ul"},"Mainnet account: You completed the ",(0,a.kt)("a",{parentName:"li",href:"/dapp-development/mainnet-account-setup"},"mainnet account setup")," and have your key pair and mainnet address ready")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"First, you need to configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"flow.json")," file to add your mainnet account details:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js:title=flow.json"},'{\n...\n  "accounts": {\n    "my-mainnet-account": {\n      "address": "ADDRESS_FROM_PREVIOUS_STEP",\n      "key": "PRIVATE_KEY_GENERATED_IN_PREVIOUS_STEP"\n    }\n  }\n...\n}\n')),(0,a.kt)("p",null,"Next, you need to set the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.onflow.org/flow-cli/project-contracts/#define-contract-deployment-targets"},"deployment target configuration")," for the mainnet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js:title=flow.json"},'{\n...\n"deployments": {\n    "mainnet": {\n      "my-mainnet-account": ["Foo", "Bar"]\n    }\n  }\n...\n}\n')),(0,a.kt)("h2",{id:"deploy-a-contract-on-mainnet-using-the-cli"},"Deploy a contract on mainnet using the CLI"),(0,a.kt)("p",null,"With the configuration changes completed, run the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.onflow.org/flow-cli/deploy-project-contracts"},"Flow CLI deployment command"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"> flow project deploy --network=mainnet\n\nDeploying 2 contracts for accounts: my-mainnet-account\n\nFoo -> 0xab7... (1e8fdb973...90b7ee38b8)\n\nBar -> 0xab7... (6c243d09e...b878111098)\n\n\n\u2728 All contracts deployed successfully\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Note"),": This command automatically deploys your project's contracts based on the configuration defined in your ",(0,a.kt)("inlineCode",{parentName:"p"},"flow.json")," file. If you encounter any errors, review the configuration first.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Important"),": If you see ",(0,a.kt)("inlineCode",{parentName:"p"},"Error Code: 1103"),", your new account does not have enough funds to complete the transaction. Make sure you have enough FLOW (e.g. by ",(0,a.kt)("a",{parentName:"p",href:"/dapp-development/mainnet-account-setup/#step-3-send-flow-to-non-custodial-account"},"sending some from your Blocto account"),").")),(0,a.kt)("p",null,"Once all your contracts are deployed, you can visit ",(0,a.kt)("a",{parentName:"p",href:"https://flow-view-source.com/"},"flow-view-source")," or run the ",(0,a.kt)("a",{parentName:"p",href:"/flow-cli/get-accounts/"},"Flow CLI get account command")," to confirm the deployment."),(0,a.kt)("h2",{id:"updatere-deploy-a-contract-on-mainnet-using-the-cli"},"Update/Re-deploy a contract on mainnet using the CLI"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"/flow-cli/account-update-contract/"},"Flow CLI contract update command")," to re-deploy an updated version of your contract:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"> flow accounts update-contract Foo ./Foo.cdc --signer=my-mainnet-account --network=mainnet\n\nTransaction ID: e0728170165ce...6956785be50\nContract 'Foo' updated on the account 'ab7...'.\n\nAddress  0xab7...\nBalance  1000.00099677\nKeys     1\n\nKey 0   Public Key               39a097c....\n        Weight                   1000\n        Signature Algorithm      ECDSA_P256\n        Hash Algorithm           SHA3_256\n        Revoked                  false\n        Sequence Number          3\n        Index                    0\n\nContracts Deployed: 2\nContract: 'Foo'\nContract: 'Bar'\n\n\nContracts (hidden, use --include contracts)\n")),(0,a.kt)("h2",{id:"nft-discoverabilty"},"NFT Discoverabilty"),(0,a.kt)("p",null,"You should follow the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/alchemyplatform/alchemy-flow-contracts#adding-a-new-contract"},"steps listed in the Alchemy repository")," to get your NFT discovered through the Alchemy API. Make sure you added files needed to support your NFT on mainnet specifically."),(0,a.kt)("h2",{id:"risks-for-early-adopters"},"Risks for Early Adopters"),(0,a.kt)("h3",{id:"breaking-changes"},"Breaking Changes"),(0,a.kt)("p",null,"In these early days of Flow, version updates to Cadence, Flow Node software, and the Flow SDKs will often contain important updates as well as breaking changes."),(0,a.kt)("p",null,"Breaking changes will be a fact of life for early adopters of Flow's development stack, and you may often need to manually re-deploy your application's contracts after updates."),(0,a.kt)("h3",{id:"version-compatibility"},"Version Compatibility"),(0,a.kt)("p",null,"A version compatibility table can be found here. This will help you navigate version compatibility between Emulator, SDK, and Network Node (flow-go) versions."),(0,a.kt)("h3",{id:"mainnet-sporking"},"Mainnet Sporking"),(0,a.kt)("p",null,'"Sporking" (soft forking) is the process of upgrading Flow network node software, and migrating the state from the previous version.'),(0,a.kt)("p",null,"Currently, ",(0,a.kt)("strong",{parentName:"p"},"historical event data is not migrated between sporks,")," so you'll need to design your application with this in mind. We recognize the usefulness of historical event data and plan on adding a means of accessing it in the near future."),(0,a.kt)("h3",{id:"real-value-on-mainnet"},'"Real Value" on Mainnet'),(0,a.kt)("p",null,"Unlike Flow Testnet, once your application is launched on Flow Mainnet, your users will be exchanging real value in the form of FLOW tokens (The Flow blockchain's native token) or other resources which have been made available. You or your user will also be responsible for paying transaction fees using FLOW tokens."),(0,a.kt)("p",null,"You can read about Transaction fees here: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.onflow.org/flow-token/concepts/#fees"},"https://docs.onflow.org/flow-token/concepts/#fees")))}d.isMDXComponent=!0}}]);