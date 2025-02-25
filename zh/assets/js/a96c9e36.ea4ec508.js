"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[8684],{67284:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var n=s(85893),r=s(11151),i=s(52991);const o={title:"Summary of Built-in Functions"},l="Summary of Built-in Functions",c={id:"functions/index",title:"Summary of Built-in Functions",description:"Cloudberry Database supports built-in functions and operators including analytic functions and window functions that can be used in window expressions.",source:"@site/docs/functions/index.md",sourceDirName:"functions",slug:"/functions/",permalink:"/zh/docs/functions/",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/functions/index.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1740362944,formattedLastUpdatedAt:"2025\u5e742\u670824\u65e5",frontMatter:{title:"Summary of Built-in Functions"},sidebar:"docsbars",previous:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/zh/docs/data-types"},next:{title:"JSON Functions and Operators",permalink:"/zh/docs/functions/json-functions-and-operators"}},d={},a=[{value:"Cloudberry Database function types",id:"cloudberry-database-function-types",level:2},{value:"Built-in functions and operators",id:"built-in-functions-and-operators",level:2}];function x(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"summary-of-built-in-functions",children:"Summary of Built-in Functions"}),"\n",(0,n.jsx)(t.p,{children:"Cloudberry Database supports built-in functions and operators including analytic functions and window functions that can be used in window expressions."}),"\n","\n","\n",(0,n.jsx)(i.Z,{}),"\n",(0,n.jsx)(t.h2,{id:"cloudberry-database-function-types",children:"Cloudberry Database function types"}),"\n",(0,n.jsx)(t.p,{children:"Cloudberry Database evaluates functions and operators used in SQL expressions. Some functions and operators are only allowed to run on the coordinator since they could lead to inconsistencies in Cloudberry Database segment instances. This table describes the Cloudberry Database Function Types."}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Function Type"}),(0,n.jsx)(t.th,{children:"Cloudberry Support"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Comments"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"IMMUTABLE"}),(0,n.jsx)(t.td,{children:"Yes"}),(0,n.jsx)(t.td,{children:"Relies only on information directly in its argument list. Given the same argument values, always returns the same result."}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"STABLE"}),(0,n.jsx)(t.td,{children:"Yes, in most cases"}),(0,n.jsx)(t.td,{children:"Within a single table scan, returns the same result for same argument values, but results change across SQL statements."}),(0,n.jsxs)(t.td,{children:["Results depend on database lookups or parameter values. ",(0,n.jsx)(t.code,{children:"current_timestamp"})," family of functions is ",(0,n.jsx)(t.code,{children:"STABLE"}),"; values do not change within an execution."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"VOLATILE"}),(0,n.jsx)(t.td,{children:"Restricted"}),(0,n.jsxs)(t.td,{children:["Function values can change within a single table scan. For example: ",(0,n.jsx)(t.code,{children:"random()"}),", ",(0,n.jsx)(t.code,{children:"timeofday()"}),"."]}),(0,n.jsxs)(t.td,{children:["Any function with side effects is volatile, even if its result is predictable. For example: ",(0,n.jsx)(t.code,{children:"setval()"}),"."]})]})]})]}),"\n",(0,n.jsxs)(t.p,{children:["In Cloudberry Database, data is divided up across segments \u2014 each segment is a distinct PostgreSQL database. To prevent inconsistent or unexpected results, do not run functions classified as ",(0,n.jsx)(t.code,{children:"VOLATILE"})," at the segment level if they contain SQL commands or modify the database in any way. For example, functions such as ",(0,n.jsx)(t.code,{children:"setval()"})," are not allowed to run on distributed data in Cloudberry Database because they can cause inconsistent data between segment instances."]}),"\n",(0,n.jsxs)(t.p,{children:["To ensure data consistency, you can safely use ",(0,n.jsx)(t.code,{children:"VOLATILE"})," and ",(0,n.jsx)(t.code,{children:"STABLE"})," functions in statements that are evaluated on and run from the coordinator. For example, the following statements run on the coordinator (statements without a ",(0,n.jsx)(t.code,{children:"FROM"})," clause):"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT setval('myseq', 201);\nSELECT foo();\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If a statement has a ",(0,n.jsx)(t.code,{children:"FROM"})," clause containing a distributed table ",(0,n.jsx)(t.em,{children:"and"})," the function in the ",(0,n.jsx)(t.code,{children:"FROM"})," clause returns a set of rows, the statement can run on the segments:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"SELECT * from foo();\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Cloudberry Database does not support functions that return a table reference (",(0,n.jsx)(t.code,{children:"rangeFuncs"}),") or functions that use the ",(0,n.jsx)(t.code,{children:"refCursor"})," datatype."]}),"\n",(0,n.jsx)(t.h2,{id:"built-in-functions-and-operators",children:"Built-in functions and operators"}),"\n",(0,n.jsxs)(t.p,{children:["The following table lists the categories of built-in functions and operators supported by PostgreSQL. All functions and operators are supported in Cloudberry Database as in PostgreSQL with the exception of ",(0,n.jsx)(t.code,{children:"STABLE"})," and ",(0,n.jsx)(t.code,{children:"VOLATILE"})," functions, which are subject to the restrictions noted in ",(0,n.jsx)(t.a,{href:"#topic27",children:"Cloudberry Database Function Types"}),". See the ",(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions.html",children:"Functions and Operators"})," section of the PostgreSQL documentation for more information about these built-in functions and operators."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Operator/Function Category"}),(0,n.jsx)(t.th,{children:"VOLATILE Functions"}),(0,n.jsx)(t.th,{children:"STABLE Functions"}),(0,n.jsx)(t.th,{children:"Restrictions"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-logical.html",children:"Logical Operators"})}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-comparison.html",children:"Comparison Operators"})}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-math.html",children:"Mathematical Functions and Operators"})}),(0,n.jsxs)(t.td,{children:["random",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"setseed"]}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-string.html",children:"String Functions and Operators"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"All built-in conversion functions"})}),(0,n.jsxs)(t.td,{children:["convert",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"pg_client_encoding"]}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-binarystring.html",children:"Binary String Functions and Operators"})}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-bitstring.html",children:"Bit String Functions and Operators"})}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-matching.html",children:"Pattern Matching"})}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-formatting.html",children:"Data Type Formatting Functions"})}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsxs)(t.td,{children:["to_char",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"to_timestamp"]}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-datetime.html",children:"Date/Time Functions and Operators"})}),(0,n.jsx)(t.td,{children:"timeofday"}),(0,n.jsxs)(t.td,{children:["age",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"current_date",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"current_time",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"current_timestamp",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"localtime",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"localtimestamp",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"now"]}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-enum.html",children:"Enum Support Functions"})}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-geometry.html",children:"Geometric Functions and Operators"})}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-net.html",children:"Network Address Functions and Operators"})}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-sequence.html",children:"Sequence Manipulation Functions"})}),(0,n.jsxs)(t.td,{children:["nextval()",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"setval()"]}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-conditional.html",children:"Conditional Expressions"})}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-array.html",children:"Array Functions and Operators"})}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.em,{children:"All array functions"})}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-aggregate.html",children:"Aggregate Functions"})}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-subquery.html",children:"Subquery Expressions"})}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-comparisons.html",children:"Row and Array Comparisons"})}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-srf.html",children:"Set Returning Functions"})}),(0,n.jsx)(t.td,{children:"generate_series"}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-info.html",children:"System Information Functions"})}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.em,{children:"All session information functions"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"All access privilege inquiry functions"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"All schema visibility inquiry functions"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"All system catalog information functions"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"All comment information functions"}),(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"All transaction ids and snapshots"})]}),(0,n.jsx)(t.td,{children:"\xa0"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-admin.html",children:"System Administration Functions"})}),(0,n.jsxs)(t.td,{children:["set_config",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"pg_cancel_backend",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"pg_reload_conf",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"pg_rotate_logfile",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"pg_start_backup",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"pg_stop_backup",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"pg_size_pretty",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"pg_ls_dir",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"pg_read_file",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"pg_stat_file",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]}),(0,n.jsxs)(t.td,{children:["current_setting",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"All database object size functions"})]}),(0,n.jsxs)(t.td,{children:["> ",(0,n.jsx)(t.strong,{children:"Note"})," The function ",(0,n.jsx)(t.code,{children:"pg_column_size"})," displays bytes required to store the value, possibly with TOAST compression."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"https://www.postgresql.org/docs/14/functions-xml.html",children:"XML Functions"})," and function-like expressions"]}),(0,n.jsx)(t.td,{children:"\xa0"}),(0,n.jsxs)(t.td,{children:["cursor_to_xml(cursor refcursor, count int, nulls boolean, tableforest boolean, targetns text)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," cursor_to_xmlschema(cursor refcursor, nulls boolean, tableforest boolean, targetns text)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"database_to_xml(nulls boolean, tableforest boolean, targetns text)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"database_to_xmlschema(nulls boolean, tableforest boolean, targetns text)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"database_to_xml_and_xmlschema(nulls boolean, tableforest boolean, targetns text)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"query_to_xml(query text, nulls boolean, tableforest boolean, targetns text)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"query_to_xmlschema(query text, nulls boolean, tableforest boolean, targetns text)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"query_to_xml_and_xmlschema(query text, nulls boolean, tableforest boolean, targetns text)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})," schema_to_xml(schema name, nulls boolean, tableforest boolean, targetns text)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"schema_to_xmlschema(schema name, nulls boolean, tableforest boolean, targetns text)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"schema_to_xml_and_xmlschema(schema name, nulls boolean, tableforest boolean, targetns text)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"table_to_xml(tbl regclass, nulls boolean, tableforest boolean, targetns text)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"table_to_xmlschema(tbl regclass, nulls boolean, tableforest boolean, targetns text)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"table_to_xml_and_xmlschema(tbl regclass, nulls boolean, tableforest boolean, targetns text)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"xmlagg(xml)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"xmlconcat(xml[, ...])",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"xmlelement(name name [, xmlattributes(value [AS attname] [, ... ])] [, content, ...])",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"xmlexists(text, xml)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"xmlforest(content [AS name] [, ...])",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"xml_is_well_formed(text)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"xml_is_well_formed_document(text)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"xml_is_well_formed_content(text)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"xmlparse ( ",(0,n.jsx)(t.code,{children:"{ DOCUMENT | CONTENT }"})," value)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"xpath(text, xml)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"xpath(text, xml, text[])",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"xpath_exists(text, xml)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"xpath_exists(text, xml, text[])",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"xmlpi(name target [, content])",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"xmlroot(xml, version text | no value [, standalone yes|no|no value])",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"xmlserialize ( ",(0,n.jsx)(t.code,{children:"{ DOCUMENT | CONTENT }"})," value AS type )",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"xml(text)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"text(xml)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"xmlcomment(xml)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),"xmlconcat2(xml, xml)",(0,n.jsx)("br",{}),(0,n.jsx)("br",{})]}),(0,n.jsx)(t.td,{children:"\xa0"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}},52991:(e,t,s)=>{s.d(t,{Z:()=>p});s(67294);var n=s(90512),r=s(53438),i=s(33692),o=s(13919),l=s(95999),c=s(92503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var a=s(85893);function x(e){let{href:t,children:s}=e;return(0,a.jsx)(i.Z,{href:t,className:(0,n.Z)("card padding--lg",d.cardContainer),children:s})}function h(e){let{href:t,icon:s,title:r,description:i}=e;return(0,a.jsxs)(x,{href:t,children:[(0,a.jsxs)(c.Z,{as:"h2",className:(0,n.Z)("text--truncate",d.cardTitle),title:r,children:[s," ",r]}),i&&(0,a.jsx)("p",{className:(0,n.Z)("text--truncate",d.cardDescription),title:i,children:i})]})}function j(e){let{item:t}=e;const s=(0,r.LM)(t);return s?(0,a.jsx)(h,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const s=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.xz)(t.docId??void 0);return(0,a.jsx)(h,{href:t.href,icon:s,title:t.label,description:t.description??n?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,a.jsx)(u,{item:t});case"category":return(0,a.jsx)(j,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function m(e){let{className:t}=e;const s=(0,r.jA)();return(0,a.jsx)(p,{items:s.items,className:t})}function p(e){const{items:t,className:s}=e;if(!t)return(0,a.jsx)(m,{...e});const i=(0,r.MN)(t);return(0,a.jsx)("section",{className:(0,n.Z)("row",s),children:i.map(((e,t)=>(0,a.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,a.jsx)(b,{item:e})},t)))})}},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>o});var n=s(67294);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);