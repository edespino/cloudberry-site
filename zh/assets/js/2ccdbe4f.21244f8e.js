"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[9044],{46643:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=n(85893),r=n(11151);const i={title:"VALUES"},o="VALUES",c={id:"sql-stmts/values",title:"VALUES",description:"Computes a set of rows.",source:"@site/docs/sql-stmts/values.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/values",permalink:"/zh/docs/sql-stmts/values",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/values.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733293498,formattedLastUpdatedAt:"2024\u5e7412\u67084\u65e5",frontMatter:{title:"VALUES"},sidebar:"docsbars",previous:{title:"VACUUM",permalink:"/zh/docs/sql-stmts/vacuum"},next:{title:"\u6570\u636e\u7c7b\u578b",permalink:"/zh/docs/data-types"}},l={},a=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"values",children:"VALUES"}),"\n",(0,t.jsx)(s.p,{children:"Computes a set of rows."}),"\n",(0,t.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"VALUES ( <expression> [, ...] ) [, ...]\n   [ORDER BY <sort_expression> [ ASC | DESC | USING <operator> ] [, ...] ]\n   [LIMIT { <count> | ALL } ] \n   [OFFSET <start> [ ROW | ROWS ] ]\n   [FETCH { FIRST | NEXT } [<count> ] { ROW | ROWS } ONLY ]\n"})}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"VALUES"}),' computes a row value or set of row values specified by value expressions. It is most commonly used to generate a "constant table" within a larger command, but it can be used on its own.']}),"\n",(0,t.jsxs)(s.p,{children:["When more than one row is specified, all the rows must have the same number of elements. The data types of the resulting table's columns are determined by combining the explicit or inferred types of the expressions appearing in that column, using the same rules as for ",(0,t.jsx)(s.code,{children:"UNION"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Within larger commands, ",(0,t.jsx)(s.code,{children:"VALUES"})," is syntactically allowed anywhere that ",(0,t.jsx)(s.code,{children:"SELECT"})," is. Because it is treated like a ",(0,t.jsx)(s.code,{children:"SELECT"})," by the grammar, it is possible to use the ",(0,t.jsx)(s.code,{children:"ORDER BY"}),", ",(0,t.jsx)(s.code,{children:"LIMIT"})," (or equivalent ",(0,t.jsx)(s.code,{children:"FETCH FIRST"}),"), and ",(0,t.jsx)(s.code,{children:"OFFSET"})," clauses with a ",(0,t.jsx)(s.code,{children:"VALUES"})," command."]}),"\n",(0,t.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"expression"})})}),"\n",(0,t.jsxs)(s.p,{children:["A constant or expression to compute and insert at the indicated place in the resulting table (set of rows). In a ",(0,t.jsx)(s.code,{children:"VALUES"})," list appearing at the top level of an ",(0,t.jsx)(s.code,{children:"INSERT"}),", an expression can be replaced by ",(0,t.jsx)(s.code,{children:"DEFAULT"})," to indicate that the destination column's default value should be inserted. ",(0,t.jsx)(s.code,{children:"DEFAULT"})," cannot be used when ",(0,t.jsx)(s.code,{children:"VALUES"})," appears in other contexts."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"sort_expression"})})}),"\n",(0,t.jsxs)(s.p,{children:["An expression or integer constant indicating how to sort the result rows. This expression may refer to the columns of the ",(0,t.jsx)(s.code,{children:"VALUES"})," result as ",(0,t.jsx)(s.code,{children:"column1"}),", ",(0,t.jsx)(s.code,{children:"column2"}),', etc. For more details, see "The ORDER BY Clause" in the parameters for ',(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/select",children:"SELECT"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"operator"})})}),"\n",(0,t.jsxs)(s.p,{children:['A sorting operator. For more details, see "The ORDER BY Clause" in the parameters for ',(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/select",children:"SELECT"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"LIMIT count"})}),(0,t.jsx)("br",{}),"\n",(0,t.jsx)(s.strong,{children:(0,t.jsx)(s.code,{children:"OFFSET start"})})]}),"\n",(0,t.jsxs)(s.p,{children:['The maximum number of rows to return. For more details, see "The LIMIT Clause" in the parameters for ',(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/select",children:"SELECT"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"VALUES"})," lists with very large numbers of rows should be avoided, as you may encounter out-of-memory failures or poor performance. ",(0,t.jsx)(s.code,{children:"VALUES"})," appearing within ",(0,t.jsx)(s.code,{children:"INSERT"})," is a special case (because the desired column types are known from the ",(0,t.jsx)(s.code,{children:"INSERT"}),"'s target table, and need not be inferred by scanning the ",(0,t.jsx)(s.code,{children:"VALUES"})," list), so it can handle larger lists than are practical in other contexts."]}),"\n",(0,t.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(s.p,{children:["A bare ",(0,t.jsx)(s.code,{children:"VALUES"})," command:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"VALUES (1, 'one'), (2, 'two'), (3, 'three');\n"})}),"\n",(0,t.jsx)(s.p,{children:"This will return a table of two columns and three rows. It is effectively equivalent to:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT 1 AS column1, 'one' AS column2\nUNION ALL\nSELECT 2, 'two'\nUNION ALL\nSELECT 3, 'three';\n"})}),"\n",(0,t.jsxs)(s.p,{children:["More usually, ",(0,t.jsx)(s.code,{children:"VALUES"})," is used within a larger SQL command. The most common use is in ",(0,t.jsx)(s.code,{children:"INSERT"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"INSERT INTO films (code, title, did, date_prod, kind)\n    VALUES ('T_601', 'Yojimbo', 106, '1961-06-16', 'Drama');\n"})}),"\n",(0,t.jsxs)(s.p,{children:["In the context of ",(0,t.jsx)(s.code,{children:"INSERT"}),", entries of a ",(0,t.jsx)(s.code,{children:"VALUES"})," list can be ",(0,t.jsx)(s.code,{children:"DEFAULT"})," to indicate that the column default should be used here instead of specifying a value:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"INSERT INTO films VALUES\n    ('UA502', 'Bananas', 105, DEFAULT, 'Comedy', '82 \nminutes'),\n    ('T_601', 'Yojimbo', 106, DEFAULT, 'Drama', DEFAULT);\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"VALUES"})," can also be used where a sub-",(0,t.jsx)(s.code,{children:"SELECT"})," might be written, for example in a ",(0,t.jsx)(s.code,{children:"FROM"})," clause:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT f.* FROM films f, (VALUES('MGM', 'Horror'), ('UA', \n'Sci-Fi')) AS t (studio, kind) WHERE f.studio = t.studio AND \nf.kind = t.kind;\nUPDATE employees SET salary = salary * v.increase FROM \n(VALUES(1, 200000, 1.2), (2, 400000, 1.4)) AS v (depno, \ntarget, increase) WHERE employees.depno = v.depno AND \nemployees.sales >= v.target;\n"})}),"\n",(0,t.jsxs)(s.p,{children:["Note that an ",(0,t.jsx)(s.code,{children:"AS"})," clause is required when ",(0,t.jsx)(s.code,{children:"VALUES"})," is used in a ",(0,t.jsx)(s.code,{children:"FROM"})," clause, just as is true for ",(0,t.jsx)(s.code,{children:"SELECT"}),". It is not required that the ",(0,t.jsx)(s.code,{children:"AS"})," clause specify names for all the columns, but it is good practice to do so. The default column names for ",(0,t.jsx)(s.code,{children:"VALUES"})," are ",(0,t.jsx)(s.code,{children:"column1"}),", ",(0,t.jsx)(s.code,{children:"column2"}),", etc. in Cloudberry Database, but these names might be different in other database systems."]}),"\n",(0,t.jsxs)(s.p,{children:["When ",(0,t.jsx)(s.code,{children:"VALUES"})," is used in ",(0,t.jsx)(s.code,{children:"INSERT"}),", the values are all automatically coerced to the data type of the corresponding destination column. When it is used in other contexts, it may be necessary to specify the correct data type. If the entries are all quoted literal constants, coercing the first is sufficient to determine the assumed type for all:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT * FROM machines WHERE ip_address IN \n(VALUES('192.168.0.1'::inet), ('192.168.0.10'), \n('192.0.2.43'));\n"})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"})," For simple ",(0,t.jsx)(s.code,{children:"IN"})," tests, it is better to rely on the list-of-scalars form of ",(0,t.jsx)(s.code,{children:"IN"})," than to write a ",(0,t.jsx)(s.code,{children:"VALUES"})," query as shown above. The list of scalars method requires less writing and is often more efficient."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"VALUES"})," conforms to the SQL standard. ",(0,t.jsx)(s.code,{children:"LIMIT"})," and ",(0,t.jsx)(s.code,{children:"OFFSET"})," are Cloudberry Database extensions; see also under ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/select",children:"SELECT"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/insert",children:"INSERT"}),", ",(0,t.jsx)(s.a,{href:"/zh/docs/sql-stmts/select",children:"SELECT"})]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>o});var t=n(67294);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);