"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[4277],{99578:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>i});var r=s(85893),c=s(11151);const l={title:"\u57fa\u672c\u67e5\u8be2\u8bed\u6cd5"},a="\u57fa\u672c\u67e5\u8be2\u8bed\u6cd5",t={id:"basic-query-syntax",title:"\u57fa\u672c\u67e5\u8be2\u8bed\u6cd5",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86 Cloudberry Database \u7684\u57fa\u672c\u67e5\u8be2\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/basic-query-syntax.md",sourceDirName:".",slug:"/basic-query-syntax",permalink:"/zh/docs/basic-query-syntax",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/basic-query-syntax.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733293498,formattedLastUpdatedAt:"2024\u5e7412\u67084\u65e5",frontMatter:{title:"\u57fa\u672c\u67e5\u8be2\u8bed\u6cd5"},sidebar:"docsbars",previous:{title:"\u8fde\u63a5\u5230\u6570\u636e\u5e93",permalink:"/zh/docs/connect-to-cbdb"},next:{title:"Create and Manage Tablespaces",permalink:"/zh/docs/create-and-manage-tablespaces"}},d={},i=[];function o(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u57fa\u672c\u67e5\u8be2\u8bed\u6cd5",children:"\u57fa\u672c\u67e5\u8be2\u8bed\u6cd5"}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u6587\u6863\u4ecb\u7ecd\u4e86 Cloudberry Database \u7684\u57fa\u672c\u67e5\u8be2\u3002"}),"\n",(0,r.jsx)(n.p,{children:"Cloudberry Database \u662f\u57fa\u4e8e PostgreSQL \u548c Greenplum \u5f00\u53d1\u7684\u9ad8\u6027\u80fd\u3001\u9ad8\u5e76\u884c\u7684\u6570\u636e\u4ed3\u5e93\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u57fa\u672c\u67e5\u8be2\u8bed\u6cd5\u7684\u793a\u4f8b\u3002"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"SELECT"}),"\uff1a\u7528\u4e8e\u4ece\u6570\u636e\u5e93\u548c\u8868\u4e2d\u68c0\u7d22\u6570\u636e\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM employees;  -- \u67e5\u8be2 employees \u8868\u4e2d\u7684\u6240\u6709\u6570\u636e\u3002\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6761\u4ef6\u67e5\u8be2 (",(0,r.jsx)(n.code,{children:"WHERE"}),")\uff1a\u57fa\u4e8e\u7279\u5b9a\u6761\u4ef6\u8fc7\u6ee4\u7ed3\u679c\u96c6\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM employees WHERE salary > 50000;  -- \u67e5\u8be2\u85aa\u6c34\u8d85\u8fc7 50,000 \u7684\u5458\u5de5\u4fe1\u606f\u3002\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ORDER BY"}),"\uff1a\u7528\u4e8e\u6309\u4e00\u4e2a\u6216\u591a\u4e2a\u5217\u5bf9\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u6392\u5e8f\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM employees ORDER BY salary DESC;  -- \u6309\u85aa\u6c34\u964d\u5e8f\u6392\u5217\u5458\u5de5\u4fe1\u606f\u3002\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u805a\u5408\u51fd\u6570\uff1a\u7528\u4e8e\u4ece\u6570\u636e\u96c6\u4e2d\u8ba1\u7b97\u7edf\u8ba1\u4fe1\u606f\uff0c\u4f8b\u5982 ",(0,r.jsx)(n.code,{children:"COUNT"}),"\u3001",(0,r.jsx)(n.code,{children:"SUM"}),"\u3001",(0,r.jsx)(n.code,{children:"AVG"}),"\u3001",(0,r.jsx)(n.code,{children:"MAX"}),"\u3001",(0,r.jsx)(n.code,{children:"MIN"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT AVG(salary) FROM employees;  -- \u8ba1\u7b97\u5458\u5de5\u7684\u5e73\u5747\u85aa\u6c34\u3002\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"GROUP BY"}),"\uff1a\u4e0e\u805a\u5408\u51fd\u6570\u4e00\u8d77\u4f7f\u7528\uff0c\u7528\u4e8e\u6307\u5b9a\u5206\u7ec4\u805a\u5408\u7684\u5217\u4fe1\u606f\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT department, COUNT(*) FROM employees GROUP BY department;  -- \u6309\u90e8\u95e8\u7edf\u8ba1\u5458\u5de5\u6570\u91cf\u3002\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u9650\u5236\u7ed3\u679c\u6570\u91cf (",(0,r.jsx)(n.code,{children:"LIMIT"}),")\uff1a\u7528\u4e8e\u9650\u5236\u67e5\u8be2\u7ed3\u679c\u8fd4\u56de\u7684\u884c\u6570\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM employees LIMIT 10;  -- \u4ec5\u67e5\u8be2\u524d 10 \u4e2a\u5458\u5de5\u7684\u4fe1\u606f\u3002\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u8fde\u63a5\u67e5\u8be2 (",(0,r.jsx)(n.code,{children:"JOIN"}),")\uff1a\u7528\u4e8e\u57fa\u4e8e\u76f8\u5173\u5217\u5c06\u4e24\u4e2a\u6216\u591a\u4e2a\u8868\u7684\u6570\u636e\u7ec4\u5408\u5728\u4e00\u8d77\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT employees.name, departments.name \nFROM employees \nJOIN departments ON employees.department_id = departments.id;  -- \u67e5\u8be2\u5458\u5de5\u53ca\u5176\u5bf9\u5e94\u7684\u90e8\u95e8\u540d\u79f0\u3002\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5b50\u67e5\u8be2\uff1a\u5728\u53e6\u4e00\u4e2a SQL \u67e5\u8be2\u4e2d\u7684\u5d4c\u5957\u67e5\u8be2\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT name FROM employees \nWHERE department_id IN (SELECT id FROM departments WHERE location = 'New York');  -- \u67e5\u8be2\u6240\u6709\u5728\u7ebd\u7ea6\u5de5\u4f5c\u7684\u5458\u5de5\u3002\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0a\u53ea\u662f Cloudberry Database \u57fa\u672c\u67e5\u8be2\u8bed\u6cd5\u7684\u7b80\u8981\u6982\u8ff0\u3002Cloudberry Database \u8fd8\u63d0\u4f9b\u66f4\u9ad8\u7ea7\u7684\u67e5\u8be2\u548c\u529f\u80fd\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u6267\u884c\u590d\u6742\u7684\u6570\u636e\u64cd\u4f5c\u548c\u5206\u6790\u3002"})]})}function p(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>a});var r=s(67294);const c={},l=r.createContext(c);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);