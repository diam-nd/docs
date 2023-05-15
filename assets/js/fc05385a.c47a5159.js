"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1061],{13920:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});n(67294);var o=n(85893),s=n(11151);const i={title:"Node Roles"},r=void 0,a={unversionedId:"concepts/nodes/node-operation/node-roles",id:"concepts/nodes/node-operation/node-roles",title:"Node Roles",description:"Unlike most blockchains, not all Flow nodes are equal. Flow nodes all specialize and fulfill a specific role in the operation of the network.",source:"@site/docs/concepts/nodes/node-operation/node-roles.mdx",sourceDirName:"concepts/nodes/node-operation",slug:"/concepts/nodes/node-operation/node-roles",permalink:"/docs/concepts/nodes/node-operation/node-roles",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/nodes/node-operation/node-roles.mdx",tags:[],version:"current",lastUpdatedBy:"darkdrag00nv2",lastUpdatedAt:1684183067,formattedLastUpdatedAt:"May 15, 2023",frontMatter:{title:"Node Roles"},sidebar:"tutorialSidebar",previous:{title:"Provisioning a Flow node",permalink:"/docs/concepts/nodes/node-operation/node-provisioning"},next:{title:"Setting Up a Flow Node",permalink:"/docs/concepts/nodes/node-operation/node-setup"}},c={},d=[{value:"Collection",id:"collection",level:2},{value:"Consensus",id:"consensus",level:2},{value:"Execution",id:"execution",level:2},{value:"Verification",id:"verification",level:2},{value:"Access",id:"access",level:2},{value:"Observer",id:"observer",level:2},{value:"Archive",id:"archive",level:2}];function l(e){const t=Object.assign({p:"p",h2:"h2",strong:"strong",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,s.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Unlike most blockchains, not all Flow nodes are equal. Flow nodes all specialize and fulfill a specific role in the operation of the network.\nCollection, consensus, execution, verification and access nodes are all staked nodes while the observer node is not staked."}),"\n",(0,o.jsx)(t.h2,{id:"collection",children:"Collection"}),"\n",(0,o.jsx)(t.p,{children:"Collection nodes are bandwidth-optimized nodes divided by the protocol into several cooperating Clusters. Their first task is managing the transaction pool and collecting well-formed transactions to propose to Consensus nodes. Transactions are assigned to a cluster pseudorandomly by transaction hash. A well-formed transaction must include credentials from the guarantor of the transaction. When a Collection Node sees a well-formed transaction, it hashes the text of that transaction and signs the transaction to indicate two things: first, that it is well-formed; and second, that it will commit to storing the transaction text until the Execution nodes have finished processing it. Each cluster collects transactions, assembles them into Collections and submits a Collection Guarantee signed by a super-majority of the cluster to the Consensus nodes."}),"\n",(0,o.jsx)(t.p,{children:"Collection nodes are required to stake a minimum of 250,000 FLOW to be a confirmed node operator."}),"\n",(0,o.jsx)(t.h2,{id:"consensus",children:"Consensus"}),"\n",(0,o.jsx)(t.p,{children:"Consensus nodes form and propose blocks in a manner similar to traditionally-structured proof-of-stake blockchains, using the HotStuff consensus algorithm to create a globally consistent chain of blocks. Consensus nodes validate that the signed collection hashes submitted to them by Collection nodes were, in fact, signed by the required majority of Collection nodes. Thereafter, the Consensus nodes assemble the transactions into blocks and finalize them through voting.\nThe more participants there are in this process, the more decentralized the network. However, consensus algorithms typically bottleneck the limit to the number of participants. The Flow protocol chose the HotStuff algorithm because it is flexible enough to add participants and currently supports about 100 operators. Adding more than 100 participants to the protocol by adapting HotStuff will continue to be an area of active development."}),"\n",(0,o.jsx)(t.p,{children:"Consensus nodes act as checkpoints against other Collection nodes. They are responsible for checking that a critical number of Collection nodes reviewed and signed for the transaction. Collection nodes are held accountable by Consensus nodes. A common concern with proof-of-work- and proof-of-stake based systems is that a small subset of the population of nodes can control important resources such as the mining or stake needed to produce and vote on blocks, which is a degradation of the security of the system. By lowering the requirements to participate, Flow makes it extremely difficult and expensive to coordinate a Byzantine majority of Consensus nodes."}),"\n",(0,o.jsx)(t.p,{children:"Consensus nodes have minimal bandwidth and computation requirements, allowing even a modest computing device (any consumer-grade hardware) to participate in the voting process and ensure the safety of the network. Many networks claim open participation, yet substantial resources \u2014 stake, computation, or otherwise \u2014 are needed to partake. Maintaining such barriers to entry undermines the security of the network. Lowering the participation requirements preserves the security of the network by providing a high degree of byzantine fault tolerance since it becomes exceedingly difficult for a subset of bad actors to subvert the network."}),"\n",(0,o.jsx)(t.p,{children:"Consensus nodes are required to stake a minimum of 500,000 FLOW to be a confirmed node operator."}),"\n",(0,o.jsx)(t.h2,{id:"execution",children:"Execution"}),"\n",(0,o.jsx)(t.p,{children:"Execution nodes are the most resource-intensive nodes on the Flow network, responsible for executing transactions and maintaining the Execution State \u2014 a cryptographically-verifiable data store for all user accounts and smart contract states \u2014 as well as responding to queries related to it. Execution nodes compute the outputs of the blocks they are provided. They then ask the Collection nodes for the collections which contain transactions waiting to be executed. With this data they are able to compute the output, which is later verified by Verification nodes to ensure honesty (allocation of Verification nodes is via a sortition algorithm). The Execution nodes are primarily responsible for Flow's improvements in scale and efficiency because only a very small number of these powerful compute resources are required to compute and store the historical state."}),"\n",(0,o.jsx)(t.p,{children:"Execution nodes give the Flow network its performance characteristics: highly scalable within a single shared state environment (i.e., no sharding). However, the significant hardware requirements make them the least accessible option for participation as a Validator. Because the revenue pool splits between relatively few nodes, the revenue per-node should more than compensate for the high capital costs of operating this node."}),"\n",(0,o.jsx)(t.p,{children:"An Execution Node presents a hashed commitment once it has computed the output. The output is only revealed once its co-executors have also submitted their outputs. This is important to ensure nodes aren't spoofing each other's work. Once they've all submitted their answers, the output is revealed and subjected to random queries and checks run by Verification nodes. The Execution nodes have relatively low byzantine fault tolerance. However, this does not compromise the overall security of the system because the process they perform is deterministic -- any bad actor will easily be detected and punished by Verification nodes."}),"\n",(0,o.jsx)(t.p,{children:"This relatively small group of nodes has the most substantial technical requirements for processor speed and bandwidth because they are tasked with all the computations necessary to determine the output of the network. Allowing for this degree of specialization can reduce computation costs by at least one thousand times, and possibly much more, when compared to Ethereum."}),"\n",(0,o.jsx)(t.p,{children:"Execution nodes are required to stake a minimum of 1,250,000 FLOW to be a confirmed node operator."}),"\n",(0,o.jsx)(t.h2,{id:"verification",children:"Verification"}),"\n",(0,o.jsx)(t.p,{children:"Verification nodes are responsible for confirming the correctness of the work done by Execution nodes. Individual Verification nodes only check a small amount of the total computation, but collectively they check every computation many times in parallel. Verification nodes verify Execution Receipts provided by Execution nodes and issue Result Approvals. A sortition algorithm determines which chunks of the Execution Receipt from the Execution nodes the Verification Node must query to check they were computed correctly. Ultimately, these nodes keep the Execution nodes honest; this balance of power maintains the access, security, and verifiability criteria of decentralization. It is highly byzantine fault tolerant because even if there is a substantial number of byzantine errors in the Verification Node\npool, the Consensus nodes are still required to approve that transactions they signed were reviewed by a critical amount of the network."}),"\n",(0,o.jsx)(t.p,{children:"Verification nodes are required to stake a minimum of 135,000 FLOW to be a confirmed node operator."}),"\n",(0,o.jsx)(t.h2,{id:"access",children:"Access"}),"\n",(0,o.jsx)(t.p,{children:"Access nodes act as a proxy to the Flow network. The Access node routes transactions to the correct collection node and routes state queries to execution nodes (while likely caching state to answer queries in a timely manner in the future). Clients submit their transactions to any Access node or run their own if they can't find a service provider they're happy with."}),"\n",(0,o.jsx)(t.p,{children:"Access nodes are required to stake 100 FLOW to be a confirmed node operator. However, since an access node does not participate in block production, it does not receive any staking rewards."}),"\n",(0,o.jsx)(t.h2,{id:"observer",children:"Observer"}),"\n",(0,o.jsxs)(t.p,{children:["An observer node provides locally accessible, continuously updated, verified copy of the block data. It serves the Access API but unlike an access node, an observer node does not need to be staked, and ",(0,o.jsx)(t.strong,{children:"anyone"})," can run it without being added to the approved list of nodes."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/concepts/nodes/node-operation/observer-node",children:"Get started running an observer node"})}),"\n",(0,o.jsx)(t.h2,{id:"archive",children:"Archive"}),"\n",(0,o.jsx)(t.p,{children:"The Archive node provides a scalable and efficient way to access the history of Flow protocol and the execution state for the current spork."}),"\n",(0,o.jsx)(t.p,{children:"This node can be run by anyone without being staked or added to the approved list of nodes. The Archive node follows the chain, stores and indexes both protocol and execution state, and allows retrieval of blocks, collections, transactions and events from the genesis of the current spork."}),"\n",(0,o.jsx)(t.p,{children:"It also allows script execution and other read-only queries that require the execution state to be read."}),"\n",(0,o.jsx)(t.h2,{id:""}),"\n",(0,o.jsx)(t.p,{children:"Here is a comparison of the different node roles,"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{align:"left",children:"Role"}),(0,o.jsx)(t.th,{align:"center",children:"Staked"}),(0,o.jsx)(t.th,{align:"center",children:"Recives Rewards"}),(0,o.jsx)(t.th,{align:"center",children:"Permissioned"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{align:"left",children:"Collection"}),(0,o.jsx)(t.td,{align:"center",children:"Yes"}),(0,o.jsx)(t.td,{align:"center",children:"Yes"}),(0,o.jsx)(t.td,{align:"center",children:"Yes"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{align:"left",children:"Consensus"}),(0,o.jsx)(t.td,{align:"center",children:"Yes"}),(0,o.jsx)(t.td,{align:"center",children:"Yes"}),(0,o.jsx)(t.td,{align:"center",children:"Yes"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{align:"left",children:"Execution"}),(0,o.jsx)(t.td,{align:"center",children:"Yes"}),(0,o.jsx)(t.td,{align:"center",children:"Yes"}),(0,o.jsx)(t.td,{align:"center",children:"Yes"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{align:"left",children:"Verification"}),(0,o.jsx)(t.td,{align:"center",children:"Yes"}),(0,o.jsx)(t.td,{align:"center",children:"Yes"}),(0,o.jsx)(t.td,{align:"center",children:"Yes"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{align:"left",children:"Access"}),(0,o.jsx)(t.td,{align:"center",children:"Yes"}),(0,o.jsx)(t.td,{align:"center",children:"No"}),(0,o.jsx)(t.td,{align:"center",children:"No \ud83c\udd95"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{align:"left",children:"Observer"}),(0,o.jsx)(t.td,{align:"center",children:"No"}),(0,o.jsx)(t.td,{align:"center",children:"No"}),(0,o.jsx)(t.td,{align:"center",children:"No"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{align:"left",children:"Archive"}),(0,o.jsx)(t.td,{align:"center",children:"No"}),(0,o.jsx)(t.td,{align:"center",children:"No"}),(0,o.jsx)(t.td,{align:"center",children:"No"})]})]})]})]})}const h=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,o.jsx)(t,Object.assign({},e,{children:(0,o.jsx)(l,e)})):l(e)}}}]);