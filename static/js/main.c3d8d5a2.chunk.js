(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(64)},38:function(e,t,n){},47:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},57:function(e,t,n){},60:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(25),s=n.n(i),c=n(67),o=n(12),l=n(26),u=n(15),m=(n(38),n(2)),p=n(3),h=n(5),v=n(4),d=n(6),f=n(14),b=n.n(f),E=n(68),g=n(66),O=n(65),y=(n(47),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"nav-bar"},r.a.createElement(O.a,{to:"/",style:{textDecoration:"none"}},r.a.createElement("p",{className:"home-button"},"Heim")))}}]),t}(a.Component)),j=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{title:"S\xed\xf0a fannst ekki"}),r.a.createElement("p",null,"S\xed\xf0a fannst ekki"))}}]),t}(a.Component),w=n(9),k=n.n(w),N=n(11),S=n(69);function x(){return F.apply(this,arguments)}function F(){return(F=Object(N.a)(k.a.mark(function e(){var t,n,a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=JSON.parse(window.localStorage.getItem("movies")))){e.next=6;break}if(n=t.timestamp,!(new Date-new Date(n)<72e5)){e.next=6;break}return a=t.movies,e.abrupt("return",a);case 6:return e.abrupt("return",null);case 7:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}function M(e){return C.apply(this,arguments)}function C(){return(C=Object(N.a)(k.a.mark(function e(t){var n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n={movies:t,timestamp:new Date},window.localStorage.setItem("movies",JSON.stringify(n));case 2:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var B="https://bio-serverinn.herokuapp.com";function D(){return(D=Object(N.a)(k.a.mark(function e(){var t,n,a,r;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{authorization:"Bearer Kappa"},method:"GET"},n=B,e.next=4,fetch(n,t);case 4:return a=e.sent,e.next=7,a.json();case 7:return r=e.sent,200===a.status&&M(r),e.abrupt("return",{result:r,status:a.status});case 10:case"end":return e.stop()}},e,this)}))).apply(this,arguments)}var I={getMovies:function(){return D.apply(this,arguments)}},_="MOVIES_REQUEST",J="MOVIES_ERROR",T="MOVIES_SUCCESS";function U(e){return{type:J,isFetching:!1,movies:null,message:e}}var R=function(){return function(){var e=Object(N.a)(k.a.mark(function e(t){var n,a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:_,isFetching:!0,movies:null}),e.prev=1,e.next=4,I.getMovies();case 4:n=e.sent,e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",t(U(e.t0)));case 10:401===n.status?t(U(n.result)):(a=n.result,t({type:T,isFetching:!1,movies:a}));case 11:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t){return e.apply(this,arguments)}}()},A=(n(51),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.onClick,i=e.pushed,s="button ".concat(n);return i&&(s+=" pushed"),r.a.createElement("button",{onClick:a,className:s},t)}}]),t}(a.Component));A.defaultProps={className:"",onClick:function(){}};var K=A,L=(n(53),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.movie,t=e.title,n=e.poster,a=e.ratings,i=e.id;return r.a.createElement("figure",{className:"movieSpace"},r.a.createElement(O.a,{to:"/movie/"+i,style:{textDecoration:"none"}},r.a.createElement("img",{src:n,alt:"Mynd fyrir b\xed\xf3myndina "+t}),r.a.createElement("figcaption",null,t),r.a.createElement("div",{className:"rating"},r.a.createElement("p",null,a.imdb),r.a.createElement("img",{className:"logo",src:"".concat("/biomyndir","/imdb.png"),alt:"imdb logo"}))))}}]),t}(a.Component)),V=(n(55),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bullseye"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"dash uno"}),r.a.createElement("div",{className:"dash dos"}),r.a.createElement("div",{className:"dash tres"}),r.a.createElement("div",{className:"dash cuatro"})))}}]),t}(a.Component)),H=(n(57),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={allMovies:null,movies:null,done:!1,cinemas:[{name:"\xc1lfabakki",pushed:!1},{name:"Borgarb\xed\xf3",pushed:!1},{name:"B\xed\xf3 Parad\xeds",pushed:!1},{name:"Samb\xed\xf3in Egilsh\xf6ll",pushed:!1},{name:"H\xe1sk\xf3lab\xed\xf3",pushed:!1},{name:"Kringlub\xed\xf3",pushed:!1},{name:"Laugar\xe1sb\xed\xf3",pushed:!1},{name:"Samb\xed\xf3in, Akureyri",pushed:!1},{name:"Samb\xed\xf3in, Keflav\xedk",pushed:!1},{name:"Sm\xe1rab\xed\xf3",pushed:!1}],sortMovies:!1},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(N.a)(k.a.mark(function e(){var t,n,a;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.dispatch,e.next=3,x();case 3:if(!(n=e.sent)){e.next=8;break}this.setState({allMovies:n,movies:n,done:!0}),e.next=10;break;case 8:return e.next=10,t(R());case 10:(a=JSON.parse(window.localStorage.getItem("cinemas")))&&this.setState({cinemas:a,sortMovies:!0});case 12:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t){var n=this.props,a=n.isFetching,r=n.movies,i=n.message,s=this.state,c=s.done,o=s.sortMovies,l=s.cinemas;a||c?a?console.info("Fetching movies"):o&&this.sortMovies(l):r?this.setState({allMovies:r,movies:r,done:!0}):i&&console.warn(i)}},{key:"cinemaButton",value:function(e){var t=this.state.cinemas;t[e].pushed=!t[e].pushed,this.sortMovies(t)}},{key:"sortMovies",value:function(e){var t=this.state.allMovies,n=[];t.forEach(function(t){var a=!1;e.forEach(function(e){if(!e.pushed&&t.showtimes.filter(function(t){return t.cinema.name===e.name}).length>0)return void(a=!0)}),a&&n.push(t)}),window.localStorage.setItem("cinemas",JSON.stringify(e)),this.setState({movies:n,cinemas:e,sortMovies:!1})}},{key:"render",value:function(){var e=this,t=this.props,n=t.message,a=t.isFetching,i=this.state,s=i.cinemas,c=i.movies;return a?r.a.createElement(V,null):n?r.a.createElement("p",null,n):r.a.createElement("div",null,r.a.createElement("div",{className:"cinemas"},r.a.createElement("h3",null,"B\xed\xf3h\xfas"),s.map(function(t,n){return r.a.createElement(K,{key:n,pushed:t.pushed,onClick:function(){return e.cinemaButton(n)}},t.name)})),r.a.createElement("div",{className:"movies"},c&&c.map(function(e){return r.a.createElement(L,{key:e.id,movie:e})})))}}]),t}(a.Component)),P=Object(S.a)(Object(u.b)(function(e){return{movies:e.movies.movies,isFetching:e.movies.isFetching}})(H)),W=(n(60),function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={movies:null,done:!1},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(N.a)(k.a.mark(function e(){var t,n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:if(!(t=e.sent)){e.next=7;break}this.setState({movies:t,done:!0}),e.next=10;break;case 7:return n=this.props.dispatch,e.next=10,n(R());case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.isFetching,n=e.movies,a=e.message,r=this.state.done;t||r?t&&console.info("Fetching movies"):n?this.setState({movies:n,done:!0}):console.warn(a)}},{key:"render",value:function(){var e=this.props,t=e.message,n=e.isFetching,a=this.state.movies;if(t)return r.a.createElement("p",null,t);if(n||!a)return r.a.createElement(V,null);var i=this.props.match.params.id,s=a.filter(function(e){return e.id===parseInt(i)}),c=s[0],o=c.title,l=c.poster,u=c.ratings,m=c.ids,p=c.plot,h=c.showtimes,v=c.directors_abridged,d=c.trailers,f=u.imdb,E=d[0].results,g="";E.forEach(function(e){return g+=","+e.key});var O="Leikstj\xf3ri: ".concat(v[0].name);if(v.length>1){O="Leikstj\xf3rar: "+v[0].name;for(var y=1;y<v.length;y++)y===v.length-1?O+=" og ".concat(v[y].name):O+=", ".concat(v[y].name)}return r.a.createElement("div",{className:"movie-page"},r.a.createElement(b.a,{title:o}),r.a.createElement("div",{className:"movie-about"},r.a.createElement("img",{src:l,alt:"mynd fyrir b\xed\xf3myndina "+o}),r.a.createElement("div",{className:"movie-info"},r.a.createElement("h1",{className:"movie-title"},o),r.a.createElement("div",{className:"movie-page-rating"},r.a.createElement("p",null,f),r.a.createElement("a",{href:"https://www.imdb.com/title/tt"+m.imdb},r.a.createElement("img",{className:"logo",src:"".concat("/biomyndir","/imdb.png"),alt:"imdb logo"}))),r.a.createElement("p",null,O),r.a.createElement("p",{className:"plot-text"},p))),E.length>0&&r.a.createElement("div",{className:"youtubevideowrap"},r.a.createElement("div",{className:"video-container"},r.a.createElement("iframe",{title:"trailers",width:"640",height:"352",align:"center",src:"https://www.youtube.com/embed/?playlist=".concat(g),frameBorder:"0",allow:"autoplay; encrypted-media",allowFullScreen:!0}))),r.a.createElement("div",{className:"showtimes"},s&&h.map(function(e){var t=e.cinema,n=t.name,a=t.id,i=e.schedule;return r.a.createElement("section",{key:a,className:"theater-showtimes"},r.a.createElement("h1",null,n),r.a.createElement("div",{className:"schedules"},i.map(function(e,t){return r.a.createElement("a",{key:"".concat(a).concat(t),href:e.purchase_url},r.a.createElement(K,{className:"schedule"},r.a.createElement("p",null,e.time)))})))})))}}]),t}(a.Component)),z=Object(S.a)(Object(u.b)(function(e){return{movies:e.movies.movies,isFetching:e.movies.isFetching}})(W)),G=(n(62),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"main"},r.a.createElement(b.a,{defaultTitle:"B\xed\xf3myndir landsins",titleTemplate:"%s"}),r.a.createElement(y,null),r.a.createElement("div",{className:"main__content"},r.a.createElement(E.a,{location:this.props.location},r.a.createElement(g.a,{path:"/",exact:!0,component:P}),r.a.createElement(g.a,{path:"/movie/:id",component:z}),r.a.createElement(g.a,{component:j}))),r.a.createElement("footer",{className:"footer"},r.a.createElement("hr",null),r.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," - B\xed\xf3myndir landsins")))}}]),t}(a.Component)),Q=n(20),Y={isFetching:!1,movies:null},$=Object(o.c)({movies:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(Q.a)({},e,{isFetching:t.isFetching,movies:t.movies});case J:return Object(Q.a)({},e,{isFetching:t.isFetching,movies:t.movies,message:t.message});case T:return Object(Q.a)({},e,{isFetching:t.isFetching,movies:t.movies});default:return e}}}),q=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(r.a.Component),X=Object(S.a)(q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=Object(o.d)($,Object(o.a)(l.a));s.a.render(r.a.createElement(u.a,{store:Z},r.a.createElement(c.a,{basename:"/biomyndir"},r.a.createElement(X,null,r.a.createElement(G,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.c3d8d5a2.chunk.js.map