"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7145],{67773:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=s(85893),t=s(11151);const i={title:"Recommended Monitoring and Maintenance Tasks"},d="Recommended Monitoring and Maintenance Tasks",c={id:"sys-admin/recommended-maintenance-monitoring-tasks",title:"Recommended Monitoring and Maintenance Tasks",description:"This section lists monitoring and maintenance operations recommended to ensure high availability and consistent performance of your Cloudberry Database cluster.",source:"@site/docs/sys-admin/recommended-maintenance-monitoring-tasks.md",sourceDirName:"sys-admin",slug:"/sys-admin/recommended-maintenance-monitoring-tasks",permalink:"/docs/sys-admin/recommended-maintenance-monitoring-tasks",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-admin/recommended-maintenance-monitoring-tasks.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733293498,formattedLastUpdatedAt:"Dec 4, 2024",frontMatter:{title:"Recommended Monitoring and Maintenance Tasks"},sidebar:"docsbars",previous:{title:"Enable Coordinator Mirroring for Cloudberry Database",permalink:"/docs/sys-admin/enable-coordinator-mirroring"},next:{title:"SQL Statements Index",permalink:"/docs/sql-stmts/"}},a={},o=[{value:"Database state monitoring operations",id:"database-state-monitoring-operations",level:2},{value:"Hardware and operating system monitoring",id:"hardware-and-operating-system-monitoring",level:2},{value:"Catalog monitoring",id:"catalog-monitoring",level:2},{value:"Data maintenance",id:"data-maintenance",level:2},{value:"Database maintenance",id:"database-maintenance",level:2}];function h(e){const n={h1:"h1",h2:"h2",p:"p",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"recommended-monitoring-and-maintenance-tasks",children:"Recommended Monitoring and Maintenance Tasks"}),"\n",(0,r.jsx)(n.p,{children:"This section lists monitoring and maintenance operations recommended to ensure high availability and consistent performance of your Cloudberry Database cluster."}),"\n",(0,r.jsx)(n.p,{children:"The tables in the following sections suggest operations that a Cloudberry Database system administrator can perform periodically to ensure that all components of the system are operating optimally. Monitoring operations help you to detect and diagnose problems early. Maintenance operations help you to keep the system up-to-date and avoid deteriorating performance, for example, from bloated system tables or diminishing free disk space."}),"\n",(0,r.jsx)(n.p,{children:"It is not necessary to implement all of these suggestions in every cluster; use the frequency and severity recommendations as a guide to implement measures according to your service requirements."}),"\n",(0,r.jsx)(n.h2,{id:"database-state-monitoring-operations",children:"Database state monitoring operations"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Operations"}),(0,r.jsx)("th",{children:"Procedure"}),(0,r.jsx)("th",{children:"Corrective Actions"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["List segments that are currently down. If any rows are returned, this\nshould generate a warning or alert.\n",(0,r.jsx)("p",{children:"Recommended frequency: run every 5 to 10 minutes"}),"\n",(0,r.jsx)("p",{children:"Severity: IMPORTANT"})]})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(n.p,{children:["Run the following query in the ",(0,r.jsx)("code",{children:"postgres"})," database:"]}),(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:(0,r.jsxs)(n.p,{children:["SELECT *",(0,r.jsx)("br",{}),"\nFROM gp_segment_configuration",(0,r.jsx)("br",{}),"\nWHERE status = 'd';"]})})})]}),(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"If the query returns any rows, follow these steps to correct the\nproblem:"}),(0,r.jsxs)("ol",{children:[(0,r.jsx)("li",{children:"Verify that the hosts with down segments are responsive. "}),(0,r.jsx)("li",{children:(0,r.jsx)(n.p,{children:"If hosts are OK, check the log files for the primaries and mirrors\nof the down segments to discover the root cause of the segments\ngoing down."})}),(0,r.jsx)("li",{children:(0,r.jsxs)(n.p,{children:["If no unexpected errors are found, run the\n",(0,r.jsx)("code",{children:"gprecoverseg"})," utility to bring the segments back online."]})})]})]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Check for segments that are up and not in sync. If rows are returned,\nthis should generate a warning or alert.\n",(0,r.jsx)("p",{children:"Recommended frequency: run every 5 to 10 minutes"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)(n.p,{children:["Execute the following query in the ",(0,r.jsx)("code",{children:"postgres"})," database:"]}),(0,r.jsx)("pre",{children:(0,r.jsxs)("code",{children:["SELECT * FROM gp_segment_configuration ",(0,r.jsx)("br",{}),"\nWHERE mode = 'n' and status ",(0,r.jsx)("br",{}),"\n= 'u' and content <> -1;"]})})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["If the query returns rows, then the segment might be in the process of\nmoving from ",(0,r.jsx)("code",{children:"Not In Sync"})," to\n",(0,r.jsx)("code",{children:"Synchronized"})," mode. Use ",(0,r.jsx)("code",{children:"gpstate -e"})," to track\nprogress."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Check for segments that are not operating in their preferred role but\nare marked as up and ",(0,r.jsx)("code",{children:"Synchronized"}),". If any segments are\nfound, the cluster might not be balanced. If any rows are returned this\nshould generate a warning or alert.\n",(0,r.jsx)("p",{children:"Recommended frequency: run every 5 to 10 minutes"}),"\n",(0,r.jsx)("p",{children:"Severity: IMPORTANT"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)(n.p,{children:["Execute the following query in the ",(0,r.jsx)("code",{children:"postgres"})," database:"]}),(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:(0,r.jsxs)(n.p,{children:["SELECT * FROM gp_segment_configuration",(0,r.jsx)("br",{}),"WHERE preferred_role <> ",(0,r.jsx)("br",{}),"role and status = 'u' and mode = 's';"]})})})]})}),(0,r.jsx)("td",{children:(0,r.jsx)("p",{children:(0,r.jsxs)(n.p,{children:["When the segments are not running in their preferred role, processing\nmight be skewed. Run ",(0,r.jsx)("code",{children:"gprecoverseg -r"})," to bring the\nsegments back into their preferred roles."]})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Run a distributed query to test that it runs on all segments. One row\nshould be returned for each primary segment.\n",(0,r.jsx)("p",{children:"Recommended frequency: run every 5 to 10 minutes"}),"\n",(0,r.jsx)("p",{children:"Severity: CRITICAL"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)(n.p,{children:["Execute the following query in the ",(0,r.jsx)("code",{children:"postgres"})," database:"]}),(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:(0,r.jsxs)(n.p,{children:["SELECT gp_segment_id, count(*)",(0,r.jsx)("br",{}),"\nFROM gp_dist_random('pg_class')",(0,r.jsx)("br",{}),"\nGROUP BY 1;"]})})})]})}),(0,r.jsx)("td",{children:(0,r.jsx)("p",{children:(0,r.jsx)(n.p,{children:"If this query fails, there is an issue dispatching to some segments in\nthe cluster. This is a rare event. Check the hosts that are not able\nto be dispatched to ensure there is no hardware or networking issue."})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:['Test the state of coordinator mirroring on Cloudberry Database. If the\nvalue is not "STREAMING", an alert or warning will be raised.\n',(0,r.jsx)("p",{children:"Recommended frequency: run every 5 to 10 minutes"}),"\n",(0,r.jsx)("p",{children:"Severity: IMPORTANT"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)(n.p,{children:["Run the following ",(0,r.jsx)("code",{children:"psql"}),"\ncommand:"]}),(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:(0,r.jsxs)(n.p,{children:["psql <dbname> -c",(0,r.jsx)("br",{}),"\n'SELECT pid, state FROM pg_stat_replication;'"]})})})]})}),(0,r.jsx)("td",{children:(0,r.jsx)("p",{children:(0,r.jsxs)(n.p,{children:["Check the log file from the coordinator and standby coordinator for\nerrors. If there are no unexpected errors and the machines are up, run\nthe ",(0,r.jsx)("code",{children:"gpinitstandby"})," utility to bring the standby online."]})})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Perform a basic check to see whether the coordinator is up and functioning.\n",(0,r.jsx)("p",{children:"Recommended frequency: run every 5 to 10 minutes"}),"\n",(0,r.jsx)("p",{children:"Severity: CRITICAL"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)("div",{children:[(0,r.jsxs)(n.p,{children:["Run the following query in the ",(0,r.jsx)("code",{children:"postgres"})," database:"]}),(0,r.jsx)("pre",{children:(0,r.jsxs)("code",{children:["SELECT count(*) FROM",(0,r.jsx)("br",{}),"\ngp_segment_configuration;"]})})]})}),(0,r.jsx)("td",{children:(0,r.jsx)("p",{children:(0,r.jsx)(n.p,{children:"If this query fails, the active coordinator might be down. Try to start\nthe database on the original coordinator if the server is up and\nrunning. If that fails, try to activate the standby coordinator as\ncoordinator."})})})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"hardware-and-operating-system-monitoring",children:"Hardware and operating system monitoring"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Operations"}),(0,r.jsx)("th",{children:"Procedure"}),(0,r.jsx)("th",{children:"Corrective Actions"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Check disk space usage on volumes used for Cloudberry Database data\nstorage and the OS.\n",(0,r.jsx)("p",{children:"Recommended frequency: every 5 to 30 minutes"}),"\n",(0,r.jsx)("p",{children:"Severity: CRITICAL"})]})}),(0,r.jsx)("td",{children:(0,r.jsx)("div",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(n.p,{children:"Set a threshold to raise an alert when a disk reaches a percentage\nof capacity. The recommended threshold is 75% full."})}),(0,r.jsx)("li",{children:(0,r.jsx)(n.p,{children:"It is not recommended to run the system with capacities\napproaching 100%."})})]})})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)("code",{children:"VACUUM"}),"/",(0,r.jsx)("code",{children:"VACUUM FULL"})," on user tables to\nreclaim space occupied by dead rows."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Check for errors or dropped packets on the network interfaces.\n",(0,r.jsx)("p",{children:"Recommended frequency: hourly"}),"\n",(0,r.jsx)("p",{children:"Severity: IMPORTANT"})]})}),(0,r.jsx)("td",{children:"Set up a network interface checks. "}),(0,r.jsx)("td",{children:(0,r.jsx)("p",{children:"Work with network and OS teams to resolve errors."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Check for RAID errors or degraded RAID performance.\n",(0,r.jsx)("p",{children:"Recommended frequency: every 5 minutes"}),"\n",(0,r.jsx)("p",{children:"Severity: CRITICAL"})]})}),(0,r.jsx)("td",{children:"Set up a RAID check."}),(0,r.jsx)("td",{children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"Replace failed disks as soon as possible. "}),(0,r.jsx)("li",{children:(0,r.jsx)(n.p,{children:"Work with the system administration team to resolve other RAID or\ncontroller errors as soon as possible."})})]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"Check for adequate I/O bandwidth and I/O skew."}),(0,r.jsx)("p",{children:(0,r.jsx)(n.p,{children:"Recommended frequency: when create a cluster or when hardware issues\nare suspected."})})]}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Run the Cloudberry Database\n",(0,r.jsx)("code",{children:"gpcheckperf"})," utility."]})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(n.p,{children:"The cluster might be under-specified if data transfer rates are not\nsimilar to the following:"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:"2 GB per second disk read"}),(0,r.jsx)("li",{children:"1 GB per second disk write"}),(0,r.jsx)("li",{children:"10 Gigabit per second network read and write "})]}),(0,r.jsx)(n.p,{children:"If transfer rates are lower than expected, consult with your data\narchitect regarding performance expectations."})]}),(0,r.jsx)("p",{children:(0,r.jsx)(n.p,{children:"If the machines on the cluster display an uneven performance profile,\nwork with the system administration team to fix faulty machines."})})]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"catalog-monitoring",children:"Catalog monitoring"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Operations"}),(0,r.jsx)("th",{children:"Procedure"}),(0,r.jsx)("th",{children:"Corrective Actions"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Run catalog consistency checks in each database to ensure the catalog on\neach host in the cluster is consistent and in a good state.\n",(0,r.jsx)("p",{children:"You might run this command while the database is up and running. "}),"\n",(0,r.jsx)("p",{children:"Recommended frequency: weekly"}),"\n",(0,r.jsx)("p",{children:"Severity: IMPORTANT"})]})}),(0,r.jsxs)("td",{children:[(0,r.jsxs)(n.p,{children:["Run the Cloudberry Database ",(0,r.jsx)("code",{children:"gpcheckcat"})," utility in each database:\n",(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:"gpcheckcat -O -p [target_port]"})})]}),(0,r.jsx)("div",{children:(0,r.jsxs)(n.p,{children:["Note: With the\n",(0,r.jsx)("code",{children:"-O"})," option, ",(0,r.jsx)("code",{children:"gpcheckcat"})," runs just 10 of its usual 15 tests."]})})]}),(0,r.jsx)("td",{children:"Run the repair scripts for any issues identified."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Check for ",(0,r.jsx)("code",{children:"pg_class"})," entries that have no corresponding ",(0,r.jsx)("code",{children:"pg_attribute"})," entry.\n",(0,r.jsx)("p",{children:"Recommended frequency: monthly"}),"\n",(0,r.jsx)("p",{children:"Severity: IMPORTANT"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["With no users on the system, run the Cloudberry Database ",(0,r.jsx)("code",{children:"gpcheckcat"})," utility in each database:\n",(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:"gpcheckcat -R pgclass -p [target_port]"})})]})}),(0,r.jsx)("td",{children:"Run the repair scripts for any issues identified."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Check for leaked temporary schema and missing schema definition.\n",(0,r.jsx)("p",{children:"Recommended frequency: monthly"}),"\n",(0,r.jsx)("p",{children:"Severity: IMPORTANT"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["During a downtime, with no users on the system, run the Cloudberry Database ",(0,r.jsx)("code",{children:"gpcheckcat"})," utility in each database:\n",(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:"gpcheckcat -R namespace -p [target_port]"})})]})}),(0,r.jsx)("td",{children:"Run the repair scripts for any issues identified."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Check constraints on randomly distributed tables.\n",(0,r.jsx)("p",{children:"Recommended frequency: monthly"}),"\n",(0,r.jsx)("p",{children:"Severity: IMPORTANT"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["With no users on the system, run the Cloudberry Database ",(0,r.jsx)("code",{children:"gpcheckcat"})," utility in each database:\n",(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:"gpcheckcat -R distribution_policy -p [target_port]"})})]})}),(0,r.jsx)("td",{children:"Run the repair scripts for any issues identified."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Check for dependencies on non-existent objects.\n",(0,r.jsx)("p",{children:"Recommended frequency: monthly"}),"\n",(0,r.jsx)("p",{children:"Severity: IMPORTANT"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["During a downtime, with no users on the system, run the Cloudberry Database ",(0,r.jsx)("code",{children:"gpcheckcat"})," utility in each database:\n",(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:"gpcheckcat -R dependency -p [target_port]"})})]})}),(0,r.jsx)("td",{children:"Run the repair scripts for any issues identified."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"data-maintenance",children:"Data maintenance"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Operations"}),(0,r.jsx)("th",{children:"Procedure"}),(0,r.jsx)("th",{children:"Corrective Actions"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"Check for missing statistics on tables. "}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Check the ",(0,r.jsx)("code",{children:"gp_stats_missing"})," view in each database:\n",(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:"SELECT * FROM gp_toolkit.gp_stats_missing;"})})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)("code",{children:"ANALYZE"})," on tables that are missing statistics."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Check for tables that have bloat (dead space) in data files that cannot\nbe recovered by a regular ",(0,r.jsx)("code",{children:"VACUUM"})," command.\n",(0,r.jsx)("p",{children:"Recommended frequency: weekly or monthly"}),"\n",(0,r.jsx)("p",{children:"Severity: WARNING"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Check the ",(0,r.jsx)("code",{children:"gp_bloat_diag"})," view in each database:\n",(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:"SELECT * FROM gp_toolkit.gp_bloat_diag;"})})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("code",{children:"VACUUM FULL"})," acquires an ",(0,r.jsx)("code",{children:"ACCESS EXCLUSIVE"})," lock\non tables. Run ",(0,r.jsx)("code",{children:"VACUUM FULL"})," during a time when users and\napplications do not require access to the tables, such as during a time\nof low operation, or during a maintenance window."]})})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"database-maintenance",children:"Database maintenance"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Operation"}),(0,r.jsx)("th",{children:"Procedure"}),(0,r.jsx)("th",{children:"Corrective Actions"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Reclaim space occupied by deleted rows in the heap tables so that the\nspace they occupy can be reused.",(0,r.jsx)("p",{children:"Recommended frequency: daily"}),"\n",(0,r.jsx)("p",{children:"Severity: CRITICAL"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Vacuum user tables:\n",(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:"VACUUM <table>;"})})]})}),(0,r.jsx)("td",{children:"Vacuum updated tables regularly to prevent bloating."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"Update table statistics."}),(0,r.jsx)("p",{children:(0,r.jsx)(n.p,{children:"Recommended frequency: after loading data and before executing queries"})}),(0,r.jsx)("p",{children:"Severity: CRITICAL"})]}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Analyze user tables. You can use the\n",(0,r.jsx)("code",{children:"analyzedb"})," management utility:\n",(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:"analyzedb -d <database> -a"})})]})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Analyze updated tables regularly so that the optimizer can produce\nefficient query execution plans."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Backup the database data.\n",(0,r.jsx)("p",{children:"Recommended frequency: daily, or as required by your backup plan"}),"\n",(0,r.jsx)("p",{children:"Severity: CRITICAL"})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["Run the ",(0,r.jsx)("code",{children:"gpbackup"})," utility to create a backup of the coordinator and segment databases in\nparallel."]})}),(0,r.jsx)("td",{children:(0,r.jsx)(n.p,{children:"Best practice is to have a current backup ready in case the database\nmust be restored."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsxs)("td",{children:[(0,r.jsx)(n.p,{children:"Vacuum, reindex, and analyze system catalogs to maintain an efficient\ncatalog."}),(0,r.jsx)("p",{children:(0,r.jsx)(n.p,{children:"Recommended frequency: weekly, or more often if database objects are\ncreated and dropped frequently"})})]}),(0,r.jsx)("td",{children:(0,r.jsxs)("ol",{children:[(0,r.jsx)("li",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("code",{children:"VACUUM"})," the system tables in each database."]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(n.p,{children:["Run ",(0,r.jsx)("code",{children:"REINDEX SYSTEM"})," in each database, or use the\n",(0,r.jsx)("code",{children:"reindexdb"}),"\ncommand-line utility with the ",(0,r.jsx)("code",{children:"-s"})," option:\n",(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:"reindexdb -s <database>"})})]})}),(0,r.jsx)("li",{children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("code",{children:"ANALYZE"})," each of the system tables:\n",(0,r.jsx)("pre",{children:(0,r.jsx)("code",{children:"analyzedb -s pg_catalog -d <database>"})})]})})]})}),(0,r.jsx)("td",{children:(0,r.jsxs)(n.p,{children:["The optimizer retrieves information from the system tables to create\nquery plans. If system tables and indexes are allowed to become bloated\nover time, scanning the system tables increases query execution time. It\nis important to run ",(0,r.jsx)("code",{children:"ANALYZE"})," after reindexing, because ",(0,r.jsx)("code",{children:"REINDEX"})," leaves indexes with no statistics."]})})]})]})]})]})}function l(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>d});var r=s(67294);const t={},i=r.createContext(t);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);