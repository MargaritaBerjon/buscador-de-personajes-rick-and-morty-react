(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,function(e,t,n){e.exports=n.p+"static/media/logo.75509f2e.png"},,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),l=n.n(r),m=(n(10),n(4)),o=(n(11),n(12),n(3)),i=n.n(o);var u=function(){return c.a.createElement("h1",{className:"header"},c.a.createElement("img",{src:i.a,alt:"Logo Rick and Morty"}))};n(13);var s=function(){return c.a.createElement("form",{className:"form"},c.a.createElement("input",{className:"fom-input-text",type:"text"}))};n(14),n(15);var f=function(e){return c.a.createElement("article",{className:"card"},c.a.createElement("img",{src:e.elem.image,alt:e.elem.name}),c.a.createElement("h2",null,e.elem.name),c.a.createElement("div",{className:"card-img"},c.a.createElement("div",{className:"card-content"},c.a.createElement("p",null,e.elem.species),c.a.createElement("p",null,e.elem.origin.name))))};var p=function(e){return console.log(e.list),c.a.createElement("section",{className:"list"},e.list.map((function(e,t){return c.a.createElement(f,{key:t,elem:e})})))};var E=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){r(e)}))}),[]),console.log(n),c.a.createElement(c.a.Fragment,null,c.a.createElement(u,null),c.a.createElement(s,null),c.a.createElement(p,{list:n}))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(E,null)),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.f8939b6c.chunk.js.map