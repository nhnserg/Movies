"use strict";(self.webpackChunknhnserg_github_io=self.webpackChunknhnserg_github_io||[]).push([[257],{257:function(n,e,t){t.r(e),t.d(e,{default:function(){return K}});var r,a,o,i,s,c,p,u,l,f,d,h,x,v,g,m=t(683),Z=t(861),b=t(439),w=t(757),j=t.n(w),y=t(689),k=t(87),P=t(791),z=t(134),_=t(766),U=t(867),Y=U.ZP.div(r||(r=(0,_.Z)(["\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n"]))),C=U.ZP.div(a||(a=(0,_.Z)(["\n  display: flex;\n  margin-top: 20px;\n"]))),O=U.ZP.img(o||(o=(0,_.Z)(["\n  width: 300px;\n  height: auto;\n  object-fit: cover;\n  border-radius: 8px;\n  margin-right: 20px;\n"]))),S=U.ZP.div(i||(i=(0,_.Z)(["\n  flex: 1;\n"]))),q=U.ZP.h1(s||(s=(0,_.Z)(["\n  font-size: 28px;\n  font-weight: bold;\n  margin-bottom: 10px;\n"]))),A=U.ZP.p(c||(c=(0,_.Z)(["\n  font-size: 16px;\n  color: #555;\n  margin-bottom: 10px;\n"]))),D=U.ZP.h2(p||(p=(0,_.Z)(["\n  font-size: 24px;\n  font-weight: bold;\n  margin-top: 20px;\n"]))),E=U.ZP.p(u||(u=(0,_.Z)(["\n  font-size: 16px;\n  color: #555;\n  margin-bottom: 20px;\n"]))),F=U.ZP.h2(l||(l=(0,_.Z)(["\n  font-size: 24px;\n  font-weight: bold;\n  margin-top: 20px;\n"]))),G=U.ZP.div(f||(f=(0,_.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n"]))),L=U.ZP.span(d||(d=(0,_.Z)(["\n  font-size: 16px;\n  color: #007bff;\n  margin-right: 10px;\n  margin-bottom: 10px;\n"]))),R=U.ZP.button(h||(h=(0,_.Z)(["\n  background-color: #007bff;\n  color: #fff;\n  padding: 10px 15px;\n  font-size: 16px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n\n  svg {\n    margin-right: 5px;\n  }\n\n  &:hover {\n    background-color: #0056b3;\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]))),H=U.ZP.h2(x||(x=(0,_.Z)(["\n  font-size: 24px;\n  font-weight: bold;\n  margin-top: 20px;\n"]))),I=U.ZP.ul(v||(v=(0,_.Z)(["\n  list-style: none;\n  padding: 0;\n  display: flex;\n  margin-bottom: 20px;\n"]))),T=U.ZP.li(g||(g=(0,_.Z)(["\n  margin-right: 20px;\n\n  a {\n    text-decoration: none;\n    color: #007bff;\n    font-size: 18px;\n    font-weight: bold;\n    transition: color 0.3s ease-in-out;\n\n    &:hover {\n      color: #0056b3;\n    }\n  }\n"]))),B=t(390),J=t(184),K=function(){var n,e,t=(0,y.UO)().movieId,r=(0,P.useState)(null),a=(0,b.Z)(r,2),o=a[0],i=a[1],s=null!==(n=null===(e=(0,y.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";(0,P.useEffect)((function(){var n=function(){var n=(0,Z.Z)(j().mark((function n(){var e,r,a;return j().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,!t){n.next=8;break}return n.next=4,(0,B.Y5)(t);case 4:e=n.sent,r=new Date(e.release_date).getFullYear(),a=e.vote_average/10*100,i((0,m.Z)((0,m.Z)({},e),{},{releaseYear:r,percentage:a}));case 8:n.next=14;break;case 10:n.prev=10,n.t0=n.catch(0),console.error("Error fetching movie details:",n.t0),i(null);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();n()}),[t]);return(0,J.jsx)("main",{children:o&&(0,J.jsxs)(Y,{children:[(0,J.jsx)(k.rU,{to:s,style:{textDecoration:"none"},children:(0,J.jsxs)(R,{type:"button",children:[(0,J.jsx)(z.kyg,{}),"Go back"]})}),(0,J.jsxs)(C,{children:[(0,J.jsx)(O,{src:o.poster_path?"".concat("https://image.tmdb.org/t/p/w300").concat(o.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/images=1000x700"}),(0,J.jsxs)(S,{children:[(0,J.jsxs)(q,{children:[o.title," (",o.releaseYear,")"]}),(0,J.jsxs)(A,{children:["User Score: ",o.percentage.toFixed(1),"%"]}),(0,J.jsx)(D,{children:"Overview"}),(0,J.jsx)(E,{children:o.overview}),(0,J.jsx)(F,{children:"Genres"}),(0,J.jsx)(G,{children:o.genres.map((function(n){return(0,J.jsx)(L,{children:n.name},n.id)}))})]})]}),(0,J.jsx)(H,{children:"Additional information"}),(0,J.jsxs)(I,{children:[(0,J.jsx)(T,{children:(0,J.jsx)(k.rU,{to:"cast",children:"Cast"})}),(0,J.jsx)(T,{children:(0,J.jsx)(k.rU,{to:"reviews",children:"Reviews"})})]}),(0,J.jsx)(P.Suspense,{fallback:(0,J.jsx)("div",{children:"Loading page..."}),children:(0,J.jsx)(y.j3,{})})]})})}},390:function(n,e,t){t.d(e,{Y5:function(){return l},k1:function(){return s},oO:function(){return x},on:function(){return p},y:function(){return d}});var r=t(861),a=t(757),o=t.n(a),i=t(294);function s(){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(o().mark((function n(){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/3/trending/movie/week");case 3:return e=n.sent,n.abrupt("return",e.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function p(n){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/3/search/movie?query=".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/3/movie/".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function d(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/3/movie/".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(o().mark((function n(e){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/3/movie/".concat(e));case 3:return t=n.sent,n.abrupt("return",t.data);case 7:throw n.prev=7,n.t0=n.catch(0),n.t0;case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}i.Z.defaults.baseURL="https://api.themoviedb.org",i.Z.defaults.params={api_key:"4c22694614865aab1f8d67ad6cba4463"}}}]);
//# sourceMappingURL=257.95d20de1.chunk.js.map