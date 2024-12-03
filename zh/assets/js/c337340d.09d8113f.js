"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8392],{56032:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=s(85893),r=s(11151);const i={title:"DROP TEXT SEARCH TEMPLATE"},a="DROP TEXT SEARCH TEMPLATE",c={id:"sql-stmts/drop-text-search-template",title:"DROP TEXT SEARCH TEMPLATE",description:"Description",source:"@site/docs/sql-stmts/drop-text-search-template.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/drop-text-search-template",permalink:"/zh/docs/sql-stmts/drop-text-search-template",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/drop-text-search-template.md",tags:[],version:"current",lastUpdatedBy:"Ed Espino",lastUpdatedAt:1733247584,formattedLastUpdatedAt:"2024\u5e7412\u67083\u65e5",frontMatter:{title:"DROP TEXT SEARCH TEMPLATE"},sidebar:"docsbars",previous:{title:"DROP TEXT SEARCH PARSER",permalink:"/zh/docs/sql-stmts/drop-text-search-parser"},next:{title:"DROP TRANSFORM",permalink:"/zh/docs/sql-stmts/drop-transform"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description-1",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function o(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"drop-text-search-template",children:"DROP TEXT SEARCH TEMPLATE"}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"Removes a text search template."}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DROP TEXT SEARCH TEMPLATE [ IF EXISTS ] <name> [ CASCADE | RESTRICT ]\n"})}),"\n",(0,n.jsx)(t.h2,{id:"description-1",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"DROP TEXT SEARCH TEMPLATE"})," drops an existing text search template. You must be a superuser to use this command."]}),"\n",(0,n.jsxs)(t.p,{children:["You must be a superuser to use ",(0,n.jsx)(t.code,{children:"ALTER TEXT SEARCH TEMPLATE"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"IF EXISTS"})})}),"\n",(0,n.jsx)(t.p,{children:"Do not throw an error if the text search template does not exist. Cloudberry Database issues a notice in this case."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"name"})})}),"\n",(0,n.jsx)(t.p,{children:"The name (optionally schema-qualified) of an existing text search template."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"CASCADE"})})}),"\n",(0,n.jsx)(t.p,{children:"Automatically drop objects that depend on the text search template, and in turn all objects that depend on those objects."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"RESTRICT"})})}),"\n",(0,n.jsx)(t.p,{children:"Refuse to drop the text search template if any objects depend on it. This is the default."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(t.p,{children:["Remove the text search template ",(0,n.jsx)(t.code,{children:"thesaurus"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"DROP TEXT SEARCH TEMPLATE thesaurus;\n"})}),"\n",(0,n.jsxs)(t.p,{children:["This command will not succeed if there are any existing text search dictionaries that use the template. Add ",(0,n.jsx)(t.code,{children:"CASCADE"})," to drop such dictionaries along with the template."]}),"\n",(0,n.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(t.p,{children:["There is no ",(0,n.jsx)(t.code,{children:"DROP TEXT SEARCH TEMPLATE"})," statement in the SQL standard."]}),"\n",(0,n.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/zh/docs/sql-stmts/alter-text-search-template",children:"ALTER TEXT SEARCH TEMPLATE"}),", ",(0,n.jsx)(t.a,{href:"/zh/docs/sql-stmts/create-text-search-template",children:"CREATE TEXT SEARCH TEMPLATE"})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>a});var n=s(67294);const r={},i=n.createContext(r);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);