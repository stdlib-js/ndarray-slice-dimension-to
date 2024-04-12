"use strict";var m=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var o=m(function(h,u){
var v=require('@stdlib/assert-is-plain-object/dist'),c=require('@stdlib/assert-is-boolean/dist').isPrimitive,s=require('@stdlib/assert-is-integer/dist').isPrimitive,l=require('@stdlib/assert-is-ndarray-like/dist'),g=require('@stdlib/assert-has-own-property/dist'),p=require('@stdlib/ndarray-base-slice-dimension-to/dist'),t=require('@stdlib/error-tools-fmtprodmsg/dist');function w(i,r,a){var e,n;if(n={strict:!0},!l(i))throw new TypeError(t('1lV4f',i));if(!s(r))throw new TypeError(t('1lV7f',r));if(!s(a))throw new TypeError(t('1lV2z',a));if(arguments.length>3){if(e=arguments[3],!v(e))throw new TypeError(t('1lV2V',e));if(g(e,"strict")){if(!c(e.strict))throw new TypeError(t('1lV2o',"strict",e.strict));n.strict=e.strict}}return p(i,r,a,n.strict,!1)}u.exports=w
});var f=o();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
