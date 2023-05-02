"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[5681],{3905:(e,t,l)=>{l.d(t,{Zo:()=>u,kt:()=>w});var n=l(67294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function o(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),l=t;return e&&(l="function"==typeof e?e(t):o(o({},t),e)),l},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var l=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(l),d=r,w=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return l?n.createElement(w,o(o({ref:t},u),{},{components:l})):n.createElement(w,o({ref:t},u))}));function w(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=l.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=l[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},78230:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=l(87462),r=(l(67294),l(3905));const a={title:"Install the Flow CLI",description:"How to install the Flow command-line interface (CLI)"},o=void 0,i={unversionedId:"Tooling/flow-cli/install",id:"Tooling/flow-cli/install",title:"Install the Flow CLI",description:"How to install the Flow command-line interface (CLI)",source:"@site/docs/Tooling/flow-cli/install.md",sourceDirName:"Tooling/flow-cli",slug:"/Tooling/flow-cli/install",permalink:"/docs/Tooling/flow-cli/install",draft:!1,tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1683062072,formattedLastUpdatedAt:"May 2, 2023",frontMatter:{title:"Install the Flow CLI",description:"How to install the Flow command-line interface (CLI)"},sidebar:"tutorialSidebar",previous:{title:"Initialize Flow Configuration",permalink:"/docs/Tooling/flow-cli/initialize-configuration"},next:{title:"Manage Flow Configuration",permalink:"/docs/Tooling/flow-cli/manage-configuration"}},s={},p=[{value:"macOS",id:"macos",level:2},{value:"Homebrew",id:"homebrew",level:3},{value:"From a pre-built binary",id:"from-a-pre-built-binary",level:3},{value:"Linux",id:"linux",level:2},{value:"From a pre-built binary",id:"from-a-pre-built-binary-1",level:3},{value:"Install a specific version",id:"install-a-specific-version",level:3},{value:"Windows",id:"windows",level:2},{value:"From a pre-built binary",id:"from-a-pre-built-binary-2",level:3},{value:"macOS",id:"macos-1",level:2},{value:"Homebrew",id:"homebrew-1",level:3},{value:"From a pre-built binary",id:"from-a-pre-built-binary-3",level:3},{value:"Linux",id:"linux-1",level:2},{value:"From a pre-built binary",id:"from-a-pre-built-binary-4",level:3},{value:"Windows",id:"windows-1",level:2},{value:"From a pre-built binary",id:"from-a-pre-built-binary-5",level:3},{value:"Installing versions before 0.42.0",id:"installing-versions-before-0420",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...l}=e;return(0,r.kt)(c,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Flow CLI can be installed on macOS, Windows (7 or greater) and most Linux systems."),(0,r.kt)("h2",{id:"macos"},"macOS"),(0,r.kt)("h3",{id:"homebrew"},"Homebrew"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install flow-cli\n")),(0,r.kt)("h3",{id:"from-a-pre-built-binary"},"From a pre-built binary"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This installation method only works on x86-64.")),(0,r.kt)("p",null,"This script downloads and installs the appropriate binary for your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'sh -ci "$(curl -fsSL https://raw.githubusercontent.com/onflow/flow-cli/master/install.sh)"\n')),(0,r.kt)("p",null,"To update, simply re-run the installation command above."),(0,r.kt)("p",null,"It is currently not possible to install earlier versions of the Flow CLI with Homebrew."),(0,r.kt)("h2",{id:"linux"},"Linux"),(0,r.kt)("h3",{id:"from-a-pre-built-binary-1"},"From a pre-built binary"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This installation method only works on x86-64.")),(0,r.kt)("p",null,"This script downloads and installs the appropriate binary for your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'sh -ci "$(curl -fsSL https://raw.githubusercontent.com/onflow/flow-cli/master/install.sh)"\n')),(0,r.kt)("p",null,"To update, simply re-run the installation command above."),(0,r.kt)("h3",{id:"install-a-specific-version"},"Install a specific version"),(0,r.kt)("p",null,"To install a specific version of Flow CLI newer than v0.42.0, append the version tag to the command (e.g. the command below installs CLI version v0.44.0)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'sh -ci "$(curl -fsSL https://raw.githubusercontent.com/onflow/flow-cli/master/install.sh)" -- v0.44.0\n')),(0,r.kt)("p",null,"To install a version older than v0.42.0, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://developers.flow.com/tools/flow-cli/install#installing-versions-before-0420"},"Installing versions before 0.42.0")," below."),(0,r.kt)("h2",{id:"windows"},"Windows"),(0,r.kt)("h3",{id:"from-a-pre-built-binary-2"},"From a pre-built binary"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This installation method only works on Windows 10, 8.1, or 7 (SP1, with ",(0,r.kt)("a",{parentName:"em",href:"https://www.microsoft.com/en-ca/download/details.aspx?id=34595"},"PowerShell 3.0"),"), on x86-64.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open PowerShell (",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-windows-powershell?view=powershell-7#finding-powershell-in-windows-10-81-80-and-7"},"Instructions"),")")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In PowerShell, run:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"iex \"& { $(irm 'https://raw.githubusercontent.com/onflow/flow-cli/master/install.ps1') }\"\n")))),(0,r.kt)("p",null,"To update, simply re-run the installation command above."),(0,r.kt)("h1",{id:"upgrade-the-flow-cli"},"Upgrade the Flow CLI"),(0,r.kt)("h2",{id:"macos-1"},"macOS"),(0,r.kt)("h3",{id:"homebrew-1"},"Homebrew"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew upgrade flow-cli\n")),(0,r.kt)("h3",{id:"from-a-pre-built-binary-3"},"From a pre-built binary"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This update method only works on x86-64.")),(0,r.kt)("p",null,"This script downloads and updates the appropriate binary for your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'sh -ci "$(curl -fsSL https://raw.githubusercontent.com/onflow/flow-cli/master/install.sh)"\n')),(0,r.kt)("h2",{id:"linux-1"},"Linux"),(0,r.kt)("h3",{id:"from-a-pre-built-binary-4"},"From a pre-built binary"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This update method only works on x86-64.")),(0,r.kt)("p",null,"This script downloads and updates the appropriate binary for your system:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'sh -ci "$(curl -fsSL https://raw.githubusercontent.com/onflow/flow-cli/master/install.sh)"\n')),(0,r.kt)("h2",{id:"windows-1"},"Windows"),(0,r.kt)("h3",{id:"from-a-pre-built-binary-5"},"From a pre-built binary"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This update method only works on Windows 10, 8.1, or 7 (SP1, with ",(0,r.kt)("a",{parentName:"em",href:"https://www.microsoft.com/en-ca/download/details.aspx?id=34595"},"PowerShell 3.0"),"), on x86-64.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open PowerShell (",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/powershell/scripting/install/installing-windows-powershell?view=powershell-7#finding-powershell-in-windows-10-81-80-and-7"},"Instructions"),")")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In PowerShell, run:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"iex \"& { $(irm 'https://raw.githubusercontent.com/onflow/flow-cli/master/install.ps1') }\"\n")))),(0,r.kt)("h1",{id:"uninstalling-flow-cli"},"Uninstalling Flow CLI"),(0,r.kt)("p",null,"To remove the flow CLI you can run the following command if it was previously installed using a pre-built binary. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"macOS: ",(0,r.kt)("inlineCode",{parentName:"li"},"rm /usr/local/bin/flow")),(0,r.kt)("li",{parentName:"ul"},"Linux: ",(0,r.kt)("inlineCode",{parentName:"li"},"rm ~/.local/bin/flow")),(0,r.kt)("li",{parentName:"ul"},"Windows: ",(0,r.kt)("inlineCode",{parentName:"li"},"rm ~/Users/{user}/AppData/Flow/flow.exe"))),(0,r.kt)("p",null,"If you installed it using Hombrew you can remove it using: ",(0,r.kt)("inlineCode",{parentName:"p"},"brew uninstall flow-cli"),"."),(0,r.kt)("h2",{id:"installing-versions-before-0420"},"Installing versions before 0.42.0"),(0,r.kt)("p",null,"If you want to install versions before v0.42.0 you have to use a different install command. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Linux/macOS")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'https://raw.githubusercontent.com/onflow/flow-cli/v0.41.3/install.ps1\n\nsh -ci "$(curl -fsSL https://raw.githubusercontent.com/onflow/flow-cli/v0.41.3/install.sh)" -- v0.41.2\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Windows")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"iex \"& { $(irm 'https://raw.githubusercontent.com/onflow/flow-cli/master/install.ps1') }\"\n")))}m.isMDXComponent=!0}}]);