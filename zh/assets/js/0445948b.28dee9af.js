"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5964],{10370:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=s(85893),c=s(11151);const i={title:"\u4f7f\u7528\u5217\u7ea7\u538b\u7f29"},t="\u4f7f\u7528\u5217\u7ea7\u538b\u7f29",o={id:"performance/use-columnar-compression",title:"\u4f7f\u7528\u5217\u7ea7\u538b\u7f29",description:"Apache Cloudberry \u652f\u6301\u5217\u7ea7\u538b\u7f29\u529f\u80fd\uff0c\u901a\u8fc7\u5bf9\u6307\u5b9a\u5217\u8fdb\u884c\u6570\u636e\u538b\u7f29\uff0c\u53ef\u4ee5\u663e\u8457\u51cf\u5c11\u5b58\u50a8\u7a7a\u95f4\u7684\u5360\u7528\u3002\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5217\u7ea7\u538b\u7f29\u8fd8\u80fd\u4f18\u5316\u67e5\u8be2\u6027\u80fd\uff0c\u7279\u522b\u662f\u5728\u5904\u7406\u5927\u89c4\u6a21\u6570\u636e\u65f6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/performance/use-columnar-compression.md",sourceDirName:"performance",slug:"/performance/use-columnar-compression",permalink:"/zh/docs/performance/use-columnar-compression",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/performance/use-columnar-compression.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733293498,formattedLastUpdatedAt:"2024\u5e7412\u67084\u65e5",frontMatter:{title:"\u4f7f\u7528\u5217\u7ea7\u538b\u7f29"},sidebar:"docsbars",previous:{title:"Use RuntimeFilter to Optimize Join Queries",permalink:"/zh/docs/performance/use-runtimefilter-to-optimize-queries"},next:{title:"Security and Permission",permalink:"/zh/docs/security/"}},l={},a=[{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2},{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u4f7f\u7528\u5217\u7ea7\u538b\u7f29",children:"\u4f7f\u7528\u5217\u7ea7\u538b\u7f29"}),"\n",(0,r.jsx)(n.p,{children:"Apache Cloudberry \u652f\u6301\u5217\u7ea7\u538b\u7f29\u529f\u80fd\uff0c\u901a\u8fc7\u5bf9\u6307\u5b9a\u5217\u8fdb\u884c\u6570\u636e\u538b\u7f29\uff0c\u53ef\u4ee5\u663e\u8457\u51cf\u5c11\u5b58\u50a8\u7a7a\u95f4\u7684\u5360\u7528\u3002\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u5217\u7ea7\u538b\u7f29\u8fd8\u80fd\u4f18\u5316\u67e5\u8be2\u6027\u80fd\uff0c\u7279\u522b\u662f\u5728\u5904\u7406\u5927\u89c4\u6a21\u6570\u636e\u65f6\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u573a\u666f",children:"\u4f7f\u7528\u573a\u666f"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u5b58\u50a8\u4f18\u5316"}),"\uff1a\u5bf9\u4e8e\u5b58\u50a8\u5bc6\u96c6\u578b\u7684\u5e94\u7528\uff0c\u5217\u7ea7\u538b\u7f29\u80fd\u591f\u6709\u6548\u51cf\u5c11\u78c1\u76d8\u7a7a\u95f4\u4f7f\u7528\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6027\u80fd\u63d0\u5347"}),"\uff1a\u5728\u5217\u5b58\u50a8\u7684\u67e5\u8be2\u573a\u666f\u4e0b\uff0c\u538b\u7f29\u540e\u7684\u6570\u636e\u5757\u66f4\u5c0f\uff0c\u53ef\u4ee5\u51cf\u5c11 I/O \u5f00\u9500\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u9ad8\u9891\u6570\u636e\u5206\u6790"}),"\uff1a\u5728\u5927\u89c4\u6a21\u6570\u636e\u5206\u6790\u573a\u666f\u4e2d\uff0c\u5217\u7ea7\u538b\u7f29\u53ef\u4ee5\u964d\u4f4e\u8bfb\u53d6\u6570\u636e\u7684\u6210\u672c\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u5217\u7ea7\u538b\u7f29\u529f\u80fd\u793a\u4f8b\uff0c\u5c55\u793a\u4e86\u5728 Apache Cloudberry \u4e2d\u4f7f\u7528\u5217\u7ea7\u538b\u7f29\u7684\u6548\u679c\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u521b\u5efa\u4e0d\u4f7f\u7528\u5217\u7ea7\u538b\u7f29\u7684\u8868\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE no_column_compression (\n    id serial PRIMARY KEY,\n    data1 text,\n    data2 text\n);\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u521b\u5efa\u4f7f\u7528\u5217\u7ea7\u538b\u7f29\u7684\u8868\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE column_compression (\n    id serial PRIMARY KEY,\n    data1 text ENCODING (compresstype=zlib, compresslevel=5),\n    data2 text\n)\nWITH (\n    appendoptimized=true,\n    orientation=column\n);\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u63d2\u5165\u6570\u636e\u5230\u4e0d\u4f7f\u7528\u5217\u7ea7\u538b\u7f29\u7684\u8868\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO no_column_compression (data1, data2)\nSELECT repeat(md5(random()::text), 10), repeat(md5(random()::text), 10)\nFROM generate_series(1, 100000);\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u63d2\u5165\u6570\u636e\u5230\u4f7f\u7528\u5217\u7ea7\u538b\u7f29\u7684\u8868\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO column_compression (data1, data2)\nSELECT repeat(md5(random()::text), 10), repeat(md5(random()::text), 10)\nFROM generate_series(1, 100000);\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b\u4e0d\u4f7f\u7528\u5217\u7ea7\u538b\u7f29\u7684\u8868\u7684\u5b58\u50a8\u7a7a\u95f4\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT pg_size_pretty(pg_total_relation_size('no_column_compression')) AS no_column_compression_size;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u7ed3\u679c\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"no_column_compression_size\n---------------------------\n69 MB\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u67e5\u770b\u4f7f\u7528\u5217\u7ea7\u538b\u7f29\u7684\u8868\u7684\u5b58\u50a8\u7a7a\u95f4\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT pg_size_pretty(pg_total_relation_size('column_compression')) AS column_compression_size;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u793a\u4f8b\u7ed3\u679c\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"column_compression_size\n------------------------\n36 MB\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u538b\u7f29\u540e\u7684\u8868\u5360\u7528\u7684\u5b58\u50a8\u7a7a\u95f4\u660e\u663e\u5c0f\u4e8e\u672a\u538b\u7f29\u7684\u8868\u3002\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u4f7f\u7528\u5217\u7ea7\u538b\u7f29\u7684\u8868\u51cf\u5c11\u4e86\u63a5\u8fd1 50% \u7684\u5b58\u50a8\u7a7a\u95f4\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>t});var r=s(67294);const c={},i=r.createContext(c);function t(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);