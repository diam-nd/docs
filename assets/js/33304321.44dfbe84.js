"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[1133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),m=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},s="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=m(n),k=r,c=s["".concat(o,".").concat(k)]||s[k]||N[k]||i;return n?a.createElement(c,p(p({ref:t},u),{},{components:n})):a.createElement(c,p({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=k;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[s]="string"==typeof e?e:r,p[1]=l;for(var m=2;m<i;m++)p[m]=n[m];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},71999:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>N,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const i={},p=void 0,l={unversionedId:"cadence/subtyping",id:"cadence/subtyping",title:"subtyping",description:"Resources",source:"@site/docs/cadence/subtyping.md",sourceDirName:"cadence",slug:"/cadence/subtyping",permalink:"/cadence/subtyping",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682541550,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flow Smart Contract Project Development Standards",permalink:"/cadence/styleguide/project-development-tips"},next:{title:"Syntax Highlighting Cadence",permalink:"/cadence/syntax-highlighting"}},o={},m=[{value:"Resources",id:"resources",level:2},{value:"References",id:"references",level:2}],u={toc:m},s="wrapper";function N(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Supertype: ",(0,r.kt)("strong",{parentName:"p"},"Restricted Resource"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Not")," ",(0,r.kt)("inlineCode",{parentName:"p"},"AnyResource"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A restricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"T{Us}"),"\nis a subtype of a restricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"V{Ws}"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"T != AnyResource"),": if ",(0,r.kt)("inlineCode",{parentName:"p"},"T == V"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Us")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Ws")," do ",(0,r.kt)("em",{parentName:"p"},"not")," have to be subsets:\nThe owner of the resource may freely restrict and unrestrict the resource."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: Yes"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: Yes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"T == AnyResource"),": if the run-time type is ",(0,r.kt)("inlineCode",{parentName:"p"},"V"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: No"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: Yes"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An unrestricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"\nis a subtype of a restricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"U{Vs}"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"T != AnyResource"),": if ",(0,r.kt)("inlineCode",{parentName:"p"},"T == U"),"."),(0,r.kt)("p",{parentName:"li"},"The owner of the resource may freely restrict the resource."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: Yes"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: Yes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"T == AnyResource"),": if the run-time type is ",(0,r.kt)("inlineCode",{parentName:"p"},"U"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: No"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: Yes"))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"AnyResource"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A restricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"T{Us}"),"\nis a subtype of a restricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"AnyResource{Vs}"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"T != AnyResource"),": if ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," conforms to ",(0,r.kt)("inlineCode",{parentName:"p"},"Vs"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Us")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Vs")," do ",(0,r.kt)("em",{parentName:"p"},"not")," have to be subsets."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: Yes"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: Yes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"T == AnyResource"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: if ",(0,r.kt)("inlineCode",{parentName:"li"},"Vs")," is a subset of ",(0,r.kt)("inlineCode",{parentName:"li"},"Us")),(0,r.kt)("li",{parentName:"ul"},"Dynamic: if the run-time type conforms to ",(0,r.kt)("inlineCode",{parentName:"li"},"Vs")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An unrestricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"\nis a subtype of a restricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"AnyResource{Us}"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"T != AnyResource"),": if ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," conforms to ",(0,r.kt)("inlineCode",{parentName:"p"},"Us"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: Yes"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: Yes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"T == AnyResource"),": if the run-time type conforms to ",(0,r.kt)("inlineCode",{parentName:"p"},"Us"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: No"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: Yes"))))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Supertype: ",(0,r.kt)("strong",{parentName:"p"},"Unrestricted Resource"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Not")," ",(0,r.kt)("inlineCode",{parentName:"p"},"AnyResource"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A restricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"T{Us}"),"\nis a subtype of an unrestricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"V"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"T != AnyResource"),": if ",(0,r.kt)("inlineCode",{parentName:"p"},"T == V"),"."),(0,r.kt)("p",{parentName:"li"},"The owner of the resource may freely unrestrict the resource."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: Yes"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: Yes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"T == AnyResource"),": if the run-time type is ",(0,r.kt)("inlineCode",{parentName:"p"},"V"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: No"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: Yes"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An unrestricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"\nis a subtype of an unrestricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"V"),": if ",(0,r.kt)("inlineCode",{parentName:"p"},"T == V"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: Yes"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: Yes"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"AnyResource")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A restricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"T{Us}")," or unrestricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"T"),"\nis a subtype of the type ",(0,r.kt)("inlineCode",{parentName:"p"},"AnyResource"),": always."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: Yes"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: Yes")))))))),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Authorized")),(0,r.kt)("p",{parentName:"li"},"An authorized reference type ",(0,r.kt)("inlineCode",{parentName:"p"},"auth &T")," is a subtype of an unauthorized reference type ",(0,r.kt)("inlineCode",{parentName:"p"},"&U"),"\nor an authorized reference type ",(0,r.kt)("inlineCode",{parentName:"p"},"auth &U")," if ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," is a subtype of ",(0,r.kt)("inlineCode",{parentName:"p"},"U"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: Yes"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: Yes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Unauthorized")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An unauthorized reference type ",(0,r.kt)("inlineCode",{parentName:"p"},"&T")," is a subtype of an authorized reference type ",(0,r.kt)("inlineCode",{parentName:"p"},"auth &T"),": never."),(0,r.kt)("p",{parentName:"li"},"The holder of the reference may not gain more permissions."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: No"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: No"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Supertype: ",(0,r.kt)("strong",{parentName:"p"},"Reference to Restricted Resource")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Not")," ",(0,r.kt)("inlineCode",{parentName:"p"},"AnyResource"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An unauthorized reference to a restricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"&T{Us}"),"\nis a subtype of a reference to a restricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"&V{Ws}"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"T != AnyResource"),": if ",(0,r.kt)("inlineCode",{parentName:"p"},"T == V")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Ws")," is a subset of ",(0,r.kt)("inlineCode",{parentName:"p"},"Us"),"."),(0,r.kt)("p",{parentName:"li"},"The holder of the reference may not gain more permissions or knowledge\nand may only further restrict the reference to the resource."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: Yes"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: Yes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"T == AnyResource"),": never."),(0,r.kt)("p",{parentName:"li"},"The holder of the reference may not gain more permissions or knowledge."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: No"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: No"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An unauthorized reference to an unrestricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"&T"),"\nis a subtype of a reference to a restricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"&U{Vs}"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"T != AnyResource"),": if ",(0,r.kt)("inlineCode",{parentName:"p"},"T == U"),"."),(0,r.kt)("p",{parentName:"li"},"The holder of the reference may only further restrict the reference."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: Yes"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: Yes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"T == AnyResource"),": never."),(0,r.kt)("p",{parentName:"li"},"The holder of the reference may not gain more permissions or knowledge."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: No"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: No"))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"AnyResource"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An unauthorized reference to a restricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"&T{Us}"),"\nis a subtype of a reference to a restricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"&AnyResource{Vs}"),": if ",(0,r.kt)("inlineCode",{parentName:"p"},"Vs")," is a subset of ",(0,r.kt)("inlineCode",{parentName:"p"},"Us"),"."),(0,r.kt)("p",{parentName:"li"},"The holder of the reference may only further restrict the reference."),(0,r.kt)("p",{parentName:"li"},"The requirement for ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," to conform to ",(0,r.kt)("inlineCode",{parentName:"p"},"Vs")," is implied by the subset requirement."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: Yes"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: Yes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An unauthorized reference to an unrestricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"&T"),"\nis a subtype of a reference to a restricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"&AnyResource{Us}"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"T != AnyResource"),": if ",(0,r.kt)("inlineCode",{parentName:"p"},"T")," conforms to ",(0,r.kt)("inlineCode",{parentName:"p"},"Us"),"."),(0,r.kt)("p",{parentName:"li"},"The holder of the reference may only restrict the reference."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: Yes"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: Yes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When ",(0,r.kt)("inlineCode",{parentName:"p"},"T == AnyResource"),": never."),(0,r.kt)("p",{parentName:"li"},"The holder of the reference may not gain more permissions or knowledge."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: No"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: No"))))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Supertype: ",(0,r.kt)("strong",{parentName:"p"},"Unrestricted Resource"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Not")," ",(0,r.kt)("inlineCode",{parentName:"p"},"AnyResource"),":"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An unauthorized reference to a restricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"&T{Us}"),"\nis a subtype of a reference to an unrestricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"&V"),": never."),(0,r.kt)("p",{parentName:"li"},"The holder of the reference may not gain more permissions or knowledge."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: No"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: No"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An unauthorized reference to an unrestricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"&T"),"\nis a subtype of a reference to an unrestricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"&V"),": if ",(0,r.kt)("inlineCode",{parentName:"p"},"T == V"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: Yes"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: Yes"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"AnyResource")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An unauthorized reference to a restricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"&T{Us}")," or\nto a unrestricted resource type ",(0,r.kt)("inlineCode",{parentName:"p"},"&T"),"\nis a subtype of the type ",(0,r.kt)("inlineCode",{parentName:"p"},"&AnyResource"),": always."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Static: Yes"),(0,r.kt)("li",{parentName:"ul"},"Dynamic: Yes")))))))))))}N.isMDXComponent=!0}}]);