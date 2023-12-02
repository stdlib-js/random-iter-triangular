// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.1.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@esm/index.mjs";import{factory as j}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";function u(c,g,b,v){var x,w,y,N,P;if(!o(c)||d(c))throw new TypeError(f("0qV6v,NI",c));if(!o(g)||d(g))throw new TypeError(f("0qV6w,NJ",g));if(!o(b)||d(b))throw new TypeError(f("0qV7C,NR",b));if(!(c<=b&&b<=g))throw new RangeError(f("0qV9C,HP","a <= c <= b",c,g,b));if(arguments.length>3){if(!m(v))throw new TypeError(f("0qV2V,FD",v));if(x=i({},v),h(x,"iter")){if(!l(x.iter))throw new TypeError(f("0qV2t,G9","iter",x.iter))}else x.iter=a;y=j(c,g,b,x),void 0===x.prng&&!1!==x.copy&&(x.state=y.state)}else y=j(c,g,b),x={iter:a,state:y.state};return P=0,e(w={},"next",R),e(w,"return",G),x&&x.prng?(e(w,"seed",null),e(w,"seedLength",null),s(w,"state",n(null),r),e(w,"stateLength",null),e(w,"byteLength",null)):(t(w,"seed",V),t(w,"seedLength",q),s(w,"state",C,D),t(w,"stateLength",E),t(w,"byteLength",T)),e(w,"PRNG",y.PRNG),p&&e(w,p,L),w;function R(){return P+=1,N||P>x.iter?{done:!0}:{value:y(),done:!1}}function G(e){return N=!0,arguments.length?{value:e,done:!0}:{done:!0}}function L(){return u(c,g,b,x)}function V(){return y.PRNG.seed}function q(){return y.PRNG.seedLength}function E(){return y.PRNG.stateLength}function T(){return y.PRNG.byteLength}function C(){return y.PRNG.state}function D(e){y.PRNG.state=e}}export{u as default};
//# sourceMappingURL=index.mjs.map
