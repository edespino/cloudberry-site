"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[758],{23180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=r(85893),s=r(11151);const i={title:"gpmemreport"},d="gpmemreport",c={id:"sys-utilities/gpmemreport",title:"gpmemreport",description:"Interprets the output created by the gpmemwatcher utility and generates output files in a readable format.",source:"@site/docs/sys-utilities/gpmemreport.md",sourceDirName:"sys-utilities",slug:"/sys-utilities/gpmemreport",permalink:"/docs/sys-utilities/gpmemreport",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/sys-utilities/gpmemreport.md",tags:[],version:"current",lastUpdatedBy:"Ed Espino",lastUpdatedAt:1733247584,formattedLastUpdatedAt:"Dec 3, 2024",frontMatter:{title:"gpmemreport"},sidebar:"docsbars",previous:{title:"gplogfilter",permalink:"/docs/sys-utilities/gplogfilter"},next:{title:"gpmemwatcher",permalink:"/docs/sys-utilities/gpmemwatcher"}},l={},o=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"See also",id:"see-also",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"gpmemreport",children:"gpmemreport"}),"\n",(0,n.jsxs)(t.p,{children:["Interprets the output created by the ",(0,n.jsx)(t.a,{href:"/docs/sys-utilities/gpmemwatcher",children:"gpmemwatcher"})," utility and generates output files in a readable format."]}),"\n",(0,n.jsx)(t.h2,{id:"synopsis",children:"Synopsis"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"gpmemreport [<GZIP_FILE>] [[-s <START>] | [--start= <START>]] [[-e <END>] | [--end= <END>]] \n        \ngpmemreport --version\n\ngpmemreport -h | --help \n"})}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"gpmemreport"})," utility helps interpret the output file created by the ",(0,n.jsx)(t.a,{href:"/docs/sys-utilities/gpmemwatcher",children:"gpmemwatcher"})," utility."]}),"\n",(0,n.jsxs)(t.p,{children:["When running ",(0,n.jsx)(t.code,{children:"gpmemreport"})," against the ",(0,n.jsx)(t.code,{children:".gz"})," files generated by ",(0,n.jsx)(t.code,{children:"gpmemwatcher"}),", it generates a series of files, where each file corresponds to a 60 second period of data collected by ",(0,n.jsx)(t.code,{children:"gpmemwatcher"})," converted into a readable format."]}),"\n",(0,n.jsx)(t.h2,{id:"options",children:"Options"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-s | --start start_time"})})}),"\n",(0,n.jsxs)(t.p,{children:["Indicates the start of the reporting period. Timestamp format must be ",(0,n.jsx)(t.code,{children:"'%Y-%m-%d %H:%M:%S'"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-e | --end end_time"})})}),"\n",(0,n.jsxs)(t.p,{children:["Indicates the end of the reporting period. Timestamp format must be ",(0,n.jsx)(t.code,{children:"'%Y-%m-%d %H:%M:%S'"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"--version"})})}),"\n",(0,n.jsx)(t.p,{children:"Displays the version of this utility."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.code,{children:"-h | --help"})})}),"\n",(0,n.jsx)(t.p,{children:"Displays the online help."}),"\n",(0,n.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.strong,{children:["Example 1: Extract all the files generated by ",(0,n.jsx)(t.code,{children:"gpmemwatcher"})," for the Cloudberry coordinator"]})}),"\n",(0,n.jsxs)(t.p,{children:["Locate the output ",(0,n.jsx)(t.code,{children:".gz"})," file from ",(0,n.jsx)(t.code,{children:"gpmemwatcher"})," and run ",(0,n.jsx)(t.code,{children:"gpmemreport"})," against it:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"$ gpmemreport cdw.ps.out.gz\n\n>>>21:11:19:15:37:18<<<\n\n>>>21:11:19:15:38:18<<<\n\n>>>21:11:19:15:39:18<<<\n"})}),"\n",(0,n.jsx)(t.p,{children:"Check that the generated files are listed under the current directory:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"$ ls -thrl\n\n-rw-rw-r--. 1 gpadmin gpadmin 1.2K Nov 19 15:50 20211119-153718\n-rw-rw-r--. 1 gpadmin gpadmin 1.2K Nov 19 15:50 20211119-153818\n-rw-rw-r--. 1 gpadmin gpadmin 1.2K Nov 19 15:50 20211119-153918\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.strong,{children:["Example 2: Extract the files generated by ",(0,n.jsx)(t.code,{children:"gpmemwatcher"})," for the Cloudberry coordinator starting after a certain timestamp"]})}),"\n",(0,n.jsxs)(t.p,{children:["Locate the output ",(0,n.jsx)(t.code,{children:".gz"})," file from ",(0,n.jsx)(t.code,{children:"gpmemwatcher"})," and run ",(0,n.jsx)(t.code,{children:"gpmemreport"})," against it, indicating the start time as ",(0,n.jsx)(t.code,{children:"2021-11-19 15:38:00"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"$ gpmemreport cdw.ps.out.gz --start='2021-11-19 15:38:00'\n\n>>>21:11:19:15:37:18<<<\n\n>>>21:11:19:15:38:18<<<\n\n>>>21:11:19:15:39:18<<<\n"})}),"\n",(0,n.jsx)(t.p,{children:"Check under the current directory that only the selected timestamp files are listed:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"$ ls -thrl\n\n-rw-rw-r--. 1 gpadmin gpadmin 1.2K Nov 19 15:50 20211119-153818\n-rw-rw-r--. 1 gpadmin gpadmin 1.2K Nov 19 15:50 20211119-153918\n"})}),"\n",(0,n.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/sys-utilities/gpmemwatcher",children:"gpmemwatcher"})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>d});var n=r(67294);const s={},i=n.createContext(s);function d(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);