(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{2052:function(e,t,n){Promise.resolve().then(n.bind(n,5306))},8518:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var s=n(7437),a=n(2265),c=n(1396),r=n.n(c);n(7347);var i=n(6041);function l(e){let t;(0,a.useEffect)(()=>{(0,i.ej)()});let n=(0,i.ej)("UserData");if(n)try{t=JSON.parse(n),null!==t.userId&&t.userId,null!==t.logginin&&t.logginin}catch(e){console.error(e)}let[c,l]=(0,a.useState)([]),[o,u]=(0,a.useState)([]);return(0,a.useEffect)(()=>{(0,i.oY)(e=>{l(e.name),u(e.surname)})},[]),(0,s.jsx)("div",{style:{display:"".concat(e.authStatus)},className:"AccountMenu",children:(0,s.jsxs)("div",{className:"AccountMenuWrapper",children:[(0,s.jsxs)("div",{className:"ProfileName",children:[c," ",o]}),(0,s.jsxs)("div",{className:"AccountMenuItems",children:[(0,s.jsx)(r(),{href:"/profile",className:"AccountMenuItem ".concat(e.ProfileItem),children:"Аккаунт"}),(0,s.jsx)(r(),{href:"/profile/address",className:"AccountMenuItem ".concat(e.AddressItem),children:"Адреса"}),(0,s.jsx)(r(),{href:"/profile/orders",className:"AccountMenuItem ".concat(e.OrdersItem),children:"Заказы"}),(0,s.jsx)(r(),{href:"/profile/cart",className:"AccountMenuItem ".concat(e.CartItem),children:"Корзина"}),t&&!0===t.logginin?(0,s.jsx)(r(),{href:"/",className:"AccountMenuItem ".concat(e.LogOutItem),onClick:()=>{document.cookie="undefined=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"},children:"Выйти из аккаунта"}):(0,s.jsx)(r(),{href:"/profile/register",className:"AccountMenuItem ".concat(e.LogOutItem),children:"Зарегистрироваться или войти"})]})]})})}},5306:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var s=n(7437),a=n(2265),c=n(8518),r=n(6161);n(5022);var i=n(6041);function l(){let e;(0,a.useEffect)(()=>{(0,i.ej)()});let t=(0,i.ej)("UserData"),n="";if(t)try{e=JSON.parse(t),n=null!==e.userId?e.userId:"",null!==e.logginin&&e.logginin}catch(e){console.error(e)}let[c,l]=(0,a.useState)(""),[o,u]=(0,a.useState)(""),[d,h]=(0,a.useState)(""),[m,f]=(0,a.useState)(""),[p,j]=(0,a.useState)(""),[g,N]=(0,a.useState)(""),v={name:""===o?n.name:o,surname:""===c?n.surname:c,email:""===d?n.email:d,password:""!==g&&""!==m||m===n.password&&p===g?p:n.password};async function x(){await fetch("https://65605efe83aba11d99d0b111.mockapi.io/Users/".concat(n),{method:"PUT",body:JSON.stringify(v),headers:{"content-type":"application/json"}}).then(e=>{v=e.json(),alert("OK")}).catch(e=>{console.log("Error",e),alert("Произошла ошибка изменения, повторите снова")})}return(0,s.jsx)("div",{className:"AccountSettings",children:(0,s.jsxs)("div",{className:"AccountSettingsWrapper",children:[(0,s.jsx)("div",{className:"PageSubHeader PageSubHeaderCart",children:"Контактные данные"}),(0,s.jsxs)("div",{className:"AccountSettingsProfileInfo",children:[(0,s.jsxs)("div",{className:"InputItem",children:[(0,s.jsx)("div",{placeholder:"Имя",className:"InputName",children:"Имя"}),(0,s.jsx)(r.Z,{placeholder:"Ваше Имя",value:o,onChange:e=>u(e.target.value)})]}),(0,s.jsxs)("div",{className:"InputItem",children:[(0,s.jsx)("div",{className:"InputName",children:"Фамилия"}),(0,s.jsx)(r.Z,{placeholder:"Ваша Фамилия",value:c,onChange:e=>l(e.target.value)})]}),(0,s.jsxs)("div",{className:"InputItem",children:[(0,s.jsx)("div",{className:"InputName",children:"Email"}),(0,s.jsx)(r.Z,{placeholder:"Ваш Email",value:d,onChange:e=>h(e.target.value)})]})]}),(0,s.jsx)("div",{className:"PageSubHeader PageSubHeaderCart",children:"Настройки пароля"}),(0,s.jsxs)("div",{className:"AccountSettingsProfileInfo",children:[(0,s.jsxs)("div",{className:"InputItem",children:[(0,s.jsx)("div",{className:"InputName",children:"Старый пароль"}),(0,s.jsx)(r.Z,{type:"password",value:m,onChange:e=>f(e.target.value)})]}),(0,s.jsxs)("div",{className:"InputItem",children:[(0,s.jsx)("div",{className:"InputName",children:"Новый пароль"}),(0,s.jsx)(r.Z,{type:"password",value:p,onChange:e=>j(e.target.value)})]}),(0,s.jsxs)("div",{className:"InputItem",children:[(0,s.jsx)("div",{className:"InputName",children:"Повторите новый пароль"}),(0,s.jsx)(r.Z,{type:"password",value:g,onChange:e=>N(e.target.value)})]}),(0,s.jsx)("div",{className:"SetPasswordButton",onClick:()=>{x()},children:"Сохранить изменения"})]})]})})}function o(){return(0,a.useEffect)(()=>{document.title="Профиль"},[]),(0,s.jsx)("div",{className:"ProfilePage",children:(0,s.jsxs)("div",{className:"container",children:[(0,s.jsx)("div",{className:"PageHeader",children:"Мой Аккаунт"}),(0,s.jsxs)("div",{className:"ProfilePageWrapper",children:[(0,s.jsx)(c.Z,{ProfileItem:"active"}),(0,s.jsx)("div",{className:"PageInfo",children:(0,s.jsx)(l,{})})]})]})})}n(4162)},6041:function(e,t,n){"use strict";let s;n.d(t,{Ej:function(){return o},Xq:function(){return l},a2:function(){return i},ej:function(){return d},oY:function(){return u}});let a=d("UserData"),c="",r="";if(a)try{s=JSON.parse(a),c=null!==s.userId?s.userId:"",r=null!==s.logginin?s.logginin:""}catch(e){console.error(e)}async function i(){return fetch("https://64f493b1932537f4051a7cde.mockapi.io/Products").then(e=>e.json()).then(e=>e)}function l(e){!0===r?fetch("https://65605efe83aba11d99d0b111.mockapi.io/Users/".concat(c),{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(t=>{let n=t.cart||[],s=[...n,e];return fetch("https://65605efe83aba11d99d0b111.mockapi.io/Users/".concat(c),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:s})})}).then(e=>e.json(),alert("Добавлено")).catch(e=>{console.error(e)}):alert("Вам необходимо авторизоваться")}async function o(e){await fetch("https://65605efe83aba11d99d0b111.mockapi.io/Users/".concat(c)).then(e=>e.json()).then(t=>{e(t)})}async function u(e){await fetch("https://65605efe83aba11d99d0b111.mockapi.io/Users/".concat(c)).then(e=>e.json()).then(t=>{e(t)})}function d(e){{let t=e+"=",n=decodeURIComponent(document.cookie).split(";");for(let e=0;e<n.length;e++){let s=n[e];for(;" "===s.charAt(0);)s=s.substring(1);if(0===s.indexOf(t))return s.substring(t.length,s.length)}}return""}},7347:function(){},5022:function(){},4162:function(){}},function(e){e.O(0,[176,161,971,472,744],function(){return e(e.s=2052)}),_N_E=e.O()}]);