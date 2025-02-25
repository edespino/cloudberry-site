"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[7453],{82178:(e,d,s)=>{s.r(d),s.d(d,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>r,toc:()=>a});var i=s(85893),t=s(11151);const n={title:"\u4f7f\u7528 gpfdist \u52a0\u8f7d\u6570\u636e"},l="\u4f7f\u7528 gpfdist \u5c06\u6570\u636e\u52a0\u8f7d\u5230 Cloudberry Database \u4e2d",r={id:"data-loading/load-data-using-gpfdist",title:"\u4f7f\u7528 gpfdist \u52a0\u8f7d\u6570\u636e",description:"\u8981\u5c06\u6570\u636e\u4ece\u672c\u5730\u4e3b\u673a\u6587\u4ef6\u6216\u901a\u8fc7\u5185\u90e8\u7f51\u7edc\u8bbf\u95ee\u7684\u6587\u4ef6\u52a0\u8f7d\u5230 Cloudberry Database \u4e2d\uff0c\u4f60\u53ef\u4ee5\u5728 CREATE EXTERNAL TABLE \u8bed\u53e5\u4e2d\u4f7f\u7528 gpfdist \u534f\u8bae\u3002gpfdist \u662f\u4e00\u4e2a\u6587\u4ef6\u670d\u52a1\u5668\u5b9e\u7528\u7a0b\u5e8f\uff0c\u8fd0\u884c\u5728 Cloudberry Database Coordinator \u6216\u5907\u7528 Coordinator \u4e4b\u5916\u7684\u4e3b\u673a\u4e0a\u3002gpfdist \u4ece\u4e3b\u673a\u4e0a\u7684\u4e00\u4e2a\u76ee\u5f55\u4e2d\u4e3a Cloudberry Database Segment \u63d0\u4f9b\u6587\u4ef6\u670d\u52a1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/data-loading/load-data-using-gpfdist.md",sourceDirName:"data-loading",slug:"/data-loading/load-data-using-gpfdist",permalink:"/zh/docs/data-loading/load-data-using-gpfdist",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/data-loading/load-data-using-gpfdist.md",tags:[],version:"current",lastUpdatedBy:"TomShawn",lastUpdatedAt:1740362944,formattedLastUpdatedAt:"2025\u5e742\u670824\u65e5",frontMatter:{title:"\u4f7f\u7528 gpfdist \u52a0\u8f7d\u6570\u636e"},sidebar:"docsbars",previous:{title:"\u4f7f\u7528 COPY \u52a0\u8f7d\u6570\u636e",permalink:"/zh/docs/data-loading/load-data-using-copy"},next:{title:"\u4f7f\u7528 File \u534f\u8bae\u52a0\u8f7d\u6570\u636e",permalink:"/zh/docs/data-loading/load-data-using-file-protocol"}},c={},a=[{value:"\u5173\u4e8e gpfdist",id:"\u5173\u4e8e-gpfdist",level:2},{value:"\u5173\u4e8e gpfdist \u548c\u5916\u90e8\u8868",id:"\u5173\u4e8e-gpfdist-\u548c\u5916\u90e8\u8868",level:3},{value:"\u5173\u4e8e gpfdist \u7684\u8bbe\u7f6e\u548c\u6027\u80fd",id:"\u5173\u4e8e-gpfdist-\u7684\u8bbe\u7f6e\u548c\u6027\u80fd",level:3},{value:"\u63a7\u5236 Segment \u5e76\u884c\u6027",id:"\u63a7\u5236-segment-\u5e76\u884c\u6027",level:3},{value:"\u7b2c 1 \u6b65\uff1a\u5b89\u88c5 gpfdist",id:"\u7b2c-1-\u6b65\u5b89\u88c5-gpfdist",level:2},{value:"\u7b2c 2 \u6b65\uff1a\u542f\u52a8\u548c\u505c\u6b62 gpfdist",id:"\u7b2c-2-\u6b65\u542f\u52a8\u548c\u505c\u6b62-gpfdist",level:2},{value:"\u7b2c 3 \u6b65\uff1a\u4f7f\u7528 gpfdist \u4e0e\u5916\u90e8\u8868\u52a0\u8f7d\u6570\u636e",id:"\u7b2c-3-\u6b65\u4f7f\u7528-gpfdist-\u4e0e\u5916\u90e8\u8868\u52a0\u8f7d\u6570\u636e",level:2},{value:"\u793a\u4f8b 1 - \u5728\u5355\u7f51\u5361\u673a\u5668\u4e0a\u8fd0\u884c\u5355\u4e2a gpfdist \u5b9e\u4f8b",id:"\u793a\u4f8b-1---\u5728\u5355\u7f51\u5361\u673a\u5668\u4e0a\u8fd0\u884c\u5355\u4e2a-gpfdist-\u5b9e\u4f8b",level:3},{value:"\u793a\u4f8b 2 - \u8fd0\u884c\u591a\u4e2a gpfdist \u5b9e\u4f8b",id:"\u793a\u4f8b-2---\u8fd0\u884c\u591a\u4e2a-gpfdist-\u5b9e\u4f8b",level:3},{value:"\u793a\u4f8b 3 - \u8fd0\u884c\u5355\u4e2a gpfdist \u5b9e\u4f8b\u5e76\u8bb0\u5f55\u9519\u8bef",id:"\u793a\u4f8b-3---\u8fd0\u884c\u5355\u4e2a-gpfdist-\u5b9e\u4f8b\u5e76\u8bb0\u5f55\u9519\u8bef",level:3},{value:"\u793a\u4f8b 4 - \u4f7f\u7528 gpfdist \u521b\u5efa\u53ef\u5199\u5916\u90e8\u8868",id:"\u793a\u4f8b-4---\u4f7f\u7528-gpfdist-\u521b\u5efa\u53ef\u5199\u5916\u90e8\u8868",level:3}];function o(e){const d={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components},{Details:s}=d;return s||function(e,d){throw new Error("Expected "+(d?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(d.h1,{id:"\u4f7f\u7528-gpfdist-\u5c06\u6570\u636e\u52a0\u8f7d\u5230-cloudberry-database-\u4e2d",children:["\u4f7f\u7528 ",(0,i.jsx)(d.code,{children:"gpfdist"})," \u5c06\u6570\u636e\u52a0\u8f7d\u5230 Cloudberry Database \u4e2d"]}),"\n",(0,i.jsxs)(d.p,{children:["\u8981\u5c06\u6570\u636e\u4ece\u672c\u5730\u4e3b\u673a\u6587\u4ef6\u6216\u901a\u8fc7\u5185\u90e8\u7f51\u7edc\u8bbf\u95ee\u7684\u6587\u4ef6\u52a0\u8f7d\u5230 Cloudberry Database \u4e2d\uff0c\u4f60\u53ef\u4ee5\u5728 ",(0,i.jsx)(d.code,{children:"CREATE EXTERNAL TABLE"})," \u8bed\u53e5\u4e2d\u4f7f\u7528 ",(0,i.jsx)(d.code,{children:"gpfdist"})," \u534f\u8bae\u3002",(0,i.jsx)(d.code,{children:"gpfdist"})," \u662f\u4e00\u4e2a\u6587\u4ef6\u670d\u52a1\u5668\u5b9e\u7528\u7a0b\u5e8f\uff0c\u8fd0\u884c\u5728 Cloudberry Database Coordinator \u6216\u5907\u7528 Coordinator \u4e4b\u5916\u7684\u4e3b\u673a\u4e0a\u3002",(0,i.jsx)(d.code,{children:"gpfdist"})," \u4ece\u4e3b\u673a\u4e0a\u7684\u4e00\u4e2a\u76ee\u5f55\u4e2d\u4e3a Cloudberry Database Segment \u63d0\u4f9b\u6587\u4ef6\u670d\u52a1\u3002"]}),"\n",(0,i.jsxs)(d.p,{children:["\u4f7f\u7528 ",(0,i.jsx)(d.code,{children:"gpfdist"})," \u670d\u52a1\u5916\u90e8\u6570\u636e\u65f6\uff0cCloudberry Database \u7cfb\u7edf\u4e2d\u7684\u6240\u6709 Segment \u90fd\u53ef\u4ee5\u5e76\u884c\u8bfb\u53d6\u6216\u5199\u5165\u5916\u90e8\u8868\u6570\u636e\u3002"]}),"\n",(0,i.jsx)(d.p,{children:"\u652f\u6301\u52a0\u8f7d\u7684\u6570\u636e\u683c\u5f0f\u6709\uff1a"}),"\n",(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsx)(d.li,{children:"CSV \u548c TXT"}),"\n",(0,i.jsxs)(d.li,{children:[(0,i.jsx)(d.code,{children:"FORMAT"})," \u5b50\u53e5\u652f\u6301\u7684\u4efb\u4f55\u5206\u9694\u6587\u672c\u683c\u5f0f"]}),"\n"]}),"\n",(0,i.jsxs)(d.p,{children:["\u4ee5\u4e0b\u662f\u4f7f\u7528 ",(0,i.jsx)(d.code,{children:"gpfdist"})," \u52a0\u8f7d\u6570\u636e\u7684\u4e00\u822c\u6b65\u9aa4\uff1a"]}),"\n",(0,i.jsxs)(d.ol,{children:["\n",(0,i.jsxs)(d.li,{children:["\u5728 Cloudberry Database \u7684 Coordinator \u6216\u5907\u7528 Coordinator \u4e4b\u5916\u7684\u4e3b\u673a\u4e0a\u5b89\u88c5 gpfdist\u3002\u8bf7\u53c2\u89c1",(0,i.jsx)(d.a,{href:"#%E7%AC%AC-1-%E6%AD%A5%E5%AE%89%E8%A3%85-gpfdist",children:"\u5b89\u88c5 gpfdist"}),"\u3002"]}),"\n",(0,i.jsxs)(d.li,{children:["\u5728\u4e3b\u673a\u4e0a\u542f\u52a8 gpfdist\u3002\u8bf7\u53c2\u89c1",(0,i.jsx)(d.a,{href:"#%E7%AC%AC-2-%E6%AD%A5%E5%90%AF%E5%8A%A8%E5%92%8C%E5%81%9C%E6%AD%A2-gpfdist",children:"\u542f\u52a8\u548c\u505c\u6b62 gpfdist"}),"\u3002"]}),"\n",(0,i.jsxs)(d.li,{children:["\u4f7f\u7528 ",(0,i.jsx)(d.code,{children:"gpfdist"})," \u534f\u8bae\u521b\u5efa\u5916\u90e8\u8868\u3002\u8bf7\u53c2\u89c1",(0,i.jsx)(d.a,{href:"#%E7%AC%AC-3-%E6%AD%A5%E4%BD%BF%E7%94%A8-gpfdist-%E4%B8%8E%E5%A4%96%E9%83%A8%E8%A1%A8%E5%8A%A0%E8%BD%BD%E6%95%B0%E6%8D%AE",children:"\u4f7f\u7528 gpfdist \u4e0e\u5916\u90e8\u8868\u52a0\u8f7d\u6570\u636e\u7684\u793a\u4f8b"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"\u6709\u5173 gpfdist"}),(0,i.jsx)(d.h2,{id:"\u5173\u4e8e-gpfdist",children:"\u5173\u4e8e gpfdist"}),(0,i.jsx)(d.p,{children:"\u5728\u4f7f\u7528 gpfdist \u4e4b\u524d\uff0c\u4f60\u9700\u8981\u4e86\u89e3\u5b83\u7684\u5de5\u4f5c\u539f\u7406\u3002\u672c\u8282\u6982\u8ff0\u4e86 gpfdist \u7684\u5de5\u4f5c\u539f\u7406\u4ee5\u53ca\u5982\u4f55\u5c06\u5b83\u4e0e\u5916\u90e8\u8868\u4e00\u8d77\u4f7f\u7528\u3002"}),(0,i.jsx)(d.h3,{id:"\u5173\u4e8e-gpfdist-\u548c\u5916\u90e8\u8868",children:"\u5173\u4e8e gpfdist \u548c\u5916\u90e8\u8868"}),(0,i.jsxs)(d.p,{children:[(0,i.jsx)(d.code,{children:"gpfdist"})," \u6587\u4ef6\u670d\u52a1\u5668\u5b9e\u7528\u7a0b\u5e8f\u4f4d\u4e8e Cloudberry Database Coordinator \u4e3b\u673a\u548c\u6bcf\u4e2a Segment \u4e3b\u673a\u7684 ",(0,i.jsx)(d.code,{children:"$GPHOME/bin"})," \u76ee\u5f55\u4e2d\u3002\u5f53\u4f60\u542f\u52a8 ",(0,i.jsx)(d.code,{children:"gpfdist"})," \u5b9e\u4f8b\u65f6\uff0c\u4f60\u9700\u8981\u6307\u5b9a\u4e00\u4e2a\u76d1\u542c\u7aef\u53e3\u548c\u4e00\u4e2a\u5305\u542b\u8981\u8bfb\u53d6\u7684\u6587\u4ef6\u6216\u8981\u5199\u5165\u7684\u6587\u4ef6\u7684\u76ee\u5f55\u3002\u4f8b\u5982\uff0c\u4ee5\u4e0b\u547d\u4ee4\u5728\u540e\u53f0\u8fd0\u884c ",(0,i.jsx)(d.code,{children:"gpfdist"}),"\uff0c\u76d1\u542c\u7aef\u53e3 ",(0,i.jsx)(d.code,{children:"8801"}),"\uff0c\u5e76\u5728 ",(0,i.jsx)(d.code,{children:"/home/gpadmin/external_files"})," \u76ee\u5f55\u4e2d\u63d0\u4f9b\u6587\u4ef6\u670d\u52a1\uff1a"]}),(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-shell",children:"$ gpfdist -p 8801 -d /home/gpadmin/external_files &\n"})}),(0,i.jsxs)(d.p,{children:[(0,i.jsx)(d.code,{children:"CREATE EXTERNAL TABLE"})," \u547d\u4ee4\u4e2d\u7684 ",(0,i.jsx)(d.code,{children:"LOCATION"})," \u5b50\u53e5\u5c06\u5916\u90e8\u8868\u5b9a\u4e49\u4e0e\u4e00\u4e2a\u6216\u591a\u4e2a ",(0,i.jsx)(d.code,{children:"gpfdist"})," \u5b9e\u4f8b\u8fde\u63a5\u8d77\u6765\u3002\u5982\u679c\u5916\u90e8\u8868\u662f\u53ef\u8bfb\u7684\uff0c",(0,i.jsx)(d.code,{children:"gpfdist"})," \u670d\u52a1\u5668\u4f1a\u4ece\u6307\u5b9a\u76ee\u5f55\u4e2d\u7684\u6587\u4ef6\u4e2d\u8bfb\u53d6\u6570\u636e\u8bb0\u5f55\uff0c\u5c06\u5b83\u4eec\u6253\u5305\u6210\u4e00\u4e2a\u5757\uff0c\u5e76\u5c06\u5757\u4f5c\u4e3a\u54cd\u5e94\u53d1\u9001\u7ed9 Cloudberry Database Segment\u3002Segment \u89e3\u538b\u63a5\u6536\u5230\u7684\u884c\uff0c\u5e76\u6839\u636e\u5916\u90e8\u8868\u7684\u5206\u5e03\u7b56\u7565\u5206\u53d1\u884c\u3002\u5982\u679c\u5916\u90e8\u8868\u662f\u53ef\u5199\u8868\uff0cSegment \u4f1a\u5c06\u884c\u5757\u53d1\u9001\u7ed9 ",(0,i.jsx)(d.code,{children:"gpfdist"}),"\uff0c\u5e76\u7531 ",(0,i.jsx)(d.code,{children:"gpfdist"})," \u5c06\u5b83\u4eec\u5199\u5165\u5916\u90e8\u6587\u4ef6\u3002"]}),(0,i.jsxs)(d.p,{children:["\u5916\u90e8\u6570\u636e\u6587\u4ef6\u53ef\u4ee5\u5305\u542b CSV \u683c\u5f0f\u7684\u884c\uff0c\u6216\u8005 ",(0,i.jsx)(d.code,{children:"CREATE EXTERNAL TABLE"})," \u547d\u4ee4\u7684 ",(0,i.jsx)(d.code,{children:"FORMAT"})," \u5b50\u53e5\u652f\u6301\u7684\u4efb\u610f\u5206\u9694\u6587\u672c\u683c\u5f0f\u3002"]}),(0,i.jsxs)(d.p,{children:["\u5bf9\u4e8e\u53ef\u8bfb\u7684\u5916\u90e8\u8868\uff0c",(0,i.jsx)(d.code,{children:"gpfdist"})," \u4f1a\u81ea\u52a8\u89e3\u538b ",(0,i.jsx)(d.code,{children:"gzip"}),"\uff08",(0,i.jsx)(d.code,{children:".gz"}),"\uff09\u548c ",(0,i.jsx)(d.code,{children:"bzip2"}),"\uff08",(0,i.jsx)(d.code,{children:".bz2"}),"\uff09\u6587\u4ef6\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u901a\u914d\u7b26\uff08",(0,i.jsx)(d.code,{children:"*"}),"\uff09\u6216\u5176\u4ed6 C \u98ce\u683c\u7684\u6a21\u5f0f\u5339\u914d\u6765\u8868\u793a\u8981\u8bfb\u53d6\u7684\u591a\u4e2a\u6587\u4ef6\u3002\u5916\u90e8\u6587\u4ef6\u76f8\u5bf9\u4e8e\u542f\u52a8 ",(0,i.jsx)(d.code,{children:"gpfdist"})," \u5b9e\u4f8b\u65f6\u6307\u5b9a\u7684\u76ee\u5f55\u3002"]}),(0,i.jsx)(d.h3,{id:"\u5173\u4e8e-gpfdist-\u7684\u8bbe\u7f6e\u548c\u6027\u80fd",children:"\u5173\u4e8e gpfdist \u7684\u8bbe\u7f6e\u548c\u6027\u80fd"}),(0,i.jsxs)(d.p,{children:["\u4f60\u53ef\u4ee5\u5728\u591a\u53f0\u4e3b\u673a\u4e0a\u8fd0\u884c ",(0,i.jsx)(d.code,{children:"gpfdist"})," \u5b9e\u4f8b\uff0c\u4e5f\u53ef\u4ee5\u5728\u6bcf\u53f0\u4e3b\u673a\u4e0a\u8fd0\u884c\u591a\u4e2a ",(0,i.jsx)(d.code,{children:"gpfdist"})," \u5b9e\u4f8b\u3002\u8fd9\u6837\u4f60\u53ef\u4ee5\u6309\u9700\u90e8\u7f72 ",(0,i.jsx)(d.code,{children:"gpfdist"})," \u670d\u52a1\u5668\uff0c\u4ee5\u4fbf\u5229\u7528\u6240\u6709\u53ef\u7528\u7684\u7f51\u7edc\u5e26\u5bbd\u548c Cloudberry Database \u7684\u5e76\u884c\u6027\uff0c\u4ece\u800c\u83b7\u5f97\u5feb\u901f\u7684\u6570\u636e\u52a0\u8f7d\u548c\u5378\u8f7d\u901f\u7387\u3002"]}),(0,i.jsxs)(d.ul,{children:["\n",(0,i.jsxs)(d.li,{children:["\u5141\u8bb8\u7f51\u7edc\u6d41\u91cf\u540c\u65f6\u4f7f\u7528 ETL \u4e3b\u673a\u4e0a\u7684\u6240\u6709\u7f51\u7edc\u63a5\u53e3\u3002\u5728 ETL \u4e3b\u673a\u4e0a\u4e3a\u6bcf\u4e2a\u63a5\u53e3\u8fd0\u884c\u4e00\u4e2a gpfdist \u5b9e\u4f8b\uff0c\u7136\u540e\u5728\u5916\u90e8\u8868\u5b9a\u4e49\u7684 ",(0,i.jsx)(d.code,{children:"LOCATION"})," \u5b50\u53e5\u4e2d\u58f0\u660e\u6bcf\u4e2a NIC \u7684\u4e3b\u673a\u540d\uff08\u8bf7\u53c2\u89c1",(0,i.jsx)(d.a,{href:"#%E7%A4%BA%E4%BE%8B-1---%E5%9C%A8%E5%8D%95%E7%BD%91%E5%8D%A1%E6%9C%BA%E5%99%A8%E4%B8%8A%E8%BF%90%E8%A1%8C%E5%8D%95%E4%B8%AA-gpfdist-%E5%AE%9E%E4%BE%8B",children:"\u793a\u4f8b 1 - \u5728\u5355\u7f51\u5361\u673a\u5668\u4e0a\u8fd0\u884c\u5355\u4e2a gpfdist \u5b9e\u4f8b"}),"\uff09\u3002"]}),"\n",(0,i.jsx)(d.li,{children:"\u5728 ETL \u4e3b\u673a\u4e0a\u7684\u591a\u4e2a gpfdist \u5b9e\u4f8b\u95f4\u5747\u5300\u5206\u914d\u5916\u90e8\u8868\u6570\u636e\u3002\u4f8b\u5982\uff0c\u5728\u5177\u6709\u4e24\u4e2a NIC \u7684 ETL \u7cfb\u7edf\u4e0a\uff0c\u8fd0\u884c\u4e24\u4e2a gpfdist \u5b9e\u4f8b\uff08\u6bcf\u4e2a NIC \u4e0a\u4e00\u4e2a\uff09\u4ee5\u4f18\u5316\u6570\u636e\u52a0\u8f7d\u6027\u80fd\uff0c\u5e76\u5728\u4e24\u4e2a gpfdist \u670d\u52a1\u5668\u4e4b\u95f4\u5747\u5300\u5206\u914d\u5916\u90e8\u8868\u6570\u636e\u6587\u4ef6\u3002"}),"\n"]}),(0,i.jsx)(d.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,i.jsxs)(d.p,{children:["\u5f53\u4f60\u63d0\u4ea4\u6587\u4ef6\u7ed9 gpfdist \u65f6\uff0c\u5efa\u8bae\u4f7f\u7528\u7ba1\u9053 (",(0,i.jsx)(d.code,{children:"|"}),") \u5206\u9694\u683c\u5f0f\u5316\u6587\u672c\u3002Cloudberry Database \u4f1a\u7528\u5355\u5f15\u53f7\u6216\u53cc\u5f15\u53f7\u62ec\u8d77\u9017\u53f7\u5206\u9694\u7684\u6587\u672c\u5b57\u7b26\u4e32\u3002gpfdist \u5fc5\u987b\u5220\u9664\u5f15\u53f7\u4ee5\u89e3\u6790\u5b57\u7b26\u4e32\u3002\u4f7f\u7528\u7ba1\u9053\u5206\u9694\u683c\u5f0f\u5316\u6587\u672c\u53ef\u4ee5\u907f\u514d\u989d\u5916\u7684\u6b65\u9aa4\uff0c\u5e76\u63d0\u9ad8\u6027\u80fd\u3002"]})}),(0,i.jsx)(d.h3,{id:"\u63a7\u5236-segment-\u5e76\u884c\u6027",children:"\u63a7\u5236 Segment \u5e76\u884c\u6027"}),(0,i.jsxs)(d.p,{children:[(0,i.jsx)(d.code,{children:"gp_external_max_segs"})," \u670d\u52a1\u5668\u914d\u7f6e\u53c2\u6570\u63a7\u5236\u53ef\u4ee5\u540c\u65f6\u8bbf\u95ee\u5355\u4e2a gpfdist \u5b9e\u4f8b\u7684 Segment \u5b9e\u4f8b\u6570\u91cf\u3002\u9ed8\u8ba4\u503c\u4e3a 64\u3002\u4f60\u53ef\u4ee5\u8bbe\u7f6e Segment \u5b9e\u4f8b\u7684\u6570\u91cf\uff0c\u4f7f\u4e00\u4e9b Segment \u5b9e\u4f8b\u5904\u7406\u5916\u90e8\u6570\u636e\u6587\u4ef6\uff0c\u800c\u53e6\u4e00\u4e9b\u6267\u884c\u5176\u4ed6\u6570\u636e\u5e93\u5904\u7406\u3002\u4f60\u53ef\u4ee5\u5728 Coordinator \u5b9e\u4f8b\u7684 ",(0,i.jsx)(d.code,{children:"postgresql.conf"})," \u6587\u4ef6\u4e2d\u8bbe\u7f6e\u6b64\u53c2\u6570\u3002"]})]}),"\n",(0,i.jsx)(d.h2,{id:"\u7b2c-1-\u6b65\u5b89\u88c5-gpfdist",children:"\u7b2c 1 \u6b65\uff1a\u5b89\u88c5 gpfdist"}),"\n",(0,i.jsxs)(d.p,{children:["gpfdist \u5b89\u88c5\u5728 Cloudberry Database Coordinator \u4e3b\u673a\u7684 ",(0,i.jsx)(d.code,{children:"$GPHOME/bin"})," \u76ee\u5f55\u4e2d\u3002\u8bf7\u5728 Cloudberry Database Coordinator \u6216\u5907\u7528 Coordinator \u4e4b\u5916\u7684\u673a\u5668\u4e0a\u8fd0\u884c gpfdist\uff0c\u4f8b\u5982\u4e13\u95e8\u7528\u4e8e ETL \u5904\u7406\u7684\u673a\u5668\u3002\u5728 Coordinator \u6216\u5907\u7528 Coordinator \u4e0a\u8fd0\u884c gpfdist \u53ef\u80fd\u4f1a\u5bf9\u67e5\u8be2\u6267\u884c\u4ea7\u751f\u6027\u80fd\u5f71\u54cd\u3002"]}),"\n",(0,i.jsx)(d.h2,{id:"\u7b2c-2-\u6b65\u542f\u52a8\u548c\u505c\u6b62-gpfdist",children:"\u7b2c 2 \u6b65\uff1a\u542f\u52a8\u548c\u505c\u6b62 gpfdist"}),"\n",(0,i.jsxs)(d.p,{children:["\u4f60\u53ef\u4ee5\u5728\u5f53\u524d\u76ee\u5f55\u4f4d\u7f6e\u542f\u52a8 gpfdist\uff0c\u4e5f\u53ef\u4ee5\u5728\u4efb\u4f55\u4f60\u6307\u5b9a\u7684\u76ee\u5f55\u4e2d\u542f\u52a8\u3002\u9ed8\u8ba4\u7aef\u53e3\u662f ",(0,i.jsx)(d.code,{children:"8080"}),"\u3002"]}),"\n",(0,i.jsx)(d.p,{children:"\u5bf9\u4e8e\u5f53\u524d\u76ee\u5f55\u4e2d\uff0c\u8f93\u5165\uff1a"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-shell",children:"gpfdist &\n"})}),"\n",(0,i.jsx)(d.p,{children:"\u5bf9\u4e8e\u4e0d\u540c\u7684\u76ee\u5f55\uff0c\u6307\u5b9a\u8981\u63d0\u4f9b\u6587\u4ef6\u7684\u76ee\u5f55\uff0c\u4ee5\u53ca\u53ef\u9009\u7684 HTTP \u7aef\u53e3\u3002"}),"\n",(0,i.jsx)(d.p,{children:"\u5728\u540e\u53f0\u542f\u52a8 gpfdist \u5e76\u5c06\u8f93\u51fa\u6d88\u606f\u8bb0\u5f55\u8fdb\u65e5\u5fd7\u6587\u4ef6\uff1a"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-shell",children:"$ gpfdist -d /var/load_files -p 8081 -l /home/`gpadmin`/log &\n"})}),"\n",(0,i.jsx)(d.p,{children:"\u5bf9\u4e8e\u540c\u4e00\u53f0 ETL \u4e3b\u673a\u4e0a\u7684\u591a\u4e2a gpfdist \u5b9e\u4f8b\uff0c\u4e3a\u6bcf\u4e2a\u5b9e\u4f8b\u4f7f\u7528\u4e0d\u540c\u7684\u57fa\u7840\u8def\u5f84 (base directory) \u548c\u7aef\u53e3\u3002\u4f8b\u5982\uff1a"}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-shell",children:"$ gpfdist -d /var/load_files1 -p 8081 -l /home/`gpadmin`/log1 &\n$ gpfdist -d /var/load_files2 -p 8082 -l /home/`gpadmin`/log2 &\n"})}),"\n",(0,i.jsxs)(d.p,{children:["\u65e5\u5fd7\u7684\u4fdd\u5b58\u8def\u5f84\u4e3a ",(0,i.jsx)(d.code,{children:"/home/gpadmin/log"}),"\u3002"]}),"\n",(0,i.jsxs)(d.admonition,{title:"\u4fe1\u606f",type:"info",children:[(0,i.jsx)(d.p,{children:"\u505c\u6b62\u5728\u540e\u53f0\u8fd0\u884c\u7684 gpfdist\uff1a"}),(0,i.jsx)(d.p,{children:"\u9996\u5148\u627e\u5230\u5176\u8fdb\u7a0b ID\uff1a"}),(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-shell",children:"$ ps -ef | grep gpfdist\n"})}),(0,i.jsxs)(d.p,{children:["\u7136\u540e\u7ec8\u6b62\u8fdb\u7a0b\uff0c\u4f8b\u5982\uff08",(0,i.jsx)(d.code,{children:"3457"})," \u662f\u6b64\u793a\u4f8b\u4e2d\u7684\u8fdb\u7a0b ID\uff09\uff1a"]}),(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-shell",children:"$ kill 3457\n"})})]}),"\n",(0,i.jsx)(d.h2,{id:"\u7b2c-3-\u6b65\u4f7f\u7528-gpfdist-\u4e0e\u5916\u90e8\u8868\u52a0\u8f7d\u6570\u636e",children:"\u7b2c 3 \u6b65\uff1a\u4f7f\u7528 gpfdist \u4e0e\u5916\u90e8\u8868\u52a0\u8f7d\u6570\u636e"}),"\n",(0,i.jsx)(d.p,{children:"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u521b\u5efa\u5916\u90e8\u8868\u65f6\u4f7f\u7528 gpfdist \u52a0\u8f7d\u6570\u636e\u5230 Cloudberry Database\u3002"}),"\n",(0,i.jsx)(d.admonition,{title:"\u6ce8\u610f",type:"tip",children:(0,i.jsx)(d.p,{children:"\u4f7f\u7528 IPv6 \u65f6\uff0c\u59cb\u7ec8\u5c06\u6570\u5b57 IP \u5730\u5740\u62ec\u5728\u65b9\u62ec\u53f7\u4e2d\u3002"})}),"\n",(0,i.jsx)(d.h3,{id:"\u793a\u4f8b-1---\u5728\u5355\u7f51\u5361\u673a\u5668\u4e0a\u8fd0\u884c\u5355\u4e2a-gpfdist-\u5b9e\u4f8b",children:"\u793a\u4f8b 1 - \u5728\u5355\u7f51\u5361\u673a\u5668\u4e0a\u8fd0\u884c\u5355\u4e2a gpfdist \u5b9e\u4f8b"}),"\n",(0,i.jsxs)(d.p,{children:["\u521b\u5efa\u4e00\u4e2a\u53ef\u8bfb\u7684\u5916\u90e8\u8868 ",(0,i.jsx)(d.code,{children:"ext_expenses"}),"\uff0c\u4f7f\u7528 gpfdist \u534f\u8bae\u3002\u6587\u4ef6\u4f7f\u7528\u7ba1\u9053 (",(0,i.jsx)(d.code,{children:"|"}),") \u4f5c\u4e3a\u5217\u5206\u9694\u7b26\u3002"]}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-sql",children:"=# CREATE EXTERNAL TABLE ext_expenses ( name text,\n    date date, amount float4, category text, desc1 text )\n    LOCATION ('gpfdist://etlhost-1:8081/*')\nFORMAT 'TEXT' (DELIMITER '|');\n"})}),"\n",(0,i.jsx)(d.h3,{id:"\u793a\u4f8b-2---\u8fd0\u884c\u591a\u4e2a-gpfdist-\u5b9e\u4f8b",children:"\u793a\u4f8b 2 - \u8fd0\u884c\u591a\u4e2a gpfdist \u5b9e\u4f8b"}),"\n",(0,i.jsxs)(d.p,{children:["\u521b\u5efa\u4e00\u4e2a\u53ef\u8bfb\u7684\u5916\u90e8\u8868 ",(0,i.jsx)(d.code,{children:"ext_expenses"}),"\uff0c\u5bf9\u6240\u6709\u5e26 txt \u6269\u5c55\u540d\u7684\u6587\u4ef6\u4f7f\u7528 gpfdist \u534f\u8bae\u3002\u5217\u5206\u9694\u7b26\u662f\u7ba1\u9053 (",(0,i.jsx)(d.code,{children:"|"}),")\uff0cNULL \u662f\u7a7a\u683c (",(0,i.jsx)(d.code,{children:"' '"}),")\u3002"]}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-sql",children:"=# CREATE EXTERNAL TABLE ext_expenses ( name text, \n   date date,  amount float4, category text, desc1 text ) \n   LOCATION ('gpfdist://etlhost-1:8081/*.txt', \n             'gpfdist://etlhost-2:8081/*.txt')\n   FORMAT 'TEXT' ( DELIMITER '|' NULL ' ') ;\n"})}),"\n",(0,i.jsx)(d.h3,{id:"\u793a\u4f8b-3---\u8fd0\u884c\u5355\u4e2a-gpfdist-\u5b9e\u4f8b\u5e76\u8bb0\u5f55\u9519\u8bef",children:"\u793a\u4f8b 3 - \u8fd0\u884c\u5355\u4e2a gpfdist \u5b9e\u4f8b\u5e76\u8bb0\u5f55\u9519\u8bef"}),"\n",(0,i.jsxs)(d.p,{children:["\u4f7f\u7528 gpfdist \u534f\u8bae\u521b\u5efa\u4e00\u4e2a\u53ef\u8bfb\u7684\u5916\u90e8\u8868 ",(0,i.jsx)(d.code,{children:"ext_expenses"}),"\uff0c\u5bf9\u6240\u6709\u5e26 txt \u6269\u5c55\u540d\u7684\u6587\u4ef6\u4f7f\u7528 gpfdist \u534f\u8bae\u3002\u5217\u5206\u9694\u7b26\u662f\u7ba1\u9053 (",(0,i.jsx)(d.code,{children:"|"}),")\uff0cNULL \u662f\u7a7a\u683c (",(0,i.jsx)(d.code,{children:"' '"}),")\u3002"]}),"\n",(0,i.jsxs)(d.p,{children:["\u5f53\u6211\u4eec\u5728 Cloudberry Database \u4e2d\u8bbf\u95ee\u5916\u90e8\u8868\u683c\u65f6\uff0c\u91c7\u7528\u4e86\u4e00\u79cd\u79f0\u4e3a\u201c\u5355\u884c\u9519\u8bef\u9694\u79bb\u201d\u6a21\u5f0f\u7684\u5904\u7406\u65b9\u5f0f\u3002\u8fd9\u610f\u5473\u7740\uff0c\u5982\u679c\u8f93\u5165\u7684\u6570\u636e\u683c\u5f0f\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\uff0c\u8fd9\u4e9b\u9519\u8bef\u4e0d\u4f1a\u5f71\u54cd\u6574\u4e2a\u8868\u683c\u7684\u5904\u7406\u8fc7\u7a0b\uff0c\u800c\u662f\u4f1a\u88ab\u5355\u72ec\u6355\u83b7\u5e76\u8bb0\u5f55\u4e0b\u6765\uff0c\u540c\u65f6\u8fd8\u4f1a\u63d0\u4f9b\u4e00\u4efd\u8be6\u7ec6\u7684\u9519\u8bef\u63cf\u8ff0\u3002\u4f60\u53ef\u4ee5\u67e5\u770b\u8fd9\u4e9b\u9519\u8bef\uff0c\u4fee\u590d\u95ee\u9898\uff0c\u7136\u540e\u91cd\u65b0\u52a0\u8f7d\u88ab\u62d2\u7edd\u7684\u6570\u636e\u3002\u5982\u679c\u67d0\u4e2a Segment \u4e0a\u7684\u9519\u8bef\u8ba1\u6570\u5927\u4e8e ",(0,i.jsx)(d.code,{children:"5"}),"\uff08",(0,i.jsx)(d.code,{children:"SEGMENT REJECT LIMIT"})," \u503c\uff09\uff0c\u6574\u4e2a\u5916\u90e8\u8868\u64cd\u4f5c\u5c06\u5931\u8d25\uff0c\u4e0d\u4f1a\u5904\u7406\u4efb\u4f55\u884c\u3002"]}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-sql",children:"=# CREATE EXTERNAL TABLE ext_expenses ( name text, \n   date date, amount float4, category text, desc1 text ) \n   LOCATION ('gpfdist://etlhost-1:8081/*.txt', \n             'gpfdist://etlhost-2:8082/*.txt')\n   FORMAT 'TEXT' ( DELIMITER '|' NULL ' ')\n   LOG ERRORS SEGMENT REJECT LIMIT 5;\n"})}),"\n",(0,i.jsxs)(d.p,{children:["\u4ece CSV \u683c\u5f0f\u7684\u6587\u672c\u6587\u4ef6\u521b\u5efa\u53ef\u8bfb\u7684 ",(0,i.jsx)(d.code,{children:"ext_expenses"})," \u8868\uff1a"]}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-sql",children:"=# CREATE EXTERNAL TABLE ext_expenses ( name text, \n   date date,  amount float4, category text, desc1 text ) \n   LOCATION ('gpfdist://etlhost-1:8081/*.txt', \n             'gpfdist://etlhost-2:8082/*.txt')\n   FORMAT 'CSV' ( DELIMITER ',' )\n   LOG ERRORS SEGMENT REJECT LIMIT 5;\n"})}),"\n",(0,i.jsx)(d.h3,{id:"\u793a\u4f8b-4---\u4f7f\u7528-gpfdist-\u521b\u5efa\u53ef\u5199\u5916\u90e8\u8868",children:"\u793a\u4f8b 4 - \u4f7f\u7528 gpfdist \u521b\u5efa\u53ef\u5199\u5916\u90e8\u8868"}),"\n",(0,i.jsxs)(d.p,{children:["\u521b\u5efa\u4e00\u4e2a\u53ef\u5199\u5165\u7684\u5916\u90e8\u8868 ",(0,i.jsx)(d.code,{children:"sales_out"}),"\uff0c\u4f7f\u7528 gpfdist \u5c06\u8f93\u51fa\u6570\u636e\u5199\u5165\u6587\u4ef6 ",(0,i.jsx)(d.code,{children:"sales.out"}),"\u3002\u5217\u5206\u9694\u7b26\u662f\u7ba1\u9053 (",(0,i.jsx)(d.code,{children:"|"}),")\uff0cNULL \u662f\u7a7a\u683c (",(0,i.jsx)(d.code,{children:"' '"}),")\u3002\u6587\u4ef6\u5c06\u5728\u542f\u52a8 gpfdist \u6587\u4ef6\u670d\u52a1\u5668\u65f6\u6307\u5b9a\u7684\u76ee\u5f55\u4e2d\u521b\u5efa\u3002"]}),"\n",(0,i.jsx)(d.pre,{children:(0,i.jsx)(d.code,{className:"language-sql",children:"=# CREATE WRITABLE EXTERNAL TABLE sales_out (LIKE sales) \n   LOCATION ('gpfdist://etl1:8081/sales.out')\n   FORMAT 'TEXT' ( DELIMITER '|' NULL ' ')\n   DISTRIBUTED BY (txn_id);\n"})})]})}function p(e={}){const{wrapper:d}={...(0,t.a)(),...e.components};return d?(0,i.jsx)(d,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,d,s)=>{s.d(d,{Z:()=>r,a:()=>l});var i=s(67294);const t={},n=i.createContext(t);function l(e){const d=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function r(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),i.createElement(n.Provider,{value:d},e.children)}}}]);