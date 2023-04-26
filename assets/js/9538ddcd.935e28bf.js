"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[3375],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>h});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function i(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},c=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?t.createElement(h,l(l({ref:a},c),{},{components:n})):t.createElement(h,l({ref:a},c))}));function h(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22959:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var t=n(87462),r=(n(67294),n(3905));const o={},l=void 0,i={unversionedId:"cadence/language/glossary",id:"cadence/language/glossary",title:"glossary",description:"Tip: CTRL/\u2318 + F and type in the symbol or operator you want to look up.",source:"@site/docs/cadence/language/glossary.md",sourceDirName:"cadence/language",slug:"/cadence/language/glossary",permalink:"/cadence/language/glossary",draft:!1,tags:[],version:"current",lastUpdatedBy:"Tom Haile",lastUpdatedAt:1682541550,formattedLastUpdatedAt:"Apr 26, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Functions",permalink:"/cadence/language/functions"},next:{title:"Imports",permalink:"/cadence/language/imports"}},s={},p=[{value:"<code>&amp;</code> (ampersand)",id:"-ampersand",level:2},{value:"Reference",id:"reference",level:3},{value:"Logical Operator",id:"logical-operator",level:3},{value:"<code>@</code> (at)",id:"-at",level:2},{value:"<code>:</code> (colon)",id:"-colon",level:2},{value:"Type Declaration",id:"type-declaration",level:3},{value:"Ternary Conditional Operator",id:"ternary-conditional-operator",level:3},{value:"<code>=</code> (equals)",id:"-equals",level:2},{value:"Variable Declaration",id:"variable-declaration",level:3},{value:"Assignment",id:"assignment",level:3},{value:"<code>!</code> (exclamation mark)",id:"-exclamation-mark",level:2},{value:"<code>/</code> (forward slash)",id:"-forward-slash",level:2},{value:"Division Operator",id:"division-operator",level:3},{value:"Path separator",id:"path-separator",level:3},{value:"<code>&lt;-</code> (lower than, hyphen) (Move operator)",id:"--lower-than-hyphen-move-operator",level:2},{value:"<code>&lt;-!</code> (lower than, hyphen, exclamation mark) (Force-assignment move operator)",id:"--lower-than-hyphen-exclamation-mark-force-assignment-move-operator",level:2},{value:"<code>&lt;-&gt;</code> (lower than, hyphen, greater than) (Swap operator)",id:"--lower-than-hyphen-greater-than-swap-operator",level:2},{value:"<code>+</code> (plus), <code>-</code> (minus), <code>*</code> (asterisk), <code>%</code> (percentage sign)",id:"-plus---minus--asterisk--percentage-sign",level:2},{value:"<code>?</code> (question mark)",id:"-question-mark",level:2},{value:"Optional",id:"optional",level:3},{value:"Ternary Conditional Operator",id:"ternary-conditional-operator-1",level:3},{value:"Nil-Coalescing Operator",id:"nil-coalescing-operator",level:3},{value:"<code>_</code> (underscore)",id:"_-underscore",level:2},{value:"Names",id:"names",level:3},{value:"Number Literals",id:"number-literals",level:3},{value:"Argument Labels",id:"argument-labels",level:3}],c=(u="Callout",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var u;const d={toc:p},m="wrapper";function h(e){let{components:a,...n}=e;return(0,r.kt)(m,(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(c,{type:"info",mdxType:"Callout"},"Tip: ",(0,r.kt)("kbd",null,"CTRL"),"/",(0,r.kt)("kbd",null,"\u2318")," + ",(0,r.kt)("kbd",null,"F")," and type in the symbol or operator you want to look up."),(0,r.kt)("h2",{id:"-ampersand"},(0,r.kt)("inlineCode",{parentName:"h2"},"&")," (ampersand)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," (ampersand) symbol has several uses."),(0,r.kt)("h3",{id:"reference"},"Reference"),(0,r.kt)("p",null,"If an expression starts with the ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," (ampersand) symbol, it creates a ",(0,r.kt)("a",{parentName:"p",href:"references"},"reference"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},'let a: String = "hello"\nlet refOfA: &String = &a as &String\n')),(0,r.kt)("p",null,"References may also be authorized if the ",(0,r.kt)("inlineCode",{parentName:"p"},"&")," symbol is preceded by ",(0,r.kt)("inlineCode",{parentName:"p"},"auth")," (otherwise the reference is unauthorized)."),(0,r.kt)("p",null,"Authorized references have the ",(0,r.kt)("inlineCode",{parentName:"p"},"auth")," modifier, i.e. the full syntax is ",(0,r.kt)("inlineCode",{parentName:"p"},"auth &T"),",\nwhereas unauthorized references do not have a modifier."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},'let a: String = "hello"\nlet refOfA: &String = &a as auth &String\n')),(0,r.kt)("h3",{id:"logical-operator"},"Logical Operator"),(0,r.kt)("p",null,"It can be also used as a ",(0,r.kt)("a",{parentName:"p",href:"operators#logical-operators"},"logical operator (AND)"),",\nby appearing twice in succession (i.e. ",(0,r.kt)("inlineCode",{parentName:"p"},"&&"),"):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"let a = true\nlet b = false\n\nlet c = a && b // false\n")),(0,r.kt)("h2",{id:"-at"},(0,r.kt)("inlineCode",{parentName:"h2"},"@")," (at)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," (at) symbol before a type is used to annotate whether the type is a ",(0,r.kt)("a",{parentName:"p",href:"resources"},"resource"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@")," symbol must appear at the beginning of the type, not inside.\nFor example, an array of ",(0,r.kt)("inlineCode",{parentName:"p"},"NFT"),"s is ",(0,r.kt)("inlineCode",{parentName:"p"},"@[NFT]"),", not ",(0,r.kt)("inlineCode",{parentName:"p"},"[@NFT]"),".\nThis emphasizes the whole type acts like a resource."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"// Declare a resource named `SomeResource`\npub resource SomeResource {\n    pub var value: Int\n\n    init(value: Int) {\n        self.value = value\n    }\n}\n\n// we use the '@' symbol to reference a resource type\nlet a: @SomeResource <- create SomeResource(value: 0)\n\n// also in functions declarations\npub fun use(resource: @SomeResource) {\n    destroy resource\n}\n")),(0,r.kt)("h2",{id:"-colon"},(0,r.kt)("inlineCode",{parentName:"h2"},":")," (colon)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},":")," (colon) symbol has several uses."),(0,r.kt)("h3",{id:"type-declaration"},"Type Declaration"),(0,r.kt)("p",null,"If a ",(0,r.kt)("inlineCode",{parentName:"p"},":")," (colon) follows a variable/constant/function declaration, it is used to declare its type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"let a: Bool = true // declares variable `a` with type `Bool`\n\n// or\n\nfun addOne(x: Int): Int { // return type of Int\n    return x + 1\n}\n")),(0,r.kt)("h3",{id:"ternary-conditional-operator"},"Ternary Conditional Operator"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},":")," (colon) is also be used in ",(0,r.kt)("a",{parentName:"p",href:"operators#ternary-conditional-operator"},"ternary operations"),' to represent the "otherwise" section,\nsuch as the following:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},'let a = 1 > 2 ? 3 : 4\n// should be read as:\n//   "is 1 greater than 2?"\n//   "if YES, then set a = 3,\n//   "otherwise, set a = 4.\n')),(0,r.kt)("h2",{id:"-equals"},(0,r.kt)("inlineCode",{parentName:"h2"},"=")," (equals)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"=")," (equals) symbol has several uses."),(0,r.kt)("h3",{id:"variable-declaration"},"Variable Declaration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"let a = 1 // declares a variable `a` with value `1`\n")),(0,r.kt)("h3",{id:"assignment"},"Assignment"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"a = 1  // assigns the value `1` to variable `a `\n")),(0,r.kt)("h2",{id:"-exclamation-mark"},(0,r.kt)("inlineCode",{parentName:"h2"},"!")," (exclamation mark)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," (exclamation mark) symbol has a different effect whether it precedes or succeeds a variable."),(0,r.kt)("p",null,"When it immediately ",(0,r.kt)("strong",{parentName:"p"},"precedes")," a boolean-type variable, it negates it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"let a: Bool = true\nlet b: Bool = !a\n\n// b is false\n")),(0,r.kt)("p",null,"When it immediately ",(0,r.kt)("strong",{parentName:"p"},"succeeds")," an ",(0,r.kt)("em",{parentName:"p"},"optional")," variable, it ",(0,r.kt)("a",{parentName:"p",href:"operators#force-unwrap-operator-"},"force-unwraps")," it.\nForce-unwrapping returns the value inside an optional if it contains a value,\nor panics and aborts the execution if the optional has no value, i.e. the optional value is nil."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"let a: Int? = nil\nlet b: Int? = 3\n\nlet c: Int = a! // panics, because = nil\nlet d: Int = b! // initialized correctly as 3\n")),(0,r.kt)("h2",{id:"-forward-slash"},(0,r.kt)("inlineCode",{parentName:"h2"},"/")," (forward slash)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," (forward slash) symbol has several uses."),(0,r.kt)("h3",{id:"division-operator"},"Division Operator"),(0,r.kt)("p",null,"Inbetween two expressions, the forward slash acts as the ",(0,r.kt)("a",{parentName:"p",href:"operators#arithmetic-operators"},"division operator"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"let result = 4 / 2\n")),(0,r.kt)("h3",{id:"path-separator"},"Path separator"),(0,r.kt)("p",null,"In a ",(0,r.kt)("a",{parentName:"p",href:"accounts#paths"},"Path"),", the forward slash separates the domain (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"storage"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"private"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"public"),") and the identifier."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},'let storagePath = /storage/path\nstoragePath.toString()  // is "/storage/path"\n')),(0,r.kt)("h2",{id:"--lower-than-hyphen-move-operator"},(0,r.kt)("inlineCode",{parentName:"h2"},"<-")," (lower than, hyphen) (Move operator)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"resources#the-move-operator--"},"move operator ",(0,r.kt)("inlineCode",{parentName:"a"},"<-"))," is like the assignment operator ",(0,r.kt)("inlineCode",{parentName:"p"},"="),",\nbut must be used when the value is a ",(0,r.kt)("a",{parentName:"p",href:"resources"},"resource"),".\nTo make assignment of resources explicit, the move operator ",(0,r.kt)("inlineCode",{parentName:"p"},"<-")," must be used when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The resource is the initial value of a constant or variable,"),(0,r.kt)("li",{parentName:"ul"},"The resource is moved to a different variable in an assignment,"),(0,r.kt)("li",{parentName:"ul"},"The resource is moved to a function as an argument"),(0,r.kt)("li",{parentName:"ul"},"The resource is returned from a function.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"resource R {}\n\nlet a <- create R() // we instantiate a new resource and move it into a\n")),(0,r.kt)("h2",{id:"--lower-than-hyphen-exclamation-mark-force-assignment-move-operator"},(0,r.kt)("inlineCode",{parentName:"h2"},"<-!")," (lower than, hyphen, exclamation mark) (Force-assignment move operator)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"operators#force-assignment-operator--"},"force-assignment move operator ",(0,r.kt)("inlineCode",{parentName:"a"},"<-!"))," moves a resource value to an optional variable.\nIf the variable is ",(0,r.kt)("inlineCode",{parentName:"p"},"nil"),", the move succeeds.\nIf it is not nil, the program aborts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"pub resource R {}\n\nvar a: @R? <- nil\na <-! create R()\n")),(0,r.kt)("h2",{id:"--lower-than-hyphen-greater-than-swap-operator"},(0,r.kt)("inlineCode",{parentName:"h2"},"<->")," (lower than, hyphen, greater than) (Swap operator)"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"operators#swapping-operator--"},"swapping operator ",(0,r.kt)("inlineCode",{parentName:"a"},"<->"))," swaps two resource between the variables to the left and right of it."),(0,r.kt)("h2",{id:"-plus---minus--asterisk--percentage-sign"},(0,r.kt)("inlineCode",{parentName:"h2"},"+")," (plus), ",(0,r.kt)("inlineCode",{parentName:"h2"},"-")," (minus), ",(0,r.kt)("inlineCode",{parentName:"h2"},"*")," (asterisk), ",(0,r.kt)("inlineCode",{parentName:"h2"},"%")," (percentage sign)"),(0,r.kt)("p",null,"These are all typical ",(0,r.kt)("a",{parentName:"p",href:"operators#arithmetic-operators"},"arithmetic operators"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Addition: ",(0,r.kt)("inlineCode",{parentName:"li"},"+")),(0,r.kt)("li",{parentName:"ul"},"Subtraction: ",(0,r.kt)("inlineCode",{parentName:"li"},"-")),(0,r.kt)("li",{parentName:"ul"},"Multiplication: ",(0,r.kt)("inlineCode",{parentName:"li"},"*")),(0,r.kt)("li",{parentName:"ul"},"Remainder: ",(0,r.kt)("inlineCode",{parentName:"li"},"%"))),(0,r.kt)("h2",{id:"-question-mark"},(0,r.kt)("inlineCode",{parentName:"h2"},"?")," (question mark)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," (question mark) symbol has several uses."),(0,r.kt)("h3",{id:"optional"},"Optional"),(0,r.kt)("p",null,"If a ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," (question mark) follows a variable/constant, it represents an optional.\nAn optional can either have a value or ",(0,r.kt)("em",{parentName:"p"},"nothing at all"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"// Declare a constant which has an optional integer type\n//\nlet a: Int? = nil\n")),(0,r.kt)("h3",{id:"ternary-conditional-operator-1"},"Ternary Conditional Operator"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," (question mark) is also be used in ",(0,r.kt)("a",{parentName:"p",href:"operators#ternary-conditional-operator"},"ternary operations"),' to represent the "then" section,\nsuch as the following:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},'let a = 1 > 2 ? 3 : 4\n// should be read as:\n//   "is 1 greater than 2?"\n//   "if YES, then set a = 3,\n//   "otherwise, set a = 4.\n')),(0,r.kt)("h3",{id:"nil-coalescing-operator"},"Nil-Coalescing Operator"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," (question mark) is also used in the ",(0,r.kt)("a",{parentName:"p",href:"operators#nil-coalescing-operator-"},"nil-coalescing operator ",(0,r.kt)("inlineCode",{parentName:"a"},"??")),"."),(0,r.kt)("p",null,"It returns the value inside the optional, if the optional contains a value,\nor returns an alternative value if the optional has no value, i.e., the optional value is nil."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"// Declare a constant which has an optional integer type\n//\nlet a: Int? = nil\n\n// Declare a constant with a non-optional integer type,\n// which is initialized to `a` if it is non-nil, or 42 otherwise.\n//\nlet b: Int = a ?? 42\n// `b` is 42, as `a` is nil\n\n\n// Invalid: nil-coalescing operator is applied to a value which has a non-optional type\n// (the integer literal is of type `Int`).\n//\nlet c = 1 ?? 2\n")),(0,r.kt)("h2",{id:"_-underscore"},(0,r.kt)("inlineCode",{parentName:"h2"},"_")," (underscore)"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," (underscore) symbol has several uses."),(0,r.kt)("h3",{id:"names"},"Names"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," (underscore) can be used in names, e.g. in variables and types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"let _a = true // used as a variable name\nlet another_one = false\n")),(0,r.kt)("h3",{id:"number-literals"},"Number Literals"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," (underscore) can also be used to split up numerical components."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"let b = 100_000_000 // used to split up a number (supports all number types, e.g. 0b10_11_01)\n")),(0,r.kt)("h3",{id:"argument-labels"},"Argument Labels"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"_")," (underscore) can also be to indicate that a parameter in a ",(0,r.kt)("a",{parentName:"p",href:"functions"},"function")," has no argument label."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cadence"},"// The special argument label _ is specified for the parameter,\n// so no argument label has to be provided in a function call.\n\nfun double(_ x: Int): Int {\n    return x * 2\n}\n\nlet result = double(4)\n")))}h.isMDXComponent=!0}}]);