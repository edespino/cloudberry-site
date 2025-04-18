"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[1659],{48132:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=a(85893),s=a(11151),n=a(52991);const o={title:"Backup and Restore Overview"},c="Backup and Restore Overview",i={id:"sys-admin/backup-and-restore/index",title:"Backup and Restore Overview",description:"Apache Cloudberry offers both parallel and non-parallel methods for database backups and restores. Parallel operations handle large systems efficiently because each segment host writes data to its local disk at the same time. Non-parallel operations, however, transfer all data over the network to the coordinator, which then writes it to its storage. This method not only concentrates I/O on a single host but also requires the coordinator to have enough local disk space for the entire database.",source:"@site/docs/sys-admin/backup-and-restore/index.md",sourceDirName:"sys-admin/backup-and-restore",slug:"/sys-admin/backup-and-restore/",permalink:"/zh/docs/sys-admin/backup-and-restore/",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-admin/backup-and-restore/index.md",tags:[],version:"current",lastUpdatedBy:"Alwin",lastUpdatedAt:1744282709,formattedLastUpdatedAt:"2025\u5e744\u670810\u65e5",frontMatter:{title:"Backup and Restore Overview"},sidebar:"docsbars",previous:{title:"\u900f\u660e\u6570\u636e\u52a0\u5bc6",permalink:"/zh/docs/security/transparent-data-encryption"},next:{title:"Perform Full Backup and Restore",permalink:"/zh/docs/sys-admin/backup-and-restore/perform-full-backup-and-restore"}},d={},l=[{value:"Parallel backup with <code>gpbackup</code> and <code>gprestore</code>",id:"parallel-backup-with-gpbackup-and-gprestore",level:2},{value:"Non-parallel backup with <code>pg_dump</code>",id:"non-parallel-backup-with-pg_dump",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"backup-and-restore-overview",children:"Backup and Restore Overview"}),"\n",(0,r.jsx)(t.p,{children:"Apache Cloudberry offers both parallel and non-parallel methods for database backups and restores. Parallel operations handle large systems efficiently because each segment host writes data to its local disk at the same time. Non-parallel operations, however, transfer all data over the network to the coordinator, which then writes it to its storage. This method not only concentrates I/O on a single host but also requires the coordinator to have enough local disk space for the entire database."}),"\n",(0,r.jsxs)(t.h2,{id:"parallel-backup-with-gpbackup-and-gprestore",children:["Parallel backup with ",(0,r.jsx)(t.code,{children:"gpbackup"})," and ",(0,r.jsx)(t.code,{children:"gprestore"})]}),"\n",(0,r.jsxs)(t.p,{children:["Apache Cloudberry provides ",(0,r.jsx)(t.code,{children:"gpbackup"})," and ",(0,r.jsx)(t.code,{children:"gprestore"})," for parallel backup and restore utilities. ",(0,r.jsx)(t.code,{children:"gpbackup"})," uses table-level ",(0,r.jsx)(t.code,{children:"ACCESS SHARE"})," locks instead of ",(0,r.jsx)(t.code,{children:"EXCLUSIVE"})," locks on the ",(0,r.jsx)(t.code,{children:"pg_class"})," catalog table. This enables you to execute DDL statements such as ",(0,r.jsx)(t.code,{children:"CREATE"}),", ",(0,r.jsx)(t.code,{children:"ALTER"}),", ",(0,r.jsx)(t.code,{children:"DROP"}),", and ",(0,r.jsx)(t.code,{children:"TRUNCATE"})," during backups, as long as these statements do not target the current backup set."]}),"\n",(0,r.jsxs)(t.p,{children:["Backup files created with ",(0,r.jsx)(t.code,{children:"gpbackup"})," are designed to provide future capabilities for restoring individual database objects along with their dependencies, such as functions and required user-defined data types."]}),"\n",(0,r.jsxs)(t.p,{children:["For details about backup and restore using ",(0,r.jsx)(t.code,{children:"gpbackup"})," and ",(0,r.jsx)(t.code,{children:"gprestore"}),", see ",(0,r.jsx)(t.a,{href:"/zh/docs/sys-admin/backup-and-restore/perform-full-backup-and-restore",children:"Perform Full Backup and Restore"})," and ",(0,r.jsx)(t.a,{href:"/zh/docs/sys-admin/backup-and-restore/perform-incremental-backup-and-restore",children:"Perform Incremental Backup and Restore"}),"."]}),"\n",(0,r.jsxs)(t.h2,{id:"non-parallel-backup-with-pg_dump",children:["Non-parallel backup with ",(0,r.jsx)(t.code,{children:"pg_dump"})]}),"\n",(0,r.jsxs)(t.p,{children:["You can also use the PostgreSQL non-parallel backup utilitiesm",(0,r.jsx)(t.code,{children:"pg_dump"})," and ",(0,r.jsx)(t.code,{children:"pg_dumpall"})," to create a single dump file on the coordinator host that contains all data from all active segments."]}),"\n",(0,r.jsxs)(t.p,{children:["The PostgreSQL non-parallel utilities should be used only for special cases. They are much slower than using ",(0,r.jsx)(t.code,{children:"gpbackup"})," and ",(0,r.jsx)(t.code,{children:"gprestore"})," because all of the data must pass through the coordinator. In addition, it is often the case that the coordinator host has insufficient disk space to save a backup of an entire distributed Apache Cloudberry."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"pg_restore"})," utility requires compressed dump files created by ",(0,r.jsx)(t.code,{children:"pg_dump"})," or ",(0,r.jsx)(t.code,{children:"pg_dumpall"}),". Before starting the restore, you should modify the ",(0,r.jsx)(t.code,{children:"CREATE TABLE"})," statements in the dump files to include the Apache Cloudberry ",(0,r.jsx)(t.code,{children:"DISTRIBUTED"})," clause. If you do not include the ",(0,r.jsx)(t.code,{children:"DISTRIBUTED"})," clause, Apache Cloudberry assigns default values, which might not be optimal."]}),"\n",(0,r.jsx)(t.p,{children:"To perform a non-parallel restore using parallel backup files, you can copy the backup files from each segment host to the coordinator host, and then load them through the coordinator."}),"\n",(0,r.jsxs)(t.p,{children:["Another non-parallel method for backing up Apache Cloudberry data is to use the ",(0,r.jsx)(t.code,{children:"COPY TO"})," SQL command to copy all or a portion of a table out of the database to a delimited text file on the coordinator host."]}),"\n","\n","\n",(0,r.jsx)(n.Z,{})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},52991:(e,t,a)=>{a.d(t,{Z:()=>g});a(67294);var r=a(90512),s=a(53438),n=a(33692),o=a(13919),c=a(95999),i=a(92503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=a(85893);function h(e){let{href:t,children:a}=e;return(0,l.jsx)(n.Z,{href:t,className:(0,r.Z)("card padding--lg",d.cardContainer),children:a})}function p(e){let{href:t,icon:a,title:s,description:n}=e;return(0,l.jsxs)(h,{href:t,children:[(0,l.jsxs)(i.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:s,children:[a," ",s]}),n&&(0,l.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:n,children:n})]})}function u(e){let{item:t}=e;const a=(0,s.LM)(t);return a?(0,l.jsx)(p,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const a=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.xz)(t.docId??void 0);return(0,l.jsx)(p,{href:t.href,icon:a,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(m,{item:t});case"category":return(0,l.jsx)(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const a=(0,s.jA)();return(0,l.jsx)(g,{items:a.items,className:t})}function g(e){const{items:t,className:a}=e;if(!t)return(0,l.jsx)(b,{...e});const n=(0,s.MN)(t);return(0,l.jsx)("section",{className:(0,r.Z)("row",a),children:n.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(f,{item:e})},t)))})}},11151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>o});var r=a(67294);const s={},n=r.createContext(s);function o(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);