"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[5047],{13602:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>_,contentTitle:()=>k,default:()=>I,frontMatter:()=>D,metadata:()=>N,toc:()=>R});var r=l(85893),s=l(11151),a=l(67294),d=l(90512),i=l(12466),c=l(16550),t=l(20469),o=l(91980),u=l(67392),h=l(50012);function b(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:l}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return b(e).map((e=>{let{props:{value:n,label:l,attributes:r,default:s}}=e;return{value:n,label:l,attributes:r,default:s}}))}(l);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,l])}function x(e){let{value:n,tabValues:l}=e;return l.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:l}=e;const r=(0,c.k6)(),s=function(e){let{queryString:n=!1,groupId:l}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:n,groupId:l});return[(0,o._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function g(e){const{defaultValue:n,queryString:l=!1,groupId:r}=e,s=p(e),[d,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=l.find((e=>e.default))??l[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[c,o]=m({queryString:l,groupId:r}),[u,b]=function(e){let{groupId:n}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,h.Nk)(l);return[r,(0,a.useCallback)((e=>{l&&s.set(e)}),[l,s])]}({groupId:r}),g=(()=>{const e=c??u;return x({value:e,tabValues:s})?e:null})();(0,t.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:d,selectValue:(0,a.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),o(e),b(e)}),[o,b,s]),tabValues:s}}var j=l(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:n,block:l,selectedValue:s,selectValue:a,tabValues:c}=e;const t=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.o5)(),u=e=>{const n=e.currentTarget,l=t.indexOf(n),r=c[l].value;r!==s&&(o(n),a(r))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const l=t.indexOf(e.currentTarget)+1;n=t[l]??t[0];break}case"ArrowLeft":{const l=t.indexOf(e.currentTarget)-1;n=t[l]??t[t.length-1];break}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":l},n),children:c.map((e=>{let{value:n,label:l,attributes:a}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>t.push(e),onKeyDown:h,onClick:u,...a,className:(0,d.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":s===n}),children:l??n},n)}))})}function f(e){let{lazy:n,children:l,selectedValue:s}=e;const d=(Array.isArray(l)?l:[l]).filter(Boolean);if(n){const e=d.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:d.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function E(e){const n=g(e);return(0,r.jsxs)("div",{className:(0,d.Z)("tabs-container",v.tabList),children:[(0,r.jsx)(y,{...e,...n}),(0,r.jsx)(f,{...e,...n})]})}function w(e){const n=(0,j.Z)();return(0,r.jsx)(E,{...e,children:b(e.children)},String(n))}const A={tabItem:"tabItem_Ymn6"};function C(e){let{children:n,hidden:l,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,d.Z)(A.tabItem,s),hidden:l,children:n})}const D={title:"\u5728 Linux \u4e0a"},k="\u5728 Linux \u7cfb\u7edf\u4e0a\u7f16\u8bd1\u548c\u5b89\u88c5 Cloudberry Database",N={id:"cbdb-linux-compile",title:"\u5728 Linux \u4e0a",description:"\u672c\u6587\u6863\u6765\u81ea GitHub \u4ed3\u5e93 cloudberrydb/cloudberrydb.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cbdb-linux-compile.md",sourceDirName:".",slug:"/cbdb-linux-compile",permalink:"/zh/docs/cbdb-linux-compile",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/cbdb-linux-compile.md",tags:[],version:"current",lastUpdatedBy:"Ed Espino",lastUpdatedAt:1733247584,formattedLastUpdatedAt:"2024\u5e7412\u67083\u65e5",frontMatter:{title:"\u5728 Linux \u4e0a"},sidebar:"docsbars",previous:{title:"\u5728 macOS \u4e0a",permalink:"/zh/docs/cbdb-macos-compile"},next:{title:"\u8f6f\u786c\u4ef6\u914d\u7f6e\u9700\u6c42",permalink:"/zh/docs/cbdb-op-software-hardware"}},_={},R=[{value:"\u7b2c 1 \u6b65\uff1a\u514b\u9686 GitHub \u4ed3\u5e93",id:"\u7b2c-1-\u6b65\u514b\u9686-github-\u4ed3\u5e93",level:2},{value:"\u7b2c 2 \u6b65\uff1a\u5b89\u88c5\u4f9d\u8d56\u9879",id:"\u7b2c-2-\u6b65\u5b89\u88c5\u4f9d\u8d56\u9879",level:2},{value:"\u7b2c 3 \u6b65\uff1a\u6267\u884c\u5e73\u53f0\u51c6\u5907\u5de5\u4f5c",id:"\u7b2c-3-\u6b65\u6267\u884c\u5e73\u53f0\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u7b2c 4 \u6b65\uff1a\u6784\u5efa Cloudberry Database",id:"\u7b2c-4-\u6b65\u6784\u5efa-cloudberry-database",level:2},{value:"\u7b2c 5 \u6b65\uff1a\u9a8c\u8bc1\u96c6\u7fa4",id:"\u7b2c-5-\u6b65\u9a8c\u8bc1\u96c6\u7fa4",level:2}];function S(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u5728-linux-\u7cfb\u7edf\u4e0a\u7f16\u8bd1\u548c\u5b89\u88c5-cloudberry-database",children:"\u5728 Linux \u7cfb\u7edf\u4e0a\u7f16\u8bd1\u548c\u5b89\u88c5 Cloudberry Database"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["\u672c\u6587\u6863\u6765\u81ea GitHub \u4ed3\u5e93 ",(0,r.jsx)(n.a,{href:"https://github.com/cloudberrydb/cloudberrydb/blob/main/deploy/build/README.Linux.md",children:(0,r.jsx)(n.code,{children:"cloudberrydb/cloudberrydb"})}),"."]})}),"\n",(0,r.jsxs)(n.p,{children:["\u672c\u6587\u6863\u5206\u4eab\u5982\u4f55\u5728 Linux \u7cfb\u7edf\uff08CentOS 7\u3001RHEL \u548c Ubuntu\uff09\u4e0a\u7f16\u8bd1\u548c\u5b89\u88c5 Cloudberry Database\u3002\u8bf7\u6ce8\u610f\uff0c\u672c\u6587\u6863\u4ec5\u4f9b\u5f00\u53d1\u4eba\u5458\u5728\u5355\u8282\u70b9\u73af\u5883\u4e2d\u5c1d\u8bd5 Cloudberry Database\u3002",(0,r.jsx)(n.strong,{children:"\u8bf7\u52ff\u5c06\u672c\u6587\u6863\u7528\u4e8e\u751f\u4ea7\u73af\u5883"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u8bbe\u7f6e\u5f00\u53d1\u73af\u5883\uff1a"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#%E7%AC%AC-1-%E6%AD%A5%E5%85%8B%E9%9A%86-github-%E4%BB%93%E5%BA%93",children:"\u514b\u9686 GitHub \u4ed3\u5e93"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#%E7%AC%AC-2-%E6%AD%A5%E5%AE%89%E8%A3%85%E4%BE%9D%E8%B5%96%E9%A1%B9",children:"\u5b89\u88c5\u4f9d\u8d56\u9879"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#%E7%AC%AC-3-%E6%AD%A5%E6%89%A7%E8%A1%8C%E5%B9%B3%E5%8F%B0%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C",children:"\u6267\u884c\u5e73\u53f0\u51c6\u5907\u5de5\u4f5c"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#%E7%AC%AC-4-%E6%AD%A5%E6%9E%84%E5%BB%BA-cloudberry-database",children:"\u6784\u5efa Cloudberry Database"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#%E7%AC%AC-5-%E6%AD%A5%E9%AA%8C%E8%AF%81%E9%9B%86%E7%BE%A4",children:"\u9a8c\u8bc1\u96c6\u7fa4"}),"\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u7b2c-1-\u6b65\u514b\u9686-github-\u4ed3\u5e93",children:"\u7b2c 1 \u6b65\uff1a\u514b\u9686 GitHub \u4ed3\u5e93"}),"\n",(0,r.jsxs)(n.p,{children:["\u5c06 GitHub \u4ed3\u5e93 ",(0,r.jsx)(n.code,{children:"cloudberrydb/cloudberrydb"})," \u514b\u9686\u5230\u76ee\u6807\u673a\u5668\uff1a"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/cloudberrydb/cloudberrydb.git\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7b2c-2-\u6b65\u5b89\u88c5\u4f9d\u8d56\u9879",children:"\u7b2c 2 \u6b65\uff1a\u5b89\u88c5\u4f9d\u8d56\u9879"}),"\n",(0,r.jsx)(n.p,{children:"\u8fdb\u5165\u4ed3\u5e93\u76ee\u5f55\uff0c\u6839\u636e\u4f60\u7684\u64cd\u4f5c\u7cfb\u7edf\u5b89\u88c5\u4f9d\u8d56\u9879\uff1a"}),"\n",(0,r.jsxs)(w,{children:[(0,r.jsxs)(C,{value:"centos-7",label:"CentOS 7",default:!0,children:[(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u6b65\u9aa4\u5728 CentOS 7 \u4e0a\u6d4b\u8bd5\u901a\u8fc7\u3002\u5bf9\u4e8e\u5176\u4ed6\u7248\u672c\u7684 CentOS\uff0c\u8fd9\u4e9b\u6b65\u9aa4\u53ef\u80fd\u6709\u6548\uff0c\u4f46\u4e0d\u80fd\u4fdd\u8bc1\u6709\u6548\u3002"}),(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6267\u884c ",(0,r.jsx)(n.code,{children:"cloudberrydb/cloudberrydb"})," \u4ed3\u5e93\u4e0b ",(0,r.jsx)(n.code,{children:"deploy/build"})," \u76ee\u5f55\u4e2d\u7684 ",(0,r.jsx)(n.code,{children:"README.CentOS.bash"})," \u811a\u672c\u3002\u6267\u884c\u6b64\u811a\u672c\u9700\u8981\u8f93\u5165\u5bc6\u7801\u3002\u7136\u540e\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u4e0b\u8f7d\u4e00\u4e9b\u5fc5\u8981\u7684\u4f9d\u8d56\u9879\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd cloudberrydb/deploy/build\n./README.CentOS.bash\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5b89\u88c5\u914d\u7f6e\u6240\u9700\u7684\u5176\u4ed6\u5305\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yum -y install R apr apr-devel apr-util automake autoconf bash bison bison-devel bzip2 bzip2-devel centos-release-scl curl flex flex-devel gcc gcc-c++ git gdb iproute krb5-devel less libcurl libcurl-devel libevent libevent-devel libxml2 libxml2-devel libyaml libzstd-devel libzstd make openldap openssh openssh-clients openssh-server openssl openssl-devel openssl-libs perl python3-devel readline readline-devel rsync sed sudo tar vim wget which xerces-c-devel zip zlib && \\\nyum -y install epel-release\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5c06 GNU Compiler Collection (GCC) \u66f4\u65b0\u5230 ",(0,r.jsx)(n.code,{children:"devtoolset-10"})," \u7248\u672c\uff0c\u4ee5\u652f\u6301 C++ 14\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'yum install centos-release-scl \nyum -y install devtoolset-10-gcc devtoolset-10-gcc-c++ devtoolset-10-binutils \nscl enable devtoolset-10 bash \nsource /opt/rh/devtoolset-10/enable \necho "source /opt/rh/devtoolset-10/enable" >> /etc/bashrc\nsource /etc/bashrc\ngcc -v\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5c06 cmake3 \u94fe\u63a5\u5230 cmake\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo ln -sf /usr/bin/cmake3 /usr/local/bin/cmake\n"})}),"\n"]}),"\n"]})]}),(0,r.jsx)(C,{value:"rockey-rhel-8",label:"RHEL 8 \u548c Rocky Linux 8",default:!0,children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5b89\u88c5\u5f00\u53d1\u5de5\u5177 Development Tools\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'sudo yum group install -y "Development Tools"\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5b89\u88c5\u4f9d\u8d56\u9879\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo yum install -y epel-release\n\nsudo yum install -y apr-devel bison bzip2-devel cmake3 flex gcc gcc-c++ krb5-devel libcurl-devel libevent-devel libkadm5  libxml2-devel libzstd-devel openssl-devel perl-ExtUtils-Embed python3-devel python3-pip readline-devel xerces-c-devel zlib-devel\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6267\u884c ",(0,r.jsx)(n.code,{children:"README.Rhel-Rocky.bash"})," \u811a\u672c\u5b89\u88c5\u66f4\u591a\u4f9d\u8d56\u9879\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ~/cloudberrydb/deploy/build/\n./README.Rhel-Rocky.bash\n"})}),"\n"]}),"\n"]})}),(0,r.jsx)(C,{value:"ubuntu-18.04",label:"Ubuntu 18.04 \u6216\u66f4\u65b0\u7248\u672c",default:!0,children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u6267\u884c ",(0,r.jsx)(n.code,{children:"deploy/build"})," \u76ee\u5f55\u4e0b\u7684 ",(0,r.jsx)(n.code,{children:"README.Ubuntu.bash"})," \u811a\u672c\uff0c\u4ee5\u5b89\u88c5\u4f9d\u8d56\u9879\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"# \u6267\u884c\u8be5\u811a\u672c\u9700\u8981\u8f93\u5165\u5bc6\u7801\u3002\nsudo ~/cloudberrydb/deploy/build/README.Ubuntu.bash\n"})}),"\n",(0,r.jsx)(n.admonition,{title:"\u63d0\u793a",type:"info",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5f53\u6267\u884c ",(0,r.jsx)(n.code,{children:"README.Ubutnu.bash"})," \u811a\u672c\u5b89\u88c5\u4f9d\u8d56\u9879\u65f6\uff0c\u4f1a\u63d0\u793a\u4f60\u914d\u7f6e Kerberos \u7684 ",(0,r.jsx)(n.code,{children:"realm"}),"\u3002\u4f60\u53ef\u4ee5\u8f93\u5165\u4efb\u610f ",(0,r.jsx)(n.code,{children:"realm"}),"\uff0c\u56e0\u4e3a\u8fd9\u53ea\u662f\u7528\u4e8e\u6d4b\u8bd5\uff0c\u800c\u4e14\u5728\u6d4b\u8bd5\u671f\u95f4\uff0c\u7cfb\u7edf\u4f1a\u91cd\u65b0\u914d\u7f6e\u672c\u5730\u670d\u52a1\u5668/\u5ba2\u6237\u7aef\u3002\u5982\u679c\u4f60\u60f3\u8df3\u8fc7\u6b64\u624b\u52a8\u914d\u7f6e\uff0c\u8bf7\u6267\u884c ",(0,r.jsx)(n.code,{children:"export DEBIAN_FRONTEND=noninteractive"}),"\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u811a\u672c\u4e0b\u8f7d\u5b89\u88c5\u5305\u5931\u8d25\uff0c\u8bf7\u5c1d\u8bd5\u4f7f\u7528\u53e6\u4e00\u4e2a Ubuntu \u8f6f\u4ef6\u6e90\u3002"}),"\n"]})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5b89\u88c5 GCC 10\u3002Ubuntu 18.04 \u53ca\u4ee5\u4e0a\u7248\u672c\u5e94\u5f53\u4f7f\u7528 GCC 10 \u6216\u4ee5\u4e0a\u7248\u672c\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u5b89\u88c5 gcc-10\nsudo apt install software-properties-common\nsudo add-apt-repository ppa:ubuntu-toolchain-r/test\nsudo apt install gcc-10 g++-10\nsudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-10 100\n"})}),"\n"]}),"\n"]})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u7b2c-3-\u6b65\u6267\u884c\u5e73\u53f0\u51c6\u5907\u5de5\u4f5c",children:"\u7b2c 3 \u6b65\uff1a\u6267\u884c\u5e73\u53f0\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u5b89\u88c5\u6240\u6709\u4f9d\u8d56\u9879\u540e\uff0c\u5728\u6784\u5efa Cloudberry Database \u4e4b\u524d\u4f60\u8fd8\u9700\u8981\u6267\u884c\u4e00\u4e9b\u5e73\u53f0\u51c6\u5907\u5de5\u4f5c\u3002\u8fd9\u4e9b\u64cd\u4f5c\u5305\u62ec\u5728\u5e73\u53f0\u4e0a\u624b\u52a8\u8fd0\u884c ",(0,r.jsx)(n.code,{children:"ldconfig"}),"\u3001\u521b\u5efa ",(0,r.jsx)(n.code,{children:"gpadmin"})," \u7528\u6237\u4ee5\u53ca\u8bbe\u7f6e\u5bc6\u7801\u4ee5\u542f\u52a8 Cloudberry Database \u5e76\u8fdb\u884c\u6d4b\u8bd5\u3002"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u786e\u4fdd\u5c06 ",(0,r.jsx)(n.code,{children:"/usr/local/lib"})," \u548c ",(0,r.jsx)(n.code,{children:"/usr/local/lib64"})," \u6dfb\u52a0\u5230 ",(0,r.jsx)(n.code,{children:"/etc/ld.so.conf"})," \u6587\u4ef6\u4e2d\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'echo -e "/usr/local/lib \\n/usr/local/lib64" >> /etc/ld.so.conf\nldconfig\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u521b\u5efa ",(0,r.jsx)(n.code,{children:"gpadmin"})," \u7528\u6237\u5e76\u8bbe\u7f6e SSH \u5bc6\u94a5\u3002\u6839\u636e\u4e0d\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf\u624b\u52a8\u521b\u5efa SSH \u5bc6\u94a5\uff0c\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u5728\u4e0d\u8f93\u5165\u5bc6\u7801\u7684\u60c5\u51b5\u4e0b\u8fd0\u884c ",(0,r.jsx)(n.code,{children:"ssh localhost"}),"\u3002"]}),"\n",(0,r.jsxs)(w,{children:[(0,r.jsx)(C,{value:"centos-rhel-rockey",label:"CentOS\u3001Rocky Linux \u548c RHEL",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"useradd gpadmin  # \u521b\u5efa gpadmin \u7528\u6237\nsu - gpadmin  # \u5207\u6362\u5230 gpadmin \u7528\u6237\nssh-keygen  # \u521b\u5efa SSH \u5bc6\u94a5\ncat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys\nchmod 600 ~/.ssh/authorized_keys\nexit\n"})})}),(0,r.jsx)(C,{value:"ubuntu",label:"Ubuntu",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"useradd -r -m -s /bin/bash gpadmin  # \u521b\u5efa gpadmin \u7528\u6237\nsu - gpadmin  # \u5207\u6362\u5230 gpadmin \u7528\u6237\nssh-keygen  # \u521b\u5efa SSH \u5bc6\u94a5\ncat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys\nchmod 600 ~/.ssh/authorized_keys \nexit\n"})})})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u7b2c-4-\u6b65\u6784\u5efa-cloudberry-database",children:"\u7b2c 4 \u6b65\uff1a\u6784\u5efa Cloudberry Database"}),"\n",(0,r.jsx)(n.p,{children:"\u5b89\u88c5\u5b8c\u6240\u6709\u4f9d\u8d56\u9879\u5e76\u6267\u884c\u4e86\u5e73\u53f0\u51c6\u5907\u5de5\u4f5c\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u5f00\u59cb\u6784\u5efa Cloudberry Database \u4e86\u3002\u6309\u987a\u5e8f\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u8fdb\u5165 ",(0,r.jsx)(n.code,{children:"cloudberrydb"})," \u76ee\u5f55\uff0c\u6267\u884c ",(0,r.jsx)(n.code,{children:"configure"})," \u811a\u672c\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd cloudberrydb\n./configure --with-perl --with-python --with-libxml --with-gssapi --prefix=/usr/local/cloudberrydb\n"})}),"\n",(0,r.jsxs)(n.admonition,{title:"\u63d0\u793a",type:"info",children:[(0,r.jsxs)(n.p,{children:["Cloudberry Database \u9ed8\u8ba4\u4f7f\u7528 GPORCA \u6784\u5efa\u3002\u5982\u679c\u4f60\u5e0c\u671b\u6784\u5efa\u51fa\u4e0d\u4f7f\u7528 GPORCA \u7684 Cloudberry Database\uff0c\u8bf7\u5728 ",(0,r.jsx)(n.code,{children:"./configure"})," \u547d\u4ee4\u4e2d\u6dfb\u52a0 ",(0,r.jsx)(n.code,{children:"--disable-orca"})," \u53c2\u6570\u3002"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"./configure --disable-orca --with-perl --with-python --with-libxml --prefix=/usr/local/cloudberrydb\n"})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u7f16\u8bd1\u6e90\u7801\u5e76\u5b89\u88c5\u6570\u636e\u5e93\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"make -j8\nmake -j8 install\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u5c06 Greenplum \u73af\u5883\u5f15\u5165\u8fd0\u884c\u4e2d\u7684 shell\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ..\ncp -r cloudberrydb/ /home/gpadmin/\ncd /home/gpadmin/\nchown -R gpadmin:gpadmin cloudberrydb/\nsu - gpadmin\ncd cloudberrydb/\nsource /usr/local/cloudberrydb/greenplum_path.sh\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u542f\u52a8\u793a\u4f8b\u96c6\u7fa4\u3002"}),"\n",(0,r.jsxs)(w,{children:[(0,r.jsx)(C,{value:"centos",label:"CentOS 7",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"scl enable devtoolset-10 bash \nsource /opt/rh/devtoolset-10/enable \nmake create-demo-cluster\n"})})}),(0,r.jsx)(C,{value:"ubuntu-rocky-rhel",label:"Ubuntu\u3001Rocky Linux \u548c RHEL",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"make create-demo-cluster\n"})})})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u4ee5\u51c6\u5907\u6d4b\u8bd5\u3002\u6b64\u547d\u4ee4\u5c06\u4e3a\u6d4b\u8bd5\u914d\u7f6e\u7aef\u53e3\u548c\u73af\u5883\u53d8\u91cf\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u8be5\u547d\u4ee4\u4f1a\u914d\u7f6e\u7aef\u53e3\u548c\u73af\u5883\u53d8\u91cf\uff0c\u4f8b\u5982 ",(0,r.jsx)(n.code,{children:"PGPORT"}),"\uff08\u4e3b\u8282\u70b9\u7684\u9ed8\u8ba4\u7aef\u53e3\uff09\u548c ",(0,r.jsx)(n.code,{children:"COORDINATOR_DATA_DIRECTORY"}),"\uff08\u4e3b\u8282\u70b9\u7684\u6570\u636e\u76ee\u5f55\uff09\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"source gpAux/gpdemo/gpdemo-env.sh\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u7b2c-5-\u6b65\u9a8c\u8bc1\u96c6\u7fa4",children:"\u7b2c 5 \u6b65\uff1a\u9a8c\u8bc1\u96c6\u7fa4"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6765\u9a8c\u8bc1\u96c6\u7fa4\u662f\u5426\u5df2\u6210\u529f\u542f\u52a8\u3002\u5982\u679c\u6210\u529f\u542f\u52a8\uff0c\u4f60\u4f1a\u770b\u5230\u7aef\u53e3\u5728 ",(0,r.jsx)(n.code,{children:"7000"})," \u5230 ",(0,r.jsx)(n.code,{children:"7007"})," \u4e4b\u95f4\u7684\u591a\u4e2a ",(0,r.jsx)(n.code,{children:"postgres"})," \u8fdb\u7a0b\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ps -ef | grep postgres\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["\u8fde\u63a5\u81f3 Cloudberry Database\uff0c\u901a\u8fc7\u67e5\u8be2\u7cfb\u7edf\u8868 ",(0,r.jsx)(n.code,{children:"gp_segement_configuration"})," \u67e5\u770b\u6d3b\u8dc3 segment \u7684\u4fe1\u606f\u3002\u6709\u5173\u6b64\u7cfb\u7edf\u8868\u7684\u8be6\u7ec6\u63cf\u8ff0\uff0c\u53c2\u89c1 ",(0,r.jsx)(n.a,{href:"https://docs.vmware.com/en/VMware-Greenplum/7/greenplum-database/ref_guide-system_catalogs-gp_segment_configuration.html",children:"Greenplum \u6587\u6863"}),"\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:'$ psql -p 7000 postgres\npsql (14.4, server 14.4)\nType "help" for help.\n\npostgres=# select version();\n                                                                                        version                                                                                         \n-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------\nPostgreSQL 14.4 (Cloudberry Database 1.0.0+1c0d6e2224 build dev) on x86_64( GCC 13.2.0) 13.2.0, 64-bit compiled on Sep 22 2023 10:56:01\n(1 row)\n\npostgres=# select * from gp_segment_configuration;\n dbid | content | role | preferred_role | mode | status | port |  hostname  |  address   |                                   datadir                                    | warehouseid \n------+---------+------+----------------+------+--------+------+------------+------------+------------------------------------------------------------------------------+-------------\n    1 |      -1 | p    | p              | n    | u      | 7000 | i-6wvpa9wt | i-6wvpa9wt | /home/gpadmin/cloudberrydb/gpAux/gpdemo/datadirs/qddir/demoDataDir-1         |           0\n    8 |      -1 | m    | m              | s    | u      | 7001 | i-6wvpa9wt | i-6wvpa9wt | /home/gpadmin/cloudberrydb/gpAux/gpdemo/datadirs/standby                     |           0\n    3 |       1 | p    | p              | s    | u      | 7003 | i-6wvpa9wt | i-6wvpa9wt | /home/gpadmin/cloudberrydb/gpAux/gpdemo/datadirs/dbfast2/demoDataDir1        |           0\n    6 |       1 | m    | m              | s    | u      | 7006 | i-6wvpa9wt | i-6wvpa9wt | /home/gpadmin/cloudberrydb/gpAux/gpdemo/datadirs/dbfast_mirror2/demoDataDir1 |           0\n    2 |       0 | p    | p              | s    | u      | 7002 | i-6wvpa9wt | i-6wvpa9wt | /home/gpadmin/cloudberrydb/gpAux/gpdemo/datadirs/dbfast1/demoDataDir0        |           0\n    5 |       0 | m    | m              | s    | u      | 7005 | i-6wvpa9wt | i-6wvpa9wt | /home/gpadmin/cloudberrydb/gpAux/gpdemo/datadirs/dbfast_mirror1/demoDataDir0 |           0\n    4 |       2 | p    | p              | s    | u      | 7004 | i-6wvpa9wt | i-6wvpa9wt | /home/gpadmin/cloudberrydb/gpAux/gpdemo/datadirs/dbfast3/demoDataDir2        |           0\n    7 |       2 | m    | m              | s    | u      | 7007 | i-6wvpa9wt | i-6wvpa9wt | /home/gpadmin/cloudberrydb/gpAux/gpdemo/datadirs/dbfast_mirror3/demoDataDir2 |           0\n(8 rows)\n'})}),"\n"]}),"\n"]})]})}function I(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(S,{...e})}):S(e)}},11151:(e,n,l)=>{l.d(n,{Z:()=>i,a:()=>d});var r=l(67294);const s={},a=r.createContext(s);function d(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);