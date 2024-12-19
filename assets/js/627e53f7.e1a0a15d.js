"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7378],{62371:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>E,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=t(85893),s=t(11151);const a={title:"ALTER ROUTINE"},o="ALTER ROUTINE",i={id:"sql-stmts/alter-routine",title:"ALTER ROUTINE",description:"Changes the definition of a routine.",source:"@site/docs/sql-stmts/alter-routine.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/alter-routine",permalink:"/docs/sql-stmts/alter-routine",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/alter-routine.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1734402925,formattedLastUpdatedAt:"Dec 17, 2024",frontMatter:{title:"ALTER ROUTINE"},sidebar:"docsbars",previous:{title:"ALTER ROLE",permalink:"/docs/sql-stmts/alter-role"},next:{title:"ALTER RULE",permalink:"/docs/sql-stmts/alter-rule"}},l={},c=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"alter-routine",children:"ALTER ROUTINE"}),"\n",(0,r.jsx)(n.p,{children:"Changes the definition of a routine."}),"\n",(0,r.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER ROUTINE <name> [ ( [ [<argmode>] [<argname>] <argtype> [, ...] ] ) ] \n   <action> [, ... ] [RESTRICT]\n\nALTER ROUTINE <name> [ ( [ [<argmode>] [<argname>] <argtype> [, ...] ] ) ]\n   RENAME TO <new_name>\n\nALTER ROUTINE <name> [ ( [ [<argmode>] [<argname>] <argtype> [, ...] ] ) ]\n   OWNER TO { <new_owner> | CURRENT_USER | SESSION_USER }\n\nALTER ROUTINE <name> [ ( [ [<argmode>] [<argname>] <argtype> [, ...] ] ) ]\n   SET SCHEMA <new_schema>\n\nALTER ROUTINE <name> [ ( [ [<argmode>] [<argname>] <argtype> [, ...] ] ) ]\n   DEPENDS ON EXTENSION <extension_name>\n\n-- where <action> is one of (depending on the type of routine):\n\n    { IMMUTABLE | STABLE | VOLATILE }\n    [ NOT ] LEAKPROOF\n    { [EXTERNAL] SECURITY INVOKER | [EXTERNAL] SECURITY DEFINER }\n    PARALLEL { UNSAFE | RESTRICTED | SAFE }\n    EXECUTE ON { ANY | COORDINATOR | ALL SEGMENTS | INITPLAN }\n    COST <execution_cost>\n    ROWS <result_rows>\n    SET <configuration_parameter> { TO | = } { <value> | DEFAULT }\n    SET <configuration_parameter> FROM CURRENT\n    RESET <configuration_parameter>\n    RESET ALL\n"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ALTER ROUTINE"})," changes the definition of a routine, which can be an aggregate function, a normal function, or a procedure. Refer to ",(0,r.jsx)(n.a,{href:"/docs/sql-stmts/alter-aggregate",children:"ALTER AGGREGATE"}),", ",(0,r.jsx)(n.a,{href:"/docs/sql-stmts/alter-function",children:"ALTER FUNCTION"}),", and ",(0,r.jsx)(n.a,{href:"/docs/sql-stmts/alter-procedure",children:"ALTER PROCEDURE"})," for the description of the parameters, more examples, and further details."]}),"\n",(0,r.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsxs)(n.p,{children:["To rename the routine ",(0,r.jsx)(n.code,{children:"foo"})," for type ",(0,r.jsx)(n.code,{children:"integer"})," to ",(0,r.jsx)(n.code,{children:"foobar"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"ALTER ROUTINE foo(integer) RENAME TO foobar;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["This command will work independent of whether ",(0,r.jsx)(n.code,{children:"foo"})," is an aggregate, function, or procedure."]}),"\n",(0,r.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,r.jsxs)(n.p,{children:["This statement is partially compatible with the ",(0,r.jsx)(n.code,{children:"ALTER ROUTINE"})," statement in the SQL standard. Refer to ",(0,r.jsx)(n.a,{href:"/docs/sql-stmts/alter-function",children:"ALTER FUNCTION"})," and ",(0,r.jsx)(n.a,{href:"/docs/sql-stmts/alter-procedure",children:"ALTER PROCEDURE"})," for more details. Allowing routine names to refer to aggregate functions is a Cloudberry Database extension."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/sql-stmts/alter-aggregate",children:"ALTER AGGREGATE"}),", ",(0,r.jsx)(n.a,{href:"/docs/sql-stmts/alter-function",children:"ALTER FUNCTION"}),", ",(0,r.jsx)(n.a,{href:"/docs/sql-stmts/alter-procedure",children:"ALTER PROCEDURE"}),", ",(0,r.jsx)(n.a,{href:"/docs/sql-stmts/drop-routine",children:"DROP ROUTINE"})]})]})}function E(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(67294);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);