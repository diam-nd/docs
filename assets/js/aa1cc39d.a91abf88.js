"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[12587],{44455:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>d,metadata:()=>r,toc:()=>h});o(67294);var t=o(85893),i=o(11151);const d={title:"Node Migration",description:"How to migrate a Flow node from one machine to another"},a=void 0,r={unversionedId:"building-on-flow/nodes/node-operation/node-migration",id:"building-on-flow/nodes/node-operation/node-migration",title:"Node Migration",description:"How to migrate a Flow node from one machine to another",source:"@site/docs/building-on-flow/nodes/node-operation/node-migration.mdx",sourceDirName:"building-on-flow/nodes/node-operation",slug:"/building-on-flow/nodes/node-operation/node-migration",permalink:"/docs/next/building-on-flow/nodes/node-operation/node-migration",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/building-on-flow/nodes/node-operation/node-migration.mdx",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1693406710,formattedLastUpdatedAt:"Aug 30, 2023",frontMatter:{title:"Node Migration",description:"How to migrate a Flow node from one machine to another"},sidebar:"buildingOnFlow",previous:{title:"Node Bootstrapping",permalink:"/docs/next/building-on-flow/nodes/node-operation/node-bootstrap"},next:{title:"Node Provisioning",permalink:"/docs/next/building-on-flow/nodes/node-operation/node-provisioning"}},s={},h=[{value:"Method 1 - No change to the node staking data",id:"method-1---no-change-to-the-node-staking-data",level:3},{value:"Method 2 - Network address change",id:"method-2---network-address-change",level:3},{value:"Method 3 - Staking or networking key change",id:"method-3---staking-or-networking-key-change",level:3}];function l(e){const n=Object.assign({p:"p",h3:"h3",ol:"ol",li:"li",code:"code",a:"a"},(0,i.ah)(),e.components),{Callout:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"There are a few different methods to migrate a running Flow node from one machine to the other."}),"\n",(0,t.jsx)(n.p,{children:"Choose the method depending upon what part of the staking data of the node is changing."}),"\n",(0,t.jsx)(n.h3,{id:"method-1---no-change-to-the-node-staking-data",children:"Method 1 - No change to the node staking data"}),"\n",(0,t.jsx)(n.p,{children:"If there is no change to the network address or the staking and networking keys and only the hardware the node is running needs to be changed then do the following:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Stop the Flow node."}),"\n",(0,t.jsxs)(n.li,{children:["Copy over the bootstrap data (typically under ",(0,t.jsx)(n.code,{children:"/var/flow/bootstrap"}),") which contains the node private key to the new machine."]}),"\n",(0,t.jsxs)(n.li,{children:["Copy over the data folder (typically under ",(0,t.jsx)(n.code,{children:"/var/flow/data"}),") which contains the state data."]}),"\n",(0,t.jsx)(n.li,{children:"Start the new node on the same network address as the old one."}),"\n"]}),"\n",(0,t.jsx)(o,{type:"warning",children:(0,t.jsx)(n.p,{children:"Please ensure that there is minimal downtime during this migration."})}),"\n",(0,t.jsx)(o,{type:"warning",children:(0,t.jsx)(n.p,{children:"The network address is currently part of the staking data that was submitted for the node. It is how other nodes in the network discover this node.\nHence, the network address of the node must stay the same between epochs otherwise the node will become unreachable for the other nodes and stop functioning."})}),"\n",(0,t.jsx)(n.h3,{id:"method-2---network-address-change",children:"Method 2 - Network address change"}),"\n",(0,t.jsx)(n.p,{children:"A change to the node network address (IP or a hostname) can only be done during the spork process."}),"\n",(0,t.jsx)(n.p,{children:"To change the networking address:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["A day before the ",(0,t.jsx)(n.a,{href:"./upcoming-sporks",children:"upcoming mainnet spork"}),", change the network address for the nodes in Flow Port (using the update network address feature).\nThe change will not take effect till an epoch transition happens."]}),"\n",(0,t.jsxs)(n.li,{children:["Change the addresses in the ",(0,t.jsx)(n.code,{children:"/var/flow/bootstrap/private-root-information/private-node-info_<nodeid>/node-info.priv.json"})," json file on the node."]}),"\n",(0,t.jsx)(n.li,{children:"A spork also causes an epoch transition, and the new addresses will take effect after the spork immediately."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"method-3---staking-or-networking-key-change",children:"Method 3 - Staking or networking key change"}),"\n",(0,t.jsx)(n.p,{children:"If the node after migration will be using new staking or networking keys then it needs to be unstaked and then re-staked with the new keys."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Unstake the node via Flow Port."}),"\n",(0,t.jsx)(n.li,{children:"Register the new node via Flow Port with the new staking information."}),"\n",(0,t.jsxs)(n.li,{children:["Run the new node with the new keys and network address. It should be able to join the network at the next epoch (see ",(0,t.jsx)(n.a,{href:"/docs/next/building-on-flow/nodes/node-operation/node-bootstrap#timing",children:"timing"}),")"]}),"\n"]}),"\n",(0,t.jsx)(o,{type:"warning",children:(0,t.jsxs)(n.p,{children:["Unstaking a node will result in the node ",(0,t.jsx)(n.a,{href:"/docs/next/building-on-flow/run-and-secure/staking/technical-overview#staking-operations-available-to-all-stakers",children:"not earning rewards"})," for the next epoch.\nDelegators to the old node will have their tokens unstaked automatically. They will also stop earning rewards unless they withdraw their unstaked tokens and delegate them to a different node."]})})]})}const c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,i.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}}}]);