"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4526],{69238:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var n=s(85893),t=s(11151);const a={title:"DROP FOREIGN DATA WRAPPER"},i="DROP FOREIGN DATA WRAPPER",o={id:"sql-stmts/drop-foreign-data-wrapper",title:"DROP FOREIGN DATA WRAPPER",description:"Removes a foreign-data wrapper.",source:"@site/docs/sql-stmts/drop-foreign-data-wrapper.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-foreign-data-wrapper",permalink:"/zh/docs/sql-stmts/drop-foreign-data-wrapper",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-foreign-data-wrapper.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733293498,formattedLastUpdatedAt:"2024\u5e7412\u67084\u65e5",frontMatter:{title:"DROP FOREIGN DATA WRAPPER"},sidebar:"docsbars",previous:{title:"DROP EXTERNAL TABLE",permalink:"/zh/docs/sql-stmts/drop-external-table"},next:{title:"DROP FOREIGN TABLE",permalink:"/zh/docs/sql-stmts/drop-foreign-table"}},d={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"drop-foreign-data-wrapper",children:"DROP FOREIGN DATA WRAPPER"}),"\n",(0,n.jsx)(r.p,{children:"Removes a foreign-data wrapper."}),"\n",(0,n.jsx)(r.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"DROP FOREIGN DATA WRAPPER [ IF EXISTS ] <name> [ CASCADE | RESTRICT ]\n"})}),"\n",(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"DROP FOREIGN DATA WRAPPER"})," removes an existing foreign-data wrapper from the current database. A foreign-data wrapper may be removed only by its owner."]}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"IF EXISTS"})})}),"\n",(0,n.jsx)(r.p,{children:"Do not throw an error if the foreign-data wrapper does not exist. Cloudberry Database issues a notice in this case."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"name"})})}),"\n",(0,n.jsx)(r.p,{children:"The name of an existing foreign-data wrapper."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"CASCADE"})})}),"\n",(0,n.jsx)(r.p,{children:"Automatically drop objects that depend on the foreign-data wrapper (such as foreign tables and servers), and in turn all objects that depend on those objects."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:(0,n.jsx)(r.code,{children:"RESTRICT"})})}),"\n",(0,n.jsx)(r.p,{children:"Refuse to drop the foreign-data wrapper if any object depends on it. This is the default."}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(r.p,{children:["Drop the foreign-data wrapper named ",(0,n.jsx)(r.code,{children:"dbi"}),":"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-sql",children:"DROP FOREIGN DATA WRAPPER dbi;\n"})}),"\n",(0,n.jsx)(r.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"DROP FOREIGN DATA WRAPPER"})," conforms to ISO/IEC 9075-9 (SQL/MED). The ",(0,n.jsx)(r.code,{children:"IF EXISTS"})," clause is a Cloudberry Database extension."]}),"\n",(0,n.jsx)(r.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/zh/docs/sql-stmts/create-foreign-data-wrapper",children:"CREATE FOREIGN DATA WRAPPER"}),", ",(0,n.jsx)(r.a,{href:"/zh/docs/sql-stmts/alter-foreign-data-wrapper",children:"ALTER FOREIGN DATA WRAPPER"})]})]})}function p(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,r,s)=>{s.d(r,{Z:()=>o,a:()=>i});var n=s(67294);const t={},a=n.createContext(t);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);