// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-write-accessor@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-noop@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/object-assign@v0.2.0-esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import{isPrimitive as a}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.2.0-esm/index.mjs";import{factory as h}from"https://cdn.jsdelivr.net/gh/stdlib-js/random-base-triangular@v0.1.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/symbol-iterator@v0.2.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function g(f,v,c,b){var x,w,y,N,P;if(!o(f)||d(f))throw new TypeError(j("invalid argument. First argument must be a number and not NaN. Value: `%s`.",f));if(!o(v)||d(v))throw new TypeError(j("invalid argument. Second argument must be a number and not NaN. Value: `%s`.",v));if(!o(c)||d(c))throw new TypeError(j("invalid argument. Third argument must be a number and not NaN. Value: `%s`.",c));if(!(f<=c&&c<=v))throw new RangeError(j("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",f,v,c));if(arguments.length>3){if(!m(b))throw new TypeError(j("invalid argument. Options argument must be an object. Value: `%s`.",b));if(x=i({},b),l(x,"iter")){if(!a(x.iter))throw new TypeError(j("invalid option. `%s` option must be a nonnegative integer. Option: `%s`.","iter",x.iter))}else x.iter=u;y=h(f,v,c,x),void 0===x.prng&&!1!==x.copy&&(x.state=y.state)}else y=h(f,v,c),x={iter:u,state:y.state};return P=0,e(w={},"next",L),e(w,"return",R),x&&x.prng?(e(w,"seed",null),e(w,"seedLength",null),n(w,"state",s(null),r),e(w,"stateLength",null),e(w,"byteLength",null)):(t(w,"seed",E),t(w,"seedLength",T),n(w,"state",F,S),t(w,"stateLength",V),t(w,"byteLength",O)),e(w,"PRNG",y.PRNG),p&&e(w,p,G),w;function L(){return P+=1,N||P>x.iter?{done:!0}:{value:y(),done:!1}}function R(e){return N=!0,arguments.length?{value:e,done:!0}:{done:!0}}function G(){return g(f,v,c,x)}function E(){return y.PRNG.seed}function T(){return y.PRNG.seedLength}function V(){return y.PRNG.stateLength}function O(){return y.PRNG.byteLength}function F(){return y.PRNG.state}function S(e){y.PRNG.state=e}}export{g as default};
//# sourceMappingURL=index.mjs.map
