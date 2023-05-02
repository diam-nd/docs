"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[4338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return n?o.createElement(h,r(r({ref:t},l),{},{components:n})):o.createElement(h,r({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},28013:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const i={title:"Node Bootstrap",sidebar_title:"Node Bootstrapping",description:"How to get started running a node on Flow"},r=void 0,s={unversionedId:"Concepts/nodes/node-operation/node-bootstrap",id:"Concepts/nodes/node-operation/node-bootstrap",title:"Node Bootstrap",description:"How to get started running a node on Flow",source:"@site/docs/Concepts/nodes/node-operation/node-bootstrap.mdx",sourceDirName:"Concepts/nodes/node-operation",slug:"/Concepts/nodes/node-operation/node-bootstrap",permalink:"/docs/Concepts/nodes/node-operation/node-bootstrap",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Node Bootstrap",sidebar_title:"Node Bootstrapping",description:"How to get started running a node on Flow"},sidebar:"tutorialSidebar",previous:{title:"Monitoring Node Health",permalink:"/docs/Concepts/nodes/node-operation/monitoring-nodes"},next:{title:"Node Migration",permalink:"/docs/Concepts/nodes/node-operation/node-migration"}},c={},d=[{value:"Timing",id:"timing",level:2},{value:"Step 1 - Run Genesis Bootstrap",id:"step-1---run-genesis-bootstrap",level:2},{value:"Download the Bootstrapping Kit",id:"download-the-bootstrapping-kit",level:3},{value:"Generate Your Node Keys",id:"generate-your-node-keys",level:3},{value:"Network Address",id:"network-address",level:4},{value:"Machine Account Creation",id:"machine-account-creation",level:4},{value:"Step 2 - Stake Your Node",id:"step-2---stake-your-node",level:2},{value:"Finalize Machine Account Setup",id:"finalize-machine-account-setup",level:3},{value:"Verify Machine Account Setup",id:"verify-machine-account-setup",level:3},{value:"Push transit keys (consensus node only)",id:"push-transit-keys-consensus-node-only",level:3},{value:"Step 3 - Start Your Flow Node",id:"step-3---start-your-flow-node",level:2},{value:"Confirming authorization",id:"confirming-authorization",level:3},{value:"Trusted Root Snapshot",id:"trusted-root-snapshot",level:3},{value:"Dynamic Startup",id:"dynamic-startup",level:3},{value:"Manually Provisioned Root Snapshot",id:"manually-provisioned-root-snapshot",level:3}],l=(p="Callout",function(e){return console.warn("Component "+p+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var p;const u={toc:d},f="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This guide is for getting a new node staked and running on Flow other than a permissionless Access node. For running a permissionless Access node see ",(0,a.kt)("a",{parentName:"p",href:"/docs/Concepts/nodes/node-operation/access-node-setup"},"Access node setup"),". For sporking documentation for existing node operators, see ",(0,a.kt)("a",{parentName:"p",href:"/nodes/node-operation/spork"},"Spork Process"),"."),(0,a.kt)("h2",{id:"timing"},"Timing"),(0,a.kt)("p",null,"New nodes are able to join the network each time a new epoch begins.\nIn order to join the network at epoch N+1, the node must be registered with sufficient stake and\nauthorized by the service account prior to the end of epoch N's Staking Auction Phase.\nConfirmation of a new node's inclusion in epoch N+1 is included in the ",(0,a.kt)("a",{parentName:"p",href:"/staking/epoch-scripts-events/#epochsetup"},(0,a.kt)("inlineCode",{parentName:"a"},"EpochSetup")," event"),"."),(0,a.kt)("p",null,"Nodes registered for epoch N+1 are able to participate in network communication on a limited basis starting in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Epoch Setup Phase")," of epoch N."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/flow-resources/documentation-assets/epoch-startup-order.png",alt:"Flow Epoch Schedule"})),(0,a.kt)("p",null,"Once registered and confirmed to join the network at epoch N+1, the node must start up ",(0,a.kt)("strong",{parentName:"p"},"before")," epoch N+1 begins."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verification & Access nodes may start up any time during the ",(0,a.kt)("inlineCode",{parentName:"li"},"Epoch Setup Phase"),"."),(0,a.kt)("li",{parentName:"ul"},"Consensus & Collection nodes must start up within the first ",(0,a.kt)("strong",{parentName:"li"},"1000 views (~30mins)"),"\nof the ",(0,a.kt)("inlineCode",{parentName:"li"},"Epoch Setup Phase")," to participate in the ",(0,a.kt)("a",{parentName:"li",href:"/staking/epoch-preparation/#phase-1-epoch-setup"},"Epoch Preparation Protocol"),".")),(0,a.kt)("h2",{id:"step-1---run-genesis-bootstrap"},"Step 1 - Run Genesis Bootstrap"),(0,a.kt)(l,{type:"info",mdxType:"Callout"},"You will need to run this process for each node that you are operating"),(0,a.kt)("h3",{id:"download-the-bootstrapping-kit"},"Download the Bootstrapping Kit"),(0,a.kt)(l,{type:"warning",mdxType:"Callout"},"If you have downloaded the bootstrapping kit previously, ensure you check the hash below still matches. If not, re-download to ensure you are using the most up-to-date version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sL -O storage.googleapis.com/flow-genesis-bootstrap/boot-tools.tar\ntar -xvf boot-tools.tar\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell:title=CheckSHA256"},"sha256sum ./boot-tools/bootstrap\n0d2cb2d0edb659880ae729e9d849a98535414af33690dad545d9892268167bcf  ./boot-tools/bootstrap\n\nsha256sum ./boot-tools/transit\nb05324a42d80ad2d9cd7ff2aeb47b0d2fb0d57ace9d447928b27a93286868873  ./boot-tools/transit\n")),(0,a.kt)("h3",{id:"generate-your-node-keys"},"Generate Your Node Keys"),(0,a.kt)("h4",{id:"network-address"},"Network Address"),(0,a.kt)(l,{type:"info",mdxType:"Callout"},(0,a.kt)("p",null,"Use a fully qualified domain name for the network address. Please also include the port number in the network address e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"example.com:3569"))),(0,a.kt)(l,{type:"warning",mdxType:"Callout"},(0,a.kt)("p",null,"Do not include in ",(0,a.kt)("inlineCode",{parentName:"p"},"http://")," format.")),(0,a.kt)(l,{type:"info",mdxType:"Callout"},(0,a.kt)("p",null,"If you are running multiple nodes, please\nensure you have different addresses for each node.")),(0,a.kt)(l,{type:"warning",mdxType:"Callout"},(0,a.kt)("p",null,"All your current keys and Flow genesis files should be in the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap"),"\nfolder created earlier. Please take a back up of the entire folder.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'## Skip this section if this is your first time ##\n# If you joined our network previously, make sure to take a backup of your previously generated keys!\ncp -r /path/to/bootstrap /path/to/bootstrap.bak\n#########################################################\n# Generate Keys\n$ mkdir ./bootstrap\n# YOUR_NODE_ADDRESS: FQDN associated to your instance\n# YOUR_NODE_ROLE: The Flow nodes that you wish to run, it should be ONE of the following - [ access, collection, consensus, execution, verification ]\n$ ./boot-tools/bootstrap key --address \\"${YOUR_NODE_ADDRESS}:3569\\" --role ${YOUR_NODE_ROLE} -o ./bootstrap\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell:title=Example"},'$./boot-tools/bootstrap key --address "consensus-001.nodes.flow.com:3569" --role consensus  -o ./bootstrap\n<nil> DBG will generate networking key\n<nil> INF generated networking key\n<nil> DBG will generate staking key\n<nil> INF generated staking key\n<nil> DBG will generate db encryption key\n<nil> INF generated db encryption key\n<nil> DBG assembling node information address=consensus-001.nodes.flow.com:3569\n<nil> DBG encoded public staking and network keys networkPubKey=7f31ae79017a2a58a5e59af9184f440d08885a16614b2c4e361019fa72a9a1a42bf85b4e3f9674782f12ca06afd9782e9ccf19496baed069139385b82f8f40f6 stakingPubKey=829d086b292d84de8e7938fd2fafa8f51a6e025f429291835c20e59d9e25665febf24fa59de12a4df08be7e82c5413180cc7b1c73e01f26e05344506aaca4fa9cc009dc1c33f8ba3d7c7509e86d3d3e7341b43b9bf80bb9fba56ae0b3135dd72\n<nil> INF wrote file bootstrap/public-root-information/node-id\n<nil> INF wrote file bootstrap/private-root-information/private-node-info_ab6e0b15837de7e5261777cb65665b318cf3f94492dde27c1ea13830e989bbf9/node-info.priv.json\n<nil> INF wrote file bootstrap/private-root-information/private-node-info_5e44ad5598bb0acb44784f629e84000ffea34d5552427247d9008ccf147fb87f/secretsdb-key\n<nil> INF wrote file bootstrap/public-root-information/node-info.pub.ab6e0b15837de7e5261777cb65665b318cf3f94492dde27c1ea13830e989bbf9.json\n<nil> DBG will generate machine account key\n<nil> INF generated machine account key\n<nil> DBG assembling machine account information address=consensus-001.nodes.flow.com:3569\n<nil> INF encoded machine account public key for entry to Flow Port machineAccountPubKey=f847b8406e8969b869014cd1684770a8db02d01621dd1846cdf42fc2bca3444d2d55fe7abf740c548639cc8451bcae0cd6a489e6ff59bb6b38c2cfb83e095e81035e507b02038203e8\n<nil> INF wrote file bootstrap/private-root-information/private-node-info_ab6e0b15837de7e5261777cb65665b318cf3f94492dde27c1ea13830e989bbf9/node-machine-account-key.priv.json\n\n$tree ./bootstrap/\n./bootstrap\n\u251c\u2500\u2500 private-root-information\n\u2502   \u2514\u2500\u2500 private-node-info_ab6e0b15837de7e5261777cb65665b318cf3f94492dde27c1ea13830e989bbf9\n\u2502       \u251c\u2500\u2500 node-info.priv.json\n\u2502       \u251c\u2500\u2500 node-machine-account-key.priv.json\n\u2502       \u2514\u2500\u2500 secretsdb-key\n\u2514\u2500\u2500 public-root-information\n    \u251c\u2500\u2500 node-id\n    \u2514\u2500\u2500 node-info.pub.ab6e0b15837de7e5261777cb65665b318cf3f94492dde27c1ea13830e989bbf9.json\n\n3 directories, 4 files\n')),(0,a.kt)(l,{type:"info",mdxType:"Callout"},(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"consensus")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"collection")," node types an additional key will be created for the Machine Account.\nFor all other node types this will not be needed.")),(0,a.kt)("h4",{id:"machine-account-creation"},"Machine Account Creation"),(0,a.kt)("p",null,"If you are running a collection and consensus node, you will have an additional private key file (",(0,a.kt)("inlineCode",{parentName:"p"},"node-machine-account-key.priv.json"),")\nwhich contains the private key for your node's machine account. You can learn more about machine\naccounts ",(0,a.kt)("a",{parentName:"p",href:"/staking/machine-account/"},"here"),"."),(0,a.kt)("p",null,"In Step 2 of this guide, when you submit a transaction to stake your node, you will need to provide the\nmachine account public key, which can be found in the output of the previous ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap key")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell:title=MachineAccountPublicKey"},"$./boot-tools/bootstrap key --address ${YOUR_NODE_ADDRESS} --role ${YOUR_NODE_ROLE}  -o ./bootstrap\n...\n<nil> DBG encoded public machine account key machineAccountPubKey=1b9c00e6f0930792c5738d3397169f8a592416f334cf11e84e6327b98691f2b72158b40886a4c3663696f96cd15bfb5a08730e529f62a00c78e2405013a6016d\n<nil> INF wrote file bootstrap/private-root-information/private-node-info_ab6e0b15837de7e5261777cb65665b318cf3f94492dde27c1ea13830e989bbf9/node-machine-account-key.priv.json\n")),(0,a.kt)(l,{type:"warning",mdxType:"Callout"},(0,a.kt)("p",null,"Copy the machine account public key somewhere safe. You will need it in a later step.")),(0,a.kt)("h2",{id:"step-2---stake-your-node"},"Step 2 - Stake Your Node"),(0,a.kt)("p",null,"Stake your node via ",(0,a.kt)("a",{parentName:"p",href:"https://port.onflow.org/"},"Flow Port")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"node details")," (",(0,a.kt)("inlineCode",{parentName:"p"},"Node ID"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Network Address"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Networking Key")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Staking Key"),") that need to be submitted when staking the node on Flow Port, can be found in the file: ",(0,a.kt)("inlineCode",{parentName:"p"},"./bootstrap/public-root-information/node-info.pub.<node-id>.json"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell:title=Example"},'$cat ./bootstrap/public-root-information/node-info.pub.39fa54984b8eaa463e129919464f61c8cec3a4389478df79c44eb9bfbf30799a.json\n{\n  "Role": "consensus",\n  "Address": "consensus-001.nodes.flow.com:3569",\n  "NodeID": "39fa54984b8eaa463e129919464f61c8cec3a4389478df79c44eb9bfbf30799a",\n  "Weight": 1000,\n  "NetworkPubKey": "d92e3d5880abe233cf9fe9104db34bbb31251468a541454722b3870c04156a1b0504aef443bcaad124b997384b8fe7052847ce1e6189af1392d865e6be69835b",\n  "StakingPubKey": "917826e018f056a00b778a58ae83054906957ffd4b6f1b7da083551f7a9f35e02b76ace50424ed7d2c9fc69207a59f0f08a031048f5641db94e77d0648b24d150dedd54bab7cd44b4aa60cfd54be418647b0b3965f8ae54c0bcb48ae9d705162"\n}\n')),(0,a.kt)("p",null,"If you are running a collection or consensus node, you will need to provide an additional field ",(0,a.kt)("inlineCode",{parentName:"p"},"Machine Account Public Key"),".\nThis value is found in the output of the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap key")," command from Step 1."),(0,a.kt)(l,{type:"info",mdxType:"Callout"},(0,a.kt)("p",null,"Please let us know your node id via discord or email.")),(0,a.kt)("h3",{id:"finalize-machine-account-setup"},"Finalize Machine Account Setup"),(0,a.kt)(l,{type:"warning",mdxType:"Callout"},(0,a.kt)("p",null,"If you are not running a collection or consensus node, you can skip this step.")),(0,a.kt)("p",null,"You will now need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap")," utility to run ",(0,a.kt)("inlineCode",{parentName:"p"},"machine-account")," with the created address to finalize the set up of your Machine account."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ ./boot-tools/bootstrap machine-account --address ${YOUR_MACHINE_ACCOUNT_ADDRESS} -o ./bootstrap\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell:title=Example"},"$ ./boot-tools/bootstrap machine-account --address 0x1de23de44985c7e7 -o ./bootstrap\n<nil> INF read machine account private key json\n<nil> DBG encoded public machine account key machineAccountPubKey=2743786d1ff1bf7d7026d693a774210eaa54728343859baab62e2df7f71a370651f4c7fd239d07af170e484eedd4f3c2df47103f6c39baf2eb2a50f67bbcba6a\n<nil> INF wrote file bootstrap/private-root-information/private-node-info_6f6e98c983dbd9aa69320452949b81abeab2ac591a247f55f19f4dbf0b477d26/node-machine-account-info.priv.json\n\n$tree ./bootstrap/\n./bootstrap\n\u251c\u2500\u2500 private-root-information\n\u2502   \u2514\u2500\u2500 private-node-info_d60bd55ee616c5c297cae1d5cfb7f65e7e04014d9c4abe595af2fd83f3cfe160\n\u2502       \u251c\u2500\u2500 node-info.priv.json\n\u2502       \u251c\u2500\u2500 node-machine-account-info.priv.json\n\u2502       \u251c\u2500\u2500 node-machine-account-key.priv.json\n\u2502       \u2514\u2500\u2500 secretsdb-key\n\u2514\u2500\u2500 public-root-information\n    \u251c\u2500\u2500 node-id\n    \u2514\u2500\u2500 node-info.pub.d60bd55ee616c5c297cae1d5cfb7f65e7e04014d9c4abe595af2fd83f3cfe160.json\n\n3 directories, 5 files\n")),(0,a.kt)("p",null,"After running this step, you should see the ",(0,a.kt)("inlineCode",{parentName:"p"},"node-machine-account-info.priv.json")," file in your ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap")," directory as shown above."),(0,a.kt)("h3",{id:"verify-machine-account-setup"},"Verify Machine Account Setup"),(0,a.kt)("p",null,"After finalizing your machine account setup, you should verify its correctness with the ",(0,a.kt)("inlineCode",{parentName:"p"},"check-machine-account")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell:title=CheckMachineAccount"},"$ ./boot-tools/bootstrap check-machine-account --access-address access.mainnet.nodes.onflow.org:9000 -o ./bootstrap\n<nil> DBG read machine account info from disk hash_algo=SHA3_256 key_index=0 machine_account_address=0x284463aa6e25877c machine_account_pub_key=f847b84051bad4512101640772bf5e05e8a49868d92eaf9ebed41030881d95485769afd28653c5c53216cdcda4554384bb3ff6396a2ac04842422d55f0562496ad8d952802038203e8 signing_algo=ECDSA_P256\n<nil> DBG checking machine account configuration... machine_account_address=0x284463aa6e25877c role=consensus\n<nil> DBG machine account balance: 0.10000000\n<nil> INF \ud83e\udd16 machine account is configured correctly\n")),(0,a.kt)("p",null,"This command will detect and provide information about common misconfigurations, or confirm that the machine account is configured correctly."),(0,a.kt)("h3",{id:"push-transit-keys-consensus-node-only"},"Push transit keys (consensus node only)"),(0,a.kt)("p",null,"If you are running a consensus node, run the following command to push the transit keys. Use the token ",(0,a.kt)("inlineCode",{parentName:"p"},"mainnet-x-organization")," e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"mainnet-17-companyname"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell:title=transit"},"$ ./boot-tools/transit push-transit-key -b ./bootstrap -t mainnet-x-organization\n<nil> INF generating transit keys\n<nil> INF generating key pair\n<nil> INF attempting to push transit public key to the transit servers\n<nil> INF successfully pushed transit public key to the transit servers\n")),(0,a.kt)("h2",{id:"step-3---start-your-flow-node"},"Step 3 - Start Your Flow Node"),(0,a.kt)("p",null,"Ensure you have configured your node using the ",(0,a.kt)("a",{parentName:"p",href:"/nodes/node-operation/node-setup"},"Node Setup guide"),"."),(0,a.kt)("h3",{id:"confirming-authorization"},"Confirming authorization"),(0,a.kt)("p",null,"You can confirm your node's successful registration and authorization by executing a Cadence script to query the ",(0,a.kt)("a",{parentName:"p",href:"/core-contracts/staking-contract-reference#contract"},"Staking Contract"),".\nAt the end of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Staking Auction Phase"),", the members of the Proposed Identity Table are confirmed as authorized participants in the next epoch.\nTherefore, if your node ID appears in the Proposed Identity Table during the ",(0,a.kt)("inlineCode",{parentName:"p"},"Staking Auction Phase"),", your node will be a participant in the next epoch."),(0,a.kt)("p",null,"You can read the current Proposed Identity Table using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/idTableStaking/scripts/get_proposed_table.cdc"},"getProposedTable script"),"."),(0,a.kt)("p",null,"You can read the current epoch phase using the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-core-contracts/blob/master/transactions/epoch/scripts/get_epoch_phase.cdc"},"getEpochPhase script"),". (A return value of ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," indicates the ",(0,a.kt)("inlineCode",{parentName:"p"},"Staking Auction Phase"),".)"),(0,a.kt)("h3",{id:"trusted-root-snapshot"},"Trusted Root Snapshot"),(0,a.kt)("p",null,"Once your node has been registered and authorized by the service account, it will be able to participate in the next epoch."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://storage.googleapis.com/flow-resources/documentation-assets/epoch-startup-order.png",alt:"Flow Epoch Schedule"})),(0,a.kt)("p",null,"A new node must bootstrap with a trusted root snapshot of the protocol state, where the node is a confirmed participant.\nSince new nodes are confirmed at the end of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Staking Auction Phase"),", this means that, if the node is registered to join at epoch ",(0,a.kt)("inlineCode",{parentName:"p"},"N+1"),", it must use a root snapshot from within the ",(0,a.kt)("inlineCode",{parentName:"p"},"Epoch Setup Phase")," of epoch ",(0,a.kt)("inlineCode",{parentName:"p"},"N"),"."),(0,a.kt)("h3",{id:"dynamic-startup"},"Dynamic Startup"),(0,a.kt)("p",null,"Flow provides a mechanism called Dynamic Startup to simplify the process of obtaining the root snapshot.\nWhen using Dynamic Startup, the node can be started ",(0,a.kt)("strong",{parentName:"p"},"at any time during the ",(0,a.kt)("inlineCode",{parentName:"strong"},"Staking Auction Phase")),".\nThe node will wait for the ",(0,a.kt)("inlineCode",{parentName:"p"},"Epoch Setup Phase")," to begin, retrieve a valid root snapshot from a trusted Access Node, then bootstrap its state and join the network.\nThis is the recommended way to start your node for the first time."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Remove any ",(0,a.kt)("inlineCode",{parentName:"li"},"root-protocol-state-snapshot.json")," file from your ",(0,a.kt)("inlineCode",{parentName:"li"},"bootstrap")," folder. (If this file is present the node will attempt to bootstrap with it rather than Dynamic Startup.)"),(0,a.kt)("li",{parentName:"ol"},"Select a trusted Access Node to provide the root snapshot. You will need this node's ",(0,a.kt)("strong",{parentName:"li"},"secure GRPC server address")," and ",(0,a.kt)("strong",{parentName:"li"},"Networking Public Key"),"."),(0,a.kt)("li",{parentName:"ol"},"Configure Dynamic Startup by adding flags:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell:title=ExampleDynamicStartupFlags"},"  ... \\\n  --dynamic-startup-access-address=secure.mainnet.nodes.onflow.org:9001 \\\n  --dynamic-startup-access-publickey=28a0d9edd0de3f15866dfe4aea1560c4504fe313fc6ca3f63a63e4f98d0e295144692a58ebe7f7894349198613f65b2d960abf99ec2625e247b1c78ba5bf2eae\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Start your node (see ",(0,a.kt)("a",{parentName:"li",href:"/nodes/node-operation/node-setup/#start-the-node"},"guide"),")")),(0,a.kt)(l,{type:"info",mdxType:"Callout"},"Once the node has bootstrapped, these flags may be removed."),(0,a.kt)("h3",{id:"manually-provisioned-root-snapshot"},"Manually Provisioned Root Snapshot"),(0,a.kt)("p",null,"You can also provision the root snapshot file manually, then start the node without configuring Dynamic Startup.\nA snapshot can be obtained from any Access Node using ",(0,a.kt)("a",{parentName:"p",href:"/flow-cli/"},"Flow CLI"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell:title=RetrieveRootSnapshot"},"flow snapshot save /path/to/root/snapshot --network mainnet\n")),(0,a.kt)(l,{type:"warning",mdxType:"Callout"},(0,a.kt)("p",null,"The snapshot must be within the ",(0,a.kt)("inlineCode",{parentName:"p"},"Epoch Setup Phase"),".")),(0,a.kt)(l,{type:"warning",mdxType:"Callout"},(0,a.kt)("p",null,"Since Collection and Consensus Nodes must start up in the first ~30mins of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Epoch Setup Phase")," (see ",(0,a.kt)("a",{parentName:"p",href:"/nodes/node-operation/node-bootstrap/#timing"},"Timing"),"),\nthe snapshot must be provisioned within this time window.")),(0,a.kt)("p",null,"Once a valid root snapshot file is downloaded to the node's bootstrap folder, it can be started (see ",(0,a.kt)("a",{parentName:"p",href:"/nodes/node-operation/node-setup/#start-the-node"},"guide"),")"))}h.isMDXComponent=!0}}]);