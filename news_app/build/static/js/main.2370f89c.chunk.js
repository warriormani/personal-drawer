(this.webpackJsonpnews_app=this.webpackJsonpnews_app||[]).push([[0],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),l=a.n(r),o=(a(87),a(36)),c=a(42),s=a.n(c),m=a(168),d=a(167),p=a(163),u=a(169),f=a(161),g=a(162),h=a(164),b=a(165),x=a(166),y=a(70),w=a.n(y),v=a(159),E=Object(v.a)({media:{height:250},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderBottom:"10px solid white"},activeCard:{borderBottom:"10px solid #22289a"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),j=function(e){var t=e.article,a=t.description,r=t.publishedAt,l=t.source,c=t.title,s=t.url,m=t.urlToImage,d=e.activeArticle,y=e.i,v=E(),j=Object(n.useState)([]),C=Object(o.a)(j,2),N=C[0],O=C[1];return Object(n.useEffect)((function(){window.scroll(0,0),O((function(e){return Array(20).fill().map((function(t,a){return e[a]||Object(n.createRef)()}))}))}),[]),Object(n.useEffect)((function(){var e;y===d&&N[d]&&(e=N[d],window.scroll(0,e.current.offsetTop-50))}),[y,d,N]),i.a.createElement(u.a,{ref:N[y],className:w()(v.card,d===y?v.activeCard:null)},i.a.createElement(f.a,{href:s,target:"_blank"},i.a.createElement(g.a,{className:v.media,image:m||"https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png",title:c}),i.a.createElement("div",{className:v.details},i.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"h2"},new Date(r).toDateString()),i.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"h2"},l.name)),i.a.createElement(p.a,{className:v.title,gutterBottom:!0,variant:"h5",component:"h2"},c),i.a.createElement(h.a,null,i.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"p"},a))),i.a.createElement(b.a,{className:v.cardActions},i.a.createElement(x.a,{size:"small",color:"primary",href:s},"Learn More"),i.a.createElement(p.a,{variant:"h5",color:"textSecondary",component:"h2"},y+1)))},C=Object(v.a)({card:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:"100%",height:"45vh",padding:"10%",borderRadius:10,color:"white"},infoCard:{display:"flex",flexDirection:"column",textAlign:"center"},container:{padding:"0 5%",width:"100%",margin:0}}),N=[{color:"#00838f",title:"Latest News",text:"Give me the latest news"},{color:"#1565c0",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news"},{color:"#4527a0",title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with PlayStation 5"},{color:"#283593",title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from CNN"}],O=function(e){var t=e.articles,a=e.activeArticle,n=C();return t.length?i.a.createElement(m.a,{in:!0},i.a.createElement(d.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},t.map((function(e,t){return i.a.createElement(d.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"}},i.a.createElement(j,{activeArticle:a,i:t,article:e}))})))):i.a.createElement(m.a,{in:!0},i.a.createElement(d.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},N.map((function(e){return i.a.createElement(d.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:n.infoCard},i.a.createElement("div",{className:n.card,style:{backgroundColor:e.color}},i.a.createElement(p.a,{variant:"h5",component:"h5"},e.title),e.info?i.a.createElement(p.a,{variant:"h6",component:"h6"},i.a.createElement("strong",null,e.title.split(" ")[2]),": ",i.a.createElement("br",null),e.info):null,i.a.createElement(p.a,{variant:"h6",component:"h6"},"Try saying: ",i.a.createElement("br",null)," ",i.a.createElement("i",null,e.text))))}))))},A=a(25),k=Object(v.a)((function(e){return{footer:Object(A.a)({textAlign:"center",position:"fixed",left:0,bottom:0,color:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},e.breakpoints.down("sm"),{display:"none"}),link:{textDecoration:"none",color:"rgba(21, 101, 192)"},image:{marginLeft:20},card:Object(A.a)({display:"flex",justifyContent:"center",alignItems:"center",width:"50%",padding:"3%",borderRadius:10,color:"white",backgroundColor:"rgba(21, 101, 192)",margin:"0 12px",textAlign:"center",height:"25vmin"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center",width:"100%",height:"initial","&:nth-of-type(1)":{marginBottom:"12px"}}),infoContainer:Object(A.a)({display:"flex",alignItems:"center",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column"}),logoContainer:Object(A.a)({padding:"0 5%",display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center"}),alanLogo:Object(A.a)({height:"27vmin",borderRadius:"15%",padding:"0 5%",margin:"3% 0"},e.breakpoints.down("sm"),{height:"35vmin"})}})),S=a(75),B=a.n(S),D=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(-1),c=Object(o.a)(l,2),m=c[0],d=c[1],p=k();return Object(n.useEffect)((function(){s()({key:"bd534149491fddefc49186ee581048b02e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,a=e.articles,n=e.number;if("newHeadLines"===t)r(a),d(-1);else if("highlight"===t)d((function(e){return e+1}));else if("open"===t){var i=n.length>2?B()(n,{fuzzy:!0}):n,l=a[i-1];i>20?s()().playText("Please try that again."):l&&(window.open(l.url,"_blank"),s()().playText("Opening..."))}}})}),[]),i.a.createElement("div",null,i.a.createElement("div",{className:p.logoContainer},i.a.createElement("img",{src:"https://alan.app/voice/images/previews/preview.jpg",className:p.alanLogo,alt:"logo"})),i.a.createElement(O,{articles:a,activeArticle:m}))};l.a.render(i.a.createElement(D,null),document.getElementById("root"))},82:function(e,t,a){e.exports=a(145)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.2370f89c.chunk.js.map