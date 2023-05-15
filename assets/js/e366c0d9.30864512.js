"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[132],{92677:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>c});t(67294);var o=t(85893),r=t(11151);const s={title:"How to Stake Locked FLOW with a Third-Party Node Operator",sidebar_title:"Stake with a Third-Party Operator"},d=void 0,i={unversionedId:"concepts/nodes/staking/locked-third-party-operator",id:"concepts/nodes/staking/locked-third-party-operator",title:"How to Stake Locked FLOW with a Third-Party Node Operator",description:"Introduction",source:"@site/docs/concepts/nodes/staking/locked-third-party-operator.md",sourceDirName:"concepts/nodes/staking",slug:"/concepts/nodes/staking/locked-third-party-operator",permalink:"/docs/concepts/nodes/staking/locked-third-party-operator",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/concepts/nodes/staking/locked-third-party-operator.md",tags:[],version:"current",lastUpdatedBy:"darkdrag00nv2",lastUpdatedAt:1684183067,formattedLastUpdatedAt:"May 15, 2023",frontMatter:{title:"How to Stake Locked FLOW with a Third-Party Node Operator",sidebar_title:"Stake with a Third-Party Operator"},sidebar:"tutorialSidebar",previous:{title:"How to Stake with Locked FLOW",permalink:"/docs/concepts/nodes/staking/locked-staking-guide"},next:{title:"Machine Account",permalink:"/docs/concepts/nodes/staking/machine-account"}},h={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Direct Staking",id:"direct-staking",level:2},{value:"Indirect Staking",id:"indirect-staking",level:2},{value:"Operator Setup",id:"operator-setup",level:3},{value:"1. Configure a node operator account",id:"1-configure-a-node-operator-account",level:3},{value:"2. Create a new <code>NodeInfo</code> entry",id:"2-create-a-new-nodeinfo-entry",level:3},{value:"3. Send the new node ID to the token holder",id:"3-send-the-new-node-id-to-the-token-holder",level:3},{value:"4. Confirm staking access with token holder",id:"4-confirm-staking-access-with-token-holder",level:3},{value:"Token Holder Setup",id:"token-holder-setup",level:2},{value:"1. Fetch node operator information",id:"1-fetch-node-operator-information",level:3},{value:"2. Register node &amp; grant staking access to the node operator",id:"2-register-node--grant-staking-access-to-the-node-operator",level:3},{value:"Staking Actions",id:"staking-actions",level:2},{value:"Stake New Tokens",id:"stake-new-tokens",level:3},{value:"Re-Stake Unstaked Tokens",id:"re-stake-unstaked-tokens",level:3},{value:"Unstake Tokens",id:"unstake-tokens",level:3},{value:"Withdraw Unstaked Tokens",id:"withdraw-unstaked-tokens",level:3},{value:"Withdraw Rewarded Tokens",id:"withdraw-rewarded-tokens",level:3},{value:"Teardown",id:"teardown",level:2},{value:"Remove <code>NodeInfo</code> Entry",id:"remove-nodeinfo-entry",level:3}];function a(e){const n=Object.assign({h2:"h2",p:"p",ol:"ol",li:"li",a:"a",strong:"strong",code:"code",ul:"ul",em:"em",h3:"h3",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,r.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"Whether it is through a friend or a hosted node provider,\nsome Flow token holders may wish to stake a node that is being operated by another party.\nThis document outlines two methods for staking locked FLOW with a third-party operator,\nthe main difference being the level of control given to the operator."}),"\n",(0,o.jsx)(n.h2,{id:"direct-staking",children:"Direct Staking"}),"\n",(0,o.jsx)(n.p,{children:"The direct staking method is the simplest to implement and allows the token holder\nto retain full control of their tokens. In this method, the node operator is responsible\nfor creating and managing the node infrastructure, but does not control any tokens\nor initiate any staking actions."}),"\n",(0,o.jsx)(n.p,{children:"This form of staking relationship can be implemented in several ways. The steps below\nprovide an outline for one possible approach, but it is not the only approach."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["The node operator ",(0,o.jsx)(n.a,{href:"/docs/concepts/nodes/node-operation/node-bootstrap",children:"bootstraps a new node record"}),"\nand sends the node information to the token holder."]}),"\n",(0,o.jsx)(n.li,{children:"The token holder uses this node information to register the node with the central staking contract.\nThis can be done in one of two ways:"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["a) The token holder manually ",(0,o.jsx)(n.a,{href:"./locked-staking-guide#setup",children:"submits a transaction to register a new node"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"b) The token holder registers the node using the Flow Port."}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"The node operator should then ensure that the node is live and running before the epoch starts."}),"\n",(0,o.jsxs)(n.li,{children:["Once the epoch starts, the token holder is free to manage their stake through the Flow Port or\nmanually by following the ",(0,o.jsx)(n.a,{href:"./locked-staking-guide#staking-actions",children:"staking guide"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"indirect-staking",children:"Indirect Staking"}),"\n",(0,o.jsxs)(n.p,{children:["This section covers the technical integration required for a ",(0,o.jsx)(n.strong,{children:"node operator (NO)"})," to operate\na staked Flow node using locked FLOW provided by a ",(0,o.jsx)(n.strong,{children:"token holder (TH)"}),". This relationship\nis facilitated by the ",(0,o.jsx)(n.code,{children:"StakingProxy"})," contract."]}),"\n",(0,o.jsx)(n.p,{children:"Both parties have separate roles in this relationship:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Node Operator:"})," Manages the node infrastructure but ",(0,o.jsx)(n.em,{children:"does not hold"})," any FLOW tokens."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Token Holder:"})," Provides restricted, indirect access to their FLOW tokens for the sole purpose of staking."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This guide assumes that the node operator and token holder have already\nestablished a trusted off-chain relationship."}),"\n",(0,o.jsx)(n.h3,{id:"operator-setup",children:"Operator Setup"}),"\n",(0,o.jsxs)(n.p,{children:["These are the steps that a ",(0,o.jsx)(n.strong,{children:"node operator"})," must take in order to accept\nstaking access granted by a token holder."]}),"\n",(0,o.jsx)(n.h3,{id:"1-configure-a-node-operator-account",children:"1. Configure a node operator account"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Note: this step can be skipped if the node operator has already configured their account."})}),"\n",(0,o.jsx)(n.p,{children:"Before the node operator can begin running nodes on behalf of token holders,\nthey must configure their account. This account is referred to as the operator account."}),"\n",(0,o.jsx)(n.p,{children:"The operator account will hold the staking capabilities for all token holders."}),"\n",(0,o.jsxs)(n.p,{children:["The node operator can configure their account with the ",(0,o.jsx)(n.strong,{children:"Set Up Operator Account"}),"\n(",(0,o.jsx)(n.a,{href:"/docs/cadence/core-contracts/locked-tokens#node-operator",children:"NO.01"}),") transaction.\nThis transaction must be authorized by an existing account that the token holder wishes\nto use as its operator account."]}),"\n",(0,o.jsxs)(n.h3,{id:"2-create-a-new-nodeinfo-entry",children:["2. Create a new ",(0,o.jsx)(n.code,{children:"NodeInfo"})," entry"]}),"\n",(0,o.jsx)(n.p,{children:"When a token holder asks a node operator to run a node for them,\nthe first step is for the node operator to provision a new node\nand create the staking and networking key-pairs."}),"\n",(0,o.jsxs)(n.p,{children:["After this is done, the node operator creates a ",(0,o.jsx)(n.code,{children:"NodeInfo"})," entry and adds it to the\noperator account with the ",(0,o.jsx)(n.strong,{children:"Add Node Info"}),"\n(",(0,o.jsx)(n.a,{href:"/docs/cadence/core-contracts/locked-tokens#node-operator",children:"NO.02"}),") transaction."]}),"\n",(0,o.jsx)(n.p,{children:"This transaction takes the following arguments:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Argument"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"id"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"String"})}),(0,o.jsxs)(n.td,{children:["The ID of the new node. It must be a 32 byte ",(0,o.jsx)(n.code,{children:"String"}),". The operator is free to choose this value, but it must be unique across all nodes. A recommended process to generate this is to hash the staking public key."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"role"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"UInt8"})}),(0,o.jsx)(n.td,{children:"The role of the new node. (1: collection, 2: consensus, 3: execution, 4: verification, 5: access)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"networkingAddress"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"String"})}),(0,o.jsx)(n.td,{children:"The IP address of the new node."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"networkingKey"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"String"})}),(0,o.jsx)(n.td,{children:"The networking public key as a hex-encoded string."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"stakingKey"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"String"})}),(0,o.jsx)(n.td,{children:"The staking public key as a hex-encoded string."})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"3-send-the-new-node-id-to-the-token-holder",children:"3. Send the new node ID to the token holder"}),"\n",(0,o.jsxs)(n.p,{children:["After the ",(0,o.jsx)(n.code,{children:"NodeInfo"})," object has been created,\nthe token holder must provide the following information to the token holder:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"nodeID"})," - The ID of the new node."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"operatorAddress"})," - The Flow address of the operator account."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The token holder will use this information to grant staking access to the node operator."}),"\n",(0,o.jsx)(n.h3,{id:"4-confirm-staking-access-with-token-holder",children:"4. Confirm staking access with token holder"}),"\n",(0,o.jsxs)(n.p,{children:["After the ",(0,o.jsx)(n.code,{children:"NodeInfo"})," object has been created and published,\nthe token holder uses it to initiate a staking registration.\nAfter this, the token holder passes a ",(0,o.jsx)(n.code,{children:"StakingProxy.NodeStakerProxy"}),"\ncapability to the node operator that allows them to perform staking operations."]}),"\n",(0,o.jsx)(n.p,{children:"The node operator should confirm that they have access to this capability."}),"\n",(0,o.jsx)(n.h2,{id:"token-holder-setup",children:"Token Holder Setup"}),"\n",(0,o.jsxs)(n.p,{children:["These are the steps that a token holder must take in order to grant staking access\nto a node operator via the ",(0,o.jsx)(n.code,{children:"StakingProxy"})," contract."]}),"\n",(0,o.jsx)(n.h3,{id:"1-fetch-node-operator-information",children:"1. Fetch node operator information"}),"\n",(0,o.jsxs)(n.p,{children:["After a node operator has agreed to run a node for you,\nthey will create a ",(0,o.jsx)(n.code,{children:"NodeInfo"})," object holding the IP address and public keys for your new node.\nThis ",(0,o.jsx)(n.code,{children:"NodeInfo"})," object will be stored in an account owned by the node operator (operator account)."]}),"\n",(0,o.jsxs)(n.p,{children:["The node operator should provide you with their operator account ",(0,o.jsx)(n.code,{children:"address"})," and the ",(0,o.jsx)(n.code,{children:"nodeID"})," for your new node.\nThese values can be passed into the ",(0,o.jsx)(n.strong,{children:"Get Operator Node Info"})," (",(0,o.jsx)(n.a,{href:"/docs/cadence/core-contracts/locked-tokens#token-holder",children:"TH.15"}),")\nscript to confirm your node information:"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Argument"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"account"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Address"})}),(0,o.jsx)(n.td,{children:"The address of the node operator's account."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"nodeID"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"String"})}),(0,o.jsx)(n.td,{children:"The unique ID of the node."})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["This script returns a ",(0,o.jsx)(n.code,{children:"StakingProxy.NodeInfo"})," struct containing the details for the node.\nIf no ",(0,o.jsx)(n.code,{children:"NodeInfo"})," is available, the script will fail."]}),"\n",(0,o.jsx)(n.p,{children:"If this node information is correct, continue to step 2."}),"\n",(0,o.jsx)(n.h3,{id:"2-register-node--grant-staking-access-to-the-node-operator",children:"2. Register node & grant staking access to the node operator"}),"\n",(0,o.jsxs)(n.p,{children:["After confirming that the node information is correct, the token holder can register the\nnode with the central staking contract by using the using the ",(0,o.jsx)(n.strong,{children:"Register Node"})," (",(0,o.jsx)(n.a,{href:"/docs/cadence/core-contracts/locked-tokens#token-holder",children:"TH.16"}),") transaction\nwith the following arguments:"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Argument"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"address"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"Address"})}),(0,o.jsx)(n.td,{children:"The node operator address."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"nodeID"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"String"})}),(0,o.jsxs)(n.td,{children:["The unique ID of the node (from ",(0,o.jsx)(n.code,{children:"NodeInfo"}),")."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"amount"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"UFix64"})}),(0,o.jsx)(n.td,{children:"The number of FLOW tokens to stake."})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["This transaction fetches the node info from the operator account, registers the node\nin the central staking contract, and creates a ",(0,o.jsx)(n.code,{children:"StakingProxy.NodeStakerProxy"}),"\ncapability to pass to the node operator, who will be able to use it to perform\nstaking actions on behalf of the token holder. The token holder retains control\nof the main staking capability and still has full control to manage their own staking\nactions as well."]}),"\n",(0,o.jsx)(n.h2,{id:"staking-actions",children:"Staking Actions"}),"\n",(0,o.jsx)(n.h3,{id:"stake-new-tokens",children:"Stake New Tokens"}),"\n",(0,o.jsx)(n.p,{children:"The node operator can stake additional tokens on behalf of the token holder at any time."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Note: This transaction stakes additional tokens to the same node that was registered in the setup phase.\nIt is currently not possible to stake to multiple nodes from the same account."})}),"\n",(0,o.jsxs)(n.p,{children:["To stake new tokens via the ",(0,o.jsx)(n.code,{children:"NodeStakerProxy"}),",\nthe node operator can use the ",(0,o.jsx)(n.strong,{children:"Stake New Locked FLOW"})," (",(0,o.jsx)(n.a,{href:"/docs/cadence/core-contracts/locked-tokens#node-operator",children:"NO.05"}),")\ntransaction with the following arguments:"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Argument"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"nodeID"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"String"})}),(0,o.jsx)(n.td,{children:"The unique identifier for the node."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"amount"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"UFix64"})}),(0,o.jsx)(n.td,{children:"The number of FLOW tokens to stake."})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"re-stake-unstaked-tokens",children:"Re-Stake Unstaked Tokens"}),"\n",(0,o.jsx)(n.p,{children:"After tokens become unstaked, the node operator can choose to re-stake the unstaked tokens to the same node."}),"\n",(0,o.jsxs)(n.p,{children:["To staked unstaked tokens via the ",(0,o.jsx)(n.code,{children:"NodeStakerProxy"}),",\nthe node operator can use the ",(0,o.jsx)(n.strong,{children:"Re-stake Unstaked FLOW"})," (",(0,o.jsx)(n.a,{href:"/docs/cadence/core-contracts/locked-tokens#node-operator",children:"NO.06"}),")\ntransaction with the following arguments:"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Argument"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"nodeID"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"String"})}),(0,o.jsx)(n.td,{children:"The unique identifier for the node."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"amount"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"UFix64"})}),(0,o.jsx)(n.td,{children:"The number of FLOW tokens to stake."})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"unstake-tokens",children:"Unstake Tokens"}),"\n",(0,o.jsx)(n.p,{children:"The node operator can submit a request to unstake the token holder's staked tokens at any time."}),"\n",(0,o.jsxs)(n.p,{children:["To unstake staked tokens via the ",(0,o.jsx)(n.code,{children:"NodeStakerProxy"}),",\nthe node operator can use the ",(0,o.jsx)(n.strong,{children:"Unstake FLOW"})," (",(0,o.jsx)(n.a,{href:"/docs/cadence/core-contracts/locked-tokens#node-operator",children:"NO.07"}),")\ntransaction with the following arguments:"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Argument"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"nodeID"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"String"})}),(0,o.jsx)(n.td,{children:"The unique identifier for the node."})]})})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["Note: Unstaked tokens will be held by the central staking contract for a period of time before they are\nreleased to the token holder. Once the tokens are released (unstaked),\nthey can be claimed via the ",(0,o.jsx)(n.a,{href:"#withdraw-unstaked-tokens",children:"Withdraw Unstaked Tokens"})," action below."]})}),"\n",(0,o.jsx)(n.h3,{id:"withdraw-unstaked-tokens",children:"Withdraw Unstaked Tokens"}),"\n",(0,o.jsx)(n.p,{children:"After tokens become unstaked, the node operator can withdraw them from the central staking contract\non behalf of the token holder."}),"\n",(0,o.jsxs)(n.p,{children:["To withdraw unstaked tokens via the ",(0,o.jsx)(n.code,{children:"NodeStakerProxy"}),",\nthe node operator can use the ",(0,o.jsx)(n.strong,{children:"Withdraw Unstaked FLOW"})," (",(0,o.jsx)(n.a,{href:"/docs/cadence/core-contracts/locked-tokens#node-operator",children:"NO.08"}),")\ntransaction with the following arguments:"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Argument"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"nodeID"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"String"})}),(0,o.jsx)(n.td,{children:"The unique identifier for the node."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"amount"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"UFix64"})}),(0,o.jsx)(n.td,{children:"The number of unstaked FLOW tokens to withdraw."})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["This transaction moves the unstaked tokens back into the ",(0,o.jsx)(n.code,{children:"LockedTokens.Lockbox"})," owned by the ",(0,o.jsx)(n.strong,{children:"token holder"}),"."]}),"\n",(0,o.jsx)(n.h3,{id:"withdraw-rewarded-tokens",children:"Withdraw Rewarded Tokens"}),"\n",(0,o.jsx)(n.p,{children:"After earning rewards from staking, the node operator can withdraw them from the central staking contract\non behalf of the token holder."}),"\n",(0,o.jsxs)(n.p,{children:["To withdraw rewarded tokens via the ",(0,o.jsx)(n.code,{children:"NodeStakerProxy"}),",\nthe node operator can use the ",(0,o.jsx)(n.strong,{children:"Withdraw Rewarded FLOW"})," (",(0,o.jsx)(n.a,{href:"/docs/cadence/core-contracts/locked-tokens#node-operator",children:"NO.09"}),")\ntransaction with the following arguments:"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Argument"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"nodeID"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"String"})}),(0,o.jsx)(n.td,{children:"The unique identifier for the node."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"amount"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"UFix64"})}),(0,o.jsx)(n.td,{children:"The number of rewarded FLOW tokens to withdraw."})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["This transaction moves the rewarded tokens back into the ",(0,o.jsx)(n.code,{children:"LockedTokens.Lockbox"})," owned by the token holder.\nHowever, unlike unstaked tokens, rewards are unlocked FLOW and can be immediately withdrawn from the lockbox."]}),"\n",(0,o.jsx)(n.h2,{id:"teardown",children:"Teardown"}),"\n",(0,o.jsxs)(n.h3,{id:"remove-nodeinfo-entry",children:["Remove ",(0,o.jsx)(n.code,{children:"NodeInfo"})," Entry"]}),"\n",(0,o.jsxs)(n.p,{children:["The node operator can destroy the ",(0,o.jsx)(n.code,{children:"NodeInfo"})," entry after\nthe staking relationship has concluded."]}),"\n",(0,o.jsxs)(n.p,{children:["This is done using the ",(0,o.jsx)(n.strong,{children:"Remove Node Info"})," (",(0,o.jsx)(n.a,{href:"/docs/cadence/core-contracts/locked-tokens#node-operator",children:"NO.03"}),")\ntransaction with the following arguments:"]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Argument"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.strong,{children:"nodeID"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"String"})}),(0,o.jsx)(n.td,{children:"The unique identifier for the node."})]})})]})]})}const l=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(a,e)})):a(e)}}}]);