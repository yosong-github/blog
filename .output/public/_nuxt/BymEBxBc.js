import{_ as A}from"./UuvI0tn0.js";import{d as L}from"./Bmcg6p_i.js";import{f as v,o as u,c as p,a as r,t as h,g as w,F as x,r as $,b as _,h as j,i as R,j as W,k as D,l as C,n as S,m as q,q as B,w as b}from"./C0CFf6dp.js";import H from"./7-rauGv7.js";import O from"./BZ0qzUvz.js";import"./DV41sZAj.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";import"./C_9pW9XB.js";import"./D8JwQrNW.js";import"./EnM-FkMX.js";import"./o5ISyVV8.js";const M={class:"mb-10"},Y={class:"text-center font-size-26px font-weight-bold"},N={class:"mb-4 w-100%"},V={class:"flex-center w-100% justify-around"},z=r("span",{class:"flex-center"},[r("img",{src:A,class:"object-cover rounded-full w-40px h-40px mr-2",alt:"yosong"}),r("span",null,"yosong")],-1),I=r("br",null,null,-1),F={class:"op-70 flex gap-2 m-t-0.5em"},G=v({__name:"DocTitle",props:["article"],setup(o){const e=o;return(t,i)=>(u(),p("div",M,[r("h1",Y,h(e.article.title),1),r("div",N,[r("div",V,[z,r("span",null,h(w(L)(e.article.date).format("YYYY-MM-DD HH:mm:ss")),1)]),I,r("div",F,[(u(!0),p(x,null,$(e.article.tags,c=>(u(),p("span",{key:c}," #"+h(c),1))),128))])])]))}}),P=v({__name:"DocRender",props:["article"],setup(o){const e=o;return(t,i)=>{const c=G,l=H;return u(),p(x,null,[_(c,{article:e.article},null,8,["article"]),_(l,{style:{"word-wrap":"break-word"},value:e.article},null,8,["value"])],64)}}});function X(o){return j()?(R(o),!0):!1}function T(o){return typeof o=="function"?o():w(o)}const J=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const K=Object.prototype.toString,Q=o=>K.call(o)==="[object Object]",U=()=>{};function Z(o){var e;const t=T(o);return(e=t==null?void 0:t.$el)!=null?e:t}const tt=J?window:void 0;function et(...o){let e,t,i,c;if(typeof o[0]=="string"||Array.isArray(o[0])?([t,i,c]=o,e=tt):[e,t,i,c]=o,!e)return U;Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]);const l=[],n=()=>{l.forEach(m=>m()),l.length=0},s=(m,f,y,g)=>(m.addEventListener(f,y,g),()=>m.removeEventListener(f,y,g)),d=W(()=>[Z(e),T(c)],([m,f])=>{if(n(),!m)return;const y=Q(f)?{...f}:f;l.push(...t.flatMap(g=>i.map(E=>s(m,g,E,y))))},{immediate:!0,flush:"post"}),a=()=>{d(),n()};return X(a),a}const ot={class:"fixed top-32 lg:left-80% xl:left-75% w-260px hidden lg:block overflow-x-hidden max-h-60% border-s lg:max-w-19.5% xl:max-w-24.5%"},nt={style:{padding:"0 1rem",margin:"0","font-size":"0.9rem"}},st=["onClick"],lt={key:0,class:"m-0"},it=["onClick"],k=100,rt=v({__name:"DocToc",props:["toc"],setup(o){const e=o,t=D(),i=l=>{let n=document.querySelector("#"+l),s=document.querySelector("html");if(top&&s&&n){let d=n.getBoundingClientRect().top+s.scrollTop-k;window.scrollTo({top:d,behavior:"smooth"})}history.pushState(null,"null","#"+l),t.value=l};function c(){const l=document.querySelectorAll("h2, h3");for(let n=0;n<l.length;n++){const s=l[n].getBoundingClientRect().top;s>=0&&s<=k+20&&(t.value=l[n].id)}}return C(()=>{et(document,"scroll",c),window.addEventListener("DOMContentLoaded",function(){let l=window.location.hash;if(l){let n=document.querySelector(l);n&&window.scrollTo({top:n.offsetTop-k,behavior:"smooth"})}})}),(l,n)=>(u(),p("div",ot,[r("ul",nt,[(u(!0),p(x,null,$(e.toc.links,(s,d)=>(u(),p("li",{key:d,class:"list-none relative line-height-loose"},[r("span",{class:S([{"text-Accent":s.id===w(t)},"cursor-pointer"]),onClick:a=>{a.preventDefault(),i(s.id)}},h(s.text),11,st),s.children&&s.children.length>0?(u(),p("ul",lt,[(u(!0),p(x,null,$(s.children,(a,m)=>(u(),p("li",{key:m,class:"list-none relative flex items-center line-height-loose"},[r("span",{class:S([{"text-Accent":a.id===w(t)},"cursor-pointer"]),onClick:f=>{f.preventDefault(),i(a.id)}},h(a.text),11,it)]))),128))])):q("",!0)]))),128))])]))}}),ct=()=>{C(()=>{document.querySelectorAll("img").forEach(e=>{e.addEventListener("click",function(){const t=e.cloneNode();console.log(t);const i=document.createElement("div");i.classList.add("mask"),i.appendChild(t),document.body.appendChild(i);let c=e.getBoundingClientRect().y,l=e.getBoundingClientRect().x,n=e.width,s=e.height,d=n/s;t.style.position="absolute",t.style.left=`${l}px`,t.style.top=`${c}px`,t.style.width=`${n}px`,t.style.height=`${s}px`,e.style.visibility="hidden",Promise.resolve().then(()=>{setTimeout(()=>{t.style.position="absolute",t.style.transition="all .5s",s>n&&window.innerHeight*d<window.innerWidth?(t.style.height="100%",console.log(window.innerHeight*d),console.log(window.innerWidth),t.style.width=window.innerHeight*d+"px",t.style.transform="translateX(-50%)",t.style.left="50%",t.style.top="0"):(t.style.width="100%",t.style.height=window.innerWidth*(s/n)+"px",t.style.transform="translateY(-50%)",t.style.top="50%",t.style.left="0")},0)}),i.addEventListener("click",function(){t.style.width=`${n}px`,t.style.height=`${s}px`,t.style.left=`${l}px`,t.style.top=`${c}px`,t.style.transform="";const a=document.querySelector(".mask");a.style.animation="fadeInOut 0.5s",a.style.backgroundColor="rgba(0, 0, 0, 0)",setTimeout(()=>{e.style.visibility="visible",this.remove()},500)})})})})},at={class:"pb-10 prose m-x-auto content"},dt=r("h1",null,"Document not found",-1),ut=r("h1",null,"Document is empty",-1),$t=v({__name:"[...post]",setup(o){const e=B(),t=e.params.blogType+"/"+e.params.post[0],i=D();return ct(),C(()=>{}),(c,l)=>{const n=P,s=rt,d=O;return u(),p("div",at,[_(d,{path:t},{default:b(({doc:a})=>[_(n,{article:a},null,8,["article"]),_(s,{toc:a.body.toc},null,8,["toc"])]),"not-found":b(()=>[dt]),empty:b(()=>[ut]),_:1}),r("div",{class:"content",ref_key:"comment",ref:i},null,512)])}}});export{$t as default};