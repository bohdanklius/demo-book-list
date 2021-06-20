(this["webpackJsonpdemo-book-list"]=this["webpackJsonpdemo-book-list"]||[]).push([[0],{140:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},151:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(47),r=a.n(c),i=(a(140),a(52)),l=a(109),s=a.n(l),u=a(118),d="http://localhost:3004/books";function j(){return(j=Object(u.a)(s.a.mark((function e(){var t,a,o=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:{},e.next=3,fetch(d,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify(t)});case 3:return a=e.sent,e.abrupt("return",a.json());case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a(142);var b=a(122),h=a(72),O=a(18),f=(a(143),a(168)),m=a(166),N=a(167),v=a(154),x=a(7),k=[{key:0,text:"Category",value:"Category"},{key:1,text:"\u0425\u0443\u0434\u043e\u0436\u043d\u044f \u043b\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430",value:"\u0425\u0443\u0434\u043e\u0436\u043d\u044f \u043b\u0456\u0442\u0435\u0440\u0430\u0442\u0443\u0440\u0430"},{key:2,text:"\u0406\u0441\u0442\u043e\u0440\u0456\u044f",value:"\u0406\u0441\u0442\u043e\u0440\u0456\u044f"},{key:3,text:"\u0422\u0443\u0440\u0438\u0437\u043c",value:"\u0422\u0443\u0440\u0438\u0437\u043c"}],g=function(e){var t=e.setBooks,a=e.editedBook,n=e.setNavigationActive,c=Object(o.useState)({id:Date.now(),bookTitle:"",authorName:"",category:"",ISBN:""}),r=Object(i.a)(c,2),l=r[0],s=r[1];Object(o.useEffect)((function(){a&&s(Object(O.a)(Object(O.a)({},l),a))}),[a]);var u=Object(o.useState)({bookTitle:!1,authorName:!1,category:!1,ISBN:!1}),g=Object(i.a)(u,2),y=g[0],B=g[1],p=function(e){var t=e.target,a=t.value,o=t.name;s(Object(O.a)(Object(O.a)({},l),{},Object(h.a)({},o,a))),B(Object(O.a)(Object(O.a)({},y),{},Object(h.a)({},o,!1)))};return Object(x.jsxs)(f.a,{onSubmit:function(e){e.preventDefault(),""===l.bookTitle&&B((function(e){return Object(O.a)(Object(O.a)({},e),{},{bookTitle:!0})})),""===l.authorName&&B((function(e){return Object(O.a)(Object(O.a)({},e),{},{authorName:!0})})),""===l.category&&B((function(e){return Object(O.a)(Object(O.a)({},e),{},{category:!0})})),""===l.ISBN&&B((function(e){return Object(O.a)(Object(O.a)({},e),{},{ISBN:!0})})),l.id&&l.bookTitle.length&&l.authorName.length&&l.ISBN.length&&(t((function(e){return e.some((function(e){return e.id===l.id}))?(t=l.id,a=l,fetch("".concat(d,"/").concat(t),{method:"PUT",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})),e.map((function(e){return e.id===l.id?l:e}))):[].concat(Object(b.a)(e),[l]);var t,a})),function(){j.apply(this,arguments)}(l),s({id:Date.now(),bookTitle:"",authorName:"",category:"",ISBN:""}),n("DASHBOARD"))},children:[Object(x.jsxs)(f.a.Group,{widths:"equal",children:[Object(x.jsx)(f.a.Field,{className:y.bookTitle?"error":"",value:l.bookTitle,onChange:p,name:"bookTitle",control:m.a,label:"Book title",placeholder:"Book title"}),Object(x.jsx)(f.a.Field,{className:y.authorName?"error":"",value:l.authorName,onChange:p,name:"authorName",control:m.a,label:"Author name",placeholder:"Author name"}),Object(x.jsx)(f.a.Field,{className:y.category?"error":"",value:l.category,onChange:p,name:"category",control:N.a,label:"Category",options:k,placeholder:"Category"}),Object(x.jsx)(f.a.Field,{className:y.ISBN?"error":"",value:l.ISBN,onChange:p,name:"ISBN",control:m.a,label:"ISBN",placeholder:"ISBN"})]}),Object(x.jsx)(f.a.Field,{control:v.a,children:"Add a Book"})]})},y=a(169),B=function(e){var t=e.id,a=e.bookTitle,o=e.authorName,n=e.category,c=e.ISBN,r=e.handleEdit,i=e.handleRemove;return Object(x.jsxs)(y.a.Row,{children:[Object(x.jsx)(y.a.Cell,{children:a}),Object(x.jsx)(y.a.Cell,{children:o}),Object(x.jsx)(y.a.Cell,{children:n}),Object(x.jsx)(y.a.Cell,{children:c}),Object(x.jsxs)(y.a.Cell,{children:[Object(x.jsx)(v.a,{basic:!0,color:"grey",content:"Edit",onClick:function(){return r(t)}}),Object(x.jsx)(v.a,{basic:!0,color:"red",content:"Delete",onClick:function(){i(t),function(e){fetch("".concat(d,"/").concat(e),{method:"DELETE"}).then((function(e){return e.text()}))}(t)}})]})]})},p=function(e){var t=e.books,a=e.handleEdit,o=e.handleRemove;return Object(x.jsx)("div",{className:"books",children:Object(x.jsxs)(y.a,{celled:!0,children:[Object(x.jsx)(y.a.Header,{children:Object(x.jsxs)(y.a.Row,{children:[Object(x.jsx)(y.a.HeaderCell,{children:"Name"}),Object(x.jsx)(y.a.HeaderCell,{children:"Author"}),Object(x.jsx)(y.a.HeaderCell,{children:"Category"}),Object(x.jsx)(y.a.HeaderCell,{children:"ISBN"}),Object(x.jsx)(y.a.HeaderCell,{children:"Action"})]})}),Object(x.jsx)(y.a.Body,{children:t.map((function(e){var t=e.id,n=e.bookTitle,c=e.authorName,r=e.category,i=e.ISBN;return Object(x.jsx)(B,{handleRemove:o,handleEdit:a,id:t,bookTitle:n,authorName:c,category:r,ISBN:i},t)}))})]})})},S=(a(151),[{id:1,title:"Dashboard"},{id:2,title:"Add a Book"}]),C=function(e){var t=e.setNavigationActive,a=e.setEditedBook;return Object(x.jsx)("div",{className:"header",children:S.map((function(e){var o=e.id,n=e.title;return Object(x.jsx)("button",{onClick:function(){t(1===o?"DASHBOARD":"BOOKFORM"),a({})},className:"header__button",type:"button",children:n},o)}))})},T="DASHBOARD",I="BOOKFORM";var A=function(){var e=Object(o.useState)([]),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(o.useState)(T),r=Object(i.a)(c,2),l=r[0],s=r[1],u=Object(o.useState)({id:Date.now(),bookTitle:"",authorName:"",category:"",ISBN:""}),j=Object(i.a)(u,2),b=j[0],h=j[1];return Object(o.useEffect)((function(){fetch(d).then((function(e){return e.json()})).then((function(e){return e})).then((function(e){return n(e)}))}),[]),Object(x.jsxs)("div",{children:[Object(x.jsx)(C,{setNavigationActive:s,setEditedBook:h}),l===T&&Object(x.jsx)(p,{handleRemove:function(e){n(a.filter((function(t){return t.id!==e})))},handleEdit:function(e){s(I),h(a.find((function(t){return t.id===e})))},books:a}),l===I&&Object(x.jsx)(g,{setNavigationActive:s,setBooks:n,editedBook:b})]})};a(152);r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(A,{})}),document.getElementById("root"))}},[[153,1,2]]]);
//# sourceMappingURL=main.88701ec0.chunk.js.map