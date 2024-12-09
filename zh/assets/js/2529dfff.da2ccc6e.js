"use strict";(self.webpackChunkApache_Cloudberry_Incubating_website=self.webpackChunkApache_Cloudberry_Incubating_website||[]).push([[9546],{26510:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>t,metadata:()=>i,toc:()=>h});var r=d(85893),s=d(11151);const t={title:"Range Functions and Operators"},c="Range Functions and Operators in Cloudberry Database",i={id:"functions/range-functions-and-operators",title:"Range Functions and Operators",description:"The following table shows the operators available for range types.",source:"@site/docs/functions/range-functions-and-operators.md",sourceDirName:"functions",slug:"/functions/range-functions-and-operators",permalink:"/zh/docs/functions/range-functions-and-operators",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/cloudberry-site/edit/main/docs/functions/range-functions-and-operators.md",tags:[],version:"current",lastUpdatedBy:"Dianjin Wang",lastUpdatedAt:1733293498,formattedLastUpdatedAt:"2024\u5e7412\u67084\u65e5",frontMatter:{title:"Range Functions and Operators"},sidebar:"docsbars",previous:{title:"Text Search Functions and Operators",permalink:"/zh/docs/functions/text-search-functions-and-operators"},next:{title:"Utility Overview",permalink:"/zh/docs/sys-utilities/"}},l={},h=[];function o(e){const n={code:"code",h1:"h1",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"range-functions-and-operators-in-cloudberry-database",children:"Range Functions and Operators in Cloudberry Database"}),"\n",(0,r.jsx)(n.p,{children:"The following table shows the operators available for range types."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Operator"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Example"}),(0,r.jsx)(n.th,{children:"Result"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"="})}),(0,r.jsx)(n.td,{children:"equal"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"int4range(1,5) = '[1,4]'::int4range"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"t"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<>"})}),(0,r.jsx)(n.td,{children:"not equal"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"numrange(1.1,2.2) <> numrange(1.1,2.3)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"t"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<"})}),(0,r.jsx)(n.td,{children:"less than"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"int4range(1,10) < int4range(2,3)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"t"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:">"})}),(0,r.jsx)(n.td,{children:"greater than"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"int4range(1,10) > int4range(1,5)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"t"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<="})}),(0,r.jsx)(n.td,{children:"less than or equal"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"numrange(1.1,2.2) <= numrange(1.1,2.2)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"t"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:">="})}),(0,r.jsx)(n.td,{children:"greater than or equal"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"numrange(1.1,2.2) >= numrange(1.1,2.0)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"t"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"@>"})}),(0,r.jsx)(n.td,{children:"contains range"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"int4range(2,4) @> int4range(2,3)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"t"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"@>"})}),(0,r.jsx)(n.td,{children:"contains element"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"'[2011-01-01,2011-03-01)'::tsrange @> '2011-01-10'::timestamp"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"t"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<@"})}),(0,r.jsx)(n.td,{children:"range is contained by"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"int4range(2,4) <@ int4range(1,7)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"t"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<@"})}),(0,r.jsx)(n.td,{children:"element is contained by"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"42 <@ int4range(1,7)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"f"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"&&"})}),(0,r.jsx)(n.td,{children:"overlap (have points in common)"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"int8range(3,7) && int8range(4,12)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"t"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"<<"})}),(0,r.jsx)(n.td,{children:"strictly left of"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"int8range(1,10) << int8range(100,110)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"t"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:">>"})}),(0,r.jsx)(n.td,{children:"strictly right of"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"int8range(50,60) >> int8range(20,30)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"t"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"&<"})}),(0,r.jsx)(n.td,{children:"does not extend to the right of"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"int8range(1,20) &< int8range(18,20)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"t"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"&>"})}),(0,r.jsx)(n.td,{children:"does not extend to the left of"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"int8range(7,20) &> int8range(5,10)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"t"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-|-"})}),(0,r.jsx)(n.td,{children:"is adjacent to"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"numrange(1.1,2.2) -|- numrange(2.2,3.3)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"t"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"+"})}),(0,r.jsx)(n.td,{children:"union"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"numrange(5,15) + numrange(10,20)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[5,20)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"*"})}),(0,r.jsx)(n.td,{children:"intersection"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"int8range(5,15) * int8range(10,20)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[10,15)"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"-"})}),(0,r.jsx)(n.td,{children:"difference"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"int8range(5,15) - int8range(10,20)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[5,10)"})})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The simple comparison operators ",(0,r.jsx)(n.code,{children:"<"}),", ",(0,r.jsx)(n.code,{children:">"}),", ",(0,r.jsx)(n.code,{children:"<="}),", and ",(0,r.jsx)(n.code,{children:">="})," compare the lower bounds first, and only if those are equal, compare the upper bounds. These comparisons are not usually very useful for ranges, but are provided to allo B-tree indexes to be constructed on ranges."]}),"\n",(0,r.jsx)(n.p,{children:"The left-of/right-of/adjacent operators always return false when an empty range is involved; that is, an empty range is not considered to be either before or after any other range."}),"\n",(0,r.jsx)(n.p,{children:"The union and difference operators will fail if the resulting range would need to contain two disjoint sub-ranges, as such a range cannot be represented."}),"\n",(0,r.jsx)(n.p,{children:"The following table shows the functions available for use with range types."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Function"}),(0,r.jsx)(n.th,{children:"Return Type"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Example"}),(0,r.jsx)(n.th,{children:"Result"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"lower(anyrange)"})}),(0,r.jsx)(n.td,{children:"range's element type"}),(0,r.jsx)(n.td,{children:"lower bound of range"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"lower(numrange(1.1,2.2))"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1.1"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"upper(anyrange)"})}),(0,r.jsx)(n.td,{children:"range's element type"}),(0,r.jsx)(n.td,{children:"upper bound of range"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"upper(numrange(1.1,2.2))"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"2.2"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"isempty(anyrange)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"is the range empty?"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"isempty(numrange(1.1,2.2))"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"lower_inc(anyrange)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"is the lower bound inclusive?"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"lower_inc(numrange(1.1,2.2))"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"upper_inc(anyrange)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"is the upper bound inclusive?"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"upper_inc(numrange(1.1,2.2))"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"lower_inf(anyrange)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"is the lower bound infinite?"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"lower_inf('(,)'::daterange)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"upper_inf(anyrange)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"is the upper bound infinite?"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"upper_inf('(,)'::daterange)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"range_merge(anyrange, anyrange)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"anyrange"})}),(0,r.jsx)(n.td,{children:"the smallest range which includes both of the given ranges"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"range_merge('[1,2)'::int4range, '[3,4)'::int4range)"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"[1,4)"})})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"lower"})," and ",(0,r.jsx)(n.code,{children:"upper"})," functions return null if the range is empty or the requested bound is infinite. The ",(0,r.jsx)(n.code,{children:"lower_inc"}),", ",(0,r.jsx)(n.code,{children:"upper_inc"}),", ",(0,r.jsx)(n.code,{children:"lower_inf"}),", and ",(0,r.jsx)(n.code,{children:"upper_inf"})," functions all return false for an empty range."]})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},11151:(e,n,d)=>{d.d(n,{Z:()=>i,a:()=>c});var r=d(67294);const s={},t=r.createContext(s);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);