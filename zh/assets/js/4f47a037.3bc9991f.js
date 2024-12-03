"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5956],{26581:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var i=s(85893),n=s(11151);const a={title:"gprestore"},o="gprestore",r={id:"sys-utilities/gprestore",title:"gprestore",description:"Restore a Cloudberry Database backup that was created using the gpbackup utility. By default gprestore uses backed up metadata files and DDL files located in the Cloudberry Database master host data directory, with table data stored locally on segment hosts in CSV data files.",source:"@site/docs/sys-utilities/gprestore.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/gprestore",permalink:"/zh/docs/sys-utilities/gprestore",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/gprestore.md",tags:[],version:"current",lastUpdatedBy:"Ed Espino",lastUpdatedAt:1733247584,formattedLastUpdatedAt:"2024\u5e7412\u67083\u65e5",frontMatter:{title:"gprestore"},sidebar:"docsbars",previous:{title:"gppkg",permalink:"/zh/docs/sys-utilities/gppkg"},next:{title:"gpreload",permalink:"/zh/docs/sys-utilities/gpreload"}},c={},l=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Return Codes",id:"return-codes",level:2},{value:"Examples",id:"examples",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"gprestore",children:"gprestore"}),"\n",(0,i.jsxs)(t.p,{children:["Restore a Cloudberry Database backup that was created using the ",(0,i.jsx)(t.code,{children:"gpbackup"})," utility. By default ",(0,i.jsx)(t.code,{children:"gprestore"})," uses backed up metadata files and DDL files located in the Cloudberry Database master host data directory, with table data stored locally on segment hosts in CSV data files."]}),"\n",(0,i.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"gprestore --timestamp <YYYYMMDDHHMMSS>\n   [--backup-dir <directory>]\n   [--copy-queue-size <int>\n   [--create-db]\n   [--debug]\n   [--exclude-schema <schema_name> [--exclude-schema <schema_name> ...]]\n   [--exclude-table <schema.table> [--exclude-table <schema.table> ...]]\n   [--exclude-table-file <file_name>]\n   [--exclude-schema-file <file_name>]\n   [--include-schema <schema_name> [--include-schema <schema_name> ...]]\n   [--include-table <schema.table> [--include-table <schema.table> ...]]\n   [--include-schema-file <file_name>]\n   [--include-table-file <file_name>]\n   [--truncate-table]\n   [--redirect-schema <schema_name>]\n   [--resize-cluster]\n   [--data-only | --metadata-only]\n   [--incremental]\n   [--jobs <int>]\n   [--on-error-continue]\n   [--plugin-config <config_file_location>]\n   [--quiet]\n   [--redirect-db <database_name>]\n   [--verbose]\n   [--version]\n   [--with-globals]\n   [--with-stats]\n   [--run-analyze]\n\ngprestore --help\n"})}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["To use ",(0,i.jsx)(t.code,{children:"gprestore"})," to restore from a backup set, you must include the ",(0,i.jsx)(t.code,{children:"--timestamp"})," option to specify the exact timestamp value (",(0,i.jsx)(t.code,{children:"YYYYMMDDHHMMSS"}),") of the backup set to restore. If you specified a custom ",(0,i.jsx)(t.code,{children:"--backup-dir"})," to consolidate the backup files, include the same ",(0,i.jsx)(t.code,{children:"--backup-dir"})," option with ",(0,i.jsx)(t.code,{children:"gprestore"})," to locate the backup files."]}),"\n",(0,i.jsxs)(t.p,{children:["If the backup you specify is an incremental backup, you need a complete set of backup files (a full backup and any required incremental backups). ",(0,i.jsx)(t.code,{children:"gprestore"})," ensures that the complete backup set is available before attempting to restore a backup."]}),"\n",(0,i.jsx)(t.p,{children:"Important: For incremental backup sets, the backups must be on a single device. For example, a backup set must all be on a Data Domain system."}),"\n",(0,i.jsxs)(t.p,{children:["When restoring from a backup set, ",(0,i.jsx)(t.code,{children:"gprestore"})," restores to a database with the same name as the name specified when creating the backup set. If the target database exists and a table being restored exists in the database, the restore operation fails. Include the ",(0,i.jsx)(t.code,{children:"--create-db"})," option if the target database does not exist in the cluster. You can optionally restore a backup set to a different database by using the ",(0,i.jsx)(t.code,{children:"--redirect-db"})," option."]}),"\n",(0,i.jsxs)(t.p,{children:["When restoring a backup set that contains data from some leaf partitions of a partitioned tables, the partitioned table is restored along with the data for the leaf partitions. For example, you create a backup with the ",(0,i.jsx)(t.code,{children:"gpbackup"})," option ",(0,i.jsx)(t.code,{children:"--include-table-file"})," and the text file lists some leaf partitions of a partitioned table. Restoring the backup creates the partitioned table and restores the data only for the leaf partitions listed in the file."]}),"\n",(0,i.jsxs)(t.p,{children:["By default, only database objects in the backup set are restored. Cloudberry Database system objects are automatically included in a ",(0,i.jsx)(t.code,{children:"gpbackup"})," backup set, but these objects are only restored if you include the ",(0,i.jsx)(t.code,{children:"--with-globals"})," option to ",(0,i.jsx)(t.code,{children:"gprestore"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["During a restore operation, automatic updating of table statistics is deactivated for the tables being restored. If you backed up query plan statistics using the ",(0,i.jsx)(t.code,{children:"--with-stats"})," option, you can restore those statistics by providing ",(0,i.jsx)(t.code,{children:"--with-stats"})," to ",(0,i.jsx)(t.code,{children:"gprestore"}),". If you did not use ",(0,i.jsx)(t.code,{children:"--with-stats"})," during a backup, or you want to collect current statistics during the restore operation, you can use the ",(0,i.jsx)(t.code,{children:"--run-analyze"})," option to run ",(0,i.jsx)(t.code,{children:"ANALYZE"})," on the restored tables."]}),"\n",(0,i.jsxs)(t.p,{children:["When a materialized view is restored, the data is not restored. To populate the materialized view with data, use ",(0,i.jsx)(t.code,{children:"REFRESH MATERIALIZED VIEW"}),". The tables that are referenced by the materialized view definition must be available. The ",(0,i.jsx)(t.code,{children:"gprestore"})," log file lists the materialized views that were restored and the ",(0,i.jsx)(t.code,{children:"REFRESH MATERIALIZED VIEW"})," commands that are used to populate the materialized views with data."]}),"\n",(0,i.jsxs)(t.p,{children:["Performance of restore operations can be improved by creating multiple parallel connections to restore table data and metadata. By default ",(0,i.jsx)(t.code,{children:"gprestore"})," uses 1 connection, but you can increase this number with the ",(0,i.jsx)(t.code,{children:"--jobs"})," option for large restore operations."]}),"\n",(0,i.jsxs)(t.p,{children:["When a restore operation completes, ",(0,i.jsx)(t.code,{children:"gprestore"})," returns a status code."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"gprestore"})," can send status email notifications after a back up operation completes. You specify when the utility sends the mail and the email recipients in a configuration file."]}),"\n",(0,i.jsxs)(t.p,{children:["Note: This utility uses secure shell (SSH) connections between systems to perform its tasks. In large Cloudberry Database deployments, cloud deployments, or deployments with a large number of segments per host, this utility may exceed the host's maximum threshold for unauthenticated connections. Consider updating the SSH ",(0,i.jsx)(t.code,{children:"MaxStartups"})," and ",(0,i.jsx)(t.code,{children:"MaxSessions"})," configuration parameters to increase this threshold. For more information about SSH configuration options, refer to the SSH documentation for your Linux distribution."]}),"\n",(0,i.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--timestamp YYYYMMDDHHMMSS"})}),"\n",(0,i.jsxs)(t.p,{children:["Required. Specifies the timestamp of the ",(0,i.jsx)(t.code,{children:"gpbackup"})," backup set to restore. By default ",(0,i.jsx)(t.code,{children:"gprestore"})," tries to locate metadata files for the timestamp on the Cloudberry Database master host in the $MASTER_DATA_DIRECTORY/backups/YYYYMMDD/YYYYMMDDhhmmss/ directory, and CSV data files in the ",(0,i.jsx)(t.code,{children:"<seg_dir>/backups/YYYYMMDD/YYYYMMDDhhmmss/"})," directory of each segment host."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--backup-dir directory"})}),"\n",(0,i.jsxs)(t.p,{children:["Optional. Sources all backup files (metadata files and data files) from the specified directory. You must specify directory as an absolute path (not relative). If you do not supply this option, ",(0,i.jsx)(t.code,{children:"gprestore"})," tries to locate metadata files for the timestamp on the Cloudberry Database master host in the $MASTER_DATA_DIRECTORY/backups/YYYYMMDD/YYYYMMDDhhmmss/ directory. CSV data files must be available on each segment in the ",(0,i.jsx)(t.code,{children:"<seg_dir>/backups/YYYYMMDD/YYYYMMDDhhmmss/"})," directory. Include this option when you specify a custom backup directory with ",(0,i.jsx)(t.code,{children:"gpbackup"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["You cannot combine this option with the option ",(0,i.jsx)(t.code,{children:"--plugin-config"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--create-db"})}),"\n",(0,i.jsx)(t.p,{children:"Optional. Creates the database before restoring the database object metadata."}),"\n",(0,i.jsxs)(t.p,{children:["The database is created by cloning the empty standard system database ",(0,i.jsx)(t.code,{children:"template0"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--copy-queue-size int"})}),"\n",(0,i.jsxs)(t.p,{children:["Optional. Specifies the number of ",(0,i.jsx)(t.code,{children:"COPY"})," commands ",(0,i.jsx)(t.code,{children:"gprestore"})," should enqueue when restoring a backup set. This option optimizes restore performance by reducing the amount of time spent initializing ",(0,i.jsx)(t.code,{children:"COPY"})," commands. If you do not set this option to 2 or greater, ",(0,i.jsx)(t.code,{children:"gprestore"})," enqueues 1 ",(0,i.jsx)(t.code,{children:"COPY"})," command at a time."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--data-only"})}),"\n",(0,i.jsxs)(t.p,{children:["Optional. Restores table data from a backup created with the ",(0,i.jsx)(t.code,{children:"gpbackup"})," utility, without creating the database tables. This option assumes the tables exist in the target database. To restore data for a specific set of tables from a backup set, you can specify an option to include tables or schemas or exclude tables or schemas. Specify the ",(0,i.jsx)(t.code,{children:"--with-stats"})," option to restore table statistics from the backup."]}),"\n",(0,i.jsxs)(t.p,{children:["The backup set must contain the table data to be restored. For example, a backup created with the ",(0,i.jsx)(t.code,{children:"gpbackup"})," option ",(0,i.jsx)(t.code,{children:"--metadata-only"})," does not contain table data."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"SEQUENCE"})," values are updated to match the values taken at the time of the backup."]}),"\n",(0,i.jsxs)(t.p,{children:["To restore only database tables, without restoring the table data, see the option ",(0,i.jsx)(t.code,{children:"--metadata-only"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--debug"})}),"\n",(0,i.jsx)(t.p,{children:"Optional. Displays verbose and debug log messages during a restore operation."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--exclude-schema schema_name"})}),"\n",(0,i.jsxs)(t.p,{children:["Optional. Specifies a database schema to exclude from the restore operation. You can specify this option multiple times. You cannot combine this option with the option ",(0,i.jsx)(t.code,{children:"--include-schema"}),", ",(0,i.jsx)(t.code,{children:"--include-schema-file"}),", or a table filtering option such as ",(0,i.jsx)(t.code,{children:"--include-table"}),".--exclude-schema-file ",(0,i.jsx)(t.strong,{children:"file_name"}),"Optional. Specifies a text file containing a list of schemas to exclude from the backup. Each line in the text file must define a single schema. The file must not include trailing lines. If a schema name uses any character other than a lowercase letter, number, or an underscore character, then you must include that name in double quotes. You cannot combine this option with the option ",(0,i.jsx)(t.code,{children:"--include-schema"})," or ",(0,i.jsx)(t.code,{children:"--include-schema-file"}),", or a table filtering option such as ",(0,i.jsx)(t.code,{children:"--include-table"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--exclude-table schema.table"})}),"\n",(0,i.jsxs)(t.p,{children:["Optional. Specifies a table to exclude from the restore operation. You can specify this option multiple times. The table must be in the format ",(0,i.jsx)(t.code,{children:"<schema-name>.<table-name>"}),". If a table or schema name uses any character other than a lowercase letter, number, or an underscore character, then you must include that name in double quotes. You can specify this option multiple times. If the table is not in the backup set, the restore operation fails. You cannot specify a leaf partition of a partitioned table."]}),"\n",(0,i.jsxs)(t.p,{children:["You cannot combine this option with the option ",(0,i.jsx)(t.code,{children:"--exclude-schema"}),", ",(0,i.jsx)(t.code,{children:"--exclude-schema-file"}),", or another a table filtering option such as ",(0,i.jsx)(t.code,{children:"--include-table"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--exclude-table-file file_name"})}),"\n",(0,i.jsxs)(t.p,{children:["Optional. Specifies a text file containing a list of tables to exclude from the restore operation. Each line in the text file must define a single table using the format ",(0,i.jsx)(t.code,{children:"<schema-name>.<table-name>"}),". The file must not include trailing lines. If a table or schema name uses any character other than a lowercase letter, number, or an underscore character, then you must include that name in double quotes. If a table is not in the backup set, the restore operation fails. You cannot specify a leaf partition of a partitioned table."]}),"\n",(0,i.jsxs)(t.p,{children:["You cannot combine this option with the option ",(0,i.jsx)(t.code,{children:"--exclude-schema"}),", ",(0,i.jsx)(t.code,{children:"--exclude-schema-file"}),", or another a table filtering option such as ",(0,i.jsx)(t.code,{children:"--include-table"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--include-schema schema_name"})}),"\n",(0,i.jsxs)(t.p,{children:["Optional. Specifies a database schema to restore. You can specify this option multiple times. If you specify this option, any schemas that you specify must be available in the backup set. Any schemas that are not included in subsequent ",(0,i.jsx)(t.code,{children:"--include-schema"})," options are omitted from the restore operation."]}),"\n",(0,i.jsx)(t.p,{children:"If a schema that you specify for inclusion exists in the database, the utility issues an error and continues the operation. The utility fails if a table being restored exists in the database."}),"\n",(0,i.jsx)(t.p,{children:"You cannot use this option if objects in the backup set have dependencies on multiple schemas."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--include-schema-file file_name"})}),"\n",(0,i.jsx)(t.p,{children:"Optional. Specifies a text file containing a list of schemas to restore. Each line in the text file must define a single schema. The file must not include trailing lines. If a schema name uses any character other than a lowercase letter, number, or an underscore character, then you must include that name in double quotes."}),"\n",(0,i.jsx)(t.p,{children:"The schemas must exist in the backup set. Any schemas not listed in this file are omitted from the restore operation."}),"\n",(0,i.jsx)(t.p,{children:"You cannot use this option if objects in the backup set have dependencies on multiple schemas."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--include-table schema.table"})}),"\n",(0,i.jsxs)(t.p,{children:["Optional. Specifies a table to restore. The table must be in the format ",(0,i.jsx)(t.code,{children:"<schema-name>.<table-name>"}),". You can specify this option multiple times. You cannot specify a leaf partition of a partitioned table."]}),"\n",(0,i.jsx)(t.p,{children:"You can also specify the qualified name of a sequence, a view, or a materialized view."}),"\n",(0,i.jsx)(t.p,{children:"If you specify this option, the utility does not automatically restore dependent objects. You must also explicitly specify the dependent objects that are required. For example if you restore a view or a materialized view, you must also restore the tables that the view or the materialized view uses. If you restore a table that uses a sequence, you must also restore the sequence. The dependent objects must exist in the backup set."}),"\n",(0,i.jsxs)(t.p,{children:["You cannot combine this option with a schema filtering option such as ",(0,i.jsx)(t.code,{children:"--include-schema"}),", or another table filtering option such as ",(0,i.jsx)(t.code,{children:"--exclude-table-file"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--include-table-file file_name"})}),"\n",(0,i.jsxs)(t.p,{children:["Optional. Specifies a text file containing a list of tables to restore. Each line in the text file must define a single table using the format ",(0,i.jsx)(t.code,{children:"<schema-name>.<table-name>"}),". The file must not include trailing lines. Any tables not listed in this file are omitted from the restore operation. You cannot specify a leaf partition of a partitioned table."]}),"\n",(0,i.jsx)(t.p,{children:"You can also specify the qualified name of a sequence, a view, or a materialized view."}),"\n",(0,i.jsx)(t.p,{children:"If you specify this option, the utility does not automatically restore dependent objects. You must also explicitly specify dependent objects that are required. For example, if you restore a view or a materialized view, you must also specify the tables that the view or the materialized uses. If you specify a table that uses a sequence, you must also specify the sequence. The dependent objects must exist in the backup set."}),"\n",(0,i.jsxs)(t.p,{children:["For a materialized view, the data is not restored. To populate the materialized view with data, you must use ",(0,i.jsx)(t.code,{children:"REFRESH MATERIALIZED VIEW"})," and the tables that are referenced by the materialized view definition must be available."]}),"\n",(0,i.jsxs)(t.p,{children:["If you use the ",(0,i.jsx)(t.code,{children:"--include-table-file"})," option, ",(0,i.jsx)(t.code,{children:"gprestore"})," does not create roles or set the owner of the tables. The utility restores table indexes and rules. Triggers are also restored but are not supported in Cloudberry Database."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--incremental (Beta)"})}),"\n",(0,i.jsxs)(t.p,{children:["Optional. Requires the ",(0,i.jsx)(t.code,{children:"--data-only option"}),". Restores only the table data in the incremental backup specified by the ",(0,i.jsx)(t.code,{children:"--timestamp"})," option. Table data is not restored from previous incremental backups in the backup set. ",(0,i.jsx)(t.strong,{children:"Warning:"})," This is a Beta feature and is not supported in a production environment."]}),"\n",(0,i.jsx)(t.p,{children:"An incremental backup contains the following table data that can be restored."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Data from all heap tables."}),"\n",(0,i.jsx)(t.li,{children:"Data from append-optimized tables that have been modified since the previous backup."}),"\n",(0,i.jsx)(t.li,{children:"Data from leaf partitions that have been modified from the previous backup."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["When this option is specified, ",(0,i.jsx)(t.code,{children:"gprestore"})," restores table data by truncating the table and reloading data into the table. ",(0,i.jsx)(t.code,{children:"SEQUENCE"})," values are then updated to match the values taken at the time of the backup."]}),"\n",(0,i.jsxs)(t.p,{children:["Before performing the restore operation, ",(0,i.jsx)(t.code,{children:"gprestore"})," ensures that the tables being restored exist. If a table does not exist, ",(0,i.jsx)(t.code,{children:"gprestore"})," returns an error and exits. If the ",(0,i.jsx)(t.code,{children:"--on-error-continue"})," option is specified, ",(0,i.jsx)(t.code,{children:"gprestore"})," logs missing tables and attempts to complete the restore operation."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Warning:"})," When this option is specified, ",(0,i.jsx)(t.code,{children:"gpbackup"})," assumes that no changes have been made to the table definitions of the tables being restored, such as adding or removing columns.--truncate-table"]}),"\n",(0,i.jsx)(t.p,{children:"Optional. Truncate data from a set of tables before restoring the table data from a backup. This option lets you replace table data with data from a backup. Otherwise, table data might be duplicated."}),"\n",(0,i.jsxs)(t.p,{children:["You must specify the set of tables with either the option ",(0,i.jsx)(t.code,{children:"--include-table"})," or ",(0,i.jsx)(t.code,{children:"--include-table-file"}),". You must also specify ",(0,i.jsx)(t.code,{children:"--data-only"})," to restore table data without creating the tables."]}),"\n",(0,i.jsxs)(t.p,{children:["You can use this option with the ",(0,i.jsx)(t.code,{children:"--redirect-db"})," option. You cannot use this option with ",(0,i.jsx)(t.code,{children:"--redirect-schema"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--redirect-schema schema_name"})}),"\n",(0,i.jsx)(t.p,{children:"Optional. Restore data in the specified schema instead of the original schemas. The specified schema must already exist. If the data being restored is in multiple schemas, all the data is redirected into the specified schema."}),"\n",(0,i.jsxs)(t.p,{children:["This option must be used with an option that includes tables or schemas: ",(0,i.jsx)(t.code,{children:"--include-table"}),", ",(0,i.jsx)(t.code,{children:"--include-table-file"}),", ",(0,i.jsx)(t.code,{children:"--include-schema"}),", or ",(0,i.jsx)(t.code,{children:"--include-schema-file"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["You cannot use this option with an option that excludes schemas or tables such as ",(0,i.jsx)(t.code,{children:"--exclude-schema"})," or ",(0,i.jsx)(t.code,{children:"--exclude-table"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["You can use this option with the ",(0,i.jsx)(t.code,{children:"--metadata-only"})," or ",(0,i.jsx)(t.code,{children:"--data-only"})," options."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--resize-cluster (Beta)"})}),"\n",(0,i.jsx)(t.p,{children:"Optional. Invoke this option to enable restoring data to a cluster that has a different number of segments than the cluster from which the data was backed up."}),"\n",(0,i.jsx)(t.p,{children:"Warning: This is a Beta feature and is not supported in a production environment."}),"\n",(0,i.jsxs)(t.p,{children:["Note: In order to enable the ",(0,i.jsx)(t.code,{children:"--resize-cluster"})," feature for ",(0,i.jsx)(t.code,{children:"gprestore"}),", you must take backups using ",(0,i.jsx)(t.code,{children:"gpbackup"})," 1.26 or later."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--jobs int"})}),"\n",(0,i.jsxs)(t.p,{children:["Optional. Specifies the number of parallel connections to use when restoring table data and metadata. By default, ",(0,i.jsx)(t.code,{children:"gprestore"})," uses 1 connection. Increasing this number can improve the speed of restoring data. ",(0,i.jsx)(t.strong,{children:"Note:"})," If you used the ",(0,i.jsx)(t.code,{children:"gpbackup --single-data-file"})," option to combine table backups into a single file per segment, you cannot set ",(0,i.jsx)(t.code,{children:"--jobs"})," to a value higher than 1 to perform a parallel restore operation."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--metadata-only"})}),"\n",(0,i.jsxs)(t.p,{children:["Optional. Creates database tables from a backup created with the ",(0,i.jsx)(t.code,{children:"gpbackup"})," utility, but does not restore the table data. This option assumes the tables do not exist in the target database. To create a specific set of tables from a backup set, you can specify an option to include tables or schemas or exclude tables or schemas. Specify the option ",(0,i.jsx)(t.code,{children:"--with-globals"})," to restore the Cloudberry Database system objects."]}),"\n",(0,i.jsxs)(t.p,{children:["The backup set must contain the DDL for tables to be restored. For example, a backup created with the ",(0,i.jsx)(t.code,{children:"gpbackup"})," option ",(0,i.jsx)(t.code,{children:"--data-only"})," does not contain the DDL for tables."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--on-error-continue"})}),"\n",(0,i.jsx)(t.p,{children:"Optional. Specify this option to continue the restore operation if an SQL error occurs when creating database metadata (such as tables, roles, or functions) or restoring data. If another type of error occurs, the utility exits. The default is to exit on the first error."}),"\n",(0,i.jsxs)(t.p,{children:["When this option is included, the utility displays an error summary and writes error information to the ",(0,i.jsx)(t.code,{children:"gprestore"})," log file and continues the restore operation. The utility also creates text files in the backup directory that contain the list of tables that generated SQL errors."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Tables with metadata errors - ",(0,i.jsx)(t.code,{children:"gprestore_<backup-timestamp>_<restore-time>_error_tables_metadata"})]}),"\n",(0,i.jsxs)(t.li,{children:["Tables with data errors - ",(0,i.jsx)(t.code,{children:"gprestore_<backup-timestamp>_<restore-time>_error_tables_data"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--plugin-config config-file_location"})}),"\n",(0,i.jsxs)(t.p,{children:["Specify the location of the ",(0,i.jsx)(t.code,{children:"gpbackup"})," plugin configuration file, a YAML-formatted text file. The file contains configuration information for the plugin application that ",(0,i.jsx)(t.code,{children:"gprestore"})," uses during the restore operation."]}),"\n",(0,i.jsxs)(t.p,{children:["If you specify the ",(0,i.jsx)(t.code,{children:"--plugin-config"})," option when you back up a database, you must specify this option with configuration information for a corresponding plugin application when you restore the database from the backup."]}),"\n",(0,i.jsxs)(t.p,{children:["You cannot combine this option with the option ",(0,i.jsx)(t.code,{children:"--backup-dir"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--quiet"})}),"\n",(0,i.jsx)(t.p,{children:"Optional. Suppress all non-warning, non-error log messages."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--redirect-db database_name"})}),"\n",(0,i.jsx)(t.p,{children:"Optional. Restore to the specified database_name instead of to the database that was backed up."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--verbose"})}),"\n",(0,i.jsx)(t.p,{children:"Optional. Displays verbose log messages during a restore operation.--versionOptional. Print the version number and exit."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--with-globals"})}),"\n",(0,i.jsx)(t.p,{children:"Optional. Restores Cloudberry Database system objects in the backup set, in addition to database objects."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--with-stats"})}),"\n",(0,i.jsxs)(t.p,{children:["Optional. Restore query plan statistics from the backup set. If the backup set was not created with the ",(0,i.jsx)(t.code,{children:"--with-stats"})," option, an error is returned. Restored tables will only have statistics from the backup. You cannot use this option with ",(0,i.jsx)(t.code,{children:"--run-analyze"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["To collect current statistics for the restored tables during the restore operation, use the ",(0,i.jsx)(t.code,{children:"--run-analyze"})," option. As an alternative, you can run the ",(0,i.jsx)(t.code,{children:"ANALYZE"})," command on the tables after the tables are restored."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--run-analyze"})}),"\n",(0,i.jsxs)(t.p,{children:["Optional. Run ",(0,i.jsx)(t.code,{children:"ANALYZE"})," on the tables that are restored. For a partitioned table, ",(0,i.jsx)(t.code,{children:"ANALYZE"})," is run on the root partitioned table. If ",(0,i.jsx)(t.code,{children:"--with-stats"})," was specified for the backup, those statistics are ignored. You cannot use this option with ",(0,i.jsx)(t.code,{children:"--with-stats"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If the backup being restored used the ",(0,i.jsx)(t.code,{children:"gpbackup"})," option ",(0,i.jsx)(t.code,{children:"--leaf-partition-data"}),", ",(0,i.jsx)(t.code,{children:"gprestore"})," runs ",(0,i.jsx)(t.code,{children:"ANALYZE"})," only on the individual leaf partitions that are restored, not the root partitioned table."]}),"\n",(0,i.jsxs)(t.p,{children:["Depending the tables being restored, running ",(0,i.jsx)(t.code,{children:"ANALYZE"})," on restored tables might increase the duration of the restore operation."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"--help"})}),"\n",(0,i.jsx)(t.p,{children:"Displays the online help."}),"\n",(0,i.jsx)(t.h2,{id:"return-codes",children:"Return Codes"}),"\n",(0,i.jsxs)(t.p,{children:["One of these codes is returned after ",(0,i.jsx)(t.code,{children:"gprestore"})," completes."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"0 -- Restore completed with no problems."}),"\n",(0,i.jsx)(t.li,{children:"1 -- Restore completed with non-fatal errors. See log file for more information."}),"\n",(0,i.jsx)(t.li,{children:"2 -- Restore failed with a fatal error. See log file for more information."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.p,{children:"Create the demo database and restore all schemas and tables in the backup set for the indicated timestamp:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"$ dropdb demo\n$ gprestore --timestamp 20171103152558 --create-db\n"})}),"\n",(0,i.jsx)(t.p,{children:'Restore the backup set to the "demo2" database instead of the "demo" database that was backed up:'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"$ createdb demo2\n$ gprestore --timestamp 20171103152558 --redirect-db demo2\n"})}),"\n",(0,i.jsx)(t.p,{children:"Restore global Cloudberry Database metadata and query plan statistics in addition to the database objects:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"$ gprestore --timestamp 20171103152558 --create-db --with-globals --with-stats\n"})}),"\n",(0,i.jsx)(t.p,{children:"Restore, using backup files that were created in the /home/gpadmin/backup directory, creating 8 parallel connections:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"$ gprestore --backup-dir /home/gpadmin/backups/ --timestamp 20171103153156 --create-db --jobs 8\n"})}),"\n",(0,i.jsx)(t.p,{children:'Restore only the "wikipedia" schema included in the backup set:'}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"$ dropdb demo\n$ gprestore --include-schema wikipedia --backup-dir /home/gpadmin/backups/ --timestamp 20171103153156 --create-db\n"})}),"\n",(0,i.jsxs)(t.p,{children:["If you restore from an incremental backup set, all the required files in the backup set must be available to ",(0,i.jsx)(t.code,{children:"gprestore"}),". For example, the following timestamp keys specify an incremental backup set. 20170514054532 is the full backup and the others are incremental backups."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"20170514054532 (full backup)\n20170714095512\n20170914081205\n20171114064330\n20180114051246\n"})}),"\n",(0,i.jsxs)(t.p,{children:["The following ",(0,i.jsx)(t.code,{children:"gprestore"})," command specifies the timestamp 20121114064330. The incremental backup with the timestamps 20120714095512 and 20120914081205 and the full backup must be available to perform a restore."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"gprestore --timestamp 20121114064330 --redirect-db mystest --create-db\n"})})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>o});var i=s(67294);const n={},a=i.createContext(n);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);