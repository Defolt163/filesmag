(()=>{var e={};e.id=466,e.ids=[466],e.modules={5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},1877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},5319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},3798:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>l,routeModule:()=>m,tree:()=>d});var r=s(7096),a=s(6132),i=s(7284),n=s.n(i),o=s(2564),c={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(c[e]=()=>o[e]);s.d(t,c);let d=["",{children:["category",{children:["product",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,387)),"C:\\Users\\Sanders\\Desktop\\EMAG\\on-store\\src\\app\\category\\product\\[id]\\page.js"]}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,4553)),"C:\\Users\\Sanders\\Desktop\\EMAG\\on-store\\src\\app\\layout.js"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,9291,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["C:\\Users\\Sanders\\Desktop\\EMAG\\on-store\\src\\app\\category\\product\\[id]\\page.js"],u="/category/product/[id]/page",p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/category/product/[id]/page",pathname:"/category/product/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8877:(e,t,s)=>{Promise.resolve().then(s.bind(s,2824))},2824:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>n});var r=s(3854),a=s(4218);s(2914);var i=s(2871);function n(){let e,t;(0,a.useEffect)(()=>{(0,i.ej)()});let s=(0,i.ej)("UserData"),n="";if(s)try{e=JSON.parse(s),n=null!==e.userId?e.userId:"",null!==e.logginin&&e.logginin}catch(e){console.error(e)}(0,a.useEffect)(()=>{(()=>{let e=window.location.pathname,s=e.split("/");t=s[s.length-1]})()},[]);let[o,c]=(0,a.useState)([]),[d,l]=(0,a.useState)([]);async function u(){await fetch(`https://64f493b1932537f4051a7cde.mockapi.io/Products/${t}`).then(e=>e.json()).then(e=>{c(e),l(e.name)})}(0,a.useEffect)(()=>{u()},[]);let[p,m]=(0,a.useState)(1);return(0,a.useEffect)(()=>{document.title=`${d}`},[d]),r.jsx("div",{className:"ProductPage",children:r.jsx("div",{className:"container",children:(0,r.jsxs)("div",{className:"ProductPageWrapper",children:[r.jsx("div",{className:"ProductImage",style:{background:`url(${o.image}) center center/cover no-repeat`},children:!0===o.statusnew&&!0===o.statushot?(0,r.jsxs)("div",{className:"ProductStatusBar",children:[r.jsx("div",{className:"ProductStatus",children:"New"}),r.jsx("div",{className:"ProductStatus",children:"Hot"})]}):!0===o.statusnew?r.jsx("div",{className:"ProductStatusBar",children:r.jsx("div",{className:"ProductStatus",children:"New"})}):!0===o.statushot?r.jsx("div",{className:"ProductStatusBar",children:r.jsx("div",{className:"ProductStatus",children:"Hot"})}):null}),(0,r.jsxs)("div",{className:"ProductInfo",children:[r.jsx("div",{className:"ProductRating",children:o.rating>=5?r.jsx("div",{children:Array.from({length:5}).map((e,t)=>r.jsx("i",{className:"fa-solid fa-star"},t))}):4===o.rating?r.jsx("div",{children:Array.from({length:4}).map((e,t)=>r.jsx("i",{className:"fa-solid fa-star"},t))}):3===o.rating?r.jsx("div",{children:Array.from({length:3}).map((e,t)=>r.jsx("i",{className:"fa-solid fa-star"},t))}):2===o.rating?r.jsx("div",{children:Array.from({length:2}).map((e,t)=>r.jsx("i",{className:"fa-solid fa-star"},t))}):r.jsx("div",{children:r.jsx("i",{className:"fa-solid fa-star"})})}),r.jsx("div",{className:"ProductName",children:o.name}),r.jsx("div",{className:"ProductDescr",children:r.jsx(({children:e})=>{let[t,s]=(0,a.useState)(!0);return(0,r.jsxs)("p",{className:"text",children:[e&&(t?e.slice(0,100):e),r.jsx("span",{onClick:()=>{s(!t)},className:"read-or-hide",style:{color:"green",cursor:"pointer"},children:t?"...Показать Больше":" Скрыть"})]})},{children:o.descr})}),(0,r.jsxs)("div",{className:"ProductPrice",children:["Цена: ",o.price," $"]}),(0,r.jsxs)("div",{className:"ProductActions",children:[r.jsx("div",{className:"ProductCountAction",children:(0,r.jsxs)("div",{className:"CartItemPieceWrapper",children:[r.jsx("div",{onClick:()=>void m(p-1),className:"CartItemPieceIteration",children:"-"}),r.jsx("div",{className:"PiecesNumber",children:p}),r.jsx("div",{onClick:()=>void m(p+1),className:"CartItemPieceIteration",children:"+"})]})}),r.jsx("div",{className:"ProductAddToCart",onClick:()=>{!function(e){fetch(`https://65605efe83aba11d99d0b111.mockapi.io/Users/${n}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(t=>{let s=t.cart||[],r=[...s,e];return fetch(`https://65605efe83aba11d99d0b111.mockapi.io/Users/${n}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({cart:r})})}).then(e=>e.json()).catch(e=>{console.error(e)})}(o.id)},children:"Добавить в корзину"})]})]})]})})})}},387:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>n,__esModule:()=>i,default:()=>c});var r=s(5153);let a=(0,r.createProxy)(String.raw`C:\Users\Sanders\Desktop\EMAG\on-store\src\app\category\product\[id]\page.js`),{__esModule:i,$$typeof:n}=a,o=a.default,c=o},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(8531);let a=e=>{let t=(0,r.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}},2914:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[271,108,323,304],()=>s(3798));module.exports=r})();