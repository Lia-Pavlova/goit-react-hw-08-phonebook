(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{259:function(n,e,t){n.exports={cancelBtn:"CancelBtnStyle_cancelBtn__l4v10"}},286:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return qn}));var a,r,c,i,o,s,d,b,u,l,x,j,p,f,m=t(15),g=t(0),h=t(275),O=t.n(h),w=t(21),v=t(36),y=t(298),k=t(285),z=t(293),C=t(272),S=t.n(C),A=t(197),N=t(269),B=t.n(N),Z=t(271),H=t.n(Z),I=t(270),D=t.n(I),P=t(14),q=t(20),F=q.a.div(a||(a=Object(P.a)(["\n  ul {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n\n  li:not(:last-of-type) {\n    margin-right: 15px;\n  }\n"]))),J=t(233),$=t(235),_=t(1),E={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",justifyContend:"center",alignItems:"center",width:340,height:370,background:"linear-gradient(to right,#e9ce367a 0%,#f3a15d 30%,#ea2a2abb 50%,#f3a15d 70%,#e9ce367a 100%)",border:"1px solid #000",borderRadius:"25px",boxShadow:10,p:3},L=function(n){var e=n.modalShow,t=n.modalHide,a=n.children;return Object(_.jsx)(J.a,{open:e,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(_.jsx)($.a,{sx:E,children:a})})},M=t(10),R=t.n(M),T=t(18),G=t(268),K=t.n(G),Q=t(260),U=t.n(Q),V=t(259),W=t.n(V),X=t(291),Y=t(261),nn=t(240),en=q.a.div(r||(r=Object(P.a)(["\n  box-sizing: border-box;\n  margin: 60px auto;\n  width: 340px;\n"]))),tn=Object(q.a)(nn.a)(c||(c=Object(P.a)(["\n  padding: 10px;\n  border-radius: 20px;\n\n  h2 {\n    margin: 20px 0 0;\n    text-align: center;\n    color: rgb(83, 67, 65);\n    text-shadow: 1px 1px 3px rgba(59, 22, 4, 0.76);\n    font-family: 'Dancing Script', cursive;\n    font-size: 30px;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n\n    padding: 30px;\n  }\n"]))),an=Object(q.a)(Y.a)(i||(i=Object(P.a)(["\n  width: 100%;\n\n  &:not(:first-of-type) {\n    margin-top: 12px;\n  }\n"]))),rn=Object(q.a)(X.a)(o||(o=Object(P.a)(["\n  margin: 30px auto 0;\n  width: 140px;\n  border-radius: 3em;\n  background: linear-gradient(\n    to right,\n    #e9ce367a 0%,\n    #f7b705 50%,\n    #e9ce367a 100%\n  );\n  background-size: 200%;\n  background-position: 100%;\n  box-shadow: 3px 3px 6px #cbced1, -1px -1px 6px #cbced1;\n  transition: all 0.7s;\n\n  &:hover {\n    background: linear-gradient(\n      to right,\n      #e9ce367a 0%,\n      #f7b705 50%,\n      #e9ce367a 100%\n    );\n    background-size: 200%;\n    background-position: 0px;\n    box-shadow: none;\n  }\n"]))),cn=t(101),on=t(28),sn=t(92),dn="^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f ]*)*$",bn=function(n){var e=n.name;return!!new RegExp(dn).test(e)||(on.a.warning("Incorrect name format entered!"),!1)},un=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=sn.b.getState(),a=t.contacts,r=!1;switch(e.type){case"add":return(r=Boolean(a.items.find((function(e){return e.number===n.number}))))&&on.a.duplicationNumberSuccess(),r;case"edit":return(r=Boolean(a.items.filter((function(e){return e.id!==n.id})).find((function(e){return e.number===n.number}))))&&on.a.duplicationNumberSuccess(),r;default:on.a.warning("something went wrong")}},ln=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=sn.b.getState(),a=t.contacts,r=!1;switch(e.type){case"add":return(r=Boolean(a.items.find((function(e){return e.name===n.name}))))&&on.a.duplicationNameSuccess(),r;case"edit":return(r=Boolean(a.items.filter((function(e){return e.id!==n.id})).find((function(e){return e.name===n.name}))))&&on.a.duplicationNameSuccess(),r;default:on.a.warning("something went wrong")}},xn=function(n){var e=n.contact,t=n.modalHide,a=Object(w.c)(cn.d),r=Object(w.b)(),c=Object(g.useState)(e.name),i=Object(m.a)(c,2),o=i[0],s=i[1],d=Object(g.useState)(e.number),b=Object(m.a)(d,2),u=b[0],l=b[1],x=function(){var n=Object(T.a)(R.a.mark((function n(a){var c;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),c={id:e.id,name:o,number:u},bn(c)){n.next=4;break}return n.abrupt("return");case 4:if(!ln(c,{type:"edit"})){n.next=6;break}return n.abrupt("return");case 6:if(!un(c,{type:"edit"})){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,r(v.b(c));case 10:return n.next=12,t();case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(_.jsx)(en,{children:Object(_.jsxs)(tn,{elevation:3,className:"paper",children:[Object(_.jsx)("h2",{children:"Contact information:"}),Object(_.jsxs)("form",{onSubmit:function(n){return x(n)},children:[Object(_.jsx)(an,{required:!0,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f ]*)*$",label:"Name",name:"name",type:"text",variant:"standard",color:"warning",size:"small",value:o,onChange:function(n){return s(n.target.value)}}),Object(_.jsx)(an,{required:!0,label:"Phone number",name:"number",type:"tel",variant:"standard",color:"warning",size:"small",title:"Must be 3-15 digits only",value:u,onChange:function(n){return l(n.target.value)}}),Object(_.jsx)(rn,{type:"submit",loading:a,loadingPosition:"center",startIcon:Object(_.jsx)(K.a,{}),variant:"contained",children:"Save"}),Object(_.jsx)(rn,{className:W.a.cancelBtn,type:"submit",onClick:t,loadingPosition:"center",startIcon:Object(_.jsx)(U.a,{}),variant:"contained",children:"Cancel"})]})]})})},jn=function(n){var e=n.contact,t=Object(w.b)(),a=Object(g.useState)(!1),r=Object(m.a)(a,2),c=r[0],i=r[1];return Object(_.jsxs)(F,{children:[Object(_.jsxs)("ul",{children:[Object(_.jsx)("li",{children:Object(_.jsx)("a",{href:"tel:".concat(e.number),children:Object(_.jsx)(A.a,{edge:"end","aria-label":"call",children:Object(_.jsx)(B.a,{})})})}),Object(_.jsx)("li",{children:Object(_.jsx)(A.a,{edge:"end","aria-label":"edit",onClick:function(){return i(!0)},children:Object(_.jsx)(D.a,{})})}),Object(_.jsx)("li",{children:Object(_.jsx)(A.a,{edge:"end","aria-label":"delete",onClick:function(){return t(v.d(e.id))},children:Object(_.jsx)(H.a,{})})})]}),Object(_.jsx)(L,{modalShow:c,modalHide:function(){return i(!1)},children:Object(_.jsx)(xn,{contact:e,modalHide:function(){return i(!1)}})})]})},pn=t(289),fn=Object(q.a)(pn.a)(s||(s=Object(P.a)(["\n  &:nth-of-type(2n + 1) {\n    background-color: rgba(241, 241, 241, 0.5);\n  }\n\n  &:nth-of-type(2n) {\n    background-color: rgba(83, 67, 65, 0.1);\n  }\n\n  .name {\n    width: 43%;\n    flex-grow: 0;\n    color: #6e5b32;\n    font-weight: 600;\n    font-size: 20px;\n    font-family: Dancing Script;\n  }\n\n  .number {\n    color: #524240;\n    // text-shadow: -1px -1px 10px rgba(59, 22, 4, 0.76);\n    font-weight: 600;\n    font-family: Dancing Script;\n\n    flex-grow: 1;\n  }\n"]))),mn=(q.a.div(d||(d=Object(P.a)(["\n  display: flex;\n  align-items: center;\n  background-color: rgba(218, 209, 197);\n\n  &:nth-of-type(1) {\n    justify-self: start;\n  }\n\n  &:nth-of-type(2) {\n    justify-self: center;\n  }\n"]))),function(n){var e=n.contact;return Object(_.jsxs)(fn,{secondaryAction:Object(_.jsx)(jn,{contact:e}),children:[Object(_.jsx)(y.a,{children:Object(_.jsx)(z.a,{children:Object(_.jsx)(S.a,{})})}),Object(_.jsx)(k.a,{primary:e.name,className:"name"}),Object(_.jsx)(k.a,{primary:e.number,className:"number"})]})}),gn=t(243),hn=Object(q.a)(gn.a)(b||(b=Object(P.a)(["\n  padding-bottom: 100px;\n  color: #6e5b32;\n  font-weight: 600;\n  font-size: 40px;\n  max-width: 60%;\n  margin: 0 auto;\n"]))),On=t(77),wn=t(297),vn=function(){var n=Object(w.c)(cn.c),e=Object(w.c)(cn.d),t=Object(w.b)();return Object(g.useEffect)((function(){return t(v.a()),function(){return t(Object(On.c)())}}),[t]),Object(_.jsx)(_.Fragment,{children:e?Object(_.jsx)($.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:Object(_.jsx)(wn.a,{sx:{color:"orange"}})}):Object(_.jsx)(hn,{children:n.map((function(n){return Object(_.jsx)(mn,{contact:n},n.id)}))})})},yn=t(294),kn=Object(q.a)(yn.a)(u||(u=Object(P.a)(["\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  transform: translate(-50%, -50%);\n  height: 60px;\n  border-radius: 50%;\n  background: linear-gradient(\n    to right,\n    #e9ce367a 0%,\n    #f7b705 50%,\n    #e9ce367a 100%\n  );\n  background-size: 200%;\n  background-position: 100%;\n  box-shadow: 3px 3px 6px #cbced1, -1px -1px 6px #cbced1;\n  transition: all 0.7s;\n\n  &:hover {\n    background: linear-gradient(\n      to right,\n      #e9ce367a 0%,\n      #f7b705 50%,\n      #e9ce367a 100%\n    );\n    background-size: 200%;\n    background-position: 0px;\n    box-shadow: none;\n  }\n"]))),zn=t(67),Cn=t(274),Sn=t.n(Cn),An=t(273),Nn=t.n(An),Bn=q.a.div(l||(l=Object(P.a)(["\n  box-sizing: border-box;\n  margin: 60px auto;\n  width: 340px;\n"]))),Zn=Object(q.a)(nn.a)(x||(x=Object(P.a)(["\n  padding: 10px;\n  border-radius: 20px;\n\n  h2 {\n    margin: 20px 0 0;\n    text-align: center;\n    color: rgb(83, 67, 65);\n    text-shadow: 1px 1px 3px rgba(59, 22, 4, 0.76);\n    // font-weight: 700;\n    font-size: 30px;\n    font-family: 'Dancing Script', cursive;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n\n    padding: 30px;\n  }\n"]))),Hn=Object(q.a)(Y.a)(j||(j=Object(P.a)(["\n  width: 100%;\n\n  &:not(:first-of-type) {\n    margin-top: 12px;\n  }\n"]))),In=Object(q.a)(Nn.a)(p||(p=Object(P.a)(["\n  width: 100%;\n\n  &:not(:first-of-type) {\n    margin-top: 12px;\n  }\n"]))),Dn=Object(q.a)(X.a)(f||(f=Object(P.a)(["\n  margin: 30px auto 0;\n  width: 110px;\n\n  border-radius: 3em;\n  background: linear-gradient(\n    to right,\n    #e9ce367a 0%,\n    #f7b705 50%,\n    #e9ce367a 100%\n  );\n  background-size: 200%;\n  background-position: 100%;\n  box-shadow: 3px 3px 6px #cbced1, -1px -1px 6px #cbced1;\n  transition: all 0.7s;\n\n  &:hover {\n    background: linear-gradient(\n      to right,\n      #e9ce367a 0%,\n      #f7b705 50%,\n      #e9ce367a 100%\n    );\n    background-size: 200%;\n    background-position: 0px;\n    box-shadow: none;\n  }\n"]))),Pn=function(n){var e=n.modalHide,t=Object(w.c)(cn.d),a=Object(w.b)(),r=Object(g.useState)(""),c=Object(m.a)(r,2),i=c[0],o=c[1],s=Object(g.useState)(""),d=Object(m.a)(s,2),b=d[0],u=d[1],l=Object(w.c)(cn.a),x=function(){var n=Object(T.a)(R.a.mark((function n(t){var r;return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),!l.find((function(n){return n.name.toLowerCase()===i.toLowerCase()}))){n.next=3;break}return n.abrupt("return",zn.b.error("".concat(i," already exist")));case 3:if(bn(r={number:b,name:i})){n.next=6;break}return n.abrupt("return");case 6:if(!ln(r,{type:"add"})){n.next=8;break}return n.abrupt("return");case 8:if(!un(r,{type:"add"})){n.next=10;break}return n.abrupt("return");case 10:return n.next=12,a(v.c(r));case 12:return n.next=14,e();case 14:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(_.jsx)(Bn,{children:Object(_.jsxs)(Zn,{elevation:3,className:"paper",children:[Object(_.jsx)("h2",{children:"Contact information:"}),Object(_.jsxs)("form",{onSubmit:x,children:[Object(_.jsx)(Hn,{required:"The name must consist only in letters",autoComplete:"off",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f ]*)*$",label:"Name",name:"name",type:"text",variant:"standard",title:"Can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc.",color:"warning",size:"small",value:i,onChange:function(n){return o(n.target.value)}}),Object(_.jsx)(In,{required:"true",autoComplete:"off",label:"Phone number",name:"number",type:"tel",variant:"standard","data-cy":"user-phone",defaultCountry:"ua",color:"warning",size:"small",value:b,onChange:function(n){return u(n)}}),Object(_.jsx)(Dn,{type:"submit",loading:t,loadingPosition:"center",startIcon:Object(_.jsx)(Sn.a,{}),variant:"contained",children:"Add"}),Object(_.jsx)(Dn,{className:W.a.cancelBtn,type:"submit",onClick:e,loadingPosition:"center",startIcon:Object(_.jsx)(U.a,{}),variant:"contained",children:"Cancel"})]})]})})},qn=function(){var n=Object(g.useState)(!1),e=Object(m.a)(n,2),t=e[0],a=e[1];return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(vn,{}),Object(_.jsx)(kn,{variant:"contained",onClick:function(){return a(!0)},children:Object(_.jsx)(O.a,{})}),Object(_.jsx)(L,{modalShow:t,modalHide:function(){return a(!1)},children:Object(_.jsx)(Pn,{modalHide:function(){return a(!1)}})})]})}}}]);
//# sourceMappingURL=contacts-page.847c1f25.chunk.js.map