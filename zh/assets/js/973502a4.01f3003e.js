"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[9905],{57170:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var s=a(85893),n=a(11151);const i={title:"Update Statistics"},o="Update Statistics in Cloudberry Database",r={id:"performance/update-stats-using-analyze",title:"Update Statistics",description:"The most important prerequisite for good query performance is to begin with accurate statistics for the tables. Updating statistics with the ANALYZE statement enables the query planner to generate optimal query plans. When a table is analyzed, information about the data is stored in the system catalog tables. If the stored information is out of date, the planner can generate inefficient plans.",source:"@site/docs/performance/update-stats-using-analyze.md",sourceDirName:"performance",slug:"/performance/update-stats-using-analyze",permalink:"/zh/docs/performance/update-stats-using-analyze",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/performance/update-stats-using-analyze.md",tags:[],version:"current",lastUpdatedBy:"Ed Espino",lastUpdatedAt:1733247584,formattedLastUpdatedAt:"2024\u5e7412\u67083\u65e5",frontMatter:{title:"Update Statistics"},sidebar:"docsbars",previous:{title:"Query Performance Overview",permalink:"/zh/docs/performance/"},next:{title:"Create Unique Index on AO Table",permalink:"/zh/docs/performance/use-unique-index-on-ao-tables"}},l={},c=[{value:"View whether statistics are updated",id:"view-whether-statistics-are-updated",level:2},{value:"Generate statistics selectively",id:"generate-statistics-selectively",level:2},{value:"Improve statistics quality",id:"improve-statistics-quality",level:2},{value:"When to run ANALYZE",id:"when-to-run-analyze",level:2},{value:"Configure automatic statistics collection",id:"configure-automatic-statistics-collection",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"update-statistics-in-cloudberry-database",children:"Update Statistics in Cloudberry Database"}),"\n",(0,s.jsxs)(t.p,{children:["The most important prerequisite for good query performance is to begin with accurate statistics for the tables. Updating statistics with the ",(0,s.jsx)(t.code,{children:"ANALYZE"})," statement enables the query planner to generate optimal query plans. When a table is analyzed, information about the data is stored in the system catalog tables. If the stored information is out of date, the planner can generate inefficient plans."]}),"\n",(0,s.jsx)(t.h2,{id:"view-whether-statistics-are-updated",children:"View whether statistics are updated"}),"\n",(0,s.jsxs)(t.p,{children:["To view whether the statistics of a table are up to date, use the ",(0,s.jsx)(t.code,{children:"pg_stat_all_tables"})," system view. The ",(0,s.jsx)(t.code,{children:"last_analyze"})," column shows the last time the table was analyzed. The ",(0,s.jsx)(t.code,{children:"last_autoanalyze"})," column shows the last time the table was automatically analyzed. The ",(0,s.jsx)(t.code,{children:"last_analyze"})," and ",(0,s.jsx)(t.code,{children:"last_autoanalyze"})," columns are updated when the ",(0,s.jsx)(t.code,{children:"ANALYZE"})," statement is run on the table."]}),"\n",(0,s.jsxs)(t.p,{children:["For example, to view whether the statistics of the ",(0,s.jsx)(t.code,{children:"test_analyze"})," table are up to date, run the following query:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SELECT schemaname, relname, last_analyze, last_autoanalyze \nFROM pg_stat_all_tables \nWHERE relname = 'test_analyze';\n"})}),"\n",(0,s.jsx)(t.h2,{id:"generate-statistics-selectively",children:"Generate statistics selectively"}),"\n",(0,s.jsxs)(t.p,{children:["Running ",(0,s.jsx)(t.a,{href:"https://github.com/cloudberrydb/cloudberrydb-site/blob/cbdb-doc-validation/docs/sql-stmts/analyze.md",children:(0,s.jsx)(t.code,{children:"ANALYZE"})})," with no arguments updates statistics for all tables in the database. This can be a very long-running process and it is not recommended. You should ",(0,s.jsx)(t.code,{children:"ANALYZE"})," tables selectively when data has changed or use the ",(0,s.jsx)(t.a,{href:"https://github.com/cloudberrydb/cloudberrydb-site/blob/cbdb-doc-validation/docs/sys-utilities/analyzedb.md",children:"analyzedb"})," utility."]}),"\n",(0,s.jsxs)(t.p,{children:["Running ",(0,s.jsx)(t.code,{children:"ANALYZE"})," on a large table can take a long time. If it is not feasible to run ",(0,s.jsx)(t.code,{children:"ANALYZE"})," on all columns of a very large table, you can generate statistics for selected columns only using ",(0,s.jsx)(t.code,{children:"ANALYZE table(column, ...)"}),". Be sure to include columns used in joins, ",(0,s.jsx)(t.code,{children:"WHERE"})," clauses, ",(0,s.jsx)(t.code,{children:"SORT"})," clauses, ",(0,s.jsx)(t.code,{children:"GROUP BY"})," clauses, or ",(0,s.jsx)(t.code,{children:"HAVING"})," clauses."]}),"\n",(0,s.jsxs)(t.p,{children:["For a partitioned table, you can run ",(0,s.jsx)(t.code,{children:"ANALYZE"})," just on partitions that have changed, for example, if you add a new partition. Note that for partitioned tables, you can run ",(0,s.jsx)(t.code,{children:"ANALYZE"})," on the root partitioned table, or on the leaf partitions (files where data and statistics are actually stored). In Cloudberry Database, running ",(0,s.jsx)(t.code,{children:"ANALYZE"})," on a single partition of a partitioned table also updates the statistical information of the root table, indicating that statistics gathering for one partition might affect the entire partitioned table's optimizer statistics. You can find the names of the leaf partitions using the ",(0,s.jsx)(t.code,{children:"pg_partition_tree()"})," function:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"SELECT * FROM pg_partition_tree( 'parent_table' );\n"})}),"\n",(0,s.jsx)(t.h2,{id:"improve-statistics-quality",children:"Improve statistics quality"}),"\n",(0,s.jsx)(t.p,{children:"There is a trade-off between the amount of time it takes to generate statistics and the quality, or accuracy, of the statistics."}),"\n",(0,s.jsxs)(t.p,{children:["To allow large tables to be analyzed in a reasonable amount of time, ",(0,s.jsx)(t.code,{children:"ANALYZE"})," takes a random sample of the table contents, rather than examining every row. To increase the number of sample values for all table columns adjust the ",(0,s.jsx)(t.code,{children:"default_statistics_target"})," configuration parameter. The target value ranges from ",(0,s.jsx)(t.code,{children:"1"})," to ",(0,s.jsx)(t.code,{children:"10000"}),"; the default target value is ",(0,s.jsx)(t.code,{children:"100"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"default_statistics_target"})," variable applies to all columns by default, and specifies the number of values that are stored in the list of common values. A larger target might improve the quality of the query planner's estimates, especially for columns with irregular data patterns."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"default_statistics_target"})," can be set at the session level using the ",(0,s.jsx)(t.code,{children:"SET default_statistics_target"})," statement. To set the default value of this configuration parameter, you need to set it in the ",(0,s.jsx)(t.code,{children:"postgresql.conf"})," file and performs a reload."]}),"\n",(0,s.jsx)(t.h2,{id:"when-to-run-analyze",children:"When to run ANALYZE"}),"\n",(0,s.jsxs)(t.p,{children:["Run ",(0,s.jsx)(t.code,{children:"ANALYZE"}),":"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"after loading data,"}),"\n",(0,s.jsxs)(t.li,{children:["after ",(0,s.jsx)(t.code,{children:"CREATE INDEX"})," operations,"]}),"\n",(0,s.jsxs)(t.li,{children:["and after ",(0,s.jsx)(t.code,{children:"INSERT"}),", ",(0,s.jsx)(t.code,{children:"UPDATE"}),", and ",(0,s.jsx)(t.code,{children:"DELETE"})," operations that significantly change the underlying data."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"ANALYZE"})," requires only a read lock on the table, so it might be run in parallel with other database activity. But for performance reasons, it is not recommended to run ",(0,s.jsx)(t.code,{children:"ANALYZE"})," while performing loads, ",(0,s.jsx)(t.code,{children:"INSERT"}),", ",(0,s.jsx)(t.code,{children:"UPDATE"}),", ",(0,s.jsx)(t.code,{children:"DELETE"}),", and ",(0,s.jsx)(t.code,{children:"CREATE INDEX"})," operations."]}),"\n",(0,s.jsx)(t.h2,{id:"configure-automatic-statistics-collection",children:"Configure automatic statistics collection"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"gp_autostats_mode"})," configuration parameter, together with the ",(0,s.jsx)(t.code,{children:"gp_autostats_on_change_threshold"})," parameter, determines when an automatic analyze operation is triggered. When automatic statistics collection is triggered, the planner adds an ",(0,s.jsx)(t.code,{children:"ANALYZE"})," step to the query."]}),"\n",(0,s.jsxs)(t.p,{children:["By default, the value of ",(0,s.jsx)(t.code,{children:"gp_autostats_mode"})," is ",(0,s.jsx)(t.code,{children:"none"}),". Setting this parameter to ",(0,s.jsx)(t.code,{children:"on_no_stats"})," triggers statistics collection for ",(0,s.jsx)(t.code,{children:"CREATE TABLE AS SELECT"}),", ",(0,s.jsx)(t.code,{children:"INSERT"}),", or ",(0,s.jsx)(t.code,{children:"COPY"})," operations invoked by the table owner on any table that has no existing statistics."]}),"\n",(0,s.jsxs)(t.p,{children:["Setting ",(0,s.jsx)(t.code,{children:"gp_autostats_mode"})," to ",(0,s.jsx)(t.code,{children:"on_change"})," triggers statistics collection only when the number of rows affected exceeds the threshold defined by ",(0,s.jsx)(t.code,{children:"gp_autostats_on_change_threshold"}),", which has a default value of ",(0,s.jsx)(t.code,{children:"2147483647"}),". The these operations invoked on a table by its owner can trigger automatic statistics collection with ",(0,s.jsx)(t.code,{children:"on_change"}),": ",(0,s.jsx)(t.code,{children:"CREATE TABLE AS SELECT"}),", ",(0,s.jsx)(t.code,{children:"UPDATE"}),", ",(0,s.jsx)(t.code,{children:"DELETE"}),", ",(0,s.jsx)(t.code,{children:"INSERT"}),", and ",(0,s.jsx)(t.code,{children:"COPY"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Setting the ",(0,s.jsx)(t.code,{children:"gp_autostats_allow_nonowner"})," server configuration parameter to ",(0,s.jsx)(t.code,{children:"true"})," also instructs Cloudberry Database to trigger automatic statistics collection on a table when:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"gp_autostats_mode=on_no_stats"})," and the first user to ",(0,s.jsx)(t.code,{children:"INSERT"})," or ",(0,s.jsx)(t.code,{children:"COPY"})," into the table is a non-owner."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Setting ",(0,s.jsx)(t.code,{children:"gp_autostats_mode"})," to ",(0,s.jsx)(t.code,{children:"none"})," deactivates automatics statistics collection."]}),"\n",(0,s.jsxs)(t.p,{children:["For partitioned tables, automatic statistics collection is not triggered if data is inserted from the top-level parent table of a partitioned table. But automatic statistics collection ",(0,s.jsx)(t.em,{children:"is"})," triggered if data is inserted directly in a leaf table (where the data is stored) of the partitioned table."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>o});var s=a(67294);const n={},i=s.createContext(n);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);