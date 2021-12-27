(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{70:function(e,t,a){e.exports=a(88)},75:function(e,t,a){},76:function(e,t,a){},87:function(e,t,a){e.exports={"ant-btn-primary":"ToDoList_ant-btn-primary__3Uu5l"}},88:function(e,t,a){"use strict";a.r(t);var n,i=a(0),c=a.n(i),r=a(8),o=a.n(r),l=(a(75),a(76),a(34)),s=a(91),u=a(58),d=a.n(u),b=a(131),O=c.a.memo((function(e){console.log("Add Item Form");var t=Object(i.useState)(""),a=Object(l.a)(t,2),n=a[0],r=a[1],o=Object(i.useState)(!1),u=Object(l.a)(o,2),O=u[0],m=u[1],f=function(){var t=n.trim();n.trim()?(e.addItem(t),r("")):m(!0),r("")};return c.a.createElement("div",null,c.a.createElement(b.a,{error:O,variant:"outlined",label:"Enter title...",onChange:function(e){m(!1),r(e.currentTarget.value)},value:n,onKeyPress:function(e){(e.ctrlKey||"Enter"===e.key)&&f()},helperText:O?"Title is required":""}),c.a.createElement(s.a,{variant:"contained",color:"secondary",size:"medium",startIcon:c.a.createElement(d.a,null),onClick:f},"Save"))})),m=c.a.memo((function(e){var t=Object(i.useState)(e.title),a=Object(l.a)(t,2),n=a[0],r=a[1],o=Object(i.useState)(!1),s=Object(l.a)(o,2),u=s[0],d=s[1];return u?c.a.createElement(b.a,{onBlur:function(){d(!1),e.setNewTitle(n)},autoFocus:!0,onChange:function(e){r(e.currentTarget.value)},value:n}):c.a.createElement("span",{onDoubleClick:function(){return d(!0)}},e.title)})),f=a(122),D=a(124),j=a(123),T=a(20),E=a(46),k=a(11),v=a(17),I=a(132),h=Object(I.a)(),p=Object(I.a)(),L=Object(I.a)(),C=[{id:h,title:"What should I do before new year",filter:"all"},{id:p,title:"What to learn?",filter:"all"},{id:L,title:"What to buy?",filter:"all"}],g=(n={},Object(v.a)(n,h,[{id:Object(I.a)(),title:"Buy gifts",isDone:!0},{id:Object(I.a)(),title:"Create a holiday menu",isDone:!1},{id:Object(I.a)(),title:"To buy a dress",isDone:!1},{id:Object(I.a)(),title:"Prepare wishes",isDone:!1}]),Object(v.a)(n,p,[{id:Object(I.a)(),title:"HTML",isDone:!0},{id:Object(I.a)(),title:"CSS",isDone:!0},{id:Object(I.a)(),title:"React",isDone:!1},{id:Object(I.a)(),title:"Redux",isDone:!1}]),Object(v.a)(n,L,[{id:Object(I.a)(),title:"Milk",isDone:!0},{id:Object(I.a)(),title:"Bread",isDone:!0},{id:Object(I.a)(),title:"Bear",isDone:!0}]),n),y=function(e,t){return{type:"REMOVE-TASK",taskID:e,toDoListID:t}},S=function(e,t,a){return{type:"CHANGE-TASK-TITLE",taskID:e,title:t,toDoListID:a}},A=function(e,t,a){return{type:"CHANGE-TASK-STATUS",taskID:e,isDone:t,toDoListID:a}},w=a(133),N=c.a.memo((function(e){var t=e.todoListID,a=e.taskID,n=Object(T.c)((function(e){return e.tasks[t].filter((function(e){return e.id===a}))[0]})),r=Object(T.b)(),o=Object(i.useCallback)((function(e){r(S(n.id,e,t))}),[a,t]);return c.a.createElement("div",{className:!0===n.isDone?"is-done":"",key:a},c.a.createElement(w.a,{checked:n.isDone,onChange:function(e){return r(A(a,e.currentTarget.checked,t))}}),c.a.createElement(m,{title:n.title,setNewTitle:o}),c.a.createElement(f.a,{onClick:function(){return r(y(a,t))}},c.a.createElement(j.a,null)))})),F=c.a.memo((function(e){console.log("Todolist");var t=e.tasks;"active"===e.filter?t=e.tasks.filter((function(e){return!1===e.isDone})):"completed"===e.filter&&(t=e.tasks.filter((function(e){return!0===e.isDone})));var a=t.map((function(t){return c.a.createElement(N,{key:t.id,todoListID:e.id,taskID:t.id})})),n=Object(i.useCallback)((function(t){e.addTask(t,e.id)}),[e.addTask,e.id]),r=Object(i.useCallback)((function(){return e.removeTodoList(e.id)}),[e.id]),o=Object(i.useCallback)((function(){return e.changeFilter("all",e.id)}),[e.id,e.changeFilter]),l=Object(i.useCallback)((function(){return e.changeFilter("active",e.id)}),[e.id,e.changeFilter]),u=Object(i.useCallback)((function(){return e.changeFilter("completed",e.id)}),[e.id,e.changeFilter]),d=Object(i.useCallback)((function(t){e.changeToDoListTitle(t,e.id)}),[e.changeToDoListTitle,e.id]);return c.a.createElement("div",{className:"toDoList"},c.a.createElement("div",null,c.a.createElement("h3",null,c.a.createElement(m,{title:e.title,setNewTitle:d})),c.a.createElement(f.a,{onClick:r},c.a.createElement(j.a,null))),c.a.createElement(O,{addItem:n}),c.a.createElement("ul",null,a),c.a.createElement("div",null,c.a.createElement(D.a,{variant:"contained",size:"small"},c.a.createElement(s.a,{variant:"all"===e.filter?"outlined":"contained",color:"secondary",onClick:o},"All"),c.a.createElement(s.a,{variant:"active"===e.filter?"outlined":"contained",color:"secondary",onClick:l},"Active"),c.a.createElement(s.a,{variant:"completed"===e.filter?"outlined":"contained",color:"secondary",onClick:u},"Completed"))))})),K=a(125),H=a(90),R=a(126),x=a(127),G=a(129),M=a(130),B=a(128);var W=function(){console.log("App With redux");var e=Object(T.c)((function(e){return e.todolists})),t=Object(T.c)((function(e){return e.tasks})),a=Object(T.b)(),n=Object(i.useCallback)((function(e,t){a(y(e,t))}),[a]),r=Object(i.useCallback)((function(e,t){a(function(e,t){return{type:"ADD-TASK",title:e,toDoListID:t}}(e,t))}),[a]),o=Object(i.useCallback)((function(e,t,n){a(A(e,t,n))}),[a]),l=Object(i.useCallback)((function(e,t,n){a(S(e,t,n))}),[a]),u=Object(i.useCallback)((function(e,t){a(function(e,t){return{type:"CHANGE-TODOLIST-FILTER",id:e,filter:t}}(t,e))}),[a]),d=Object(i.useCallback)((function(e,t){a(function(e,t){return{type:"CHANGE-TODOLIST-TITLE",id:e,title:t}}(e,t))}),[a]),b=Object(i.useCallback)((function(e){a({type:"REMOVE-TODOLIST",id:e})}),[a]),m=Object(i.useCallback)((function(e){a(function(e){return{type:"ADD-TODOLIST",todoListID:Object(I.a)(),title:e}}(e))}),[a]),D=e.map((function(e){var a=t[e.id];return c.a.createElement(K.a,{item:!0},c.a.createElement(H.a,{style:{padding:"15px"}},c.a.createElement(F,{key:e.id,id:e.id,filter:e.filter,title:e.title,tasks:a,addTask:r,removeTask:n,changeTaskStatus:o,changeFilter:u,removeTodoList:b,changeTaskTitle:l,changeToDoListTitle:d})))}));return c.a.createElement("div",{className:"App"},c.a.createElement(R.a,{position:"sticky"},c.a.createElement(x.a,{style:{justifyContent:"space-between"}},c.a.createElement(f.a,{edge:"start",color:"inherit","aria-label":"menu"},c.a.createElement(B.a,null)),c.a.createElement(G.a,{variant:"h6"},"Todolists"),c.a.createElement(s.a,{color:"inherit",variant:"outlined"},"Login"))),c.a.createElement(M.a,{fixed:!0},c.a.createElement(K.a,{container:!0,style:{padding:"15px"}},c.a.createElement(O,{addItem:m})),c.a.createElement(K.a,{container:!0,spacing:3},D)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(87);var V=a(49),U=Object(V.a)({tasks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TASK":return Object(k.a)(Object(k.a)({},e),{},Object(v.a)({},t.toDoListID,e[t.toDoListID].filter((function(e){return e.id!==t.taskID}))));case"ADD-TASK":var a={id:Object(I.a)(),title:t.title,isDone:!1};return Object(k.a)(Object(k.a)({},e),{},Object(v.a)({},t.toDoListID,[a].concat(Object(E.a)(e[t.toDoListID]))));case"CHANGE-TASK-TITLE":return Object(k.a)(Object(k.a)({},e),{},Object(v.a)({},t.toDoListID,e[t.toDoListID].map((function(e){return e.id===t.taskID?Object(k.a)(Object(k.a)({},e),{},{title:t.title}):e}))));case"CHANGE-TASK-STATUS":return Object(k.a)(Object(k.a)({},e),{},Object(v.a)({},t.toDoListID,e[t.toDoListID].map((function(e){return e.id===t.taskID?Object(k.a)(Object(k.a)({},e),{},{isDone:t.isDone}):e}))));case"ADD-TODOLIST":return Object(k.a)(Object(k.a)({},e),{},Object(v.a)({},t.todoListID,[]));case"REMOVE-TODOLIST":return delete e[t.id],Object(k.a)({},e);default:return e}},todolists:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REMOVE-TODOLIST":return e.filter((function(e){return e.id!==t.id}));case"ADD-TODOLIST":var a={id:t.todoListID,title:t.title,filter:"all"};return[].concat(Object(E.a)(e),[a]);case"CHANGE-TODOLIST-TITLE":return e.map((function(e){return e.id===t.id?Object(k.a)(Object(k.a)({},e),{},{title:t.title}):e}));case"CHANGE-TODOLIST-FILTER":return e.map((function(e){return e.id===t.id?Object(k.a)(Object(k.a)({},e),{},{filter:t.filter}):e}));default:return e}}}),_=Object(V.b)(U);window.store=_,o.a.render(c.a.createElement(T.a,{store:_},c.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[70,1,2]]]);
//# sourceMappingURL=main.22507c0b.chunk.js.map