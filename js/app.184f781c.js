(function(e){function t(t){for(var n,s,a=t[0],i=t[1],l=t[2],p=0,f=[];p<a.length;p++)s=a[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,a=1;a<o.length;a++){var i=o[a];0!==r[i]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},r={app:0},c=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=i;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"0f83":function(e,t,o){"use strict";o("db4f")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),r=(o("b0c0"),{class:"container"}),c=Object(n["e"])("div",{class:"bio"},[Object(n["e"])("span",null,"Азат Кашапов"),Object(n["e"])("span",null,"Frontend Developer")],-1),s={class:"contacts"},a={class:"header-nav"},i=Object(n["e"])("li",null,[Object(n["e"])("a",{href:"#"},"Обо мне")],-1),l=Object(n["e"])("li",null,[Object(n["e"])("a",{href:"#projects"},"Проекты")],-1),u=Object(n["e"])("span",null,null,-1),p=Object(n["e"])("span",null,null,-1),f=Object(n["e"])("span",null,null,-1),d=Object(n["e"])("span",null,null,-1),g={id:"about",class:"page"},b={class:"intro animated fadeInDown fadeOut_translucent"},h=Object(n["e"])("p",{class:"what-i-want"},"Ищу интересные проекты, и дружную команду.",-1),v=Object(n["e"])("p",{class:"what-i-want"}," Очень нравится делать сайты, плагины на Vue. ",-1),m={class:"stack"},j={class:"toolset"},O=Object(n["e"])("nav",{class:"arrow_down animated zoomIn"},[Object(n["e"])("a",{class:"arrow-big-down",title:"Карьера и скиллы",href:"#projects"},[Object(n["e"])("img",{src:"/img/icons/logo-arrow-down.svg",alt:"icon"})])],-1),w=Object(n["d"])('<div id="projects" class="page"><section class="temp-description"><p> Здесь будут карточки личных проектов (плагины, компоненты, хелперы) </p><p>Ну а пока они готовятся, оставлю тут этот блок</p><p>Системный администратор с 2005 по 2013 год.</p><p>В 2014 подался в PHP фрилансеры.</p><p> Чуть позже открыл для себя силу реактивных фронтенд фреймворков и с начала 2020 работаю fullstack. </p></section><a href="https://github.com/ufaboy/lib-vue" target="_blank" class="project"><h3 class="project__name">Library</h3><video src="/video/lib-prev_2.webm" autoplay loop muted class="preview"></video><div class="description"><p> Фронт для сервиса читалки книг, статей. Но чаще используется для обкатки и хранения фич </p></div></a></div>',1),y={class:"space",ref:"foreground"};function P(e,t,o,P,S,k){return Object(n["f"])(),Object(n["c"])("div",r,[Object(n["e"])("header",{class:["header",{"mobile-open":e.navPopup}]},[c,Object(n["e"])("ul",s,[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(e.contacts,(function(e,t){return Object(n["f"])(),Object(n["c"])("li",{class:"contact",key:t},[Object(n["e"])("a",{href:e.url},[Object(n["e"])("img",{src:e.logoSrc,alt:e.name},null,8,["src","alt"])],8,["href"])])})),128))]),Object(n["e"])("nav",a,[Object(n["e"])("ul",{class:"nav-ul",onClick:t[1]||(t[1]=function(){return k.toggleNavPopup&&k.toggleNavPopup.apply(k,arguments)})},[i,l])]),Object(n["e"])("div",{class:["nav_toggle_ico",{open:e.navPopup}],onClick:t[2]||(t[2]=function(){return k.toggleNavPopup&&k.toggleNavPopup.apply(k,arguments)})},[u,p,f,d],2)],2),Object(n["e"])("div",{class:"scroll-content",onScroll:t[3]||(t[3]=Object(n["i"])((function(){return k.scrollPage&&k.scrollPage.apply(k,arguments)}),["self","stop"])),ref:"scrollMain"},[Object(n["e"])("div",g,[Object(n["e"])("section",b,[h,v,Object(n["e"])("div",m,[Object(n["e"])("div",j,[(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["g"])(e.toolset,(function(e,t){return Object(n["f"])(),Object(n["c"])("span",{key:t,class:"tool"},Object(n["h"])(e),1)})),128))])])]),O]),w,Object(n["e"])("div",y,null,512)],544)])}var S={name:"App",components:{},data:function(){return{contacts:[{name:"Email",url:"mailto:azat.developer@gmail.com",logoSrc:"/img/icons/logo-email.svg"},{name:"Telegram",url:"https://t.me/ufaboy",logoSrc:"/img/icons/logo-telegram.svg"},{name:"Github",url:"https://github.com/ufaboy",logoSrc:"/img/icons/logo-github.svg"},{name:"Gitlab",url:"https://gitlab.com/ufaboy",logoSrc:"/img/icons/logo-gitlab.svg"},{name:"Phone",url:"tel:+79027127515",logoSrc:"/img/icons/logo-phone.svg"}],toolset:["HTML/SCSS","Vue","NUXT","TypeScript","Yii2","Express","Fastify","MySQL, Redis, Firebase","Git","Docker","Figma"],currentHeight:0,navPopup:!1}},computed:{windowHeight:function(){return document.documentElement.clientHeight}},methods:{scrollPage:function(e){var t=e.wheelDelta>0?"top":"down";"top"===t&&this.currentHeight<0?(this.currentHeight+=this.windowHeight,this.scrollToTop()):"down"===t&&this.currentHeight>-this.windowHeight&&(this.currentHeight-=this.windowHeight,this.scrollToBottom())},scrollToTop:function(){this.$refs.scrollMain.style.transform="translate3d(0px, ".concat(this.currentHeight,"px, 0px)"),this.$refs.foreground.classList.add("zoomIn"),this.$refs.foreground.classList.add("animated"),this.$refs.foreground.classList.remove("fadeOutUpBig")},scrollToBottom:function(){this.$refs.scrollMain.style.transform="translate3d(0px, ".concat(this.currentHeight,"px, 0px)"),this.$refs.foreground.classList.add("fadeOutUpBig"),this.$refs.foreground.classList.add("animated"),this.$refs.foreground.classList.remove("zoomIn")},toggleNavPopup:function(){this.navPopup=!this.navPopup}},created:function(){console.warn("Здорово что вам интересен мой код"),console.warn("Хотите обсудить? Напишите пожалуйста https://t.me/ufaboy"),document.addEventListener("wheel",this.scrollPage)},mounted:function(){var e=this;setTimeout((function(){e.$refs.foreground.classList.add("animated"),e.$refs.foreground.classList.add("background_foreground")}),100)}};o("0f83");S.render=P;var k=S,_=o("9483");Object(_["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("73ec");Object(n["b"])(k).mount("#app")},"73ec":function(e,t,o){},db4f:function(e,t,o){}});
//# sourceMappingURL=app.184f781c.js.map