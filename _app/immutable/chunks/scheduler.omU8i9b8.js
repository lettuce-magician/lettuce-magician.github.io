function x(){}function w(t,n){for(const e in n)t[e]=n[e];return t}function M(t){return!!t&&(typeof t=="object"||typeof t=="function")&&typeof t.then=="function"}function j(t){return t()}function A(){return Object.create(null)}function E(t){t.forEach(j)}function B(t){return typeof t=="function"}function F(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function P(t){return Object.keys(t).length===0}function g(t,...n){if(t==null){for(const o of n)o(void 0);return x}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function S(t){let n;return g(t,e=>n=e)(),n}function U(t,n,e){t.$$.on_destroy.push(g(n,e))}function C(t,n,e,o){if(t){const c=y(t,n,e,o);return t[0](c)}}function y(t,n,e,o){return t[1]&&o?w(e.ctx.slice(),t[1](o(n))):e.ctx}function D(t,n,e,o){if(t[2]&&o){const c=t[2](o(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const a=[],f=Math.max(n.dirty.length,c.length);for(let u=0;u<f;u+=1)a[u]=n.dirty[u]|c[u];return a}return n.dirty|c}return n.dirty}function G(t,n,e,o,c,a){if(c){const f=y(n,e,o,a);t.p(f,c)}}function H(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let o=0;o<e;o++)n[o]=-1;return n}return-1}let i;function _(t){i=t}function m(){if(!i)throw new Error("Function called outside component initialization");return i}function I(t){m().$$.on_mount.push(t)}function J(t){m().$$.after_update.push(t)}function K(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(o=>o.call(this,n))}const l=[],p=[];let s=[];const b=[],k=Promise.resolve();let d=!1;function O(){d||(d=!0,k.then(v))}function L(){return O(),k}function q(t){s.push(t)}const h=new Set;let r=0;function v(){if(r!==0)return;const t=i;do{try{for(;r<l.length;){const n=l[r];r++,_(n),z(n.$$)}}catch(n){throw l.length=0,r=0,n}for(_(null),l.length=0,r=0;p.length;)p.pop()();for(let n=0;n<s.length;n+=1){const e=s[n];h.has(e)||(h.add(e),e())}s.length=0}while(l.length);for(;b.length;)b.pop()();d=!1,h.clear(),_(t)}function z(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(q)}}function N(t){const n=[],e=[];s.forEach(o=>t.indexOf(o)===-1?n.push(o):e.push(o)),e.forEach(o=>o()),s=n}export{S as A,K as B,D as a,g as b,C as c,p as d,U as e,J as f,H as g,A as h,B as i,v as j,P as k,q as l,N as m,x as n,I as o,i as p,_ as q,E as r,F as s,L as t,G as u,j as v,l as w,O as x,M as y,m as z};
