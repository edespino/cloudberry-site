"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[3683],{61058:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var n=t(85893),i=t(11151);const l={title:"DROP POLICY"},o="DROP POLICY",r={id:"sql-stmts/drop-policy",title:"DROP POLICY",description:"Removes a row-level security policy from a table.",source:"@site/docs/sql-stmts/drop-policy.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-policy",permalink:"/docs/sql-stmts/drop-policy",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-policy.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733293498,formattedLastUpdatedAt:"Dec 4, 2024",frontMatter:{title:"DROP POLICY"},sidebar:"docsbars",previous:{title:"DROP OWNED",permalink:"/docs/sql-stmts/drop-owned"},next:{title:"DROP PROCEDURE",permalink:"/docs/sql-stmts/drop-procedure"}},c={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"drop-policy",children:"DROP POLICY"}),"\n",(0,n.jsx)(s.p,{children:"Removes a row-level security policy from a table."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DROP POLICY [ IF EXISTS ] <name> ON <table_name> [ CASCADE | RESTRICT ]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DROP POLICY"})," removes the specified policy from the table. Note that if the last policy is removed for a table and the table still has row-level security enabled via ",(0,n.jsx)(s.code,{children:"ALTER TABLE"}),", then the default-deny policy will be used. ",(0,n.jsx)(s.code,{children:"ALTER TABLE ... DISABLE ROW LEVEL SECURITY"})," can be used to disable row-level security for a table, whether policies for the table exist or not."]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"IF EXISTS"})})}),"\n",(0,n.jsx)(s.p,{children:"Do not throw an error if the policy does not exist. A notice is issued in this case."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"name"})})}),"\n",(0,n.jsx)(s.p,{children:"The name of the policy to drop."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"table_name"})})}),"\n",(0,n.jsx)(s.p,{children:"The name (optionally schema-qualified) of the table that the policy is on."}),"\n",(0,n.jsxs)(s.p,{children:["CASCADE\n",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"RESTRICT"})})]}),"\n",(0,n.jsx)(s.p,{children:"These key words have no effect, since there are no dependencies on policies."}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["To drop the policy called ",(0,n.jsx)(s.code,{children:"p1"})," on the table named ",(0,n.jsx)(s.code,{children:"my_table"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DROP POLICY p1 ON my_table;\n"})}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DROP POLICY"})," is a Cloudberry Database extension to the SQL standard."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/sql-stmts/create-policy",children:"CREATE POLICY"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/alter-policy",children:"ALTER POLICY"})]})]})}function p(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>r,a:()=>o});var n=t(67294);const i={},l=n.createContext(i);function o(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);