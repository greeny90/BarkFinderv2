(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{39:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(2),s=n.n(r),a=n(27),i=n.n(a),o=n(17),l=(n(39),n(23),n(10));var d=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"SignIn",children:Object(c.jsx)("div",{className:"container-fluid d-flex justify-content-center",children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"card-header",children:Object(c.jsx)("h3",{children:"Sign In"})}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("form",{action:"/auth/signin",method:"POST",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{for:"inputUserName",children:"Username"}),Object(c.jsx)("input",{type:"text",id:"username",className:"form-control",placeholder:"Alice",name:"username"})]}),Object(c.jsxs)("div",{className:"form group",children:[Object(c.jsx)("label",{for:"inputPassword",children:"Password"}),Object(c.jsx)("input",{type:"password",id:"password",className:"form-control",placeholder:"123abc",name:"password"})]}),Object(c.jsx)("div",{className:"error",children:" "}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"submit",className:"btn btn-dark",style:{marginTop:"10px"},value:"Sign In"})})]})}),Object(c.jsxs)("div",{className:"card-footer",children:[Object(c.jsx)("div",{children:Object(c.jsx)(l.b,{to:"/signup",children:"Sign up here"})}),Object(c.jsx)("div",{children:Object(c.jsx)(l.b,{to:"/",children:"Cancel and return home"})})]})]})})})})};n(48);var j=function(){return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"navbar",children:[Object(c.jsx)(l.b,{to:"/dogs",children:Object(c.jsx)("button",{type:"button",children:"Dog Preview"})}),Object(c.jsx)(l.b,{to:"/signup",children:Object(c.jsx)("button",{type:"button",children:"Sign Up"})}),Object(c.jsx)(l.b,{to:"/signin",children:Object(c.jsx)("button",{type:"button",children:"Sign In"})})]}),Object(c.jsx)("section",{id:"section1",children:Object(c.jsx)("div",{className:"main",children:Object(c.jsxs)("header",{children:["Ready to meet your new best friend?",Object(c.jsx)("br",{}),"Join BarkFinder today!",Object(c.jsxs)("a",{class:"scroll",href:"#section2",children:[Object(c.jsx)("span",{}),"Scroll"]})]})})}),Object(c.jsxs)("section",{id:"section2",children:[Object(c.jsxs)("a",{className:"scroll",href:"#section1",children:[Object(c.jsx)("span",{}),"Scroll"]}),Object(c.jsxs)("div",{className:"main",id:"second",children:[Object(c.jsx)("header",{children:"How does it work?"}),Object(c.jsx)("p",{children:"We take dogs from foster homes all over the Bay Area and bring them right to your fingertips in the comfort of your own home. So once you've created an account, you can sit back, relax, and let us bring your future dog right to your computer."})]})]})]})},u=n(29),b=n(30),p=n(33),h=n(31),m=(n(49),function(e){Object(p.a)(n,e);var t=Object(h.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"SignUp",children:Object(c.jsx)("div",{className:"container-fluid d-flex justify-content-center",children:Object(c.jsxs)("div",{className:"card",children:[Object(c.jsx)("div",{className:"card-header",children:Object(c.jsx)("h3",{children:"Sign Up"})}),Object(c.jsx)("div",{className:"card-body",children:Object(c.jsxs)("form",{action:"/auth/signup",method:"POST",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{for:"username",children:"Username"}),Object(c.jsx)("input",{type:"text",id:"username",name:"username",className:"form-control",placeholder:"Alice"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{for:"password",children:"Password"}),Object(c.jsx)("input",{type:"password",id:"password",name:"password",className:"form-control",placeholder:"123abc"})]}),Object(c.jsxs)("div",{className:"form group",children:[Object(c.jsx)("label",{for:"password2",children:"Verify Password"}),Object(c.jsx)("input",{type:"password",id:"password2",name:"password2",className:"form-control",placeholder:"123abc"})]}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)("input",{type:"submit",className:"btn btn-dark",style:{marginTop:"10px"},value:"Sign Up"})}),Object(c.jsxs)("div",{className:"form-group",children:["Already an user? ",Object(c.jsx)(l.b,{to:"/signin",children:"Sign In"}),Object(c.jsx)("br",{}),Object(c.jsx)(l.b,{to:"/",children:"Cancel and return home"})]})]})})]})})})})}}]),n}(s.a.Component)),O=n(14),x=n.n(O),g=n(19),f=n(15),v=(n(51),function(e,t,n){var c=0;Object(r.useEffect)((function(){return s()}),[n]);var s=function(){e.current.style.backgroundImage="linear-gradient(\n            to right,\n            rgba(34, 34, 34, 0.4),\n            rgba(68, 68, 68, 0.4)\n            ), url(".concat(n[0].picLink,")"),t.current.innerHTML=n[0].name},a=function(c){e.current.style.backgroundImage="linear-gradient(\n            to right,\n            rgba(34, 34, 34, 0.4),\n            rgba(68, 68, 68, 0.4)\n          ), url(".concat(n[c-1].picLink,")"),t.current.innerHTML=n[c-1].name,i(e)},i=function(){e.current.classList.add("fadeIn"),setTimeout((function(){e.current.classList.remove("fadeIn")}),700)};return{goToPreviousSlide:function(){0===c&&(a(n.length),c=n.length),a(c),c--},goToNextSlide:function(){c===n.length-1&&(s(),c=-1,i(e)),e.current.style.backgroundImage="linear-gradient(\n          to right,\n          rgba(34, 34, 34, 0.4),\n          rgba(68, 68, 68, 0.4)\n          ),url(".concat(n[c+1].picLink,")"),t.current.innerHTML=n[c+1].name,c++,i(e)}}}),y=function(e){var t=e.images,n=Object(r.useRef)(null),s=Object(r.useRef)(null);console.log("Slide Image",t);var a=v(n,s,t),i=a.goToPreviousSlide,o=a.goToNextSlide;return Object(c.jsxs)("div",{className:"slider",ref:n,children:[Object(c.jsxs)("h1",{children:[" ",Object(c.jsx)("p",{ref:s,className:"feature--text"})," "]}),Object(c.jsxs)("div",{className:"slider--content",children:[Object(c.jsx)("button",{onClick:i,className:"slider__btn-left",children:"Previous dog"}),Object(c.jsx)("button",{onClick:o,className:"slider__btn-right",children:"Next dog"})]})]})},N=n.p+"static/media/buffer2.9474ca20.jpg";var w=function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(!1),i=Object(f.a)(a,2),o=i[0],l=i[1],d=function(){var e=Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getting posts"),e.prev=1,e.next=4,fetch("/getdogs").then((function(e){return e.json()})).then((function(e){s(e),l(!0)}));case 4:console.log("dogs",n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log("error ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){d()}),[]),o?Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(y,{images:n})}):Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:N,alt:"dog says thank you for waiting as the page loads"})})},S=n(9),P=(n(52),n.p+"static/media/buffer.b6cae71d.jpg"),k=n(61),C=n(62),T=n(63),F=n(64),I=n(65),H=n(16),A=n(57),B=n(58),L=n(59),U=n(60),R=n(56),E=n(66),M=n(32),V=function(e){var t=e.column;return Object(c.jsx)("div",{style:{marginTop:5},children:t.canFilter&&t.render("Filter")})},D=function(e){var t=e.column,n=t.filterValue,r=t.setFilter,s=t.preFilteredRows.length;return Object(c.jsx)(R.a,{value:n||"",onChange:function(e){r(e.target.value||void 0)},placeholder:"search (".concat(s,") ...")})},_=function(e){var t=e.column,n=t.filterValue,r=t.setFilter,a=t.preFilteredRows,i=t.id,o=s.a.useMemo((function(){var e=new Set;return a.forEach((function(t){e.add(t.values[i])})),Object(M.a)(e.values())}),[i,a]);return Object(c.jsxs)(E.a,{id:"custom-select",type:"select",value:n,onChange:function(e){r(e.target.value||void 0)},children:[Object(c.jsx)("option",{value:"",children:"All"}),o.map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)}))]})},q=function(e){var t=e.columns,n=e.data,s=e.renderRowSubComponent,a=Object(H.useTable)({columns:t,data:n,defaultColumn:{Filter:D},initialState:{pageIndex:0,pageSize:10}},H.useFilters,H.useSortBy,H.useExpanded,H.usePagination),i=a.getTableProps,o=a.getTableBodyProps,l=a.headerGroups,d=a.page,j=a.prepareRow,u=a.visibleColumns,b=a.canPreviousPage,p=a.canNextPage,h=a.pageOptions,m=a.pageCount,O=a.gotoPage,x=a.nextPage,g=a.previousPage,f=a.setPageSize,v=a.state,y=v.pageIndex,N=v.pageSize,w=function(e){return e.isSorted?e.isSortedDesc?" \ud83d\udd3d":" \ud83d\udd3c":""};return Object(c.jsxs)(r.Fragment,{children:[Object(c.jsxs)(A.a,Object(S.a)(Object(S.a)({bordered:!0,hover:!0},i()),{},{children:[Object(c.jsx)("thead",{children:l.map((function(e){return Object(c.jsx)("tr",Object(S.a)(Object(S.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsxs)("th",Object(S.a)(Object(S.a)({},e.getHeaderProps()),{},{children:[Object(c.jsxs)("div",Object(S.a)(Object(S.a)({},e.getSortByToggleProps()),{},{children:[e.render("Header"),w(e)]})),Object(c.jsx)(V,{column:e})]}))}))}))}))}),Object(c.jsx)("tbody",Object(S.a)(Object(S.a)({},o()),{},{children:d.map((function(e){return j(e),Object(c.jsxs)(r.Fragment,{children:[Object(c.jsx)("tr",{children:e.cells.map((function(e){return Object(c.jsx)("td",Object(S.a)(Object(S.a)({},e.getCellProps()),{},{children:e.render("Cell")}))}))}),e.isExpanded&&Object(c.jsx)("tr",{children:Object(c.jsx)("td",{colSpan:u.length,children:s(e)})})]},e.getRowProps().key)}))}))]})),Object(c.jsxs)(B.a,{style:{maxWidth:1e3,margin:"0 auto",textAlign:"center"},children:[Object(c.jsxs)(L.a,{md:3,children:[Object(c.jsx)(U.a,{color:"primary",onClick:function(){return O(0)},disabled:!b,children:"<<"}),Object(c.jsx)(U.a,{color:"primary",onClick:g,disabled:!b,children:"<"})]}),Object(c.jsxs)(L.a,{md:2,style:{marginTop:7},children:["Page"," ",Object(c.jsxs)("strong",{children:[y+1," of ",h.length]})]}),Object(c.jsx)(L.a,{md:2,children:Object(c.jsx)(R.a,{type:"number",min:1,style:{width:70},max:h.length,defaultValue:y+1,onChange:function(e){var t=e.target.value?Number(e.target.value)-1:0;O(t)}})}),Object(c.jsx)(L.a,{md:2,children:Object(c.jsxs)(E.a,{type:"select",value:N,onChange:function(e){f(Number(e.target.value))},children:[">",[10,20,30,40,50].map((function(e){return Object(c.jsxs)("option",{value:e,children:["Show ",e]},e)}))]})}),Object(c.jsxs)(L.a,{md:3,children:[Object(c.jsx)(U.a,{color:"primary",onClick:x,disabled:!p,children:">"}),Object(c.jsx)(U.a,{color:"primary",onClick:function(){return O(m-1)},disabled:!p,children:">>"})]})]})]})},z=function(){var e=Object(r.useState)([]),t=Object(f.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(!1),i=Object(f.a)(a,2),o=i[0],l=i[1],d=function(){var e=Object(g.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getting posts"),e.prev=1,e.next=4,fetch("/getdogs").then((function(e){return e.json()})).then((function(e){s(e),l(!0)}));case 4:console.log("dogs",n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.log("error ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){d()}),[]);var j=Object(r.useMemo)((function(){return[{Header:function(){return null},id:"expander",Cell:function(e){var t=e.row;return Object(c.jsx)("span",Object(S.a)(Object(S.a)({},t.getToggleRowExpandedProps()),{},{children:t.isExpanded?"\u2b06\ufe0f\ufe0f":"\ud83d\udcf7"}))}},{Header:"Breed",accessor:"breed",disableSortBy:!0,Filter:_,filter:"equals"},{Header:"Name",accessor:"name"},{Header:"Age",accessor:"age",disableSortBy:!0,Filter:_,filter:"equals"},{Header:"Gender",accessor:"gender",disableSortBy:!0,Filter:_,filter:"equals"}]}),[]);return o?Object(c.jsxs)("div",{children:[Object(c.jsx)("form",{className:"form",action:"/auth/signout",method:"post",children:Object(c.jsx)("input",{className:"button",type:"submit",name:"signout",value:"Sign Out"})}),Object(c.jsx)(I.a,{style:{marginTop:100},children:Object(c.jsx)(q,{columns:j,data:n,renderRowSubComponent:function(e){var t=e.original,n=t.name,r=(t.gender,t.picLink);return Object(c.jsx)("div",{children:Object(c.jsxs)(k.a,{style:{width:"18rem",margin:"0 auto"},children:[Object(c.jsx)(C.a,{top:!0,src:r,alt:"Card image cap"}),Object(c.jsx)(T.a,{children:Object(c.jsx)(F.a,{children:Object(c.jsxs)("strong",{children:["".concat(n)," "]})})})]})})}})})]}):Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:P,alt:"dog says thank you for waiting as the page loads"})})};n(54);var G=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"My account"}),Object(c.jsxs)("form",{action:"/auth/update",method:"POST",children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{for:"username",children:"Update Username"}),Object(c.jsx)("input",{type:"text",id:"username",name:"username",className:"form-control",placeholder:"Alice"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{for:"password",children:"Update Password"}),Object(c.jsx)("input",{type:"password",id:"password",name:"password",className:"form-control",placeholder:"123abc"})]}),Object(c.jsxs)("div",{className:"form group",children:[Object(c.jsx)("label",{for:"password2",children:"Verify Password"}),Object(c.jsx)("input",{type:"password",id:"password2",name:"password2",className:"form-control",placeholder:"123abc"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("input",{type:"submit",className:"btn btn-dark",style:{marginTop:"10px"},value:"Update"}),Object(c.jsx)("div",{className:"form-group",id:"delete",children:Object(c.jsx)("input",{type:"submit",className:"btn btn-dark",style:{marginTop:"10px"},value:"DeleteAccount"})})]})]})]})},J=n(7);var W=function(){var e;return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(l.a,{children:Object(c.jsxs)(J.c,{children:[Object(c.jsx)(J.a,(e={exact:!0,path:"/"},Object(o.a)(e,"exact",!0),Object(o.a)(e,"component",j),e)),Object(c.jsx)(J.a,{path:"/signup",component:m}),Object(c.jsx)(J.a,{path:"/signin",component:d}),Object(c.jsx)(J.a,{path:"/dogs",component:w}),Object(c.jsx)(J.a,{path:"/table",component:z}),Object(c.jsx)(J.a,{path:"/userprofile",component:G})]})})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(W,{})}),document.getElementById("root")),K()}},[[55,1,2]]]);
//# sourceMappingURL=main.4ef43cf9.chunk.js.map