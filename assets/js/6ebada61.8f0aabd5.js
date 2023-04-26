"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[6342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?o.createElement(h,l(l({ref:t},d),{},{components:n})):o.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:a,l[1]=r;for(var p=2;p<i;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71169:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={},l="Contributing to the Developer Portal",r={unversionedId:"flow/developer-portal/portal-overview",id:"flow/developer-portal/portal-overview",title:"Contributing to the Developer Portal",description:"Reading this document carefully will help you understand how to contribute your own content to the Developer Portal, and avoid problems along the way.",source:"@site/docs/flow/developer-portal/portal-overview.md",sourceDirName:"flow/developer-portal",slug:"/flow/developer-portal/portal-overview",permalink:"/flow/developer-portal/portal-overview",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682541550,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contributing Content to the Developer Portal",permalink:"/flow/developer-portal/contribution-guidelines"},next:{title:"Flow Users / Backers",permalink:"/flow/faq/backers"}},s={},p=[{value:"Developer Portal Overview",id:"developer-portal-overview",level:2},{value:"Information Design",id:"information-design",level:3},{value:"Content Aggregation",id:"content-aggregation",level:3},{value:"Content Integration Options",id:"content-integration-options",level:3},{value:"flow-docs.json",id:"flow-docsjson",level:3},{value:"Content URLs",id:"content-urls",level:2},{value:"Renaming Files &amp; Redirects",id:"renaming-files--redirects",level:3},{value:"Customizing URLs",id:"customizing-urls",level:3},{value:"SEO",id:"seo",level:2},{value:"Page Content",id:"page-content",level:2},{value:"Custom Page Header Hero",id:"custom-page-header-hero",level:3},{value:"Left-Hand Menus",id:"left-hand-menus",level:3},{value:"Table of Contents (Right-Hand Menus)",id:"table-of-contents-right-hand-menus",level:3},{value:"Images and Other Media",id:"images-and-other-media",level:3},{value:"Links",id:"links",level:3},{value:"<strong>Callouts &amp; Special Sections</strong>",id:"callouts--special-sections",level:3},{value:"Content Validation",id:"content-validation",level:2},{value:"Dead Links Checks",id:"dead-links-checks",level:3},{value:"External Links",id:"external-links",level:4},{value:"Internal Links",id:"internal-links",level:4},{value:"Providing Redirects for Renamed Files",id:"providing-redirects-for-renamed-files",level:3},{value:"Content Previews",id:"content-previews",level:2},{value:"Upcoming Features",id:"upcoming-features",level:2},{value:"Content Versioning",id:"content-versioning",level:3},{value:"onflow/flow special-case repo",id:"onflowflow-special-case-repo",level:2}],d={toc:p},u="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contributing-to-the-developer-portal"},"Contributing to the Developer Portal"),(0,a.kt)("p",null,"Reading this document carefully will help you understand how to contribute your own content to the Developer Portal, and avoid problems along the way."),(0,a.kt)("h2",{id:"developer-portal-overview"},"Developer Portal Overview"),(0,a.kt)("p",null,"The aim of the Developer Portal is to allow repo owners to publish their content to the Developer Portal website, without needing assistance from theDeveloper Portal engineering team."),(0,a.kt)("h3",{id:"information-design"},"Information Design"),(0,a.kt)("p",null,"The developer portal is divided into 4 top-level sections, containing a specific category of documentation within. All content should be published under one of these sections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Learn")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This section contain tutorials, guides and conceptual documentation. It does not contain  learning content related to ",(0,a.kt)("em",{parentName:"li"},"specific")," tools."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Tools")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"All software, SDKs and other ",(0,a.kt)("em",{parentName:"li"},"tools")," used to build on Flow are published in this section eg. FCL, ",(0,a.kt)("inlineCode",{parentName:"li"},"flow-cli")," \u2026 etc. This section includes learning content related to these ",(0,a.kt)("em",{parentName:"li"},"specific")," tools."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Community")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This section is for documents related to community activity on Flow: FLIPS, events, Flow Ecosystem fund, forum content, community built apps \u2026 etc."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Cadence")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This section is for content related ",(0,a.kt)("em",{parentName:"li"},"specifically")," to Cadence.")))),(0,a.kt)("p",null,"Each of these sections has an individual landing page that ",(0,a.kt)("a",{parentName:"p",href:"#flow-docsjson"},"can be customized"),"."),(0,a.kt)("h3",{id:"content-aggregation"},"Content Aggregation"),(0,a.kt)("p",null,"The Flow Developer Portal downloads and displays markdown documents and other assets hosted in GitHub repositories. The Developer Portal will only render content from a pre-defined list of repositories. Currently, only a specific set of repositories within the ",(0,a.kt)("inlineCode",{parentName:"p"},"onflow")," GitHub organization are part of that list. "),(0,a.kt)("p",null,"Repositories outside ",(0,a.kt)("inlineCode",{parentName:"p"},"onflow")," GitHub organization are not supported at this time."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Q"),": How can I integrate my repository into the Developer Portal? ",(0,a.kt)("br",null),"\n",(0,a.kt)("strong",{parentName:"p"},"A"),": See the ",(0,a.kt)("a",{parentName:"p",href:"/flow/developer-portal/contribution-guidelines#integrating-a-new-repository"},"contribution guidelines"),"."),(0,a.kt)("h3",{id:"content-integration-options"},"Content Integration Options"),(0,a.kt)("p",null,"By default, the Developer Portal will display documents from the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," folder in the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch your repository.  Once content is merged into the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch of your repository it will be available immediately on ",(0,a.kt)("a",{parentName:"p",href:"https://developers.flow.com"},"https://developers.flow.com")),(0,a.kt)("p",null,"User configured defaults are not currently supported."),(0,a.kt)("h3",{id:"flow-docsjson"},"flow-docs.json"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"flow-docs.json")," file is strongly reccomended but ",(0,a.kt)("em",{parentName:"p"},"not required"),", to configure how your documentation displays on the Developer Portal."),(0,a.kt)("p",null,"This file follows a schema defined here: ",(0,a.kt)("a",{parentName:"p",href:"https://developers.flow.com/schemas/flow-docs.json"},"https://developers.flow.com/schemas/flow-docs.json")),(0,a.kt)("p",null,"A full-featured example of this file ",(0,a.kt)("em",{parentName:"p"},"in use")," with existing documentation can be found here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/cadence/blob/master/docs/flow-docs.json"},"https://github.com/onflow/cadence/blob/master/docs/flow-docs.json")),(0,a.kt)("p",null,"Repository owners use ",(0,a.kt)("inlineCode",{parentName:"p"},"flow-docs.json")," to control aspects of their documentation:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Left-Hand navigation"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"sidebars"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Left hand navigation is configured under the ",(0,a.kt)("inlineCode",{parentName:"li"},"sidebars")," property."),(0,a.kt)("li",{parentName:"ul"},"Individual sidebars can be created for any valid route (path to a document) in your documentation."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional landing-page content:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"headings"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Landing page layout similar to ",(0,a.kt)("a",{parentName:"li",href:"https://developers.flow.com/cadence"},"https://developers.flow.com/cadence")," can be enabled by adding valid objects under the ",(0,a.kt)("inlineCode",{parentName:"li"},"headings")," property. Similar to left-hand navigation, a custom landing page header can be enabled for any valid route (path to a document) in your documentation."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Content redirects:")," ",(0,a.kt)("inlineCode",{parentName:"li"},"redirects"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In specific cases, you may want to customize the URL for s given document. This can be done using a valid entry under the ",(0,a.kt)("inlineCode",{parentName:"li"},"redirects")," property. Users must provide the desired URL, as well as the document name to be made available at that URL.")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"flow-docs.json")," is recomended but not required to integrate your documentation with the Developer Portal. Please read additional documentation contained in the schema itself: ",(0,a.kt)("a",{parentName:"p",href:"https://developers.flow.com/schemas/flow-docs.json"},"https://developers.flow.com/schemas/flow-docs.json")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"content-urls"},"Content URLs"),(0,a.kt)("p",null,"Once a repository is configured to work with the Developer Portal (see above), your content will be immediately available at a URL like this:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"developers.flow.com/{subsection}/{repo}/{document name}"),"\nOr, ",(0,a.kt)("inlineCode",{parentName:"p"},"developers.flow.com/{subsection}/{repo}/{subfolder name}/{document name}")),(0,a.kt)("p",null,"Notice the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," folder is not included in the final URL."),(0,a.kt)("p",null,"Make sure your filenames are URL friendly. This will soon be enforced automaticall by the content-checking backend. This means your filename should: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Have no uppercase letters"),(0,a.kt)("li",{parentName:"ul"},"Have no special characters"),(0,a.kt)("li",{parentName:"ul"},"use \u201ckebab-case\u201d when spaces are required, eg: ",(0,a.kt)("inlineCode",{parentName:"li"},"smart-contracts.md"))),(0,a.kt)("p",null,"There is no limit to the depth of folders within ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," although it\u2019s recommended to try to keep your information hierarchy as flat as possible, for simplicity."),(0,a.kt)("h3",{id:"renaming-files--redirects"},"Renaming Files & Redirects"),(0,a.kt)("p",null,"Since filenames determine URLs, if you ",(0,a.kt)("strong",{parentName:"p"},"rename")," a file, a redirect from the old (URL) filename to the new (URL) filename ",(0,a.kt)("em",{parentName:"p"},"must")," be provided."),(0,a.kt)("p",null,"Don\u2019t worry. When you push content to your repository, the Developer Portal will automatically warn you about this."),(0,a.kt)("p",null,"More about this in the ",(0,a.kt)("a",{parentName:"p",href:"#content-validation"},"document validation")," section."),(0,a.kt)("h3",{id:"customizing-urls"},"Customizing URLs"),(0,a.kt)("p",null,"URLs cannot be customized by users. Be sure your documents are well organized without your ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," folder, because this determines the URLs of your content."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"seo"},"SEO"),(0,a.kt)("p",null,"Basic SEO metadata can be included in markdown ",(0,a.kt)("inlineCode",{parentName:"p"},"frontmatter"),". The developer Portal supports ",(0,a.kt)("inlineCode",{parentName:"p"},"title")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"description")," metadata. If none is provided, a default will be applied."),(0,a.kt)("p",null,"Example ",(0,a.kt)("inlineCode",{parentName:"p"},"frontmatter"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},'---\ntitle: "Hello World"\ndescription: "A Great Document"\n---\n')),(0,a.kt)("p",null,"It is not required to supply this SEO metadata. Flow's in-house SEO experts will provide custom search-engine appropriate metadata for each page. Your custom metadata will be used in lieu of metadata supplied by our SEO experts."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"page-content"},"Page Content"),(0,a.kt)("h3",{id:"custom-page-header-hero"},"Custom Page Header Hero"),(0,a.kt)("p",null,"A custom page header can be enable using ",(0,a.kt)("inlineCode",{parentName:"p"},"flow-docs.json"),".\neg: ",(0,a.kt)("a",{parentName:"p",href:"https://developers.flow.com/cadence"},"https://developers.flow.com/cadence")),(0,a.kt)("p",null,"See the ",(0,a.kt)("inlineCode",{parentName:"p"},"flow-docs.json")," section above for more information."),(0,a.kt)("h3",{id:"left-hand-menus"},"Left-Hand Menus"),(0,a.kt)("p",null,"Links defined for menu items using the ",(0,a.kt)("inlineCode",{parentName:"p"},"href")," property must use the ",(0,a.kt)("em",{parentName:"p"},"developer portal URL for the specific content,")," and not a path to a filename in GitHub. For more information see the ",(0,a.kt)("inlineCode",{parentName:"p"},"flow-docs.json")," section above."),(0,a.kt)("h3",{id:"table-of-contents-right-hand-menus"},"Table of Contents (Right-Hand Menus)"),(0,a.kt)("p",null,"Table of contents (right-hand side menus) are generated automatically, using available ",(0,a.kt)("inlineCode",{parentName:"p"},"h2")," headings from your markdown document, up to a depth of 2 (meaning, only \u2018top-level\u2019 ",(0,a.kt)("inlineCode",{parentName:"p"},"h2")," (",(0,a.kt)("inlineCode",{parentName:"p"},"##")," in markdown) are rendered in the TOC. It is not possible to modify this behaviour."),(0,a.kt)("h3",{id:"images-and-other-media"},"Images and Other Media"),(0,a.kt)("p",null,"Linking to images or other media in folders ",(0,a.kt)("em",{parentName:"p"},"within")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," folder of your repo is possible using relative URLs. If your media is viewable in GitHub, then it should display on the Developer Portal."),(0,a.kt)("p",null,"Linking to images or other media stored in the same repository, but ",(0,a.kt)("em",{parentName:"p"},"outside")," the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," folder, requires using a fully qualified URL, eg:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"![image](https://github.com/onflow/cadence/images/image.png)")),(0,a.kt)("p",null,"The same rule applies to all other external media."),(0,a.kt)("h3",{id:"links"},"Links"),(0,a.kt)("p",null,"Linking to documents within the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," folder of your repo can be done in the standard way that is acceptable to GitHub, eg. ",(0,a.kt)("inlineCode",{parentName:"p"},"[link](./doc-two.md#hash-link)")),(0,a.kt)("p",null,"Writing links in your documents is easy if you follow this rule-of-thumb: If it works in GitHub it should work on the developer Portal, with one notable exception."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Links to content outside the ",(0,a.kt)("inlineCode",{parentName:"strong"},"docs")," folder")," in your repository, or elsewhere on the web must be in the form of a fully-qualified URL, eg: ",(0,a.kt)("inlineCode",{parentName:"p"},"[link](https://www.google.com)")),(0,a.kt)("h3",{id:"callouts--special-sections"},(0,a.kt)("strong",{parentName:"h3"},"Callouts & Special Sections")),(0,a.kt)("p",null,"Many landing pages have callouts and special sections, eg: "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"tools-callout",src:n(88938).Z,width:"2786",height:"1758"})),(0,a.kt)("p",null,"For more information about which special sections you can modify, and the process for adding and updating callouts is described in the ",(0,a.kt)("a",{parentName:"p",href:"/flow/developer-portal/contribution-guidelines#adding-callouts-on-feature-landing-pages"},"Contribution Guidelines")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"content-validation"},"Content Validation"),(0,a.kt)("p",null,"Content is validated each time a PR is submitted to your repository that touches any files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," folder. This is configured when your repository is integrated into the Developer Portal. Want to integrate your repo? ",(0,a.kt)("a",{parentName:"p",href:"/flow/developer-portal/contribution-guidelines#integrating-a-new-repository"},"Go here")),(0,a.kt)("p",null,"Validation status is available in the ",(0,a.kt)("strong",{parentName:"p"},"check run output")," for your PR on GitHub."),(0,a.kt)("p",null,"Currently, the Developer Portal validates content using the following conditions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Do pages render without errors? This check accounts for errors in your markdown syntax."),(0,a.kt)("li",{parentName:"ul"},"Are all links, and asset ",(0,a.kt)("inlineCode",{parentName:"li"},"src")," URLs valid? Broken links make for bad user experience."),(0,a.kt)("li",{parentName:"ul"},"If a file was renamed, was a redirect provided?")),(0,a.kt)("p",null,"Here is an example of check run output when validation fails."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"check-run-screenshot",src:n(58997).Z,width:"1886",height:"934"})),(0,a.kt)("h3",{id:"dead-links-checks"},"Dead Links Checks"),(0,a.kt)("p",null,"The Developer Portal automatically scans the links in ",(0,a.kt)("em",{parentName:"p"},"all your documents")," when you submit changes to your docs. This is done to ensure that cross-links are valid, within your set of documentation."),(0,a.kt)("h4",{id:"external-links"},"External Links"),(0,a.kt)("p",null,"Links to external websites are fetched to see if they return a non-error HTTP status code."),(0,a.kt)("h4",{id:"internal-links"},"Internal Links"),(0,a.kt)("p",null,"Links to content relative to the current document within the containing repo are validated for non-error codes"),(0,a.kt)("p",null,"Here is an example of link validation hinting:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"link-validation-hinting",src:n(39851).Z,width:"2002",height:"528"})),(0,a.kt)("p",null,"\ud83d\udc46\xa0Here, the output \u201cDid you mean ",(0,a.kt)("inlineCode",{parentName:"p"},"images"),"?\u201d is caused by an invalid ",(0,a.kt)("em",{parentName:"p"},"relative")," link to a folder that does not exist (",(0,a.kt)("inlineCode",{parentName:"p"},"api"),") as a sibling of the folder of the document where this link is found."),(0,a.kt)("p",null,"Hints are provided with validation output on a ",(0,a.kt)("em",{parentName:"p"},"best-guess")," basis. Since it is impossible to determine exactly why a link might be broken, hints may sometimes be inaccurate."),(0,a.kt)("p",null,"In this case the hinter attempts to locate the nearest sibling folder to provide a hint."),(0,a.kt)("p",null,"The validation will always be correct, but the hints might not always be helpful. ",(0,a.kt)("strong",{parentName:"p"},"It is up to content authors to determine why a link is invalid, if the hint is not accurate, and fix the links.")),(0,a.kt)("p",null,"*Note: some links may not resolve within a given timeout and are hinted as warnings, eg:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"link-validation-hint-example",src:n(8115).Z,width:"1894",height:"276"})),(0,a.kt)("p",null,"These links should be considered ",(0,a.kt)("em",{parentName:"p"},"invalid")," and should be manually verified by content authors."),(0,a.kt)("h3",{id:"providing-redirects-for-renamed-files"},"Providing Redirects for Renamed Files"),(0,a.kt)("p",null,"When a file in your ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," folder is renamed, this is equivalent to moving content from one URL to another. In this case a redirect should be provided to maintain good SEO."),(0,a.kt)("p",null,"Redirects should be added to your ",(0,a.kt)("inlineCode",{parentName:"p"},"flow-docs.json")," file manually. See the ",(0,a.kt)("inlineCode",{parentName:"p"},"flow-docs.json")," section above for more information. A hint will be provided in the check run output indicating the required redirect."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"content-previews"},"Content Previews"),(0,a.kt)("p",null,"A special preview link is provided for content PRs as part of the GitHub PR check run, for your PR that modifies any contents in the ",(0,a.kt)("inlineCode",{parentName:"p"},"docs")," folder."),(0,a.kt)("p",null,"Previews are generated against the ",(0,a.kt)("strong",{parentName:"p"},"Staging instance of the Developer Portal"),", to ensure your content can be integrated with the latest updates to the Developer Portal itself."),(0,a.kt)("p",null,"Here is an example of preview output for changed documents in a PR"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"portal-content-check-screenshot",src:n(58997).Z,width:"1886",height:"934"})),(0,a.kt)("p",null,"When previewing content, you should see a banner indicating you\u2019re viewing an unpublished version of your page."),(0,a.kt)("p",null,"Here is an example of a preview page, with banner indicating this page is unpublished:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"preview-banner-screenshot",src:n(38979).Z,width:"3452",height:"1366"})),(0,a.kt)("p",null,"When you merge updates to documents in your PR, previews will update immediately."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"upcoming-features"},"Upcoming Features"),(0,a.kt)("h3",{id:"content-versioning"},"Content Versioning"),(0,a.kt)("p",null,"Content versioning is in progress here:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1Au9A0eEGJE_VhVYBcAKVUdwkJn2SsGOVfj2u-ckcTHY/edit#heading=h.qvb387e4t234"},"https://docs.google.com/document/d/1Au9A0eEGJE_VhVYBcAKVUdwkJn2SsGOVfj2u-ckcTHY/edit#heading=h.qvb387e4t234")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"onflowflow-special-case-repo"},"onflow/flow special-case repo"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/onflow/flow/tree/master/docs/content"},"https://github.com/onflow/flow/tree/master/docs/content")),(0,a.kt)("p",null,"The Developer Portal maintains a strict \u201cone repo per docset\u201d system. This means, each Repo represents a single set or URLs. FOr example, ",(0,a.kt)("inlineCode",{parentName:"p"},"onflow/cadence")," contains docs relating only to Cadence, and all of this content is available under ",(0,a.kt)("inlineCode",{parentName:"p"},"/cadence")," on the Developer Portal, eg: ",(0,a.kt)("a",{parentName:"p",href:"https://developers.flow.com/cadence/design-patterns"},"https://developers.flow.com/cadence/design-patterns")),(0,a.kt)("p",null,"However, there is a special-case repo: ",(0,a.kt)("inlineCode",{parentName:"p"},"onflow/flow")," that contains legacy content, and content not related to a specific tool or repository contents. The documents in the repository can be found at different URLs on the Developer Portal."),(0,a.kt)("p",null,"The content here is also located in a non-standard folder: ",(0,a.kt)("inlineCode",{parentName:"p"},"docs/content")))}c.isMDXComponent=!0},58997:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/check-run-screenshot-1478d41ee646a91783664273393e014f.png"},39851:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/link-check-screenshot-b168a00e5d683c16a0222b9def8139ab.png"},8115:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/link-hint-screenshot-c5b06f1c24c43854e8925faef9ca1991.png"},38979:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/preview-banner-screenshot-f8d615a81802d0b8a92051e1fae51f9c.png"},88938:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/tools-callout-f0c9269da5ed20d4c6e9aedb54b52f50.png"}}]);