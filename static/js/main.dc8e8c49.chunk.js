(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){},107:function(e,t,a){},152:function(e,t,a){},156:function(e,t,a){},158:function(e,t,a){},160:function(e,t,a){},162:function(e,t,a){},165:function(e,t,a){},167:function(e,t,a){},169:function(e,t,a){},171:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),s=a(25),l=a.n(s),r=(a(89),a(4)),o=a(5),c=a(7),u=a(6),m=a(8),h=a(175),f=a(177),p=a(178),d=a(37),v=a(54),b=a(13),y=a(2),g=a.n(y),E=a(9),_=a.n(E),j=a(55),k="https://femontanha.github.io".concat("/fuud"),O="https://accounts.spotify.com/authorize?client_id=4ad4e141368348058f86c56f318549f7&response_type=token&redirect_uri=".concat(k),N=30,C=a(38),w=a.n(C),P=function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},F=(a(105),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={countdown:N},a.tick=a.tick.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(this.tick,1e3),this.countdown=setInterval(function(){e.setState({countdown:N})},3e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer),clearInterval(this.countdown)}},{key:"tick",value:function(){var e=this.state.countdown;this.setState({countdown:e-1})}},{key:"render",value:function(){return i.a.createElement("p",{className:"spotify-timer"},"As playlists ser\xe3o atualizadas em: ",i.a.createElement("span",{className:"spotify-timer__seconds"},this.state.countdown))}}]),t}(n.PureComponent)),S=(a(107),function(e){var t=e.onClick,a=e.show,n=_()("filters-button__triangle",{"filters-button__triangle--inverted":a});return i.a.createElement("button",{className:"filters-button",onClick:t},"Filtrar Playlists",i.a.createElement("i",{className:n}))}),I=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={value:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){var t=e.target.value;this.setState({value:t}),this.props.onChange(t)}},{key:"render",value:function(){var e=this.props.id;return i.a.createElement("fieldset",{className:"filters-form__fieldset"},i.a.createElement("label",{htmlFor:e,className:"filters-form__label"},"Filtrar por Nome"),i.a.createElement("input",{id:e,type:"text",className:"filters-form__name-input",value:this.state.value,onChange:this.handleChange.bind(this)}))}}]),t}(n.PureComponent),x=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={value:a.props.value},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){var t=e.target.id,a=e.target.value;this.setState({value:a}),this.props.onChange(t,a)}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.name,n=e.values;return i.a.createElement("fieldset",{className:"filters-form__fieldset"},i.a.createElement("label",{htmlFor:t,className:"filters-form__label"},"Escolha o ",i.a.createElement("span",null,a)),i.a.createElement("select",{id:t,name:a,onChange:this.handleChange.bind(this),value:this.state.value,className:"filters-form__input"},n.map(function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.name)})))}}]),t}(n.PureComponent),L=a(82),B=(a(150),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={startDate:g()()},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleFormatDate",value:function(e){this.setState({startDate:e}),this.props.onChange(this.props.id,function(e){return g()(e).format()}(e))}},{key:"render",value:function(){return i.a.createElement("fieldset",{className:"filters-form__fieldset"},i.a.createElement("label",{htmlFor:this.props.id,className:"filters-form__label"},"Escolha a ",i.a.createElement("span",null,this.props.name)),i.a.createElement(L.a,{selected:this.state.startDate,onChange:this.handleFormatDate.bind(this),className:"filters-form__input"}))}}]),t}(n.PureComponent)),R=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={value:a.props.value},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){var t=e.target.id,a=parseInt(e.target.value);isNaN(a)||(this.setState({value:a}),this.props.onChange(t,a))}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.name,n=e.validation;return i.a.createElement("fieldset",{className:"filters-form__fieldset"},i.a.createElement("label",{htmlFor:t,className:"filters-form__label"},"Escolha a ",i.a.createElement("span",null,a)),i.a.createElement("input",{id:t,type:"number",min:n.min,max:n.max,value:this.state.value,onChange:this.handleChange.bind(this),className:"filters-form__input"}))}}]),t}(n.PureComponent),D=(a(152),a(154),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={filters:[]},a.props.loaded(!1),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;return fetch("http://www.mocky.io/v2/5a25fade2e0000213aa90776").then(function(e){if(200===e.status)return e.json()}).then(function(t){var a=t.filters||[];e.setState({filters:a}),e.props.loaded(!0)}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this;return i.a.createElement("form",{className:"filters-form"},i.a.createElement(I,{id:"name",onChange:this.props.handleFilterByName}),this.state.filters.map(function(t){switch(t.id){case"country":return i.a.createElement(x,Object.assign({},t,{key:t.id,value:e.props.filtersValues.country,onChange:e.props.handleFilter}));case"timestamp":return i.a.createElement(B,Object.assign({},t,{key:t.id,onChange:e.props.handleFilter}));case"limit":return i.a.createElement(R,Object.assign({},t,{key:t.id,value:e.props.filtersValues.limit,onChange:e.props.handleFilter}));default:return null}}))}}]),t}(n.PureComponent)),A=(a(156),function(e){var t=e.playlist;return i.a.createElement("div",{className:"playlist-grid"},t.map(function(e){return i.a.createElement("a",{href:e.external_urls.spotify,className:"playlist-item",key:e.id,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:e.images[0].url,alt:e.name}),i.a.createElement("p",{className:"playlist-item__name"},e.name))}))}),M=(a(158),function(e){var t=e.limit,a=e.next,n=e.previous,s=e.total,l=e.onClick;return i.a.createElement("div",{className:"pagination"},i.a.createElement("div",{className:"pagination__btn-holder"},n&&i.a.createElement("button",{className:"pagination__btn",onClick:l.bind(null,n)},"Anterior")),s>0&&t<s&&i.a.createElement("span",null,"Total de ",i.a.createElement("strong",null,s)," playlists"),i.a.createElement("div",{className:"pagination__btn-holder"},a&&i.a.createElement("button",{className:"pagination__btn",onClick:l.bind(null,a)},"Pr\xf3xima")))}),T=(a(160),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleFilterByName=function(e){if(""!==e){var t=a.state.playlist.filter(function(t){return-1!==t.name.toLowerCase().search(P(e).toLowerCase())});a.setState({filteredPlaylists:t})}else a.setState({filteredPlaylists:null})},a.state={message:"",playlist:[],filteredPlaylists:null,filters:{country:"BR",timestamp:g()().format(),limit:4,offset:0},showFilters:!1,pagination:{limit:0,next:null,offset:0,previous:null,total:0},refreshRef:null,isFiltersLoaded:!1,isPlaylistsLoaded:!1},a.initRefreshPlaylists=a.initRefreshPlaylists.bind(Object(b.a)(Object(b.a)(a))),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.playlistAPI(this.state.filters),this.initRefreshPlaylists()}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.refreshRef)}},{key:"initRefreshPlaylists",value:function(){var e=this,t=setInterval(function(){e.playlistAPI(e.state.filters)},3e4);this.setState({refreshRef:t})}},{key:"playlistAPI",value:function(e){var t=this;return this.setState({isPlaylistsLoaded:!1}),function(e){var t=e.country,a=e.limit,n=e.timestamp,i=e.offset,s="country=".concat(t,"&limit=").concat(a,"&timestamp=").concat(n,"&offset=").concat(i),l=localStorage.getItem("access-token"),r={headers:{Authorization:"Bearer ".concat(l)}};return fetch("".concat("https://api.spotify.com/v1/browse/featured-playlists","?").concat(s),r)}(e).then(function(e){return 401===e.status?(localStorage.removeItem("access-token"),void t.props.history.push("".concat("/fuud","/"))):e.json()}).then(function(a){if(a.error)j.toast.error(a.error.message);else{var n=a.playlists,i=n.limit,s=n.next,l=n.offset,r=n.previous,o=n.total,c=n.items;t.setState({message:a.message,playlist:c,filteredPlaylists:null,filters:Object(v.a)({},e),pagination:{limit:i,next:s,offset:l,previous:r,total:o}})}t.setState({isPlaylistsLoaded:!0})}).catch(function(e){return console.error(e)})}},{key:"handleLoadingFilters",value:function(e){this.setState({isFiltersLoaded:e})}},{key:"handleFilter",value:function(e,t){var a=Object(v.a)({},this.state.filters,Object(d.a)({},e,t));this.playlistAPI(a)}},{key:"handleFiltersButton",value:function(){this.setState({showFilters:!this.state.showFilters})}},{key:"handlePagination",value:function(e){var t=function(e){var t=e.split("?"),a=w.a.parse(t[1]),n=a.country,i=a.limit,s=a.offset;return{country:n,timestamp:a.timestamp,offset:parseInt(s),limit:parseInt(i)}}(e);this.playlistAPI(t)}},{key:"render",value:function(){var e=this.state,t=e.playlist,a=e.filters,n=e.message,s=e.pagination,l=e.showFilters,r=e.filteredPlaylists,o=e.isFiltersLoaded,c=e.isPlaylistsLoaded,u=_()("app-home__filters",{"is-loaded":o}),m=_()("app-home__playlist",{"is-loaded":c});return i.a.createElement("div",{className:"app-home"},i.a.createElement(F,null),i.a.createElement(j.ToastContainer,{autoClose:3e3}),l&&i.a.createElement("section",{className:u},i.a.createElement(D,{handleFilter:this.handleFilter.bind(this),handleFilterByName:this.handleFilterByName.bind(this),filtersValues:a,loaded:this.handleLoadingFilters.bind(this)})),i.a.createElement("section",{className:"app-home__filters-btn"},i.a.createElement(S,{onClick:this.handleFiltersButton.bind(this),show:l})),i.a.createElement("section",{className:m},i.a.createElement("h1",{className:"app-home__playlist-name"},n),i.a.createElement(A,{playlist:r||t}),!r&&i.a.createElement(M,Object.assign({},s,{onClick:this.handlePagination.bind(this)}))))}}]),t}(n.PureComponent)),W=a(176),z=(a(162),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={hasRedirect:!1},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e,t=this.props.history,a=this.props.location.state.from,n=""!==a.hash?(e=a.hash,w.a.parse(e)["#access_token"]):null;n&&(localStorage.setItem("access-token",n),t.push("/"),this.setState({hasRedirect:!0}))}},{key:"render",value:function(){var e=this.props.location.state.from;return this.state.hasRedirect?i.a.createElement(W.a,{to:e}):i.a.createElement("div",{className:"app-login"},i.a.createElement("h1",{className:"app-login__title"},"Bem vinda(o) ao ","Spotifood"),i.a.createElement("p",{className:"app-login__description"},"Para explorar nossa experi\xeancia, voc\xea precisa ter uma conta no Spotify."),i.a.createElement("p",{className:"app-login__disclaimer"},"N\xe3o tem uma conta no Spotify? ",i.a.createElement("a",{href:"https://www.spotify.com",className:"app-login__link"},"Criar uma conta"),"."),i.a.createElement("a",{href:O,className:"app-login__btn"},"Logar com o Spotify"))}}]),t}(n.PureComponent)),V=a(174),$=a(79),J=a.n($),U=(a(165),function(){return i.a.createElement("div",{className:"app-notfound"},i.a.createElement("h1",{className:"app-notfound__title"},"P\xe1gina n\xe3o encontrada!"),i.a.createElement("img",{className:"app-notfound__img",src:J.a,alt:"P\xe1gina n\xe3o encontrada"}),i.a.createElement(V.a,{className:"app-notfound__link",to:"/"},"P\xe1gina Inicial"))}),q=a(83),G=function(e){var t=e.component,a=Object(q.a)(e,["component"]),n=localStorage.getItem("access-token");return i.a.createElement(p.a,Object.assign({},a,{render:function(e){return n?i.a.createElement(t,e):i.a.createElement(W.a,{to:{pathname:"".concat("/fuud","/login"),state:{from:e.location}}})}}))},H=a(80),K=a.n(H),Q=(a(167),function(){document.body.classList.toggle("dark")}),X=function(){return i.a.createElement("button",{className:"switch-theme",onClick:Q},"Trocar Tema")},Y=(a(169),function(){return i.a.createElement("header",{className:"header"},i.a.createElement("img",{src:K.a,alt:"Spotifood"}),i.a.createElement(X,null))}),Z=(a(171),function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement("main",{className:"app-main"},i.a.createElement(Y,null),i.a.createElement(f.a,null,i.a.createElement(p.a,{path:"".concat("/fuud","/login"),component:z}),i.a.createElement(G,{exact:!0,path:"".concat("/fuud","/"),component:T}),i.a.createElement(p.a,{component:U}))))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},79:function(e,t,a){e.exports=a.p+"static/media/404.b2e41480.png"},80:function(e,t,a){e.exports=a.p+"static/media/spotifood.e6c8b4e8.svg"},84:function(e,t,a){e.exports=a(173)},89:function(e,t,a){}},[[84,2,1]]]);
//# sourceMappingURL=main.dc8e8c49.chunk.js.map