"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7377],{59533:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=s(85893),n=s(11151);const i={title:"Load Data Using gpfdist"},o="Load Data into Cloudberry Database Using gpfdist",r={id:"data-loading/load-data-using-gpfdist",title:"Load Data Using gpfdist",description:"To load data from local host files or files accessible via internal network, you can use the gpfdist protocol in the CREATE EXTERNAL TABLE statement. gpfdist is a file server utility that runs on a host other than the Cloudberry Database coordinator or standby coordinator. gpfdist serves files from a directory on the host to Cloudberry Database segments.",source:"@site/docs/data-loading/load-data-using-gpfdist.md",sourceDirName:"data-loading",slug:"/data-loading/load-data-using-gpfdist",permalink:"/docs/data-loading/load-data-using-gpfdist",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/data-loading/load-data-using-gpfdist.md",tags:[],version:"current",lastUpdatedBy:"Ed Espino",lastUpdatedAt:1733247584,formattedLastUpdatedAt:"Dec 3, 2024",frontMatter:{title:"Load Data Using gpfdist"},sidebar:"docsbars",previous:{title:"Load Data Using COPY",permalink:"/docs/data-loading/load-data-using-copy"},next:{title:"Load Data Using the File Protocol",permalink:"/docs/data-loading/load-data-using-file-protocol"}},l={},d=[{value:"About gpfdist",id:"about-gpfdist",level:2},{value:"About gpfdist and external tables",id:"about-gpfdist-and-external-tables",level:3},{value:"About gpfdist setup and performance",id:"about-gpfdist-setup-and-performance",level:3},{value:"Control segment parallelism",id:"control-segment-parallelism",level:3},{value:"Step 1. Install gpfdist",id:"step-1-install-gpfdist",level:2},{value:"Step 2. Start and stop gpfdist",id:"step-2-start-and-stop-gpfdist",level:2},{value:"Step 3. Use gpfdist with external tables to load data",id:"step-3-use-gpfdist-with-external-tables-to-load-data",level:2},{value:"Example 1 - Run single gpfdist instance on a single-NIC machine",id:"example-1---run-single-gpfdist-instance-on-a-single-nic-machine",level:3},{value:"Example 2 \u2014 Run multiple gpfdist instances",id:"example-2--run-multiple-gpfdist-instances",level:3},{value:"Example 3 \u2014 Single gpfdist instance with error logging",id:"example-3--single-gpfdist-instance-with-error-logging",level:3},{value:"Example 4 - Create a writable external table with gpfdist",id:"example-4---create-a-writable-external-table-with-gpfdist",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components},{Details:s}=t;return s||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.h1,{id:"load-data-into-cloudberry-database-using-gpfdist",children:["Load Data into Cloudberry Database Using ",(0,a.jsx)(t.code,{children:"gpfdist"})]}),"\n",(0,a.jsxs)(t.p,{children:["To load data from local host files or files accessible via internal network, you can use the ",(0,a.jsx)(t.code,{children:"gpfdist"})," protocol in the ",(0,a.jsx)(t.code,{children:"CREATE EXTERNAL TABLE"})," statement. gpfdist is a file server utility that runs on a host other than the Cloudberry Database coordinator or standby coordinator. ",(0,a.jsx)(t.code,{children:"gpfdist"})," serves files from a directory on the host to Cloudberry Database segments."]}),"\n",(0,a.jsx)(t.p,{children:"When external data is served by gpfdist, all segments in the Cloudberry Database system can read or write external table data in parallel."}),"\n",(0,a.jsx)(t.p,{children:"The supported data formats are:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"CSV and TXT"}),"\n",(0,a.jsxs)(t.li,{children:["Any delimited text format supported by the ",(0,a.jsx)(t.code,{children:"FORMAT"})," clause"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["The general procedure for loading data using ",(0,a.jsx)(t.code,{children:"gpfdist"})," is as follows:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["Install gpfdist on a host other than the Cloudberry Database coordinator or standby coordinator. See ",(0,a.jsx)(t.a,{href:"#step-1-install-gpfdist",children:"Install gpfdist"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Start gpfdist on the host. See ",(0,a.jsx)(t.a,{href:"#step-2-start-and-stop-gpfdist",children:"Start and stop gpfdist"}),"."]}),"\n",(0,a.jsxs)(t.li,{children:["Create an external table using the ",(0,a.jsx)(t.code,{children:"gpfdist"})," protocol. See ",(0,a.jsx)(t.a,{href:"#step-3-use-gpfdist-with-external-tables-to-load-data",children:"Examples for using gpfdist with external tables"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(s,{children:[(0,a.jsx)("summary",{children:"About gpfdist"}),(0,a.jsx)(t.h2,{id:"about-gpfdist",children:"About gpfdist"}),(0,a.jsx)(t.p,{children:"Before using gpfdist, you might need to know how it works. This section provides an overview of gpfdist and how to use it with external tables."}),(0,a.jsx)(t.h3,{id:"about-gpfdist-and-external-tables",children:"About gpfdist and external tables"}),(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"gpfdist"})," file server utility is located in the ",(0,a.jsx)(t.code,{children:"$GPHOME/bin"})," directory on your Cloudberry Database coordinator host and on each segment host. When you start a ",(0,a.jsx)(t.code,{children:"gpfdist"})," instance you specify a listen port and the path to a directory containing files to read or where files are to be written. For example, this command runs ",(0,a.jsx)(t.code,{children:"gpfdist"})," in the background, listening on port ",(0,a.jsx)(t.code,{children:"8801"}),", and serving files in the ",(0,a.jsx)(t.code,{children:"/home/gpadmin/external_files"})," directory:"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"$ gpfdist -p 8801 -d /home/gpadmin/external_files &\n"})}),(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"CREATE EXTERNAL TABLE"})," command ",(0,a.jsx)(t.code,{children:"LOCATION"})," clause connects an external table definition to one or more ",(0,a.jsx)(t.code,{children:"gpfdist"})," instances. If the external table is readable, the ",(0,a.jsx)(t.code,{children:"gpfdist"})," server reads data records from files from in specified directory, packs them into a block, and sends the block in a response to a Cloudberry Database segment's request. The segments unpack rows that they receive and distribute the rows according to the external table's distribution policy. If the external table is a writable table, segments send blocks of rows in a request to gpfdist and gpfdist writes them to the external file."]}),(0,a.jsxs)(t.p,{children:["External data files can contain rows in CSV format or any delimited text format supported by the ",(0,a.jsx)(t.code,{children:"FORMAT"})," clause of the ",(0,a.jsx)(t.code,{children:"CREATE EXTERNAL TABLE"})," command."]}),(0,a.jsxs)(t.p,{children:["For readable external tables, ",(0,a.jsx)(t.code,{children:"gpfdist"})," uncompresses ",(0,a.jsx)(t.code,{children:"gzip"})," (",(0,a.jsx)(t.code,{children:".gz"}),") and ",(0,a.jsx)(t.code,{children:"bzip2"})," (.",(0,a.jsx)(t.code,{children:"bz2"}),") files automatically. You can use the wildcard character (",(0,a.jsx)(t.code,{children:"*"}),") or other C-style pattern matching to denote multiple files to read. External files are assumed to be relative to the directory specified when you started the ",(0,a.jsx)(t.code,{children:"gpfdist"})," instance."]}),(0,a.jsx)(t.h3,{id:"about-gpfdist-setup-and-performance",children:"About gpfdist setup and performance"}),(0,a.jsxs)(t.p,{children:["You can run ",(0,a.jsx)(t.code,{children:"gpfdist"})," instances on multiple hosts and you can run multiple ",(0,a.jsx)(t.code,{children:"gpfdist"})," instances on each host. This allows you to deploy ",(0,a.jsx)(t.code,{children:"gpfdist"})," servers strategically so that you can attain fast data load and unload rates by utilizing all of the available network bandwidth and Cloudberry Database's parallelism."]}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["Allow network traffic to use all ETL host network interfaces simultaneously. Run one instance of gpfdist for each interface on the ETL host, then declare the host name of each NIC in the ",(0,a.jsx)(t.code,{children:"LOCATION"})," clause of your external table definition (see ",(0,a.jsx)(t.a,{href:"#example-1---run-single-gpfdist-instance-on-a-single-nic-machine",children:"Examples for Creating External Tables"}),")."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:"Divide external table data equally among multiple gpfdist instances on the ETL host. For example, on an ETL system with two NICs, run two gpfdist instances (one on each NIC) to optimize data load performance and divide the external table data files evenly between the two gpfdist servers."}),"\n"]}),"\n"]}),(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Use pipes (",(0,a.jsx)(t.code,{children:"|"}),") to separate formatted text when you submit files to gpfdist. Cloudberry Database encloses comma-separated text strings in single or double quotes. gpfdist has to remove the quotes to parse the strings. Using pipes to separate formatted text avoids the extra step and improves performance."]})}),(0,a.jsx)(t.h3,{id:"control-segment-parallelism",children:"Control segment parallelism"}),(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"gp_external_max_segs"})," server configuration parameter controls the number of segment instances that can access a single gpfdist instance simultaneously. 64 is the default. You can set the number of segments such that some segments process external data files and some perform other database processing. Set this parameter in the ",(0,a.jsx)(t.code,{children:"postgresql.conf"})," file of your coordinator instance."]})]}),"\n",(0,a.jsx)(t.h2,{id:"step-1-install-gpfdist",children:"Step 1. Install gpfdist"}),"\n",(0,a.jsxs)(t.p,{children:["gpfdist is installed in ",(0,a.jsx)(t.code,{children:"$GPHOME/bin"})," of your Cloudberry Database coordinator host installation. Run gpfdist on a machine other than the Cloudberry Database coordinator or standby coordinator, such as on a machine devoted to ETL processing. Running gpfdist on the coordinator or standby coordinator can have a performance impact on query execution."]}),"\n",(0,a.jsx)(t.h2,{id:"step-2-start-and-stop-gpfdist",children:"Step 2. Start and stop gpfdist"}),"\n",(0,a.jsxs)(t.p,{children:["You can start gpfdist in your current directory location or in any directory that you specify. The default port is ",(0,a.jsx)(t.code,{children:"8080"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"From your current directory, type:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"gpfdist &\n"})}),"\n",(0,a.jsx)(t.p,{children:"From a different directory, specify the directory from which to serve files, and optionally, the HTTP port to run on."}),"\n",(0,a.jsx)(t.p,{children:"To start gpfdist in the background and log output messages and errors to a log file:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"$ gpfdist -d /var/load_files -p 8081 -l /home/`gpadmin`/log &\n"})}),"\n",(0,a.jsx)(t.p,{children:"For multiple gpfdist instances on the same ETL host, use a different base directory and port for each instance. For example:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"$ gpfdist -d /var/load_files1 -p 8081 -l /home/`gpadmin`/log1 &\n$ gpfdist -d /var/load_files2 -p 8082 -l /home/`gpadmin`/log2 &\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The logs are saved in ",(0,a.jsx)(t.code,{children:"/home/gpadmin/log"}),"."]}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsx)(t.p,{children:"To stop gpfdist when it is running in the background:"}),(0,a.jsx)(t.p,{children:"First find its process id:"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"$ ps -ef | grep gpfdist\n"})}),(0,a.jsxs)(t.p,{children:["Then stop the process, for example (where ",(0,a.jsx)(t.code,{children:"3457"})," is the process ID in this example):"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"$ kill 3457\n"})})]}),"\n",(0,a.jsx)(t.h2,{id:"step-3-use-gpfdist-with-external-tables-to-load-data",children:"Step 3. Use gpfdist with external tables to load data"}),"\n",(0,a.jsx)(t.p,{children:"The following examples show how to use gpfdist when creating an external table to load data into Cloudberry Database."}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"When using IPv6, always enclose the numeric IP addresses in square brackets."})}),"\n",(0,a.jsx)(t.h3,{id:"example-1---run-single-gpfdist-instance-on-a-single-nic-machine",children:"Example 1 - Run single gpfdist instance on a single-NIC machine"}),"\n",(0,a.jsxs)(t.p,{children:["Creates a readable external table, ext_expenses, using the gpfdist protocol. The files are formatted with a pipe (",(0,a.jsx)(t.code,{children:"|"}),") as the column delimiter."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"=# CREATE EXTERNAL TABLE ext_expenses ( name text,\n    date date, amount float4, category text, desc1 text )\n    LOCATION ('gpfdist://etlhost-1:8081/*')\nFORMAT 'TEXT' (DELIMITER '|');\n"})}),"\n",(0,a.jsx)(t.h3,{id:"example-2--run-multiple-gpfdist-instances",children:"Example 2 \u2014 Run multiple gpfdist instances"}),"\n",(0,a.jsxs)(t.p,{children:["Creates a readable external table, ",(0,a.jsx)(t.code,{children:"ext_expenses"}),", using the gpfdist protocol from all files with the txt extension. The column delimiter is a pipe (",(0,a.jsx)(t.code,{children:"|"}),") and NULL (' ') is a space."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"=# CREATE EXTERNAL TABLE ext_expenses ( name text, \n   date date,  amount float4, category text, desc1 text ) \n   LOCATION ('gpfdist://etlhost-1:8081/*.txt', \n             'gpfdist://etlhost-2:8081/*.txt')\n   FORMAT 'TEXT' ( DELIMITER '|' NULL ' ') ;\n"})}),"\n",(0,a.jsx)(t.h3,{id:"example-3--single-gpfdist-instance-with-error-logging",children:"Example 3 \u2014 Single gpfdist instance with error logging"}),"\n",(0,a.jsxs)(t.p,{children:["Uses the gpfdist protocol to create a readable external table, ",(0,a.jsx)(t.code,{children:"ext_expenses"}),", from all files with the txt extension. The column delimiter is a pipe (",(0,a.jsx)(t.code,{children:"|"}),") and NULL (' ') is a space."]}),"\n",(0,a.jsxs)(t.p,{children:["Access to the external table is single row error isolation mode. Input data formatting errors are captured internally in Cloudberry Database with a description of the error.  You can view the errors, fix the issues, and then reload the rejected data. If the error count on a segment is greater than ",(0,a.jsx)(t.code,{children:"5"})," (the ",(0,a.jsx)(t.code,{children:"SEGMENT REJECT LIMIT"})," value), the entire external table operation fails and no rows are processed."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"=# CREATE EXTERNAL TABLE ext_expenses ( name text, \n   date date, amount float4, category text, desc1 text ) \n   LOCATION ('gpfdist://etlhost-1:8081/*.txt', \n             'gpfdist://etlhost-2:8082/*.txt')\n   FORMAT 'TEXT' ( DELIMITER '|' NULL ' ')\n   LOG ERRORS SEGMENT REJECT LIMIT 5;\n"})}),"\n",(0,a.jsxs)(t.p,{children:["To create the readable ",(0,a.jsx)(t.code,{children:"ext_expenses"})," table from CSV-formatted text files:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"=# CREATE EXTERNAL TABLE ext_expenses ( name text, \n   date date,  amount float4, category text, desc1 text ) \n   LOCATION ('gpfdist://etlhost-1:8081/*.txt', \n             'gpfdist://etlhost-2:8082/*.txt')\n   FORMAT 'CSV' ( DELIMITER ',' )\n   LOG ERRORS SEGMENT REJECT LIMIT 5;\n"})}),"\n",(0,a.jsx)(t.h3,{id:"example-4---create-a-writable-external-table-with-gpfdist",children:"Example 4 - Create a writable external table with gpfdist"}),"\n",(0,a.jsxs)(t.p,{children:["Creates a writable external table,\xb7",(0,a.jsx)(t.code,{children:"sales_out"}),", that uses gpfdist to write output data to the file ",(0,a.jsx)(t.code,{children:"sales.out"}),". The column delimiter is a pipe (",(0,a.jsx)(t.code,{children:"|"}),") and NULL (",(0,a.jsx)(t.code,{children:"' '"}),") is a space. The file will be created in the directory specified when you started the gpfdist file server."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sql",children:"=# CREATE WRITABLE EXTERNAL TABLE sales_out (LIKE sales) \n   LOCATION ('gpfdist://etl1:8081/sales.out')\n   FORMAT 'TEXT' ( DELIMITER '|' NULL ' ')\n   DISTRIBUTED BY (txn_id);\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>o});var a=s(67294);const n={},i=a.createContext(n);function o(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);