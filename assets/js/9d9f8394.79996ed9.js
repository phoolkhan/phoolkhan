"use strict";(self.webpackChunk_ts_node_website=self.webpackChunk_ts_node_website||[]).push([[360],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return N}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=i(a),N=r,k=m["".concat(p,".").concat(N)]||m[N]||c[N]||o;return a?n.createElement(k,s(s({ref:t},d),{},{components:a})):n.createElement(k,s({ref:t},d))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=a[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9222:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return N},frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],l={title:"Troubleshooting"},p=void 0,i={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"Understanding configuration",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/ts-node/docs/troubleshooting",editUrl:"https://github.com/TypeStrong/ts-node/edit/docs/website/docs/troubleshooting.md",tags:[],version:"current",frontMatter:{title:"Troubleshooting"},sidebar:"primarySidebar",previous:{title:"CommonJS vs native ECMAScript modules",permalink:"/ts-node/docs/imports"},next:{title:"Make it fast",permalink:"/ts-node/docs/performance"}},d={},c=[{value:"Understanding configuration",id:"understanding-configuration",level:2},{value:"Understanding Errors",id:"understanding-errors",level:2},{value:"<code>TSError</code>",id:"tserror",level:3},{value:"<code>SyntaxError</code>",id:"syntaxerror",level:3},{value:"Unsupported JavaScript syntax",id:"unsupported-javascript-syntax",level:4}],m={toc:c};function N(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"understanding-configuration"},"Understanding configuration"),(0,o.kt)("p",null,"ts-node uses sensible default configurations to reduce boilerplate while still respecting ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," if you\nhave one.  If you are unsure which configuration is used, you can log it with ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-node --showConfig"),".  This is similar to\n",(0,o.kt)("inlineCode",{parentName:"p"},"tsc --showConfig")," but includes ",(0,o.kt)("inlineCode",{parentName:"p"},'"ts-node"')," options as well."),(0,o.kt)("p",null,"ts-node also respects your locally-installed ",(0,o.kt)("inlineCode",{parentName:"p"},"typescript")," version, but global installations fallback to the globally-installed\n",(0,o.kt)("inlineCode",{parentName:"p"},"typescript"),".  If you are unsure which versions are used, ",(0,o.kt)("inlineCode",{parentName:"p"},"ts-node -vv")," will log them."),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"$ ts-node -vv")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"ts-node v10.0.0")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"node v16.1.0")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"compiler v4.2.2")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"$ ts-node --showConfig")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"compilerOptions"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"target"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"es6"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"lib"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": [")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"es6"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"dom"')),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    ],")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"rootDir"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"./src"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"outDir"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"./.ts-node"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"module"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"commonjs"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"moduleResolution"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"node"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"strict"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": true,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"declaration"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": false,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"sourceMap"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": true,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"inlineSources"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": true,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"types"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": [")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"      "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"node"')),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    ],")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"stripInternal"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": true,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"incremental"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": true,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"skipLibCheck"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": true,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"importsNotUsedAsValues"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"error"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"inlineSourceMap"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": false,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"noEmit"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"false")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  },")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"ts-node"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": {")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"cwd"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"/d/project"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"projectSearchDir"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"/d/project"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"require"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": [],")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"project"'),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#032F62"}},'"/d/project/tsconfig.json"')),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"  }")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}},"}"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"shell"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"$ ts-node -vv")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"ts-node v10.0.0")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"node v16.1.0")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"compiler v4.2.2")),(0,o.kt)("div",{parentName:"code",className:"line"}),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"$ ts-node --showConfig")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"compilerOptions"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"target"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"es6"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"lib"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"[")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"es6"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"dom"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"]"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"rootDir"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"./src"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"outDir"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"./.ts-node"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"module"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"commonjs"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"moduleResolution"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"node"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"strict"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": true,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"declaration"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": false,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"sourceMap"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": true,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"inlineSources"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": true,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"types"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"[")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"      "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"node"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"]"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"stripInternal"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": true,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"incremental"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": true,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"skipLibCheck"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": true,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"importsNotUsedAsValues"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"error"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"inlineSourceMap"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": false,")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"noEmit"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#88C0D0"}},"false")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"ts-node"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"{")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"cwd"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"/d/project"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"projectSearchDir"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"/d/project"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"require"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"[]"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},",")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"    "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"project"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},": "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"'),(0,o.kt)("span",{parentName:"div",style:{color:"#A3BE8C"}},"/d/project/tsconfig.json"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},'"')),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}},"  "),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")),(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"}")))))),(0,o.kt)("h2",{id:"understanding-errors"},"Understanding Errors"),(0,o.kt)("p",null,"It is important to differentiate between errors from ts-node, errors from the TypeScript compiler, and errors from ",(0,o.kt)("inlineCode",{parentName:"p"},"node"),".  It is also important to understand when errors are caused by a type error in your code, a bug in your code, or a flaw in your configuration."),(0,o.kt)("h3",{id:"tserror"},(0,o.kt)("inlineCode",{parentName:"h3"},"TSError")),(0,o.kt)("p",null,"Type errors from the compiler are thrown as a ",(0,o.kt)("inlineCode",{parentName:"p"},"TSError"),".  These are the same as errors you get from ",(0,o.kt)("inlineCode",{parentName:"p"},"tsc"),"."),(0,o.kt)("h3",{id:"syntaxerror"},(0,o.kt)("inlineCode",{parentName:"h3"},"SyntaxError")),(0,o.kt)("p",null,"Any error that is not a ",(0,o.kt)("inlineCode",{parentName:"p"},"TSError")," is from node.js (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"SyntaxError"),"), and cannot be fixed by TypeScript or ts-node. These are bugs in your code or configuration."),(0,o.kt)("h4",{id:"unsupported-javascript-syntax"},"Unsupported JavaScript syntax"),(0,o.kt)("p",null,"Your version of ",(0,o.kt)("inlineCode",{parentName:"p"},"node"),' may not support all JavaScript syntax supported by TypeScript.  The compiler must transform this syntax via "downleveling," which is controlled by\nthe ',(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#target"},"tsconfig ",(0,o.kt)("inlineCode",{parentName:"a"},'"target"')," option"),".  Otherwise your code will compile fine, but node will throw a ",(0,o.kt)("inlineCode",{parentName:"p"},"SyntaxError"),"."),(0,o.kt)("p",null,"For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," 12 does not understand the ",(0,o.kt)("inlineCode",{parentName:"p"},"?.")," optional chaining operator.  If you use ",(0,o.kt)("inlineCode",{parentName:"p"},'"target": "esnext"'),", then the following TypeScript syntax:"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki github-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"typescript"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"const bar: string | undefined"},"bar")),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"string"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"|"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"undefined"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," ",(0,o.kt)("data-lsp",{parentName:"span",lsp:"var foo: {\n    bar: string;\n} | undefined"},"foo"),"?.",(0,o.kt)("data-lsp",{parentName:"span",lsp:"(property) bar: string | undefined"},"bar"),";"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord twoslash lsp",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"typescript"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"const bar: string | undefined"},"bar")),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},":"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"string"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"|"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#8FBCBB"}},"undefined"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"var foo: {\n    bar: string;\n} | undefined"},"foo")),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"?."),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},(0,o.kt)("data-lsp",{parentName:"span",lsp:"(property) bar: string | undefined"},"bar")),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,o.kt)("p",null,"will compile into this JavaScript:"),(0,o.kt)("div",{className:"shiki-twoslash-fragment"},(0,o.kt)("pre",{parentName:"div",className:"shiki github-light",style:{backgroundColor:"#ffffff",color:"#24292e"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"javascript"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#005CC5"}},"a"),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D73A49"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#24292E"}}," foo?.bar;"))))),(0,o.kt)("pre",{parentName:"div",className:"shiki nord",style:{backgroundColor:"#2e3440ff",color:"#d8dee9ff"}},(0,o.kt)("div",{parentName:"pre",className:"language-id"},"javascript"),(0,o.kt)("div",{parentName:"pre",className:"code-container"},(0,o.kt)("code",{parentName:"div"},(0,o.kt)("div",{parentName:"code",className:"line"},(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"const"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"a"),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},"="),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9FF"}}," "),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"foo"),(0,o.kt)("span",{parentName:"div",style:{color:"#ECEFF4"}},"?."),(0,o.kt)("span",{parentName:"div",style:{color:"#D8DEE9"}},"bar"),(0,o.kt)("span",{parentName:"div",style:{color:"#81A1C1"}},";")))))),(0,o.kt)("p",null,"When you try to run this code, node 12 will throw a ",(0,o.kt)("inlineCode",{parentName:"p"},"SyntaxError"),".  To fix this, you must switch to ",(0,o.kt)("inlineCode",{parentName:"p"},'"target": "es2019"')," or lower so TypeScript transforms ",(0,o.kt)("inlineCode",{parentName:"p"},"?.")," into something ",(0,o.kt)("inlineCode",{parentName:"p"},"node")," can understand."))}N.isMDXComponent=!0}}]);