"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[8321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,m=c["".concat(l,".").concat(u)]||c[u]||d[u]||r;return n?a.createElement(m,i(i({ref:t},h),{},{components:n})):a.createElement(m,i({ref:t},h))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},98798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Epoch and Reward Schedule",sidebar_title:"Epoch and Reward Schedule",description:"How the Flow protocol manages the schedule of an epoch and rewards payments"},i=void 0,s={unversionedId:"Concepts/nodes/staking/schedule",id:"Concepts/nodes/staking/schedule",title:"Epoch and Reward Schedule",description:"How the Flow protocol manages the schedule of an epoch and rewards payments",source:"@site/docs/Concepts/nodes/staking/schedule.mdx",sourceDirName:"Concepts/nodes/staking",slug:"/Concepts/nodes/staking/schedule",permalink:"/docs/Concepts/nodes/staking/schedule",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Epoch and Reward Schedule",sidebar_title:"Epoch and Reward Schedule",description:"How the Flow protocol manages the schedule of an epoch and rewards payments"},sidebar:"tutorialSidebar",previous:{title:"Quorum Certificate and Distributed Key Generation",permalink:"/docs/Concepts/nodes/staking/qc-dkg"},next:{title:"Stake Slashing",permalink:"/docs/Concepts/nodes/staking/stake-slashing"}},l={},p=[{value:"Rewards",id:"rewards",level:2},{value:"Staking Auction",id:"staking-auction",level:2},{value:"Epoch Setup and Epoch Commit",id:"epoch-setup-and-epoch-commit",level:2},{value:"Rewards Distribution",id:"rewards-distribution",level:2},{value:"Individual Calculation",id:"individual-calculation",level:2},{value:"Rewards History",id:"rewards-history",level:2}],h=(c="Callout",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const d={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(h,{type:"warning",mdxType:"Callout"},(0,o.kt)("p",null,"This information covers the current state of how epoch phases are ran and how\nrewards are calculated and distributed to node operators and delegators.\nAll of the information in the document is still being designed and is subject to change\nbased on research and discussion by the Flow core team and community.\nIf any changes are proposed, the Flow community will be notified in advance.")),(0,o.kt)("h1",{id:"schedule"},"Schedule"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flow Epoch Schedule",src:n(28461).Z,width:"1626",height:"308"})),(0,o.kt)("p",null,"An Epoch is a period of time when the node operators in the network are constant. At epoch\nboundaries, newly staked node operators are able to join the network and existing node operators\nwhich have unstaked may exit the network."),(0,o.kt)("p",null,"Each epoch lasts approximately a week, and the ",(0,o.kt)("strong",{parentName:"p"},"Epoch Switchover")," is defined as the point in time\nwhen one epoch ends and the next epoch begins, marking a possible change in the list of valid nodes."),(0,o.kt)(h,{type:"info",mdxType:"Callout"},(0,o.kt)("p",null,"The exact timing of each epoch end is influenced by the number of blocks proposed during the epoch.\nTherefore, epoch phase timing can very and will likely drift over time."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"All quoted epoch end times are estimates and subject to some variance (up to several hours)"),".\nSee ",(0,o.kt)("a",{parentName:"p",href:"/staking/epoch-preparation/#epoch-length"},"Epoch Preparation Protocol")," for details. ")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Staking Operations are disabled for approximately the last day of an epoch"),",\ntypically around 12:00pm (7:00pm UTC) on Tuesday every week until the next day around the same time.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/staking/epoch-preparation#phase-1-epoch-setup"},"Epoch Setup")," for more information on this phase."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Epoch Switchovers will happen around 12:00 pm PT on Wednesday (7:00 pm UTC)")," every week.\nPlease note exact epoch ending time vary based on the performance of the network\n& all staking operations that interact with staked tokens will be processed\nby the protocol at the start of each epoch. "),(0,o.kt)("h2",{id:"rewards"},"Rewards"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rewards are usually paid around 12 pm PT on Wednesday (7:00 pm UTC)"),", every week,\nto all users that have tokens staked.\nThis is close to the same time as the Epoch Switchover. See the Rewards Distribution section below\nfor more information about rewards calculation and schedule."),(0,o.kt)("h2",{id:"staking-auction"},"Staking Auction"),(0,o.kt)("p",null,"The first, and longest phase of an epoch is the ","[staking auction]","(/staking/epoch-preparation#phase-0-staking-auction.\nThis phase is when nodes and delegators can register to stake and perform other staking operations\nsuch as staking more tokens or unstaking their existing tokens.\nNone of these operations are fully executed until the ",(0,o.kt)("strong",{parentName:"p"},"Epoch Switchover")," though."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Staking Auction lasts for at least the first 90% of the length of an Epoch")),(0,o.kt)("h2",{id:"epoch-setup-and-epoch-commit"},"Epoch Setup and Epoch Commit"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/staking/epoch-preparation#phase-1-epoch-setup"},"Epoch Setup"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"/staking/epoch-preparation#phase-2-epoch-committed"},"Epoch Commit"),"\nphases are the final phases of the epoch, when node operators who have been included\nin the next epoch perform important setup functionailty to prepare for the next epoch."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Epoch Setup and Epoch Committed phases usually last less than 10% of the time of an epoch.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Staking Operations will be rejected during the Epoch Setup and Epoch Commit phases."),"\nThis is because the staking information has been finalized in preparation for the next epoch\nand cannot be changed because these final phases rely on the staking information being constant."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Staking Auction Ends every Tuesday near 12:00pm PT (7:00 pm UTC)."),"\n",(0,o.kt)("strong",{parentName:"p"},"This means that staking operations will be disabled for ALL users"),"\n",(0,o.kt)("strong",{parentName:"p"},"in the period between the end of the staking auction and the beginning of the next epoch, currently 24hrs.")),(0,o.kt)("h2",{id:"rewards-distribution"},"Rewards Distribution"),(0,o.kt)("p",null,"The rewards distribution schedule has been designed to ensure\nthere is enough liquid supply of FLOW available in the ecosystem\nto empower a wide variety of use cases and promote fair and diverse participation in the Flow ecosystem."),(0,o.kt)("p",null,"The numbers in this table represent the total amount of tokens that are paid\nas staking rewards at each epoch to the entire pool of participants in the Flow network.\nWhile the total staking reward amount is known and fixed per epoch,\nrewards that individual stakers receive are variable depending on many factors. "),(0,o.kt)("p",null,"The total rewards for each epoch are fixed for that epoch, but where those rewards come from can change.\nWhen the protocol pays rewards, it first pulls from the central pool of all the transaction fees\nthat have been paid by every user in the network since the last rewards payment.\nOnce that pool has been depleted, the protocol mints new tokens that are used as rewards."),(0,o.kt)("p",null,"Please see the next section on how to calculate an individual staking reward."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null},"Dec 22, 2020"),(0,o.kt)("th",{parentName:"tr",align:null},"Dec 29, Jan 5, 12, 19, 26 (2021)"),(0,o.kt)("th",{parentName:"tr",align:null},"Feb 2, 2021 weekly on Wednesdays indefinitely"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Total Rewards % (Annual)"),(0,o.kt)("td",{parentName:"tr",align:null},"5%"),(0,o.kt)("td",{parentName:"tr",align:null},"20%"),(0,o.kt)("td",{parentName:"tr",align:null},"5%")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Total Rewards Amount Per Week"),(0,o.kt)("td",{parentName:"tr",align:null},"~1.2M FLOW"),(0,o.kt)("td",{parentName:"tr",align:null},"~4.4M FLOW"),(0,o.kt)("td",{parentName:"tr",align:null},"~1.3M FLOW")))),(0,o.kt)("h2",{id:"individual-calculation"},"Individual Calculation"),(0,o.kt)("p",null,"Each user gets a percentage of the total rewards during each epoch\nthat is proportional to their percentage of all the tokens that are staked by all participants."),(0,o.kt)("p",null,"The full reward calculation on a per-user basis is equal to:\t"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"New Reward(user) = Tr  * (Sn / St)  \n")),(0,o.kt)("p",null,"where:\t"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Tr")," = Total staking rewards to be paid out during the current epoch. (See table above)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Sn")," = Amount of FLOW Staked by the target user for the current Epoch. (Different for each staker)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"St")," = Sum of all the FLOW staked by all the participants in the network. (Changes every epoch)")),(0,o.kt)("p",null,"Rewards for delegators are also calculated in the exact same way that rewards for node operators are calculated,\nwith one difference in that 8% of the calculated reward amount is given to the node operator being delegated to\n(effected as a protocol layer fee, which is the same for all node operators).\nThe remaining 92% is awarded to the delegator.\nNote: the 8% fee is only applied to the staking reward, not to the tokens delegated."),(0,o.kt)("p",null,"With this calculation, the node you choose to run or delegate to\nDOES NOT affect the amount of rewards you receive every week.\nThe only variable that you can control is the number of tokens you have staked.\nThe more tokens you stake, the more rewards you will receive."),(0,o.kt)("p",null,"Because of the variable nature of the rewards calculation, we cannot provide an expected weekly/yearly return\nfor a single staker. You can plug your own numbers into the formula to see some sample calculations,\nbut you won't be able to know exactly what you will earn until the beginning\nof the epoch in which you are participating in staking or delegation."),(0,o.kt)("h2",{id:"rewards-history"},"Rewards History"),(0,o.kt)("p",null,"For the first two years of its existence, the staking rewards payments\nwere handled with manual transactions. You can find the history of those transactions\nincluding their arguments and IDs in the\n","[Pay Rewards Section]","(",(0,o.kt)("a",{parentName:"p",href:"https://github.com/onflow/service-account/tree/main/transactions/pay-rewards"},"https://github.com/onflow/service-account/tree/main/transactions/pay-rewards"),"\nof the Flow Service Account Repo. The dates correspond to the date when the\nrewards were paid at the end of an epoch and the network transitioned to a new epoch."),(0,o.kt)("p",null,"Future rewards payments and epoch switchovers happen automatically via a system chunk transaction,\nwhich does not create regular transaction IDs."))}m.isMDXComponent=!0},28461:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/epoch-phase-diagram-2dd27be16c6d0f582b7b92d90ab3bccf.png"}}]);