"use strict";(self.webpackChunk_ts_node_website=self.webpackChunk_ts_node_website||[]).push([[65],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(n),m=i,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return n?r.createElement(d,a(a({ref:t},s),{},{components:n})):r.createElement(d,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6255:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={title:"Make it fast"},p=void 0,l={unversionedId:"performance",id:"performance",title:"Make it fast",description:"These tricks will make ts-node faster.",source:"@site/docs/performance.md",sourceDirName:".",slug:"/performance",permalink:"/ts-node/docs/performance",editUrl:"https://github.com/TypeStrong/ts-node/edit/docs/website/docs/performance.md",tags:[],version:"current",frontMatter:{title:"Make it fast"},sidebar:"primarySidebar",previous:{title:"Troubleshooting",permalink:"/ts-node/docs/troubleshooting"},next:{title:"How It Works",permalink:"/ts-node/docs/how-it-works"}},s={},u=[{value:"Skip typechecking",id:"skip-typechecking",level:2},{value:"With typechecking",id:"with-typechecking",level:2}],f={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"These tricks will make ts-node faster."),(0,o.kt)("h2",{id:"skip-typechecking"},"Skip typechecking"),(0,o.kt)("p",null,"It is often better to use ",(0,o.kt)("inlineCode",{parentName:"p"},"tsc --noEmit")," to typecheck once before your tests run or as a lint step. In these cases, ts-node can skip typechecking."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Enable ",(0,o.kt)("a",{parentName:"li",href:"/ts-node/docs/options"},(0,o.kt)("inlineCode",{parentName:"a"},"transpileOnly"))," to skip typechecking"),(0,o.kt)("li",{parentName:"ul"},"Use our ",(0,o.kt)("a",{parentName:"li",href:"/ts-node/docs/transpilers#swc"},(0,o.kt)("inlineCode",{parentName:"a"},"swc")," integration"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"This is by far the fastest option")))),(0,o.kt)("h2",{id:"with-typechecking"},"With typechecking"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Avoid dynamic ",(0,o.kt)("inlineCode",{parentName:"li"},"require()")," which may trigger repeated typechecking; prefer ",(0,o.kt)("inlineCode",{parentName:"li"},"import")),(0,o.kt)("li",{parentName:"ul"},"Try with and without ",(0,o.kt)("inlineCode",{parentName:"li"},"--files"),"; one may be faster depending on your project"),(0,o.kt)("li",{parentName:"ul"},"Check ",(0,o.kt)("inlineCode",{parentName:"li"},"tsc --showConfig"),"; make sure all executed files are included"),(0,o.kt)("li",{parentName:"ul"},"Enable ",(0,o.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/tsconfig#skipLibCheck"},(0,o.kt)("inlineCode",{parentName:"a"},"skipLibCheck"))),(0,o.kt)("li",{parentName:"ul"},"Set a ",(0,o.kt)("a",{parentName:"li",href:"https://www.typescriptlang.org/tsconfig#types"},(0,o.kt)("inlineCode",{parentName:"a"},"types"))," array to avoid loading unnecessary ",(0,o.kt)("inlineCode",{parentName:"li"},"@types"))))}m.isMDXComponent=!0}}]);