"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[3967],{79001:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=t(85893),a=t(11151);const s={title:"ALTER AGGREGATE"},i="ALTER AGGREGATE",o={id:"sql-stmts/alter-aggregate",title:"ALTER AGGREGATE",description:"Changes the definition of an aggregate function",source:"@site/docs/sql-stmts/alter-aggregate.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-aggregate",permalink:"/zh/docs/sql-stmts/alter-aggregate",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-aggregate.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1734402925,formattedLastUpdatedAt:"2024\u5e7412\u670817\u65e5",frontMatter:{title:"ALTER AGGREGATE"},sidebar:"docsbars",previous:{title:"ABORT",permalink:"/zh/docs/sql-stmts/abort"},next:{title:"ALTER COLLATION",permalink:"/zh/docs/sql-stmts/alter-collation"}},c={},d=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"alter-aggregate",children:"ALTER AGGREGATE"}),"\n",(0,r.jsx)(n.p,{children:"Changes the definition of an aggregate function"}),"\n",(0,r.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER AGGREGATE <name> ( <aggregate_signature> )  RENAME TO <new_name>\n\nALTER AGGREGATE <name> ( <aggregate_signature> )\n                 OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }\n\nALTER AGGREGATE <name> ( <aggregate_signature> ) SET SCHEMA <new_schema>\n\n-- where <aggregate_signature> is:\n\n* |\n[ <argmode> ] [ <argname> ] <argtype> [ , ... ] |\n[ [ <argmode> ] [ <argname> ] <argtype> [ , ... ] ] ORDER BY [ <argmode> ] [ <argname> ] <argtype> [ , ... ]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ALTER AGGREGATE"})," changes the definition of an aggregate function."]}),"\n",(0,r.jsxs)(n.p,{children:["You must own the aggregate function to use ",(0,r.jsx)(n.code,{children:"ALTER AGGREGATE"}),". To change the schema of an aggregate function, you must also have ",(0,r.jsx)(n.code,{children:"CREATE"})," privilege on the new schema. To alter the owner, you must also be a direct or indirect member of the new owning role, and that role must have ",(0,r.jsx)(n.code,{children:"CREATE"})," privilege on the aggregate function's schema. (These restrictions enforce that altering the owner does not do anything you could not do by dropping and recreating the aggregate function. However, a superuser can alter ownership of any aggregate function anyway.)"]}),"\n",(0,r.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"name"})})}),"\n",(0,r.jsx)(n.p,{children:"The name (optionally schema-qualified) of an existing aggregate function."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"argmode"})})}),"\n",(0,r.jsxs)(n.p,{children:["The mode of an argument: ",(0,r.jsx)(n.code,{children:"IN"})," or ",(0,r.jsx)(n.code,{children:"VARIADIC"}),". If omitted, the default is ",(0,r.jsx)(n.code,{children:"IN"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"argname"})})}),"\n",(0,r.jsxs)(n.p,{children:["The name of an argument. Note that ",(0,r.jsx)(n.code,{children:"ALTER AGGREGATE"})," does not actually pay any attention to argument names, since only the argument data types are needed to determine the aggregate function's identity."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"argtype"})})}),"\n",(0,r.jsxs)(n.p,{children:["An input data type on which the aggregate function operates. To reference a zero-argument aggregate function, write ",(0,r.jsx)(n.code,{children:"*"})," in place of the list of argument specifications  To reference an ordered-set aggregate function, write ",(0,r.jsx)(n.code,{children:"ORDER BY"})," between the direct and aggregated argument specifications."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"new_name"})})}),"\n",(0,r.jsx)(n.p,{children:"The new name of the aggregate function."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"new_owner"})})}),"\n",(0,r.jsx)(n.p,{children:"The new owner of the aggregate function."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"new_schema"})})}),"\n",(0,r.jsx)(n.p,{children:"The new schema for the aggregate function."}),"\n",(0,r.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(n.p,{children:["The recommended syntax for referencing an ordered-set aggregate is to write ",(0,r.jsx)(n.code,{children:"ORDER BY"})," between the direct and aggregated argument specifications, in the same style as in ",(0,r.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-aggregate",children:"CREATE AGGREGATE"}),". However, it will also work to omit ",(0,r.jsx)(n.code,{children:"ORDER BY"})," and just run the direct and aggregated argument specifications into a single list. In this abbreviated form, if ",(0,r.jsx)(n.code,{children:'VARIADIC "any"'})," was used in both the direct and aggregated argument lists, write ",(0,r.jsx)(n.code,{children:'VARIADIC "any"'})," only once."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.p,{children:["To rename the aggregate function ",(0,r.jsx)(n.code,{children:"myavg"})," for type ",(0,r.jsx)(n.code,{children:"integer"})," to ",(0,r.jsx)(n.code,{children:"my_average"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER AGGREGATE myavg(integer) RENAME TO my_average;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To change the owner of the aggregate function ",(0,r.jsx)(n.code,{children:"myavg"})," for type ",(0,r.jsx)(n.code,{children:"integer"})," to ",(0,r.jsx)(n.code,{children:"joe"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER AGGREGATE myavg(integer) OWNER TO joe;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["To move the ordered-set aggregate ",(0,r.jsx)(n.code,{children:"mypercentile"})," with direct argument of type ",(0,r.jsx)(n.code,{children:"float8"})," and aggregated argument of type ",(0,r.jsx)(n.code,{children:"integer"})," into schema ",(0,r.jsx)(n.code,{children:"myschema"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER AGGREGATE mypercentile(float8 ORDER BY integer) SET SCHEMA myschema;\n"})}),"\n",(0,r.jsx)(n.p,{children:"This will work too:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER AGGREGATE mypercentile(float8, integer) SET SCHEMA myschema;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsxs)(n.p,{children:["There is no ",(0,r.jsx)(n.code,{children:"ALTER AGGREGATE"})," statement in the SQL standard."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/zh/docs/sql-stmts/create-aggregate",children:"CREATE AGGREGATE"}),", ",(0,r.jsx)(n.a,{href:"/zh/docs/sql-stmts/drop-aggregate",children:"DROP AGGREGATE"})]})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var r=t(67294);const a={},s=r.createContext(a);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);