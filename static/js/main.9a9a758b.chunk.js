(this["webpackJsonpscrolling-calendar"]=this["webpackJsonpscrolling-calendar"]||[]).push([[0],{16:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(8),c=n.n(i),o=(n(16),n(3)),l=n(2),d=n(1),s=l.a.div.withConfig({displayName:"Calendar__CalendarContainer",componentId:"sc-16t7avz-0"})(["display:inline-flex;align-items:flex-end;flex-direction:column;font-size:13px;"]),u=l.a.div.withConfig({displayName:"Calendar__CalendarFrame",componentId:"sc-16t7avz-1"})(["border:1px solid black;height:25em;overflow-y:scroll;border-radius:1em;display:inline-block;"]),g=l.a.div.withConfig({displayName:"Calendar__DayBg",componentId:"sc-16t7avz-2"})(["background:",";width:2.5em;height:2.5em;"],(function(e){return e.even?"#F5F8FA":"white"})),f=l.a.div.withConfig({displayName:"Calendar__DayFg",componentId:"sc-16t7avz-3"})(["width:100%;height:100%;display:flex;align-items:center;justify-content:center;border-top-left-radius:",";border-bottom-right-radius:",";cursor:default;background:",";"],(function(e){return e.first&&"1em"}),(function(e){return e.last&&"1em"}),(function(e){return e.even?"white":"#F5F8FA"})),h=l.a.div.withConfig({displayName:"Calendar__DayRangeBar",componentId:"sc-16t7avz-4"})(["width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:",";"],(function(e){return e.inRange&&"linear-gradient(180deg, rgba(128,181,255,0) 0%, rgba(128,181,255,0) 10%, rgba(128,181,255,0.2) 10%, rgba(128,181,255,0.2) 90%, rgba(128,181,255,0) 90%, rgba(128,181,255,0) 100%)"})),j=l.a.div.withConfig({displayName:"Calendar__DayButton",componentId:"sc-16t7avz-5"})(["display:flex;width:100%;height:100%;align-items:center;justify-content:center;border-radius:",";color:#111;color:",";color:",";color:",";font-weight:500;background:",";border:",";",""],(function(e){return e.rangeStart?"1em .2em .2em 1em":e.rangeEnd?".2em 1em 1em .2em":"1em"}),(function(e){return e.isToday&&"maroon"}),(function(e){return e.disabled&&"rgba(0,0,0,.2)"}),(function(e){return e.selected&&"white"}),(function(e){return(e.rangeStart||e.rangeEnd||e.selected)&&"blue"}),(function(e){return e.isToday&&"2px solid maroon"}),(function(e){return!e.disabled&&"\n    &:hover {\n      background: darkblue;\n      color: white;\n      cursor: pointer;\n    }\n  "})),b=l.a.div.withConfig({displayName:"Calendar__DayHeader",componentId:"sc-16t7avz-6"})(["width:2.5em;height:2.5em;font-weight:bold;text-align:center;line-height:2.5em;"]),m=l.a.div.withConfig({displayName:"Calendar__Week",componentId:"sc-16t7avz-7"})(["display:flex;"]),p=l.a.div.withConfig({displayName:"Calendar__MonthContainer",componentId:"sc-16t7avz-8"})(["display:flex;flex-direction:row;"]),v=l.a.div.withConfig({displayName:"Calendar__MonthLabel",componentId:"sc-16t7avz-9"})(["background:",";flex:1 0 0;line-height:2.5em;text-align:right;font-weight:bold;padding:0 .5em;white-space:nowrap;"],(function(e){return e.even?"white":"#F5F8FA"}));function O(e){var t=new Date(e);return t.setDate(t.getDate()+1),1===t.getDate()}function x(e){var t=e.date,n=e.children,a=t.getMonth()%2===0,r=new Date;r=r.toLocaleString("default",{year:"numeric"});var i=t.toLocaleString("default",{month:"short"});return t.toLocaleString("default",{year:"numeric"})!==r&&(i+=" '"+t.toLocaleString("default",{year:"2-digit"})),Object(d.jsxs)(p,{children:[Object(d.jsx)(v,{even:a,children:i}),Object(d.jsx)("div",{children:n})]})}function D(e){var t=e.date,n=e.selected,r=e.inRange,i=e.disabled,c=e.onClick,o=e.rangeStart,l=e.rangeEnd,s=Object(a.useRef)(),u=C(t,new Date);Object(a.useEffect)((function(){u&&s.current.scrollIntoView(!0)}),[u]);var b=t.getMonth()%2===0;return Object(d.jsx)(g,{even:b,children:Object(d.jsx)(f,{first:1===t.getDate()&&0!==t.getDay(),last:O(t),even:b,children:Object(d.jsx)(h,{inRange:r,children:Object(d.jsx)(j,{disabled:i,selected:n,rangeStart:o,rangeEnd:l,inRange:r,isToday:u,onClick:function(){return!i&&c&&c(t)},ref:s,children:t.getDate()})})})})}function y(e){return null===e||void 0===e?void 0:e.toLocaleDateString("en-CA")}function C(e,t){return y(e)===y(t)}function w(e,t){return y(e)>=y(t[0])&&y(e)<=y(t[1])}function k(e,t){var n=new Date(e);return n.setDate(e.getDate()+t),n.setHours(0,0,0,0),n}function S(e){for(var t=e.startOfWeekDate,n=e.fromDate,a=e.toDate,r=e.onClick,i=e.selectedDates,c=[],o=0;o<7;o++){var l=k(t,o);c.push(Object(d.jsx)(D,{date:l,disabled:!w(l,[n,a]),selected:C(l,i[0])||C(l,i[1]),rangeStart:C(l,i[0])&&i[1],rangeEnd:C(l,i[1]),inRange:w(l,i),onClick:r},l.getTime()))}return Object(d.jsx)(m,{children:c},t.getTime())}function _(e){for(var t,n=e.fromDate,a=e.toDate,r=e.onClick,i=e.selectedDates,c=[],o=[],l=function(e){var t=e.getDay();return k(e,-t)}(n);y(l)<=y(a);){var s;l.getDate()<(null===(s=t)||void 0===s?void 0:s.getDate())&&(c.push({weeks:o,date:t}),o=[]),o.push(S({startOfWeekDate:l,fromDate:n,toDate:a,selectedDates:i,onClick:r})),t=new Date(l),l=k(l,7)}return c.push({weeks:o,date:t}),c.map((function(e){var t=e.weeks,n=e.date;return Object(d.jsx)(x,{date:n,children:t},n.getTime())}))}function I(e){var t=e.fromDate,n=e.toDate,a=e.rangeFrom,r=e.rangeTo,i=e.onClick;return Object(d.jsxs)(s,{children:[Object(d.jsxs)(m,{children:[Object(d.jsx)(b,{children:"Su"}),Object(d.jsx)(b,{children:"Mo"}),Object(d.jsx)(b,{children:"Tu"}),Object(d.jsx)(b,{children:"We"}),Object(d.jsx)(b,{children:"Th"}),Object(d.jsx)(b,{children:"Fr"}),Object(d.jsx)(b,{children:"Sa"})]}),Object(d.jsx)(u,{children:_({fromDate:t,toDate:n,selectedDates:[a,r],onClick:function(e){return i(e)}})})]})}var F=l.a.div.withConfig({displayName:"App__Container",componentId:"sc-1vov3se-0"})(["min-height:100vh;display:flex;justify-content:center;"]),N=l.a.div.withConfig({displayName:"App__Demo",componentId:"sc-1vov3se-1"})(["flex:1;display:flex;align-items:center;justify-content:center;"]),z=l.a.div.withConfig({displayName:"App__Settings",componentId:"sc-1vov3se-2"})(["flex:1;display:flex;background:darkslategray;color:white;align-items:center;justify-content:center;flex-direction:column;"]);function A(){var e=new Date;e.setHours(0,0,0,0);var t=e.toLocaleDateString("en-CA"),n=Object(a.useState)("2021-01-01"),r=Object(o.a)(n,2),i=r[0],c=r[1],l=Object(a.useState)(new Date(i)),s=Object(o.a)(l,2),u=s[0],g=s[1],f=Object(a.useState)(t),h=Object(o.a)(f,2),j=h[0],b=h[1],m=Object(a.useState)(new Date(j)),p=Object(o.a)(m,2),v=p[0],O=p[1],x=Object(a.useState)(),D=Object(o.a)(x,2),y=D[0],C=D[1],w=Object(a.useState)(),k=Object(o.a)(w,2),S=k[0],_=k[1],A=Object(a.useState)(!1),L=Object(o.a)(A,2),T=L[0],E=L[1],M=Object(a.useState)(!1),R=Object(o.a)(M,2),H=R[0],P=R[1];return Object(a.useEffect)((function(){if(T>0){var e=new Date;e.setHours(0,0,0,0),console.log("HMMM...");var t=new Date;t.setHours(0,0,0,0),t.setDate(e.getDate()-T),C(t);var n=new Date(e);n.setDate(n.getDate()-(H?0:1)),_(n)}}),[H,T]),Object(a.useEffect)((function(){var e=new Date(i);g(e)}),[i]),Object(a.useEffect)((function(){var e=new Date(j);O(e)}),[j]),Object(d.jsxs)(F,{children:[Object(d.jsxs)(z,{children:[Object(d.jsx)("h1",{children:"React Scrolling Calendar"}),Object(d.jsx)("h3",{children:"Calendar range"}),Object(d.jsx)("input",{type:"date",value:i,onChange:function(e){return c(e.target.value)}}),Object(d.jsx)("input",{type:"date",value:j,onChange:function(e){return b(e.target.value)}}),Object(d.jsx)("p",{children:"(Too long a range will kill the page... Should probably implement some lazy rendering...)"}),Object(d.jsx)("h3",{children:"Presets"}),Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"checkbox",checked:H,onChange:function(){return P(!H)}}),"Include today"]}),Object(d.jsx)("button",{onClick:function(){return E(7)},children:"Past 7 days"}),Object(d.jsx)("button",{onClick:function(){return E(30)},children:"Past 30 days"}),Object(d.jsx)("button",{onClick:function(){return E(90)},children:"Past 90 days"}),Object(d.jsx)("button",{onClick:function(){return E(180)},children:"Past 180 days"}),Object(d.jsx)("button",{onClick:function(){return E(365)},children:"Past 365 days"}),Object(d.jsx)("hr",{}),Object(d.jsx)("button",{onClick:function(){return C(null),void _(null)},children:"Clear selection"})]}),Object(d.jsx)(N,{children:Object(d.jsx)(I,{fromDate:u,toDate:v,rangeFrom:y,rangeTo:S,onClick:function(e){return function(e){E(!1),!y||y&&S?(C(e),_(null)):e.toLocaleDateString("en-CA")>y.toLocaleDateString("en-CA")?_(e):e.toLocaleDateString("en-CA")<y.toLocaleDateString("en-CA")&&(_(new Date(y)),C(e))}(e)}})})]})}c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(A,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.9a9a758b.chunk.js.map