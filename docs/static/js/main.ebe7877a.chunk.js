(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/noresults.90b5fda3.png"},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.75509f2e.png"},,,function(e,t,a){e.exports=a(37)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),l=a.n(r),m=a(4),o=(a(25),a(13)),i=a(6),s=(a(26),a(27),a(17)),u=a.n(s);var E=function(){return c.a.createElement("h1",{className:"header"},c.a.createElement("div",null,c.a.createElement(m.b,{to:"/"},c.a.createElement("img",{className:"logo",src:u.a,alt:"Logo Rick and Morty"}))))};a(33);var p=function(e){return c.a.createElement("form",{className:"form",onSubmit:e.onSubmit},c.a.createElement("input",{className:"fom-input-text",type:"search",onChange:e.onNameChange,placeholder:e.placeholderSearch,value:e.value}),c.a.createElement("button",{className:"form-reset",type:"reset",onClick:e.onReset},"Borrar busqueda"))},d=(a(34),a(9)),f=a.n(d);a(35);var h=function(e){var t=e.elem,a=t.image,n=t.name,r=t.species,l=t.id,o=t.status;return c.a.createElement("article",{className:"card"},c.a.createElement("img",{src:a,alt:n}),c.a.createElement("h2",null,n),c.a.createElement("div",{className:"card-img"},c.a.createElement("div",{className:"card-content"},c.a.createElement("p",null,r+" "+{Alien:"\ud83d\udc7d",Human:"\ud83d\ude03"}[r]," "),c.a.createElement("p",null,"Estado: "+{Alive:"\u2705",Dead:"\u274c",unknown:"\u2753"}[o]),c.a.createElement(m.b,{className:"card-button",to:"/CharacterDetail/"+l},"M\xe1s info"))))};var v=function(e){return e.list.sort((function(e,t){return e.name.localeCompare(t.name)})),c.a.createElement("section",{className:"list"},e.list.length?e.list.map((function(e,t){return c.a.createElement(h,{key:t,elem:e})})):c.a.createElement("div",{className:"list-no-results"},c.a.createElement("h2",{className:"list-no-content"},'No hay ning\xfan personaje que coincida con la palabra "',e.value,'"'),c.a.createElement("img",{src:f.a,alt:"Rick and Morty"})))};a(36);var g=function(e){return e.elem?c.a.createElement("section",{className:"character"},c.a.createElement("article",{className:"character-detail"},c.a.createElement("div",null,c.a.createElement("h2",null,e.elem.name),c.a.createElement("img",{src:e.elem.image,alt:e.elem.name})),c.a.createElement("div",{className:"character-detail-content"},c.a.createElement("p",null,e.elem.species),c.a.createElement("p",null,e.elem.status),c.a.createElement("p",null,e.elem.origin.name),c.a.createElement("p",null,"Episodios: "+e.elem.episode.length))),c.a.createElement(m.b,{to:"/",className:"character-detail-button"},"Volver")):c.a.createElement("div",{className:"character-detail-no-content"},c.a.createElement("h2",{className:"list-no-content"},"No hay datos"),c.a.createElement(m.b,{className:"character-detail-button",to:"/"},c.a.createElement("img",{src:f.a,alt:"Rick and Morty"}),"Volver"))};var N=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),m=Object(o.a)(l,2),s=m[0],u=m[1];function d(e){var t=e.target;u(t.value),r(a)}function f(e){e.preventDefault()}function h(){u(""),r(a)}return Object(n.useEffect)((function(){fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){r(e)}))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(E,null),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",render:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(p,{placeholderSearch:"Busca tu personaje",onNameChange:d,onSubmit:f,value:s,onReset:h}),c.a.createElement(v,{list:s?a.filter((function(e){return e.name.toUpperCase().includes(s.toUpperCase())})):a,value:s}))}}),c.a.createElement(i.a,{path:"/CharacterDetail/:id",render:function(e){return c.a.createElement(g,{match:e.match,elem:(t=e.match.params.id,n=a,n.find((function(e){return e.id.toString()===t.toString()})))});var t,n}})))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m.a,null,c.a.createElement(N,null))),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.ebe7877a.chunk.js.map