"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[2238],{28412:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=n(85893),s=n(11151);const i={title:"Feature Overview",slug:"/"},r="Cloudberry Database Feature Overview",o={id:"cbdb-overview",title:"Feature Overview",description:"Cloudberry Database, built on the latest PostgreSQL 14.4 kernel, is one of the most advanced and mature open-source MPP databases available. It comes with multiple features, including high concurrency and high availability. It can perform quick and efficient computing for complex tasks, meeting the demands of managing and computing vast amounts of data. It is widely applied in multiple fields.",source:"@site/docs/cbdb-overview.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/cbdb-overview.md",tags:[],version:"current",lastUpdatedBy:"vitalzf",lastUpdatedAt:1733904867,formattedLastUpdatedAt:"Dec 11, 2024",frontMatter:{title:"Feature Overview",slug:"/"},sidebar:"docsbars",next:{title:"Architecture",permalink:"/docs/cbdb-architecture"}},l={},d=[{value:"Efficient queries in different scenarios",id:"efficient-queries-in-different-scenarios",level:2},{value:"Polymorphic data storage",id:"polymorphic-data-storage",level:2},{value:"Multi-layer data security",id:"multi-layer-data-security",level:2},{value:"Data loading",id:"data-loading",level:2},{value:"Multi-layer fault tolerance",id:"multi-layer-fault-tolerance",level:2},{value:"Rich data analysis support",id:"rich-data-analysis-support",level:2},{value:"Flexible workload management",id:"flexible-workload-management",level:2},{value:"Multiple compatibility",id:"multiple-compatibility",level:2}];function c(e){const a={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h1,{id:"cloudberry-database-feature-overview",children:"Cloudberry Database Feature Overview"}),"\n",(0,t.jsx)(a.p,{children:"Cloudberry Database, built on the latest PostgreSQL 14.4 kernel, is one of the most advanced and mature open-source MPP databases available. It comes with multiple features, including high concurrency and high availability. It can perform quick and efficient computing for complex tasks, meeting the demands of managing and computing vast amounts of data. It is widely applied in multiple fields."}),"\n",(0,t.jsx)(a.p,{children:"This document gives a general introduction to the features of Cloudberry Database."}),"\n",(0,t.jsx)(a.h2,{id:"efficient-queries-in-different-scenarios",children:"Efficient queries in different scenarios"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Cloudberry Database allows you to perform efficient queries in big data analysis environments and distributed environments:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Big data analysis environment"}),": Cloudberry Database uses the built-in PostgreSQL optimizer, which offers better support for distributed environments. This means that it can generate more efficient query plans when handling big data analysis tasks."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Distributed environment"}),": Built in with the specially-adapted open-source GPORCA optimizer, Cloudberry Database meets the query optimization needs in distributed environments."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Multiple technologies are used such as static and dynamic partition pruning, aggregate push-down, and join filtering to help you get the fastest and most accurate query results possible."}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsx)(a.p,{children:"Both rule-based and cost-based query optimization methods are provided to help you generate more efficient query execution plans."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"polymorphic-data-storage",children:"Polymorphic data storage"}),"\n",(0,t.jsx)(a.p,{children:"For different scenarios, Cloudberry Database supports multiple storage formats, including Heap storage, AO row storage, and AOCS column storage. Cloudberry Database also supports partitioned tables. You can define the partitioning of a table based on certain conditions. When executing a query, it automatically filters out the sub-tables that are not needed for the query to improve query efficiency."}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Click to see details"}),(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Even data distribution"}),": By using Hash and Random methods for data distribution, Cloudberry Database takes better advantage of disk performance and solves I/O bottleneck issues."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Storage types"}),":"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Row-based storage: Suitable for scenarios where most fields are frequently queried, and there are many random row accesses."}),"\n",(0,t.jsx)(a.li,{children:"Column-based storage: When you need to query a small number of fields, this method can greatly save I/O operations, making it ideal for scenarios where large amounts of data are accessed frequently."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Specialized storage modes"}),": Cloudberry Database has different storage modes such as Heap storage, AO row storage, AOCS column storage to optimize the performance of different types of applications. At the finest granularity level of partitioning, a table can have multiple storage modes."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Support for partitioned tables"}),": You can define the partitioning of a table based on specific conditions. During querying, the system will automatically filter out the sub-tables that are not needed for the query to improve query efficiency."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Efficient data compression function"}),": Cloudberry Database supports multiple compression algorithms, such as Zlib 1-9 and Zstandard 1~19, to improve data processing performance and maintain a balance between CPU and compression ratio."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Optimization for small tables"}),": You can choose to use the Replication Table and specify a custom Hash algorithm when creating the table, allowing for more flexible control of data distribution."]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(a.h2,{id:"multi-layer-data-security",children:"Multi-layer data security"}),"\n",(0,t.jsx)(a.p,{children:"Cloudberry Database enhances user data protection by supporting function encryption and transparent data encryption (TDE). TDE means that the Cloudberry Database kernel performs these processes invisibly to users. The data formats subject to TDE include Heap tables, AO row storage, and AOCS column storage. In addition to common encryption algorithms like AES, Cloudberry Database also supports national secret algorithms, allowing seamless integration of your own algorithms into TDE process."}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Click to view details"}),(0,t.jsx)(a.p,{children:"Cloudberry Database focuses on data security and provides security protection measures. These security measures are designed to satisfy different database environment needs and offer multi-layer security protection:"}),(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Database isolation"}),": In Cloudberry Database, data is not shared between databases, which achieves isolation in a multi-database environment. If cross-database access is required, you can use the DBLink feature."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Internal data organization"}),": The logical organization of data in the database includes data objects such as tables, views, indexes, and functions. Data access can be performed across schemas."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Data storage security"}),": Cloudberry Database offers different storage modes to support data redundancy. It uses encryption methods including AES 128, AES 192, AES 256, DES, and national secret encryption to secure data storage. It also supports ciphertext authentication, which includes encryption algorithms like SCRAM-SHA-256, MD5, LDAP, RADIUS."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"User data protection"}),": Cloudberry Database supports function encryption and decryption, and transparent data encryption and decryption. The process is implemented by the Cloudberry Database kernel without any user interaction. It supports data formats such as Heap tables, AO row storage, and AOCS column storage. In addition to common encryption algorithms like AES, Cloudberry Database also supports national secret algorithms, allowing you to easily add your own algorithms into transparent data encryption."]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.strong,{children:"Detailed permission settings"}),": To satisfy different users and objects (like schemas, tables, rows, columns, views, functions), Cloudberry Database provides a range of permission setting options, including ",(0,t.jsx)(a.code,{children:"SELECT"}),", ",(0,t.jsx)(a.code,{children:"UPDATE"}),", execution, and ownership."]}),"\n"]})]}),"\n",(0,t.jsx)(a.h2,{id:"data-loading",children:"Data loading"}),"\n",(0,t.jsx)(a.p,{children:"Cloudberry Database provides a series of efficient and flexible data loading solutions to meet various data processing needs, including parallel and persistent data loading, support for flexible data sources and file formats, integration of multiple ETL tools, and support for stream data loading and high-performance data access."}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Click to view details"}),(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Parallel and persistent data loading"}),": Cloudberry Database supports massive parallel and persistent data loading through external table technology, and performs automatic conversion between character sets, such as from GBK to UTF-8. This feature makes data entry much smoother."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Flexible data source and file format support"}),": Cloudberry Database supports data sources such as external file servers, Hive, Hbase, HDFS or S3, and supports data formats such as CSV, Text, JSON, ORC, and Parquet. In addition, the database can also load compressed data files such as Zip."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Integrate multiple ETL tools"}),": Cloudberry Database is integrated with ETL tools such as DataStage, Informatica, and Kettle to facilitate data processing."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Support stream data loading"}),": Cloudberry Database can start multiple parallel read tasks for the subscribed Kafka topic, cache the read records, and load the records into the database via gpfdist after a certain time or number of records. This method can ensure the integrity of data without duplication or loss, and is suitable for stream data collection and real-time analysis scenarios. Cloudberry Database supports data loading throughput of tens of millions per minute."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"High-performance data access"}),": PXF is a built-in component of Cloudberry Database, which can map external data sources to external tables of Cloudberry Database to achieve parallel and high-speed data access. PXF supports the management and access of hybrid data ecology and helps realize the Data Fabric architecture."]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(a.h2,{id:"multi-layer-fault-tolerance",children:"Multi-layer fault tolerance"}),"\n",(0,t.jsx)(a.p,{children:"To ensure data security and service continuity, Cloudberry Database adopts a multi-level fault-tolerant mechanism of data pages, checksum, mirror node configuration, and control node backup."}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Click to view details"}),(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Checksum of data page"}),": In the underlying storage, Cloudberry Database uses the checksum mechanism to detect bad blocks to ensure data integrity."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Mirror node configuration"}),": By configuring mirror nodes among segments (or data nodes), Cloudberry Database can achieve high availability and failover of services. Once an unrecoverable failure of the coordinator node is detected, the system will automatically switch to the backup segment to ensure that user queries will not be affected."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Backup of control nodes"}),": Similar to segments, coordinator nodes (or control nodes) can also be configured as backup nodes or standby nodes in case the coordinator node fails. Once the coordinator node fails, the system will automatically switch to the standby node to ensure the continuity of services."]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(a.h2,{id:"rich-data-analysis-support",children:"Rich data analysis support"}),"\n",(0,t.jsx)(a.p,{children:"Cloudberry Database provides powerful data analysis features. These features make data processing, query and analysis more efficient, and meets multiple complex data processing, analysis and query requirements."}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Click to view details"}),(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Parallel optimizer and executor"}),": The Cloudberry Database kernel has a built-in parallel optimizer and executor, which is not only compatible with the PostgreSQL ecosystem, but also supports data partition pruning and multiple indexing technologies (including B-Tree, Bitmap, Hash, Brin, GIN), and JIT (expression just-in-time compilation processing)."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Machine learning components MADlib"}),": Cloudberry Database integrates MADlib components, providing users with fully SQL-driven machine learning features, enabling deep integration of algorithms, computing power, and data."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Support multiple programming languages"}),": Cloudberry Database provides developers with rich programming languages, including R, Python, Perl, Java, and PostgreSQL, so that they can easily write custom functions."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"High-performance parallel computing based on MPP engine"}),": The MPP engine of Cloudberry Database supports high-performance parallel computing, seamlessly integrated with SQL, and can perform fast computing and analysis on SQL execution results."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"PostGIS geographic data processing"}),": Cloudberry Database introduces an upgraded version of PostGIS 2.X, supports its MPP architecture, and further improves the processing capability of geospatial data. Key features include:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Support for object storage: supports directly loading large-capacity geospatial data from object storage (OSS) into the database."}),"\n",(0,t.jsx)(a.li,{children:"Comprehensive spatial data type support: including geometry, geography, and raster."}),"\n",(0,t.jsx)(a.li,{children:"Spatio-temporal index: Provides spatio-temporal index technology, which can effectively accelerate spatial and temporal queries."}),"\n",(0,t.jsx)(a.li,{children:"Complex spatial and geographic calculations: including sphere length calculations as well as spatial aggregation functions (such as contain, cover, intersect)."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Cloudberry Database text component"}),": This component supports using ElasticSearch to accelerate file retrieval capabilities. Compared with traditional GIN data text query performance, this component has an order of magnitude improvement. It supports multiple word segmentation, natural language processing, and query result rendering."]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(a.h2,{id:"flexible-workload-management",children:"Flexible workload management"}),"\n",(0,t.jsx)(a.p,{children:"Cloudberry Database provides comprehensive workload management capabilities designed to effectively utilize and optimize database resources to ensure efficient and stable operations. Its workload management includes three levels of control: connection level management, session level management, and SQL level management."}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Click to view details"}),(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Connection pool PGBouncer (connection-level management)"}),": Through the connection pool, Cloudberry Database manages user access in a unified manner, and limits the number of concurrently active users to improve efficiency, and avoid wasting resources caused by frequently creating and destructing service processes. The connection pool has a small memory footprint and can support high concurrent connections, using libevent for Socket communication to improve communication efficiency."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Resource Group (session-level management)"}),": Through resource groups, Cloudberry Database can analyze and categorize typical workloads, and quantify the CPU, memory, concurrency and other resources required by each workload. In this way, according to the actual requirements of the workload, you can set a suitable resource group and dynamically adjust the resource usage to ensure the overall operating efficiency. At the same time, you can use rules to clean up idle sessions and release unnecessary resources."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Dynamic resource group allocation (SQL-level management)"}),": Through dynamic resource group allocation, Cloudberry Database can flexibly allocate resources before or during the execution of SQL statements, which can give priority to specific queries and shorten the execution time."]}),"\n"]}),"\n"]})]}),"\n",(0,t.jsx)(a.h2,{id:"multiple-compatibility",children:"Multiple compatibility"}),"\n",(0,t.jsx)(a.p,{children:"The compatibility of Cloudberry Database is reflected in multiple aspects such as SQL syntax, components, tools and programs, hardware platforms and operating systems. This makes the database flexible enough to deal with different tools, platforms and languages."}),"\n",(0,t.jsxs)(n,{children:[(0,t.jsx)("summary",{children:"Click to view details"}),(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"SQL compatibility"}),": Cloudberry Database is compatible with PostgreSQL and Greenplum syntax, supports SQL-92, SQL-99, and SQL 2003 standards, including SQL 2003 OLAP extensions, such as window functions, ",(0,t.jsx)(a.code,{children:"rollup"}),", and ",(0,t.jsx)(a.code,{children:"cube"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Component compatibility"}),": Based on the PostgreSQL 14.4 kernel, Cloudberry Database is compatible with most of the PostgreSQL components and extensions commonly used."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Tool and program compatibility"}),": Good connectivity with various BI tools, mining forecasting tools, ETL tools, and J2EE/.NET applications."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Hardware platform compatibility"}),": Can run on a variety of hardware architectures, including X86, ARM, Phytium, Kunpeng, and Haiguang."]}),"\n"]}),"\n",(0,t.jsxs)(a.li,{children:["\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Operating system compatibility"}),": Compatible with multiple operating system environments, such as CentOS, Ubuntu, Kylin, and BC-Linux."]}),"\n"]}),"\n"]})]})]})}function u(e={}){const{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11151:(e,a,n)=>{n.d(a,{Z:()=>o,a:()=>r});var t=n(67294);const s={},i=t.createContext(s);function r(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);