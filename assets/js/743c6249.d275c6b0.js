"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5600],{63044:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>i});var n=t(85893),a=t(11151);const r={title:"CREATE TABLE AS"},l="CREATE TABLE AS",c={id:"sql-stmts/create-table-as",title:"CREATE TABLE AS",description:"Defines a new table from the results of a query.",source:"@site/docs/sql-stmts/create-table-as.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-table-as",permalink:"/docs/sql-stmts/create-table-as",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-table-as.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1733904867,formattedLastUpdatedAt:"Dec 11, 2024",frontMatter:{title:"CREATE TABLE AS"},sidebar:"docsbars",previous:{title:"CREATE STATISTICS",permalink:"/docs/sql-stmts/create-statistics"},next:{title:"CREATE TABLE",permalink:"/docs/sql-stmts/create-table"}},o={},i=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"create-table-as",children:"CREATE TABLE AS"}),"\n",(0,n.jsx)(s.p,{children:"Defines a new table from the results of a query."}),"\n",(0,n.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE [ [ GLOBAL | LOCAL ] { TEMPORARY | TEMP } | UNLOGGED ] TABLE [ IF NOT EXISTS ] <table_name>\n        [ (<column_name> [, ...] ) ]\n        [ USING <access_method> ]\n        [ WITH ( <storage_parameter> [= <value>] [, ... ] ) | WITHOUT OIDS ]\n        [ ON COMMIT { PRESERVE ROWS | DELETE ROWS | DROP } ]\n        [ TABLESPACE <tablespace_name> ]\n        AS <query>\n        [ WITH [ NO ] DATA ]\n        [ DISTRIBUTED BY ( <column> [<opclass>] [, ... ] ) \n           | DISTRIBUTED RANDOMLY\n           | DISTRIBUTED REPLICATED ]\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"CREATE TABLE AS"})," creates a table and fills it with data computed by a ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/select",children:"SELECT"})," command. The table columns have the names and data types associated with the output columns of the ",(0,n.jsx)(s.code,{children:"SELECT"}),", however you can override the column names by giving an explicit list of new column names."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"CREATE TABLE AS"})," creates a new table and evaluates the query just once to fill the new table initially. The new table will not track subsequent changes to the source tables of the query."]}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"GLOBAL | LOCAL"})})}),"\n",(0,n.jsxs)(s.p,{children:["Ignored for compatibility. These keywords are deprecated; refer to ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/create-table",children:"CREATE TABLE"})," for details."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"TEMPORARY | TEMP"})})}),"\n",(0,n.jsxs)(s.p,{children:["If specified, the new table is created as a temporary table. Refer to ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/create-table",children:"CREATE TABLE"})," for details."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"UNLOGGED"})})}),"\n",(0,n.jsxs)(s.p,{children:["If specified, the table is created as an unlogged table. Refer to ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/create-table",children:"CREATE TABLE"})," for details."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"IF NOT EXISTS"})})}),"\n",(0,n.jsx)(s.p,{children:"Do not throw an error if a relation with the same name already exists; simply issue a notice and leave the table unmodified."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"table_name"})})}),"\n",(0,n.jsx)(s.p,{children:"The name (optionally schema-qualified) of the new table to be created."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"column_name"})})}),"\n",(0,n.jsx)(s.p,{children:"The name of a column in the new table. If column names are not provided, they are taken from the output column names of the query."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"USING access_method"})})}),"\n",(0,n.jsxs)(s.p,{children:["The optional ",(0,n.jsx)(s.code,{children:"USING"})," clause specifies the table access method to use to store the contents for the new table you are creating; the method must be an access method of type ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/select#the-table-command",children:"TABLE"}),". Set to ",(0,n.jsx)(s.code,{children:"heap"})," to access the table as a heap-storage table, ",(0,n.jsx)(s.code,{children:"ao_row"})," to access the table as an append-optimized table with row-oriented storage (AO), or ",(0,n.jsx)(s.code,{children:"ao_column"})," to access the table as an append-optimized table with column-oriented storage (AO/CO). The default access method is determined by the value of the default_table_access_method server configuration parameter."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Note:"})}),"\n",(0,n.jsxs)(s.p,{children:["Although you can specify the table's access method using ",(0,n.jsx)(s.code,{children:"WITH (appendoptimized=true|false, orientation=row|column)"}),". We recommend that you use ",(0,n.jsx)(s.code,{children:"USING <access_method>"})," instead."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"WITH ( storage_parameter=value )"})})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"WITH"})," clause specifies optional storage parameters for the new table. Refer to the ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/create-table#storage-parameters",children:"Storage Parameters"})," section on the ",(0,n.jsx)(s.code,{children:"CREATE TABLE"})," reference page for more information."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"ON COMMIT"})})}),"\n",(0,n.jsxs)(s.p,{children:["The behavior of temporary tables at the end of a transaction block can be controlled using ",(0,n.jsx)(s.code,{children:"ON COMMIT"}),". The three options are:"]}),"\n",(0,n.jsx)(s.p,{children:"PRESERVE ROWS \u2014 Cloudberry Database takes no special action at the ends of transactions for temporary tables. This is the default behavior."}),"\n",(0,n.jsxs)(s.p,{children:["DELETE ROWS \u2014 Cloudberry Database deletes all rows in the temporary table at the end of each transaction block. Essentially, an automatic ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/truncate",children:"TRUNCATE"})," is done at each commit."]}),"\n",(0,n.jsx)(s.p,{children:"DROP \u2014 Cloudberry Database drops the temporary table at the end of the current transaction block."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"TABLESPACE tablespace_name"})})}),"\n",(0,n.jsxs)(s.p,{children:["The tablespace_name parameter is the name of the tablespace in which the new table is to be created. If not specified, the database's ",(0,n.jsx)(s.code,{children:"default_tablespace"})," is used, or ",(0,n.jsx)(s.code,{children:"temp_tablespaces"})," if the table is temporary."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"AS query"})})}),"\n",(0,n.jsxs)(s.p,{children:["A ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/select",children:"SELECT"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/select#the-table-command",children:"TABLE"}),", or ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/values",children:"VALUES"})," command, or an ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/execute",children:"EXECUTE"})," command that runs a prepared ",(0,n.jsx)(s.code,{children:"SELECT"}),", ",(0,n.jsx)(s.code,{children:"TABLE"}),", or ",(0,n.jsx)(s.code,{children:"VALUES"})," query."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"DISTRIBUTED BY ( column [opclass] [, ... ] )"})}),(0,n.jsx)("br",{}),"\n",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"DISTRIBUTED RANDOMLY"})}),(0,n.jsx)("br",{}),"\n",(0,n.jsx)(s.strong,{children:(0,n.jsx)(s.code,{children:"DISTRIBUTED REPLICATED"})})]}),"\n",(0,n.jsxs)(s.p,{children:["Used to declare the Cloudberry Database distribution policy for the table. Refer to ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/create-table",children:"CREATE TABLE"})," for details."]}),"\n",(0,n.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,n.jsxs)(s.p,{children:["This command is functionally similar to ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/select-into",children:"SELECT INTO"}),", but it is preferred since it is less likely to be confused with other uses of the ",(0,n.jsx)(s.code,{children:"SELECT INTO"})," syntax. Furthermore, ",(0,n.jsx)(s.code,{children:"CREATE TABLE AS"})," offers a superset of the functionality offered by ",(0,n.jsx)(s.code,{children:"SELECT INTO"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"CREATE TABLE AS"})," can be used for fast data loading from external table data sources. See ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/create-external-table",children:"CREATE EXTERNAL TABLE"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(s.p,{children:["Create a new table ",(0,n.jsx)(s.code,{children:"films_recent"})," consisting of only recent entries from the table ",(0,n.jsx)(s.code,{children:"films"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE films_recent AS\n  SELECT * FROM films WHERE date_prod >= '2020-01-01';\n"})}),"\n",(0,n.jsxs)(s.p,{children:["To copy a table completely, you can also use the short form by specifying the ",(0,n.jsx)(s.code,{children:"TABLE"})," command:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"CREATE TABLE films2 AS\n  TABLE films;\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Create a new temporary table ",(0,n.jsx)(s.code,{children:"films_recent"}),", consisting only of recent entries from the table ",(0,n.jsx)(s.code,{children:"films"}),", using a prepared statement. The new table will be dropped at commit:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-sql",children:"PREPARE recentfilms(date) AS\n  SELECT * FROM films WHERE date_prod > $1;\nCREATE TEMP TABLE films_recent ON COMMIT DROP AS \n  EXECUTE recentfilms('2020-01-01');\n"})}),"\n",(0,n.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"CREATE TABLE AS"})," conforms to the SQL standard, with the following exceptions:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The standard requires parentheses around the subquery clause; in Cloudberry Database, these parentheses are optional."}),"\n",(0,n.jsxs)(s.li,{children:["In the standard, the ",(0,n.jsx)(s.code,{children:"WITH [NO] DATA"})," clause is required, in Cloudberry Database it is optional."]}),"\n",(0,n.jsxs)(s.li,{children:["Cloudberry Database handles temporary tables differently from the standard; see ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/create-table",children:"CREATE TABLE"})," for details."]}),"\n",(0,n.jsxs)(s.li,{children:["The ",(0,n.jsx)(s.code,{children:"WITH"})," clause is a Cloudberry Database extension; storage parameters are not part of the standard."]}),"\n",(0,n.jsxs)(s.li,{children:["The Cloudberry Database concept of tablespaces is not part of the standard. The ",(0,n.jsx)(s.code,{children:"TABLESPACE"})," clause is an extension."]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/sql-stmts/create-external-table",children:"CREATE EXTERNAL TABLE"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/create-materialized-view",children:"CREATE MATERIALIZED VIEW"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/create-table",children:"CREATE TABLE"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/execute",children:"EXECUTE"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/select",children:"SELECT"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/select-into",children:"SELECT INTO"}),", ",(0,n.jsx)(s.a,{href:"/docs/sql-stmts/values",children:"VALUES"})]})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>l});var n=t(67294);const a={},r=n.createContext(a);function l(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);