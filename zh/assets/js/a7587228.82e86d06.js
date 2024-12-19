"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5669],{98906:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(85893),r=t(11151);const o={title:"ALTER OPERATOR CLASS"},a="ALTER OPERATOR CLASS",i={id:"sql-stmts/alter-operator-class",title:"ALTER OPERATOR CLASS",description:"Changes the definition of an operator class.",source:"@site/docs/sql-stmts/alter-operator-class.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-operator-class",permalink:"/zh/docs/sql-stmts/alter-operator-class",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-operator-class.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1734402925,formattedLastUpdatedAt:"2024\u5e7412\u670817\u65e5",frontMatter:{title:"ALTER OPERATOR CLASS"},sidebar:"docsbars",previous:{title:"ALTER MATERIALIZED VIEW",permalink:"/zh/docs/sql-stmts/alter-materialized-view"},next:{title:"ALTER OPERATOR FAMILY",permalink:"/zh/docs/sql-stmts/alter-operator-family"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"alter-operator-class",children:"ALTER OPERATOR CLASS"}),"\n",(0,n.jsx)(s.p,{children:"Changes the definition of an operator class."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"ALTER OPERATOR CLASS <name> USING <index_method> RENAME TO <new_name>\n\nALTER OPERATOR CLASS <name> USING <index_method> OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }\n\nALTER OPERATOR CLASS <name> USING <index_method> SET SCHEMA <new_schema>\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"ALTER OPERATOR CLASS"})," changes the definition of an operator class."]}),"\n",(0,n.jsxs)(s.p,{children:["You must own the operator class to use ",(0,n.jsx)(s.code,{children:"ALTER OPERATOR CLASS"}),". To alter the owner, you must also be a direct or indirect member of the new owning role, and that role must have ",(0,n.jsx)(s.code,{children:"CREATE"})," privilege on the operator class's schema. (These restrictions enforce that altering the owner does not do anything you could not do by dropping and recreating the operator class. However, a superuser can alter ownership of any operator class anyway.)"]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"name"})})}),"\n",(0,n.jsx)(s.p,{children:"The name (optionally schema-qualified) of an existing operator class."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"index_method"})})}),"\n",(0,n.jsx)(s.p,{children:"The name of the index method this operator class is for."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"new_name"})})}),"\n",(0,n.jsx)(s.p,{children:"The new name of the operator class."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"new_owner"})})}),"\n",(0,n.jsx)(s.p,{children:"The new owner of the operator class"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"new_schema"})})}),"\n",(0,n.jsx)(s.p,{children:"The new schema for the operator class."}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:["There is no ",(0,n.jsx)(s.code,{children:"ALTER OPERATOR CLASS"})," statement in the SQL standard."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-operator-class",children:"CREATE OPERATOR CLASS"}),", ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/drop-operator-class",children:"DROP OPERATOR CLASS"}),", ",(0,n.jsx)(s.a,{href:"/zh/docs/sql-stmts/alter-operator-family",children:"ALTER OPERATOR FAMILY"})]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>i,a:()=>a});var n=t(67294);const r={},o=n.createContext(r);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);