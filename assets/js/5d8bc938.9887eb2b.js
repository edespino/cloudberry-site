"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[3350],{28033:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var a=s(85893),n=s(11151);const r={title:"CREATE PROTOCOL"},o="CREATE PROTOCOL",c={id:"sql-stmts/create-protocol",title:"CREATE PROTOCOL",description:"Registers a custom data access protocol that can be specified when defining a Cloudberry Database external table.",source:"@site/docs/sql-stmts/create-protocol.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-protocol",permalink:"/docs/sql-stmts/create-protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-protocol.md",tags:[],version:"current",lastUpdatedBy:"Ed Espino",lastUpdatedAt:1733247584,formattedLastUpdatedAt:"Dec 3, 2024",frontMatter:{title:"CREATE PROTOCOL"},sidebar:"docsbars",previous:{title:"CREATE PROCEDURE",permalink:"/docs/sql-stmts/create-procedure"},next:{title:"CREATE RESOURCE GROUP",permalink:"/docs/sql-stmts/create-resource-group"}},l={},i=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"create-protocol",children:"CREATE PROTOCOL"}),"\n",(0,a.jsx)(t.p,{children:"Registers a custom data access protocol that can be specified when defining a Cloudberry Database external table."}),"\n",(0,a.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"CREATE [TRUSTED] PROTOCOL <name> (\n   [readfunc='<read_call_handler>'] [, writefunc='<write_call_handler>']\n   [, validatorfunc='<validate_handler>' ])\n"})}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"CREATE PROTOCOL"})," associates a data access protocol name with call handlers that are responsible for reading from and writing data to an external data source. You must be a superuser to create a protocol."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"CREATE PROTOCOL"})," command must specify either a read call handler or a write call handler. The call handlers specified in the ",(0,a.jsx)(t.code,{children:"CREATE PROTOCOL"})," command must be defined in the database."]}),"\n",(0,a.jsxs)(t.p,{children:["The protocol name can be specified in a ",(0,a.jsx)(t.code,{children:"CREATE EXTERNAL TABLE"})," command."]}),"\n",(0,a.jsx)(t.p,{children:"For information about creating and enabling a custom data access protocol, refer to the Example Custom Data Access Protocol documentation."}),"\n",(0,a.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"TRUSTED"})})}),"\n",(0,a.jsxs)(t.p,{children:["If not specified, only superusers and the protocol owner can create external tables using the protocol. If specified, superusers and the protocol owner can ",(0,a.jsx)(t.code,{children:"GRANT"})," permissions on the protocol to other database roles."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"name"})})}),"\n",(0,a.jsx)(t.p,{children:"The name of the data access protocol. The protocol name is case sensitive. The name must be unique among the protocols in the database."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"readfunc= 'read_call_handler'"})})}),"\n",(0,a.jsx)(t.p,{children:"The name of a previously registered function that Cloudberry Database calls to read data from an external data source. The command must specify either a read call handler or a write call handler."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"writefunc= 'write_call_handler'"})})}),"\n",(0,a.jsx)(t.p,{children:"The name of a previously registered function that Cloudberry Database calls to write data to an external data source. The command must specify either a read call handler or a write call handler."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:(0,a.jsx)(t.code,{children:"validatorfunc='validate_handler'"})})}),"\n",(0,a.jsxs)(t.p,{children:["An optional validator function that validates the URL specified in the ",(0,a.jsx)(t.code,{children:"CREATE EXTERNAL TABLE"})," command."]}),"\n",(0,a.jsx)(t.h2,{id:"notes",children:"Notes"}),"\n",(0,a.jsxs)(t.p,{children:["Cloudberry Database handles external tables of type ",(0,a.jsx)(t.code,{children:"file"}),", ",(0,a.jsx)(t.code,{children:"gpfdist"}),", and ",(0,a.jsx)(t.code,{children:"gpfdists"})," internally."]}),"\n",(0,a.jsxs)(t.p,{children:["Any shared library that implements a data access protocol must be located in the same location on all Cloudberry Database segment hosts. For example, the shared library can be in a location specified by the operating system environment variable ",(0,a.jsx)(t.code,{children:"LD_LIBRARY_PATH"})," on all hosts. You can also specify the location when you define the handler function. For example, when you define the ",(0,a.jsx)(t.code,{children:"s3"})," protocol in the ",(0,a.jsx)(t.code,{children:"CREATE PROTOCOL"})," command, you specify ",(0,a.jsx)(t.code,{children:"$libdir/gps3ext.so"})," as the location of the shared object, where ",(0,a.jsx)(t.code,{children:"$libdir"})," is located at ",(0,a.jsx)(t.code,{children:"$GPHOME/lib"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"CREATE PROTOCOL"})," is a Cloudberry Database extension."]}),"\n",(0,a.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/docs/sql-stmts/alter-protocol",children:"ALTER PROTOCOL"}),", ",(0,a.jsx)(t.a,{href:"/docs/sql-stmts/create-external-table",children:"CREATE EXTERNAL TABLE"}),", ",(0,a.jsx)(t.a,{href:"/docs/sql-stmts/drop-protocol",children:"DROP PROTOCOL"}),", ",(0,a.jsx)(t.a,{href:"/docs/sql-stmts/grant",children:"GRANT"})]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>c,a:()=>o});var a=s(67294);const n={},r=a.createContext(n);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);