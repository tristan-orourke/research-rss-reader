(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,c){"use strict";c.r(t);var l=c(0),s=c(1),b=c(103),a=c(55),n=c.n(a);function O(){function e(){return"undefined"!=typeof window&&"indexedDB"in window}if(!e())return{isAvailable:e,feedList:async()=>[],addFeed:async()=>!1,deleteFeed:async()=>!1,saveItem:async()=>!1,forgetItem:async()=>!1,getItem:async()=>null,getAllItems:async()=>[]};function t(){return Object(b.a)("rss",1,{upgrade(e){e.createObjectStore("items",{keyPath:"link"}).createIndex("feedUrl","feedUrl"),e.createObjectStore("feeds",{keyPath:"feedUrl"})}})}return{isAvailable:e,feedList:async function(){const e=await t();return(await e.getAll("feeds")).map(e=>e.feedUrl)},addFeed:async function(e){const c=(await t()).transaction("feeds","readwrite");if(void 0===await c.store.get(e)){const t={feedUrl:e};return c.store.put(t),!0}return!1},deleteFeed:async function(e){const c=(await t()).transaction("feeds","readwrite");return void 0!==await c.store.get(e)&&(c.store.delete(e),!0)},saveItem:async function(e){const c=(await t()).transaction("items","readwrite"),l=await c.store.get(e.link);return!n()(l,e)&&(c.store.put(e),!0)},forgetItem:async function(e){const c=(await t()).transaction("items","readwrite");return void 0!==await c.store.get(e)&&(c.store.delete(e),!0)},getItem:async function(e){return(await t()).get("items",e)||null},getAllItems:async function(){return(await t()).getAll("items")}}}function j(e,t,c){const l=e.slice();return l[21]=t[c],l}function i(e){let t,c,s,b,a;return{c(){t=Object(l.t)("div"),c=Object(l.t)("button"),s=Object(l.Q)("+")},l(e){t=Object(l.k)(e,"DIV",{});var b=Object(l.i)(t);c=Object(l.k)(b,"BUTTON",{});var a=Object(l.i)(c);s=Object(l.m)(a,"+"),a.forEach(l.s),b.forEach(l.s)},m(n,O){Object(l.A)(n,t,O),Object(l.e)(t,c),Object(l.e)(c,s),b||(a=Object(l.C)(c,"click",e[6]),b=!0)},p:l.E,d(e){e&&Object(l.s)(t),b=!1,a()}}}function r(e){let t,c,s,b,a,n,O,j,i,r,o;return{c(){t=Object(l.t)("div"),c=Object(l.t)("button"),s=Object(l.Q)("Cancel"),b=Object(l.O)(),a=Object(l.t)("input"),O=Object(l.O)(),j=Object(l.t)("button"),i=Object(l.Q)("Save"),this.h()},l(e){t=Object(l.k)(e,"DIV",{class:!0});var n=Object(l.i)(t);c=Object(l.k)(n,"BUTTON",{});var r=Object(l.i)(c);s=Object(l.m)(r,"Cancel"),r.forEach(l.s),b=Object(l.l)(n),a=Object(l.k)(n,"INPUT",{class:!0,type:!0}),O=Object(l.l)(n),j=Object(l.k)(n,"BUTTON",{});var o=Object(l.i)(j);i=Object(l.m)(o,"Save"),o.forEach(l.s),n.forEach(l.s),this.h()},h(){Object(l.g)(a,"class","tag-input"),Object(l.g)(a,"type","text"),Object(l.g)(t,"class","add-tag")},m(d,u){Object(l.A)(d,t,u),Object(l.e)(t,c),Object(l.e)(c,s),Object(l.e)(t,b),Object(l.e)(t,a),Object(l.N)(a,e[3]),Object(l.e)(t,O),Object(l.e)(t,j),Object(l.e)(j,i),r||(o=[Object(l.C)(c,"click",e[6]),Object(l.c)(n=f.call(null,a)),Object(l.C)(a,"input",e[11]),Object(l.C)(a,"keyup",e[12]),Object(l.C)(j,"click",e[7])],r=!0)},p(e,t){8&t&&a.value!==e[3]&&Object(l.N)(a,e[3])},d(e){e&&Object(l.s)(t),r=!1,Object(l.J)(o)}}}function o(e){let t,c,s,b;function a(...t){return e[13](e[21],...t)}return{c(){t=Object(l.t)("button"),c=Object(l.t)("i"),this.h()},l(e){t=Object(l.k)(e,"BUTTON",{title:!0});var s=Object(l.i)(t);c=Object(l.k)(s,"I",{class:!0,"aria-hidden":!0}),Object(l.i)(c).forEach(l.s),s.forEach(l.s),this.h()},h(){Object(l.g)(c,"class","fa fa-trash"),Object(l.g)(c,"aria-hidden","true"),Object(l.g)(t,"title","delete")},m(e,n){Object(l.A)(e,t,n),Object(l.e)(t,c),s||(b=Object(l.C)(t,"click",a),s=!0)},p(t,c){e=t},d(e){e&&Object(l.s)(t),s=!1,b()}}}function d(e,t){let c,s,b,a,n=t[21]+"",O=t[1]&&o(t);return{key:e,first:null,c(){c=Object(l.t)("li"),s=Object(l.Q)(n),b=Object(l.O)(),O&&O.c(),a=Object(l.O)(),this.h()},l(e){c=Object(l.k)(e,"LI",{class:!0});var t=Object(l.i)(c);s=Object(l.m)(t,n),b=Object(l.l)(t),O&&O.l(t),a=Object(l.l)(t),t.forEach(l.s),this.h()},h(){Object(l.g)(c,"class","tag-item svelte-b6vz34"),this.first=c},m(e,t){Object(l.A)(e,c,t),Object(l.e)(c,s),Object(l.e)(c,b),O&&O.m(c,null),Object(l.e)(c,a)},p(e,t){16&t&&n!==(n=e[21]+"")&&Object(l.M)(s,n),e[1]?O?O.p(e,t):(O=o(e),O.c(),O.m(c,a)):O&&(O.d(1),O=null)},d(e){e&&Object(l.s)(c),O&&O.d()}}}function u(e){let t,c,s,b,a,n,O,o,u,f,h,g,v,m,p,k,T,y,E,w,I,x,D,A,U,S,$,z,C,N,L=e[5].current+"",B=e[0].title+"",R=e[0].contentSnippet.slice(0,20)+"",Q=e[0].content+"",V=[],F=new Map;function M(e,t){return e[2]?r:i}let P=M(e),G=P(e),J=e[4];const K=e=>e[21];for(let t=0;t<J.length;t+=1){let c=j(e,J,t),l=K(c);F.set(l,V[t]=d(l,c))}return{c(){t=Object(l.t)("div"),c=Object(l.t)("div"),s=Object(l.t)("div"),b=Object(l.t)("p"),a=Object(l.Q)(L),o=Object(l.O)(),u=Object(l.t)("a"),f=Object(l.Q)(B),g=Object(l.O)(),v=Object(l.t)("div"),m=Object(l.t)("button"),p=Object(l.t)("i"),y=Object(l.O)(),E=Object(l.t)("div"),w=Object(l.t)("div"),G.c(),I=Object(l.O)(),x=Object(l.t)("details"),D=Object(l.t)("summary"),A=Object(l.Q)(R),U=Object(l.O)(),$=Object(l.O)(),z=Object(l.t)("ul");for(let e=0;e<V.length;e+=1)V[e].c();this.h()},l(e){t=Object(l.k)(e,"DIV",{class:!0});var n=Object(l.i)(t);c=Object(l.k)(n,"DIV",{class:!0});var O=Object(l.i)(c);s=Object(l.k)(O,"DIV",{class:!0});var j=Object(l.i)(s);b=Object(l.k)(j,"P",{class:!0});var i=Object(l.i)(b);a=Object(l.m)(i,L),i.forEach(l.s),j.forEach(l.s),o=Object(l.l)(O),u=Object(l.k)(O,"A",{class:!0,href:!0});var r=Object(l.i)(u);f=Object(l.m)(r,B),r.forEach(l.s),g=Object(l.l)(O),v=Object(l.k)(O,"DIV",{});var d=Object(l.i)(v);m=Object(l.k)(d,"BUTTON",{title:!0});var h=Object(l.i)(m);p=Object(l.k)(h,"I",{class:!0,"aria-hidden":!0}),Object(l.i)(p).forEach(l.s),h.forEach(l.s),d.forEach(l.s),O.forEach(l.s),y=Object(l.l)(n),E=Object(l.k)(n,"DIV",{});var k=Object(l.i)(E);w=Object(l.k)(k,"DIV",{class:!0});var T=Object(l.i)(w);G.l(T),T.forEach(l.s),k.forEach(l.s),I=Object(l.l)(n),x=Object(l.k)(n,"DETAILS",{class:!0});var S=Object(l.i)(x);D=Object(l.k)(S,"SUMMARY",{});var C=Object(l.i)(D);A=Object(l.m)(C,R),C.forEach(l.s),U=Object(l.l)(S),S.forEach(l.s),$=Object(l.l)(n),z=Object(l.k)(n,"UL",{class:!0});var N=Object(l.i)(z);for(let e=0;e<V.length;e+=1)V[e].l(N);N.forEach(l.s),n.forEach(l.s),this.h()},h(){Object(l.g)(b,"class",n=Object(l.F)(e[5].style)+" svelte-b6vz34"),Object(l.g)(s,"class",O=Object(l.F)("item-status")+" svelte-b6vz34"),Object(l.g)(u,"class","item-link svelte-b6vz34"),Object(l.g)(u,"href",h=e[0].link),Object(l.g)(p,"class",k=Object(l.F)("fa "+e[5].actionIcon)+" svelte-b6vz34"),Object(l.g)(p,"aria-hidden","true"),Object(l.g)(m,"title",T=e[5].action),Object(l.g)(c,"class","item-head svelte-b6vz34"),Object(l.g)(w,"class","tag-form svelte-b6vz34"),S=new l.a(null),Object(l.g)(x,"class","item-content svelte-b6vz34"),Object(l.g)(z,"class","tag-list svelte-b6vz34"),Object(l.g)(t,"class","item svelte-b6vz34")},m(n,O){Object(l.A)(n,t,O),Object(l.e)(t,c),Object(l.e)(c,s),Object(l.e)(s,b),Object(l.e)(b,a),Object(l.e)(c,o),Object(l.e)(c,u),Object(l.e)(u,f),Object(l.e)(c,g),Object(l.e)(c,v),Object(l.e)(v,m),Object(l.e)(m,p),Object(l.e)(t,y),Object(l.e)(t,E),Object(l.e)(E,w),G.m(w,null),Object(l.e)(t,I),Object(l.e)(t,x),Object(l.e)(x,D),Object(l.e)(D,A),Object(l.e)(x,U),S.m(Q,x),Object(l.e)(t,$),Object(l.e)(t,z);for(let e=0;e<V.length;e+=1)V[e].m(z,null);C||(N=Object(l.C)(m,"click",e[9]),C=!0)},p(e,[t]){if(32&t&&L!==(L=e[5].current+"")&&Object(l.M)(a,L),32&t&&n!==(n=Object(l.F)(e[5].style)+" svelte-b6vz34")&&Object(l.g)(b,"class",n),1&t&&B!==(B=e[0].title+"")&&Object(l.M)(f,B),1&t&&h!==(h=e[0].link)&&Object(l.g)(u,"href",h),32&t&&k!==(k=Object(l.F)("fa "+e[5].actionIcon)+" svelte-b6vz34")&&Object(l.g)(p,"class",k),32&t&&T!==(T=e[5].action)&&Object(l.g)(m,"title",T),P===(P=M(e))&&G?G.p(e,t):(G.d(1),G=P(e),G&&(G.c(),G.m(w,null))),1&t&&R!==(R=e[0].contentSnippet.slice(0,20)+"")&&Object(l.M)(A,R),1&t&&Q!==(Q=e[0].content+"")&&S.p(Q),274&t){const c=e[4];V=Object(l.T)(V,t,K,1,e,c,F,z,l.p,d,null,j)}},i:l.E,o:l.E,d(e){e&&Object(l.s)(t),G.d();for(let e=0;e<V.length;e+=1)V[e].d();C=!1,N()}}}function f(e){e.focus()}function h(e,t,c){let{item:l}=t,{handleRefreshTags:b}=t,{showDeleteTags:a}=t,n=!1,j="",i=null,r=[];Object(s.c)(async()=>{i=O(),c(4,r=l.tags||[])});const o=()=>{c(2,n=!n)};async function d(){u(j),o(),c(3,j="")}const u=async e=>{const t=new Set(r);t.add(e),h([...t])},f=async e=>{const t=new Set(r);t.delete(e),h([...t])};const h=async e=>{const{feed:t,...s}=l,a={...s,feedUrl:s.feedUrl||t.link,tags:e};await i.saveItem(a)&&c(4,r=e),b()},g="status/toRead",v="status/finished",m={current:"New!",action:"Save",style:"status-button-new",actionIcon:"fa-bookmark-o"},p={current:"Saved",action:"Finish",style:"status-button-toread",actionIcon:"fa-book"},k={current:"Finished",action:"Restart",style:"status-button-finished",actionIcon:"fa-repeat"};let T;return e.$set=e=>{"item"in e&&c(0,l=e.item),"handleRefreshTags"in e&&c(10,b=e.handleRefreshTags),"showDeleteTags"in e&&c(1,a=e.showDeleteTags)},e.$$.update=()=>{var t;16&e.$$.dirty&&c(5,T=(t=r).includes(v)?k:t.includes(g)?p:m)},[l,a,n,j,r,T,o,d,f,function(){let e;e=r.includes(g)?[v,...r.filter(e=>e!==g)]:r.includes(v)?[g,...r.filter(e=>e!==v)]:[g,...r],h(e)},b,function(){j=this.value,c(3,j)},e=>"Enter"===e.key&&d(),e=>f(e)]}class g extends l.b{constructor(e){var t;super(),document.getElementById("svelte-b6vz34-style")||((t=Object(l.t)("style")).id="svelte-b6vz34-style",t.textContent=".item.svelte-b6vz34{display:flex;flex-direction:column;padding-bottom:20px}.item-head.svelte-b6vz34{display:flex;flex-direction:row}.item-feed.svelte-b6vz34{padding-right:20px}.item-status.svelte-b6vz34{padding-right:20px}.item-link.svelte-b6vz34{flex:1;padding-right:20px}.item-content.svelte-b6vz34{padding-top:10px}.status-button-new.svelte-b6vz34{background-color:lightgreen;padding:3px 8px;border-radius:25%}.status-button-toread.svelte-b6vz34{background-color:darkorange;padding:3px 8px;border-radius:25%}.status-button-finished.svelte-b6vz34{background-color:aqua;padding:3px 8px;border-radius:25%}.tag-form.svelte-b6vz34{float:right}.tag-list.svelte-b6vz34{display:flex;flex-direction:row}.tag-item.svelte-b6vz34{padding-right:20px}",Object(l.e)(document.head,t)),Object(l.z)(this,e,h,u,l.K,{item:0,handleRefreshTags:10,showDeleteTags:1})}}var v=g,m=c(56),p=c.n(m);function k(e,t,c){const l=e.slice();return l[14]=t[c],l}function T(e){let t,c,s,b;function a(...t){return e[13](e[14],...t)}return{c(){t=Object(l.t)("button"),c=Object(l.t)("i"),this.h()},l(e){t=Object(l.k)(e,"BUTTON",{title:!0});var s=Object(l.i)(t);c=Object(l.k)(s,"I",{class:!0,"aria-hidden":!0}),Object(l.i)(c).forEach(l.s),s.forEach(l.s),this.h()},h(){Object(l.g)(c,"class","fa fa-trash"),Object(l.g)(c,"aria-hidden","true"),Object(l.g)(t,"title","delete")},m(e,n){Object(l.A)(e,t,n),Object(l.e)(t,c),s||(b=Object(l.C)(t,"click",a),s=!0)},p(t,c){e=t},d(e){e&&Object(l.s)(t),s=!1,b()}}}function y(e){let t,c,s,b,a,n,O,j,i,r,o,d=e[14]+"";function u(...t){return e[12](e[14],...t)}let f=e[2]&&T(e);return{c(){t=Object(l.t)("li"),c=Object(l.t)("label"),s=Object(l.t)("input"),n=Object(l.O)(),O=Object(l.Q)(d),j=Object(l.O)(),f&&f.c(),i=Object(l.O)(),this.h()},l(e){t=Object(l.k)(e,"LI",{});var b=Object(l.i)(t);c=Object(l.k)(b,"LABEL",{});var a=Object(l.i)(c);s=Object(l.k)(a,"INPUT",{type:!0,name:!0,value:!0,checked:!0}),n=Object(l.l)(a),O=Object(l.m)(a,d),a.forEach(l.s),j=Object(l.l)(b),f&&f.l(b),i=Object(l.l)(b),b.forEach(l.s),this.h()},h(){Object(l.g)(s,"type","checkbox"),Object(l.g)(s,"name","tags"),s.value=b=e[14],s.checked=a=e[0].includes(e[14])},m(e,b){Object(l.A)(e,t,b),Object(l.e)(t,c),Object(l.e)(c,s),Object(l.e)(c,n),Object(l.e)(c,O),Object(l.e)(t,j),f&&f.m(t,null),Object(l.e)(t,i),r||(o=Object(l.C)(s,"click",u),r=!0)},p(c,n){e=c,16&n&&b!==(b=e[14])&&(s.value=b),17&n&&a!==(a=e[0].includes(e[14]))&&(s.checked=a),16&n&&d!==(d=e[14]+"")&&Object(l.M)(O,d),e[2]?f?f.p(e,n):(f=T(e),f.c(),f.m(t,i)):f&&(f.d(1),f=null)},d(e){e&&Object(l.s)(t),f&&f.d(),r=!1,o()}}}function E(e){let t,c,s,b,a,n,O,j,i,r,o,d,u,f,h=e[5]?"Unselect All":"Select All",g=e[4],v=[];for(let t=0;t<g.length;t+=1)v[t]=y(k(e,g,t));return{c(){t=Object(l.t)("ul"),c=Object(l.t)("li"),s=Object(l.t)("label"),b=Object(l.t)("input"),a=Object(l.O)(),n=Object(l.Q)(h),O=Object(l.O)(),j=Object(l.t)("li"),i=Object(l.t)("label"),r=Object(l.t)("input"),o=Object(l.Q)("\r\n      UNTAGGED"),d=Object(l.O)();for(let e=0;e<v.length;e+=1)v[e].c();this.h()},l(e){t=Object(l.k)(e,"UL",{});var u=Object(l.i)(t);c=Object(l.k)(u,"LI",{});var f=Object(l.i)(c);s=Object(l.k)(f,"LABEL",{});var g=Object(l.i)(s);b=Object(l.k)(g,"INPUT",{type:!0,name:!0,value:!0,checked:!0}),a=Object(l.l)(g),n=Object(l.m)(g,h),g.forEach(l.s),f.forEach(l.s),O=Object(l.l)(u),j=Object(l.k)(u,"LI",{});var m=Object(l.i)(j);i=Object(l.k)(m,"LABEL",{});var p=Object(l.i)(i);r=Object(l.k)(p,"INPUT",{type:!0,name:!0,value:!0,checked:!0}),o=Object(l.m)(p,"\r\n      UNTAGGED"),p.forEach(l.s),m.forEach(l.s),d=Object(l.l)(u);for(let e=0;e<v.length;e+=1)v[e].l(u);u.forEach(l.s),this.h()},h(){Object(l.g)(b,"type","checkbox"),Object(l.g)(b,"name","tags"),b.value="_all",b.checked=e[5],Object(l.g)(r,"type","checkbox"),Object(l.g)(r,"name","tags"),r.value="_untagged",r.checked=e[1]},m(h,g){Object(l.A)(h,t,g),Object(l.e)(t,c),Object(l.e)(c,s),Object(l.e)(s,b),Object(l.e)(s,a),Object(l.e)(s,n),Object(l.e)(t,O),Object(l.e)(t,j),Object(l.e)(j,i),Object(l.e)(i,r),Object(l.e)(i,o),Object(l.e)(t,d);for(let e=0;e<v.length;e+=1)v[e].m(t,null);u||(f=[Object(l.C)(b,"click",e[8]),Object(l.C)(r,"click",e[7])],u=!0)},p(e,[c]){if(32&c&&(b.checked=e[5]),32&c&&h!==(h=e[5]?"Unselect All":"Select All")&&Object(l.M)(n,h),2&c&&(r.checked=e[1]),93&c){let l;for(g=e[4],l=0;l<g.length;l+=1){const s=k(e,g,l);v[l]?v[l].p(s,c):(v[l]=y(s),v[l].c(),v[l].m(t,null))}for(;l<v.length;l+=1)v[l].d(1);v.length=g.length}},i:l.E,o:l.E,d(e){e&&Object(l.s)(t),Object(l.r)(v,e),u=!1,Object(l.J)(f)}}}function w(e,t,c){let{tags:l}=t,{selectedTags:s}=t,{setSelectedTags:b}=t,{untaggedSelected:a}=t,{setUntaggedSelected:n}=t,{showDeleteTag:O}=t,{handleDeleteTag:j}=t;function i(e){s.includes(e)?b(s.filter(t=>t!==e)):b([e,...s])}let r,o;return e.$set=e=>{"tags"in e&&c(9,l=e.tags),"selectedTags"in e&&c(0,s=e.selectedTags),"setSelectedTags"in e&&c(10,b=e.setSelectedTags),"untaggedSelected"in e&&c(1,a=e.untaggedSelected),"setUntaggedSelected"in e&&c(11,n=e.setUntaggedSelected),"showDeleteTag"in e&&c(2,O=e.showDeleteTag),"handleDeleteTag"in e&&c(3,j=e.handleDeleteTag)},e.$$.update=()=>{512&e.$$.dirty&&c(4,r=function(e,t){let c=[...e];return c.sort(t),c}(l)),515&e.$$.dirty&&c(5,o=l.length===s.length&&a)},[s,a,O,j,r,o,i,function(){return n(!a)},function(){o?(b([]),n(!1)):(b(l),n(!0))},l,b,n,e=>i(e),e=>j(e)]}class I extends l.b{constructor(e){super(),Object(l.z)(this,e,w,E,l.K,{tags:9,selectedTags:0,setSelectedTags:10,untaggedSelected:1,setUntaggedSelected:11,showDeleteTag:2,handleDeleteTag:3})}}var x=I;c(2);function D(e,t,c){const l=e.slice();return l[22]=t[c],l}function A(e,t,c){const l=e.slice();return l[25]=t[c],l}function U(e){let t,c,s,b,a,n,O,j,i,r;return{c(){t=Object(l.t)("div"),c=Object(l.t)("button"),s=Object(l.Q)("Cancel"),b=Object(l.O)(),a=Object(l.t)("input"),n=Object(l.O)(),O=Object(l.t)("button"),j=Object(l.Q)("Add"),this.h()},l(e){t=Object(l.k)(e,"DIV",{class:!0});var i=Object(l.i)(t);c=Object(l.k)(i,"BUTTON",{});var r=Object(l.i)(c);s=Object(l.m)(r,"Cancel"),r.forEach(l.s),b=Object(l.l)(i),a=Object(l.k)(i,"INPUT",{class:!0,type:!0,placeholder:!0}),n=Object(l.l)(i),O=Object(l.k)(i,"BUTTON",{});var o=Object(l.i)(O);j=Object(l.m)(o,"Add"),o.forEach(l.s),i.forEach(l.s),this.h()},h(){Object(l.g)(a,"class","feed-input svelte-1k4ejlc"),Object(l.g)(a,"type","text"),Object(l.g)(a,"placeholder","http://rss.feed.com"),Object(l.g)(t,"class","add-feed svelte-1k4ejlc")},m(o,d){Object(l.A)(o,t,d),Object(l.e)(t,c),Object(l.e)(c,s),Object(l.e)(t,b),Object(l.e)(t,a),Object(l.N)(a,e[1]),Object(l.e)(t,n),Object(l.e)(t,O),Object(l.e)(O,j),i||(r=[Object(l.C)(c,"click",e[9]),Object(l.C)(a,"input",e[15]),Object(l.C)(O,"click",e[10])],i=!0)},p(e,t){2&t&&a.value!==e[1]&&Object(l.N)(a,e[1])},d(e){e&&Object(l.s)(t),i=!1,Object(l.J)(r)}}}function S(e){let t,c,s,b,a,n,O,j,i=e[25]+"";function r(...t){return e[16](e[25],...t)}return{c(){t=Object(l.t)("li"),c=Object(l.Q)(i),s=Object(l.O)(),b=Object(l.t)("button"),a=Object(l.Q)("Remove"),n=Object(l.O)()},l(e){t=Object(l.k)(e,"LI",{});var O=Object(l.i)(t);c=Object(l.m)(O,i),s=Object(l.l)(O),b=Object(l.k)(O,"BUTTON",{});var j=Object(l.i)(b);a=Object(l.m)(j,"Remove"),j.forEach(l.s),n=Object(l.l)(O),O.forEach(l.s)},m(e,i){Object(l.A)(e,t,i),Object(l.e)(t,c),Object(l.e)(t,s),Object(l.e)(t,b),Object(l.e)(b,a),Object(l.e)(t,n),O||(j=Object(l.C)(b,"click",r),O=!0)},p(t,s){e=t,4&s&&i!==(i=e[25]+"")&&Object(l.M)(c,i)},d(e){e&&Object(l.s)(t),O=!1,j()}}}function $(e,t){let c,s,b;return s=new v({props:{item:t[22],handleRefreshTags:t[8],showDeleteTags:!t[6]}}),{key:e,first:null,c(){c=Object(l.u)(),Object(l.n)(s.$$.fragment),this.h()},l(e){c=Object(l.u)(),Object(l.j)(s.$$.fragment,e),this.h()},h(){this.first=c},m(e,t){Object(l.A)(e,c,t),Object(l.D)(s,e,t),b=!0},p(e,t){const c={};128&t&&(c.item=e[22]),64&t&&(c.showDeleteTags=!e[6]),s.$set(c)},i(e){b||(Object(l.R)(s.$$.fragment,e),b=!0)},o(e){Object(l.S)(s.$$.fragment,e),b=!1},d(e){e&&Object(l.s)(c),Object(l.q)(s,e)}}}function z(e){let t,c,s,b,a,n,O,j,i,r,o,d,u,f,h,g,v,m,p,k,T,y,E,w,I=e[6]?"Unlock Tags":"LOCK TAGS",z=[],C=new Map,N=e[0]&&U(e),L=e[2],B=[];for(let t=0;t<L.length;t+=1)B[t]=S(A(e,L,t));r=new x({props:{tags:e[3],selectedTags:e[4],setSelectedTags:e[12],untaggedSelected:e[5],setUntaggedSelected:e[13],showDeleteTag:!e[6],handleDeleteTag:e[14]}});let R=e[7];const Q=e=>e[22].link;for(let t=0;t<R.length;t+=1){let c=D(e,R,t),l=Q(c);C.set(l,z[t]=$(l,c))}return{c(){t=Object(l.O)(),N&&N.c(),c=Object(l.O)(),s=Object(l.t)("div"),b=Object(l.t)("div"),a=Object(l.t)("button"),n=Object(l.Q)("Add"),O=Object(l.O)(),j=Object(l.t)("ul");for(let e=0;e<B.length;e+=1)B[e].c();i=Object(l.O)(),Object(l.n)(r.$$.fragment),o=Object(l.O)(),d=Object(l.t)("div"),u=Object(l.t)("button"),f=Object(l.Q)(I),h=Object(l.O)(),g=Object(l.t)("div"),v=Object(l.t)("div"),m=Object(l.t)("button"),p=Object(l.Q)("Reload"),k=Object(l.O)(),T=Object(l.t)("div");for(let e=0;e<z.length;e+=1)z[e].c();this.h()},l(e){Object(l.I)('[data-svelte="svelte-mpf12n"]',document.head).forEach(l.s),t=Object(l.l)(e),N&&N.l(e),c=Object(l.l)(e),s=Object(l.k)(e,"DIV",{class:!0});var y=Object(l.i)(s);b=Object(l.k)(y,"DIV",{class:!0});var E=Object(l.i)(b);a=Object(l.k)(E,"BUTTON",{});var w=Object(l.i)(a);n=Object(l.m)(w,"Add"),w.forEach(l.s),O=Object(l.l)(E),j=Object(l.k)(E,"UL",{});var x=Object(l.i)(j);for(let e=0;e<B.length;e+=1)B[e].l(x);x.forEach(l.s),i=Object(l.l)(E),Object(l.j)(r.$$.fragment,E),o=Object(l.l)(E),d=Object(l.k)(E,"DIV",{class:!0});var D=Object(l.i)(d);u=Object(l.k)(D,"BUTTON",{});var A=Object(l.i)(u);f=Object(l.m)(A,I),A.forEach(l.s),D.forEach(l.s),E.forEach(l.s),h=Object(l.l)(y),g=Object(l.k)(y,"DIV",{class:!0});var U=Object(l.i)(g);v=Object(l.k)(U,"DIV",{class:!0});var S=Object(l.i)(v);m=Object(l.k)(S,"BUTTON",{});var $=Object(l.i)(m);p=Object(l.m)($,"Reload"),$.forEach(l.s),S.forEach(l.s),k=Object(l.l)(U),T=Object(l.k)(U,"DIV",{class:!0});var C=Object(l.i)(T);for(let e=0;e<z.length;e+=1)z[e].l(C);C.forEach(l.s),U.forEach(l.s),y.forEach(l.s),this.h()},h(){document.title="Sapper RSS Reader",Object(l.g)(d,"class","container svelte-1k4ejlc"),Object(l.g)(b,"class","side-bar svelte-1k4ejlc"),Object(l.g)(v,"class","articles-actions svelte-1k4ejlc"),Object(l.g)(T,"class","articles-list"),Object(l.g)(g,"class","articles svelte-1k4ejlc"),Object(l.g)(s,"class","container svelte-1k4ejlc")},m(I,x){Object(l.A)(I,t,x),N&&N.m(I,x),Object(l.A)(I,c,x),Object(l.A)(I,s,x),Object(l.e)(s,b),Object(l.e)(b,a),Object(l.e)(a,n),Object(l.e)(b,O),Object(l.e)(b,j);for(let e=0;e<B.length;e+=1)B[e].m(j,null);Object(l.e)(b,i),Object(l.D)(r,b,null),Object(l.e)(b,o),Object(l.e)(b,d),Object(l.e)(d,u),Object(l.e)(u,f),Object(l.e)(s,h),Object(l.e)(s,g),Object(l.e)(g,v),Object(l.e)(v,m),Object(l.e)(m,p),Object(l.e)(g,k),Object(l.e)(g,T);for(let e=0;e<z.length;e+=1)z[e].m(T,null);y=!0,E||(w=[Object(l.C)(a,"click",e[9]),Object(l.C)(u,"click",e[17]),Object(l.C)(m,"click",e[8])],E=!0)},p(e,[t]){if(e[0]?N?N.p(e,t):(N=U(e),N.c(),N.m(c.parentNode,c)):N&&(N.d(1),N=null),2052&t){let c;for(L=e[2],c=0;c<L.length;c+=1){const l=A(e,L,c);B[c]?B[c].p(l,t):(B[c]=S(l),B[c].c(),B[c].m(j,null))}for(;c<B.length;c+=1)B[c].d(1);B.length=L.length}const s={};if(8&t&&(s.tags=e[3]),16&t&&(s.selectedTags=e[4]),32&t&&(s.untaggedSelected=e[5]),64&t&&(s.showDeleteTag=!e[6]),r.$set(s),(!y||64&t)&&I!==(I=e[6]?"Unlock Tags":"LOCK TAGS")&&Object(l.M)(f,I),448&t){const c=e[7];Object(l.y)(),z=Object(l.T)(z,t,Q,1,e,c,C,T,l.H,$,null,D),Object(l.h)()}},i(e){if(!y){Object(l.R)(r.$$.fragment,e);for(let e=0;e<R.length;e+=1)Object(l.R)(z[e]);y=!0}},o(e){Object(l.S)(r.$$.fragment,e);for(let e=0;e<z.length;e+=1)Object(l.S)(z[e]);y=!1},d(e){e&&Object(l.s)(t),N&&N.d(e),e&&Object(l.s)(c),e&&Object(l.s)(s),Object(l.r)(B,e),Object(l.q)(r);for(let e=0;e<z.length;e+=1)z[e].d();E=!1,Object(l.J)(w)}}}function C(e,t,c){let l=!1,b="http://export.arxiv.org/rss/cs.AI",a=[],n=null,j=[],i=[],r=[],o=!0,d=!0;Object(s.c)(async()=>{n=O(),c(2,j=await n.feedList()),u()});const u=async()=>{const e=(await async function(e){const t=new p.a,c=e.map(e=>t.parseURL("https://cors-anywhere.herokuapp.com/"+e));return(await Promise.allSettled(c)).reduce((e,t)=>("fulfilled"===t.status?e.push(t.value):console.log(t.value),e),[])}(j)).map(e=>{const{items:t,...c}=e;return t.map(e=>({...e,feed:c}))}).reduce((e,t)=>e.concat(t),[]),t=await n.getAllItems();c(18,a=function(e,t){const c=new Map;return e.forEach(e=>{c.set(e.link,e)}),t.forEach(e=>{c.set(e.link,e)}),Array.from(c.values())}(e,t).sort((e,t)=>new Date(t.isoDate)-new Date(e.isoDate))),function(){let e=[];a.forEach(t=>{t.tags&&t.tags.forEach(t=>{i.includes(t)||(e=[t,...e])})}),c(3,i=[...e,...i]),c(4,r=[...e,...r])}()};const f=async e=>{await n.deleteFeed(e)&&c(2,j=j.filter(t=>t!==e))};let h;return e.$$.update=()=>{262192&e.$$.dirty&&c(7,h=function(e,t,c){return e.filter(e=>{return c&&((l=e.tags)===[]||null==l)||e.tags&&e.tags.some(e=>t.includes(e));var l})}(a,r,o))},[l,b,j,i,r,o,d,h,u,()=>{c(0,l=!l)},async()=>{c(0,l=!1);await n.addFeed(b)&&c(2,j=[b,...j])},f,function(e){c(4,r=e)},function(e){c(5,o=e)},function(e){console.log(e);let t=[];a.forEach(c=>{if(c.tags&&c.tags.includes(e)){const l={...c,tags:c.tags.filter(t=>t!==e)};t.push(n.saveItem(l))}}),c(3,i=i.filter(t=>t!==e)),c(4,r=r.filter(t=>t!==e)),Promise.all(t).then(u)},function(){b=this.value,c(1,b)},e=>f(e),()=>c(6,d=!d)]}class N extends l.b{constructor(e){var t;super(),document.getElementById("svelte-1k4ejlc-style")||((t=Object(l.t)("style")).id="svelte-1k4ejlc-style",t.textContent=".container.svelte-1k4ejlc{display:flex}.side-bar.svelte-1k4ejlc{display:flex;padding:10px;flex-direction:column}.articles.svelte-1k4ejlc{display:flex;flex:1;padding:10px;flex-direction:column}.add-feed.svelte-1k4ejlc{display:flex}.feed-input.svelte-1k4ejlc{flex:1}.articles-actions.svelte-1k4ejlc{display:flex}",Object(l.e)(document.head,t)),Object(l.z)(this,e,C,z,l.K,{})}}t.default=N},61:function(e,t){},63:function(e,t){}}]);