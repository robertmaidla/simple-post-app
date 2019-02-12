(function(t){function e(e){for(var r,s,c=e[0],u=e[1],i=e[2],l=0,f=[];l<c.length;l++)s=c[l],a[s]&&f.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var i=0;i<c.length;i++)e(c[i]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"2de3":function(t,e,n){},"3ab9":function(t,e,n){"use strict";var r=n("2de3"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("PostComponent")],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("Latest Posts")]),n("div",{staticClass:"create-post"},[n("label",{attrs:{for:"create-post"}},[t._v("Say Something...")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],attrs:{type:"text",id:"create-post",placeholder:"Create a post"},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),n("button",{on:{click:t.createPost}},[t._v("Post!")])]),n("hr"),t.error?n("p",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),n("div",{staticClass:"posts-container"},t._l(t.posts,function(e,r){return n("div",{key:e._id,staticClass:"post",attrs:{item:e,index:r},on:{dblclick:function(n){return t.deletePost(e._id)}}},[t._v("\n      "+t._s(e.createdAt.getDate()+"/"+e.createdAt.getMonth()+"/\n          "+e.createdAt.getFullYear())+"\n      "),n("p",{staticClass:"text"},[t._v(t._s(e.text))])])}),0)])},c=[],u=(n("96cf"),n("3b8d")),i=n("cebc"),p=n("795b"),l=n.n(p),f=n("d225"),d=n("b0b4"),v=n("7338"),h=n.n(v),b="api/posts/",m=function(){function t(){Object(f["a"])(this,t)}return Object(d["a"])(t,null,[{key:"getPosts",value:function(){return new l.a(function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e,n){var r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.a.get(b);case 3:r=t.sent,a=r.data,e(a.map(function(t){return Object(i["a"])({},t,{createdAt:new Date(t.createdAt)})})),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),n(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e,n){return t.apply(this,arguments)}}())}},{key:"insertPost",value:function(t){return h.a.post(b,{text:t})}},{key:"deletePost",value:function(t){return h.a.delete("".concat(b).concat(t))}}]),t}(),g=m,x={name:"PostComponent",data:function(){return{posts:[],error:"",text:""}},created:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,g.getPosts();case 3:this.posts=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),this.error=t.t0.message;case 9:case"end":return t.stop()}},t,this,[[0,6]])}));function e(){return t.apply(this,arguments)}return e}(),methods:{createPost:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.insertPost(this.text);case 2:return t.next=4,g.getPosts();case 4:this.posts=t.sent;case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),deletePost:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,g.deletePost(e);case 2:return t.next=4,g.getPosts();case 4:this.posts=t.sent;case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()}},w=x,y=(n("3ab9"),n("2877")),P=Object(y["a"])(w,s,c,!1,null,"15a7b36c",null),_=P.exports,O={name:"app",components:{PostComponent:_}},j=O,k=(n("034f"),Object(y["a"])(j,a,o,!1,null,null,null)),C=k.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(C)}}).$mount("#app")},"64a9":function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.41208a48.js.map