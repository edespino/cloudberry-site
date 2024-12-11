"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[1047],{25988:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=t(85893),i=t(11151);const r={title:"END"},c="END",a={id:"sql-stmts/end",title:"END",description:"Commits the current transaction.",source:"@site/docs/sql-stmts/end.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/end",permalink:"/docs/sql-stmts/end",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/end.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1733904867,formattedLastUpdatedAt:"Dec 11, 2024",frontMatter:{title:"END"},sidebar:"docsbars",previous:{title:"DROP VIEW",permalink:"/docs/sql-stmts/drop-view"},next:{title:"EXECUTE",permalink:"/docs/sql-stmts/execute"}},d={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"end",children:"END"}),"\n",(0,n.jsx)(s.p,{children:"Commits the current transaction."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"END [WORK | TRANSACTION] [AND [NO] CHAIN]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"END"})," commits the current transaction. All changes made by the transaction become visible to others and are guaranteed to be durable if a crash occurs. This command is a Cloudberry Database extension that is equivalent to ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/commit",children:(0,n.jsx)(s.code,{children:"COMMIT"})}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"WORK"})}),(0,n.jsx)("br",{}),"\n",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"TRANSACTION"})})]}),"\n",(0,n.jsx)(s.p,{children:"Optional keywords. They have no effect."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"AND CHAIN"})})}),"\n",(0,n.jsxs)(s.p,{children:["If ",(0,n.jsx)(s.code,{children:"AND CHAIN"})," is specified, a new transaction is immediately started with the same transaction characteristics (see ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/set-transaction",children:"SET TRANSACTION"}),") as the just finished one. Otherwise, no new transaction is started."]}),"\n",(0,n.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(s.p,{children:["Use ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/rollback",children:(0,n.jsx)(s.code,{children:"ROLLBACK"})})," to terminate a transaction."]}),"\n",(0,n.jsxs)(s.p,{children:["Issuing ",(0,n.jsx)(s.code,{children:"END"})," when not inside a transaction does no harm, but it will provoke a warning message."]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(s.p,{children:"To commit the current transaction and make all changes permanent:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"END;\n"})}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"END"})," is a Cloudberry Database extension that provides functionality equivalent to ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/commit",children:(0,n.jsx)(s.code,{children:"COMMIT"})}),", which is specified in the SQL standard."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/sql-stmts/begin",children:(0,n.jsx)(s.code,{children:"BEGIN"})}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/commit",children:(0,n.jsx)(s.code,{children:"COMMIT"})}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/rollback",children:(0,n.jsx)(s.code,{children:"ROLLBACK"})})]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>c});var n=t(67294);const i={},r=n.createContext(i);function c(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);