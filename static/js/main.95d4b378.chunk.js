(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{48:function(e,t,r){},60:function(e,t,r){"use strict";r.r(t);var n=r(12),a=r.n(n),c=r(15),i=r(1),s=r.n(i),d=r(21),o=r.n(d),l=r(11),u=(r(48),r(7)),m=r.n(u),b=r(37),j=r(30),x=r(38),h=r(16),f=r(5),p=r(3),O=r(34),v=r.n(O),g=r(19),y="addTeamMember",N="editTeamMember",k="deleteTeamMember",w="counter/incremented",A="counter/decremented",C="changeTheme",I=function(e){return{type:y,payload:e}},E=function(e,t){return{type:N,payload:{id:e,user:t}}},T=r(2),F=function(e){var t=e.value,r=e.onInput,n=e.maxLength,a=e.placeholder,c=e.type,i=void 0===c?"text":c,s=e.error,d=void 0!==s&&s;return Object(T.jsx)("input",{type:i,value:t,maxLength:n,placeholder:a,onChange:function(e){return r&&r(e.target.value)},className:m()("p-2 px-3 h-10 md:h-12 w-full focus:outline-none focus:border-blue-500 text-sm md:text-base border text-gray-700 rounded-md","dark:bg-gray-800 dark:text-white  dark:focus:border-blue-500",{"border-red-300 dark:border-red-600":d,"border-gray-300 dark:border-gray-800":!d})})},L=function(e){var t=e.error,r=e.onClick,n=e.children;return Object(T.jsx)("button",{type:"button",onClick:function(){return r&&r()},className:m()("px-6 py-2 text-sm md:text-base focus:outline-none rounded-md",{"bg-blue-500 hover:bg-blue-600 text-white":!t},{"bg-white-500 hover:bg-red-50 text-red-500 border border-gray-200 dark:border-gray-800 hover:bg-opacity-5":t}),children:n})},S=r(35),z=function(e){var t=e.title,r=e.close,n=e.subtitle,a=e.onAction,c=e.className;return Object(T.jsxs)("div",{className:c,children:[Object(T.jsx)("div",{className:"flex justify-end",children:Object(T.jsx)("div",{className:m()("text-blue-500 cursor-pointer",{"transform rotate-45":!0===r}),onClick:function(){return a&&a()},children:Object(T.jsx)(S.a,{size:28})})}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h1",{className:"text-xl md:text-2xl font-medium text-gray-700 dark:text-white",children:t}),Object(T.jsx)("p",{className:"text-sm md:text-base font-medium text-gray-500 dark:text-white",children:n})]})]})},M=function(e){var t=e.children,r=e.className,n=void 0===r?"":r;return Object(T.jsx)("section",{className:"min-h-screen",children:Object(T.jsx)("div",{className:"md:p-6 p-3",children:Object(T.jsx)("div",{className:"bg-white dark:bg-gray-900 rounded-md overflow-hidden ".concat(n).trim(),children:t})})})},P=r(36),B=function(e){var t=e.item,r=e.onClick,n=t.firstName,a=t.lastName,c=t.email,i=t.phone,s=t.isAdmin;return t?Object(T.jsx)("div",{onClick:function(){return r&&r(t)},className:"p-3 md:px-6 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800 border-t border-gray-200 dark:border-gray-800 last:border-b",children:Object(T.jsxs)("div",{className:"flex flex-wrap",children:[Object(T.jsx)("div",{className:"mr-3 md:mr-6 mb-3 bg-gray-300 md:w-12 md:h-12 w-8 h-8 rounded-full overflow-hidden",children:Object(T.jsx)(P.a,{className:"md:w-12 md:h-14 w-8 h-10 text-gray-100"})}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h3",{className:"text-gray-600 dark:text-white text-sm md:text-base font-medium",children:"".concat("".concat(n," ").concat(a)," ").concat(s?"(admin)":"").trim()}),Object(T.jsx)("p",{className:"text-xs md:text-sm dark:opacity-75",children:i}),Object(T.jsx)("p",{className:"text-xs md:text-sm dark:opacity-75",children:c})]})]})}):null},D=function(e){var t=e.items,r=Object(f.f)();return t?Object(T.jsx)("div",{className:"py-3 md:py-6",children:t.map((function(e,t){return Object(T.jsx)(B,{item:e,onClick:function(e){return r.push("".concat(e.id,"/edit"))}},t)}))}):null},J=function(e){return e.team.members},R=function(e){return e.settings.theme},U=r(31),V=r(13),W=function(e){var t=Object(i.useState)(null!==e&&void 0!==e?e:{}),r=Object(U.a)(t,2),n=r[0],a=r[1],c=Object(i.useState)({}),s=Object(U.a)(c,2),d=s[0],o=s[1];return{user:n,userValidation:d,setUserForm:function(e,t){if(void 0===n[e])throw new Error("Invalid key");o((function(r){return Object(p.a)(Object(p.a)({},r),{},Object(V.a)({},e,!!t))})),a((function(r){return Object(p.a)(Object(p.a)({},r),{},Object(V.a)({},e,t))}))},validate:function(){o((function(e){return Object(p.a)(Object(p.a)({},e),function(e){return Object.keys(e).reduce((function(t,r){return Object(p.a)(Object(p.a)({},t),{},Object(V.a)({},r,!!e[r]))}),{})}(n))}))}}},Y=function(e){var t=e.type,r=void 0===t?"add":t,n=Object(l.c)(J),s=Object(f.g)(),d=Object(l.b)(),o=Object(f.f)(),u=W({isAdmin:!1,firstName:"",lastName:"",email:"",phone:""}),b=u.user,j=u.userValidation,x=u.setUserForm,h=u.validate,O=function(e,t){return n.findIndex((function(r){return r[e]===t}))>-1},y=function(){var e=Object(c.a)(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,h(),t=j.firstName,!j.email||!t){e.next=13;break}if("add"!==r){e.next=12;break}if(!O("email",b.email)){e.next=8;break}return alert("Member with email id already exists"),e.abrupt("return");case 8:d(I(Object(p.a)({id:v.a.generate()},b))),o.push("/"),e.next=13;break;case 12:"edit"===r&&(n=s.id,O("id",n)?n&&(d(E(n,Object(p.a)({},b))),o.push("/")):alert("This user id doesnt exists"));case 13:e.next=19;break;case 15:throw e.prev=15,e.t0=e.catch(0),console.error(e.t0),new Error("Error adding team member");case 19:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=s.id;O("id",e)?e&&(d(function(e){return{type:k,payload:e}}(e)),o.push("/")):alert("This user id doesnt exists")};return Object(i.useEffect)((function(){if("edit"===r){var e=s.id;if(e){var t=n.findIndex((function(t){return t.id===e}));if(t>-1){var a=n[t],c=a.firstName,i=a.lastName,d=a.email,o=a.phone,l=a.isAdmin;x("firstName",c),x("lastName",i),x("isAdmin",l),x("email",d),x("phone",o)}}}}),[s,r,n]),Object(T.jsxs)(M,{children:[Object(T.jsx)(z,{close:!0,className:"p-3 md:p-6",subtitle:"Set email, name, phone and role.",title:"".concat("add"===r?"Add":"Edit"," a team member"),onAction:function(){return o.push("/")}}),Object(T.jsxs)("div",{className:"p-3 md:p-6 border-t dark:border-gray-800",children:[Object(T.jsx)("div",{className:"font-medium md:text-xl text-gray-700 pb-3 md:pb-4 dark:text-white",children:"Info"}),Object(T.jsxs)("div",{className:"flex gap-3 md:gap-5 flex-col md:flex-row",children:[Object(T.jsx)(F,{value:b.firstName,placeholder:"First name",error:!1===j.firstName,onInput:function(e){return x("firstName",e)}}),Object(T.jsx)(F,{value:b.lastName,placeholder:"Last name",onInput:function(e){return x("lastName",e)}})]}),Object(T.jsxs)("div",{className:"flex gap-3 md:gap-5 pt-3 md:pt-5 flex-col md:flex-row",children:[Object(T.jsx)(F,{value:b.email,placeholder:"Email",error:!1===j.email,onInput:function(e){return x("email",e)}}),Object(T.jsx)(F,{type:"number",maxLength:10,value:b.phone,placeholder:"Phone",onInput:function(e){return x("phone",e)}})]})]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{className:"font-medium md:text-xl text-gray-700 p-3 md:p-6 pb-0 md:pb-0 md:pt-2 dark:text-white",children:"Role"}),Object(T.jsxs)("div",{className:"py-3 md:py-4 md:pb-6",children:[Object(T.jsxs)("div",{onClick:function(){return x("isAdmin",!1)},className:"flex justify-between border-b border-t px-3 py-3 md:px-6 py-4 cursor-pointer dark:border-gray-800",children:[Object(T.jsx)("p",{className:m()("pr-4 text-sm md:text-base",{"opacity-70":!0===b.isAdmin,"font-medium text-gray-600 dark:text-white":!1===b.isAdmin}),children:"Regular - Can't delete members"}),Object(T.jsx)("div",{className:m()({"text-blue-500":!1===b.isAdmin}),children:b.isAdmin?Object(T.jsx)(g.a,{size:20}):Object(T.jsx)(g.b,{size:20})})]}),Object(T.jsxs)("div",{onClick:function(){return x("isAdmin",!0)},className:"flex justify-between border-b px-3 py-3 md:px-6 md:py-4 cursor-pointer dark:border-gray-800",children:[Object(T.jsx)("p",{className:m()("pr-4 text-sm md:text-base",{"opacity-70":!1===b.isAdmin,"font-medium text-gray-600 dark:text-white":!0===b.isAdmin}),children:"Admin - Can delete members"}),Object(T.jsx)("div",{className:m()({"text-blue-500":!0===b.isAdmin}),children:b.isAdmin?Object(T.jsx)(g.b,{size:20}):Object(T.jsx)(g.a,{size:20})})]})]})]}),Object(T.jsxs)("div",{className:m()("p-3 md:p-6 flex",{"justify-end":"edit"!==r,"justify-between":"edit"===r}),children:["edit"===r&&Object(T.jsx)(L,{error:!0,onClick:function(){return N()},children:"Delete"}),Object(T.jsx)(L,{onClick:function(){return y()},children:"Save"})]})]})},$=function(){return Object(T.jsx)(Y,{type:"edit"})},q=function(){var e=Object(f.f)(),t=Object(l.c)(J);return Object(T.jsxs)(M,{children:[Object(T.jsx)(z,{title:"Team members",className:"p-3 md:p-6 pb-0 md:pb-0",subtitle:"You have ".concat(t.length," team member").concat(t.length>1?"s":"","."),onAction:function(){return e.push("/add")}}),Object(T.jsx)(D,{items:t})]})},G=function(e){var t=e.error;return Object(T.jsxs)("div",{role:"alert",children:[Object(T.jsx)("p",{children:"Something went wrong:"}),Object(T.jsx)("pre",{children:t.message})]})},H=function(){return Object(T.jsx)("section",{className:"min-h-screen flex items-center justify-center",children:Object(T.jsxs)("div",{className:"text-center",children:[Object(T.jsx)("h1",{className:"mx-auto text-3xl font-bold",children:"404"}),Object(T.jsx)("p",{className:"pt-2",children:"Page not found"})]})})},K=function(){return Object(T.jsx)(h.a,{children:Object(T.jsxs)(f.c,{children:[Object(T.jsx)(f.a,{exact:!0,path:"/",children:Object(T.jsx)(q,{})}),Object(T.jsx)(f.a,{exact:!0,path:"/add",children:Object(T.jsx)(Y,{})}),Object(T.jsx)(f.a,{exact:!0,path:"/:id/edit",children:Object(T.jsx)($,{})}),Object(T.jsx)(f.a,{path:"*",children:Object(T.jsx)(H,{})})]})})};var Q=Object(x.withErrorBoundary)((function(){var e=Object(l.b)(),t=Object(l.c)(R);return Object(i.useEffect)((function(){"dark"===t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}),[t]),Object(T.jsxs)("main",{className:"bg-gray-200 bg-opacity-40 dark:bg-gray-700 text-gray-500 dark:text-white h-full relative",children:[Object(T.jsx)("div",{className:"max-w-screen-lg mx-auto",children:Object(T.jsx)(K,{})}),Object(T.jsxs)("div",{className:m()("bg-white h-18 w-10 hover:translate-y-0 translate-y-1/2  fixed bottom-0 left-1/2","transform -translate-x-1/2 cursor-pointer rounded-full rounded-b-none overflow-hidden","dark:text-white dark:bg-gray-800"),children:[Object(T.jsx)("div",{className:"flex h-8 items-center justify-center",children:Object(T.jsx)(b.a,{})}),Object(T.jsx)("div",{className:"flex h-8 items-center justify-center",onClick:function(){return e({type:C,payload:"dark"===t?"light":"dark"})},children:"dark"===t?Object(T.jsx)(j.b,{}):Object(T.jsx)(j.a,{})}),Object(T.jsx)("div",{className:"flex h-4"})]})]})}),{FallbackComponent:G,onError:function(e,t){console.log(e,t)}}),X=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,62)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),c(e),i(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=r(24),_=["counter","team","settings"],ee=r(39),te=r(20),re=r.n(te);re.a.config({name:"Threado app",storeName:"store"});var ne=function e(){Object(ee.a)(this,e)};ne.set=function(e,t,r){return re.a.setItem(e,t,r)},ne.get=function(e,t){return re.a.getItem(e,t)},ne.delete=function(e,t){return re.a.removeItem(e,t)};var ae=r(25),ce={members:[]},ie=Object(Z.a)({settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{theme:"light"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(p.a)(Object(p.a)({},e),{},{theme:t.payload});default:return Object(p.a)({},e)}},counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{value:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return{value:e.value+1};case A:return{value:e.value-1};default:return e}},team:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(p.a)(Object(p.a)({},e),{},{members:[].concat(Object(ae.a)(e.members),[t.payload])});case N:var r=t.payload,n=r.id,a=r.user,c=e.members.findIndex((function(e){return e.id===n})),i=e.members[c];return e.members[c]=Object(p.a)(Object(p.a)({},i),a),Object(p.a)(Object(p.a)({},e),{},{members:Object(ae.a)(e.members)});case k:return Object(p.a)(Object(p.a)({},e),{},{members:Object(ae.a)(e.members.filter((function(e){return e.id!==t.payload})))});default:return e}}});window;Object(c.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,new Promise(function(){var e=Object(c.a)(a.a.mark((function e(t,r){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne.get("state");case 3:null===(n=e.sent)&&(n=void 0),(c=Object(Z.b)(ie,n,void 0)).subscribe((function(){var e=(null!==_&&void 0!==_?_:[]).reduce((function(e,t){var r=c.getState();return r[t]?Object(p.a)(Object(p.a)({},e),{},Object(V.a)({},t,r[t])):e}),{});ne.set("state",Object(p.a)({},e))})),t(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),r(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,r){return e.apply(this,arguments)}}());case 3:t=e.sent,o.a.render(Object(T.jsx)(s.a.StrictMode,{children:Object(T.jsx)(l.a,{store:t,children:Object(T.jsx)(Q,{})})}),document.getElementById("root")),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))(),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),X()}},[[60,1,2]]]);
//# sourceMappingURL=main.95d4b378.chunk.js.map