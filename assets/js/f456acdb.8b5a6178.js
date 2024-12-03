"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8122],{75714:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>i});var n=t(85893),o=t(11151);const r={title:"DROP OWNED"},a="DROP OWNED",d={id:"sql-stmts/drop-owned",title:"DROP OWNED",description:"Removes database objects owned by a database role.",source:"@site/docs/sql-stmts/drop-owned.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-owned",permalink:"/docs/sql-stmts/drop-owned",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-owned.md",tags:[],version:"current",lastUpdatedBy:"Ed Espino",lastUpdatedAt:1733247584,formattedLastUpdatedAt:"Dec 3, 2024",frontMatter:{title:"DROP OWNED"},sidebar:"docsbars",previous:{title:"DROP OPERATOR",permalink:"/docs/sql-stmts/drop-operator"},next:{title:"DROP POLICY",permalink:"/docs/sql-stmts/drop-policy"}},l={},i=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"drop-owned",children:"DROP OWNED"}),"\n",(0,n.jsx)(s.p,{children:"Removes database objects owned by a database role."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DROP OWNED BY { <name> | CURRENT_USER | SESSION_USER } [, ...] [CASCADE | RESTRICT]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DROP OWNED"})," drops all of the objects in the current database that are owned by one of the specified roles. Any privileges granted to the given roles on objects in the current database or on shared objects (databases, tablespaces) will also be revoked."]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"name"})})}),"\n",(0,n.jsx)(s.p,{children:"The name of a role whose objects will be dropped, and whose privileges will be revoked."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CASCADE"})})}),"\n",(0,n.jsx)(s.p,{children:"Automatically drop objects that depend on the affected objects, and in turn all objects that depend on those objects."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"RESTRICT"})})}),"\n",(0,n.jsx)(s.p,{children:"Refuse to drop the objects owned by a role if any other database objects depend on one of the affected objects. This is the default."}),"\n",(0,n.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DROP OWNED"})," is often used to prepare for the removal of one or more roles. Because ",(0,n.jsx)(s.code,{children:"DROP OWNED"})," only affects the objects in the current database, it is usually necessary to run this command in each database that contains objects owned by a role that is to be removed."]}),"\n",(0,n.jsxs)(s.p,{children:["Using the ",(0,n.jsx)(s.code,{children:"CASCADE"})," option may make the command recurse to objects owned by other users."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/reassign-owned",children:"REASSIGN OWNED"})," command is an alternative that reassigns the ownership of all the database objects owned by one or more roles. However, ",(0,n.jsx)(s.code,{children:"REASSIGN OWNED"})," does not deal with privileges for other objects."]}),"\n",(0,n.jsx)(s.p,{children:"Databases and tablespaces owned by the role(s) will not be removed."}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Remove any database objects owned by the role named ",(0,n.jsx)(s.code,{children:"sally"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DROP OWNED BY sally;\n"})}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"DROP OWNED"})," command is a Cloudberry Database extension."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/sql-stmts/reassign-owned",children:"REASSIGN OWNED"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/drop-role",children:"DROP ROLE"})]})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>d,a:()=>a});var n=t(67294);const o={},r=n.createContext(o);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);