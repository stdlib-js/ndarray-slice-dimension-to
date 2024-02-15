// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.0-esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.0-esm/index.mjs";import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-slice-dimension-to@v0.1.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function o(o,a,d){var l,p;if(p={strict:!0},!e(o))throw new TypeError(m("invalid argument. First argument must be an ndarray. Value: `%s`.",o));if(!r(a))throw new TypeError(m("invalid argument. Second argument must be an integer. Value: `%s`.",a));if(!r(d))throw new TypeError(m("invalid argument. Third argument must be an integer. Value: `%s`.",d));if(arguments.length>3){if(!t(l=arguments[3]))throw new TypeError(m("invalid argument. Options argument must be an object. Value: `%s`.",l));if(i(l,"strict")){if(!s(l.strict))throw new TypeError(m("invalid option. `%s` option must be a boolean. Option: `%s`.","strict",l.strict));p.strict=l.strict}}return n(o,a,d,p.strict,!1)}export{o as default};
//# sourceMappingURL=index.mjs.map
