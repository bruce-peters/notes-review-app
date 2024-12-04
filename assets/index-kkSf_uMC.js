function C1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function G_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function R1(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var K_={exports:{}},Mu={},Q_={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var na=Symbol.for("react.element"),A1=Symbol.for("react.portal"),P1=Symbol.for("react.fragment"),k1=Symbol.for("react.strict_mode"),x1=Symbol.for("react.profiler"),N1=Symbol.for("react.provider"),O1=Symbol.for("react.context"),D1=Symbol.for("react.forward_ref"),b1=Symbol.for("react.suspense"),L1=Symbol.for("react.memo"),M1=Symbol.for("react.lazy"),Tg=Symbol.iterator;function V1(t){return t===null||typeof t!="object"?null:(t=Tg&&t[Tg]||t["@@iterator"],typeof t=="function"?t:null)}var Y_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J_=Object.assign,X_={};function hs(t,e,n){this.props=t,this.context=e,this.refs=X_,this.updater=n||Y_}hs.prototype.isReactComponent={};hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Z_(){}Z_.prototype=hs.prototype;function If(t,e,n){this.props=t,this.context=e,this.refs=X_,this.updater=n||Y_}var Sf=If.prototype=new Z_;Sf.constructor=If;J_(Sf,hs.prototype);Sf.isPureReactComponent=!0;var Ig=Array.isArray,ew=Object.prototype.hasOwnProperty,Cf={current:null},tw={key:!0,ref:!0,__self:!0,__source:!0};function nw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ew.call(e,r)&&!tw.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:na,type:t,key:s,ref:o,props:i,_owner:Cf.current}}function F1(t,e){return{$$typeof:na,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rf(t){return typeof t=="object"&&t!==null&&t.$$typeof===na}function U1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sg=/\/+/g;function Yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?U1(""+t.key):e.toString(36)}function gl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case na:case A1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Yc(o,0):r,Ig(i)?(n="",t!=null&&(n=t.replace(Sg,"$&/")+"/"),gl(i,e,n,"",function(c){return c})):i!=null&&(Rf(i)&&(i=F1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ig(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Yc(s,l);o+=gl(s,e,n,u,i)}else if(u=V1(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Yc(s,l++),o+=gl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ua(t,e,n){if(t==null)return t;var r=[],i=0;return gl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function j1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},yl={transition:null},$1={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:yl,ReactCurrentOwner:Cf};function rw(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Ua,forEach:function(t,e,n){Ua(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ua(t,function(){e++}),e},toArray:function(t){return Ua(t,function(e){return e})||[]},only:function(t){if(!Rf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=hs;ee.Fragment=P1;ee.Profiler=x1;ee.PureComponent=If;ee.StrictMode=k1;ee.Suspense=b1;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$1;ee.act=rw;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=J_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Cf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)ew.call(e,u)&&!tw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:na,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:O1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:N1,_context:t},t.Consumer=t};ee.createElement=nw;ee.createFactory=function(t){var e=nw.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:D1,render:t}};ee.isValidElement=Rf;ee.lazy=function(t){return{$$typeof:M1,_payload:{_status:-1,_result:t},_init:j1}};ee.memo=function(t,e){return{$$typeof:L1,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=yl.transition;yl.transition={};try{t()}finally{yl.transition=e}};ee.unstable_act=rw;ee.useCallback=function(t,e){return ut.current.useCallback(t,e)};ee.useContext=function(t){return ut.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ut.current.useEffect(t,e)};ee.useId=function(){return ut.current.useId()};ee.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ut.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};ee.useRef=function(t){return ut.current.useRef(t)};ee.useState=function(t){return ut.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ut.current.useTransition()};ee.version="18.3.1";Q_.exports=ee;var U=Q_.exports;const B1=G_(U),z1=C1({__proto__:null,default:B1},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W1=U,H1=Symbol.for("react.element"),q1=Symbol.for("react.fragment"),G1=Object.prototype.hasOwnProperty,K1=W1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Q1={key:!0,ref:!0,__self:!0,__source:!0};function iw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)G1.call(e,r)&&!Q1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:H1,type:t,key:s,ref:o,props:i,_owner:K1.current}}Mu.Fragment=q1;Mu.jsx=iw;Mu.jsxs=iw;K_.exports=Mu;var L=K_.exports,sw={exports:{}},Rt={},ow={exports:{}},aw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var X=B.length;B.push(Q);e:for(;0<X;){var _e=X-1>>>1,ce=B[_e];if(0<i(ce,Q))B[_e]=Q,B[X]=ce,X=_e;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],X=B.pop();if(X!==Q){B[0]=X;e:for(var _e=0,ce=B.length,Re=ce>>>1;_e<Re;){var dn=2*(_e+1)-1,fn=B[dn],pn=dn+1,mn=B[pn];if(0>i(fn,X))pn<ce&&0>i(mn,fn)?(B[_e]=mn,B[pn]=X,_e=pn):(B[_e]=fn,B[dn]=X,_e=dn);else if(pn<ce&&0>i(mn,X))B[_e]=mn,B[pn]=X,_e=pn;else break e}}return Q}function i(B,Q){var X=B.sortIndex-Q.sortIndex;return X!==0?X:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,_=!1,A=!1,k=!1,C=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(B){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=B)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function D(B){if(k=!1,I(B),!A)if(n(u)!==null)A=!0,Es(V);else{var Q=n(c);Q!==null&&hn(D,Q.startTime-B)}}function V(B,Q){A=!1,k&&(k=!1,w(y),y=-1),_=!0;var X=m;try{for(I(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||B&&!P());){var _e=p.callback;if(typeof _e=="function"){p.callback=null,m=p.priorityLevel;var ce=_e(p.expirationTime<=Q);Q=t.unstable_now(),typeof ce=="function"?p.callback=ce:p===n(u)&&r(u),I(Q)}else r(u);p=n(u)}if(p!==null)var Re=!0;else{var dn=n(c);dn!==null&&hn(D,dn.startTime-Q),Re=!1}return Re}finally{p=null,m=X,_=!1}}var j=!1,T=null,y=-1,E=5,S=-1;function P(){return!(t.unstable_now()-S<E)}function N(){if(T!==null){var B=t.unstable_now();S=B;var Q=!0;try{Q=T(!0,B)}finally{Q?R():(j=!1,T=null)}}else j=!1}var R;if(typeof v=="function")R=function(){v(N)};else if(typeof MessageChannel<"u"){var Pt=new MessageChannel,kr=Pt.port2;Pt.port1.onmessage=N,R=function(){kr.postMessage(null)}}else R=function(){C(N,0)};function Es(B){T=B,j||(j=!0,R())}function hn(B,Q){y=C(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){A||_||(A=!0,Es(V))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var X=m;m=Q;try{return B()}finally{m=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var X=m;m=B;try{return Q()}finally{m=X}},t.unstable_scheduleCallback=function(B,Q,X){var _e=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?_e+X:_e):X=_e,B){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=X+ce,B={id:d++,callback:Q,priorityLevel:B,startTime:X,expirationTime:ce,sortIndex:-1},X>_e?(B.sortIndex=X,e(c,B),n(u)===null&&B===n(c)&&(k?(w(y),y=-1):k=!0,hn(D,X-_e))):(B.sortIndex=ce,e(u,B),A||_||(A=!0,Es(V))),B},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(B){var Q=m;return function(){var X=m;m=Q;try{return B.apply(this,arguments)}finally{m=X}}}})(aw);ow.exports=aw;var Y1=ow.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J1=U,Ct=Y1;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var lw=new Set,Eo={};function ii(t,e){Ki(t,e),Ki(t+"Capture",e)}function Ki(t,e){for(Eo[t]=e,t=0;t<e.length;t++)lw.add(e[t])}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$h=Object.prototype.hasOwnProperty,X1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cg={},Rg={};function Z1(t){return $h.call(Rg,t)?!0:$h.call(Cg,t)?!1:X1.test(t)?Rg[t]=!0:(Cg[t]=!0,!1)}function eC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tC(t,e,n,r){if(e===null||typeof e>"u"||eC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){He[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];He[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){He[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){He[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){He[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){He[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){He[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){He[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){He[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Af=/[\-:]([a-z])/g;function Pf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Af,Pf);He[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Af,Pf);He[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Af,Pf);He[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){He[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});He.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){He[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function kf(t,e,n,r){var i=He.hasOwnProperty(e)?He[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tC(e,n,i,r)&&(n=null),r||i===null?Z1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Un=J1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ja=Symbol.for("react.element"),Ci=Symbol.for("react.portal"),Ri=Symbol.for("react.fragment"),xf=Symbol.for("react.strict_mode"),Bh=Symbol.for("react.profiler"),uw=Symbol.for("react.provider"),cw=Symbol.for("react.context"),Nf=Symbol.for("react.forward_ref"),zh=Symbol.for("react.suspense"),Wh=Symbol.for("react.suspense_list"),Of=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),hw=Symbol.for("react.offscreen"),Ag=Symbol.iterator;function Ls(t){return t===null||typeof t!="object"?null:(t=Ag&&t[Ag]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,Jc;function Gs(t){if(Jc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jc=e&&e[1]||""}return`
`+Jc+t}var Xc=!1;function Zc(t,e){if(!t||Xc)return"";Xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Gs(t):""}function nC(t){switch(t.tag){case 5:return Gs(t.type);case 16:return Gs("Lazy");case 13:return Gs("Suspense");case 19:return Gs("SuspenseList");case 0:case 2:case 15:return t=Zc(t.type,!1),t;case 11:return t=Zc(t.type.render,!1),t;case 1:return t=Zc(t.type,!0),t;default:return""}}function Hh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ri:return"Fragment";case Ci:return"Portal";case Bh:return"Profiler";case xf:return"StrictMode";case zh:return"Suspense";case Wh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cw:return(t.displayName||"Context")+".Consumer";case uw:return(t._context.displayName||"Context")+".Provider";case Nf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Of:return e=t.displayName||null,e!==null?e:Hh(t.type)||"Memo";case Hn:e=t._payload,t=t._init;try{return Hh(t(e))}catch{}}return null}function rC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Hh(e);case 8:return e===xf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iC(t){var e=dw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $a(t){t._valueTracker||(t._valueTracker=iC(t))}function fw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=dw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function $l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function qh(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function pw(t,e){e=e.checked,e!=null&&kf(t,"checked",e,!1)}function Gh(t,e){pw(t,e);var n=gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Kh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Kh(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Kh(t,e,n){(e!=="number"||$l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ks=Array.isArray;function Fi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Qh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Ks(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function mw(t,e){var n=gr(e.value),r=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ng(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function gw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?gw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,yw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function To(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var io={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sC=["Webkit","ms","Moz","O"];Object.keys(io).forEach(function(t){sC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),io[e]=io[t]})});function vw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||io.hasOwnProperty(t)&&io[t]?(""+e).trim():e+"px"}function _w(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=vw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var oC=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jh(t,e){if(e){if(oC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Xh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zh=null;function Df(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ed=null,Ui=null,ji=null;function Og(t){if(t=sa(t)){if(typeof ed!="function")throw Error(F(280));var e=t.stateNode;e&&(e=$u(e),ed(t.stateNode,t.type,e))}}function ww(t){Ui?ji?ji.push(t):ji=[t]:Ui=t}function Ew(){if(Ui){var t=Ui,e=ji;if(ji=Ui=null,Og(t),e)for(t=0;t<e.length;t++)Og(e[t])}}function Tw(t,e){return t(e)}function Iw(){}var eh=!1;function Sw(t,e,n){if(eh)return t(e,n);eh=!0;try{return Tw(t,e,n)}finally{eh=!1,(Ui!==null||ji!==null)&&(Iw(),Ew())}}function Io(t,e){var n=t.stateNode;if(n===null)return null;var r=$u(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var td=!1;if(xn)try{var Ms={};Object.defineProperty(Ms,"passive",{get:function(){td=!0}}),window.addEventListener("test",Ms,Ms),window.removeEventListener("test",Ms,Ms)}catch{td=!1}function aC(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var so=!1,Bl=null,zl=!1,nd=null,lC={onError:function(t){so=!0,Bl=t}};function uC(t,e,n,r,i,s,o,l,u){so=!1,Bl=null,aC.apply(lC,arguments)}function cC(t,e,n,r,i,s,o,l,u){if(uC.apply(this,arguments),so){if(so){var c=Bl;so=!1,Bl=null}else throw Error(F(198));zl||(zl=!0,nd=c)}}function si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dg(t){if(si(t)!==t)throw Error(F(188))}function hC(t){var e=t.alternate;if(!e){if(e=si(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Dg(i),t;if(s===r)return Dg(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Rw(t){return t=hC(t),t!==null?Aw(t):null}function Aw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Aw(t);if(e!==null)return e;t=t.sibling}return null}var Pw=Ct.unstable_scheduleCallback,bg=Ct.unstable_cancelCallback,dC=Ct.unstable_shouldYield,fC=Ct.unstable_requestPaint,Pe=Ct.unstable_now,pC=Ct.unstable_getCurrentPriorityLevel,bf=Ct.unstable_ImmediatePriority,kw=Ct.unstable_UserBlockingPriority,Wl=Ct.unstable_NormalPriority,mC=Ct.unstable_LowPriority,xw=Ct.unstable_IdlePriority,Vu=null,nn=null;function gC(t){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(Vu,t,void 0,(t.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:_C,yC=Math.log,vC=Math.LN2;function _C(t){return t>>>=0,t===0?32:31-(yC(t)/vC|0)|0}var za=64,Wa=4194304;function Qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Hl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Qs(l):(s&=o,s!==0&&(r=Qs(s)))}else o=n&~i,o!==0?r=Qs(o):s!==0&&(r=Qs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ht(e),i=1<<n,r|=t[n],e&=~i;return r}function wC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function EC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ht(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=wC(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function rd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Nw(){var t=za;return za<<=1,!(za&4194240)&&(za=64),t}function th(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ra(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ht(e),t[e]=n}function TC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ht(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Lf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ht(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function Ow(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Dw,Mf,bw,Lw,Mw,id=!1,Ha=[],rr=null,ir=null,sr=null,So=new Map,Co=new Map,Kn=[],IC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lg(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":So.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Co.delete(e.pointerId)}}function Vs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=sa(e),e!==null&&Mf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function SC(t,e,n,r,i){switch(e){case"focusin":return rr=Vs(rr,t,e,n,r,i),!0;case"dragenter":return ir=Vs(ir,t,e,n,r,i),!0;case"mouseover":return sr=Vs(sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return So.set(s,Vs(So.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Co.set(s,Vs(Co.get(s)||null,t,e,n,r,i)),!0}return!1}function Vw(t){var e=Vr(t.target);if(e!==null){var n=si(e);if(n!==null){if(e=n.tag,e===13){if(e=Cw(n),e!==null){t.blockedOn=e,Mw(t.priority,function(){bw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=sd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Zh=r,n.target.dispatchEvent(r),Zh=null}else return e=sa(n),e!==null&&Mf(e),t.blockedOn=n,!1;e.shift()}return!0}function Mg(t,e,n){vl(t)&&n.delete(e)}function CC(){id=!1,rr!==null&&vl(rr)&&(rr=null),ir!==null&&vl(ir)&&(ir=null),sr!==null&&vl(sr)&&(sr=null),So.forEach(Mg),Co.forEach(Mg)}function Fs(t,e){t.blockedOn===e&&(t.blockedOn=null,id||(id=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,CC)))}function Ro(t){function e(i){return Fs(i,t)}if(0<Ha.length){Fs(Ha[0],t);for(var n=1;n<Ha.length;n++){var r=Ha[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rr!==null&&Fs(rr,t),ir!==null&&Fs(ir,t),sr!==null&&Fs(sr,t),So.forEach(e),Co.forEach(e),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)Vw(n),n.blockedOn===null&&Kn.shift()}var $i=Un.ReactCurrentBatchConfig,ql=!0;function RC(t,e,n,r){var i=le,s=$i.transition;$i.transition=null;try{le=1,Vf(t,e,n,r)}finally{le=i,$i.transition=s}}function AC(t,e,n,r){var i=le,s=$i.transition;$i.transition=null;try{le=4,Vf(t,e,n,r)}finally{le=i,$i.transition=s}}function Vf(t,e,n,r){if(ql){var i=sd(t,e,n,r);if(i===null)hh(t,e,r,Gl,n),Lg(t,r);else if(SC(i,t,e,n,r))r.stopPropagation();else if(Lg(t,r),e&4&&-1<IC.indexOf(t)){for(;i!==null;){var s=sa(i);if(s!==null&&Dw(s),s=sd(t,e,n,r),s===null&&hh(t,e,r,Gl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else hh(t,e,r,null,n)}}var Gl=null;function sd(t,e,n,r){if(Gl=null,t=Df(r),t=Vr(t),t!==null)if(e=si(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gl=t,null}function Fw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pC()){case bf:return 1;case kw:return 4;case Wl:case mC:return 16;case xw:return 536870912;default:return 16}default:return 16}}var Zn=null,Ff=null,_l=null;function Uw(){if(_l)return _l;var t,e=Ff,n=e.length,r,i="value"in Zn?Zn.value:Zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return _l=i.slice(t,1<r?1-r:void 0)}function wl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function Vg(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:Vg,this.isPropagationStopped=Vg,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uf=At(ds),ia=Te({},ds,{view:0,detail:0}),PC=At(ia),nh,rh,Us,Fu=Te({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Us&&(Us&&t.type==="mousemove"?(nh=t.screenX-Us.screenX,rh=t.screenY-Us.screenY):rh=nh=0,Us=t),nh)},movementY:function(t){return"movementY"in t?t.movementY:rh}}),Fg=At(Fu),kC=Te({},Fu,{dataTransfer:0}),xC=At(kC),NC=Te({},ia,{relatedTarget:0}),ih=At(NC),OC=Te({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),DC=At(OC),bC=Te({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),LC=At(bC),MC=Te({},ds,{data:0}),Ug=At(MC),VC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},FC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},UC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=UC[t])?!!e[t]:!1}function jf(){return jC}var $C=Te({},ia,{key:function(t){if(t.key){var e=VC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?FC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jf,charCode:function(t){return t.type==="keypress"?wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),BC=At($C),zC=Te({},Fu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jg=At(zC),WC=Te({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jf}),HC=At(WC),qC=Te({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),GC=At(qC),KC=Te({},Fu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),QC=At(KC),YC=[9,13,27,32],$f=xn&&"CompositionEvent"in window,oo=null;xn&&"documentMode"in document&&(oo=document.documentMode);var JC=xn&&"TextEvent"in window&&!oo,jw=xn&&(!$f||oo&&8<oo&&11>=oo),$g=" ",Bg=!1;function $w(t,e){switch(t){case"keyup":return YC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ai=!1;function XC(t,e){switch(t){case"compositionend":return Bw(e);case"keypress":return e.which!==32?null:(Bg=!0,$g);case"textInput":return t=e.data,t===$g&&Bg?null:t;default:return null}}function ZC(t,e){if(Ai)return t==="compositionend"||!$f&&$w(t,e)?(t=Uw(),_l=Ff=Zn=null,Ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jw&&e.locale!=="ko"?null:e.data;default:return null}}var eR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!eR[t.type]:e==="textarea"}function zw(t,e,n,r){ww(r),e=Kl(e,"onChange"),0<e.length&&(n=new Uf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ao=null,Ao=null;function tR(t){e0(t,0)}function Uu(t){var e=xi(t);if(fw(e))return t}function nR(t,e){if(t==="change")return e}var Ww=!1;if(xn){var sh;if(xn){var oh="oninput"in document;if(!oh){var Wg=document.createElement("div");Wg.setAttribute("oninput","return;"),oh=typeof Wg.oninput=="function"}sh=oh}else sh=!1;Ww=sh&&(!document.documentMode||9<document.documentMode)}function Hg(){ao&&(ao.detachEvent("onpropertychange",Hw),Ao=ao=null)}function Hw(t){if(t.propertyName==="value"&&Uu(Ao)){var e=[];zw(e,Ao,t,Df(t)),Sw(tR,e)}}function rR(t,e,n){t==="focusin"?(Hg(),ao=e,Ao=n,ao.attachEvent("onpropertychange",Hw)):t==="focusout"&&Hg()}function iR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Uu(Ao)}function sR(t,e){if(t==="click")return Uu(e)}function oR(t,e){if(t==="input"||t==="change")return Uu(e)}function aR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kt=typeof Object.is=="function"?Object.is:aR;function Po(t,e){if(Kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!$h.call(e,i)||!Kt(t[i],e[i]))return!1}return!0}function qg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gg(t,e){var n=qg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qg(n)}}function qw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?qw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gw(){for(var t=window,e=$l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$l(t.document)}return e}function Bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function lR(t){var e=Gw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&qw(n.ownerDocument.documentElement,n)){if(r!==null&&Bf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Gg(n,s);var o=Gg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uR=xn&&"documentMode"in document&&11>=document.documentMode,Pi=null,od=null,lo=null,ad=!1;function Kg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ad||Pi==null||Pi!==$l(r)||(r=Pi,"selectionStart"in r&&Bf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),lo&&Po(lo,r)||(lo=r,r=Kl(od,"onSelect"),0<r.length&&(e=new Uf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Pi)))}function Ga(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ki={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionend:Ga("Transition","TransitionEnd")},ah={},Kw={};xn&&(Kw=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function ju(t){if(ah[t])return ah[t];if(!ki[t])return t;var e=ki[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Kw)return ah[t]=e[n];return t}var Qw=ju("animationend"),Yw=ju("animationiteration"),Jw=ju("animationstart"),Xw=ju("transitionend"),Zw=new Map,Qg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,e){Zw.set(t,e),ii(e,[t])}for(var lh=0;lh<Qg.length;lh++){var uh=Qg[lh],cR=uh.toLowerCase(),hR=uh[0].toUpperCase()+uh.slice(1);Ir(cR,"on"+hR)}Ir(Qw,"onAnimationEnd");Ir(Yw,"onAnimationIteration");Ir(Jw,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(Xw,"onTransitionEnd");Ki("onMouseEnter",["mouseout","mouseover"]);Ki("onMouseLeave",["mouseout","mouseover"]);Ki("onPointerEnter",["pointerout","pointerover"]);Ki("onPointerLeave",["pointerout","pointerover"]);ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ii("onBeforeInput",["compositionend","keypress","textInput","paste"]);ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ys="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ys));function Yg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,cC(r,e,void 0,t),t.currentTarget=null}function e0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Yg(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Yg(i,l,c),s=u}}}if(zl)throw t=nd,zl=!1,nd=null,t}function pe(t,e){var n=e[dd];n===void 0&&(n=e[dd]=new Set);var r=t+"__bubble";n.has(r)||(t0(e,t,2,!1),n.add(r))}function ch(t,e,n){var r=0;e&&(r|=4),t0(n,t,r,e)}var Ka="_reactListening"+Math.random().toString(36).slice(2);function ko(t){if(!t[Ka]){t[Ka]=!0,lw.forEach(function(n){n!=="selectionchange"&&(dR.has(n)||ch(n,!1,t),ch(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ka]||(e[Ka]=!0,ch("selectionchange",!1,e))}}function t0(t,e,n,r){switch(Fw(e)){case 1:var i=RC;break;case 4:i=AC;break;default:i=Vf}n=i.bind(null,e,n,t),i=void 0,!td||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function hh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Vr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Sw(function(){var c=s,d=Df(n),p=[];e:{var m=Zw.get(t);if(m!==void 0){var _=Uf,A=t;switch(t){case"keypress":if(wl(n)===0)break e;case"keydown":case"keyup":_=BC;break;case"focusin":A="focus",_=ih;break;case"focusout":A="blur",_=ih;break;case"beforeblur":case"afterblur":_=ih;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Fg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=xC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=HC;break;case Qw:case Yw:case Jw:_=DC;break;case Xw:_=GC;break;case"scroll":_=PC;break;case"wheel":_=QC;break;case"copy":case"cut":case"paste":_=LC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=jg}var k=(e&4)!==0,C=!k&&t==="scroll",w=k?m!==null?m+"Capture":null:m;k=[];for(var v=c,I;v!==null;){I=v;var D=I.stateNode;if(I.tag===5&&D!==null&&(I=D,w!==null&&(D=Io(v,w),D!=null&&k.push(xo(v,D,I)))),C)break;v=v.return}0<k.length&&(m=new _(m,A,null,n,d),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==Zh&&(A=n.relatedTarget||n.fromElement)&&(Vr(A)||A[Nn]))break e;if((_||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,_?(A=n.relatedTarget||n.toElement,_=c,A=A?Vr(A):null,A!==null&&(C=si(A),A!==C||A.tag!==5&&A.tag!==6)&&(A=null)):(_=null,A=c),_!==A)){if(k=Fg,D="onMouseLeave",w="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(k=jg,D="onPointerLeave",w="onPointerEnter",v="pointer"),C=_==null?m:xi(_),I=A==null?m:xi(A),m=new k(D,v+"leave",_,n,d),m.target=C,m.relatedTarget=I,D=null,Vr(d)===c&&(k=new k(w,v+"enter",A,n,d),k.target=I,k.relatedTarget=C,D=k),C=D,_&&A)t:{for(k=_,w=A,v=0,I=k;I;I=_i(I))v++;for(I=0,D=w;D;D=_i(D))I++;for(;0<v-I;)k=_i(k),v--;for(;0<I-v;)w=_i(w),I--;for(;v--;){if(k===w||w!==null&&k===w.alternate)break t;k=_i(k),w=_i(w)}k=null}else k=null;_!==null&&Jg(p,m,_,k,!1),A!==null&&C!==null&&Jg(p,C,A,k,!0)}}e:{if(m=c?xi(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var V=nR;else if(zg(m))if(Ww)V=oR;else{V=iR;var j=rR}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(V=sR);if(V&&(V=V(t,c))){zw(p,V,n,d);break e}j&&j(t,m,c),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&Kh(m,"number",m.value)}switch(j=c?xi(c):window,t){case"focusin":(zg(j)||j.contentEditable==="true")&&(Pi=j,od=c,lo=null);break;case"focusout":lo=od=Pi=null;break;case"mousedown":ad=!0;break;case"contextmenu":case"mouseup":case"dragend":ad=!1,Kg(p,n,d);break;case"selectionchange":if(uR)break;case"keydown":case"keyup":Kg(p,n,d)}var T;if($f)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ai?$w(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(jw&&n.locale!=="ko"&&(Ai||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ai&&(T=Uw()):(Zn=d,Ff="value"in Zn?Zn.value:Zn.textContent,Ai=!0)),j=Kl(c,y),0<j.length&&(y=new Ug(y,t,null,n,d),p.push({event:y,listeners:j}),T?y.data=T:(T=Bw(n),T!==null&&(y.data=T)))),(T=JC?XC(t,n):ZC(t,n))&&(c=Kl(c,"onBeforeInput"),0<c.length&&(d=new Ug("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=T))}e0(p,e)})}function xo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Io(t,n),s!=null&&r.unshift(xo(t,s,i)),s=Io(t,e),s!=null&&r.push(xo(t,s,i))),t=t.return}return r}function _i(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Io(n,s),u!=null&&o.unshift(xo(n,u,l))):i||(u=Io(n,s),u!=null&&o.push(xo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var fR=/\r\n?/g,pR=/\u0000|\uFFFD/g;function Xg(t){return(typeof t=="string"?t:""+t).replace(fR,`
`).replace(pR,"")}function Qa(t,e,n){if(e=Xg(e),Xg(t)!==e&&n)throw Error(F(425))}function Ql(){}var ld=null,ud=null;function cd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hd=typeof setTimeout=="function"?setTimeout:void 0,mR=typeof clearTimeout=="function"?clearTimeout:void 0,Zg=typeof Promise=="function"?Promise:void 0,gR=typeof queueMicrotask=="function"?queueMicrotask:typeof Zg<"u"?function(t){return Zg.resolve(null).then(t).catch(yR)}:hd;function yR(t){setTimeout(function(){throw t})}function dh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ro(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ro(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ey(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),tn="__reactFiber$"+fs,No="__reactProps$"+fs,Nn="__reactContainer$"+fs,dd="__reactEvents$"+fs,vR="__reactListeners$"+fs,_R="__reactHandles$"+fs;function Vr(t){var e=t[tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nn]||n[tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ey(t);t!==null;){if(n=t[tn])return n;t=ey(t)}return e}t=n,n=t.parentNode}return null}function sa(t){return t=t[tn]||t[Nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function $u(t){return t[No]||null}var fd=[],Ni=-1;function Sr(t){return{current:t}}function me(t){0>Ni||(t.current=fd[Ni],fd[Ni]=null,Ni--)}function de(t,e){Ni++,fd[Ni]=t.current,t.current=e}var yr={},nt=Sr(yr),mt=Sr(!1),qr=yr;function Qi(t,e){var n=t.type.contextTypes;if(!n)return yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function Yl(){me(mt),me(nt)}function ty(t,e,n){if(nt.current!==yr)throw Error(F(168));de(nt,e),de(mt,n)}function n0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,rC(t)||"Unknown",i));return Te({},n,r)}function Jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,qr=nt.current,de(nt,t),de(mt,mt.current),!0}function ny(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=n0(t,e,qr),r.__reactInternalMemoizedMergedChildContext=t,me(mt),me(nt),de(nt,t)):me(mt),de(mt,n)}var _n=null,Bu=!1,fh=!1;function r0(t){_n===null?_n=[t]:_n.push(t)}function wR(t){Bu=!0,r0(t)}function Cr(){if(!fh&&_n!==null){fh=!0;var t=0,e=le;try{var n=_n;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}_n=null,Bu=!1}catch(i){throw _n!==null&&(_n=_n.slice(t+1)),Pw(bf,Cr),i}finally{le=e,fh=!1}}return null}var Oi=[],Di=0,Xl=null,Zl=0,kt=[],xt=0,Gr=null,En=1,Tn="";function br(t,e){Oi[Di++]=Zl,Oi[Di++]=Xl,Xl=t,Zl=e}function i0(t,e,n){kt[xt++]=En,kt[xt++]=Tn,kt[xt++]=Gr,Gr=t;var r=En;t=Tn;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var s=32-Ht(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,En=1<<32-Ht(e)+i|n<<i|r,Tn=s+t}else En=1<<s|n<<i|r,Tn=t}function zf(t){t.return!==null&&(br(t,1),i0(t,1,0))}function Wf(t){for(;t===Xl;)Xl=Oi[--Di],Oi[Di]=null,Zl=Oi[--Di],Oi[Di]=null;for(;t===Gr;)Gr=kt[--xt],kt[xt]=null,Tn=kt[--xt],kt[xt]=null,En=kt[--xt],kt[xt]=null}var Tt=null,Et=null,ge=!1,Bt=null;function s0(t,e){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ry(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,Et=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Gr!==null?{id:En,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,Et=null,!0):!1;default:return!1}}function pd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function md(t){if(ge){var e=Et;if(e){var n=e;if(!ry(t,e)){if(pd(t))throw Error(F(418));e=or(n.nextSibling);var r=Tt;e&&ry(t,e)?s0(r,n):(t.flags=t.flags&-4097|2,ge=!1,Tt=t)}}else{if(pd(t))throw Error(F(418));t.flags=t.flags&-4097|2,ge=!1,Tt=t}}}function iy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function Ya(t){if(t!==Tt)return!1;if(!ge)return iy(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cd(t.type,t.memoizedProps)),e&&(e=Et)){if(pd(t))throw o0(),Error(F(418));for(;e;)s0(t,e),e=or(e.nextSibling)}if(iy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=Tt?or(t.stateNode.nextSibling):null;return!0}function o0(){for(var t=Et;t;)t=or(t.nextSibling)}function Yi(){Et=Tt=null,ge=!1}function Hf(t){Bt===null?Bt=[t]:Bt.push(t)}var ER=Un.ReactCurrentBatchConfig;function js(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Ja(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sy(t){var e=t._init;return e(t._payload)}function a0(t){function e(w,v){if(t){var I=w.deletions;I===null?(w.deletions=[v],w.flags|=16):I.push(v)}}function n(w,v){if(!t)return null;for(;v!==null;)e(w,v),v=v.sibling;return null}function r(w,v){for(w=new Map;v!==null;)v.key!==null?w.set(v.key,v):w.set(v.index,v),v=v.sibling;return w}function i(w,v){return w=cr(w,v),w.index=0,w.sibling=null,w}function s(w,v,I){return w.index=I,t?(I=w.alternate,I!==null?(I=I.index,I<v?(w.flags|=2,v):I):(w.flags|=2,v)):(w.flags|=1048576,v)}function o(w){return t&&w.alternate===null&&(w.flags|=2),w}function l(w,v,I,D){return v===null||v.tag!==6?(v=wh(I,w.mode,D),v.return=w,v):(v=i(v,I),v.return=w,v)}function u(w,v,I,D){var V=I.type;return V===Ri?d(w,v,I.props.children,D,I.key):v!==null&&(v.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Hn&&sy(V)===v.type)?(D=i(v,I.props),D.ref=js(w,v,I),D.return=w,D):(D=Al(I.type,I.key,I.props,null,w.mode,D),D.ref=js(w,v,I),D.return=w,D)}function c(w,v,I,D){return v===null||v.tag!==4||v.stateNode.containerInfo!==I.containerInfo||v.stateNode.implementation!==I.implementation?(v=Eh(I,w.mode,D),v.return=w,v):(v=i(v,I.children||[]),v.return=w,v)}function d(w,v,I,D,V){return v===null||v.tag!==7?(v=Wr(I,w.mode,D,V),v.return=w,v):(v=i(v,I),v.return=w,v)}function p(w,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return v=wh(""+v,w.mode,I),v.return=w,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ja:return I=Al(v.type,v.key,v.props,null,w.mode,I),I.ref=js(w,null,v),I.return=w,I;case Ci:return v=Eh(v,w.mode,I),v.return=w,v;case Hn:var D=v._init;return p(w,D(v._payload),I)}if(Ks(v)||Ls(v))return v=Wr(v,w.mode,I,null),v.return=w,v;Ja(w,v)}return null}function m(w,v,I,D){var V=v!==null?v.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return V!==null?null:l(w,v,""+I,D);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ja:return I.key===V?u(w,v,I,D):null;case Ci:return I.key===V?c(w,v,I,D):null;case Hn:return V=I._init,m(w,v,V(I._payload),D)}if(Ks(I)||Ls(I))return V!==null?null:d(w,v,I,D,null);Ja(w,I)}return null}function _(w,v,I,D,V){if(typeof D=="string"&&D!==""||typeof D=="number")return w=w.get(I)||null,l(v,w,""+D,V);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ja:return w=w.get(D.key===null?I:D.key)||null,u(v,w,D,V);case Ci:return w=w.get(D.key===null?I:D.key)||null,c(v,w,D,V);case Hn:var j=D._init;return _(w,v,I,j(D._payload),V)}if(Ks(D)||Ls(D))return w=w.get(I)||null,d(v,w,D,V,null);Ja(v,D)}return null}function A(w,v,I,D){for(var V=null,j=null,T=v,y=v=0,E=null;T!==null&&y<I.length;y++){T.index>y?(E=T,T=null):E=T.sibling;var S=m(w,T,I[y],D);if(S===null){T===null&&(T=E);break}t&&T&&S.alternate===null&&e(w,T),v=s(S,v,y),j===null?V=S:j.sibling=S,j=S,T=E}if(y===I.length)return n(w,T),ge&&br(w,y),V;if(T===null){for(;y<I.length;y++)T=p(w,I[y],D),T!==null&&(v=s(T,v,y),j===null?V=T:j.sibling=T,j=T);return ge&&br(w,y),V}for(T=r(w,T);y<I.length;y++)E=_(T,w,y,I[y],D),E!==null&&(t&&E.alternate!==null&&T.delete(E.key===null?y:E.key),v=s(E,v,y),j===null?V=E:j.sibling=E,j=E);return t&&T.forEach(function(P){return e(w,P)}),ge&&br(w,y),V}function k(w,v,I,D){var V=Ls(I);if(typeof V!="function")throw Error(F(150));if(I=V.call(I),I==null)throw Error(F(151));for(var j=V=null,T=v,y=v=0,E=null,S=I.next();T!==null&&!S.done;y++,S=I.next()){T.index>y?(E=T,T=null):E=T.sibling;var P=m(w,T,S.value,D);if(P===null){T===null&&(T=E);break}t&&T&&P.alternate===null&&e(w,T),v=s(P,v,y),j===null?V=P:j.sibling=P,j=P,T=E}if(S.done)return n(w,T),ge&&br(w,y),V;if(T===null){for(;!S.done;y++,S=I.next())S=p(w,S.value,D),S!==null&&(v=s(S,v,y),j===null?V=S:j.sibling=S,j=S);return ge&&br(w,y),V}for(T=r(w,T);!S.done;y++,S=I.next())S=_(T,w,y,S.value,D),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?y:S.key),v=s(S,v,y),j===null?V=S:j.sibling=S,j=S);return t&&T.forEach(function(N){return e(w,N)}),ge&&br(w,y),V}function C(w,v,I,D){if(typeof I=="object"&&I!==null&&I.type===Ri&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case ja:e:{for(var V=I.key,j=v;j!==null;){if(j.key===V){if(V=I.type,V===Ri){if(j.tag===7){n(w,j.sibling),v=i(j,I.props.children),v.return=w,w=v;break e}}else if(j.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Hn&&sy(V)===j.type){n(w,j.sibling),v=i(j,I.props),v.ref=js(w,j,I),v.return=w,w=v;break e}n(w,j);break}else e(w,j);j=j.sibling}I.type===Ri?(v=Wr(I.props.children,w.mode,D,I.key),v.return=w,w=v):(D=Al(I.type,I.key,I.props,null,w.mode,D),D.ref=js(w,v,I),D.return=w,w=D)}return o(w);case Ci:e:{for(j=I.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===I.containerInfo&&v.stateNode.implementation===I.implementation){n(w,v.sibling),v=i(v,I.children||[]),v.return=w,w=v;break e}else{n(w,v);break}else e(w,v);v=v.sibling}v=Eh(I,w.mode,D),v.return=w,w=v}return o(w);case Hn:return j=I._init,C(w,v,j(I._payload),D)}if(Ks(I))return A(w,v,I,D);if(Ls(I))return k(w,v,I,D);Ja(w,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,v!==null&&v.tag===6?(n(w,v.sibling),v=i(v,I),v.return=w,w=v):(n(w,v),v=wh(I,w.mode,D),v.return=w,w=v),o(w)):n(w,v)}return C}var Ji=a0(!0),l0=a0(!1),eu=Sr(null),tu=null,bi=null,qf=null;function Gf(){qf=bi=tu=null}function Kf(t){var e=eu.current;me(eu),t._currentValue=e}function gd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Bi(t,e){tu=t,qf=bi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Lt(t){var e=t._currentValue;if(qf!==t)if(t={context:t,memoizedValue:e,next:null},bi===null){if(tu===null)throw Error(F(308));bi=t,tu.dependencies={lanes:0,firstContext:t}}else bi=bi.next=t;return e}var Fr=null;function Qf(t){Fr===null?Fr=[t]:Fr.push(t)}function u0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qf(e)):(n.next=i.next,i.next=n),e.interleaved=n,On(t,r)}function On(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qn=!1;function Yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function c0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,On(t,n)}return i=r.interleaved,i===null?(e.next=e,Qf(r)):(e.next=i.next,i.next=e),r.interleaved=e,On(t,n)}function El(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lf(t,n)}}function oy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nu(t,e,n,r){var i=t.updateQueue;qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,_=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,k=l;switch(m=e,_=n,k.tag){case 1:if(A=k.payload,typeof A=="function"){p=A.call(_,p,m);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=k.payload,m=typeof A=="function"?A.call(_,p,m):A,m==null)break e;p=Te({},p,m);break e;case 2:qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else _={eventTime:_,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=_,u=p):d=d.next=_,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Qr|=o,t.lanes=o,t.memoizedState=p}}function ay(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var oa={},rn=Sr(oa),Oo=Sr(oa),Do=Sr(oa);function Ur(t){if(t===oa)throw Error(F(174));return t}function Jf(t,e){switch(de(Do,e),de(Oo,t),de(rn,oa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yh(e,t)}me(rn),de(rn,e)}function Xi(){me(rn),me(Oo),me(Do)}function h0(t){Ur(Do.current);var e=Ur(rn.current),n=Yh(e,t.type);e!==n&&(de(Oo,t),de(rn,n))}function Xf(t){Oo.current===t&&(me(rn),me(Oo))}var we=Sr(0);function ru(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ph=[];function Zf(){for(var t=0;t<ph.length;t++)ph[t]._workInProgressVersionPrimary=null;ph.length=0}var Tl=Un.ReactCurrentDispatcher,mh=Un.ReactCurrentBatchConfig,Kr=0,Ee=null,Oe=null,Fe=null,iu=!1,uo=!1,bo=0,TR=0;function Ye(){throw Error(F(321))}function ep(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kt(t[n],e[n]))return!1;return!0}function tp(t,e,n,r,i,s){if(Kr=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Tl.current=t===null||t.memoizedState===null?RR:AR,t=n(r,i),uo){s=0;do{if(uo=!1,bo=0,25<=s)throw Error(F(301));s+=1,Fe=Oe=null,e.updateQueue=null,Tl.current=PR,t=n(r,i)}while(uo)}if(Tl.current=su,e=Oe!==null&&Oe.next!==null,Kr=0,Fe=Oe=Ee=null,iu=!1,e)throw Error(F(300));return t}function np(){var t=bo!==0;return bo=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Ee.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Mt(){if(Oe===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Fe===null?Ee.memoizedState:Fe.next;if(e!==null)Fe=e,Oe=t;else{if(t===null)throw Error(F(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Fe===null?Ee.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function Lo(t,e){return typeof e=="function"?e(t):e}function gh(t){var e=Mt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Kr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ee.lanes|=d,Qr|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Kt(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,Qr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yh(t){var e=Mt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Kt(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function d0(){}function f0(t,e){var n=Ee,r=Mt(),i=e(),s=!Kt(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,rp(g0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,Mo(9,m0.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(F(349));Kr&30||p0(n,e,i)}return i}function p0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function m0(t,e,n,r){e.value=n,e.getSnapshot=r,y0(e)&&v0(t)}function g0(t,e,n){return n(function(){y0(e)&&v0(t)})}function y0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kt(t,n)}catch{return!0}}function v0(t){var e=On(t,1);e!==null&&qt(e,t,1,-1)}function ly(t){var e=en();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:t},e.queue=t,t=t.dispatch=CR.bind(null,Ee,t),[e.memoizedState,t]}function Mo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function _0(){return Mt().memoizedState}function Il(t,e,n,r){var i=en();Ee.flags|=t,i.memoizedState=Mo(1|e,n,void 0,r===void 0?null:r)}function zu(t,e,n,r){var i=Mt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&ep(r,o.deps)){i.memoizedState=Mo(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=Mo(1|e,n,s,r)}function uy(t,e){return Il(8390656,8,t,e)}function rp(t,e){return zu(2048,8,t,e)}function w0(t,e){return zu(4,2,t,e)}function E0(t,e){return zu(4,4,t,e)}function T0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function I0(t,e,n){return n=n!=null?n.concat([t]):null,zu(4,4,T0.bind(null,e,t),n)}function ip(){}function S0(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ep(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function C0(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ep(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function R0(t,e,n){return Kr&21?(Kt(n,e)||(n=Nw(),Ee.lanes|=n,Qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function IR(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=mh.transition;mh.transition={};try{t(!1),e()}finally{le=n,mh.transition=r}}function A0(){return Mt().memoizedState}function SR(t,e,n){var r=ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},P0(t))k0(e,n);else if(n=u0(t,e,n,r),n!==null){var i=lt();qt(n,t,r,i),x0(n,e,r)}}function CR(t,e,n){var r=ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(P0(t))k0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Kt(l,o)){var u=e.interleaved;u===null?(i.next=i,Qf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=u0(t,e,i,r),n!==null&&(i=lt(),qt(n,t,r,i),x0(n,e,r))}}function P0(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function k0(t,e){uo=iu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function x0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lf(t,n)}}var su={readContext:Lt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},RR={readContext:Lt,useCallback:function(t,e){return en().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:uy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Il(4194308,4,T0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Il(4194308,4,t,e)},useInsertionEffect:function(t,e){return Il(4,2,t,e)},useMemo:function(t,e){var n=en();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=en();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=SR.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=en();return t={current:t},e.memoizedState=t},useState:ly,useDebugValue:ip,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=ly(!1),e=t[0];return t=IR.bind(null,t[1]),en().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=en();if(ge){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Ue===null)throw Error(F(349));Kr&30||p0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,uy(g0.bind(null,r,s,t),[t]),r.flags|=2048,Mo(9,m0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=en(),e=Ue.identifierPrefix;if(ge){var n=Tn,r=En;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=bo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},AR={readContext:Lt,useCallback:S0,useContext:Lt,useEffect:rp,useImperativeHandle:I0,useInsertionEffect:w0,useLayoutEffect:E0,useMemo:C0,useReducer:gh,useRef:_0,useState:function(){return gh(Lo)},useDebugValue:ip,useDeferredValue:function(t){var e=Mt();return R0(e,Oe.memoizedState,t)},useTransition:function(){var t=gh(Lo)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:d0,useSyncExternalStore:f0,useId:A0,unstable_isNewReconciler:!1},PR={readContext:Lt,useCallback:S0,useContext:Lt,useEffect:rp,useImperativeHandle:I0,useInsertionEffect:w0,useLayoutEffect:E0,useMemo:C0,useReducer:yh,useRef:_0,useState:function(){return yh(Lo)},useDebugValue:ip,useDeferredValue:function(t){var e=Mt();return Oe===null?e.memoizedState=t:R0(e,Oe.memoizedState,t)},useTransition:function(){var t=yh(Lo)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:d0,useSyncExternalStore:f0,useId:A0,unstable_isNewReconciler:!1};function jt(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function yd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Wu={isMounted:function(t){return(t=t._reactInternals)?si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=ur(t),s=Rn(r,i);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(qt(e,t,i,r),El(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=ur(t),s=Rn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(qt(e,t,i,r),El(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=ur(t),i=Rn(n,r);i.tag=2,e!=null&&(i.callback=e),e=ar(t,i,r),e!==null&&(qt(e,t,r,n),El(e,t,r))}};function cy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Po(n,r)||!Po(i,s):!0}function N0(t,e,n){var r=!1,i=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Lt(s):(i=gt(e)?qr:nt.current,r=e.contextTypes,s=(r=r!=null)?Qi(t,i):yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function hy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Wu.enqueueReplaceState(e,e.state,null)}function vd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Yf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Lt(s):(s=gt(e)?qr:nt.current,i.context=Qi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Wu.enqueueReplaceState(i,i.state,null),nu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Zi(t,e){try{var n="",r=e;do n+=nC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function vh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _d(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var kR=typeof WeakMap=="function"?WeakMap:Map;function O0(t,e,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){au||(au=!0,kd=r),_d(t,e)},n}function D0(t,e,n){n=Rn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_d(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_d(t,e),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new kR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=zR.bind(null,t,e,n),e.then(t,t))}function fy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function py(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rn(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var xR=Un.ReactCurrentOwner,pt=!1;function at(t,e,n,r){e.child=t===null?l0(e,null,n,r):Ji(e,t.child,n,r)}function my(t,e,n,r,i){n=n.render;var s=e.ref;return Bi(e,i),r=tp(t,e,n,r,s,i),n=np(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(ge&&n&&zf(e),e.flags|=1,at(t,e,r,i),e.child)}function gy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!dp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,b0(t,e,s,r,i)):(t=Al(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Po,n(o,r)&&t.ref===e.ref)return Dn(t,e,i)}return e.flags|=1,t=cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function b0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Po(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,Dn(t,e,i)}return wd(t,e,n,r,i)}function L0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Mi,wt),wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Mi,wt),wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Mi,wt),wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(Mi,wt),wt|=r;return at(t,e,i,n),e.child}function M0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function wd(t,e,n,r,i){var s=gt(n)?qr:nt.current;return s=Qi(e,s),Bi(e,i),n=tp(t,e,n,r,s,i),r=np(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(ge&&r&&zf(e),e.flags|=1,at(t,e,n,i),e.child)}function yy(t,e,n,r,i){if(gt(n)){var s=!0;Jl(e)}else s=!1;if(Bi(e,i),e.stateNode===null)Sl(t,e),N0(e,n,r),vd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Lt(c):(c=gt(n)?qr:nt.current,c=Qi(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&hy(e,o,r,c),qn=!1;var m=e.memoizedState;o.state=m,nu(e,r,o,i),u=e.memoizedState,l!==r||m!==u||mt.current||qn?(typeof d=="function"&&(yd(e,n,d,r),u=e.memoizedState),(l=qn||cy(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,c0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:jt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Lt(u):(u=gt(n)?qr:nt.current,u=Qi(e,u));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&hy(e,o,r,u),qn=!1,m=e.memoizedState,o.state=m,nu(e,r,o,i);var A=e.memoizedState;l!==p||m!==A||mt.current||qn?(typeof _=="function"&&(yd(e,n,_,r),A=e.memoizedState),(c=qn||cy(e,n,c,r,m,A,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Ed(t,e,n,r,s,i)}function Ed(t,e,n,r,i,s){M0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&ny(e,n,!1),Dn(t,e,s);r=e.stateNode,xR.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ji(e,t.child,null,s),e.child=Ji(e,null,l,s)):at(t,e,l,s),e.memoizedState=r.state,i&&ny(e,n,!0),e.child}function V0(t){var e=t.stateNode;e.pendingContext?ty(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ty(t,e.context,!1),Jf(t,e.containerInfo)}function vy(t,e,n,r,i){return Yi(),Hf(i),e.flags|=256,at(t,e,n,r),e.child}var Td={dehydrated:null,treeContext:null,retryLane:0};function Id(t){return{baseLanes:t,cachePool:null,transitions:null}}function F0(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(we,i&1),t===null)return md(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Gu(o,r,0,null),t=Wr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Id(n),e.memoizedState=Td,t):sp(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return NR(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=cr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=cr(l,s):(s=Wr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Id(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Td,r}return s=t.child,t=s.sibling,r=cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function sp(t,e){return e=Gu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xa(t,e,n,r){return r!==null&&Hf(r),Ji(e,t.child,null,n),t=sp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function NR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=vh(Error(F(422))),Xa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Gu({mode:"visible",children:r.children},i,0,null),s=Wr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ji(e,t.child,null,o),e.child.memoizedState=Id(o),e.memoizedState=Td,s);if(!(e.mode&1))return Xa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(F(419)),r=vh(s,r,void 0),Xa(t,e,o,r)}if(l=(o&t.childLanes)!==0,pt||l){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,On(t,i),qt(r,t,i,-1))}return hp(),r=vh(Error(F(421))),Xa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=WR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Et=or(i.nextSibling),Tt=e,ge=!0,Bt=null,t!==null&&(kt[xt++]=En,kt[xt++]=Tn,kt[xt++]=Gr,En=t.id,Tn=t.overflow,Gr=e),e=sp(e,r.children),e.flags|=4096,e)}function _y(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),gd(t.return,e,n)}function _h(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function U0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(at(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_y(t,n,e);else if(t.tag===19)_y(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ru(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),_h(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ru(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}_h(e,!0,n,null,s);break;case"together":_h(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Sl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function OR(t,e,n){switch(e.tag){case 3:V0(e),Yi();break;case 5:h0(e);break;case 1:gt(e.type)&&Jl(e);break;case 4:Jf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(eu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?F0(t,e,n):(de(we,we.current&1),t=Dn(t,e,n),t!==null?t.sibling:null);de(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return U0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,L0(t,e,n)}return Dn(t,e,n)}var j0,Sd,$0,B0;j0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sd=function(){};$0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Ur(rn.current);var s=null;switch(n){case"input":i=qh(t,i),r=qh(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=Qh(t,i),r=Qh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ql)}Jh(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Eo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Eo.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&pe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};B0=function(t,e,n,r){n!==r&&(e.flags|=4)};function $s(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function DR(t,e,n){var r=e.pendingProps;switch(Wf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return gt(e.type)&&Yl(),Je(e),null;case 3:return r=e.stateNode,Xi(),me(mt),me(nt),Zf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bt!==null&&(Od(Bt),Bt=null))),Sd(t,e),Je(e),null;case 5:Xf(e);var i=Ur(Do.current);if(n=e.type,t!==null&&e.stateNode!=null)$0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Je(e),null}if(t=Ur(rn.current),Ya(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[tn]=e,r[No]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<Ys.length;i++)pe(Ys[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Pg(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":xg(r,s),pe("invalid",r)}Jh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Qa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Qa(r.textContent,l,t),i=["children",""+l]):Eo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":$a(r),kg(r,s,!0);break;case"textarea":$a(r),Ng(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ql)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=gw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[tn]=e,t[No]=r,j0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xh(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ys.length;i++)pe(Ys[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":Pg(t,r),i=qh(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),pe("invalid",t);break;case"textarea":xg(t,r),i=Qh(t,r),pe("invalid",t);break;default:i=r}Jh(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?_w(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&yw(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&To(t,u):typeof u=="number"&&To(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Eo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&pe("scroll",t):u!=null&&kf(t,s,u,o))}switch(n){case"input":$a(t),kg(t,r,!1);break;case"textarea":$a(t),Ng(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)B0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Ur(Do.current),Ur(rn.current),Ya(e)){if(r=e.stateNode,n=e.memoizedProps,r[tn]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:Qa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=e,e.stateNode=r}return Je(e),null;case 13:if(me(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&Et!==null&&e.mode&1&&!(e.flags&128))o0(),Yi(),e.flags|=98560,s=!1;else if(s=Ya(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[tn]=e}else Yi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else Bt!==null&&(Od(Bt),Bt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?be===0&&(be=3):hp())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return Xi(),Sd(t,e),t===null&&ko(e.stateNode.containerInfo),Je(e),null;case 10:return Kf(e.type._context),Je(e),null;case 17:return gt(e.type)&&Yl(),Je(e),null;case 19:if(me(we),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)$s(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ru(t),o!==null){for(e.flags|=128,$s(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>es&&(e.flags|=128,r=!0,$s(s,!1),e.lanes=4194304)}else{if(!r)if(t=ru(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return Je(e),null}else 2*Pe()-s.renderingStartTime>es&&n!==1073741824&&(e.flags|=128,r=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=we.current,de(we,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return cp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?wt&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function bR(t,e){switch(Wf(e),e.tag){case 1:return gt(e.type)&&Yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xi(),me(mt),me(nt),Zf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Xf(e),null;case 13:if(me(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Yi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(we),null;case 4:return Xi(),null;case 10:return Kf(e.type._context),null;case 22:case 23:return cp(),null;case 24:return null;default:return null}}var Za=!1,et=!1,LR=typeof WeakSet=="function"?WeakSet:Set,W=null;function Li(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function Cd(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var wy=!1;function MR(t,e){if(ld=ql,t=Gw(),Bf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var _;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(_=p.firstChild)!==null;)m=p,p=_;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(_=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=_}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ud={focusedElem:t,selectionRange:n},ql=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var k=A.memoizedProps,C=A.memoizedState,w=e.stateNode,v=w.getSnapshotBeforeUpdate(e.elementType===e.type?k:jt(e.type,k),C);w.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){Ce(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return A=wy,wy=!1,A}function co(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Cd(e,n,s)}i=i.next}while(i!==r)}}function Hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Rd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function z0(t){var e=t.alternate;e!==null&&(t.alternate=null,z0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tn],delete e[No],delete e[dd],delete e[vR],delete e[_R])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function W0(t){return t.tag===5||t.tag===3||t.tag===4}function Ey(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||W0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ad(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ql));else if(r!==4&&(t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}function Pd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Pd(t,e,n),t=t.sibling;t!==null;)Pd(t,e,n),t=t.sibling}var $e=null,$t=!1;function zn(t,e,n){for(n=n.child;n!==null;)H0(t,e,n),n=n.sibling}function H0(t,e,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(Vu,n)}catch{}switch(n.tag){case 5:et||Li(n,e);case 6:var r=$e,i=$t;$e=null,zn(t,e,n),$e=r,$t=i,$e!==null&&($t?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&($t?(t=$e,n=n.stateNode,t.nodeType===8?dh(t.parentNode,n):t.nodeType===1&&dh(t,n),Ro(t)):dh($e,n.stateNode));break;case 4:r=$e,i=$t,$e=n.stateNode.containerInfo,$t=!0,zn(t,e,n),$e=r,$t=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Cd(n,e,o),i=i.next}while(i!==r)}zn(t,e,n);break;case 1:if(!et&&(Li(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,e,l)}zn(t,e,n);break;case 21:zn(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,zn(t,e,n),et=r):zn(t,e,n);break;default:zn(t,e,n)}}function Ty(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new LR),e.forEach(function(r){var i=HR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ut(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,$t=!1;break e;case 3:$e=l.stateNode.containerInfo,$t=!0;break e;case 4:$e=l.stateNode.containerInfo,$t=!0;break e}l=l.return}if($e===null)throw Error(F(160));H0(s,o,i),$e=null,$t=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ce(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)q0(e,t),e=e.sibling}function q0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ut(e,t),Xt(t),r&4){try{co(3,t,t.return),Hu(3,t)}catch(k){Ce(t,t.return,k)}try{co(5,t,t.return)}catch(k){Ce(t,t.return,k)}}break;case 1:Ut(e,t),Xt(t),r&512&&n!==null&&Li(n,n.return);break;case 5:if(Ut(e,t),Xt(t),r&512&&n!==null&&Li(n,n.return),t.flags&32){var i=t.stateNode;try{To(i,"")}catch(k){Ce(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&pw(i,s),Xh(l,o);var c=Xh(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?_w(i,p):d==="dangerouslySetInnerHTML"?yw(i,p):d==="children"?To(i,p):kf(i,d,p,c)}switch(l){case"input":Gh(i,s);break;case"textarea":mw(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Fi(i,!!s.multiple,_,!1):m!==!!s.multiple&&(s.defaultValue!=null?Fi(i,!!s.multiple,s.defaultValue,!0):Fi(i,!!s.multiple,s.multiple?[]:"",!1))}i[No]=s}catch(k){Ce(t,t.return,k)}}break;case 6:if(Ut(e,t),Xt(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Ce(t,t.return,k)}}break;case 3:if(Ut(e,t),Xt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ro(e.containerInfo)}catch(k){Ce(t,t.return,k)}break;case 4:Ut(e,t),Xt(t);break;case 13:Ut(e,t),Xt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(lp=Pe())),r&4&&Ty(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(et=(c=et)||d,Ut(e,t),et=c):Ut(e,t),Xt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(W=t,d=t.child;d!==null;){for(p=W=d;W!==null;){switch(m=W,_=m.child,m.tag){case 0:case 11:case 14:case 15:co(4,m,m.return);break;case 1:Li(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(k){Ce(r,n,k)}}break;case 5:Li(m,m.return);break;case 22:if(m.memoizedState!==null){Sy(p);continue}}_!==null?(_.return=m,W=_):Sy(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=vw("display",o))}catch(k){Ce(t,t.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){Ce(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ut(e,t),Xt(t),r&4&&Ty(t);break;case 21:break;default:Ut(e,t),Xt(t)}}function Xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(W0(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(To(i,""),r.flags&=-33);var s=Ey(t);Pd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Ey(t);Ad(t,l,o);break;default:throw Error(F(161))}}catch(u){Ce(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function VR(t,e,n){W=t,G0(t)}function G0(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Za;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||et;l=Za;var c=et;if(Za=o,(et=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?Cy(i):u!==null?(u.return=o,W=u):Cy(i);for(;s!==null;)W=s,G0(s),s=s.sibling;W=i,Za=l,et=c}Iy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Iy(t)}}function Iy(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:et||Hu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ay(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ay(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Ro(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}et||e.flags&512&&Rd(e)}catch(m){Ce(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Sy(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function Cy(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hu(4,e)}catch(u){Ce(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ce(e,i,u)}}var s=e.return;try{Rd(e)}catch(u){Ce(e,s,u)}break;case 5:var o=e.return;try{Rd(e)}catch(u){Ce(e,o,u)}}}catch(u){Ce(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var FR=Math.ceil,ou=Un.ReactCurrentDispatcher,op=Un.ReactCurrentOwner,Dt=Un.ReactCurrentBatchConfig,se=0,Ue=null,xe=null,We=0,wt=0,Mi=Sr(0),be=0,Vo=null,Qr=0,qu=0,ap=0,ho=null,dt=null,lp=0,es=1/0,vn=null,au=!1,kd=null,lr=null,el=!1,er=null,lu=0,fo=0,xd=null,Cl=-1,Rl=0;function lt(){return se&6?Pe():Cl!==-1?Cl:Cl=Pe()}function ur(t){return t.mode&1?se&2&&We!==0?We&-We:ER.transition!==null?(Rl===0&&(Rl=Nw()),Rl):(t=le,t!==0||(t=window.event,t=t===void 0?16:Fw(t.type)),t):1}function qt(t,e,n,r){if(50<fo)throw fo=0,xd=null,Error(F(185));ra(t,n,r),(!(se&2)||t!==Ue)&&(t===Ue&&(!(se&2)&&(qu|=n),be===4&&Qn(t,We)),yt(t,r),n===1&&se===0&&!(e.mode&1)&&(es=Pe()+500,Bu&&Cr()))}function yt(t,e){var n=t.callbackNode;EC(t,e);var r=Hl(t,t===Ue?We:0);if(r===0)n!==null&&bg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&bg(n),e===1)t.tag===0?wR(Ry.bind(null,t)):r0(Ry.bind(null,t)),gR(function(){!(se&6)&&Cr()}),n=null;else{switch(Ow(r)){case 1:n=bf;break;case 4:n=kw;break;case 16:n=Wl;break;case 536870912:n=xw;break;default:n=Wl}n=tE(n,K0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function K0(t,e){if(Cl=-1,Rl=0,se&6)throw Error(F(327));var n=t.callbackNode;if(zi()&&t.callbackNode!==n)return null;var r=Hl(t,t===Ue?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=uu(t,r);else{e=r;var i=se;se|=2;var s=Y0();(Ue!==t||We!==e)&&(vn=null,es=Pe()+500,zr(t,e));do try{$R();break}catch(l){Q0(t,l)}while(!0);Gf(),ou.current=s,se=i,xe!==null?e=0:(Ue=null,We=0,e=be)}if(e!==0){if(e===2&&(i=rd(t),i!==0&&(r=i,e=Nd(t,i))),e===1)throw n=Vo,zr(t,0),Qn(t,r),yt(t,Pe()),n;if(e===6)Qn(t,r);else{if(i=t.current.alternate,!(r&30)&&!UR(i)&&(e=uu(t,r),e===2&&(s=rd(t),s!==0&&(r=s,e=Nd(t,s))),e===1))throw n=Vo,zr(t,0),Qn(t,r),yt(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Lr(t,dt,vn);break;case 3:if(Qn(t,r),(r&130023424)===r&&(e=lp+500-Pe(),10<e)){if(Hl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=hd(Lr.bind(null,t,dt,vn),e);break}Lr(t,dt,vn);break;case 4:if(Qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ht(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*FR(r/1960))-r,10<r){t.timeoutHandle=hd(Lr.bind(null,t,dt,vn),r);break}Lr(t,dt,vn);break;case 5:Lr(t,dt,vn);break;default:throw Error(F(329))}}}return yt(t,Pe()),t.callbackNode===n?K0.bind(null,t):null}function Nd(t,e){var n=ho;return t.current.memoizedState.isDehydrated&&(zr(t,e).flags|=256),t=uu(t,e),t!==2&&(e=dt,dt=n,e!==null&&Od(e)),t}function Od(t){dt===null?dt=t:dt.push.apply(dt,t)}function UR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qn(t,e){for(e&=~ap,e&=~qu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ht(e),r=1<<n;t[n]=-1,e&=~r}}function Ry(t){if(se&6)throw Error(F(327));zi();var e=Hl(t,0);if(!(e&1))return yt(t,Pe()),null;var n=uu(t,e);if(t.tag!==0&&n===2){var r=rd(t);r!==0&&(e=r,n=Nd(t,r))}if(n===1)throw n=Vo,zr(t,0),Qn(t,e),yt(t,Pe()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,dt,vn),yt(t,Pe()),null}function up(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(es=Pe()+500,Bu&&Cr())}}function Yr(t){er!==null&&er.tag===0&&!(se&6)&&zi();var e=se;se|=1;var n=Dt.transition,r=le;try{if(Dt.transition=null,le=1,t)return t()}finally{le=r,Dt.transition=n,se=e,!(se&6)&&Cr()}}function cp(){wt=Mi.current,me(Mi)}function zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mR(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Wf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yl();break;case 3:Xi(),me(mt),me(nt),Zf();break;case 5:Xf(r);break;case 4:Xi();break;case 13:me(we);break;case 19:me(we);break;case 10:Kf(r.type._context);break;case 22:case 23:cp()}n=n.return}if(Ue=t,xe=t=cr(t.current,null),We=wt=e,be=0,Vo=null,ap=qu=Qr=0,dt=ho=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Fr=null}return t}function Q0(t,e){do{var n=xe;try{if(Gf(),Tl.current=su,iu){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}iu=!1}if(Kr=0,Fe=Oe=Ee=null,uo=!1,bo=0,op.current=null,n===null||n.return===null){be=1,Vo=e,xe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=fy(o);if(_!==null){_.flags&=-257,py(_,o,l,s,e),_.mode&1&&dy(s,c,e),e=_,u=c;var A=e.updateQueue;if(A===null){var k=new Set;k.add(u),e.updateQueue=k}else A.add(u);break e}else{if(!(e&1)){dy(s,c,e),hp();break e}u=Error(F(426))}}else if(ge&&l.mode&1){var C=fy(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),py(C,o,l,s,e),Hf(Zi(u,l));break e}}s=u=Zi(u,l),be!==4&&(be=2),ho===null?ho=[s]:ho.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var w=O0(s,u,e);oy(s,w);break e;case 1:l=u;var v=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(lr===null||!lr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=D0(s,l,e);oy(s,D);break e}}s=s.return}while(s!==null)}X0(n)}catch(V){e=V,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function Y0(){var t=ou.current;return ou.current=su,t===null?su:t}function hp(){(be===0||be===3||be===2)&&(be=4),Ue===null||!(Qr&268435455)&&!(qu&268435455)||Qn(Ue,We)}function uu(t,e){var n=se;se|=2;var r=Y0();(Ue!==t||We!==e)&&(vn=null,zr(t,e));do try{jR();break}catch(i){Q0(t,i)}while(!0);if(Gf(),se=n,ou.current=r,xe!==null)throw Error(F(261));return Ue=null,We=0,be}function jR(){for(;xe!==null;)J0(xe)}function $R(){for(;xe!==null&&!dC();)J0(xe)}function J0(t){var e=eE(t.alternate,t,wt);t.memoizedProps=t.pendingProps,e===null?X0(t):xe=e,op.current=null}function X0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bR(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,xe=null;return}}else if(n=DR(n,e,wt),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);be===0&&(be=5)}function Lr(t,e,n){var r=le,i=Dt.transition;try{Dt.transition=null,le=1,BR(t,e,n,r)}finally{Dt.transition=i,le=r}return null}function BR(t,e,n,r){do zi();while(er!==null);if(se&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(TC(t,s),t===Ue&&(xe=Ue=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||el||(el=!0,tE(Wl,function(){return zi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dt.transition,Dt.transition=null;var o=le;le=1;var l=se;se|=4,op.current=null,MR(t,n),q0(n,t),lR(ud),ql=!!ld,ud=ld=null,t.current=n,VR(n),fC(),se=l,le=o,Dt.transition=s}else t.current=n;if(el&&(el=!1,er=t,lu=i),s=t.pendingLanes,s===0&&(lr=null),gC(n.stateNode),yt(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(au)throw au=!1,t=kd,kd=null,t;return lu&1&&t.tag!==0&&zi(),s=t.pendingLanes,s&1?t===xd?fo++:(fo=0,xd=t):fo=0,Cr(),null}function zi(){if(er!==null){var t=Ow(lu),e=Dt.transition,n=le;try{if(Dt.transition=null,le=16>t?16:t,er===null)var r=!1;else{if(t=er,er=null,lu=0,se&6)throw Error(F(331));var i=se;for(se|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:co(8,d,s)}var p=d.child;if(p!==null)p.return=d,W=p;else for(;W!==null;){d=W;var m=d.sibling,_=d.return;if(z0(d),d===c){W=null;break}if(m!==null){m.return=_,W=m;break}W=_}}}var A=s.alternate;if(A!==null){var k=A.child;if(k!==null){A.child=null;do{var C=k.sibling;k.sibling=null,k=C}while(k!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:co(9,s,s.return)}var w=s.sibling;if(w!==null){w.return=s.return,W=w;break e}W=s.return}}var v=t.current;for(W=v;W!==null;){o=W;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,W=I;else e:for(o=v;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Hu(9,l)}}catch(V){Ce(l,l.return,V)}if(l===o){W=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,W=D;break e}W=l.return}}if(se=i,Cr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(Vu,t)}catch{}r=!0}return r}finally{le=n,Dt.transition=e}}return!1}function Ay(t,e,n){e=Zi(n,e),e=O0(t,e,1),t=ar(t,e,1),e=lt(),t!==null&&(ra(t,1,e),yt(t,e))}function Ce(t,e,n){if(t.tag===3)Ay(t,t,n);else for(;e!==null;){if(e.tag===3){Ay(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){t=Zi(n,t),t=D0(e,t,1),e=ar(e,t,1),t=lt(),e!==null&&(ra(e,1,t),yt(e,t));break}}e=e.return}}function zR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(We&n)===n&&(be===4||be===3&&(We&130023424)===We&&500>Pe()-lp?zr(t,0):ap|=n),yt(t,e)}function Z0(t,e){e===0&&(t.mode&1?(e=Wa,Wa<<=1,!(Wa&130023424)&&(Wa=4194304)):e=1);var n=lt();t=On(t,e),t!==null&&(ra(t,e,n),yt(t,n))}function WR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Z0(t,n)}function HR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Z0(t,n)}var eE;eE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,OR(t,e,n);pt=!!(t.flags&131072)}else pt=!1,ge&&e.flags&1048576&&i0(e,Zl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Sl(t,e),t=e.pendingProps;var i=Qi(e,nt.current);Bi(e,n),i=tp(null,e,r,t,i,n);var s=np();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(s=!0,Jl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yf(e),i.updater=Wu,e.stateNode=i,i._reactInternals=e,vd(e,r,t,n),e=Ed(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&zf(e),at(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Sl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=GR(r),t=jt(r,t),i){case 0:e=wd(null,e,r,t,n);break e;case 1:e=yy(null,e,r,t,n);break e;case 11:e=my(null,e,r,t,n);break e;case 14:e=gy(null,e,r,jt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),wd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),yy(t,e,r,i,n);case 3:e:{if(V0(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,c0(t,e),nu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Zi(Error(F(423)),e),e=vy(t,e,r,n,i);break e}else if(r!==i){i=Zi(Error(F(424)),e),e=vy(t,e,r,n,i);break e}else for(Et=or(e.stateNode.containerInfo.firstChild),Tt=e,ge=!0,Bt=null,n=l0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yi(),r===i){e=Dn(t,e,n);break e}at(t,e,r,n)}e=e.child}return e;case 5:return h0(e),t===null&&md(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,cd(r,i)?o=null:s!==null&&cd(r,s)&&(e.flags|=32),M0(t,e),at(t,e,o,n),e.child;case 6:return t===null&&md(e),null;case 13:return F0(t,e,n);case 4:return Jf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ji(e,null,r,n):at(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),my(t,e,r,i,n);case 7:return at(t,e,e.pendingProps,n),e.child;case 8:return at(t,e,e.pendingProps.children,n),e.child;case 12:return at(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(eu,r._currentValue),r._currentValue=o,s!==null)if(Kt(s.value,o)){if(s.children===i.children&&!mt.current){e=Dn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Rn(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),gd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),gd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}at(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Bi(e,n),i=Lt(i),r=r(i),e.flags|=1,at(t,e,r,n),e.child;case 14:return r=e.type,i=jt(r,e.pendingProps),i=jt(r.type,i),gy(t,e,r,i,n);case 15:return b0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Sl(t,e),e.tag=1,gt(r)?(t=!0,Jl(e)):t=!1,Bi(e,n),N0(e,r,i),vd(e,r,i,n),Ed(null,e,r,!0,t,n);case 19:return U0(t,e,n);case 22:return L0(t,e,n)}throw Error(F(156,e.tag))};function tE(t,e){return Pw(t,e)}function qR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,e,n,r){return new qR(t,e,n,r)}function dp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function GR(t){if(typeof t=="function")return dp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Nf)return 11;if(t===Of)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Al(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")dp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ri:return Wr(n.children,i,s,e);case xf:o=8,i|=8;break;case Bh:return t=Ot(12,n,e,i|2),t.elementType=Bh,t.lanes=s,t;case zh:return t=Ot(13,n,e,i),t.elementType=zh,t.lanes=s,t;case Wh:return t=Ot(19,n,e,i),t.elementType=Wh,t.lanes=s,t;case hw:return Gu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case uw:o=10;break e;case cw:o=9;break e;case Nf:o=11;break e;case Of:o=14;break e;case Hn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Ot(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Wr(t,e,n,r){return t=Ot(7,t,r,e),t.lanes=n,t}function Gu(t,e,n,r){return t=Ot(22,t,r,e),t.elementType=hw,t.lanes=n,t.stateNode={isHidden:!1},t}function wh(t,e,n){return t=Ot(6,t,null,e),t.lanes=n,t}function Eh(t,e,n){return e=Ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function KR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=th(0),this.expirationTimes=th(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=th(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fp(t,e,n,r,i,s,o,l,u){return t=new KR(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yf(s),t}function QR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ci,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function nE(t){if(!t)return yr;t=t._reactInternals;e:{if(si(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(gt(n))return n0(t,n,e)}return e}function rE(t,e,n,r,i,s,o,l,u){return t=fp(n,r,!0,t,i,s,o,l,u),t.context=nE(null),n=t.current,r=lt(),i=ur(n),s=Rn(r,i),s.callback=e??null,ar(n,s,i),t.current.lanes=i,ra(t,i,r),yt(t,r),t}function Ku(t,e,n,r){var i=e.current,s=lt(),o=ur(i);return n=nE(n),e.context===null?e.context=n:e.pendingContext=n,e=Rn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ar(i,e,o),t!==null&&(qt(t,i,o,s),El(t,i,o)),o}function cu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Py(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function pp(t,e){Py(t,e),(t=t.alternate)&&Py(t,e)}function YR(){return null}var iE=typeof reportError=="function"?reportError:function(t){console.error(t)};function mp(t){this._internalRoot=t}Qu.prototype.render=mp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Ku(t,e,null,null)};Qu.prototype.unmount=mp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yr(function(){Ku(null,t,null,null)}),e[Nn]=null}};function Qu(t){this._internalRoot=t}Qu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Lw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&Vw(t)}};function gp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ky(){}function JR(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=cu(o);s.call(c)}}var o=rE(e,r,t,0,null,!1,!1,"",ky);return t._reactRootContainer=o,t[Nn]=o.current,ko(t.nodeType===8?t.parentNode:t),Yr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=cu(u);l.call(c)}}var u=fp(t,0,!1,null,null,!1,!1,"",ky);return t._reactRootContainer=u,t[Nn]=u.current,ko(t.nodeType===8?t.parentNode:t),Yr(function(){Ku(e,u,n,r)}),u}function Ju(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=cu(o);l.call(u)}}Ku(e,o,t,i)}else o=JR(n,e,t,i,r);return cu(o)}Dw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qs(e.pendingLanes);n!==0&&(Lf(e,n|1),yt(e,Pe()),!(se&6)&&(es=Pe()+500,Cr()))}break;case 13:Yr(function(){var r=On(t,1);if(r!==null){var i=lt();qt(r,t,1,i)}}),pp(t,1)}};Mf=function(t){if(t.tag===13){var e=On(t,134217728);if(e!==null){var n=lt();qt(e,t,134217728,n)}pp(t,134217728)}};bw=function(t){if(t.tag===13){var e=ur(t),n=On(t,e);if(n!==null){var r=lt();qt(n,t,e,r)}pp(t,e)}};Lw=function(){return le};Mw=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};ed=function(t,e,n){switch(e){case"input":if(Gh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=$u(r);if(!i)throw Error(F(90));fw(r),Gh(r,i)}}}break;case"textarea":mw(t,n);break;case"select":e=n.value,e!=null&&Fi(t,!!n.multiple,e,!1)}};Tw=up;Iw=Yr;var XR={usingClientEntryPoint:!1,Events:[sa,xi,$u,ww,Ew,up]},Bs={findFiberByHostInstance:Vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ZR={bundleType:Bs.bundleType,version:Bs.version,rendererPackageName:Bs.rendererPackageName,rendererConfig:Bs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rw(t),t===null?null:t.stateNode},findFiberByHostInstance:Bs.findFiberByHostInstance||YR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!tl.isDisabled&&tl.supportsFiber)try{Vu=tl.inject(ZR),nn=tl}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=XR;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gp(e))throw Error(F(200));return QR(t,e,null,n)};Rt.createRoot=function(t,e){if(!gp(t))throw Error(F(299));var n=!1,r="",i=iE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fp(t,1,!1,null,null,n,!1,r,i),t[Nn]=e.current,ko(t.nodeType===8?t.parentNode:t),new mp(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Rw(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return Yr(t)};Rt.hydrate=function(t,e,n){if(!Yu(e))throw Error(F(200));return Ju(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!gp(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=iE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=rE(e,null,t,1,n??null,i,!1,s,o),t[Nn]=e.current,ko(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Qu(e)};Rt.render=function(t,e,n){if(!Yu(e))throw Error(F(200));return Ju(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!Yu(t))throw Error(F(40));return t._reactRootContainer?(Yr(function(){Ju(null,null,t,!1,function(){t._reactRootContainer=null,t[Nn]=null})}),!0):!1};Rt.unstable_batchedUpdates=up;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Yu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Ju(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function sE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sE)}catch(t){console.error(t)}}sE(),sw.exports=Rt;var eA=sw.exports,oE,xy=eA;oE=xy.createRoot,xy.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fo(){return Fo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fo.apply(this,arguments)}var tr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tr||(tr={}));const Ny="popstate";function tA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Dd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:hu(i)}return rA(e,n,null,t)}function Ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function aE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function nA(){return Math.random().toString(36).substr(2,8)}function Oy(t,e){return{usr:t.state,key:t.key,idx:e}}function Dd(t,e,n,r){return n===void 0&&(n=null),Fo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ps(e):e,{state:n,key:e&&e.key||r||nA()})}function hu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ps(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function rA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=tr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState(Fo({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=tr.Pop;let C=d(),w=C==null?null:C-c;c=C,u&&u({action:l,location:k.location,delta:w})}function m(C,w){l=tr.Push;let v=Dd(k.location,C,w);c=d()+1;let I=Oy(v,c),D=k.createHref(v);try{o.pushState(I,"",D)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;i.location.assign(D)}s&&u&&u({action:l,location:k.location,delta:1})}function _(C,w){l=tr.Replace;let v=Dd(k.location,C,w);c=d();let I=Oy(v,c),D=k.createHref(v);o.replaceState(I,"",D),s&&u&&u({action:l,location:k.location,delta:0})}function A(C){let w=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof C=="string"?C:hu(C);return v=v.replace(/ $/,"%20"),Ne(w,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,w)}let k={get action(){return l},get location(){return t(i,o)},listen(C){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Ny,p),u=C,()=>{i.removeEventListener(Ny,p),u=null}},createHref(C){return e(i,C)},createURL:A,encodeLocation(C){let w=A(C);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:m,replace:_,go(C){return o.go(C)}};return k}var Dy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Dy||(Dy={}));function iA(t,e,n){return n===void 0&&(n="/"),sA(t,e,n,!1)}function sA(t,e,n,r){let i=typeof e=="string"?ps(e):e,s=yp(i.pathname||"/",n);if(s==null)return null;let o=lE(t);oA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=yA(s);l=mA(o[u],c,r)}return l}function lE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ne(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=hr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),lE(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:fA(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of uE(s.path))i(s,o,u)}),e}function uE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=uE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function oA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:pA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const aA=/^:[\w-]+$/,lA=3,uA=2,cA=1,hA=10,dA=-2,by=t=>t==="*";function fA(t,e){let n=t.split("/"),r=n.length;return n.some(by)&&(r+=dA),e&&(r+=uA),n.filter(i=>!by(i)).reduce((i,s)=>i+(aA.test(s)?lA:s===""?cA:hA),r)}function pA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function mA(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=Ly({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Ly({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:hr([s,p.pathname]),pathnameBase:EA(hr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=hr([s,p.pathnameBase]))}return o}function Ly(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=gA(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:_}=d;if(m==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const A=l[p];return _&&!A?c[m]=void 0:c[m]=(A||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function gA(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),aE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function yA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return aE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function yp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function vA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ps(t):t;return{pathname:n?n.startsWith("/")?n:_A(n,e):e,search:TA(r),hash:IA(i)}}function _A(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Th(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function cE(t,e){let n=wA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function hE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ps(t):(i=Fo({},t),Ne(!i.pathname||!i.pathname.includes("?"),Th("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),Th("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),Th("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=vA(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const hr=t=>t.join("/").replace(/\/\/+/g,"/"),EA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),TA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,IA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function SA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const dE=["post","put","patch","delete"];new Set(dE);const CA=["get",...dE];new Set(CA);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uo(){return Uo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Uo.apply(this,arguments)}const vp=U.createContext(null),RA=U.createContext(null),oi=U.createContext(null),Xu=U.createContext(null),ai=U.createContext({outlet:null,matches:[],isDataRoute:!1}),fE=U.createContext(null);function AA(t,e){let{relative:n}=e===void 0?{}:e;aa()||Ne(!1);let{basename:r,navigator:i}=U.useContext(oi),{hash:s,pathname:o,search:l}=mE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:hr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function aa(){return U.useContext(Xu)!=null}function Zu(){return aa()||Ne(!1),U.useContext(Xu).location}function pE(t){U.useContext(oi).static||U.useLayoutEffect(t)}function _p(){let{isDataRoute:t}=U.useContext(ai);return t?jA():PA()}function PA(){aa()||Ne(!1);let t=U.useContext(vp),{basename:e,future:n,navigator:r}=U.useContext(oi),{matches:i}=U.useContext(ai),{pathname:s}=Zu(),o=JSON.stringify(cE(i,n.v7_relativeSplatPath)),l=U.useRef(!1);return pE(()=>{l.current=!0}),U.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=hE(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:hr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function mE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(oi),{matches:i}=U.useContext(ai),{pathname:s}=Zu(),o=JSON.stringify(cE(i,r.v7_relativeSplatPath));return U.useMemo(()=>hE(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function kA(t,e){return xA(t,e)}function xA(t,e,n,r){aa()||Ne(!1);let{navigator:i}=U.useContext(oi),{matches:s}=U.useContext(ai),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=Zu(),d;if(e){var p;let C=typeof e=="string"?ps(e):e;u==="/"||(p=C.pathname)!=null&&p.startsWith(u)||Ne(!1),d=C}else d=c;let m=d.pathname||"/",_=m;if(u!=="/"){let C=u.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(C.length).join("/")}let A=iA(t,{pathname:_}),k=LA(A&&A.map(C=>Object.assign({},C,{params:Object.assign({},l,C.params),pathname:hr([u,i.encodeLocation?i.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?u:hr([u,i.encodeLocation?i.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),s,n,r);return e&&k?U.createElement(Xu.Provider,{value:{location:Uo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:tr.Pop}},k):k}function NA(){let t=UA(),e=SA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const OA=U.createElement(NA,null);class DA extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(ai.Provider,{value:this.props.routeContext},U.createElement(fE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function bA(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(vp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(ai.Provider,{value:e},r)}function LA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Ne(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:_}=n,A=p.route.loader&&m[p.route.id]===void 0&&(!_||_[p.route.id]===void 0);if(p.route.lazy||A){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let _,A=!1,k=null,C=null;n&&(_=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||OA,u&&(c<0&&m===0?(A=!0,C=null):c===m&&(A=!0,C=p.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,m+1)),v=()=>{let I;return _?I=k:A?I=C:p.route.Component?I=U.createElement(p.route.Component,null):p.route.element?I=p.route.element:I=d,U.createElement(bA,{match:p,routeContext:{outlet:d,matches:w,isDataRoute:n!=null},children:I})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?U.createElement(DA,{location:n.location,revalidation:n.revalidation,component:k,error:_,children:v(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):v()},null)}var gE=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(gE||{}),du=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(du||{});function MA(t){let e=U.useContext(vp);return e||Ne(!1),e}function VA(t){let e=U.useContext(RA);return e||Ne(!1),e}function FA(t){let e=U.useContext(ai);return e||Ne(!1),e}function yE(t){let e=FA(),n=e.matches[e.matches.length-1];return n.route.id||Ne(!1),n.route.id}function UA(){var t;let e=U.useContext(fE),n=VA(du.UseRouteError),r=yE(du.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function jA(){let{router:t}=MA(gE.UseNavigateStable),e=yE(du.UseNavigateStable),n=U.useRef(!1);return pE(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Uo({fromRouteId:e},s)))},[t,e])}const My={};function $A(t,e){My[e]||(My[e]=!0,console.warn(e))}const Vy=(t,e,n)=>$A(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function BA(t,e){t!=null&&t.v7_startTransition||Vy("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&!e&&Vy("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function Js(t){Ne(!1)}function zA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tr.Pop,navigator:s,static:o=!1,future:l}=t;aa()&&Ne(!1);let u=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:u,navigator:s,static:o,future:Uo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=ps(r));let{pathname:d="/",search:p="",hash:m="",state:_=null,key:A="default"}=r,k=U.useMemo(()=>{let C=yp(d,u);return C==null?null:{location:{pathname:C,search:p,hash:m,state:_,key:A},navigationType:i}},[u,d,p,m,_,A,i]);return k==null?null:U.createElement(oi.Provider,{value:c},U.createElement(Xu.Provider,{children:n,value:k}))}function WA(t){let{children:e,location:n}=t;return kA(bd(e),n)}new Promise(()=>{});function bd(t,e){e===void 0&&(e=[]);let n=[];return U.Children.forEach(t,(r,i)=>{if(!U.isValidElement(r))return;let s=[...e,i];if(r.type===U.Fragment){n.push.apply(n,bd(r.props.children,s));return}r.type!==Js&&Ne(!1),!r.props.index||!r.props.children||Ne(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=bd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ld(){return Ld=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ld.apply(this,arguments)}function HA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function qA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function GA(t,e){return t.button===0&&(!e||e==="_self")&&!qA(t)}const KA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],QA="6";try{window.__reactRouterVersion=QA}catch{}const YA="startTransition",Fy=z1[YA];function JA(t){let{basename:e,children:n,future:r,window:i}=t,s=U.useRef();s.current==null&&(s.current=tA({window:i,v5Compat:!0}));let o=s.current,[l,u]=U.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=U.useCallback(p=>{c&&Fy?Fy(()=>u(p)):u(p)},[u,c]);return U.useLayoutEffect(()=>o.listen(d),[o,d]),U.useEffect(()=>BA(r),[r]),U.createElement(zA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const XA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ZA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vE=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p}=e,m=HA(e,KA),{basename:_}=U.useContext(oi),A,k=!1;if(typeof c=="string"&&ZA.test(c)&&(A=c,XA))try{let I=new URL(window.location.href),D=c.startsWith("//")?new URL(I.protocol+c):new URL(c),V=yp(D.pathname,_);D.origin===I.origin&&V!=null?c=V+D.search+D.hash:k=!0}catch{}let C=AA(c,{relative:i}),w=eP(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p});function v(I){r&&r(I),I.defaultPrevented||w(I)}return U.createElement("a",Ld({},m,{href:A||C,onClick:k||s?r:v,ref:n,target:u}))});var Uy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Uy||(Uy={}));var jy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(jy||(jy={}));function eP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=_p(),c=Zu(),d=mE(t,{relative:o});return U.useCallback(p=>{if(GA(p,n)){p.preventDefault();let m=r!==void 0?r:hu(c)===hu(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}var wp={exports:{}},Z=String,_E=function(){return{isColorSupported:!1,reset:Z,bold:Z,dim:Z,italic:Z,underline:Z,inverse:Z,hidden:Z,strikethrough:Z,black:Z,red:Z,green:Z,yellow:Z,blue:Z,magenta:Z,cyan:Z,white:Z,gray:Z,bgBlack:Z,bgRed:Z,bgGreen:Z,bgYellow:Z,bgBlue:Z,bgMagenta:Z,bgCyan:Z,bgWhite:Z,blackBright:Z,redBright:Z,greenBright:Z,yellowBright:Z,blueBright:Z,magentaBright:Z,cyanBright:Z,whiteBright:Z,bgBlackBright:Z,bgRedBright:Z,bgGreenBright:Z,bgYellowBright:Z,bgBlueBright:Z,bgMagentaBright:Z,bgCyanBright:Z,bgWhiteBright:Z}};wp.exports=_E();wp.exports.createColors=_E;var tP=wp.exports;const nP={},rP=Object.freeze(Object.defineProperty({__proto__:null,default:nP},Symbol.toStringTag,{value:"Module"})),Yt=R1(rP);let $y=tP,By=Yt,Md=class wE extends Error{constructor(e,n,r,i,s,o){super(e),this.name="CssSyntaxError",this.reason=e,s&&(this.file=s),i&&(this.source=i),o&&(this.plugin=o),typeof n<"u"&&typeof r<"u"&&(typeof n=="number"?(this.line=n,this.column=r):(this.line=n.line,this.column=n.column,this.endLine=r.line,this.endColumn=r.column)),this.setMessage(),Error.captureStackTrace&&Error.captureStackTrace(this,wE)}setMessage(){this.message=this.plugin?this.plugin+": ":"",this.message+=this.file?this.file:"<css input>",typeof this.line<"u"&&(this.message+=":"+this.line+":"+this.column),this.message+=": "+this.reason}showSourceCode(e){if(!this.source)return"";let n=this.source;e==null&&(e=$y.isColorSupported);let r=d=>d,i=d=>d,s=d=>d;if(e){let{bold:d,gray:p,red:m}=$y.createColors(!0);i=_=>d(m(_)),r=_=>p(_),By&&(s=_=>By(_))}let o=n.split(/\r?\n/),l=Math.max(this.line-3,0),u=Math.min(this.line+2,o.length),c=String(u).length;return o.slice(l,u).map((d,p)=>{let m=l+1+p,_=" "+(" "+m).slice(-c)+" | ";if(m===this.line){if(d.length>160){let k=20,C=Math.max(0,this.column-k),w=Math.max(this.column+k,this.endColumn+k),v=d.slice(C,w),I=r(_.replace(/\d/g," "))+d.slice(0,Math.min(this.column-1,k-1)).replace(/[^\t]/g," ");return i(">")+r(_)+s(v)+`
 `+I+i("^")}let A=r(_.replace(/\d/g," "))+d.slice(0,this.column-1).replace(/[^\t]/g," ");return i(">")+r(_)+s(d)+`
 `+A+i("^")}return" "+r(_)+s(d)}).join(`
`)}toString(){let e=this.showSourceCode();return e&&(e=`

`+e+`
`),this.name+": "+this.message+e}};var Ep=Md;Md.default=Md;const zy={after:`
`,beforeClose:`
`,beforeComment:`
`,beforeDecl:`
`,beforeOpen:" ",beforeRule:`
`,colon:": ",commentLeft:" ",commentRight:" ",emptyBody:"",indent:"    ",semicolon:!1};function iP(t){return t[0].toUpperCase()+t.slice(1)}let Vd=class{constructor(e){this.builder=e}atrule(e,n){let r="@"+e.name,i=e.params?this.rawValue(e,"params"):"";if(typeof e.raws.afterName<"u"?r+=e.raws.afterName:i&&(r+=" "),e.nodes)this.block(e,r+i);else{let s=(e.raws.between||"")+(n?";":"");this.builder(r+i+s,e)}}beforeAfter(e,n){let r;e.type==="decl"?r=this.raw(e,null,"beforeDecl"):e.type==="comment"?r=this.raw(e,null,"beforeComment"):n==="before"?r=this.raw(e,null,"beforeRule"):r=this.raw(e,null,"beforeClose");let i=e.parent,s=0;for(;i&&i.type!=="root";)s+=1,i=i.parent;if(r.includes(`
`)){let o=this.raw(e,null,"indent");if(o.length)for(let l=0;l<s;l++)r+=o}return r}block(e,n){let r=this.raw(e,"between","beforeOpen");this.builder(n+r+"{",e,"start");let i;e.nodes&&e.nodes.length?(this.body(e),i=this.raw(e,"after")):i=this.raw(e,"after","emptyBody"),i&&this.builder(i),this.builder("}",e,"end")}body(e){let n=e.nodes.length-1;for(;n>0&&e.nodes[n].type==="comment";)n-=1;let r=this.raw(e,"semicolon");for(let i=0;i<e.nodes.length;i++){let s=e.nodes[i],o=this.raw(s,"before");o&&this.builder(o),this.stringify(s,n!==i||r)}}comment(e){let n=this.raw(e,"left","commentLeft"),r=this.raw(e,"right","commentRight");this.builder("/*"+n+e.text+r+"*/",e)}decl(e,n){let r=this.raw(e,"between","colon"),i=e.prop+r+this.rawValue(e,"value");e.important&&(i+=e.raws.important||" !important"),n&&(i+=";"),this.builder(i,e)}document(e){this.body(e)}raw(e,n,r){let i;if(r||(r=n),n&&(i=e.raws[n],typeof i<"u"))return i;let s=e.parent;if(r==="before"&&(!s||s.type==="root"&&s.first===e||s&&s.type==="document"))return"";if(!s)return zy[r];let o=e.root();if(o.rawCache||(o.rawCache={}),typeof o.rawCache[r]<"u")return o.rawCache[r];if(r==="before"||r==="after")return this.beforeAfter(e,r);{let l="raw"+iP(r);this[l]?i=this[l](o,e):o.walk(u=>{if(i=u.raws[n],typeof i<"u")return!1})}return typeof i>"u"&&(i=zy[r]),o.rawCache[r]=i,i}rawBeforeClose(e){let n;return e.walk(r=>{if(r.nodes&&r.nodes.length>0&&typeof r.raws.after<"u")return n=r.raws.after,n.includes(`
`)&&(n=n.replace(/[^\n]+$/,"")),!1}),n&&(n=n.replace(/\S/g,"")),n}rawBeforeComment(e,n){let r;return e.walkComments(i=>{if(typeof i.raws.before<"u")return r=i.raws.before,r.includes(`
`)&&(r=r.replace(/[^\n]+$/,"")),!1}),typeof r>"u"?r=this.raw(n,null,"beforeDecl"):r&&(r=r.replace(/\S/g,"")),r}rawBeforeDecl(e,n){let r;return e.walkDecls(i=>{if(typeof i.raws.before<"u")return r=i.raws.before,r.includes(`
`)&&(r=r.replace(/[^\n]+$/,"")),!1}),typeof r>"u"?r=this.raw(n,null,"beforeRule"):r&&(r=r.replace(/\S/g,"")),r}rawBeforeOpen(e){let n;return e.walk(r=>{if(r.type!=="decl"&&(n=r.raws.between,typeof n<"u"))return!1}),n}rawBeforeRule(e){let n;return e.walk(r=>{if(r.nodes&&(r.parent!==e||e.first!==r)&&typeof r.raws.before<"u")return n=r.raws.before,n.includes(`
`)&&(n=n.replace(/[^\n]+$/,"")),!1}),n&&(n=n.replace(/\S/g,"")),n}rawColon(e){let n;return e.walkDecls(r=>{if(typeof r.raws.between<"u")return n=r.raws.between.replace(/[^\s:]/g,""),!1}),n}rawEmptyBody(e){let n;return e.walk(r=>{if(r.nodes&&r.nodes.length===0&&(n=r.raws.after,typeof n<"u"))return!1}),n}rawIndent(e){if(e.raws.indent)return e.raws.indent;let n;return e.walk(r=>{let i=r.parent;if(i&&i!==e&&i.parent&&i.parent===e&&typeof r.raws.before<"u"){let s=r.raws.before.split(`
`);return n=s[s.length-1],n=n.replace(/\S/g,""),!1}}),n}rawSemicolon(e){let n;return e.walk(r=>{if(r.nodes&&r.nodes.length&&r.last.type==="decl"&&(n=r.raws.semicolon,typeof n<"u"))return!1}),n}rawValue(e,n){let r=e[n],i=e.raws[n];return i&&i.value===r?i.raw:r}root(e){this.body(e),e.raws.after&&this.builder(e.raws.after)}rule(e){this.block(e,this.rawValue(e,"selector")),e.raws.ownSemicolon&&this.builder(e.raws.ownSemicolon,e,"end")}stringify(e,n){if(!this[e.type])throw new Error("Unknown AST node type "+e.type+". Maybe you need to change PostCSS stringifier.");this[e.type](e,n)}};var EE=Vd;Vd.default=Vd;let sP=EE;function Fd(t,e){new sP(e).stringify(t)}var ec=Fd;Fd.default=Fd;var la={};la.isClean=Symbol("isClean");la.my=Symbol("my");let oP=Ep,aP=EE,lP=ec,{isClean:zs,my:uP}=la;function Ud(t,e){let n=new t.constructor;for(let r in t){if(!Object.prototype.hasOwnProperty.call(t,r)||r==="proxyCache")continue;let i=t[r],s=typeof i;r==="parent"&&s==="object"?e&&(n[r]=e):r==="source"?n[r]=i:Array.isArray(i)?n[r]=i.map(o=>Ud(o,n)):(s==="object"&&i!==null&&(i=Ud(i)),n[r]=i)}return n}function Ws(t,e){if(e&&typeof e.offset<"u")return e.offset;let n=1,r=1,i=0;for(let s=0;s<t.length;s++){if(r===e.line&&n===e.column){i=s;break}t[s]===`
`?(n=1,r+=1):n+=1}return i}let jd=class{constructor(e={}){this.raws={},this[zs]=!1,this[uP]=!0;for(let n in e)if(n==="nodes"){this.nodes=[];for(let r of e[n])typeof r.clone=="function"?this.append(r.clone()):this.append(r)}else this[n]=e[n]}addToError(e){if(e.postcssNode=this,e.stack&&this.source&&/\n\s{4}at /.test(e.stack)){let n=this.source;e.stack=e.stack.replace(/\n\s{4}at /,`$&${n.input.from}:${n.start.line}:${n.start.column}$&`)}return e}after(e){return this.parent.insertAfter(this,e),this}assign(e={}){for(let n in e)this[n]=e[n];return this}before(e){return this.parent.insertBefore(this,e),this}cleanRaws(e){delete this.raws.before,delete this.raws.after,e||delete this.raws.between}clone(e={}){let n=Ud(this);for(let r in e)n[r]=e[r];return n}cloneAfter(e={}){let n=this.clone(e);return this.parent.insertAfter(this,n),n}cloneBefore(e={}){let n=this.clone(e);return this.parent.insertBefore(this,n),n}error(e,n={}){if(this.source){let{end:r,start:i}=this.rangeBy(n);return this.source.input.error(e,{column:i.column,line:i.line},{column:r.column,line:r.line},n)}return new oP(e)}getProxyProcessor(){return{get(e,n){return n==="proxyOf"?e:n==="root"?()=>e.root().toProxy():e[n]},set(e,n,r){return e[n]===r||(e[n]=r,(n==="prop"||n==="value"||n==="name"||n==="params"||n==="important"||n==="text")&&e.markDirty()),!0}}}markClean(){this[zs]=!0}markDirty(){if(this[zs]){this[zs]=!1;let e=this;for(;e=e.parent;)e[zs]=!1}}next(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e+1]}positionBy(e){let n=this.source.start;if(e.index)n=this.positionInside(e.index);else if(e.word){let i=this.source.input.css.slice(Ws(this.source.input.css,this.source.start),Ws(this.source.input.css,this.source.end)).indexOf(e.word);i!==-1&&(n=this.positionInside(i))}return n}positionInside(e){let n=this.source.start.column,r=this.source.start.line,i=Ws(this.source.input.css,this.source.start),s=i+e;for(let o=i;o<s;o++)this.source.input.css[o]===`
`?(n=1,r+=1):n+=1;return{column:n,line:r}}prev(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e-1]}rangeBy(e){let n={column:this.source.start.column,line:this.source.start.line},r=this.source.end?{column:this.source.end.column+1,line:this.source.end.line}:{column:n.column+1,line:n.line};if(e.word){let s=this.source.input.css.slice(Ws(this.source.input.css,this.source.start),Ws(this.source.input.css,this.source.end)).indexOf(e.word);s!==-1&&(n=this.positionInside(s),r=this.positionInside(s+e.word.length))}else e.start?n={column:e.start.column,line:e.start.line}:e.index&&(n=this.positionInside(e.index)),e.end?r={column:e.end.column,line:e.end.line}:typeof e.endIndex=="number"?r=this.positionInside(e.endIndex):e.index&&(r=this.positionInside(e.index+1));return(r.line<n.line||r.line===n.line&&r.column<=n.column)&&(r={column:n.column+1,line:n.line}),{end:r,start:n}}raw(e,n){return new aP().raw(this,e,n)}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}replaceWith(...e){if(this.parent){let n=this,r=!1;for(let i of e)i===this?r=!0:r?(this.parent.insertAfter(n,i),n=i):this.parent.insertBefore(n,i);r||this.remove()}return this}root(){let e=this;for(;e.parent&&e.parent.type!=="document";)e=e.parent;return e}toJSON(e,n){let r={},i=n==null;n=n||new Map;let s=0;for(let o in this){if(!Object.prototype.hasOwnProperty.call(this,o)||o==="parent"||o==="proxyCache")continue;let l=this[o];if(Array.isArray(l))r[o]=l.map(u=>typeof u=="object"&&u.toJSON?u.toJSON(null,n):u);else if(typeof l=="object"&&l.toJSON)r[o]=l.toJSON(null,n);else if(o==="source"){let u=n.get(l.input);u==null&&(u=s,n.set(l.input,s),s++),r[o]={end:l.end,inputId:u,start:l.start}}else r[o]=l}return i&&(r.inputs=[...n.keys()].map(o=>o.toJSON())),r}toProxy(){return this.proxyCache||(this.proxyCache=new Proxy(this,this.getProxyProcessor())),this.proxyCache}toString(e=lP){e.stringify&&(e=e.stringify);let n="";return e(this,r=>{n+=r}),n}warn(e,n,r){let i={node:this};for(let s in r)i[s]=r[s];return e.warn(n,i)}get proxyOf(){return this}};var tc=jd;jd.default=jd;let cP=tc,$d=class extends cP{constructor(e){super(e),this.type="comment"}};var nc=$d;$d.default=$d;let hP=tc,Bd=class extends hP{constructor(e){e&&typeof e.value<"u"&&typeof e.value!="string"&&(e={...e,value:String(e.value)}),super(e),this.type="decl"}get variable(){return this.prop.startsWith("--")||this.prop[0]==="$"}};var rc=Bd;Bd.default=Bd;let TE=nc,IE=rc,dP=tc,{isClean:SE,my:CE}=la,Tp,RE,AE,Ip;function PE(t){return t.map(e=>(e.nodes&&(e.nodes=PE(e.nodes)),delete e.source,e))}function kE(t){if(t[SE]=!1,t.proxyOf.nodes)for(let e of t.proxyOf.nodes)kE(e)}let bn=class xE extends dP{append(...e){for(let n of e){let r=this.normalize(n,this.last);for(let i of r)this.proxyOf.nodes.push(i)}return this.markDirty(),this}cleanRaws(e){if(super.cleanRaws(e),this.nodes)for(let n of this.nodes)n.cleanRaws(e)}each(e){if(!this.proxyOf.nodes)return;let n=this.getIterator(),r,i;for(;this.indexes[n]<this.proxyOf.nodes.length&&(r=this.indexes[n],i=e(this.proxyOf.nodes[r],r),i!==!1);)this.indexes[n]+=1;return delete this.indexes[n],i}every(e){return this.nodes.every(e)}getIterator(){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach+=1;let e=this.lastEach;return this.indexes[e]=0,e}getProxyProcessor(){return{get(e,n){return n==="proxyOf"?e:e[n]?n==="each"||typeof n=="string"&&n.startsWith("walk")?(...r)=>e[n](...r.map(i=>typeof i=="function"?(s,o)=>i(s.toProxy(),o):i)):n==="every"||n==="some"?r=>e[n]((i,...s)=>r(i.toProxy(),...s)):n==="root"?()=>e.root().toProxy():n==="nodes"?e.nodes.map(r=>r.toProxy()):n==="first"||n==="last"?e[n].toProxy():e[n]:e[n]},set(e,n,r){return e[n]===r||(e[n]=r,(n==="name"||n==="params"||n==="selector")&&e.markDirty()),!0}}}index(e){return typeof e=="number"?e:(e.proxyOf&&(e=e.proxyOf),this.proxyOf.nodes.indexOf(e))}insertAfter(e,n){let r=this.index(e),i=this.normalize(n,this.proxyOf.nodes[r]).reverse();r=this.index(e);for(let o of i)this.proxyOf.nodes.splice(r+1,0,o);let s;for(let o in this.indexes)s=this.indexes[o],r<s&&(this.indexes[o]=s+i.length);return this.markDirty(),this}insertBefore(e,n){let r=this.index(e),i=r===0?"prepend":!1,s=this.normalize(n,this.proxyOf.nodes[r],i).reverse();r=this.index(e);for(let l of s)this.proxyOf.nodes.splice(r,0,l);let o;for(let l in this.indexes)o=this.indexes[l],r<=o&&(this.indexes[l]=o+s.length);return this.markDirty(),this}normalize(e,n){if(typeof e=="string")e=PE(RE(e).nodes);else if(typeof e>"u")e=[];else if(Array.isArray(e)){e=e.slice(0);for(let i of e)i.parent&&i.parent.removeChild(i,"ignore")}else if(e.type==="root"&&this.type!=="document"){e=e.nodes.slice(0);for(let i of e)i.parent&&i.parent.removeChild(i,"ignore")}else if(e.type)e=[e];else if(e.prop){if(typeof e.value>"u")throw new Error("Value field is missed in node creation");typeof e.value!="string"&&(e.value=String(e.value)),e=[new IE(e)]}else if(e.selector||e.selectors)e=[new Ip(e)];else if(e.name)e=[new Tp(e)];else if(e.text)e=[new TE(e)];else throw new Error("Unknown node type in node creation");return e.map(i=>(i[CE]||xE.rebuild(i),i=i.proxyOf,i.parent&&i.parent.removeChild(i),i[SE]&&kE(i),i.raws||(i.raws={}),typeof i.raws.before>"u"&&n&&typeof n.raws.before<"u"&&(i.raws.before=n.raws.before.replace(/\S/g,"")),i.parent=this.proxyOf,i))}prepend(...e){e=e.reverse();for(let n of e){let r=this.normalize(n,this.first,"prepend").reverse();for(let i of r)this.proxyOf.nodes.unshift(i);for(let i in this.indexes)this.indexes[i]=this.indexes[i]+r.length}return this.markDirty(),this}push(e){return e.parent=this,this.proxyOf.nodes.push(e),this}removeAll(){for(let e of this.proxyOf.nodes)e.parent=void 0;return this.proxyOf.nodes=[],this.markDirty(),this}removeChild(e){e=this.index(e),this.proxyOf.nodes[e].parent=void 0,this.proxyOf.nodes.splice(e,1);let n;for(let r in this.indexes)n=this.indexes[r],n>=e&&(this.indexes[r]=n-1);return this.markDirty(),this}replaceValues(e,n,r){return r||(r=n,n={}),this.walkDecls(i=>{n.props&&!n.props.includes(i.prop)||n.fast&&!i.value.includes(n.fast)||(i.value=i.value.replace(e,r))}),this.markDirty(),this}some(e){return this.nodes.some(e)}walk(e){return this.each((n,r)=>{let i;try{i=e(n,r)}catch(s){throw n.addToError(s)}return i!==!1&&n.walk&&(i=n.walk(e)),i})}walkAtRules(e,n){return n?e instanceof RegExp?this.walk((r,i)=>{if(r.type==="atrule"&&e.test(r.name))return n(r,i)}):this.walk((r,i)=>{if(r.type==="atrule"&&r.name===e)return n(r,i)}):(n=e,this.walk((r,i)=>{if(r.type==="atrule")return n(r,i)}))}walkComments(e){return this.walk((n,r)=>{if(n.type==="comment")return e(n,r)})}walkDecls(e,n){return n?e instanceof RegExp?this.walk((r,i)=>{if(r.type==="decl"&&e.test(r.prop))return n(r,i)}):this.walk((r,i)=>{if(r.type==="decl"&&r.prop===e)return n(r,i)}):(n=e,this.walk((r,i)=>{if(r.type==="decl")return n(r,i)}))}walkRules(e,n){return n?e instanceof RegExp?this.walk((r,i)=>{if(r.type==="rule"&&e.test(r.selector))return n(r,i)}):this.walk((r,i)=>{if(r.type==="rule"&&r.selector===e)return n(r,i)}):(n=e,this.walk((r,i)=>{if(r.type==="rule")return n(r,i)}))}get first(){if(this.proxyOf.nodes)return this.proxyOf.nodes[0]}get last(){if(this.proxyOf.nodes)return this.proxyOf.nodes[this.proxyOf.nodes.length-1]}};bn.registerParse=t=>{RE=t};bn.registerRule=t=>{Ip=t};bn.registerAtRule=t=>{Tp=t};bn.registerRoot=t=>{AE=t};var li=bn;bn.default=bn;bn.rebuild=t=>{t.type==="atrule"?Object.setPrototypeOf(t,Tp.prototype):t.type==="rule"?Object.setPrototypeOf(t,Ip.prototype):t.type==="decl"?Object.setPrototypeOf(t,IE.prototype):t.type==="comment"?Object.setPrototypeOf(t,TE.prototype):t.type==="root"&&Object.setPrototypeOf(t,AE.prototype),t[CE]=!0,t.nodes&&t.nodes.forEach(e=>{bn.rebuild(e)})};let NE=li,fu=class extends NE{constructor(e){super(e),this.type="atrule"}append(...e){return this.proxyOf.nodes||(this.nodes=[]),super.append(...e)}prepend(...e){return this.proxyOf.nodes||(this.nodes=[]),super.prepend(...e)}};var Sp=fu;fu.default=fu;NE.registerAtRule(fu);let fP=li,OE,DE,jo=class extends fP{constructor(e){super({type:"document",...e}),this.nodes||(this.nodes=[])}toResult(e={}){return new OE(new DE,this,e).stringify()}};jo.registerLazyResult=t=>{OE=t};jo.registerProcessor=t=>{DE=t};var Cp=jo;jo.default=jo;let pP="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",mP=(t,e=21)=>(n=e)=>{let r="",i=n;for(;i--;)r+=t[Math.random()*t.length|0];return r},gP=(t=21)=>{let e="",n=t;for(;n--;)e+=pP[Math.random()*64|0];return e};var yP={nanoid:gP,customAlphabet:mP};let{existsSync:vP,readFileSync:_P}=Yt,{dirname:Ih,join:wP}=Yt,{SourceMapConsumer:Wy,SourceMapGenerator:Hy}=Yt;function EP(t){return Buffer?Buffer.from(t,"base64").toString():window.atob(t)}let zd=class{constructor(e,n){if(n.map===!1)return;this.loadAnnotation(e),this.inline=this.startWith(this.annotation,"data:");let r=n.map?n.map.prev:void 0,i=this.loadMap(n.from,r);!this.mapFile&&n.from&&(this.mapFile=n.from),this.mapFile&&(this.root=Ih(this.mapFile)),i&&(this.text=i)}consumer(){return this.consumerCache||(this.consumerCache=new Wy(this.text)),this.consumerCache}decodeInline(e){let n=/^data:application\/json;charset=utf-?8;base64,/,r=/^data:application\/json;base64,/,i=/^data:application\/json;charset=utf-?8,/,s=/^data:application\/json,/,o=e.match(i)||e.match(s);if(o)return decodeURIComponent(e.substr(o[0].length));let l=e.match(n)||e.match(r);if(l)return EP(e.substr(l[0].length));let u=e.match(/data:application\/json;([^,]+),/)[1];throw new Error("Unsupported source map encoding "+u)}getAnnotationURL(e){return e.replace(/^\/\*\s*# sourceMappingURL=/,"").trim()}isMap(e){return typeof e!="object"?!1:typeof e.mappings=="string"||typeof e._mappings=="string"||Array.isArray(e.sections)}loadAnnotation(e){let n=e.match(/\/\*\s*# sourceMappingURL=/g);if(!n)return;let r=e.lastIndexOf(n.pop()),i=e.indexOf("*/",r);r>-1&&i>-1&&(this.annotation=this.getAnnotationURL(e.substring(r,i)))}loadFile(e){if(this.root=Ih(e),vP(e))return this.mapFile=e,_P(e,"utf-8").toString().trim()}loadMap(e,n){if(n===!1)return!1;if(n){if(typeof n=="string")return n;if(typeof n=="function"){let r=n(e);if(r){let i=this.loadFile(r);if(!i)throw new Error("Unable to load previous source map: "+r.toString());return i}}else{if(n instanceof Wy)return Hy.fromSourceMap(n).toString();if(n instanceof Hy)return n.toString();if(this.isMap(n))return JSON.stringify(n);throw new Error("Unsupported previous source map format: "+n.toString())}}else{if(this.inline)return this.decodeInline(this.annotation);if(this.annotation){let r=this.annotation;return e&&(r=wP(Ih(e),r)),this.loadFile(r)}}}startWith(e,n){return e?e.substr(0,n.length)===n:!1}withContent(){return!!(this.consumer().sourcesContent&&this.consumer().sourcesContent.length>0)}};var bE=zd;zd.default=zd;let{nanoid:TP}=yP,{isAbsolute:Wd,resolve:Hd}=Yt,{SourceMapConsumer:IP,SourceMapGenerator:SP}=Yt,{fileURLToPath:qy,pathToFileURL:nl}=Yt,Gy=Ep,CP=bE,Sh=Yt,Ch=Symbol("fromOffsetCache"),RP=!!(IP&&SP),Ky=!!(Hd&&Wd),pu=class{constructor(e,n={}){if(e===null||typeof e>"u"||typeof e=="object"&&!e.toString)throw new Error(`PostCSS received ${e} instead of CSS string`);if(this.css=e.toString(),this.css[0]==="\uFEFF"||this.css[0]==="￾"?(this.hasBOM=!0,this.css=this.css.slice(1)):this.hasBOM=!1,n.from&&(!Ky||/^\w+:\/\//.test(n.from)||Wd(n.from)?this.file=n.from:this.file=Hd(n.from)),Ky&&RP){let r=new CP(this.css,n);if(r.text){this.map=r;let i=r.consumer().file;!this.file&&i&&(this.file=this.mapResolve(i))}}this.file||(this.id="<input css "+TP(6)+">"),this.map&&(this.map.file=this.from)}error(e,n,r,i={}){let s,o,l;if(n&&typeof n=="object"){let c=n,d=r;if(typeof c.offset=="number"){let p=this.fromOffset(c.offset);n=p.line,r=p.col}else n=c.line,r=c.column;if(typeof d.offset=="number"){let p=this.fromOffset(d.offset);o=p.line,s=p.col}else o=d.line,s=d.column}else if(!r){let c=this.fromOffset(n);n=c.line,r=c.col}let u=this.origin(n,r,o,s);return u?l=new Gy(e,u.endLine===void 0?u.line:{column:u.column,line:u.line},u.endLine===void 0?u.column:{column:u.endColumn,line:u.endLine},u.source,u.file,i.plugin):l=new Gy(e,o===void 0?n:{column:r,line:n},o===void 0?r:{column:s,line:o},this.css,this.file,i.plugin),l.input={column:r,endColumn:s,endLine:o,line:n,source:this.css},this.file&&(nl&&(l.input.url=nl(this.file).toString()),l.input.file=this.file),l}fromOffset(e){let n,r;if(this[Ch])r=this[Ch];else{let s=this.css.split(`
`);r=new Array(s.length);let o=0;for(let l=0,u=s.length;l<u;l++)r[l]=o,o+=s[l].length+1;this[Ch]=r}n=r[r.length-1];let i=0;if(e>=n)i=r.length-1;else{let s=r.length-2,o;for(;i<s;)if(o=i+(s-i>>1),e<r[o])s=o-1;else if(e>=r[o+1])i=o+1;else{i=o;break}}return{col:e-r[i]+1,line:i+1}}mapResolve(e){return/^\w+:\/\//.test(e)?e:Hd(this.map.consumer().sourceRoot||this.map.root||".",e)}origin(e,n,r,i){if(!this.map)return!1;let s=this.map.consumer(),o=s.originalPositionFor({column:n,line:e});if(!o.source)return!1;let l;typeof r=="number"&&(l=s.originalPositionFor({column:i,line:r}));let u;Wd(o.source)?u=nl(o.source):u=new URL(o.source,this.map.consumer().sourceRoot||nl(this.map.mapFile));let c={column:o.column,endColumn:l&&l.column,endLine:l&&l.line,line:o.line,url:u.toString()};if(u.protocol==="file:")if(qy)c.file=qy(u);else throw new Error("file: protocol is not available in this PostCSS build");let d=s.sourceContentFor(o.source);return d&&(c.source=d),c}toJSON(){let e={};for(let n of["hasBOM","css","file","id"])this[n]!=null&&(e[n]=this[n]);return this.map&&(e.map={...this.map},e.map.consumerCache&&(e.map.consumerCache=void 0)),e}get from(){return this.file||this.id}};var ic=pu;pu.default=pu;Sh&&Sh.registerInput&&Sh.registerInput(pu);let LE=li,ME,VE,ts=class extends LE{constructor(e){super(e),this.type="root",this.nodes||(this.nodes=[])}normalize(e,n,r){let i=super.normalize(e);if(n){if(r==="prepend")this.nodes.length>1?n.raws.before=this.nodes[1].raws.before:delete n.raws.before;else if(this.first!==n)for(let s of i)s.raws.before=n.raws.before}return i}removeChild(e,n){let r=this.index(e);return!n&&r===0&&this.nodes.length>1&&(this.nodes[1].raws.before=this.nodes[r].raws.before),super.removeChild(e)}toResult(e={}){return new ME(new VE,this,e).stringify()}};ts.registerLazyResult=t=>{ME=t};ts.registerProcessor=t=>{VE=t};var ua=ts;ts.default=ts;LE.registerRoot(ts);let $o={comma(t){return $o.split(t,[","],!0)},space(t){let e=[" ",`
`,"	"];return $o.split(t,e)},split(t,e,n){let r=[],i="",s=!1,o=0,l=!1,u="",c=!1;for(let d of t)c?c=!1:d==="\\"?c=!0:l?d===u&&(l=!1):d==='"'||d==="'"?(l=!0,u=d):d==="("?o+=1:d===")"?o>0&&(o-=1):o===0&&e.includes(d)&&(s=!0),s?(i!==""&&r.push(i.trim()),i="",s=!1):i+=d;return(n||i!=="")&&r.push(i.trim()),r}};var FE=$o;$o.default=$o;let UE=li,AP=FE,mu=class extends UE{constructor(e){super(e),this.type="rule",this.nodes||(this.nodes=[])}get selectors(){return AP.comma(this.selector)}set selectors(e){let n=this.selector?this.selector.match(/,\s*/):null,r=n?n[0]:","+this.raw("between","beforeOpen");this.selector=e.join(r)}};var Rp=mu;mu.default=mu;UE.registerRule(mu);let PP=Sp,kP=nc,xP=rc,NP=ic,OP=bE,DP=ua,bP=Rp;function Bo(t,e){if(Array.isArray(t))return t.map(i=>Bo(i));let{inputs:n,...r}=t;if(n){e=[];for(let i of n){let s={...i,__proto__:NP.prototype};s.map&&(s.map={...s.map,__proto__:OP.prototype}),e.push(s)}}if(r.nodes&&(r.nodes=t.nodes.map(i=>Bo(i,e))),r.source){let{inputId:i,...s}=r.source;r.source=s,i!=null&&(r.source.input=e[i])}if(r.type==="root")return new DP(r);if(r.type==="decl")return new xP(r);if(r.type==="rule")return new bP(r);if(r.type==="comment")return new kP(r);if(r.type==="atrule")return new PP(r);throw new Error("Unknown node type: "+t.type)}var LP=Bo;Bo.default=Bo;let{dirname:Pl,relative:jE,resolve:$E,sep:BE}=Yt,{SourceMapConsumer:zE,SourceMapGenerator:kl}=Yt,{pathToFileURL:Qy}=Yt,MP=ic,VP=!!(zE&&kl),FP=!!(Pl&&$E&&jE&&BE),UP=class{constructor(e,n,r,i){this.stringify=e,this.mapOpts=r.map||{},this.root=n,this.opts=r,this.css=i,this.originalCSS=i,this.usesFileUrls=!this.mapOpts.from&&this.mapOpts.absolute,this.memoizedFileURLs=new Map,this.memoizedPaths=new Map,this.memoizedURLs=new Map}addAnnotation(){let e;this.isInline()?e="data:application/json;base64,"+this.toBase64(this.map.toString()):typeof this.mapOpts.annotation=="string"?e=this.mapOpts.annotation:typeof this.mapOpts.annotation=="function"?e=this.mapOpts.annotation(this.opts.to,this.root):e=this.outputFile()+".map";let n=`
`;this.css.includes(`\r
`)&&(n=`\r
`),this.css+=n+"/*# sourceMappingURL="+e+" */"}applyPrevMaps(){for(let e of this.previous()){let n=this.toUrl(this.path(e.file)),r=e.root||Pl(e.file),i;this.mapOpts.sourcesContent===!1?(i=new zE(e.text),i.sourcesContent&&(i.sourcesContent=null)):i=e.consumer(),this.map.applySourceMap(i,n,this.toUrl(this.path(r)))}}clearAnnotation(){if(this.mapOpts.annotation!==!1)if(this.root){let e;for(let n=this.root.nodes.length-1;n>=0;n--)e=this.root.nodes[n],e.type==="comment"&&e.text.startsWith("# sourceMappingURL=")&&this.root.removeChild(n)}else this.css&&(this.css=this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm,""))}generate(){if(this.clearAnnotation(),FP&&VP&&this.isMap())return this.generateMap();{let e="";return this.stringify(this.root,n=>{e+=n}),[e]}}generateMap(){if(this.root)this.generateString();else if(this.previous().length===1){let e=this.previous()[0].consumer();e.file=this.outputFile(),this.map=kl.fromSourceMap(e,{ignoreInvalidMapping:!0})}else this.map=new kl({file:this.outputFile(),ignoreInvalidMapping:!0}),this.map.addMapping({generated:{column:0,line:1},original:{column:0,line:1},source:this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>"});return this.isSourcesContent()&&this.setSourcesContent(),this.root&&this.previous().length>0&&this.applyPrevMaps(),this.isAnnotation()&&this.addAnnotation(),this.isInline()?[this.css]:[this.css,this.map]}generateString(){this.css="",this.map=new kl({file:this.outputFile(),ignoreInvalidMapping:!0});let e=1,n=1,r="<no source>",i={generated:{column:0,line:0},original:{column:0,line:0},source:""},s,o;this.stringify(this.root,(l,u,c)=>{if(this.css+=l,u&&c!=="end"&&(i.generated.line=e,i.generated.column=n-1,u.source&&u.source.start?(i.source=this.sourcePath(u),i.original.line=u.source.start.line,i.original.column=u.source.start.column-1,this.map.addMapping(i)):(i.source=r,i.original.line=1,i.original.column=0,this.map.addMapping(i))),o=l.match(/\n/g),o?(e+=o.length,s=l.lastIndexOf(`
`),n=l.length-s):n+=l.length,u&&c!=="start"){let d=u.parent||{raws:{}};(!(u.type==="decl"||u.type==="atrule"&&!u.nodes)||u!==d.last||d.raws.semicolon)&&(u.source&&u.source.end?(i.source=this.sourcePath(u),i.original.line=u.source.end.line,i.original.column=u.source.end.column-1,i.generated.line=e,i.generated.column=n-2,this.map.addMapping(i)):(i.source=r,i.original.line=1,i.original.column=0,i.generated.line=e,i.generated.column=n-1,this.map.addMapping(i)))}})}isAnnotation(){return this.isInline()?!0:typeof this.mapOpts.annotation<"u"?this.mapOpts.annotation:this.previous().length?this.previous().some(e=>e.annotation):!0}isInline(){if(typeof this.mapOpts.inline<"u")return this.mapOpts.inline;let e=this.mapOpts.annotation;return typeof e<"u"&&e!==!0?!1:this.previous().length?this.previous().some(n=>n.inline):!0}isMap(){return typeof this.opts.map<"u"?!!this.opts.map:this.previous().length>0}isSourcesContent(){return typeof this.mapOpts.sourcesContent<"u"?this.mapOpts.sourcesContent:this.previous().length?this.previous().some(e=>e.withContent()):!0}outputFile(){return this.opts.to?this.path(this.opts.to):this.opts.from?this.path(this.opts.from):"to.css"}path(e){if(this.mapOpts.absolute||e.charCodeAt(0)===60||/^\w+:\/\//.test(e))return e;let n=this.memoizedPaths.get(e);if(n)return n;let r=this.opts.to?Pl(this.opts.to):".";typeof this.mapOpts.annotation=="string"&&(r=Pl($E(r,this.mapOpts.annotation)));let i=jE(r,e);return this.memoizedPaths.set(e,i),i}previous(){if(!this.previousMaps)if(this.previousMaps=[],this.root)this.root.walk(e=>{if(e.source&&e.source.input.map){let n=e.source.input.map;this.previousMaps.includes(n)||this.previousMaps.push(n)}});else{let e=new MP(this.originalCSS,this.opts);e.map&&this.previousMaps.push(e.map)}return this.previousMaps}setSourcesContent(){let e={};if(this.root)this.root.walk(n=>{if(n.source){let r=n.source.input.from;if(r&&!e[r]){e[r]=!0;let i=this.usesFileUrls?this.toFileUrl(r):this.toUrl(this.path(r));this.map.setSourceContent(i,n.source.input.css)}}});else if(this.css){let n=this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>";this.map.setSourceContent(n,this.css)}}sourcePath(e){return this.mapOpts.from?this.toUrl(this.mapOpts.from):this.usesFileUrls?this.toFileUrl(e.source.input.from):this.toUrl(this.path(e.source.input.from))}toBase64(e){return Buffer?Buffer.from(e).toString("base64"):window.btoa(unescape(encodeURIComponent(e)))}toFileUrl(e){let n=this.memoizedFileURLs.get(e);if(n)return n;if(Qy){let r=Qy(e).toString();return this.memoizedFileURLs.set(e,r),r}else throw new Error("`map.absolute` option is not available in this PostCSS build")}toUrl(e){let n=this.memoizedURLs.get(e);if(n)return n;BE==="\\"&&(e=e.replace(/\\/g,"/"));let r=encodeURI(e).replace(/[#?]/g,encodeURIComponent);return this.memoizedURLs.set(e,r),r}};var WE=UP;const Rh=39,Yy=34,rl=92,Jy=47,il=10,Hs=32,sl=12,ol=9,al=13,jP=91,$P=93,BP=40,zP=41,WP=123,HP=125,qP=59,GP=42,KP=58,QP=64,ll=/[\t\n\f\r "#'()/;[\\\]{}]/g,ul=/[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,YP=/.[\r\n"'(/\\]/,Xy=/[\da-f]/i;var JP=function(e,n={}){let r=e.css.valueOf(),i=n.ignoreErrors,s,o,l,u,c,d,p,m,_,A,k=r.length,C=0,w=[],v=[];function I(){return C}function D(y){throw e.error("Unclosed "+y,C)}function V(){return v.length===0&&C>=k}function j(y){if(v.length)return v.pop();if(C>=k)return;let E=y?y.ignoreUnclosed:!1;switch(s=r.charCodeAt(C),s){case il:case Hs:case ol:case al:case sl:{u=C;do u+=1,s=r.charCodeAt(u);while(s===Hs||s===il||s===ol||s===al||s===sl);d=["space",r.slice(C,u)],C=u-1;break}case jP:case $P:case WP:case HP:case KP:case qP:case zP:{let S=String.fromCharCode(s);d=[S,S,C];break}case BP:{if(A=w.length?w.pop()[1]:"",_=r.charCodeAt(C+1),A==="url"&&_!==Rh&&_!==Yy&&_!==Hs&&_!==il&&_!==ol&&_!==sl&&_!==al){u=C;do{if(p=!1,u=r.indexOf(")",u+1),u===-1)if(i||E){u=C;break}else D("bracket");for(m=u;r.charCodeAt(m-1)===rl;)m-=1,p=!p}while(p);d=["brackets",r.slice(C,u+1),C,u],C=u}else u=r.indexOf(")",C+1),o=r.slice(C,u+1),u===-1||YP.test(o)?d=["(","(",C]:(d=["brackets",o,C,u],C=u);break}case Rh:case Yy:{c=s===Rh?"'":'"',u=C;do{if(p=!1,u=r.indexOf(c,u+1),u===-1)if(i||E){u=C+1;break}else D("string");for(m=u;r.charCodeAt(m-1)===rl;)m-=1,p=!p}while(p);d=["string",r.slice(C,u+1),C,u],C=u;break}case QP:{ll.lastIndex=C+1,ll.test(r),ll.lastIndex===0?u=r.length-1:u=ll.lastIndex-2,d=["at-word",r.slice(C,u+1),C,u],C=u;break}case rl:{for(u=C,l=!0;r.charCodeAt(u+1)===rl;)u+=1,l=!l;if(s=r.charCodeAt(u+1),l&&s!==Jy&&s!==Hs&&s!==il&&s!==ol&&s!==al&&s!==sl&&(u+=1,Xy.test(r.charAt(u)))){for(;Xy.test(r.charAt(u+1));)u+=1;r.charCodeAt(u+1)===Hs&&(u+=1)}d=["word",r.slice(C,u+1),C,u],C=u;break}default:{s===Jy&&r.charCodeAt(C+1)===GP?(u=r.indexOf("*/",C+2)+1,u===0&&(i||E?u=r.length:D("comment")),d=["comment",r.slice(C,u+1),C,u],C=u):(ul.lastIndex=C+1,ul.test(r),ul.lastIndex===0?u=r.length-1:u=ul.lastIndex-2,d=["word",r.slice(C,u+1),C,u],w.push(d),C=u);break}}return C++,d}function T(y){v.push(y)}return{back:T,endOfFile:V,nextToken:j,position:I}};let XP=Sp,ZP=nc,ek=rc,tk=ua,Zy=Rp,nk=JP;const ev={empty:!0,space:!0};function rk(t){for(let e=t.length-1;e>=0;e--){let n=t[e],r=n[3]||n[2];if(r)return r}}let ik=class{constructor(e){this.input=e,this.root=new tk,this.current=this.root,this.spaces="",this.semicolon=!1,this.createTokenizer(),this.root.source={input:e,start:{column:1,line:1,offset:0}}}atrule(e){let n=new XP;n.name=e[1].slice(1),n.name===""&&this.unnamedAtrule(n,e),this.init(n,e[2]);let r,i,s,o=!1,l=!1,u=[],c=[];for(;!this.tokenizer.endOfFile();){if(e=this.tokenizer.nextToken(),r=e[0],r==="("||r==="["?c.push(r==="("?")":"]"):r==="{"&&c.length>0?c.push("}"):r===c[c.length-1]&&c.pop(),c.length===0)if(r===";"){n.source.end=this.getPosition(e[2]),n.source.end.offset++,this.semicolon=!0;break}else if(r==="{"){l=!0;break}else if(r==="}"){if(u.length>0){for(s=u.length-1,i=u[s];i&&i[0]==="space";)i=u[--s];i&&(n.source.end=this.getPosition(i[3]||i[2]),n.source.end.offset++)}this.end(e);break}else u.push(e);else u.push(e);if(this.tokenizer.endOfFile()){o=!0;break}}n.raws.between=this.spacesAndCommentsFromEnd(u),u.length?(n.raws.afterName=this.spacesAndCommentsFromStart(u),this.raw(n,"params",u),o&&(e=u[u.length-1],n.source.end=this.getPosition(e[3]||e[2]),n.source.end.offset++,this.spaces=n.raws.between,n.raws.between="")):(n.raws.afterName="",n.params=""),l&&(n.nodes=[],this.current=n)}checkMissedSemicolon(e){let n=this.colon(e);if(n===!1)return;let r=0,i;for(let s=n-1;s>=0&&(i=e[s],!(i[0]!=="space"&&(r+=1,r===2)));s--);throw this.input.error("Missed semicolon",i[0]==="word"?i[3]+1:i[2])}colon(e){let n=0,r,i,s;for(let[o,l]of e.entries()){if(i=l,s=i[0],s==="("&&(n+=1),s===")"&&(n-=1),n===0&&s===":")if(!r)this.doubleColon(i);else{if(r[0]==="word"&&r[1]==="progid")continue;return o}r=i}return!1}comment(e){let n=new ZP;this.init(n,e[2]),n.source.end=this.getPosition(e[3]||e[2]),n.source.end.offset++;let r=e[1].slice(2,-2);if(/^\s*$/.test(r))n.text="",n.raws.left=r,n.raws.right="";else{let i=r.match(/^(\s*)([^]*\S)(\s*)$/);n.text=i[2],n.raws.left=i[1],n.raws.right=i[3]}}createTokenizer(){this.tokenizer=nk(this.input)}decl(e,n){let r=new ek;this.init(r,e[0][2]);let i=e[e.length-1];for(i[0]===";"&&(this.semicolon=!0,e.pop()),r.source.end=this.getPosition(i[3]||i[2]||rk(e)),r.source.end.offset++;e[0][0]!=="word";)e.length===1&&this.unknownWord(e),r.raws.before+=e.shift()[1];for(r.source.start=this.getPosition(e[0][2]),r.prop="";e.length;){let c=e[0][0];if(c===":"||c==="space"||c==="comment")break;r.prop+=e.shift()[1]}r.raws.between="";let s;for(;e.length;)if(s=e.shift(),s[0]===":"){r.raws.between+=s[1];break}else s[0]==="word"&&/\w/.test(s[1])&&this.unknownWord([s]),r.raws.between+=s[1];(r.prop[0]==="_"||r.prop[0]==="*")&&(r.raws.before+=r.prop[0],r.prop=r.prop.slice(1));let o=[],l;for(;e.length&&(l=e[0][0],!(l!=="space"&&l!=="comment"));)o.push(e.shift());this.precheckMissedSemicolon(e);for(let c=e.length-1;c>=0;c--){if(s=e[c],s[1].toLowerCase()==="!important"){r.important=!0;let d=this.stringFrom(e,c);d=this.spacesFromEnd(e)+d,d!==" !important"&&(r.raws.important=d);break}else if(s[1].toLowerCase()==="important"){let d=e.slice(0),p="";for(let m=c;m>0;m--){let _=d[m][0];if(p.trim().startsWith("!")&&_!=="space")break;p=d.pop()[1]+p}p.trim().startsWith("!")&&(r.important=!0,r.raws.important=p,e=d)}if(s[0]!=="space"&&s[0]!=="comment")break}e.some(c=>c[0]!=="space"&&c[0]!=="comment")&&(r.raws.between+=o.map(c=>c[1]).join(""),o=[]),this.raw(r,"value",o.concat(e),n),r.value.includes(":")&&!n&&this.checkMissedSemicolon(e)}doubleColon(e){throw this.input.error("Double colon",{offset:e[2]},{offset:e[2]+e[1].length})}emptyRule(e){let n=new Zy;this.init(n,e[2]),n.selector="",n.raws.between="",this.current=n}end(e){this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.semicolon=!1,this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.spaces="",this.current.parent?(this.current.source.end=this.getPosition(e[2]),this.current.source.end.offset++,this.current=this.current.parent):this.unexpectedClose(e)}endFile(){this.current.parent&&this.unclosedBlock(),this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.root.source.end=this.getPosition(this.tokenizer.position())}freeSemicolon(e){if(this.spaces+=e[1],this.current.nodes){let n=this.current.nodes[this.current.nodes.length-1];n&&n.type==="rule"&&!n.raws.ownSemicolon&&(n.raws.ownSemicolon=this.spaces,this.spaces="")}}getPosition(e){let n=this.input.fromOffset(e);return{column:n.col,line:n.line,offset:e}}init(e,n){this.current.push(e),e.source={input:this.input,start:this.getPosition(n)},e.raws.before=this.spaces,this.spaces="",e.type!=="comment"&&(this.semicolon=!1)}other(e){let n=!1,r=null,i=!1,s=null,o=[],l=e[1].startsWith("--"),u=[],c=e;for(;c;){if(r=c[0],u.push(c),r==="("||r==="[")s||(s=c),o.push(r==="("?")":"]");else if(l&&i&&r==="{")s||(s=c),o.push("}");else if(o.length===0)if(r===";")if(i){this.decl(u,l);return}else break;else if(r==="{"){this.rule(u);return}else if(r==="}"){this.tokenizer.back(u.pop()),n=!0;break}else r===":"&&(i=!0);else r===o[o.length-1]&&(o.pop(),o.length===0&&(s=null));c=this.tokenizer.nextToken()}if(this.tokenizer.endOfFile()&&(n=!0),o.length>0&&this.unclosedBracket(s),n&&i){if(!l)for(;u.length&&(c=u[u.length-1][0],!(c!=="space"&&c!=="comment"));)this.tokenizer.back(u.pop());this.decl(u,l)}else this.unknownWord(u)}parse(){let e;for(;!this.tokenizer.endOfFile();)switch(e=this.tokenizer.nextToken(),e[0]){case"space":this.spaces+=e[1];break;case";":this.freeSemicolon(e);break;case"}":this.end(e);break;case"comment":this.comment(e);break;case"at-word":this.atrule(e);break;case"{":this.emptyRule(e);break;default:this.other(e);break}this.endFile()}precheckMissedSemicolon(){}raw(e,n,r,i){let s,o,l=r.length,u="",c=!0,d,p;for(let m=0;m<l;m+=1)s=r[m],o=s[0],o==="space"&&m===l-1&&!i?c=!1:o==="comment"?(p=r[m-1]?r[m-1][0]:"empty",d=r[m+1]?r[m+1][0]:"empty",!ev[p]&&!ev[d]?u.slice(-1)===","?c=!1:u+=s[1]:c=!1):u+=s[1];if(!c){let m=r.reduce((_,A)=>_+A[1],"");e.raws[n]={raw:m,value:u}}e[n]=u}rule(e){e.pop();let n=new Zy;this.init(n,e[0][2]),n.raws.between=this.spacesAndCommentsFromEnd(e),this.raw(n,"selector",e),this.current=n}spacesAndCommentsFromEnd(e){let n,r="";for(;e.length&&(n=e[e.length-1][0],!(n!=="space"&&n!=="comment"));)r=e.pop()[1]+r;return r}spacesAndCommentsFromStart(e){let n,r="";for(;e.length&&(n=e[0][0],!(n!=="space"&&n!=="comment"));)r+=e.shift()[1];return r}spacesFromEnd(e){let n,r="";for(;e.length&&(n=e[e.length-1][0],n==="space");)r=e.pop()[1]+r;return r}stringFrom(e,n){let r="";for(let i=n;i<e.length;i++)r+=e[i][1];return e.splice(n,e.length-n),r}unclosedBlock(){let e=this.current.source.start;throw this.input.error("Unclosed block",e.line,e.column)}unclosedBracket(e){throw this.input.error("Unclosed bracket",{offset:e[2]},{offset:e[2]+1})}unexpectedClose(e){throw this.input.error("Unexpected }",{offset:e[2]},{offset:e[2]+1})}unknownWord(e){throw this.input.error("Unknown word",{offset:e[0][2]},{offset:e[0][2]+e[0][1].length})}unnamedAtrule(e,n){throw this.input.error("At-rule without name",{offset:n[2]},{offset:n[2]+n[1].length})}};var sk=ik;let ok=li,ak=ic,lk=sk;function gu(t,e){let n=new ak(t,e),r=new lk(n);try{r.parse()}catch(i){throw i}return r.root}var Ap=gu;gu.default=gu;ok.registerParse(gu);let qd=class{constructor(e,n={}){if(this.type="warning",this.text=e,n.node&&n.node.source){let r=n.node.rangeBy(n);this.line=r.start.line,this.column=r.start.column,this.endLine=r.end.line,this.endColumn=r.end.column}for(let r in n)this[r]=n[r]}toString(){return this.node?this.node.error(this.text,{index:this.index,plugin:this.plugin,word:this.word}).message:this.plugin?this.plugin+": "+this.text:this.text}};var HE=qd;qd.default=qd;let uk=HE,Gd=class{constructor(e,n,r){this.processor=e,this.messages=[],this.root=n,this.opts=r,this.css=void 0,this.map=void 0}toString(){return this.css}warn(e,n={}){n.plugin||this.lastPlugin&&this.lastPlugin.postcssPlugin&&(n.plugin=this.lastPlugin.postcssPlugin);let r=new uk(e,n);return this.messages.push(r),r}warnings(){return this.messages.filter(e=>e.type==="warning")}get content(){return this.css}};var Pp=Gd;Gd.default=Gd;let ck=li,hk=Cp,dk=WE,fk=Ap,tv=Pp,pk=ua,mk=ec,{isClean:Zt,my:gk}=la;const yk={atrule:"AtRule",comment:"Comment",decl:"Declaration",document:"Document",root:"Root",rule:"Rule"},vk={AtRule:!0,AtRuleExit:!0,Comment:!0,CommentExit:!0,Declaration:!0,DeclarationExit:!0,Document:!0,DocumentExit:!0,Once:!0,OnceExit:!0,postcssPlugin:!0,prepare:!0,Root:!0,RootExit:!0,Rule:!0,RuleExit:!0},_k={Once:!0,postcssPlugin:!0,prepare:!0},ns=0;function qs(t){return typeof t=="object"&&typeof t.then=="function"}function qE(t){let e=!1,n=yk[t.type];return t.type==="decl"?e=t.prop.toLowerCase():t.type==="atrule"&&(e=t.name.toLowerCase()),e&&t.append?[n,n+"-"+e,ns,n+"Exit",n+"Exit-"+e]:e?[n,n+"-"+e,n+"Exit",n+"Exit-"+e]:t.append?[n,ns,n+"Exit"]:[n,n+"Exit"]}function nv(t){let e;return t.type==="document"?e=["Document",ns,"DocumentExit"]:t.type==="root"?e=["Root",ns,"RootExit"]:e=qE(t),{eventIndex:0,events:e,iterator:0,node:t,visitorIndex:0,visitors:[]}}function Kd(t){return t[Zt]=!1,t.nodes&&t.nodes.forEach(e=>Kd(e)),t}let Qd={},rs=class GE{constructor(e,n,r){this.stringified=!1,this.processed=!1;let i;if(typeof n=="object"&&n!==null&&(n.type==="root"||n.type==="document"))i=Kd(n);else if(n instanceof GE||n instanceof tv)i=Kd(n.root),n.map&&(typeof r.map>"u"&&(r.map={}),r.map.inline||(r.map.inline=!1),r.map.prev=n.map);else{let s=fk;r.syntax&&(s=r.syntax.parse),r.parser&&(s=r.parser),s.parse&&(s=s.parse);try{i=s(n,r)}catch(o){this.processed=!0,this.error=o}i&&!i[gk]&&ck.rebuild(i)}this.result=new tv(e,i,r),this.helpers={...Qd,postcss:Qd,result:this.result},this.plugins=this.processor.plugins.map(s=>typeof s=="object"&&s.prepare?{...s,...s.prepare(this.result)}:s)}async(){return this.error?Promise.reject(this.error):this.processed?Promise.resolve(this.result):(this.processing||(this.processing=this.runAsync()),this.processing)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}getAsyncError(){throw new Error("Use process(css).then(cb) to work with async plugins")}handleError(e,n){let r=this.result.lastPlugin;try{n&&n.addToError(e),this.error=e,e.name==="CssSyntaxError"&&!e.plugin?(e.plugin=r.postcssPlugin,e.setMessage()):r.postcssVersion}catch(i){console&&console.error&&console.error(i)}return e}prepareVisitors(){this.listeners={};let e=(n,r,i)=>{this.listeners[r]||(this.listeners[r]=[]),this.listeners[r].push([n,i])};for(let n of this.plugins)if(typeof n=="object")for(let r in n){if(!vk[r]&&/^[A-Z]/.test(r))throw new Error(`Unknown event ${r} in ${n.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);if(!_k[r])if(typeof n[r]=="object")for(let i in n[r])i==="*"?e(n,r,n[r][i]):e(n,r+"-"+i.toLowerCase(),n[r][i]);else typeof n[r]=="function"&&e(n,r,n[r])}this.hasListener=Object.keys(this.listeners).length>0}async runAsync(){this.plugin=0;for(let e=0;e<this.plugins.length;e++){let n=this.plugins[e],r=this.runOnRoot(n);if(qs(r))try{await r}catch(i){throw this.handleError(i)}}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[Zt];){e[Zt]=!0;let n=[nv(e)];for(;n.length>0;){let r=this.visitTick(n);if(qs(r))try{await r}catch(i){let s=n[n.length-1].node;throw this.handleError(i,s)}}}if(this.listeners.OnceExit)for(let[n,r]of this.listeners.OnceExit){this.result.lastPlugin=n;try{if(e.type==="document"){let i=e.nodes.map(s=>r(s,this.helpers));await Promise.all(i)}else await r(e,this.helpers)}catch(i){throw this.handleError(i)}}}return this.processed=!0,this.stringify()}runOnRoot(e){this.result.lastPlugin=e;try{if(typeof e=="object"&&e.Once){if(this.result.root.type==="document"){let n=this.result.root.nodes.map(r=>e.Once(r,this.helpers));return qs(n[0])?Promise.all(n):n}return e.Once(this.result.root,this.helpers)}else if(typeof e=="function")return e(this.result.root,this.result)}catch(n){throw this.handleError(n)}}stringify(){if(this.error)throw this.error;if(this.stringified)return this.result;this.stringified=!0,this.sync();let e=this.result.opts,n=mk;e.syntax&&(n=e.syntax.stringify),e.stringifier&&(n=e.stringifier),n.stringify&&(n=n.stringify);let i=new dk(n,this.result.root,this.result.opts).generate();return this.result.css=i[0],this.result.map=i[1],this.result}sync(){if(this.error)throw this.error;if(this.processed)return this.result;if(this.processed=!0,this.processing)throw this.getAsyncError();for(let e of this.plugins){let n=this.runOnRoot(e);if(qs(n))throw this.getAsyncError()}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[Zt];)e[Zt]=!0,this.walkSync(e);if(this.listeners.OnceExit)if(e.type==="document")for(let n of e.nodes)this.visitSync(this.listeners.OnceExit,n);else this.visitSync(this.listeners.OnceExit,e)}return this.result}then(e,n){return this.async().then(e,n)}toString(){return this.css}visitSync(e,n){for(let[r,i]of e){this.result.lastPlugin=r;let s;try{s=i(n,this.helpers)}catch(o){throw this.handleError(o,n.proxyOf)}if(n.type!=="root"&&n.type!=="document"&&!n.parent)return!0;if(qs(s))throw this.getAsyncError()}}visitTick(e){let n=e[e.length-1],{node:r,visitors:i}=n;if(r.type!=="root"&&r.type!=="document"&&!r.parent){e.pop();return}if(i.length>0&&n.visitorIndex<i.length){let[o,l]=i[n.visitorIndex];n.visitorIndex+=1,n.visitorIndex===i.length&&(n.visitors=[],n.visitorIndex=0),this.result.lastPlugin=o;try{return l(r.toProxy(),this.helpers)}catch(u){throw this.handleError(u,r)}}if(n.iterator!==0){let o=n.iterator,l;for(;l=r.nodes[r.indexes[o]];)if(r.indexes[o]+=1,!l[Zt]){l[Zt]=!0,e.push(nv(l));return}n.iterator=0,delete r.indexes[o]}let s=n.events;for(;n.eventIndex<s.length;){let o=s[n.eventIndex];if(n.eventIndex+=1,o===ns){r.nodes&&r.nodes.length&&(r[Zt]=!0,n.iterator=r.getIterator());return}else if(this.listeners[o]){n.visitors=this.listeners[o];return}}e.pop()}walkSync(e){e[Zt]=!0;let n=qE(e);for(let r of n)if(r===ns)e.nodes&&e.each(i=>{i[Zt]||this.walkSync(i)});else{let i=this.listeners[r];if(i&&this.visitSync(i,e.toProxy()))return}}warnings(){return this.sync().warnings()}get content(){return this.stringify().content}get css(){return this.stringify().css}get map(){return this.stringify().map}get messages(){return this.sync().messages}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){return this.sync().root}get[Symbol.toStringTag](){return"LazyResult"}};rs.registerPostcss=t=>{Qd=t};var KE=rs;rs.default=rs;pk.registerLazyResult(rs);hk.registerLazyResult(rs);let wk=WE,Ek=Ap;const Tk=Pp;let Ik=ec,Yd=class{constructor(e,n,r){n=n.toString(),this.stringified=!1,this._processor=e,this._css=n,this._opts=r,this._map=void 0;let i,s=Ik;this.result=new Tk(this._processor,i,this._opts),this.result.css=n;let o=this;Object.defineProperty(this.result,"root",{get(){return o.root}});let l=new wk(s,i,this._opts,n);if(l.isMap()){let[u,c]=l.generate();u&&(this.result.css=u),c&&(this.result.map=c)}else l.clearAnnotation(),this.result.css=l.css}async(){return this.error?Promise.reject(this.error):Promise.resolve(this.result)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}sync(){if(this.error)throw this.error;return this.result}then(e,n){return this.async().then(e,n)}toString(){return this._css}warnings(){return[]}get content(){return this.result.css}get css(){return this.result.css}get map(){return this.result.map}get messages(){return[]}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){if(this._root)return this._root;let e,n=Ek;try{e=n(this._css,this._opts)}catch(r){this.error=r}if(this.error)throw this.error;return this._root=e,e}get[Symbol.toStringTag](){return"NoWorkResult"}};var Sk=Yd;Yd.default=Yd;let Ck=Cp,Rk=KE,Ak=Sk,Pk=ua,zo=class{constructor(e=[]){this.version="8.4.49",this.plugins=this.normalize(e)}normalize(e){let n=[];for(let r of e)if(r.postcss===!0?r=r():r.postcss&&(r=r.postcss),typeof r=="object"&&Array.isArray(r.plugins))n=n.concat(r.plugins);else if(typeof r=="object"&&r.postcssPlugin)n.push(r);else if(typeof r=="function")n.push(r);else if(!(typeof r=="object"&&(r.parse||r.stringify)))throw new Error(r+" is not a PostCSS plugin");return n}process(e,n={}){return!this.plugins.length&&!n.parser&&!n.stringifier&&!n.syntax?new Ak(this,e,n):new Rk(this,e,n)}use(e){return this.plugins=this.plugins.concat(this.normalize([e])),this}};var kk=zo;zo.default=zo;Pk.registerProcessor(zo);Ck.registerProcessor(zo);var rv={};let QE=Sp,YE=nc,xk=li,Nk=Ep,JE=rc,XE=Cp,Ok=LP,Dk=ic,bk=KE,Lk=FE,Mk=tc,Vk=Ap,kp=kk,Fk=Pp,ZE=ua,eT=Rp,Uk=ec,jk=HE;function ue(...t){return t.length===1&&Array.isArray(t[0])&&(t=t[0]),new kp(t)}ue.plugin=function(e,n){let r=!1;function i(...o){console&&console.warn&&!r&&(r=!0,console.warn(e+`: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`),rv.LANG&&rv.LANG.startsWith("cn")&&console.warn(e+`: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`));let l=n(...o);return l.postcssPlugin=e,l.postcssVersion=new kp().version,l}let s;return Object.defineProperty(i,"postcss",{get(){return s||(s=i()),s}}),i.process=function(o,l,u){return ue([i(u)]).process(o,l)},i};ue.stringify=Uk;ue.parse=Vk;ue.fromJSON=Ok;ue.list=Lk;ue.comment=t=>new YE(t);ue.atRule=t=>new QE(t);ue.decl=t=>new JE(t);ue.rule=t=>new eT(t);ue.root=t=>new ZE(t);ue.document=t=>new XE(t);ue.CssSyntaxError=Nk;ue.Declaration=JE;ue.Container=xk;ue.Processor=kp;ue.Document=XE;ue.Comment=YE;ue.Warning=jk;ue.AtRule=QE;ue.Result=Fk;ue.Input=Dk;ue.Rule=eT;ue.Root=ZE;ue.Node=Mk;bk.registerPostcss(ue);var $k=ue;ue.default=ue;const ve=G_($k);ve.stringify;ve.fromJSON;ve.plugin;ve.parse;ve.list;ve.document;ve.comment;ve.atRule;ve.rule;ve.decl;ve.root;ve.CssSyntaxError;ve.Declaration;ve.Container;ve.Processor;ve.Document;ve.Comment;ve.Warning;ve.AtRule;ve.Result;ve.Input;ve.Rule;ve.Root;ve.Node;const Bk=({noteSet:t})=>{const e=_p(),n=()=>{e(`/type/${t.noteSetId}`)};return L.jsxs("div",{className:"relative bg-slate-700 p-4 rounded-lg text-white hover:cursor-pointer hover:bg-slate-800 hover:shadow-md hover:scale-105 transition-transform",onClick:n,children:[L.jsx(vE,{className:"absolute top-2 right-2 bg-blue-500 text-white p-1 rounded",to:"/edit/"+t.noteSetId,onClick:r=>r.stopPropagation(),children:"Edit"}),L.jsx("div",{className:"text-xl font-bold",children:t.noteSetName}),L.jsx("div",{className:"text-lg",children:t.noteSetId})]})},zk=({noteSets:t})=>L.jsxs("div",{className:"bg-secondary-light min-w-fit max-w-20 m-auto p-8 rounded-lg shadow-md",children:[L.jsx("div",{className:"text-2xl font-bold",children:"Note Sets"}),L.jsx("div",{className:"flex flex-row flex-wrap mt-4 gap-4",children:t.map((e,n)=>L.jsx(Bk,{noteSet:e},n))}),L.jsxs("button",{className:"bg-primary-light text-xl w-fit m-auto p-2 rounded-md shadow-md mt-4 hover:scale-105 hover:cursor-pointer transition-transform",children:[L.jsx("span",{className:"text-2xl m-1 font-extrabold",children:"+"}),"Create New"]})]});var iv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},nT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,_=c&63;u||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(tT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new Hk;const m=s<<2|l>>4;if(r.push(m),c!==64){const _=l<<4&240|c>>2;if(r.push(_),p!==64){const A=c<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Hk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qk=function(t){const e=tT(t);return nT.encodeByteArray(e,!0)},yu=function(t){return qk(t).replace(/\./g,"")},rT=function(t){try{return nT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=()=>Gk().__FIREBASE_DEFAULTS__,Qk=()=>{if(typeof process>"u"||typeof iv>"u")return;const t=iv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&rT(t[1]);return e&&JSON.parse(e)},sc=()=>{try{return Kk()||Qk()||Yk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},iT=t=>{var e,n;return(n=(e=sc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Jk=t=>{const e=iT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sT=()=>{var t;return(t=sc())===null||t===void 0?void 0:t.config},oT=t=>{var e;return(e=sc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[yu(JSON.stringify(n)),yu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ex(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function tx(){var t;const e=(t=sc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function aT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function rx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ix(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sx(){return!tx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function lT(){try{return typeof indexedDB=="object"}catch{return!1}}function uT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function ox(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax="FirebaseError";class Jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ax,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?lx(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Jt(i,l,r)}}function lx(t,e){return t.replace(ux,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ux=/\{\$([^}]+)}/g;function cx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(sv(s)&&sv(o)){if(!Wo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function sv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function hx(t,e){const n=new dx(t,e);return n.subscribe.bind(n)}class dx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ah),i.error===void 0&&(i.error=Ah),i.complete===void 0&&(i.complete=Ah);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ah(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px=1e3,mx=2,gx=4*60*60*1e3,yx=.5;function ov(t,e=px,n=mx){const r=e*Math.pow(n,t),i=Math.round(yx*r*(Math.random()-.5)*2);return Math.min(gx,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){return t&&t._delegate?t._delegate:t}class Qt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xk;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wx(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_x(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _x(t){return t===Mr?void 0:t}function wx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ex{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Tx={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Ix=te.INFO,Sx={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Cx=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Sx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class oc{constructor(e){this.name=e,this._logLevel=Ix,this._logHandler=Cx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Rx=(t,e)=>e.some(n=>t instanceof n);let av,lv;function Ax(){return av||(av=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Px(){return lv||(lv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cT=new WeakMap,Jd=new WeakMap,hT=new WeakMap,Ph=new WeakMap,xp=new WeakMap;function kx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(dr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&cT.set(n,t)}).catch(()=>{}),xp.set(e,t),e}function xx(t){if(Jd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Jd.set(t,e)}let Xd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||hT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Nx(t){Xd=t(Xd)}function Ox(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(kh(this),e,...n);return hT.set(r,e.sort?e.sort():[e]),dr(r)}:Px().includes(t)?function(...e){return t.apply(kh(this),e),dr(cT.get(this))}:function(...e){return dr(t.apply(kh(this),e))}}function Dx(t){return typeof t=="function"?Ox(t):(t instanceof IDBTransaction&&xx(t),Rx(t,Ax())?new Proxy(t,Xd):t)}function dr(t){if(t instanceof IDBRequest)return kx(t);if(Ph.has(t))return Ph.get(t);const e=Dx(t);return e!==t&&(Ph.set(t,e),xp.set(e,t)),e}const kh=t=>xp.get(t);function dT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=dr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(dr(o.result),u.oldVersion,u.newVersion,dr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const bx=["get","getKey","getAll","getAllKeys","count"],Lx=["put","add","delete","clear"],xh=new Map;function uv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xh.get(e))return xh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Lx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||bx.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return xh.set(e,s),s}Nx(t=>({...t,get:(e,n,r)=>uv(e,n)||t.get(e,n,r),has:(e,n)=>!!uv(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Vx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Vx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Zd="@firebase/app",cv="0.10.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new oc("@firebase/app"),Fx="@firebase/app-compat",Ux="@firebase/analytics-compat",jx="@firebase/analytics",$x="@firebase/app-check-compat",Bx="@firebase/app-check",zx="@firebase/auth",Wx="@firebase/auth-compat",Hx="@firebase/database",qx="@firebase/data-connect",Gx="@firebase/database-compat",Kx="@firebase/functions",Qx="@firebase/functions-compat",Yx="@firebase/installations",Jx="@firebase/installations-compat",Xx="@firebase/messaging",Zx="@firebase/messaging-compat",eN="@firebase/performance",tN="@firebase/performance-compat",nN="@firebase/remote-config",rN="@firebase/remote-config-compat",iN="@firebase/storage",sN="@firebase/storage-compat",oN="@firebase/firestore",aN="@firebase/vertexai",lN="@firebase/firestore-compat",uN="firebase",cN="11.0.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="[DEFAULT]",hN={[Zd]:"fire-core",[Fx]:"fire-core-compat",[jx]:"fire-analytics",[Ux]:"fire-analytics-compat",[Bx]:"fire-app-check",[$x]:"fire-app-check-compat",[zx]:"fire-auth",[Wx]:"fire-auth-compat",[Hx]:"fire-rtdb",[qx]:"fire-data-connect",[Gx]:"fire-rtdb-compat",[Kx]:"fire-fn",[Qx]:"fire-fn-compat",[Yx]:"fire-iid",[Jx]:"fire-iid-compat",[Xx]:"fire-fcm",[Zx]:"fire-fcm-compat",[eN]:"fire-perf",[tN]:"fire-perf-compat",[nN]:"fire-rc",[rN]:"fire-rc-compat",[iN]:"fire-gcs",[sN]:"fire-gcs-compat",[oN]:"fire-fst",[lN]:"fire-fst-compat",[aN]:"fire-vertex","fire-js":"fire-js",[uN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu=new Map,dN=new Map,tf=new Map;function hv(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ln(t){const e=t.name;if(tf.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;tf.set(e,t);for(const n of vu.values())hv(n,t);for(const n of dN.values())hv(n,t);return!0}function ci(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new ui("app","Firebase",fN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=cN;function fT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ef,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw fr.create("bad-app-name",{appName:String(i)});if(n||(n=sT()),!n)throw fr.create("no-options");const s=vu.get(i);if(s){if(Wo(n,s.options)&&Wo(r,s.config))return s;throw fr.create("duplicate-app",{appName:i})}const o=new Ex(i);for(const u of tf.values())o.addComponent(u);const l=new pN(n,r,o);return vu.set(i,l),l}function Np(t=ef){const e=vu.get(t);if(!e&&t===ef&&sT())return fT();if(!e)throw fr.create("no-app",{appName:t});return e}function bt(t,e,n){var r;let i=(r=hN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(l.join(" "));return}ln(new Qt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN="firebase-heartbeat-database",gN=1,Ho="firebase-heartbeat-store";let Nh=null;function pT(){return Nh||(Nh=dT(mN,gN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ho)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),Nh}async function yN(t){try{const n=(await pT()).transaction(Ho),r=await n.objectStore(Ho).get(mT(t));return await n.done,r}catch(e){if(e instanceof Jt)Ln.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(n.message)}}}async function dv(t,e){try{const r=(await pT()).transaction(Ho,"readwrite");await r.objectStore(Ho).put(e,mT(t)),await r.done}catch(n){if(n instanceof Jt)Ln.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(r.message)}}}function mT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=1024,_N=30*24*60*60*1e3;class wN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=fv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=_N}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fv(),{heartbeatsToSend:r,unsentEntries:i}=EN(this._heartbeatsCache.heartbeats),s=yu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ln.warn(n),""}}}function fv(){return new Date().toISOString().substring(0,10)}function EN(t,e=vN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),pv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),pv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class TN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return lT()?uT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await yN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return dv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return dv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function pv(t){return yu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(t){ln(new Qt("platform-logger",e=>new Mx(e),"PRIVATE")),ln(new Qt("heartbeat",e=>new wN(e),"PRIVATE")),bt(Zd,cv,t),bt(Zd,cv,"esm2017"),bt("fire-js","")}IN("");function Op(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function gT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SN=gT,yT=new ui("auth","Firebase",gT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _u=new oc("@firebase/auth");function CN(t,...e){_u.logLevel<=te.WARN&&_u.warn(`Auth (${ms}): ${t}`,...e)}function xl(t,...e){_u.logLevel<=te.ERROR&&_u.error(`Auth (${ms}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(t,...e){throw bp(t,...e)}function Gt(t,...e){return bp(t,...e)}function Dp(t,e,n){const r=Object.assign(Object.assign({},SN()),{[e]:n});return new ui("auth","Firebase",r).create(e,{appName:t.name})}function An(t){return Dp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function RN(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Vt(t,"argument-error"),Dp(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return yT.create(t,...e)}function G(t,e,...n){if(!t)throw bp(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xl(e),new Error(e)}function Mn(t,e){t||In(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function AN(){return mv()==="http:"||mv()==="https:"}function mv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AN()||aT()||"connection"in navigator)?navigator.onLine:!0}function kN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=ex()||rx()}get(){return PN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NN=new ha(3e4,6e4);function Rr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ar(t,e,n,r,i={}){return _T(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ca(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return nx()||(c.referrerPolicy="no-referrer"),vT.fetch()(wT(t,t.config.apiHost,n,l),c)})}async function _T(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xN),e);try{const i=new DN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw cl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw cl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw cl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw cl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Dp(t,d,c);Vt(t,d)}}catch(i){if(i instanceof Jt)throw i;Vt(t,"network-request-failed",{message:String(i)})}}async function da(t,e,n,r,i={}){const s=await Ar(t,e,n,r,i);return"mfaPendingCredential"in s&&Vt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function wT(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Lp(t.config,i):`${t.config.apiScheme}://${i}`}function ON(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class DN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),NN.get())})}}function cl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gt(t,e,r);return i.customData._tokenResponse=n,i}function gv(t){return t!==void 0&&t.enterprise!==void 0}class bN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ON(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function LN(t,e){return Ar(t,"GET","/v2/recaptchaConfig",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MN(t,e){return Ar(t,"POST","/v1/accounts:delete",e)}async function ET(t,e){return Ar(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VN(t,e=!1){const n=it(t),r=await n.getIdToken(e),i=Mp(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:po(Oh(i.auth_time)),issuedAtTime:po(Oh(i.iat)),expirationTime:po(Oh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Oh(t){return Number(t)*1e3}function Mp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xl("JWT malformed, contained fewer than 3 sections"),null;try{const i=rT(n);return i?JSON.parse(i):(xl("Failed to decode base64 JWT payload"),null)}catch(i){return xl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yv(t){const e=Mp(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jt&&FN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function FN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=po(this.lastLoginAt),this.creationTime=po(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await qo(t,ET(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?TT(s.providerUserInfo):[],l=$N(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new rf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function jN(t){const e=it(t);await wu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $N(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function TT(t){return t.map(e=>{var{providerId:n}=e,r=Op(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BN(t,e){const n=await _T(t,{},async()=>{const r=ca({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=wT(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",vT.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zN(t,e){return Ar(t,"POST","/v2/accounts:revokeToken",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=yv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await BN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Wi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wi,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Sn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Op(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new UN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new rf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await qo(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return VN(this,e)}reload(){return jN(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(An(this.auth));const e=await this.getIdToken();return await qo(this,MN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:D,isAnonymous:V,providerData:j,stsTokenManager:T}=n;G(I&&T,e,"internal-error");const y=Wi.fromJSON(this.name,T);G(typeof I=="string",e,"internal-error"),Wn(p,e.name),Wn(m,e.name),G(typeof D=="boolean",e,"internal-error"),G(typeof V=="boolean",e,"internal-error"),Wn(_,e.name),Wn(A,e.name),Wn(k,e.name),Wn(C,e.name),Wn(w,e.name),Wn(v,e.name);const E=new Sn({uid:I,auth:e,email:m,emailVerified:D,displayName:p,isAnonymous:V,photoURL:A,phoneNumber:_,tenantId:k,stsTokenManager:y,createdAt:w,lastLoginAt:v});return j&&Array.isArray(j)&&(E.providerData=j.map(S=>Object.assign({},S))),C&&(E._redirectEventId=C),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Wi;i.updateFromServerResponse(n);const s=new Sn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await wu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?TT(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Wi;l.updateFromIdToken(r);const u=new Sn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new rf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=new Map;function Cn(t){Mn(t instanceof Function,"Expected a class definition");let e=vv.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vv.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}IT.type="NONE";const _v=IT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(t,e,n){return`firebase:${t}:${e}:${n}`}class Hi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Nl(this.userKey,i.apiKey,s),this.fullPersistenceKey=Nl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Hi(Cn(_v),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Cn(_v);const o=Nl(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Sn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Hi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new Hi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(AT(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ST(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kT(e))return"Blackberry";if(xT(e))return"Webos";if(CT(e))return"Safari";if((e.includes("chrome/")||RT(e))&&!e.includes("edge/"))return"Chrome";if(PT(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ST(t=rt()){return/firefox\//i.test(t)}function CT(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function RT(t=rt()){return/crios\//i.test(t)}function AT(t=rt()){return/iemobile/i.test(t)}function PT(t=rt()){return/android/i.test(t)}function kT(t=rt()){return/blackberry/i.test(t)}function xT(t=rt()){return/webos/i.test(t)}function Vp(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function WN(t=rt()){var e;return Vp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HN(){return ix()&&document.documentMode===10}function NT(t=rt()){return Vp(t)||PT(t)||xT(t)||kT(t)||/windows phone/i.test(t)||AT(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OT(t,e=[]){let n;switch(t){case"Browser":n=wv(rt());break;case"Worker":n=`${wv(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ms}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GN(t,e={}){return Ar(t,"GET","/v2/passwordPolicy",Rr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KN=6;class QN{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:KN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ev(this),this.idTokenSubscription=new Ev(this),this.beforeStateQueue=new qN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Hi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ET(this,{idToken:e}),r=await Sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=kN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(An(this));const n=e?it(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(An(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(An(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await GN(this),n=new QN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ui("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await Hi.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=OT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pr(t){return it(t)}class Ev{constructor(e){this.auth=e,this.observer=null,this.addObserver=hx(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ac={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function JN(t){ac=t}function DT(t){return ac.loadJS(t)}function XN(){return ac.recaptchaEnterpriseScript}function ZN(){return ac.gapiScript}function eO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class tO{constructor(){this.enterprise=new nO}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class nO{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const rO="recaptcha-enterprise",bT="NO_RECAPTCHA";class iO{constructor(e){this.type=rO,this.auth=Pr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{LN(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new bN(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;gv(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(bT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new tO().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&gv(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=XN();u.length!==0&&(u+=l),DT(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Tv(t,e,n,r=!1,i=!1){const s=new iO(t);let o;if(i)o=bT;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function sf(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Tv(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Tv(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sO(t,e){const n=ci(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Wo(s,e??{}))return i;Vt(i,"already-initialized")}return n.initialize({options:e})}function oO(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function aO(t,e,n){const r=Pr(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=LT(e),{host:o,port:l}=lO(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),uO()}function LT(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function lO(t){const e=LT(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Iv(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Iv(o)}}}function Iv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function uO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}async function cO(t,e){return Ar(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hO(t,e){return da(t,"POST","/v1/accounts:signInWithPassword",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dO(t,e){return da(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}async function fO(t,e){return da(t,"POST","/v1/accounts:signInWithEmailLink",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends Fp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Go(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Go(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sf(e,n,"signInWithPassword",hO);case"emailLink":return dO(e,{email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return sf(e,r,"signUpPassword",cO);case"emailLink":return fO(e,{idToken:n,email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t,e){return da(t,"POST","/v1/accounts:signInWithIdp",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO="http://localhost";class Jr extends Fp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Op(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Jr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return qi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,qi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,qi(e,n)}buildRequest(){const e={requestUri:pO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ca(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function gO(t){const e=Xs(Zs(t)).link,n=e?Xs(Zs(e)).deep_link_id:null,r=Xs(Zs(t)).deep_link_id;return(r?Xs(Zs(r)).link:null)||r||n||e||t}class Up{constructor(e){var n,r,i,s,o,l;const u=Xs(Zs(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=mO((i=u.mode)!==null&&i!==void 0?i:null);G(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=gO(e);try{return new Up(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(){this.providerId=gs.PROVIDER_ID}static credential(e,n){return Go._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Up.parseLink(n);return G(r,"argument-error"),Go._fromEmailAndCode(e,r.code,r.tenantId)}}gs.PROVIDER_ID="password";gs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";gs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends jp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends fa{constructor(){super("facebook.com")}static credential(e){return Jr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends fa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Jr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com";wn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends fa{constructor(){super("github.com")}static credential(e){return Jr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn extends fa{constructor(){super("twitter.com")}static credential(e,n){return Jr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yO(t,e){return da(t,"POST","/v1/accounts:signUp",Rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Sn._fromIdTokenResponse(e,r,i),o=Sv(r);return new Xr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Sv(r);return new Xr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Sv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu extends Jt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Eu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Eu(e,n,r,i)}}function MT(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Eu._fromErrorAndOperation(t,s,e,r):s})}async function vO(t,e,n=!1){const r=await qo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Xr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _O(t,e,n=!1){const{auth:r}=t;if(zt(r.app))return Promise.reject(An(r));const i="reauthenticate";try{const s=await qo(t,MT(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Mp(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),Xr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VT(t,e,n=!1){if(zt(t.app))return Promise.reject(An(t));const r="signIn",i=await MT(t,r,e),s=await Xr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function wO(t,e){return VT(Pr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FT(t){const e=Pr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function EO(t,e,n){if(zt(t.app))return Promise.reject(An(t));const r=Pr(t),o=await sf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",yO).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&FT(t),u}),l=await Xr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function TO(t,e,n){return zt(t.app)?Promise.reject(An(t)):wO(it(t),gs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&FT(t),r})}function IO(t,e,n,r){return it(t).onIdTokenChanged(e,n,r)}function SO(t,e,n){return it(t).beforeAuthStateChanged(e,n)}function CO(t,e,n,r){return it(t).onAuthStateChanged(e,n,r)}function RO(t){return it(t).signOut()}const Tu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tu,"1"),this.storage.removeItem(Tu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AO=1e3,PO=10;class jT extends UT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=NT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);HN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,PO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},AO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jT.type="LOCAL";const kO=jT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T extends UT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$T.type="SESSION";const BT=$T;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new lc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await xO(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=$p("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function OO(t){sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function DO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LO(){return zT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="firebaseLocalStorageDb",MO=1,Iu="firebaseLocalStorage",HT="fbase_key";class pa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uc(t,e){return t.transaction([Iu],e?"readwrite":"readonly").objectStore(Iu)}function VO(){const t=indexedDB.deleteDatabase(WT);return new pa(t).toPromise()}function of(){const t=indexedDB.open(WT,MO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Iu,{keyPath:HT})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Iu)?e(r):(r.close(),await VO(),e(await of()))})})}async function Cv(t,e,n){const r=uc(t,!0).put({[HT]:e,value:n});return new pa(r).toPromise()}async function FO(t,e){const n=uc(t,!1).get(e),r=await new pa(n).toPromise();return r===void 0?null:r.value}function Rv(t,e){const n=uc(t,!0).delete(e);return new pa(n).toPromise()}const UO=800,jO=3;class qT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await of(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>jO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lc._getInstance(LO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await DO(),!this.activeServiceWorker)return;this.sender=new NO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await of();return await Cv(e,Tu,"1"),await Rv(e,Tu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>FO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=uc(i,!1).getAll();return new pa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qT.type="LOCAL";const $O=qT;new ha(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(t,e){return e?Cn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp extends Fp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return qi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return qi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BO(t){return VT(t.auth,new Bp(t),t.bypassAuthState)}function zO(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),_O(n,new Bp(t),t.bypassAuthState)}async function WO(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),vO(n,new Bp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KT{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BO;case"linkViaPopup":case"linkViaRedirect":return WO;case"reauthViaPopup":case"reauthViaRedirect":return zO;default:Vt(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO=new ha(2e3,1e4);async function qO(t,e,n){if(zt(t.app))return Promise.reject(Gt(t,"operation-not-supported-in-this-environment"));const r=Pr(t);RN(t,e,jp);const i=GT(r,n);return new jr(r,"signInViaPopup",e,i).executeNotNull()}class jr extends KT{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=$p();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,HO.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO="pendingRedirect",Ol=new Map;class KO extends KT{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ol.get(this.auth._key());if(!e){try{const r=await QO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ol.set(this.auth._key(),e)}return this.bypassAuthState||Ol.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function QO(t,e){const n=XO(e),r=JO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function YO(t,e){Ol.set(t._key(),e)}function JO(t){return Cn(t._redirectPersistence)}function XO(t){return Nl(GO,t.config.apiKey,t.name)}async function ZO(t,e,n=!1){if(zt(t.app))return Promise.reject(An(t));const r=Pr(t),i=GT(r,e),o=await new KO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eD=10*60*1e3;class tD{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!QT(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eD&&this.cachedEventUids.clear(),this.cachedEventUids.has(Av(e))}saveEventToCache(e){this.cachedEventUids.add(Av(e)),this.lastProcessedEventTime=Date.now()}}function Av(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function QT({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return QT(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rD(t,e={}){return Ar(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sD=/^https?/;async function oD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rD(t);for(const n of e)try{if(aD(n))return}catch{}Vt(t,"unauthorized-domain")}function aD(t){const e=nf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sD.test(n))return!1;if(iD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD=new ha(3e4,6e4);function Pv(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uD(t){return new Promise((e,n)=>{var r,i,s;function o(){Pv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pv(),n(Gt(t,"network-request-failed"))},timeout:lD.get()})}if(!((i=(r=sn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=sn().gapi)===null||s===void 0)&&s.load)o();else{const l=eO("iframefcb");return sn()[l]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},DT(`${ZN()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Dl=null,e})}let Dl=null;function cD(t){return Dl=Dl||uD(t),Dl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=new ha(5e3,15e3),dD="__/auth/iframe",fD="emulator/auth/iframe",pD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gD(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Lp(e,fD):`https://${t.config.authDomain}/${dD}`,r={apiKey:e.apiKey,appName:t.name,v:ms},i=mD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ca(r).slice(1)}`}async function yD(t){const e=await cD(t),n=sn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:gD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),l=sn().setTimeout(()=>{s(o)},hD.get());function u(){sn().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_D=500,wD=600,ED="_blank",TD="http://localhost";class kv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ID(t,e,n,r=_D,i=wD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},vD),{width:r.toString(),height:i.toString(),top:s,left:o}),c=rt().toLowerCase();n&&(l=RT(c)?ED:n),ST(c)&&(e=e||TD,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[_,A])=>`${m}${_}=${A},`,"");if(WN(c)&&l!=="_self")return SD(e||"",l),new kv(null);const p=window.open(e||"",l,d);G(p,t,"popup-blocked");try{p.focus()}catch{}return new kv(p)}function SD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD="__/auth/handler",RD="emulator/auth/handler",AD=encodeURIComponent("fac");async function xv(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ms,eventId:i};if(e instanceof jp){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof fa){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${AD}=${encodeURIComponent(u)}`:"";return`${PD(t)}?${ca(l).slice(1)}${c}`}function PD({config:t}){return t.emulator?Lp(t,RD):`https://${t.authDomain}/${CD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="webStorageSupport";class kD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=BT,this._completeRedirectFn=ZO,this._overrideRedirectResult=YO}async _openPopup(e,n,r,i){var s;Mn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await xv(e,n,r,nf(),i);return ID(e,o,$p())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await xv(e,n,r,nf(),i);return OO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Mn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await yD(e),r=new tD(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dh,{type:Dh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Dh];o!==void 0&&n(!!o),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=oD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return NT()||CT()||Vp()}}const xD=kD;var Nv="@firebase/auth",Ov="1.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ND{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DD(t){ln(new Qt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:OT(t)},c=new YN(r,i,s,u);return oO(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ln(new Qt("auth-internal",e=>{const n=Pr(e.getProvider("auth").getImmediate());return(r=>new ND(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(Nv,Ov,OD(t)),bt(Nv,Ov,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bD=5*60,LD=oT("authIdTokenMaxAge")||bD;let Dv=null;const MD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>LD)return;const i=n==null?void 0:n.token;Dv!==i&&(Dv=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function VD(t=Np()){const e=ci(t,"auth");if(e.isInitialized())return e.getImmediate();const n=sO(t,{popupRedirectResolver:xD,persistence:[$O,kO,BT]}),r=oT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=MD(s.toString());SO(n,o,()=>o(n.currentUser)),IO(n,l=>o(l))}}const i=iT("auth");return i&&aO(n,`http://${i}`),n}function FD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}JN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",FD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DD("Browser");var UD="firebase",jD="11.0.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt(UD,jD,"app");const YT="@firebase/installations",zp="0.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JT=1e4,XT=`w:${zp}`,ZT="FIS_v2",$D="https://firebaseinstallations.googleapis.com/v1",BD=60*60*1e3,zD="installations",WD="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Zr=new ui(zD,WD,HD);function eI(t){return t instanceof Jt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI({projectId:t}){return`${$D}/projects/${t}/installations`}function nI(t){return{token:t.token,requestStatus:2,expiresIn:GD(t.expiresIn),creationTime:Date.now()}}async function rI(t,e){const r=(await e.json()).error;return Zr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function iI({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function qD(t,{refreshToken:e}){const n=iI(t);return n.append("Authorization",KD(e)),n}async function sI(t){const e=await t();return e.status>=500&&e.status<600?t():e}function GD(t){return Number(t.replace("s","000"))}function KD(t){return`${ZT} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QD({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=tI(t),i=iI(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:ZT,appId:t.appId,sdkVersion:XT},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await sI(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:nI(c.authToken)}}else throw await rI("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oI(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YD(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JD=/^[cdef][\w-]{21}$/,af="";function XD(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ZD(t);return JD.test(n)?n:af}catch{return af}}function ZD(t){return YD(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=new Map;function lI(t,e){const n=cc(t);uI(n,e),eb(n,e)}function uI(t,e){const n=aI.get(t);if(n)for(const r of n)r(e)}function eb(t,e){const n=tb();n&&n.postMessage({key:t,fid:e}),nb()}let $r=null;function tb(){return!$r&&"BroadcastChannel"in self&&($r=new BroadcastChannel("[Firebase] FID Change"),$r.onmessage=t=>{uI(t.data.key,t.data.fid)}),$r}function nb(){aI.size===0&&$r&&($r.close(),$r=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb="firebase-installations-database",ib=1,ei="firebase-installations-store";let bh=null;function Wp(){return bh||(bh=dT(rb,ib,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ei)}}})),bh}async function Su(t,e){const n=cc(t),i=(await Wp()).transaction(ei,"readwrite"),s=i.objectStore(ei),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&lI(t,e.fid),e}async function cI(t){const e=cc(t),r=(await Wp()).transaction(ei,"readwrite");await r.objectStore(ei).delete(e),await r.done}async function hc(t,e){const n=cc(t),i=(await Wp()).transaction(ei,"readwrite"),s=i.objectStore(ei),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&lI(t,l.fid),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hp(t){let e;const n=await hc(t.appConfig,r=>{const i=sb(r),s=ob(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===af?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function sb(t){const e=t||{fid:XD(),registrationStatus:0};return hI(e)}function ob(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Zr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=ab(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:lb(t)}:{installationEntry:e}}async function ab(t,e){try{const n=await QD(t,e);return Su(t.appConfig,n)}catch(n){throw eI(n)&&n.customData.serverCode===409?await cI(t.appConfig):await Su(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function lb(t){let e=await bv(t.appConfig);for(;e.registrationStatus===1;)await oI(100),e=await bv(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Hp(t);return r||n}return e}function bv(t){return hc(t,e=>{if(!e)throw Zr.create("installation-not-found");return hI(e)})}function hI(t){return ub(t)?{fid:t.fid,registrationStatus:0}:t}function ub(t){return t.registrationStatus===1&&t.registrationTime+JT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cb({appConfig:t,heartbeatServiceProvider:e},n){const r=hb(t,n),i=qD(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:XT,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await sI(()=>fetch(r,l));if(u.ok){const c=await u.json();return nI(c)}else throw await rI("Generate Auth Token",u)}function hb(t,{fid:e}){return`${tI(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qp(t,e=!1){let n;const r=await hc(t.appConfig,s=>{if(!dI(s))throw Zr.create("not-registered");const o=s.authToken;if(!e&&pb(o))return s;if(o.requestStatus===1)return n=db(t,e),s;{if(!navigator.onLine)throw Zr.create("app-offline");const l=gb(s);return n=fb(t,l),l}});return n?await n:r.authToken}async function db(t,e){let n=await Lv(t.appConfig);for(;n.authToken.requestStatus===1;)await oI(100),n=await Lv(t.appConfig);const r=n.authToken;return r.requestStatus===0?qp(t,e):r}function Lv(t){return hc(t,e=>{if(!dI(e))throw Zr.create("not-registered");const n=e.authToken;return yb(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function fb(t,e){try{const n=await cb(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Su(t.appConfig,r),n}catch(n){if(eI(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await cI(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Su(t.appConfig,r)}throw n}}function dI(t){return t!==void 0&&t.registrationStatus===2}function pb(t){return t.requestStatus===2&&!mb(t)}function mb(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+BD}function gb(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function yb(t){return t.requestStatus===1&&t.requestTime+JT<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vb(t){const e=t,{installationEntry:n,registrationPromise:r}=await Hp(e);return r?r.catch(console.error):qp(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _b(t,e=!1){const n=t;return await wb(n),(await qp(n,e)).token}async function wb(t){const{registrationPromise:e}=await Hp(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eb(t){if(!t||!t.options)throw Lh("App Configuration");if(!t.name)throw Lh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Lh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Lh(t){return Zr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI="installations",Tb="installations-internal",Ib=t=>{const e=t.getProvider("app").getImmediate(),n=Eb(e),r=ci(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Sb=t=>{const e=t.getProvider("app").getImmediate(),n=ci(e,fI).getImmediate();return{getId:()=>vb(n),getToken:i=>_b(n,i)}};function Cb(){ln(new Qt(fI,Ib,"PUBLIC")),ln(new Qt(Tb,Sb,"PRIVATE"))}Cb();bt(YT,zp);bt(YT,zp,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="analytics",Rb="firebase_id",Ab="origin",Pb=60*1e3,kb="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Gp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt=new oc("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},It=new ui("analytics","Analytics",xb);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nb(t){if(!t.startsWith(Gp)){const e=It.create("invalid-gtag-resource",{gtagURL:t});return vt.warn(e.message),""}return t}function pI(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Ob(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Db(t,e){const n=Ob("firebase-js-sdk-policy",{createScriptURL:Nb}),r=document.createElement("script"),i=`${Gp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function bb(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Lb(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await pI(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){vt.error(l)}t("config",i,s)}async function Mb(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await pI(n);for(const u of o){const c=l.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){vt.error(s)}}function Vb(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await Mb(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await Lb(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){vt.error(l)}}return i}function Fb(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=Vb(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function Ub(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Gp)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=30,$b=1e3;class Bb{constructor(e={},n=$b){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const mI=new Bb;function zb(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Wb(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:zb(r)},s=kb.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw It.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function Hb(t,e=mI,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw It.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw It.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Kb;return setTimeout(async()=>{l.abort()},Pb),gI({appId:r,apiKey:i,measurementId:s},o,l,e)}async function gI(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=mI){var s;const{appId:o,measurementId:l}=t;try{await qb(r,e)}catch(u){if(l)return vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await Wb(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!Gb(c)){if(i.deleteThrottleMetadata(o),l)return vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?ov(n,i.intervalMillis,jb):ov(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),vt.debug(`Calling attemptFetch again in ${d} millis`),gI(t,p,r,i)}}function qb(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(It.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Gb(t){if(!(t instanceof Jt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Kb{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Qb(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yb(){if(lT())try{await uT()}catch(t){return vt.warn(It.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return vt.warn(It.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Jb(t,e,n,r,i,s,o){var l;const u=Hb(t);u.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&vt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>vt.error(_)),e.push(u);const c=Yb().then(_=>{if(_)return r.getId()}),[d,p]=await Promise.all([u,c]);Ub(s)||Db(s,d.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[Ab]="firebase",m.update=!0,p!=null&&(m[Rb]=p),i("config",d.measurementId,m),d.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.app=e}_delete(){return delete mo[this.app.options.appId],Promise.resolve()}}let mo={},Mv=[];const Vv={};let Mh="dataLayer",Zb="gtag",Fv,yI,Uv=!1;function eL(){const t=[];if(aT()&&t.push("This is a browser extension environment."),ox()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=It.create("invalid-analytics-context",{errorInfo:e});vt.warn(n.message)}}function tL(t,e,n){eL();const r=t.options.appId;if(!r)throw It.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw It.create("no-api-key");if(mo[r]!=null)throw It.create("already-exists",{id:r});if(!Uv){bb(Mh);const{wrappedGtag:s,gtagCore:o}=Fb(mo,Mv,Vv,Mh,Zb);yI=s,Fv=o,Uv=!0}return mo[r]=Jb(t,Mv,Vv,e,Fv,Mh,n),new Xb(t)}function nL(t=Np()){t=it(t);const e=ci(t,Cu);return e.isInitialized()?e.getImmediate():rL(t)}function rL(t,e={}){const n=ci(t,Cu);if(n.isInitialized()){const i=n.getImmediate();if(Wo(e,n.getOptions()))return i;throw It.create("already-initialized")}return n.initialize({options:e})}function iL(t,e,n,r){t=it(t),Qb(yI,mo[t.app.options.appId],e,n,r).catch(i=>vt.error(i))}const jv="@firebase/analytics",$v="0.10.10";function sL(){ln(new Qt(Cu,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return tL(r,i,n)},"PUBLIC")),ln(new Qt("analytics-internal",t,"PRIVATE")),bt(jv,$v),bt(jv,$v,"esm2017");function t(e){try{const n=e.getProvider(Cu).getImmediate();return{logEvent:(r,i,s)=>iL(n,r,i,s)}}catch(n){throw It.create("interop-component-reg-failed",{reason:n})}}}sL();var Bv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hr,vI;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function E(){}E.prototype=y.prototype,T.D=y.prototype,T.prototype=new E,T.prototype.constructor=T,T.C=function(S,P,N){for(var R=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)R[Pt-2]=arguments[Pt];return y.prototype[P].apply(S,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,E){E||(E=0);var S=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)S[P]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(P=0;16>P;++P)S[P]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=T.g[0],E=T.g[1],P=T.g[2];var N=T.g[3],R=y+(N^E&(P^N))+S[0]+3614090360&4294967295;y=E+(R<<7&4294967295|R>>>25),R=N+(P^y&(E^P))+S[1]+3905402710&4294967295,N=y+(R<<12&4294967295|R>>>20),R=P+(E^N&(y^E))+S[2]+606105819&4294967295,P=N+(R<<17&4294967295|R>>>15),R=E+(y^P&(N^y))+S[3]+3250441966&4294967295,E=P+(R<<22&4294967295|R>>>10),R=y+(N^E&(P^N))+S[4]+4118548399&4294967295,y=E+(R<<7&4294967295|R>>>25),R=N+(P^y&(E^P))+S[5]+1200080426&4294967295,N=y+(R<<12&4294967295|R>>>20),R=P+(E^N&(y^E))+S[6]+2821735955&4294967295,P=N+(R<<17&4294967295|R>>>15),R=E+(y^P&(N^y))+S[7]+4249261313&4294967295,E=P+(R<<22&4294967295|R>>>10),R=y+(N^E&(P^N))+S[8]+1770035416&4294967295,y=E+(R<<7&4294967295|R>>>25),R=N+(P^y&(E^P))+S[9]+2336552879&4294967295,N=y+(R<<12&4294967295|R>>>20),R=P+(E^N&(y^E))+S[10]+4294925233&4294967295,P=N+(R<<17&4294967295|R>>>15),R=E+(y^P&(N^y))+S[11]+2304563134&4294967295,E=P+(R<<22&4294967295|R>>>10),R=y+(N^E&(P^N))+S[12]+1804603682&4294967295,y=E+(R<<7&4294967295|R>>>25),R=N+(P^y&(E^P))+S[13]+4254626195&4294967295,N=y+(R<<12&4294967295|R>>>20),R=P+(E^N&(y^E))+S[14]+2792965006&4294967295,P=N+(R<<17&4294967295|R>>>15),R=E+(y^P&(N^y))+S[15]+1236535329&4294967295,E=P+(R<<22&4294967295|R>>>10),R=y+(P^N&(E^P))+S[1]+4129170786&4294967295,y=E+(R<<5&4294967295|R>>>27),R=N+(E^P&(y^E))+S[6]+3225465664&4294967295,N=y+(R<<9&4294967295|R>>>23),R=P+(y^E&(N^y))+S[11]+643717713&4294967295,P=N+(R<<14&4294967295|R>>>18),R=E+(N^y&(P^N))+S[0]+3921069994&4294967295,E=P+(R<<20&4294967295|R>>>12),R=y+(P^N&(E^P))+S[5]+3593408605&4294967295,y=E+(R<<5&4294967295|R>>>27),R=N+(E^P&(y^E))+S[10]+38016083&4294967295,N=y+(R<<9&4294967295|R>>>23),R=P+(y^E&(N^y))+S[15]+3634488961&4294967295,P=N+(R<<14&4294967295|R>>>18),R=E+(N^y&(P^N))+S[4]+3889429448&4294967295,E=P+(R<<20&4294967295|R>>>12),R=y+(P^N&(E^P))+S[9]+568446438&4294967295,y=E+(R<<5&4294967295|R>>>27),R=N+(E^P&(y^E))+S[14]+3275163606&4294967295,N=y+(R<<9&4294967295|R>>>23),R=P+(y^E&(N^y))+S[3]+4107603335&4294967295,P=N+(R<<14&4294967295|R>>>18),R=E+(N^y&(P^N))+S[8]+1163531501&4294967295,E=P+(R<<20&4294967295|R>>>12),R=y+(P^N&(E^P))+S[13]+2850285829&4294967295,y=E+(R<<5&4294967295|R>>>27),R=N+(E^P&(y^E))+S[2]+4243563512&4294967295,N=y+(R<<9&4294967295|R>>>23),R=P+(y^E&(N^y))+S[7]+1735328473&4294967295,P=N+(R<<14&4294967295|R>>>18),R=E+(N^y&(P^N))+S[12]+2368359562&4294967295,E=P+(R<<20&4294967295|R>>>12),R=y+(E^P^N)+S[5]+4294588738&4294967295,y=E+(R<<4&4294967295|R>>>28),R=N+(y^E^P)+S[8]+2272392833&4294967295,N=y+(R<<11&4294967295|R>>>21),R=P+(N^y^E)+S[11]+1839030562&4294967295,P=N+(R<<16&4294967295|R>>>16),R=E+(P^N^y)+S[14]+4259657740&4294967295,E=P+(R<<23&4294967295|R>>>9),R=y+(E^P^N)+S[1]+2763975236&4294967295,y=E+(R<<4&4294967295|R>>>28),R=N+(y^E^P)+S[4]+1272893353&4294967295,N=y+(R<<11&4294967295|R>>>21),R=P+(N^y^E)+S[7]+4139469664&4294967295,P=N+(R<<16&4294967295|R>>>16),R=E+(P^N^y)+S[10]+3200236656&4294967295,E=P+(R<<23&4294967295|R>>>9),R=y+(E^P^N)+S[13]+681279174&4294967295,y=E+(R<<4&4294967295|R>>>28),R=N+(y^E^P)+S[0]+3936430074&4294967295,N=y+(R<<11&4294967295|R>>>21),R=P+(N^y^E)+S[3]+3572445317&4294967295,P=N+(R<<16&4294967295|R>>>16),R=E+(P^N^y)+S[6]+76029189&4294967295,E=P+(R<<23&4294967295|R>>>9),R=y+(E^P^N)+S[9]+3654602809&4294967295,y=E+(R<<4&4294967295|R>>>28),R=N+(y^E^P)+S[12]+3873151461&4294967295,N=y+(R<<11&4294967295|R>>>21),R=P+(N^y^E)+S[15]+530742520&4294967295,P=N+(R<<16&4294967295|R>>>16),R=E+(P^N^y)+S[2]+3299628645&4294967295,E=P+(R<<23&4294967295|R>>>9),R=y+(P^(E|~N))+S[0]+4096336452&4294967295,y=E+(R<<6&4294967295|R>>>26),R=N+(E^(y|~P))+S[7]+1126891415&4294967295,N=y+(R<<10&4294967295|R>>>22),R=P+(y^(N|~E))+S[14]+2878612391&4294967295,P=N+(R<<15&4294967295|R>>>17),R=E+(N^(P|~y))+S[5]+4237533241&4294967295,E=P+(R<<21&4294967295|R>>>11),R=y+(P^(E|~N))+S[12]+1700485571&4294967295,y=E+(R<<6&4294967295|R>>>26),R=N+(E^(y|~P))+S[3]+2399980690&4294967295,N=y+(R<<10&4294967295|R>>>22),R=P+(y^(N|~E))+S[10]+4293915773&4294967295,P=N+(R<<15&4294967295|R>>>17),R=E+(N^(P|~y))+S[1]+2240044497&4294967295,E=P+(R<<21&4294967295|R>>>11),R=y+(P^(E|~N))+S[8]+1873313359&4294967295,y=E+(R<<6&4294967295|R>>>26),R=N+(E^(y|~P))+S[15]+4264355552&4294967295,N=y+(R<<10&4294967295|R>>>22),R=P+(y^(N|~E))+S[6]+2734768916&4294967295,P=N+(R<<15&4294967295|R>>>17),R=E+(N^(P|~y))+S[13]+1309151649&4294967295,E=P+(R<<21&4294967295|R>>>11),R=y+(P^(E|~N))+S[4]+4149444226&4294967295,y=E+(R<<6&4294967295|R>>>26),R=N+(E^(y|~P))+S[11]+3174756917&4294967295,N=y+(R<<10&4294967295|R>>>22),R=P+(y^(N|~E))+S[2]+718787259&4294967295,P=N+(R<<15&4294967295|R>>>17),R=E+(N^(P|~y))+S[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(P+(R<<21&4294967295|R>>>11))&4294967295,T.g[2]=T.g[2]+P&4294967295,T.g[3]=T.g[3]+N&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var E=y-this.blockSize,S=this.B,P=this.h,N=0;N<y;){if(P==0)for(;N<=E;)i(this,T,N),N+=this.blockSize;if(typeof T=="string"){for(;N<y;)if(S[P++]=T.charCodeAt(N++),P==this.blockSize){i(this,S),P=0;break}}else for(;N<y;)if(S[P++]=T[N++],P==this.blockSize){i(this,S),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var E=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=E&255,E/=256;for(this.u(T),T=Array(16),y=E=0;4>y;++y)for(var S=0;32>S;S+=8)T[E++]=this.g[y]>>>S&255;return T};function s(T,y){var E=l;return Object.prototype.hasOwnProperty.call(E,T)?E[T]:E[T]=y(T)}function o(T,y){this.h=y;for(var E=[],S=!0,P=T.length-1;0<=P;P--){var N=T[P]|0;S&&N==y||(E[P]=N,S=!1)}this.g=E}var l={};function u(T){return-128<=T&&128>T?s(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return C(c(-T));for(var y=[],E=1,S=0;T>=E;S++)y[S]=T/E|0,E*=4294967296;return new o(y,0)}function d(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return C(d(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=c(Math.pow(y,8)),S=p,P=0;P<T.length;P+=8){var N=Math.min(8,T.length-P),R=parseInt(T.substring(P,P+N),y);8>N?(N=c(Math.pow(y,N)),S=S.j(N).add(c(R))):(S=S.j(E),S=S.add(c(R)))}return S}var p=u(0),m=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-C(this).m();for(var T=0,y=1,E=0;E<this.g.length;E++){var S=this.i(E);T+=(0<=S?S:4294967296+S)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(A(this))return"0";if(k(this))return"-"+C(this).toString(T);for(var y=c(Math.pow(T,6)),E=this,S="";;){var P=D(E,y).g;E=w(E,P.j(y));var N=((0<E.g.length?E.g[0]:E.h)>>>0).toString(T);if(E=P,A(E))return N+S;for(;6>N.length;)N="0"+N;S=N+S}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function A(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function k(T){return T.h==-1}t.l=function(T){return T=w(this,T),k(T)?-1:A(T)?0:1};function C(T){for(var y=T.g.length,E=[],S=0;S<y;S++)E[S]=~T.g[S];return new o(E,~T.h).add(m)}t.abs=function(){return k(this)?C(this):this},t.add=function(T){for(var y=Math.max(this.g.length,T.g.length),E=[],S=0,P=0;P<=y;P++){var N=S+(this.i(P)&65535)+(T.i(P)&65535),R=(N>>>16)+(this.i(P)>>>16)+(T.i(P)>>>16);S=R>>>16,N&=65535,R&=65535,E[P]=R<<16|N}return new o(E,E[E.length-1]&-2147483648?-1:0)};function w(T,y){return T.add(C(y))}t.j=function(T){if(A(this)||A(T))return p;if(k(this))return k(T)?C(this).j(C(T)):C(C(this).j(T));if(k(T))return C(this.j(C(T)));if(0>this.l(_)&&0>T.l(_))return c(this.m()*T.m());for(var y=this.g.length+T.g.length,E=[],S=0;S<2*y;S++)E[S]=0;for(S=0;S<this.g.length;S++)for(var P=0;P<T.g.length;P++){var N=this.i(S)>>>16,R=this.i(S)&65535,Pt=T.i(P)>>>16,kr=T.i(P)&65535;E[2*S+2*P]+=R*kr,v(E,2*S+2*P),E[2*S+2*P+1]+=N*kr,v(E,2*S+2*P+1),E[2*S+2*P+1]+=R*Pt,v(E,2*S+2*P+1),E[2*S+2*P+2]+=N*Pt,v(E,2*S+2*P+2)}for(S=0;S<y;S++)E[S]=E[2*S+1]<<16|E[2*S];for(S=y;S<2*y;S++)E[S]=0;return new o(E,0)};function v(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function I(T,y){this.g=T,this.h=y}function D(T,y){if(A(y))throw Error("division by zero");if(A(T))return new I(p,p);if(k(T))return y=D(C(T),y),new I(C(y.g),C(y.h));if(k(y))return y=D(T,C(y)),new I(C(y.g),y.h);if(30<T.g.length){if(k(T)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var E=m,S=y;0>=S.l(T);)E=V(E),S=V(S);var P=j(E,1),N=j(S,1);for(S=j(S,2),E=j(E,2);!A(S);){var R=N.add(S);0>=R.l(T)&&(P=P.add(E),N=R),S=j(S,1),E=j(E,1)}return y=w(T,P.j(y)),new I(P,y)}for(P=p;0<=T.l(y);){for(E=Math.max(1,Math.floor(T.m()/y.m())),S=Math.ceil(Math.log(E)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),N=c(E),R=N.j(y);k(R)||0<R.l(T);)E-=S,N=c(E),R=N.j(y);A(N)&&(N=m),P=P.add(N),T=w(T,R)}return new I(P,T)}t.A=function(T){return D(this,T).h},t.and=function(T){for(var y=Math.max(this.g.length,T.g.length),E=[],S=0;S<y;S++)E[S]=this.i(S)&T.i(S);return new o(E,this.h&T.h)},t.or=function(T){for(var y=Math.max(this.g.length,T.g.length),E=[],S=0;S<y;S++)E[S]=this.i(S)|T.i(S);return new o(E,this.h|T.h)},t.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),E=[],S=0;S<y;S++)E[S]=this.i(S)^T.i(S);return new o(E,this.h^T.h)};function V(T){for(var y=T.g.length+1,E=[],S=0;S<y;S++)E[S]=T.i(S)<<1|T.i(S-1)>>>31;return new o(E,T.h)}function j(T,y){var E=y>>5;y%=32;for(var S=T.g.length-E,P=[],N=0;N<S;N++)P[N]=0<y?T.i(N+E)>>>y|T.i(N+E+1)<<32-y:T.i(N+E);return new o(P,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,vI=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Hr=o}).apply(typeof Bv<"u"?Bv:typeof self<"u"?self:typeof window<"u"?window:{});var hl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _I,eo,wI,bl,lf,EI,TI,II;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof hl=="object"&&hl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in f))break e;f=f[x]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,g=!1,x={next:function(){if(!g&&f<a.length){var O=f++;return{value:h(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,g),a.apply(h,x)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function A(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,x,O){for(var $=Array(arguments.length-2),he=2;he<arguments.length;he++)$[he-2]=arguments[he];return h.prototype[x].apply(g,$)}}function k(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function C(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const x=a.length||0,O=g.length||0;a.length=x+O;for(let $=0;$<O;$++)a[x+$]=g[$]}else a.push(g)}}class w{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var V=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function j(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function T(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let f,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(f in g)a[f]=g[f];for(let O=0;O<E.length;O++)f=E[O],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function P(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function N(a){l.setTimeout(()=>{throw a},0)}function R(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Pt{constructor(){this.h=this.g=null}add(h,f){const g=kr.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var kr=new w(()=>new Es,a=>a.reset());class Es{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let hn,B=!1,Q=new Pt,X=()=>{const a=l.Promise.resolve(void 0);hn=()=>{a.then(_e)}};var _e=()=>{for(var a;a=R();){try{a.h.call(a.g)}catch(f){N(f)}var h=kr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var dn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function fn(a,h){if(Re.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(V){e:{try{D(h.nodeName);var x=!0;break e}catch{}x=!1}x||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:pn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&fn.aa.h.call(this)}}A(fn,Re);var pn={2:"touch",3:"pen",4:"mouse"};fn.prototype.h=function(){fn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var mn="closure_listenable_"+(1e6*Math.random()|0),KS=0;function QS(a,h,f,g,x){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=x,this.key=++KS,this.da=this.fa=!1}function Ea(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ta(a){this.src=a,this.g={},this.h=0}Ta.prototype.add=function(a,h,f,g,x){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var $=Pc(a,h,g,x);return-1<$?(h=a[$],f||(h.fa=!1)):(h=new QS(h,this.src,O,!!g,x),h.fa=f,a.push(h)),h};function Ac(a,h){var f=h.type;if(f in a.g){var g=a.g[f],x=Array.prototype.indexOf.call(g,h,void 0),O;(O=0<=x)&&Array.prototype.splice.call(g,x,1),O&&(Ea(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Pc(a,h,f,g){for(var x=0;x<a.length;++x){var O=a[x];if(!O.da&&O.listener==h&&O.capture==!!f&&O.ha==g)return x}return-1}var kc="closure_lm_"+(1e6*Math.random()|0),xc={};function Im(a,h,f,g,x){if(Array.isArray(h)){for(var O=0;O<h.length;O++)Im(a,h[O],f,g,x);return null}return f=Rm(f),a&&a[mn]?a.K(h,f,c(g)?!!g.capture:!!g,x):YS(a,h,f,!1,g,x)}function YS(a,h,f,g,x,O){if(!h)throw Error("Invalid event type");var $=c(x)?!!x.capture:!!x,he=Oc(a);if(he||(a[kc]=he=new Ta(a)),f=he.add(h,f,g,$,O),f.proxy)return f;if(g=JS(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)dn||(x=$),x===void 0&&(x=!1),a.addEventListener(h.toString(),g,x);else if(a.attachEvent)a.attachEvent(Cm(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function JS(){function a(f){return h.call(a.src,a.listener,f)}const h=XS;return a}function Sm(a,h,f,g,x){if(Array.isArray(h))for(var O=0;O<h.length;O++)Sm(a,h[O],f,g,x);else g=c(g)?!!g.capture:!!g,f=Rm(f),a&&a[mn]?(a=a.i,h=String(h).toString(),h in a.g&&(O=a.g[h],f=Pc(O,f,g,x),-1<f&&(Ea(O[f]),Array.prototype.splice.call(O,f,1),O.length==0&&(delete a.g[h],a.h--)))):a&&(a=Oc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Pc(h,f,g,x)),(f=-1<a?h[a]:null)&&Nc(f))}function Nc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[mn])Ac(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(Cm(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Oc(h))?(Ac(f,a),f.h==0&&(f.src=null,h[kc]=null)):Ea(a)}}}function Cm(a){return a in xc?xc[a]:xc[a]="on"+a}function XS(a,h){if(a.da)a=!0;else{h=new fn(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&Nc(a),a=f.call(g,h)}return a}function Oc(a){return a=a[kc],a instanceof Ta?a:null}var Dc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rm(a){return typeof a=="function"?a:(a[Dc]||(a[Dc]=function(h){return a.handleEvent(h)}),a[Dc])}function Ge(){ce.call(this),this.i=new Ta(this),this.M=this,this.F=null}A(Ge,ce),Ge.prototype[mn]=!0,Ge.prototype.removeEventListener=function(a,h,f,g){Sm(this,a,h,f,g)};function st(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Re(h,a);else if(h instanceof Re)h.target=h.target||a;else{var x=h;h=new Re(g,a),S(h,x)}if(x=!0,f)for(var O=f.length-1;0<=O;O--){var $=h.g=f[O];x=Ia($,g,!0,h)&&x}if($=h.g=a,x=Ia($,g,!0,h)&&x,x=Ia($,g,!1,h)&&x,f)for(O=0;O<f.length;O++)$=h.g=f[O],x=Ia($,g,!1,h)&&x}Ge.prototype.N=function(){if(Ge.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)Ea(f[g]);delete a.g[h],a.h--}}this.F=null},Ge.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},Ge.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Ia(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var x=!0,O=0;O<h.length;++O){var $=h[O];if($&&!$.da&&$.capture==f){var he=$.listener,je=$.ha||$.src;$.fa&&Ac(a.i,$),x=he.call(je,g)!==!1&&x}}return x&&!g.defaultPrevented}function Am(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Pm(a){a.g=Am(()=>{a.g=null,a.i&&(a.i=!1,Pm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class ZS extends ce{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Pm(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ts(a){ce.call(this),this.h=a,this.g={}}A(Ts,ce);var km=[];function xm(a){j(a.g,function(h,f){this.g.hasOwnProperty(f)&&Nc(h)},a),a.g={}}Ts.prototype.N=function(){Ts.aa.N.call(this),xm(this)},Ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var bc=l.JSON.stringify,e1=l.JSON.parse,t1=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Lc(){}Lc.prototype.h=null;function Nm(a){return a.h||(a.h=a.i())}function Om(){}var Is={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Mc(){Re.call(this,"d")}A(Mc,Re);function Vc(){Re.call(this,"c")}A(Vc,Re);var xr={},Dm=null;function Sa(){return Dm=Dm||new Ge}xr.La="serverreachability";function bm(a){Re.call(this,xr.La,a)}A(bm,Re);function Ss(a){const h=Sa();st(h,new bm(h))}xr.STAT_EVENT="statevent";function Lm(a,h){Re.call(this,xr.STAT_EVENT,a),this.stat=h}A(Lm,Re);function ot(a){const h=Sa();st(h,new Lm(h,a))}xr.Ma="timingevent";function Mm(a,h){Re.call(this,xr.Ma,a),this.size=h}A(Mm,Re);function Cs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Rs(){this.g=!0}Rs.prototype.xa=function(){this.g=!1};function n1(a,h,f,g,x,O){a.info(function(){if(a.g)if(O)for(var $="",he=O.split("&"),je=0;je<he.length;je++){var oe=he[je].split("=");if(1<oe.length){var Ke=oe[0];oe=oe[1];var Qe=Ke.split("_");$=2<=Qe.length&&Qe[1]=="type"?$+(Ke+"="+oe+"&"):$+(Ke+"=redacted&")}}else $=null;else $=O;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+h+`
`+f+`
`+$})}function r1(a,h,f,g,x,O,$){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+h+`
`+f+`
`+O+" "+$})}function mi(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+s1(a,f)+(g?" "+g:"")})}function i1(a,h){a.info(function(){return"TIMEOUT: "+h})}Rs.prototype.info=function(){};function s1(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var x=g[1];if(Array.isArray(x)&&!(1>x.length)){var O=x[0];if(O!="noop"&&O!="stop"&&O!="close")for(var $=1;$<x.length;$++)x[$]=""}}}}return bc(f)}catch{return h}}var Ca={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Vm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fc;function Ra(){}A(Ra,Lc),Ra.prototype.g=function(){return new XMLHttpRequest},Ra.prototype.i=function(){return{}},Fc=new Ra;function jn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new Ts(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fm}function Fm(){this.i=null,this.g="",this.h=!1}var Um={},Uc={};function jc(a,h,f){a.L=1,a.v=xa(gn(h)),a.m=f,a.P=!0,jm(a,null)}function jm(a,h){a.F=Date.now(),Aa(a),a.A=gn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),eg(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Fm,a.g=vg(a.j,f?h:null,!a.m),0<a.O&&(a.M=new ZS(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(km[0]=x.toString()),x=km);for(var O=0;O<x.length;O++){var $=Im(f,x[O],g||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ss(),n1(a.i,a.u,a.A,a.l,a.R,a.m)}jn.prototype.ca=function(a){a=a.target;const h=this.M;h&&yn(a)==3?h.j():this.Y(a)},jn.prototype.Y=function(a){try{if(a==this.g)e:{const Qe=yn(this.g);var h=this.g.Ba();const vi=this.g.Z();if(!(3>Qe)&&(Qe!=3||this.g&&(this.h.h||this.g.oa()||ag(this.g)))){this.J||Qe!=4||h==7||(h==8||0>=vi?Ss(3):Ss(2)),$c(this);var f=this.g.Z();this.X=f;t:if($m(this)){var g=ag(this.g);a="";var x=g.length,O=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Nr(this),As(this);var $="";break t}this.h.i=new l.TextDecoder}for(h=0;h<x;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(O&&h==x-1)});g.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,r1(this.i,this.u,this.A,this.l,this.R,Qe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var he,je=this.g;if((he=je.g?je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(he)){var oe=he;break t}}oe=null}if(f=oe)mi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bc(this,f);else{this.o=!1,this.s=3,ot(12),Nr(this),As(this);break e}}if(this.P){f=!0;let Ft;for(;!this.J&&this.C<$.length;)if(Ft=o1(this,$),Ft==Uc){Qe==4&&(this.s=4,ot(14),f=!1),mi(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==Um){this.s=4,ot(15),mi(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else mi(this.i,this.l,Ft,null),Bc(this,Ft);if($m(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qe!=4||$.length!=0||this.h.h||(this.s=1,ot(16),f=!1),this.o=this.o&&f,!f)mi(this.i,this.l,$,"[Invalid Chunked Response]"),Nr(this),As(this);else if(0<$.length&&!this.W){this.W=!0;var Ke=this.j;Ke.g==this&&Ke.ba&&!Ke.M&&(Ke.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Kc(Ke),Ke.M=!0,ot(11))}}else mi(this.i,this.l,$,null),Bc(this,$);Qe==4&&Nr(this),this.o&&!this.J&&(Qe==4?pg(this.j,this):(this.o=!1,Aa(this)))}else I1(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),Nr(this),As(this)}}}catch{}finally{}};function $m(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function o1(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Uc:(f=Number(h.substring(f,g)),isNaN(f)?Um:(g+=1,g+f>h.length?Uc:(h=h.slice(g,g+f),a.C=g+f,h)))}jn.prototype.cancel=function(){this.J=!0,Nr(this)};function Aa(a){a.S=Date.now()+a.I,Bm(a,a.I)}function Bm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Cs(m(a.ba,a),h)}function $c(a){a.B&&(l.clearTimeout(a.B),a.B=null)}jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(i1(this.i,this.A),this.L!=2&&(Ss(),ot(17)),Nr(this),this.s=2,As(this)):Bm(this,this.S-a)};function As(a){a.j.G==0||a.J||pg(a.j,a)}function Nr(a){$c(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,xm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Bc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||zc(f.h,a))){if(!a.K&&zc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ma(f),ba(f);else break e;Gc(f),ot(18)}}else f.za=x[1],0<f.za-f.T&&37500>x[2]&&f.F&&f.v==0&&!f.C&&(f.C=Cs(m(f.Za,f),6e3));if(1>=Hm(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Dr(f,11)}else if((a.K||f.g==a)&&Ma(f),!v(h))for(x=f.Da.g.parse(h),h=0;h<x.length;h++){let oe=x[h];if(f.T=oe[0],oe=oe[1],f.G==2)if(oe[0]=="c"){f.K=oe[1],f.ia=oe[2];const Ke=oe[3];Ke!=null&&(f.la=Ke,f.j.info("VER="+f.la));const Qe=oe[4];Qe!=null&&(f.Aa=Qe,f.j.info("SVER="+f.Aa));const vi=oe[5];vi!=null&&typeof vi=="number"&&0<vi&&(g=1.5*vi,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ft=a.g;if(Ft){const Fa=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fa){var O=g.h;O.g||Fa.indexOf("spdy")==-1&&Fa.indexOf("quic")==-1&&Fa.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(Wc(O,O.h),O.h=null))}if(g.D){const Qc=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;Qc&&(g.ya=Qc,fe(g.I,g.D,Qc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var $=a;if(g.qa=yg(g,g.J?g.ia:null,g.W),$.K){qm(g.h,$);var he=$,je=g.L;je&&(he.I=je),he.B&&($c(he),Aa(he)),g.g=$}else dg(g);0<f.i.length&&La(f)}else oe[0]!="stop"&&oe[0]!="close"||Dr(f,7);else f.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?Dr(f,7):qc(f):oe[0]!="noop"&&f.l&&f.l.ta(oe),f.v=0)}}Ss(4)}catch{}}var a1=class{constructor(a,h){this.g=a,this.map=h}};function zm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wm(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Hm(a){return a.h?1:a.g?a.g.size:0}function zc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Wc(a,h){a.g?a.g.add(h):a.h=h}function qm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}zm.prototype.cancel=function(){if(this.i=Gm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Gm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return k(a.i)}function l1(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function u1(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Km(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=u1(a),g=l1(a),x=g.length,O=0;O<x;O++)h.call(void 0,g[O],f&&f[O],a)}var Qm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function c1(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),x=null;if(0<=g){var O=a[f].substring(0,g);x=a[f].substring(g+1)}else O=a[f];h(O,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Or(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Or){this.h=a.h,Pa(this,a.j),this.o=a.o,this.g=a.g,ka(this,a.s),this.l=a.l;var h=a.i,f=new xs;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Ym(this,f),this.m=a.m}else a&&(h=String(a).match(Qm))?(this.h=!1,Pa(this,h[1]||"",!0),this.o=Ps(h[2]||""),this.g=Ps(h[3]||"",!0),ka(this,h[4]),this.l=Ps(h[5]||"",!0),Ym(this,h[6]||"",!0),this.m=Ps(h[7]||"")):(this.h=!1,this.i=new xs(null,this.h))}Or.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ks(h,Jm,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ks(h,Jm,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ks(f,f.charAt(0)=="/"?f1:d1,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ks(f,m1)),a.join("")};function gn(a){return new Or(a)}function Pa(a,h,f){a.j=f?Ps(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function ka(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Ym(a,h,f){h instanceof xs?(a.i=h,g1(a.i,a.h)):(f||(h=ks(h,p1)),a.i=new xs(h,a.h))}function fe(a,h,f){a.i.set(h,f)}function xa(a){return fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ps(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ks(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,h1),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function h1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Jm=/[#\/\?@]/g,d1=/[#\?:]/g,f1=/[#\?]/g,p1=/[#\?@]/g,m1=/#/g;function xs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function $n(a){a.g||(a.g=new Map,a.h=0,a.i&&c1(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=xs.prototype,t.add=function(a,h){$n(this),this.i=null,a=gi(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Xm(a,h){$n(a),h=gi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Zm(a,h){return $n(a),h=gi(a,h),a.g.has(h)}t.forEach=function(a,h){$n(this),this.g.forEach(function(f,g){f.forEach(function(x){a.call(h,x,g,this)},this)},this)},t.na=function(){$n(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const x=a[g];for(let O=0;O<x.length;O++)f.push(h[g])}return f},t.V=function(a){$n(this);let h=[];if(typeof a=="string")Zm(this,a)&&(h=h.concat(this.g.get(gi(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return $n(this),this.i=null,a=gi(this,a),Zm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function eg(a,h,f){Xm(a,h),0<f.length&&(a.i=null,a.g.set(gi(a,h),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const O=encodeURIComponent(String(g)),$=this.V(g);for(g=0;g<$.length;g++){var x=O;$[g]!==""&&(x+="="+encodeURIComponent(String($[g]))),a.push(x)}}return this.i=a.join("&")};function gi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function g1(a,h){h&&!a.j&&($n(a),a.i=null,a.g.forEach(function(f,g){var x=g.toLowerCase();g!=x&&(Xm(this,g),eg(this,x,f))},a)),a.j=h}function y1(a,h){const f=new Rs;if(l.Image){const g=new Image;g.onload=_(Bn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=_(Bn,f,"TestLoadImage: error",!1,h,g),g.onabort=_(Bn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(Bn,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function v1(a,h){const f=new Rs,g=new AbortController,x=setTimeout(()=>{g.abort(),Bn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(x),O.ok?Bn(f,"TestPingServer: ok",!0,h):Bn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),Bn(f,"TestPingServer: error",!1,h)})}function Bn(a,h,f,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(f)}catch{}}function _1(){this.g=new t1}function w1(a,h,f){const g=f||"";try{Km(a,function(x,O){let $=x;c(x)&&($=bc(x)),h.push(g+O+"="+encodeURIComponent($))})}catch(x){throw h.push(g+"type="+encodeURIComponent("_badmap")),x}}function Na(a){this.l=a.Ub||null,this.j=a.eb||!1}A(Na,Lc),Na.prototype.g=function(){return new Oa(this.l,this.j)},Na.prototype.i=function(a){return function(){return a}}({});function Oa(a,h){Ge.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Oa,Ge),t=Oa.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Os(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ns(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Os(this)),this.g&&(this.readyState=3,Os(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function tg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ns(this):Os(this),this.readyState==3&&tg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ns(this))},t.Qa=function(a){this.g&&(this.response=a,Ns(this))},t.ga=function(){this.g&&Ns(this)};function Ns(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Os(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Os(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Oa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ng(a){let h="";return j(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Hc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=ng(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):fe(a,h,f))}function Se(a){Ge.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Se,Ge);var E1=/^https?$/i,T1=["POST","PUT"];t=Se.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fc.g(),this.v=this.o?Nm(this.o):Nm(Fc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(O){rg(this,O);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)f.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())f.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(O=>O.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(T1,h,void 0))||g||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,$]of f)this.g.setRequestHeader(O,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{og(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){rg(this,O)}};function rg(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,ig(a),Da(a)}function ig(a){a.A||(a.A=!0,st(a,"complete"),st(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,st(this,"complete"),st(this,"abort"),Da(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Da(this,!0)),Se.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?sg(this):this.bb())},t.bb=function(){sg(this)};function sg(a){if(a.h&&typeof o<"u"&&(!a.v[1]||yn(a)!=4||a.Z()!=2)){if(a.u&&yn(a)==4)Am(a.Ea,0,a);else if(st(a,"readystatechange"),yn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=$===0){var x=String(a.D).match(Qm)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),g=!E1.test(x?x.toLowerCase():"")}f=g}if(f)st(a,"complete"),st(a,"success");else{a.m=6;try{var O=2<yn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",ig(a)}}finally{Da(a)}}}}function Da(a,h){if(a.g){og(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||st(a,"ready");try{f.onreadystatechange=g}catch{}}}function og(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function yn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),e1(h)}};function ag(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function I1(a){const h={};a=(a.g&&2<=yn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var f=P(a[g]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const O=h[x]||[];h[x]=O,O.push(f)}T(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ds(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function lg(a){this.Aa=0,this.i=[],this.j=new Rs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ds("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ds("baseRetryDelayMs",5e3,a),this.cb=Ds("retryDelaySeedMs",1e4,a),this.Wa=Ds("forwardChannelMaxRetries",2,a),this.wa=Ds("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new zm(a&&a.concurrentRequestLimit),this.Da=new _1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=lg.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){ot(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=yg(this,null,this.W),La(this)};function qc(a){if(ug(a),a.G==3){var h=a.U++,f=gn(a.I);if(fe(f,"SID",a.K),fe(f,"RID",h),fe(f,"TYPE","terminate"),bs(a,f),h=new jn(a,a.j,h),h.L=2,h.v=xa(gn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=vg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Aa(h)}gg(a)}function ba(a){a.g&&(Kc(a),a.g.cancel(),a.g=null)}function ug(a){ba(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ma(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function La(a){if(!Wm(a.h)&&!a.s){a.s=!0;var h=a.Ga;hn||X(),B||(hn(),B=!0),Q.add(h,a),a.B=0}}function S1(a,h){return Hm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Cs(m(a.Ga,a,h),mg(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new jn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=y(O),S(O,this.S)):O=this.S),this.m!==null||this.O||(x.H=O,O=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=hg(this,x,h),f=gn(this.I),fe(f,"RID",a),fe(f,"CVER",22),this.D&&fe(f,"X-HTTP-Session-Id",this.D),bs(this,f),O&&(this.O?h="headers="+encodeURIComponent(String(ng(O)))+"&"+h:this.m&&Hc(f,this.m,O)),Wc(this.h,x),this.Ua&&fe(f,"TYPE","init"),this.P?(fe(f,"$req",h),fe(f,"SID","null"),x.T=!0,jc(x,f,null)):jc(x,f,h),this.G=2}}else this.G==3&&(a?cg(this,a):this.i.length==0||Wm(this.h)||cg(this))};function cg(a,h){var f;h?f=h.l:f=a.U++;const g=gn(a.I);fe(g,"SID",a.K),fe(g,"RID",f),fe(g,"AID",a.T),bs(a,g),a.m&&a.o&&Hc(g,a.m,a.o),f=new jn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=hg(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Wc(a.h,f),jc(f,g,h)}function bs(a,h){a.H&&j(a.H,function(f,g){fe(h,g,f)}),a.l&&Km({},function(f,g){fe(h,g,f)})}function hg(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var x=a.i;let O=-1;for(;;){const $=["count="+f];O==-1?0<f?(O=x[0].g,$.push("ofs="+O)):O=0:$.push("ofs="+O);let he=!0;for(let je=0;je<f;je++){let oe=x[je].g;const Ke=x[je].map;if(oe-=O,0>oe)O=Math.max(0,x[je].g-100),he=!1;else try{w1(Ke,$,"req"+oe+"_")}catch{g&&g(Ke)}}if(he){g=$.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function dg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;hn||X(),B||(hn(),B=!0),Q.add(h,a),a.v=0}}function Gc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Cs(m(a.Fa,a),mg(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,fg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Cs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),ba(this),fg(this))};function Kc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function fg(a){a.g=new jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=gn(a.qa);fe(h,"RID","rpc"),fe(h,"SID",a.K),fe(h,"AID",a.T),fe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&fe(h,"TO",a.ja),fe(h,"TYPE","xmlhttp"),bs(a,h),a.m&&a.o&&Hc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=xa(gn(h)),f.m=null,f.P=!0,jm(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ba(this),Gc(this),ot(19))};function Ma(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function pg(a,h){var f=null;if(a.g==h){Ma(a),Kc(a),a.g=null;var g=2}else if(zc(a.h,h))f=h.D,qm(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var x=a.B;g=Sa(),st(g,new Mm(g,f)),La(a)}else dg(a);else if(x=h.s,x==3||x==0&&0<h.X||!(g==1&&S1(a,h)||g==2&&Gc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),x){case 1:Dr(a,5);break;case 4:Dr(a,10);break;case 3:Dr(a,6);break;default:Dr(a,2)}}}function mg(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Dr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const x=!g;g=new Or(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Pa(g,"https"),xa(g),x?y1(g.toString(),f):v1(g.toString(),f)}else ot(2);a.G=0,a.l&&a.l.sa(h),gg(a),ug(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function gg(a){if(a.G=0,a.ka=[],a.l){const h=Gm(a.h);(h.length!=0||a.i.length!=0)&&(C(a.ka,h),C(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function yg(a,h,f){var g=f instanceof Or?gn(f):new Or(f);if(g.g!="")h&&(g.g=h+"."+g.g),ka(g,g.s);else{var x=l.location;g=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;var O=new Or(null);g&&Pa(O,g),h&&(O.g=h),x&&ka(O,x),f&&(O.l=f),g=O}return f=a.D,h=a.ya,f&&h&&fe(g,f,h),fe(g,"VER",a.la),bs(a,g),g}function vg(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Se(new Na({eb:f})):new Se(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function _g(){}t=_g.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Va(){}Va.prototype.g=function(a,h){return new _t(a,h)};function _t(a,h){Ge.call(this),this.g=new lg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new yi(this)}A(_t,Ge),_t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){qc(this.g)},_t.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=bc(a),a=f);h.i.push(new a1(h.Ya++,a)),h.G==3&&La(h)},_t.prototype.N=function(){this.g.l=null,delete this.j,qc(this.g),delete this.g,_t.aa.N.call(this)};function wg(a){Mc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(wg,Mc);function Eg(){Vc.call(this),this.status=1}A(Eg,Vc);function yi(a){this.g=a}A(yi,_g),yi.prototype.ua=function(){st(this.g,"a")},yi.prototype.ta=function(a){st(this.g,new wg(a))},yi.prototype.sa=function(a){st(this.g,new Eg)},yi.prototype.ra=function(){st(this.g,"b")},Va.prototype.createWebChannel=Va.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,II=function(){return new Va},TI=function(){return Sa()},EI=xr,lf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ca.NO_ERROR=0,Ca.TIMEOUT=8,Ca.HTTP_ERROR=6,bl=Ca,Vm.COMPLETE="complete",wI=Vm,Om.EventType=Is,Is.OPEN="a",Is.CLOSE="b",Is.ERROR="c",Is.MESSAGE="d",Ge.prototype.listen=Ge.prototype.K,eo=Om,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,_I=Se}).apply(typeof hl<"u"?hl:typeof self<"u"?self:typeof window<"u"?window:{});const zv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys="11.0.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new oc("@firebase/firestore");function Ei(){return ti.logLevel}function z(t,...e){if(ti.logLevel<=te.DEBUG){const n=e.map(Kp);ti.debug(`Firestore (${ys}): ${t}`,...n)}}function Vn(t,...e){if(ti.logLevel<=te.ERROR){const n=e.map(Kp);ti.error(`Firestore (${ys}): ${t}`,...n)}}function is(t,...e){if(ti.logLevel<=te.WARN){const n=e.map(Kp);ti.warn(`Firestore (${ys}): ${t}`,...n)}}function Kp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${ys}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function ae(t,e){t||K()}function J(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oL{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class aL{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class lL{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new SI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new Ze(e)}}class uL{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class cL{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new uL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ae(this.o===void 0);const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new hL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=fL(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function ss(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Le(0,0))}static max(){return new Y(new Le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ko.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ko?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ye extends Ko{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const pL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Ko{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return pL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ye.fromString(e))}static fromName(e){return new q(ye.fromString(e).popFirst(5))}static empty(){return new q(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ye(e.slice()))}}function mL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new vr(i,q.empty(),e)}function gL(t){return new vr(t.readTime,t.key,-1)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(Y.min(),q.empty(),-1)}static max(){return new vr(Y.max(),q.empty(),-1)}}function yL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _L{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==vL)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function wL(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _s(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}dc.oe=-1;function fc(t){return t==null}function Ru(t){return t===0&&1/t==-1/0}function EL(t){return typeof t=="number"&&Number.isInteger(t)&&!Ru(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TL(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Wv(e)),e=IL(t.get(n),e);return Wv(e)}function IL(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Wv(t){return t+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function RI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new dl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new dl(this.root,e,this.comparator,!1)}getReverseIterator(){return new dl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new dl(this.root,e,this.comparator,!0)}}class dl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Be.RED,this.left=i??Be.EMPTY,this.right=s??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qv(this.data.getIterator())}getIteratorFrom(e){return new qv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class qv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new Me(ze.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ss(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new AI("Invalid base64 string: "+s):s}}(e);return new qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const SL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(t){if(ae(!!t),typeof t=="string"){let e=0;const n=SL.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wr(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function pc(t){const e=t.mapValue.fields.__previous_value__;return Qp(e)?pc(e):e}function Qo(t){const e=_r(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Yo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Yo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Qp(t)?4:AL(t)?9007199254740991:RL(t)?10:11:K()}function un(t,e){if(t===e)return!0;const n=Er(t);if(n!==Er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Qo(t).isEqual(Qo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=_r(i.timestampValue),l=_r(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return wr(i.bytesValue).isEqual(wr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),l=Ae(s.doubleValue);return o===l?Ru(o)===Ru(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Hv(o)!==Hv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!un(o[u],l[u])))return!1;return!0}(t,e);default:return K()}}function Jo(t,e){return(t.values||[]).find(n=>un(n,e))!==void 0}function os(t,e){if(t===e)return 0;const n=Er(t),r=Er(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Gv(t.timestampValue,e.timestampValue);case 4:return Gv(Qo(t),Qo(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(s,o){const l=wr(s),u=wr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=re(l[c],u[c]);if(d!==0)return d}return re(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=re(Ae(s.latitude),Ae(o.latitude));return l!==0?l:re(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Kv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},m=o.fields||{},_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,A=(u=m.value)===null||u===void 0?void 0:u.arrayValue,k=re(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Kv(_,A)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===fl.mapValue&&o===fl.mapValue)return 0;if(s===fl.mapValue)return 1;if(o===fl.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=re(u[p],d[p]);if(m!==0)return m;const _=os(l[u[p]],c[d[p]]);if(_!==0)return _}return re(u.length,d.length)}(t.mapValue,e.mapValue);default:throw K()}}function Gv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=_r(t),r=_r(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function Kv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=os(n[i],r[i]);if(s)return s}return re(n.length,r.length)}function as(t){return uf(t)}function uf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_r(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return wr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=uf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${uf(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function Ll(t){switch(Er(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=pc(t);return e?16+Ll(e):16;case 5:return 2*t.stringValue.length;case 6:return wr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Ll(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return hi(r.fields,(s,o)=>{i+=s.length+Ll(o)}),i}(t.mapValue);default:throw K()}}function cf(t){return!!t&&"integerValue"in t}function Yp(t){return!!t&&"arrayValue"in t}function Qv(t){return!!t&&"nullValue"in t}function Yv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ml(t){return!!t&&"mapValue"in t}function RL(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function go(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=go(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=go(t.arrayValue.values[n]);return e}return Object.assign({},t)}function AL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ml(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=go(n)}setAll(e){let n=ze.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=go(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ml(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ml(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){hi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nt(go(this.value))}}function PI(t){const e=[];return hi(t.fields,(n,r)=>{const i=new ze([n]);if(Ml(r)){const s=PI(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new tt(e,0,Y.min(),Y.min(),Y.min(),Nt.empty(),0)}static newFoundDocument(e,n,r,i){return new tt(e,1,n,Y.min(),r,i,0)}static newNoDocument(e,n){return new tt(e,2,n,Y.min(),Y.min(),Nt.empty(),0)}static newUnknownDocument(e,n){return new tt(e,3,n,Y.min(),Y.min(),Nt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Nt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Nt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n){this.position=e,this.inclusive=n}}function Jv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=os(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Xv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n="asc"){this.field=e,this.dir=n}}function PL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kI{}class De extends kI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new xL(e,n,r):n==="array-contains"?new DL(e,r):n==="in"?new bL(e,r):n==="not-in"?new LL(e,r):n==="array-contains-any"?new ML(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new NL(e,r):new OL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(os(n,this.value)):n!==null&&Er(this.value)===Er(n)&&this.matchesComparison(os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends kI{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new cn(e,n)}matches(e){return xI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function xI(t){return t.op==="and"}function NI(t){return kL(t)&&xI(t)}function kL(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}function hf(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+as(t.value);if(NI(t))return t.filters.map(e=>hf(e)).join(",");{const e=t.filters.map(n=>hf(n)).join(",");return`${t.op}(${e})`}}function OI(t,e){return t instanceof De?function(r,i){return i instanceof De&&r.op===i.op&&r.field.isEqual(i.field)&&un(r.value,i.value)}(t,e):t instanceof cn?function(r,i){return i instanceof cn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&OI(o,i.filters[l]),!0):!1}(t,e):void K()}function DI(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${as(n.value)}`}(t):t instanceof cn?function(n){return n.op.toString()+" {"+n.getFilters().map(DI).join(" ,")+"}"}(t):"Filter"}class xL extends De{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class NL extends De{constructor(e,n){super(e,"in",n),this.keys=bI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class OL extends De{constructor(e,n){super(e,"not-in",n),this.keys=bI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function bI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class DL extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Yp(n)&&Jo(n.arrayValue,this.value)}}class bL extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Jo(this.value.arrayValue,n)}}class LL extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(Jo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Jo(this.value.arrayValue,n)}}class ML extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Yp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Jo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Zv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new VL(t,e,n,r,i,s,o)}function Jp(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),fc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>as(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>as(r)).join(",")),e.ue=n}return e.ue}function Xp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!OI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Xv(t.startAt,e.startAt)&&Xv(t.endAt,e.endAt)}function df(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function FL(t,e,n,r,i,s,o,l){return new mc(t,e,n,r,i,s,o,l)}function Zp(t){return new mc(t)}function e_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function UL(t){return t.collectionGroup!==null}function yo(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Me(ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Pu(s,r))}),n.has(ze.keyField().canonicalString())||e.ce.push(new Pu(ze.keyField(),r))}return e.ce}function on(t){const e=J(t);return e.le||(e.le=jL(e,yo(t))),e.le}function jL(t,e){if(t.limitType==="F")return Zv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Pu(i.field,s)});const n=t.endAt?new Au(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Au(t.startAt.position,t.startAt.inclusive):null;return Zv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ff(t,e,n){return new mc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function gc(t,e){return Xp(on(t),on(e))&&t.limitType===e.limitType}function LI(t){return`${Jp(on(t))}|lt:${t.limitType}`}function Ti(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>DI(i)).join(", ")}]`),fc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>as(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>as(i)).join(",")),`Target(${r})`}(on(t))}; limitType=${t.limitType})`}function yc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of yo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Jv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,yo(r),i)||r.endAt&&!function(o,l,u){const c=Jv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,yo(r),i))}(t,e)}function $L(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function MI(t){return(e,n)=>{let r=!1;for(const i of yo(t)){const s=BL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function BL(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?os(u,c):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return RI(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zL=new Ie(q.comparator);function Fn(){return zL}const VI=new Ie(q.comparator);function to(...t){let e=VI;for(const n of t)e=e.insert(n.key,n);return e}function FI(t){let e=VI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Br(){return vo()}function UI(){return vo()}function vo(){return new di(t=>t.toString(),(t,e)=>t.isEqual(e))}const WL=new Ie(q.comparator),HL=new Me(q.comparator);function ne(...t){let e=HL;for(const n of t)e=e.add(n);return e}const qL=new Me(re);function GL(){return qL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ru(e)?"-0":e}}function jI(t){return{integerValue:""+t}}function KL(t,e){return EL(e)?jI(e):em(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(){this._=void 0}}function QL(t,e,n){return t instanceof ku?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Qp(s)&&(s=pc(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Xo?BI(t,e):t instanceof Zo?zI(t,e):function(i,s){const o=$I(i,s),l=t_(o)+t_(i.Pe);return cf(o)&&cf(i.Pe)?jI(l):em(i.serializer,l)}(t,e)}function YL(t,e,n){return t instanceof Xo?BI(t,e):t instanceof Zo?zI(t,e):n}function $I(t,e){return t instanceof xu?function(r){return cf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ku extends vc{}class Xo extends vc{constructor(e){super(),this.elements=e}}function BI(t,e){const n=WI(e);for(const r of t.elements)n.some(i=>un(i,r))||n.push(r);return{arrayValue:{values:n}}}class Zo extends vc{constructor(e){super(),this.elements=e}}function zI(t,e){let n=WI(e);for(const r of t.elements)n=n.filter(i=>!un(i,r));return{arrayValue:{values:n}}}class xu extends vc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function t_(t){return Ae(t.integerValue||t.doubleValue)}function WI(t){return Yp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function JL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Xo&&i instanceof Xo||r instanceof Zo&&i instanceof Zo?ss(r.elements,i.elements,un):r instanceof xu&&i instanceof xu?un(r.Pe,i.Pe):r instanceof ku&&i instanceof ku}(t.transform,e.transform)}class XL{constructor(e,n){this.version=e,this.transformResults=n}}class kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class _c{}function HI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new GI(t.key,kn.none()):new ma(t.key,t.data,kn.none());{const n=t.data,r=Nt.empty();let i=new Me(ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new fi(t.key,r,new Wt(i.toArray()),kn.none())}}function ZL(t,e,n){t instanceof ma?function(i,s,o){const l=i.value.clone(),u=r_(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof fi?function(i,s,o){if(!Vl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=r_(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(qI(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _o(t,e,n,r){return t instanceof ma?function(s,o,l,u){if(!Vl(s.precondition,o))return l;const c=s.value.clone(),d=i_(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof fi?function(s,o,l,u){if(!Vl(s.precondition,o))return l;const c=i_(s.fieldTransforms,u,o),d=o.data;return d.setAll(qI(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Vl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function e2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=$I(r.transform,i||null);s!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,s))}return n||null}function n_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ss(r,i,(s,o)=>JL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ma extends _c{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fi extends _c{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function qI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function r_(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,YL(o,l,n[i]))}return r}function i_(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,QL(s,o,e))}return r}class GI extends _c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class t2 extends _c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ZL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=UI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=HI(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,r)=>n_(n,r))&&ss(this.baseMutations,e.baseMutations,(n,r)=>n_(n,r))}}class tm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return WL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new tm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke,ie;function s2(t){switch(t){default:return K();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function KI(t){if(t===void 0)return Vn("GRPC error has no .code"),M.UNKNOWN;switch(t){case ke.OK:return M.OK;case ke.CANCELLED:return M.CANCELLED;case ke.UNKNOWN:return M.UNKNOWN;case ke.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case ke.INTERNAL:return M.INTERNAL;case ke.UNAVAILABLE:return M.UNAVAILABLE;case ke.UNAUTHENTICATED:return M.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case ke.NOT_FOUND:return M.NOT_FOUND;case ke.ALREADY_EXISTS:return M.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return M.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case ke.ABORTED:return M.ABORTED;case ke.OUT_OF_RANGE:return M.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return M.UNIMPLEMENTED;case ke.DATA_LOSS:return M.DATA_LOSS;default:return K()}}(ie=ke||(ke={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a2=new Hr([4294967295,4294967295],0);function s_(t){const e=o2().encode(t),n=new vI;return n.update(e),new Uint8Array(n.digest())}function o_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Hr([n,r],0),new Hr([i,s],0)]}class nm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new no(`Invalid padding: ${n}`);if(r<0)throw new no(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new no(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new no(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Hr.fromNumber(this.Te)}Ee(e,n,r){let i=e.add(n.multiply(Hr.fromNumber(r)));return i.compare(a2)===1&&(i=new Hr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=s_(e),[r,i]=o_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new nm(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=s_(e),[r,i]=o_(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class no extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ga.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new wc(Y.min(),i,new Ie(re),Fn(),ne())}}class ga{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ga(r,n,ne(),ne(),ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class QI{constructor(e,n){this.targetId=e,this.me=n}}class YI{constructor(e,n,r=qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class a_{constructor(){this.fe=0,this.ge=l_(),this.pe=qe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new ga(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=l_()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class l2{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fn(),this.qe=pl(),this.Qe=pl(),this.Ke=new Ie(re)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.me.count,i=this.Ye(n);if(i){const s=i.target;if(df(s))if(r===0){const o=new q(s.path);this.We(n,o,tt.newNoDocument(o,Y.min()))}else ae(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),u=l?this.et(l,e,o):1;if(u!==0){this.He(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=wr(r).toUint8Array()}catch(u){if(u instanceof AI)return is("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new nm(o,i,s)}catch(u){return is(u instanceof no?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Ye(o);if(l){if(s.current&&df(l.target)){const u=new q(l.target.path);this.st(u).has(o)||this.ot(o,u)||this.We(o,u,tt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.Qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new wc(e,n,this.Ke,this.ke,r);return this.ke=Fn(),this.qe=pl(),this.Qe=pl(),this.Ke=new Ie(re),i}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,n)?i.Fe(n,1):i.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new a_,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new Me(re),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Me(re),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new a_),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function pl(){return new Ie(q.comparator)}function l_(){return new Ie(q.comparator)}const u2={asc:"ASCENDING",desc:"DESCENDING"},c2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},h2={and:"AND",or:"OR"};class d2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function pf(t,e){return t.useProto3Json||fc(e)?e:{value:e}}function Nu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function JI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function f2(t,e){return Nu(t,e.toTimestamp())}function an(t){return ae(!!t),Y.fromTimestamp(function(n){const r=_r(n);return new Le(r.seconds,r.nanos)}(t))}function rm(t,e){return mf(t,e).canonicalString()}function mf(t,e){const n=function(i){return new ye(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function XI(t){const e=ye.fromString(t);return ae(rS(e)),e}function gf(t,e){return rm(t.databaseId,e.path)}function Vh(t,e){const n=XI(e);if(n.get(1)!==t.databaseId.projectId)throw new H(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(eS(n))}function ZI(t,e){return rm(t.databaseId,e)}function p2(t){const e=XI(t);return e.length===4?ye.emptyPath():eS(e)}function yf(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function eS(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function u_(t,e,n){return{name:gf(t,e),fields:n.value.mapValue.fields}}function m2(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ae(d===void 0||typeof d=="string"),qe.fromBase64String(d||"")):(ae(d===void 0||d instanceof Buffer||d instanceof Uint8Array),qe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?M.UNKNOWN:KI(c.code);return new H(d,c.message||"")}(o);n=new YI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vh(t,r.document.name),s=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):Y.min(),l=new Nt({mapValue:{fields:r.document.fields}}),u=tt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Fl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Vh(t,r.document),s=r.readTime?an(r.readTime):Y.min(),o=tt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Fl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Vh(t,r.document),s=r.removedTargetIds||[];n=new Fl([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new i2(i,s),l=r.targetId;n=new QI(l,o)}}return n}function g2(t,e){let n;if(e instanceof ma)n={update:u_(t,e.key,e.value)};else if(e instanceof GI)n={delete:gf(t,e.key)};else if(e instanceof fi)n={update:u_(t,e.key,e.data),updateMask:C2(e.fieldMask)};else{if(!(e instanceof t2))return K();n={verify:gf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ku)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Xo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Zo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xu)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:f2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function y2(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?an(i.updateTime):an(s);return o.isEqual(Y.min())&&(o=an(s)),new XL(o,i.transformResults||[])}(n,e))):[]}function v2(t,e){return{documents:[ZI(t,e.path)]}}function _2(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ZI(t,i);const s=function(c){if(c.length!==0)return nS(cn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ii(m.field),direction:T2(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=pf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ct:n,parent:i}}function w2(t){let e=p2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=tS(p);return m instanceof cn&&NI(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(A){return new Pu(Si(A.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,fc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,_=p.values||[];return new Au(_,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,_=p.values||[];return new Au(_,m)}(n.endAt)),FL(e,i,o,s,l,"F",u,c)}function E2(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function tS(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Si(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Si(n.unaryFilter.field);return De.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Si(n.unaryFilter.field);return De.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Si(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return De.create(Si(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cn.create(n.compositeFilter.filters.map(r=>tS(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function T2(t){return u2[t]}function I2(t){return c2[t]}function S2(t){return h2[t]}function Ii(t){return{fieldPath:t.canonicalString()}}function Si(t){return ze.fromServerFormat(t.fieldPath)}function nS(t){return t instanceof De?function(n){if(n.op==="=="){if(Yv(n.value))return{unaryFilter:{field:Ii(n.field),op:"IS_NAN"}};if(Qv(n.value))return{unaryFilter:{field:Ii(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Yv(n.value))return{unaryFilter:{field:Ii(n.field),op:"IS_NOT_NAN"}};if(Qv(n.value))return{unaryFilter:{field:Ii(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ii(n.field),op:I2(n.op),value:n.value}}}(t):t instanceof cn?function(n){const r=n.getFilters().map(i=>nS(i));return r.length===1?r[0]:{compositeFilter:{op:S2(n.op),filters:r}}}(t):K()}function C2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function rS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r,i,s=Y.min(),o=Y.min(),l=qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new nr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e){this.ht=e}}function A2(t){const e=w2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ff(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(){this.ln=new k2}addToCollectionParentIndex(e,n){return this.ln.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(vr.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class k2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Me(ye.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Me(ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(41943040,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new ls(0)}static Qn(){return new ls(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_([t,e],[n,r]){const i=re(t,n);return i===0?re(e,r):i}class x2{constructor(e){this.Gn=e,this.buffer=new Me(h_),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();h_(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class N2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){_s(n)?z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await vs(n)}await this.Yn(3e5)})}}class O2{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return b.resolve(dc.oe);const r=new x2(n);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(c_)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),c_):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Ei()<=te.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function D2(t,e){return new O2(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(){this.changes=new di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&_o(r.mutation,i,Wt.empty(),Le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=Br();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=to();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Fn();const o=vo(),l=function(){return vo()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof fi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),_o(d.mutation,c,d.mutation.getFieldMask(),Le.now())):o.set(c.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new L2(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=vo();let i=new Ie((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Wt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=UI();d.forEach(m=>{if(!s.has(m)){const _=HI(n.get(m),r.get(m));_!==null&&p.set(m,_),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):UL(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(Br());let l=-1,u=s;return o.next(c=>b.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?b.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(d=>({batchId:l,changes:FI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=to();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=to();return this.indexManager.getCollectionParents(e,s).next(l=>b.forEach(l,u=>{const c=function(p,m){return new mc(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,tt.newInvalidDocument(d)))});let l=to();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&_o(d.mutation,c,Wt.empty(),Le.now()),yc(n,c)&&(l=l.insert(u,c))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return b.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:an(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(i){return{name:i.name,query:A2(i.bundledQuery),readTime:an(i.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(){this.overlays=new Ie(q.comparator),this.Er=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Br();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Tt(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=Br(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=Br(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=Br(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return b.resolve(l)}Tt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new r2(n,r));let s=this.Er.get(n);s===void 0&&(s=ne(),this.Er.set(n,s)),this.Er.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(){this.dr=new Me(Ve.Ar),this.Rr=new Me(Ve.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new Ve(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new q(new ye([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.Rr.forEachInRange([r,i],o=>{this.gr(o),s.push(o.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new q(new ye([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=ne();return this.Rr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return q.comparator(e.key,n.key)||re(e.br,n.br)}static Vr(e,n){return re(e.br,n.br)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new Me(Ve.Ar)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new n2(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.vr=this.vr.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Fr(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],o=>{const l=this.Cr(o.br);s.push(l)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Me(re);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,o],l=>{r=r.add(l.br)})}),b.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new q(s),0);let l=new Me(re);return this.vr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.br)),!0)},o),b.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return b.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new Ve(n,0),i=this.vr.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e){this.Nr=e,this.docs=function(){return new Ie(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=Fn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Fn();const o=n.path,l=new q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||yL(gL(d),r)<=0||(i.has(d.key)||yc(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Lr(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new B2(this)}getSize(e){return b.resolve(this.size)}}class B2 extends b2{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e){this.persistence=e,this.Br=new di(n=>Jp(n),Xp),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.kr=0,this.qr=new im,this.targetCount=0,this.Qr=ls.qn()}forEachTarget(e,n){return this.Br.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),b.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new ls(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Un(n),b.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.qr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n){this.Kr={},this.overlays={},this.$r=new dc(0),this.Ur=!1,this.Ur=!0,this.Wr=new U2,this.referenceDelegate=e(this),this.Gr=new z2(this),this.indexManager=new P2,this.remoteDocumentCache=function(i){return new $2(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new R2(n),this.jr=new V2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new F2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new j2(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new W2(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,n){return b.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class W2 extends _L{constructor(e){super(),this.currentSequenceNumber=e}}class sm{constructor(e){this.persistence=e,this.Zr=new im,this.Xr=null}static ei(e){return new sm(e)}get ti(){if(this.Xr)return this.Xr;throw K()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),b.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.ti,r=>{const i=q.fromPath(r);return this.ni(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return b.or([()=>b.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Ou{constructor(e,n){this.persistence=e,this.ri=new di(r=>TL(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=D2(this,n)}static ei(e,n){return new Ou(e,n)}Hr(){}Jr(e){return b.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return b.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?b.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,o=>this.ir(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),b.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),b.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Ll(e.data.value)),n}ir(e,n,r){return b.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ri.get(n);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=i}static zi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new om(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return sx()?8:wL(rt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Xi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.es(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new H2;return this.ts(e,n,o).next(l=>{if(s.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>s.result)}ns(e,n,r,i){return r.documentReadCount<this.Ji?(Ei()<=te.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Ti(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),b.resolve()):(Ei()<=te.DEBUG&&z("QueryEngine","Query:",Ti(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(Ei()<=te.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Ti(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,on(n))):b.resolve())}Xi(e,n){if(e_(n))return b.resolve(null);let r=on(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ff(n,null,"F"),r=on(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.rs(n,l);return this.ss(n,c,o,u.readTime)?this.Xi(e,ff(n,null,"F")):this.os(e,c,n,u)}))})))}es(e,n,r,i){return e_(n)||i.isEqual(Y.min())?b.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const o=this.rs(n,s);return this.ss(n,o,r,i)?b.resolve(null):(Ei()<=te.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ti(n)),this.os(e,o,n,mL(i,-1)).next(l=>l))})}rs(e,n){let r=new Me(MI(e));return n.forEach((i,s)=>{yc(e,s)&&(r=r.add(s))}),r}ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,n,r){return Ei()<=te.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Ti(n)),this.Zi.getDocumentsMatchingQuery(e,n,vr.min(),r)}os(e,n,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(e,n,r,i){this.persistence=e,this._s=n,this.serializer=i,this.us=new Ie(re),this.cs=new di(s=>Jp(s),Xp),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new M2(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function K2(t,e,n,r){return new G2(t,e,n,r)}async function sS(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ts:c,removedBatchIds:o,addedBatchIds:l}))})})}function Q2(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let _=b.resolve();return m.forEach(A=>{_=_.next(()=>d.getEntry(u,A)).next(k=>{const C=c.docVersions.get(A);ae(C!==null),k.version.compareTo(C)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function oS(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function Y2(t,e){const n=J(t),r=e.snapshotVersion;let i=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});i=n.us;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Gr.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(s,d.addedDocuments,p)));let _=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(qe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(p,_),function(k,C,w){return k.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(m,_,d)&&l.push(n.Gr.updateTargetData(s,_))});let u=Fn(),c=ne();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(J2(s,o,e.documentUpdates).next(d=>{u=d.Is,c=d.Es})),!r.isEqual(Y.min())){const d=n.Gr.getLastRemoteSnapshotVersion(s).next(p=>n.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return b.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.us=i,s))}function J2(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Fn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Is:o,Es:i}})}function X2(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Z2(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Gr.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Gr.allocateTargetId(r).next(o=>(i=new nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function vf(t,e,n){const r=J(t),i=r.us.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!_s(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function d_(t,e,n){const r=J(t);let i=Y.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=J(u),m=p.cs.get(d);return m!==void 0?b.resolve(p.us.get(m)):p.Gr.getTargetData(c,d)}(r,o,on(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ne())).next(l=>(eM(r,$L(e),l),{documents:l,ds:s})))}function eM(t,e,n){let r=t.ls.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ls.set(e,r)}class f_{constructor(){this.activeTargetIds=GL()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tM{constructor(){this._o=new f_,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new f_,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{uo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml=null;function Fh(){return ml===null?ml=function(){return 268435456+Math.round(2147483648*Math.random())}():ml++,"0x"+ml.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iM{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection";class sM extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(n,r,i,s,o){const l=Fh(),u=this.No(n,r.toUriEncodedString());z("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(c,s,o),this.Bo(n,u,c,i).then(d=>(z("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw is("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}ko(n,r,i,s,o,l){return this.Oo(n,r,i,s,o)}Lo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ys}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}No(n,r){const i=rM[n];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,i){const s=Fh();return new Promise((o,l)=>{const u=new _I;u.setWithCredentials(!0),u.listenOnce(wI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case bl.NO_ERROR:const d=u.getResponseJson();z(Xe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case bl.TIMEOUT:z(Xe,`RPC '${e}' ${s} timed out`),l(new H(M.DEADLINE_EXCEEDED,"Request time out"));break;case bl.HTTP_ERROR:const p=u.getStatus();if(z(Xe,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const A=function(C){const w=C.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(w)>=0?w:M.UNKNOWN}(_.status);l(new H(A,_.message))}else l(new H(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(M.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{z(Xe,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);z(Xe,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}qo(e,n,r){const i=Fh(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=II(),l=TI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Lo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");z(Xe,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,_=!1;const A=new iM({Eo:C=>{_?z(Xe,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(m||(z(Xe,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),z(Xe,`RPC '${e}' stream ${i} sending:`,C),p.send(C))},Ao:()=>p.close()}),k=(C,w,v)=>{C.listen(w,I=>{try{v(I)}catch(D){setTimeout(()=>{throw D},0)}})};return k(p,eo.EventType.OPEN,()=>{_||(z(Xe,`RPC '${e}' stream ${i} transport opened.`),A.So())}),k(p,eo.EventType.CLOSE,()=>{_||(_=!0,z(Xe,`RPC '${e}' stream ${i} transport closed`),A.Do())}),k(p,eo.EventType.ERROR,C=>{_||(_=!0,is(Xe,`RPC '${e}' stream ${i} transport errored:`,C),A.Do(new H(M.UNAVAILABLE,"The operation could not be completed")))}),k(p,eo.EventType.MESSAGE,C=>{var w;if(!_){const v=C.data[0];ae(!!v);const I=v,D=(I==null?void 0:I.error)||((w=I[0])===null||w===void 0?void 0:w.error);if(D){z(Xe,`RPC '${e}' stream ${i} received error:`,D);const V=D.status;let j=function(E){const S=ke[E];if(S!==void 0)return KI(S)}(V),T=D.message;j===void 0&&(j=M.INTERNAL,T="Unknown error status: "+V+" with message "+D.message),_=!0,A.Do(new H(j,T)),p.close()}else z(Xe,`RPC '${e}' stream ${i} received:`,v),A.vo(v)}}),k(l,EI.STAT_EVENT,C=>{C.stat===lf.PROXY?z(Xe,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===lf.NOPROXY&&z(Xe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.bo()},0),A}}function Uh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(t){return new d2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e,n,r,i,s,o,l,u){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new aS(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===n&&this.I_(r,i)},r=>{e(()=>{const i=new H(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oM extends lS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=m2(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?an(o.readTime):Y.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=yf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=df(u)?{documents:v2(s,u)}:{query:_2(s,u).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=JI(s,o.resumeToken);const c=pf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=Nu(s,o.snapshotVersion.toTimestamp());const c=pf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=E2(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=yf(this.serializer),n.removeTarget=e,this.c_(n)}}class aM extends lS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=y2(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=yf(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>g2(this.serializer,r))};this.c_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lM extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new H(M.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Oo(e,mf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(M.UNKNOWN,s.toString())})}ko(e,n,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,mf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(M.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class uM{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Vn(n),this.C_=!1):z("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cM{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{pi(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=J(u);c.k_.add(4),await ya(c),c.K_.set("Unknown"),c.k_.delete(4),await Tc(c)}(this))})}),this.K_=new uM(r,i)}}async function Tc(t){if(pi(t))for(const e of t.q_)await e(!0)}async function ya(t){for(const e of t.q_)await e(!1)}function uS(t,e){const n=J(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),cm(n)?um(n):ws(n).s_()&&lm(n,e))}function am(t,e){const n=J(t),r=ws(n);n.B_.delete(e),r.s_()&&cS(n,e),n.B_.size===0&&(r.s_()?r.a_():pi(n)&&n.K_.set("Unknown"))}function lm(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ws(t).V_(e)}function cS(t,e){t.U_.xe(e),ws(t).m_(e)}function um(t){t.U_=new l2({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ws(t).start(),t.K_.F_()}function cm(t){return pi(t)&&!ws(t).i_()&&t.B_.size>0}function pi(t){return J(t).k_.size===0}function hS(t){t.U_=void 0}async function hM(t){t.K_.set("Online")}async function dM(t){t.B_.forEach((e,n)=>{lm(t,e)})}async function fM(t,e){hS(t),cm(t)?(t.K_.O_(e),um(t)):t.K_.set("Unknown")}async function pM(t,e,n){if(t.K_.set("Online"),e instanceof YI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.B_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.B_.delete(l),i.U_.removeTarget(l))}(t,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Du(t,r)}else if(e instanceof Fl?t.U_.$e(e):e instanceof QI?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(Y.min()))try{const r=await oS(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.U_.it(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.B_.get(c);d&&s.B_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.B_.get(u);if(!d)return;s.B_.set(u,d.withResumeToken(qe.EMPTY_BYTE_STRING,d.snapshotVersion)),cS(s,u);const p=new nr(d.target,u,c,d.sequenceNumber);lm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await Du(t,r)}}async function Du(t,e,n){if(!_s(e))throw e;t.k_.add(1),await ya(t),t.K_.set("Offline"),n||(n=()=>oS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Tc(t)})}function dS(t,e){return e().catch(n=>Du(t,n,e))}async function Ic(t){const e=J(t),n=Tr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;mM(e);)try{const i=await X2(e.localStore,r);if(i===null){e.L_.length===0&&n.a_();break}r=i.batchId,gM(e,i)}catch(i){await Du(e,i)}fS(e)&&pS(e)}function mM(t){return pi(t)&&t.L_.length<10}function gM(t,e){t.L_.push(e);const n=Tr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function fS(t){return pi(t)&&!Tr(t).i_()&&t.L_.length>0}function pS(t){Tr(t).start()}async function yM(t){Tr(t).w_()}async function vM(t){const e=Tr(t);for(const n of t.L_)e.g_(n.mutations)}async function _M(t,e,n){const r=t.L_.shift(),i=tm.from(r,e,n);await dS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ic(t)}async function wM(t,e){e&&Tr(t).f_&&await async function(r,i){if(function(o){return s2(o)&&o!==M.ABORTED}(i.code)){const s=r.L_.shift();Tr(r).__(),await dS(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ic(r)}}(t,e),fS(t)&&pS(t)}async function m_(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=pi(n);n.k_.add(3),await ya(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Tc(n)}async function EM(t,e){const n=J(t);e?(n.k_.delete(2),await Tc(n)):e||(n.k_.add(2),await ya(n),n.K_.set("Unknown"))}function ws(t){return t.W_||(t.W_=function(n,r,i){const s=J(n);return s.b_(),new oM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:hM.bind(null,t),mo:dM.bind(null,t),po:fM.bind(null,t),R_:pM.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),cm(t)?um(t):t.K_.set("Unknown")):(await t.W_.stop(),hS(t))})),t.W_}function Tr(t){return t.G_||(t.G_=function(n,r,i){const s=J(n);return s.b_(),new aM(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:yM.bind(null,t),po:wM.bind(null,t),p_:vM.bind(null,t),y_:_M.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Ic(t)):(await t.G_.stop(),t.L_.length>0&&(z("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new hm(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dm(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),_s(t))return new H(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{static emptySet(e){return new Gi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=to(),this.sortedSet=new Ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(){this.z_=new Ie(q.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):K():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class us{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new us(e,n,Gi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&gc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class IM{constructor(){this.queries=y_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=y_(),s.forEach((o,l)=>{for(const u of l.J_)u.onError(r)})})(this,new H(M.ABORTED,"Firestore shutting down"))}}function y_(){return new di(t=>LI(t),gc)}async function mS(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new TM,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await n.onListen(i,!0);break;case 1:s.H_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=dm(o,`Initialization of query '${Ti(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.J_.push(e),e.ea(n.onlineState),s.H_&&e.ta(s.H_)&&fm(n)}async function gS(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.J_.indexOf(e);o>=0&&(s.J_.splice(o,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function SM(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.J_)l.ta(i)&&(r=!0);o.H_=i}}r&&fm(n)}function CM(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.J_)s.onError(n);r.queries.delete(e)}function fm(t){t.X_.forEach(e=>{e.next()})}var _f,v_;(v_=_f||(_f={})).na="default",v_.Cache="cache";class yS{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==_f.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.key=e}}class _S{constructor(e){this.key=e}}class RM{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ne(),this.mutatedKeys=ne(),this.Va=MI(e),this.ma=new Gi(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new g_,i=n?n.ma:this.ma;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),_=yc(this.query,p)?p:null,A=!!m&&this.mutatedKeys.has(m.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let C=!1;m&&_?m.data.isEqual(_.data)?A!==k&&(r.track({type:3,doc:_}),C=!0):this.ya(m,_)||(r.track({type:2,doc:_}),C=!0,(u&&this.Va(_,u)>0||c&&this.Va(_,c)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),C=!0):m&&!_&&(r.track({type:1,doc:m}),C=!0,(u||c)&&(l=!0)),C&&(_?(o=o.add(_),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:l,mutatedKeys:s}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(_,A){const k=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return k(_)-k(A)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),i=i!=null&&i;const l=n&&!i?this.Sa():[],u=this.Ra.size===0&&this.current&&!i?1:0,c=u!==this.Aa;return this.Aa=u,o.length!==0||c?{snapshot:new us(this.query,e.ma,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new g_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ne(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new _S(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new vS(r))}),n}va(e){this.da=e.ds,this.Ra=ne();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return us.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class AM{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class PM{constructor(e){this.key=e,this.Fa=!1}}class kM{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new di(l=>LI(l),gc),this.Oa=new Map,this.Na=new Set,this.La=new Ie(q.comparator),this.Ba=new Map,this.ka=new im,this.qa={},this.Qa=new Map,this.Ka=ls.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function xM(t,e,n=!0){const r=CS(t);let i;const s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await wS(r,e,n,!0),i}async function NM(t,e){const n=CS(t);await wS(n,e,!0,!1)}async function wS(t,e,n,r){const i=await Z2(t.localStore,on(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await OM(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&uS(t.remoteStore,i),l}async function OM(t,e,n,r,i){t.Ua=(p,m,_)=>async function(k,C,w,v){let I=C.view.ga(w);I.ss&&(I=await d_(k.localStore,C.query,!1).then(({documents:T})=>C.view.ga(T,I)));const D=v&&v.targetChanges.get(C.targetId),V=v&&v.targetMismatches.get(C.targetId)!=null,j=C.view.applyChanges(I,k.isPrimaryClient,D,V);return w_(k,C.targetId,j.ba),j.snapshot}(t,p,m,_);const s=await d_(t.localStore,e,!0),o=new RM(e,s.ds),l=o.ga(s.documents),u=ga.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);w_(t,n,c.ba);const d=new AM(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),c.snapshot}async function DM(t,e,n){const r=J(t),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(o=>!gc(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await vf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&am(r.remoteStore,i.targetId),wf(r,i.targetId)}).catch(vs)):(wf(r,i.targetId),await vf(r.localStore,i.targetId,!0))}async function bM(t,e){const n=J(t),r=n.xa.get(e),i=n.Oa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),am(n.remoteStore,r.targetId))}async function LM(t,e,n){const r=BM(t);try{const i=await function(o,l){const u=J(o),c=Le.now(),d=l.reduce((_,A)=>_.add(A.key),ne());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let A=Fn(),k=ne();return u.hs.getEntries(_,d).next(C=>{A=C,A.forEach((w,v)=>{v.isValidDocument()||(k=k.add(w))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,A)).next(C=>{p=C;const w=[];for(const v of l){const I=e2(v,p.get(v.key).overlayedDocument);I!=null&&w.push(new fi(v.key,I,PI(I.value.mapValue),kn.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,w,l)}).next(C=>{m=C;const w=C.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(_,C.batchId,w)})}).then(()=>({batchId:m.batchId,changes:FI(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.qa[o.currentUser.toKey()];c||(c=new Ie(re)),c=c.insert(l,u),o.qa[o.currentUser.toKey()]=c}(r,i.batchId,n),await va(r,i.changes),await Ic(r.remoteStore)}catch(i){const s=dm(i,"Failed to persist write");n.reject(s)}}async function ES(t,e){const n=J(t);try{const r=await Y2(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ba.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Fa=!0:i.modifiedDocuments.size>0?ae(o.Fa):i.removedDocuments.size>0&&(ae(o.Fa),o.Fa=!1))}),await va(n,r,e)}catch(r){await vs(r)}}function __(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xa.forEach((s,o)=>{const l=o.view.ea(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.J_)m.ea(l)&&(c=!0)}),c&&fm(u)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function MM(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ba.get(e),s=i&&i.key;if(s){let o=new Ie(q.comparator);o=o.insert(s,tt.newNoDocument(s,Y.min()));const l=ne().add(s),u=new wc(Y.min(),new Map,new Ie(re),o,l);await ES(r,u),r.La=r.La.remove(s),r.Ba.delete(e),pm(r)}else await vf(r.localStore,e,!1).then(()=>wf(r,e,n)).catch(vs)}async function VM(t,e){const n=J(t),r=e.batch.batchId;try{const i=await Q2(n.localStore,e);IS(n,r,null),TS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await va(n,i)}catch(i){await vs(i)}}async function FM(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ae(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);IS(r,e,n),TS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await va(r,i)}catch(i){await vs(i)}}function TS(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function IS(t,e,n){const r=J(t);let i=r.qa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function wf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||SS(t,r)})}function SS(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(am(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),pm(t))}function w_(t,e,n){for(const r of n)r instanceof vS?(t.ka.addReference(r.key,e),UM(t,r)):r instanceof _S?(z("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||SS(t,r.key)):K()}function UM(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(z("SyncEngine","New document in limbo: "+n),t.Na.add(r),pm(t))}function pm(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new q(ye.fromString(e)),r=t.Ka.next();t.Ba.set(r,new PM(n)),t.La=t.La.insert(n,r),uS(t.remoteStore,new nr(on(Zp(n.path)),r,"TargetPurposeLimboResolution",dc.oe))}}async function va(t,e,n){const r=J(t),i=[],s=[],o=[];r.xa.isEmpty()||(r.xa.forEach((l,u)=>{o.push(r.Ua(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=om.zi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ma.R_(i),await async function(u,c){const d=J(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>b.forEach(c,m=>b.forEach(m.Wi,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>b.forEach(m.Gi,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!_s(p))throw p;z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const _=d.us.get(m),A=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(A);d.us=d.us.insert(m,k)}}}(r.localStore,s))}async function jM(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await sS(n.localStore,e);n.currentUser=e,function(s,o){s.Qa.forEach(l=>{l.forEach(u=>{u.reject(new H(M.CANCELLED,o))})}),s.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await va(n,r.Ts)}}function $M(t,e){const n=J(t),r=n.Ba.get(e);if(r&&r.Fa)return ne().add(r.key);{let i=ne();const s=n.Oa.get(e);if(!s)return i;for(const o of s){const l=n.xa.get(o);i=i.unionWith(l.view.fa)}return i}}function CS(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ES.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$M.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MM.bind(null,e),e.Ma.R_=SM.bind(null,e.eventManager),e.Ma.Wa=CM.bind(null,e.eventManager),e}function BM(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=VM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FM.bind(null,e),e}class bu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ec(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return K2(this.persistence,new q2,e.initialUser,this.serializer)}ja(e){return new iS(sm.ei,this.serializer)}za(e){return new tM}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}bu.provider={build:()=>new bu};class zM extends bu{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){ae(this.persistence.referenceDelegate instanceof Ou);const r=this.persistence.referenceDelegate.garbageCollector;return new N2(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new iS(r=>Ou.ei(r,n),this.serializer)}}class Ef{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>__(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jM.bind(null,this.syncEngine),await EM(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IM}()}createDatastore(e){const n=Ec(e.databaseInfo.databaseId),r=function(s){return new sM(s)}(e.databaseInfo);return function(s,o,l,u){return new lM(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new cM(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>__(this.syncEngine,n,0),function(){return p_.p()?new p_:new nM}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new kM(i,s,o,l,u,c);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);z("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await ya(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ef.provider={build:()=>new Ef};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WM{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ze.UNAUTHENTICATED,this.clientId=CI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jh(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await sS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function E_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await HM(t);z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>m_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>m_(e.remoteStore,i)),t._onlineComponents=e}async function HM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await jh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===M.FAILED_PRECONDITION||i.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;is("Error using user provided cache. Falling back to memory cache: "+n),await jh(t,new bu)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await jh(t,new zM(void 0));return t._offlineComponents}async function AS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await E_(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await E_(t,new Ef))),t._onlineComponents}function qM(t){return AS(t).then(e=>e.syncEngine)}async function PS(t){const e=await AS(t),n=e.eventManager;return n.onListen=xM.bind(null,e.syncEngine),n.onUnlisten=DM.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=NM.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=bM.bind(null,e.syncEngine),n}function GM(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new RS({next:m=>{d.eu(),o.enqueueAndForget(()=>gS(s,p));const _=m.docs.has(l);!_&&m.fromCache?c.reject(new H(M.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&u&&u.source==="server"?c.reject(new H(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new yS(Zp(l.path),d,{includeMetadataChanges:!0,ua:!0});return mS(s,p)}(await PS(t),t.asyncQueue,e,n,r)),r.promise}function KM(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new RS({next:m=>{d.eu(),o.enqueueAndForget(()=>gS(s,p)),m.fromCache&&u.source==="server"?c.reject(new H(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new yS(l,d,{includeMetadataChanges:!0,ua:!0});return mS(s,p)}(await PS(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kS(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T_=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(t,e,n){if(!n)throw new H(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QM(t,e,n,r){if(e===!0&&r===!0)throw new H(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function I_(t){if(!q.isDocumentKey(t))throw new H(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function S_(t){if(q.isDocumentKey(t))throw new H(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function ni(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mm(t);throw new H(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kS((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Sc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new C_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new C_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oL;switch(r.type){case"firstParty":return new cL(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=T_.get(n);r&&(z("ComponentProvider","Removing Datastore"),T_.delete(n),r.terminate())}(this),Promise.resolve()}}function YM(t,e,n,r={}){var i;const s=(t=ni(t,Sc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ze.MOCK_USER;else{l=Zk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new H(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ze(c)}t._authCredentials=new aL(new SI(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Cc(this.firestore,e,this._query)}}class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class pr extends Cc{constructor(e,n,r){super(e,n,Zp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new q(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function JM(t,e,...n){if(t=it(t),xS("collection","path",e),t instanceof Sc){const r=ye.fromString(e,...n);return S_(r),new pr(t,null,r)}{if(!(t instanceof St||t instanceof pr))throw new H(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return S_(r),new pr(t.firestore,null,r)}}function R_(t,e,...n){if(t=it(t),arguments.length===1&&(e=CI.newId()),xS("doc","path",e),t instanceof Sc){const r=ye.fromString(e,...n);return I_(r),new St(t,null,new q(r))}{if(!(t instanceof St||t instanceof pr))throw new H(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return I_(r),new St(t.firestore,t instanceof pr?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new aS(this,"async_queue_retry"),this.fu=()=>{const r=Uh();r&&z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=Uh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=Uh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Pn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!_s(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const i=hm.createAndSchedule(this,e,n,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&K()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class Rc extends Sc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new A_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new A_(e),this._firestoreClient=void 0,await e}}}function XM(t,e){const n=typeof t=="object"?t:Np(),r=typeof t=="string"?t:"(default)",i=ci(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Jk("firestore");s&&YM(i,...s)}return i}function gm(t){if(t._terminated)throw new H(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ZM(t),t._firestoreClient}function ZM(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new CL(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,kS(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new WM(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(qe.fromBase64String(e))}catch(n){throw new H(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cs(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eV=/^__.*__$/;class tV{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fi(e,this.data,this.fieldMask,n,this.fieldTransforms):new ma(e,this.data,n,this.fieldTransforms)}}function OS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class wm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new wm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Lu(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(OS(this.Mu)&&eV.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class nV{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ec(e)}$u(e,n,r,i=!1){return new wm({Mu:e,methodName:n,Ku:r,path:ze.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rV(t){const e=t._freezeSettings(),n=Ec(t._databaseId);return new nV(t._databaseId,!!e.ignoreUndefinedProperties,n)}function iV(t,e,n,r,i,s={}){const o=t.$u(s.merge||s.mergeFields?2:0,e,n,i);MS("Data must be an object, but it was:",o,r);const l=bS(r,o);let u,c;if(s.merge)u=new Wt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=sV(e,p,n);if(!o.contains(m))throw new H(M.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);aV(d,m)||d.push(m)}u=new Wt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new tV(new Nt(l),u,c)}function DS(t,e){if(LS(t=it(t)))return MS("Unsupported field value:",e,t),bS(t,e);if(t instanceof NS)return function(r,i){if(!OS(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=DS(l,i.ku(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=it(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return KL(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Le.fromDate(r);return{timestampValue:Nu(i.serializer,s)}}if(r instanceof Le){const s=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nu(i.serializer,s)}}if(r instanceof vm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cs)return{bytesValue:JI(i.serializer,r._byteString)};if(r instanceof St){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:rm(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof _m)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.qu("VectorValues must only contain numeric values.");return em(l.serializer,u)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${mm(r)}`)}(t,e)}function bS(t,e){const n={};return RI(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hi(t,(r,i)=>{const s=DS(i,e.Ou(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function LS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof vm||t instanceof cs||t instanceof St||t instanceof NS||t instanceof _m)}function MS(t,e,n){if(!LS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=mm(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function sV(t,e,n){if((e=it(e))instanceof ym)return e._internalPath;if(typeof e=="string")return VS(t,e);throw Lu("Field path arguments must be of type string or ",t,!1,void 0,n)}const oV=new RegExp("[~\\*/\\[\\]]");function VS(t,e,n){if(e.search(oV)>=0)throw Lu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ym(...e.split("."))._internalPath}catch{throw Lu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(M.INVALID_ARGUMENT,l+t+u)}function aV(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lV(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(US("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lV extends FS{data(){return super.data()}}function US(t,e){return typeof e=="string"?VS(t,e):e instanceof ym?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uV(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cV{convertValue(e,n="none"){switch(Er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ae(o.doubleValue));return new _m(s)}convertGeoPoint(e){return new vm(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=pc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Qo(e));default:return null}}convertTimestamp(e){const n=_r(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);ae(rS(r));const i=new Yo(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Vn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hV(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jS extends FS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ul(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(US("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ul extends jS{data(e={}){return super.data(e)}}class dV{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ro(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ul(this._firestore,this._userDataWriter,r.key,r,new ro(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ul(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ro(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ul(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ro(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:fV(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function fV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(t){t=ni(t,St);const e=ni(t.firestore,Rc);return GM(gm(e),t._key).then(n=>gV(e,t,n))}class $S extends cV{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function pV(t){t=ni(t,Cc);const e=ni(t.firestore,Rc),n=gm(e),r=new $S(e);return uV(t._query),KM(n,t._query).then(i=>new dV(e,r,t,i))}function k_(t,e,n){t=ni(t,St);const r=ni(t.firestore,Rc),i=hV(t.converter,e,n);return mV(r,[iV(rV(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,kn.none())])}function mV(t,e){return function(r,i){const s=new Pn;return r.asyncQueue.enqueueAndForget(async()=>LM(await qM(r),i,s)),s.promise}(gm(t),e)}function gV(t,e,n){const r=n.docs.get(e._key),i=new $S(t);return new jS(t,i,e._key,r,new ro(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ys=i})(ms),ln(new Qt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Rc(new lL(r.getProvider("auth-internal")),new dL(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yo(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),bt(zv,"4.7.5",e),bt(zv,"4.7.5","esm2017")})();const yV={apiKey:"AIzaSyDhhVW3UXGOe3qHk67VEAc-T3Up1yn_dfU",authDomain:"note-reviewer.firebaseapp.com",projectId:"note-reviewer",storageBucket:"note-reviewer.firebasestorage.app",messagingSenderId:"351388938954",appId:"1:351388938954:web:910ae59264dd989502fa33",measurementId:"G-GF028TZW5Q"},Em=fT(yV);nL(Em);const Vi=VD(Em),Tf=XM(Em),vV=new wn,BS=U.createContext(),_a=()=>U.useContext(BS),_V=({children:t})=>{const[e,n]=U.useState(null);return U.useEffect(()=>{const r=Vi.onAuthStateChanged(i=>{n(i)});return()=>r()},[]),L.jsx(BS.Provider,{value:{currentUser:e},children:t})},zS=t=>{const e=_a(),[n,r]=U.useState(null);return U.useEffect(()=>{const s=async()=>{console.log("Fetching Note Set Data");try{if(e&&e.currentUser){const o=R_(Tf,`users/${e.currentUser.uid}/note-sets`,t),l=await P_(o);l.exists()?(console.log("Document data:",l.data()),r({...l.data(),noteSetId:t})):console.log("No such document!")}else console.log("User not logged in or user.currentUser is null")}catch(o){console.log("Error fetching document:",o)}};e&&e.currentUser&&t&&s()},[e,t]),[n,r,async()=>{console.log("Saving Note Set Data");try{if(e&&e.currentUser){const s=R_(Tf,`users/${e.currentUser.uid}/note-sets`,t);(await P_(s)).exists()?await k_(s,{noteSetName:n.noteSetName,noteSetId:n.noteSetId,noteSetRaw:n.noteSetRaw,noteSetFacts:n.noteSetFacts},{merge:!0}):await k_(s,{noteSetName:n.noteSetName,noteSetId:n.noteSetId,noteSetRaw:n.noteSetRaw,noteSetFacts:n.noteSetFacts})}alert("User data saved successfully")}catch(s){alert("Error saving user data"),console.log(s)}}]},wV=()=>{const t=_a(),[e,n]=U.useState([]);if(e.length===0)try{if(t&&t.currentUser){const r=JM(Tf,`users/${t.currentUser.uid}/note-sets`);pV(r).then(i=>{const s=[];i.forEach(o=>{s.push({...o.data(),noteSetId:o.id})}),n(s)})}}catch(r){console.log(r)}return e},EV=()=>{const t=_a(),e=wV();return t.currentUser===null?L.jsx("div",{className:"flex flex-col justify-center align-middle h-full",children:L.jsxs("div",{className:"text-center text-white bg-primary text-2xl p-5",children:["Please Sign in to view your notes",L.jsx(vE,{className:"block text-xl bg-secondary-light text-black mx-auto w-fit p-2 rounded-md mt-4 hover:scale-105 hover:shadow-lg transition-transform",to:"/login",children:"Sign In"})]})}):L.jsxs("div",{className:"flex flex-col justify-start align-middle text-center gap-8",children:[L.jsx("button",{className:"self-start bg-primary p-2 m-2 rounded-full text-white hover:scale-105 transform transition-all duration-200",onClick:()=>{RO(Vi)},children:"Sign Out"}),L.jsxs("h1",{className:"mt-12 text-5xl font-bold",children:["Hello,"," ",L.jsx("span",{className:"text-primary",children:t.currentUser?t.currentUser.displayName:""})]}),L.jsx(zk,{noteSets:e})]})},TV=({children:t})=>L.jsx("div",{className:"bg-primary-light min-h-screen",children:t});var x_;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(x_||(x_={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N_;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(N_||(N_={}));var O_;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(O_||(O_={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D_=["user","model","function","system"];var b_;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(b_||(b_={}));var L_;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(L_||(L_={}));var M_;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(M_||(M_={}));var V_;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(V_||(V_={}));var wo;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER"})(wo||(wo={}));var F_;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(F_||(F_={}));var U_;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(U_||(U_={}));var j_;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(j_||(j_={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class wi extends ft{constructor(e,n){super(e),this.response=n}}class WS extends ft{constructor(e,n,r,i){super(e),this.status=n,this.statusText=r,this.errorDetails=i}}class mr extends ft{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IV="https://generativelanguage.googleapis.com",SV="v1beta",CV="0.21.0",RV="genai-js";var ri;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(ri||(ri={}));class AV{constructor(e,n,r,i,s){this.model=e,this.task=n,this.apiKey=r,this.stream=i,this.requestOptions=s}toString(){var e,n;const r=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||SV;let s=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||IV}/${r}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}function PV(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${RV}/${CV}`),e.join(" ")}async function kV(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",PV(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let r=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(i){throw new mr(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${i.message}`)}for(const[i,s]of r.entries()){if(i==="x-goog-api-key")throw new mr(`Cannot set reserved header name ${i}`);if(i==="x-goog-api-client")throw new mr(`Header name ${i} can only be set using the apiClient field`);n.append(i,s)}}return n}async function xV(t,e,n,r,i,s){const o=new AV(t,e,n,r,s);return{url:o.toString(),fetchOptions:Object.assign(Object.assign({},bV(s)),{method:"POST",headers:await kV(o),body:i})}}async function wa(t,e,n,r,i,s={},o=fetch){const{url:l,fetchOptions:u}=await xV(t,e,n,r,i,s);return NV(l,u,o)}async function NV(t,e,n=fetch){let r;try{r=await n(t,e)}catch(i){OV(i,t)}return r.ok||await DV(r,t),r}function OV(t,e){let n=t;throw t instanceof WS||t instanceof mr||(n=new ft(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function DV(t,e){let n="",r;try{const i=await t.json();n=i.error.message,i.error.details&&(n+=` ${JSON.stringify(i.error.details)}`,r=i.error.details)}catch{}throw new WS(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,r)}function bV(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),jl(t.candidates[0]))throw new wi(`${Gn(t)}`,t);return LV(t)}else if(t.promptFeedback)throw new wi(`Text not available. ${Gn(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),jl(t.candidates[0]))throw new wi(`${Gn(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),$_(t)[0]}else if(t.promptFeedback)throw new wi(`Function call not available. ${Gn(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),jl(t.candidates[0]))throw new wi(`${Gn(t)}`,t);return $_(t)}else if(t.promptFeedback)throw new wi(`Function call not available. ${Gn(t)}`,t)},t}function LV(t){var e,n,r,i;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(i=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)o.text&&s.push(o.text),o.executableCode&&s.push("\n```"+o.executableCode.language+`
`+o.executableCode.code+"\n```\n"),o.codeExecutionResult&&s.push("\n```\n"+o.codeExecutionResult.output+"\n```\n");return s.length>0?s.join(""):""}function $_(t){var e,n,r,i;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(i=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)o.functionCall&&s.push(o.functionCall);if(s.length>0)return s}const MV=[wo.RECITATION,wo.SAFETY,wo.LANGUAGE];function jl(t){return!!t.finishReason&&MV.includes(t.finishReason)}function Gn(t){var e,n,r;let i="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)i+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(i+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(i+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((r=t.candidates)===null||r===void 0)&&r[0]){const s=t.candidates[0];jl(s)&&(i+=`Candidate was blocked due to ${s.finishReason}`,s.finishMessage&&(i+=`: ${s.finishMessage}`))}return i}function ea(t){return this instanceof ea?(this.v=t,this):new ea(t)}function VV(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(m){r[m]&&(i[m]=function(_){return new Promise(function(A,k){s.push([m,_,A,k])>1||l(m,_)})})}function l(m,_){try{u(r[m](_))}catch(A){p(s[0][3],A)}}function u(m){m.value instanceof ea?Promise.resolve(m.value.v).then(c,d):p(s[0][2],m)}function c(m){l("next",m)}function d(m){l("throw",m)}function p(m,_){m(_),s.shift(),s.length&&l(s[0][0],s[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B_=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function FV(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=$V(e),[r,i]=n.tee();return{stream:jV(r),response:UV(i)}}async function UV(t){const e=[],n=t.getReader();for(;;){const{done:r,value:i}=await n.read();if(r)return Tm(BV(e));e.push(i)}}function jV(t){return VV(this,arguments,function*(){const n=t.getReader();for(;;){const{value:r,done:i}=yield ea(n.read());if(i)break;yield yield ea(Tm(r))}})}function $V(t){const e=t.getReader();return new ReadableStream({start(r){let i="";return s();function s(){return e.read().then(({value:o,done:l})=>{if(l){if(i.trim()){r.error(new ft("Failed to parse stream"));return}r.close();return}i+=o;let u=i.match(B_),c;for(;u;){try{c=JSON.parse(u[1])}catch{r.error(new ft(`Error parsing JSON response: "${u[1]}"`));return}r.enqueue(c),i=i.substring(u[0].length),u=i.match(B_)}return s()})}}})}function BV(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of t){if(r.candidates)for(const i of r.candidates){const s=i.index;if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:i.index}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].groundingMetadata=i.groundingMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[]});const o={};for(const l of i.content.parts)l.text&&(o.text=l.text),l.functionCall&&(o.functionCall=l.functionCall),l.executableCode&&(o.executableCode=l.executableCode),l.codeExecutionResult&&(o.codeExecutionResult=l.codeExecutionResult),Object.keys(o).length===0&&(o.text=""),n.candidates[s].content.parts.push(o)}}r.usageMetadata&&(n.usageMetadata=r.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HS(t,e,n,r){const i=await wa(e,ri.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),r);return FV(i)}async function qS(t,e,n,r){const s=await(await wa(e,ri.GENERATE_CONTENT,t,!1,JSON.stringify(n),r)).json();return{response:Tm(s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function ta(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return zV(e)}function zV(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,i=!1;for(const s of t)"functionResponse"in s?(n.parts.push(s),i=!0):(e.parts.push(s),r=!0);if(r&&i)throw new ft("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!i)throw new ft("No content is provided for sending chat message.");return r?e:n}function WV(t,e){var n;let r={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const i=t.generateContentRequest!=null;if(t.contents){if(i)throw new mr("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=t.contents}else if(i)r=Object.assign(Object.assign({},r),t.generateContentRequest);else{const s=ta(t);r.contents=[s]}return{generateContentRequest:r}}function z_(t){let e;return t.contents?e=t:e={contents:[ta(t)]},t.systemInstruction&&(e.systemInstruction=GS(t.systemInstruction)),e}function HV(t){return typeof t=="string"||Array.isArray(t)?{content:ta(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W_=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],qV={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function GV(t){let e=!1;for(const n of t){const{role:r,parts:i}=n;if(!e&&r!=="user")throw new ft(`First content should be with role 'user', got ${r}`);if(!D_.includes(r))throw new ft(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(D_)}`);if(!Array.isArray(i))throw new ft("Content should have 'parts' property with an array of Parts");if(i.length===0)throw new ft("Each Content should have at least one part");const s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const l of i)for(const u of W_)u in l&&(s[u]+=1);const o=qV[r];for(const l of W_)if(!o.includes(l)&&s[l]>0)throw new ft(`Content with role '${r}' can't contain '${l}' part`);e=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="SILENT_ERROR";class KV{constructor(e,n,r,i={}){this.model=n,this.params=r,this._requestOptions=i,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r!=null&&r.history&&(GV(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var r,i,s,o,l,u;await this._sendPromise;const c=ta(e),d={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,c]},p=Object.assign(Object.assign({},this._requestOptions),n);let m;return this._sendPromise=this._sendPromise.then(()=>qS(this._apiKey,this.model,d,p)).then(_=>{var A;if(_.response.candidates&&_.response.candidates.length>0){this._history.push(c);const k=Object.assign({parts:[],role:"model"},(A=_.response.candidates)===null||A===void 0?void 0:A[0].content);this._history.push(k)}else{const k=Gn(_.response);k&&console.warn(`sendMessage() was unsuccessful. ${k}. Inspect response object for details.`)}m=_}),await this._sendPromise,m}async sendMessageStream(e,n={}){var r,i,s,o,l,u;await this._sendPromise;const c=ta(e),d={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,c]},p=Object.assign(Object.assign({},this._requestOptions),n),m=HS(this._apiKey,this.model,d,p);return this._sendPromise=this._sendPromise.then(()=>m).catch(_=>{throw new Error(H_)}).then(_=>_.response).then(_=>{if(_.candidates&&_.candidates.length>0){this._history.push(c);const A=Object.assign({},_.candidates[0].content);A.role||(A.role="model"),this._history.push(A)}else{const A=Gn(_);A&&console.warn(`sendMessageStream() was unsuccessful. ${A}. Inspect response object for details.`)}}).catch(_=>{_.message!==H_&&console.error(_)}),m}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QV(t,e,n,r){return(await wa(e,ri.COUNT_TOKENS,t,!1,JSON.stringify(n),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YV(t,e,n,r){return(await wa(e,ri.EMBED_CONTENT,t,!1,JSON.stringify(n),r)).json()}async function JV(t,e,n,r){const i=n.requests.map(o=>Object.assign(Object.assign({},o),{model:e}));return(await wa(e,ri.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:i}),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e,n,r={}){this.apiKey=e,this._requestOptions=r,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=GS(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var r;const i=z_(e),s=Object.assign(Object.assign({},this._requestOptions),n);return qS(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},i),s)}async generateContentStream(e,n={}){var r;const i=z_(e),s=Object.assign(Object.assign({},this._requestOptions),n);return HS(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},i),s)}startChat(e){var n;return new KV(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const r=WV(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),i=Object.assign(Object.assign({},this._requestOptions),n);return QV(this.apiKey,this.model,r,i)}async embedContent(e,n={}){const r=HV(e),i=Object.assign(Object.assign({},this._requestOptions),n);return YV(this.apiKey,this.model,r,i)}async batchEmbedContents(e,n={}){const r=Object.assign(Object.assign({},this._requestOptions),n);return JV(this.apiKey,this.model,e,r)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XV{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new ft("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new q_(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,r){if(!e.name)throw new mr("Cached content must contain a `name` field.");if(!e.model)throw new mr("Cached content must contain a `model` field.");const i=["model","systemInstruction"];for(const o of i)if(n!=null&&n[o]&&e[o]&&(n==null?void 0:n[o])!==e[o]){if(o==="model"){const l=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,u=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(l===u)continue}throw new mr(`Different value for "${o}" specified in modelParams (${n[o]}) and cachedContent (${e[o]})`)}const s=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new q_(this.apiKey,s,r)}}const ZV="AIzaSyDscDJ3cpaKBficC3FL7RSvn0psTzhJARI",eF=async t=>{const e={temperature:1,topP:.95,topK:40,maxOutputTokens:8192,responseMimeType:"text/plain"},s=await new XV(ZV).getGenerativeModel({model:"gemini-1.5-flash",systemInstruction:'You are an AI Designed to help students memorize the information in their notes. A student will supply you with notes typically multiple lines representing multiple bullet points. You will respond with a detailed set of facts that are described in their notes. Each fact should be one sentence and true, requiring no interpretation. The facts should also be as concise as they can be. Include additional statements concisely describing important individuals and important terms. Remember to put all of these sentences into a list separated by "ENDFACT".'}).startChat({generationConfig:e,history:[]}).sendMessage(t);return console.log(s),s},tF=({noteSetId:t})=>{const[e,n]=U.useState(!1);_a();const[r,i,s]=zS(t),o=u=>{if(r){const c=u.target.value;i({...r,noteSetRaw:c}),console.log(r,c)}},l=async()=>{if(r.noteSetFacts.length>0&&!confirm("You already have note facts. Regenerating will delete the ones you already have. Do you want to proceed with generating note facts?")){console.log("User canceled the operation");return}console.log("started generating"),n(!0),await eF(r.noteSetRaw).then(u=>{let c=u.response.candidates[0].content.parts[0].text;c=c.replace(/\n/g," "),c=c.replace(/\*/g,"");const d=c.split("ENDFACT").map(p=>p.trim());i({...r,noteSetFacts:d}),console.log("Note Facts",d,r.noteSetRaw)}),n(!1),console.log("Ended generating")};return r?L.jsxs("div",{className:"flex flex-col align-center text-center gap-4",children:[e&&L.jsx("div",{className:"absolute w-screen h-screen bg-slate-900 bg-opacity-50 flex flex-col justify-center align-middle",children:L.jsxs("div",{className:"text-white text-2xl font-bold bg-slate-600 mx-auto p-3 rounded-md flex flex-row gap-2",children:[L.jsx("div",{children:"Generating Note Facts"}),L.jsxs("svg",{className:"animate-spin h-8 w-8 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[L.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),L.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})]})}),L.jsxs("div",{className:"text-3xl m-8 font-bold",children:["Edit ",r.noteSetName??""]}),L.jsxs("div",{className:"bg-secondary flex flex-col align-center p-2 gap-4 w-[90%] mx-auto rounded-md shadow-md",children:[L.jsx("h2",{className:"text-xl font-bold",children:"Raw Notes"}),L.jsx("textarea",{className:"w-[90%] mx-auto rounded-md h-80",onChange:o,children:r.noteSetRaw})]}),L.jsx("button",{className:"bg-primary text-white font-bold text-md w-fit p-2 mx-auto rounded-md hover:scale-105 hover:shadow-lg transition-all",onClick:l,children:"Generate Note Facts"}),r.noteSetFacts.length!==0&&L.jsxs("div",{className:"bg-secondary flex flex-col w-[80%] mx-auto p-5 gap-2 rounded-md",children:[L.jsx("div",{className:"text-2xl font-bold",children:"Note Facts"}),r.noteSetFacts.map((u,c)=>L.jsx("div",{className:"bg-white mx-auto p-1 rounded-md shadow-md",children:u}))]}),L.jsx("button",{className:"bg-primary text-white font-bold text-md w-fit p-2 mx-auto rounded-md hover:scale-105 hover:shadow-lg transition-all",onClick:s,children:"Save Note Set Data"})]}):L.jsx("div",{children:"Loading..."})},nF=({text:t,cursorLocation:e})=>L.jsx("div",{className:`h-[${3*1}em] overflow-hidden`,children:L.jsx("div",{className:"flex flex-row font-mono flex-wrap pointer-events-none text-8xl whitespace-nowrap",children:t.map((r,i)=>L.jsx(L.Fragment,{children:L.jsx(iF,{wordData:r,wordCursorLocation:e[0]===i?e[1]:-1,needsSpace:i!==t.length-1},i)}))})}),rF=t=>{switch(t){case"CORRECT":return"text-white";case"UNTYPED":return"text-slate-500";case"INCORRECT":return"text-red-500";case"EXTRA":return"text-red-950";default:return""}},iF=({wordData:t,wordCursorLocation:e,needsSpace:n})=>{const r=[...t];return n&&r.push({value:" ",status:"UNTYPED"}),L.jsx("div",{className:"flex flex-row",children:r.map((i,s)=>L.jsx("div",{className:"relative",children:L.jsx(sF,{hasCursor:s===e,letterText:i.value,status:i.status})},s))})},sF=({letterText:t,status:e,hasCursor:n})=>{const r=U.useRef(null);return U.useEffect(()=>{n&&r.current&&r.current.scrollIntoView({behavior:"smooth",block:"center"})},[n]),L.jsxs(L.Fragment,{children:[n&&L.jsx("span",{ref:r,className:"absolute left-[0] top-0 h-full w-0.5 bg-white animate-ping"}),L.jsx("span",{className:"inline-block w-[1ch] "+rF(e),children:t})]})},oF=({highlightedKeys:t})=>{const e=[["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],["Tab","Q","W","E","R","T","Y","U","I","O","P","[","]","\\"],["CapsLock","A","S","D","F","G","H","J","K","L",";","'","Enter"],["Shift","Z","X","C","V","B","N","M",",",".","/","Shift"],["Control","Alt","Space","Alt"]];return L.jsx("div",{className:"flex flex-col align-middle justify-start gap-2",children:e.map((n,r)=>L.jsx("div",{className:"flex flex-row align-middle justify-center gap-2",children:n.map((i,s)=>L.jsx("div",{className:`bg-slate-700 ${t.includes(i)?"bg-primary":""} text-slate-400 text-2xl h-10 w-fit min-w-8 text-center rounded-md padding-2 `,children:i},s))},r))})};function aF(t){for(let e=t.length-1;e>0;e--){const n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}const lF=({noteSetId:t})=>{const[e,n]=U.useState(""),[r,i]=U.useState(""),[s,o]=zS(t);_a();const[l,u]=U.useState([{fact:"",timesTyped:0}]),[c,d]=U.useState(0);U.useEffect(()=>(window.addEventListener("keydown",p),()=>{window.removeEventListener("keydown",p)}),[]),U.useEffect(()=>{if(s&&s.noteSetFacts.length>0){console.log("Shuffling facts");const k=aF(s.noteSetFacts).map(C=>({fact:C,timesTyped:0}));console.log(k,c),u(k)}},[s]),U.useEffect(()=>{if(s&&l){const k=l[c].fact;n(k)}},[c,l]);const p=k=>{const C=k.key.length===1;switch(console.log(k.key,C),k.key){case"Enter":m();break;case"Backspace":k.ctrlKey&&i(w=>{console.log("CTRL BACKSPACE");const v=w.split(" ");return v.pop(),v.join(" ")}),i(w=>w.slice(0,-1));break;default:if(!C)return;i(w=>w+k.key);break}},m=()=>{console.log("Finished typing"),console.log(l,c),i(""),l[c].timesTyped<5?u(k=>{console.log("Prev fact list",k);let C=[...k];return C[c].timesTyped++,console.log("New fact list",C),C}):d(k=>k+1)},_=k=>{const C=r.split(" "),w=e.split(" "),v=[];for(let I=0;I<w.length;I++){const D=[];for(let V=0;V<w[I].length;V++){let j="INCORRECT";I>=C.length||!C[I]||V>=C[I].length?j="UNTYPED":C[I][V]===w[I][V]&&(j="CORRECT");const T=w[I][V];D.push({value:T,status:j})}if(C[I]&&C[I].length>w[I].length){const V=C[I].substring(w[I].length);for(const j in V)D.push({value:V[j],status:"EXTRA"})}v.push(D)}return v},A=k=>{const C=r.split(" ");e.split(" ");const w=C.length-1,v=C[w].length;return[w,v]};return L.jsx("div",{className:"relative bg-slate-800 h-screen p-5 overflow-hidden flex flex-col justify-between",children:s?L.jsxs(L.Fragment,{children:[L.jsx("div",{children:l[c].timesTyped}),L.jsx(nF,{text:_(),cursorLocation:A()}),L.jsx(oF,{highlightedKeys:[]})]}):L.jsx("div",{children:"Loading..."})})},uF=()=>{const[t,e]=U.useState(!0),[n,r]=U.useState(""),[i,s]=U.useState(""),[o,l]=U.useState(""),[u,c]=U.useState(""),[d,p]=U.useState(""),m=_p();U.useEffect(()=>{const C=CO(Vi,w=>{w&&(console.log("User is logged in",w),m("/"))});return()=>C()},[m]);const _=async C=>{C.preventDefault();try{await TO(Vi,n,i)}catch(w){p(w.message)}},A=async()=>{try{await qO(Vi,vV)}catch(C){p(C.message)}},k=async C=>{C.preventDefault();try{await EO(Vi,o,u)}catch(w){p(w.message)}};return L.jsx("div",{className:"w-screen h-screen flex flex-col justify-center",children:t?L.jsxs("div",{className:"mx-auto bg-white p-3 rounded-md shadow-xl text-lg text-center flex flex-col align-middle justify-center",children:[L.jsx("h2",{className:"text-xl font-bold",children:"Login"}),L.jsxs("form",{onSubmit:_,children:[L.jsxs("div",{children:[L.jsx("label",{children:"Email:"}),L.jsx("input",{type:"email",value:n,onChange:C=>r(C.target.value),required:!0})]}),L.jsxs("div",{children:[L.jsx("label",{children:"Password:"}),L.jsx("input",{type:"password",value:i,onChange:C=>s(C.target.value),required:!0})]}),d&&L.jsx("p",{style:{color:"red"},children:d}),L.jsx("button",{type:"submit",className:"mt-3 bg-blue-500 text-white p-2 rounded",children:"Login"})]}),L.jsx("button",{onClick:A,className:"mt-3 bg-blue-500 text-white p-2 rounded",children:"Login with Google"}),L.jsx("button",{className:"self-end mt-4",onClick:()=>{e(!1)},children:"Register"})]}):L.jsxs("div",{className:"mx-auto bg-white p-3 rounded-md shadow-xl text-lg text-center flex flex-col align-middle justify-center",children:[L.jsx("h2",{className:"text-xl font-bold mt-5",children:"Register"}),L.jsxs("form",{onSubmit:k,children:[L.jsxs("div",{children:[L.jsx("label",{children:"Email:"}),L.jsx("input",{type:"email",value:o,onChange:C=>l(C.target.value),required:!0})]}),L.jsxs("div",{children:[L.jsx("label",{children:"Password:"}),L.jsx("input",{type:"password",value:u,onChange:C=>c(C.target.value),required:!0})]}),d&&L.jsx("p",{style:{color:"red"},children:d}),L.jsx("button",{type:"submit",className:"mt-3 bg-blue-500 text-white p-2 rounded",children:"Register"})]}),L.jsx("button",{className:"self-end mt-4",onClick:()=>{e(!0)},children:"Login"})]})})},cF="/notes-review-app";function hF(){return L.jsx(_V,{children:L.jsx(TV,{children:L.jsx(JA,{basename:cF,children:L.jsxs(WA,{children:[L.jsx(Js,{exact:!0,path:"/",element:L.jsx(EV,{})}),L.jsx(Js,{path:"/edit/:noteSetId",element:L.jsx(tF,{})}),L.jsx(Js,{path:"/type/:noteSetId",element:L.jsx(lF,{})}),L.jsx(Js,{path:"/login",element:L.jsx(uF,{})})]})})})})}oE(document.getElementById("root")).render(L.jsx(U.StrictMode,{children:L.jsx(hF,{})}));
