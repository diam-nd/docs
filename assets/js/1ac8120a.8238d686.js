"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[31342],{54842:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});t(67294);var c=t(85893),o=t(11151);const i={title:"Machine Account",sidebar_title:"Machine Account",description:"Usage and Purpose of the Machine Account"},a=void 0,s={unversionedId:"concepts/staking/machine-account",id:"version-stable/concepts/staking/machine-account",title:"Machine Account",description:"Usage and Purpose of the Machine Account",source:"@site/versioned_docs/version-stable/concepts/staking/11-machine-account.mdx",sourceDirName:"concepts/staking",slug:"/concepts/staking/machine-account",permalink:"/docs/concepts/staking/machine-account",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/staking/11-machine-account.mdx",tags:[],version:"stable",lastUpdatedBy:"Alex",lastUpdatedAt:1693406710,formattedLastUpdatedAt:"Aug 30, 2023",sidebarPosition:11,frontMatter:{title:"Machine Account",sidebar_title:"Machine Account",description:"Usage and Purpose of the Machine Account"},sidebar:"concepts",previous:{title:"Query QC/DKG Info with Scripts or Events",permalink:"/docs/concepts/staking/qc-dkg-scripts-events"},next:{title:"Staking FAQ",permalink:"/docs/concepts/staking/faq"}},r={},d=[{value:"What is a Machine Account?",id:"what-is-a-machine-account",level:3},{value:"Creation",id:"creation",level:4},{value:"Funding",id:"funding",level:4}];function h(e){const n=Object.assign({h3:"h3",p:"p",a:"a",code:"code",h4:"h4"},(0,o.ah)(),e.components),{Callout:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Callout",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h3,{id:"what-is-a-machine-account",children:"What is a Machine Account?"}),"\n",(0,c.jsxs)(n.p,{children:["A Machine Account is a Flow account which is used autonomously by a node to interact with\nsystem smart contracts. Machine Accounts contain Cadence resources granted to network\nparticipants which are used to participate in smart-contract-mediated protocols. Currently,\nMachine Accounts are used in the ",(0,c.jsx)(n.a,{href:"/docs/concepts/staking/epoch-preparation",children:"Epoch Preparation Protocol"}),",\nwhich prepares the network for the next epoch."]}),"\n",(0,c.jsx)(n.p,{children:"Your Machine Account is distinct from the account you use for staking your node (your Staking Account).\nThe Machine Account is intended for use by node software and does not have access to your staked tokens or staking rewards."}),"\n",(0,c.jsx)(t,{type:"info",children:(0,c.jsxs)(n.p,{children:["Currently Machine Accounts are required only for ",(0,c.jsx)(n.code,{children:"collection"})," and ",(0,c.jsx)(n.code,{children:"consensus"})," nodes."]})}),"\n",(0,c.jsx)(n.h4,{id:"creation",children:"Creation"}),"\n",(0,c.jsxs)(n.p,{children:["For new node operators, Machine Accounts are created during the ",(0,c.jsx)(n.a,{href:"/docs/concepts/nodes/flow-port/staking-guide",children:"staking process"})," in Flow Port.\nFor node operators who initially staked prior to the introduction of Machine Accounts, Machine Accounts can be\ncreated for your staked nodes by following ",(0,c.jsx)(n.a,{href:"/docs/concepts/nodes/node-operation/machine-existing-operator",children:"this guide"}),"."]}),"\n",(0,c.jsx)(n.h4,{id:"funding",children:"Funding"}),"\n",(0,c.jsx)(n.p,{children:"Machine Accounts must maintain a balance of liquid FLOW tokens to pay fees on transactions they\nsubmit to system smart contracts. Typically very few transactions will be sent (about 1-5 per week)\nhowever more may be required under certain circumstances and network conditions."}),"\n",(0,c.jsx)(t,{type:"info",children:(0,c.jsx)(n.p,{children:"Because some transactions sent by the Machine Account are system critical, we recommend maintaining\na balance sufficient to accomodate worst-case transaction submission numbers at all times."})}),"\n",(0,c.jsx)(n.p,{children:"When creating a new machine account, we recommend initially funding with 0.005 FLOW for collection nodes and\n0.25 FLOW for consensus nodes."}),"\n",(0,c.jsx)(n.p,{children:"Machine account balances should be monitored and periodically refilled to ensure they have sufficient funds.\nWe recommend a minimum balance at all times of 0.002 FLOW for collection nodes and 0.1 FLOW for consensus nodes."}),"\n",(0,c.jsx)(n.p,{children:"A node operator can easily withdraw their FLOW from their machine account if they decide they don't need them there any more."})]})}const u=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(h,e)})):h(e)}}}]);