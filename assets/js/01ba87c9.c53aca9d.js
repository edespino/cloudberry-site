"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2091],{81002:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var n=t(85893),c=t(11151);const r={title:"CREATE ACCESS METHOD"},a="CREATE ACCESS METHOD",d={id:"sql-stmts/create-access-method",title:"CREATE ACCESS METHOD",description:"Defines a new access method.",source:"@site/docs/sql-stmts/create-access-method.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-access-method",permalink:"/docs/sql-stmts/create-access-method",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-access-method.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733293498,formattedLastUpdatedAt:"Dec 4, 2024",frontMatter:{title:"CREATE ACCESS METHOD"},sidebar:"docsbars",previous:{title:"COPY",permalink:"/docs/sql-stmts/copy"},next:{title:"CREATE AGGREGATE",permalink:"/docs/sql-stmts/create-aggregate"}},i={},o=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"create-access-method",children:"CREATE ACCESS METHOD"}),"\n",(0,n.jsx)(s.p,{children:"Defines a new access method."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE ACCESS METHOD <name>\n    TYPE <access_method_type>\n    HANDLER <handler_function>\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"CREATE ACCESS METHOD"})," creates a new access method."]}),"\n",(0,n.jsx)(s.p,{children:"The access method name must be unique within the database."}),"\n",(0,n.jsx)(s.p,{children:"Only superusers can define new access methods."}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"name"})})}),"\n",(0,n.jsx)(s.p,{children:"The name of the access method to create."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"access_method_type"})})}),"\n",(0,n.jsxs)(s.p,{children:["The type of access method to define. Only ",(0,n.jsx)(s.code,{children:"TABLE"})," and ",(0,n.jsx)(s.code,{children:"INDEX"})," types are supported at present."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"handler_function"})})}),"\n",(0,n.jsxs)(s.p,{children:["handler_function is the name (possibly schema-qualified) of a previously registered function that represents the access method. The handler function must be declared to take a single argument of type ",(0,n.jsx)(s.code,{children:"internal"}),", and its return type depends on the type of access method; for ",(0,n.jsx)(s.code,{children:"TABLE"})," access methods, it must be ",(0,n.jsx)(s.code,{children:"table_am_handler"})," and for ",(0,n.jsx)(s.code,{children:"INDEX"})," access methods, it must be ",(0,n.jsx)(s.code,{children:"index_am_handler"}),". The C-level API that the handler function must implement varies depending on the type of access method. The table access method API is described in ",(0,n.jsx)(s.a,{href:"https://www.postgresql.org/docs/12/tableam.html",children:"Table Access Method Interface Definition"})," in the PostgreSQL documentation. The index access method API is described in ",(0,n.jsx)(s.a,{href:"https://www.postgresql.org/docs/12/indexam.html",children:"Index Access Method Interface Definition"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Create an index access method ",(0,n.jsx)(s.code,{children:"heptree"})," with handler function ",(0,n.jsx)(s.code,{children:"heptree_handler"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE ACCESS METHOD heptree TYPE INDEX HANDLER heptree_handler;\n"})}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"CREATE ACCESS METHOD"})," is a Cloudberry Database extension."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/sql-stmts/drop-access-method",children:"DROP ACCESS METHOD"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/create-operator-class",children:"CREATE OPERATOR CLASS"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/create-operator-family",children:"CREATE OPERATOR FAMILY"})]})]})}function h(e={}){const{wrapper:s}={...(0,c.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>d,a:()=>a});var n=t(67294);const c={},r=n.createContext(c);function a(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);