(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){e.exports=a(317)},136:function(e,t,a){},317:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),c=a.n(i),o=(a(136),a(16)),l=a(20),s=a(22),u=a(21),m=a(23),h=a(130),d=a(15),p=a(111),v=a.n(p),f=a(58),g=a.n(f),b=a(113),y=a.n(b),E=a(114),w=a.n(E),x=a(115),C=a.n(x),O=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e,t){a.setState({value:t},function(){var e=a.state.value;(0,a.props.handleSelect)(e)})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.changeTab;return r.a.createElement(v.a,{value:a,onChange:this.handleChange,showLabels:!0,className:t.root},r.a.createElement(g.a,{disabled:!0,value:"home",label:"Home",icon:r.a.createElement(y.a,null)}),r.a.createElement(g.a,{disabled:!0,value:"settings",label:"Settings",icon:r.a.createElement(w.a,null)}),r.a.createElement(g.a,{disabled:!0,value:"game",label:"Game",icon:r.a.createElement(C.a,null)}))}}]),t}(r.a.Component),j=Object(d.withStyles)({root:{margin:0,padding:0,width:"100%",position:"fixed",top:0}})(O),S=a(55),N=a.n(S),k=a(30),T=a.n(k),A=a(29),q=a.n(A);var Q=Object(d.withStyles)({textCenter:{textAlign:"center"},welcomeText:{fontFamily:"Pacifico"}})(function(e){var t=e.classes,a=e.handleSelect;return r.a.createElement("div",{className:t.textCenter},r.a.createElement(q.a,{variant:"h4",className:t.welcomeText},"Wellcome in quiz"),r.a.createElement("p",null,"Quiz questions comes from ",r.a.createElement("a",{href:"https://opentdb.com"},"Open Trivia DB")),r.a.createElement("p",null,"To start click below button ",r.a.createElement("span",{role:"img","aria-label":" "},"\ud83d\udc47")),r.a.createElement(T.a,{variant:"contained",color:"primary",onClick:function(){a("settings")}},"Game settings"))}),D=a(35),z=a.n(D),F=a(56),P=a(116),W=a.n(P),G=new function e(){var t=this;Object(o.a)(this,e),this.getData=function(){var e=Object(F.a)(z.a.mark(function e(a){var n,r,i,c,o;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.questionNumber,r=a.category,i=a.difficulty,c=t.baseUrl+n,"any"!==r&&(c+="&category=".concat(r)),"any"!==i&&(c+="&difficulty=".concat(i)),e.next=6,W.a.get(c).then(function(e){return e.data.results}).catch(function(e){return console.log(e),[]});case 6:return o=e.sent,e.abrupt("return",o);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),this.baseUrl="https://opentdb.com/api.php?amount="},M=a(57),B=a(5),H=a.n(B),R=a(117),L=a.n(R),V=a(119),_=a.n(V),I=a(120),J=a.n(I),U=a(123),K=a.n(U),Y=a(121),$=a.n(Y),X=a(122),Z=a.n(X),ee=a(73),te=a.n(ee),ae=a(124),ne=a.n(ae),re=a(72),ie=a.n(re),ce=a(118),oe=a.n(ce),le={success:L.a,warning:oe.a,error:_.a,info:J.a};var se=Object(d.withStyles)(function(e){return{success:{backgroundColor:$.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:Z.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing.unit},message:{display:"flex",alignItems:"center"}}})(function(e){var t=e.classes,a=e.className,n=e.message,i=e.onClose,c=e.variant,o=Object(M.a)(e,["classes","className","message","onClose","variant"]),l=le[c];return r.a.createElement(ie.a,Object.assign({className:H()(t[c],a),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:t.message},r.a.createElement(l,{className:H()(t.icon,t.iconVariant)}),n),action:[r.a.createElement(te.a,{key:"close","aria-label":"Close",color:"inherit",className:t.close,onClick:i},r.a.createElement(K.a,{className:t.icon}))]},o))}),ue=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,message:""},a.handleClick=function(){a.setState({open:!0})},a.handleClose=function(e,t){"clickaway"!==t&&a.setState({open:!1,message:""})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.message,a=e.open;this.setState({open:a,message:t})}},{key:"render",value:function(){var e=this.props.variant,t=this.state,a=t.open,n=t.message;return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:a,autoHideDuration:3e3,onClose:this.handleClose},r.a.createElement(se,{onClose:this.handleClose,variant:e,message:n})))}}]),t}(r.a.Component),me=Object(d.withStyles)(function(e){return{margin:{margin:e.spacing.unit}}})(ue),he=[{value:"9",text:"General Knowledge"},{value:"10",text:"Entertainment: Books"},{value:"11",text:"Entertainment: Film"},{value:"12",text:"Entertainment: Music"},{value:"13",text:"Entertainment: Musicals &amp; Theatres"},{value:"14",text:"Entertainment: Television"},{value:"15",text:"Entertainment: Video Games"},{value:"16",text:"Entertainment: Board Games"},{value:"17",text:"Science &amp; Nature"},{value:"18",text:"Science: Computers"},{value:"19",text:"Science: Mathematics"},{value:"20",text:"Mythology"},{value:"21",text:"Sports"},{value:"22",text:"Geography"},{value:"23",text:"History"},{value:"24",text:"Politics"},{value:"25",text:"Art"},{value:"26",text:"Celebrities"},{value:"27",text:"Animals"},{value:"28",text:"Vehicles"},{value:"29",text:"Entertainment: Comics"},{value:"30",text:"Science: Gadgets"},{value:"31",text:"Entertainment: Japanese Anime &amp; Manga"},{value:"33",text:"Entertainment: Cartoon &amp; Animations"}],de=[{value:"any",text:"Any Difficulty"},{value:"easy",text:"Easy"},{value:"medium",text:"Medium"},{value:"hard",text:"Hard"}],pe=a(36),ve=a.n(pe),fe=a(60),ge=a.n(fe),be=a(59),ye=a.n(be),Ee=a(27),we=a.n(Ee),xe=a(125),Ce=a.n(xe),Oe=function(e){return function(t){var a=t.loading,n=Object(M.a)(t,["loading"]),i=a?.5:1;return r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("div",{style:{opacity:i}},r.a.createElement(e,n)),a&&r.a.createElement("div",{style:{display:"inline-block",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},r.a.createElement(Ce.a,{color:"secondary"})))}},je=Oe(T.a),Se=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={questionNumber:"",category:"",difficulty:"",loading:!1,error:!1},a.handleQuestionNumber=function(e){a.setState({questionNumber:e.target.value})},a.handleChangeCategorie=function(e){a.setState({category:e.target.value})},a.handleDifficulty=function(e){a.setState({difficulty:e.target.value})},a.handleSubmit=function(){var e=Object(F.a)(z.a.mark(function e(t){var n,r;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.props.handleQuestion,a.setState({loading:!0}),e.next=5,new G.getData(a.state);case 5:(r=e.sent).length?(a.setState({loading:!1,error:!1}),n(r)):a.setState({error:!0,loading:!1});case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.questionNumber,n=t.category,i=t.difficulty,c=t.loading,o=t.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(me,{open:o,variant:"error",message:"Error while fetch data \ud83d\ude2a"}),r.a.createElement(q.a,{variant:"h4",className:e.welcomeText},"Quiz settings"),r.a.createElement("div",{className:e.space}),r.a.createElement("form",{onSubmit:this.handleSubmit,className:e.form},r.a.createElement(ve.a,{className:e.formControl,fullWidth:!0},r.a.createElement(ye.a,{htmlFor:"questionNumber",className:e.welcomeText},"Select number of quiz question"),r.a.createElement(ge.a,{value:a,onChange:this.handleQuestionNumber,inputProps:{name:"number",id:"questionNumber"}},r.a.createElement(we.a,{value:5},"5"),r.a.createElement(we.a,{value:10},"10"),r.a.createElement(we.a,{value:15},"15"),r.a.createElement(we.a,{value:20},"20"),r.a.createElement(we.a,{value:25},"25"),r.a.createElement(we.a,{value:30},"30"))),r.a.createElement("div",{className:e.space}),r.a.createElement(ve.a,{className:e.formControl,fullWidth:!0},r.a.createElement(ye.a,{htmlFor:"category",className:e.welcomeText},"Select category"),r.a.createElement(ge.a,{value:n,onChange:this.handleChangeCategorie,inputProps:{name:"number",id:"category"}},he.map(function(e,t){return r.a.createElement(we.a,{key:t,value:e.value},e.text)}))),r.a.createElement("div",{className:e.space}),r.a.createElement(ve.a,{className:e.formControl,fullWidth:!0},r.a.createElement(ye.a,{htmlFor:"category",className:e.welcomeText},"Select Difficulty"),r.a.createElement(ge.a,{value:i,onChange:this.handleDifficulty,inputProps:{name:"number",id:"category"}},de.map(function(e,t){return r.a.createElement(we.a,{key:t,value:e.value},e.text)}))),r.a.createElement("div",{className:e.space}),r.a.createElement(je,{loading:c,disabled:c,className:e.button,variant:"contained",color:"primary",type:"submit"},"Let's play")))}}]),t}(n.Component),Ne=Oe(Object(d.withStyles)(function(e){return{form:{display:"flex",flexDirection:"column",alignItems:"center"},space:{marginTop:"1rem"},welcomeText:{fontFamily:"Pacifico",textAlign:"center"}}})(Se)),ke=a(129),Te=a(128),Ae=a.n(Te),qe=a(126),Qe=a.n(qe),De=a(127),ze=a.n(De),Fe=a(74),Pe=a.n(Fe),We=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",data:{}},a.handleChange=function(e){e.preventDefault(),a.setState({value:e.target.value})},a.handleAnswer=function(){var e=a.state.value,t=a.props;(0,t.next)(e===t.data.correct_answer)},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.data,i=n.question,c=n.answers;return null==i?"":r.a.createElement("div",{className:a.root},r.a.createElement(ve.a,{component:"fieldset",className:a.formControl},r.a.createElement(Pe.a,{component:"legend"},i),r.a.createElement(Qe.a,{"aria-label":"question",name:"question",className:a.group,value:this.state.value,onChange:this.handleChange},c.map(function(e,t){return r.a.createElement(ze.a,{key:t,value:e,control:r.a.createElement(Ae.a,null),label:e})})),r.a.createElement(T.a,{variant:"contained",color:"primary",onClick:function(){return e.handleAnswer()}}," Next ")))}}]),t}(r.a.Component),Ge=Object(d.withStyles)(function(e){return{root:{display:"flex"},formControl:{margin:3*e.spacing.unit},group:{margin:"".concat(e.spacing.unit,"px 0")}}})(We),Me=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={counter:0,points:0},a.shuffleQuestion=function(e){if(null==e)return null;var t=e.incorrect_answers,n=e.correct_answer,r=e.question,i=a.state,c=i.counter;return c===i.points&&0!==c?"":{question:r,answers:[].concat(Object(ke.a)(t),[n]).sort(function(){return.5-Math.random()}),correct_answer:n}},a.handleNext=function(e){var t=a.state,n=t.points,r=t.counter;a.setState({points:n+e,counter:r+1})},a.renderQuesion=function(){var e=a.state.counter,t=a.props.data,n=a.shuffleQuestion(t[e]);return r.a.createElement(Ge,{data:n,next:a.handleNext})},a.playAgain=function(){a.props.handleSelect("settings")},a.renderPoints=function(){var e=a.state.points;return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{variant:"h4"},"Your score"),r.a.createElement("div",null,e),r.a.createElement(T.a,{variant:"contained",color:"primary",onClick:function(){return a.playAgain()}},"Play again"))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.counter,t=this.props,a=t.classes,n=void 0===t.data[e];return r.a.createElement("div",{className:a.textCenter},r.a.createElement("div",null,n?this.renderPoints():this.renderQuesion()))}}]),t}(n.Component),Be=Oe(Object(d.withStyles)(function(e){return{space:{marginTop:"1rem"},textCenter:{textAlign:"center"}}})(Me)),He=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={activeTab:"home",quizData:[]},a.handleSelect=function(e){a.setState({activeTab:e})},a.handleQuestion=function(e){a.setState({quizData:e,activeTab:"game"})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.activeTab,n=t.quizData;return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{changeTab:a,handleSelect:this.handleSelect}),r.a.createElement("div",{className:e.space}),r.a.createElement(N.a,{className:e.root},{home:r.a.createElement(Q,{handleSelect:this.handleSelect}),settings:r.a.createElement(Ne,{handleQuestion:this.handleQuestion}),game:r.a.createElement(Be,{data:n,handleSelect:this.handleSelect})}[a]))}}]),t}(n.Component),Re=Object(d.withStyles)(function(e){return{root:Object(h.a)({},e.mixins.gutters(),{margin:2*e.spacing.unit,padding:2*e.spacing.unit,minHeight:"60vh"}),space:{marginTop:"5rem"}}})(He),Le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ve(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(Re,null),document.getElementById("app")),function(){if("serviceWorker"in navigator){if(new URL("/ReactQuiz",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/ReactQuiz","/service-worker.js");Le?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ve(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):Ve(e)})}}()}},[[131,2,1]]]);
//# sourceMappingURL=main.41f7ce12.chunk.js.map