"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5409],{8489:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=s(85893),a=s(11151);const o={title:"CREATE OPERATOR FAMILY"},n="CREATE OPERATOR FAMILY",i={id:"sql-stmts/create-operator-family",title:"CREATE OPERATOR FAMILY",description:"Defines a new operator family.",source:"@site/docs/sql-stmts/create-operator-family.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-operator-family",permalink:"/docs/sql-stmts/create-operator-family",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-operator-family.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733293498,formattedLastUpdatedAt:"Dec 4, 2024",frontMatter:{title:"CREATE OPERATOR FAMILY"},sidebar:"docsbars",previous:{title:"CREATE OPERATOR CLASS",permalink:"/docs/sql-stmts/create-operator-class"},next:{title:"CREATE OPERATOR",permalink:"/docs/sql-stmts/create-operator"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"create-operator-family",children:"CREATE OPERATOR FAMILY"}),"\n",(0,r.jsx)(t.p,{children:"Defines a new operator family."}),"\n",(0,r.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"CREATE OPERATOR FAMILY <name> \xa0USING <index_method>  \n"})}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"CREATE OPERATOR FAMILY"}),' creates a new operator family. An operator family defines a collection of related operator classes, and perhaps some additional operators and support functions that are compatible with these operator classes but not essential for the functioning of any individual index. (Operators and functions that are essential to indexes should be grouped within the relevant operator class, rather than being "loose" in the operator family. Typically, single-data-type operators are bound to operator classes, while cross-data-type operators can be loose in an operator family containing operator classes for both data types.)']}),"\n",(0,r.jsxs)(t.p,{children:["The new operator family is initially empty. It should be populated by issuing subsequent ",(0,r.jsx)(t.code,{children:"CREATE OPERATOR CLASS"})," commands to add contained operator classes, and optionally ",(0,r.jsx)(t.code,{children:"ALTER OPERATOR FAMILY"}),' commands to add "loose" operators and their corresponding support functions.']}),"\n",(0,r.jsx)(t.p,{children:"If a schema name is given then the operator family is created in the specified schema. Otherwise it is created in the current schema. Two operator families in the same schema can have the same name only if they are for different index methods."}),"\n",(0,r.jsx)(t.p,{children:"The user who defines an operator family becomes its owner. Presently, the creating user must be a superuser. (This restriction is made because an erroneous operator family definition could confuse or even crash the server.)"}),"\n",(0,r.jsxs)(t.p,{children:["Refer to ",(0,r.jsx)(t.a,{href:"https://www.postgresql.org/docs/12/xindex.html",children:"Interfacing Extensions to Indexes"})," in the PostgreSQL documentation for more information."]}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"name"})})}),"\n",(0,r.jsx)(t.p,{children:"The (optionally schema-qualified) name of the operator family to be created."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"index_method"})})}),"\n",(0,r.jsx)(t.p,{children:"The name of the index method this operator family is for."}),"\n",(0,r.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"CREATE OPERATOR FAMILY"})," is a Cloudberry Database extension. There is no ",(0,r.jsx)(t.code,{children:"CREATE OPERATOR FAMILY"})," statement in the SQL standard."]}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/sql-stmts/alter-operator-family",children:"ALTER OPERATOR FAMILY"}),", ",(0,r.jsx)(t.a,{href:"/docs/sql-stmts/drop-operator-family",children:"DROP OPERATOR FAMILY"}),", ",(0,r.jsx)(t.a,{href:"/docs/sql-stmts/alter-operator-class",children:"ALTER OPERATOR CLASS"}),", ",(0,r.jsx)(t.a,{href:"/docs/sql-stmts/create-operator-class",children:"CREATE OPERATOR CLASS"}),", ",(0,r.jsx)(t.a,{href:"/docs/sql-stmts/drop-operator-class",children:"DROP OPERATOR CLASS"})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>i,a:()=>n});var r=s(67294);const a={},o=r.createContext(a);function n(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);