"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5883],{35801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=n(85893),i=n(11151);const r={title:"DROP TEXT SEARCH CONFIGURATION"},o="DROP TEXT SEARCH CONFIGURATION",c={id:"sql-stmts/drop-text-search-configuration",title:"DROP TEXT SEARCH CONFIGURATION",description:"Removes a text search configuration.",source:"@site/docs/sql-stmts/drop-text-search-configuration.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-text-search-configuration",permalink:"/docs/sql-stmts/drop-text-search-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-text-search-configuration.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733293498,formattedLastUpdatedAt:"Dec 4, 2024",frontMatter:{title:"DROP TEXT SEARCH CONFIGURATION"},sidebar:"docsbars",previous:{title:"DROP TABLESPACE",permalink:"/docs/sql-stmts/drop-tablespace"},next:{title:"DROP TEXT SEARCH DICTIONARY",permalink:"/docs/sql-stmts/drop-text-search-dictionary"}},a={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"drop-text-search-configuration",children:"DROP TEXT SEARCH CONFIGURATION"}),"\n",(0,s.jsx)(t.p,{children:"Removes a text search configuration."}),"\n",(0,s.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"DROP TEXT SEARCH CONFIGURATION [ IF EXISTS ] <name> [ CASCADE | RESTRICT ]\n"})}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"DROP TEXT SEARCH CONFIGURATION"})," drops an existing text search configuration. You must be the owner of the configuration to run this command."]}),"\n",(0,s.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"IF EXISTS"})})}),"\n",(0,s.jsx)(t.p,{children:"Do not throw an error if the text search configuration does not exist. Cloudberry Database issues a notice in this case."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"name"})})}),"\n",(0,s.jsx)(t.p,{children:"The name (optionally schema-qualified) of an existing text search configuration."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"CASCADE"})})}),"\n",(0,s.jsx)(t.p,{children:"Automatically drop objects that depend on the text search configuration, and in turn all objects that depend on those objects."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:(0,s.jsx)(t.code,{children:"RESTRICT"})})}),"\n",(0,s.jsx)(t.p,{children:"Refuse to drop the text search configuration if any objects depend on it. This is the default."}),"\n",(0,s.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(t.p,{children:["Remove the text search configuration ",(0,s.jsx)(t.code,{children:"my_english"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"DROP TEXT SEARCH CONFIGURATION my_english;\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This command will not succeed if there are any existing indexes that reference the configuration in ",(0,s.jsx)(t.code,{children:"to_tsvector"})," calls. Add ",(0,s.jsx)(t.code,{children:"CASCADE"})," to drop such indexes along with the text search configuration."]}),"\n",(0,s.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(t.p,{children:["There is no ",(0,s.jsx)(t.code,{children:"DROP TEXT SEARCH CONFIGURATION"})," statement in the SQL standard."]}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/sql-stmts/alter-text-search-configuration",children:"ALTER TEXT SEARCH CONFIGURATION"}),", ",(0,s.jsx)(t.a,{href:"/docs/sql-stmts/create-text-search-configuration",children:"CREATE TEXT SEARCH CONFIGURATION"})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var s=n(67294);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);