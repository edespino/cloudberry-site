"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8062],{7693:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>t});var r=l(85893),s=l(11151);const c={title:"\u5e76\u884c\u521b\u5efa AO/AOCO \u8868\u4e0e\u5237\u65b0\u7269\u5316\u89c6\u56fe"},a="\u5e76\u884c\u521b\u5efa AO/AOCO \u8868\u4e0e\u5237\u65b0\u7269\u5316\u89c6\u56fe\uff08\u5f15\u5165\u81ea v1.5.0 \u7248\u672c\uff09",i={id:"performance/parallel-create-ao-refresh-mv",title:"\u5e76\u884c\u521b\u5efa AO/AOCO \u8868\u4e0e\u5237\u65b0\u7269\u5316\u89c6\u56fe",description:"\u81ea v1.5.0 \u8d77\uff0cApache Cloudberry \u652f\u6301\u4f7f\u7528 CREATE TABLE AS \u8bed\u53e5\u5e76\u884c\u521b\u5efa Append-Optimized (AO) \u8868\u548c Append-Optimized Column Oriented (AOCO) \u8868\uff0c\u540c\u65f6\u652f\u6301\u5e76\u884c\u5237\u65b0\u57fa\u4e8e\u8be5\u8868\u7684\u7269\u5316\u89c6\u56fe\uff0c\u4ece\u800c\u52a0\u901f\u5efa\u8868\u548c\u7269\u5316\u89c6\u56fe\u5237\u65b0\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/performance/parallel-create-ao-refresh-mv.md",sourceDirName:"performance",slug:"/performance/parallel-create-ao-refresh-mv",permalink:"/zh/docs/performance/parallel-create-ao-refresh-mv",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/performance/parallel-create-ao-refresh-mv.md",tags:[],version:"current",lastUpdatedBy:"Alwin",lastUpdatedAt:1744282709,formattedLastUpdatedAt:"2025\u5e744\u670810\u65e5",frontMatter:{title:"\u5e76\u884c\u521b\u5efa AO/AOCO \u8868\u4e0e\u5237\u65b0\u7269\u5316\u89c6\u56fe"},sidebar:"docsbars",previous:{title:"\u4f7f\u7528\u589e\u91cf\u7269\u5316\u89c6\u56fe",permalink:"/zh/docs/performance/use-incremental-materialized-view"},next:{title:"\u5e76\u884c\u6267\u884c\u67e5\u8be2",permalink:"/zh/docs/performance/parallel-query-execution"}},d={},t=[{value:"\u4f7f\u7528\u793a\u4f8b",id:"\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u5e76\u53d1\u521b\u5efa AO/AOCO \u8868",id:"\u5e76\u53d1\u521b\u5efa-aoaoco-\u8868",level:3},{value:"\u5e76\u53d1\u5237\u65b0\u7269\u5316\u89c6\u56fe",id:"\u5e76\u53d1\u5237\u65b0\u7269\u5316\u89c6\u56fe",level:3},{value:"\u52a0\u901f\u6548\u679c\u5c55\u793a",id:"\u52a0\u901f\u6548\u679c\u5c55\u793a",level:2},{value:"\u76f8\u5173\u5176\u4ed6\u7279\u6027",id:"\u76f8\u5173\u5176\u4ed6\u7279\u6027",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u5e76\u884c\u521b\u5efa-aoaoco-\u8868\u4e0e\u5237\u65b0\u7269\u5316\u89c6\u56fe\u5f15\u5165\u81ea-v150-\u7248\u672c",children:"\u5e76\u884c\u521b\u5efa AO/AOCO \u8868\u4e0e\u5237\u65b0\u7269\u5316\u89c6\u56fe\uff08\u5f15\u5165\u81ea v1.5.0 \u7248\u672c\uff09"}),"\n",(0,r.jsxs)(n.p,{children:["\u81ea v1.5.0 \u8d77\uff0cApache Cloudberry \u652f\u6301\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"CREATE TABLE AS"})," \u8bed\u53e5\u5e76\u884c\u521b\u5efa Append-Optimized (AO) \u8868\u548c Append-Optimized Column Oriented (AOCO) \u8868\uff0c\u540c\u65f6\u652f\u6301\u5e76\u884c\u5237\u65b0\u57fa\u4e8e\u8be5\u8868\u7684\u7269\u5316\u89c6\u56fe\uff0c\u4ece\u800c\u52a0\u901f\u5efa\u8868\u548c\u7269\u5316\u89c6\u56fe\u5237\u65b0\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u8981\u4f7f\u7528\u8be5\u5e76\u53d1\u529f\u80fd\uff0c\u4f60\u9700\u8981\u5148\u5c06\u7cfb\u7edf\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"enable_parallel"})," \u7684\u503c\u8bbe\u4e3a ",(0,r.jsx)(n.code,{children:"ON"}),"\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f7f\u7528\u793a\u4f8b",children:"\u4f7f\u7528\u793a\u4f8b"}),"\n",(0,r.jsx)(n.h3,{id:"\u5e76\u53d1\u521b\u5efa-aoaoco-\u8868",children:"\u5e76\u53d1\u521b\u5efa AO/AOCO \u8868"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u521b\u5efa\u57fa\u8868 ",(0,r.jsx)(n.code,{children:"t_p2"}),"\uff0c\u5728\u5efa\u8868\u8bed\u53e5\u4e2d\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"WITH"})," \u6307\u5b9a\u5e76\u53d1\u7b97\u5b50\u6570\u91cf\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE t_p2(c1 INT, c2 INT) WITH (parallel_workers=2) DISTRIBUTED BY (c1);\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5411\u8868\u4e2d\u63d2\u5165\u6570\u636e\uff0c\u5e76\u6536\u96c6\u8868 ",(0,r.jsx)(n.code,{children:"t_p2"})," \u4e0a\u7684\u7edf\u8ba1\u4fe1\u606f\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO t_p2 SELECT i, i+1 FROM generate_series(1, 10000000) i;\nANALYZE t_p2;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5f00\u542f\u5e76\u53d1\uff0c\u5e76\u5173\u95ed GPORCA \u4f18\u5316\u5668\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET enable_parallel = ON;\nSET optimizer = OFF;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"CREATE TABLE AS"})," \u57fa\u4e8e ",(0,r.jsx)(n.code,{children:"t_p2"})," \u5efa\u8868\uff0c\u5728\u6267\u884c\u8ba1\u5212\u4e2d\u51fa\u73b0\u4e86\u5e76\u884c\u7b97\u5b50\uff0c\u8bf4\u660e\u5df2\u7ecf\u5e76\u53d1\u5efa\u8868\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u521b\u5efa AO \u8868\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"EXPLAIN(COSTS OFF) CREATE TABLE ctas_ao USING ao_row AS SELECT SUM(a.c2) AS c2, AVG(b.c1) AS c1 FROM t_p2 a JOIN t_p2 b ON a.c1 = b.c1 DISTRIBUTED BY (c2);\n\n                        QUERY PLAN                            \n-----------------------------------------------------------------\nRedistribute Motion 1:3  (slice1; segments: 1)\nHash Key: (sum(a.c2))\n->  Finalize Aggregate\n        ->  Gather Motion 6:1  (slice2; segments: 6)\n            ->  Partial Aggregate\n                    ->  Parallel Hash Join\n                        Hash Cond: (a.c1 = b.c1)\n                        ->  Parallel Seq Scan on t_p2 a\n                        ->  Parallel Hash\n                                ->  Parallel Seq Scan on t_p2 b\nOptimizer: Postgres query optimizer\n(11 rows)\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u521b\u5efa AOCO \u8868\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"EXPLAIN(COSTS OFF) CREATE TABLE ctas_aoco USING ao_column AS SELECT SUM(a.c2) AS c2, AVG(b.c1) AS c1 FROM t_p2 a JOIN t_p2 b ON a.c1 = b.c1 DISTRIBUTED BY (c2);\n\n                        QUERY PLAN                            \n-----------------------------------------------------------------\nRedistribute Motion 1:3  (slice1; segments: 1)\nHash Key: (sum(a.c2))\n->  Finalize Aggregate\n        ->  Gather Motion 6:1  (slice2; segments: 6)\n            ->  Partial Aggregate\n                    ->  Parallel Hash Join\n                        Hash Cond: (a.c1 = b.c1)\n                        ->  Parallel Seq Scan on t_p2 a\n                        ->  Parallel Hash\n                                ->  Parallel Seq Scan on t_p2 b\nOptimizer: Postgres query optimizer\n(11 rows)\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5e76\u53d1\u5237\u65b0\u7269\u5316\u89c6\u56fe",children:"\u5e76\u53d1\u5237\u65b0\u7269\u5316\u89c6\u56fe"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u521b\u5efa\u57fa\u8868 ",(0,r.jsx)(n.code,{children:"t_p"}),"\uff0c\u5728\u5efa\u8868\u8bed\u53e5\u4e2d\u4f7f\u7528 ",(0,r.jsx)(n.code,{children:"WITH"})," \u6307\u5b9a\u5e76\u53d1\u7b97\u5b50\u6570\u91cf\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE t_p(c1 INT, c2 INT) WITH (parallel_workers=8) DISTRIBUTED BY (c1);\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5411\u8868\u4e2d\u63d2\u5165\u6570\u636e\uff0c\u5e76\u6536\u96c6\u8868 ",(0,r.jsx)(n.code,{children:"t_p"})," \u4e0a\u7684\u7edf\u8ba1\u4fe1\u606f\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"INSERT INTO t_p SELECT i, i+1 FROM generate_series(1, 10000000) i;\nANALYZE t_p;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6839\u636e\u53c2\u6570 ",(0,r.jsx)(n.code,{children:"ao_row"}),"\uff0c\u521b\u5efa\u4e00\u4e2a\u4f7f\u7528\u884c\u5b58\u50a8\uff08AO Row\uff09\u6216\u5217\u5b58\u50a8\uff08AO Column\uff09\u7684\u7269\u5316\u89c6\u56fe ",(0,r.jsx)(n.code,{children:"matv"}),"\u3002\u7269\u5316\u89c6\u56fe\u7684\u5185\u5bb9\u662f\u4ece\u8868 ",(0,r.jsx)(n.code,{children:"t_p"})," \u6d3e\u751f\u7684\u805a\u5408\u67e5\u8be2\u7ed3\u679c\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE MATERIALIZED VIEW matv USING ao_row AS SELECT SUM(a.c2) AS c2, AVG(b.c1) AS c1 FROM t_p a JOIN t_p b ON a.c1 = b.c1 WITH NO DATA DISTRIBUTED BY (c2);\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"CREATE MATERIALIZED VIEW matv USING ao_column AS SELECT SUM(a.c2) AS c2, AVG(b.c1) AS c1 FROM t_p a JOIN t_p b ON a.c1 = b.c1 WITH NO DATA DISTRIBUTED BY (c2);\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5f00\u542f\u5e76\u53d1\uff0c\u5e76\u5173\u95ed GPORCA \u4f18\u5316\u5668\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SET enable_parallel = ON;\nSET optimizer = OFF;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5237\u65b0\u7269\u5316\u89c6\u56fe\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"REFRESH MATERIALIZED VIEW matv;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u53ef\u4ee5\u901a\u8fc7\u8bb0\u5f55\u5237\u65b0\u65f6\u957f\u7b49\u5de5\u5177\u5bf9\u6bd4\u5173\u95ed\u548c\u5f00\u542f\u5e76\u884c\u4e24\u79cd\u60c5\u51b5\u4e0b\uff0c\u5237\u65b0\u7269\u5316\u89c6\u56fe\u7684\u65f6\u957f\u5dee\u5f02\uff0c\u4f60\u80fd\u770b\u5230\u5e76\u884c\u5237\u65b0\u7269\u5316\u89c6\u56fe\u5f97\u5230\u7684\u52a0\u901f\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u52a0\u901f\u6548\u679c\u5c55\u793a",children:"\u52a0\u901f\u6548\u679c\u5c55\u793a"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u662f\u5426\u5f00\u542f\u5e76\u884c"}),(0,r.jsx)(n.th,{children:"\u5237\u65b0 AO \u8868\u7269\u5316\u89c6\u56fe\u7684\u8017\u65f6"}),(0,r.jsx)(n.th,{children:"\u5237\u65b0 AOCO \u8868\u7269\u5316\u89c6\u56fe\u7684\u8017\u65f6"}),(0,r.jsx)(n.th,{children:"CTAS \u521b\u5efa AO \u8868\u7684\u8017\u65f6"}),(0,r.jsx)(n.th,{children:"CTAS \u521b\u5efa AOCO \u8868\u7684\u8017\u65f6"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u975e\u5e76\u884c"}),(0,r.jsx)(n.td,{children:"6.18 ms"}),(0,r.jsx)(n.td,{children:"5.91 ms"}),(0,r.jsx)(n.td,{children:"6.56 ms"}),(0,r.jsx)(n.td,{children:"6.06 ms"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"\u5e76\u884c\u6570\u4e3a 4"}),(0,r.jsx)(n.td,{children:"2.83 ms"}),(0,r.jsx)(n.td,{children:"2.81 ms"}),(0,r.jsx)(n.td,{children:"2.37 ms"}),(0,r.jsx)(n.td,{children:"2.48 ms"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u76f8\u5173\u5176\u4ed6\u7279\u6027",children:"\u76f8\u5173\u5176\u4ed6\u7279\u6027"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/zh/docs/performance/use-auto-materialized-view-to-answer-queries",children:"\u81ea\u52a8\u4f7f\u7528\u7269\u5316\u89c6\u56fe\u8fdb\u884c\u67e5\u8be2\u4f18\u5316"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/zh/docs/performance/use-incremental-materialized-view",children:"\u589e\u91cf\u7269\u5316\u89c6\u56fe\u8bf4\u660e\u6587\u6863"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},11151:(e,n,l)=>{l.d(n,{Z:()=>i,a:()=>a});var r=l(67294);const s={},c=r.createContext(s);function a(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);