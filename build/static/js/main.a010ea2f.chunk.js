(this["webpackJsonpusereducer-class-re-2"]=this["webpackJsonpusereducer-class-re-2"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},34:function(e,t){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(14),n=c.n(s),r=c(5),i=c(13),l=c(2),o=function(e,t){switch(t.type){case"ADDTOCART":return Object(l.a)(Object(l.a)({},e),{},{cartItems:[].concat(Object(i.a)(e.cartItems),[Object(l.a)(Object(l.a)({},t.payload),{},{quantity:1})])});case"ADDTOWISHLIST":return Object(l.a)(Object(l.a)({},e),{},{wishlist:[].concat(Object(i.a)(e.wishlist),[Object(l.a)({},t.payload)])});case"REMOVEFROMWISHLIST":return Object(l.a)(Object(l.a)({},e),{},{wishlist:e.wishlist.filter((function(e){return e.id!==t.payload}))});case"MOVETOCART":return Object(l.a)(Object(l.a)({},e),{},{wishlist:e.wishlist.filter((function(e){return e.id!==t.payload.id})),cartItems:[].concat(Object(i.a)(e.cartItems),[Object(l.a)(Object(l.a)({},t.payload),{},{quantity:1})])});case"MOVETOWISHLIST":return Object(l.a)(Object(l.a)({},e),{},{wishlist:[].concat(Object(i.a)(e.wishlist),[Object(l.a)({},t.payload)]),cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case"INCREMENT":return Object(l.a)(Object(l.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.id===t.payload?Object(l.a)(Object(l.a)({},e),{},{quantity:e.quantity+1}):e}))});case"DECREMENT":return 1===t.payload.quantity?Object(l.a)(Object(l.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))}):Object(l.a)(Object(l.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.id===t.payload.id?Object(l.a)(Object(l.a)({},e),{},{quantity:e.quantity-1}):e}))});case"REMOVE":return Object(l.a)(Object(l.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload}))});case"EMPTYCART":return Object(l.a)(Object(l.a)({},e),{},{cartItems:[]});default:return e}},j=(c(34),c(0)),d=Object(a.createContext)(),b=function(e){var t=e.children,c=function(e){return l.cartItems.some((function(t){return t.id===e}))},s=function(e){return l.wishlist.some((function(t){return t.id===e}))},n=Object(a.useReducer)(o,{cartItems:[],wishlist:[]}),i=Object(r.a)(n,2),l=i[0],b=i[1];return Object(j.jsx)(d.Provider,{value:{state:l,dispatch:b,ifPresentCart:c,ifPresentWishlist:s,cartHandler:function(e){s(e.id)?b({type:"REMOVE",payload:e.id}):b({type:"MOVETOWISHLIST",payload:e})},wishListHandler:function(e){c(e.id)?b({type:"REMOVEFROMWISHLIST",payload:e.id}):b({type:"MOVETOCART",payload:e})},productHandler:function(e){var t=c(e.id);b(t?{type:"INCREMENT",payload:e.id}:{type:"ADDTOCART",payload:e})}},children:t})},u=function(){return Object(a.useContext)(d)},O=function(e,t){switch(t.type){case"ADD_PRODUCTS":return Object(l.a)(Object(l.a)({},e),{},{products:t.payload});case"TOGGLE_INVENTORY":return Object(l.a)(Object(l.a)({},e),{},{showInventoryAll:!e.showInventoryAll});case"TOGGLE_DELIVERY":return Object(l.a)(Object(l.a)({},e),{},{fastDeliveryOnly:!e.fastDeliveryOnly});case"SORT_BY":return Object(l.a)(Object(l.a)({},e),{},{sortBy:t.payload});default:return e}},h=Object(a.createContext)(),m=function(e){var t=e.children,c=Object(a.useReducer)(O,{products:[],sortBy:null,showInventoryAll:!0,fastDeliveryOnly:!1}),s=Object(r.a)(c,2),n=s[0],i=n.products,l=n.sortBy,o=n.showInventoryAll,d=n.fastDeliveryOnly,b=s[1],u=Object(a.useState)(i),m=Object(r.a)(u,2),p=m[0],x=m[1],f=function(e,t){var c=t.showInventoryAll,a=t.fastDeliveryOnly;return e.filter((function(e){var t=e.inStock;return!!c||t})).filter((function(e){var t=e.fastDelivery;return!a||t}))}(function(e,t){return t&&"LOWTOHIGH"===t?e.sort((function(e,t){return e.price-t.price})):t&&"HIGHTOLOW"===t?e.sort((function(e,t){return t.price-e.price})):e}(p,l),{showInventoryAll:o,fastDeliveryOnly:d});return Object(j.jsx)(h.Provider,{value:{filteredData:f,dispatchProduct:b,showInventoryAll:o,fastDeliveryOnly:d,onSearchData:function(e){var t=i.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())}));x(t)},setData:x},children:t})},p=function(){return Object(a.useContext)(h)},x=c(4),f=c(8),v=c.n(f),g=c(10),y=c(12),N=(c(37),function(e){return y.a.success(e,{position:"bottom-right",autoClose:1500,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})}),w=function(e){return y.a.error(e,{position:"bottom-right",autoClose:1500,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!1,draggable:!0,progress:void 0})},C=c(3),I=c(11),S=c.n(I),E=Object(a.createContext)(),T=function(e){var t=e.children,c=Object(a.useState)(!1),s=Object(r.a)(c,2),n=s[0],i=s[1],l=Object(a.useState)(!1),o=Object(r.a)(l,2),d=o[0],b=o[1],u=Object(C.h)(),O=function(){var e=Object(g.a)(v.a.mark((function e(t){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,S.a.post("https://podkart.yash2018.repl.co/signup",t);case 4:c=e.sent,c.data.success&&(N("SignUp Successful! Please Login"),u("/login")),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),w("Please enter details correctly !"),console.log("error",e.t0);case 13:return e.prev=13,i(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,9,13,16]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(g.a)(v.a.mark((function e(t,c){var a,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i(!0),e.next=4,S.a.post("https://podkart.yash2018.repl.co/login",t);case 4:a=e.sent,s=a.data,console.log(s.name),s.success&&(localStorage.setItem("AuthForEcomm",JSON.stringify({isUserLoggedIn:s.success,userName:s.name})),b(!0),N("Login Successful!"),u(c)),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),w("User not found!"),localStorage.removeItem("AuthForEcomm"),b(!1);case 15:return e.prev=15,i(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,10,15,18]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(j.jsx)(E.Provider,{value:{isUserLogin:d,setLogin:b,AuthenticateWithCredentials:h,createUserCredentials:O,loading:n,setLoading:i},children:t})},L=function(){return Object(a.useContext)(E)},k=(c(58),c(26),function(e){var t=e.rating;return Object(j.jsx)(j.Fragment,{children:t>=3?Object(j.jsxs)("div",{className:"compact-rating above-avg",children:[t," ",Object(j.jsx)("span",{className:"fa fa-star "})]}):Object(j.jsxs)("div",{className:"compact-rating below-avg",children:[t," ",Object(j.jsx)("span",{className:"fa fa-star "})]})})}),R=function(e){var t=e.item,c=e.type,a=u(),s=a.dispatch,n=a.ifPresentCart,r=a.ifPresentWishlist,i=a.cartHandler,l=a.wishListHandler;return Object(j.jsxs)("div",{className:"card-v",children:[Object(j.jsx)("img",{src:t.image,width:"100%",height:"auto",alt:t.productName}),Object(j.jsxs)("div",{className:"content-card",children:[Object(j.jsxs)("div",{className:"div1",children:[Object(j.jsx)("p",{children:t.name}),Object(j.jsxs)("p",{className:"price",children:["\u20b9",t.price]})]}),Object(j.jsx)(k,{rating:t.rating}),"productShowcase"===c&&Object(j.jsx)("div",{className:"div2",children:Object(j.jsx)("p",{children:t.description})}),"productShowcase"===c&&Object(j.jsxs)("div",{className:"div3",children:[n(t.id)?Object(j.jsx)(x.b,{to:"/cart",className:"cart-btn btn-red",children:n(t.id)?"Go to Cart":"Add to Cart"}):Object(j.jsx)("button",{className:"cart-btn btn-red",onClick:function(){s({type:"ADDTOCART",payload:t})},children:n(t.id)?"Go to Cart":"Add to Cart"}),Object(j.jsx)("i",{onClick:r(t.id)?function(){s({type:"REMOVEFROMWISHLIST",payload:t.id})}:function(){s({type:"ADDTOWISHLIST",payload:t})},className:"fa fa-heart","aria-hidden":"true",style:{color:r(t.id)?"red":"grey"}})]}),"cart"===c&&Object(j.jsxs)("div",{className:"div4",children:[Object(j.jsxs)("div",{className:"quantity-btn",children:[Object(j.jsx)("button",{onClick:function(){s({type:"INCREMENT",payload:t.id})},children:"+"}),t.quantity,Object(j.jsx)("button",{onClick:function(){s({type:"DECREMENT",payload:{id:t.id,quantity:t.quantity}})},children:"-"})]}),Object(j.jsx)("button",{className:"cart-btn btn-blue",onClick:function(){return i(t)},children:"Move to Wishlist"}),Object(j.jsx)("button",{className:"cart-btn btn-red",onClick:function(){return s({type:"REMOVE",payload:t.id})},children:"Remove"})]}),"wishList"===c&&Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"cart-btn btn-blue",onClick:function(){return l(t)},children:"Move to Cart"}),Object(j.jsx)("button",{className:"cart-btn btn-red",onClick:function(){return s({type:"REMOVEFROMWISHLIST",payload:t.id})},children:"Remove"})]})]})]},t.id)},D=function(){var e=u().state;return Object(j.jsx)("span",{children:e.cartItems.reduce((function(e,t){return e+t.price*t.quantity}),0)})};function A(){var e=u(),t=e.state,c=e.dispatch;return Object(j.jsxs)("div",{className:"content-page",children:[Object(j.jsx)("h1",{children:"Your cart"}),t.cartItems.length>0?Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:"product-showcase",children:t.cartItems.map((function(e){return Object(j.jsx)(R,{item:e,type:"cart"},e.id)}))}),Object(j.jsxs)("div",{className:"cart-last",children:[Object(j.jsxs)("h2",{children:["total Price: \u20b9",Object(j.jsx)(D,{})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{className:"cart-btn btn-red",onClick:function(){return c({type:"EMPTYCART"})},children:"EMPTY CART"}),Object(j.jsx)(x.b,{to:"/billing",className:"cart-btn btn-blue",children:"CHECKOUT"})]})]})]}):Object(j.jsxs)("div",{class:"empty",children:[Object(j.jsx)("h2",{children:"Hey, it feels so light!"}),Object(j.jsx)("p",{children:"There is nothing in your Cart. Let's add some items."}),Object(j.jsx)(x.b,{to:"/products",className:"cart-btn btn-red",children:"GO TO PRODUCTS"})]})]})}c(27),c(59);var P=function(){var e=p(),t=e.dispatchProduct,c=e.showInventoryAll,a=e.fastDeliveryOnly;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"filter-bar",children:[Object(j.jsx)("h3",{children:"Filters"}),Object(j.jsxs)("fieldset",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{className:"input",type:"radio",name:"sort",onClick:function(){return t({type:"SORT_BY",payload:"HIGHTOLOW"})}}),Object(j.jsx)("label",{className:"label",children:"High To Low"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{className:"input",type:"radio",name:"sort",onClick:function(){return t({type:"SORT_BY",payload:"LOWTOHIGH"})}}),Object(j.jsx)("label",{className:"label",children:"Low To High"})]})]}),Object(j.jsxs)("fieldset",{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{className:"input",type:"checkbox",checked:a,onClick:function(){return t({type:"TOGGLE_DELIVERY"})}}),Object(j.jsx)("label",{className:"label",children:"Fast Delivery"})]}),Object(j.jsx)("input",{className:"input",type:"checkbox",checked:c,onClick:function(){return t({type:"TOGGLE_INVENTORY"})}}),Object(j.jsx)("label",{className:"label",children:"Includes Out of Stock"})]})]})})};var H=function(){return Object(j.jsx)("div",{className:"spinner-2 content-page"})};function M(e){var t=e.setRoute,c=p(),s=c.filteredData,n=c.dispatchProduct,r=c.setData,i=L(),l=i.loading,o=i.setLoading;return Object(a.useEffect)((function(){Object(g.a)(v.a.mark((function e(){var t,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),e.prev=1,e.next=4,S.a.get("https://podkart.yash2018.repl.co/products");case 4:t=e.sent,c=t.data,console.log({data:c}),r(c.products),N("Products loded successfully"),n({type:"ADD_PRODUCTS",payload:c.products}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("Page cannot be loaded");case 15:return e.prev=15,o(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[1,12,15,18]])})))()}),[]),Object(j.jsxs)("div",{className:"content-page",children:[Object(j.jsx)("h1",{children:"Products"}),Object(j.jsxs)("div",{className:"product-page-grid",children:[Object(j.jsx)(P,{}),Object(j.jsx)("div",{className:"product-showcase product-left",children:l?Object(j.jsx)(H,{}):s.map((function(e){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(R,{item:e,type:"productShowcase",setRoute:t},e.id)})}))})]})]})}function _(){var e=u().state;return Object(j.jsxs)("div",{className:"content-page",children:[Object(j.jsx)("h1",{children:"Your Wishlist"}),e.wishlist.length>0?Object(j.jsx)("div",{className:"product-showcase",children:e.wishlist.map((function(e){return Object(j.jsx)(R,{item:e,type:"wishList"},e.id)}))}):Object(j.jsxs)("div",{class:"empty",children:[Object(j.jsx)("h2",{children:"Hey, it feels so light!"}),Object(j.jsx)("p",{children:"There is nothing in your Wishlist. Let's add some items."}),Object(j.jsx)(x.b,{to:"/products",className:"cart-btn btn-red",children:"GO TO PRODUCTS"})]})]})}c(60);var W=function(){return Object(j.jsxs)("div",{className:"content-page",children:[Object(j.jsx)("div",{children:Object(j.jsx)(x.b,{to:"/Products",children:Object(j.jsx)("img",{className:"banner",src:"https://m.media-amazon.com/images/S/aplus-media/sc/7586170e-718b-4d0e-949e-1907e2c56953.__CR0,0,970,300_PT0_SX970_V1___.jpg",alt:""})})}),Object(j.jsx)("div",{className:"home-sub-title",children:"Explore"}),Object(j.jsxs)("div",{className:"home-recommendations",children:[Object(j.jsx)("div",{className:"home-product",children:Object(j.jsxs)(x.b,{className:"home-product-link",to:"/Products",children:[Object(j.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/I/61m8ZyGvL2L._SL1500_.jpg",alt:""}),Object(j.jsx)("div",{className:"sub-title",children:"Headset"})]})}),Object(j.jsx)("div",{className:"home-product",children:Object(j.jsxs)(x.b,{className:"home-product-link",to:"/Products",children:[Object(j.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/I/519ugH7N42S._SL1100_.jpg",alt:""}),Object(j.jsx)("div",{className:"sub-title",children:"Webcam"})]})}),Object(j.jsx)("div",{className:"home-product",children:Object(j.jsxs)(x.b,{className:"home-product-link",to:"/Products",children:[Object(j.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/I/71gUogqnbrL._SL1500_.jpg",alt:""}),Object(j.jsx)("div",{className:"sub-title",children:"Mic"})]})}),Object(j.jsx)("div",{className:"home-product",children:Object(j.jsxs)(x.b,{className:"home-product-link",to:"/Products",children:[Object(j.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/I/71Xymtt5czL._SL1500_.jpg",alt:""}),Object(j.jsx)("div",{className:"sub-title",children:"Arm Stand"})]})})]})]})},F=c.p+"static/media/commerce.7f2fa61b.png",q=function(){var e=p().onSearchData;return Object(j.jsx)(x.b,{to:"/products",className:"link-box",children:Object(j.jsx)("input",{className:"search-bar",placeholder:"Search for Products",onChange:e})})},U=function(e){var t=e.setRoute,c=u().state,a=L(),s=a.isUserLogin,n=a.setLogin;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"nav-box",children:[Object(j.jsxs)(x.b,{to:"/",children:[Object(j.jsx)("img",{className:"nav-logo",src:F,alt:""}),"THE PODKaRT"]}),Object(j.jsx)(q,{setRoute:t}),s?Object(j.jsxs)("div",{className:"right-menu",children:[Object(j.jsxs)("button",{className:"username-btn",children:["Hi, ",JSON.parse(localStorage.getItem("AuthForEcomm")).userName]}),Object(j.jsx)("div",{className:"dropdown-menu",children:Object(j.jsx)("button",{onClick:function(){n(!1),localStorage.removeItem("AuthForEcomm")},children:"Log Out"})})]}):Object(j.jsx)(x.c,{activeClassName:"selected",to:"/login",className:"nav-btn",children:"Login"}),Object(j.jsxs)("ul",{className:"navigation disable",children:[Object(j.jsx)("li",{children:Object(j.jsx)(x.c,{activeClassName:"selected",to:"/products",className:"nav-btn",children:"Products"})}),Object(j.jsx)("li",{children:Object(j.jsxs)(x.c,{className:"nav-btn",activeClassName:"selected",to:"/wishlist",children:[Object(j.jsx)("i",{className:"value fas fa-heart",children:Object(j.jsx)("span",{children:c.wishlist.length})})," "]})}),Object(j.jsx)("li",{children:Object(j.jsx)(x.c,{activeClassName:"selected",to:"/cart",className:"nav-btn",children:Object(j.jsx)("i",{className:"value fas fa-shopping-cart",children:Object(j.jsx)("span",{children:c.cartItems.reduce((function(e,t){return e+t.quantity}),0)})})})})]})]}),Object(j.jsx)("div",{className:"mobile-nav-bar",children:Object(j.jsxs)("ul",{className:"mob-nav-box",children:[Object(j.jsx)("li",{children:Object(j.jsx)(x.c,{end:!0,activeClassName:"selected",to:"/",className:"nav-btn",children:Object(j.jsx)("i",{className:"mob-nav-btn fas fa-home"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(x.c,{activeClassName:"selected",to:"/products",className:"nav-btn",children:Object(j.jsx)("i",{className:"mob-nav-btn fas fa-box"})})}),Object(j.jsx)("li",{children:Object(j.jsx)(x.c,{activeClassName:"selected",to:"/wishlist",className:"nav-btn",children:Object(j.jsx)("i",{className:"mob-nav-btn value fas fa-heart",children:Object(j.jsx)("span",{children:c.wishlist.length})})})}),Object(j.jsx)("li",{children:Object(j.jsx)(x.c,{activeClassName:"selected",to:"/cart",className:"nav-btn",children:Object(j.jsx)("i",{className:"mob-nav-btn value fas fa-shopping-cart",children:Object(j.jsx)("span",{children:c.cartItems.reduce((function(e,t){return e+t.quantity}),0)})})})})]})})]})},V=(c(61),function(){var e=u().state;return Object(j.jsx)("div",{className:"content-page",children:Object(j.jsxs)("div",{className:"row ",children:[Object(j.jsx)("div",{className:"col-75",children:Object(j.jsx)("div",{className:"container-billing",children:Object(j.jsxs)("form",{action:"/action_page.php",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-50",children:[Object(j.jsx)("h3",{children:"Billing Address"}),Object(j.jsxs)("label",{for:"fname",children:[Object(j.jsx)("i",{className:"fa fa-user"})," Full Name"]}),Object(j.jsx)("input",{type:"text",id:"fname",name:"firstname",placeholder:"John M. Doe"}),Object(j.jsxs)("label",{for:"email",children:[Object(j.jsx)("i",{className:"fa fa-envelope"})," Email"]}),Object(j.jsx)("input",{type:"text",id:"email",name:"email",placeholder:"john@example.com"}),Object(j.jsxs)("label",{for:"adr",children:[Object(j.jsx)("i",{className:"fa fa-address-card-o"})," Address"]}),Object(j.jsx)("input",{type:"text",id:"adr",name:"address",placeholder:"542 W. 15th Street"}),Object(j.jsxs)("label",{for:"city",children:[Object(j.jsx)("i",{className:"fa fa-institution"})," City"]}),Object(j.jsx)("input",{type:"text",id:"city",name:"city",placeholder:"New York"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-50",children:[Object(j.jsx)("label",{for:"state",children:"State"}),Object(j.jsx)("input",{type:"text",id:"state",name:"state",placeholder:"NY"})]}),Object(j.jsxs)("div",{className:"col-50",children:[Object(j.jsx)("label",{for:"zip",children:"Zip"}),Object(j.jsx)("input",{type:"text",id:"zip",name:"zip",placeholder:"10001"})]})]})]}),Object(j.jsxs)("div",{className:"col-50",children:[Object(j.jsx)("h3",{children:"Payment"}),Object(j.jsx)("label",{for:"fname",children:"Accepted Cards"}),Object(j.jsxs)("div",{className:"icon-container",children:[Object(j.jsx)("i",{className:"fa fa-cc-visa",style:{color:"navy"}}),Object(j.jsx)("i",{className:"fa fa-cc-amex",style:{color:"blue"}}),Object(j.jsx)("i",{className:"fa fa-cc-mastercard",style:{color:"red"}}),Object(j.jsx)("i",{className:"fa fa-cc-discover",style:{color:"orange"}})]}),Object(j.jsx)("label",{for:"cname",children:"Name on Card"}),Object(j.jsx)("input",{type:"text",id:"cname",name:"cardname",placeholder:"John More Doe"}),Object(j.jsx)("label",{for:"ccnum",children:"Credit card number"}),Object(j.jsx)("input",{type:"text",id:"ccnum",name:"cardnumber",placeholder:"1111-2222-3333-4444"}),Object(j.jsx)("label",{for:"expmonth",children:"Exp Month"}),Object(j.jsx)("input",{type:"text",id:"expmonth",name:"expmonth",placeholder:"September"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-50",children:[Object(j.jsx)("label",{for:"expyear",children:"Exp Year"}),Object(j.jsx)("input",{type:"text",id:"expyear",name:"expyear",placeholder:"2018"})]}),Object(j.jsxs)("div",{className:"col-50",children:[Object(j.jsx)("label",{for:"cvv",children:"CVV"}),Object(j.jsx)("input",{type:"text",id:"cvv",name:"cvv",placeholder:"352"})]})]})]})]}),Object(j.jsxs)("label",{children:[Object(j.jsx)("input",{type:"checkbox",checked:"checked",name:"sameadr"})," ","Shipping address same as billing"]}),Object(j.jsx)("input",{type:"submit",value:"Continue to checkout",className:"btn"})]})})}),Object(j.jsx)("div",{class:"col-25",children:Object(j.jsxs)("div",{class:"container-billing",children:[Object(j.jsxs)("h4",{children:["Cart",Object(j.jsxs)("span",{class:"price",style:{color:"black"},children:[Object(j.jsx)("i",{class:"fa fa-shopping-cart"}),Object(j.jsx)("b",{children:e.cartItems.reduce((function(e,t){return e+t.quantity}),0)})]})]}),e.cartItems.map((function(e){return Object(j.jsxs)("p",{children:[Object(j.jsx)("a",{href:"#Billing",children:e.name})," x ",e.quantity," ",Object(j.jsxs)("span",{class:"price",children:["\u20b9",e.price*e.quantity]})]})})),Object(j.jsx)("hr",{}),Object(j.jsxs)("p",{children:["Total"," ",Object(j.jsx)("span",{class:"price",style:{color:"black"},children:Object(j.jsxs)("b",{children:["\u20b9",Object(j.jsx)(D,{})]})})]})]})})]})})}),G=function(){return Object(j.jsx)("div",{className:"content-page",children:Object(j.jsx)("h1",{children:"404 Error. Page not found."})})},Y=(c(28),function(){var e=Object(a.useRef)(null),t=L().loading,c=Object(a.useState)({email:"",password:""}),s=Object(r.a)(c,2),n=s[0],i=s[1],o=Object(a.useState)({email:"",password:""}),d=Object(r.a)(o,2),b=d[0],u=d[1],O=Object(a.useState)(!1),h=Object(r.a)(O,2),m=h[0],p=(h[1],Object(C.g)().state),f=L().AuthenticateWithCredentials;Object(a.useEffect)((function(){e.current.focus()}),[]);var v=function(e){var t=e.target,c=t.value,a=t.name;i((function(e){return Object(l.a)(Object(l.a)({},e),{},{[a]:c})}))},g=function(){if(function(){u({email:"",password:""});var e=!0;return n.email||(u((function(e){return Object(l.a)(Object(l.a)({},e),{},{email:"Enter a valid email"})})),e=!1),n.password||(u((function(e){return Object(l.a)(Object(l.a)({},e),{},{password:"Enter a valid password"})})),e=!1),e}()){var e=(null===p||void 0===p?void 0:p.from)?p.from:"/";f(n,e)}};return Object(j.jsx)(j.Fragment,{children:t?Object(j.jsx)(H,{}):Object(j.jsx)("div",{className:"content-page show-flex",children:Object(j.jsxs)("div",{className:" container  ".concat(m?"right-panel-active":""),id:"container",children:[Object(j.jsx)("div",{className:"form-container sign-in-container",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(j.jsx)("h1",{children:"Sign In"}),Object(j.jsx)("input",{onChange:v,className:"input-form ",value:n.email,type:"email",name:"email",placeholder:"Email",ref:e}),Object(j.jsx)("small",{children:b.email}),Object(j.jsx)("input",{onChange:v,className:"input-form ",value:n.password,type:"password",name:"password",placeholder:"Password"}),Object(j.jsx)("small",{children:b.password}),Object(j.jsx)("button",{className:"button-form",onClick:function(){return g()},children:"Sign In"})]})}),Object(j.jsx)("div",{className:"overlay-container",children:Object(j.jsx)("div",{className:"overlay",children:Object(j.jsxs)("div",{className:"overlay-panel overlay-right",children:[Object(j.jsx)("h1",{children:"Hello, Friend!"}),Object(j.jsx)("p",{children:"Enter your details and start journey with us"}),Object(j.jsx)(x.b,{to:"/signup",className:"button-form ghost",id:"signUp",children:"Sign Up"})]})})})]})})})}),B=function(){var e=Object(a.useRef)(null),t=L().loading,c=Object(a.useState)(!0),s=Object(r.a)(c,2),n=s[0],i=(s[1],Object(C.g)().state,L().createUserCredentials),o=Object(a.useState)({name:"",email:"",password:""}),d=Object(r.a)(o,2),b=d[0],u=d[1],O=Object(a.useState)({name:"",email:"",password:""}),h=Object(r.a)(O,2),m=h[0],p=h[1];Object(a.useEffect)((function(){e.current.focus()}),[]);var f=function(e){return new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$").test(e)},v=function(e){return e.length>7},g=function(){p({name:"",email:"",password:""});var e=!0;return b.email&&f||(p((function(e){return Object(l.a)(Object(l.a)({},e),{},{email:"Enter a valid Email"})})),e=!1),b.password&&v||(p((function(e){return Object(l.a)(Object(l.a)({},e),{},{password:"Password must be 8 characters long and should contain a number "})})),e=!1),b.name||(p((function(e){return Object(l.a)(Object(l.a)({},e),{},{name:"Enter a valid name"})})),e=!1),e},y=function(e){var t=e.target,c=t.value,a=t.name;u((function(e){return Object(l.a)(Object(l.a)({},e),{},{[a]:c})}))};return Object(j.jsx)(j.Fragment,{children:t?Object(j.jsx)(H,{}):Object(j.jsx)("div",{className:"content-page show-flex",children:Object(j.jsxs)("div",{className:" container  ".concat(n?"right-panel-active":""),id:"container",children:[Object(j.jsx)("div",{className:"form-container sign-up-container",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(j.jsx)("h1",{children:"Create Account"}),Object(j.jsx)("input",{type:"text",name:"name",onChange:y,placeholder:"Name",className:"input-form ",value:b.name,ref:e}),Object(j.jsx)("small",{children:m.name}),Object(j.jsx)("input",{type:"email",name:"email",onChange:y,placeholder:"Email",className:"input-form ",value:b.email}),Object(j.jsx)("small",{children:m.email}),Object(j.jsx)("input",{type:"password",name:"password",onChange:y,placeholder:"Password",className:"input-form ",value:b.password}),Object(j.jsx)("small",{children:m.password}),Object(j.jsx)("button",{onClick:function(){g()&&i(b)},className:"button-form",children:"SignUp"})]})}),Object(j.jsx)("div",{className:"overlay-container",children:Object(j.jsx)("div",{className:"overlay",children:Object(j.jsxs)("div",{className:"overlay-panel overlay-left",children:[Object(j.jsx)("h1",{children:"Welcome Back!"}),Object(j.jsx)("p",{children:"To keep connected with us please login with your personal info"}),Object(j.jsx)(x.b,{to:"/login",className:"button-form ghost",id:"signIn",children:"Sign In"})]})})})]})})})},z=c(29);function J(e){var t=e.path,c=Object(z.a)(e,["path"]);return L().isUserLogin?Object(j.jsx)(C.b,Object(l.a)(Object(l.a)({},c),{},{path:t})):Object(j.jsx)(C.a,{state:{from:t},replace:!0,to:"/login"})}function Z(){var e=L().setLogin;return Object(a.useEffect)((function(){if(localStorage.getItem("AuthForEcomm")){var t=JSON.parse(localStorage.getItem("AuthForEcomm")).isUserLoggedIn;e(t)}else e(!1)}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(U,{}),Object(j.jsxs)(C.d,{children:[Object(j.jsx)(C.b,{path:"/",element:Object(j.jsx)(W,{})}),Object(j.jsx)(C.b,{path:"/products",element:Object(j.jsx)(M,{})}),Object(j.jsx)(C.b,{path:"/cart",element:Object(j.jsx)(A,{})}),Object(j.jsx)(C.b,{path:"/*",element:Object(j.jsx)(G,{})}),Object(j.jsx)(C.b,{path:"/login",element:Object(j.jsx)(Y,{})}),Object(j.jsx)(C.b,{path:"/signup",element:Object(j.jsx)(B,{})}),Object(j.jsx)(J,{path:"/wishlist",element:Object(j.jsx)(_,{})}),Object(j.jsx)(J,{path:"/billing",element:Object(j.jsx)(V,{})})]})]})})}y.a.configure();var K=document.getElementById("root");n.a.render(Object(j.jsx)(a.StrictMode,{children:Object(j.jsx)(x.a,{children:Object(j.jsx)(T,{children:Object(j.jsx)(b,{children:Object(j.jsx)(m,{children:Object(j.jsx)(Z,{})})})})})}),K)}},[[62,1,2]]]);
//# sourceMappingURL=main.a010ea2f.chunk.js.map