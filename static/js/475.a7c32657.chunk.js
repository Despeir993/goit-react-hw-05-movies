"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[475],{9355:function(e,t,n){n.d(t,{V:function(){return d}});var r=n(5861),a=n(5671),c=n(9466),u=n(4687),i=n.n(u),s=n(1243),o="83584156b00a2d23d72a1dbc78073946",h="https://api.themoviedb.org/3/",d=function(){function e(){(0,a.Z)(this,e),this._query="",this._movieId=null}return(0,c.Z)(e,[{key:"fetch",value:function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,e.t0=t,e.next="trending"===e.t0?4:"byQuery"===e.t0?8:"details"===e.t0?12:"credits"===e.t0?16:"reviews"===e.t0?20:24;break;case 4:return e.next=6,s.Z.get("".concat(h,"trending/movie/day?api_key=").concat(o,"&language=en-US"));case 6:case 10:case 22:return n=e.sent,e.abrupt("break",25);case 8:return e.next=10,s.Z.get("".concat(h,"search/movie?api_key=").concat(o,"&query=").concat(this._query,"&include_adult=false&language=en-US&page=1"));case 12:return e.next=14,s.Z.get("".concat(h,"movie/").concat(this._movieId,"?api_key=").concat(o,"&language=en-US"));case 14:return n=e.sent,e.abrupt("return",n.data);case 16:return e.next=18,s.Z.get("".concat(h,"movie/").concat(this._movieId,"/credits?api_key=").concat(o,"&language=en-US"));case 18:return n=e.sent,e.abrupt("return",n.data.cast);case 20:return e.next=22,s.Z.get("".concat(h,"movie/").concat(this._movieId,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 24:return e.abrupt("return");case 25:return e.abrupt("return",n.data.results);case 28:throw e.prev=28,e.t1=e.catch(0),new Error("Something went wrong");case 31:case"end":return e.stop()}}),e,this,[[0,28]])})));return function(t){return e.apply(this,arguments)}}()},{key:"query",get:function(){return this._query},set:function(e){this._query=e}},{key:"movieId",get:function(){return this._movieId},set:function(e){this._movieId=e}}]),e}()},2475:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(5861),a=n(9439),c=n(4687),u=n.n(c),i=n(2791),s=n(9355),o=n(184),h=(0,i.lazy)((function(){return n.e(184).then(n.bind(n,9184))})),d=new s.V,v=function(){var e=(0,i.useState)([]),t=(0,a.Z)(e,2),n=t[0],c=t[1];return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.fetch("trending");case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Trending today"}),(0,o.jsx)(h,{movies:n})]})}}}]);
//# sourceMappingURL=475.a7c32657.chunk.js.map