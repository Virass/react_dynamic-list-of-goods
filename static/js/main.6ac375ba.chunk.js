(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var r=e(5),c=e.n(r),o=e(2),u=e(6),a=e(1),s=e.n(a),i=e(3),f=(e(12),function(){var t=Object(o.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()),d=function(){var t=Object(o.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:return n=t.sent,t.abrupt("return",n.slice(0,5));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(o.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f();case 2:return n=t.sent,t.abrupt("return",n.filter((function(t){return"red"===t.color})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=e(0),j=function(t){var n=t.goods;return Object(l.jsx)(l.Fragment,{children:n.map((function(t){return Object(l.jsx)("li",{style:{color:t.color},children:t.name},t.id)}))})},b=function(){var t=Object(i.useState)([]),n=Object(u.a)(t,2),e=n[0],r=n[1],c=function(){var t=Object(o.a)(s.a.mark((function t(n){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n();case 2:e=t.sent,r(e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}();return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Dynamic list of Goods"}),Object(l.jsxs)("div",{children:[Object(l.jsx)("button",{type:"button",onClick:function(){return c(f)},children:"All goods"}),Object(l.jsx)("button",{type:"button",onClick:function(){return c(d)},children:"5 first goods"}),Object(l.jsx)("button",{type:"button",onClick:function(){return c(p)},children:"Red goods"})]}),Object(l.jsx)("ul",{children:Object(l.jsx)(j,{goods:e})})]})};c.a.render(Object(l.jsx)(b,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.6ac375ba.chunk.js.map