"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7088],{51002:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=n(85893),r=n(11151);const i={title:"createdb"},d="createdb",c={id:"sys-utilities/createdb",title:"createdb",description:"Creates a new database.",source:"@site/docs/sys-utilities/createdb.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/createdb",permalink:"/docs/sys-utilities/createdb",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/createdb.md",tags:[],version:"current",lastUpdatedBy:"Alwin",lastUpdatedAt:1744282709,formattedLastUpdatedAt:"Apr 10, 2025",frontMatter:{title:"createdb"},sidebar:"docsbars",previous:{title:"createuser",permalink:"/docs/sys-utilities/createuser"},next:{title:"gpaddmirrors",permalink:"/docs/sys-utilities/gpaddmirrors"}},o={},a=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Connection options",id:"connection-options",level:3},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"createdb",children:"createdb"}),"\n",(0,t.jsx)(s.p,{children:"Creates a new database."}),"\n",(0,t.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"createdb [<connection-option> ...] [<option> ...] [<dbname> ['<description>']]\n\ncreatedb -? | --help\n\ncreatedb -V | --version\n"})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"createdb"})," creates a new database in a Apache Cloudberry system."]}),"\n",(0,t.jsxs)(s.p,{children:["Normally, the database user who runs this command becomes the owner of the new database. However, a different owner can be specified via the ",(0,t.jsx)(s.code,{children:"-O"})," option, if the executing user has appropriate privileges."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"createdb"})," is a wrapper around the SQL command ",(0,t.jsx)(s.a,{href:"/docs/sql-stmts/create-database",children:(0,t.jsx)(s.code,{children:"CREATE DATABASE"})}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"dbname"})})}),"\n",(0,t.jsxs)(s.p,{children:["The name of the database to be created. The name must be unique among all other databases in the Apache Cloudberry system. If not specified, reads from the environment variable ",(0,t.jsx)(s.code,{children:"PGDATABASE"}),", then ",(0,t.jsx)(s.code,{children:"PGUSER"})," or defaults to the current system user."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"description"})})}),"\n",(0,t.jsx)(s.p,{children:"A comment to be associated with the newly created database. Descriptions containing white space must be enclosed in quotes."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-D tablespace | --tablespace=TABLESPACE"})})}),"\n",(0,t.jsx)(s.p,{children:"Specifies the default tablespace for the database. (This name is processed as a double-quoted identifier.)"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-e | --echo"})})}),"\n",(0,t.jsxs)(s.p,{children:["Echo the commands that ",(0,t.jsx)(s.code,{children:"createdb"})," generates and sends to the server."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-E encoding | --encoding=ENCODING"})})}),"\n",(0,t.jsxs)(s.p,{children:["Character set encoding to use in the new database. Specify a string constant (such as ",(0,t.jsx)(s.code,{children:"'UTF8'"}),"), an integer encoding number, or ",(0,t.jsx)(s.code,{children:"DEFAULT"})," to use the default encoding."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-l locale | --locale=LOCALE"})})}),"\n",(0,t.jsxs)(s.p,{children:["Specifies the locale to be used in this database. This is equivalent to specifying both ",(0,t.jsx)(s.code,{children:"--lc-collate"})," and ",(0,t.jsx)(s.code,{children:"--lc-ctype"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--lc-collate=LOCALE"})})}),"\n",(0,t.jsxs)(s.p,{children:["Specifies the ",(0,t.jsx)(s.code,{children:"LC_COLLATE"})," setting to be used in this database."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--lc-ctype=LOCALE"})})}),"\n",(0,t.jsxs)(s.p,{children:["Specifies the ",(0,t.jsx)(s.code,{children:"LC_CTYPE"})," setting to be used in this database."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-O owner | --owner=OWNER"})})}),"\n",(0,t.jsx)(s.p,{children:"The name of the database user who will own the new database. Defaults to the user running this command. (This name is processed as a double-quoted identifier.)"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-T template | --template=TEMPLATE"})})}),"\n",(0,t.jsxs)(s.p,{children:["The name of the template from which to create the new database. Defaults to ",(0,t.jsx)(s.code,{children:"template1"}),". (This name is processed as a double-quoted identifier.)"]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-V | --version"})})}),"\n",(0,t.jsxs)(s.p,{children:["Print the ",(0,t.jsx)(s.code,{children:"createdb"})," version and exit."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-? | --help"})})}),"\n",(0,t.jsxs)(s.p,{children:["Show help about ",(0,t.jsx)(s.code,{children:"createdb"})," command line arguments, and exit."]}),"\n",(0,t.jsxs)(s.p,{children:["The options ",(0,t.jsx)(s.code,{children:"-D"}),", ",(0,t.jsx)(s.code,{children:"-l"}),", ",(0,t.jsx)(s.code,{children:"-E"}),", ",(0,t.jsx)(s.code,{children:"-O"}),", and ",(0,t.jsx)(s.code,{children:"-T"})," correspond to options of the underlying SQL command ",(0,t.jsx)(s.code,{children:"CREATE DATABASE"}),"; see ",(0,t.jsx)(s.a,{href:"/docs/sql-stmts/create-database",children:(0,t.jsx)(s.code,{children:"CREATE DATABASE"})})," for details."]}),"\n",(0,t.jsx)(s.h3,{id:"connection-options",children:"Connection options"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-h host | --host=HOSTNAME"})})}),"\n",(0,t.jsxs)(s.p,{children:["The host name of the machine on which the Apache Cloudberry coordinator server is running. If not specified, reads from the environment variable ",(0,t.jsx)(s.code,{children:"PGHOST"})," or defaults to localhost."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-p port | --port=PORT"})})}),"\n",(0,t.jsxs)(s.p,{children:["The TCP port on which the Apache Cloudberry coordinator server is listening for connections. If not specified, reads from the environment variable ",(0,t.jsx)(s.code,{children:"PGPORT"})," or defaults to 5432."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-U username | --username=USERNAME"})})}),"\n",(0,t.jsxs)(s.p,{children:["The database role name to connect as. If not specified, reads from the environment variable ",(0,t.jsx)(s.code,{children:"PGUSER"})," or defaults to the current system role name."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-w | --no-password"})})}),"\n",(0,t.jsxs)(s.p,{children:["Never issue a password prompt. If the server requires password authentication and a password is not available by other means such as a ",(0,t.jsx)(s.code,{children:".pgpass"})," file, the connection attempt will fail. This option can be useful in batch jobs and scripts where no user is present to enter a password."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"-W | --password"})})}),"\n",(0,t.jsx)(s.p,{children:"Force a password prompt."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"--maintenance-db=DBNAME"})})}),"\n",(0,t.jsxs)(s.p,{children:["Specifies the name of the database to connect to when creating the new database. If not specified, the ",(0,t.jsx)(s.code,{children:"postgres"})," database will be used; if that does not exist (or if it is the name of the new database being created), ",(0,t.jsx)(s.code,{children:"template1"})," will be used."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s.p,{children:["To create the database ",(0,t.jsx)(s.code,{children:"test"})," using the default options:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"createdb test\n"})}),"\n",(0,t.jsxs)(s.p,{children:["To create the database ",(0,t.jsx)(s.code,{children:"demo"})," using the Apache Cloudberry coordinator on host ",(0,t.jsx)(s.code,{children:"gpcoord"}),", port ",(0,t.jsx)(s.code,{children:"54321"}),", using the ",(0,t.jsx)(s.code,{children:"LATIN1"})," encoding scheme:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-shell",children:"createdb -p 54321 -h gpcoord -E LATIN1 demo\n"})}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/sql-stmts/create-database",children:(0,t.jsx)(s.code,{children:"CREATE DATABASE"})}),", ",(0,t.jsx)(s.a,{href:"/docs/sys-utilities/dropdb",children:"dropdb"})]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>d});var t=n(67294);const r={},i=t.createContext(r);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);