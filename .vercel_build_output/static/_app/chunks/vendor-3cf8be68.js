function h(){}function K(t,n){for(const e in n)t[e]=n[e];return t}function H(t){return t()}function v(){return Object.create(null)}function m(t){t.forEach(H)}function Q(t){return typeof t=="function"}function R(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let y;function dt(t,n){return y||(y=document.createElement("a")),y.href=n,t===y.href}function W(t){return Object.keys(t).length===0}function ht(t,n,e,i){if(t){const r=B(t,n,e,i);return t[0](r)}}function B(t,n,e,i){return t[1]&&i?K(e.ctx.slice(),t[1](i(n))):e.ctx}function mt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],l=Math.max(n.dirty.length,r.length);for(let o=0;o<l;o+=1)u[o]=n.dirty[o]|r[o];return u}return n.dirty|r}return n.dirty}function pt(t,n,e,i,r,u){if(r){const l=B(n,e,i,u);t.p(l,r)}}function gt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let x=!1;function U(){x=!0}function V(){x=!1}function X(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const s=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=s?r+1:X(1,r,g=>n[e[g]].claim_order,s))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const u=[],l=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(u.push(n[c-1]);o>=c;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);u.reverse(),l.sort((c,s)=>c.claim_order-s.claim_order);for(let c=0,s=0;c<l.length;c++){for(;s<u.length&&l[c].claim_order>=u[s].claim_order;)s++;const a=s<u.length?u[s]:null;t.insertBefore(l[c],a)}}function Z(t,n){if(x){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function tt(t,n,e){t.insertBefore(n,e||null)}function nt(t,n,e){x&&!e?Z(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function b(t){t.parentNode.removeChild(t)}function yt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function L(t){return document.createElement(t)}function et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function N(t){return document.createTextNode(t)}function xt(){return N(" ")}function bt(){return N("")}function wt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function it(t){return Array.from(t.childNodes)}function z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,n,e,i,r=!1){z(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const c=e(o);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const c=e(o);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function D(t,n,e,i){return O(t,r=>r.nodeName===n,r=>{const u=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];e[o.name]||u.push(o.name)}u.forEach(l=>r.removeAttribute(l))},()=>i(n))}function $t(t,n,e){return D(t,n,e,L)}function At(t,n,e){return D(t,n,e,et)}function rt(t,n){return O(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>N(n),!0)}function Et(t){return rt(t," ")}function G(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function Nt(t){const n=G(t,"HTML_TAG_START",0),e=G(t,"HTML_TAG_END",n);if(n===e)return new P;z(t);const i=t.splice(n,e+1);b(i[0]),b(i[i.length-1]);const r=i.slice(1,i.length-1);for(const u of r)u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new P(r)}function Tt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function St(t,n,e,i){t.style.setProperty(n,e,i?"important":"")}function kt(t,n=document.body){return Array.from(n.querySelectorAll(t))}class ct{constructor(){this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.e=L(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)tt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(b)}}class P extends ct{constructor(n){super();this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}}let w;function $(t){w=t}function T(){if(!w)throw new Error("Function called outside component initialization");return w}function jt(t){T().$$.on_mount.push(t)}function Mt(t){T().$$.after_update.push(t)}function qt(t,n){T().$$.context.set(t,n)}const p=[],F=[],A=[],I=[],lt=Promise.resolve();let S=!1;function ot(){S||(S=!0,lt.then(J))}function k(t){A.push(t)}let j=!1;const M=new Set;function J(){if(!j){j=!0;do{for(let t=0;t<p.length;t+=1){const n=p[t];$(n),st(n.$$)}for($(null),p.length=0;F.length;)F.pop()();for(let t=0;t<A.length;t+=1){const n=A[t];M.has(n)||(M.add(n),n())}A.length=0}while(p.length);for(;I.length;)I.pop()();S=!1,j=!1,M.clear()}}function st(t){if(t.fragment!==null){t.update(),m(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const E=new Set;let _;function Ct(){_={r:0,c:[],p:_}}function Ht(){_.r||m(_.c),_=_.p}function ut(t,n){t&&t.i&&(E.delete(t),t.i(n))}function vt(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Bt(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const l=t[u],o=n[u];if(o){for(const c in l)c in o||(i[c]=1);for(const c in o)r[c]||(e[c]=o[c],r[c]=1);t[u]=o}else for(const c in l)r[c]=1}for(const l in i)l in e||(e[l]=void 0);return e}function Lt(t){return typeof t=="object"&&t!==null?t:{}}function zt(t){t&&t.c()}function Ot(t,n){t&&t.l(n)}function ft(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:l,after_update:o}=t.$$;r&&r.m(n,e),i||k(()=>{const c=u.map(H).filter(Q);l?l.push(...c):m(c),t.$$.on_mount=[]}),o.forEach(k)}function at(t,n){const e=t.$$;e.fragment!==null&&(m(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function _t(t,n){t.$$.dirty[0]===-1&&(p.push(t),ot(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Dt(t,n,e,i,r,u,l,o=[-1]){const c=w;$(t);const s=t.$$={fragment:null,ctx:null,props:u,update:h,not_equal:r,bound:v(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:v(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};l&&l(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,g,...q)=>{const C=q.length?q[0]:g;return s.ctx&&r(s.ctx[f],s.ctx[f]=C)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](C),a&&_t(t,f)),g}):[],s.update(),a=!0,m(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){U();const f=it(n.target);s.fragment&&s.fragment.l(f),f.forEach(b)}else s.fragment&&s.fragment.c();n.intro&&ut(t.$$.fragment),ft(t,n.target,n.anchor,n.customElement),V(),J()}$(c)}class Gt{$destroy(){at(this,1),this.$destroy=h}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!W(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const d=[];function Pt(t,n=h){let e;const i=new Set;function r(o){if(R(t,o)&&(t=o,e)){const c=!d.length;for(const s of i)s[1](),d.push(s,t);if(c){for(let s=0;s<d.length;s+=2)d[s][0](d[s+1]);d.length=0}}}function u(o){r(o(t))}function l(o,c=h){const s=[o,c];return i.add(s),i.size===1&&(e=n(r)||h),o(t),()=>{i.delete(s),i.size===0&&(e(),e=null)}}return{set:r,update:u,subscribe:l}}export{jt as A,K as B,Pt as C,et as D,At as E,Z as F,h as G,St as H,ht as I,kt as J,pt as K,gt as L,mt as M,dt as N,yt as O,P,Nt as Q,Gt as S,it as a,wt as b,$t as c,b as d,L as e,nt as f,rt as g,Tt as h,Dt as i,zt as j,xt as k,bt as l,Ot as m,Et as n,ft as o,Bt as p,Lt as q,Ct as r,R as s,N as t,vt as u,at as v,Ht as w,ut as x,qt as y,Mt as z};
