(window["webpackJsonpreact-form-validation"]=window["webpackJsonpreact-form-validation"]||[]).push([[0],{10:function(e,a,t){e.exports=t(18)},15:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(3),l=t.n(o),s=(t(15),t(16),t(17),t(1)),c=t(4),i=t(5),m=t(7),u=t(6),f=t(8),p=t(9);function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var b=RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/),h=function(e){var a=e.isError,t=Object(p.a)(e,["isError"]),n=!1;return Object.values(a).forEach((function(e){n=!(e.length>0)})),Object.values(t).forEach((function(e){n=null!==e})),n},g=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(u.a)(a).call(this,e))).onSubmit=function(e){e.preventDefault(),h(t.state)?console.log(t.state):console.log("Form is invalid!")},t.formValChange=function(e){e.preventDefault();var a=e.target,n=a.name,r=a.value,o=function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(t,!0).forEach((function(a){Object(s.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},t.state.isError);switch(n){case"name":o.name=r.length<4?"Atleast 4 characaters required":"";break;case"email":o.email=b.test(r)?"":"Email address is invalid";break;case"password":o.password=r.length<6?"Atleast 6 characaters required":""}t.setState(Object(s.a)({isError:o},n,r))},t.state={name:"",email:"",password:"",isError:{name:"",email:"",password:""}},t}return Object(f.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.isError;return r.a.createElement("form",{onSubmit:this.onSubmit,noValidate:!0},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",className:e.name.length>0?"is-invalid form-control":"form-control",name:"name",onChange:this.formValChange}),e.name.length>0&&r.a.createElement("span",{className:"invalid-feedback"},e.name)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",className:e.email.length>0?"is-invalid form-control":"form-control",name:"email",onChange:this.formValChange}),e.email.length>0&&r.a.createElement("span",{className:"invalid-feedback"},e.email)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:e.password.length>0?"is-invalid form-control":"form-control",name:"password",onChange:this.formValChange}),e.password.length>0&&r.a.createElement("span",{className:"invalid-feedback"},e.password)),r.a.createElement("button",{type:"submit",className:"btn btn-block btn-danger"},"Create User"))}}]),a}(n.Component);var v=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.70684413.chunk.js.map