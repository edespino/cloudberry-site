"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5005],{95322:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=t(85893),l=t(11151);const a={title:"ALTER EXTERNAL TABLE"},r="ALTER EXTERNAL TABLE",i={id:"sql-stmts/alter-external-table",title:"ALTER EXTERNAL TABLE",description:"Changes the definition of an external table.",source:"@site/docs/sql-stmts/alter-external-table.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-external-table",permalink:"/zh/docs/sql-stmts/alter-external-table",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-external-table.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1740362944,formattedLastUpdatedAt:"2025\u5e742\u670824\u65e5",frontMatter:{title:"ALTER EXTERNAL TABLE"},sidebar:"docsbars",previous:{title:"ALTER EXTENSION",permalink:"/zh/docs/sql-stmts/alter-extension"},next:{title:"ALTER FOREIGN DATA WRAPPER",permalink:"/zh/docs/sql-stmts/alter-foreign-data-wrapper"}},o={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"alter-external-table",children:"ALTER EXTERNAL TABLE"}),"\n",(0,s.jsx)(n.p,{children:"Changes the definition of an external table."}),"\n",(0,s.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER EXTERNAL TABLE <name> <action> [, ... ]\n"})}),"\n",(0,s.jsx)(n.p,{children:"where action is one of:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"\xa0\xa0ADD [COLUMN] <new_column> <type>\n\xa0\xa0DROP [COLUMN] <column> [RESTRICT|CASCADE]\n\xa0\xa0ALTER [COLUMN] <column> TYPE <type>\n\xa0\xa0OWNER TO <new_owner>\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ALTER EXTERNAL TABLE"})," changes the definition of an existing external table. These are the supported ",(0,s.jsx)(n.code,{children:"ALTER EXTERNAL TABLE"})," actions:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ADD COLUMN"})," \u2014 Adds a new column to the external table definition."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"DROP COLUMN"})," \u2014 Drops a column from the external table definition. If you drop readable external table columns, it only changes the table definition in Cloudberry Database. The ",(0,s.jsx)(n.code,{children:"CASCADE"})," keyword is required if anything outside the table depends on the column, such as a view that references the column."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ALTER COLUMN TYPE"})," \u2014 Changes the data type of a table column."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"OWNER"})," \u2014 Changes the owner of the external table to the specified user."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Use the ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/alter-table",children:"ALTER TABLE"})," command to perform these actions on an external table:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Set (change) the table schema."}),"\n",(0,s.jsx)(n.li,{children:"Rename the table."}),"\n",(0,s.jsx)(n.li,{children:"Rename a table column."}),"\n",(0,s.jsx)(n.li,{children:"Set (change) the distribution policy (writable external table only)."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You must own the external table to use ",(0,s.jsx)(n.code,{children:"ALTER EXTERNAL TABLE"})," or ",(0,s.jsx)(n.code,{children:"ALTER TABLE"}),". To change the schema of an external table, you must also have ",(0,s.jsx)(n.code,{children:"CREATE"})," privilege on the new schema. To alter the owner, you must also be a direct or indirect member of the new owning role, and that role must have ",(0,s.jsx)(n.code,{children:"CREATE"})," privilege on the external table's schema. A superuser has these privileges automatically."]}),"\n",(0,s.jsxs)(n.p,{children:["Changes that you make to an external table definition with either ",(0,s.jsx)(n.code,{children:"ALTER EXTERNAL TABLE"})," or ",(0,s.jsx)(n.code,{children:"ALTER TABLE"})," do not affect the external data."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ALTER EXTERNAL TABLE"})," and ",(0,s.jsx)(n.code,{children:"ALTER TABLE"})," commands cannot modify the type of the external table (read, write, web), the table ",(0,s.jsx)(n.code,{children:"FORMAT"})," information, or the location of the external data. To modify this information, you must drop and recreate the external table definition."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name (possibly schema-qualified) of an existing external table definition to alter."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"column"})})}),"\n",(0,s.jsx)(n.p,{children:"Name of an existing column."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"new_column"})})}),"\n",(0,s.jsx)(n.p,{children:"Name of a new column."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"type"})})}),"\n",(0,s.jsx)(n.p,{children:"Data type of the new column, or new data type for an existing column."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"new_owner"})})}),"\n",(0,s.jsx)(n.p,{children:"The role name of the new owner of the external table."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"CASCADE"})})}),"\n",(0,s.jsx)(n.p,{children:"Automatically drop objects that depend on the dropped column, such as a view that references the column."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"RESTRICT"})})}),"\n",(0,s.jsx)(n.p,{children:"Refuse to drop the column or constraint if there are any dependent objects. This is the default behavior."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsx)(n.p,{children:"Add a new column to an external table definition:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER EXTERNAL TABLE ext_expenses ADD COLUMN manager text;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Change the owner of an external table:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER EXTERNAL TABLE ext_data OWNER TO jojo;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Change the data type of an external table:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"ALTER EXTERNAL TABLE ext_leads ALTER COLUMN acct_code TYPE integer;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ALTER EXTERNAL TABLE"})," is a Cloudberry Database extension. There is no ",(0,s.jsx)(n.code,{children:"ALTER EXTERNAL TABLE"})," statement in the SQL standard or regular PostgreSQL."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-external-table",children:"CREATE EXTERNAL TABLE"}),", ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/drop-external-table",children:"DROP EXTERNAL TABLE"}),", ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/alter-table",children:"ALTER TABLE"})]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var s=t(67294);const l={},a=s.createContext(l);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);