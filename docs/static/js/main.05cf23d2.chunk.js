(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/noresults.90b5fda3.png"},,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.75509f2e.png"},,,function(e,a,t){e.exports=t(37)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),l=t.n(c),m=t(5),o=(t(25),t(10)),i=t(7),s=(t(26),t(27),t(17)),u=t.n(s);var d=function(){return r.a.createElement("header",{className:"header"},r.a.createElement(m.b,{to:"/",replace:!0},r.a.createElement("img",{className:"logo",src:u.a,alt:"Logo Rick and Morty"})))};t(33);var p=function(e){return r.a.createElement("form",{className:"form",onSubmit:e.onSubmit},r.a.createElement("input",{className:"fom-input-text",type:"search",onChange:e.onNameChange,placeholder:e.placeholderSearch,value:e.value}),r.a.createElement("div",{className:"Radio"},e.items.map((function(a,t){return r.a.createElement("label",{htmlFor:a,key:t,name:e.name},r.a.createElement("input",{className:"form-input-radio",type:"radio",id:a,name:e.name,value:a,onChange:e.onGenderChange}),a)}))),r.a.createElement("button",{className:"form-reset",type:"reset",onClick:e.onReset},"Nueva b\xfasqueda"))},E=(t(34),t(9)),f=t.n(E),h=t(4),g=t.n(h);t(35);function v(e){var a=e.elem,t=a.image,n=a.name,c=a.species,l=a.id,o=a.status;return r.a.createElement("article",{className:"card"},r.a.createElement(m.b,{to:"/CharacterDetail/"+l},r.a.createElement("img",{src:t,alt:n}),r.a.createElement("h2",{className:"card-name"},n),r.a.createElement("div",null,r.a.createElement("div",{className:"card-content"},r.a.createElement("p",null,c+" "+{Alien:"\ud83d\udc7d",Human:"\ud83d\ude03"}[c]," "),r.a.createElement("p",null,"Estado: "+{Alive:"\u2705",Dead:"\u274c",unknown:"\u2753"}[o]),r.a.createElement("p",{className:"card-button"}," M\xe1s info")))))}v.prototypes={image:g.a.img,name:g.a.string,species:g.a.string,id:g.a.string,status:g.a.string};var N=v;var b=function(e){return r.a.createElement("main",{className:"list"},e.list.length?e.list.sort((function(e,a){return e.name.localeCompare(a.name)}))&&e.list.map((function(e,a){return r.a.createElement(N,{key:a,elem:e})})):r.a.createElement("div",{className:"list-no-results"},r.a.createElement("h2",{className:"list-no-content"},'No hay ning\xfan personaje que coincida con la b\xfasqueda "',e.value,'"'),r.a.createElement("img",{className:"no-content-img",src:f.a,alt:"Rick and Morty"})))};t(36);var y=function(e){return e.elem?r.a.createElement("main",{className:"character"},r.a.createElement("article",{className:"character-detail"},r.a.createElement("div",null,r.a.createElement("h2",null,e.elem.name),r.a.createElement("img",{src:e.elem.image,alt:e.elem.name})),r.a.createElement("div",{className:"character-detail-content"},r.a.createElement("p",null,e.elem.species),r.a.createElement("p",null,e.elem.status),r.a.createElement("p",null,e.elem.origin.name),r.a.createElement("p",null,"Episodios: "+e.elem.episode.length))),r.a.createElement(m.b,{to:"/",className:"character-detail-button"},"Volver")):r.a.createElement("div",{className:"character-detail-no-content"},r.a.createElement("h2",{className:"list-no-content"},"No hay datos"),r.a.createElement(m.b,{className:"character-detail-button",to:"/"},r.a.createElement("img",{className:"no-content-img",src:f.a,alt:"Rick and Morty"}),r.a.createElement("p",null,"Volver")))};var C=function(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),m=Object(o.a)(l,2),s=m[0],u=m[1],E=Object(n.useState)(""),f=Object(o.a)(E,2),h=f[0],g=f[1];function v(e){var a=e.target;u(a.value),c(t)}function N(e){var a=e.target;g(a.value),c(t)}function C(e){e.preventDefault()}function S(){var e=s?t.filter((function(e){return e.name.toUpperCase().includes(s.toUpperCase())})):t;return h.length?e.filter((function(e){return e.gender===h})):e}function j(){u(""),g(""),c(t)}function k(){var e=new Set([]);return t.map((function(a){return e.add(a.gender)})),Array.from(e).sort((function(e,a){return e.localeCompare(a)}))}return Object(n.useEffect)((function(){fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(e){return e.results})).then((function(e){c(e)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{placeholderSearch:"Busca tu personaje",onNameChange:v,onSubmit:C,value:s,onReset:j,items:k(),name:"gender",onGenderChange:N}),r.a.createElement(b,{list:S(),value:s}))}}),r.a.createElement(i.a,{path:"/CharacterDetail/:id",render:function(e){return r.a.createElement(y,{match:e.match,elem:(a=e.match.params.id,n=t,n.find((function(e){return e.id.toString()===a.toString()})))});var a,n}})))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,null,r.a.createElement(C,null))),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.05cf23d2.chunk.js.map