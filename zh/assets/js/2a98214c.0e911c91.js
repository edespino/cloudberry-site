"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[9660],{76949:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var s=t(85893),a=t(11151);const i={title:"CREATE DOMAIN"},o="CREATE DOMAIN",r={id:"sql-stmts/create-domain",title:"CREATE DOMAIN",description:"Defines a new domain.",source:"@site/docs/sql-stmts/create-domain.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-domain",permalink:"/zh/docs/sql-stmts/create-domain",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-domain.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1734402925,formattedLastUpdatedAt:"2024\u5e7412\u670817\u65e5",frontMatter:{title:"CREATE DOMAIN"},sidebar:"docsbars",previous:{title:"CREATE DATABASE",permalink:"/zh/docs/sql-stmts/create-database"},next:{title:"CREATE EXTENSION",permalink:"/zh/docs/sql-stmts/create-extension"}},d={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"create-domain",children:"CREATE DOMAIN"}),"\n",(0,s.jsx)(n.p,{children:"Defines a new domain."}),"\n",(0,s.jsx)(n.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE DOMAIN <name> [AS] <data_type>\n       [ COLLATE <collation> ] \n       [ DEFAULT <expression> ]\n       [ <constraint> [ ... ] ]\n\n-- where <constraint> is:\n\n[ CONSTRAINT <constraint_name> ]\n{ NOT NULL | NULL | CHECK (<expression>)  }\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CREATE DOMAIN"})," creates a new domain. A domain is essentially a data type with optional constraints (restrictions on the allowed set of values). The user who defines a domain becomes its owner."]}),"\n",(0,s.jsxs)(n.p,{children:["If a schema name is given (for example, ",(0,s.jsx)(n.code,{children:"CREATE DOMAIN myschema.mydomain ..."}),") then the domain is created in the specified schema. Otherwise it is created in the current schema. The domain name must be unique among the data types and domains existing in its schema."]}),"\n",(0,s.jsxs)(n.p,{children:["Domains are useful for abstracting common constraints on fields into a single location for maintenance. For example, several tables might contain email address columns, all requiring the same ",(0,s.jsx)(n.code,{children:"CHECK"})," constraint to verify the address syntax. Define a domain rather than setting up each table's constraint individually."]}),"\n",(0,s.jsxs)(n.p,{children:["To be able to create a domain, you must have ",(0,s.jsx)(n.code,{children:"USAGE"})," privilege on the underlying type."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"name"})})}),"\n",(0,s.jsx)(n.p,{children:"The name (optionally schema-qualified) of a domain to be created."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"data_type"})})}),"\n",(0,s.jsx)(n.p,{children:"The underlying data type of the domain. This may include array specifiers."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"collation"})})}),"\n",(0,s.jsxs)(n.p,{children:["An optional collation for the domain. If no collation is specified, the domain has the same collation behavior as its underlying data type. The underlying type must be collatable if ",(0,s.jsx)(n.code,{children:"COLLATE"})," is specified."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"DEFAULT expression"})})}),"\n",(0,s.jsx)(n.p,{children:"Specifies a default value for columns of the domain data type. The value is any variable-free expression (but subqueries are not allowed). The data type of the default expression must match the data type of the domain. If no default value is specified, then the default value is the null value."}),"\n",(0,s.jsx)(n.p,{children:"The default expression will be used in any insert operation that does not specify a value for the column. If a default value is defined for a particular column, it overrides any default associated with the domain. In turn, the domain default overrides any default value associated with the underlying data type."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"CONSTRAINT constraint_name"})})}),"\n",(0,s.jsx)(n.p,{children:"An optional name for a constraint. If not specified, the system generates a name."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"NOT NULL"})})}),"\n",(0,s.jsx)(n.p,{children:"Values of this domain are prevented from being null (but see the Notes below)."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"NULL"})})}),"\n",(0,s.jsx)(n.p,{children:"Values of this domain are allowed to be null. This is the default."}),"\n",(0,s.jsx)(n.p,{children:"This clause is only intended for compatibility with nonstandard SQL databases. Its use is discouraged in new applications."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"CHECK (expression)"})})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CHECK"})," clauses specify integrity constraints or tests which values of the domain must satisfy. Each constraint must be an expression producing a Boolean result. It should use the key word ",(0,s.jsx)(n.code,{children:"VALUE"})," to refer to the value being tested. Expressions evaluating to TRUE or UNKNOWN succeed. If the expression produces a FALSE result, an error is reported and the value is not allowed to be converted to the domain type."]}),"\n",(0,s.jsxs)(n.p,{children:["Currently, ",(0,s.jsx)(n.code,{children:"CHECK"})," expressions cannot contain subqueries nor refer to variables other than ",(0,s.jsx)(n.code,{children:"VALUE"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When a domain has multiple ",(0,s.jsx)(n.code,{children:"CHECK"})," constraints, they will be tested in alphabetical order by name. (Cloudberry Database versions before 7.0 did not honor any particular firing order for ",(0,s.jsx)(n.code,{children:"CHECK"})," constraints.)"]}),"\n",(0,s.jsx)(n.h2,{id:"notes",children:"Notes"}),"\n",(0,s.jsxs)(n.p,{children:["Domain constraints, particularly ",(0,s.jsx)(n.code,{children:"NOT NULL"}),", are checked when converting a value to the domain type. It is possible for a column that is nominally of the domain type to read as null despite there being such a constraint. For example, this can happen in an outer-join query, if the domain column is on the nullable side of the outer join. A more subtle example is:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"INSERT INTO tab (domcol) VALUES ((SELECT domcol FROM tab WHERE false));\n"})}),"\n",(0,s.jsx)(n.p,{children:"The empty scalar sub-SELECT will produce a null value that is considered to be of the domain type, so no further constraint checking is applied to it, and the insertion will succeed."}),"\n",(0,s.jsxs)(n.p,{children:["It is very difficult to avoid such problems, because of SQL's general assumption that a null value is a valid value of every data type. Best practice therefore is to design a domain's constraints so that a null value is allowed, and then to apply column ",(0,s.jsx)(n.code,{children:"NOT NULL"})," constraints to columns of the domain type as needed, rather than directly to the domain type."]}),"\n",(0,s.jsxs)(n.p,{children:["Cloudberry Database assumes that ",(0,s.jsx)(n.code,{children:"CHECK"})," constraints' conditions are immutable, that is, they will always give the same result for the same input value. This assumption is what justifies examining ",(0,s.jsx)(n.code,{children:"CHECK"})," constraints only when a value is first converted to be of a domain type, and not at other times. (This is essentially the same as the treatment of table ",(0,s.jsx)(n.code,{children:"CHECK"})," constraints.)"]}),"\n",(0,s.jsxs)(n.p,{children:["An example of a common way to break this assumption is to reference a user-defined function in a ",(0,s.jsx)(n.code,{children:"CHECK"})," expression, and then change the behavior of that function. Cloudberry Database does not disallow that, but it will not notice if there are stored values of the domain type that now violate the ",(0,s.jsx)(n.code,{children:"CHECK"})," constraint. That would cause a subsequent database dump and restore to fail. The recommended way to handle such a change is to drop the constraint (using ",(0,s.jsx)(n.code,{children:"ALTER DOMAIN"}),"), adjust the function definition, and re-add the constraint, thereby rechecking it against stored data."]}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.p,{children:["This example creates the ",(0,s.jsx)(n.code,{children:"us_postal_code"})," data type and then uses the type in a table definition. A regular expression test is used to verify that the value looks like a valid US postal code."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE DOMAIN us_postal_code AS TEXT\nCHECK(\n   VALUE ~ '^\\d{5}$'\nOR VALUE ~ '^\\d{5}-\\d{4}$'\n);\n\nCREATE TABLE us_snail_addy (\n  address_id SERIAL PRIMARY KEY,\n  street1 TEXT NOT NULL,\n  street2 TEXT,\n  street3 TEXT,\n  city TEXT NOT NULL,\n  postal us_postal_code NOT NULL\n);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"CREATE DOMAIN"})," conforms to the SQL standard."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/alter-domain",children:"ALTER DOMAIN"}),", ",(0,s.jsx)(n.a,{href:"/zh/docs/sql-stmts/drop-domain",children:"DROP DOMAIN"})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(67294);const a={},i=s.createContext(a);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);