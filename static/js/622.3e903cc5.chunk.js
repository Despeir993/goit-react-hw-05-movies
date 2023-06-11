"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[622],{9355:function(e,t,n){n.d(t,{V:function(){return d}});var r=n(5861),a=n(5671),i=n(9466),s=n(4687),c=n.n(s),o=n(1243),u="83584156b00a2d23d72a1dbc78073946",l="https://api.themoviedb.org/3/",d=function(){function e(){(0,a.Z)(this,e),this._query="",this._movieId=null}return(0,i.Z)(e,[{key:"fetch",value:function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,e.t0=t,e.next="trending"===e.t0?4:"byQuery"===e.t0?8:"details"===e.t0?12:"credits"===e.t0?16:"reviews"===e.t0?20:24;break;case 4:return e.next=6,o.Z.get("".concat(l,"trending/movie/day?api_key=").concat(u,"&language=en-US"));case 6:case 10:case 22:return n=e.sent,e.abrupt("break",25);case 8:return e.next=10,o.Z.get("".concat(l,"search/movie?api_key=").concat(u,"&query=").concat(this._query,"&include_adult=false&language=en-US&page=1"));case 12:return e.next=14,o.Z.get("".concat(l,"movie/").concat(this._movieId,"?api_key=").concat(u,"&language=en-US"));case 14:return n=e.sent,e.abrupt("return",n.data);case 16:return e.next=18,o.Z.get("".concat(l,"movie/").concat(this._movieId,"/credits?api_key=").concat(u,"&language=en-US"));case 18:return n=e.sent,e.abrupt("return",n.data.cast);case 20:return e.next=22,o.Z.get("".concat(l,"movie/").concat(this._movieId,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 24:return e.abrupt("return");case 25:return e.abrupt("return",n.data.results);case 28:throw e.prev=28,e.t1=e.catch(0),new Error("Something went wrong");case 31:case"end":return e.stop()}}),e,this,[[0,28]])})));return function(t){return e.apply(this,arguments)}}()},{key:"query",get:function(){return this._query},set:function(e){this._query=e}},{key:"movieId",get:function(){return this._movieId},set:function(e){this._movieId=e}}]),e}()},3622:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var r,a,i,s,c,o=n(5861),u=n(9439),l=n(4687),d=n.n(l),h=n(2791),v=n(7689),p=n(8966),g=n(1087),x=n(184),f=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("hr",{}),(0,x.jsx)("p",{children:"Additional information"}),(0,x.jsxs)("ul",{children:[(0,x.jsx)("li",{children:(0,x.jsx)(g.rU,{to:"cast",children:"Cast"})}),(0,x.jsx)("li",{children:(0,x.jsx)(g.rU,{to:"reviews",children:"Reviews"})})]}),(0,x.jsx)("hr",{})]})},m=n(168),j=n(7647),_=j.Z.div(r||(r=(0,m.Z)(["\n  width: 700px;\n"]))),w=function(e){var t=e.year,n=e.title,r=e.overview,a=e.genres,i=e.score;return(0,x.jsxs)(_,{children:[(0,x.jsxs)("h2",{children:[n," (",t,")"]}),(0,x.jsxs)("p",{children:["User Score: ",i,"%"]}),(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("p",{children:r}),(0,x.jsx)("h3",{children:"Genres"}),(0,x.jsx)("p",{children:a})]})},y=n(9355),Z=j.Z.div(a||(a=(0,m.Z)(["\n  margin-left: 30px;\n"]))),k=j.Z.img(i||(i=(0,m.Z)(["\n  width: 300px;\n  heigth: 450px;\n"]))),b=(0,j.Z)(g.rU)(s||(s=(0,m.Z)(["\n  margin: 15px 0;\n  display: block;\n"]))),S=j.Z.div(c||(c=(0,m.Z)(["\n  display: flex;\n  gap: 30px;\n"]))),U=new y.V,I=function(){var e,t,n=(0,h.useState)({poster_path:"",title:"",release_date:"",overview:"",vote_average:0,genres:[]}),r=(0,u.Z)(n,2),a=r[0],i=r[1],s=(0,h.useState)(!0),c=(0,u.Z)(s,2),l=c[0],g=c[1],m=(0,v.UO)().movieId,j=null!==(e=null===(t=(0,h.useRef)((0,v.TH)()).current.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/movies";(0,h.useEffect)((function(){var e=function(){var e=(0,o.Z)(d().mark((function e(){var t;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),U.movieId=m,e.next=5,U.fetch("details");case 5:t=e.sent,i(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error fetching movie details:",e.t0);case 12:return e.prev=12,g(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[m]);var _=a.poster_path,y=a.title,I=a.release_date,q=a.overview,C=a.genres,E=a.vote_average,F=_?"https://image.tmdb.org/t/p/w500"+_:"https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg",G=I.slice(0,4),O=C.map((function(e){return e.name})).join(", "),R=String(E).slice(0,3).replace(".","");return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(Z,{children:[(0,x.jsx)(b,{to:j,children:"Go back"}),l?(0,x.jsx)(p.g4,{color:"#e75480",wrapperStyle:{justifyContent:"start"}}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(S,{children:[(0,x.jsx)(k,{src:F,alt:y}),(0,x.jsx)(w,{year:G,title:y,overview:q,genres:O,score:R})]}),(0,x.jsx)(f,{}),(0,x.jsx)(h.Suspense,{fallback:(0,x.jsx)(p.g4,{color:"#e75480",wrapperStyle:{justifyContent:"start"}}),children:(0,x.jsx)(v.j3,{})})]})]})})}}}]);
//# sourceMappingURL=622.3e903cc5.chunk.js.map