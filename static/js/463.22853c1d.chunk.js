"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[463],{600:function(e,n,t){t.d(n,{BG:function(){return p},Hx:function(){return v},LI:function(){return f},_k:function(){return s},uV:function(){return l}});var r=t(861),a=t(757),c=t.n(a),u=t(243),i="https://api.themoviedb.org/3",o="7578f42464aa1bf410194c3f5bd12bea",s=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/trending/movie/day?api_key=").concat(o));case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},126:function(e,n,t){var r=t(689),a=t(87),c=t(184);n.Z=function(e){var n=e.movies,t=(0,r.TH)();return(0,c.jsx)("div",{children:(0,c.jsx)("ul",{children:n.map((function(e){return(0,c.jsx)("li",{children:(0,c.jsx)(a.rU,{to:{pathname:"/movies/".concat(e.id),state:{from:t}},children:e.title})},e.id)}))})})}},475:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(861),a=t(439),c=t(757),u=t.n(c),i=t(791),o=t(87),s=t(689),f=t(600),p="Search_searchContainer__duLUl",l="Search_searchInput__Qk-44",v="Search_searchButton__8Jp1t",h=t(184),d=function(e){var n=e.onSubmit;return(0,h.jsx)("div",{className:p,children:(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=e.target.elements.query.value;t||window.alert("Please enter a movie to search"),n(t),e.target.reset()},children:[(0,h.jsx)("input",{className:l,name:"query",type:"text",placeholder:"Search for a movie"}),(0,h.jsx)("button",{className:v,type:"submit",children:"Search"})]})})},m=t(126),x=t(323),g=function(){var e=(0,i.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],p=(0,o.lr)(),l=(0,a.Z)(p,2),v=l[0],g=l[1],_=(0,i.useState)(!1),w=(0,a.Z)(_,2),y=w[0],k=w[1],b=(0,i.useState)(null),Z=(0,a.Z)(b,2),S=Z[0],j=Z[1],U=(0,s.TH)();if((0,i.useEffect)((function(){var e,n=null!==(e=v.get("query"))&&void 0!==e?e:"";if(n){var t=function(){var e=(0,r.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),j(null),e.prev=2,e.next=5,(0,f.LI)(n);case 5:t=e.sent,0===(r=t.results).length?window.alert("Movie not found"):c(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),j("An error occurred while fetching movies.");case 13:return e.prev=13,k(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,10,13,16]])})));return function(){return e.apply(this,arguments)}}();t()}}),[v]),y)return(0,h.jsx)(x.a,{});if(S)return(0,h.jsx)("p",{children:S});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{onSubmit:function(e){g({query:e})}}),(0,h.jsx)("ul",{children:t.length>0&&(0,h.jsx)(m.Z,{movies:t,state:{from:U}})})]})}}}]);
//# sourceMappingURL=463.22853c1d.chunk.js.map