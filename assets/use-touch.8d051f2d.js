import{O as R,U as L,C as V,A as a,B as b,H,P as X,W,x as M,D as _,X as g,G as D,q as U,R as q,M as K}from"./vue-libs.6baccb04.js";function Ne(){}const Z=Object.assign,k=typeof window!="undefined";function x(e,t){const n=t.split(".");let u=e;return n.forEach(r=>{var o;u=(o=u[r])!=null?o:""}),u}function Se(e,t,n){return t.reduce((u,r)=>((!n||e[r]!==void 0)&&(u[r]=e[r]),u),{})}const Pe=e=>Array.isArray(e)?e:[e],$e=null,G=[Number,String],Re={type:Boolean,default:!0},Le=e=>({type:e,required:!0}),Me=()=>({type:Array,default:()=>[]}),_e=e=>({type:Number,default:e}),ke=e=>({type:G,default:e}),ze=e=>({type:String,default:e});var f=typeof window!="undefined";function T(e){return f?requestAnimationFrame(e):-1}function Ie(e){T(()=>T(e))}var J=e=>e===window,O=(e,t)=>({top:0,left:0,right:e,bottom:t,width:e,height:t}),Ye=e=>{const t=g(e);if(J(t)){const n=t.innerWidth,u=t.innerHeight;return O(n,u)}return t!=null&&t.getBoundingClientRect?t.getBoundingClientRect():O(0,0)};function je(e){const t=R(e,null);if(t){const n=D(),{link:u,unlink:r,internalChildren:o}=t;u(n),L(()=>r(n));const s=V(()=>o.indexOf(n));return{parent:t,index:s}}return{parent:null,index:a(-1)}}function Q(e){const t=[],n=u=>{Array.isArray(u)&&u.forEach(r=>{var o;K(r)&&(t.push(r),(o=r.component)!=null&&o.subTree&&(t.push(r.component.subTree),n(r.component.subTree.children)),r.children&&n(r.children))})};return n(e),t}function ee(e,t,n){const u=Q(e.subTree.children);n.sort((o,s)=>u.indexOf(o.vnode)-u.indexOf(s.vnode));const r=n.map(o=>o.proxy);t.sort((o,s)=>{const d=r.indexOf(o),i=r.indexOf(s);return d-i})}function Ve(e){const t=b([]),n=b([]),u=D();return{children:t,linkChildren:o=>{H(e,Object.assign({link:i=>{i.proxy&&(n.push(i),t.push(i.proxy),ee(u,t,n))},unlink:i=>{const c=n.indexOf(i);t.splice(c,1),n.splice(c,1)},children:t,internalChildren:n},o))}}}function te(e){let t;_(()=>{e(),U(()=>{t=!0})}),q(()=>{t&&e()})}function He(e,t,n={}){if(!f)return;const{target:u=window,passive:r=!1,capture:o=!1}=n;let s;const d=c=>{const l=g(c);l&&!s&&(l.addEventListener(e,t,{capture:o,passive:r}),s=!0)},i=c=>{const l=g(c);l&&s&&(l.removeEventListener(e,t,o),s=!1)};L(()=>i(u)),X(()=>i(u)),te(()=>d(u)),W(u)&&M(u,(c,l)=>{i(l),d(c)})}var E,v;function ne(){if(!E&&(E=a(0),v=a(0),f)){const e=()=>{E.value=window.innerWidth,v.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:E,height:v}}var ue=/scroll|auto/i,z=f?window:void 0;function re(e){return e.tagName!=="HTML"&&e.tagName!=="BODY"&&e.nodeType===1}function oe(e,t=z){let n=e;for(;n&&n!==t&&re(n);){const{overflowY:u}=window.getComputedStyle(n);if(ue.test(u))return n;n=n.parentNode}return t}function Xe(e,t=z){const n=a();return _(()=>{e.value&&(n.value=oe(e.value,t))}),n}var m;function We(){if(!m&&(m=a("visible"),f)){const e=()=>{m.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return m}var se=Symbol("van-field");function Ue(e){const t=R(se,null);t&&!t.customValue.value&&(t.customValue.value=e,M(e,()=>{t.resetValidation(),t.validateWithTrigger("onChange")}))}const A=e=>e!=null,C=e=>typeof e=="function",I=e=>e!==null&&typeof e=="object",qe=e=>I(e)&&C(e.then)&&C(e.catch),Ke=e=>Object.prototype.toString.call(e)==="[object Date]"&&!Number.isNaN(e.getTime()),ie=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),ae=()=>k?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function Ze(e){const t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}function N(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}function ce(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function le(e){N(window,e),N(document.body,e)}const de=ae();function Ge(){de&&le(ce())}const fe=e=>e.stopPropagation();function Je(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),t&&fe(e)}function Qe(e){const t=g(e);if(!t)return!1;const n=window.getComputedStyle(t),u=n.display==="none",r=t.offsetParent===null&&n.position!=="fixed";return u||r}const{width:pe,height:Ee}=ne();function w(e){if(A(e))return ie(e)?`${e}px`:String(e)}function et(e){if(A(e)){if(Array.isArray(e))return{width:w(e[0]),height:w(e[1])};const t=w(e);return{width:t,height:t}}}function tt(e){const t={};return e!==void 0&&(t.zIndex=+e),t}let y;function me(){if(!y){const e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;y=parseFloat(t)}return y}function ge(e){return e=e.replace(/rem/g,""),+e*me()}function he(e){return e=e.replace(/vw/g,""),+e*pe.value/100}function ve(e){return e=e.replace(/vh/g,""),+e*Ee.value/100}function nt(e){if(typeof e=="number")return e;if(k){if(e.includes("rem"))return ge(e);if(e.includes("vw"))return he(e);if(e.includes("vh"))return ve(e)}return parseFloat(e)}const we=/-(\w)/g,Y=e=>e.replace(we,(t,n)=>n.toUpperCase()),ut=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,"");function rt(e,t=2){let n=e+"";for(;n.length<t;)n="0"+n;return n}const ot=(e,t,n)=>Math.min(Math.max(e,t),n);function S(e,t,n){const u=e.indexOf(t);return u===-1?e:t==="-"&&u!==0?e.slice(0,u):e.slice(0,u+1)+e.slice(u).replace(n,"")}function st(e,t=!0,n=!0){t?e=S(e,".",/\./g):e=e.split(".")[0],n?e=S(e,"-",/-/g):e=e.replace(/-/,"");const u=t?/[^-0-9.]/g:/[^-0-9]/g;return e.replace(u,"")}function it(e,t){return Math.round((e+t)*1e10)/1e10}const{hasOwnProperty:ye}=Object.prototype;function be(e,t,n){const u=t[n];!A(u)||(!ye.call(e,n)||!I(u)?e[n]=u:e[n]=j(Object(e[n]),u))}function j(e,t){return Object.keys(t).forEach(n=>{be(e,t,n)}),e}var Ce={name:"\u59D3\u540D",tel:"\u7535\u8BDD",save:"\u4FDD\u5B58",confirm:"\u786E\u8BA4",cancel:"\u53D6\u6D88",delete:"\u5220\u9664",loading:"\u52A0\u8F7D\u4E2D...",noCoupon:"\u6682\u65E0\u4F18\u60E0\u5238",nameEmpty:"\u8BF7\u586B\u5199\u59D3\u540D",addContact:"\u6DFB\u52A0\u8054\u7CFB\u4EBA",telInvalid:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7535\u8BDD",vanCalendar:{end:"\u7ED3\u675F",start:"\u5F00\u59CB",title:"\u65E5\u671F\u9009\u62E9",weekdays:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],monthTitle:(e,t)=>`${e}\u5E74${t}\u6708`,rangePrompt:e=>`\u6700\u591A\u9009\u62E9 ${e} \u5929`},vanCascader:{select:"\u8BF7\u9009\u62E9"},vanPagination:{prev:"\u4E0A\u4E00\u9875",next:"\u4E0B\u4E00\u9875"},vanPullRefresh:{pulling:"\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",loosing:"\u91CA\u653E\u5373\u53EF\u5237\u65B0..."},vanSubmitBar:{label:"\u5408\u8BA1:"},vanCoupon:{unlimited:"\u65E0\u95E8\u69DB",discount:e=>`${e}\u6298`,condition:e=>`\u6EE1${e}\u5143\u53EF\u7528`},vanCouponCell:{title:"\u4F18\u60E0\u5238",count:e=>`${e}\u5F20\u53EF\u7528`},vanCouponList:{exchange:"\u5151\u6362",close:"\u4E0D\u4F7F\u7528",enable:"\u53EF\u7528",disabled:"\u4E0D\u53EF\u7528",placeholder:"\u8F93\u5165\u4F18\u60E0\u7801"},vanAddressEdit:{area:"\u5730\u533A",postal:"\u90AE\u653F\u7F16\u7801",areaEmpty:"\u8BF7\u9009\u62E9\u5730\u533A",addressEmpty:"\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",postalEmpty:"\u90AE\u653F\u7F16\u7801\u4E0D\u6B63\u786E",addressDetail:"\u8BE6\u7EC6\u5730\u5740",defaultAddress:"\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"},vanAddressList:{add:"\u65B0\u589E\u5730\u5740"}};const P=a("zh-CN"),$=b({"zh-CN":Ce}),Be={messages(){return $[P.value]},use(e,t){P.value=e,this.add({[e]:t})},add(e={}){j($,e)}};var De=Be;function Ae(e){const t=Y(e)+".";return(n,...u)=>{const r=De.messages(),o=x(r,t+n)||x(r,n);return C(o)?o(...u):o}}function B(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((n,u)=>n+B(e,u),""):Object.keys(t).reduce((n,u)=>n+(t[u]?B(e,u):""),""):""}function Fe(e){return(t,n)=>(t&&typeof t!="string"&&(n=t,t=""),t=t?`${e}__${t}`:e,`${t}${B(t,n)}`)}function at(e){const t=`van-${e}`;return[t,Fe(t),Ae(t)]}function ct(e){return e.install=t=>{const{name:n}=e;t.component(n,e),t.component(Y(`-${n}`),e)},e}function lt(e){const t=D();t&&Z(t.proxy,e)}function xe(e,t){return e>t?"horizontal":t>e?"vertical":""}function dt(){const e=a(0),t=a(0),n=a(0),u=a(0),r=a(0),o=a(0),s=a(""),d=()=>s.value==="vertical",i=()=>s.value==="horizontal",c=()=>{n.value=0,u.value=0,r.value=0,o.value=0,s.value=""};return{move:p=>{const h=p.touches[0];n.value=(h.clientX<0?0:h.clientX)-e.value,u.value=h.clientY-t.value,r.value=Math.abs(n.value),o.value=Math.abs(u.value);const F=10;(!s.value||r.value<F&&o.value<F)&&(s.value=xe(r.value,o.value))},start:p=>{c(),e.value=p.touches[0].clientX,t.value=p.touches[0].clientY},reset:c,startX:e,startY:t,deltaX:n,deltaY:u,offsetX:r,offsetY:o,direction:s,isVertical:d,isHorizontal:i}}export{Pe as A,st as B,se as C,Ge as D,Ue as E,rt as F,Ke as G,Ye as H,fe as I,it as J,et as K,Ne as L,ie as M,ut as N,te as O,oe as P,tt as Q,He as R,k as S,pe as T,Ee as U,We as V,Qe as W,Ie as X,Xe as Y,Ze as Z,I as a,_e as b,at as c,Me as d,dt as e,je as f,lt as g,ot as h,A as i,Z as j,ke as k,ze as l,Le as m,G as n,Ve as o,Je as p,nt as q,Se as r,qe as s,Re as t,$e as u,C as v,ct as w,ce as x,le as y,w as z};