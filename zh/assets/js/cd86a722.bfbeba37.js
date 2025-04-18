"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7255],{10989:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var t=n(85893),i=n(11151),a=n(52991);const c={title:"Query Performance Overview"},o="Query Performance in Apache Cloudberry",s={id:"performance/index",title:"Query Performance Overview",description:"Apache Cloudberry dynamically eliminates irrelevant partitions in a table and optimally allocates memory for different operators in a query.These enhancements scan less data for a query, accelerate query processing, and support more concurrency.",source:"@site/docs/performance/index.md",sourceDirName:"performance",slug:"/performance/",permalink:"/zh/docs/performance/",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/performance/index.md",tags:[],version:"current",lastUpdatedBy:"Alwin",lastUpdatedAt:1744282709,formattedLastUpdatedAt:"2025\u5e744\u670810\u65e5",frontMatter:{title:"Query Performance Overview"},sidebar:"docsbars",previous:{title:"Use pgvector for Vector Similarity Search",permalink:"/zh/docs/advanced-analytics/pgvector-search"},next:{title:"\u66f4\u65b0\u7edf\u8ba1\u4fe1\u606f",permalink:"/zh/docs/performance/update-stats-using-analyze"}},l={},d=[];function p(e){const r={admonition:"admonition",code:"code",h1:"h1",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"query-performance-in-apache-cloudberry",children:"Query Performance in Apache Cloudberry"}),"\n",(0,t.jsx)(r.p,{children:"Apache Cloudberry dynamically eliminates irrelevant partitions in a table and optimally allocates memory for different operators in a query.These enhancements scan less data for a query, accelerate query processing, and support more concurrency."}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Dynamic partition elimination"}),"\n",(0,t.jsxs)(r.p,{children:["In Apache Cloudberry, values available only when a query runs are used to dynamically prune partitions, which improves query processing speed. Enable or deactivate dynamic partition elimination by setting the server configuration parameter ",(0,t.jsx)(r.code,{children:"gp_dynamic_partition_pruning"})," to ",(0,t.jsx)(r.code,{children:"ON"})," or ",(0,t.jsx)(r.code,{children:"OFF"}),"; it is ",(0,t.jsx)(r.code,{children:"ON"})," by default."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"Memory optimizations"}),"\n",(0,t.jsx)(r.p,{children:"Apache Cloudberry allocates memory optimally for different operators in a query and frees and re-allocates memory during the stages of processing a query."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsx)(r.p,{children:"Apache Cloudberry uses GPORCA by default. GPORCA extends the planning and optimization capabilities of the Postgres optimizer."})}),"\n","\n","\n",(0,t.jsx)(a.Z,{})]})}function u(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},52991:(e,r,n)=>{n.d(r,{Z:()=>x});n(67294);var t=n(90512),i=n(53438),a=n(33692),c=n(13919),o=n(95999),s=n(92503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(85893);function p(e){let{href:r,children:n}=e;return(0,d.jsx)(a.Z,{href:r,className:(0,t.Z)("card padding--lg",l.cardContainer),children:n})}function u(e){let{href:r,icon:n,title:i,description:a}=e;return(0,d.jsxs)(p,{href:r,children:[(0,d.jsxs)(s.Z,{as:"h2",className:(0,t.Z)("text--truncate",l.cardTitle),title:i,children:[n," ",i]}),a&&(0,d.jsx)("p",{className:(0,t.Z)("text--truncate",l.cardDescription),title:a,children:a})]})}function m(e){let{item:r}=e;const n=(0,i.LM)(r);return n?(0,d.jsx)(u,{href:n,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:r.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function h(e){let{item:r}=e;const n=(0,c.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",t=(0,i.xz)(r.docId??void 0);return(0,d.jsx)(u,{href:r.href,icon:n,title:r.label,description:r.description??t?.description})}function f(e){let{item:r}=e;switch(r.type){case"link":return(0,d.jsx)(h,{item:r});case"category":return(0,d.jsx)(m,{item:r});default:throw new Error(`unknown item type ${JSON.stringify(r)}`)}}function y(e){let{className:r}=e;const n=(0,i.jA)();return(0,d.jsx)(x,{items:n.items,className:r})}function x(e){const{items:r,className:n}=e;if(!r)return(0,d.jsx)(y,{...e});const a=(0,i.MN)(r);return(0,d.jsx)("section",{className:(0,t.Z)("row",n),children:a.map(((e,r)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},r)))})}},11151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>c});var t=n(67294);const i={},a=t.createContext(i);function c(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);