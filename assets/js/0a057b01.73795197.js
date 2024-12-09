"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8918],{92123:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=s(85893),i=s(11151);const a={title:"CREATE STATISTICS"},c="CREATE STATISTICS",o={id:"sql-stmts/create-statistics",title:"CREATE STATISTICS",description:"Defines extended statistics.",source:"@site/docs/sql-stmts/create-statistics.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-statistics",permalink:"/docs/sql-stmts/create-statistics",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-statistics.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733293498,formattedLastUpdatedAt:"Dec 4, 2024",frontMatter:{title:"CREATE STATISTICS"},sidebar:"docsbars",previous:{title:"CREATE SERVER",permalink:"/docs/sql-stmts/create-server"},next:{title:"CREATE TABLE AS",permalink:"/docs/sql-stmts/create-table-as"}},r={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"create-statistics",children:"CREATE STATISTICS"}),"\n",(0,n.jsx)(t.p,{children:"Defines extended statistics."}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE STATISTICS [ IF NOT EXISTS ] <statistics_name>\n    [ ( <statistics_kind> [, ... ] ) ]\n    ON <column_name>, <column_name> [, ...]\n    FROM <table_name>\n"})}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"CREATE STATISTICS"})," creates a new extended statistics object tracking data about the specified table, foreign table, or materialized view. The statistics object is created in the current database and will be owned by the user issuing the command."]}),"\n",(0,n.jsxs)(t.p,{children:["If a schema name is given (for example, ",(0,n.jsx)(t.code,{children:"CREATE STATISTICS myschema.mystat ..."}),") then the statistics object is created in the specified schema. Otherwise it is created in the current schema. The name of the statistics object must be distinct from the name of any other statistics object in the same schema."]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"IF NOT EXISTS"})})}),"\n",(0,n.jsx)(t.p,{children:"Do not throw an error if a statistics object with the same name already exists. Cloudberry Database issues a notice in this case. Note that only the name of the statistics object is considered here, not the details of its definition."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"statistics_name"})})}),"\n",(0,n.jsx)(t.p,{children:"The name (optionally schema-qualified) of the statistics object to create."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"statistics_kind"})})}),"\n",(0,n.jsxs)(t.p,{children:["A statistics kind to be computed in this statistics object. Currently supported kinds are ",(0,n.jsx)(t.code,{children:"ndistinct"}),", which enables n-distinct statistics, ",(0,n.jsx)(t.code,{children:"dependencies"}),", which enables functional dependency statistics, and ",(0,n.jsx)(t.code,{children:"mcv"})," which enables most-common values lists. If this clause is omitted, all supported statistics kinds are included in the statistics object."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"column_name"})})}),"\n",(0,n.jsx)(t.p,{children:"The name of a table column to be covered by the computed statistics. You must specify at least two column names; the order of the column names is insignificant."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"table_name"})})}),"\n",(0,n.jsxs)(t.p,{children:["The name (optionally schema-qualified) of the table containing the column(s) on which the statistics are computed; see ",(0,n.jsx)(t.a,{href:"/docs/sql-stmts/analyze",children:"ANALYZE"})," for an explanation of inheritance and partition handling."]}),"\n",(0,n.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsx)(t.p,{children:"You must be the owner of a table to create a statistics object that reads it. Once created, however, the ownership of the statistics object is independent of the underlying table(s)."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["Create table ",(0,n.jsx)(t.code,{children:"t1"})," with two functionally-dependent columns, i.e., knowledge of a value in the first column is sufficient for determining the value in the other column. Then build functional dependency statistics on those columns:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE t1 (\n    a   int,\n    b   int\n);\n\nINSERT INTO t1 SELECT i/100, i/500\n                 FROM generate_series(1,1000000) s(i);\n\nANALYZE t1;\n\n-- the number of matching rows will be drastically underestimated:\nEXPLAIN ANALYZE SELECT * FROM t1 WHERE (a = 1) AND (b = 0);\n\nCREATE STATISTICS s1 (dependencies) ON a, b FROM t1;\n\nANALYZE t1;\n\n-- now the row count estimate is more accurate:\nEXPLAIN ANALYZE SELECT * FROM t1 WHERE (a = 1) AND (b = 0);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Without functional-dependency statistics, the planner assumes that the two ",(0,n.jsx)(t.code,{children:"WHERE"})," conditions are independent, and would multiply their selectivities together to arrive at a much-too-small row count estimate. With such statistics, the planner recognizes that the ",(0,n.jsx)(t.code,{children:"WHERE"})," conditions are redundant and does not underestimate the row count."]}),"\n",(0,n.jsxs)(t.p,{children:["Create table ",(0,n.jsx)(t.code,{children:"t2"})," with two perfectly correlated columns (containing identical data), and a MCV list on those columns:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE t2 (\n    a   int,\n    b   int\n);\n\nINSERT INTO t2 SELECT mod(i,100), mod(i,100)\n                 FROM generate_series(1,1000000) s(i);\n\nCREATE STATISTICS s2 (mcv) ON a, b FROM t2;\n\nANALYZE t2;\n\n-- valid combination (found in MCV)\nEXPLAIN ANALYZE SELECT * FROM t2 WHERE (a = 1) AND (b = 1);\n\n-- invalid combination (not found in MCV)\nEXPLAIN ANALYZE SELECT * FROM t2 WHERE (a = 1) AND (b = 2);\n"})}),"\n",(0,n.jsx)(t.p,{children:"The MCV list gives the planner more detailed information about the specific values that commonly appear in the table, as well as an upper bound on the selectivities of combinations of values that do not appear in the table, allowing it to generate better estimates in both cases."}),"\n",(0,n.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(t.p,{children:["There is no ",(0,n.jsx)(t.code,{children:"CREATE STATISTICS"})," statement in the SQL standard."]}),"\n",(0,n.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/sql-stmts/alter-statistics",children:"ALTER STATISTICS"}),", ",(0,n.jsx)(t.a,{href:"/docs/sql-stmts/drop-statistics",children:"DROP STATISTICS"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>c});var n=s(67294);const i={},a=n.createContext(i);function c(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);