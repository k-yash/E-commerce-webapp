(this["webpackJsonpusereducer-class-re-2"]=this["webpackJsonpusereducer-class-re-2"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(14),n=c.n(s),r=c(7),i=c(13),l=c(2),o=function(e,t){switch(t.type){case"SETCART":return Object(l.a)(Object(l.a)({},e),{},{cartItems:t.payload});case"SETWISHLIST":return Object(l.a)(Object(l.a)({},e),{},{wishlist:t.payload});case"ADDTOCART":return Object(l.a)(Object(l.a)({},e),{},{cartItems:[].concat(Object(i.a)(e.cartItems),[{product:t.payload,quantity:1}])});case"ADDTOWISHLIST":return Object(l.a)(Object(l.a)({},e),{},{wishlist:[].concat(Object(i.a)(e.wishlist),[{product:t.payload}])});case"REMOVEFROMWISHLIST":return Object(l.a)(Object(l.a)({},e),{},{wishlist:e.wishlist.filter((function(e){return e.product.id!==t.payload}))});case"MOVETOCART":return Object(l.a)(Object(l.a)({},e),{},{wishlist:e.wishlist.filter((function(e){return e.product.id!==t.payload.id})),cartItems:[].concat(Object(i.a)(e.cartItems),[{product:t.payload,quantity:1}])});case"MOVETOWISHLIST":return Object(l.a)(Object(l.a)({},e),{},{wishlist:[].concat(Object(i.a)(e.wishlist),[{product:t.payload}]),cartItems:e.cartItems.filter((function(e){return e.product.id!==t.payload.id}))});case"INCREMENT":return Object(l.a)(Object(l.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product.id===t.payload?Object(l.a)(Object(l.a)({},e),{},{quantity:e.quantity+1}):e}))});case"DECREMENT":return 1===t.payload.quantity?Object(l.a)(Object(l.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product.id!==t.payload.id}))}):Object(l.a)(Object(l.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product.id===t.payload.id?Object(l.a)(Object(l.a)({},e),{},{quantity:e.quantity-1}):e}))});case"REMOVE":return Object(l.a)(Object(l.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product.id!==t.payload}))});case"EMPTYCART":return Object(l.a)(Object(l.a)({},e),{},{cartItems:[]});default:return e}},d=c(5),j=c.n(d),u=c(6),b=c(9),p=c.n(b),O="https://podkart.yash2018.repl.co",h=function(){var e=Object(u.a)(j.a.mark((function e(t,c){var a,s,n,r,i=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=i.length>2&&void 0!==i[2]?i[2]:null,e.t0=t,e.next="GET"===e.t0?4:"POST"===e.t0?16:"DELETE"===e.t0?27:37;break;case 4:return e.prev=4,e.next=7,p.a.get("".concat(O,"/").concat(c));case 7:if(s=e.sent,console.log(s),200!=s.status){e.next=11;break}return e.abrupt("return",s.data);case 11:e.next=16;break;case 13:return e.prev=13,e.t1=e.catch(4),e.abrupt("return",{success:!1,error:e.t1});case 16:return e.prev=16,console.log("".concat(O,"/").concat(c),a),e.next=20,p.a.post("".concat(O,"/").concat(c),a);case 20:return n=e.sent,e.abrupt("return",n.data);case 24:return e.prev=24,e.t2=e.catch(16),e.abrupt("return",{success:!1,error:e.t2});case 27:return e.prev=27,e.next=30,p.a.delete("".concat(O,"/").concat(c));case 30:return r=e.sent,e.abrupt("return",r.data);case 34:return e.prev=34,e.t3=e.catch(27),e.abrupt("return",{success:!1,error:e.t3});case 37:return e.abrupt("return","Not a valid call");case 38:case"end":return e.stop()}}),e,null,[[4,13],[16,24],[27,34]])})));return function(t,c){return e.apply(this,arguments)}}(),m=c(0),x=Object(a.createContext)(),f=function(e){var t=e.children,c=Object(a.useReducer)(o,{cartItems:[],wishlist:[]}),s=Object(r.a)(c,2),n=s[0],i=s[1];return Object(m.jsx)(x.Provider,{value:{state:n,dispatch:i,ifPresentCart:function(e){return n.cartItems.some((function(t){return t.product.id===e}))},ifPresentWishlist:function(e){return n.wishlist.some((function(t){return t.product.id===e}))}},children:t})},v=function(){return Object(a.useContext)(x)},g=function(e,t){switch(t.type){case"ADD_PRODUCTS":return Object(l.a)(Object(l.a)({},e),{},{products:t.payload});case"TOGGLE_INVENTORY":return Object(l.a)(Object(l.a)({},e),{},{showInventoryAll:!e.showInventoryAll});case"TOGGLE_DELIVERY":return Object(l.a)(Object(l.a)({},e),{},{fastDeliveryOnly:!e.fastDeliveryOnly});case"SORT_BY":return Object(l.a)(Object(l.a)({},e),{},{sortBy:t.payload});default:return e}},y=Object(a.createContext)(),N=function(e){var t=e.children,c=Object(a.useReducer)(g,{products:[],sortBy:null,showInventoryAll:!0,fastDeliveryOnly:!1}),s=Object(r.a)(c,2),n=s[0],i=n.products,l=n.sortBy,o=n.showInventoryAll,d=n.fastDeliveryOnly,j=s[1],u=Object(a.useState)(i),b=Object(r.a)(u,2),p=b[0],O=b[1],h=function(e,t){var c=t.showInventoryAll,a=t.fastDeliveryOnly;return e.filter((function(e){var t=e.inStock;return!!c||t})).filter((function(e){var t=e.fastDelivery;return!a||t}))}(function(e,t){return t&&"LOWTOHIGH"===t?e.sort((function(e,t){return e.price-t.price})):t&&"HIGHTOLOW"===t?e.sort((function(e,t){return t.price-e.price})):e}(p,l),{showInventoryAll:o,fastDeliveryOnly:d});return Object(m.jsx)(y.Provider,{value:{filteredData:h,dispatchProduct:j,showInventoryAll:o,fastDeliveryOnly:d,onSearchData:function(e){var t=i.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));O(t)},setData:O},children:t})},w=function(){return Object(a.useContext)(y)},I=c(4),E=c(12),S=(c(54),function(e){return E.a.success(e,{position:"bottom-right",autoClose:1500,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})}),T=function(e){return E.a.error(e,{position:"bottom-right",autoClose:1500,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})},C=c(3),k=Object(a.createContext)(),L=function(e){var t=e.children,c=Object(a.useState)(!1),s=Object(r.a)(c,2),n=s[0],i=s[1],l=Object(a.useState)(!1),o=Object(r.a)(l,2),d=o[0],b=o[1],O=Object(a.useState)({userId:"",userName:"",isUserLoggedIn:""}),h=Object(r.a)(O,2),x=h[0],f=h[1],v=Object(C.h)(),g=function(){var e=Object(u.a)(j.a.mark((function e(t){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,p.a.post("https://podkart.yash2018.repl.co/signup",t);case 4:c=e.sent,c.data.success&&(S("SignUp Successful! Please Login"),v("/login")),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),T("Please enter details correctly !"),console.log("error",e.t0);case 13:return e.prev=13,i(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(u.a)(j.a.mark((function e(t,c){var a,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,p.a.post("https://podkart.yash2018.repl.co/login",t);case 4:a=e.sent,s=a.data,console.log(s),s.success&&(localStorage.setItem("AuthForEcomm",JSON.stringify({userId:s.userId,isUserLoggedIn:s.success,userName:s.name})),b(!0),S("Login Successful!"),v(c)),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),T("User not found!"),localStorage.removeItem("AuthForEcomm"),b(!1);case 15:return e.prev=15,i(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,10,15,18]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(m.jsx)(k.Provider,{value:{user:x,setUser:f,isUserLogin:d,setLogin:b,AuthenticateWithCredentials:y,createUserCredentials:g,loading:n,setLoading:i},children:t})},P=function(){return Object(a.useContext)(k)},D=(c(57),c(26),function(e){var t=e.rating;return Object(m.jsx)(m.Fragment,{children:t>=3?Object(m.jsxs)("div",{className:"compact-rating above-avg",children:[t," ",Object(m.jsx)("span",{className:"fa fa-star "})]}):Object(m.jsxs)("div",{className:"compact-rating below-avg",children:[t," ",Object(m.jsx)("span",{className:"fa fa-star "})]})})}),R=function(e){var t=e.product,c=e.quantity,a=v(),s=a.dispatch,n=a.ifPresentWishlist,r=P().user,i=function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"INCREMENT",payload:t.id}),e.next=3,h("POST","cart/".concat(r.userId,"/").concat(t.id),{qty:c+1});case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s({type:"DECREMENT",payload:{id:t.id,quantity:c}}),1!=c){e.next=7;break}return e.next=4,h("DELETE","cart/".concat(r.userId,"/").concat(t.id));case 4:e.sent,e.next=10;break;case 7:return e.next=9,h("POST","cart/".concat(r.userId,"/").concat(t.id),{qty:c-1});case 9:e.sent;case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n(t.id)){e.next=7;break}return s({type:"REMOVE",payload:t.id}),e.next=4,h("DELETE","cart/".concat(r.userId,"/").concat(t.id));case 4:e.sent,e.next=15;break;case 7:return s({type:"MOVETOWISHLIST",payload:t}),e.next=10,h("DELETE","cart/".concat(r.userId,"/").concat(t.id));case 10:if(!e.sent.success){e.next=15;break}return e.next=14,h("POST","wishlist/".concat(r.userId),{productId:t.id});case 14:e.sent;case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"REMOVE",payload:t.id}),e.next=3,h("DELETE","cart/".concat(r.userId,"/").concat(t.id));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"card-v",children:[Object(m.jsx)("img",{src:t.image,width:"100%",height:"auto",alt:t.name}),Object(m.jsxs)("div",{className:"content-card",children:[Object(m.jsxs)("div",{className:"div1",children:[Object(m.jsx)("p",{children:t.name}),Object(m.jsxs)("p",{className:"price",children:["\u20b9",t.price]})]}),Object(m.jsx)(D,{rating:t.rating}),Object(m.jsxs)("div",{className:"div4",children:[Object(m.jsxs)("div",{className:"quantity-btn",children:[Object(m.jsx)("button",{onClick:function(){i()},children:"+"}),c,Object(m.jsx)("button",{onClick:function(){l()},children:"-"})]}),Object(m.jsx)("button",{className:"cart-btn btn-blue",onClick:function(){return o(t)},children:"Move to Wishlist"}),Object(m.jsx)("button",{className:"cart-btn btn-red",onClick:function(){return d()},children:"Remove"})]})]})]},t.id)},A=function(){var e=v().state;return Object(m.jsx)("span",{children:e.cartItems.reduce((function(e,t){return e+t.product.price*t.quantity}),0)})};function H(){var e=v(),t=e.state,c=e.dispatch;return Object(m.jsxs)("div",{className:"content-page",children:[Object(m.jsx)("h1",{children:"Your cart"}),console.log({state:t}),t.cartItems.length>0?Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"product-showcase",children:t.cartItems.map((function(e){var t=e.product,c=e.quantity;return Object(m.jsx)(R,{product:t,quantity:c},t.id)}))}),Object(m.jsxs)("div",{className:"cart-last",children:[Object(m.jsxs)("h2",{children:["total Price: \u20b9",Object(m.jsx)(A,{})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"cart-btn btn-red",onClick:function(){return c({type:"EMPTYCART"})},children:"EMPTY CART"}),Object(m.jsx)(I.b,{to:"/billing",className:"cart-btn btn-blue",children:"CHECKOUT"})]})]})]}):Object(m.jsxs)("div",{class:"empty",children:[Object(m.jsx)("h2",{children:"Hey, it feels so light!"}),Object(m.jsx)("p",{children:"There is nothing in your Cart. Let's add some items."}),Object(m.jsx)(I.b,{to:"/products",className:"cart-btn btn-red",children:"GO TO PRODUCTS"})]})]})}c(27),c(58);var M=function(e){var t=e.item,c=e.type,a=v(),s=a.dispatch,n=a.ifPresentCart,r=a.ifPresentWishlist,i=(a.cartHandler,a.wishListHandler,P().user),l=function(){var e=Object(u.a)(j.a.mark((function e(){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s({type:"ADDTOCART",payload:t}),e.next=3,h("POST","cart/".concat(i.userId),{productId:t.id});case 3:c=e.sent,console.log({response:c});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(u.a)(j.a.mark((function e(){var c,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r(t.id)){e.next=8;break}return s({type:"REMOVEFROMWISHLIST",payload:t.id}),e.next=4,h("DELETE","wishlist/".concat(i.userId,"/").concat(t.id));case 4:c=e.sent,console.log({response:c}),e.next=13;break;case 8:return s({type:"ADDTOWISHLIST",payload:t}),e.next=11,h("POST","wishlist/".concat(i.userId),{productId:t.id});case 11:a=e.sent,console.log({response:a});case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"card-v",children:[Object(m.jsx)("img",{src:t.image,width:"100%",height:"auto",alt:t.productName}),Object(m.jsxs)("div",{className:"content-card",children:[Object(m.jsxs)("div",{className:"div1",children:[Object(m.jsx)("p",{children:t.name}),Object(m.jsxs)("p",{className:"price",children:["\u20b9",t.price]})]}),Object(m.jsx)(D,{rating:t.rating}),"productShowcase"===c&&Object(m.jsx)("div",{className:"div2",children:Object(m.jsx)("p",{children:t.description})}),"productShowcase"===c&&Object(m.jsxs)("div",{className:"div3",children:[n(t.id)?Object(m.jsx)(I.b,{to:"/cart",className:"cart-btn btn-red",children:n(t.id)?"Go to Cart":"Add to Cart"}):Object(m.jsx)("button",{className:"cart-btn btn-red",onClick:function(){return l()},children:n(t.id)?"Go to Cart":"Add to Cart"}),Object(m.jsx)("i",{onClick:function(){return o()},className:"fa fa-heart","aria-hidden":"true",style:{color:r(t.id)?"red":"grey"}})]})]})]},t.id)},_=function(){var e=w(),t=e.dispatchProduct,c=e.showInventoryAll,a=e.fastDeliveryOnly;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"filter-bar",children:[Object(m.jsx)("h3",{children:"Filters"}),Object(m.jsxs)("fieldset",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{className:"input",type:"radio",name:"sort",onClick:function(){return t({type:"SORT_BY",payload:"HIGHTOLOW"})}}),Object(m.jsx)("label",{className:"label",children:"High To Low"})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{className:"input",type:"radio",name:"sort",onClick:function(){return t({type:"SORT_BY",payload:"LOWTOHIGH"})}}),Object(m.jsx)("label",{className:"label",children:"Low To High"})]})]}),Object(m.jsxs)("fieldset",{children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{className:"input",type:"checkbox",checked:a,onClick:function(){return t({type:"TOGGLE_DELIVERY"})}}),Object(m.jsx)("label",{className:"label",children:"Fast Delivery"})]}),Object(m.jsx)("input",{className:"input",type:"checkbox",checked:c,onClick:function(){return t({type:"TOGGLE_INVENTORY"})}}),Object(m.jsx)("label",{className:"label",children:"Includes Out of Stock"})]})]})})};var W=function(){return Object(m.jsx)("div",{className:"spinner-2 content-page"})};function U(e){var t=e.setRoute,c=w(),s=c.filteredData,n=c.dispatchProduct,r=c.setData,i=P(),l=i.loading,o=i.setLoading;return Object(a.useEffect)((function(){Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.prev=1,e.next=4,h("GET","products");case 4:t=e.sent,console.log(t),r(t.products),S("Products loded successfully"),n({type:"ADD_PRODUCTS",payload:t.products}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("Page cannot be loaded");case 14:return e.prev=14,o(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})))()}),[]),Object(m.jsxs)("div",{className:"content-page",children:[Object(m.jsx)("h1",{children:"Products"}),Object(m.jsxs)("div",{className:"product-page-grid",children:[Object(m.jsx)(_,{}),Object(m.jsx)("div",{className:"product-showcase product-left",children:l?Object(m.jsx)(W,{}):s.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(M,{item:e,type:"productShowcase",setRoute:t},e.id)})}))})]})]})}var q=function(e){var t=e.product,c=v(),a=c.dispatch,s=c.ifPresentCart,n=P().user,r=function(){var e=Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a({type:"REMOVEFROMWISHLIST",payload:t.id}),e.next=3,h("DELETE","wishlist/".concat(n.userId,"/").concat(t.id));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s(t.id)){e.next=7;break}return a({type:"REMOVEFROMWISHLIST",payload:t.id}),e.next=4,h("DELETE","wishlist/".concat(n.userId,"/").concat(t.id));case 4:e.sent,e.next=15;break;case 7:return a({type:"MOVETOCART",payload:t}),e.next=10,h("DELETE","wishlist/".concat(n.userId,"/").concat(t.id));case 10:if(!e.sent.success){e.next=15;break}return e.next=14,h("POST","cart/".concat(n.userId),{productId:t.id});case 14:e.sent;case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"card-v",children:[Object(m.jsx)("img",{src:t.image,width:"100%",height:"auto",alt:t.name}),Object(m.jsxs)("div",{className:"content-card",children:[Object(m.jsxs)("div",{className:"div1",children:[Object(m.jsx)("p",{children:t.name}),Object(m.jsxs)("p",{className:"price",children:["\u20b9",t.price]})]}),Object(m.jsx)(D,{rating:t.rating}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"cart-btn btn-blue",onClick:function(){return i(t)},children:"Move to Cart"}),Object(m.jsx)("button",{className:"cart-btn btn-red",onClick:function(){return r()},children:"Remove"})]})]})]},t.id)};function F(){var e=v().state;return Object(m.jsxs)("div",{className:"content-page",children:[Object(m.jsx)("h1",{children:"Your Wishlist"}),e.wishlist.length>0?Object(m.jsx)("div",{className:"product-showcase",children:e.wishlist.map((function(e){return Object(m.jsx)(q,{product:e.product},e.product.id)}))}):Object(m.jsxs)("div",{class:"empty",children:[Object(m.jsx)("h2",{children:"Hey, it feels so light!"}),Object(m.jsx)("p",{children:"There is nothing in your Wishlist. Let's add some items."}),Object(m.jsx)(I.b,{to:"/products",className:"cart-btn btn-red",children:"GO TO PRODUCTS"})]})]})}c(59);var G=function(){return Object(m.jsxs)("div",{className:"content-page",children:[Object(m.jsx)("div",{children:Object(m.jsx)(I.b,{to:"/Products",children:Object(m.jsx)("img",{className:"banner",src:"https://m.media-amazon.com/images/S/aplus-media/sc/7586170e-718b-4d0e-949e-1907e2c56953.__CR0,0,970,300_PT0_SX970_V1___.jpg",alt:""})})}),Object(m.jsx)("div",{className:"home-sub-title",children:"Explore"}),Object(m.jsxs)("div",{className:"home-recommendations",children:[Object(m.jsx)("div",{className:"home-product",children:Object(m.jsxs)(I.b,{className:"home-product-link",to:"/Products",children:[Object(m.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/I/61m8ZyGvL2L._SL1500_.jpg",alt:""}),Object(m.jsx)("div",{className:"sub-title",children:"Headset"})]})}),Object(m.jsx)("div",{className:"home-product",children:Object(m.jsxs)(I.b,{className:"home-product-link",to:"/Products",children:[Object(m.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/I/519ugH7N42S._SL1100_.jpg",alt:""}),Object(m.jsx)("div",{className:"sub-title",children:"Webcam"})]})}),Object(m.jsx)("div",{className:"home-product",children:Object(m.jsxs)(I.b,{className:"home-product-link",to:"/Products",children:[Object(m.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/I/71gUogqnbrL._SL1500_.jpg",alt:""}),Object(m.jsx)("div",{className:"sub-title",children:"Mic"})]})}),Object(m.jsx)("div",{className:"home-product",children:Object(m.jsxs)(I.b,{className:"home-product-link",to:"/Products",children:[Object(m.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/I/71Xymtt5czL._SL1500_.jpg",alt:""}),Object(m.jsx)("div",{className:"sub-title",children:"Arm Stand"})]})})]})]})},V=c.p+"static/media/commerce.7f2fa61b.png",Y=function(){var e=w().onSearchData;return Object(m.jsx)(I.b,{to:"/products",className:"link-box",children:Object(m.jsx)("input",{className:"search-bar",placeholder:"Search for Products",onChange:e})})},B=function(e){var t=e.setRoute,c=v().state,a=P(),s=a.isUserLogin,n=a.setLogin;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{className:"nav-box",children:[Object(m.jsxs)(I.b,{to:"/",children:[Object(m.jsx)("img",{className:"nav-logo",src:V,alt:""}),"THE PODKaRT"]}),Object(m.jsx)(Y,{setRoute:t}),s?Object(m.jsxs)("div",{className:"right-menu",children:[Object(m.jsxs)("button",{className:"username-btn",children:["Hi, ",JSON.parse(localStorage.getItem("AuthForEcomm")).userName]}),Object(m.jsx)("div",{className:"dropdown-menu",children:Object(m.jsx)("button",{onClick:function(){n(!1),localStorage.removeItem("AuthForEcomm")},children:"Log Out"})})]}):Object(m.jsx)(I.c,{activeClassName:"selected",to:"/login",className:"nav-btn",children:"Login"}),Object(m.jsxs)("ul",{className:"navigation disable",children:[Object(m.jsx)("li",{children:Object(m.jsx)(I.c,{activeClassName:"selected",to:"/products",className:"nav-btn",children:"Products"})}),Object(m.jsx)("li",{children:Object(m.jsxs)(I.c,{className:"nav-btn",activeClassName:"selected",to:"/wishlist",children:[Object(m.jsx)("i",{className:"value fas fa-heart",children:Object(m.jsx)("span",{children:c.wishlist.length})})," "]})}),Object(m.jsx)("li",{children:Object(m.jsx)(I.c,{activeClassName:"selected",to:"/cart",className:"nav-btn",children:Object(m.jsx)("i",{className:"value fas fa-shopping-cart",children:Object(m.jsx)("span",{children:c.cartItems.reduce((function(e,t){return e+t.quantity}),0)})})})})]})]}),Object(m.jsx)("div",{className:"mobile-nav-bar",children:Object(m.jsxs)("ul",{className:"mob-nav-box",children:[Object(m.jsx)("li",{children:Object(m.jsx)(I.c,{end:!0,activeClassName:"selected",to:"/",className:"nav-btn",children:Object(m.jsx)("i",{className:"mob-nav-btn fas fa-home"})})}),Object(m.jsx)("li",{children:Object(m.jsx)(I.c,{activeClassName:"selected",to:"/products",className:"nav-btn",children:Object(m.jsx)("i",{className:"mob-nav-btn fas fa-box"})})}),Object(m.jsx)("li",{children:Object(m.jsx)(I.c,{activeClassName:"selected",to:"/wishlist",className:"nav-btn",children:Object(m.jsx)("i",{className:"mob-nav-btn value fas fa-heart",children:Object(m.jsx)("span",{children:c.wishlist.length})})})}),Object(m.jsx)("li",{children:Object(m.jsx)(I.c,{activeClassName:"selected",to:"/cart",className:"nav-btn",children:Object(m.jsx)("i",{className:"mob-nav-btn value fas fa-shopping-cart",children:Object(m.jsx)("span",{children:c.cartItems.reduce((function(e,t){return e+t.quantity}),0)})})})})]})})]})},z=(c(60),function(){var e=v().state;return Object(m.jsx)("div",{className:"content-page",children:Object(m.jsxs)("div",{className:"row ",children:[Object(m.jsx)("div",{className:"col-75",children:Object(m.jsx)("div",{className:"container-billing",children:Object(m.jsxs)("form",{action:"/action_page.php",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-50",children:[Object(m.jsx)("h3",{children:"Billing Address"}),Object(m.jsxs)("label",{for:"fname",children:[Object(m.jsx)("i",{className:"fa fa-user"})," Full Name"]}),Object(m.jsx)("input",{type:"text",id:"fname",name:"firstname",placeholder:"John M. Doe"}),Object(m.jsxs)("label",{for:"email",children:[Object(m.jsx)("i",{className:"fa fa-envelope"})," Email"]}),Object(m.jsx)("input",{type:"text",id:"email",name:"email",placeholder:"john@example.com"}),Object(m.jsxs)("label",{for:"adr",children:[Object(m.jsx)("i",{className:"fa fa-address-card-o"})," Address"]}),Object(m.jsx)("input",{type:"text",id:"adr",name:"address",placeholder:"542 W. 15th Street"}),Object(m.jsxs)("label",{for:"city",children:[Object(m.jsx)("i",{className:"fa fa-institution"})," City"]}),Object(m.jsx)("input",{type:"text",id:"city",name:"city",placeholder:"New York"}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-50",children:[Object(m.jsx)("label",{for:"state",children:"State"}),Object(m.jsx)("input",{type:"text",id:"state",name:"state",placeholder:"NY"})]}),Object(m.jsxs)("div",{className:"col-50",children:[Object(m.jsx)("label",{for:"zip",children:"Zip"}),Object(m.jsx)("input",{type:"text",id:"zip",name:"zip",placeholder:"10001"})]})]})]}),Object(m.jsxs)("div",{className:"col-50",children:[Object(m.jsx)("h3",{children:"Payment"}),Object(m.jsx)("label",{for:"fname",children:"Accepted Cards"}),Object(m.jsxs)("div",{className:"icon-container",children:[Object(m.jsx)("i",{className:"fa fa-cc-visa",style:{color:"navy"}}),Object(m.jsx)("i",{className:"fa fa-cc-amex",style:{color:"blue"}}),Object(m.jsx)("i",{className:"fa fa-cc-mastercard",style:{color:"red"}}),Object(m.jsx)("i",{className:"fa fa-cc-discover",style:{color:"orange"}})]}),Object(m.jsx)("label",{for:"cname",children:"Name on Card"}),Object(m.jsx)("input",{type:"text",id:"cname",name:"cardname",placeholder:"John More Doe"}),Object(m.jsx)("label",{for:"ccnum",children:"Credit card number"}),Object(m.jsx)("input",{type:"text",id:"ccnum",name:"cardnumber",placeholder:"1111-2222-3333-4444"}),Object(m.jsx)("label",{for:"expmonth",children:"Exp Month"}),Object(m.jsx)("input",{type:"text",id:"expmonth",name:"expmonth",placeholder:"September"}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-50",children:[Object(m.jsx)("label",{for:"expyear",children:"Exp Year"}),Object(m.jsx)("input",{type:"text",id:"expyear",name:"expyear",placeholder:"2018"})]}),Object(m.jsxs)("div",{className:"col-50",children:[Object(m.jsx)("label",{for:"cvv",children:"CVV"}),Object(m.jsx)("input",{type:"text",id:"cvv",name:"cvv",placeholder:"352"})]})]})]})]}),Object(m.jsxs)("label",{children:[Object(m.jsx)("input",{type:"checkbox",checked:"checked",name:"sameadr"})," ","Shipping address same as billing"]}),Object(m.jsx)("input",{type:"submit",value:"Continue to checkout",className:"btn"})]})})}),Object(m.jsx)("div",{class:"col-25",children:Object(m.jsxs)("div",{class:"container-billing",children:[Object(m.jsxs)("h4",{children:["Cart",Object(m.jsxs)("span",{class:"price",style:{color:"black"},children:[Object(m.jsx)("i",{class:"fa fa-shopping-cart"}),Object(m.jsx)("b",{children:e.cartItems.reduce((function(e,t){return e+t.quantity}),0)})]})]}),e.cartItems.map((function(e){return Object(m.jsxs)("p",{children:[Object(m.jsx)("a",{href:"#Billing",children:e.product.name})," x ",e.quantity," ",Object(m.jsxs)("span",{class:"price",children:["\u20b9",e.product.price*e.quantity]})]})})),Object(m.jsx)("hr",{}),Object(m.jsxs)("p",{children:["Total"," ",Object(m.jsx)("span",{class:"price",style:{color:"black"},children:Object(m.jsxs)("b",{children:["\u20b9",Object(m.jsx)(A,{})]})})]})]})})]})})}),J=function(){return Object(m.jsx)("div",{className:"content-page",children:Object(m.jsx)("h1",{children:"404 Error. Page not found."})})},Z=(c(28),function(){var e=Object(a.useRef)(null),t=P().loading,c=Object(a.useState)({email:"",password:""}),s=Object(r.a)(c,2),n=s[0],i=s[1],o=Object(a.useState)({email:"",password:""}),d=Object(r.a)(o,2),j=d[0],u=d[1],b=Object(a.useState)(!1),p=Object(r.a)(b,2),O=p[0],h=(p[1],Object(C.g)().state),x=P().AuthenticateWithCredentials;Object(a.useEffect)((function(){e.current.focus()}),[]);var f=function(e){var t=e.target,c=t.value,a=t.name;i((function(e){return Object(l.a)(Object(l.a)({},e),{},{[a]:c})}))},v=function(){if(function(){u({email:"",password:""});var e=!0;return n.email||(u((function(e){return Object(l.a)(Object(l.a)({},e),{},{email:"Enter a valid email"})})),e=!1),n.password||(u((function(e){return Object(l.a)(Object(l.a)({},e),{},{password:"Enter a valid password"})})),e=!1),e}()){var e=(null===h||void 0===h?void 0:h.from)?h.from:"/";x(n,e)}};return Object(m.jsx)(m.Fragment,{children:t?Object(m.jsx)(W,{}):Object(m.jsx)("div",{className:"content-page show-flex",children:Object(m.jsxs)("div",{className:" container  ".concat(O?"right-panel-active":""),id:"container",children:[Object(m.jsx)("div",{className:"form-container sign-in-container",children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(m.jsx)("h1",{children:"Sign In"}),Object(m.jsx)("input",{onChange:f,className:"input-form ",value:n.email,type:"email",name:"email",placeholder:"Email",ref:e}),Object(m.jsx)("small",{children:j.email}),Object(m.jsx)("input",{onChange:f,className:"input-form ",value:n.password,type:"password",name:"password",placeholder:"Password"}),Object(m.jsx)("small",{children:j.password}),Object(m.jsx)("button",{className:"button-form",onClick:function(){return v()},children:"Sign In"})]})}),Object(m.jsx)("div",{className:"overlay-container",children:Object(m.jsx)("div",{className:"overlay",children:Object(m.jsxs)("div",{className:"overlay-panel overlay-right",children:[Object(m.jsx)("h1",{children:"Hello, Friend!"}),Object(m.jsx)("p",{children:"Enter your details and start journey with us"}),Object(m.jsx)(I.b,{to:"/signup",className:"button-form ghost",id:"signUp",children:"Sign Up"})]})})})]})})})}),K=function(){var e=Object(a.useRef)(null),t=P().loading,c=Object(a.useState)(!0),s=Object(r.a)(c,2),n=s[0],i=(s[1],Object(C.g)().state,P().createUserCredentials),o=Object(a.useState)({name:"",email:"",password:""}),d=Object(r.a)(o,2),j=d[0],u=d[1],b=Object(a.useState)({name:"",email:"",password:""}),p=Object(r.a)(b,2),O=p[0],h=p[1];Object(a.useEffect)((function(){e.current.focus()}),[]);var x=function(e){return new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$").test(e)},f=function(e){return e.length>7},v=function(){h({name:"",email:"",password:""});var e=!0;return j.email&&x||(h((function(e){return Object(l.a)(Object(l.a)({},e),{},{email:"Enter a valid Email"})})),e=!1),j.password&&f||(h((function(e){return Object(l.a)(Object(l.a)({},e),{},{password:"Password must be 8 characters long and should contain a number "})})),e=!1),j.name||(h((function(e){return Object(l.a)(Object(l.a)({},e),{},{name:"Enter a valid name"})})),e=!1),e},g=function(e){var t=e.target,c=t.value,a=t.name;u((function(e){return Object(l.a)(Object(l.a)({},e),{},{[a]:c})}))};return Object(m.jsx)(m.Fragment,{children:t?Object(m.jsx)(W,{}):Object(m.jsx)("div",{className:"content-page show-flex",children:Object(m.jsxs)("div",{className:" container  ".concat(n?"right-panel-active":""),id:"container",children:[Object(m.jsx)("div",{className:"form-container sign-up-container",children:Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(m.jsx)("h1",{children:"Create Account"}),Object(m.jsx)("input",{type:"text",name:"name",onChange:g,placeholder:"Name",className:"input-form ",value:j.name,ref:e}),Object(m.jsx)("small",{children:O.name}),Object(m.jsx)("input",{type:"email",name:"email",onChange:g,placeholder:"Email",className:"input-form ",value:j.email}),Object(m.jsx)("small",{children:O.email}),Object(m.jsx)("input",{type:"password",name:"password",onChange:g,placeholder:"Password",className:"input-form ",value:j.password}),Object(m.jsx)("small",{children:O.password}),Object(m.jsx)("button",{onClick:function(){v()&&i(j)},className:"button-form",children:"SignUp"})]})}),Object(m.jsx)("div",{className:"overlay-container",children:Object(m.jsx)("div",{className:"overlay",children:Object(m.jsxs)("div",{className:"overlay-panel overlay-left",children:[Object(m.jsx)("h1",{children:"Welcome Back!"}),Object(m.jsx)("p",{children:"To keep connected with us please login with your personal info"}),Object(m.jsx)(I.b,{to:"/login",className:"button-form ghost",id:"signIn",children:"Sign In"})]})})})]})})})},X=c(29);function $(e){var t=e.path,c=Object(X.a)(e,["path"]);return P().isUserLogin?Object(m.jsx)(C.b,Object(l.a)(Object(l.a)({},c),{},{path:t})):Object(m.jsx)(C.a,{state:{from:t},replace:!0,to:"/login"})}function Q(){var e=P(),t=e.isUserLogin,c=e.setLogin,s=e.user,n=e.setUser,r=v().dispatch;return Object(a.useEffect)((function(){if(n(JSON.parse(localStorage.getItem("AuthForEcomm"))),localStorage.getItem("AuthForEcomm")){var e=JSON.parse(localStorage.getItem("AuthForEcomm")).isUserLoggedIn;c(e)}else c(!1)}),[t]),Object(a.useEffect)((function(){t?Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://podkart.yash2018.repl.co/cart/".concat(s.userId));case 3:t=e.sent,(c=t.data).success&&(console.log(c.response.cartProducts),r({type:"SETCART",payload:c.response.cartProducts})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))():r({type:"SETCART",payload:[]})}),[t]),Object(a.useEffect)((function(){t?Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://podkart.yash2018.repl.co/wishlist/".concat(s.userId));case 3:t=e.sent,(c=t.data).success&&(console.log(c.response),r({type:"SETWISHLIST",payload:c.response.wishlistProducts})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))():r({type:"SETWISHLIST",payload:[]})}),[t]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(B,{}),Object(m.jsxs)(C.d,{children:[Object(m.jsx)(C.b,{path:"/",element:Object(m.jsx)(G,{})}),Object(m.jsx)(C.b,{path:"/products",element:Object(m.jsx)(U,{})}),Object(m.jsx)(C.b,{path:"/cart",element:Object(m.jsx)(H,{})}),Object(m.jsx)(C.b,{path:"/*",element:Object(m.jsx)(J,{})}),Object(m.jsx)(C.b,{path:"/login",element:Object(m.jsx)(Z,{})}),Object(m.jsx)(C.b,{path:"/signup",element:Object(m.jsx)(K,{})}),Object(m.jsx)($,{path:"/wishlist",element:Object(m.jsx)(F,{})}),Object(m.jsx)($,{path:"/billing",element:Object(m.jsx)(z,{})})]})]})})}E.a.configure();var ee=document.getElementById("root");n.a.render(Object(m.jsx)(a.StrictMode,{children:Object(m.jsx)(I.a,{children:Object(m.jsx)(L,{children:Object(m.jsx)(f,{children:Object(m.jsx)(N,{children:Object(m.jsx)(Q,{})})})})})}),ee)}},[[61,1,2]]]);
//# sourceMappingURL=main.0dcf0ae1.chunk.js.map