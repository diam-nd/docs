"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[45180],{8909:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});i(67294);var n=i(85893),s=i(11151);const o={},r="iOS Support",l={unversionedId:"tools/clients/unity-sdk/guides/ios-support",id:"tools/clients/unity-sdk/guides/ios-support",title:"iOS Support",description:"To use the Flow SDK in iOS projects, there are a couple more settings you must configure in your Unity project.",source:"@site/docs/tools/clients/unity-sdk/guides/ios-support.md",sourceDirName:"tools/clients/unity-sdk/guides",slug:"/tools/clients/unity-sdk/guides/ios-support",permalink:"/docs/next/tools/clients/unity-sdk/guides/ios-support",draft:!1,editUrl:"https://github.com/onflow/docs/tree/main/docs/tools/clients/unity-sdk/guides/ios-support.md",tags:[],version:"current",lastUpdatedBy:"j pimmel",lastUpdatedAt:1694795275,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{},sidebar:"tools",previous:{title:"FlowControl",permalink:"/docs/next/tools/clients/unity-sdk/guides/flow-control"},next:{title:"Wallet Connect",permalink:"/docs/next/tools/clients/unity-sdk/guides/wallet-connect"}},a={},d=[{value:"Provisioning",id:"provisioning",level:2},{value:"IL2CPP Code Generation setting",id:"il2cpp-code-generation-setting",level:2},{value:"Managed Stripping Level",id:"managed-stripping-level",level:2}];function c(e){const t=Object.assign({h1:"h1",p:"p",h2:"h2",a:"a",strong:"strong",ol:"ol",li:"li"},(0,s.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"ios-support",children:"iOS Support"}),"\n",(0,n.jsx)(t.p,{children:"To use the Flow SDK in iOS projects, there are a couple more settings you must configure in your Unity project."}),"\n",(0,n.jsx)(t.h2,{id:"provisioning",children:"Provisioning"}),"\n",(0,n.jsxs)(t.p,{children:["This is required for all iOS projects, so anyone with experience setting up iOS projects in Unity should be familiar with it. If you are new to developing for iOS on Unity, please follow ",(0,n.jsx)(t.a,{href:"https://docs.unity3d.com/Manual/iphone-GettingStarted.html",children:"Unity's documentation on how to set up a project for iOS"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["With iOS selected as the active platform, open the Player Settings (Edit - Project Settings - Player). Scroll down to ",(0,n.jsx)(t.strong,{children:"Identification"})," and enter your provisioning details. The fastest way to get up and running is to enter your ",(0,n.jsx)(t.strong,{children:"Signing Team ID"})," and check ",(0,n.jsx)(t.strong,{children:"Automatically Sign"}),". For a description of all these fields, please refer to ",(0,n.jsx)(t.a,{href:"https://docs.unity3d.com/Manual/class-PlayerSettingsiOS.html#Identification",children:"Unity's documentation"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"il2cpp-code-generation-setting",children:"IL2CPP Code Generation setting"}),"\n",(0,n.jsx)(t.p,{children:"If your version of Unity is older than 2022.1 (keeping in mind the minimum supported version is 2021.3) you will need to change the following setting:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Open Build Settings (under File)."}),"\n",(0,n.jsxs)(t.li,{children:["If iOS is not already the active platform, select iOS and click ",(0,n.jsx)(t.strong,{children:"Switch Platform"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["Change ",(0,n.jsx)(t.strong,{children:"IL2CPP Code Generation"})," to ",(0,n.jsx)(t.strong,{children:"Faster (smaller) builds"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The reason this must be changed is because the Flow SDK utilises generic sharing of value types. For a detailed description on this problem and how it has been fixed in 2022.1, please read this ",(0,n.jsx)(t.a,{href:"https://blog.unity.com/engine-platform/il2cpp-full-generic-sharing-in-unity-2022-1-beta",children:"Unity blog post"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"managed-stripping-level",children:"Managed Stripping Level"}),"\n",(0,n.jsx)(t.p,{children:"Similar to the previous setting, sometimes automatic code stripping on iOS can strip out functions that the optimizer thinks aren't needed, but they actually are. We highly recommend you change this setting to avoid any of these issues."}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Open Project Settings (under Edit)."}),"\n",(0,n.jsx)(t.li,{children:"Go to the Player tab."}),"\n",(0,n.jsx)(t.li,{children:"Expand Other Settings and scroll down to Optimization."}),"\n",(0,n.jsxs)(t.li,{children:["Change ",(0,n.jsx)(t.strong,{children:"Managed Stripping Level"})," to ",(0,n.jsx)(t.strong,{children:"Minimal"}),"."]}),"\n"]})]})}const p=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(c,e)})):c(e)}}}]);