(window.webpackJsonpmoodapp=window.webpackJsonpmoodapp||[]).push([[0],{22:function(e,t,a){e.exports=a(42)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),s=(a(27),a(1)),o=a(2),m=a(4),i=a(3),u=a(5),p=a(11),f=(a(28),a(29),a(10)),b=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar"},r.a.createElement(f.b,{to:"/",className:"navlink"}," Home "),r.a.createElement(f.b,{to:"/about",className:"navlink"}," About "),r.a.createElement(f.b,{to:"/categories",className:"navlink"}," categories "),r.a.createElement(f.b,{to:"/signin",className:"navlink",style:{float:"right"}}," Signin "),r.a.createElement(f.b,{to:"/signup",className:"navlink",style:{float:"right"}}," Signup "),r.a.createElement(f.b,{to:"/profile",className:"navlink",style:{float:"right"}}," Profile "))}}]),t}(n.Component),d=(a(35),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("p",null," Copyright@2019 Design by moodapp "))}}]),t}(n.Component)),E=(a(36),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Home Page")}}]),t}(n.Component)),h=(a(37),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"About Page")}}]),t}(n.Component)),y=(a(38),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null," \u0e40\u0e02\u0e49\u0e32\u0e2a\u0e39\u0e48\u0e23\u0e30\u0e1a\u0e1a"),r.a.createElement("form",null,r.a.createElement("label",{for:"username"}," Username",r.a.createElement("input",{type:"text",name:"username",className:"input-field"})),r.a.createElement("label",{for:"password"}," Password",r.a.createElement("input",{type:"password",name:"password",className:"input-field"})),r.a.createElement("button",{className:"btn"}," Sing In ")))}}]),t}(n.Component)),j=(a(39),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{className:"myForm"},r.a.createElement("h2",null," \u0e2a\u0e21\u0e31\u0e04\u0e23\u0e2a\u0e21\u0e32\u0e0a\u0e34\u0e01"),r.a.createElement("label",{for:"username",className:"myLabel"}," ",r.a.createElement("span",null,"Username"),r.a.createElement("input",{type:"text",name:"username",className:"myInput"})),r.a.createElement("label",{for:"password",className:"mylabel"}," ",r.a.createElement("span",null,"Password"),r.a.createElement("input",{type:"password",name:"password",className:"input-field"})),r.a.createElement("label",{for:"confirmpassword",className:"mylabel"}," ",r.a.createElement("span",null," Confirm Password "),r.a.createElement("input",{type:"password",name:" confirmpassword",className:"input-field"})),r.a.createElement("label",{for:"firstname",className:"mylable"},r.a.createElement("span",null,"First Name"),r.a.createElement("input",{type:"text",name:"firstname ",className:"input-field"})),r.a.createElement("label",{for:"lastname",className:"mylable"}," ",r.a.createElement("span",null,"Last Name"),r.a.createElement("input",{type:"text",name:" lastname",className:"input-field"})),r.a.createElement("span",null),r.a.createElement("button",{className:"myButton"}," Sing Up ")))}}]),t}(n.Component)),O=(a(40),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Profile Page")}}]),t}(n.Component)),v=(a(41),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(i.a)(t).call(this,e))).fSubmit=function(e){e.preventDefault(),console.log("try");var t=a.state.datas,n=a.refs.name.value,r=a.refs.address.value;if(0===a.state.act){var l={name:n,address:r};t.push(l)}else{var c=a.state.index;t[c].name=n,t[c].address=r}a.setState({datas:t,act:0}),a.refs.myForm.reset(),a.refs.name.focus()},a.fRemove=function(e){var t=a.state.datas;t.splice(e,1),a.setState({datas:t}),a.refs.myForm.reset(),a.refs.name.focus()},a.state={title:"Categories",act:0,index:"",datas:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.refs.name.focus()}},{key:"render",value:function(){var e=this,t=this.state.datas;return r.a.createElement("div",null,r.a.createElement("h2",null,this.state.title),r.a.createElement("form",{ref:"myForm",className:"myForm"},r.a.createElement("input",{type:"text",ref:"name",placeholder:"your name",className:"formField"}),r.a.createElement("input",{type:"text",ref:"address",placeholder:"your address",className:"formField"}),r.a.createElement("button",{onClick:function(t){return e.fSubmit(t)},className:"myButton"},"submit ")),r.a.createElement("pre",null,t.map(function(t,a){return r.a.createElement("li",{key:a,className:"myList"},a+1,". ",t.name,", ",t.address,r.a.createElement("button",{onClick:function(){return e.fRemove(a)},className:"myListButton"},"remove "),r.a.createElement("button",{onClick:function(){return e.fEdit(a)},className:"myListButton"},"edit "))})))}}]),t}(n.Component)),N=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(p.a,{exact:!0,path:"/",component:E}),r.a.createElement(p.a,{path:"/about",component:h}),r.a.createElement(p.a,{path:"/categories",component:v}),r.a.createElement(p.a,{path:"/signin",component:y}),r.a.createElement(p.a,{path:"/signup",component:j}),r.a.createElement(p.a,{path:"/profile",component:O}),r.a.createElement(d,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f.a,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[22,1,2]]]);
//# sourceMappingURL=main.c4b79b12.chunk.js.map