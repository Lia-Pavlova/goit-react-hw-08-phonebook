(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[2],{259:function(n,e,t){n.exports={cancelBtn:"CancelBtnStyle_cancelBtn__l4v10"}},286:function(n,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return Zn}));var a,r,c,i,o,s,d,b,l,u,j,x,p,f,g=t(15),m=t(0),h=t(275),O=t.n(h),v=t(21),w=t(36),y=t(298),k=t(285),S=t(293),z=t(272),C=t.n(z),N=t(196),A=t(269),B=t.n(A),H=t(271),I=t.n(H),D=t(270),P=t.n(D),Z=t(14),q=t(20),F=q.a.div(a||(a=Object(Z.a)(["\n  ul {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n  }\n\n  li:not(:last-of-type) {\n    margin-right: 15px;\n  }\n"]))),J=t(232),_=t(234),E=t(1),M={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",justifyContend:"center",alignItems:"center",width:340,height:370,background:"linear-gradient(to right,#e9ce367a 0%,#f3a15d 30%,#ea2a2abb 50%,#f3a15d 70%,#e9ce367a 100%)",border:"1px solid #000",borderRadius:"25px",boxShadow:10,p:3},R=function(n){var e=n.modalShow,t=n.modalHide,a=n.children;return Object(E.jsx)(J.a,{open:e,onClose:t,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(E.jsx)(_.a,{sx:M,children:a})})},$=t(10),T=t.n($),G=t(18),K=t(268),L=t.n(K),Q=t(260),U=t.n(Q),V=t(259),W=t.n(V),X=t(291),Y=t(261),nn=t(239),en=q.a.div(r||(r=Object(Z.a)(["\n  box-sizing: border-box;\n  margin: 60px auto;\n  width: 340px;\n"]))),tn=Object(q.a)(nn.a)(c||(c=Object(Z.a)(["\n  padding: 10px;\n  border-radius: 20px;\n\n  h2 {\n    margin: 20px 0 0;\n    text-align: center;\n    color: rgb(83, 67, 65);\n    text-shadow: 1px 1px 3px rgba(59, 22, 4, 0.76);\n    font-family: 'Dancing Script', cursive;\n    font-size: 30px;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n\n    padding: 30px;\n  }\n"]))),an=Object(q.a)(Y.a)(i||(i=Object(Z.a)(["\n  width: 100%;\n\n  &:not(:first-of-type) {\n    margin-top: 12px;\n  }\n"]))),rn=Object(q.a)(X.a)(o||(o=Object(Z.a)(["\n  margin: 30px auto 0;\n  width: 140px;\n  border-radius: 3em;\n  background: linear-gradient(\n    to right,\n    #e9ce367a 0%,\n    #f7b705 50%,\n    #e9ce367a 100%\n  );\n  background-size: 200%;\n  background-position: 100%;\n  box-shadow: 3px 3px 6px #cbced1, -1px -1px 6px #cbced1;\n  transition: all 0.7s;\n\n  &:hover {\n    background: linear-gradient(\n      to right,\n      #e9ce367a 0%,\n      #f7b705 50%,\n      #e9ce367a 100%\n    );\n    background-size: 200%;\n    background-position: 0px;\n    box-shadow: none;\n  }\n"]))),cn=t(101),on=t(28),sn=t(92),dn="^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f ]*)*$",bn=function(n){var e=n.name;return!!new RegExp(dn).test(e)||(on.a.warning("Incorrect name format entered!"),!1)},ln=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=sn.b.getState(),a=t.contacts,r=!1;switch(e.type){case"add":return(r=Boolean(a.items.find((function(e){return e.number===n.number}))))&&on.a.duplicationNumberSuccess(),r;case"edit":return(r=Boolean(a.items.filter((function(e){return e.id!==n.id})).find((function(e){return e.number===n.number}))))&&on.a.duplicationNumberSuccess(),r;default:on.a.warning("something went wrong")}},un=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=sn.b.getState(),a=t.contacts,r=!1;switch(e.type){case"add":return(r=Boolean(a.items.find((function(e){return e.name===n.name}))))&&on.a.duplicationNameSuccess(),r;case"edit":return(r=Boolean(a.items.filter((function(e){return e.id!==n.id})).find((function(e){return e.name===n.name}))))&&on.a.duplicationNameSuccess(),r;default:on.a.warning("something went wrong")}},jn=function(n){var e=n.contact,t=n.modalHide,a=Object(v.c)(cn.c),r=Object(v.b)(),c=Object(m.useState)(e.name),i=Object(g.a)(c,2),o=i[0],s=i[1],d=Object(m.useState)(e.number),b=Object(g.a)(d,2),l=b[0],u=b[1],j=function(){var n=Object(G.a)(T.a.mark((function n(a){var c;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),c={id:e.id,name:o,number:l},!un(c,{type:"edit"})){n.next=4;break}return n.abrupt("return");case 4:if(!ln(c,{type:"edit"})){n.next=6;break}return n.abrupt("return");case 6:return n.next=8,r(w.b(c));case 8:return n.next=10,t();case 10:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(E.jsx)(en,{children:Object(E.jsxs)(tn,{elevation:3,className:"paper",children:[Object(E.jsx)("h2",{children:"Contact information:"}),Object(E.jsxs)("form",{onSubmit:function(n){return j(n)},children:[Object(E.jsx)(an,{required:!0,label:"Name",variant:"standard",color:"warning",size:"small",value:o,onChange:function(n){return s(n.target.value)}}),Object(E.jsx)(an,{required:!0,label:"Phone number",variant:"standard",color:"warning",size:"small",title:"Must be 3-15 digits only",value:l,onChange:function(n){return u(n.target.value)}}),Object(E.jsx)(rn,{type:"submit",loading:a,loadingPosition:"center",startIcon:Object(E.jsx)(L.a,{}),variant:"contained",children:"Save"}),Object(E.jsx)(rn,{className:W.a.cancelBtn,type:"submit",onClick:t,loadingPosition:"center",startIcon:Object(E.jsx)(U.a,{}),variant:"contained",children:"Cancel"})]})]})})},xn=function(n){var e=n.contact,t=Object(v.b)(),a=Object(m.useState)(!1),r=Object(g.a)(a,2),c=r[0],i=r[1];return Object(E.jsxs)(F,{children:[Object(E.jsxs)("ul",{children:[Object(E.jsx)("li",{children:Object(E.jsx)("a",{href:"tel:".concat(e.number),children:Object(E.jsx)(N.a,{edge:"end","aria-label":"call",children:Object(E.jsx)(B.a,{})})})}),Object(E.jsx)("li",{children:Object(E.jsx)(N.a,{edge:"end","aria-label":"edit",onClick:function(){return i(!0)},children:Object(E.jsx)(P.a,{})})}),Object(E.jsx)("li",{children:Object(E.jsx)(N.a,{edge:"end","aria-label":"delete",onClick:function(){return t(w.d(e.id))},children:Object(E.jsx)(I.a,{})})})]}),Object(E.jsx)(R,{modalShow:c,modalHide:function(){return i(!1)},children:Object(E.jsx)(jn,{contact:e,modalHide:function(){return i(!1)}})})]})},pn=t(289),fn=Object(q.a)(pn.a)(s||(s=Object(Z.a)(["\n  &:nth-of-type(2n + 1) {\n    background-color: rgba(241, 241, 241, 0.5);\n  }\n\n  &:nth-of-type(2n) {\n    background-color: rgba(83, 67, 65, 0.1);\n  }\n\n  .name {\n    width: 43%;\n    flex-grow: 0;\n    color: #6e5b32;\n    font-weight: 600;\n    font-size: 20px;\n    font-family: Dancing Script;\n  }\n\n  .number {\n    color: #524240;\n    // text-shadow: -1px -1px 10px rgba(59, 22, 4, 0.76);\n    font-weight: 600;\n    font-family: Dancing Script;\n\n    flex-grow: 1;\n  }\n"]))),gn=(q.a.div(d||(d=Object(Z.a)(["\n  display: flex;\n  align-items: center;\n  background-color: rgba(218, 209, 197);\n\n  &:nth-of-type(1) {\n    justify-self: start;\n  }\n\n  &:nth-of-type(2) {\n    justify-self: center;\n  }\n"]))),function(n){var e=n.contact;return Object(E.jsxs)(fn,{secondaryAction:Object(E.jsx)(xn,{contact:e}),children:[Object(E.jsx)(y.a,{children:Object(E.jsx)(S.a,{children:Object(E.jsx)(C.a,{})})}),Object(E.jsx)(k.a,{primary:e.name,className:"name"}),Object(E.jsx)(k.a,{primary:e.number,className:"number"})]})}),mn=t(240),hn=Object(q.a)(mn.a)(b||(b=Object(Z.a)(["\n  padding-bottom: 100px;\n  color: #6e5b32;\n  font-weight: 600;\n  font-size: 40px;\n  max-width: 60%;\n  margin: 0 auto;\n"]))),On=t(77),vn=t(297),wn=function(){var n=Object(v.c)(cn.b),e=Object(v.c)(cn.c),t=Object(v.b)();return Object(m.useEffect)((function(){return t(w.a()),function(){return t(Object(On.c)())}}),[t]),Object(E.jsx)(E.Fragment,{children:e?Object(E.jsx)(_.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:Object(E.jsx)(vn.a,{sx:{color:"orange"}})}):Object(E.jsx)(hn,{children:n.map((function(n){return Object(E.jsx)(gn,{contact:n},n.id)}))})})},yn=t(294),kn=Object(q.a)(yn.a)(l||(l=Object(Z.a)(["\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  transform: translate(-50%, -50%);\n  height: 60px;\n  border-radius: 50%;\n  background: linear-gradient(\n    to right,\n    #e9ce367a 0%,\n    #f7b705 50%,\n    #e9ce367a 100%\n  );\n  background-size: 200%;\n  background-position: 100%;\n  box-shadow: 3px 3px 6px #cbced1, -1px -1px 6px #cbced1;\n  transition: all 0.7s;\n\n  &:hover {\n    background: linear-gradient(\n      to right,\n      #e9ce367a 0%,\n      #f7b705 50%,\n      #e9ce367a 100%\n    );\n    background-size: 200%;\n    background-position: 0px;\n    box-shadow: none;\n  }\n"]))),Sn=t(274),zn=t.n(Sn),Cn=t(273),Nn=t.n(Cn),An=q.a.div(u||(u=Object(Z.a)(["\n  box-sizing: border-box;\n  margin: 60px auto;\n  width: 340px;\n"]))),Bn=Object(q.a)(nn.a)(j||(j=Object(Z.a)(["\n  padding: 10px;\n  border-radius: 20px;\n\n  h2 {\n    margin: 20px 0 0;\n    text-align: center;\n    color: rgb(83, 67, 65);\n    text-shadow: 1px 1px 3px rgba(59, 22, 4, 0.76);\n    // font-weight: 700;\n    font-size: 30px;\n    font-family: 'Dancing Script', cursive;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n\n    padding: 30px;\n  }\n"]))),Hn=Object(q.a)(Y.a)(x||(x=Object(Z.a)(["\n  width: 100%;\n\n  &:not(:first-of-type) {\n    margin-top: 12px;\n  }\n"]))),In=Object(q.a)(Nn.a)(p||(p=Object(Z.a)(["\n  width: 100%;\n\n  &:not(:first-of-type) {\n    margin-top: 12px;\n  }\n"]))),Dn=Object(q.a)(X.a)(f||(f=Object(Z.a)(["\n  margin: 30px auto 0;\n  width: 110px;\n\n  border-radius: 3em;\n  background: linear-gradient(\n    to right,\n    #e9ce367a 0%,\n    #f7b705 50%,\n    #e9ce367a 100%\n  );\n  background-size: 200%;\n  background-position: 100%;\n  box-shadow: 3px 3px 6px #cbced1, -1px -1px 6px #cbced1;\n  transition: all 0.7s;\n\n  &:hover {\n    background: linear-gradient(\n      to right,\n      #e9ce367a 0%,\n      #f7b705 50%,\n      #e9ce367a 100%\n    );\n    background-size: 200%;\n    background-position: 0px;\n    box-shadow: none;\n  }\n"]))),Pn=function(n){var e=n.modalHide,t=Object(v.c)(cn.c),a=Object(v.b)(),r=Object(m.useState)(""),c=Object(g.a)(r,2),i=c[0],o=c[1],s=Object(m.useState)(""),d=Object(g.a)(s,2),b=d[0],l=d[1],u=function(){var n=Object(G.a)(T.a.mark((function n(t){var r;return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.preventDefault(),bn(r={number:b,name:i})){n.next=4;break}return n.abrupt("return");case 4:if(!un(r,{type:"add"})){n.next=6;break}return n.abrupt("return");case 6:if(!ln(r,{type:"add"})){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,a(w.c(r));case 10:return n.next=12,e();case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(E.jsx)(An,{children:Object(E.jsxs)(Bn,{elevation:3,className:"paper",children:[Object(E.jsx)("h2",{children:"Contact information:"}),Object(E.jsxs)("form",{onSubmit:function(n){return u(n)},children:[Object(E.jsx)(Hn,{required:"The name must consist only in letters",autoComplete:"off",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f ]*)*$",label:"Name",name:"name",type:"text",variant:"standard",title:"Can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan etc.",color:"warning",size:"small",value:i,onChange:function(n){return o(n.target.value)}}),Object(E.jsx)(In,{required:"true",autoComplete:"off",label:"Phone number",name:"number",type:"tel",variant:"standard","data-cy":"user-phone",defaultCountry:"ua",color:"warning",size:"small",value:b,onChange:function(n){return l(n)}}),Object(E.jsx)(Dn,{type:"submit",loading:t,loadingPosition:"center",startIcon:Object(E.jsx)(zn.a,{}),variant:"contained",children:"Add"}),Object(E.jsx)(Dn,{className:W.a.cancelBtn,type:"submit",onClick:e,loadingPosition:"center",startIcon:Object(E.jsx)(U.a,{}),variant:"contained",children:"Cancel"})]})]})})},Zn=function(){var n=Object(m.useState)(!1),e=Object(g.a)(n,2),t=e[0],a=e[1];return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(wn,{}),Object(E.jsx)(kn,{variant:"contained",onClick:function(){return a(!0)},children:Object(E.jsx)(O.a,{})}),Object(E.jsx)(R,{modalShow:t,modalHide:function(){return a(!1)},children:Object(E.jsx)(Pn,{modalHide:function(){return a(!1)}})})]})}}}]);
//# sourceMappingURL=contacts-page.ed2ae081.chunk.js.map