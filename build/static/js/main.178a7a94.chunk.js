(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[4],{101:function(t,e,n){"use strict";n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return o}));var r=n(29),a=n(61),c=function(t){return t.contacts.isLoading},s=function(t){return t.contacts.filter},o=Object(a.a)([function(t){return Object(r.a)(t.contacts.items).sort((function(t,e){return t.name.localeCompare(e.name)}))},s],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}))},130:function(t,e,n){t.exports={container:"Clock_container__37Vd0"}},153:function(t,e,n){},185:function(t,e,n){"use strict";n.r(e);var r,a,c,s,o,i,u,l,d,p=n(0),f=n.n(p),b=n(39),j=n.n(b),h=n(45),g=n(21),O=n(119),x=(n(153),n(17)),m=n(69),v=n(235),w=n(234),y=n(24),k=n(10),C=n.n(k),L=n(18),T=n(15),S=n(236),E=n(237),I=n(14),z=n(20),U=Object(z.a)(h.c)(r||(r=Object(I.a)(["\n  position: relative;\n  display: flex;\n  // font-size: 25px;\n  font-weight: 600;\n  font-family: Dancing;\n  text-shadow: -2px -1px 2px rgba(59, 22, 4, 0.425);\n\n  color: #fff;\n  text-decoration: none;\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    display: block;\n    width: 100%;\n    transform: translate(-50%, 19px) scaleX(0);\n    border: 1.5px solid #fff;\n  }\n  &.selected::after {\n    transform: translate(-50%, 19px) scaleX(1);\n  }\n"]))),W=z.a.div(a||(a=Object(I.a)(["\n  box-sizing: content-box;\n  align-self: center;\n\n  ul {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n\n  li {\n    display: flex;\n  }\n\n  li:not(:last-of-type) {\n    margin-right: 20px;\n  }\n"]))),V=n(125),R=n.n(V),B=n(123),N=n.n(B),P=n(1),F=function(){return Object(P.jsx)(W,{children:Object(P.jsxs)("ul",{children:[Object(P.jsx)("li",{children:Object(P.jsxs)(U,{to:"/login",activeClassName:"selected",children:[Object(P.jsx)(N.a,{}),"Login"]})}),Object(P.jsx)("li",{children:Object(P.jsxs)(U,{to:"/register",activeClassName:"selected",children:[Object(P.jsx)(R.a,{}),"Registration"]})})]})})},M=z.a.div(c||(c=Object(I.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  width: 100%;\n"]))),A=n(126),D=n.n(A),_=n(4),G=n(7),J=n(135),X=n(194),H=Object(G.a)("div")((function(t){var e,n=t.theme;return e={position:"relative",borderRadius:n.shape.borderRadius,backgroundColor:Object(J.a)(n.palette.common.white,.15),"&:hover":{backgroundColor:Object(J.a)(n.palette.common.white,.25)},marginRight:n.spacing(2),marginLeft:12,width:"100%",display:{transition:n.transitions.create("transform")}},Object(_.a)(e,n.breakpoints.up("sm"),{marginLeft:n.spacing(3),width:"auto"}),Object(_.a)(e,n.breakpoints.up("md"),{marginLeft:n.spacing(3),width:"auto",position:"absolute",top:"50%",left:"35%",transform:"translate(-50%, -50%)"}),e})),q=Object(G.a)("div")((function(t){return{padding:t.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),K=Object(G.a)(X.c)((function(t){var e=t.theme;return{color:"inherit","& .MuiInputBase-input":Object(_.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),")"),transition:e.transitions.create("width"),width:"100%",color:"#524240"},e.breakpoints.up("md"),{width:"0.1ch","&:focus":{width:"25ch"}})}})),Q=n(101),Y=n(77),Z=function(){var t=Object(g.c)(Q.a),e=Object(g.b)();return Object(P.jsxs)(H,{children:[Object(P.jsx)(q,{children:Object(P.jsx)(D.a,{})}),Object(P.jsx)(K,{placeholder:"Find by name\u2026",inputProps:{"aria-label":"filter"},value:t,onChange:function(t){return e(Object(Y.a)(t.target.value))}})]})},$=n(238),tt=n(127),et=n.n(tt),nt=Object(z.a)(h.b)(s||(s=Object(I.a)(["\n  display: flex;\n  color: #fff;\n  text-decoration: none;\n"]))),rt=Object(z.a)($.a)(o||(o=Object(I.a)(["\n  display: flex;\n  flex-grow: 0;\n  align-self: center;\n  font-size: 45px;\n  font-family: Dancing Script, cursive;\n  text-shadow: -4px -4px 3px rgba(59, 22, 4, 0.425);\n  font-weight: 700;\n"]))),at=Object(z.a)(et.a)(i||(i=Object(I.a)(["\n  display: block;\n  align-self: center;\n  margin-right: 18px;\n  color: #fff;\n"]))),ct=function(){return Object(P.jsx)(rt,{variant:"h6",component:"div",sx:{flexGrow:1},children:Object(P.jsxs)(nt,{to:"/",children:[Object(P.jsx)(at,{fontSize:"large"}),"Phonebook"]})})},st=n(193),ot=n(196),it=n(128),ut=n.n(it),lt=n(129),dt=n.n(lt),pt=n(242),ft=n.p+"static/media/default-logo-w500.b82381d7.png",bt=n(241),jt=Object(z.a)(bt.a)(u||(u=Object(I.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),ht=z.a.div(l||(l=Object(I.a)(["\n  margin: 10px auto;\n  width: 120px;\n  height: 120px;\n\n  img {\n    display: block;\n    height: 100%;\n  }\n"]))),gt=n(41),Ot=function(){var t=Object(g.c)(gt.d),e=Object(g.c)(gt.c);return Object(P.jsx)(pt.a,{sx:{minWidth:275},children:Object(P.jsxs)(jt,{children:[Object(P.jsx)($.a,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:"User profile"}),Object(P.jsx)(ht,{children:Object(P.jsx)("img",{src:ft,alt:""})}),Object(P.jsxs)($.a,{sx:{mb:1.5},color:"text.secondary",children:["name: ",Object(P.jsx)("b",{children:t})]}),Object(P.jsxs)($.a,{sx:{mb:1.5},color:"text.secondary",children:["email: ",Object(P.jsx)("b",{children:e})]})]})})},xt=n(199),mt=Object(z.a)(xt.a)(d||(d=Object(I.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #f00;\n  font-size: 20px;\n"]))),vt=function(t){var e=t.handleMenu,n=t.anchorEl,r=t.handleClose,a=t.handleLogout;return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(ot.a,{size:"large","aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:e,color:"inherit",children:Object(P.jsx)(ut.a,{})}),Object(P.jsxs)(st.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:Boolean(n),onClose:r,children:[Object(P.jsx)(Ot,{}),Object(P.jsxs)(mt,{onClick:a,children:[Object(P.jsx)(dt.a,{}),"Logout"]})]})]})},wt=n(130),yt=n.n(wt);function kt(){var t=Object(p.useState)(new Date),e=Object(T.a)(t,2),n=e[0],r=e[1];return Object(p.useEffect)((function(){var t=setInterval((function(){r(new Date)}),1e3);return function(){clearInterval(t)}}),[]),Object(P.jsx)("div",{className:yt.a.container,children:Object(P.jsxs)("p",{children:[" Current time: ",n.toLocaleTimeString()]})})}var Ct,Lt=function(){var t=Object(x.g)(),e=Object(g.c)(gt.a),n=Object(g.b)(),r=Object(p.useState)(null),a=Object(T.a)(r,2),c=a[0],s=a[1],o=function(){var e=Object(L.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(y.b()),s(null),t.push({pathname:"/login"});case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(P.jsx)(w.a,{sx:{flexGrow:1},children:Object(P.jsx)(S.a,{position:"fixed",style:{background:"linear-gradient(to right,#e9ce36c2 0%,#f3a15d 30%,#ea2a2abb 50%,#f3a15d 70%,#e9ce36c2 100%)",border:"#e98e185e"},children:Object(P.jsx)(E.a,{children:Object(P.jsxs)(M,{children:[Object(P.jsx)(ct,{}),Object(P.jsx)(kt,{}),e&&Object(P.jsx)(Z,{}),!e&&Object(P.jsx)(F,{}),e&&Object(P.jsx)(vt,{handleMenu:function(t){s(t.currentTarget)},anchorEl:c,handleClose:function(){s(null)},handleLogout:o})]})})})})},Tt=z.a.div(Ct||(Ct=Object(I.a)(["\n  padding-top: 70px;\n  margin: 0 auto;\n  max-width: 1280px;\n"]))),St=n(48),Et=n(84),It=["children","redirectTo"],zt=function(t){var e=t.children,n=t.redirectTo,r=void 0===n?"/":n,a=Object(Et.a)(t,It),c=Object(g.c)(gt.a);return Object(P.jsx)(x.b,Object(St.a)(Object(St.a)({},a),{},{children:c?e:Object(P.jsx)(x.a,{to:r})}))},Ut=["children","restricted","redirectTo"],Wt=function(t){var e=t.children,n=t.restricted,r=void 0!==n&&n,a=t.redirectTo,c=void 0===a?"/contacts":a,s=Object(Et.a)(t,Ut),o=Object(g.c)(gt.a)&&r;return Object(P.jsx)(x.b,Object(St.a)(Object(St.a)({},s),{},{children:o?Object(P.jsx)(x.a,{to:c}):e}))},Vt=Object(p.lazy)((function(){return Promise.all([n.e(0),n.e(3)]).then(n.bind(null,288))})),Rt=Object(p.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,289))})),Bt=Object(p.lazy)((function(){return Promise.all([n.e(0),n.e(8),n.e(2)]).then(n.bind(null,287))})),Nt=Object(p.lazy)((function(){return n.e(1).then(n.bind(null,293))})),Pt=function(){var t=Object(g.c)(gt.b),e=Object(g.b)();return Object(p.useEffect)((function(){e(y.c())}),[e]),Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(Lt,{}),Object(P.jsx)(m.a,{autoClose:2500,position:"top-center",backgroundColor:"red"}),Object(P.jsx)(Tt,{children:Object(P.jsx)(p.Suspense,{fallback:Object(P.jsx)(w.a,{sx:{width:"100%"},children:Object(P.jsx)(v.a,{sx:{background:"#eacb04"}})}),children:Object(P.jsxs)(x.d,{children:[Object(P.jsx)(Wt,{path:"/",exact:!0,restricted:!0,children:Object(P.jsx)(x.a,{to:"/login"})}),Object(P.jsx)(Wt,{path:"/login",restricted:!0,children:Object(P.jsx)(Vt,{})}),Object(P.jsx)(Wt,{path:"/register",restricted:!0,children:Object(P.jsx)(Rt,{})}),Object(P.jsx)(zt,{path:"/contacts",children:!t&&Object(P.jsx)(Bt,{})}),Object(P.jsx)(Wt,{children:Object(P.jsx)(Nt,{})})]})})})]})},Ft=n(91);j.a.render(Object(P.jsx)(f.a.StrictMode,{children:Object(P.jsx)(g.a,{store:Ft.b,children:Object(P.jsx)(O.a,{loading:null,persistor:Ft.a,children:Object(P.jsx)(h.a,{children:Object(P.jsx)(Pt,{})})})})}),document.getElementById("root"))},24:function(t,e,n){"use strict";n.d(e,"d",(function(){return u})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return p}));var r=n(10),a=n.n(r),c=n(18),s=n(26),o=n(32),i=n(27),u=Object(s.b)("user/signup",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,s,u,l,d;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,o.a.user.registerUser(e);case 4:return c=t.sent,s=c.data,o.a.token.set(s.token),i.a.signUpSuccess(s.user.name),t.abrupt("return",s);case 11:return t.prev=11,t.t0=t.catch(1),u=t.t0.response,l=u.status,d=u.statusText,i.a.signUpError(l),t.abrupt("return",r({status:l,statusText:d}));case 16:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()),l=Object(s.b)("user/login",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,s,u,l,d;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,o.a.user.loginUser(e);case 4:return c=t.sent,s=c.data,o.a.token.set(s.token),i.a.logInSuccess(s.user.name),t.abrupt("return",s);case 11:return t.prev=11,t.t0=t.catch(1),u=t.t0.response,l=u.status,d=u.statusText,i.a.logInError(l),t.abrupt("return",r({status:l,statusText:d}));case 16:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}()),d=Object(s.b)("user/logout",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,s,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,o.a.user.logoutUser();case 4:o.a.token.unset(),t.next=12;break;case 7:return t.prev=7,t.t0=t.catch(1),c=t.t0.response,s=c.status,u=c.statusText,i.a.logOutError(s),t.abrupt("return",r({status:s,statusText:u}));case 12:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e,n){return t.apply(this,arguments)}}()),p=Object(s.b)("user/refresh",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,s,u,l,d,p,f,b;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n.getState,c=n.rejectWithValue,t.prev=1,s=r(),u=s.auth.token){t.next=6;break}return t.abrupt("return",c({status:null,statusText:"No token found"}));case 6:return o.a.token.set(u),t.next=9,o.a.user.getCurrentUser();case 9:return l=t.sent,d=l.data,t.abrupt("return",d);case 14:return t.prev=14,t.t0=t.catch(1),p=t.t0.response,f=p.status,b=p.statusText,i.a.logOutError(f),t.abrupt("return",c({status:f,statusText:b}));case 19:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(e,n){return t.apply(this,arguments)}}())},27:function(t,e,n){"use strict";var r=n(69),a=(n(173),{position:"top-center",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),c={warning:function(t){r.b.error(t,a)},success:function(t){r.b.success(t,a)},signUpSuccess:function(t){c.success("The user has been successfully created. Welcome, ".concat(t,"!"))},logInSuccess:function(t){c.success("Welcome, ".concat(t,"!"))},signUpError:function(t){400===t&&c.warning("An account with the specified mail already exists.!"),500===t&&c.warning("There was a problem creating a user. Try again!")},logInError:function(t){400===t&&c.warning("Wrong login or password")},logOutError:function(t){500===t&&c.warning("Logout error, please try again")},duplicationNameSuccess:function(){c.warning("\u0421ontact with this name is already present")},duplicationNumberSuccess:function(){c.warning("\u0421ontact with this number is already present")},addContactSuccess:function(){c.success("\u0421ontact added successfully")},addContactError:function(t){400===t&&c.warning("Contact creation error")},fetchContactsError:function(t){500===t&&c.warning("Server error. Try again")},deleteContactSuccess:function(){c.success("Contact removed successfully")},deleteContactError:function(t){500===t&&c.warning("Server error. Try again")},updateContactSuccess:function(){c.success("\u0421ontact updated successfully")},updateContactError:function(t){400===t&&c.warning("Contact update error")}};e.a=c},32:function(t,e,n){"use strict";var r=n(10),a=n.n(r),c=n(18),s=n(40),o=n.n(s);o.a.defaults.baseURL="https://connections-api.herokuapp.com";var i={set:function(t){o.a.defaults.headers.common.Authorization="Bearer ".concat(t)},unset:function(){o.a.defaults.headers.common.Authorization=""}},u=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("users/signup",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/users/current");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),d=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("/users/login",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("/users/logout");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(c.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("/contacts");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.post("/contacts",e);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.delete("/contacts/".concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=Object(c.a)(a.a.mark((function t(e,n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.patch("/contacts/".concat(e),n);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),g={user:{registerUser:u,getCurrentUser:l,loginUser:d,logoutUser:p},contacts:{getContacts:f,postContact:b,deleteContact:j,patchContact:h},token:i};e.a=g},36:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return d})),n.d(e,"b",(function(){return p}));var r=n(10),a=n.n(r),c=n(18),s=n(26),o=n(32),i=n(27),u=Object(s.b)("contacts/fetch",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,s,u,l,d;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,o.a.contacts.getContacts();case 4:return c=t.sent,s=c.data,t.abrupt("return",s);case 9:return t.prev=9,t.t0=t.catch(1),u=t.t0.response,l=u.status,d=u.statusText,i.a.fetchContactsError(l),t.abrupt("return",r({status:l,statusText:d}));case 14:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),l=Object(s.b)("contacts/post",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,s,u,l,d;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,o.a.contacts.postContact(e);case 4:return c=t.sent,s=c.data,i.a.addContactSuccess(),t.abrupt("return",s);case 10:return t.prev=10,t.t0=t.catch(1),u=t.t0.response,l=u.status,d=u.statusText,i.a.addContactError(l),t.abrupt("return",r({status:l,statusText:d}));case 15:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}()),d=Object(s.b)("contacts/remove",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,s,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,o.a.contacts.deleteContact(e);case 4:return i.a.deleteContactSuccess(),t.abrupt("return",e);case 8:return t.prev=8,t.t0=t.catch(1),c=t.t0.response,s=c.status,u=c.statusText,i.a.deleteContactError(s),t.abrupt("return",r({status:s,statusText:u}));case 13:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),p=Object(s.b)("contacts/patch",function(){var t=Object(c.a)(a.a.mark((function t(e,n){var r,c,s,u,l,d,p,f,b;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.id,c=e.name,s=e.number,u=n.rejectWithValue,t.prev=2,t.next=5,o.a.contacts.patchContact(r,{name:c,number:s});case 5:return l=t.sent,d=l.data,i.a.updateContactSuccess(),t.abrupt("return",d);case 11:return t.prev=11,t.t0=t.catch(2),p=t.t0.response,f=p.status,b=p.statusText,i.a.updateContactError(f),t.abrupt("return",u({status:f,statusText:b}));case 16:case"end":return t.stop()}}),t,null,[[2,11]])})));return function(e,n){return t.apply(this,arguments)}}())},41:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s}));var r=function(t){return t.auth.user.name},a=function(t){return t.auth.user.email},c=function(t){return t.auth.isLoggedIn},s=function(t){return t.auth.isLoading}},77:function(t,e,n){"use strict";n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return l}));var r,a=n(4),c=n(26),s=n(36),o=Object(c.c)({name:"contactItems",initialState:{items:[],filter:"",isLoading:!1,error:null},reducers:{resetContacts:function(t){t.items=[]},changeFilter:function(t,e){t.filter=e.payload}},extraReducers:(r={},Object(a.a)(r,s.a.pending,(function(t){t.isLoading=!0})),Object(a.a)(r,s.a.fulfilled,(function(t,e){t.isLoading=!1,t.items=e.payload})),Object(a.a)(r,s.a.rejected,(function(t,e){t.isLoading=!1,t.error=e.payload})),Object(a.a)(r,s.c.pending,(function(t){t.isLoading=!0})),Object(a.a)(r,s.c.fulfilled,(function(t,e){t.isLoading=!1,t.items.push(e.payload)})),Object(a.a)(r,s.c.rejected,(function(t,e){t.isLoading=!1,t.error=e.payload})),Object(a.a)(r,s.d.pending,(function(t){t.isLoading=!0})),Object(a.a)(r,s.d.fulfilled,(function(t,e){t.isLoading=!1,t.items=t.items.filter((function(t){return t.id!==e.payload}))})),Object(a.a)(r,s.d.rejected,(function(t,e){t.isLoading=!1,t.error=e.payload})),Object(a.a)(r,s.b.pending,(function(t){t.isLoading=!0})),Object(a.a)(r,s.b.fulfilled,(function(t,e){t.isLoading=!1,t.items=t.items.map((function(t){return t.id!==e.payload.id?t:e.payload}))})),Object(a.a)(r,s.b.rejected,(function(t,e){t.isLoading=!1,t.error=e.payload})),r)}),i=o.actions,u=i.resetContacts,l=i.changeFilter;e.b=o.reducer},91:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"a",(function(){return g}));var r,a=n(30),c=n(26),s=n(131),o=n.n(s),i=n(49),u=n(4),l=n(24),d=Object(c.c)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isLoading:!1,error:null},extraReducers:(r={},Object(u.a)(r,l.d.pending,(function(t){t.isLoading=!0})),Object(u.a)(r,l.d.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0,t.isLoading=!1})),Object(u.a)(r,l.d.rejected,(function(t,e){t.isLoading=!1,t.error=e.payload})),Object(u.a)(r,l.a.pending,(function(t){t.isLoading=!0})),Object(u.a)(r,l.a.fulfilled,(function(t,e){t.user=e.payload.user,t.token=e.payload.token,t.isLoggedIn=!0,t.isLoading=!1})),Object(u.a)(r,l.a.rejected,(function(t,e){t.isLoading=!1,t.error=e.payload})),Object(u.a)(r,l.b.pending,(function(t){t.isLoading=!0})),Object(u.a)(r,l.b.fulfilled,(function(t,e){t.user.name=null,t.user.email=null,t.token=null,t.isLoggedIn=!1,t.isLoading=!1})),Object(u.a)(r,l.b.rejected,(function(t,e){t.isLoading=!1,t.error=e.payload})),Object(u.a)(r,l.c.pending,(function(t){t.isLoading=!0})),Object(u.a)(r,l.c.fulfilled,(function(t,e){t.user=e.payload,t.isLoggedIn=!0,t.isLoading=!1})),Object(u.a)(r,l.c.rejected,(function(t,e){t.isLoading=!1,t.isLoggedIn=!1,t.error=e.payload})),r)}).reducer,p=n(77),f={key:"auth",storage:o.a,whitelist:["token"]},b=Object(i.g)(f,d),j=Object(a.b)({auth:b,contacts:p.b}),h=Object(c.a)({reducer:j,middleware:function(t){return t({serializableCheck:{ignoredActions:[i.a,i.f,i.b,i.c,i.d,i.e]}})},devtools:!1}),g=Object(i.h)(h)}},[[185,6,7]]]);
//# sourceMappingURL=main.178a7a94.chunk.js.map