"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6399],{3905:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>h});var n=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function l(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=n.createContext({}),i=function(e){var o=n.useContext(d),t=o;return e&&(t="function"==typeof e?e(o):s(s({},o),e)),t},c=function(e){var o=i(e.components);return n.createElement(d.Provider,{value:o},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},u=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=i(t),u=r,h=p["".concat(d,".").concat(u)]||p[u]||b[u]||a;return t?n.createElement(h,s(s({ref:o},c),{},{components:t})):n.createElement(h,s({ref:o},c))}));function h(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,s=new Array(a);s[0]=u;var l={};for(var d in o)hasOwnProperty.call(o,d)&&(l[d]=o[d]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<a;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},86026:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>s,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=t(87462),r=(t(67294),t(3905));const a={title:"Observer Node",sidebar_title:"Observer Node"},s=void 0,l={unversionedId:"nodes/node-operation/observer-node",id:"nodes/node-operation/observer-node",title:"Observer Node",description:"An observer node is similar to an access node and provides a locally accessible, continuously updated, verified copy of the block data. It serves the gRPC Access API but unlike an access node, an observer node does not need to be staked, and anyone can run it without being added to the approved list of nodes.",source:"@site/docs/nodes/node-operation/observer-node.mdx",sourceDirName:"nodes/node-operation",slug:"/nodes/node-operation/observer-node",permalink:"/nodes/node-operation/observer-node",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682541550,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{title:"Observer Node",sidebar_title:"Observer Node"},sidebar:"tutorialSidebar",previous:{title:"Setting Up a Flow Node",permalink:"/nodes/node-operation/node-setup"},next:{title:"Past Spork Info",permalink:"/nodes/node-operation/past-sporks"}},d={},i=[{value:"Who should run an observer node?",id:"who-should-run-an-observer-node",level:2},{value:"Running an observer node",id:"running-an-observer-node",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Steps to run an observer node",id:"steps-to-run-an-observer-node",level:3},{value:"Step 1 - Generate the node directory structure",id:"step-1---generate-the-node-directory-structure",level:4},{value:"Step 2 - Generate the network key",id:"step-2---generate-the-network-key",level:4},{value:"Step 3 - Download the root-protocol-state-snapshot.json file for the current spork",id:"step-3---download-the-root-protocol-state-snapshotjson-file-for-the-current-spork",level:4},{value:"Verify the PGP signature",id:"verify-the-pgp-signature",level:5},{value:"Step 4 - Start the node",id:"step-4---start-the-node",level:4},{value:"Observer for Flow Mainnet",id:"observer-for-flow-mainnet",level:5},{value:"Observer for Flow Testnet",id:"observer-for-flow-testnet",level:5},{value:"FAQs",id:"faqs",level:2},{value:"Does the observer node need to be staked?",id:"does-the-observer-node-need-to-be-staked",level:3},{value:"Can any access be used to bootstrap an observer node?",id:"can-any-access-be-used-to-bootstrap-an-observer-node",level:3},{value:"How can an access node turn ON support for observer node?",id:"how-can-an-access-node-turn-on-support-for-observer-node",level:3},{value:"Are observer nodes subject to rate limits?",id:"are-observer-nodes-subject-to-rate-limits",level:3},{value:"Flow community access nodes that support connections from observer nodes",id:"flow-community-access-nodes-that-support-connections-from-observer-nodes",level:3},{value:"For mainnet",id:"for-mainnet",level:4},{value:"For testnet",id:"for-testnet",level:4}],c={toc:i},p="wrapper";function b(e){let{components:o,...a}=e;return(0,r.kt)(p,(0,n.Z)({},c,a,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An observer node is similar to an access node and provides a locally accessible, continuously updated, verified copy of the block data. It serves the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.flow.com/nodes/access-api.md"},"gRPC Access API")," but unlike an access node, an observer node does not need to be staked, and ",(0,r.kt)("strong",{parentName:"p"},"anyone")," can run it without being added to the approved list of nodes."),(0,r.kt)("p",null,"The observer node bootstraps by connecting to an access node and becoming part of the public network comprised of access nodes and other observer nodes. It then continuously receives blocks that are being added to the chain either directly from the access node or from other observer nodes that are part of the public network. However, it makes no trust assumption of the upstream access node or the observer node which is providing the block and locally verifies that the blocks that are received are the correct extension of the chain e.g. after receiving valid blocks A, B and C when it receives block D, it verifies that block D is indeed signed by the consensus nodes and is a valid next block. The received block data is indexed and made available via the Access API. For Collection, Transactions and Account queries, it delegates those requests to the upstream access node. Similarly, transactions and scripts sent to an observer node are also forwarded to the upstream access node. Future versions of the observer node will be able to serve this data locally as well."),(0,r.kt)("p",null,"Since the observer node is not staked, it does not produce or execute blocks but instead serves as an ",(0,r.kt)("em",{parentName:"p"},"unstaked access node")," that can be easily run on any consumer-grade computer which has enough disk space."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Observer nodes",src:t(80634).Z,width:"1920",height:"1080"})),(0,r.kt)("h2",{id:"who-should-run-an-observer-node"},"Who should run an observer node?"),(0,r.kt)("p",null,"The observer node provides an alternative to running an access node. Hence, it is ideal for Dapps that need access to the latest block data available locally e.g. a wallet application that needs to track the latest block ID and height. In addition to that, access node operators who want to scale their access node endpoints geographically can spin up geographically dispersed observer nodes which can talk to their staked access node and to each other."),(0,r.kt)("h2",{id:"running-an-observer-node"},"Running an observer node"),(0,r.kt)("h3",{id:"hardware"},"Hardware"),(0,r.kt)("p",null,"In general, any consumer-grade computer with a decent network connection and sufficient disk space should be able to run an observer node."),(0,r.kt)("p",null,"Minimum requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CPU with 2+ cores"),(0,r.kt)("li",{parentName:"ul"},"4 GB RAM minimum"),(0,r.kt)("li",{parentName:"ul"},"300 GB SSD disk"),(0,r.kt)("li",{parentName:"ul"},"10Mbps network connection")),(0,r.kt)("h3",{id:"steps-to-run-an-observer-node"},"Steps to run an observer node"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://www.loom.com/share/990a725531754106b91d8ccec6244219"},"Here")," is video walk-though of these \ud83d\udc47 steps.")),(0,r.kt)("h4",{id:"step-1---generate-the-node-directory-structure"},"Step 1 - Generate the node directory structure"),(0,r.kt)("p",null,"The observer node requires the following directory structure,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ tree flow_observer\nflow_observer/\n\u251c\u2500\u2500 bootstrap\n\u2502         \u251c\u2500\u2500 network.key (file containing the node private network key)\n\u2502         \u2514\u2500\u2500 public-root-information\n\u2502             \u2514\u2500\u2500 root-protocol-state-snapshot.json (the genesis data of the current spork)\n\u2514\u2500\u2500 data (directory used by the observer node to store block data)\n")),(0,r.kt)("p",null,"Create the parent and the sub-directories\ne.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p flow_observer/bootstrap/public-root-information\nmkdir flow_observer/data\n")),(0,r.kt)("h4",{id:"step-2---generate-the-network-key"},"Step 2 - Generate the network key"),(0,r.kt)("p",null,"Like any other Flow node, the observer also needs a networking ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-go/blob/master/cmd/bootstrap/utils/key_generation.go#L52-L54"},"ECDSA key")," to talk to the network.\nDownload the Bootstrapping kit, and generate the observer networking key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sL -O storage.googleapis.com/flow-genesis-bootstrap/boot-tools.tar\ntar -xvf boot-tools.tar\n./boot-tools/bootstrap observer-network-key  --output-file  ./flow_observer/bootstrap/network.key\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"If you are running on a mac, download the boot-tools for mac to generate the key")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# For M1\ncurl -sL -O storage.googleapis.com/flow-genesis-bootstrap/boot-tools-m1.tar\n# For Intel Mac\ncurl -sL -O storage.googleapis.com/flow-genesis-bootstrap/boot-tools-intel-mac.tar\n")),(0,r.kt)("h4",{id:"step-3---download-the-root-protocol-state-snapshotjson-file-for-the-current-spork"},"Step 3 - Download the root-protocol-state-snapshot.json file for the current spork"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"root-protocol-state-snapshot.json")," is generated for each ",(0,r.kt)("a",{parentName:"p",href:"https://developers.flow.com/nodes/node-operation/spork"},"spork")," and contains the genesis data for that spork.\nIt is published and made available after each spork. The download location is specified ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow/blob/master/sporks.json"},"here")," under ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow/blob/master/sporks.json#L16"},"rootProtocolStateSnapshot")," and can be downloaded as follows,"),(0,r.kt)("p",null,"For mainnet find  the latest spork version from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow/blob/master/sporks.json"},"sporks.json")," and then download the ",(0,r.kt)("inlineCode",{parentName:"p"},"root-protocol-state-snapshot.json")," and the signature file for it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget -P ./flow_observer/bootstrap/public-root-information https://storage.googleapis.com/flow-genesis-bootstrap/mainnet-<spork version>-execution/public-root-information/root-protocol-state-snapshot.json\nwget -P ./flow_observer/bootstrap/public-root-information https://storage.googleapis.com/flow-genesis-bootstrap/mainnet-<spork version>-execution/public-root-information/root-protocol-state-snapshot.json.asc\n")),(0,r.kt)("p",null,"Similarly, for testnet find  the latest spork version from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow/blob/master/sporks.json"},"sporks.json")," and then download the ",(0,r.kt)("inlineCode",{parentName:"p"},"root-protocol-state-snapshot.json")," and the signature file for it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget -P ./flow_observer/bootstrap/public-root-information https://storage.googleapis.com/flow-genesis-bootstrap/testnet-<spork version>/public-root-information/root-protocol-state-snapshot.json\nwget -P ./flow_observer/bootstrap/public-root-information https://storage.googleapis.com/flow-genesis-bootstrap/testnet-<spork version>/public-root-information/root-protocol-state-snapshot.json.asc\n")),(0,r.kt)("h5",{id:"verify-the-pgp-signature"},"Verify the PGP signature"),(0,r.kt)("p",null,"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"flow-signer@onflow.org")," public key"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'gpg --keyserver keys.openpgp.org --search-keys flow-signer@onflow.org\n\ngpg: data source: http://keys.openpgp.org:11371\n(1) Flow Team (Flow Full Observer node snapshot verification master key) <\n      256 bit ECDSA key CB5264F7FD4CDD27, created: 2021-09-15\nKeys 1-1 of 1 for "flow-signer@onflow.org".  Enter number(s), N)ext, or Q)uit > 1\n')),(0,r.kt)("p",null,"Verify the root-snapshot file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"gpg --verify ./flow_observer/bootstrap/public-root-information/root-protocol-state-snapshot.json.asc\n\ngpg: assuming signed data in 'bootstrap/public-root-information/root-protocol-state-snapshot.json'\ngpg: Signature made Wed Sep 15 11:34:33 2021 PDT\ngpg:                using ECDSA key 40CD95717AC463E61EE3B285B718CA310EDB542F\ngpg: Good signature from \"Flow Team (Flow Full Observer node snapshot verification master key) <flow-signer@onflow.org>\" [unknown]\ngpg: WARNING: This key is not certified with a trusted signature!\ngpg:          There is no indication that the signature belongs to the owner.\nPrimary key fingerprint: 7D23 8D1A E6D3 2A71 8ECD  8611 CB52 64F7 FD4C DD27\n     Subkey fingerprint: 40CD 9571 7AC4 63E6 1EE3  B285 B718 CA31 0EDB 542F\n")),(0,r.kt)("p",null,"Alternately, if you don't care about the blocks before the current block, you can request the current root-snapshot file via the ",(0,r.kt)("a",{parentName:"p",href:"https://developers.flow.com/tools/flow-cli"},"Flow CLI"),"."),(0,r.kt)("p",null,"For mainnet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," flow snapshot save ./flow_observer/bootstrap/public-root-information/root-protocol-state-snapshot.json --host secure.mainnet.nodes.onflow.org:9001 --network-key 28a0d9edd0de3f15866dfe4aea1560c4504fe313fc6ca3f63a63e4f98d0e295144692a58ebe7f7894349198613f65b2d960abf99ec2625e247b1c78ba5bf2eae\n")),(0,r.kt)("p",null,"For testnet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"flow snapshot save ./flow_observer/bootstrap/public-root-information/root-protocol-state-snapshot.json --host secure.testnet.nodes.onflow.org:9001 --network-key ba69f7d2e82b9edf25b103c195cd371cf0cc047ef8884a9bbe331e62982d46daeebf836f7445a2ac16741013b192959d8ad26998aff12f2adc67a99e1eb2988d\n")),(0,r.kt)("h4",{id:"step-4---start-the-node"},"Step 4 - Start the node"),(0,r.kt)("p",null,"The observer node can be run as a docker container"),(0,r.kt)("h5",{id:"observer-for-flow-mainnet"},"Observer for Flow Mainnet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm \\\n -v $PWD/flow_observer/bootstrap:/bootstrap:ro  \\\n -v $PWD/flow_observer/data:/data:rw \\\n --name flow_observer \\\n -p 8071:8071 \\\n -p 3569:3569 \\\n -p 9000:9000 \\\n -p 9001:9001 \\\n gcr.io/flow-container-registry/observer:v0.27.2 \\\n --bootstrapdir=/bootstrap \\\n --datadir=/data/protocol \\\n --bind 0.0.0.0:3569  \\\n --loglevel=error \\\n --secretsdir=/data/secrets  \\\n --upstream-node-addresses=access-008.mainnet20.nodes.onflow.org:9001 \\\n --upstream-node-public-keys=11742552d21ac93da37ccda09661792977e2ca548a3b26d05f22a51ae1d99b9b75c8a9b3b40b38206b38951e98e4d145f0010f8942fd82ddf0fb1d670202264a \\\n --bootstrap-node-addresses=access-008.mainnet20.nodes.onflow.org:3570  \\\n --bootstrap-node-public-keys=11742552d21ac93da37ccda09661792977e2ca548a3b26d05f22a51ae1d99b9b75c8a9b3b40b38206b38951e98e4d145f0010f8942fd82ddf0fb1d670202264a \\\n --observer-networking-key-path=/bootstrap/network.key\n")),(0,r.kt)("h5",{id:"observer-for-flow-testnet"},"Observer for Flow Testnet"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm \\\n -v $PWD/flow_observer/bootstrap:/bootstrap:ro  \\\n -v $PWD/flow_observer/data:/data:rw \\\n --name flow_observer \\\n -p 8071:8071 \\\n -p 3569:3569 \\\n -p 9000:9000 \\\n -p 9001:9001 \\\n gcr.io/flow-container-registry/observer:v0.27.2 \\\n --bootstrapdir=/bootstrap \\\n --datadir=/data/protocol \\\n --bind 0.0.0.0:3569  \\\n --loglevel=error \\\n --secretsdir=/data/secrets  \\\n --upstream-node-addresses=access-003.devnet37.nodes.onflow.org:9001 \\\n --upstream-node-public-keys=b662102f4184fc1caeb2933cf87bba75cdd37758926584c0ce8a90549bb12ee0f9115111bbbb6acc2b889461208533369a91e8321eaf6bcb871a788ddd6bfbf7 \\\n --bootstrap-node-addresses=access-003.devnet37.nodes.onflow.org:3570  \\\n --bootstrap-node-public-keys=b662102f4184fc1caeb2933cf87bba75cdd37758926584c0ce8a90549bb12ee0f9115111bbbb6acc2b889461208533369a91e8321eaf6bcb871a788ddd6bfbf7 \\\n --observer-networking-key-path=/bootstrap/network.key\n")),(0,r.kt)("p",null,"The observer node acts as a DHT client and bootstraps from upstream access nodes which run the DHT server.\nThe upstream bootstrap server is specified using the ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap-node-addresses")," which is the comma-separated list of hostnames of the access nodes.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap-node-public-keys")," is the list of the corresponding networking public key of those nodes."),(0,r.kt)("p",null,"The observer node delegates many of the API calls to the upstream access nodes.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"upstream-node-addresses")," is the list of access node hostnames to which this observer node can delegate to. The list can be different from the bootstrap node list.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap-node-public-key")," is the list of the corresponding networking public key of those nodes."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In the above docker commands, the Flow community access nodes are being used as the upstream access nodes. However, any other Flow access node that supports an observer node can be used")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"All parameters and their explanation can be found ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/onflow/flow-go/blob/82da35141ff095fbf75ce2c950efec240ad38565/cmd/access/node_builder/access_node_builder.go#L523-L558"},"here"))),(0,r.kt)("p",null,"\ud83d\ude80 ",(0,r.kt)("strong",{parentName:"p"},"The node should now be up and running")),(0,r.kt)("p",null,"You can now query the node for blocks, transaction etc. similar to how you would query an access node."),(0,r.kt)("p",null,"e.g. querying the gRPC API endpoint using Flow CLI"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"flow blocks get latest --host localhost:9000\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"REST API is currently not support (see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-go/issues/3138"},"issue"),")")),(0,r.kt)("p",null,"The observer node, like the other type of Flow nodes, also produces Prometheus metrics that can be used to monitor node health. More on that ",(0,r.kt)("a",{parentName:"p",href:"/nodes/node-operation/node-setup#monitoring-and-metrics"},"here")),(0,r.kt)("h2",{id:"faqs"},"FAQs"),(0,r.kt)("h3",{id:"does-the-observer-node-need-to-be-staked"},"Does the observer node need to be staked?"),(0,r.kt)("p",null,"No, the observer node is not a staked node."),(0,r.kt)("h3",{id:"can-any-access-be-used-to-bootstrap-an-observer-node"},"Can any access be used to bootstrap an observer node?"),(0,r.kt)("p",null,"No, only Access nodes which have explicitly turned ON support for observer nodes can be used to bootstrap an observer node."),(0,r.kt)("p",null,"The public access nodes that support observer nodes are listed below. Apart from these, other public access nodes run by node operators other than DapperLabs may choose to support observer nodes."),(0,r.kt)("h3",{id:"how-can-an-access-node-turn-on-support-for-observer-node"},"How can an access node turn ON support for observer node?"),(0,r.kt)("p",null,"An access node can support an observer node by passing in the following two parameters when starting the access node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"}," --supports-observer=true --public-network-address=0.0.0.0:3570\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"public-network-address")," is the address the observer nodes will connect to."),(0,r.kt)("h3",{id:"are-observer-nodes-subject-to-rate-limits"},"Are observer nodes subject to rate limits?"),(0,r.kt)("p",null,"The observer serves all the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow/blob/master/protobuf/flow/access/access.proto#L24-L42"},"Block related queries")," from is local database. These are not subjected to any rate limits."),(0,r.kt)("p",null,"However, it proxies all the other requests to the access node and those will be rate limited as per the rate limits defined on that access node."),(0,r.kt)("h3",{id:"flow-community-access-nodes-that-support-connections-from-observer-nodes"},"Flow community access nodes that support connections from observer nodes"),(0,r.kt)("h4",{id:"for-mainnet"},"For mainnet"),(0,r.kt)("p",null,"Access-007:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Host: ",(0,r.kt)("inlineCode",{parentName:"li"},"access-007.[current mainnet spork].nodes.onflow.org")),(0,r.kt)("li",{parentName:"ul"},"Public Key: ",(0,r.kt)("inlineCode",{parentName:"li"},"28a0d9edd0de3f15866dfe4aea1560c4504fe313fc6ca3f63a63e4f98d0e295144692a58ebe7f7894349198613f65b2d960abf99ec2625e247b1c78ba5bf2eae"))),(0,r.kt)("p",null,"Access-008:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Host: ",(0,r.kt)("inlineCode",{parentName:"li"},"access-008.[current mainnet spork].nodes.onflow.org")),(0,r.kt)("li",{parentName:"ul"},"Public Key: ",(0,r.kt)("inlineCode",{parentName:"li"},"11742552d21ac93da37ccda09661792977e2ca548a3b26d05f22a51ae1d99b9b75c8a9b3b40b38206b38951e98e4d145f0010f8942fd82ddf0fb1d670202264a"))),(0,r.kt)("h4",{id:"for-testnet"},"For testnet"),(0,r.kt)("p",null,"Access-003:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Host: ",(0,r.kt)("inlineCode",{parentName:"li"},"access-003.[current devnet spork].nodes.onflow.org")),(0,r.kt)("li",{parentName:"ul"},"Public Key: ",(0,r.kt)("inlineCode",{parentName:"li"},"b662102f4184fc1caeb2933cf87bba75cdd37758926584c0ce8a90549bb12ee0f9115111bbbb6acc2b889461208533369a91e8321eaf6bcb871a788ddd6bfbf7"))),(0,r.kt)("p",null,"Access-004:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Host: ",(0,r.kt)("inlineCode",{parentName:"li"},"access-004.[current devnet spork].nodes.onflow.org")),(0,r.kt)("li",{parentName:"ul"},"Public Key: ",(0,r.kt)("inlineCode",{parentName:"li"},"0d1523612be854638b985fc658740fa55f009f3cd49b739961ab082dc91b178ed781ef5f66878613b4d34672039150abfd9c8cfdfe48c565bca053fa4db30bec"))),(0,r.kt)("p",null,"While the public keys remain the same, the hostnames change each spork to include the spork name. Substitute ",(0,r.kt)("inlineCode",{parentName:"p"},"[current mainnet spork]")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"[current devnet spork]")," with the appropriate spork name (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"mainnet20"),").\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://docs.onflow.org/node-operation/past-sporks/"},"Past Sporks")," for the current spork for each network."))}b.isMDXComponent=!0},80634:(e,o,t)=>{t.d(o,{Z:()=>n});const n=t.p+"assets/images/observer-ca7f0bed4fc93098aef7600d3fe7f304.png"}}]);