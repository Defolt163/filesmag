(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[799],{2711:function(e,t,a){Promise.resolve().then(a.bind(a,5973))},5973:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var s=a(7437),c=a(2265),n=a(8518),r=a(6041);a(5535);var i=a(1396),l=a.n(i);function o(e){let t;(0,c.useEffect)(()=>{(0,r.ej)()});let a=(0,r.ej)("UserData"),n="",i="";if(a)try{t=JSON.parse(a),n=null!==t.userId?t.userId:"",i=null!==t.logginin?t.logginin:""}catch(e){console.error(e)}let[o,d]=(0,c.useState)([]);(0,c.useEffect)(()=>{(0,r.a2)().then(e=>d(e))},[]);let[u,h]=(0,c.useState)([]);async function m(){return fetch("https://65605efe83aba11d99d0b111.mockapi.io/Users/".concat(n)).then(e=>e.json()).then(e=>e.cart)}(0,c.useEffect)(()=>{o.length>0&&h(o.map(()=>1))},[o]);let f=e=>{if(u[e]>1){let t=[...u];t[e]=t[e]-1,h(t)}},p=e=>{let t=[...u];t[e]=t[e]+1,h(t)},[j,N]=(0,c.useState)([]);(0,c.useEffect)(()=>{m().then(e=>N(e))},[]);let[x,I]=(0,c.useState)([]);function v(){if(j&&null!==j.length&&j.length){let e=j.map(e=>fetch("https://64f493b1932537f4051a7cde.mockapi.io/Products/".concat(e)).then(e=>e.json()));Promise.all(e).then(e=>{I(e)}).catch(e=>{console.log(e)})}}(0,c.useEffect)(()=>{v()},[j]);let g=x.filter(e=>j.includes(e.id));async function C(e){let t=await fetch("https://65605efe83aba11d99d0b111.mockapi.io/Users/".concat(n)),a=await t.json(),s=a.cart.filter(t=>t!==e);await fetch("https://65605efe83aba11d99d0b111.mockapi.io/Users/".concat(n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:s})}),N(s),alert("Удалено")}let b=g.reduce((e,t,a)=>e+t.price*u[a],0);return(0,s.jsxs)("div",{className:"ShoppingCart",children:[(0,s.jsxs)("div",{className:"ShoppingCartWrapper",children:[(0,s.jsx)("div",{className:"PageSubHeader PageSubHeaderCart",children:"Корзина"}),(0,s.jsxs)("div",{className:"ShoppingCartTable",children:[(0,s.jsx)("div",{className:"ShoppingCartTableItem",children:"Товар"}),(0,s.jsx)("div",{className:"ShoppingCartTableItem",children:"Количество"}),(0,s.jsx)("div",{className:"ShoppingCartTableItem",children:"Стоимость"}),(0,s.jsx)("div",{className:"ShoppingCartTableItem",children:"Итого"})]}),(0,s.jsx)("div",{className:"ShoppingCartItems",children:j&&j.length>0?g.map((e,t)=>(0,s.jsxs)("div",{className:"CartItem",children:[(0,s.jsxs)("div",{className:"CartItemProductInfo",children:[(0,s.jsx)("div",{style:{background:"url(".concat(e.image,") center center/cover no-repeat")},className:"CartItemImage"}),(0,s.jsxs)("div",{className:"CartItemInfo",children:[(0,s.jsxs)("div",{className:"CartItemInfoBlock",children:[(0,s.jsx)("div",{className:"CartItemName",children:e.name}),(0,s.jsx)("div",{className:"CartItemColor",children:"Black"}),(0,s.jsx)("div",{className:"CartItemSize",children:"Размер: 52"}),(0,s.jsx)("div",{className:"CartItemPiece CartItemPieceMobile",children:(0,s.jsxs)("div",{className:"CartItemPieceWrapper",children:[(0,s.jsx)("div",{onClick:()=>f(t),className:"CartItemPieceIteration",children:"-"}),(0,s.jsx)("div",{className:"PiecesNumber",children:u[t]}),(0,s.jsx)("div",{onClick:()=>p(t),className:"CartItemPieceIteration",children:"+"})]})})]}),(0,s.jsxs)("div",{className:"DeleteCartItem DeleteCartItemDesktop",onClick:()=>{C(e.id),v()},children:["Удалить ",(0,s.jsx)("i",{className:"fa-solid fa-xmark"})]})]})]}),(0,s.jsx)("div",{className:"CartItemPiece CartItemPieceDesktop",children:(0,s.jsxs)("div",{className:"CartItemPieceWrapper",children:[(0,s.jsx)("div",{onClick:()=>f(t),className:"CartItemPieceIteration",children:"-"}),(0,s.jsx)("div",{className:"PiecesNumber",children:u[t]}),(0,s.jsx)("div",{onClick:()=>p(t),className:"CartItemPieceIteration",children:"+"})]})}),(0,s.jsxs)("div",{className:"CartItemPrice CartItemPriceSubTotal",children:[e.price," $"]}),(0,s.jsxs)("div",{className:"CartItemPrice CartItemPriceEnd",children:[e.price*u[t]," $"]})]},e.id)):(0,s.jsx)("div",{className:"PageSubHeader",children:!0===i?"Здесь пока ничего нет":(0,s.jsxs)("div",{children:["Чтобы начать покупки вам необходимо ",(0,s.jsx)(l(),{href:"/profile/login",children:"Авторизоваться"})," или ",(0,s.jsx)(l(),{href:"/profile/register",children:"Зарегистрироваться"})]})})})]}),(0,s.jsx)("div",{className:"CartDelivery",children:(0,s.jsxs)("div",{style:{width:"".concat(e.authStatusButton)},className:"CartDeliveryBlock",children:[(0,s.jsxs)("div",{className:"CartDeliveryTotal",children:["Итог: \xa0  ",(0,s.jsxs)("strong",{children:[b,"$"]})]}),(0,s.jsx)("div",{className:"CartDeliverySendButton",children:"Оформить"})]})})]})}function d(){let e;(0,c.useEffect)(()=>{(0,r.ej)()});let t=(0,r.ej)("UserData"),a="";if(t)try{e=JSON.parse(t),a=null!==e.logginin?e.logginin:""}catch(e){console.error(e)}let[i,l]=(0,c.useState)(""),[d,u]=(0,c.useState)(""),[h,m]=(0,c.useState)("");return(0,c.useEffect)(()=>{!0===a?l("block"):l("none"),!0===a?u(""):u("100%"),!0===a?m(""):m("95%")}),(0,c.useEffect)(()=>{document.title="Корзина"},[]),(0,s.jsx)("div",{className:"ProfilePage",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"PageHeader",children:"Мой Аккаунт"}),(0,s.jsxs)("div",{className:"ProfilePageWrapper",children:[(0,s.jsx)(n.Z,{authStatus:i,CartItem:"active"}),(0,s.jsx)("div",{className:"PageInfo",style:{width:"".concat(d)},children:(0,s.jsx)(o,{authStatusButton:h})})]})]})})}a(6409)},8518:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var s=a(7437),c=a(2265),n=a(1396),r=a.n(n);a(7347);var i=a(6041);function l(e){let t;(0,c.useEffect)(()=>{(0,i.ej)()});let a=(0,i.ej)("UserData");if(a)try{t=JSON.parse(a),null!==t.userId&&t.userId,null!==t.logginin&&t.logginin}catch(e){console.error(e)}let[n,l]=(0,c.useState)([]),[o,d]=(0,c.useState)([]);return(0,c.useEffect)(()=>{(0,i.oY)(e=>{l(e.name),d(e.surname)})},[]),(0,s.jsx)("div",{style:{display:"".concat(e.authStatus)},className:"AccountMenu",children:(0,s.jsxs)("div",{className:"AccountMenuWrapper",children:[(0,s.jsxs)("div",{className:"ProfileName",children:[n," ",o]}),(0,s.jsxs)("div",{className:"AccountMenuItems",children:[(0,s.jsx)(r(),{href:"/profile",className:"AccountMenuItem ".concat(e.ProfileItem),children:"Аккаунт"}),(0,s.jsx)(r(),{href:"/profile/address",className:"AccountMenuItem ".concat(e.AddressItem),children:"Адреса"}),(0,s.jsx)(r(),{href:"/profile/orders",className:"AccountMenuItem ".concat(e.OrdersItem),children:"Заказы"}),(0,s.jsx)(r(),{href:"/profile/cart",className:"AccountMenuItem ".concat(e.CartItem),children:"Корзина"}),t&&!0===t.logginin?(0,s.jsx)(r(),{href:"/",className:"AccountMenuItem ".concat(e.LogOutItem),onClick:()=>{document.cookie="undefined=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"},children:"Выйти из аккаунта"}):(0,s.jsx)(r(),{href:"/profile/register",className:"AccountMenuItem ".concat(e.LogOutItem),children:"Зарегистрироваться или войти"})]})]})})}},6041:function(e,t,a){"use strict";let s;a.d(t,{Ej:function(){return o},Xq:function(){return l},a2:function(){return i},ej:function(){return u},oY:function(){return d}});let c=u("UserData"),n="",r="";if(c)try{s=JSON.parse(c),n=null!==s.userId?s.userId:"",r=null!==s.logginin?s.logginin:""}catch(e){console.error(e)}async function i(){return fetch("https://64f493b1932537f4051a7cde.mockapi.io/Products").then(e=>e.json()).then(e=>e)}function l(e){!0===r?fetch("https://65605efe83aba11d99d0b111.mockapi.io/Users/".concat(n),{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(t=>{let a=t.cart||[],s=[...a,e];return fetch("https://65605efe83aba11d99d0b111.mockapi.io/Users/".concat(n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:s})})}).then(e=>e.json(),alert("Добавлено")).catch(e=>{console.error(e)}):alert("Вам необходимо авторизоваться")}async function o(e){await fetch("https://65605efe83aba11d99d0b111.mockapi.io/Users/".concat(n)).then(e=>e.json()).then(t=>{e(t)})}async function d(e){await fetch("https://65605efe83aba11d99d0b111.mockapi.io/Users/".concat(n)).then(e=>e.json()).then(t=>{e(t)})}function u(e){{let t=e+"=",a=decodeURIComponent(document.cookie).split(";");for(let e=0;e<a.length;e++){let s=a[e];for(;" "===s.charAt(0);)s=s.substring(1);if(0===s.indexOf(t))return s.substring(t.length,s.length)}}return""}},6409:function(){},7347:function(){},5535:function(){}},function(e){e.O(0,[176,971,472,744],function(){return e(e.s=2711)}),_N_E=e.O()}]);