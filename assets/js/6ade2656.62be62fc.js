"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[2373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),h=r,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},78167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={title:"Node Roles"},i=void 0,s={unversionedId:"Concepts/nodes/node-operation/node-roles",id:"Concepts/nodes/node-operation/node-roles",title:"Node Roles",description:"Unlike most blockchains, not all Flow nodes are equal. Flow nodes all specialize and fulfill a specific role in the operation of the network.",source:"@site/docs/Concepts/nodes/node-operation/node-roles.mdx",sourceDirName:"Concepts/nodes/node-operation",slug:"/Concepts/nodes/node-operation/node-roles",permalink:"/docs/Concepts/nodes/node-operation/node-roles",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Node Roles"},sidebar:"tutorialSidebar",previous:{title:"Provisioning a Flow node",permalink:"/docs/Concepts/nodes/node-operation/node-provisioning"},next:{title:"Setting Up a Flow Node",permalink:"/docs/Concepts/nodes/node-operation/node-setup"}},l={},c=[{value:"Collection",id:"collection",level:2},{value:"Consensus",id:"consensus",level:2},{value:"Execution",id:"execution",level:2},{value:"Verification",id:"verification",level:2},{value:"Access",id:"access",level:2},{value:"Observer",id:"observer",level:2},{value:"Archive",id:"archive",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Unlike most blockchains, not all Flow nodes are equal. Flow nodes all specialize and fulfill a specific role in the operation of the network.\nCollection, consensus, execution, verification and access nodes are all staked nodes while the observer node is not staked."),(0,r.kt)("h2",{id:"collection"},"Collection"),(0,r.kt)("p",null,"Collection nodes are bandwidth-optimized nodes divided by the protocol into several cooperating Clusters. Their first task is managing the transaction pool and collecting well-formed transactions to propose to Consensus nodes. Transactions are assigned to a cluster pseudorandomly by transaction hash. A well-formed transaction must include credentials from the guarantor of the transaction. When a Collection Node sees a well-formed transaction, it hashes the text of that transaction and signs the transaction to indicate two things: first, that it is well-formed; and second, that it will commit to storing the transaction text until the Execution nodes have finished processing it. Each cluster collects transactions, assembles them into Collections and submits a Collection Guarantee signed by a super-majority of the cluster to the Consensus nodes."),(0,r.kt)("p",null,"Collection nodes are required to stake a minimum of 250,000 FLOW to be a confirmed node operator."),(0,r.kt)("h2",{id:"consensus"},"Consensus"),(0,r.kt)("p",null,"Consensus nodes form and propose blocks in a manner similar to traditionally-structured proof-of-stake blockchains, using the HotStuff consensus algorithm to create a globally consistent chain of blocks. Consensus nodes validate that the signed collection hashes submitted to them by Collection nodes were, in fact, signed by the required majority of Collection nodes. Thereafter, the Consensus nodes assemble the transactions into blocks and finalize them through voting.\nThe more participants there are in this process, the more decentralized the network. However, consensus algorithms typically bottleneck the limit to the number of participants. The Flow protocol chose the HotStuff algorithm because it is flexible enough to add participants and currently supports about 100 operators. Adding more than 100 participants to the protocol by adapting HotStuff will continue to be an area of active development."),(0,r.kt)("p",null,"Consensus nodes act as checkpoints against other Collection nodes. They are responsible for checking that a critical number of Collection nodes reviewed and signed for the transaction. Collection nodes are held accountable by Consensus nodes. A common concern with proof-of-work- and proof-of-stake based systems is that a small subset of the population of nodes can control important resources such as the mining or stake needed to produce and vote on blocks, which is a degradation of the security of the system. By lowering the requirements to participate, Flow makes it extremely difficult and expensive to coordinate a Byzantine majority of Consensus nodes."),(0,r.kt)("p",null,"Consensus nodes have minimal bandwidth and computation requirements, allowing even a modest computing device (any consumer-grade hardware) to participate in the voting process and ensure the safety of the network. Many networks claim open participation, yet substantial resources \u2014 stake, computation, or otherwise \u2014 are needed to partake. Maintaining such barriers to entry undermines the security of the network. Lowering the participation requirements preserves the security of the network by providing a high degree of byzantine fault tolerance since it becomes exceedingly difficult for a subset of bad actors to subvert the network."),(0,r.kt)("p",null,"Consensus nodes are required to stake a minimum of 500,000 FLOW to be a confirmed node operator."),(0,r.kt)("h2",{id:"execution"},"Execution"),(0,r.kt)("p",null,"Execution nodes are the most resource-intensive nodes on the Flow network, responsible for executing transactions and maintaining the Execution State \u2014 a cryptographically-verifiable data store for all user accounts and smart contract states \u2014 as well as responding to queries related to it. Execution nodes compute the outputs of the blocks they are provided. They then ask the Collection nodes for the collections which contain transactions waiting to be executed. With this data they are able to compute the output, which is later verified by Verification nodes to ensure honesty (allocation of Verification nodes is via a sortition algorithm). The Execution nodes are primarily responsible for Flow's improvements in scale and efficiency because only a very small number of these powerful compute resources are required to compute and store the historical state."),(0,r.kt)("p",null,"Execution nodes give the Flow network its performance characteristics: highly scalable within a single shared state environment (i.e., no sharding). However, the significant hardware requirements make them the least accessible option for participation as a Validator. Because the revenue pool splits between relatively few nodes, the revenue per-node should more than compensate for the high capital costs of operating this node."),(0,r.kt)("p",null,"An Execution Node presents a hashed commitment once it has computed the output. The output is only revealed once its co-executors have also submitted their outputs. This is important to ensure nodes aren't spoofing each other's work. Once they've all submitted their answers, the output is revealed and subjected to random queries and checks run by Verification nodes. The Execution nodes have relatively low byzantine fault tolerance. However, this does not compromise the overall security of the system because the process they perform is deterministic -- any bad actor will easily be detected and punished by Verification nodes."),(0,r.kt)("p",null,"This relatively small group of nodes has the most substantial technical requirements for processor speed and bandwidth because they are tasked with all the computations necessary to determine the output of the network. Allowing for this degree of specialization can reduce computation costs by at least one thousand times, and possibly much more, when compared to Ethereum."),(0,r.kt)("p",null,"Execution nodes are required to stake a minimum of 1,250,000 FLOW to be a confirmed node operator."),(0,r.kt)("h2",{id:"verification"},"Verification"),(0,r.kt)("p",null,"Verification nodes are responsible for confirming the correctness of the work done by Execution nodes. Individual Verification nodes only check a small amount of the total computation, but collectively they check every computation many times in parallel. Verification nodes verify Execution Receipts provided by Execution nodes and issue Result Approvals. A sortition algorithm determines which chunks of the Execution Receipt from the Execution nodes the Verification Node must query to check they were computed correctly. Ultimately, these nodes keep the Execution nodes honest; this balance of power maintains the access, security, and verifiability criteria of decentralization. It is highly byzantine fault tolerant because even if there is a substantial number of byzantine errors in the Verification Node\npool, the Consensus nodes are still required to approve that transactions they signed were reviewed by a critical amount of the network."),(0,r.kt)("p",null,"Verification nodes are required to stake a minimum of 135,000 FLOW to be a confirmed node operator."),(0,r.kt)("h2",{id:"access"},"Access"),(0,r.kt)("p",null,"Access nodes act as a proxy to the Flow network. The Access node routes transactions to the correct collection node and routes state queries to execution nodes (while likely caching state to answer queries in a timely manner in the future). Clients submit their transactions to any Access node or run their own if they can't find a service provider they're happy with."),(0,r.kt)("p",null,"Access nodes are required to stake 100 FLOW to be a confirmed node operator. However, since an access node does not participate in block production, it does not receive any staking rewards."),(0,r.kt)("h2",{id:"observer"},"Observer"),(0,r.kt)("p",null,"An observer node provides locally accessible, continuously updated, verified copy of the block data. It serves the Access API but unlike an access node, an observer node does not need to be staked, and ",(0,r.kt)("strong",{parentName:"p"},"anyone")," can run it without being added to the approved list of nodes."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developers.flow.com/nodes/node-operation/observer-node"},"Get started running an observer node")),(0,r.kt)("h2",{id:"archive"},"Archive"),(0,r.kt)("p",null,"The Archive node provides a scalable and efficient way to access the history of Flow protocol and the execution state for the current spork."),(0,r.kt)("p",null,"This node can be run by anyone without being staked or added to the approved list of nodes. The Archive node follows the chain, stores and indexes both protocol and execution state, and allows retrieval of blocks, collections, transactions and events from the genesis of the current spork."),(0,r.kt)("p",null,"It also allows script execution and other read-only queries that require the execution state to be read."),(0,r.kt)("h2",{id:""}),(0,r.kt)("p",null,"Here is a comparison of the different node roles,"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Role"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Staked"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Recives Rewards"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Permissioned"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Collection"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Consensus"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Execution"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Verification"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Access"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No \ud83c\udd95")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Observer"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Archive"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No")))))}p.isMDXComponent=!0}}]);