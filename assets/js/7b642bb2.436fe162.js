"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7618],{52582:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(85893),t=n(11151);const i={title:"ALTER USER MAPPING"},a="ALTER USER MAPPING",o={id:"sql-stmts/alter-user-mapping",title:"ALTER USER MAPPING",description:"Changes the definition of a user mapping for a foreign server.",source:"@site/docs/sql-stmts/alter-user-mapping.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-user-mapping",permalink:"/docs/sql-stmts/alter-user-mapping",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-user-mapping.md",tags:[],version:"current",lastUpdatedBy:"Ed Espino",lastUpdatedAt:1733247584,formattedLastUpdatedAt:"Dec 3, 2024",frontMatter:{title:"ALTER USER MAPPING"},sidebar:"docsbars",previous:{title:"ALTER TYPE",permalink:"/docs/sql-stmts/alter-type"},next:{title:"ALTER USER",permalink:"/docs/sql-stmts/alter-user"}},d={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"alter-user-mapping",children:"ALTER USER MAPPING"}),"\n",(0,r.jsx)(s.p,{children:"Changes the definition of a user mapping for a foreign server."}),"\n",(0,r.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"ALTER USER MAPPING FOR { <user_name> | USER | CURRENT_USER | SESSION_USER | PUBLIC }\n    SERVER <server_name>\n    OPTIONS ( [ ADD | SET | DROP ] <option> ['<value>'] [, ... ] )\n"})}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"ALTER USER MAPPING"})," changes the definition of a user mapping for a foreign server."]}),"\n",(0,r.jsxs)(s.p,{children:["The owner of a foreign server can alter user mappings for that server for any user. Also, a user granted ",(0,r.jsx)(s.code,{children:"USAGE"})," privilege on the server can alter a user mapping for their own user name."]}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"user_name"})})}),"\n",(0,r.jsxs)(s.p,{children:["User name of the mapping. ",(0,r.jsx)(s.code,{children:"CURRENT_USER"})," and ",(0,r.jsx)(s.code,{children:"USER"})," match the name of the current user. ",(0,r.jsx)(s.code,{children:"PUBLIC"})," is used to match all present and future user names in the system."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"server_name"})})}),"\n",(0,r.jsx)(s.p,{children:"Server name of the user mapping."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"OPTIONS ( [ ADD | SET | DROP ] option ['value'] [, ... ] )"})})}),"\n",(0,r.jsxs)(s.p,{children:["Change options for the user mapping. The new options override any previously specified options. ",(0,r.jsx)(s.code,{children:"ADD"}),", ",(0,r.jsx)(s.code,{children:"SET"}),", and ",(0,r.jsx)(s.code,{children:"DROP"})," specify the action to perform. If no operation is explicitly specified, the default operation is ",(0,r.jsx)(s.code,{children:"ADD"}),". Option names must be unique. Cloudberry Database validates names and values using the server's foreign-data wrapper."]}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(s.p,{children:["Change the password for user mapping ",(0,r.jsx)(s.code,{children:"bob"}),", server ",(0,r.jsx)(s.code,{children:"foo"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"ALTER USER MAPPING FOR bob SERVER foo OPTIONS (SET password 'public');\n"})}),"\n",(0,r.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"ALTER USER MAPPING"})," conforms to ISO/IEC 9075-9 (SQL/MED). There is a subtle syntax issue: The standard omits the ",(0,r.jsx)(s.code,{children:"FOR"})," key word. Since both ",(0,r.jsx)(s.code,{children:"CREATE USER MAPPING"})," and ",(0,r.jsx)(s.code,{children:"DROP USER MAPPING"})," use ",(0,r.jsx)(s.code,{children:"FOR"})," in analogous positions, Cloudberry Database diverges from the standard here in the interest of consistency and interoperability."]}),"\n",(0,r.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/sql-stmts/create-user-mapping",children:"CREATE USER MAPPING"}),", ",(0,r.jsx)(s.a,{href:"/docs/sql-stmts/drop-user-mapping",children:"DROP USER MAPPING"})]})]})}function p(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>a});var r=n(67294);const t={},i=r.createContext(t);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);