"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[6522],{71416:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=t(85893),r=t(11151);const o={title:"DROP OPERATOR CLASS"},i="DROP OPERATOR CLASS",a={id:"sql-stmts/drop-operator-class",title:"DROP OPERATOR CLASS",description:"Removes an operator class.",source:"@site/docs/sql-stmts/drop-operator-class.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-operator-class",permalink:"/docs/sql-stmts/drop-operator-class",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-operator-class.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733293498,formattedLastUpdatedAt:"Dec 4, 2024",frontMatter:{title:"DROP OPERATOR CLASS"},sidebar:"docsbars",previous:{title:"DROP MATERIALIZED VIEW",permalink:"/docs/sql-stmts/drop-materialized-view"},next:{title:"DROP OPERATOR FAMILY",permalink:"/docs/sql-stmts/drop-operator-family"}},l={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"drop-operator-class",children:"DROP OPERATOR CLASS"}),"\n",(0,n.jsx)(s.p,{children:"Removes an operator class."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DROP OPERATOR CLASS [IF EXISTS] <name> USING <index_method> [CASCADE | RESTRICT]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DROP OPERATOR"})," drops an existing operator class. To run this command you must be the owner of the operator class."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DROP OPERATOR CLASS"})," does not drop any of the operators or functions referenced by the class. If there are any indexes depending on the operator class, you will need to specify ",(0,n.jsx)(s.code,{children:"CASCADE"})," for the drop to complete."]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"IF EXISTS"})})}),"\n",(0,n.jsx)(s.p,{children:"Do not throw an error if the operator class does not exist. A notice is issued in this case."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"name"})})}),"\n",(0,n.jsx)(s.p,{children:"The name (optionally schema-qualified) of an existing operator class."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"index_method"})})}),"\n",(0,n.jsx)(s.p,{children:"The name of the index access method the operator class is for."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"CASCADE"})})}),"\n",(0,n.jsx)(s.p,{children:"Automatically drop objects that depend on the operator class (such as indexes), and in turn all objects that depend on those objects."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"RESTRICT"})})}),"\n",(0,n.jsx)(s.p,{children:"Refuse to drop the operator class if any objects depend on it. This is the default."}),"\n",(0,n.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"DROP OPERATOR CLASS"})," will not drop the operator family containing the class, even if there is nothing else left in the family (in particular, in the case where the family was implicitly created by ",(0,n.jsx)(s.code,{children:"CREATE OPERATOR CLASS"}),"). An empty operator family is harmless, but for the sake of tidiness you might wish to remove the family with ",(0,n.jsx)(s.code,{children:"DROP OPERATOR FAMILY"}),"; or perhaps better, use ",(0,n.jsx)(s.code,{children:"DROP OPERATOR FAMILY"})," in the first place."]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Remove the B-tree operator class ",(0,n.jsx)(s.code,{children:"widget_ops"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"DROP OPERATOR CLASS widget_ops USING btree;\n"})}),"\n",(0,n.jsxs)(s.p,{children:["This command will not succeed if there are any existing indexes that use the operator class. Add ",(0,n.jsx)(s.code,{children:"CASCADE"})," to drop such indexes along with the operator class."]}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:["There is no ",(0,n.jsx)(s.code,{children:"DROP OPERATOR CLASS"})," statement in the SQL standard."]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/sql-stmts/alter-operator-class",children:"ALTER OPERATOR CLASS"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/create-operator-class",children:"CREATE OPERATOR CLASS"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/drop-operator-family",children:"DROP OPERATOR FAMILY"})]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>a,a:()=>i});var n=t(67294);const r={},o=n.createContext(r);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);