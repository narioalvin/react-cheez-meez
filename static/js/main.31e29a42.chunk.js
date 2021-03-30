(this.webpackJsonpcheezmeez=this.webpackJsonpcheezmeez||[]).push([[0],{115:function(e,t){},118:function(e,t,a){},119:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},167:function(e,t,a){"use strict";a.r(t);var n,c=a(0),r=a.n(c),s=a(60),l=a.n(s),m=a(19),o=a(1),i=a(8),u=a(61),A=a.n(u),E=(a(75),function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),l=Object(i.a)(s,2),o=l[0],u=l[1];return r.a.createElement("div",{className:"outer-container"},r.a.createElement("div",{className:"inner-container"},r.a.createElement("center",null,r.a.createElement("img",{width:"150",src:A.a,alt:"login"})),r.a.createElement("h1",{className:"heading"},"CheezMeez"),r.a.createElement("div",null,r.a.createElement("input",{placeholder:"Name",className:"joinInput",type:"text",onChange:function(e){return n(e.target.value)}})),r.a.createElement("div",{className:"mt-20"},r.a.createElement("select",{className:"room-select",onChange:function(e){return u(e.target.value)}},r.a.createElement("option",{default:!0},"Select Room"),r.a.createElement("option",{value:"Angular"},"Angular"),r.a.createElement("option",{value:"Vue"},"Vue"),r.a.createElement("option",{value:"React"},"React"))),r.a.createElement(m.b,{onClick:function(e){return a&&o?null:e.preventDefault()},to:"/chat?name=".concat(a,"&room=").concat(o)},r.a.createElement("button",{className:"button mt-20",type:"submit"},"JOIN ROOM"))))}),f=a(69),g=a(63),d=a.n(g),v=a(64),p=a.n(v),N=a(65),h=a.n(N),b=(a(118),function(e){var t=e.room;return r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"left-inner-container"},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"right-inner-container"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{src:h.a,alt:"close"}))))}),O=a(66),j=a.n(O),x=a(67),C=a.n(x),S=(a(119),function(e){var t=e.users,a=e.room;return r.a.createElement("div",{className:"sidebar"},t?r.a.createElement("div",null,r.a.createElement("div",{className:"side-header"},r.a.createElement("img",{width:"20",src:C.a,alt:""})," ",r.a.createElement("h3",null,"CheezMeez")),r.a.createElement("div",{className:"side-content"},r.a.createElement("h4",{className:"label"},"Room Name"),r.a.createElement("div",{className:"active-item"},r.a.createElement("h5",null,"# ",a)),r.a.createElement("h4",{className:"label"},"Active"),r.a.createElement("div",{className:"active-list"},r.a.createElement("h5",null,t.map((function(e){var t=e.name;return r.a.createElement("div",{key:t,className:"active-item"},r.a.createElement("img",{alt:"Online Icon",src:j.a}),r.a.createElement("span",null,t))})))))):null)}),I=a(68),y=a.n(I),R=a(32),z=a.n(R),M=(a(162),function(e){var t=e.message,a=t.user,n=t.text,c=!1;return a===e.name.trim().toLowerCase()&&(c=!0),c?r.a.createElement("div",{className:"message-container justify-end"},r.a.createElement("div",{className:"messageBox bg-blue"},r.a.createElement("p",{className:"messageText white-text"},z.a.emojify(n)))):r.a.createElement("div",{className:"message-container justify-start"},r.a.createElement("div",{className:"messageBox"},r.a.createElement("p",{className:"sent-text"},a),r.a.createElement("p",{className:"messageText dark-text"},z.a.emojify(n))))}),w=(a(163),function(e){var t=e.messages,a=e.name;return r.a.createElement(y.a,{className:"messages"},t.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(M,{message:e,name:a}))})))}),U=(a(164),function(e){var t=e.message,a=e.setMessage,n=e.sendMessage;return r.a.createElement("form",{className:"form"},r.a.createElement("input",{className:"input",type:"text",placeholder:"Type message..",value:t,onChange:function(e){return a(e.target.value)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),r.a.createElement("button",{className:"send-btn",onClick:function(e){return n(e)}},"SEND"))}),k=(a(165),function(e){var t=e.location,a=Object(c.useState)(""),s=Object(i.a)(a,2),l=s[0],m=s[1],o=Object(c.useState)(""),u=Object(i.a)(o,2),A=u[0],E=u[1],g=Object(c.useState)(""),v=Object(i.a)(g,2),N=v[0],h=v[1],O=Object(c.useState)(""),j=Object(i.a)(O,2),x=j[0],C=j[1],I=Object(c.useState)([]),y=Object(i.a)(I,2),R=y[0],z=y[1],M="https://cheez-meez.herokuapp.com/";Object(c.useEffect)((function(){var e=d.a.parse(t.search),a=e.name,c=e.room;return n=p()(M),m(a),E(c),n.emit("join",{name:a,room:c},(function(){})),function(){n.emit("disconnect"),n.off()}}),[M,t.search]),Object(c.useEffect)((function(){n.on("message",(function(e){z([].concat(Object(f.a)(R),[e]))})),n.on("roomData",(function(e){var t=e.users;h(t)}))}),[R]);return r.a.createElement("div",{className:"outerContainer"},N.length>0?r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"left-container"},r.a.createElement(S,{users:N,room:A})),r.a.createElement("div",{className:"right-container"},r.a.createElement(b,{room:A}),r.a.createElement(w,{messages:R,name:l}),r.a.createElement(U,{message:x,setMessage:C,sendMessage:function(e){e.preventDefault(),x&&n.emit("sendMessage",x,(function(){return C("")}))}}))):r.a.createElement("div",{className:"loader4"}))}),Q=(a(166),function(){return r.a.createElement(m.a,{basename:"/react-cheez-meez/"},r.a.createElement(o.a,{path:"/",exact:!0,component:E}),r.a.createElement(o.a,{path:"/chat",exact:!0,component:k}))});l.a.render(r.a.createElement(Q,null),document.querySelector("#root"))},61:function(e,t,a){e.exports=a.p+"static/media/login.731dd5c1.svg"},65:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII="},66:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII="},67:function(e,t,a){e.exports=a.p+"static/media/logo.617164f2.svg"},70:function(e,t,a){e.exports=a(167)},75:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.31e29a42.chunk.js.map