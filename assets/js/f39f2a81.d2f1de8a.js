"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5265],{91760:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=n(85893),t=n(11151);const a={title:"CREATE VIEW"},r="CREATE VIEW",o={id:"sql-stmts/create-view",title:"CREATE VIEW",description:"Defines a new view.",source:"@site/docs/sql-stmts/create-view.md",sourceDirName:"sql-stmts",slug:"/sql-stmts/create-view",permalink:"/docs/sql-stmts/create-view",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sql-stmts/create-view.md",tags:[],version:"current",lastUpdatedBy:"Ed Espino",lastUpdatedAt:1733247584,formattedLastUpdatedAt:"Dec 3, 2024",frontMatter:{title:"CREATE VIEW"},sidebar:"docsbars",previous:{title:"CREATE USER",permalink:"/docs/sql-stmts/create-user"},next:{title:"DEALLOCATE",permalink:"/docs/sql-stmts/deallocate"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Notes",id:"notes",level:2},{value:"Updatable views",id:"updatable-views",level:2},{value:"Examples",id:"examples",level:2},{value:"Compatibility",id:"compatibility",level:2},{value:"See also",id:"see-also",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"create-view",children:"CREATE VIEW"}),"\n",(0,i.jsx)(s.p,{children:"Defines a new view."}),"\n",(0,i.jsx)(s.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"CREATE [OR REPLACE] [TEMP | TEMPORARY] [RECURSIVE] VIEW <name> [ ( <column_name> [, ...] ) ]\n    [ WITH ( view_option_name [= view_option_value] [, ... ] ) ]\n\xa0\xa0\xa0\xa0AS <query>\n    [ WITH [ CASCADED | LOCAL ] CHECK OPTION ]\n"})}),"\n",(0,i.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"CREATE VIEW"})," defines a view of a query. The view is not physically materialized. Instead, Cloudberry Database runs the query every time the view is referenced in a query."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"CREATE OR REPLACE VIEW"})," is similar, but if a view of the same name already exists, it is replaced. The new query must generate the same columns that were generated by the existing view query (that is, the same column names in the same order, and with the same data types), but it may add additional columns to the end of the list. The calculations giving rise to the output columns may be completely different."]}),"\n",(0,i.jsxs)(s.p,{children:["If a schema name is given (for example, ",(0,i.jsx)(s.code,{children:"CREATE VIEW myschema.myview ..."}),") then the view is created in the specified schema. Otherwise it is created in the current schema. Temporary views exist in a special schema, so you may not provide a schema name when creating a temporary view. The name of the view must be distinct from the name of any other view, table, sequence, index, or foreign table in the same schema."]}),"\n",(0,i.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"TEMPORARY | TEMP"})})}),"\n",(0,i.jsx)(s.p,{children:"If specified, the view is created as a temporary view. Temporary views are automatically dropped at the end of the current session. Existing permanent relations with the same name are not visible to the current session while the temporary view exists, unless they are referenced with schema-qualified names."}),"\n",(0,i.jsxs)(s.p,{children:["If any of the tables referenced by the view are temporary, the view is created as a temporary view (whether ",(0,i.jsx)(s.code,{children:"TEMPORARY"})," is specified or not)."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"RECURSIVE"})})}),"\n",(0,i.jsx)(s.p,{children:"Creates a recursive view. The syntax"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"    CREATE RECURSIVE VIEW [ <schema> . ] <view_name> (<column_names>) AS SELECT <...>;\n"})}),"\n",(0,i.jsx)(s.p,{children:"is equivalent to"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"CREATE VIEW [ <schema> . ] <view_name> AS WITH RECURSIVE <view_name> (<column_names>) AS (SELECT <...>) SELECT <column_names> FROM <view_name>;\n"})}),"\n",(0,i.jsx)(s.p,{children:"A view column name list must be specified for a recursive view."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"name"})})}),"\n",(0,i.jsx)(s.p,{children:"The name (optionally schema-qualified) of a view to be created."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"column_name"})})}),"\n",(0,i.jsx)(s.p,{children:"An optional list of names to be used for columns of the view. If not given, the column names are deduced from the query."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"WITH ( view_option_name [= view_option_value] [, ... ] )"})})}),"\n",(0,i.jsx)(s.p,{children:"This clause specifies optional parameters for a view; the following parameters are supported:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"check_option (string)"})})}),"\n",(0,i.jsxs)(s.p,{children:["This parameter may be either ",(0,i.jsx)(s.code,{children:"local"})," or ",(0,i.jsx)(s.code,{children:"cascaded"}),", and is equivalent to specifying ",(0,i.jsx)(s.code,{children:"WITH [ CASCADED | LOCAL ] CHECK OPTION"})," (see below). This option can be changed on existing views using ",(0,i.jsx)(s.a,{href:"/docs/sql-stmts/alter-view",children:"ALTER VIEW"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"security_barrier (boolean)"})})}),"\n",(0,i.jsxs)(s.p,{children:["This should be used if the view is intended to provide row-level security. Refer to ",(0,i.jsx)(s.a,{href:"https://www.postgresql.org/docs/12/rules-privileges.html",children:"Rules and Privileges"})," in the PostgreSQL documentation for more information."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"query"})})}),"\n",(0,i.jsxs)(s.p,{children:["A ",(0,i.jsx)(s.a,{href:"/docs/sql-stmts/select",children:"SELECT"})," or ",(0,i.jsx)(s.a,{href:"/docs/sql-stmts/values",children:"VALUES"})," command which will provide the columns and rows of the view."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"WITH [ CASCADED | LOCAL ] CHECK OPTION"})})}),"\n",(0,i.jsxs)(s.p,{children:["This option controls the behavior of automatically updatable views. When this option is specified, ",(0,i.jsx)(s.code,{children:"INSERT"})," and ",(0,i.jsx)(s.code,{children:"UPDATE"})," commands on the view will be checked to ensure that new rows satisfy the view-defining condition (that is, the new rows are checked to ensure that they are visible through the view). If they are not, Cloudberry Database rejects the update. If the ",(0,i.jsx)(s.code,{children:"CHECK OPTION"})," is not specified, ",(0,i.jsx)(s.code,{children:"INSERT"})," and ",(0,i.jsx)(s.code,{children:"UPDATE"})," commands on the view are allowed to create rows that are not visible through the view. The following check options are supported:"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"LOCAL"})})}),"\n",(0,i.jsxs)(s.p,{children:["New rows are only checked against the conditions defined directly in the view itself. Any conditions defined on underlying base views are not checked (unless they also specify the ",(0,i.jsx)(s.code,{children:"CHECK OPTION"}),")."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"CASCADED"})})}),"\n",(0,i.jsxs)(s.p,{children:["New rows are checked against the conditions of the view and all underlying base views. If the ",(0,i.jsx)(s.code,{children:"CHECK OPTION"})," is specified, and neither ",(0,i.jsx)(s.code,{children:"LOCAL"})," nor ",(0,i.jsx)(s.code,{children:"CASCADED"})," is specified, then ",(0,i.jsx)(s.code,{children:"CASCADED"})," is assumed."]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"CHECK OPTION"})," may not be used with ",(0,i.jsx)(s.code,{children:"RECURSIVE"})," views."]}),"\n",(0,i.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,i.jsxs)(s.p,{children:["Use the ",(0,i.jsx)(s.a,{href:"/docs/sql-stmts/drop-view",children:"DROP VIEW"})," statement to drop views."]}),"\n",(0,i.jsx)(s.p,{children:"Ensure that the names and data types of the view's columns are assigned the way you want. For example:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"CREATE VIEW vista AS SELECT 'Hello World';\n"})}),"\n",(0,i.jsxs)(s.p,{children:["is bad form in two ways: the column name defaults to ",(0,i.jsx)(s.code,{children:"?column?"}),", and the column data type defaults to ",(0,i.jsx)(s.code,{children:"text"}),", which might not be what you wanted. If you want a string literal in a view's result, use something like:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"CREATE VIEW vista AS SELECT text 'Hello World' AS hello;\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Access to tables referenced in the view is determined by permissions of the view owner not the current user (even if the current user is a superuser). This can be confusing in the case of superusers, since superusers typically have access to all objects. In the case of a view, even superusers must be explicitly granted access to tables referenced in the view if they are not the owner of the view. In some cases, a view can be used to provide secure but restricted access to the underlying tables. However, not all views are secure against tampering, see ",(0,i.jsx)(s.a,{href:"https://www.postgresql.org/docs/12/rules-privileges.html",children:"Rules and Privileges"})," in the PostgreSQL documentation for details."]}),"\n",(0,i.jsx)(s.p,{children:"Functions called in the view are treated the same as if they had been called directly from the query using the view. Therefore the user of a view must have permissions to call any functions used by the view."}),"\n",(0,i.jsxs)(s.p,{children:["When both ",(0,i.jsx)(s.code,{children:"CREATE VIEW <view> ..."})," and ",(0,i.jsx)(s.code,{children:"SELECT ... FROM <view>"})," specify an ",(0,i.jsx)(s.code,{children:"ORDER BY"})," clause, Cloudberry Database ignores the ",(0,i.jsx)(s.code,{children:"ORDER BY"})," clause in the ",(0,i.jsx)(s.code,{children:"CREATE VIEW"})," statement."]}),"\n",(0,i.jsxs)(s.p,{children:["When ",(0,i.jsx)(s.code,{children:"CREATE OR REPLACE VIEW"})," is used on an existing view, only the view's defining ",(0,i.jsx)(s.code,{children:"SELECT"})," rule is changed. Other view properties, including ownership, permissions, and non-",(0,i.jsx)(s.code,{children:"SELECT"})," rules, remain unchanged. You must own the view to replace it (this includes being a member of the owning role)."]}),"\n",(0,i.jsx)(s.h2,{id:"updatable-views",children:"Updatable views"}),"\n",(0,i.jsxs)(s.p,{children:["Simple views are automatically updatable: Cloudberry Database allows you to invoke ",(0,i.jsx)(s.code,{children:"INSERT"}),", ",(0,i.jsx)(s.code,{children:"UPDATE"}),", and ",(0,i.jsx)(s.code,{children:"DELETE"})," statements on the view in the same way as on a regular table. A view is automatically updatable if it satisfies all of the following conditions:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["The view must have exactly one entry in its ",(0,i.jsx)(s.code,{children:"FROM"})," list, which must be a table or another updatable view."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["The view definition must not contain ",(0,i.jsx)(s.code,{children:"WITH"}),", ",(0,i.jsx)(s.code,{children:"DISTINCT"}),", ",(0,i.jsx)(s.code,{children:"GROUP BY"}),", ",(0,i.jsx)(s.code,{children:"HAVING"}),", ",(0,i.jsx)(s.code,{children:"LIMIT"}),", or ",(0,i.jsx)(s.code,{children:"OFFSET"})," clauses at the top level."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["The view definition must not contain set operations (",(0,i.jsx)(s.code,{children:"UNION"}),", ",(0,i.jsx)(s.code,{children:"INTERSECT"}),", or ",(0,i.jsx)(s.code,{children:"EXCEPT"}),") at the top level."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"The view's select list must not contain any aggregates, window functions, or set-returning functions."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["An automatically updatable view may contain a mix of updatable and non-updatable columns. A column is updatable if it is a simple reference to an updatable column of the underlying base relation; otherwise the column is read-only, and Cloudberry Database raises an error if an ",(0,i.jsx)(s.code,{children:"INSERT"})," or ",(0,i.jsx)(s.code,{children:"UPDATE"})," statement attempts to assign a value to it."]}),"\n",(0,i.jsxs)(s.p,{children:["If the view is automatically updatable the system will convert any ",(0,i.jsx)(s.code,{children:"INSERT"}),", ",(0,i.jsx)(s.code,{children:"UPDATE"}),", or ",(0,i.jsx)(s.code,{children:"DELETE"})," statement on the view into the corresponding statement on the underlying base relation. ",(0,i.jsx)(s.code,{children:"INSERT"})," statements that have an ",(0,i.jsx)(s.code,{children:"ON CONFLICT UPDATE"})," clause are fully supported."]}),"\n",(0,i.jsxs)(s.p,{children:["If an automatically updatable view contains a ",(0,i.jsx)(s.code,{children:"WHERE"})," condition, the condition restricts which rows of the base relation are available to be modified by ",(0,i.jsx)(s.code,{children:"UPDATE"})," and ",(0,i.jsx)(s.code,{children:"DELETE"})," statements on the view. However, an ",(0,i.jsx)(s.code,{children:"UPDATE"})," is permitted to change a row so that it no longer satisfies the ",(0,i.jsx)(s.code,{children:"WHERE"})," condition, and thus is no longer visible through the view. Similarly, an ",(0,i.jsx)(s.code,{children:"INSERT"})," command can potentially insert base-relation rows that do not satisfy the ",(0,i.jsx)(s.code,{children:"WHERE"})," condition and thus are not visible through the view (",(0,i.jsx)(s.code,{children:"ON CONFLICT UPDATE"})," may similarly affect an existing row not visible through the view). The ",(0,i.jsx)(s.code,{children:"CHECK OPTION"})," may be used to prevent ",(0,i.jsx)(s.code,{children:"INSERT"})," and ",(0,i.jsx)(s.code,{children:"UPDATE"})," commands from creating such rows that are not visible through the view."]}),"\n",(0,i.jsxs)(s.p,{children:["If an automatically updatable view is marked with the ",(0,i.jsx)(s.code,{children:"security_barrier"})," property, then all of the view's ",(0,i.jsx)(s.code,{children:"WHERE"})," conditions (and any conditions using operators which are marked as ",(0,i.jsx)(s.code,{children:"LEAKPROOF"}),") will always be evaluated before any conditions that a user of the view has added. Refer to ",(0,i.jsx)(s.a,{href:"https://www.postgresql.org/docs/12/rules-privileges.html",children:"Rules and Privileges"})," in the PostgreSQL documenatation for full details. Note that, due to this, rows which are not ultimately returned (because they do not pass the user's ",(0,i.jsx)(s.code,{children:"WHERE"})," conditions) may still end up being locked. You can use the ",(0,i.jsx)(s.code,{children:"EXPLAIN"})," command to see which conditions are applied at the relation level (and therefore do not lock rows) and which are not."]}),"\n",(0,i.jsxs)(s.p,{children:["A more complex view that does not satisfy all of these conditions is read-only by default: the system will not allow an insert, update, or delete on the view. You can get the effect of an updatable view by creating rules (see ",(0,i.jsx)(s.a,{href:"/docs/sql-stmts/create-rule",children:"CREATE RULE"}),")."]}),"\n",(0,i.jsxs)(s.p,{children:["Note that the user performing the insert, update or delete on the view must have the corresponding insert, update or delete privilege on the view. In addition the view's owner must have the relevant privileges on the underlying base relations, but the user performing the update does not need any permissions on the underlying base relations (again, refer to ",(0,i.jsx)(s.a,{href:"https://www.postgresql.org/docs/12/rules-privileges.html",children:"Rules and Privileges"})," in the PostgreSQL documentation)."]}),"\n",(0,i.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(s.p,{children:"Create a view consisting of all comedy films:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"CREATE VIEW comedies AS\n    SELECT * FROM films \n    WHERE kind = 'comedy';\n"})}),"\n",(0,i.jsxs)(s.p,{children:["This creates a view containing the columns that are in the ",(0,i.jsx)(s.code,{children:"film"})," table at the time of view creation. Though ",(0,i.jsx)(s.code,{children:"*"})," was used to create the view, columns added later to the table will not be part of the view."]}),"\n",(0,i.jsxs)(s.p,{children:["Create a view with ",(0,i.jsx)(s.code,{children:"LOCAL CHECK OPTION"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"CREATE VIEW universal_comedies AS\n    SELECT *\n    FROM comedies\n    WHERE classification = 'U'\n    WITH LOCAL CHECK OPTION;\n"})}),"\n",(0,i.jsxs)(s.p,{children:["This creates a view based on the comedies ",(0,i.jsx)(s.code,{children:"view"}),", showing only films with ",(0,i.jsx)(s.code,{children:"kind = 'Comedy'"})," and ",(0,i.jsx)(s.code,{children:"classification = 'U'"}),". Any attempt to ",(0,i.jsx)(s.code,{children:"INSERT"})," or ",(0,i.jsx)(s.code,{children:"UPDATE"})," a row in the view is rejected if the new row doesn't have ",(0,i.jsx)(s.code,{children:"classification = 'U'"}),", but the film ",(0,i.jsx)(s.code,{children:"kind"})," will not be checked."]}),"\n",(0,i.jsxs)(s.p,{children:["Create a view with ",(0,i.jsx)(s.code,{children:"CASCADED CHECK OPTION"}),":"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"CREATE VIEW pg_comedies AS\n    SELECT *\n    FROM comedies\n    WHERE classification = 'PG'\n    WITH CASCADED CHECK OPTION;\n"})}),"\n",(0,i.jsxs)(s.p,{children:["This creates a view that checks both the ",(0,i.jsx)(s.code,{children:"kind"})," and ",(0,i.jsx)(s.code,{children:"classification"})," of new rows."]}),"\n",(0,i.jsx)(s.p,{children:"Create a view with a mix of updatable and non-updatable columns:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"CREATE VIEW comedies AS\n    SELECT f.*,\n           country_code_to_name(f.country_code) AS country,\n           (SELECT avg(r.rating)\n            FROM user_ratings r\n            WHERE r.film_id = f.id) AS avg_rating\n    FROM films f\n    WHERE f.kind = 'Comedy';\n"})}),"\n",(0,i.jsxs)(s.p,{children:["This view supports ",(0,i.jsx)(s.code,{children:"INSERT"}),", ",(0,i.jsx)(s.code,{children:"UPDATE"}),", and ",(0,i.jsx)(s.code,{children:"DELETE"}),". All the columns from the ",(0,i.jsx)(s.code,{children:"films"})," table will be updatable, whereas the computed columns ",(0,i.jsx)(s.code,{children:"country"})," and ",(0,i.jsx)(s.code,{children:"avg_rating"})," will be read-only."]}),"\n",(0,i.jsx)(s.p,{children:"Create a view that gets the top ten ranked baby names:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"CREATE VIEW topten AS \n    SELECT name, rank, gender, year\n    FROM names, rank\n    WHERE rank < '11' AND names.id=rank.id;\n"})}),"\n",(0,i.jsx)(s.p,{children:"Create a recursive view consisting of the numbers from 1 to 100:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-sql",children:"CREATE RECURSIVE VIEW public.nums_1_100 (n) AS\n    VALUES (1)\nUNION ALL\n    SELECT n+1 FROM nums_1_100 WHERE n < 100;\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Notice that although the recursive view's name is schema-qualified in this ",(0,i.jsx)(s.code,{children:"CREATE VIEW"})," command, its internal self-reference is not schema-qualified. This is because the implicitly-created CTE's name cannot be schema-qualified."]}),"\n",(0,i.jsx)(s.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"CREATE OR REPLACE VIEW"})," is a Cloudberry Database extension. So is the concept of a temporary view.  The ",(0,i.jsx)(s.code,{children:"WITH ( ... )"})," clause is an extension as well."]}),"\n",(0,i.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/sql-stmts/alter-view",children:"ALTER VIEW"}),", ",(0,i.jsx)(s.a,{href:"/docs/sql-stmts/drop-view",children:"DROP VIEW"}),", ",(0,i.jsx)(s.a,{href:"/docs/sql-stmts/create-materialized-view",children:"CREATE MATERIALIZED VIEW"})]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>r});var i=n(67294);const t={},a=i.createContext(t);function r(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);