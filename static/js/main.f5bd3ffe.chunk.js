(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,a){e.exports=a.p+"static/media/logo.31e29312.png"},141:function(e,t,a){e.exports={Logo:"Logo_Logo__1N0xH"}},142:function(e,t,a){e.exports={Navigation:"Navigation_Navigation__1tTPb"}},143:function(e,t,a){e.exports={Content:"Layout_Content__3H3X8"}},144:function(e,t,a){e.exports={Container:"HomeContainner_Container__Ks_mI"}},145:function(e,t,a){e.exports={ListContainer:"RecipeList_ListContainer__3B9RS"}},152:function(e,t,a){e.exports=a(456)},156:function(e,t,a){},157:function(e,t,a){},34:function(e,t,a){e.exports={ItemContainer:"RecipeItem_ItemContainer__35fDr",recipe__link:"RecipeItem_recipe__link__2uimQ",likes__link:"RecipeItem_likes__link__3e3cx","recipe__link--active":"RecipeItem_recipe__link--active__360_d","likes__link--active":"RecipeItem_likes__link--active__2dc_z",recipe__fig:"RecipeItem_recipe__fig__3hAbV",recipe__name:"RecipeItem_recipe__name__3_8Ne",recipe__author:"RecipeItem_recipe__author__302Ch",recipe__pages:"RecipeItem_recipe__pages__3NdJx","recipe__btn--prev":"RecipeItem_recipe__btn--prev__VSBHm","recipe__btn--next":"RecipeItem_recipe__btn--next__1D5Rx"}},43:function(e,t,a){e.exports={SearchDiv:"Search_SearchDiv__3cPKc",Search:"Search_Search__2SQmI",Search__field:"Search_Search__field__gV0d3",btn:"Search_btn__3rwyF"}},44:function(e,t,a){e.exports={Toolbar:"ToolBar_Toolbar__3Q-VG",Logo:"ToolBar_Logo__XZzMR",Search:"ToolBar_Search__Wy5EB",DesktopOnly:"ToolBar_DesktopOnly__2W-8f"}},456:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(15),i=a.n(r),l=(a(156),a(157),a(137)),_=a(138),o=a(150),s=a(139),m=a(151),u=function(e){return e.children},p=a(140),f=a.n(p),v=a(141),E=a.n(v),h=function(e){return c.a.createElement("div",{className:E.a.Logo,style:{height:e.height}},c.a.createElement("img",{src:f.a,alt:"MyBurger"}))},g=a(43),b=a.n(g),d=a(149),y=function(e){return c.a.createElement("div",{className:b.a.SearchDiv},c.a.createElement("form",{className:b.a.Search},c.a.createElement("input",{type:"text",className:b.a.Search__field,placeholder:"Search over 1,000,000 recipes..."}),c.a.createElement("button",{className:b.a.btn},c.a.createElement(d.a,null),c.a.createElement("span",null,"Search"))))},N=a(84),k=a.n(N),I=function(e){return c.a.createElement("li",{className:k.a.NavigationItem},c.a.createElement("a",{href:e.link,className:e.active?k.a.active:null},e.children))},L=a(142),S=a.n(L),j=function(e){return c.a.createElement("ul",{className:S.a.Navigation},c.a.createElement(I,{link:"/",active:!0},"Home"),c.a.createElement(I,{link:"/"},"Recipes"))},C=a(44),O=a.n(C),x=function(e){return c.a.createElement("header",{className:O.a.Toolbar},c.a.createElement("div",{className:O.a.Logo},c.a.createElement(h,null)),c.a.createElement("div",{className:O.a.Search},c.a.createElement(y,null)),c.a.createElement("nav",{className:O.a.Nav},c.a.createElement(j,null)))},R=a(143),T=a.n(R),D=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(_.a)(t,[{key:"render",value:function(){return c.a.createElement(u,null,c.a.createElement(x,null),c.a.createElement("main",{className:T.a.Content},this.props.children))}}]),t}(n.Component),w=a(22),B=a(144),F=a.n(B),P=a(32),z=a.n(P),H=a(56),V=a(85),J=a.n(V),K=function(e){return c.a.createElement("li",{onClick:function(){return e.setRecipeType(e.name)}},c.a.createElement("a",{className:J.a.List__link,href:"#"},c.a.createElement("div",null,c.a.createElement("h4",{className:J.a.Item__name},e.name))))},M=a(86),Q=a.n(M),W=function(e){var t=Object.values(e.categoryData.category).map(function(t){return c.a.createElement(K,{name:t,key:t,setRecipeType:e.setRecipeType})});return c.a.createElement("div",{className:Q.a.ListContainer},c.a.createElement("ul",{className:Q.a.List},t))},X=a(33);var q=function(e){var t=Object(n.useState)({}),a=Object(w.a)(t,2),r=a[0],i=a[1],l=Object(n.useState)("category"),_=Object(w.a)(l,2),o=_[0];return _[1],Object(n.useEffect)(function(){var e=function(){var e=Object(H.a)(z.a.mark(function e(){var t,a;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://demo6174807.mockable.io/"+o);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(a);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(X.isEmpty)(r)&&e()},[r,o]),Object(X.isEmpty)(r)?null:c.a.createElement(W,{categoryData:r,setRecipeType:e.setRecipeType})},A=a(34),G=a.n(A),Z=function(e){return c.a.createElement("div",{className:G.a.ItemContainer},c.a.createElement("div",null,c.a.createElement("a",{className:G.a.recipe__link,href:"#"},c.a.createElement("figure",{className:G.a.recipe__fig},c.a.createElement("img",{src:e.recipe.image_url,alt:e.recipe.title})))),c.a.createElement("div",null,c.a.createElement("h4",{className:G.a.recipe__name},e.recipe.title)),c.a.createElement("div",null,c.a.createElement("p",{className:G.a.recipe__author},e.recipe.publisher)))},U=a(145),Y=a.n(U),$=function(e){var t=Object.values(e.recipeData.recipes).map(function(e){return c.a.createElement(Z,{recipe:e,key:e.recipe_id})});return c.a.createElement("div",{className:Y.a.ListContainer},t)};var ee=function(e){var t=Object(n.useState)({}),a=Object(w.a)(t,2),r=a[0],i=a[1],l=Object(n.useState)(e.recipeType),_=Object(w.a)(l,2),o=_[0],s=_[1];return o!==e.recipeType&&(s(e.recipeType),i({})),Object(n.useEffect)(function(){var e=function(){var e=Object(H.a)(z.a.mark(function e(){var t,a;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://forkify-api.herokuapp.com/api/search?q="+o);case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,i(a);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(X.isEmpty)(r)&&e()},[r,o]),Object(X.isEmpty)(r)?null:c.a.createElement($,{recipeData:r})};a(158);var te=function(){var e=Object(n.useState)("pizza"),t=Object(w.a)(e,2),a=t[0],r=t[1];return c.a.createElement(u,null,c.a.createElement("div",{className:F.a.Container},c.a.createElement(q,{setRecipeType:r}),c.a.createElement(ee,{recipeType:a})))};var ae=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(D,null,c.a.createElement(te,null)))},ne=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,457)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)})};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(ae,null)),document.getElementById("root")),ne()},84:function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__3B2Kr",active:"NavigationItem_active__PI9kc"}},85:function(e,t,a){e.exports={List__li:"CategoryItem_List__li__PXdRs",List__link:"CategoryItem_List__link__iW8mu",Item__name:"CategoryItem_Item__name__35weT"}},86:function(e,t,a){e.exports={ListContainer:"CategoryList_ListContainer__2FBL1",List:"CategoryList_List__1uDqz"}}},[[152,1,2]]]);
//# sourceMappingURL=main.f5bd3ffe.chunk.js.map