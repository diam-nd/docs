"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3412],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||r;return n?a.createElement(m,i(i({ref:t},u),{},{components:n})):a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},13793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),o=(n(67294),n(3905));const r={title:"Transaction Fees",sidebar_position:4},i=void 0,s={unversionedId:"Concepts/start-here/variable-transaction-fees",id:"Concepts/start-here/variable-transaction-fees",title:"Transaction Fees",description:"This guide will explain why transaction fees are important, how they are calculated, and how you can handle fees within your implementation. Specifically, it lays out how you can estimate the costs of a transaction, how you can set the limit for costs, and how you can optimize your Cadence code to reduce transaction costs where possible.",source:"@site/docs/Concepts/start-here/variable-transaction-fees.md",sourceDirName:"Concepts/start-here",slug:"/Concepts/start-here/variable-transaction-fees",permalink:"/docs/Concepts/start-here/variable-transaction-fees",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",sidebarPosition:4,frontMatter:{title:"Transaction Fees",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Storing Data on Flow",permalink:"/docs/Concepts/start-here/storage"},next:{title:"Governance",permalink:"/docs/Concepts/start-here/governance"}},l={},c=[{value:"Understanding the need for transaction fees",id:"understanding-the-need-for-transaction-fees",level:2},{value:"Understanding fee structure",id:"understanding-fee-structure",level:2},{value:"Execution costs",id:"execution-costs",level:3},{value:"Inclusion costs",id:"inclusion-costs",level:3},{value:"Network surge",id:"network-surge",level:3},{value:"Storage fees",id:"storage-fees",level:3},{value:"Estimating transaction costs",id:"estimating-transaction-costs",level:2},{value:"Understanding execution effort",id:"understanding-execution-effort",level:3},{value:"Calculating final costs",id:"calculating-final-costs",level:3},{value:"Configuring execution limits",id:"configuring-execution-limits",level:2},{value:"Maximum transaction fees of a transaction",id:"maximum-transaction-fees-of-a-transaction",level:3},{value:"Optimizing Cadence code to reduce effort",id:"optimizing-cadence-code-to-reduce-effort",level:2},{value:"Educating users",id:"educating-users",level:2},{value:"How to learn more",id:"how-to-learn-more",level:2},{value:"FAQs",id:"faqs",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This guide will explain why transaction fees are important, how they are calculated, and how you can handle fees within your implementation. Specifically, it lays out how you can estimate the costs of a transaction, how you can set the limit for costs, and how you can optimize your Cadence code to reduce transaction costs where possible."),(0,o.kt)("p",null,"The guide will conclude with information on how to educate your users about fees and how to learn more about the implementation of transaction fees."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": Transaction cost implementation is based on a community-involved FLIP process. The work is currently ongoing. Jump to the \u201cLearn More\u201d section to participate in the process.")),(0,o.kt)("h2",{id:"understanding-the-need-for-transaction-fees"},"Understanding the need for transaction fees"),(0,o.kt)("p",null,"Segmented transaction fees are essential to ensure fair pricing based on the impact on the network. For instance, more heavy operations will require more resources to process and propagate transactions. Common operations, however, will stay reasonably priced."),(0,o.kt)("p",null,"Fees will improve the overall security of the network by making malicious actions (eg spam) on the network less viable."),(0,o.kt)("p",null,"The unique Flow architecture is targeted at high throughput. It makes it easier to have slack in the system, so short spikes can be handled more gracefully."),(0,o.kt)("h2",{id:"understanding-fee-structure"},"Understanding fee structure"),(0,o.kt)("p",null,"Fees are calculated based on three components: execution fee, inclusion fee, and network surge factor."),(0,o.kt)("p",null,"Inclusion and execution fees can be expressed as inclusion or execution effort and an associated multiplier to reflect the costs of the inclusion and execution effort. The final transaction fee calculation looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"inclusionFee = inclusionEffort * inclusionEffortCost;\n\nexecutionFee = executionEffort * executionEffortCost;\n\ntotalFee = (inclusionFee + executionFee) * surgeFactor;\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": If you want to learn more about the cost function, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow/blob/c05d847adf2f6fb509e42c17020484d7dd3e89bd/flips/20220111-execution-effort.md#final-execution-effort-feature-weights-and-maximum-execution-effort-limit"},"take a look at FLIP 753"),".")),(0,o.kt)("h3",{id:"execution-costs"},"Execution costs"),(0,o.kt)("p",null,"The execution effort for a transaction is determined by the code path the transaction takes and the actions it does. The actions that have an associated execution effort cost can be separated into four broad buckets:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Normal lines of cadence, loops, or function calls"),(0,o.kt)("li",{parentName:"ul"},"Reading data from storage, charged per byte read"),(0,o.kt)("li",{parentName:"ul"},"Writing data to storage, charged per byte written"),(0,o.kt)("li",{parentName:"ul"},"Account creation")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Cost overview")),(0,o.kt)("p",null,"To provide you a better understanding of the cost ranges, here are some common transaction types and their associated execution costs, given the current ",(0,o.kt)("inlineCode",{parentName:"p"},"executionEffortCost")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"inclusionEffortCost")," parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Transaction Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Estimated cost (FLOW)"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Relative cost to FT transfer"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"FT transfer"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0.00000185"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1 (baseline)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Mint a small NFT (heavily depends on the NFT size)"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0.0000019"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Empty Transaction"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0.000001"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0.5")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Add key to an account"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0.000001"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0.5")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Create 1 Account"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0.00000315"),(0,o.kt)("td",{parentName:"tr",align:"left"},"1.7")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Create 10 accounts"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0.00002261"),(0,o.kt)("td",{parentName:"tr",align:"left"},"12.2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Deploying a contract that is ~50kb"),(0,o.kt)("td",{parentName:"tr",align:"left"},"0.00002965"),(0,o.kt)("td",{parentName:"tr",align:"left"},"16")))),(0,o.kt)("h3",{id:"inclusion-costs"},"Inclusion costs"),(0,o.kt)("p",null,"The inclusion effort of a transaction represents the work needed for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Including the transaction in a block"),(0,o.kt)("li",{parentName:"ul"},"Transporting the transaction information from node to node"),(0,o.kt)("li",{parentName:"ul"},"Verifying transaction signatures")),(0,o.kt)("p",null,"Right now, the inclusion effort is always 1.0 and the inclusion effort cost is fixed to ",(0,o.kt)("inlineCode",{parentName:"p"},"0.000001"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": Inclusion effort will always be calculable without executing the transaction code.")),(0,o.kt)("p",null,"In the future, costs for inclusion will be impacted by the byte size of the transaction and the number of signatures required."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": The changes to variable inclusion costs will be updated in ",(0,o.kt)("a",{parentName:"p",href:"https://docs.onflow.org/nodes/node-operation/upcoming-sporks/"},"one of the upcoming sporks"),".")),(0,o.kt)("h3",{id:"network-surge"},"Network surge"),(0,o.kt)("p",null,"In the future, a network surge will be applied when the network is busy due to an increased influx of transactions required to be processed or a decrease in the ability to process transactions. Right now, the network surge is fixed to ",(0,o.kt)("inlineCode",{parentName:"p"},"1.0"),"."),(0,o.kt)("h3",{id:"storage-fees"},"Storage fees"),(0,o.kt)("p",null,"Storage fees are implemented differently from transaction fees. Read the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.onflow.org/concepts/storage/#storage-capacity"},"Storing Data on Flow guide")," for more details. In summary, storage fees are a cost associated with storing data on-chain."),(0,o.kt)("h2",{id:"estimating-transaction-costs"},"Estimating transaction costs"),(0,o.kt)("p",null,"Cost estimation is a two-step process. First, you need to gather the execution effort with either the emulator, on testnet, or on mainnet. Second, you use the execution effort for a transaction to calculate the final fees using one of the JavaScript or Go FCL SDKs."),(0,o.kt)("h3",{id:"understanding-execution-effort"},"Understanding execution effort"),(0,o.kt)("p",null,"Execution effort is best determined by running a transaction and reviewing the emitted event details."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using Flow Emulator")),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://docs.onflow.org/emulator/#running-the-emulator-with-the-flow-cli"},"start the emulator using the Flow CLI"),". Run your transaction and take a look at the events emitted:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'0|emulator | time="2022-04-06T17:13:22-07:00" level=info msg="\u2b50  Transaction executed" computationUsed=3 txID=a782c2210c0c1f2a6637b20604d37353346bd5389005e4bff6ec7bcf507fac06\n')),(0,o.kt)("p",null,"You should see the ",(0,o.kt)("inlineCode",{parentName:"p"},"computationUsed")," field. Take a note of the value, you will use it in the next step."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"On testnet or mainnet")),(0,o.kt)("p",null,"Once a transaction is completed, you can use an explorer like ",(0,o.kt)("a",{parentName:"p",href:"https://flowscan.org/"},"Flowscan")," to review the transaction details and events emitted. For Flowscan, you can open the transaction in question and look for the event ",(0,o.kt)("inlineCode",{parentName:"p"},"FeesDeducted")," from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowFees.cdc"},(0,o.kt)("inlineCode",{parentName:"a"},"FlowFees"))," contract:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"flowscan-fees",src:n(57707).Z,width:"1748",height:"682"})),(0,o.kt)("p",null,"In the event data on the right side, you will see a set of fields representing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowFees.cdc#L58"},"FeeParameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"surgeFactor"),(0,o.kt)("li",{parentName:"ul"},"inclusionEffort"),(0,o.kt)("li",{parentName:"ul"},"executionEffort")),(0,o.kt)("p",null,"Take a note of the last value in the list - the ",(0,o.kt)("inlineCode",{parentName:"p"},"executionEffort")," value. You will use it in the next step."),(0,o.kt)("h3",{id:"calculating-final-costs"},"Calculating final costs"),(0,o.kt)("p",null,"The cost for transactions can be calculated using the following FCL scripts on mainnet/testnet respectively."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"On mainnet")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"import FlowFees from 0xf919ee77447b7497\npub fun main(\n  inclusionEffort: UFix64,\n  executionEffort: UFix64\n): UFix64 {\n  return FlowFees.computeFees(inclusionEffort: inclusionEffort, executionEffort: executionEffort)\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"On testnet")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"import FlowFees from 0x912d5440f7e3769e\npub fun main(\n  inclusionEffort: UFix64,\n  executionEffort: UFix64\n): UFix64 {\n  return FlowFees.computeFees(inclusionEffort: inclusionEffort, executionEffort: executionEffort)\n}\n")),(0,o.kt)("h2",{id:"configuring-execution-limits"},"Configuring execution limits"),(0,o.kt)("p",null,"FCL SDKs allow you to set the execution effort limit for each transaction. Based on the execution effort limit determined in the previous step, you should set a reasonable maximum to avoid unexpected behavior and protect your users. The final transaction fee is computed from the actual execution effort used up to this maximum."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": Keep in mind that the limits are not for the final fees that the user will have to pay. The limits are for the execution efforts specifically.")),(0,o.kt)("p",null,"It is important to set a limit that isn\u2019t too high or too low. If it is set too high, the payer needs to have more funds in their account before sending the transaction. If it is too low, the execution could fail and all state changes are dropped."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using FCL JS SDK")),(0,o.kt)("p",null,"You need to set the ",(0,o.kt)("inlineCode",{parentName:"p"},"limit")," parameter for the ",(0,o.kt)("inlineCode",{parentName:"p"},"mutate")," function, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import * as fcl from "@onflow/fcl"\n\nconst transactionId = await fcl.mutate({\n  cadence: `\n    transaction {\n      execute {\n        log("Hello from execute")\n      }\n    }\n  `,\n  proposer: fcl.currentUser,\n  payer: fcl.currentUser,\n  limit: 100\n})\n\nconst transaction = await fcl.tx(transactionId).onceSealed();\nconsole.log(transaction;)\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using FCL Go SDK")),(0,o.kt)("p",null,"You need to call the ",(0,o.kt)("inlineCode",{parentName:"p"},"SetGasLimit")," method to set the fee limit, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import (\n    "github.com/onflow/flow-go-sdk"\n    "github.com/onflow/flow-go-sdk/crypto"\n)\n\nvar (\n    myAddress    flow.Address\n    myAccountKey flow.AccountKey\n    myPrivateKey crypto.PrivateKey\n)\n\ntx := flow.NewTransaction().\n    SetScript([]byte("transaction { execute { log(\\"Hello, World!\\") } }")).\n    SetGasLimit(100).\n    SetProposalKey(myAddress, myAccountKey.Index, myAccountKey.SequenceNumber).\n    SetPayer(myAddress)\n')),(0,o.kt)("h3",{id:"maximum-transaction-fees-of-a-transaction"},"Maximum transaction fees of a transaction"),(0,o.kt)("p",null,"The maximum possible fees the payer could pay for a transaction can be calculated as the inclusion cost plus the execution cost as if the transaction was executed with execution effort equal to the transactions specified execution effort limit."),(0,o.kt)("p",null,"The payer will never pay more than this amount for the transaction."),(0,o.kt)("h2",{id:"optimizing-cadence-code-to-reduce-effort"},"Optimizing Cadence code to reduce effort"),(0,o.kt)("p",null,"Several optimizations can lead to reduced execution time of transactions. Below is a list of some practices. This list is not exhaustive but rather exemplary."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Limit functions calls")),(0,o.kt)("p",null,"Whenever you make function calls, make sure these are absolutely required. In some cases, you might be able to check prerequisites and avoid additional calls:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"for obj in sampleList {\n   /// check if call is required\n   if obj.id != nil {\n      functionCall(obj)\n   }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Limit loops and iterations")),(0,o.kt)("p",null,"Whenever you want to iterate over a list, make sure it is necessary to iterate through all elements as opposed to a subset. Avoid loops to grow in size too much over time. Limit loops when possible."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},'// Iterating over long lists can be costly\npub fun sum(list: [Int]): Int {\n var total = 0\n var i = 0\n // if list grows too large, this might not be possible anymore\n while i < list.length {\n   total = total + list[i]\n }\n return total\n}\n\n// Consider designing transactions (and scripts) in a way where work can be "chunked" into smaller pieces\npub fun partialSum(list: [Int], start: Int, end: Int): Int {\n var partialTotal = 0\n var i = start\n while i < end {\n   partialTotal = partialTotal + list[i]\n }\n return partialTotal\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Understand the impact of function calls")),(0,o.kt)("p",null,"Some functions will require more execution efforts than others. You should carefully review what function calls are made and what execution they involve."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"// be aware functions that call a lot of other functions\n// (or call themselves) might cost a lot\npub fun fib(_ x: Int): Int {\n if x == 1 || x== 0 {\n   return x\n }\n // + 2 function calls each recursion\n return fib(x-1) + fib(x-2)\n}\n\n// consider inlining functions with single statements, to reduce costs\npub fun add(_ a: Int, _ b: Int): Int {\n // single statement; worth inlining\n return a + b\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Avoid excessive load and save operations")),(0,o.kt)("p",null,"Avoid costly loading and storage operations and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.onflow.org/cadence/design-patterns/#avoid-excessive-load-and-save-storage-operations-prefer-in-place-mutations"},"borrow references")," where possible, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cadence"},"transaction {\n\n    prepare(acct: AuthAccount) {\n\n        // Borrows a reference to the stored vault, much less costly operation that removing the vault from storage\n        let vault <- acct.borrow<&ExampleToken.Vault>(from: /storage/exampleToken)\n\n        let burnVault <- vault.withdraw(amount: 10)\n\n        destroy burnVault\n\n        // No `save` required because we only used a reference\n    }\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": If the requested resource does not exist, no reading costs are charged.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Limit accounts created per transaction")),(0,o.kt)("p",null,"Creating accounts and adding keys are associated with costs. Try to only create accounts and keys when necessary."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Check user\u2019s balance before executing transactions")),(0,o.kt)("p",null,"You should ensure that the user\u2019s balance has enough balance to cover the highest possible fees. For FT transfers, you need to cover the amount to transfer in addition to the highest possible fees."),(0,o.kt)("h2",{id:"educating-users"},"Educating users"),(0,o.kt)("p",null,"Wallets will handle the presentation of the final transaction costs but you can still facilitate the user experience by educating them within your application."),(0,o.kt)("p",null,"If your user is using non-custodial wallets, they may have to pay the transaction and want to understand the fees. Here are some suggestions."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Explain that costs can vary depending on the network usage")),(0,o.kt)("p",null,"Suggested message: \u201cFees improve the security of the network. They are flexible to ensure fair pricing based on the impact on the network.\u201d"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Explain that waiting for the network surge to pass is an option")),(0,o.kt)("p",null,"Inevitably, network surges will cause higher fees. Users who might want to submit a transaction while the network usage is surging should consider sending the transaction at a later time to reduce costs."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Explain that the wallet might not allow the transaction due to a lack of funds")),(0,o.kt)("p",null,"If dynamic fees increase to the highest possible level, the user\u2019s fund might not be enough to execute the transaction. Let the users know that they should either add funds or try when the network is less busy."),(0,o.kt)("h2",{id:"how-to-learn-more"},"How to learn more"),(0,o.kt)("p",null,"There are several places to learn more about transaction fees:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/onflow/flow/pull/660"},"FLIP-660")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/onflow/flow/pull/753"},"FLIP-753")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/onflow/flow-core-contracts/blob/master/contracts/FlowFees.cdc"},"Flow Fees Contract"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note"),": If you have thoughts on the implementation of transaction fees on Flow, you can ",(0,o.kt)("a",{parentName:"p",href:"https://forum.onflow.org/t/variable-transaction-fees-are-coming-to-flow/2941"},"leave feedback on this forum post"),".")),(0,o.kt)("h2",{id:"faqs"},"FAQs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"When will the fee update go into effect?")),(0,o.kt)("p",null,"The updates were rolled out with the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.onflow.org/nodes/node-operation/past-sporks/#mainnet-17"},"Spork on April 6, 2022"),", and were enabled on ",(0,o.kt)("a",{parentName:"p",href:"https://forum.onflow.org/t/permissionless-contract-deployment-progress/2981"},"June 1st")," during the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/service-account/tree/main/transactions/set-execution-effort-weights/2022/jun-1"},"weekly epoch transition"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Why are fees collected even when transactions fail?")),(0,o.kt)("p",null,"Broadcasting and verifying a transaction requires execution, so costs are deducted appropriately."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What execution costs are considered above average?")),(0,o.kt)("p",null,"There is no average for execution costs. Every function will vary significantly based on the logic implemented. You should review the optimization best practices to determine if you could reduce your costs."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Do hardware wallets like Ledger support segmented fees?")),(0,o.kt)("p",null,"Yes."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What is the lowest execution cost?")),(0,o.kt)("p",null,"The lowest execution cost is 1. This means your transaction included one function call or loop that didn't read or write any date."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Can I determine how much a transaction will cost on mainnet without actually paying?")),(0,o.kt)("p",null,"You can estimate the costs in a two-way process: 1) determine execution costs for transactions (emulator or testnet) and 2) use an FCL SDK method to calculate the final transaction fees."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"How accurate will testnet fees be to mainnet fees?")),(0,o.kt)("p",null,"Final fees are determined by the surge factor on the network. The surge factor for the testnet will be different from the factor for the mainnet, so you need to expect a variation between mainnet and testnet estimates."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"I use Blocto and I haven't paid any fees yet. Why is that?")),(0,o.kt)("p",null,"That is because Blocto is acting as the payer for transactions. Non-custodial wallets may have the user pay the transaction. Additionally, apps can sponsor the transaction if they choose."))}d.isMDXComponent=!0},57707:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/flowscan-fees-cb6b2a52450fcbbef7f20f30c4130453.png"}}]);