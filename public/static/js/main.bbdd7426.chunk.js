(this.webpackJsonptaskoa=this.webpackJsonptaskoa||[]).push([[0],{168:function(t,e,a){},195:function(t,e){},271:function(t,e,a){},272:function(t,e,a){},277:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a(25),s=a.n(r),c=a(17),i=a(149),o=a.n(i),l=(a(167),a(53)),u=a.n(l),d=a(80),p=a(139),h=a(140),f=a(75),g=a(159),b=a(154),m=(a(168),a(54)),j=a.n(m),k=a(141),v=a.n(k);j.a.defaults.baseURL="http://127.0.0.1:8000",j.a.defaults.timeout=5e3,j.a.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",j.a.defaults.transformRequest=function(t){return v.a.stringify(t)},j.a.interceptors.request.use((function(t){var e=localStorage.getItem("token");return e&&(t.headers.Authorization=e),t}),(function(t){Promise.reject(t)})),j.a.defaults.validateStatus=function(t){return/^(2|3)\d{2}$/.test(t)},j.a.interceptors.response.use((function(t){return t.data}),(function(t){if(!t.response){if(!window.navigator.onLine)return;return Promise.reject(t)}t.response.status}));var x=j.a,O={task:{getTaskList:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return x.get("/getTaskList",{params:{state:t}})},addTask:function(t,e){return x.post("/addTask",{task:t,time:e})},removeTask:function(t){return x.get("/removeTask",{params:{_id:t}})},completeTask:function(t){return x.get("/completeTask",{params:{_id:t}})}}},w=a(45),y=a.n(w),T=a(282),S=a(283),I=a(160),D=a(28),L=a(152),C=a(280),q=a(281),N=a(19),_=T.a.TextArea,A=S.a.confirm,B=y()(new Date((new Date).getTime()+864e5)),F=function(t){Object(g.a)(a,t);var e=Object(b.a)(a);function a(){var t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={columns:[{width:"10%",title:"\u7f16\u53f7",dataIndex:"_id",key:""},{width:"30%",title:"\u4efb\u52a1\u63cf\u8ff0",render:function(t){var e=t.state,a=t.task;return Object(N.jsx)(N.Fragment,{children:2===parseInt(e)?Object(N.jsx)("div",{className:"finish",children:a}):Object(N.jsx)("div",{children:a})})}},{width:"20%",title:"\u65f6\u95f4",render:function(t){var e=t.time,a=t.complete,n=t.state,r=e.match(/\d+/g),s="{1}-{2} {3}:{4}";if(e=s.replace(/\{(\d+)\}/g,(function(t,e){var a=r[e]||"0";return a.length<2?"0"+a:a})),2===n){var c=a.match(/\d+/g);a=s.replace(/\{(\d+)\}/g,(function(t,e){var a=c[e]||"0";return a.length<2?"0"+a:a}))}return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)("p",{children:[e," ",Object(N.jsx)(I.a,{color:"volcano",children:"\u9884\u671f"})]}),2===n?Object(N.jsxs)("p",{style:{marginTop:5},children:[a," ",Object(N.jsx)(I.a,{color:"lime",children:"\u6700\u7ec8"})]}):null]})}},{width:"15%",title:"\u72b6\u6001",dataIndex:"state",render:function(t,e,a){return 1===t?Object(N.jsx)(I.a,{color:"#f50",children:"\u672a\u5b8c\u6210"}):Object(N.jsx)(I.a,{color:"#87d068",children:"\u5df2\u5b8c\u6210"})}},{width:"18%",title:"\u64cd\u4f5c",render:function(e){var a=e.state;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(D.a,{type:"link",onClick:t.handleDelete.bind(Object(f.a)(t),e),children:"\u5220\u9664"}),1===a?Object(N.jsx)(D.a,{type:"link",onClick:t.handleFinish.bind(Object(f.a)(t),e),children:"\u5b8c\u6210"}):null]})}}],data:[{id:1,task:"\u592b\u541b\u5b50\u4e4b\u884c\uff0c\u9759\u4ee5\u4fee\u8eab\uff0c\u4fed\u4ee5\u517b\u5fb7\uff0c\u975e\u5b81\u9759\u65e0\u4ee5\u81f4\u8fdc\uff0c\u975e\u6de1\u6cca\u65e0\u4ee5\u660e\u5fd7",state:1,time:"2021-8-18 18:00:00",complete:"2021-8-15 18:00:00"}],visible:!1,loading:!1,task:"",time:B,tagList:[{state:0,text:"\u5168\u90e8",selected:!0},{state:1,text:"\u672a\u5b8c\u6210",selected:!1},{state:2,text:"\u5df2\u5b8c\u6210",selected:!1}]},t.handleDelete=function(e){var a=e._id;A({title:"\u8fd9\u662f\u4e00\u4e2a\u5371\u9669\u64cd\u4f5c",content:"\u786e\u5b9a\u8981\u5220\u9664".concat(a,"\u7684\u4fe1\u606f\u5417\uff1f"),okType:"danger",onOk:function(){var e=Object(d.a)(u.a.mark((function e(){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.task.removeTask(a);case 2:if(n=e.sent,console.log(n),0!==parseInt(n.code)){e.next=10;break}return L.b.success("\u5220\u9664\u6210\u529f"),t.cancel(),2!==(r=parseInt(localStorage.getItem("state")||0))&&t.queryData(r),e.abrupt("return");case 10:L.b.error("\u5220\u9664\u5931\u8d25");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()})},t.handleFinish=function(e){var a=e._id,n=e.task;console.log(e),A({title:"\u63d0\u793a",content:"\u4f60\u5df2\u7ecf\u5b8c\u6210\u4e86".concat(n,"\u4efb\u52a1\u5417\uff1f"),okType:"warning",onOk:function(){var e=Object(d.a)(u.a.mark((function e(){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.task.completeTask(a);case 2:if(n=e.sent,0!==parseInt(n.code)){e.next=9;break}return L.b.success(n.msg),t.cancel(),2!==(r=parseInt(localStorage.getItem("state")||0))&&t.queryData(r),e.abrupt("return");case 9:L.b.error("\u5220\u9664\u5931\u8d25");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()})},t.queryData=function(){var e=Object(d.a)(u.a.mark((function e(a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.setState({loading:!0}),e.next=3,O.task.getTaskList(a);case 3:if(n=e.sent,console.log(n.list),0!==parseInt(n.code)){e.next=8;break}return t.setState({data:n.list,loading:!1}),e.abrupt("return");case 8:L.b.error("\u6570\u636e\u83b7\u53d6\u5931\u8d25,\u7a0d\u540e\u518d\u8bd5"),t.setState({loading:!1});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.submit=Object(d.a)(u.a.mark((function e(){var a,n,r,s,c,i,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state,n=a.task,r=a.time,0===n.trim().length&&L.b.warn("\u4efb\u52a1\u4e0d\u80fd\u4e3a\u7a7a"),r||L.b.warn("\u5b8c\u6210\u65f6\u95f4\u4e0d\u80fd\u4e3a\u7a7a"),r=(r=r.toDate()).toLocaleString(),e.next=7,O.task.addTask(n,r);case 7:if(s=e.sent,c=s.code,i=s.msg,0!==parseInt(c)){e.next=15;break}return L.b.success(i),t.cancel(),2!==(o=parseInt(localStorage.getItem("state")||0))&&t.queryData(o),e.abrupt("return");case 15:L.b.error("\u65b0\u589e\u5931\u8d25!");case 16:case"end":return e.stop()}}),e)}))),t.cancel=function(){t.setState({visible:!1,time:B,task:""})},t.changeType=function(e){var a=e.target,n=a.getAttribute("state");"SPAN"===a.tagName&&(n=parseInt(n),t.changeTagState(n),t.queryData(n),localStorage.setItem("state",n))},t.changeTagState=function(e){var a=t.state.tagList;a=a.map((function(t){return t.selected=t.state===e,t})),t.setState({tagList:a})},t}return Object(h.a)(a,[{key:"render",value:function(){var t=this,e=this.state,a=e.columns,n=e.visible,r=e.data,s=e.loading,c=e.task,i=e.time,o=e.tagList;return Object(N.jsxs)("section",{className:"taskBox",children:[Object(N.jsxs)("header",{className:"headerBox",children:[Object(N.jsx)("h2",{children:"\u4efb\u52a1\u5217\u8868"}),Object(N.jsx)(D.a,{type:"primary",onClick:function(e){return t.setState({visible:!0})},children:"\u65b0\u589e"})]}),Object(N.jsx)("nav",{className:"navBox",onClick:this.changeType,children:o.map((function(t){return Object(N.jsx)(I.a,{color:t.selected?"#108ee9":"",state:t.state,children:t.text},t.state)}))}),Object(N.jsx)(C.a,{columns:a,dataSource:r,loading:s,pagination:!1,rowKey:"_id"}),Object(N.jsxs)(S.a,{title:"\u65b0\u589e\u4efb\u52a1",className:"modalBox",maskClosable:!1,visible:n,onOk:this.submit,onCancel:this.cancel,children:[Object(N.jsx)("p",{children:"\u4efb\u52a1\u63cf\u8ff0"}),Object(N.jsx)(_,{row:4,value:c,onInput:function(e){t.setState({task:e.target.value})}}),Object(N.jsx)("p",{children:"\u9884\u671f\u5b8c\u6210\u65f6\u95f4"}),Object(N.jsx)(q.a,{showTime:!0,onChange:function(e){t.setState({time:e})},value:i})]})]})}},{key:"componentWillMount",value:function(){console.log(localStorage.getItem("state"));var t=parseInt(localStorage.getItem("state"))||0;0!==t&&this.changeTagState(t),this.queryData(t)}}]),a}(n.Component);a(271),a(272);s.a.render(Object(N.jsx)(c.a,{locale:o.a,children:Object(N.jsx)(F,{})}),document.getElementById("root"))}},[[277,1,2]]]);
//# sourceMappingURL=main.bbdd7426.chunk.js.map