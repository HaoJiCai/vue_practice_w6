(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22bfb130"],{"0b42":function(t,n,e){var a=e("da84"),r=e("e8b5"),c=e("68ee"),i=e("861d"),o=e("b622"),s=o("species"),u=a.Array;t.exports=function(t){var n;return r(t)&&(n=t.constructor,c(n)&&(n===u||r(n.prototype))?n=void 0:i(n)&&(n=n[s],null===n&&(n=void 0))),void 0===n?u:n}},"1dde":function(t,n,e){var a=e("d039"),r=e("b622"),c=e("2d00"),i=r("species");t.exports=function(t){return c>=51||!a((function(){var n=[],e=n.constructor={};return e[i]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"65f0":function(t,n,e){var a=e("0b42");t.exports=function(t,n){return new(a(t))(0===n?0:n)}},8418:function(t,n,e){"use strict";var a=e("a04b"),r=e("9bf2"),c=e("5c6c");t.exports=function(t,n,e){var i=a(n);i in t?r.f(t,i,c(0,e)):t[i]=e}},"99af":function(t,n,e){"use strict";var a=e("23e7"),r=e("da84"),c=e("d039"),i=e("e8b5"),o=e("861d"),s=e("7b0b"),u=e("07fa"),b=e("8418"),l=e("65f0"),f=e("1dde"),d=e("b622"),v=e("2d00"),p=d("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",j=r.TypeError,O=v>=51||!c((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),m=f("concat"),w=function(t){if(!o(t))return!1;var n=t[p];return void 0!==n?!!n:i(t)},x=!O||!m;a({target:"Array",proto:!0,forced:x},{concat:function(t){var n,e,a,r,c,i=s(this),o=l(i,0),f=0;for(n=-1,a=arguments.length;n<a;n++)if(c=-1===n?i:arguments[n],w(c)){if(r=u(c),f+r>g)throw j(h);for(e=0;e<r;e++,f++)e in c&&b(o,f,c[e])}else{if(f>=g)throw j(h);b(o,f++,c)}return o.length=f,o}})},a7f3:function(t,n,e){"use strict";e.r(n);var a=e("7a23");function r(t,n,e,r,c,i){var o=Object(a["y"])("frontEndNavBar"),s=Object(a["y"])("router-view");return Object(a["t"])(),Object(a["f"])(a["a"],null,[Object(a["i"])(o),Object(a["i"])(s)],64)}var c={class:"navbar navbar-expand-lg navbar-dark bg-dark"},i={class:"container-fluid"},o={class:"collapse navbar-collapse",id:"navbarNav"},s={class:"navbar-nav"},u={class:"nav-item"},b=Object(a["h"])("首頁"),l={class:"nav-item"},f=Object(a["h"])("產品列表"),d={class:"nav-item"},v={class:"bi bi-cart-fill position-relative"},p=Object(a["h"])(" 購物車 "),g={class:"position-absolute top-0 start-100 translate-middle badge border-light rounded-pill bg-danger"},h={class:"navbar-nav"},j=Object(a["g"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",class:"bi bi-person",viewBox:"0 0 16 16"},[Object(a["g"])("path",{d:"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"})],-1),O=Object(a["h"])(" 後台登入 ");function m(t,n,e,r,m,w){var x=Object(a["y"])("router-link");return Object(a["t"])(),Object(a["f"])("nav",c,[Object(a["g"])("div",i,[Object(a["g"])("div",o,[Object(a["g"])("ul",s,[Object(a["g"])("li",u,[Object(a["i"])(x,{to:"/",class:"nav-link"},{default:Object(a["E"])((function(){return[b]})),_:1})]),Object(a["g"])("li",l,[Object(a["i"])(x,{to:"/saleProductsPage",class:"nav-link"},{default:Object(a["E"])((function(){return[f]})),_:1})]),Object(a["g"])("li",d,[Object(a["i"])(x,{to:"/shoppingCartPage",class:"nav-link"},{default:Object(a["E"])((function(){return[Object(a["g"])("i",v,[p,Object(a["g"])("span",g,Object(a["A"])(m.shoppingCartNum),1)])]})),_:1})])])]),Object(a["g"])("ul",h,[Object(a["i"])(x,{to:"/login",class:"nav-link"},{default:Object(a["E"])((function(){return[j,O]})),_:1})])])])}e("99af");var w=e("b38b"),x={data:function(){return{shoppingCartNum:0}},methods:{getShoppingCart:function(){var t=this,n="".concat("https://vue3-course-api.hexschool.io/v2/api/").concat("jimmycai","/cart");this.$http.get(n).then((function(n){t.shoppingCartNum=n.data.data.carts.length}))}},created:function(){var t=this;this.getShoppingCart(),w["a"].on("getShoppingCartNum",(function(n){t.shoppingCartNum=n}))}},y=e("6b0d"),C=e.n(y);const k=C()(x,[["render",m]]);var N=k,E={components:{frontEndNavBar:N}};const A=C()(E,[["render",r]]);n["default"]=A},b38b:function(t,n,e){"use strict";var a=function(t){return{all:t=t||new Map,on:function(n,e){var a=t.get(n);a?a.push(e):t.set(n,[e])},off:function(n,e){var a=t.get(n);a&&(e?a.splice(a.indexOf(e)>>>0,1):t.set(n,[]))},emit:function(n,e){var a=t.get(n);a&&a.slice().map((function(t){t(e)})),(a=t.get("*"))&&a.slice().map((function(t){t(n,e)}))}}},r=a();n["a"]=r},e8b5:function(t,n,e){var a=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}}}]);
//# sourceMappingURL=chunk-22bfb130.39592a55.js.map