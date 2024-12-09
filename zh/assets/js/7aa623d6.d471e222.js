"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[1631],{79973:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(85893),t=n(11151);const i={title:"CREATE SERVER"},o="CREATE SERVER",a={id:"sql-stmts/create-server",title:"CREATE SERVER",description:"Defines a new foreign server.",source:"@site/docs/sql-stmts/create-server.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-server",permalink:"/zh/docs/sql-stmts/create-server",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-server.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733293498,formattedLastUpdatedAt:"2024\u5e7412\u67084\u65e5",frontMatter:{title:"CREATE SERVER"},sidebar:"docsbars",previous:{title:"CREATE SEQUENCE",permalink:"/zh/docs/sql-stmts/create-sequence"},next:{title:"CREATE STATISTICS",permalink:"/zh/docs/sql-stmts/create-statistics"}},c={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"create-server",children:"CREATE SERVER"}),"\n",(0,r.jsx)(s.p,{children:"Defines a new foreign server."}),"\n",(0,r.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE SERVER [ IF NOT EXISTS ] <server_name> [ TYPE '<server_type>' ] [ VERSION '<server_version>' ]\n    FOREIGN DATA WRAPPER <fdw_name>\n    [ OPTIONS ( [ mpp_execute { 'coordinator' | 'any' | 'all segments' } [, ] ]\n                [ num_segments '<num>' [, ] ]\n                [ <option> '<value>' [, ... ]] ) ]\n"})}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"CREATE SERVER"})," defines a new foreign server. The user who defines the server becomes its owner."]}),"\n",(0,r.jsx)(s.p,{children:"A foreign server typically encapsulates connection information that a foreign-data wrapper uses to access an external data source. Additional user-specific connection information may be specified by means of user mappings."}),"\n",(0,r.jsxs)(s.p,{children:["Creating a server requires the ",(0,r.jsx)(s.code,{children:"USAGE"})," privilege on the foreign-data wrapper specified."]}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"IF NOT EXISTS"})})}),"\n",(0,r.jsx)(s.p,{children:"Do not throw an error if a server with the same name already exists. Cloudberry Database issues a notice in this case. Note that there is no guarantee that the existing server is anything like the one that would have been created."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"server_name"})})}),"\n",(0,r.jsx)(s.p,{children:"The name of the foreign server to create. The server name must be unique within the database."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"server_type"})})}),"\n",(0,r.jsx)(s.p,{children:"Optional server type, potentially useful to foreign-data wrappers."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"server_version"})})}),"\n",(0,r.jsx)(s.p,{children:"Optional server version, potentially useful to foreign-data wrappers."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"fdw_name"})})}),"\n",(0,r.jsx)(s.p,{children:"Name of the foreign-data wrapper that manages the server."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"OPTIONS ( option 'value' [, ... ] )"})})}),"\n",(0,r.jsx)(s.p,{children:"The options for the new foreign server. The options typically define the connection details of the server, but the actual names and values are dependent upon the server's foreign-data wrapper."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"mpp_execute { 'coordinator' | 'any' | 'all segments' }"})})}),"\n",(0,r.jsx)(s.p,{children:"A Cloudberry Database-specific option that identifies the host from which the foreign-data wrapper reads or writes data:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"coordinator"})," (the default)\u2014Read or write data from the coordinator host."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"any"}),"\u2014Read data from either the coordinator host or any one segment, depending on which path costs less."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"all segments"}),"\u2014Read or write data from all segments. To support this option value, the foreign-data wrapper should have a policy that matches the segments to data."]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note"})," Cloudberry Database supports parallel writes to foreign tables only when you set ",(0,r.jsx)(s.code,{children:"mpp_execute 'all segments'"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Support for the foreign server ",(0,r.jsx)(s.code,{children:"mpp_execute"})," option, and the specific modes, is foreign-data wrapper-specific."]}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"mpp_execute"})," option can be specified in multiple commands: ",(0,r.jsx)(s.code,{children:"CREATE FOREIGN TABLE"}),", ",(0,r.jsx)(s.code,{children:"CREATE SERVER"}),", and ",(0,r.jsx)(s.code,{children:"CREATE FOREIGN DATA WRAPPER"}),". The foreign table setting takes precedence over the foreign server setting, followed by the foreign-data wrapper setting."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.code,{children:"num_segments 'num'"})})}),"\n",(0,r.jsxs)(s.p,{children:["When ",(0,r.jsx)(s.code,{children:"mpp_execute"})," is set to ",(0,r.jsx)(s.code,{children:"'all segments'"}),", the Cloudberry Database-specific ",(0,r.jsx)(s.code,{children:"num_segments"})," option identifies the number of query executors that Cloudberry Database spawns on the source Cloudberry Database cluster. If you do not provide a value, num defaults to the number of segments in the source cluster."]}),"\n",(0,r.jsxs)(s.p,{children:["Support for the foreign server ",(0,r.jsx)(s.code,{children:"num_segments"})," option is foreign-data wrapper-specific."]}),"\n",(0,r.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(s.p,{children:["When using the dblink module (see dblink), you can use the foreign server name as an argument of the ",(0,r.jsx)(s.code,{children:"dblink_connect()"})," function to provide the connection parameters. You must have the ",(0,r.jsx)(s.code,{children:"USAGE"})," privilege on the foreign server to use it in this manner."]}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(s.p,{children:["Create a foreign server named ",(0,r.jsx)(s.code,{children:"myserver"})," that uses a foreign-data wrapper named ",(0,r.jsx)(s.code,{children:"gpfdw1"})," and includes connection options:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sql",children:"CREATE SERVER myserver FOREIGN DATA WRAPPER gpfdw1 \n    OPTIONS (host 'foo', dbname 'foodb', port '5432');\n"})}),"\n",(0,r.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"CREATE SERVER"})," conforms to ISO/IEC 9075-9 (SQL/MED)."]}),"\n",(0,r.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/alter-server",children:"ALTER SERVER"}),", ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/drop-server",children:"DROP SERVER"}),", ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-foreign-data-wrapper",children:"CREATE FOREIGN DATA WRAPPER"}),", ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-foreign-table",children:"CREATE FOREIGN TABLE"}),", ",(0,r.jsx)(s.a,{href:"/zh/docs/sql-stmts/create-user-mapping",children:"CREATE USER MAPPING"})]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var r=n(67294);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);