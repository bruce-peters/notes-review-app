function P1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Q_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function k1(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var Y_={exports:{}},ju={},J_={exports:{}},ee={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sa=Symbol.for("react.element"),x1=Symbol.for("react.portal"),N1=Symbol.for("react.fragment"),O1=Symbol.for("react.strict_mode"),D1=Symbol.for("react.profiler"),b1=Symbol.for("react.provider"),L1=Symbol.for("react.context"),M1=Symbol.for("react.forward_ref"),V1=Symbol.for("react.suspense"),F1=Symbol.for("react.memo"),U1=Symbol.for("react.lazy"),Rg=Symbol.iterator;function j1(t){return t===null||typeof t!="object"?null:(t=Rg&&t[Rg]||t["@@iterator"],typeof t=="function"?t:null)}var X_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z_=Object.assign,ew={};function hs(t,e,n){this.props=t,this.context=e,this.refs=ew,this.updater=n||X_}hs.prototype.isReactComponent={};hs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function tw(){}tw.prototype=hs.prototype;function Af(t,e,n){this.props=t,this.context=e,this.refs=ew,this.updater=n||X_}var Pf=Af.prototype=new tw;Pf.constructor=Af;Z_(Pf,hs.prototype);Pf.isPureReactComponent=!0;var Ag=Array.isArray,nw=Object.prototype.hasOwnProperty,kf={current:null},rw={key:!0,ref:!0,__self:!0,__source:!0};function iw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)nw.call(e,r)&&!rw.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:sa,type:t,key:s,ref:o,props:i,_owner:kf.current}}function $1(t,e){return{$$typeof:sa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xf(t){return typeof t=="object"&&t!==null&&t.$$typeof===sa}function B1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pg=/\/+/g;function eh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?B1(""+t.key):e.toString(36)}function _l(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case sa:case x1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+eh(o,0):r,Ag(i)?(n="",t!=null&&(n=t.replace(Pg,"$&/")+"/"),_l(i,e,n,"",function(c){return c})):i!=null&&(xf(i)&&(i=$1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ag(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+eh(s,l);o+=_l(s,e,n,u,i)}else if(u=j1(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+eh(s,l++),o+=_l(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ba(t,e,n){if(t==null)return t;var r=[],i=0;return _l(t,r,"","",function(s){return e.call(n,s,i++)}),r}function z1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},wl={transition:null},W1={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:wl,ReactCurrentOwner:kf};function sw(){throw Error("act(...) is not supported in production builds of React.")}ee.Children={map:Ba,forEach:function(t,e,n){Ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ba(t,function(){e++}),e},toArray:function(t){return Ba(t,function(e){return e})||[]},only:function(t){if(!xf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ee.Component=hs;ee.Fragment=N1;ee.Profiler=D1;ee.PureComponent=Af;ee.StrictMode=O1;ee.Suspense=V1;ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W1;ee.act=sw;ee.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Z_({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)nw.call(e,u)&&!rw.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:sa,type:t.type,key:i,ref:s,props:r,_owner:o}};ee.createContext=function(t){return t={$$typeof:L1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:b1,_context:t},t.Consumer=t};ee.createElement=iw;ee.createFactory=function(t){var e=iw.bind(null,t);return e.type=t,e};ee.createRef=function(){return{current:null}};ee.forwardRef=function(t){return{$$typeof:M1,render:t}};ee.isValidElement=xf;ee.lazy=function(t){return{$$typeof:U1,_payload:{_status:-1,_result:t},_init:z1}};ee.memo=function(t,e){return{$$typeof:F1,type:t,compare:e===void 0?null:e}};ee.startTransition=function(t){var e=wl.transition;wl.transition={};try{t()}finally{wl.transition=e}};ee.unstable_act=sw;ee.useCallback=function(t,e){return ut.current.useCallback(t,e)};ee.useContext=function(t){return ut.current.useContext(t)};ee.useDebugValue=function(){};ee.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};ee.useEffect=function(t,e){return ut.current.useEffect(t,e)};ee.useId=function(){return ut.current.useId()};ee.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};ee.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};ee.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};ee.useMemo=function(t,e){return ut.current.useMemo(t,e)};ee.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};ee.useRef=function(t){return ut.current.useRef(t)};ee.useState=function(t){return ut.current.useState(t)};ee.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};ee.useTransition=function(){return ut.current.useTransition()};ee.version="18.3.1";J_.exports=ee;var F=J_.exports;const H1=Q_(F),q1=P1({__proto__:null,default:H1},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G1=F,K1=Symbol.for("react.element"),Q1=Symbol.for("react.fragment"),Y1=Object.prototype.hasOwnProperty,J1=G1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,X1={key:!0,ref:!0,__self:!0,__source:!0};function ow(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Y1.call(e,r)&&!X1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:K1,type:t,key:s,ref:o,props:i,_owner:J1.current}}ju.Fragment=Q1;ju.jsx=ow;ju.jsxs=ow;Y_.exports=ju;var M=Y_.exports,aw={exports:{}},Rt={},lw={exports:{}},uw={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,Q){var X=B.length;B.push(Q);e:for(;0<X;){var _e=X-1>>>1,ce=B[_e];if(0<i(ce,Q))B[_e]=Q,B[X]=ce,X=_e;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var Q=B[0],X=B.pop();if(X!==Q){B[0]=X;e:for(var _e=0,ce=B.length,Re=ce>>>1;_e<Re;){var fn=2*(_e+1)-1,pn=B[fn],mn=fn+1,gn=B[mn];if(0>i(pn,X))mn<ce&&0>i(gn,pn)?(B[_e]=gn,B[mn]=X,_e=mn):(B[_e]=pn,B[fn]=X,_e=fn);else if(mn<ce&&0>i(gn,X))B[_e]=gn,B[mn]=X,_e=mn;else break e}}return Q}function i(B,Q){var X=B.sortIndex-Q.sortIndex;return X!==0?X:B.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],c=[],d=1,p=null,m=3,_=!1,A=!1,k=!1,R=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(B){for(var Q=n(c);Q!==null;){if(Q.callback===null)r(c);else if(Q.startTime<=B)r(c),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(c)}}function O(B){if(k=!1,I(B),!A)if(n(u)!==null)A=!0,Is(L);else{var Q=n(c);Q!==null&&dn(O,Q.startTime-B)}}function L(B,Q){A=!1,k&&(k=!1,T(y),y=-1),_=!0;var X=m;try{for(I(Q),p=n(u);p!==null&&(!(p.expirationTime>Q)||B&&!P());){var _e=p.callback;if(typeof _e=="function"){p.callback=null,m=p.priorityLevel;var ce=_e(p.expirationTime<=Q);Q=t.unstable_now(),typeof ce=="function"?p.callback=ce:p===n(u)&&r(u),I(Q)}else r(u);p=n(u)}if(p!==null)var Re=!0;else{var fn=n(c);fn!==null&&dn(O,fn.startTime-Q),Re=!1}return Re}finally{p=null,m=X,_=!1}}var j=!1,E=null,y=-1,w=5,S=-1;function P(){return!(t.unstable_now()-S<w)}function N(){if(E!==null){var B=t.unstable_now();S=B;var Q=!0;try{Q=E(!0,B)}finally{Q?C():(j=!1,E=null)}}else j=!1}var C;if(typeof v=="function")C=function(){v(N)};else if(typeof MessageChannel<"u"){var Pt=new MessageChannel,Nr=Pt.port2;Pt.port1.onmessage=N,C=function(){Nr.postMessage(null)}}else C=function(){R(N,0)};function Is(B){E=B,j||(j=!0,C())}function dn(B,Q){y=R(function(){B(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){A||_||(A=!0,Is(L))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(m){case 1:case 2:case 3:var Q=3;break;default:Q=m}var X=m;m=Q;try{return B()}finally{m=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,Q){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var X=m;m=B;try{return Q()}finally{m=X}},t.unstable_scheduleCallback=function(B,Q,X){var _e=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?_e+X:_e):X=_e,B){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=X+ce,B={id:d++,callback:Q,priorityLevel:B,startTime:X,expirationTime:ce,sortIndex:-1},X>_e?(B.sortIndex=X,e(c,B),n(u)===null&&B===n(c)&&(k?(T(y),y=-1):k=!0,dn(O,X-_e))):(B.sortIndex=ce,e(u,B),A||_||(A=!0,Is(L))),B},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(B){var Q=m;return function(){var X=m;m=Q;try{return B.apply(this,arguments)}finally{m=X}}}})(uw);lw.exports=uw;var Z1=lw.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eC=F,Ct=Z1;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var cw=new Set,So={};function si(t,e){Ki(t,e),Ki(t+"Capture",e)}function Ki(t,e){for(So[t]=e,t=0;t<e.length;t++)cw.add(e[t])}var xn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hh=Object.prototype.hasOwnProperty,tC=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kg={},xg={};function nC(t){return Hh.call(xg,t)?!0:Hh.call(kg,t)?!1:tC.test(t)?xg[t]=!0:(kg[t]=!0,!1)}function rC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function iC(t,e,n,r){if(e===null||typeof e>"u"||rC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ct(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){He[t]=new ct(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];He[e]=new ct(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){He[t]=new ct(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){He[t]=new ct(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){He[t]=new ct(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){He[t]=new ct(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){He[t]=new ct(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){He[t]=new ct(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){He[t]=new ct(t,5,!1,t.toLowerCase(),null,!1,!1)});var Nf=/[\-:]([a-z])/g;function Of(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Nf,Of);He[e]=new ct(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Nf,Of);He[e]=new ct(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Nf,Of);He[e]=new ct(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){He[t]=new ct(t,1,!1,t.toLowerCase(),null,!1,!1)});He.xlinkHref=new ct("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){He[t]=new ct(t,1,!1,t.toLowerCase(),null,!0,!0)});function Df(t,e,n,r){var i=He.hasOwnProperty(e)?He[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iC(e,n,i,r)&&(n=null),r||i===null?nC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Un=eC.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),Ci=Symbol.for("react.portal"),Ri=Symbol.for("react.fragment"),bf=Symbol.for("react.strict_mode"),qh=Symbol.for("react.profiler"),hw=Symbol.for("react.provider"),dw=Symbol.for("react.context"),Lf=Symbol.for("react.forward_ref"),Gh=Symbol.for("react.suspense"),Kh=Symbol.for("react.suspense_list"),Mf=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),fw=Symbol.for("react.offscreen"),Ng=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=Ng&&t[Ng]||t["@@iterator"],typeof t=="function"?t:null)}var Te=Object.assign,th;function Qs(t){if(th===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);th=e&&e[1]||""}return`
`+th+t}var nh=!1;function rh(t,e){if(!t||nh)return"";nh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{nh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qs(t):""}function sC(t){switch(t.tag){case 5:return Qs(t.type);case 16:return Qs("Lazy");case 13:return Qs("Suspense");case 19:return Qs("SuspenseList");case 0:case 2:case 15:return t=rh(t.type,!1),t;case 11:return t=rh(t.type.render,!1),t;case 1:return t=rh(t.type,!0),t;default:return""}}function Qh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ri:return"Fragment";case Ci:return"Portal";case qh:return"Profiler";case bf:return"StrictMode";case Gh:return"Suspense";case Kh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case dw:return(t.displayName||"Context")+".Consumer";case hw:return(t._context.displayName||"Context")+".Provider";case Lf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mf:return e=t.displayName||null,e!==null?e:Qh(t.type)||"Memo";case Hn:e=t._payload,t=t._init;try{return Qh(t(e))}catch{}}return null}function oC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qh(e);case 8:return e===bf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function gr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function pw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function aC(t){var e=pw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wa(t){t._valueTracker||(t._valueTracker=aC(t))}function mw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=pw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yh(t,e){var n=e.checked;return Te({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Og(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=gr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function gw(t,e){e=e.checked,e!=null&&Df(t,"checked",e,!1)}function Jh(t,e){gw(t,e);var n=gr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xh(t,e.type,gr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xh(t,e,n){(e!=="number"||Hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ys=Array.isArray;function Fi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+gr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Zh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return Te({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(Ys(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:gr(n)}}function yw(t,e){var n=gr(e.value),r=gr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Lg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ed(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ha,_w=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ha=Ha||document.createElement("div"),Ha.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ha.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Co(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lC=["Webkit","ms","Moz","O"];Object.keys(oo).forEach(function(t){lC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oo[e]=oo[t]})});function ww(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oo.hasOwnProperty(t)&&oo[t]?(""+e).trim():e+"px"}function Ew(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ww(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var uC=Te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function td(t,e){if(e){if(uC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function nd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rd=null;function Vf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var id=null,Ui=null,ji=null;function Mg(t){if(t=la(t)){if(typeof id!="function")throw Error(U(280));var e=t.stateNode;e&&(e=Hu(e),id(t.stateNode,t.type,e))}}function Tw(t){Ui?ji?ji.push(t):ji=[t]:Ui=t}function Iw(){if(Ui){var t=Ui,e=ji;if(ji=Ui=null,Mg(t),e)for(t=0;t<e.length;t++)Mg(e[t])}}function Sw(t,e){return t(e)}function Cw(){}var ih=!1;function Rw(t,e,n){if(ih)return t(e,n);ih=!0;try{return Sw(t,e,n)}finally{ih=!1,(Ui!==null||ji!==null)&&(Cw(),Iw())}}function Ro(t,e){var n=t.stateNode;if(n===null)return null;var r=Hu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var sd=!1;if(xn)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){sd=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{sd=!1}function cC(t,e,n,r,i,s,o,l,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ao=!1,ql=null,Gl=!1,od=null,hC={onError:function(t){ao=!0,ql=t}};function dC(t,e,n,r,i,s,o,l,u){ao=!1,ql=null,cC.apply(hC,arguments)}function fC(t,e,n,r,i,s,o,l,u){if(dC.apply(this,arguments),ao){if(ao){var c=ql;ao=!1,ql=null}else throw Error(U(198));Gl||(Gl=!0,od=c)}}function oi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Aw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vg(t){if(oi(t)!==t)throw Error(U(188))}function pC(t){var e=t.alternate;if(!e){if(e=oi(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vg(i),t;if(s===r)return Vg(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Pw(t){return t=pC(t),t!==null?kw(t):null}function kw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kw(t);if(e!==null)return e;t=t.sibling}return null}var xw=Ct.unstable_scheduleCallback,Fg=Ct.unstable_cancelCallback,mC=Ct.unstable_shouldYield,gC=Ct.unstable_requestPaint,Pe=Ct.unstable_now,yC=Ct.unstable_getCurrentPriorityLevel,Ff=Ct.unstable_ImmediatePriority,Nw=Ct.unstable_UserBlockingPriority,Kl=Ct.unstable_NormalPriority,vC=Ct.unstable_LowPriority,Ow=Ct.unstable_IdlePriority,$u=null,nn=null;function _C(t){if(nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot($u,t,void 0,(t.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:TC,wC=Math.log,EC=Math.LN2;function TC(t){return t>>>=0,t===0?32:31-(wC(t)/EC|0)|0}var qa=64,Ga=4194304;function Js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Js(l):(s&=o,s!==0&&(r=Js(s)))}else o=n&~i,o!==0?r=Js(o):s!==0&&(r=Js(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ht(e),i=1<<n,r|=t[n],e&=~i;return r}function IC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function SC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ht(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=IC(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function ad(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Dw(){var t=qa;return qa<<=1,!(qa&4194240)&&(qa=64),t}function sh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function oa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ht(e),t[e]=n}function CC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ht(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Uf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ht(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var le=0;function bw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Lw,jf,Mw,Vw,Fw,ld=!1,Ka=[],rr=null,ir=null,sr=null,Ao=new Map,Po=new Map,Kn=[],RC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ug(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":sr=null;break;case"pointerover":case"pointerout":Ao.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(e.pointerId)}}function Us(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=la(e),e!==null&&jf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function AC(t,e,n,r,i){switch(e){case"focusin":return rr=Us(rr,t,e,n,r,i),!0;case"dragenter":return ir=Us(ir,t,e,n,r,i),!0;case"mouseover":return sr=Us(sr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Ao.set(s,Us(Ao.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Po.set(s,Us(Po.get(s)||null,t,e,n,r,i)),!0}return!1}function Uw(t){var e=Ur(t.target);if(e!==null){var n=oi(e);if(n!==null){if(e=n.tag,e===13){if(e=Aw(n),e!==null){t.blockedOn=e,Fw(t.priority,function(){Mw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function El(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ud(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);rd=r,n.target.dispatchEvent(r),rd=null}else return e=la(n),e!==null&&jf(e),t.blockedOn=n,!1;e.shift()}return!0}function jg(t,e,n){El(t)&&n.delete(e)}function PC(){ld=!1,rr!==null&&El(rr)&&(rr=null),ir!==null&&El(ir)&&(ir=null),sr!==null&&El(sr)&&(sr=null),Ao.forEach(jg),Po.forEach(jg)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,ld||(ld=!0,Ct.unstable_scheduleCallback(Ct.unstable_NormalPriority,PC)))}function ko(t){function e(i){return js(i,t)}if(0<Ka.length){js(Ka[0],t);for(var n=1;n<Ka.length;n++){var r=Ka[n];r.blockedOn===t&&(r.blockedOn=null)}}for(rr!==null&&js(rr,t),ir!==null&&js(ir,t),sr!==null&&js(sr,t),Ao.forEach(e),Po.forEach(e),n=0;n<Kn.length;n++)r=Kn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Kn.length&&(n=Kn[0],n.blockedOn===null);)Uw(n),n.blockedOn===null&&Kn.shift()}var $i=Un.ReactCurrentBatchConfig,Yl=!0;function kC(t,e,n,r){var i=le,s=$i.transition;$i.transition=null;try{le=1,$f(t,e,n,r)}finally{le=i,$i.transition=s}}function xC(t,e,n,r){var i=le,s=$i.transition;$i.transition=null;try{le=4,$f(t,e,n,r)}finally{le=i,$i.transition=s}}function $f(t,e,n,r){if(Yl){var i=ud(t,e,n,r);if(i===null)mh(t,e,r,Jl,n),Ug(t,r);else if(AC(i,t,e,n,r))r.stopPropagation();else if(Ug(t,r),e&4&&-1<RC.indexOf(t)){for(;i!==null;){var s=la(i);if(s!==null&&Lw(s),s=ud(t,e,n,r),s===null&&mh(t,e,r,Jl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mh(t,e,r,null,n)}}var Jl=null;function ud(t,e,n,r){if(Jl=null,t=Vf(r),t=Ur(t),t!==null)if(e=oi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Aw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Jl=t,null}function jw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yC()){case Ff:return 1;case Nw:return 4;case Kl:case vC:return 16;case Ow:return 536870912;default:return 16}default:return 16}}var Zn=null,Bf=null,Tl=null;function $w(){if(Tl)return Tl;var t,e=Bf,n=e.length,r,i="value"in Zn?Zn.value:Zn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Tl=i.slice(t,1<r?1-r:void 0)}function Il(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Qa(){return!0}function $g(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qa:$g,this.isPropagationStopped=$g,this}return Te(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),e}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zf=At(ds),aa=Te({},ds,{view:0,detail:0}),NC=At(aa),oh,ah,$s,Bu=Te({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(oh=t.screenX-$s.screenX,ah=t.screenY-$s.screenY):ah=oh=0,$s=t),oh)},movementY:function(t){return"movementY"in t?t.movementY:ah}}),Bg=At(Bu),OC=Te({},Bu,{dataTransfer:0}),DC=At(OC),bC=Te({},aa,{relatedTarget:0}),lh=At(bC),LC=Te({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),MC=At(LC),VC=Te({},ds,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),FC=At(VC),UC=Te({},ds,{data:0}),zg=At(UC),jC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$C={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},BC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=BC[t])?!!e[t]:!1}function Wf(){return zC}var WC=Te({},aa,{key:function(t){if(t.key){var e=jC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Il(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$C[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wf,charCode:function(t){return t.type==="keypress"?Il(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Il(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),HC=At(WC),qC=Te({},Bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wg=At(qC),GC=Te({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wf}),KC=At(GC),QC=Te({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),YC=At(QC),JC=Te({},Bu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),XC=At(JC),ZC=[9,13,27,32],Hf=xn&&"CompositionEvent"in window,lo=null;xn&&"documentMode"in document&&(lo=document.documentMode);var eR=xn&&"TextEvent"in window&&!lo,Bw=xn&&(!Hf||lo&&8<lo&&11>=lo),Hg=" ",qg=!1;function zw(t,e){switch(t){case"keyup":return ZC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ww(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ai=!1;function tR(t,e){switch(t){case"compositionend":return Ww(e);case"keypress":return e.which!==32?null:(qg=!0,Hg);case"textInput":return t=e.data,t===Hg&&qg?null:t;default:return null}}function nR(t,e){if(Ai)return t==="compositionend"||!Hf&&zw(t,e)?(t=$w(),Tl=Bf=Zn=null,Ai=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bw&&e.locale!=="ko"?null:e.data;default:return null}}var rR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!rR[t.type]:e==="textarea"}function Hw(t,e,n,r){Tw(r),e=Xl(e,"onChange"),0<e.length&&(n=new zf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var uo=null,xo=null;function iR(t){n0(t,0)}function zu(t){var e=xi(t);if(mw(e))return t}function sR(t,e){if(t==="change")return e}var qw=!1;if(xn){var uh;if(xn){var ch="oninput"in document;if(!ch){var Kg=document.createElement("div");Kg.setAttribute("oninput","return;"),ch=typeof Kg.oninput=="function"}uh=ch}else uh=!1;qw=uh&&(!document.documentMode||9<document.documentMode)}function Qg(){uo&&(uo.detachEvent("onpropertychange",Gw),xo=uo=null)}function Gw(t){if(t.propertyName==="value"&&zu(xo)){var e=[];Hw(e,xo,t,Vf(t)),Rw(iR,e)}}function oR(t,e,n){t==="focusin"?(Qg(),uo=e,xo=n,uo.attachEvent("onpropertychange",Gw)):t==="focusout"&&Qg()}function aR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zu(xo)}function lR(t,e){if(t==="click")return zu(e)}function uR(t,e){if(t==="input"||t==="change")return zu(e)}function cR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kt=typeof Object.is=="function"?Object.is:cR;function No(t,e){if(Kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Hh.call(e,i)||!Kt(t[i],e[i]))return!1}return!0}function Yg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Jg(t,e){var n=Yg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yg(n)}}function Kw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Kw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qw(){for(var t=window,e=Hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hl(t.document)}return e}function qf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function hR(t){var e=Qw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Kw(n.ownerDocument.documentElement,n)){if(r!==null&&qf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Jg(n,s);var o=Jg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var dR=xn&&"documentMode"in document&&11>=document.documentMode,Pi=null,cd=null,co=null,hd=!1;function Xg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hd||Pi==null||Pi!==Hl(r)||(r=Pi,"selectionStart"in r&&qf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),co&&No(co,r)||(co=r,r=Xl(cd,"onSelect"),0<r.length&&(e=new zf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Pi)))}function Ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ki={animationend:Ya("Animation","AnimationEnd"),animationiteration:Ya("Animation","AnimationIteration"),animationstart:Ya("Animation","AnimationStart"),transitionend:Ya("Transition","TransitionEnd")},hh={},Yw={};xn&&(Yw=document.createElement("div").style,"AnimationEvent"in window||(delete ki.animationend.animation,delete ki.animationiteration.animation,delete ki.animationstart.animation),"TransitionEvent"in window||delete ki.transitionend.transition);function Wu(t){if(hh[t])return hh[t];if(!ki[t])return t;var e=ki[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Yw)return hh[t]=e[n];return t}var Jw=Wu("animationend"),Xw=Wu("animationiteration"),Zw=Wu("animationstart"),e0=Wu("transitionend"),t0=new Map,Zg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(t,e){t0.set(t,e),si(e,[t])}for(var dh=0;dh<Zg.length;dh++){var fh=Zg[dh],fR=fh.toLowerCase(),pR=fh[0].toUpperCase()+fh.slice(1);Sr(fR,"on"+pR)}Sr(Jw,"onAnimationEnd");Sr(Xw,"onAnimationIteration");Sr(Zw,"onAnimationStart");Sr("dblclick","onDoubleClick");Sr("focusin","onFocus");Sr("focusout","onBlur");Sr(e0,"onTransitionEnd");Ki("onMouseEnter",["mouseout","mouseover"]);Ki("onMouseLeave",["mouseout","mouseover"]);Ki("onPointerEnter",["pointerout","pointerover"]);Ki("onPointerLeave",["pointerout","pointerover"]);si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));si("onBeforeInput",["compositionend","keypress","textInput","paste"]);si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mR=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xs));function ey(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,fC(r,e,void 0,t),t.currentTarget=null}function n0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,c=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;ey(i,l,c),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,c=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;ey(i,l,c),s=u}}}if(Gl)throw t=od,Gl=!1,od=null,t}function pe(t,e){var n=e[gd];n===void 0&&(n=e[gd]=new Set);var r=t+"__bubble";n.has(r)||(r0(e,t,2,!1),n.add(r))}function ph(t,e,n){var r=0;e&&(r|=4),r0(n,t,r,e)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function Oo(t){if(!t[Ja]){t[Ja]=!0,cw.forEach(function(n){n!=="selectionchange"&&(mR.has(n)||ph(n,!1,t),ph(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ja]||(e[Ja]=!0,ph("selectionchange",!1,e))}}function r0(t,e,n,r){switch(jw(e)){case 1:var i=kC;break;case 4:i=xC;break;default:i=$f}n=i.bind(null,e,n,t),i=void 0,!sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function mh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Ur(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Rw(function(){var c=s,d=Vf(n),p=[];e:{var m=t0.get(t);if(m!==void 0){var _=zf,A=t;switch(t){case"keypress":if(Il(n)===0)break e;case"keydown":case"keyup":_=HC;break;case"focusin":A="focus",_=lh;break;case"focusout":A="blur",_=lh;break;case"beforeblur":case"afterblur":_=lh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=Bg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=DC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=KC;break;case Jw:case Xw:case Zw:_=MC;break;case e0:_=YC;break;case"scroll":_=NC;break;case"wheel":_=XC;break;case"copy":case"cut":case"paste":_=FC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Wg}var k=(e&4)!==0,R=!k&&t==="scroll",T=k?m!==null?m+"Capture":null:m;k=[];for(var v=c,I;v!==null;){I=v;var O=I.stateNode;if(I.tag===5&&O!==null&&(I=O,T!==null&&(O=Ro(v,T),O!=null&&k.push(Do(v,O,I)))),R)break;v=v.return}0<k.length&&(m=new _(m,A,null,n,d),p.push({event:m,listeners:k}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",m&&n!==rd&&(A=n.relatedTarget||n.fromElement)&&(Ur(A)||A[Nn]))break e;if((_||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,_?(A=n.relatedTarget||n.toElement,_=c,A=A?Ur(A):null,A!==null&&(R=oi(A),A!==R||A.tag!==5&&A.tag!==6)&&(A=null)):(_=null,A=c),_!==A)){if(k=Bg,O="onMouseLeave",T="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(k=Wg,O="onPointerLeave",T="onPointerEnter",v="pointer"),R=_==null?m:xi(_),I=A==null?m:xi(A),m=new k(O,v+"leave",_,n,d),m.target=R,m.relatedTarget=I,O=null,Ur(d)===c&&(k=new k(T,v+"enter",A,n,d),k.target=I,k.relatedTarget=R,O=k),R=O,_&&A)t:{for(k=_,T=A,v=0,I=k;I;I=_i(I))v++;for(I=0,O=T;O;O=_i(O))I++;for(;0<v-I;)k=_i(k),v--;for(;0<I-v;)T=_i(T),I--;for(;v--;){if(k===T||T!==null&&k===T.alternate)break t;k=_i(k),T=_i(T)}k=null}else k=null;_!==null&&ty(p,m,_,k,!1),A!==null&&R!==null&&ty(p,R,A,k,!0)}}e:{if(m=c?xi(c):window,_=m.nodeName&&m.nodeName.toLowerCase(),_==="select"||_==="input"&&m.type==="file")var L=sR;else if(Gg(m))if(qw)L=uR;else{L=aR;var j=oR}else(_=m.nodeName)&&_.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=lR);if(L&&(L=L(t,c))){Hw(p,L,n,d);break e}j&&j(t,m,c),t==="focusout"&&(j=m._wrapperState)&&j.controlled&&m.type==="number"&&Xh(m,"number",m.value)}switch(j=c?xi(c):window,t){case"focusin":(Gg(j)||j.contentEditable==="true")&&(Pi=j,cd=c,co=null);break;case"focusout":co=cd=Pi=null;break;case"mousedown":hd=!0;break;case"contextmenu":case"mouseup":case"dragend":hd=!1,Xg(p,n,d);break;case"selectionchange":if(dR)break;case"keydown":case"keyup":Xg(p,n,d)}var E;if(Hf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ai?zw(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Bw&&n.locale!=="ko"&&(Ai||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ai&&(E=$w()):(Zn=d,Bf="value"in Zn?Zn.value:Zn.textContent,Ai=!0)),j=Xl(c,y),0<j.length&&(y=new zg(y,t,null,n,d),p.push({event:y,listeners:j}),E?y.data=E:(E=Ww(n),E!==null&&(y.data=E)))),(E=eR?tR(t,n):nR(t,n))&&(c=Xl(c,"onBeforeInput"),0<c.length&&(d=new zg("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:c}),d.data=E))}n0(p,e)})}function Do(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ro(t,n),s!=null&&r.unshift(Do(t,s,i)),s=Ro(t,e),s!=null&&r.push(Do(t,s,i))),t=t.return}return r}function _i(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ty(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,c=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&c!==null&&(l=c,i?(u=Ro(n,s),u!=null&&o.unshift(Do(n,u,l))):i||(u=Ro(n,s),u!=null&&o.push(Do(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var gR=/\r\n?/g,yR=/\u0000|\uFFFD/g;function ny(t){return(typeof t=="string"?t:""+t).replace(gR,`
`).replace(yR,"")}function Xa(t,e,n){if(e=ny(e),ny(t)!==e&&n)throw Error(U(425))}function Zl(){}var dd=null,fd=null;function pd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var md=typeof setTimeout=="function"?setTimeout:void 0,vR=typeof clearTimeout=="function"?clearTimeout:void 0,ry=typeof Promise=="function"?Promise:void 0,_R=typeof queueMicrotask=="function"?queueMicrotask:typeof ry<"u"?function(t){return ry.resolve(null).then(t).catch(wR)}:md;function wR(t){setTimeout(function(){throw t})}function gh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ko(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ko(e)}function or(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function iy(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var fs=Math.random().toString(36).slice(2),tn="__reactFiber$"+fs,bo="__reactProps$"+fs,Nn="__reactContainer$"+fs,gd="__reactEvents$"+fs,ER="__reactListeners$"+fs,TR="__reactHandles$"+fs;function Ur(t){var e=t[tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Nn]||n[tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=iy(t);t!==null;){if(n=t[tn])return n;t=iy(t)}return e}t=n,n=t.parentNode}return null}function la(t){return t=t[tn]||t[Nn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function xi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function Hu(t){return t[bo]||null}var yd=[],Ni=-1;function Cr(t){return{current:t}}function me(t){0>Ni||(t.current=yd[Ni],yd[Ni]=null,Ni--)}function de(t,e){Ni++,yd[Ni]=t.current,t.current=e}var yr={},nt=Cr(yr),mt=Cr(!1),Kr=yr;function Qi(t,e){var n=t.type.contextTypes;if(!n)return yr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function gt(t){return t=t.childContextTypes,t!=null}function eu(){me(mt),me(nt)}function sy(t,e,n){if(nt.current!==yr)throw Error(U(168));de(nt,e),de(mt,n)}function i0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,oC(t)||"Unknown",i));return Te({},n,r)}function tu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||yr,Kr=nt.current,de(nt,t),de(mt,mt.current),!0}function oy(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=i0(t,e,Kr),r.__reactInternalMemoizedMergedChildContext=t,me(mt),me(nt),de(nt,t)):me(mt),de(mt,n)}var wn=null,qu=!1,yh=!1;function s0(t){wn===null?wn=[t]:wn.push(t)}function IR(t){qu=!0,s0(t)}function Rr(){if(!yh&&wn!==null){yh=!0;var t=0,e=le;try{var n=wn;for(le=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wn=null,qu=!1}catch(i){throw wn!==null&&(wn=wn.slice(t+1)),xw(Ff,Rr),i}finally{le=e,yh=!1}}return null}var Oi=[],Di=0,nu=null,ru=0,kt=[],xt=0,Qr=null,Tn=1,In="";function Mr(t,e){Oi[Di++]=ru,Oi[Di++]=nu,nu=t,ru=e}function o0(t,e,n){kt[xt++]=Tn,kt[xt++]=In,kt[xt++]=Qr,Qr=t;var r=Tn;t=In;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var s=32-Ht(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Tn=1<<32-Ht(e)+i|n<<i|r,In=s+t}else Tn=1<<s|n<<i|r,In=t}function Gf(t){t.return!==null&&(Mr(t,1),o0(t,1,0))}function Kf(t){for(;t===nu;)nu=Oi[--Di],Oi[Di]=null,ru=Oi[--Di],Oi[Di]=null;for(;t===Qr;)Qr=kt[--xt],kt[xt]=null,In=kt[--xt],kt[xt]=null,Tn=kt[--xt],kt[xt]=null}var Tt=null,Et=null,ge=!1,Bt=null;function a0(t,e){var n=Ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ay(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tt=t,Et=or(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tt=t,Et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:Tn,overflow:In}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tt=t,Et=null,!0):!1;default:return!1}}function vd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _d(t){if(ge){var e=Et;if(e){var n=e;if(!ay(t,e)){if(vd(t))throw Error(U(418));e=or(n.nextSibling);var r=Tt;e&&ay(t,e)?a0(r,n):(t.flags=t.flags&-4097|2,ge=!1,Tt=t)}}else{if(vd(t))throw Error(U(418));t.flags=t.flags&-4097|2,ge=!1,Tt=t}}}function ly(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tt=t}function Za(t){if(t!==Tt)return!1;if(!ge)return ly(t),ge=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pd(t.type,t.memoizedProps)),e&&(e=Et)){if(vd(t))throw l0(),Error(U(418));for(;e;)a0(t,e),e=or(e.nextSibling)}if(ly(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Et=or(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Et=null}}else Et=Tt?or(t.stateNode.nextSibling):null;return!0}function l0(){for(var t=Et;t;)t=or(t.nextSibling)}function Yi(){Et=Tt=null,ge=!1}function Qf(t){Bt===null?Bt=[t]:Bt.push(t)}var SR=Un.ReactCurrentBatchConfig;function Bs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function el(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function uy(t){var e=t._init;return e(t._payload)}function u0(t){function e(T,v){if(t){var I=T.deletions;I===null?(T.deletions=[v],T.flags|=16):I.push(v)}}function n(T,v){if(!t)return null;for(;v!==null;)e(T,v),v=v.sibling;return null}function r(T,v){for(T=new Map;v!==null;)v.key!==null?T.set(v.key,v):T.set(v.index,v),v=v.sibling;return T}function i(T,v){return T=cr(T,v),T.index=0,T.sibling=null,T}function s(T,v,I){return T.index=I,t?(I=T.alternate,I!==null?(I=I.index,I<v?(T.flags|=2,v):I):(T.flags|=2,v)):(T.flags|=1048576,v)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,v,I,O){return v===null||v.tag!==6?(v=Sh(I,T.mode,O),v.return=T,v):(v=i(v,I),v.return=T,v)}function u(T,v,I,O){var L=I.type;return L===Ri?d(T,v,I.props.children,O,I.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Hn&&uy(L)===v.type)?(O=i(v,I.props),O.ref=Bs(T,v,I),O.return=T,O):(O=xl(I.type,I.key,I.props,null,T.mode,O),O.ref=Bs(T,v,I),O.return=T,O)}function c(T,v,I,O){return v===null||v.tag!==4||v.stateNode.containerInfo!==I.containerInfo||v.stateNode.implementation!==I.implementation?(v=Ch(I,T.mode,O),v.return=T,v):(v=i(v,I.children||[]),v.return=T,v)}function d(T,v,I,O,L){return v===null||v.tag!==7?(v=qr(I,T.mode,O,L),v.return=T,v):(v=i(v,I),v.return=T,v)}function p(T,v,I){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Sh(""+v,T.mode,I),v.return=T,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case za:return I=xl(v.type,v.key,v.props,null,T.mode,I),I.ref=Bs(T,null,v),I.return=T,I;case Ci:return v=Ch(v,T.mode,I),v.return=T,v;case Hn:var O=v._init;return p(T,O(v._payload),I)}if(Ys(v)||Vs(v))return v=qr(v,T.mode,I,null),v.return=T,v;el(T,v)}return null}function m(T,v,I,O){var L=v!==null?v.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return L!==null?null:l(T,v,""+I,O);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case za:return I.key===L?u(T,v,I,O):null;case Ci:return I.key===L?c(T,v,I,O):null;case Hn:return L=I._init,m(T,v,L(I._payload),O)}if(Ys(I)||Vs(I))return L!==null?null:d(T,v,I,O,null);el(T,I)}return null}function _(T,v,I,O,L){if(typeof O=="string"&&O!==""||typeof O=="number")return T=T.get(I)||null,l(v,T,""+O,L);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case za:return T=T.get(O.key===null?I:O.key)||null,u(v,T,O,L);case Ci:return T=T.get(O.key===null?I:O.key)||null,c(v,T,O,L);case Hn:var j=O._init;return _(T,v,I,j(O._payload),L)}if(Ys(O)||Vs(O))return T=T.get(I)||null,d(v,T,O,L,null);el(v,O)}return null}function A(T,v,I,O){for(var L=null,j=null,E=v,y=v=0,w=null;E!==null&&y<I.length;y++){E.index>y?(w=E,E=null):w=E.sibling;var S=m(T,E,I[y],O);if(S===null){E===null&&(E=w);break}t&&E&&S.alternate===null&&e(T,E),v=s(S,v,y),j===null?L=S:j.sibling=S,j=S,E=w}if(y===I.length)return n(T,E),ge&&Mr(T,y),L;if(E===null){for(;y<I.length;y++)E=p(T,I[y],O),E!==null&&(v=s(E,v,y),j===null?L=E:j.sibling=E,j=E);return ge&&Mr(T,y),L}for(E=r(T,E);y<I.length;y++)w=_(E,T,y,I[y],O),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?y:w.key),v=s(w,v,y),j===null?L=w:j.sibling=w,j=w);return t&&E.forEach(function(P){return e(T,P)}),ge&&Mr(T,y),L}function k(T,v,I,O){var L=Vs(I);if(typeof L!="function")throw Error(U(150));if(I=L.call(I),I==null)throw Error(U(151));for(var j=L=null,E=v,y=v=0,w=null,S=I.next();E!==null&&!S.done;y++,S=I.next()){E.index>y?(w=E,E=null):w=E.sibling;var P=m(T,E,S.value,O);if(P===null){E===null&&(E=w);break}t&&E&&P.alternate===null&&e(T,E),v=s(P,v,y),j===null?L=P:j.sibling=P,j=P,E=w}if(S.done)return n(T,E),ge&&Mr(T,y),L;if(E===null){for(;!S.done;y++,S=I.next())S=p(T,S.value,O),S!==null&&(v=s(S,v,y),j===null?L=S:j.sibling=S,j=S);return ge&&Mr(T,y),L}for(E=r(T,E);!S.done;y++,S=I.next())S=_(E,T,y,S.value,O),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?y:S.key),v=s(S,v,y),j===null?L=S:j.sibling=S,j=S);return t&&E.forEach(function(N){return e(T,N)}),ge&&Mr(T,y),L}function R(T,v,I,O){if(typeof I=="object"&&I!==null&&I.type===Ri&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case za:e:{for(var L=I.key,j=v;j!==null;){if(j.key===L){if(L=I.type,L===Ri){if(j.tag===7){n(T,j.sibling),v=i(j,I.props.children),v.return=T,T=v;break e}}else if(j.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Hn&&uy(L)===j.type){n(T,j.sibling),v=i(j,I.props),v.ref=Bs(T,j,I),v.return=T,T=v;break e}n(T,j);break}else e(T,j);j=j.sibling}I.type===Ri?(v=qr(I.props.children,T.mode,O,I.key),v.return=T,T=v):(O=xl(I.type,I.key,I.props,null,T.mode,O),O.ref=Bs(T,v,I),O.return=T,T=O)}return o(T);case Ci:e:{for(j=I.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===I.containerInfo&&v.stateNode.implementation===I.implementation){n(T,v.sibling),v=i(v,I.children||[]),v.return=T,T=v;break e}else{n(T,v);break}else e(T,v);v=v.sibling}v=Ch(I,T.mode,O),v.return=T,T=v}return o(T);case Hn:return j=I._init,R(T,v,j(I._payload),O)}if(Ys(I))return A(T,v,I,O);if(Vs(I))return k(T,v,I,O);el(T,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,v!==null&&v.tag===6?(n(T,v.sibling),v=i(v,I),v.return=T,T=v):(n(T,v),v=Sh(I,T.mode,O),v.return=T,T=v),o(T)):n(T,v)}return R}var Ji=u0(!0),c0=u0(!1),iu=Cr(null),su=null,bi=null,Yf=null;function Jf(){Yf=bi=su=null}function Xf(t){var e=iu.current;me(iu),t._currentValue=e}function wd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Bi(t,e){su=t,Yf=bi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(pt=!0),t.firstContext=null)}function Lt(t){var e=t._currentValue;if(Yf!==t)if(t={context:t,memoizedValue:e,next:null},bi===null){if(su===null)throw Error(U(308));bi=t,su.dependencies={lanes:0,firstContext:t}}else bi=bi.next=t;return e}var jr=null;function Zf(t){jr===null?jr=[t]:jr.push(t)}function h0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zf(e)):(n.next=i.next,i.next=n),e.interleaved=n,On(t,r)}function On(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qn=!1;function ep(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function d0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function An(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,On(t,n)}return i=r.interleaved,i===null?(e.next=e,Zf(r)):(e.next=i.next,i.next=e),r.interleaved=e,On(t,n)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Uf(t,n)}}function cy(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ou(t,e,n,r){var i=t.updateQueue;qn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,c=u.next;u.next=null,o===null?s=c:o.next=c,o=u;var d=t.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=c:l.next=c,d.lastBaseUpdate=u))}if(s!==null){var p=i.baseState;o=0,d=c=u=null,l=s;do{var m=l.lane,_=l.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var A=t,k=l;switch(m=e,_=n,k.tag){case 1:if(A=k.payload,typeof A=="function"){p=A.call(_,p,m);break e}p=A;break e;case 3:A.flags=A.flags&-65537|128;case 0:if(A=k.payload,m=typeof A=="function"?A.call(_,p,m):A,m==null)break e;p=Te({},p,m);break e;case 2:qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[l]:m.push(l))}else _={eventTime:_,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(c=d=_,u=p):d=d.next=_,o|=m;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;m=l,l=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(d===null&&(u=p),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=p}}function hy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var ua={},rn=Cr(ua),Lo=Cr(ua),Mo=Cr(ua);function $r(t){if(t===ua)throw Error(U(174));return t}function tp(t,e){switch(de(Mo,e),de(Lo,t),de(rn,ua),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ed(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ed(e,t)}me(rn),de(rn,e)}function Xi(){me(rn),me(Lo),me(Mo)}function f0(t){$r(Mo.current);var e=$r(rn.current),n=ed(e,t.type);e!==n&&(de(Lo,t),de(rn,n))}function np(t){Lo.current===t&&(me(rn),me(Lo))}var we=Cr(0);function au(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vh=[];function rp(){for(var t=0;t<vh.length;t++)vh[t]._workInProgressVersionPrimary=null;vh.length=0}var Cl=Un.ReactCurrentDispatcher,_h=Un.ReactCurrentBatchConfig,Yr=0,Ee=null,Oe=null,Fe=null,lu=!1,ho=!1,Vo=0,CR=0;function Ye(){throw Error(U(321))}function ip(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kt(t[n],e[n]))return!1;return!0}function sp(t,e,n,r,i,s){if(Yr=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cl.current=t===null||t.memoizedState===null?kR:xR,t=n(r,i),ho){s=0;do{if(ho=!1,Vo=0,25<=s)throw Error(U(301));s+=1,Fe=Oe=null,e.updateQueue=null,Cl.current=NR,t=n(r,i)}while(ho)}if(Cl.current=uu,e=Oe!==null&&Oe.next!==null,Yr=0,Fe=Oe=Ee=null,lu=!1,e)throw Error(U(300));return t}function op(){var t=Vo!==0;return Vo=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Ee.memoizedState=Fe=t:Fe=Fe.next=t,Fe}function Mt(){if(Oe===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=Fe===null?Ee.memoizedState:Fe.next;if(e!==null)Fe=e,Oe=t;else{if(t===null)throw Error(U(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},Fe===null?Ee.memoizedState=Fe=t:Fe=Fe.next=t}return Fe}function Fo(t,e){return typeof e=="function"?e(t):e}function wh(t){var e=Mt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,c=s;do{var d=c.lane;if((Yr&d)===d)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(l=u=p,o=r):u=u.next=p,Ee.lanes|=d,Jr|=d}c=c.next}while(c!==null&&c!==s);u===null?o=r:u.next=l,Kt(r,e.memoizedState)||(pt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Ee.lanes|=s,Jr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Eh(t){var e=Mt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Kt(s,e.memoizedState)||(pt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function p0(){}function m0(t,e){var n=Ee,r=Mt(),i=e(),s=!Kt(r.memoizedState,i);if(s&&(r.memoizedState=i,pt=!0),r=r.queue,ap(v0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,Uo(9,y0.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(U(349));Yr&30||g0(n,e,i)}return i}function g0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function y0(t,e,n,r){e.value=n,e.getSnapshot=r,_0(e)&&w0(t)}function v0(t,e,n){return n(function(){_0(e)&&w0(t)})}function _0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kt(t,n)}catch{return!0}}function w0(t){var e=On(t,1);e!==null&&qt(e,t,1,-1)}function dy(t){var e=en();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:t},e.queue=t,t=t.dispatch=PR.bind(null,Ee,t),[e.memoizedState,t]}function Uo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null,stores:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function E0(){return Mt().memoizedState}function Rl(t,e,n,r){var i=en();Ee.flags|=t,i.memoizedState=Uo(1|e,n,void 0,r===void 0?null:r)}function Gu(t,e,n,r){var i=Mt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&ip(r,o.deps)){i.memoizedState=Uo(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=Uo(1|e,n,s,r)}function fy(t,e){return Rl(8390656,8,t,e)}function ap(t,e){return Gu(2048,8,t,e)}function T0(t,e){return Gu(4,2,t,e)}function I0(t,e){return Gu(4,4,t,e)}function S0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function C0(t,e,n){return n=n!=null?n.concat([t]):null,Gu(4,4,S0.bind(null,e,t),n)}function lp(){}function R0(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ip(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function A0(t,e){var n=Mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ip(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function P0(t,e,n){return Yr&21?(Kt(n,e)||(n=Dw(),Ee.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,pt=!0),t.memoizedState=n)}function RR(t,e){var n=le;le=n!==0&&4>n?n:4,t(!0);var r=_h.transition;_h.transition={};try{t(!1),e()}finally{le=n,_h.transition=r}}function k0(){return Mt().memoizedState}function AR(t,e,n){var r=ur(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},x0(t))N0(e,n);else if(n=h0(t,e,n,r),n!==null){var i=lt();qt(n,t,r,i),O0(n,e,r)}}function PR(t,e,n){var r=ur(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(x0(t))N0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Kt(l,o)){var u=e.interleaved;u===null?(i.next=i,Zf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=h0(t,e,i,r),n!==null&&(i=lt(),qt(n,t,r,i),O0(n,e,r))}}function x0(t){var e=t.alternate;return t===Ee||e!==null&&e===Ee}function N0(t,e){ho=lu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function O0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Uf(t,n)}}var uu={readContext:Lt,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useInsertionEffect:Ye,useLayoutEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useMutableSource:Ye,useSyncExternalStore:Ye,useId:Ye,unstable_isNewReconciler:!1},kR={readContext:Lt,useCallback:function(t,e){return en().memoizedState=[t,e===void 0?null:e],t},useContext:Lt,useEffect:fy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Rl(4194308,4,S0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Rl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Rl(4,2,t,e)},useMemo:function(t,e){var n=en();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=en();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=AR.bind(null,Ee,t),[r.memoizedState,t]},useRef:function(t){var e=en();return t={current:t},e.memoizedState=t},useState:dy,useDebugValue:lp,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=dy(!1),e=t[0];return t=RR.bind(null,t[1]),en().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ee,i=en();if(ge){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Ue===null)throw Error(U(349));Yr&30||g0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,fy(v0.bind(null,r,s,t),[t]),r.flags|=2048,Uo(9,y0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=en(),e=Ue.identifierPrefix;if(ge){var n=In,r=Tn;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=CR++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},xR={readContext:Lt,useCallback:R0,useContext:Lt,useEffect:ap,useImperativeHandle:C0,useInsertionEffect:T0,useLayoutEffect:I0,useMemo:A0,useReducer:wh,useRef:E0,useState:function(){return wh(Fo)},useDebugValue:lp,useDeferredValue:function(t){var e=Mt();return P0(e,Oe.memoizedState,t)},useTransition:function(){var t=wh(Fo)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:p0,useSyncExternalStore:m0,useId:k0,unstable_isNewReconciler:!1},NR={readContext:Lt,useCallback:R0,useContext:Lt,useEffect:ap,useImperativeHandle:C0,useInsertionEffect:T0,useLayoutEffect:I0,useMemo:A0,useReducer:Eh,useRef:E0,useState:function(){return Eh(Fo)},useDebugValue:lp,useDeferredValue:function(t){var e=Mt();return Oe===null?e.memoizedState=t:P0(e,Oe.memoizedState,t)},useTransition:function(){var t=Eh(Fo)[0],e=Mt().memoizedState;return[t,e]},useMutableSource:p0,useSyncExternalStore:m0,useId:k0,unstable_isNewReconciler:!1};function jt(t,e){if(t&&t.defaultProps){e=Te({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ed(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Te({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ku={isMounted:function(t){return(t=t._reactInternals)?oi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=ur(t),s=An(r,i);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(qt(e,t,i,r),Sl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=ur(t),s=An(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,i),e!==null&&(qt(e,t,i,r),Sl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=ur(t),i=An(n,r);i.tag=2,e!=null&&(i.callback=e),e=ar(t,i,r),e!==null&&(qt(e,t,r,n),Sl(e,t,r))}};function py(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!No(n,r)||!No(i,s):!0}function D0(t,e,n){var r=!1,i=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Lt(s):(i=gt(e)?Kr:nt.current,r=e.contextTypes,s=(r=r!=null)?Qi(t,i):yr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ku,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function my(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ku.enqueueReplaceState(e,e.state,null)}function Td(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ep(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Lt(s):(s=gt(e)?Kr:nt.current,i.context=Qi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ed(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ku.enqueueReplaceState(i,i.state,null),ou(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Zi(t,e){try{var n="",r=e;do n+=sC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Th(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Id(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var OR=typeof WeakMap=="function"?WeakMap:Map;function b0(t,e,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){hu||(hu=!0,Dd=r),Id(t,e)},n}function L0(t,e,n){n=An(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Id(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Id(t,e),typeof r!="function"&&(lr===null?lr=new Set([this]):lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function gy(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new OR;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=qR.bind(null,t,e,n),e.then(t,t))}function yy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=An(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var DR=Un.ReactCurrentOwner,pt=!1;function at(t,e,n,r){e.child=t===null?c0(e,null,n,r):Ji(e,t.child,n,r)}function _y(t,e,n,r,i){n=n.render;var s=e.ref;return Bi(e,i),r=sp(t,e,n,r,s,i),n=op(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(ge&&n&&Gf(e),e.flags|=1,at(t,e,r,i),e.child)}function wy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!gp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,M0(t,e,s,r,i)):(t=xl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:No,n(o,r)&&t.ref===e.ref)return Dn(t,e,i)}return e.flags|=1,t=cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function M0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(No(s,r)&&t.ref===e.ref)if(pt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(pt=!0);else return e.lanes=t.lanes,Dn(t,e,i)}return Sd(t,e,n,r,i)}function V0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(Mi,wt),wt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,de(Mi,wt),wt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(Mi,wt),wt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,de(Mi,wt),wt|=r;return at(t,e,i,n),e.child}function F0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sd(t,e,n,r,i){var s=gt(n)?Kr:nt.current;return s=Qi(e,s),Bi(e,i),n=sp(t,e,n,r,s,i),r=op(),t!==null&&!pt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(ge&&r&&Gf(e),e.flags|=1,at(t,e,n,i),e.child)}function Ey(t,e,n,r,i){if(gt(n)){var s=!0;tu(e)}else s=!1;if(Bi(e,i),e.stateNode===null)Al(t,e),D0(e,n,r),Td(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Lt(c):(c=gt(n)?Kr:nt.current,c=Qi(e,c));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==c)&&my(e,o,r,c),qn=!1;var m=e.memoizedState;o.state=m,ou(e,r,o,i),u=e.memoizedState,l!==r||m!==u||mt.current||qn?(typeof d=="function"&&(Ed(e,n,d,r),u=e.memoizedState),(l=qn||py(e,n,l,r,m,u,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,d0(t,e),l=e.memoizedProps,c=e.type===e.elementType?l:jt(e.type,l),o.props=c,p=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Lt(u):(u=gt(n)?Kr:nt.current,u=Qi(e,u));var _=n.getDerivedStateFromProps;(d=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==p||m!==u)&&my(e,o,r,u),qn=!1,m=e.memoizedState,o.state=m,ou(e,r,o,i);var A=e.memoizedState;l!==p||m!==A||mt.current||qn?(typeof _=="function"&&(Ed(e,n,_,r),A=e.memoizedState),(c=qn||py(e,n,c,r,m,A,u)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,A,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,A,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=A),o.props=r,o.state=A,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Cd(t,e,n,r,s,i)}function Cd(t,e,n,r,i,s){F0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&oy(e,n,!1),Dn(t,e,s);r=e.stateNode,DR.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ji(e,t.child,null,s),e.child=Ji(e,null,l,s)):at(t,e,l,s),e.memoizedState=r.state,i&&oy(e,n,!0),e.child}function U0(t){var e=t.stateNode;e.pendingContext?sy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sy(t,e.context,!1),tp(t,e.containerInfo)}function Ty(t,e,n,r,i){return Yi(),Qf(i),e.flags|=256,at(t,e,n,r),e.child}var Rd={dehydrated:null,treeContext:null,retryLane:0};function Ad(t){return{baseLanes:t,cachePool:null,transitions:null}}function j0(t,e,n){var r=e.pendingProps,i=we.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),de(we,i&1),t===null)return _d(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ju(o,r,0,null),t=qr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ad(n),e.memoizedState=Rd,t):up(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return bR(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=cr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=cr(l,s):(s=qr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Ad(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Rd,r}return s=t.child,t=s.sibling,r=cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function up(t,e){return e=Ju({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function tl(t,e,n,r){return r!==null&&Qf(r),Ji(e,t.child,null,n),t=up(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function bR(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Th(Error(U(422))),tl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ju({mode:"visible",children:r.children},i,0,null),s=qr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ji(e,t.child,null,o),e.child.memoizedState=Ad(o),e.memoizedState=Rd,s);if(!(e.mode&1))return tl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Th(s,r,void 0),tl(t,e,o,r)}if(l=(o&t.childLanes)!==0,pt||l){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,On(t,i),qt(r,t,i,-1))}return mp(),r=Th(Error(U(421))),tl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=GR.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Et=or(i.nextSibling),Tt=e,ge=!0,Bt=null,t!==null&&(kt[xt++]=Tn,kt[xt++]=In,kt[xt++]=Qr,Tn=t.id,In=t.overflow,Qr=e),e=up(e,r.children),e.flags|=4096,e)}function Iy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),wd(t.return,e,n)}function Ih(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function $0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(at(t,e,r.children,n),r=we.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Iy(t,n,e);else if(t.tag===19)Iy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(de(we,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&au(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ih(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&au(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ih(e,!0,n,null,s);break;case"together":Ih(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function LR(t,e,n){switch(e.tag){case 3:U0(e),Yi();break;case 5:f0(e);break;case 1:gt(e.type)&&tu(e);break;case 4:tp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;de(iu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(de(we,we.current&1),e.flags|=128,null):n&e.child.childLanes?j0(t,e,n):(de(we,we.current&1),t=Dn(t,e,n),t!==null?t.sibling:null);de(we,we.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return $0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(we,we.current),r)break;return null;case 22:case 23:return e.lanes=0,V0(t,e,n)}return Dn(t,e,n)}var B0,Pd,z0,W0;B0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pd=function(){};z0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,$r(rn.current);var s=null;switch(n){case"input":i=Yh(t,i),r=Yh(t,r),s=[];break;case"select":i=Te({},i,{value:void 0}),r=Te({},r,{value:void 0}),s=[];break;case"textarea":i=Zh(t,i),r=Zh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Zl)}td(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(So.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var u=r[c];if(l=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==l&&(u!=null||l!=null))if(c==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(So.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&pe("scroll",t),s||l===u||(s=[])):(s=s||[]).push(c,u))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};W0=function(t,e,n,r){n!==r&&(e.flags|=4)};function zs(t,e){if(!ge)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Je(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function MR(t,e,n){var r=e.pendingProps;switch(Kf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(e),null;case 1:return gt(e.type)&&eu(),Je(e),null;case 3:return r=e.stateNode,Xi(),me(mt),me(nt),rp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bt!==null&&(Md(Bt),Bt=null))),Pd(t,e),Je(e),null;case 5:np(e);var i=$r(Mo.current);if(n=e.type,t!==null&&e.stateNode!=null)z0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Je(e),null}if(t=$r(rn.current),Za(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[tn]=e,r[bo]=s,t=(e.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(i=0;i<Xs.length;i++)pe(Xs[i],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":Og(r,s),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},pe("invalid",r);break;case"textarea":bg(r,s),pe("invalid",r)}td(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Xa(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Xa(r.textContent,l,t),i=["children",""+l]):So.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&pe("scroll",r)}switch(n){case"input":Wa(r),Dg(r,s,!0);break;case"textarea":Wa(r),Lg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Zl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[tn]=e,t[bo]=r,B0(t,e,!1,!1),e.stateNode=t;e:{switch(o=nd(n,r),n){case"dialog":pe("cancel",t),pe("close",t),i=r;break;case"iframe":case"object":case"embed":pe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Xs.length;i++)pe(Xs[i],t);i=r;break;case"source":pe("error",t),i=r;break;case"img":case"image":case"link":pe("error",t),pe("load",t),i=r;break;case"details":pe("toggle",t),i=r;break;case"input":Og(t,r),i=Yh(t,r),pe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Te({},r,{value:void 0}),pe("invalid",t);break;case"textarea":bg(t,r),i=Zh(t,r),pe("invalid",t);break;default:i=r}td(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Ew(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&_w(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Co(t,u):typeof u=="number"&&Co(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(So.hasOwnProperty(s)?u!=null&&s==="onScroll"&&pe("scroll",t):u!=null&&Df(t,s,u,o))}switch(n){case"input":Wa(t),Dg(t,r,!1);break;case"textarea":Wa(t),Lg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+gr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Zl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Je(e),null;case 6:if(t&&e.stateNode!=null)W0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=$r(Mo.current),$r(rn.current),Za(e)){if(r=e.stateNode,n=e.memoizedProps,r[tn]=e,(s=r.nodeValue!==n)&&(t=Tt,t!==null))switch(t.tag){case 3:Xa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=e,e.stateNode=r}return Je(e),null;case 13:if(me(we),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ge&&Et!==null&&e.mode&1&&!(e.flags&128))l0(),Yi(),e.flags|=98560,s=!1;else if(s=Za(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[tn]=e}else Yi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Je(e),s=!1}else Bt!==null&&(Md(Bt),Bt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||we.current&1?be===0&&(be=3):mp())),e.updateQueue!==null&&(e.flags|=4),Je(e),null);case 4:return Xi(),Pd(t,e),t===null&&Oo(e.stateNode.containerInfo),Je(e),null;case 10:return Xf(e.type._context),Je(e),null;case 17:return gt(e.type)&&eu(),Je(e),null;case 19:if(me(we),s=e.memoizedState,s===null)return Je(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)zs(s,!1);else{if(be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=au(t),o!==null){for(e.flags|=128,zs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return de(we,we.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>es&&(e.flags|=128,r=!0,zs(s,!1),e.lanes=4194304)}else{if(!r)if(t=au(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),zs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ge)return Je(e),null}else 2*Pe()-s.renderingStartTime>es&&n!==1073741824&&(e.flags|=128,r=!0,zs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=we.current,de(we,r?n&1|2:n&1),e):(Je(e),null);case 22:case 23:return pp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?wt&1073741824&&(Je(e),e.subtreeFlags&6&&(e.flags|=8192)):Je(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function VR(t,e){switch(Kf(e),e.tag){case 1:return gt(e.type)&&eu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Xi(),me(mt),me(nt),rp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return np(e),null;case 13:if(me(we),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));Yi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return me(we),null;case 4:return Xi(),null;case 10:return Xf(e.type._context),null;case 22:case 23:return pp(),null;case 24:return null;default:return null}}var nl=!1,et=!1,FR=typeof WeakSet=="function"?WeakSet:Set,W=null;function Li(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ce(t,e,r)}else n.current=null}function kd(t,e,n){try{n()}catch(r){Ce(t,e,r)}}var Sy=!1;function UR(t,e){if(dd=Yl,t=Qw(),qf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,p=t,m=null;t:for(;;){for(var _;p!==n||i!==0&&p.nodeType!==3||(l=o+i),p!==s||r!==0&&p.nodeType!==3||(u=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(_=p.firstChild)!==null;)m=p,p=_;for(;;){if(p===t)break t;if(m===n&&++c===i&&(l=o),m===s&&++d===r&&(u=o),(_=p.nextSibling)!==null)break;p=m,m=p.parentNode}p=_}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(fd={focusedElem:t,selectionRange:n},Yl=!1,W=e;W!==null;)if(e=W,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,W=t;else for(;W!==null;){e=W;try{var A=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(A!==null){var k=A.memoizedProps,R=A.memoizedState,T=e.stateNode,v=T.getSnapshotBeforeUpdate(e.elementType===e.type?k:jt(e.type,k),R);T.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(O){Ce(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,W=t;break}W=e.return}return A=Sy,Sy=!1,A}function fo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&kd(e,n,s)}i=i.next}while(i!==r)}}function Qu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function H0(t){var e=t.alternate;e!==null&&(t.alternate=null,H0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tn],delete e[bo],delete e[gd],delete e[ER],delete e[TR])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function q0(t){return t.tag===5||t.tag===3||t.tag===4}function Cy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||q0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zl));else if(r!==4&&(t=t.child,t!==null))for(Nd(t,e,n),t=t.sibling;t!==null;)Nd(t,e,n),t=t.sibling}function Od(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Od(t,e,n),t=t.sibling;t!==null;)Od(t,e,n),t=t.sibling}var $e=null,$t=!1;function zn(t,e,n){for(n=n.child;n!==null;)G0(t,e,n),n=n.sibling}function G0(t,e,n){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount($u,n)}catch{}switch(n.tag){case 5:et||Li(n,e);case 6:var r=$e,i=$t;$e=null,zn(t,e,n),$e=r,$t=i,$e!==null&&($t?(t=$e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&($t?(t=$e,n=n.stateNode,t.nodeType===8?gh(t.parentNode,n):t.nodeType===1&&gh(t,n),ko(t)):gh($e,n.stateNode));break;case 4:r=$e,i=$t,$e=n.stateNode.containerInfo,$t=!0,zn(t,e,n),$e=r,$t=i;break;case 0:case 11:case 14:case 15:if(!et&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kd(n,e,o),i=i.next}while(i!==r)}zn(t,e,n);break;case 1:if(!et&&(Li(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ce(n,e,l)}zn(t,e,n);break;case 21:zn(t,e,n);break;case 22:n.mode&1?(et=(r=et)||n.memoizedState!==null,zn(t,e,n),et=r):zn(t,e,n);break;default:zn(t,e,n)}}function Ry(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new FR),e.forEach(function(r){var i=KR.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ut(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:$e=l.stateNode,$t=!1;break e;case 3:$e=l.stateNode.containerInfo,$t=!0;break e;case 4:$e=l.stateNode.containerInfo,$t=!0;break e}l=l.return}if($e===null)throw Error(U(160));G0(s,o,i),$e=null,$t=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){Ce(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)K0(e,t),e=e.sibling}function K0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ut(e,t),Xt(t),r&4){try{fo(3,t,t.return),Qu(3,t)}catch(k){Ce(t,t.return,k)}try{fo(5,t,t.return)}catch(k){Ce(t,t.return,k)}}break;case 1:Ut(e,t),Xt(t),r&512&&n!==null&&Li(n,n.return);break;case 5:if(Ut(e,t),Xt(t),r&512&&n!==null&&Li(n,n.return),t.flags&32){var i=t.stateNode;try{Co(i,"")}catch(k){Ce(t,t.return,k)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&gw(i,s),nd(l,o);var c=nd(l,s);for(o=0;o<u.length;o+=2){var d=u[o],p=u[o+1];d==="style"?Ew(i,p):d==="dangerouslySetInnerHTML"?_w(i,p):d==="children"?Co(i,p):Df(i,d,p,c)}switch(l){case"input":Jh(i,s);break;case"textarea":yw(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var _=s.value;_!=null?Fi(i,!!s.multiple,_,!1):m!==!!s.multiple&&(s.defaultValue!=null?Fi(i,!!s.multiple,s.defaultValue,!0):Fi(i,!!s.multiple,s.multiple?[]:"",!1))}i[bo]=s}catch(k){Ce(t,t.return,k)}}break;case 6:if(Ut(e,t),Xt(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(k){Ce(t,t.return,k)}}break;case 3:if(Ut(e,t),Xt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ko(e.containerInfo)}catch(k){Ce(t,t.return,k)}break;case 4:Ut(e,t),Xt(t);break;case 13:Ut(e,t),Xt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(dp=Pe())),r&4&&Ry(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(et=(c=et)||d,Ut(e,t),et=c):Ut(e,t),Xt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(W=t,d=t.child;d!==null;){for(p=W=d;W!==null;){switch(m=W,_=m.child,m.tag){case 0:case 11:case 14:case 15:fo(4,m,m.return);break;case 1:Li(m,m.return);var A=m.stateNode;if(typeof A.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,A.props=e.memoizedProps,A.state=e.memoizedState,A.componentWillUnmount()}catch(k){Ce(r,n,k)}}break;case 5:Li(m,m.return);break;case 22:if(m.memoizedState!==null){Py(p);continue}}_!==null?(_.return=m,W=_):Py(p)}d=d.sibling}e:for(d=null,p=t;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,u=p.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=ww("display",o))}catch(k){Ce(t,t.return,k)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(k){Ce(t,t.return,k)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Ut(e,t),Xt(t),r&4&&Ry(t);break;case 21:break;default:Ut(e,t),Xt(t)}}function Xt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(q0(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Co(i,""),r.flags&=-33);var s=Cy(t);Od(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Cy(t);Nd(t,l,o);break;default:throw Error(U(161))}}catch(u){Ce(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function jR(t,e,n){W=t,Q0(t)}function Q0(t,e,n){for(var r=(t.mode&1)!==0;W!==null;){var i=W,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||nl;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||et;l=nl;var c=et;if(nl=o,(et=u)&&!c)for(W=i;W!==null;)o=W,u=o.child,o.tag===22&&o.memoizedState!==null?ky(i):u!==null?(u.return=o,W=u):ky(i);for(;s!==null;)W=s,Q0(s),s=s.sibling;W=i,nl=l,et=c}Ay(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,W=s):Ay(t)}}function Ay(t){for(;W!==null;){var e=W;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:et||Qu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!et)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&hy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}hy(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ko(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}et||e.flags&512&&xd(e)}catch(m){Ce(e,e.return,m)}}if(e===t){W=null;break}if(n=e.sibling,n!==null){n.return=e.return,W=n;break}W=e.return}}function Py(t){for(;W!==null;){var e=W;if(e===t){W=null;break}var n=e.sibling;if(n!==null){n.return=e.return,W=n;break}W=e.return}}function ky(t){for(;W!==null;){var e=W;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qu(4,e)}catch(u){Ce(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ce(e,i,u)}}var s=e.return;try{xd(e)}catch(u){Ce(e,s,u)}break;case 5:var o=e.return;try{xd(e)}catch(u){Ce(e,o,u)}}}catch(u){Ce(e,e.return,u)}if(e===t){W=null;break}var l=e.sibling;if(l!==null){l.return=e.return,W=l;break}W=e.return}}var $R=Math.ceil,cu=Un.ReactCurrentDispatcher,cp=Un.ReactCurrentOwner,Dt=Un.ReactCurrentBatchConfig,se=0,Ue=null,xe=null,We=0,wt=0,Mi=Cr(0),be=0,jo=null,Jr=0,Yu=0,hp=0,po=null,dt=null,dp=0,es=1/0,_n=null,hu=!1,Dd=null,lr=null,rl=!1,er=null,du=0,mo=0,bd=null,Pl=-1,kl=0;function lt(){return se&6?Pe():Pl!==-1?Pl:Pl=Pe()}function ur(t){return t.mode&1?se&2&&We!==0?We&-We:SR.transition!==null?(kl===0&&(kl=Dw()),kl):(t=le,t!==0||(t=window.event,t=t===void 0?16:jw(t.type)),t):1}function qt(t,e,n,r){if(50<mo)throw mo=0,bd=null,Error(U(185));oa(t,n,r),(!(se&2)||t!==Ue)&&(t===Ue&&(!(se&2)&&(Yu|=n),be===4&&Qn(t,We)),yt(t,r),n===1&&se===0&&!(e.mode&1)&&(es=Pe()+500,qu&&Rr()))}function yt(t,e){var n=t.callbackNode;SC(t,e);var r=Ql(t,t===Ue?We:0);if(r===0)n!==null&&Fg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Fg(n),e===1)t.tag===0?IR(xy.bind(null,t)):s0(xy.bind(null,t)),_R(function(){!(se&6)&&Rr()}),n=null;else{switch(bw(r)){case 1:n=Ff;break;case 4:n=Nw;break;case 16:n=Kl;break;case 536870912:n=Ow;break;default:n=Kl}n=rE(n,Y0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Y0(t,e){if(Pl=-1,kl=0,se&6)throw Error(U(327));var n=t.callbackNode;if(zi()&&t.callbackNode!==n)return null;var r=Ql(t,t===Ue?We:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=fu(t,r);else{e=r;var i=se;se|=2;var s=X0();(Ue!==t||We!==e)&&(_n=null,es=Pe()+500,Hr(t,e));do try{WR();break}catch(l){J0(t,l)}while(!0);Jf(),cu.current=s,se=i,xe!==null?e=0:(Ue=null,We=0,e=be)}if(e!==0){if(e===2&&(i=ad(t),i!==0&&(r=i,e=Ld(t,i))),e===1)throw n=jo,Hr(t,0),Qn(t,r),yt(t,Pe()),n;if(e===6)Qn(t,r);else{if(i=t.current.alternate,!(r&30)&&!BR(i)&&(e=fu(t,r),e===2&&(s=ad(t),s!==0&&(r=s,e=Ld(t,s))),e===1))throw n=jo,Hr(t,0),Qn(t,r),yt(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:Vr(t,dt,_n);break;case 3:if(Qn(t,r),(r&130023424)===r&&(e=dp+500-Pe(),10<e)){if(Ql(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=md(Vr.bind(null,t,dt,_n),e);break}Vr(t,dt,_n);break;case 4:if(Qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ht(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$R(r/1960))-r,10<r){t.timeoutHandle=md(Vr.bind(null,t,dt,_n),r);break}Vr(t,dt,_n);break;case 5:Vr(t,dt,_n);break;default:throw Error(U(329))}}}return yt(t,Pe()),t.callbackNode===n?Y0.bind(null,t):null}function Ld(t,e){var n=po;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=fu(t,e),t!==2&&(e=dt,dt=n,e!==null&&Md(e)),t}function Md(t){dt===null?dt=t:dt.push.apply(dt,t)}function BR(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qn(t,e){for(e&=~hp,e&=~Yu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ht(e),r=1<<n;t[n]=-1,e&=~r}}function xy(t){if(se&6)throw Error(U(327));zi();var e=Ql(t,0);if(!(e&1))return yt(t,Pe()),null;var n=fu(t,e);if(t.tag!==0&&n===2){var r=ad(t);r!==0&&(e=r,n=Ld(t,r))}if(n===1)throw n=jo,Hr(t,0),Qn(t,e),yt(t,Pe()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,dt,_n),yt(t,Pe()),null}function fp(t,e){var n=se;se|=1;try{return t(e)}finally{se=n,se===0&&(es=Pe()+500,qu&&Rr())}}function Xr(t){er!==null&&er.tag===0&&!(se&6)&&zi();var e=se;se|=1;var n=Dt.transition,r=le;try{if(Dt.transition=null,le=1,t)return t()}finally{le=r,Dt.transition=n,se=e,!(se&6)&&Rr()}}function pp(){wt=Mi.current,me(Mi)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,vR(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(Kf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&eu();break;case 3:Xi(),me(mt),me(nt),rp();break;case 5:np(r);break;case 4:Xi();break;case 13:me(we);break;case 19:me(we);break;case 10:Xf(r.type._context);break;case 22:case 23:pp()}n=n.return}if(Ue=t,xe=t=cr(t.current,null),We=wt=e,be=0,jo=null,hp=Yu=Jr=0,dt=po=null,jr!==null){for(e=0;e<jr.length;e++)if(n=jr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}jr=null}return t}function J0(t,e){do{var n=xe;try{if(Jf(),Cl.current=uu,lu){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}lu=!1}if(Yr=0,Fe=Oe=Ee=null,ho=!1,Vo=0,cp.current=null,n===null||n.return===null){be=1,jo=e,xe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=We,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var _=yy(o);if(_!==null){_.flags&=-257,vy(_,o,l,s,e),_.mode&1&&gy(s,c,e),e=_,u=c;var A=e.updateQueue;if(A===null){var k=new Set;k.add(u),e.updateQueue=k}else A.add(u);break e}else{if(!(e&1)){gy(s,c,e),mp();break e}u=Error(U(426))}}else if(ge&&l.mode&1){var R=yy(o);if(R!==null){!(R.flags&65536)&&(R.flags|=256),vy(R,o,l,s,e),Qf(Zi(u,l));break e}}s=u=Zi(u,l),be!==4&&(be=2),po===null?po=[s]:po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=b0(s,u,e);cy(s,T);break e;case 1:l=u;var v=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(lr===null||!lr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var O=L0(s,l,e);cy(s,O);break e}}s=s.return}while(s!==null)}eE(n)}catch(L){e=L,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function X0(){var t=cu.current;return cu.current=uu,t===null?uu:t}function mp(){(be===0||be===3||be===2)&&(be=4),Ue===null||!(Jr&268435455)&&!(Yu&268435455)||Qn(Ue,We)}function fu(t,e){var n=se;se|=2;var r=X0();(Ue!==t||We!==e)&&(_n=null,Hr(t,e));do try{zR();break}catch(i){J0(t,i)}while(!0);if(Jf(),se=n,cu.current=r,xe!==null)throw Error(U(261));return Ue=null,We=0,be}function zR(){for(;xe!==null;)Z0(xe)}function WR(){for(;xe!==null&&!mC();)Z0(xe)}function Z0(t){var e=nE(t.alternate,t,wt);t.memoizedProps=t.pendingProps,e===null?eE(t):xe=e,cp.current=null}function eE(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=VR(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{be=6,xe=null;return}}else if(n=MR(n,e,wt),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);be===0&&(be=5)}function Vr(t,e,n){var r=le,i=Dt.transition;try{Dt.transition=null,le=1,HR(t,e,n,r)}finally{Dt.transition=i,le=r}return null}function HR(t,e,n,r){do zi();while(er!==null);if(se&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(CC(t,s),t===Ue&&(xe=Ue=null,We=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||rl||(rl=!0,rE(Kl,function(){return zi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dt.transition,Dt.transition=null;var o=le;le=1;var l=se;se|=4,cp.current=null,UR(t,n),K0(n,t),hR(fd),Yl=!!dd,fd=dd=null,t.current=n,jR(n),gC(),se=l,le=o,Dt.transition=s}else t.current=n;if(rl&&(rl=!1,er=t,du=i),s=t.pendingLanes,s===0&&(lr=null),_C(n.stateNode),yt(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(hu)throw hu=!1,t=Dd,Dd=null,t;return du&1&&t.tag!==0&&zi(),s=t.pendingLanes,s&1?t===bd?mo++:(mo=0,bd=t):mo=0,Rr(),null}function zi(){if(er!==null){var t=bw(du),e=Dt.transition,n=le;try{if(Dt.transition=null,le=16>t?16:t,er===null)var r=!1;else{if(t=er,er=null,du=0,se&6)throw Error(U(331));var i=se;for(se|=4,W=t.current;W!==null;){var s=W,o=s.child;if(W.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var c=l[u];for(W=c;W!==null;){var d=W;switch(d.tag){case 0:case 11:case 15:fo(8,d,s)}var p=d.child;if(p!==null)p.return=d,W=p;else for(;W!==null;){d=W;var m=d.sibling,_=d.return;if(H0(d),d===c){W=null;break}if(m!==null){m.return=_,W=m;break}W=_}}}var A=s.alternate;if(A!==null){var k=A.child;if(k!==null){A.child=null;do{var R=k.sibling;k.sibling=null,k=R}while(k!==null)}}W=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,W=o;else e:for(;W!==null;){if(s=W,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fo(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,W=T;break e}W=s.return}}var v=t.current;for(W=v;W!==null;){o=W;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,W=I;else e:for(o=v;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Qu(9,l)}}catch(L){Ce(l,l.return,L)}if(l===o){W=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,W=O;break e}W=l.return}}if(se=i,Rr(),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot($u,t)}catch{}r=!0}return r}finally{le=n,Dt.transition=e}}return!1}function Ny(t,e,n){e=Zi(n,e),e=b0(t,e,1),t=ar(t,e,1),e=lt(),t!==null&&(oa(t,1,e),yt(t,e))}function Ce(t,e,n){if(t.tag===3)Ny(t,t,n);else for(;e!==null;){if(e.tag===3){Ny(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(lr===null||!lr.has(r))){t=Zi(n,t),t=L0(e,t,1),e=ar(e,t,1),t=lt(),e!==null&&(oa(e,1,t),yt(e,t));break}}e=e.return}}function qR(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(We&n)===n&&(be===4||be===3&&(We&130023424)===We&&500>Pe()-dp?Hr(t,0):hp|=n),yt(t,e)}function tE(t,e){e===0&&(t.mode&1?(e=Ga,Ga<<=1,!(Ga&130023424)&&(Ga=4194304)):e=1);var n=lt();t=On(t,e),t!==null&&(oa(t,e,n),yt(t,n))}function GR(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tE(t,n)}function KR(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),tE(t,n)}var nE;nE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mt.current)pt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return pt=!1,LR(t,e,n);pt=!!(t.flags&131072)}else pt=!1,ge&&e.flags&1048576&&o0(e,ru,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Al(t,e),t=e.pendingProps;var i=Qi(e,nt.current);Bi(e,n),i=sp(null,e,r,t,i,n);var s=op();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gt(r)?(s=!0,tu(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ep(e),i.updater=Ku,e.stateNode=i,i._reactInternals=e,Td(e,r,t,n),e=Cd(null,e,r,!0,s,n)):(e.tag=0,ge&&s&&Gf(e),at(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Al(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=YR(r),t=jt(r,t),i){case 0:e=Sd(null,e,r,t,n);break e;case 1:e=Ey(null,e,r,t,n);break e;case 11:e=_y(null,e,r,t,n);break e;case 14:e=wy(null,e,r,jt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Sd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Ey(t,e,r,i,n);case 3:e:{if(U0(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,d0(t,e),ou(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Zi(Error(U(423)),e),e=Ty(t,e,r,n,i);break e}else if(r!==i){i=Zi(Error(U(424)),e),e=Ty(t,e,r,n,i);break e}else for(Et=or(e.stateNode.containerInfo.firstChild),Tt=e,ge=!0,Bt=null,n=c0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yi(),r===i){e=Dn(t,e,n);break e}at(t,e,r,n)}e=e.child}return e;case 5:return f0(e),t===null&&_d(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,pd(r,i)?o=null:s!==null&&pd(r,s)&&(e.flags|=32),F0(t,e),at(t,e,o,n),e.child;case 6:return t===null&&_d(e),null;case 13:return j0(t,e,n);case 4:return tp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ji(e,null,r,n):at(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),_y(t,e,r,i,n);case 7:return at(t,e,e.pendingProps,n),e.child;case 8:return at(t,e,e.pendingProps.children,n),e.child;case 12:return at(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,de(iu,r._currentValue),r._currentValue=o,s!==null)if(Kt(s.value,o)){if(s.children===i.children&&!mt.current){e=Dn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=An(-1,n&-n),u.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),wd(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(U(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),wd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}at(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Bi(e,n),i=Lt(i),r=r(i),e.flags|=1,at(t,e,r,n),e.child;case 14:return r=e.type,i=jt(r,e.pendingProps),i=jt(r.type,i),wy(t,e,r,i,n);case 15:return M0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Al(t,e),e.tag=1,gt(r)?(t=!0,tu(e)):t=!1,Bi(e,n),D0(e,r,i),Td(e,r,i,n),Cd(null,e,r,!0,t,n);case 19:return $0(t,e,n);case 22:return V0(t,e,n)}throw Error(U(156,e.tag))};function rE(t,e){return xw(t,e)}function QR(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ot(t,e,n,r){return new QR(t,e,n,r)}function gp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function YR(t){if(typeof t=="function")return gp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lf)return 11;if(t===Mf)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")gp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ri:return qr(n.children,i,s,e);case bf:o=8,i|=8;break;case qh:return t=Ot(12,n,e,i|2),t.elementType=qh,t.lanes=s,t;case Gh:return t=Ot(13,n,e,i),t.elementType=Gh,t.lanes=s,t;case Kh:return t=Ot(19,n,e,i),t.elementType=Kh,t.lanes=s,t;case fw:return Ju(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case hw:o=10;break e;case dw:o=9;break e;case Lf:o=11;break e;case Mf:o=14;break e;case Hn:o=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=Ot(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qr(t,e,n,r){return t=Ot(7,t,r,e),t.lanes=n,t}function Ju(t,e,n,r){return t=Ot(22,t,r,e),t.elementType=fw,t.lanes=n,t.stateNode={isHidden:!1},t}function Sh(t,e,n){return t=Ot(6,t,null,e),t.lanes=n,t}function Ch(t,e,n){return e=Ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function JR(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sh(0),this.expirationTimes=sh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yp(t,e,n,r,i,s,o,l,u){return t=new JR(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ep(s),t}function XR(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ci,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function iE(t){if(!t)return yr;t=t._reactInternals;e:{if(oi(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(gt(n))return i0(t,n,e)}return e}function sE(t,e,n,r,i,s,o,l,u){return t=yp(n,r,!0,t,i,s,o,l,u),t.context=iE(null),n=t.current,r=lt(),i=ur(n),s=An(r,i),s.callback=e??null,ar(n,s,i),t.current.lanes=i,oa(t,i,r),yt(t,r),t}function Xu(t,e,n,r){var i=e.current,s=lt(),o=ur(i);return n=iE(n),e.context===null?e.context=n:e.pendingContext=n,e=An(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ar(i,e,o),t!==null&&(qt(t,i,o,s),Sl(t,i,o)),o}function pu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Oy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vp(t,e){Oy(t,e),(t=t.alternate)&&Oy(t,e)}function ZR(){return null}var oE=typeof reportError=="function"?reportError:function(t){console.error(t)};function _p(t){this._internalRoot=t}Zu.prototype.render=_p.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));Xu(t,e,null,null)};Zu.prototype.unmount=_p.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Xr(function(){Xu(null,t,null,null)}),e[Nn]=null}};function Zu(t){this._internalRoot=t}Zu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Kn.length&&e!==0&&e<Kn[n].priority;n++);Kn.splice(n,0,t),n===0&&Uw(t)}};function wp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dy(){}function eA(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=pu(o);s.call(c)}}var o=sE(e,r,t,0,null,!1,!1,"",Dy);return t._reactRootContainer=o,t[Nn]=o.current,Oo(t.nodeType===8?t.parentNode:t),Xr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var c=pu(u);l.call(c)}}var u=yp(t,0,!1,null,null,!1,!1,"",Dy);return t._reactRootContainer=u,t[Nn]=u.current,Oo(t.nodeType===8?t.parentNode:t),Xr(function(){Xu(e,u,n,r)}),u}function tc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=pu(o);l.call(u)}}Xu(e,o,t,i)}else o=eA(n,e,t,i,r);return pu(o)}Lw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Js(e.pendingLanes);n!==0&&(Uf(e,n|1),yt(e,Pe()),!(se&6)&&(es=Pe()+500,Rr()))}break;case 13:Xr(function(){var r=On(t,1);if(r!==null){var i=lt();qt(r,t,1,i)}}),vp(t,1)}};jf=function(t){if(t.tag===13){var e=On(t,134217728);if(e!==null){var n=lt();qt(e,t,134217728,n)}vp(t,134217728)}};Mw=function(t){if(t.tag===13){var e=ur(t),n=On(t,e);if(n!==null){var r=lt();qt(n,t,e,r)}vp(t,e)}};Vw=function(){return le};Fw=function(t,e){var n=le;try{return le=t,e()}finally{le=n}};id=function(t,e,n){switch(e){case"input":if(Jh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Hu(r);if(!i)throw Error(U(90));mw(r),Jh(r,i)}}}break;case"textarea":yw(t,n);break;case"select":e=n.value,e!=null&&Fi(t,!!n.multiple,e,!1)}};Sw=fp;Cw=Xr;var tA={usingClientEntryPoint:!1,Events:[la,xi,Hu,Tw,Iw,fp]},Ws={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nA={bundleType:Ws.bundleType,version:Ws.version,rendererPackageName:Ws.rendererPackageName,rendererConfig:Ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Un.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Pw(t),t===null?null:t.stateNode},findFiberByHostInstance:Ws.findFiberByHostInstance||ZR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{$u=il.inject(nA),nn=il}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tA;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wp(e))throw Error(U(200));return XR(t,e,null,n)};Rt.createRoot=function(t,e){if(!wp(t))throw Error(U(299));var n=!1,r="",i=oE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=yp(t,1,!1,null,null,n,!1,r,i),t[Nn]=e.current,Oo(t.nodeType===8?t.parentNode:t),new _p(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Pw(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return Xr(t)};Rt.hydrate=function(t,e,n){if(!ec(e))throw Error(U(200));return tc(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!wp(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=oE;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=sE(e,null,t,1,n??null,i,!1,s,o),t[Nn]=e.current,Oo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Zu(e)};Rt.render=function(t,e,n){if(!ec(e))throw Error(U(200));return tc(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!ec(t))throw Error(U(40));return t._reactRootContainer?(Xr(function(){tc(null,null,t,!1,function(){t._reactRootContainer=null,t[Nn]=null})}),!0):!1};Rt.unstable_batchedUpdates=fp;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ec(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return tc(t,e,n,!1,r)};Rt.version="18.3.1-next-f1338f8080-20240426";function aE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(aE)}catch(t){console.error(t)}}aE(),aw.exports=Rt;var rA=aw.exports,lE,by=rA;lE=by.createRoot,by.hydrateRoot;/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$o.apply(this,arguments)}var tr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(tr||(tr={}));const Ly="popstate";function iA(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Vd("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:mu(i)}return oA(e,n,null,t)}function Ne(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function uE(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function sA(){return Math.random().toString(36).substr(2,8)}function My(t,e){return{usr:t.state,key:t.key,idx:e}}function Vd(t,e,n,r){return n===void 0&&(n=null),$o({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ps(e):e,{state:n,key:e&&e.key||r||sA()})}function mu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ps(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function oA(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=tr.Pop,u=null,c=d();c==null&&(c=0,o.replaceState($o({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function p(){l=tr.Pop;let R=d(),T=R==null?null:R-c;c=R,u&&u({action:l,location:k.location,delta:T})}function m(R,T){l=tr.Push;let v=Vd(k.location,R,T);c=d()+1;let I=My(v,c),O=k.createHref(v);try{o.pushState(I,"",O)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(O)}s&&u&&u({action:l,location:k.location,delta:1})}function _(R,T){l=tr.Replace;let v=Vd(k.location,R,T);c=d();let I=My(v,c),O=k.createHref(v);o.replaceState(I,"",O),s&&u&&u({action:l,location:k.location,delta:0})}function A(R){let T=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof R=="string"?R:mu(R);return v=v.replace(/ $/,"%20"),Ne(T,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,T)}let k={get action(){return l},get location(){return t(i,o)},listen(R){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Ly,p),u=R,()=>{i.removeEventListener(Ly,p),u=null}},createHref(R){return e(i,R)},createURL:A,encodeLocation(R){let T=A(R);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:_,go(R){return o.go(R)}};return k}var Vy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Vy||(Vy={}));function aA(t,e,n){return n===void 0&&(n="/"),lA(t,e,n,!1)}function lA(t,e,n,r){let i=typeof e=="string"?ps(e):e,s=Ep(i.pathname||"/",n);if(s==null)return null;let o=cE(t);uA(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let c=wA(s);l=vA(o[u],c,r)}return l}function cE(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ne(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let c=hr([r,u.relativePath]),d=n.concat(u);s.children&&s.children.length>0&&(Ne(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),cE(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:gA(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of hE(s.path))i(s,o,u)}),e}function hE(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=hE(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function uA(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:yA(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const cA=/^:[\w-]+$/,hA=3,dA=2,fA=1,pA=10,mA=-2,Fy=t=>t==="*";function gA(t,e){let n=t.split("/"),r=n.length;return n.some(Fy)&&(r+=mA),e&&(r+=dA),n.filter(i=>!Fy(i)).reduce((i,s)=>i+(cA.test(s)?hA:s===""?fA:pA),r)}function yA(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function vA(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],c=l===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",p=Uy({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},d),m=u.route;if(!p&&c&&n&&!r[r.length-1].route.index&&(p=Uy({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},d)),!p)return null;Object.assign(i,p.params),o.push({params:i,pathname:hr([s,p.pathname]),pathnameBase:SA(hr([s,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(s=hr([s,p.pathnameBase]))}return o}function Uy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=_A(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((c,d,p)=>{let{paramName:m,isOptional:_}=d;if(m==="*"){let k=l[p]||"";o=s.slice(0,s.length-k.length).replace(/(.)\/+$/,"$1")}const A=l[p];return _&&!A?c[m]=void 0:c[m]=(A||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function _A(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),uE(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function wA(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return uE(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ep(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function EA(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ps(t):t;return{pathname:n?n.startsWith("/")?n:TA(n,e):e,search:CA(r),hash:RA(i)}}function TA(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function IA(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function dE(t,e){let n=IA(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function fE(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ps(t):(i=$o({},t),Ne(!i.pathname||!i.pathname.includes("?"),Rh("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),Rh("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),Rh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let p=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),p-=1;i.pathname=m.join("/")}l=p>=0?e[p]:"/"}let u=EA(i,l),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(c||d)&&(u.pathname+="/"),u}const hr=t=>t.join("/").replace(/\/\/+/g,"/"),SA=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),CA=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,RA=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function AA(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const pE=["post","put","patch","delete"];new Set(pE);const PA=["get",...pE];new Set(PA);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bo(){return Bo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bo.apply(this,arguments)}const Tp=F.createContext(null),kA=F.createContext(null),ai=F.createContext(null),nc=F.createContext(null),Ar=F.createContext({outlet:null,matches:[],isDataRoute:!1}),mE=F.createContext(null);function xA(t,e){let{relative:n}=e===void 0?{}:e;ca()||Ne(!1);let{basename:r,navigator:i}=F.useContext(ai),{hash:s,pathname:o,search:l}=vE(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:hr([r,o])),i.createHref({pathname:u,search:l,hash:s})}function ca(){return F.useContext(nc)!=null}function rc(){return ca()||Ne(!1),F.useContext(nc).location}function gE(t){F.useContext(ai).static||F.useLayoutEffect(t)}function ms(){let{isDataRoute:t}=F.useContext(Ar);return t?zA():NA()}function NA(){ca()||Ne(!1);let t=F.useContext(Tp),{basename:e,future:n,navigator:r}=F.useContext(ai),{matches:i}=F.useContext(Ar),{pathname:s}=rc(),o=JSON.stringify(dE(i,n.v7_relativeSplatPath)),l=F.useRef(!1);return gE(()=>{l.current=!0}),F.useCallback(function(c,d){if(d===void 0&&(d={}),!l.current)return;if(typeof c=="number"){r.go(c);return}let p=fE(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(p.pathname=p.pathname==="/"?e:hr([e,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[e,r,o,s,t])}function yE(){let{matches:t}=F.useContext(Ar),e=t[t.length-1];return e?e.params:{}}function vE(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=F.useContext(ai),{matches:i}=F.useContext(Ar),{pathname:s}=rc(),o=JSON.stringify(dE(i,r.v7_relativeSplatPath));return F.useMemo(()=>fE(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function OA(t,e){return DA(t,e)}function DA(t,e,n,r){ca()||Ne(!1);let{navigator:i}=F.useContext(ai),{matches:s}=F.useContext(Ar),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let c=rc(),d;if(e){var p;let R=typeof e=="string"?ps(e):e;u==="/"||(p=R.pathname)!=null&&p.startsWith(u)||Ne(!1),d=R}else d=c;let m=d.pathname||"/",_=m;if(u!=="/"){let R=u.replace(/^\//,"").split("/");_="/"+m.replace(/^\//,"").split("/").slice(R.length).join("/")}let A=aA(t,{pathname:_}),k=FA(A&&A.map(R=>Object.assign({},R,{params:Object.assign({},l,R.params),pathname:hr([u,i.encodeLocation?i.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?u:hr([u,i.encodeLocation?i.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),s,n,r);return e&&k?F.createElement(nc.Provider,{value:{location:Bo({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:tr.Pop}},k):k}function bA(){let t=BA(),e=AA(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:i},n):null,null)}const LA=F.createElement(bA,null);class MA extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?F.createElement(Ar.Provider,{value:this.props.routeContext},F.createElement(mE.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function VA(t){let{routeContext:e,match:n,children:r}=t,i=F.useContext(Tp);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(Ar.Provider,{value:e},r)}function FA(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=o.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Ne(!1),o=o.slice(0,Math.min(o.length,d+1))}let u=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let p=o[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=d),p.route.id){let{loaderData:m,errors:_}=n,A=p.route.loader&&m[p.route.id]===void 0&&(!_||_[p.route.id]===void 0);if(p.route.lazy||A){u=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,p,m)=>{let _,A=!1,k=null,R=null;n&&(_=l&&p.route.id?l[p.route.id]:void 0,k=p.route.errorElement||LA,u&&(c<0&&m===0?(A=!0,R=null):c===m&&(A=!0,R=p.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,m+1)),v=()=>{let I;return _?I=k:A?I=R:p.route.Component?I=F.createElement(p.route.Component,null):p.route.element?I=p.route.element:I=d,F.createElement(VA,{match:p,routeContext:{outlet:d,matches:T,isDataRoute:n!=null},children:I})};return n&&(p.route.ErrorBoundary||p.route.errorElement||m===0)?F.createElement(MA,{location:n.location,revalidation:n.revalidation,component:k,error:_,children:v(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):v()},null)}var _E=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(_E||{}),gu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(gu||{});function UA(t){let e=F.useContext(Tp);return e||Ne(!1),e}function jA(t){let e=F.useContext(kA);return e||Ne(!1),e}function $A(t){let e=F.useContext(Ar);return e||Ne(!1),e}function wE(t){let e=$A(),n=e.matches[e.matches.length-1];return n.route.id||Ne(!1),n.route.id}function BA(){var t;let e=F.useContext(mE),n=jA(gu.UseRouteError),r=wE(gu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function zA(){let{router:t}=UA(_E.UseNavigateStable),e=wE(gu.UseNavigateStable),n=F.useRef(!1);return gE(()=>{n.current=!0}),F.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Bo({fromRouteId:e},s)))},[t,e])}const jy={};function WA(t,e){jy[e]||(jy[e]=!0,console.warn(e))}const $y=(t,e,n)=>WA(t,"⚠️ React Router Future Flag Warning: "+e+". "+("You can use the `"+t+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function HA(t,e){t!=null&&t.v7_startTransition||$y("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(t!=null&&t.v7_relativeSplatPath)&&!e&&$y("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function Zs(t){Ne(!1)}function qA(t){let{basename:e="/",children:n=null,location:r,navigationType:i=tr.Pop,navigator:s,static:o=!1,future:l}=t;ca()&&Ne(!1);let u=e.replace(/^\/*/,"/"),c=F.useMemo(()=>({basename:u,navigator:s,static:o,future:Bo({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=ps(r));let{pathname:d="/",search:p="",hash:m="",state:_=null,key:A="default"}=r,k=F.useMemo(()=>{let R=Ep(d,u);return R==null?null:{location:{pathname:R,search:p,hash:m,state:_,key:A},navigationType:i}},[u,d,p,m,_,A,i]);return k==null?null:F.createElement(ai.Provider,{value:c},F.createElement(nc.Provider,{children:n,value:k}))}function GA(t){let{children:e,location:n}=t;return OA(Fd(e),n)}new Promise(()=>{});function Fd(t,e){e===void 0&&(e=[]);let n=[];return F.Children.forEach(t,(r,i)=>{if(!F.isValidElement(r))return;let s=[...e,i];if(r.type===F.Fragment){n.push.apply(n,Fd(r.props.children,s));return}r.type!==Zs&&Ne(!1),!r.props.index||!r.props.children||Ne(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Fd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ud(){return Ud=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ud.apply(this,arguments)}function KA(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function QA(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function YA(t,e){return t.button===0&&(!e||e==="_self")&&!QA(t)}const JA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],XA="6";try{window.__reactRouterVersion=XA}catch{}const ZA="startTransition",By=q1[ZA];function eP(t){let{basename:e,children:n,future:r,window:i}=t,s=F.useRef();s.current==null&&(s.current=iA({window:i,v5Compat:!0}));let o=s.current,[l,u]=F.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=F.useCallback(p=>{c&&By?By(()=>u(p)):u(p)},[u,c]);return F.useLayoutEffect(()=>o.listen(d),[o,d]),F.useEffect(()=>HA(r),[r]),F.createElement(qA,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const tP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ic=F.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:c,preventScrollReset:d,viewTransition:p}=e,m=KA(e,JA),{basename:_}=F.useContext(ai),A,k=!1;if(typeof c=="string"&&nP.test(c)&&(A=c,tP))try{let I=new URL(window.location.href),O=c.startsWith("//")?new URL(I.protocol+c):new URL(c),L=Ep(O.pathname,_);O.origin===I.origin&&L!=null?c=L+O.search+O.hash:k=!0}catch{}let R=xA(c,{relative:i}),T=rP(c,{replace:o,state:l,target:u,preventScrollReset:d,relative:i,viewTransition:p});function v(I){r&&r(I),I.defaultPrevented||T(I)}return F.createElement("a",Ud({},m,{href:A||R,onClick:k||s?r:v,ref:n,target:u}))});var zy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(zy||(zy={}));var Wy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Wy||(Wy={}));function rP(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=ms(),c=rc(),d=vE(t,{relative:o});return F.useCallback(p=>{if(YA(p,n)){p.preventDefault();let m=r!==void 0?r:mu(c)===mu(d);u(t,{replace:m,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[c,u,d,r,i,n,t,s,o,l])}var Ip={exports:{}},Z=String,EE=function(){return{isColorSupported:!1,reset:Z,bold:Z,dim:Z,italic:Z,underline:Z,inverse:Z,hidden:Z,strikethrough:Z,black:Z,red:Z,green:Z,yellow:Z,blue:Z,magenta:Z,cyan:Z,white:Z,gray:Z,bgBlack:Z,bgRed:Z,bgGreen:Z,bgYellow:Z,bgBlue:Z,bgMagenta:Z,bgCyan:Z,bgWhite:Z,blackBright:Z,redBright:Z,greenBright:Z,yellowBright:Z,blueBright:Z,magentaBright:Z,cyanBright:Z,whiteBright:Z,bgBlackBright:Z,bgRedBright:Z,bgGreenBright:Z,bgYellowBright:Z,bgBlueBright:Z,bgMagentaBright:Z,bgCyanBright:Z,bgWhiteBright:Z}};Ip.exports=EE();Ip.exports.createColors=EE;var iP=Ip.exports;const sP={},oP=Object.freeze(Object.defineProperty({__proto__:null,default:sP},Symbol.toStringTag,{value:"Module"})),Yt=k1(oP);let Hy=iP,qy=Yt,jd=class TE extends Error{constructor(e,n,r,i,s,o){super(e),this.name="CssSyntaxError",this.reason=e,s&&(this.file=s),i&&(this.source=i),o&&(this.plugin=o),typeof n<"u"&&typeof r<"u"&&(typeof n=="number"?(this.line=n,this.column=r):(this.line=n.line,this.column=n.column,this.endLine=r.line,this.endColumn=r.column)),this.setMessage(),Error.captureStackTrace&&Error.captureStackTrace(this,TE)}setMessage(){this.message=this.plugin?this.plugin+": ":"",this.message+=this.file?this.file:"<css input>",typeof this.line<"u"&&(this.message+=":"+this.line+":"+this.column),this.message+=": "+this.reason}showSourceCode(e){if(!this.source)return"";let n=this.source;e==null&&(e=Hy.isColorSupported);let r=d=>d,i=d=>d,s=d=>d;if(e){let{bold:d,gray:p,red:m}=Hy.createColors(!0);i=_=>d(m(_)),r=_=>p(_),qy&&(s=_=>qy(_))}let o=n.split(/\r?\n/),l=Math.max(this.line-3,0),u=Math.min(this.line+2,o.length),c=String(u).length;return o.slice(l,u).map((d,p)=>{let m=l+1+p,_=" "+(" "+m).slice(-c)+" | ";if(m===this.line){if(d.length>160){let k=20,R=Math.max(0,this.column-k),T=Math.max(this.column+k,this.endColumn+k),v=d.slice(R,T),I=r(_.replace(/\d/g," "))+d.slice(0,Math.min(this.column-1,k-1)).replace(/[^\t]/g," ");return i(">")+r(_)+s(v)+`
 `+I+i("^")}let A=r(_.replace(/\d/g," "))+d.slice(0,this.column-1).replace(/[^\t]/g," ");return i(">")+r(_)+s(d)+`
 `+A+i("^")}return" "+r(_)+s(d)}).join(`
`)}toString(){let e=this.showSourceCode();return e&&(e=`

`+e+`
`),this.name+": "+this.message+e}};var Sp=jd;jd.default=jd;const Gy={after:`
`,beforeClose:`
`,beforeComment:`
`,beforeDecl:`
`,beforeOpen:" ",beforeRule:`
`,colon:": ",commentLeft:" ",commentRight:" ",emptyBody:"",indent:"    ",semicolon:!1};function aP(t){return t[0].toUpperCase()+t.slice(1)}let $d=class{constructor(e){this.builder=e}atrule(e,n){let r="@"+e.name,i=e.params?this.rawValue(e,"params"):"";if(typeof e.raws.afterName<"u"?r+=e.raws.afterName:i&&(r+=" "),e.nodes)this.block(e,r+i);else{let s=(e.raws.between||"")+(n?";":"");this.builder(r+i+s,e)}}beforeAfter(e,n){let r;e.type==="decl"?r=this.raw(e,null,"beforeDecl"):e.type==="comment"?r=this.raw(e,null,"beforeComment"):n==="before"?r=this.raw(e,null,"beforeRule"):r=this.raw(e,null,"beforeClose");let i=e.parent,s=0;for(;i&&i.type!=="root";)s+=1,i=i.parent;if(r.includes(`
`)){let o=this.raw(e,null,"indent");if(o.length)for(let l=0;l<s;l++)r+=o}return r}block(e,n){let r=this.raw(e,"between","beforeOpen");this.builder(n+r+"{",e,"start");let i;e.nodes&&e.nodes.length?(this.body(e),i=this.raw(e,"after")):i=this.raw(e,"after","emptyBody"),i&&this.builder(i),this.builder("}",e,"end")}body(e){let n=e.nodes.length-1;for(;n>0&&e.nodes[n].type==="comment";)n-=1;let r=this.raw(e,"semicolon");for(let i=0;i<e.nodes.length;i++){let s=e.nodes[i],o=this.raw(s,"before");o&&this.builder(o),this.stringify(s,n!==i||r)}}comment(e){let n=this.raw(e,"left","commentLeft"),r=this.raw(e,"right","commentRight");this.builder("/*"+n+e.text+r+"*/",e)}decl(e,n){let r=this.raw(e,"between","colon"),i=e.prop+r+this.rawValue(e,"value");e.important&&(i+=e.raws.important||" !important"),n&&(i+=";"),this.builder(i,e)}document(e){this.body(e)}raw(e,n,r){let i;if(r||(r=n),n&&(i=e.raws[n],typeof i<"u"))return i;let s=e.parent;if(r==="before"&&(!s||s.type==="root"&&s.first===e||s&&s.type==="document"))return"";if(!s)return Gy[r];let o=e.root();if(o.rawCache||(o.rawCache={}),typeof o.rawCache[r]<"u")return o.rawCache[r];if(r==="before"||r==="after")return this.beforeAfter(e,r);{let l="raw"+aP(r);this[l]?i=this[l](o,e):o.walk(u=>{if(i=u.raws[n],typeof i<"u")return!1})}return typeof i>"u"&&(i=Gy[r]),o.rawCache[r]=i,i}rawBeforeClose(e){let n;return e.walk(r=>{if(r.nodes&&r.nodes.length>0&&typeof r.raws.after<"u")return n=r.raws.after,n.includes(`
`)&&(n=n.replace(/[^\n]+$/,"")),!1}),n&&(n=n.replace(/\S/g,"")),n}rawBeforeComment(e,n){let r;return e.walkComments(i=>{if(typeof i.raws.before<"u")return r=i.raws.before,r.includes(`
`)&&(r=r.replace(/[^\n]+$/,"")),!1}),typeof r>"u"?r=this.raw(n,null,"beforeDecl"):r&&(r=r.replace(/\S/g,"")),r}rawBeforeDecl(e,n){let r;return e.walkDecls(i=>{if(typeof i.raws.before<"u")return r=i.raws.before,r.includes(`
`)&&(r=r.replace(/[^\n]+$/,"")),!1}),typeof r>"u"?r=this.raw(n,null,"beforeRule"):r&&(r=r.replace(/\S/g,"")),r}rawBeforeOpen(e){let n;return e.walk(r=>{if(r.type!=="decl"&&(n=r.raws.between,typeof n<"u"))return!1}),n}rawBeforeRule(e){let n;return e.walk(r=>{if(r.nodes&&(r.parent!==e||e.first!==r)&&typeof r.raws.before<"u")return n=r.raws.before,n.includes(`
`)&&(n=n.replace(/[^\n]+$/,"")),!1}),n&&(n=n.replace(/\S/g,"")),n}rawColon(e){let n;return e.walkDecls(r=>{if(typeof r.raws.between<"u")return n=r.raws.between.replace(/[^\s:]/g,""),!1}),n}rawEmptyBody(e){let n;return e.walk(r=>{if(r.nodes&&r.nodes.length===0&&(n=r.raws.after,typeof n<"u"))return!1}),n}rawIndent(e){if(e.raws.indent)return e.raws.indent;let n;return e.walk(r=>{let i=r.parent;if(i&&i!==e&&i.parent&&i.parent===e&&typeof r.raws.before<"u"){let s=r.raws.before.split(`
`);return n=s[s.length-1],n=n.replace(/\S/g,""),!1}}),n}rawSemicolon(e){let n;return e.walk(r=>{if(r.nodes&&r.nodes.length&&r.last.type==="decl"&&(n=r.raws.semicolon,typeof n<"u"))return!1}),n}rawValue(e,n){let r=e[n],i=e.raws[n];return i&&i.value===r?i.raw:r}root(e){this.body(e),e.raws.after&&this.builder(e.raws.after)}rule(e){this.block(e,this.rawValue(e,"selector")),e.raws.ownSemicolon&&this.builder(e.raws.ownSemicolon,e,"end")}stringify(e,n){if(!this[e.type])throw new Error("Unknown AST node type "+e.type+". Maybe you need to change PostCSS stringifier.");this[e.type](e,n)}};var IE=$d;$d.default=$d;let lP=IE;function Bd(t,e){new lP(e).stringify(t)}var sc=Bd;Bd.default=Bd;var ha={};ha.isClean=Symbol("isClean");ha.my=Symbol("my");let uP=Sp,cP=IE,hP=sc,{isClean:Hs,my:dP}=ha;function zd(t,e){let n=new t.constructor;for(let r in t){if(!Object.prototype.hasOwnProperty.call(t,r)||r==="proxyCache")continue;let i=t[r],s=typeof i;r==="parent"&&s==="object"?e&&(n[r]=e):r==="source"?n[r]=i:Array.isArray(i)?n[r]=i.map(o=>zd(o,n)):(s==="object"&&i!==null&&(i=zd(i)),n[r]=i)}return n}function qs(t,e){if(e&&typeof e.offset<"u")return e.offset;let n=1,r=1,i=0;for(let s=0;s<t.length;s++){if(r===e.line&&n===e.column){i=s;break}t[s]===`
`?(n=1,r+=1):n+=1}return i}let Wd=class{constructor(e={}){this.raws={},this[Hs]=!1,this[dP]=!0;for(let n in e)if(n==="nodes"){this.nodes=[];for(let r of e[n])typeof r.clone=="function"?this.append(r.clone()):this.append(r)}else this[n]=e[n]}addToError(e){if(e.postcssNode=this,e.stack&&this.source&&/\n\s{4}at /.test(e.stack)){let n=this.source;e.stack=e.stack.replace(/\n\s{4}at /,`$&${n.input.from}:${n.start.line}:${n.start.column}$&`)}return e}after(e){return this.parent.insertAfter(this,e),this}assign(e={}){for(let n in e)this[n]=e[n];return this}before(e){return this.parent.insertBefore(this,e),this}cleanRaws(e){delete this.raws.before,delete this.raws.after,e||delete this.raws.between}clone(e={}){let n=zd(this);for(let r in e)n[r]=e[r];return n}cloneAfter(e={}){let n=this.clone(e);return this.parent.insertAfter(this,n),n}cloneBefore(e={}){let n=this.clone(e);return this.parent.insertBefore(this,n),n}error(e,n={}){if(this.source){let{end:r,start:i}=this.rangeBy(n);return this.source.input.error(e,{column:i.column,line:i.line},{column:r.column,line:r.line},n)}return new uP(e)}getProxyProcessor(){return{get(e,n){return n==="proxyOf"?e:n==="root"?()=>e.root().toProxy():e[n]},set(e,n,r){return e[n]===r||(e[n]=r,(n==="prop"||n==="value"||n==="name"||n==="params"||n==="important"||n==="text")&&e.markDirty()),!0}}}markClean(){this[Hs]=!0}markDirty(){if(this[Hs]){this[Hs]=!1;let e=this;for(;e=e.parent;)e[Hs]=!1}}next(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e+1]}positionBy(e){let n=this.source.start;if(e.index)n=this.positionInside(e.index);else if(e.word){let i=this.source.input.css.slice(qs(this.source.input.css,this.source.start),qs(this.source.input.css,this.source.end)).indexOf(e.word);i!==-1&&(n=this.positionInside(i))}return n}positionInside(e){let n=this.source.start.column,r=this.source.start.line,i=qs(this.source.input.css,this.source.start),s=i+e;for(let o=i;o<s;o++)this.source.input.css[o]===`
`?(n=1,r+=1):n+=1;return{column:n,line:r}}prev(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e-1]}rangeBy(e){let n={column:this.source.start.column,line:this.source.start.line},r=this.source.end?{column:this.source.end.column+1,line:this.source.end.line}:{column:n.column+1,line:n.line};if(e.word){let s=this.source.input.css.slice(qs(this.source.input.css,this.source.start),qs(this.source.input.css,this.source.end)).indexOf(e.word);s!==-1&&(n=this.positionInside(s),r=this.positionInside(s+e.word.length))}else e.start?n={column:e.start.column,line:e.start.line}:e.index&&(n=this.positionInside(e.index)),e.end?r={column:e.end.column,line:e.end.line}:typeof e.endIndex=="number"?r=this.positionInside(e.endIndex):e.index&&(r=this.positionInside(e.index+1));return(r.line<n.line||r.line===n.line&&r.column<=n.column)&&(r={column:n.column+1,line:n.line}),{end:r,start:n}}raw(e,n){return new cP().raw(this,e,n)}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}replaceWith(...e){if(this.parent){let n=this,r=!1;for(let i of e)i===this?r=!0:r?(this.parent.insertAfter(n,i),n=i):this.parent.insertBefore(n,i);r||this.remove()}return this}root(){let e=this;for(;e.parent&&e.parent.type!=="document";)e=e.parent;return e}toJSON(e,n){let r={},i=n==null;n=n||new Map;let s=0;for(let o in this){if(!Object.prototype.hasOwnProperty.call(this,o)||o==="parent"||o==="proxyCache")continue;let l=this[o];if(Array.isArray(l))r[o]=l.map(u=>typeof u=="object"&&u.toJSON?u.toJSON(null,n):u);else if(typeof l=="object"&&l.toJSON)r[o]=l.toJSON(null,n);else if(o==="source"){let u=n.get(l.input);u==null&&(u=s,n.set(l.input,s),s++),r[o]={end:l.end,inputId:u,start:l.start}}else r[o]=l}return i&&(r.inputs=[...n.keys()].map(o=>o.toJSON())),r}toProxy(){return this.proxyCache||(this.proxyCache=new Proxy(this,this.getProxyProcessor())),this.proxyCache}toString(e=hP){e.stringify&&(e=e.stringify);let n="";return e(this,r=>{n+=r}),n}warn(e,n,r){let i={node:this};for(let s in r)i[s]=r[s];return e.warn(n,i)}get proxyOf(){return this}};var oc=Wd;Wd.default=Wd;let fP=oc,Hd=class extends fP{constructor(e){super(e),this.type="comment"}};var ac=Hd;Hd.default=Hd;let pP=oc,qd=class extends pP{constructor(e){e&&typeof e.value<"u"&&typeof e.value!="string"&&(e={...e,value:String(e.value)}),super(e),this.type="decl"}get variable(){return this.prop.startsWith("--")||this.prop[0]==="$"}};var lc=qd;qd.default=qd;let SE=ac,CE=lc,mP=oc,{isClean:RE,my:AE}=ha,Cp,PE,kE,Rp;function xE(t){return t.map(e=>(e.nodes&&(e.nodes=xE(e.nodes)),delete e.source,e))}function NE(t){if(t[RE]=!1,t.proxyOf.nodes)for(let e of t.proxyOf.nodes)NE(e)}let bn=class OE extends mP{append(...e){for(let n of e){let r=this.normalize(n,this.last);for(let i of r)this.proxyOf.nodes.push(i)}return this.markDirty(),this}cleanRaws(e){if(super.cleanRaws(e),this.nodes)for(let n of this.nodes)n.cleanRaws(e)}each(e){if(!this.proxyOf.nodes)return;let n=this.getIterator(),r,i;for(;this.indexes[n]<this.proxyOf.nodes.length&&(r=this.indexes[n],i=e(this.proxyOf.nodes[r],r),i!==!1);)this.indexes[n]+=1;return delete this.indexes[n],i}every(e){return this.nodes.every(e)}getIterator(){this.lastEach||(this.lastEach=0),this.indexes||(this.indexes={}),this.lastEach+=1;let e=this.lastEach;return this.indexes[e]=0,e}getProxyProcessor(){return{get(e,n){return n==="proxyOf"?e:e[n]?n==="each"||typeof n=="string"&&n.startsWith("walk")?(...r)=>e[n](...r.map(i=>typeof i=="function"?(s,o)=>i(s.toProxy(),o):i)):n==="every"||n==="some"?r=>e[n]((i,...s)=>r(i.toProxy(),...s)):n==="root"?()=>e.root().toProxy():n==="nodes"?e.nodes.map(r=>r.toProxy()):n==="first"||n==="last"?e[n].toProxy():e[n]:e[n]},set(e,n,r){return e[n]===r||(e[n]=r,(n==="name"||n==="params"||n==="selector")&&e.markDirty()),!0}}}index(e){return typeof e=="number"?e:(e.proxyOf&&(e=e.proxyOf),this.proxyOf.nodes.indexOf(e))}insertAfter(e,n){let r=this.index(e),i=this.normalize(n,this.proxyOf.nodes[r]).reverse();r=this.index(e);for(let o of i)this.proxyOf.nodes.splice(r+1,0,o);let s;for(let o in this.indexes)s=this.indexes[o],r<s&&(this.indexes[o]=s+i.length);return this.markDirty(),this}insertBefore(e,n){let r=this.index(e),i=r===0?"prepend":!1,s=this.normalize(n,this.proxyOf.nodes[r],i).reverse();r=this.index(e);for(let l of s)this.proxyOf.nodes.splice(r,0,l);let o;for(let l in this.indexes)o=this.indexes[l],r<=o&&(this.indexes[l]=o+s.length);return this.markDirty(),this}normalize(e,n){if(typeof e=="string")e=xE(PE(e).nodes);else if(typeof e>"u")e=[];else if(Array.isArray(e)){e=e.slice(0);for(let i of e)i.parent&&i.parent.removeChild(i,"ignore")}else if(e.type==="root"&&this.type!=="document"){e=e.nodes.slice(0);for(let i of e)i.parent&&i.parent.removeChild(i,"ignore")}else if(e.type)e=[e];else if(e.prop){if(typeof e.value>"u")throw new Error("Value field is missed in node creation");typeof e.value!="string"&&(e.value=String(e.value)),e=[new CE(e)]}else if(e.selector||e.selectors)e=[new Rp(e)];else if(e.name)e=[new Cp(e)];else if(e.text)e=[new SE(e)];else throw new Error("Unknown node type in node creation");return e.map(i=>(i[AE]||OE.rebuild(i),i=i.proxyOf,i.parent&&i.parent.removeChild(i),i[RE]&&NE(i),i.raws||(i.raws={}),typeof i.raws.before>"u"&&n&&typeof n.raws.before<"u"&&(i.raws.before=n.raws.before.replace(/\S/g,"")),i.parent=this.proxyOf,i))}prepend(...e){e=e.reverse();for(let n of e){let r=this.normalize(n,this.first,"prepend").reverse();for(let i of r)this.proxyOf.nodes.unshift(i);for(let i in this.indexes)this.indexes[i]=this.indexes[i]+r.length}return this.markDirty(),this}push(e){return e.parent=this,this.proxyOf.nodes.push(e),this}removeAll(){for(let e of this.proxyOf.nodes)e.parent=void 0;return this.proxyOf.nodes=[],this.markDirty(),this}removeChild(e){e=this.index(e),this.proxyOf.nodes[e].parent=void 0,this.proxyOf.nodes.splice(e,1);let n;for(let r in this.indexes)n=this.indexes[r],n>=e&&(this.indexes[r]=n-1);return this.markDirty(),this}replaceValues(e,n,r){return r||(r=n,n={}),this.walkDecls(i=>{n.props&&!n.props.includes(i.prop)||n.fast&&!i.value.includes(n.fast)||(i.value=i.value.replace(e,r))}),this.markDirty(),this}some(e){return this.nodes.some(e)}walk(e){return this.each((n,r)=>{let i;try{i=e(n,r)}catch(s){throw n.addToError(s)}return i!==!1&&n.walk&&(i=n.walk(e)),i})}walkAtRules(e,n){return n?e instanceof RegExp?this.walk((r,i)=>{if(r.type==="atrule"&&e.test(r.name))return n(r,i)}):this.walk((r,i)=>{if(r.type==="atrule"&&r.name===e)return n(r,i)}):(n=e,this.walk((r,i)=>{if(r.type==="atrule")return n(r,i)}))}walkComments(e){return this.walk((n,r)=>{if(n.type==="comment")return e(n,r)})}walkDecls(e,n){return n?e instanceof RegExp?this.walk((r,i)=>{if(r.type==="decl"&&e.test(r.prop))return n(r,i)}):this.walk((r,i)=>{if(r.type==="decl"&&r.prop===e)return n(r,i)}):(n=e,this.walk((r,i)=>{if(r.type==="decl")return n(r,i)}))}walkRules(e,n){return n?e instanceof RegExp?this.walk((r,i)=>{if(r.type==="rule"&&e.test(r.selector))return n(r,i)}):this.walk((r,i)=>{if(r.type==="rule"&&r.selector===e)return n(r,i)}):(n=e,this.walk((r,i)=>{if(r.type==="rule")return n(r,i)}))}get first(){if(this.proxyOf.nodes)return this.proxyOf.nodes[0]}get last(){if(this.proxyOf.nodes)return this.proxyOf.nodes[this.proxyOf.nodes.length-1]}};bn.registerParse=t=>{PE=t};bn.registerRule=t=>{Rp=t};bn.registerAtRule=t=>{Cp=t};bn.registerRoot=t=>{kE=t};var li=bn;bn.default=bn;bn.rebuild=t=>{t.type==="atrule"?Object.setPrototypeOf(t,Cp.prototype):t.type==="rule"?Object.setPrototypeOf(t,Rp.prototype):t.type==="decl"?Object.setPrototypeOf(t,CE.prototype):t.type==="comment"?Object.setPrototypeOf(t,SE.prototype):t.type==="root"&&Object.setPrototypeOf(t,kE.prototype),t[AE]=!0,t.nodes&&t.nodes.forEach(e=>{bn.rebuild(e)})};let DE=li,yu=class extends DE{constructor(e){super(e),this.type="atrule"}append(...e){return this.proxyOf.nodes||(this.nodes=[]),super.append(...e)}prepend(...e){return this.proxyOf.nodes||(this.nodes=[]),super.prepend(...e)}};var Ap=yu;yu.default=yu;DE.registerAtRule(yu);let gP=li,bE,LE,zo=class extends gP{constructor(e){super({type:"document",...e}),this.nodes||(this.nodes=[])}toResult(e={}){return new bE(new LE,this,e).stringify()}};zo.registerLazyResult=t=>{bE=t};zo.registerProcessor=t=>{LE=t};var Pp=zo;zo.default=zo;let yP="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict",vP=(t,e=21)=>(n=e)=>{let r="",i=n;for(;i--;)r+=t[Math.random()*t.length|0];return r},_P=(t=21)=>{let e="",n=t;for(;n--;)e+=yP[Math.random()*64|0];return e};var wP={nanoid:_P,customAlphabet:vP};let{existsSync:EP,readFileSync:TP}=Yt,{dirname:Ah,join:IP}=Yt,{SourceMapConsumer:Ky,SourceMapGenerator:Qy}=Yt;function SP(t){return Buffer?Buffer.from(t,"base64").toString():window.atob(t)}let Gd=class{constructor(e,n){if(n.map===!1)return;this.loadAnnotation(e),this.inline=this.startWith(this.annotation,"data:");let r=n.map?n.map.prev:void 0,i=this.loadMap(n.from,r);!this.mapFile&&n.from&&(this.mapFile=n.from),this.mapFile&&(this.root=Ah(this.mapFile)),i&&(this.text=i)}consumer(){return this.consumerCache||(this.consumerCache=new Ky(this.text)),this.consumerCache}decodeInline(e){let n=/^data:application\/json;charset=utf-?8;base64,/,r=/^data:application\/json;base64,/,i=/^data:application\/json;charset=utf-?8,/,s=/^data:application\/json,/,o=e.match(i)||e.match(s);if(o)return decodeURIComponent(e.substr(o[0].length));let l=e.match(n)||e.match(r);if(l)return SP(e.substr(l[0].length));let u=e.match(/data:application\/json;([^,]+),/)[1];throw new Error("Unsupported source map encoding "+u)}getAnnotationURL(e){return e.replace(/^\/\*\s*# sourceMappingURL=/,"").trim()}isMap(e){return typeof e!="object"?!1:typeof e.mappings=="string"||typeof e._mappings=="string"||Array.isArray(e.sections)}loadAnnotation(e){let n=e.match(/\/\*\s*# sourceMappingURL=/g);if(!n)return;let r=e.lastIndexOf(n.pop()),i=e.indexOf("*/",r);r>-1&&i>-1&&(this.annotation=this.getAnnotationURL(e.substring(r,i)))}loadFile(e){if(this.root=Ah(e),EP(e))return this.mapFile=e,TP(e,"utf-8").toString().trim()}loadMap(e,n){if(n===!1)return!1;if(n){if(typeof n=="string")return n;if(typeof n=="function"){let r=n(e);if(r){let i=this.loadFile(r);if(!i)throw new Error("Unable to load previous source map: "+r.toString());return i}}else{if(n instanceof Ky)return Qy.fromSourceMap(n).toString();if(n instanceof Qy)return n.toString();if(this.isMap(n))return JSON.stringify(n);throw new Error("Unsupported previous source map format: "+n.toString())}}else{if(this.inline)return this.decodeInline(this.annotation);if(this.annotation){let r=this.annotation;return e&&(r=IP(Ah(e),r)),this.loadFile(r)}}}startWith(e,n){return e?e.substr(0,n.length)===n:!1}withContent(){return!!(this.consumer().sourcesContent&&this.consumer().sourcesContent.length>0)}};var ME=Gd;Gd.default=Gd;let{nanoid:CP}=wP,{isAbsolute:Kd,resolve:Qd}=Yt,{SourceMapConsumer:RP,SourceMapGenerator:AP}=Yt,{fileURLToPath:Yy,pathToFileURL:sl}=Yt,Jy=Sp,PP=ME,Ph=Yt,kh=Symbol("fromOffsetCache"),kP=!!(RP&&AP),Xy=!!(Qd&&Kd),vu=class{constructor(e,n={}){if(e===null||typeof e>"u"||typeof e=="object"&&!e.toString)throw new Error(`PostCSS received ${e} instead of CSS string`);if(this.css=e.toString(),this.css[0]==="\uFEFF"||this.css[0]==="￾"?(this.hasBOM=!0,this.css=this.css.slice(1)):this.hasBOM=!1,n.from&&(!Xy||/^\w+:\/\//.test(n.from)||Kd(n.from)?this.file=n.from:this.file=Qd(n.from)),Xy&&kP){let r=new PP(this.css,n);if(r.text){this.map=r;let i=r.consumer().file;!this.file&&i&&(this.file=this.mapResolve(i))}}this.file||(this.id="<input css "+CP(6)+">"),this.map&&(this.map.file=this.from)}error(e,n,r,i={}){let s,o,l;if(n&&typeof n=="object"){let c=n,d=r;if(typeof c.offset=="number"){let p=this.fromOffset(c.offset);n=p.line,r=p.col}else n=c.line,r=c.column;if(typeof d.offset=="number"){let p=this.fromOffset(d.offset);o=p.line,s=p.col}else o=d.line,s=d.column}else if(!r){let c=this.fromOffset(n);n=c.line,r=c.col}let u=this.origin(n,r,o,s);return u?l=new Jy(e,u.endLine===void 0?u.line:{column:u.column,line:u.line},u.endLine===void 0?u.column:{column:u.endColumn,line:u.endLine},u.source,u.file,i.plugin):l=new Jy(e,o===void 0?n:{column:r,line:n},o===void 0?r:{column:s,line:o},this.css,this.file,i.plugin),l.input={column:r,endColumn:s,endLine:o,line:n,source:this.css},this.file&&(sl&&(l.input.url=sl(this.file).toString()),l.input.file=this.file),l}fromOffset(e){let n,r;if(this[kh])r=this[kh];else{let s=this.css.split(`
`);r=new Array(s.length);let o=0;for(let l=0,u=s.length;l<u;l++)r[l]=o,o+=s[l].length+1;this[kh]=r}n=r[r.length-1];let i=0;if(e>=n)i=r.length-1;else{let s=r.length-2,o;for(;i<s;)if(o=i+(s-i>>1),e<r[o])s=o-1;else if(e>=r[o+1])i=o+1;else{i=o;break}}return{col:e-r[i]+1,line:i+1}}mapResolve(e){return/^\w+:\/\//.test(e)?e:Qd(this.map.consumer().sourceRoot||this.map.root||".",e)}origin(e,n,r,i){if(!this.map)return!1;let s=this.map.consumer(),o=s.originalPositionFor({column:n,line:e});if(!o.source)return!1;let l;typeof r=="number"&&(l=s.originalPositionFor({column:i,line:r}));let u;Kd(o.source)?u=sl(o.source):u=new URL(o.source,this.map.consumer().sourceRoot||sl(this.map.mapFile));let c={column:o.column,endColumn:l&&l.column,endLine:l&&l.line,line:o.line,url:u.toString()};if(u.protocol==="file:")if(Yy)c.file=Yy(u);else throw new Error("file: protocol is not available in this PostCSS build");let d=s.sourceContentFor(o.source);return d&&(c.source=d),c}toJSON(){let e={};for(let n of["hasBOM","css","file","id"])this[n]!=null&&(e[n]=this[n]);return this.map&&(e.map={...this.map},e.map.consumerCache&&(e.map.consumerCache=void 0)),e}get from(){return this.file||this.id}};var uc=vu;vu.default=vu;Ph&&Ph.registerInput&&Ph.registerInput(vu);let VE=li,FE,UE,ts=class extends VE{constructor(e){super(e),this.type="root",this.nodes||(this.nodes=[])}normalize(e,n,r){let i=super.normalize(e);if(n){if(r==="prepend")this.nodes.length>1?n.raws.before=this.nodes[1].raws.before:delete n.raws.before;else if(this.first!==n)for(let s of i)s.raws.before=n.raws.before}return i}removeChild(e,n){let r=this.index(e);return!n&&r===0&&this.nodes.length>1&&(this.nodes[1].raws.before=this.nodes[r].raws.before),super.removeChild(e)}toResult(e={}){return new FE(new UE,this,e).stringify()}};ts.registerLazyResult=t=>{FE=t};ts.registerProcessor=t=>{UE=t};var da=ts;ts.default=ts;VE.registerRoot(ts);let Wo={comma(t){return Wo.split(t,[","],!0)},space(t){let e=[" ",`
`,"	"];return Wo.split(t,e)},split(t,e,n){let r=[],i="",s=!1,o=0,l=!1,u="",c=!1;for(let d of t)c?c=!1:d==="\\"?c=!0:l?d===u&&(l=!1):d==='"'||d==="'"?(l=!0,u=d):d==="("?o+=1:d===")"?o>0&&(o-=1):o===0&&e.includes(d)&&(s=!0),s?(i!==""&&r.push(i.trim()),i="",s=!1):i+=d;return(n||i!=="")&&r.push(i.trim()),r}};var jE=Wo;Wo.default=Wo;let $E=li,xP=jE,_u=class extends $E{constructor(e){super(e),this.type="rule",this.nodes||(this.nodes=[])}get selectors(){return xP.comma(this.selector)}set selectors(e){let n=this.selector?this.selector.match(/,\s*/):null,r=n?n[0]:","+this.raw("between","beforeOpen");this.selector=e.join(r)}};var kp=_u;_u.default=_u;$E.registerRule(_u);let NP=Ap,OP=ac,DP=lc,bP=uc,LP=ME,MP=da,VP=kp;function Ho(t,e){if(Array.isArray(t))return t.map(i=>Ho(i));let{inputs:n,...r}=t;if(n){e=[];for(let i of n){let s={...i,__proto__:bP.prototype};s.map&&(s.map={...s.map,__proto__:LP.prototype}),e.push(s)}}if(r.nodes&&(r.nodes=t.nodes.map(i=>Ho(i,e))),r.source){let{inputId:i,...s}=r.source;r.source=s,i!=null&&(r.source.input=e[i])}if(r.type==="root")return new MP(r);if(r.type==="decl")return new DP(r);if(r.type==="rule")return new VP(r);if(r.type==="comment")return new OP(r);if(r.type==="atrule")return new NP(r);throw new Error("Unknown node type: "+t.type)}var FP=Ho;Ho.default=Ho;let{dirname:Nl,relative:BE,resolve:zE,sep:WE}=Yt,{SourceMapConsumer:HE,SourceMapGenerator:Ol}=Yt,{pathToFileURL:Zy}=Yt,UP=uc,jP=!!(HE&&Ol),$P=!!(Nl&&zE&&BE&&WE),BP=class{constructor(e,n,r,i){this.stringify=e,this.mapOpts=r.map||{},this.root=n,this.opts=r,this.css=i,this.originalCSS=i,this.usesFileUrls=!this.mapOpts.from&&this.mapOpts.absolute,this.memoizedFileURLs=new Map,this.memoizedPaths=new Map,this.memoizedURLs=new Map}addAnnotation(){let e;this.isInline()?e="data:application/json;base64,"+this.toBase64(this.map.toString()):typeof this.mapOpts.annotation=="string"?e=this.mapOpts.annotation:typeof this.mapOpts.annotation=="function"?e=this.mapOpts.annotation(this.opts.to,this.root):e=this.outputFile()+".map";let n=`
`;this.css.includes(`\r
`)&&(n=`\r
`),this.css+=n+"/*# sourceMappingURL="+e+" */"}applyPrevMaps(){for(let e of this.previous()){let n=this.toUrl(this.path(e.file)),r=e.root||Nl(e.file),i;this.mapOpts.sourcesContent===!1?(i=new HE(e.text),i.sourcesContent&&(i.sourcesContent=null)):i=e.consumer(),this.map.applySourceMap(i,n,this.toUrl(this.path(r)))}}clearAnnotation(){if(this.mapOpts.annotation!==!1)if(this.root){let e;for(let n=this.root.nodes.length-1;n>=0;n--)e=this.root.nodes[n],e.type==="comment"&&e.text.startsWith("# sourceMappingURL=")&&this.root.removeChild(n)}else this.css&&(this.css=this.css.replace(/\n*\/\*#[\S\s]*?\*\/$/gm,""))}generate(){if(this.clearAnnotation(),$P&&jP&&this.isMap())return this.generateMap();{let e="";return this.stringify(this.root,n=>{e+=n}),[e]}}generateMap(){if(this.root)this.generateString();else if(this.previous().length===1){let e=this.previous()[0].consumer();e.file=this.outputFile(),this.map=Ol.fromSourceMap(e,{ignoreInvalidMapping:!0})}else this.map=new Ol({file:this.outputFile(),ignoreInvalidMapping:!0}),this.map.addMapping({generated:{column:0,line:1},original:{column:0,line:1},source:this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>"});return this.isSourcesContent()&&this.setSourcesContent(),this.root&&this.previous().length>0&&this.applyPrevMaps(),this.isAnnotation()&&this.addAnnotation(),this.isInline()?[this.css]:[this.css,this.map]}generateString(){this.css="",this.map=new Ol({file:this.outputFile(),ignoreInvalidMapping:!0});let e=1,n=1,r="<no source>",i={generated:{column:0,line:0},original:{column:0,line:0},source:""},s,o;this.stringify(this.root,(l,u,c)=>{if(this.css+=l,u&&c!=="end"&&(i.generated.line=e,i.generated.column=n-1,u.source&&u.source.start?(i.source=this.sourcePath(u),i.original.line=u.source.start.line,i.original.column=u.source.start.column-1,this.map.addMapping(i)):(i.source=r,i.original.line=1,i.original.column=0,this.map.addMapping(i))),o=l.match(/\n/g),o?(e+=o.length,s=l.lastIndexOf(`
`),n=l.length-s):n+=l.length,u&&c!=="start"){let d=u.parent||{raws:{}};(!(u.type==="decl"||u.type==="atrule"&&!u.nodes)||u!==d.last||d.raws.semicolon)&&(u.source&&u.source.end?(i.source=this.sourcePath(u),i.original.line=u.source.end.line,i.original.column=u.source.end.column-1,i.generated.line=e,i.generated.column=n-2,this.map.addMapping(i)):(i.source=r,i.original.line=1,i.original.column=0,i.generated.line=e,i.generated.column=n-1,this.map.addMapping(i)))}})}isAnnotation(){return this.isInline()?!0:typeof this.mapOpts.annotation<"u"?this.mapOpts.annotation:this.previous().length?this.previous().some(e=>e.annotation):!0}isInline(){if(typeof this.mapOpts.inline<"u")return this.mapOpts.inline;let e=this.mapOpts.annotation;return typeof e<"u"&&e!==!0?!1:this.previous().length?this.previous().some(n=>n.inline):!0}isMap(){return typeof this.opts.map<"u"?!!this.opts.map:this.previous().length>0}isSourcesContent(){return typeof this.mapOpts.sourcesContent<"u"?this.mapOpts.sourcesContent:this.previous().length?this.previous().some(e=>e.withContent()):!0}outputFile(){return this.opts.to?this.path(this.opts.to):this.opts.from?this.path(this.opts.from):"to.css"}path(e){if(this.mapOpts.absolute||e.charCodeAt(0)===60||/^\w+:\/\//.test(e))return e;let n=this.memoizedPaths.get(e);if(n)return n;let r=this.opts.to?Nl(this.opts.to):".";typeof this.mapOpts.annotation=="string"&&(r=Nl(zE(r,this.mapOpts.annotation)));let i=BE(r,e);return this.memoizedPaths.set(e,i),i}previous(){if(!this.previousMaps)if(this.previousMaps=[],this.root)this.root.walk(e=>{if(e.source&&e.source.input.map){let n=e.source.input.map;this.previousMaps.includes(n)||this.previousMaps.push(n)}});else{let e=new UP(this.originalCSS,this.opts);e.map&&this.previousMaps.push(e.map)}return this.previousMaps}setSourcesContent(){let e={};if(this.root)this.root.walk(n=>{if(n.source){let r=n.source.input.from;if(r&&!e[r]){e[r]=!0;let i=this.usesFileUrls?this.toFileUrl(r):this.toUrl(this.path(r));this.map.setSourceContent(i,n.source.input.css)}}});else if(this.css){let n=this.opts.from?this.toUrl(this.path(this.opts.from)):"<no source>";this.map.setSourceContent(n,this.css)}}sourcePath(e){return this.mapOpts.from?this.toUrl(this.mapOpts.from):this.usesFileUrls?this.toFileUrl(e.source.input.from):this.toUrl(this.path(e.source.input.from))}toBase64(e){return Buffer?Buffer.from(e).toString("base64"):window.btoa(unescape(encodeURIComponent(e)))}toFileUrl(e){let n=this.memoizedFileURLs.get(e);if(n)return n;if(Zy){let r=Zy(e).toString();return this.memoizedFileURLs.set(e,r),r}else throw new Error("`map.absolute` option is not available in this PostCSS build")}toUrl(e){let n=this.memoizedURLs.get(e);if(n)return n;WE==="\\"&&(e=e.replace(/\\/g,"/"));let r=encodeURI(e).replace(/[#?]/g,encodeURIComponent);return this.memoizedURLs.set(e,r),r}};var qE=BP;const xh=39,ev=34,ol=92,tv=47,al=10,Gs=32,ll=12,ul=9,cl=13,zP=91,WP=93,HP=40,qP=41,GP=123,KP=125,QP=59,YP=42,JP=58,XP=64,hl=/[\t\n\f\r "#'()/;[\\\]{}]/g,dl=/[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,ZP=/.[\r\n"'(/\\]/,nv=/[\da-f]/i;var ek=function(e,n={}){let r=e.css.valueOf(),i=n.ignoreErrors,s,o,l,u,c,d,p,m,_,A,k=r.length,R=0,T=[],v=[];function I(){return R}function O(y){throw e.error("Unclosed "+y,R)}function L(){return v.length===0&&R>=k}function j(y){if(v.length)return v.pop();if(R>=k)return;let w=y?y.ignoreUnclosed:!1;switch(s=r.charCodeAt(R),s){case al:case Gs:case ul:case cl:case ll:{u=R;do u+=1,s=r.charCodeAt(u);while(s===Gs||s===al||s===ul||s===cl||s===ll);d=["space",r.slice(R,u)],R=u-1;break}case zP:case WP:case GP:case KP:case JP:case QP:case qP:{let S=String.fromCharCode(s);d=[S,S,R];break}case HP:{if(A=T.length?T.pop()[1]:"",_=r.charCodeAt(R+1),A==="url"&&_!==xh&&_!==ev&&_!==Gs&&_!==al&&_!==ul&&_!==ll&&_!==cl){u=R;do{if(p=!1,u=r.indexOf(")",u+1),u===-1)if(i||w){u=R;break}else O("bracket");for(m=u;r.charCodeAt(m-1)===ol;)m-=1,p=!p}while(p);d=["brackets",r.slice(R,u+1),R,u],R=u}else u=r.indexOf(")",R+1),o=r.slice(R,u+1),u===-1||ZP.test(o)?d=["(","(",R]:(d=["brackets",o,R,u],R=u);break}case xh:case ev:{c=s===xh?"'":'"',u=R;do{if(p=!1,u=r.indexOf(c,u+1),u===-1)if(i||w){u=R+1;break}else O("string");for(m=u;r.charCodeAt(m-1)===ol;)m-=1,p=!p}while(p);d=["string",r.slice(R,u+1),R,u],R=u;break}case XP:{hl.lastIndex=R+1,hl.test(r),hl.lastIndex===0?u=r.length-1:u=hl.lastIndex-2,d=["at-word",r.slice(R,u+1),R,u],R=u;break}case ol:{for(u=R,l=!0;r.charCodeAt(u+1)===ol;)u+=1,l=!l;if(s=r.charCodeAt(u+1),l&&s!==tv&&s!==Gs&&s!==al&&s!==ul&&s!==cl&&s!==ll&&(u+=1,nv.test(r.charAt(u)))){for(;nv.test(r.charAt(u+1));)u+=1;r.charCodeAt(u+1)===Gs&&(u+=1)}d=["word",r.slice(R,u+1),R,u],R=u;break}default:{s===tv&&r.charCodeAt(R+1)===YP?(u=r.indexOf("*/",R+2)+1,u===0&&(i||w?u=r.length:O("comment")),d=["comment",r.slice(R,u+1),R,u],R=u):(dl.lastIndex=R+1,dl.test(r),dl.lastIndex===0?u=r.length-1:u=dl.lastIndex-2,d=["word",r.slice(R,u+1),R,u],T.push(d),R=u);break}}return R++,d}function E(y){v.push(y)}return{back:E,endOfFile:L,nextToken:j,position:I}};let tk=Ap,nk=ac,rk=lc,ik=da,rv=kp,sk=ek;const iv={empty:!0,space:!0};function ok(t){for(let e=t.length-1;e>=0;e--){let n=t[e],r=n[3]||n[2];if(r)return r}}let ak=class{constructor(e){this.input=e,this.root=new ik,this.current=this.root,this.spaces="",this.semicolon=!1,this.createTokenizer(),this.root.source={input:e,start:{column:1,line:1,offset:0}}}atrule(e){let n=new tk;n.name=e[1].slice(1),n.name===""&&this.unnamedAtrule(n,e),this.init(n,e[2]);let r,i,s,o=!1,l=!1,u=[],c=[];for(;!this.tokenizer.endOfFile();){if(e=this.tokenizer.nextToken(),r=e[0],r==="("||r==="["?c.push(r==="("?")":"]"):r==="{"&&c.length>0?c.push("}"):r===c[c.length-1]&&c.pop(),c.length===0)if(r===";"){n.source.end=this.getPosition(e[2]),n.source.end.offset++,this.semicolon=!0;break}else if(r==="{"){l=!0;break}else if(r==="}"){if(u.length>0){for(s=u.length-1,i=u[s];i&&i[0]==="space";)i=u[--s];i&&(n.source.end=this.getPosition(i[3]||i[2]),n.source.end.offset++)}this.end(e);break}else u.push(e);else u.push(e);if(this.tokenizer.endOfFile()){o=!0;break}}n.raws.between=this.spacesAndCommentsFromEnd(u),u.length?(n.raws.afterName=this.spacesAndCommentsFromStart(u),this.raw(n,"params",u),o&&(e=u[u.length-1],n.source.end=this.getPosition(e[3]||e[2]),n.source.end.offset++,this.spaces=n.raws.between,n.raws.between="")):(n.raws.afterName="",n.params=""),l&&(n.nodes=[],this.current=n)}checkMissedSemicolon(e){let n=this.colon(e);if(n===!1)return;let r=0,i;for(let s=n-1;s>=0&&(i=e[s],!(i[0]!=="space"&&(r+=1,r===2)));s--);throw this.input.error("Missed semicolon",i[0]==="word"?i[3]+1:i[2])}colon(e){let n=0,r,i,s;for(let[o,l]of e.entries()){if(i=l,s=i[0],s==="("&&(n+=1),s===")"&&(n-=1),n===0&&s===":")if(!r)this.doubleColon(i);else{if(r[0]==="word"&&r[1]==="progid")continue;return o}r=i}return!1}comment(e){let n=new nk;this.init(n,e[2]),n.source.end=this.getPosition(e[3]||e[2]),n.source.end.offset++;let r=e[1].slice(2,-2);if(/^\s*$/.test(r))n.text="",n.raws.left=r,n.raws.right="";else{let i=r.match(/^(\s*)([^]*\S)(\s*)$/);n.text=i[2],n.raws.left=i[1],n.raws.right=i[3]}}createTokenizer(){this.tokenizer=sk(this.input)}decl(e,n){let r=new rk;this.init(r,e[0][2]);let i=e[e.length-1];for(i[0]===";"&&(this.semicolon=!0,e.pop()),r.source.end=this.getPosition(i[3]||i[2]||ok(e)),r.source.end.offset++;e[0][0]!=="word";)e.length===1&&this.unknownWord(e),r.raws.before+=e.shift()[1];for(r.source.start=this.getPosition(e[0][2]),r.prop="";e.length;){let c=e[0][0];if(c===":"||c==="space"||c==="comment")break;r.prop+=e.shift()[1]}r.raws.between="";let s;for(;e.length;)if(s=e.shift(),s[0]===":"){r.raws.between+=s[1];break}else s[0]==="word"&&/\w/.test(s[1])&&this.unknownWord([s]),r.raws.between+=s[1];(r.prop[0]==="_"||r.prop[0]==="*")&&(r.raws.before+=r.prop[0],r.prop=r.prop.slice(1));let o=[],l;for(;e.length&&(l=e[0][0],!(l!=="space"&&l!=="comment"));)o.push(e.shift());this.precheckMissedSemicolon(e);for(let c=e.length-1;c>=0;c--){if(s=e[c],s[1].toLowerCase()==="!important"){r.important=!0;let d=this.stringFrom(e,c);d=this.spacesFromEnd(e)+d,d!==" !important"&&(r.raws.important=d);break}else if(s[1].toLowerCase()==="important"){let d=e.slice(0),p="";for(let m=c;m>0;m--){let _=d[m][0];if(p.trim().startsWith("!")&&_!=="space")break;p=d.pop()[1]+p}p.trim().startsWith("!")&&(r.important=!0,r.raws.important=p,e=d)}if(s[0]!=="space"&&s[0]!=="comment")break}e.some(c=>c[0]!=="space"&&c[0]!=="comment")&&(r.raws.between+=o.map(c=>c[1]).join(""),o=[]),this.raw(r,"value",o.concat(e),n),r.value.includes(":")&&!n&&this.checkMissedSemicolon(e)}doubleColon(e){throw this.input.error("Double colon",{offset:e[2]},{offset:e[2]+e[1].length})}emptyRule(e){let n=new rv;this.init(n,e[2]),n.selector="",n.raws.between="",this.current=n}end(e){this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.semicolon=!1,this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.spaces="",this.current.parent?(this.current.source.end=this.getPosition(e[2]),this.current.source.end.offset++,this.current=this.current.parent):this.unexpectedClose(e)}endFile(){this.current.parent&&this.unclosedBlock(),this.current.nodes&&this.current.nodes.length&&(this.current.raws.semicolon=this.semicolon),this.current.raws.after=(this.current.raws.after||"")+this.spaces,this.root.source.end=this.getPosition(this.tokenizer.position())}freeSemicolon(e){if(this.spaces+=e[1],this.current.nodes){let n=this.current.nodes[this.current.nodes.length-1];n&&n.type==="rule"&&!n.raws.ownSemicolon&&(n.raws.ownSemicolon=this.spaces,this.spaces="")}}getPosition(e){let n=this.input.fromOffset(e);return{column:n.col,line:n.line,offset:e}}init(e,n){this.current.push(e),e.source={input:this.input,start:this.getPosition(n)},e.raws.before=this.spaces,this.spaces="",e.type!=="comment"&&(this.semicolon=!1)}other(e){let n=!1,r=null,i=!1,s=null,o=[],l=e[1].startsWith("--"),u=[],c=e;for(;c;){if(r=c[0],u.push(c),r==="("||r==="[")s||(s=c),o.push(r==="("?")":"]");else if(l&&i&&r==="{")s||(s=c),o.push("}");else if(o.length===0)if(r===";")if(i){this.decl(u,l);return}else break;else if(r==="{"){this.rule(u);return}else if(r==="}"){this.tokenizer.back(u.pop()),n=!0;break}else r===":"&&(i=!0);else r===o[o.length-1]&&(o.pop(),o.length===0&&(s=null));c=this.tokenizer.nextToken()}if(this.tokenizer.endOfFile()&&(n=!0),o.length>0&&this.unclosedBracket(s),n&&i){if(!l)for(;u.length&&(c=u[u.length-1][0],!(c!=="space"&&c!=="comment"));)this.tokenizer.back(u.pop());this.decl(u,l)}else this.unknownWord(u)}parse(){let e;for(;!this.tokenizer.endOfFile();)switch(e=this.tokenizer.nextToken(),e[0]){case"space":this.spaces+=e[1];break;case";":this.freeSemicolon(e);break;case"}":this.end(e);break;case"comment":this.comment(e);break;case"at-word":this.atrule(e);break;case"{":this.emptyRule(e);break;default:this.other(e);break}this.endFile()}precheckMissedSemicolon(){}raw(e,n,r,i){let s,o,l=r.length,u="",c=!0,d,p;for(let m=0;m<l;m+=1)s=r[m],o=s[0],o==="space"&&m===l-1&&!i?c=!1:o==="comment"?(p=r[m-1]?r[m-1][0]:"empty",d=r[m+1]?r[m+1][0]:"empty",!iv[p]&&!iv[d]?u.slice(-1)===","?c=!1:u+=s[1]:c=!1):u+=s[1];if(!c){let m=r.reduce((_,A)=>_+A[1],"");e.raws[n]={raw:m,value:u}}e[n]=u}rule(e){e.pop();let n=new rv;this.init(n,e[0][2]),n.raws.between=this.spacesAndCommentsFromEnd(e),this.raw(n,"selector",e),this.current=n}spacesAndCommentsFromEnd(e){let n,r="";for(;e.length&&(n=e[e.length-1][0],!(n!=="space"&&n!=="comment"));)r=e.pop()[1]+r;return r}spacesAndCommentsFromStart(e){let n,r="";for(;e.length&&(n=e[0][0],!(n!=="space"&&n!=="comment"));)r+=e.shift()[1];return r}spacesFromEnd(e){let n,r="";for(;e.length&&(n=e[e.length-1][0],n==="space");)r=e.pop()[1]+r;return r}stringFrom(e,n){let r="";for(let i=n;i<e.length;i++)r+=e[i][1];return e.splice(n,e.length-n),r}unclosedBlock(){let e=this.current.source.start;throw this.input.error("Unclosed block",e.line,e.column)}unclosedBracket(e){throw this.input.error("Unclosed bracket",{offset:e[2]},{offset:e[2]+1})}unexpectedClose(e){throw this.input.error("Unexpected }",{offset:e[2]},{offset:e[2]+1})}unknownWord(e){throw this.input.error("Unknown word",{offset:e[0][2]},{offset:e[0][2]+e[0][1].length})}unnamedAtrule(e,n){throw this.input.error("At-rule without name",{offset:n[2]},{offset:n[2]+n[1].length})}};var lk=ak;let uk=li,ck=uc,hk=lk;function wu(t,e){let n=new ck(t,e),r=new hk(n);try{r.parse()}catch(i){throw i}return r.root}var xp=wu;wu.default=wu;uk.registerParse(wu);let Yd=class{constructor(e,n={}){if(this.type="warning",this.text=e,n.node&&n.node.source){let r=n.node.rangeBy(n);this.line=r.start.line,this.column=r.start.column,this.endLine=r.end.line,this.endColumn=r.end.column}for(let r in n)this[r]=n[r]}toString(){return this.node?this.node.error(this.text,{index:this.index,plugin:this.plugin,word:this.word}).message:this.plugin?this.plugin+": "+this.text:this.text}};var GE=Yd;Yd.default=Yd;let dk=GE,Jd=class{constructor(e,n,r){this.processor=e,this.messages=[],this.root=n,this.opts=r,this.css=void 0,this.map=void 0}toString(){return this.css}warn(e,n={}){n.plugin||this.lastPlugin&&this.lastPlugin.postcssPlugin&&(n.plugin=this.lastPlugin.postcssPlugin);let r=new dk(e,n);return this.messages.push(r),r}warnings(){return this.messages.filter(e=>e.type==="warning")}get content(){return this.css}};var Np=Jd;Jd.default=Jd;let fk=li,pk=Pp,mk=qE,gk=xp,sv=Np,yk=da,vk=sc,{isClean:Zt,my:_k}=ha;const wk={atrule:"AtRule",comment:"Comment",decl:"Declaration",document:"Document",root:"Root",rule:"Rule"},Ek={AtRule:!0,AtRuleExit:!0,Comment:!0,CommentExit:!0,Declaration:!0,DeclarationExit:!0,Document:!0,DocumentExit:!0,Once:!0,OnceExit:!0,postcssPlugin:!0,prepare:!0,Root:!0,RootExit:!0,Rule:!0,RuleExit:!0},Tk={Once:!0,postcssPlugin:!0,prepare:!0},ns=0;function Ks(t){return typeof t=="object"&&typeof t.then=="function"}function KE(t){let e=!1,n=wk[t.type];return t.type==="decl"?e=t.prop.toLowerCase():t.type==="atrule"&&(e=t.name.toLowerCase()),e&&t.append?[n,n+"-"+e,ns,n+"Exit",n+"Exit-"+e]:e?[n,n+"-"+e,n+"Exit",n+"Exit-"+e]:t.append?[n,ns,n+"Exit"]:[n,n+"Exit"]}function ov(t){let e;return t.type==="document"?e=["Document",ns,"DocumentExit"]:t.type==="root"?e=["Root",ns,"RootExit"]:e=KE(t),{eventIndex:0,events:e,iterator:0,node:t,visitorIndex:0,visitors:[]}}function Xd(t){return t[Zt]=!1,t.nodes&&t.nodes.forEach(e=>Xd(e)),t}let Zd={},rs=class QE{constructor(e,n,r){this.stringified=!1,this.processed=!1;let i;if(typeof n=="object"&&n!==null&&(n.type==="root"||n.type==="document"))i=Xd(n);else if(n instanceof QE||n instanceof sv)i=Xd(n.root),n.map&&(typeof r.map>"u"&&(r.map={}),r.map.inline||(r.map.inline=!1),r.map.prev=n.map);else{let s=gk;r.syntax&&(s=r.syntax.parse),r.parser&&(s=r.parser),s.parse&&(s=s.parse);try{i=s(n,r)}catch(o){this.processed=!0,this.error=o}i&&!i[_k]&&fk.rebuild(i)}this.result=new sv(e,i,r),this.helpers={...Zd,postcss:Zd,result:this.result},this.plugins=this.processor.plugins.map(s=>typeof s=="object"&&s.prepare?{...s,...s.prepare(this.result)}:s)}async(){return this.error?Promise.reject(this.error):this.processed?Promise.resolve(this.result):(this.processing||(this.processing=this.runAsync()),this.processing)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}getAsyncError(){throw new Error("Use process(css).then(cb) to work with async plugins")}handleError(e,n){let r=this.result.lastPlugin;try{n&&n.addToError(e),this.error=e,e.name==="CssSyntaxError"&&!e.plugin?(e.plugin=r.postcssPlugin,e.setMessage()):r.postcssVersion}catch(i){console&&console.error&&console.error(i)}return e}prepareVisitors(){this.listeners={};let e=(n,r,i)=>{this.listeners[r]||(this.listeners[r]=[]),this.listeners[r].push([n,i])};for(let n of this.plugins)if(typeof n=="object")for(let r in n){if(!Ek[r]&&/^[A-Z]/.test(r))throw new Error(`Unknown event ${r} in ${n.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);if(!Tk[r])if(typeof n[r]=="object")for(let i in n[r])i==="*"?e(n,r,n[r][i]):e(n,r+"-"+i.toLowerCase(),n[r][i]);else typeof n[r]=="function"&&e(n,r,n[r])}this.hasListener=Object.keys(this.listeners).length>0}async runAsync(){this.plugin=0;for(let e=0;e<this.plugins.length;e++){let n=this.plugins[e],r=this.runOnRoot(n);if(Ks(r))try{await r}catch(i){throw this.handleError(i)}}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[Zt];){e[Zt]=!0;let n=[ov(e)];for(;n.length>0;){let r=this.visitTick(n);if(Ks(r))try{await r}catch(i){let s=n[n.length-1].node;throw this.handleError(i,s)}}}if(this.listeners.OnceExit)for(let[n,r]of this.listeners.OnceExit){this.result.lastPlugin=n;try{if(e.type==="document"){let i=e.nodes.map(s=>r(s,this.helpers));await Promise.all(i)}else await r(e,this.helpers)}catch(i){throw this.handleError(i)}}}return this.processed=!0,this.stringify()}runOnRoot(e){this.result.lastPlugin=e;try{if(typeof e=="object"&&e.Once){if(this.result.root.type==="document"){let n=this.result.root.nodes.map(r=>e.Once(r,this.helpers));return Ks(n[0])?Promise.all(n):n}return e.Once(this.result.root,this.helpers)}else if(typeof e=="function")return e(this.result.root,this.result)}catch(n){throw this.handleError(n)}}stringify(){if(this.error)throw this.error;if(this.stringified)return this.result;this.stringified=!0,this.sync();let e=this.result.opts,n=vk;e.syntax&&(n=e.syntax.stringify),e.stringifier&&(n=e.stringifier),n.stringify&&(n=n.stringify);let i=new mk(n,this.result.root,this.result.opts).generate();return this.result.css=i[0],this.result.map=i[1],this.result}sync(){if(this.error)throw this.error;if(this.processed)return this.result;if(this.processed=!0,this.processing)throw this.getAsyncError();for(let e of this.plugins){let n=this.runOnRoot(e);if(Ks(n))throw this.getAsyncError()}if(this.prepareVisitors(),this.hasListener){let e=this.result.root;for(;!e[Zt];)e[Zt]=!0,this.walkSync(e);if(this.listeners.OnceExit)if(e.type==="document")for(let n of e.nodes)this.visitSync(this.listeners.OnceExit,n);else this.visitSync(this.listeners.OnceExit,e)}return this.result}then(e,n){return this.async().then(e,n)}toString(){return this.css}visitSync(e,n){for(let[r,i]of e){this.result.lastPlugin=r;let s;try{s=i(n,this.helpers)}catch(o){throw this.handleError(o,n.proxyOf)}if(n.type!=="root"&&n.type!=="document"&&!n.parent)return!0;if(Ks(s))throw this.getAsyncError()}}visitTick(e){let n=e[e.length-1],{node:r,visitors:i}=n;if(r.type!=="root"&&r.type!=="document"&&!r.parent){e.pop();return}if(i.length>0&&n.visitorIndex<i.length){let[o,l]=i[n.visitorIndex];n.visitorIndex+=1,n.visitorIndex===i.length&&(n.visitors=[],n.visitorIndex=0),this.result.lastPlugin=o;try{return l(r.toProxy(),this.helpers)}catch(u){throw this.handleError(u,r)}}if(n.iterator!==0){let o=n.iterator,l;for(;l=r.nodes[r.indexes[o]];)if(r.indexes[o]+=1,!l[Zt]){l[Zt]=!0,e.push(ov(l));return}n.iterator=0,delete r.indexes[o]}let s=n.events;for(;n.eventIndex<s.length;){let o=s[n.eventIndex];if(n.eventIndex+=1,o===ns){r.nodes&&r.nodes.length&&(r[Zt]=!0,n.iterator=r.getIterator());return}else if(this.listeners[o]){n.visitors=this.listeners[o];return}}e.pop()}walkSync(e){e[Zt]=!0;let n=KE(e);for(let r of n)if(r===ns)e.nodes&&e.each(i=>{i[Zt]||this.walkSync(i)});else{let i=this.listeners[r];if(i&&this.visitSync(i,e.toProxy()))return}}warnings(){return this.sync().warnings()}get content(){return this.stringify().content}get css(){return this.stringify().css}get map(){return this.stringify().map}get messages(){return this.sync().messages}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){return this.sync().root}get[Symbol.toStringTag](){return"LazyResult"}};rs.registerPostcss=t=>{Zd=t};var YE=rs;rs.default=rs;yk.registerLazyResult(rs);pk.registerLazyResult(rs);let Ik=qE,Sk=xp;const Ck=Np;let Rk=sc,ef=class{constructor(e,n,r){n=n.toString(),this.stringified=!1,this._processor=e,this._css=n,this._opts=r,this._map=void 0;let i,s=Rk;this.result=new Ck(this._processor,i,this._opts),this.result.css=n;let o=this;Object.defineProperty(this.result,"root",{get(){return o.root}});let l=new Ik(s,i,this._opts,n);if(l.isMap()){let[u,c]=l.generate();u&&(this.result.css=u),c&&(this.result.map=c)}else l.clearAnnotation(),this.result.css=l.css}async(){return this.error?Promise.reject(this.error):Promise.resolve(this.result)}catch(e){return this.async().catch(e)}finally(e){return this.async().then(e,e)}sync(){if(this.error)throw this.error;return this.result}then(e,n){return this.async().then(e,n)}toString(){return this._css}warnings(){return[]}get content(){return this.result.css}get css(){return this.result.css}get map(){return this.result.map}get messages(){return[]}get opts(){return this.result.opts}get processor(){return this.result.processor}get root(){if(this._root)return this._root;let e,n=Sk;try{e=n(this._css,this._opts)}catch(r){this.error=r}if(this.error)throw this.error;return this._root=e,e}get[Symbol.toStringTag](){return"NoWorkResult"}};var Ak=ef;ef.default=ef;let Pk=Pp,kk=YE,xk=Ak,Nk=da,qo=class{constructor(e=[]){this.version="8.4.49",this.plugins=this.normalize(e)}normalize(e){let n=[];for(let r of e)if(r.postcss===!0?r=r():r.postcss&&(r=r.postcss),typeof r=="object"&&Array.isArray(r.plugins))n=n.concat(r.plugins);else if(typeof r=="object"&&r.postcssPlugin)n.push(r);else if(typeof r=="function")n.push(r);else if(!(typeof r=="object"&&(r.parse||r.stringify)))throw new Error(r+" is not a PostCSS plugin");return n}process(e,n={}){return!this.plugins.length&&!n.parser&&!n.stringifier&&!n.syntax?new xk(this,e,n):new kk(this,e,n)}use(e){return this.plugins=this.plugins.concat(this.normalize([e])),this}};var Ok=qo;qo.default=qo;Nk.registerProcessor(qo);Pk.registerProcessor(qo);var av={};let JE=Ap,XE=ac,Dk=li,bk=Sp,ZE=lc,eT=Pp,Lk=FP,Mk=uc,Vk=YE,Fk=jE,Uk=oc,jk=xp,Op=Ok,$k=Np,tT=da,nT=kp,Bk=sc,zk=GE;function ue(...t){return t.length===1&&Array.isArray(t[0])&&(t=t[0]),new Op(t)}ue.plugin=function(e,n){let r=!1;function i(...o){console&&console.warn&&!r&&(r=!0,console.warn(e+`: postcss.plugin was deprecated. Migration guide:
https://evilmartians.com/chronicles/postcss-8-plugin-migration`),av.LANG&&av.LANG.startsWith("cn")&&console.warn(e+`: 里面 postcss.plugin 被弃用. 迁移指南:
https://www.w3ctech.com/topic/2226`));let l=n(...o);return l.postcssPlugin=e,l.postcssVersion=new Op().version,l}let s;return Object.defineProperty(i,"postcss",{get(){return s||(s=i()),s}}),i.process=function(o,l,u){return ue([i(u)]).process(o,l)},i};ue.stringify=Bk;ue.parse=jk;ue.fromJSON=Lk;ue.list=Fk;ue.comment=t=>new XE(t);ue.atRule=t=>new JE(t);ue.decl=t=>new ZE(t);ue.rule=t=>new nT(t);ue.root=t=>new tT(t);ue.document=t=>new eT(t);ue.CssSyntaxError=bk;ue.Declaration=ZE;ue.Container=Dk;ue.Processor=Op;ue.Document=eT;ue.Comment=XE;ue.Warning=zk;ue.AtRule=JE;ue.Result=$k;ue.Input=Mk;ue.Rule=nT;ue.Root=tT;ue.Node=Uk;Vk.registerPostcss(ue);var Wk=ue;ue.default=ue;const ve=Q_(Wk);ve.stringify;ve.fromJSON;ve.plugin;ve.parse;ve.list;ve.document;ve.comment;ve.atRule;ve.rule;ve.decl;ve.root;ve.CssSyntaxError;ve.Declaration;ve.Container;ve.Processor;ve.Document;ve.Comment;ve.Warning;ve.AtRule;ve.Result;ve.Input;ve.Rule;ve.Root;ve.Node;const Hk=({noteSet:t})=>{const e=ms(),n=()=>{e(`/type/${t.noteSetId}`)};return M.jsxs("div",{className:"relative bg-slate-700 p-4 rounded-lg text-white hover:cursor-pointer hover:bg-slate-800 hover:shadow-md hover:scale-105 transition-transform group",onClick:n,children:[M.jsx(ic,{className:"absolute top-1 right-1 bg-blue-500 text-white text-sm shadow-md p-1 rounded opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-opacity",to:"/edit/"+t.noteSetId,onClick:r=>r.stopPropagation(),children:"Edit"}),M.jsx("div",{className:"text-xl font-bold",children:t.noteSetName}),M.jsx("div",{className:"text-lg",children:t.noteSetId})]})};var lv={};/**
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
 */const rT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},iT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,c=u?t[i+2]:0,d=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|c>>6,_=c&63;u||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||c==null||p==null)throw new Gk;const m=s<<2|l>>4;if(r.push(m),c!==64){const _=l<<4&240|c>>2;if(r.push(_),p!==64){const A=c<<6&192|p;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Gk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kk=function(t){const e=rT(t);return iT.encodeByteArray(e,!0)},Eu=function(t){return Kk(t).replace(/\./g,"")},sT=function(t){try{return iT.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Qk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yk=()=>Qk().__FIREBASE_DEFAULTS__,Jk=()=>{if(typeof process>"u"||typeof lv>"u")return;const t=lv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Xk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sT(t[1]);return e&&JSON.parse(e)},cc=()=>{try{return Yk()||Jk()||Xk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},oT=t=>{var e,n;return(n=(e=cc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Zk=t=>{const e=oT(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},aT=()=>{var t;return(t=cc())===null||t===void 0?void 0:t.config},lT=t=>{var e;return(e=cc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ex{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function tx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Eu(JSON.stringify(n)),Eu(JSON.stringify(o)),""].join(".")}/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function rx(){var t;const e=(t=cc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ix(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function uT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ox(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ax(){return!rx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function cT(){try{return typeof indexedDB=="object"}catch{return!1}}function hT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function lx(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ux="FirebaseError";class Jt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ux,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?cx(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Jt(i,l,r)}}function cx(t,e){return t.replace(hx,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const hx=/\{\$([^}]+)}/g;function dx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Go(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(uv(s)&&uv(o)){if(!Go(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function uv(t){return t!==null&&typeof t=="object"}/**
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
 */function fa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function eo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function to(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function fx(t,e){const n=new px(t,e);return n.subscribe.bind(n)}class px{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mx(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Nh),i.error===void 0&&(i.error=Nh),i.complete===void 0&&(i.complete=Nh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mx(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nh(){}/**
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
 */const gx=1e3,yx=2,vx=4*60*60*1e3,_x=.5;function cv(t,e=gx,n=yx){const r=e*Math.pow(n,t),i=Math.round(_x*r*(Math.random()-.5)*2);return Math.min(vx,r+i)}/**
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
 */const Fr="[DEFAULT]";/**
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
 */class wx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ex;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Tx(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ex(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ex(t){return t===Fr?void 0:t}function Tx(t){return t.instantiationMode==="EAGER"}/**
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
 */class Ix{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Sx={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},Cx=te.INFO,Rx={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Ax=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Rx[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hc{constructor(e){this.name=e,this._logLevel=Cx,this._logHandler=Ax,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sx[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Px=(t,e)=>e.some(n=>t instanceof n);let hv,dv;function kx(){return hv||(hv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xx(){return dv||(dv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dT=new WeakMap,tf=new WeakMap,fT=new WeakMap,Oh=new WeakMap,Dp=new WeakMap;function Nx(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(dr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dT.set(n,t)}).catch(()=>{}),Dp.set(e,t),e}function Ox(t){if(tf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});tf.set(t,e)}let nf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return dr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Dx(t){nf=t(nf)}function bx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Dh(this),e,...n);return fT.set(r,e.sort?e.sort():[e]),dr(r)}:xx().includes(t)?function(...e){return t.apply(Dh(this),e),dr(dT.get(this))}:function(...e){return dr(t.apply(Dh(this),e))}}function Lx(t){return typeof t=="function"?bx(t):(t instanceof IDBTransaction&&Ox(t),Px(t,kx())?new Proxy(t,nf):t)}function dr(t){if(t instanceof IDBRequest)return Nx(t);if(Oh.has(t))return Oh.get(t);const e=Lx(t);return e!==t&&(Oh.set(t,e),Dp.set(e,t)),e}const Dh=t=>Dp.get(t);function pT(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=dr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(dr(o.result),u.oldVersion,u.newVersion,dr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Mx=["get","getKey","getAll","getAllKeys","count"],Vx=["put","add","delete","clear"],bh=new Map;function fv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bh.get(e))return bh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Vx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Mx.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&u.done]))[0]};return bh.set(e,s),s}Dx(t=>({...t,get:(e,n,r)=>fv(e,n)||t.get(e,n,r),has:(e,n)=>!!fv(e,n)||t.has(e,n)}));/**
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
 */class Fx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ux(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ux(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rf="@firebase/app",pv="0.10.16";/**
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
 */const Ln=new hc("@firebase/app"),jx="@firebase/app-compat",$x="@firebase/analytics-compat",Bx="@firebase/analytics",zx="@firebase/app-check-compat",Wx="@firebase/app-check",Hx="@firebase/auth",qx="@firebase/auth-compat",Gx="@firebase/database",Kx="@firebase/data-connect",Qx="@firebase/database-compat",Yx="@firebase/functions",Jx="@firebase/functions-compat",Xx="@firebase/installations",Zx="@firebase/installations-compat",eN="@firebase/messaging",tN="@firebase/messaging-compat",nN="@firebase/performance",rN="@firebase/performance-compat",iN="@firebase/remote-config",sN="@firebase/remote-config-compat",oN="@firebase/storage",aN="@firebase/storage-compat",lN="@firebase/firestore",uN="@firebase/vertexai",cN="@firebase/firestore-compat",hN="firebase",dN="11.0.2";/**
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
 */const sf="[DEFAULT]",fN={[rf]:"fire-core",[jx]:"fire-core-compat",[Bx]:"fire-analytics",[$x]:"fire-analytics-compat",[Wx]:"fire-app-check",[zx]:"fire-app-check-compat",[Hx]:"fire-auth",[qx]:"fire-auth-compat",[Gx]:"fire-rtdb",[Kx]:"fire-data-connect",[Qx]:"fire-rtdb-compat",[Yx]:"fire-fn",[Jx]:"fire-fn-compat",[Xx]:"fire-iid",[Zx]:"fire-iid-compat",[eN]:"fire-fcm",[tN]:"fire-fcm-compat",[nN]:"fire-perf",[rN]:"fire-perf-compat",[iN]:"fire-rc",[sN]:"fire-rc-compat",[oN]:"fire-gcs",[aN]:"fire-gcs-compat",[lN]:"fire-fst",[cN]:"fire-fst-compat",[uN]:"fire-vertex","fire-js":"fire-js",[hN]:"fire-js-all"};/**
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
 */const Tu=new Map,pN=new Map,of=new Map;function mv(t,e){try{t.container.addComponent(e)}catch(n){Ln.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function un(t){const e=t.name;if(of.has(e))return Ln.debug(`There were multiple attempts to register component ${e}.`),!1;of.set(e,t);for(const n of Tu.values())mv(n,t);for(const n of pN.values())mv(n,t);return!0}function ci(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zt(t){return t.settings!==void 0}/**
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
 */const mN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fr=new ui("app","Firebase",mN);/**
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
 */class gN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fr.create("app-deleted",{appName:this._name})}}/**
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
 */const gs=dN;function mT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:sf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw fr.create("bad-app-name",{appName:String(i)});if(n||(n=aT()),!n)throw fr.create("no-options");const s=Tu.get(i);if(s){if(Go(n,s.options)&&Go(r,s.config))return s;throw fr.create("duplicate-app",{appName:i})}const o=new Ix(i);for(const u of of.values())o.addComponent(u);const l=new gN(n,r,o);return Tu.set(i,l),l}function bp(t=sf){const e=Tu.get(t);if(!e&&t===sf&&aT())return mT();if(!e)throw fr.create("no-app",{appName:t});return e}function bt(t,e,n){var r;let i=(r=fN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ln.warn(l.join(" "));return}un(new Qt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const yN="firebase-heartbeat-database",vN=1,Ko="firebase-heartbeat-store";let Lh=null;function gT(){return Lh||(Lh=pT(yN,vN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ko)}catch(n){console.warn(n)}}}}).catch(t=>{throw fr.create("idb-open",{originalErrorMessage:t.message})})),Lh}async function _N(t){try{const n=(await gT()).transaction(Ko),r=await n.objectStore(Ko).get(yT(t));return await n.done,r}catch(e){if(e instanceof Jt)Ln.warn(e.message);else{const n=fr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ln.warn(n.message)}}}async function gv(t,e){try{const r=(await gT()).transaction(Ko,"readwrite");await r.objectStore(Ko).put(e,yT(t)),await r.done}catch(n){if(n instanceof Jt)Ln.warn(n.message);else{const r=fr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ln.warn(r.message)}}}function yT(t){return`${t.name}!${t.options.appId}`}/**
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
 */const wN=1024,EN=30*24*60*60*1e3;class TN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=yv();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=EN}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Ln.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=yv(),{heartbeatsToSend:r,unsentEntries:i}=IN(this._heartbeatsCache.heartbeats),s=Eu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Ln.warn(n),""}}}function yv(){return new Date().toISOString().substring(0,10)}function IN(t,e=wN){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),vv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),vv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return cT()?hT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _N(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function vv(t){return Eu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function CN(t){un(new Qt("platform-logger",e=>new Fx(e),"PRIVATE")),un(new Qt("heartbeat",e=>new TN(e),"PRIVATE")),bt(rf,pv,t),bt(rf,pv,"esm2017"),bt("fire-js","")}CN("");var RN="firebase",AN="11.0.2";/**
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
 */bt(RN,AN,"app");const vT="@firebase/installations",Lp="0.6.11";/**
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
 */const _T=1e4,wT=`w:${Lp}`,ET="FIS_v2",PN="https://firebaseinstallations.googleapis.com/v1",kN=60*60*1e3,xN="installations",NN="Installations";/**
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
 */const ON={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Zr=new ui(xN,NN,ON);function TT(t){return t instanceof Jt&&t.code.includes("request-failed")}/**
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
 */function IT({projectId:t}){return`${PN}/projects/${t}/installations`}function ST(t){return{token:t.token,requestStatus:2,expiresIn:bN(t.expiresIn),creationTime:Date.now()}}async function CT(t,e){const r=(await e.json()).error;return Zr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function RT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function DN(t,{refreshToken:e}){const n=RT(t);return n.append("Authorization",LN(e)),n}async function AT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function bN(t){return Number(t.replace("s","000"))}function LN(t){return`${ET} ${t}`}/**
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
 */async function MN({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=IT(t),i=RT(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:ET,appId:t.appId,sdkVersion:wT},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await AT(()=>fetch(r,l));if(u.ok){const c=await u.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:ST(c.authToken)}}else throw await CT("Create Installation",u)}/**
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
 */function PT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function VN(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const FN=/^[cdef][\w-]{21}$/,af="";function UN(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=jN(t);return FN.test(n)?n:af}catch{return af}}function jN(t){return VN(t).substr(0,22)}/**
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
 */function dc(t){return`${t.appName}!${t.appId}`}/**
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
 */const kT=new Map;function xT(t,e){const n=dc(t);NT(n,e),$N(n,e)}function NT(t,e){const n=kT.get(t);if(n)for(const r of n)r(e)}function $N(t,e){const n=BN();n&&n.postMessage({key:t,fid:e}),zN()}let Br=null;function BN(){return!Br&&"BroadcastChannel"in self&&(Br=new BroadcastChannel("[Firebase] FID Change"),Br.onmessage=t=>{NT(t.data.key,t.data.fid)}),Br}function zN(){kT.size===0&&Br&&(Br.close(),Br=null)}/**
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
 */const WN="firebase-installations-database",HN=1,ei="firebase-installations-store";let Mh=null;function Mp(){return Mh||(Mh=pT(WN,HN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ei)}}})),Mh}async function Iu(t,e){const n=dc(t),i=(await Mp()).transaction(ei,"readwrite"),s=i.objectStore(ei),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&xT(t,e.fid),e}async function OT(t){const e=dc(t),r=(await Mp()).transaction(ei,"readwrite");await r.objectStore(ei).delete(e),await r.done}async function fc(t,e){const n=dc(t),i=(await Mp()).transaction(ei,"readwrite"),s=i.objectStore(ei),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&xT(t,l.fid),l}/**
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
 */async function Vp(t){let e;const n=await fc(t.appConfig,r=>{const i=qN(r),s=GN(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===af?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function qN(t){const e=t||{fid:UN(),registrationStatus:0};return DT(e)}function GN(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Zr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=KN(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:QN(t)}:{installationEntry:e}}async function KN(t,e){try{const n=await MN(t,e);return Iu(t.appConfig,n)}catch(n){throw TT(n)&&n.customData.serverCode===409?await OT(t.appConfig):await Iu(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function QN(t){let e=await _v(t.appConfig);for(;e.registrationStatus===1;)await PT(100),e=await _v(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Vp(t);return r||n}return e}function _v(t){return fc(t,e=>{if(!e)throw Zr.create("installation-not-found");return DT(e)})}function DT(t){return YN(t)?{fid:t.fid,registrationStatus:0}:t}function YN(t){return t.registrationStatus===1&&t.registrationTime+_T<Date.now()}/**
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
 */async function JN({appConfig:t,heartbeatServiceProvider:e},n){const r=XN(t,n),i=DN(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:wT,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await AT(()=>fetch(r,l));if(u.ok){const c=await u.json();return ST(c)}else throw await CT("Generate Auth Token",u)}function XN(t,{fid:e}){return`${IT(t)}/${e}/authTokens:generate`}/**
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
 */async function Fp(t,e=!1){let n;const r=await fc(t.appConfig,s=>{if(!bT(s))throw Zr.create("not-registered");const o=s.authToken;if(!e&&tO(o))return s;if(o.requestStatus===1)return n=ZN(t,e),s;{if(!navigator.onLine)throw Zr.create("app-offline");const l=rO(s);return n=eO(t,l),l}});return n?await n:r.authToken}async function ZN(t,e){let n=await wv(t.appConfig);for(;n.authToken.requestStatus===1;)await PT(100),n=await wv(t.appConfig);const r=n.authToken;return r.requestStatus===0?Fp(t,e):r}function wv(t){return fc(t,e=>{if(!bT(e))throw Zr.create("not-registered");const n=e.authToken;return iO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function eO(t,e){try{const n=await JN(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Iu(t.appConfig,r),n}catch(n){if(TT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await OT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Iu(t.appConfig,r)}throw n}}function bT(t){return t!==void 0&&t.registrationStatus===2}function tO(t){return t.requestStatus===2&&!nO(t)}function nO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+kN}function rO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function iO(t){return t.requestStatus===1&&t.requestTime+_T<Date.now()}/**
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
 */async function sO(t){const e=t,{installationEntry:n,registrationPromise:r}=await Vp(e);return r?r.catch(console.error):Fp(e).catch(console.error),n.fid}/**
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
 */async function oO(t,e=!1){const n=t;return await aO(n),(await Fp(n,e)).token}async function aO(t){const{registrationPromise:e}=await Vp(t);e&&await e}/**
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
 */function lO(t){if(!t||!t.options)throw Vh("App Configuration");if(!t.name)throw Vh("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Vh(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Vh(t){return Zr.create("missing-app-config-values",{valueName:t})}/**
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
 */const LT="installations",uO="installations-internal",cO=t=>{const e=t.getProvider("app").getImmediate(),n=lO(e),r=ci(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},hO=t=>{const e=t.getProvider("app").getImmediate(),n=ci(e,LT).getImmediate();return{getId:()=>sO(n),getToken:i=>oO(n,i)}};function dO(){un(new Qt(LT,cO,"PUBLIC")),un(new Qt(uO,hO,"PRIVATE"))}dO();bt(vT,Lp);bt(vT,Lp,"esm2017");/**
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
 */const Su="analytics",fO="firebase_id",pO="origin",mO=60*1e3,gO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Up="https://www.googletagmanager.com/gtag/js";/**
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
 */const vt=new hc("@firebase/analytics");/**
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
 */const yO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},It=new ui("analytics","Analytics",yO);/**
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
 */function vO(t){if(!t.startsWith(Up)){const e=It.create("invalid-gtag-resource",{gtagURL:t});return vt.warn(e.message),""}return t}function MT(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function _O(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function wO(t,e){const n=_O("firebase-js-sdk-policy",{createScriptURL:vO}),r=document.createElement("script"),i=`${Up}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function EO(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function TO(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await MT(n)).find(c=>c.measurementId===i);u&&await e[u.appId]}}catch(l){vt.error(l)}t("config",i,s)}async function IO(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await MT(n);for(const u of o){const c=l.find(p=>p.measurementId===u),d=c&&e[c.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){vt.error(s)}}function SO(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await IO(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await TO(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,c]=o;t("get",l,u,c)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){vt.error(l)}}return i}function CO(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=SO(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function RO(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Up)&&n.src.includes(t))return n;return null}/**
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
 */const AO=30,PO=1e3;class kO{constructor(e={},n=PO){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const VT=new kO;function xO(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function NO(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:xO(r)},s=gO.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(l=u.error.message)}catch{}throw It.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function OO(t,e=VT,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw It.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw It.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new LO;return setTimeout(async()=>{l.abort()},mO),FT({appId:r,apiKey:i,measurementId:s},o,l,e)}async function FT(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=VT){var s;const{appId:o,measurementId:l}=t;try{await DO(r,e)}catch(u){if(l)return vt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw u}try{const u=await NO(t);return i.deleteThrottleMetadata(o),u}catch(u){const c=u;if(!bO(c)){if(i.deleteThrottleMetadata(o),l)return vt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:l};throw u}const d=Number((s=c==null?void 0:c.customData)===null||s===void 0?void 0:s.httpStatus)===503?cv(n,i.intervalMillis,AO):cv(n,i.intervalMillis),p={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,p),vt.debug(`Calling attemptFetch again in ${d} millis`),FT(t,p,r,i)}}function DO(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(It.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function bO(t){if(!(t instanceof Jt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class LO{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function MO(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function VO(){if(cT())try{await hT()}catch(t){return vt.warn(It.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return vt.warn(It.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function FO(t,e,n,r,i,s,o){var l;const u=OO(t);u.then(_=>{n[_.measurementId]=_.appId,t.options.measurementId&&_.measurementId!==t.options.measurementId&&vt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${_.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(_=>vt.error(_)),e.push(u);const c=VO().then(_=>{if(_)return r.getId()}),[d,p]=await Promise.all([u,c]);RO(s)||wO(s,d.measurementId),i("js",new Date);const m=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return m[pO]="firebase",m.update=!0,p!=null&&(m[fO]=p),i("config",d.measurementId,m),d.measurementId}/**
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
 */class UO{constructor(e){this.app=e}_delete(){return delete go[this.app.options.appId],Promise.resolve()}}let go={},Ev=[];const Tv={};let Fh="dataLayer",jO="gtag",Iv,UT,Sv=!1;function $O(){const t=[];if(uT()&&t.push("This is a browser extension environment."),lx()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=It.create("invalid-analytics-context",{errorInfo:e});vt.warn(n.message)}}function BO(t,e,n){$O();const r=t.options.appId;if(!r)throw It.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)vt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw It.create("no-api-key");if(go[r]!=null)throw It.create("already-exists",{id:r});if(!Sv){EO(Fh);const{wrappedGtag:s,gtagCore:o}=CO(go,Ev,Tv,Fh,jO);UT=s,Iv=o,Sv=!0}return go[r]=FO(t,Ev,Tv,e,Iv,Fh,n),new UO(t)}function zO(t=bp()){t=it(t);const e=ci(t,Su);return e.isInitialized()?e.getImmediate():WO(t)}function WO(t,e={}){const n=ci(t,Su);if(n.isInitialized()){const i=n.getImmediate();if(Go(e,n.getOptions()))return i;throw It.create("already-initialized")}return n.initialize({options:e})}function HO(t,e,n,r){t=it(t),MO(UT,go[t.app.options.appId],e,n,r).catch(i=>vt.error(i))}const Cv="@firebase/analytics",Rv="0.10.10";function qO(){un(new Qt(Su,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return BO(r,i,n)},"PUBLIC")),un(new Qt("analytics-internal",t,"PRIVATE")),bt(Cv,Rv),bt(Cv,Rv,"esm2017");function t(e){try{const n=e.getProvider(Su).getImmediate();return{logEvent:(r,i,s)=>HO(n,r,i,s)}}catch(n){throw It.create("interop-component-reg-failed",{reason:n})}}}qO();var Av=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gr,jT;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function w(){}w.prototype=y.prototype,E.D=y.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(S,P,N){for(var C=Array(arguments.length-2),Pt=2;Pt<arguments.length;Pt++)C[Pt-2]=arguments[Pt];return y.prototype[P].apply(S,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,w){w||(w=0);var S=Array(16);if(typeof y=="string")for(var P=0;16>P;++P)S[P]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(P=0;16>P;++P)S[P]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=E.g[0],w=E.g[1],P=E.g[2];var N=E.g[3],C=y+(N^w&(P^N))+S[0]+3614090360&4294967295;y=w+(C<<7&4294967295|C>>>25),C=N+(P^y&(w^P))+S[1]+3905402710&4294967295,N=y+(C<<12&4294967295|C>>>20),C=P+(w^N&(y^w))+S[2]+606105819&4294967295,P=N+(C<<17&4294967295|C>>>15),C=w+(y^P&(N^y))+S[3]+3250441966&4294967295,w=P+(C<<22&4294967295|C>>>10),C=y+(N^w&(P^N))+S[4]+4118548399&4294967295,y=w+(C<<7&4294967295|C>>>25),C=N+(P^y&(w^P))+S[5]+1200080426&4294967295,N=y+(C<<12&4294967295|C>>>20),C=P+(w^N&(y^w))+S[6]+2821735955&4294967295,P=N+(C<<17&4294967295|C>>>15),C=w+(y^P&(N^y))+S[7]+4249261313&4294967295,w=P+(C<<22&4294967295|C>>>10),C=y+(N^w&(P^N))+S[8]+1770035416&4294967295,y=w+(C<<7&4294967295|C>>>25),C=N+(P^y&(w^P))+S[9]+2336552879&4294967295,N=y+(C<<12&4294967295|C>>>20),C=P+(w^N&(y^w))+S[10]+4294925233&4294967295,P=N+(C<<17&4294967295|C>>>15),C=w+(y^P&(N^y))+S[11]+2304563134&4294967295,w=P+(C<<22&4294967295|C>>>10),C=y+(N^w&(P^N))+S[12]+1804603682&4294967295,y=w+(C<<7&4294967295|C>>>25),C=N+(P^y&(w^P))+S[13]+4254626195&4294967295,N=y+(C<<12&4294967295|C>>>20),C=P+(w^N&(y^w))+S[14]+2792965006&4294967295,P=N+(C<<17&4294967295|C>>>15),C=w+(y^P&(N^y))+S[15]+1236535329&4294967295,w=P+(C<<22&4294967295|C>>>10),C=y+(P^N&(w^P))+S[1]+4129170786&4294967295,y=w+(C<<5&4294967295|C>>>27),C=N+(w^P&(y^w))+S[6]+3225465664&4294967295,N=y+(C<<9&4294967295|C>>>23),C=P+(y^w&(N^y))+S[11]+643717713&4294967295,P=N+(C<<14&4294967295|C>>>18),C=w+(N^y&(P^N))+S[0]+3921069994&4294967295,w=P+(C<<20&4294967295|C>>>12),C=y+(P^N&(w^P))+S[5]+3593408605&4294967295,y=w+(C<<5&4294967295|C>>>27),C=N+(w^P&(y^w))+S[10]+38016083&4294967295,N=y+(C<<9&4294967295|C>>>23),C=P+(y^w&(N^y))+S[15]+3634488961&4294967295,P=N+(C<<14&4294967295|C>>>18),C=w+(N^y&(P^N))+S[4]+3889429448&4294967295,w=P+(C<<20&4294967295|C>>>12),C=y+(P^N&(w^P))+S[9]+568446438&4294967295,y=w+(C<<5&4294967295|C>>>27),C=N+(w^P&(y^w))+S[14]+3275163606&4294967295,N=y+(C<<9&4294967295|C>>>23),C=P+(y^w&(N^y))+S[3]+4107603335&4294967295,P=N+(C<<14&4294967295|C>>>18),C=w+(N^y&(P^N))+S[8]+1163531501&4294967295,w=P+(C<<20&4294967295|C>>>12),C=y+(P^N&(w^P))+S[13]+2850285829&4294967295,y=w+(C<<5&4294967295|C>>>27),C=N+(w^P&(y^w))+S[2]+4243563512&4294967295,N=y+(C<<9&4294967295|C>>>23),C=P+(y^w&(N^y))+S[7]+1735328473&4294967295,P=N+(C<<14&4294967295|C>>>18),C=w+(N^y&(P^N))+S[12]+2368359562&4294967295,w=P+(C<<20&4294967295|C>>>12),C=y+(w^P^N)+S[5]+4294588738&4294967295,y=w+(C<<4&4294967295|C>>>28),C=N+(y^w^P)+S[8]+2272392833&4294967295,N=y+(C<<11&4294967295|C>>>21),C=P+(N^y^w)+S[11]+1839030562&4294967295,P=N+(C<<16&4294967295|C>>>16),C=w+(P^N^y)+S[14]+4259657740&4294967295,w=P+(C<<23&4294967295|C>>>9),C=y+(w^P^N)+S[1]+2763975236&4294967295,y=w+(C<<4&4294967295|C>>>28),C=N+(y^w^P)+S[4]+1272893353&4294967295,N=y+(C<<11&4294967295|C>>>21),C=P+(N^y^w)+S[7]+4139469664&4294967295,P=N+(C<<16&4294967295|C>>>16),C=w+(P^N^y)+S[10]+3200236656&4294967295,w=P+(C<<23&4294967295|C>>>9),C=y+(w^P^N)+S[13]+681279174&4294967295,y=w+(C<<4&4294967295|C>>>28),C=N+(y^w^P)+S[0]+3936430074&4294967295,N=y+(C<<11&4294967295|C>>>21),C=P+(N^y^w)+S[3]+3572445317&4294967295,P=N+(C<<16&4294967295|C>>>16),C=w+(P^N^y)+S[6]+76029189&4294967295,w=P+(C<<23&4294967295|C>>>9),C=y+(w^P^N)+S[9]+3654602809&4294967295,y=w+(C<<4&4294967295|C>>>28),C=N+(y^w^P)+S[12]+3873151461&4294967295,N=y+(C<<11&4294967295|C>>>21),C=P+(N^y^w)+S[15]+530742520&4294967295,P=N+(C<<16&4294967295|C>>>16),C=w+(P^N^y)+S[2]+3299628645&4294967295,w=P+(C<<23&4294967295|C>>>9),C=y+(P^(w|~N))+S[0]+4096336452&4294967295,y=w+(C<<6&4294967295|C>>>26),C=N+(w^(y|~P))+S[7]+1126891415&4294967295,N=y+(C<<10&4294967295|C>>>22),C=P+(y^(N|~w))+S[14]+2878612391&4294967295,P=N+(C<<15&4294967295|C>>>17),C=w+(N^(P|~y))+S[5]+4237533241&4294967295,w=P+(C<<21&4294967295|C>>>11),C=y+(P^(w|~N))+S[12]+1700485571&4294967295,y=w+(C<<6&4294967295|C>>>26),C=N+(w^(y|~P))+S[3]+2399980690&4294967295,N=y+(C<<10&4294967295|C>>>22),C=P+(y^(N|~w))+S[10]+4293915773&4294967295,P=N+(C<<15&4294967295|C>>>17),C=w+(N^(P|~y))+S[1]+2240044497&4294967295,w=P+(C<<21&4294967295|C>>>11),C=y+(P^(w|~N))+S[8]+1873313359&4294967295,y=w+(C<<6&4294967295|C>>>26),C=N+(w^(y|~P))+S[15]+4264355552&4294967295,N=y+(C<<10&4294967295|C>>>22),C=P+(y^(N|~w))+S[6]+2734768916&4294967295,P=N+(C<<15&4294967295|C>>>17),C=w+(N^(P|~y))+S[13]+1309151649&4294967295,w=P+(C<<21&4294967295|C>>>11),C=y+(P^(w|~N))+S[4]+4149444226&4294967295,y=w+(C<<6&4294967295|C>>>26),C=N+(w^(y|~P))+S[11]+3174756917&4294967295,N=y+(C<<10&4294967295|C>>>22),C=P+(y^(N|~w))+S[2]+718787259&4294967295,P=N+(C<<15&4294967295|C>>>17),C=w+(N^(P|~y))+S[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(P+(C<<21&4294967295|C>>>11))&4294967295,E.g[2]=E.g[2]+P&4294967295,E.g[3]=E.g[3]+N&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var w=y-this.blockSize,S=this.B,P=this.h,N=0;N<y;){if(P==0)for(;N<=w;)i(this,E,N),N+=this.blockSize;if(typeof E=="string"){for(;N<y;)if(S[P++]=E.charCodeAt(N++),P==this.blockSize){i(this,S),P=0;break}}else for(;N<y;)if(S[P++]=E[N++],P==this.blockSize){i(this,S),P=0;break}}this.h=P,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var w=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=w&255,w/=256;for(this.u(E),E=Array(16),y=w=0;4>y;++y)for(var S=0;32>S;S+=8)E[w++]=this.g[y]>>>S&255;return E};function s(E,y){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=y(E)}function o(E,y){this.h=y;for(var w=[],S=!0,P=E.length-1;0<=P;P--){var N=E[P]|0;S&&N==y||(w[P]=N,S=!1)}this.g=w}var l={};function u(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return R(c(-E));for(var y=[],w=1,S=0;E>=w;S++)y[S]=E/w|0,w*=4294967296;return new o(y,0)}function d(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return R(d(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=c(Math.pow(y,8)),S=p,P=0;P<E.length;P+=8){var N=Math.min(8,E.length-P),C=parseInt(E.substring(P,P+N),y);8>N?(N=c(Math.pow(y,N)),S=S.j(N).add(c(C))):(S=S.j(w),S=S.add(c(C)))}return S}var p=u(0),m=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(k(this))return-R(this).m();for(var E=0,y=1,w=0;w<this.g.length;w++){var S=this.i(w);E+=(0<=S?S:4294967296+S)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(A(this))return"0";if(k(this))return"-"+R(this).toString(E);for(var y=c(Math.pow(E,6)),w=this,S="";;){var P=O(w,y).g;w=T(w,P.j(y));var N=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=P,A(w))return N+S;for(;6>N.length;)N="0"+N;S=N+S}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function A(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function k(E){return E.h==-1}t.l=function(E){return E=T(this,E),k(E)?-1:A(E)?0:1};function R(E){for(var y=E.g.length,w=[],S=0;S<y;S++)w[S]=~E.g[S];return new o(w,~E.h).add(m)}t.abs=function(){return k(this)?R(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],S=0,P=0;P<=y;P++){var N=S+(this.i(P)&65535)+(E.i(P)&65535),C=(N>>>16)+(this.i(P)>>>16)+(E.i(P)>>>16);S=C>>>16,N&=65535,C&=65535,w[P]=C<<16|N}return new o(w,w[w.length-1]&-2147483648?-1:0)};function T(E,y){return E.add(R(y))}t.j=function(E){if(A(this)||A(E))return p;if(k(this))return k(E)?R(this).j(R(E)):R(R(this).j(E));if(k(E))return R(this.j(R(E)));if(0>this.l(_)&&0>E.l(_))return c(this.m()*E.m());for(var y=this.g.length+E.g.length,w=[],S=0;S<2*y;S++)w[S]=0;for(S=0;S<this.g.length;S++)for(var P=0;P<E.g.length;P++){var N=this.i(S)>>>16,C=this.i(S)&65535,Pt=E.i(P)>>>16,Nr=E.i(P)&65535;w[2*S+2*P]+=C*Nr,v(w,2*S+2*P),w[2*S+2*P+1]+=N*Nr,v(w,2*S+2*P+1),w[2*S+2*P+1]+=C*Pt,v(w,2*S+2*P+1),w[2*S+2*P+2]+=N*Pt,v(w,2*S+2*P+2)}for(S=0;S<y;S++)w[S]=w[2*S+1]<<16|w[2*S];for(S=y;S<2*y;S++)w[S]=0;return new o(w,0)};function v(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function I(E,y){this.g=E,this.h=y}function O(E,y){if(A(y))throw Error("division by zero");if(A(E))return new I(p,p);if(k(E))return y=O(R(E),y),new I(R(y.g),R(y.h));if(k(y))return y=O(E,R(y)),new I(R(y.g),y.h);if(30<E.g.length){if(k(E)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var w=m,S=y;0>=S.l(E);)w=L(w),S=L(S);var P=j(w,1),N=j(S,1);for(S=j(S,2),w=j(w,2);!A(S);){var C=N.add(S);0>=C.l(E)&&(P=P.add(w),N=C),S=j(S,1),w=j(w,1)}return y=T(E,P.j(y)),new I(P,y)}for(P=p;0<=E.l(y);){for(w=Math.max(1,Math.floor(E.m()/y.m())),S=Math.ceil(Math.log(w)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),N=c(w),C=N.j(y);k(C)||0<C.l(E);)w-=S,N=c(w),C=N.j(y);A(N)&&(N=m),P=P.add(N),E=T(E,C)}return new I(P,E)}t.A=function(E){return O(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],S=0;S<y;S++)w[S]=this.i(S)&E.i(S);return new o(w,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],S=0;S<y;S++)w[S]=this.i(S)|E.i(S);return new o(w,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),w=[],S=0;S<y;S++)w[S]=this.i(S)^E.i(S);return new o(w,this.h^E.h)};function L(E){for(var y=E.g.length+1,w=[],S=0;S<y;S++)w[S]=E.i(S)<<1|E.i(S-1)>>>31;return new o(w,E.h)}function j(E,y){var w=y>>5;y%=32;for(var S=E.g.length-w,P=[],N=0;N<S;N++)P[N]=0<y?E.i(N+w)>>>y|E.i(N+w+1)<<32-y:E.i(N+w);return new o(P,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,jT=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=d,Gr=o}).apply(typeof Av<"u"?Av:typeof self<"u"?self:typeof window<"u"?window:{});var fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $T,no,BT,Dl,lf,zT,WT,HT;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof fl=="object"&&fl];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in f))break e;f=f[x]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var f=0,g=!1,x={next:function(){if(!g&&f<a.length){var D=f++;return{value:h(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,g),a.apply(h,x)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function A(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,x,D){for(var $=Array(arguments.length-2),he=2;he<arguments.length;he++)$[he-2]=arguments[he];return h.prototype[x].apply(g,$)}}function k(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function R(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(u(g)){const x=a.length||0,D=g.length||0;a.length=x+D;for(let $=0;$<D;$++)a[x+$]=g[$]}else a.push(g)}}class T{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function v(a){return/^[\s\xa0]*$/.test(a)}function I(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var L=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function j(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function E(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,h){let f,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(f in g)a[f]=g[f];for(let D=0;D<w.length;D++)f=w[D],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function P(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function N(a){l.setTimeout(()=>{throw a},0)}function C(){var a=Q;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Pt{constructor(){this.h=this.g=null}add(h,f){const g=Nr.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Nr=new T(()=>new Is,a=>a.reset());class Is{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let dn,B=!1,Q=new Pt,X=()=>{const a=l.Promise.resolve(void 0);dn=()=>{a.then(_e)}};var _e=()=>{for(var a;a=C();){try{a.h.call(a.g)}catch(f){N(f)}var h=Nr;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}B=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var fn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,h),l.removeEventListener("test",f,h)}catch{}return a}();function pn(a,h){if(Re.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(L){e:{try{O(h.nodeName);var x=!0;break e}catch{}x=!1}x||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:mn[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&pn.aa.h.call(this)}}A(pn,Re);var mn={2:"touch",3:"pen",4:"mouse"};pn.prototype.h=function(){pn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var gn="closure_listenable_"+(1e6*Math.random()|0),JS=0;function XS(a,h,f,g,x){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=x,this.key=++JS,this.da=this.fa=!1}function Sa(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ca(a){this.src=a,this.g={},this.h=0}Ca.prototype.add=function(a,h,f,g,x){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var $=Oc(a,h,g,x);return-1<$?(h=a[$],f||(h.fa=!1)):(h=new XS(h,this.src,D,!!g,x),h.fa=f,a.push(h)),h};function Nc(a,h){var f=h.type;if(f in a.g){var g=a.g[f],x=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=x)&&Array.prototype.splice.call(g,x,1),D&&(Sa(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Oc(a,h,f,g){for(var x=0;x<a.length;++x){var D=a[x];if(!D.da&&D.listener==h&&D.capture==!!f&&D.ha==g)return x}return-1}var Dc="closure_lm_"+(1e6*Math.random()|0),bc={};function Am(a,h,f,g,x){if(Array.isArray(h)){for(var D=0;D<h.length;D++)Am(a,h[D],f,g,x);return null}return f=xm(f),a&&a[gn]?a.K(h,f,c(g)?!!g.capture:!!g,x):ZS(a,h,f,!1,g,x)}function ZS(a,h,f,g,x,D){if(!h)throw Error("Invalid event type");var $=c(x)?!!x.capture:!!x,he=Mc(a);if(he||(a[Dc]=he=new Ca(a)),f=he.add(h,f,g,$,D),f.proxy)return f;if(g=e1(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)fn||(x=$),x===void 0&&(x=!1),a.addEventListener(h.toString(),g,x);else if(a.attachEvent)a.attachEvent(km(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function e1(){function a(f){return h.call(a.src,a.listener,f)}const h=t1;return a}function Pm(a,h,f,g,x){if(Array.isArray(h))for(var D=0;D<h.length;D++)Pm(a,h[D],f,g,x);else g=c(g)?!!g.capture:!!g,f=xm(f),a&&a[gn]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],f=Oc(D,f,g,x),-1<f&&(Sa(D[f]),Array.prototype.splice.call(D,f,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=Mc(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Oc(h,f,g,x)),(f=-1<a?h[a]:null)&&Lc(f))}function Lc(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[gn])Nc(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(km(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=Mc(h))?(Nc(f,a),f.h==0&&(f.src=null,h[Dc]=null)):Sa(a)}}}function km(a){return a in bc?bc[a]:bc[a]="on"+a}function t1(a,h){if(a.da)a=!0;else{h=new pn(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&Lc(a),a=f.call(g,h)}return a}function Mc(a){return a=a[Dc],a instanceof Ca?a:null}var Vc="__closure_events_fn_"+(1e9*Math.random()>>>0);function xm(a){return typeof a=="function"?a:(a[Vc]||(a[Vc]=function(h){return a.handleEvent(h)}),a[Vc])}function Ge(){ce.call(this),this.i=new Ca(this),this.M=this,this.F=null}A(Ge,ce),Ge.prototype[gn]=!0,Ge.prototype.removeEventListener=function(a,h,f,g){Pm(this,a,h,f,g)};function st(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Re(h,a);else if(h instanceof Re)h.target=h.target||a;else{var x=h;h=new Re(g,a),S(h,x)}if(x=!0,f)for(var D=f.length-1;0<=D;D--){var $=h.g=f[D];x=Ra($,g,!0,h)&&x}if($=h.g=a,x=Ra($,g,!0,h)&&x,x=Ra($,g,!1,h)&&x,f)for(D=0;D<f.length;D++)$=h.g=f[D],x=Ra($,g,!1,h)&&x}Ge.prototype.N=function(){if(Ge.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)Sa(f[g]);delete a.g[h],a.h--}}this.F=null},Ge.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},Ge.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Ra(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var x=!0,D=0;D<h.length;++D){var $=h[D];if($&&!$.da&&$.capture==f){var he=$.listener,je=$.ha||$.src;$.fa&&Nc(a.i,$),x=he.call(je,g)!==!1&&x}}return x&&!g.defaultPrevented}function Nm(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Om(a){a.g=Nm(()=>{a.g=null,a.i&&(a.i=!1,Om(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class n1 extends ce{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Om(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ss(a){ce.call(this),this.h=a,this.g={}}A(Ss,ce);var Dm=[];function bm(a){j(a.g,function(h,f){this.g.hasOwnProperty(f)&&Lc(h)},a),a.g={}}Ss.prototype.N=function(){Ss.aa.N.call(this),bm(this)},Ss.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Fc=l.JSON.stringify,r1=l.JSON.parse,i1=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Uc(){}Uc.prototype.h=null;function Lm(a){return a.h||(a.h=a.i())}function Mm(){}var Cs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function jc(){Re.call(this,"d")}A(jc,Re);function $c(){Re.call(this,"c")}A($c,Re);var Or={},Vm=null;function Aa(){return Vm=Vm||new Ge}Or.La="serverreachability";function Fm(a){Re.call(this,Or.La,a)}A(Fm,Re);function Rs(a){const h=Aa();st(h,new Fm(h))}Or.STAT_EVENT="statevent";function Um(a,h){Re.call(this,Or.STAT_EVENT,a),this.stat=h}A(Um,Re);function ot(a){const h=Aa();st(h,new Um(h,a))}Or.Ma="timingevent";function jm(a,h){Re.call(this,Or.Ma,a),this.size=h}A(jm,Re);function As(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function Ps(){this.g=!0}Ps.prototype.xa=function(){this.g=!1};function s1(a,h,f,g,x,D){a.info(function(){if(a.g)if(D)for(var $="",he=D.split("&"),je=0;je<he.length;je++){var oe=he[je].split("=");if(1<oe.length){var Ke=oe[0];oe=oe[1];var Qe=Ke.split("_");$=2<=Qe.length&&Qe[1]=="type"?$+(Ke+"="+oe+"&"):$+(Ke+"=redacted&")}}else $=null;else $=D;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+h+`
`+f+`
`+$})}function o1(a,h,f,g,x,D,$){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+h+`
`+f+`
`+D+" "+$})}function mi(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+l1(a,f)+(g?" "+g:"")})}function a1(a,h){a.info(function(){return"TIMEOUT: "+h})}Ps.prototype.info=function(){};function l1(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var x=g[1];if(Array.isArray(x)&&!(1>x.length)){var D=x[0];if(D!="noop"&&D!="stop"&&D!="close")for(var $=1;$<x.length;$++)x[$]=""}}}}return Fc(f)}catch{return h}}var Pa={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},$m={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Bc;function ka(){}A(ka,Uc),ka.prototype.g=function(){return new XMLHttpRequest},ka.prototype.i=function(){return{}},Bc=new ka;function jn(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new Ss(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Bm}function Bm(){this.i=null,this.g="",this.h=!1}var zm={},zc={};function Wc(a,h,f){a.L=1,a.v=Da(yn(h)),a.m=f,a.P=!0,Wm(a,null)}function Wm(a,h){a.F=Date.now(),xa(a),a.A=yn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),ig(f.i,"t",g),a.C=0,f=a.j.J,a.h=new Bm,a.g=Tg(a.j,f?h:null,!a.m),0<a.O&&(a.M=new n1(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(Dm[0]=x.toString()),x=Dm);for(var D=0;D<x.length;D++){var $=Am(f,x[D],g||h.handleEvent,!1,h.h||h);if(!$)break;h.g[$.key]=$}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Rs(),s1(a.i,a.u,a.A,a.l,a.R,a.m)}jn.prototype.ca=function(a){a=a.target;const h=this.M;h&&vn(a)==3?h.j():this.Y(a)},jn.prototype.Y=function(a){try{if(a==this.g)e:{const Qe=vn(this.g);var h=this.g.Ba();const vi=this.g.Z();if(!(3>Qe)&&(Qe!=3||this.g&&(this.h.h||this.g.oa()||hg(this.g)))){this.J||Qe!=4||h==7||(h==8||0>=vi?Rs(3):Rs(2)),Hc(this);var f=this.g.Z();this.X=f;t:if(Hm(this)){var g=hg(this.g);a="";var x=g.length,D=vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dr(this),ks(this);var $="";break t}this.h.i=new l.TextDecoder}for(h=0;h<x;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(D&&h==x-1)});g.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=f==200,o1(this.i,this.u,this.A,this.l,this.R,Qe,f),this.o){if(this.T&&!this.K){t:{if(this.g){var he,je=this.g;if((he=je.g?je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(he)){var oe=he;break t}}oe=null}if(f=oe)mi(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qc(this,f);else{this.o=!1,this.s=3,ot(12),Dr(this),ks(this);break e}}if(this.P){f=!0;let Ft;for(;!this.J&&this.C<$.length;)if(Ft=u1(this,$),Ft==zc){Qe==4&&(this.s=4,ot(14),f=!1),mi(this.i,this.l,null,"[Incomplete Response]");break}else if(Ft==zm){this.s=4,ot(15),mi(this.i,this.l,$,"[Invalid Chunk]"),f=!1;break}else mi(this.i,this.l,Ft,null),qc(this,Ft);if(Hm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Qe!=4||$.length!=0||this.h.h||(this.s=1,ot(16),f=!1),this.o=this.o&&f,!f)mi(this.i,this.l,$,"[Invalid Chunked Response]"),Dr(this),ks(this);else if(0<$.length&&!this.W){this.W=!0;var Ke=this.j;Ke.g==this&&Ke.ba&&!Ke.M&&(Ke.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),Xc(Ke),Ke.M=!0,ot(11))}}else mi(this.i,this.l,$,null),qc(this,$);Qe==4&&Dr(this),this.o&&!this.J&&(Qe==4?vg(this.j,this):(this.o=!1,xa(this)))}else R1(this.g),f==400&&0<$.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),Dr(this),ks(this)}}}catch{}finally{}};function Hm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function u1(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?zc:(f=Number(h.substring(f,g)),isNaN(f)?zm:(g+=1,g+f>h.length?zc:(h=h.slice(g,g+f),a.C=g+f,h)))}jn.prototype.cancel=function(){this.J=!0,Dr(this)};function xa(a){a.S=Date.now()+a.I,qm(a,a.I)}function qm(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=As(m(a.ba,a),h)}function Hc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}jn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(a1(this.i,this.A),this.L!=2&&(Rs(),ot(17)),Dr(this),this.s=2,ks(this)):qm(this,this.S-a)};function ks(a){a.j.G==0||a.J||vg(a.j,a)}function Dr(a){Hc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,bm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function qc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Gc(f.h,a))){if(!a.K&&Gc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ua(f),Va(f);else break e;Jc(f),ot(18)}}else f.za=x[1],0<f.za-f.T&&37500>x[2]&&f.F&&f.v==0&&!f.C&&(f.C=As(m(f.Za,f),6e3));if(1>=Qm(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Lr(f,11)}else if((a.K||f.g==a)&&Ua(f),!v(h))for(x=f.Da.g.parse(h),h=0;h<x.length;h++){let oe=x[h];if(f.T=oe[0],oe=oe[1],f.G==2)if(oe[0]=="c"){f.K=oe[1],f.ia=oe[2];const Ke=oe[3];Ke!=null&&(f.la=Ke,f.j.info("VER="+f.la));const Qe=oe[4];Qe!=null&&(f.Aa=Qe,f.j.info("SVER="+f.Aa));const vi=oe[5];vi!=null&&typeof vi=="number"&&0<vi&&(g=1.5*vi,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Ft=a.g;if(Ft){const $a=Ft.g?Ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($a){var D=g.h;D.g||$a.indexOf("spdy")==-1&&$a.indexOf("quic")==-1&&$a.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Kc(D,D.h),D.h=null))}if(g.D){const Zc=Ft.g?Ft.g.getResponseHeader("X-HTTP-Session-Id"):null;Zc&&(g.ya=Zc,fe(g.I,g.D,Zc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var $=a;if(g.qa=Eg(g,g.J?g.ia:null,g.W),$.K){Ym(g.h,$);var he=$,je=g.L;je&&(he.I=je),he.B&&(Hc(he),xa(he)),g.g=$}else gg(g);0<f.i.length&&Fa(f)}else oe[0]!="stop"&&oe[0]!="close"||Lr(f,7);else f.G==3&&(oe[0]=="stop"||oe[0]=="close"?oe[0]=="stop"?Lr(f,7):Yc(f):oe[0]!="noop"&&f.l&&f.l.ta(oe),f.v=0)}}Rs(4)}catch{}}var c1=class{constructor(a,h){this.g=a,this.map=h}};function Gm(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Km(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Qm(a){return a.h?1:a.g?a.g.size:0}function Gc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Kc(a,h){a.g?a.g.add(h):a.h=h}function Ym(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Gm.prototype.cancel=function(){if(this.i=Jm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Jm(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return k(a.i)}function h1(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function d1(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Xm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=d1(a),g=h1(a),x=g.length,D=0;D<x;D++)h.call(void 0,g[D],f&&f[D],a)}var Zm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function f1(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),x=null;if(0<=g){var D=a[f].substring(0,g);x=a[f].substring(g+1)}else D=a[f];h(D,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function br(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof br){this.h=a.h,Na(this,a.j),this.o=a.o,this.g=a.g,Oa(this,a.s),this.l=a.l;var h=a.i,f=new Os;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),eg(this,f),this.m=a.m}else a&&(h=String(a).match(Zm))?(this.h=!1,Na(this,h[1]||"",!0),this.o=xs(h[2]||""),this.g=xs(h[3]||"",!0),Oa(this,h[4]),this.l=xs(h[5]||"",!0),eg(this,h[6]||"",!0),this.m=xs(h[7]||"")):(this.h=!1,this.i=new Os(null,this.h))}br.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Ns(h,tg,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Ns(h,tg,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ns(f,f.charAt(0)=="/"?g1:m1,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ns(f,v1)),a.join("")};function yn(a){return new br(a)}function Na(a,h,f){a.j=f?xs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Oa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function eg(a,h,f){h instanceof Os?(a.i=h,_1(a.i,a.h)):(f||(h=Ns(h,y1)),a.i=new Os(h,a.h))}function fe(a,h,f){a.i.set(h,f)}function Da(a){return fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function xs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ns(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,p1),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function p1(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var tg=/[#\/\?@]/g,m1=/[#\?:]/g,g1=/[#\?]/g,y1=/[#\?@]/g,v1=/#/g;function Os(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function $n(a){a.g||(a.g=new Map,a.h=0,a.i&&f1(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=Os.prototype,t.add=function(a,h){$n(this),this.i=null,a=gi(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function ng(a,h){$n(a),h=gi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function rg(a,h){return $n(a),h=gi(a,h),a.g.has(h)}t.forEach=function(a,h){$n(this),this.g.forEach(function(f,g){f.forEach(function(x){a.call(h,x,g,this)},this)},this)},t.na=function(){$n(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const x=a[g];for(let D=0;D<x.length;D++)f.push(h[g])}return f},t.V=function(a){$n(this);let h=[];if(typeof a=="string")rg(this,a)&&(h=h.concat(this.g.get(gi(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return $n(this),this.i=null,a=gi(this,a),rg(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function ig(a,h,f){ng(a,h),0<f.length&&(a.i=null,a.g.set(gi(a,h),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const D=encodeURIComponent(String(g)),$=this.V(g);for(g=0;g<$.length;g++){var x=D;$[g]!==""&&(x+="="+encodeURIComponent(String($[g]))),a.push(x)}}return this.i=a.join("&")};function gi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function _1(a,h){h&&!a.j&&($n(a),a.i=null,a.g.forEach(function(f,g){var x=g.toLowerCase();g!=x&&(ng(this,g),ig(this,x,f))},a)),a.j=h}function w1(a,h){const f=new Ps;if(l.Image){const g=new Image;g.onload=_(Bn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=_(Bn,f,"TestLoadImage: error",!1,h,g),g.onabort=_(Bn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(Bn,f,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function E1(a,h){const f=new Ps,g=new AbortController,x=setTimeout(()=>{g.abort(),Bn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(x),D.ok?Bn(f,"TestPingServer: ok",!0,h):Bn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),Bn(f,"TestPingServer: error",!1,h)})}function Bn(a,h,f,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(f)}catch{}}function T1(){this.g=new i1}function I1(a,h,f){const g=f||"";try{Xm(a,function(x,D){let $=x;c(x)&&($=Fc(x)),h.push(g+D+"="+encodeURIComponent($))})}catch(x){throw h.push(g+"type="+encodeURIComponent("_badmap")),x}}function ba(a){this.l=a.Ub||null,this.j=a.eb||!1}A(ba,Uc),ba.prototype.g=function(){return new La(this.l,this.j)},ba.prototype.i=function(a){return function(){return a}}({});function La(a,h){Ge.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(La,Ge),t=La.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,bs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ds(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,bs(this)),this.g&&(this.readyState=3,bs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;sg(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function sg(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ds(this):bs(this),this.readyState==3&&sg(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ds(this))},t.Qa=function(a){this.g&&(this.response=a,Ds(this))},t.ga=function(){this.g&&Ds(this)};function Ds(a){a.readyState=4,a.l=null,a.j=null,a.v=null,bs(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function bs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(La.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function og(a){let h="";return j(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Qc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=og(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):fe(a,h,f))}function Se(a){Ge.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(Se,Ge);var S1=/^https?$/i,C1=["POST","PUT"];t=Se.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Bc.g(),this.v=this.o?Lm(this.o):Lm(Bc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){ag(this,D);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)f.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())f.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(D=>D.toLowerCase()=="content-type"),x=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(C1,h,void 0))||g||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,$]of f)this.g.setRequestHeader(D,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cg(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){ag(this,D)}};function ag(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,lg(a),Ma(a)}function lg(a){a.A||(a.A=!0,st(a,"complete"),st(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,st(this,"complete"),st(this,"abort"),Ma(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ma(this,!0)),Se.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ug(this):this.bb())},t.bb=function(){ug(this)};function ug(a){if(a.h&&typeof o<"u"&&(!a.v[1]||vn(a)!=4||a.Z()!=2)){if(a.u&&vn(a)==4)Nm(a.Ea,0,a);else if(st(a,"readystatechange"),vn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=$===0){var x=String(a.D).match(Zm)[1]||null;!x&&l.self&&l.self.location&&(x=l.self.location.protocol.slice(0,-1)),g=!S1.test(x?x.toLowerCase():"")}f=g}if(f)st(a,"complete"),st(a,"success");else{a.m=6;try{var D=2<vn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",lg(a)}}finally{Ma(a)}}}}function Ma(a,h){if(a.g){cg(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||st(a,"ready");try{f.onreadystatechange=g}catch{}}}function cg(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function vn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<vn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),r1(h)}};function hg(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function R1(a){const h={};a=(a.g&&2<=vn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(v(a[g]))continue;var f=P(a[g]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const D=h[x]||[];h[x]=D,D.push(f)}E(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ls(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function dg(a){this.Aa=0,this.i=[],this.j=new Ps,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ls("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ls("baseRetryDelayMs",5e3,a),this.cb=Ls("retryDelaySeedMs",1e4,a),this.Wa=Ls("forwardChannelMaxRetries",2,a),this.wa=Ls("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Gm(a&&a.concurrentRequestLimit),this.Da=new T1,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=dg.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){ot(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Eg(this,null,this.W),Fa(this)};function Yc(a){if(fg(a),a.G==3){var h=a.U++,f=yn(a.I);if(fe(f,"SID",a.K),fe(f,"RID",h),fe(f,"TYPE","terminate"),Ms(a,f),h=new jn(a,a.j,h),h.L=2,h.v=Da(yn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=h.v,f=!0),f||(h.g=Tg(h.j,null),h.g.ea(h.v)),h.F=Date.now(),xa(h)}wg(a)}function Va(a){a.g&&(Xc(a),a.g.cancel(),a.g=null)}function fg(a){Va(a),a.u&&(l.clearTimeout(a.u),a.u=null),Ua(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Fa(a){if(!Km(a.h)&&!a.s){a.s=!0;var h=a.Ga;dn||X(),B||(dn(),B=!0),Q.add(h,a),a.B=0}}function A1(a,h){return Qm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=As(m(a.Ga,a,h),_g(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new jn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),S(D,this.S)):D=this.S),this.m!==null||this.O||(x.H=D,D=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=mg(this,x,h),f=yn(this.I),fe(f,"RID",a),fe(f,"CVER",22),this.D&&fe(f,"X-HTTP-Session-Id",this.D),Ms(this,f),D&&(this.O?h="headers="+encodeURIComponent(String(og(D)))+"&"+h:this.m&&Qc(f,this.m,D)),Kc(this.h,x),this.Ua&&fe(f,"TYPE","init"),this.P?(fe(f,"$req",h),fe(f,"SID","null"),x.T=!0,Wc(x,f,null)):Wc(x,f,h),this.G=2}}else this.G==3&&(a?pg(this,a):this.i.length==0||Km(this.h)||pg(this))};function pg(a,h){var f;h?f=h.l:f=a.U++;const g=yn(a.I);fe(g,"SID",a.K),fe(g,"RID",f),fe(g,"AID",a.T),Ms(a,g),a.m&&a.o&&Qc(g,a.m,a.o),f=new jn(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=mg(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Kc(a.h,f),Wc(f,g,h)}function Ms(a,h){a.H&&j(a.H,function(f,g){fe(h,g,f)}),a.l&&Xm({},function(f,g){fe(h,g,f)})}function mg(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var x=a.i;let D=-1;for(;;){const $=["count="+f];D==-1?0<f?(D=x[0].g,$.push("ofs="+D)):D=0:$.push("ofs="+D);let he=!0;for(let je=0;je<f;je++){let oe=x[je].g;const Ke=x[je].map;if(oe-=D,0>oe)D=Math.max(0,x[je].g-100),he=!1;else try{I1(Ke,$,"req"+oe+"_")}catch{g&&g(Ke)}}if(he){g=$.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function gg(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;dn||X(),B||(dn(),B=!0),Q.add(h,a),a.v=0}}function Jc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=As(m(a.Fa,a),_g(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,yg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=As(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),Va(this),yg(this))};function Xc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function yg(a){a.g=new jn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=yn(a.qa);fe(h,"RID","rpc"),fe(h,"SID",a.K),fe(h,"AID",a.T),fe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&fe(h,"TO",a.ja),fe(h,"TYPE","xmlhttp"),Ms(a,h),a.m&&a.o&&Qc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Da(yn(h)),f.m=null,f.P=!0,Wm(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Va(this),Jc(this),ot(19))};function Ua(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function vg(a,h){var f=null;if(a.g==h){Ua(a),Xc(a),a.g=null;var g=2}else if(Gc(a.h,h))f=h.D,Ym(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var x=a.B;g=Aa(),st(g,new jm(g,f)),Fa(a)}else gg(a);else if(x=h.s,x==3||x==0&&0<h.X||!(g==1&&A1(a,h)||g==2&&Jc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),x){case 1:Lr(a,5);break;case 4:Lr(a,10);break;case 3:Lr(a,6);break;default:Lr(a,2)}}}function _g(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Lr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const x=!g;g=new br(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Na(g,"https"),Da(g),x?w1(g.toString(),f):E1(g.toString(),f)}else ot(2);a.G=0,a.l&&a.l.sa(h),wg(a),fg(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function wg(a){if(a.G=0,a.ka=[],a.l){const h=Jm(a.h);(h.length!=0||a.i.length!=0)&&(R(a.ka,h),R(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Eg(a,h,f){var g=f instanceof br?yn(f):new br(f);if(g.g!="")h&&(g.g=h+"."+g.g),Oa(g,g.s);else{var x=l.location;g=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;var D=new br(null);g&&Na(D,g),h&&(D.g=h),x&&Oa(D,x),f&&(D.l=f),g=D}return f=a.D,h=a.ya,f&&h&&fe(g,f,h),fe(g,"VER",a.la),Ms(a,g),g}function Tg(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Se(new ba({eb:f})):new Se(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ig(){}t=Ig.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ja(){}ja.prototype.g=function(a,h){return new _t(a,h)};function _t(a,h){Ge.call(this),this.g=new dg(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!v(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!v(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new yi(this)}A(_t,Ge),_t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){Yc(this.g)},_t.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Fc(a),a=f);h.i.push(new c1(h.Ya++,a)),h.G==3&&Fa(h)},_t.prototype.N=function(){this.g.l=null,delete this.j,Yc(this.g),delete this.g,_t.aa.N.call(this)};function Sg(a){jc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}A(Sg,jc);function Cg(){$c.call(this),this.status=1}A(Cg,$c);function yi(a){this.g=a}A(yi,Ig),yi.prototype.ua=function(){st(this.g,"a")},yi.prototype.ta=function(a){st(this.g,new Sg(a))},yi.prototype.sa=function(a){st(this.g,new Cg)},yi.prototype.ra=function(){st(this.g,"b")},ja.prototype.createWebChannel=ja.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,HT=function(){return new ja},WT=function(){return Aa()},zT=Or,lf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Pa.NO_ERROR=0,Pa.TIMEOUT=8,Pa.HTTP_ERROR=6,Dl=Pa,$m.COMPLETE="complete",BT=$m,Mm.EventType=Cs,Cs.OPEN="a",Cs.CLOSE="b",Cs.ERROR="c",Cs.MESSAGE="d",Ge.prototype.listen=Ge.prototype.K,no=Mm,Se.prototype.listenOnce=Se.prototype.L,Se.prototype.getLastError=Se.prototype.Ka,Se.prototype.getLastErrorCode=Se.prototype.Ba,Se.prototype.getStatus=Se.prototype.Z,Se.prototype.getResponseJson=Se.prototype.Oa,Se.prototype.getResponseText=Se.prototype.oa,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Ha,$T=Se}).apply(typeof fl<"u"?fl:typeof self<"u"?self:typeof window<"u"?window:{});const Pv="@firebase/firestore";/**
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
 */const ti=new hc("@firebase/firestore");function Ei(){return ti.logLevel}function z(t,...e){if(ti.logLevel<=te.DEBUG){const n=e.map(jp);ti.debug(`Firestore (${ys}): ${t}`,...n)}}function Mn(t,...e){if(ti.logLevel<=te.ERROR){const n=e.map(jp);ti.error(`Firestore (${ys}): ${t}`,...n)}}function is(t,...e){if(ti.logLevel<=te.WARN){const n=e.map(jp);ti.warn(`Firestore (${ys}): ${t}`,...n)}}function jp(t){if(typeof t=="string")return t;try{/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${ys}) INTERNAL ASSERTION FAILED: `+t;throw Mn(e),new Error(e)}function ae(t,e){t||K()}function J(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Jt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class qT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class GO{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ze.UNAUTHENTICATED))}shutdown(){}}class KO{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QO{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ae(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ae(typeof r.accessToken=="string"),new qT(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ae(e===null||typeof e=="string"),new Ze(e)}}class YO{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class JO{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new YO(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class XO{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZO{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){ae(this.o===void 0);const r=s=>{s.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ae(typeof n.token=="string"),this.R=n.token,new XO(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function eD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class GT{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=eD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function re(t,e){return t<e?-1:t>e?1:0}function ss(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class Le{static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Qo{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ye extends Qo{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const tD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends Qo{construct(e,n,r){return new ze(e,n,r)}static isValidIdentifier(e){return tD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(n)}static emptyPath(){return new ze([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(ye.fromString(e))}static fromName(e){return new q(ye.fromString(e).popFirst(5))}static empty(){return new q(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new ye(e.slice()))}}function nD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new vr(i,q.empty(),e)}function rD(t){return new vr(t.readTime,t.key,-1)}class vr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new vr(Y.min(),q.empty(),-1)}static max(){return new vr(Y.max(),q.empty(),-1)}}function iD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:re(t.largestBatchId,e.largestBatchId))}/**
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
 */const sD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function vs(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==sD)throw t;z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new b((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{o[c]=d,++l,l===s&&r(o)},d=>i(d))}})}static doWhile(e,n){return new b((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function aD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _s(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class pc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}pc.oe=-1;function mc(t){return t==null}function Cu(t){return t===0&&1/t==-1/0}function lD(t){return typeof t=="number"&&Number.isInteger(t)&&!Cu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function uD(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=kv(e)),e=cD(t.get(n),e);return kv(e)}function cD(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function kv(t){return t+""}/**
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
 */function xv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function KT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ie{constructor(e,n){this.comparator=e,this.root=n||Be.EMPTY}insert(e,n){return new Ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Be.BLACK,null,null))}remove(e){return new Ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Be.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pl(this.root,e,this.comparator,!1)}getReverseIterator(){return new pl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pl(this.root,e,this.comparator,!0)}}class pl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Be.RED,this.left=i??Be.EMPTY,this.right=s??Be.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Be.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Be.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Be.EMPTY=null,Be.RED=!0,Be.BLACK=!1;Be.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Be(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Me{constructor(e){this.comparator=e,this.data=new Ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Nv(this.data.getIterator())}getIteratorFrom(e){return new Nv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Me)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Me(this.comparator);return n.data=e,n}}class Nv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class QT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new QT("Invalid base64 string: "+s):s}}(e);return new qe(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const hD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _r(t){if(ae(!!t),typeof t=="string"){let e=0;const n=hD.exec(t);if(ae(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function wr(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
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
 */function $p(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function gc(t){const e=t.mapValue.fields.__previous_value__;return $p(e)?gc(e):e}function Yo(t){const e=_r(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
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
 */class dD{constructor(e,n,r,i,s,o,l,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=c}}class Jo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Jo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Jo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ml={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Er(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$p(t)?4:pD(t)?9007199254740991:fD(t)?10:11:K()}function cn(t,e){if(t===e)return!0;const n=Er(t);if(n!==Er(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Yo(t).isEqual(Yo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=_r(i.timestampValue),l=_r(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return wr(i.bytesValue).isEqual(wr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),l=Ae(s.doubleValue);return o===l?Cu(o)===Cu(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ss(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(xv(o)!==xv(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!cn(o[u],l[u])))return!1;return!0}(t,e);default:return K()}}function Xo(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function os(t,e){if(t===e)return 0;const n=Er(t),r=Er(e);if(n!==r)return re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return re(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ov(t.timestampValue,e.timestampValue);case 4:return Ov(Yo(t),Yo(e));case 5:return re(t.stringValue,e.stringValue);case 6:return function(s,o){const l=wr(s),u=wr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let c=0;c<l.length&&c<u.length;c++){const d=re(l[c],u[c]);if(d!==0)return d}return re(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=re(Ae(s.latitude),Ae(o.latitude));return l!==0?l:re(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Dv(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,c,d;const p=s.fields||{},m=o.fields||{},_=(l=p.value)===null||l===void 0?void 0:l.arrayValue,A=(u=m.value)===null||u===void 0?void 0:u.arrayValue,k=re(((c=_==null?void 0:_.values)===null||c===void 0?void 0:c.length)||0,((d=A==null?void 0:A.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:Dv(_,A)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ml.mapValue&&o===ml.mapValue)return 0;if(s===ml.mapValue)return 1;if(o===ml.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),c=o.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=re(u[p],d[p]);if(m!==0)return m;const _=os(l[u[p]],c[d[p]]);if(_!==0)return _}return re(u.length,d.length)}(t.mapValue,e.mapValue);default:throw K()}}function Ov(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return re(t,e);const n=_r(t),r=_r(e),i=re(n.seconds,r.seconds);return i!==0?i:re(n.nanos,r.nanos)}function Dv(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=os(n[i],r[i]);if(s)return s}return re(n.length,r.length)}function as(t){return uf(t)}function uf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_r(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return wr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=uf(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${uf(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function bl(t){switch(Er(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gc(t);return e?16+bl(e):16;case 5:return 2*t.stringValue.length;case 6:return wr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+bl(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return hi(r.fields,(s,o)=>{i+=s.length+bl(o)}),i}(t.mapValue);default:throw K()}}function cf(t){return!!t&&"integerValue"in t}function Bp(t){return!!t&&"arrayValue"in t}function bv(t){return!!t&&"nullValue"in t}function Lv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ll(t){return!!t&&"mapValue"in t}function fD(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function yo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return hi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=yo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function pD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Nt{constructor(e){this.value=e}static empty(){return new Nt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ll(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yo(n)}setAll(e){let n=ze.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=yo(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ll(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ll(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){hi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Nt(yo(this.value))}}function YT(t){const e=[];return hi(t.fields,(n,r)=>{const i=new ze([n]);if(Ll(r)){const s=YT(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Wt(e)}/**
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
 */class Ru{constructor(e,n){this.position=e,this.inclusive=n}}function Mv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=os(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Vv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Au{constructor(e,n="asc"){this.field=e,this.dir=n}}function mD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class JT{}class De extends JT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new yD(e,n,r):n==="array-contains"?new wD(e,r):n==="in"?new ED(e,r):n==="not-in"?new TD(e,r):n==="array-contains-any"?new ID(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new vD(e,r):new _D(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(os(n,this.value)):n!==null&&Er(this.value)===Er(n)&&this.matchesComparison(os(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends JT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new hn(e,n)}matches(e){return XT(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function XT(t){return t.op==="and"}function ZT(t){return gD(t)&&XT(t)}function gD(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function hf(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+as(t.value);if(ZT(t))return t.filters.map(e=>hf(e)).join(",");{const e=t.filters.map(n=>hf(n)).join(",");return`${t.op}(${e})`}}function eI(t,e){return t instanceof De?function(r,i){return i instanceof De&&r.op===i.op&&r.field.isEqual(i.field)&&cn(r.value,i.value)}(t,e):t instanceof hn?function(r,i){return i instanceof hn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&eI(o,i.filters[l]),!0):!1}(t,e):void K()}function tI(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${as(n.value)}`}(t):t instanceof hn?function(n){return n.op.toString()+" {"+n.getFilters().map(tI).join(" ,")+"}"}(t):"Filter"}class yD extends De{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class vD extends De{constructor(e,n){super(e,"in",n),this.keys=nI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _D extends De{constructor(e,n){super(e,"not-in",n),this.keys=nI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function nI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class wD extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bp(n)&&Xo(n.arrayValue,this.value)}}class ED extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xo(this.value.arrayValue,n)}}class TD extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Xo(this.value.arrayValue,n)}}class ID extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Xo(this.value.arrayValue,r))}}/**
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
 */class SD{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function Fv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new SD(t,e,n,r,i,s,o)}function zp(t){const e=J(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),mc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>as(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>as(r)).join(",")),e.ue=n}return e.ue}function Wp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!eI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Vv(t.startAt,e.startAt)&&Vv(t.endAt,e.endAt)}function df(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class yc{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function CD(t,e,n,r,i,s,o,l){return new yc(t,e,n,r,i,s,o,l)}function Hp(t){return new yc(t)}function Uv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function RD(t){return t.collectionGroup!==null}function vo(t){const e=J(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Me(ze.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(l=l.add(c.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Au(s,r))}),n.has(ze.keyField().canonicalString())||e.ce.push(new Au(ze.keyField(),r))}return e.ce}function sn(t){const e=J(t);return e.le||(e.le=AD(e,vo(t))),e.le}function AD(t,e){if(t.limitType==="F")return Fv(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Au(i.field,s)});const n=t.endAt?new Ru(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ru(t.startAt.position,t.startAt.inclusive):null;return Fv(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ff(t,e,n){return new yc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function vc(t,e){return Wp(sn(t),sn(e))&&t.limitType===e.limitType}function rI(t){return`${zp(sn(t))}|lt:${t.limitType}`}function Ti(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>tI(i)).join(", ")}]`),mc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>as(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>as(i)).join(",")),`Target(${r})`}(sn(t))}; limitType=${t.limitType})`}function _c(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of vo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const c=Mv(o,l,u);return o.inclusive?c<=0:c<0}(r.startAt,vo(r),i)||r.endAt&&!function(o,l,u){const c=Mv(o,l,u);return o.inclusive?c>=0:c>0}(r.endAt,vo(r),i))}(t,e)}function PD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function iI(t){return(e,n)=>{let r=!1;for(const i of vo(t)){const s=kD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function kD(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),c=l.data.field(s);return u!==null&&c!==null?os(u,c):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){hi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return KT(this.inner)}size(){return this.innerSize}}/**
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
 */const xD=new Ie(q.comparator);function Vn(){return xD}const sI=new Ie(q.comparator);function ro(...t){let e=sI;for(const n of t)e=e.insert(n.key,n);return e}function oI(t){let e=sI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zr(){return _o()}function aI(){return _o()}function _o(){return new di(t=>t.toString(),(t,e)=>t.isEqual(e))}const ND=new Ie(q.comparator),OD=new Me(q.comparator);function ne(...t){let e=OD;for(const n of t)e=e.add(n);return e}const DD=new Me(re);function bD(){return DD}/**
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
 */function qp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Cu(e)?"-0":e}}function lI(t){return{integerValue:""+t}}function LD(t,e){return lD(e)?lI(e):qp(t,e)}/**
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
 */class wc{constructor(){this._=void 0}}function MD(t,e,n){return t instanceof Pu?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&$p(s)&&(s=gc(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Zo?cI(t,e):t instanceof ea?hI(t,e):function(i,s){const o=uI(i,s),l=jv(o)+jv(i.Pe);return cf(o)&&cf(i.Pe)?lI(l):qp(i.serializer,l)}(t,e)}function VD(t,e,n){return t instanceof Zo?cI(t,e):t instanceof ea?hI(t,e):n}function uI(t,e){return t instanceof ku?function(r){return cf(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Pu extends wc{}class Zo extends wc{constructor(e){super(),this.elements=e}}function cI(t,e){const n=dI(e);for(const r of t.elements)n.some(i=>cn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ea extends wc{constructor(e){super(),this.elements=e}}function hI(t,e){let n=dI(e);for(const r of t.elements)n=n.filter(i=>!cn(i,r));return{arrayValue:{values:n}}}class ku extends wc{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function jv(t){return Ae(t.integerValue||t.doubleValue)}function dI(t){return Bp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function FD(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Zo&&i instanceof Zo||r instanceof ea&&i instanceof ea?ss(r.elements,i.elements,cn):r instanceof ku&&i instanceof ku?cn(r.Pe,i.Pe):r instanceof Pu&&i instanceof Pu}(t.transform,e.transform)}class UD{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ml(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ec{}function fI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Gp(t.key,on.none()):new pa(t.key,t.data,on.none());{const n=t.data,r=Nt.empty();let i=new Me(ze.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new fi(t.key,r,new Wt(i.toArray()),on.none())}}function jD(t,e,n){t instanceof pa?function(i,s,o){const l=i.value.clone(),u=Bv(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof fi?function(i,s,o){if(!Ml(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Bv(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(pI(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function wo(t,e,n,r){return t instanceof pa?function(s,o,l,u){if(!Ml(s.precondition,o))return l;const c=s.value.clone(),d=zv(s.fieldTransforms,u,o);return c.setAll(d),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof fi?function(s,o,l,u){if(!Ml(s.precondition,o))return l;const c=zv(s.fieldTransforms,u,o),d=o.data;return d.setAll(pI(s)),d.setAll(c),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Ml(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function $D(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=uI(r.transform,i||null);s!=null&&(n===null&&(n=Nt.empty()),n.set(r.field,s))}return n||null}function $v(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ss(r,i,(s,o)=>FD(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class pa extends Ec{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class fi extends Ec{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function pI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Bv(t,e,n){const r=new Map;ae(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,VD(o,l,n[i]))}return r}function zv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,MD(s,o,e))}return r}class Gp extends Ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class BD extends Ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zD{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&jD(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=wo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=wo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=aI();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=fI(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&ss(this.mutations,e.mutations,(n,r)=>$v(n,r))&&ss(this.baseMutations,e.baseMutations,(n,r)=>$v(n,r))}}class Kp{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ae(e.mutations.length===r.length);let i=function(){return ND}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Kp(e,n,r,i)}}/**
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
 */class WD{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class HD{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var ke,ie;function qD(t){switch(t){default:return K();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function mI(t){if(t===void 0)return Mn("GRPC error has no .code"),V.UNKNOWN;switch(t){case ke.OK:return V.OK;case ke.CANCELLED:return V.CANCELLED;case ke.UNKNOWN:return V.UNKNOWN;case ke.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case ke.INTERNAL:return V.INTERNAL;case ke.UNAVAILABLE:return V.UNAVAILABLE;case ke.UNAUTHENTICATED:return V.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case ke.NOT_FOUND:return V.NOT_FOUND;case ke.ALREADY_EXISTS:return V.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return V.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case ke.ABORTED:return V.ABORTED;case ke.OUT_OF_RANGE:return V.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return V.UNIMPLEMENTED;case ke.DATA_LOSS:return V.DATA_LOSS;default:return K()}}(ie=ke||(ke={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function GD(){return new TextEncoder}/**
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
 */const KD=new Gr([4294967295,4294967295],0);function Wv(t){const e=GD().encode(t),n=new jT;return n.update(e),new Uint8Array(n.digest())}function Hv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Gr([n,r],0),new Gr([i,s],0)]}class Qp{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new io(`Invalid padding: ${n}`);if(r<0)throw new io(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new io(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new io(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ie=Gr.fromNumber(this.Te)}Ee(e,n,r){let i=e.add(n.multiply(Gr.fromNumber(r)));return i.compare(KD)===1&&(i=new Gr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Wv(e),[r,i]=Hv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Qp(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Te===0)return;const n=Wv(e),[r,i]=Hv(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class io extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Tc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ma.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Tc(Y.min(),i,new Ie(re),Vn(),ne())}}class ma{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ma(r,n,ne(),ne(),ne())}}/**
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
 */class Vl{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class gI{constructor(e,n){this.targetId=e,this.me=n}}class yI{constructor(e,n,r=qe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class qv{constructor(){this.fe=0,this.ge=Gv(),this.pe=qe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new ma(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Gv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ae(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class QD{constructor(e){this.Le=e,this.Be=new Map,this.ke=Vn(),this.qe=gl(),this.Qe=gl(),this.Ke=new Ie(re)}$e(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(n,e.Ve):this.We(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.We(n,e.key,e.Ve)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.je(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.me.count,i=this.Ye(n);if(i){const s=i.target;if(df(s))if(r===0){const o=new q(s.path);this.We(n,o,tt.newNoDocument(o,Y.min()))}else ae(r===1);else{const o=this.Ze(n);if(o!==r){const l=this.Xe(e),u=l?this.et(l,e,o):1;if(u!==0){this.He(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=wr(r).toUint8Array()}catch(u){if(u instanceof QT)return is("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Qp(o,i,s)}catch(u){return is(u instanceof io?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Te===0?null:l}et(e,n,r){return n.me.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Ye(o);if(l){if(s.current&&df(l.target)){const u=new q(l.target.path);this.st(u).has(o)||this.ot(o,u)||this.We(o,u,tt.newNoDocument(u,e))}s.be&&(n.set(o,s.ve()),s.Ce())}});let r=ne();this.Qe.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const c=this.Ye(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Tc(e,n,this.Ke,this.ke,r);return this.ke=Vn(),this.qe=gl(),this.Qe=gl(),this.Ke=new Ie(re),i}Ue(e,n){if(!this.je(e))return;const r=this.ot(e,n.key)?2:0;this.ze(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e)),this.Qe=this.Qe.insert(n.key,this._t(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.ot(e,n)?i.Fe(n,1):i.Me(n),this.Qe=this.Qe.insert(n,this._t(n).delete(e)),this.Qe=this.Qe.insert(n,this._t(n).add(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let n=this.Be.get(e);return n||(n=new qv,this.Be.set(e,n)),n}_t(e){let n=this.Qe.get(e);return n||(n=new Me(re),this.Qe=this.Qe.insert(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Me(re),this.qe=this.qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||z("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new qv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}ot(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function gl(){return new Ie(q.comparator)}function Gv(){return new Ie(q.comparator)}const YD={asc:"ASCENDING",desc:"DESCENDING"},JD={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},XD={and:"AND",or:"OR"};class ZD{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function pf(t,e){return t.useProto3Json||mc(e)?e:{value:e}}function xu(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function eb(t,e){return xu(t,e.toTimestamp())}function an(t){return ae(!!t),Y.fromTimestamp(function(n){const r=_r(n);return new Le(r.seconds,r.nanos)}(t))}function Yp(t,e){return mf(t,e).canonicalString()}function mf(t,e){const n=function(i){return new ye(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function _I(t){const e=ye.fromString(t);return ae(SI(e)),e}function gf(t,e){return Yp(t.databaseId,e.path)}function Uh(t,e){const n=_I(e);if(n.get(1)!==t.databaseId.projectId)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(EI(n))}function wI(t,e){return Yp(t.databaseId,e)}function tb(t){const e=_I(t);return e.length===4?ye.emptyPath():EI(e)}function yf(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function EI(t){return ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Kv(t,e,n){return{name:gf(t,e),fields:n.value.mapValue.fields}}function nb(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?(ae(d===void 0||typeof d=="string"),qe.fromBase64String(d||"")):(ae(d===void 0||d instanceof Buffer||d instanceof Uint8Array),qe.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(c){const d=c.code===void 0?V.UNKNOWN:mI(c.code);return new H(d,c.message||"")}(o);n=new yI(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Uh(t,r.document.name),s=an(r.document.updateTime),o=r.document.createTime?an(r.document.createTime):Y.min(),l=new Nt({mapValue:{fields:r.document.fields}}),u=tt.newFoundDocument(i,s,o,l),c=r.targetIds||[],d=r.removedTargetIds||[];n=new Vl(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Uh(t,r.document),s=r.readTime?an(r.readTime):Y.min(),o=tt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Vl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Uh(t,r.document),s=r.removedTargetIds||[];n=new Vl([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new HD(i,s),l=r.targetId;n=new gI(l,o)}}return n}function rb(t,e){let n;if(e instanceof pa)n={update:Kv(t,e.key,e.value)};else if(e instanceof Gp)n={delete:gf(t,e.key)};else if(e instanceof fi)n={update:Kv(t,e.key,e.data),updateMask:db(e.fieldMask)};else{if(!(e instanceof BD))return K();n={verify:gf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Pu)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Zo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ea)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ku)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:eb(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function ib(t,e){return t&&t.length>0?(ae(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?an(i.updateTime):an(s);return o.isEqual(Y.min())&&(o=an(s)),new UD(o,i.transformResults||[])}(n,e))):[]}function sb(t,e){return{documents:[wI(t,e.path)]}}function ob(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=wI(t,i);const s=function(c){if(c.length!==0)return II(hn.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(d=>function(m){return{field:Ii(m.field),direction:ub(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=pf(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ct:n,parent:i}}function ab(t){let e=tb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ae(r===1);const d=n.from[0];d.allDescendants?i=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(p){const m=TI(p);return m instanceof hn&&ZT(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(A){return new Au(Si(A.field),function(R){switch(R){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,mc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,_=p.values||[];return new Ru(_,m)}(n.startAt));let c=null;return n.endAt&&(c=function(p){const m=!p.before,_=p.values||[];return new Ru(_,m)}(n.endAt)),CD(e,i,o,s,l,"F",u,c)}function lb(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function TI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Si(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Si(n.unaryFilter.field);return De.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Si(n.unaryFilter.field);return De.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Si(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return De.create(Si(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return hn.create(n.compositeFilter.filters.map(r=>TI(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function ub(t){return YD[t]}function cb(t){return JD[t]}function hb(t){return XD[t]}function Ii(t){return{fieldPath:t.canonicalString()}}function Si(t){return ze.fromServerFormat(t.fieldPath)}function II(t){return t instanceof De?function(n){if(n.op==="=="){if(Lv(n.value))return{unaryFilter:{field:Ii(n.field),op:"IS_NAN"}};if(bv(n.value))return{unaryFilter:{field:Ii(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Lv(n.value))return{unaryFilter:{field:Ii(n.field),op:"IS_NOT_NAN"}};if(bv(n.value))return{unaryFilter:{field:Ii(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ii(n.field),op:cb(n.op),value:n.value}}}(t):t instanceof hn?function(n){const r=n.getFilters().map(i=>II(i));return r.length===1?r[0]:{compositeFilter:{op:hb(n.op),filters:r}}}(t):K()}function db(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function SI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class fb{constructor(e){this.ht=e}}function pb(t){const e=ab({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?ff(e,e.limit,"L"):e}/**
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
 */class mb{constructor(){this.ln=new gb}addToCollectionParentIndex(e,n){return this.ln.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.ln.getEntries(n))}addFieldIndex(e,n){return b.resolve()}deleteFieldIndex(e,n){return b.resolve()}deleteAllFieldIndexes(e){return b.resolve()}createTargetIndexes(e,n){return b.resolve()}getDocumentsMatchingTarget(e,n){return b.resolve(null)}getIndexType(e,n){return b.resolve(0)}getFieldIndexes(e,n){return b.resolve([])}getNextCollectionGroupToUpdate(e){return b.resolve(null)}getMinOffset(e,n){return b.resolve(vr.min())}getMinOffsetFromCollectionGroup(e,n){return b.resolve(vr.min())}updateCollectionGroup(e,n,r){return b.resolve()}updateIndexEntries(e,n){return b.resolve()}}class gb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Me(ye.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Me(ye.comparator)).toArray()}}/**
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
 */const Qv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */function Yv([t,e],[n,r]){const i=re(t,n);return i===0?re(e,r):i}class yb{constructor(e){this.Gn=e,this.buffer=new Me(Yv),this.zn=0}jn(){return++this.zn}Hn(e){const n=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Yv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class vb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){z("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){_s(n)?z("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await vs(n)}await this.Yn(3e5)})}}class _b{constructor(e,n){this.Zn=e,this.params=n}calculateTargetCount(e,n){return this.Zn.Xn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return b.resolve(pc.oe);const r=new yb(n);return this.Zn.forEachTarget(e,i=>r.Hn(i.sequenceNumber)).next(()=>this.Zn.er(e,i=>r.Hn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Zn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Zn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(z("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(Qv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qv):this.tr(e,n))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,n){let r,i,s,o,l,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),i=this.params.maximumSequenceNumbersToCollect):i=p,o=Date.now(),this.nthSequenceNumber(e,i))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(s=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(c=Date.now(),Ei()<=te.DEBUG&&z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${p} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:p})))}}function wb(t,e){return new _b(t,e)}/**
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
 */class Eb{constructor(){this.changes=new di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Tb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Ib{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&wo(r.mutation,i,Wt.empty(),Le.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const i=zr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ro();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Vn();const o=_o(),l=function(){return _o()}();return n.forEach((u,c)=>{const d=r.get(c.key);i.has(c.key)&&(d===void 0||d.mutation instanceof fi)?s=s.insert(c.key,c):d!==void 0?(o.set(c.key,d.mutation.getFieldMask()),wo(d.mutation,c,d.mutation.getFieldMask(),Le.now())):o.set(c.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>o.set(c,d)),n.forEach((c,d)=>{var p;return l.set(c,new Tb(d,(p=o.get(c))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=_o();let i=new Ie((o,l)=>o-l),s=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=r.get(u)||Wt.empty();d=l.applyToLocalView(c,d),r.set(u,d);const p=(i.get(l.batchId)||ne()).add(u);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),c=u.key,d=u.value,p=aI();d.forEach(m=>{if(!s.has(m)){const _=fI(n.get(m),r.get(m));_!==null&&p.set(m,_),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,p))}return b.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):RD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):b.resolve(zr());let l=-1,u=s;return o.next(c=>b.forEach(c,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(d)?b.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,ne())).next(d=>({batchId:l,changes:oI(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=ro();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=ro();return this.indexManager.getCollectionParents(e,s).next(l=>b.forEach(l,u=>{const c=function(p,m){return new yc(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,c)=>{const d=c.getKey();o.get(d)===null&&(o=o.insert(d,tt.newInvalidDocument(d)))});let l=ro();return o.forEach((u,c)=>{const d=s.get(u);d!==void 0&&wo(d.mutation,c,Wt.empty(),Le.now()),_c(n,c)&&(l=l.insert(u,c))}),l})}}/**
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
 */class Sb{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,n){return b.resolve(this.Tr.get(n))}saveBundleMetadata(e,n){return this.Tr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:an(i.createTime)}}(n)),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Ir.get(n))}saveNamedQuery(e,n){return this.Ir.set(n.name,function(i){return{name:i.name,query:pb(i.bundledQuery),readTime:an(i.readTime)}}(n)),b.resolve()}}/**
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
 */class Cb{constructor(){this.overlays=new Ie(q.comparator),this.Er=new Map}getOverlay(e,n){return b.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zr();return b.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.Tt(e,n,s)}),b.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Er.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Er.delete(r)),b.resolve()}getOverlaysForCollection(e,n,r){const i=zr(),s=n.length+1,o=new q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return b.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ie((c,d)=>c-d);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let d=s.get(c.largestBatchId);d===null&&(d=zr(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const l=zr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>l.set(c,d)),!(l.size()>=i)););return b.resolve(l)}Tt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Er.get(i.largestBatchId).delete(r.key);this.Er.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new WD(n,r));let s=this.Er.get(n);s===void 0&&(s=ne(),this.Er.set(n,s)),this.Er.set(n,s.add(r.key))}}/**
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
 */class Rb{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(e){return b.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,b.resolve()}}/**
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
 */class Jp{constructor(){this.dr=new Me(Ve.Ar),this.Rr=new Me(Ve.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,n){const r=new Ve(e,n);this.dr=this.dr.add(r),this.Rr=this.Rr.add(r)}mr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gr(new Ve(e,n))}pr(e,n){e.forEach(r=>this.removeReference(r,n))}yr(e){const n=new q(new ye([])),r=new Ve(n,e),i=new Ve(n,e+1),s=[];return this.Rr.forEachInRange([r,i],o=>{this.gr(o),s.push(o.key)}),s}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const n=new q(new ye([])),r=new Ve(n,e),i=new Ve(n,e+1);let s=ne();return this.Rr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ve(e,0),r=this.dr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ve{constructor(e,n){this.key=e,this.br=n}static Ar(e,n){return q.comparator(e.key,n.key)||re(e.br,n.br)}static Vr(e,n){return re(e.br,n.br)||q.comparator(e.key,n.key)}}/**
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
 */class Ab{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Dr=1,this.vr=new Me(Ve.Ar)}checkEmpty(e){return b.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new zD(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.vr=this.vr.add(new Ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this.Cr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Fr(r),s=i<0?0:i;return b.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return b.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ve(n,0),i=new Ve(n,Number.POSITIVE_INFINITY),s=[];return this.vr.forEachInRange([r,i],o=>{const l=this.Cr(o.br);s.push(l)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Me(re);return n.forEach(i=>{const s=new Ve(i,0),o=new Ve(i,Number.POSITIVE_INFINITY);this.vr.forEachInRange([s,o],l=>{r=r.add(l.br)})}),b.resolve(this.Mr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new Ve(new q(s),0);let l=new Me(re);return this.vr.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(l=l.add(u.br)),!0)},o),b.resolve(this.Mr(l))}Mr(e){const n=[];return e.forEach(r=>{const i=this.Cr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ae(this.Or(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.vr;return b.forEach(n.mutations,i=>{const s=new Ve(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.vr=r})}Ln(e){}containsKey(e,n){const r=new Ve(n,0),i=this.vr.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,b.resolve()}Or(e,n){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const n=this.Fr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Pb{constructor(e){this.Nr=e,this.docs=function(){return new Ie(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Nr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(n))}getEntries(e,n){let r=Vn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():tt.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Vn();const o=n.path,l=new q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||iD(rD(d),r)<=0||(i.has(d.key)||_c(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return b.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Lr(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new kb(this)}getSize(e){return b.resolve(this.size)}}class kb extends Eb{constructor(e){super(),this.hr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.hr.addEntry(e,i)):this.hr.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.hr.getEntry(e,n)}getAllFromCache(e,n){return this.hr.getEntries(e,n)}}/**
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
 */class xb{constructor(e){this.persistence=e,this.Br=new di(n=>zp(n),Wp),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.kr=0,this.qr=new Jp,this.targetCount=0,this.Qr=ls.qn()}forEachTarget(e,n){return this.Br.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.kr&&(this.kr=n),b.resolve()}Un(e){this.Br.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Qr=new ls(n),this.highestTargetId=n),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,n){return this.Un(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.Un(n),b.resolve()}removeTargetData(e,n){return this.Br.delete(n.target),this.qr.yr(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Br.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Br.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Br.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.qr.mr(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.qr.pr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.qr.yr(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.qr.Sr(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.qr.containsKey(n))}}/**
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
 */class CI{constructor(e,n){this.Kr={},this.overlays={},this.$r=new pc(0),this.Ur=!1,this.Ur=!0,this.Wr=new Rb,this.referenceDelegate=e(this),this.Gr=new xb(this),this.indexManager=new mb,this.remoteDocumentCache=function(i){return new Pb(i)}(r=>this.referenceDelegate.zr(r)),this.serializer=new fb(n),this.jr=new Sb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Cb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Kr[e.toKey()];return r||(r=new Ab(n,this.referenceDelegate),this.Kr[e.toKey()]=r),r}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,n,r){z("MemoryPersistence","Starting transaction:",e);const i=new Nb(this.$r.next());return this.referenceDelegate.Hr(),r(i).next(s=>this.referenceDelegate.Jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Yr(e,n){return b.or(Object.values(this.Kr).map(r=>()=>r.containsKey(e,n)))}}class Nb extends oD{constructor(e){super(),this.currentSequenceNumber=e}}class Xp{constructor(e){this.persistence=e,this.Zr=new Jp,this.Xr=null}static ei(e){return new Xp(e)}get ti(){if(this.Xr)return this.Xr;throw K()}addReference(e,n,r){return this.Zr.addReference(r,n),this.ti.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Zr.removeReference(r,n),this.ti.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.ti.add(n.toString()),b.resolve()}removeTarget(e,n){this.Zr.yr(n.targetId).forEach(i=>this.ti.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.ti.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Hr(){this.Xr=new Set}Jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.ti,r=>{const i=q.fromPath(r);return this.ni(e,i).next(s=>{s||n.removeEntry(i,Y.min())})}).next(()=>(this.Xr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ni(e,n).next(r=>{r?this.ti.delete(n.toString()):this.ti.add(n.toString())})}zr(e){return 0}ni(e,n){return b.or([()=>b.resolve(this.Zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Yr(e,n)])}}class Nu{constructor(e,n){this.persistence=e,this.ri=new di(r=>uD(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=wb(this,n)}static ei(e,n){return new Nu(e,n)}Hr(){}Jr(e){return b.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Xn(e){const n=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}nr(e){let n=0;return this.er(e,r=>{n++}).next(()=>n)}er(e,n){return b.forEach(this.ri,(r,i)=>this.ir(e,r,i).next(s=>s?b.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.Lr(e,o=>this.ir(e,o,n).next(l=>{l||(r++,s.removeEntry(o,Y.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ri.set(n,e.currentSequenceNumber),b.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),b.resolve()}removeReference(e,n,r){return this.ri.set(r,e.currentSequenceNumber),b.resolve()}updateLimboDocument(e,n){return this.ri.set(n,e.currentSequenceNumber),b.resolve()}zr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=bl(e.data.value)),n}ir(e,n,r){return b.or([()=>this.persistence.Yr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.ri.get(n);return b.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Zp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Wi=r,this.Gi=i}static zi(e,n){let r=ne(),i=ne();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Zp(e,n.fromCache,r,i)}}/**
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
 */class Ob{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Db{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return ax()?8:aD(rt())>0?6:4}()}initialize(e,n){this.Zi=e,this.indexManager=n,this.ji=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Xi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.es(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Ob;return this.ts(e,n,o).next(l=>{if(s.result=l,this.Hi)return this.ns(e,n,o,l.size)})}).next(()=>s.result)}ns(e,n,r,i){return r.documentReadCount<this.Ji?(Ei()<=te.DEBUG&&z("QueryEngine","SDK will not create cache indexes for query:",Ti(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),b.resolve()):(Ei()<=te.DEBUG&&z("QueryEngine","Query:",Ti(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Yi*i?(Ei()<=te.DEBUG&&z("QueryEngine","The SDK decides to create cache indexes for query:",Ti(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):b.resolve())}Xi(e,n){if(Uv(n))return b.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=ff(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ne(...s);return this.Zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.rs(n,l);return this.ss(n,c,o,u.readTime)?this.Xi(e,ff(n,null,"F")):this.os(e,c,n,u)}))})))}es(e,n,r,i){return Uv(n)||i.isEqual(Y.min())?b.resolve(null):this.Zi.getDocuments(e,r).next(s=>{const o=this.rs(n,s);return this.ss(n,o,r,i)?b.resolve(null):(Ei()<=te.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ti(n)),this.os(e,o,n,nD(i,-1)).next(l=>l))})}rs(e,n){let r=new Me(iI(e));return n.forEach((i,s)=>{_c(e,s)&&(r=r.add(s))}),r}ss(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ts(e,n,r){return Ei()<=te.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Ti(n)),this.Zi.getDocumentsMatchingQuery(e,n,vr.min(),r)}os(e,n,r,i){return this.Zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class bb{constructor(e,n,r,i){this.persistence=e,this._s=n,this.serializer=i,this.us=new Ie(re),this.cs=new di(s=>zp(s),Wp),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(r)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ib(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.us))}}function Lb(t,e,n,r){return new bb(t,e,n,r)}async function RI(t,e){const n=J(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ps(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=ne();for(const c of i){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){l.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(c=>({Ts:c,removedBatchIds:o,addedBatchIds:l}))})})}function Mb(t,e){const n=J(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.hs.newChangeBuffer({trackRemovals:!0});return function(l,u,c,d){const p=c.batch,m=p.keys();let _=b.resolve();return m.forEach(A=>{_=_.next(()=>d.getEntry(u,A)).next(k=>{const R=c.docVersions.get(A);ae(R!==null),k.version.compareTo(R)<0&&(p.applyToRemoteDocument(k,c),k.isValidDocument()&&(k.setReadTime(c.commitVersion),d.addEntry(k)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(u,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let c=0;c<l.mutationResults.length;++c)l.mutationResults[c].transformResults.length>0&&(u=u.add(l.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function AI(t){const e=J(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Gr.getLastRemoteSnapshotVersion(n))}function Vb(t,e){const n=J(t),r=e.snapshotVersion;let i=n.us;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.hs.newChangeBuffer({trackRemovals:!0});i=n.us;const l=[];e.targetChanges.forEach((d,p)=>{const m=i.get(p);if(!m)return;l.push(n.Gr.removeMatchingKeys(s,d.removedDocuments,p).next(()=>n.Gr.addMatchingKeys(s,d.addedDocuments,p)));let _=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(qe.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),i=i.insert(p,_),function(k,R,T){return k.resumeToken.approximateByteSize()===0||R.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,_,d)&&l.push(n.Gr.updateTargetData(s,_))});let u=Vn(),c=ne();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),l.push(Fb(s,o,e.documentUpdates).next(d=>{u=d.Is,c=d.Es})),!r.isEqual(Y.min())){const d=n.Gr.getLastRemoteSnapshotVersion(s).next(p=>n.Gr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(d)}return b.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.us=i,s))}function Fb(t,e,n){let r=ne(),i=ne();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Vn();return n.forEach((l,u)=>{const c=s.get(l);u.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):z("LocalStore","Ignoring outdated watch update for ",l,". Current version:",c.version," Watch version:",u.version)}),{Is:o,Es:i}})}function Ub(t,e){const n=J(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jb(t,e){const n=J(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Gr.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.Gr.allocateTargetId(r).next(o=>(i=new nr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Gr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.us.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.us=n.us.insert(r.targetId,r),n.cs.set(e,r.targetId)),r})}async function vf(t,e,n){const r=J(t),i=r.us.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!_s(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.us=r.us.remove(e),r.cs.delete(i.target)}function Jv(t,e,n){const r=J(t);let i=Y.min(),s=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,d){const p=J(u),m=p.cs.get(d);return m!==void 0?b.resolve(p.us.get(m)):p.Gr.getTargetData(c,d)}(r,o,sn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Gr.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r._s.getDocumentsMatchingQuery(o,e,n?i:Y.min(),n?s:ne())).next(l=>($b(r,PD(e),l),{documents:l,ds:s})))}function $b(t,e,n){let r=t.ls.get(e)||Y.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ls.set(e,r)}class Xv{constructor(){this.activeTargetIds=bD()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Bb{constructor(){this._o=new Xv,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,n,r){this.ao[e]=n}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Xv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class zb{uo(e){}shutdown(){}}/**
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
 */class Zv{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let yl=null;function jh(){return yl===null?yl=function(){return 268435456+Math.round(2147483648*Math.random())}():yl++,"0x"+yl.toString(16)}/**
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
 */const Wb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Hb{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Xe="WebChannelConnection";class qb extends class{get Co(){return!1}constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Fo=r+"://"+n.host,this.Mo=`projects/${i}/databases/${s}`,this.xo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}Oo(n,r,i,s,o){const l=jh(),u=this.No(n,r.toUriEncodedString());z("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const c={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(c,s,o),this.Bo(n,u,c,i).then(d=>(z("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw is("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",u,"request:",i),d})}ko(n,r,i,s,o,l){return this.Oo(n,r,i,s,o)}Lo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ys}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}No(n,r){const i=Wb[n];return`${this.Fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,n,r,i){const s=jh();return new Promise((o,l)=>{const u=new $T;u.setWithCredentials(!0),u.listenOnce(BT.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Dl.NO_ERROR:const d=u.getResponseJson();z(Xe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),o(d);break;case Dl.TIMEOUT:z(Xe,`RPC '${e}' ${s} timed out`),l(new H(V.DEADLINE_EXCEEDED,"Request time out"));break;case Dl.HTTP_ERROR:const p=u.getStatus();if(z(Xe,`RPC '${e}' ${s} failed with status:`,p,"response text:",u.getResponseText()),p>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const _=m==null?void 0:m.error;if(_&&_.status&&_.message){const A=function(R){const T=R.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(T)>=0?T:V.UNKNOWN}(_.status);l(new H(A,_.message))}else l(new H(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(V.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{z(Xe,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);z(Xe,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",c,r,15)})}qo(e,n,r){const i=jh(),s=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=HT(),l=WT(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Lo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const d=s.join("");z(Xe,`Creating RPC '${e}' stream ${i}: ${d}`,u);const p=o.createWebChannel(d,u);let m=!1,_=!1;const A=new Hb({Eo:R=>{_?z(Xe,`Not sending because RPC '${e}' stream ${i} is closed:`,R):(m||(z(Xe,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),z(Xe,`RPC '${e}' stream ${i} sending:`,R),p.send(R))},Ao:()=>p.close()}),k=(R,T,v)=>{R.listen(T,I=>{try{v(I)}catch(O){setTimeout(()=>{throw O},0)}})};return k(p,no.EventType.OPEN,()=>{_||(z(Xe,`RPC '${e}' stream ${i} transport opened.`),A.So())}),k(p,no.EventType.CLOSE,()=>{_||(_=!0,z(Xe,`RPC '${e}' stream ${i} transport closed`),A.Do())}),k(p,no.EventType.ERROR,R=>{_||(_=!0,is(Xe,`RPC '${e}' stream ${i} transport errored:`,R),A.Do(new H(V.UNAVAILABLE,"The operation could not be completed")))}),k(p,no.EventType.MESSAGE,R=>{var T;if(!_){const v=R.data[0];ae(!!v);const I=v,O=(I==null?void 0:I.error)||((T=I[0])===null||T===void 0?void 0:T.error);if(O){z(Xe,`RPC '${e}' stream ${i} received error:`,O);const L=O.status;let j=function(w){const S=ke[w];if(S!==void 0)return mI(S)}(L),E=O.message;j===void 0&&(j=V.INTERNAL,E="Unknown error status: "+L+" with message "+O.message),_=!0,A.Do(new H(j,E)),p.close()}else z(Xe,`RPC '${e}' stream ${i} received:`,v),A.vo(v)}}),k(l,zT.STAT_EVENT,R=>{R.stat===lf.PROXY?z(Xe,`RPC '${e}' stream ${i} detected buffering proxy`):R.stat===lf.NOPROXY&&z(Xe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.bo()},0),A}}function $h(){return typeof document<"u"?document:null}/**
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
 */function Ic(t){return new ZD(t,!0)}/**
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
 */class PI{constructor(e,n,r=1e3,i=1.5,s=6e4){this.li=e,this.timerId=n,this.Qo=r,this.Ko=i,this.$o=s,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const n=Math.floor(this.Uo+this.Ho()),r=Math.max(0,Date.now()-this.Go),i=Math.max(0,n-r);i>0&&z("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Uo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,i,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class kI{constructor(e,n,r,i,s,o,l,u){this.li=e,this.Yo=r,this.Zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new PI(e,n)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,n){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Mn(n.toString()),Mn("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(n)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),n=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Xo===n&&this.I_(r,i)},r=>{e(()=>{const i=new H(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.E_(i)})})}I_(e,n){const r=this.T_(this.Xo);this.stream=this.d_(e,n),this.stream.Ro(()=>{r(()=>this.listener.Ro())}),this.stream.mo(()=>{r(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(i=>{r(()=>this.E_(i))}),this.stream.onMessage(i=>{r(()=>++this.n_==1?this.A_(i):this.onNext(i))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return n=>{this.li.enqueueAndForget(()=>this.Xo===e?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Gb extends kI{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}d_(e,n){return this.connection.qo("Listen",e,n)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const n=nb(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?an(o.readTime):Y.min()}(e);return this.listener.R_(n,r)}V_(e){const n={};n.database=yf(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=df(u)?{documents:sb(s,u)}:{query:ob(s,u).ct},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=vI(s,o.resumeToken);const c=pf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=xu(s,o.snapshotVersion.toTimestamp());const c=pf(s,o.expectedCount);c!==null&&(l.expectedCount=c)}return l}(this.serializer,e);const r=lb(this.serializer,e);r&&(n.labels=r),this.c_(n)}m_(e){const n={};n.database=yf(this.serializer),n.removeTarget=e,this.c_(n)}}class Kb extends kI{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,n){return this.connection.qo("Write",e,n)}A_(e){return ae(!!e.streamToken),this.lastStreamToken=e.streamToken,ae(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const n=ib(e.writeResults,e.commitTime),r=an(e.commitTime);return this.listener.y_(r,n)}w_(){const e={};e.database=yf(this.serializer),this.c_(e)}g_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>rb(this.serializer,r))};this.c_(n)}}/**
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
 */class Qb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.S_=!1}b_(){if(this.S_)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,n,r,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Oo(e,mf(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(V.UNKNOWN,s.toString())})}ko(e,n,r,i,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.ko(e,mf(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(V.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class Yb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(Mn(n),this.C_=!1):z("OnlineStateTracker",n)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class Jb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=s,this.Q_.uo(o=>{r.enqueueAndForget(async()=>{pi(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=J(u);c.k_.add(4),await ga(c),c.K_.set("Unknown"),c.k_.delete(4),await Sc(c)}(this))})}),this.K_=new Yb(r,i)}}async function Sc(t){if(pi(t))for(const e of t.q_)await e(!0)}async function ga(t){for(const e of t.q_)await e(!1)}function xI(t,e){const n=J(t);n.B_.has(e.targetId)||(n.B_.set(e.targetId,e),rm(n)?nm(n):ws(n).s_()&&tm(n,e))}function em(t,e){const n=J(t),r=ws(n);n.B_.delete(e),r.s_()&&NI(n,e),n.B_.size===0&&(r.s_()?r.a_():pi(n)&&n.K_.set("Unknown"))}function tm(t,e){if(t.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ws(t).V_(e)}function NI(t,e){t.U_.xe(e),ws(t).m_(e)}function nm(t){t.U_=new QD({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.B_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ws(t).start(),t.K_.F_()}function rm(t){return pi(t)&&!ws(t).i_()&&t.B_.size>0}function pi(t){return J(t).k_.size===0}function OI(t){t.U_=void 0}async function Xb(t){t.K_.set("Online")}async function Zb(t){t.B_.forEach((e,n)=>{tm(t,e)})}async function eL(t,e){OI(t),rm(t)?(t.K_.O_(e),nm(t)):t.K_.set("Unknown")}async function tL(t,e,n){if(t.K_.set("Online"),e instanceof yI&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.B_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.B_.delete(l),i.U_.removeTarget(l))}(t,e)}catch(r){z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ou(t,r)}else if(e instanceof Vl?t.U_.$e(e):e instanceof gI?t.U_.Je(e):t.U_.Ge(e),!n.isEqual(Y.min()))try{const r=await AI(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.U_.it(o);return l.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.B_.get(c);d&&s.B_.set(c,d.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,c)=>{const d=s.B_.get(u);if(!d)return;s.B_.set(u,d.withResumeToken(qe.EMPTY_BYTE_STRING,d.snapshotVersion)),NI(s,u);const p=new nr(d.target,u,c,d.sequenceNumber);tm(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){z("RemoteStore","Failed to raise snapshot:",r),await Ou(t,r)}}async function Ou(t,e,n){if(!_s(e))throw e;t.k_.add(1),await ga(t),t.K_.set("Offline"),n||(n=()=>AI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),t.k_.delete(1),await Sc(t)})}function DI(t,e){return e().catch(n=>Ou(t,n,e))}async function Cc(t){const e=J(t),n=Tr(e);let r=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;nL(e);)try{const i=await Ub(e.localStore,r);if(i===null){e.L_.length===0&&n.a_();break}r=i.batchId,rL(e,i)}catch(i){await Ou(e,i)}bI(e)&&LI(e)}function nL(t){return pi(t)&&t.L_.length<10}function rL(t,e){t.L_.push(e);const n=Tr(t);n.s_()&&n.f_&&n.g_(e.mutations)}function bI(t){return pi(t)&&!Tr(t).i_()&&t.L_.length>0}function LI(t){Tr(t).start()}async function iL(t){Tr(t).w_()}async function sL(t){const e=Tr(t);for(const n of t.L_)e.g_(n.mutations)}async function oL(t,e,n){const r=t.L_.shift(),i=Kp.from(r,e,n);await DI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Cc(t)}async function aL(t,e){e&&Tr(t).f_&&await async function(r,i){if(function(o){return qD(o)&&o!==V.ABORTED}(i.code)){const s=r.L_.shift();Tr(r).__(),await DI(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Cc(r)}}(t,e),bI(t)&&LI(t)}async function e_(t,e){const n=J(t);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const r=pi(n);n.k_.add(3),await ga(n),r&&n.K_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.k_.delete(3),await Sc(n)}async function lL(t,e){const n=J(t);e?(n.k_.delete(2),await Sc(n)):e||(n.k_.add(2),await ga(n),n.K_.set("Unknown"))}function ws(t){return t.W_||(t.W_=function(n,r,i){const s=J(n);return s.b_(),new Gb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:Xb.bind(null,t),mo:Zb.bind(null,t),po:eL.bind(null,t),R_:tL.bind(null,t)}),t.q_.push(async e=>{e?(t.W_.__(),rm(t)?nm(t):t.K_.set("Unknown")):(await t.W_.stop(),OI(t))})),t.W_}function Tr(t){return t.G_||(t.G_=function(n,r,i){const s=J(n);return s.b_(),new Kb(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Ro:()=>Promise.resolve(),mo:iL.bind(null,t),po:aL.bind(null,t),p_:sL.bind(null,t),y_:oL.bind(null,t)}),t.q_.push(async e=>{e?(t.G_.__(),await Cc(t)):(await t.G_.stop(),t.L_.length>0&&(z("RemoteStore",`Stopping write stream with ${t.L_.length} pending writes`),t.L_=[]))})),t.G_}/**
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
 */class im{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new im(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sm(t,e){if(Mn("AsyncQueue",`${e}: ${t}`),_s(t))return new H(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Wi{static emptySet(e){return new Wi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=ro(),this.sortedSet=new Ie(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Wi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Wi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class t_{constructor(){this.z_=new Ie(q.comparator)}track(e){const n=e.doc.key,r=this.z_.get(n);r?e.type!==0&&r.type===3?this.z_=this.z_.insert(n,e):e.type===3&&r.type!==1?this.z_=this.z_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.z_=this.z_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.z_=this.z_.remove(n):e.type===1&&r.type===2?this.z_=this.z_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.z_=this.z_.insert(n,{type:2,doc:e.doc}):K():this.z_=this.z_.insert(n,e)}j_(){const e=[];return this.z_.inorderTraversal((n,r)=>{e.push(r)}),e}}class us{constructor(e,n,r,i,s,o,l,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new us(e,n,Wi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&vc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class uL{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class cL{constructor(){this.queries=n_(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(n,r){const i=J(n),s=i.queries;i.queries=n_(),s.forEach((o,l)=>{for(const u of l.J_)u.onError(r)})})(this,new H(V.ABORTED,"Firestore shutting down"))}}function n_(){return new di(t=>rI(t),vc)}async function MI(t,e){const n=J(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Y_()&&e.Z_()&&(r=2):(s=new uL,r=e.Z_()?0:1);try{switch(r){case 0:s.H_=await n.onListen(i,!0);break;case 1:s.H_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=sm(o,`Initialization of query '${Ti(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.J_.push(e),e.ea(n.onlineState),s.H_&&e.ta(s.H_)&&om(n)}async function VI(t,e){const n=J(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.J_.indexOf(e);o>=0&&(s.J_.splice(o,1),s.J_.length===0?i=e.Z_()?0:1:!s.Y_()&&e.Z_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function hL(t,e){const n=J(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.J_)l.ta(i)&&(r=!0);o.H_=i}}r&&om(n)}function dL(t,e,n){const r=J(t),i=r.queries.get(e);if(i)for(const s of i.J_)s.onError(n);r.queries.delete(e)}function om(t){t.X_.forEach(e=>{e.next()})}var _f,r_;(r_=_f||(_f={})).na="default",r_.Cache="cache";class FI{constructor(e,n,r){this.query=e,this.ra=n,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=r||{}}ta(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new us(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ia?this.oa(e)&&(this.ra.next(e),n=!0):this._a(e,this.onlineState)&&(this.aa(e),n=!0),this.sa=e,n}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let n=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),n=!0),n}_a(e,n){if(!e.fromCache||!this.Z_())return!0;const r=n!=="Offline";return(!this.options.ua||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const n=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}aa(e){e=us.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==_f.Cache}}/**
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
 */class UI{constructor(e){this.key=e}}class jI{constructor(e){this.key=e}}class fL{constructor(e,n){this.query=e,this.da=n,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=ne(),this.mutatedKeys=ne(),this.Va=iI(e),this.ma=new Wi(this.Va)}get fa(){return this.da}ga(e,n){const r=n?n.pa:new t_,i=n?n.ma:this.ma;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((d,p)=>{const m=i.get(d),_=_c(this.query,p)?p:null,A=!!m&&this.mutatedKeys.has(m.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let R=!1;m&&_?m.data.isEqual(_.data)?A!==k&&(r.track({type:3,doc:_}),R=!0):this.ya(m,_)||(r.track({type:2,doc:_}),R=!0,(u&&this.Va(_,u)>0||c&&this.Va(_,c)<0)&&(l=!0)):!m&&_?(r.track({type:0,doc:_}),R=!0):m&&!_&&(r.track({type:1,doc:m}),R=!0,(u||c)&&(l=!0)),R&&(_?(o=o.add(_),s=k?s.add(d):s.delete(d)):(o=o.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),s=s.delete(d.key),r.track({type:1,doc:d})}return{ma:o,pa:r,ss:l,mutatedKeys:s}}ya(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((d,p)=>function(_,A){const k=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return k(_)-k(A)}(d.type,p.type)||this.Va(d.doc,p.doc)),this.wa(r),i=i!=null&&i;const l=n&&!i?this.Sa():[],u=this.Ra.size===0&&this.current&&!i?1:0,c=u!==this.Aa;return this.Aa=u,o.length!==0||c?{snapshot:new us(this.query,e.ma,s,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),ba:l}:{ba:l}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new t_,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(n=>this.da=this.da.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.da=this.da.delete(n)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=ne(),this.ma.forEach(r=>{this.Da(r.key)&&(this.Ra=this.Ra.add(r.key))});const n=[];return e.forEach(r=>{this.Ra.has(r)||n.push(new jI(r))}),this.Ra.forEach(r=>{e.has(r)||n.push(new UI(r))}),n}va(e){this.da=e.ds,this.Ra=ne();const n=this.ga(e.documents);return this.applyChanges(n,!0)}Ca(){return us.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class pL{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class mL{constructor(e){this.key=e,this.Fa=!1}}class gL{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new di(l=>rI(l),vc),this.Oa=new Map,this.Na=new Set,this.La=new Ie(q.comparator),this.Ba=new Map,this.ka=new Jp,this.qa={},this.Qa=new Map,this.Ka=ls.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function yL(t,e,n=!0){const r=qI(t);let i;const s=r.xa.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Ca()):i=await $I(r,e,n,!0),i}async function vL(t,e){const n=qI(t);await $I(n,e,!0,!1)}async function $I(t,e,n,r){const i=await jb(t.localStore,sn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await _L(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&xI(t.remoteStore,i),l}async function _L(t,e,n,r,i){t.Ua=(p,m,_)=>async function(k,R,T,v){let I=R.view.ga(T);I.ss&&(I=await Jv(k.localStore,R.query,!1).then(({documents:E})=>R.view.ga(E,I)));const O=v&&v.targetChanges.get(R.targetId),L=v&&v.targetMismatches.get(R.targetId)!=null,j=R.view.applyChanges(I,k.isPrimaryClient,O,L);return s_(k,R.targetId,j.ba),j.snapshot}(t,p,m,_);const s=await Jv(t.localStore,e,!0),o=new fL(e,s.ds),l=o.ga(s.documents),u=ma.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(l,t.isPrimaryClient,u);s_(t,n,c.ba);const d=new pL(e,n,o);return t.xa.set(e,d),t.Oa.has(n)?t.Oa.get(n).push(e):t.Oa.set(n,[e]),c.snapshot}async function wL(t,e,n){const r=J(t),i=r.xa.get(e),s=r.Oa.get(i.targetId);if(s.length>1)return r.Oa.set(i.targetId,s.filter(o=>!vc(o,e))),void r.xa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await vf(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&em(r.remoteStore,i.targetId),wf(r,i.targetId)}).catch(vs)):(wf(r,i.targetId),await vf(r.localStore,i.targetId,!0))}async function EL(t,e){const n=J(t),r=n.xa.get(e),i=n.Oa.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),em(n.remoteStore,r.targetId))}async function TL(t,e,n){const r=kL(t);try{const i=await function(o,l){const u=J(o),c=Le.now(),d=l.reduce((_,A)=>_.add(A.key),ne());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let A=Vn(),k=ne();return u.hs.getEntries(_,d).next(R=>{A=R,A.forEach((T,v)=>{v.isValidDocument()||(k=k.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,A)).next(R=>{p=R;const T=[];for(const v of l){const I=$D(v,p.get(v.key).overlayedDocument);I!=null&&T.push(new fi(v.key,I,YT(I.value.mapValue),on.exists(!0)))}return u.mutationQueue.addMutationBatch(_,c,T,l)}).next(R=>{m=R;const T=R.applyToLocalDocumentSet(p,k);return u.documentOverlayCache.saveOverlays(_,R.batchId,T)})}).then(()=>({batchId:m.batchId,changes:oI(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let c=o.qa[o.currentUser.toKey()];c||(c=new Ie(re)),c=c.insert(l,u),o.qa[o.currentUser.toKey()]=c}(r,i.batchId,n),await ya(r,i.changes),await Cc(r.remoteStore)}catch(i){const s=sm(i,"Failed to persist write");n.reject(s)}}async function BI(t,e){const n=J(t);try{const r=await Vb(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Ba.get(s);o&&(ae(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Fa=!0:i.modifiedDocuments.size>0?ae(o.Fa):i.removedDocuments.size>0&&(ae(o.Fa),o.Fa=!1))}),await ya(n,r,e)}catch(r){await vs(r)}}function i_(t,e,n){const r=J(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.xa.forEach((s,o)=>{const l=o.view.ea(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=J(o);u.onlineState=l;let c=!1;u.queries.forEach((d,p)=>{for(const m of p.J_)m.ea(l)&&(c=!0)}),c&&om(u)}(r.eventManager,e),i.length&&r.Ma.R_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function IL(t,e,n){const r=J(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Ba.get(e),s=i&&i.key;if(s){let o=new Ie(q.comparator);o=o.insert(s,tt.newNoDocument(s,Y.min()));const l=ne().add(s),u=new Tc(Y.min(),new Map,new Ie(re),o,l);await BI(r,u),r.La=r.La.remove(s),r.Ba.delete(e),am(r)}else await vf(r.localStore,e,!1).then(()=>wf(r,e,n)).catch(vs)}async function SL(t,e){const n=J(t),r=e.batch.batchId;try{const i=await Mb(n.localStore,e);WI(n,r,null),zI(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ya(n,i)}catch(i){await vs(i)}}async function CL(t,e,n){const r=J(t);try{const i=await function(o,l){const u=J(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,l).next(p=>(ae(p!==null),d=p.keys(),u.mutationQueue.removeMutationBatch(c,p))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(r.localStore,e);WI(r,e,n),zI(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ya(r,i)}catch(i){await vs(i)}}function zI(t,e){(t.Qa.get(e)||[]).forEach(n=>{n.resolve()}),t.Qa.delete(e)}function WI(t,e,n){const r=J(t);let i=r.qa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.qa[r.currentUser.toKey()]=i}}function wf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Oa.get(e))t.xa.delete(r),n&&t.Ma.Wa(r,n);t.Oa.delete(e),t.isPrimaryClient&&t.ka.yr(e).forEach(r=>{t.ka.containsKey(r)||HI(t,r)})}function HI(t,e){t.Na.delete(e.path.canonicalString());const n=t.La.get(e);n!==null&&(em(t.remoteStore,n),t.La=t.La.remove(e),t.Ba.delete(n),am(t))}function s_(t,e,n){for(const r of n)r instanceof UI?(t.ka.addReference(r.key,e),RL(t,r)):r instanceof jI?(z("SyncEngine","Document no longer in limbo: "+r.key),t.ka.removeReference(r.key,e),t.ka.containsKey(r.key)||HI(t,r.key)):K()}function RL(t,e){const n=e.key,r=n.path.canonicalString();t.La.get(n)||t.Na.has(r)||(z("SyncEngine","New document in limbo: "+n),t.Na.add(r),am(t))}function am(t){for(;t.Na.size>0&&t.La.size<t.maxConcurrentLimboResolutions;){const e=t.Na.values().next().value;t.Na.delete(e);const n=new q(ye.fromString(e)),r=t.Ka.next();t.Ba.set(r,new mL(n)),t.La=t.La.insert(n,r),xI(t.remoteStore,new nr(sn(Hp(n.path)),r,"TargetPurposeLimboResolution",pc.oe))}}async function ya(t,e,n){const r=J(t),i=[],s=[],o=[];r.xa.isEmpty()||(r.xa.forEach((l,u)=>{o.push(r.Ua(u,e,n).then(c=>{var d;if((c||n)&&r.isPrimaryClient){const p=c?!c.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(c){i.push(c);const p=Zp.zi(u.targetId,c);s.push(p)}}))}),await Promise.all(o),r.Ma.R_(i),await async function(u,c){const d=J(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>b.forEach(c,m=>b.forEach(m.Wi,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>b.forEach(m.Gi,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!_s(p))throw p;z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of c){const m=p.targetId;if(!p.fromCache){const _=d.us.get(m),A=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(A);d.us=d.us.insert(m,k)}}}(r.localStore,s))}async function AL(t,e){const n=J(t);if(!n.currentUser.isEqual(e)){z("SyncEngine","User change. New user:",e.toKey());const r=await RI(n.localStore,e);n.currentUser=e,function(s,o){s.Qa.forEach(l=>{l.forEach(u=>{u.reject(new H(V.CANCELLED,o))})}),s.Qa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ya(n,r.Ts)}}function PL(t,e){const n=J(t),r=n.Ba.get(e);if(r&&r.Fa)return ne().add(r.key);{let i=ne();const s=n.Oa.get(e);if(!s)return i;for(const o of s){const l=n.xa.get(o);i=i.unionWith(l.view.fa)}return i}}function qI(t){const e=J(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=BI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=IL.bind(null,e),e.Ma.R_=hL.bind(null,e.eventManager),e.Ma.Wa=dL.bind(null,e.eventManager),e}function kL(t){const e=J(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CL.bind(null,e),e}class Du{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ic(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,n){return null}Ya(e,n){return null}Ha(e){return Lb(this.persistence,new Db,e.initialUser,this.serializer)}ja(e){return new CI(Xp.ei,this.serializer)}za(e){return new Bb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Du.provider={build:()=>new Du};class xL extends Du{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,n){ae(this.persistence.referenceDelegate instanceof Nu);const r=this.persistence.referenceDelegate.garbageCollector;return new vb(r,e.asyncQueue,n)}ja(e){const n=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new CI(r=>Nu.ei(r,n),this.serializer)}}class Ef{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>i_(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AL.bind(null,this.syncEngine),await lL(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new cL}()}createDatastore(e){const n=Ic(e.databaseInfo.databaseId),r=function(s){return new qb(s)}(e.databaseInfo);return function(s,o,l,u){return new Qb(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new Jb(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>i_(this.syncEngine,n,0),function(){return Zv.p()?new Zv:new zb}())}createSyncEngine(e,n){return function(i,s,o,l,u,c,d){const p=new gL(i,s,o,l,u,c);return d&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=J(i);z("RemoteStore","RemoteStore shutting down."),s.k_.add(5),await ga(s),s.Q_.shutdown(),s.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ef.provider={build:()=>new Ef};/**
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
 */class GI{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):Mn("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class NL{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ze.UNAUTHENTICATED,this.clientId=GT.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{z("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(z("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=sm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Bh(t,e){t.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await RI(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function o_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await OL(t);z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>e_(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>e_(e.remoteStore,i)),t._onlineComponents=e}async function OL(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;is("Error using user provided cache. Falling back to memory cache: "+n),await Bh(t,new Du)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Bh(t,new xL(void 0));return t._offlineComponents}async function KI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await o_(t,t._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await o_(t,new Ef))),t._onlineComponents}function DL(t){return KI(t).then(e=>e.syncEngine)}async function QI(t){const e=await KI(t),n=e.eventManager;return n.onListen=yL.bind(null,e.syncEngine),n.onUnlisten=wL.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=vL.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=EL.bind(null,e.syncEngine),n}function bL(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new GI({next:m=>{d.eu(),o.enqueueAndForget(()=>VI(s,p));const _=m.docs.has(l);!_&&m.fromCache?c.reject(new H(V.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&u&&u.source==="server"?c.reject(new H(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new FI(Hp(l.path),d,{includeMetadataChanges:!0,ua:!0});return MI(s,p)}(await QI(t),t.asyncQueue,e,n,r)),r.promise}function LL(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,c){const d=new GI({next:m=>{d.eu(),o.enqueueAndForget(()=>VI(s,p)),m.fromCache&&u.source==="server"?c.reject(new H(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),p=new FI(l,d,{includeMetadataChanges:!0,ua:!0});return MI(s,p)}(await QI(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function YI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const a_=new Map;/**
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
 */function JI(t,e,n){if(!n)throw new H(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function ML(t,e,n,r){if(e===!0&&r===!0)throw new H(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function l_(t){if(!q.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function u_(t){if(q.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function lm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function Ir(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lm(t);throw new H(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class c_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ML("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=YI((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new c_({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new c_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new GO;switch(r.type){case"firstParty":return new JO(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=a_.get(n);r&&(z("ComponentProvider","Removing Datastore"),a_.delete(n),r.terminate())}(this),Promise.resolve()}}function VL(t,e,n,r={}){var i;const s=(t=Ir(t,Rc))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&is("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Ze.MOCK_USER;else{l=tx(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new H(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ze(c)}t._authCredentials=new KO(new qT(l,u))}}/**
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
 */class Ac{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ac(this.firestore,e,this._query)}}class St{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new pr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new St(this.firestore,e,this._key)}}class pr extends Ac{constructor(e,n,r){super(e,n,Hp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new St(this.firestore,null,new q(e))}withConverter(e){return new pr(this.firestore,e,this._path)}}function XI(t,e,...n){if(t=it(t),JI("collection","path",e),t instanceof Rc){const r=ye.fromString(e,...n);return u_(r),new pr(t,null,r)}{if(!(t instanceof St||t instanceof pr))throw new H(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return u_(r),new pr(t.firestore,null,r)}}function Fl(t,e,...n){if(t=it(t),arguments.length===1&&(e=GT.newId()),JI("doc","path",e),t instanceof Rc){const r=ye.fromString(e,...n);return l_(r),new St(t,null,new q(r))}{if(!(t instanceof St||t instanceof pr))throw new H(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return l_(r),new St(t.firestore,t instanceof pr?t.converter:null,new q(r))}}/**
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
 */class h_{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new PI(this,"async_queue_retry"),this.fu=()=>{const r=$h();r&&z("AsyncQueue","Visibility state changed to "+r.visibilityState),this.r_.Jo()},this.gu=e;const n=$h();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const n=$h();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const n=new Pn;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!_s(e))throw e;z("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const n=this.gu.then(()=>(this.Ru=!0,e().catch(r=>{this.Au=r,this.Ru=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Mn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ru=!1,r))));return this.gu=n,n}enqueueAfterDelay(e,n,r){this.pu(),this.mu.indexOf(e)>-1&&(n=0);const i=im.createAndSchedule(this,e,n,r,s=>this.Su(s));return this.du.push(i),i}pu(){this.Au&&K()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const n of this.du)if(n.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.du)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const n=this.du.indexOf(e);this.du.splice(n,1)}}class va extends Rc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new h_,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new h_(e),this._firestoreClient=void 0,await e}}}function FL(t,e){const n=typeof t=="object"?t:bp(),r=typeof t=="string"?t:"(default)",i=ci(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Zk("firestore");s&&VL(i,...s)}return i}function um(t){if(t._terminated)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||UL(t),t._firestoreClient}function UL(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,c,d){return new dD(l,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,YI(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new NL(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class cs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cs(qe.fromBase64String(e))}catch(n){throw new H(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new cs(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class cm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ZI{constructor(e){this._methodName=e}}/**
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
 */class hm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
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
 */class dm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
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
 */const jL=/^__.*__$/;class $L{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new fi(e,this.data,this.fieldMask,n,this.fieldTransforms):new pa(e,this.data,n,this.fieldTransforms)}}function eS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class fm{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Fu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new fm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Lu(e),i}Bu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.xu({path:r,Nu:!1});return i.Fu(),i}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return bu(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(eS(this.Mu)&&jL.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class BL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ic(e)}$u(e,n,r,i=!1){return new fm({Mu:e,methodName:n,Ku:r,path:ze.emptyPath(),Nu:!1,Qu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zL(t){const e=t._freezeSettings(),n=Ic(t._databaseId);return new BL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function WL(t,e,n,r,i,s={}){const o=t.$u(s.merge||s.mergeFields?2:0,e,n,i);iS("Data must be an object, but it was:",o,r);const l=nS(r,o);let u,c;if(s.merge)u=new Wt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const d=[];for(const p of s.mergeFields){const m=HL(e,p,n);if(!o.contains(m))throw new H(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);GL(d,m)||d.push(m)}u=new Wt(d),c=o.fieldTransforms.filter(p=>u.covers(p.field))}else u=null,c=o.fieldTransforms;return new $L(new Nt(l),u,c)}function tS(t,e){if(rS(t=it(t)))return iS("Unsupported field value:",e,t),nS(t,e);if(t instanceof ZI)return function(r,i){if(!eS(i.Mu))throw i.qu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.qu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=tS(l,i.ku(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=it(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return LD(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Le.fromDate(r);return{timestampValue:xu(i.serializer,s)}}if(r instanceof Le){const s=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:xu(i.serializer,s)}}if(r instanceof hm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cs)return{bytesValue:vI(i.serializer,r._byteString)};if(r instanceof St){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Yp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof dm)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.qu("VectorValues must only contain numeric values.");return qp(l.serializer,u)})}}}}}}(r,i);throw i.qu(`Unsupported field value: ${lm(r)}`)}(t,e)}function nS(t,e){const n={};return KT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hi(t,(r,i)=>{const s=tS(i,e.Ou(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function rS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof hm||t instanceof cs||t instanceof St||t instanceof ZI||t instanceof dm)}function iS(t,e,n){if(!rS(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=lm(n);throw r==="an object"?e.qu(t+" a custom object"):e.qu(t+" "+r)}}function HL(t,e,n){if((e=it(e))instanceof cm)return e._internalPath;if(typeof e=="string")return sS(t,e);throw bu("Field path arguments must be of type string or ",t,!1,void 0,n)}const qL=new RegExp("[~\\*/\\[\\]]");function sS(t,e,n){if(e.search(qL)>=0)throw bu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new cm(...e.split("."))._internalPath}catch{throw bu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(V.INVALID_ARGUMENT,l+t+u)}function GL(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class oS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new St(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(aS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class KL extends oS{data(){return super.data()}}function aS(t,e){return typeof e=="string"?sS(t,e):e instanceof cm?e._internalPath:e._delegate._internalPath}/**
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
 */function QL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class YL{convertValue(e,n="none"){switch(Er(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(wr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return hi(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>Ae(o.doubleValue));return new dm(s)}convertGeoPoint(e){return new hm(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Yo(e));default:return null}}convertTimestamp(e){const n=_r(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);ae(SI(r));const i=new Jo(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Mn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function JL(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class so{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lS extends oS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ul(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(aS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ul extends lS{data(e={}){return super.data(e)}}class XL{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new so(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ul(this._firestore,this._userDataWriter,r.key,r,new so(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Ul(i._firestore,i._userDataWriter,l.doc.key,l.doc,new so(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ul(i._firestore,i._userDataWriter,l.doc.key,l.doc,new so(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,d=-1;return l.type!==0&&(c=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:ZL(l.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ZL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
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
 */function d_(t){t=Ir(t,St);const e=Ir(t.firestore,va);return bL(um(e),t._key).then(n=>n2(e,t,n))}class uS extends YL{constructor(e){super(),this.firestore=e}convertBytes(e){return new cs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new St(this.firestore,null,n)}}function e2(t){t=Ir(t,Ac);const e=Ir(t.firestore,va),n=um(e),r=new uS(e);return QL(t._query),LL(n,t._query).then(i=>new XL(e,r,t,i))}function Tf(t,e,n){t=Ir(t,St);const r=Ir(t.firestore,va),i=JL(t.converter,e,n);return cS(r,[WL(zL(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,on.none())])}function t2(t){return cS(Ir(t.firestore,va),[new Gp(t._key,on.none())])}function cS(t,e){return function(r,i){const s=new Pn;return r.asyncQueue.enqueueAndForget(async()=>TL(await DL(r),i,s)),s.promise}(um(t),e)}function n2(t,e,n){const r=n.docs.get(e._key),i=new uS(t);return new lS(t,i,e._key,r,new so(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){ys=i})(gs),un(new Qt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new va(new QO(r.getProvider("auth-internal")),new ZO(r.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new H(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Jo(c.options.projectId,d)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),bt(Pv,"4.7.5",e),bt(Pv,"4.7.5","esm2017")})();function pm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function hS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const r2=hS,dS=new ui("auth","Firebase",hS());/**
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
 */const Lu=new hc("@firebase/auth");function i2(t,...e){Lu.logLevel<=te.WARN&&Lu.warn(`Auth (${gs}): ${t}`,...e)}function jl(t,...e){Lu.logLevel<=te.ERROR&&Lu.error(`Auth (${gs}): ${t}`,...e)}/**
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
 */function Vt(t,...e){throw gm(t,...e)}function Gt(t,...e){return gm(t,...e)}function mm(t,e,n){const r=Object.assign(Object.assign({},r2()),{[e]:n});return new ui("auth","Firebase",r).create(e,{appName:t.name})}function kn(t){return mm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function s2(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Vt(t,"argument-error"),mm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function gm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dS.create(t,...e)}function G(t,e,...n){if(!t)throw gm(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw jl(e),new Error(e)}function Fn(t,e){t||Sn(e)}/**
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
 */function If(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function o2(){return f_()==="http:"||f_()==="https:"}function f_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function a2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(o2()||uT()||"connection"in navigator)?navigator.onLine:!0}function l2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class _a{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=nx()||sx()}get(){return a2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ym(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const u2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const c2=new _a(3e4,6e4);function Pr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kr(t,e,n,r,i={}){return pS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=fa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},s);return ix()||(c.referrerPolicy="no-referrer"),fS.fetch()(mS(t,t.config.apiHost,n,l),c)})}async function pS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},u2),e);try{const i=new d2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw vl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,c]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw vl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw vl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw vl(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw mm(t,d,c);Vt(t,d)}}catch(i){if(i instanceof Jt)throw i;Vt(t,"network-request-failed",{message:String(i)})}}async function wa(t,e,n,r,i={}){const s=await kr(t,e,n,r,i);return"mfaPendingCredential"in s&&Vt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function mS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ym(t.config,i):`${t.config.apiScheme}://${i}`}function h2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class d2{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Gt(this.auth,"network-request-failed")),c2.get())})}}function vl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Gt(t,e,r);return i.customData._tokenResponse=n,i}function p_(t){return t!==void 0&&t.enterprise!==void 0}class f2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return h2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function p2(t,e){return kr(t,"GET","/v2/recaptchaConfig",Pr(t,e))}/**
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
 */async function m2(t,e){return kr(t,"POST","/v1/accounts:delete",e)}async function gS(t,e){return kr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function g2(t,e=!1){const n=it(t),r=await n.getIdToken(e),i=vm(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Eo(zh(i.auth_time)),issuedAtTime:Eo(zh(i.iat)),expirationTime:Eo(zh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function zh(t){return Number(t)*1e3}function vm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return jl("JWT malformed, contained fewer than 3 sections"),null;try{const i=sT(n);return i?JSON.parse(i):(jl("Failed to decode base64 JWT payload"),null)}catch(i){return jl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function m_(t){const e=vm(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ta(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jt&&y2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function y2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class v2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Sf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Eo(this.lastLoginAt),this.creationTime=Eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ta(t,gS(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?yS(s.providerUserInfo):[],l=w2(t.providerData,o),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),d=u?c:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Sf(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function _2(t){const e=it(t);await Mu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function w2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function yS(t){return t.map(e=>{var{providerId:n}=e,r=pm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function E2(t,e){const n=await pS(t,{},async()=>{const r=fa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=mS(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",fS.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function T2(t,e){return kr(t,"POST","/v2/accounts:revokeToken",Pr(t,e))}/**
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
 */class Hi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):m_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=m_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await E2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Hi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hi,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
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
 */function Wn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=pm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new v2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Sf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ta(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return g2(this,e)}reload(){return _2(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(kn(this.auth));const e=await this.getIdToken();return await ta(this,m2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,c,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,_=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,R=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:I,emailVerified:O,isAnonymous:L,providerData:j,stsTokenManager:E}=n;G(I&&E,e,"internal-error");const y=Hi.fromJSON(this.name,E);G(typeof I=="string",e,"internal-error"),Wn(p,e.name),Wn(m,e.name),G(typeof O=="boolean",e,"internal-error"),G(typeof L=="boolean",e,"internal-error"),Wn(_,e.name),Wn(A,e.name),Wn(k,e.name),Wn(R,e.name),Wn(T,e.name),Wn(v,e.name);const w=new Cn({uid:I,auth:e,email:m,emailVerified:O,displayName:p,isAnonymous:L,photoURL:A,phoneNumber:_,tenantId:k,stsTokenManager:y,createdAt:T,lastLoginAt:v});return j&&Array.isArray(j)&&(w.providerData=j.map(S=>Object.assign({},S))),R&&(w._redirectEventId=R),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Hi;i.updateFromServerResponse(n);const s=new Cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Mu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?yS(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Hi;l.updateFromIdToken(r);const u=new Cn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Sf(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const g_=new Map;function Rn(t){Fn(t instanceof Function,"Expected a class definition");let e=g_.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,g_.set(t,e),e)}/**
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
 */class vS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vS.type="NONE";const y_=vS;/**
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
 */function $l(t,e,n){return`firebase:${t}:${e}:${n}`}class qi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=$l(this.userKey,i.apiKey,s),this.fullPersistenceKey=$l("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qi(Rn(y_),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Rn(y_);const o=$l(r,e.config.apiKey,e.name);let l=null;for(const c of n)try{const d=await c._get(o);if(d){const p=Cn._fromJSON(e,d);c!==s&&(l=p),s=c;break}}catch{}const u=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new qi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new qi(s,e,r))}}/**
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
 */function v_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(TS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_S(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(SS(e))return"Blackberry";if(CS(e))return"Webos";if(wS(e))return"Safari";if((e.includes("chrome/")||ES(e))&&!e.includes("edge/"))return"Chrome";if(IS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _S(t=rt()){return/firefox\//i.test(t)}function wS(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ES(t=rt()){return/crios\//i.test(t)}function TS(t=rt()){return/iemobile/i.test(t)}function IS(t=rt()){return/android/i.test(t)}function SS(t=rt()){return/blackberry/i.test(t)}function CS(t=rt()){return/webos/i.test(t)}function _m(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function I2(t=rt()){var e;return _m(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function S2(){return ox()&&document.documentMode===10}function RS(t=rt()){return _m(t)||IS(t)||CS(t)||SS(t)||/windows phone/i.test(t)||TS(t)}/**
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
 */function AS(t,e=[]){let n;switch(t){case"Browser":n=v_(rt());break;case"Worker":n=`${v_(rt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gs}/${r}`}/**
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
 */class C2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function R2(t,e={}){return kr(t,"GET","/v2/passwordPolicy",Pr(t,e))}/**
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
 */const A2=6;class P2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:A2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class k2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new __(this),this.idTokenSubscription=new __(this),this.beforeStateQueue=new C2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Rn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await qi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await gS(this,{idToken:e}),r=await Cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=l2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(kn(this));const n=e?it(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await R2(this),n=new P2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ui("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await T2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Rn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await qi.create(this,[Rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=AS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&i2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xr(t){return it(t)}class __{constructor(e){this.auth=e,this.observer=null,this.addObserver=fx(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Pc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function x2(t){Pc=t}function PS(t){return Pc.loadJS(t)}function N2(){return Pc.recaptchaEnterpriseScript}function O2(){return Pc.gapiScript}function D2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class b2{constructor(){this.enterprise=new L2}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class L2{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const M2="recaptcha-enterprise",kS="NO_RECAPTCHA";class V2{constructor(e){this.type=M2,this.auth=xr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{p2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new f2(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;p_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(kS)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new b2().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&p_(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=N2();u.length!==0&&(u+=l),PS(u).then(()=>{i(l,s,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function w_(t,e,n,r=!1,i=!1){const s=new V2(t);let o;if(i)o=kS;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,c=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Cf(t,e,n,r,i){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await w_(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await w_(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function F2(t,e){const n=ci(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Go(s,e??{}))return i;Vt(i,"already-initialized")}return n.initialize({options:e})}function U2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function j2(t,e,n){const r=xr(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=xS(e),{host:o,port:l}=$2(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),B2()}function xS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function $2(t){const e=xS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:E_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:E_(o)}}}function E_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function B2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class wm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}async function z2(t,e){return kr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function W2(t,e){return wa(t,"POST","/v1/accounts:signInWithPassword",Pr(t,e))}/**
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
 */async function H2(t,e){return wa(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}async function q2(t,e){return wa(t,"POST","/v1/accounts:signInWithEmailLink",Pr(t,e))}/**
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
 */class na extends wm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new na(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new na(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cf(e,n,"signInWithPassword",W2);case"emailLink":return H2(e,{email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Cf(e,r,"signUpPassword",z2);case"emailLink":return q2(e,{idToken:n,email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Gi(t,e){return wa(t,"POST","/v1/accounts:signInWithIdp",Pr(t,e))}/**
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
 */const G2="http://localhost";class ni extends wm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=pm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ni(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gi(e,n)}buildRequest(){const e={requestUri:G2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=fa(n)}return e}}/**
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
 */function K2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Q2(t){const e=eo(to(t)).link,n=e?eo(to(e)).deep_link_id:null,r=eo(to(t)).deep_link_id;return(r?eo(to(r)).link:null)||r||n||e||t}class Em{constructor(e){var n,r,i,s,o,l;const u=eo(to(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(r=u.oobCode)!==null&&r!==void 0?r:null,p=K2((i=u.mode)!==null&&i!==void 0?i:null);G(c&&d&&p,"argument-error"),this.apiKey=c,this.operation=p,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Q2(e);try{return new Em(n)}catch{return null}}}/**
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
 */class Es{constructor(){this.providerId=Es.PROVIDER_ID}static credential(e,n){return na._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Em.parseLink(n);return G(r,"argument-error"),na._fromEmailAndCode(e,r.code,r.tenantId)}}Es.PROVIDER_ID="password";Es.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Es.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Tm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ea extends Tm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Yn extends Ea{constructor(){super("facebook.com")}static credential(e){return ni._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yn.PROVIDER_ID="facebook.com";/**
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
 */class En extends Ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ni._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return En.credential(n,r)}catch{return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com";En.PROVIDER_ID="google.com";/**
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
 */class Jn extends Ea{constructor(){super("github.com")}static credential(e){return ni._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
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
 */class Xn extends Ea{constructor(){super("twitter.com")}static credential(e,n){return ni._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
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
 */async function Y2(t,e){return wa(t,"POST","/v1/accounts:signUp",Pr(t,e))}/**
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
 */class ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Cn._fromIdTokenResponse(e,r,i),o=T_(r);return new ri({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=T_(r);return new ri({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function T_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Vu extends Jt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Vu(e,n,r,i)}}function NS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Vu._fromErrorAndOperation(t,s,e,r):s})}async function J2(t,e,n=!1){const r=await ta(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ri._forOperation(t,"link",r)}/**
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
 */async function X2(t,e,n=!1){const{auth:r}=t;if(zt(r.app))return Promise.reject(kn(r));const i="reauthenticate";try{const s=await ta(t,NS(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=vm(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),ri._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),s}}/**
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
 */async function OS(t,e,n=!1){if(zt(t.app))return Promise.reject(kn(t));const r="signIn",i=await NS(t,r,e),s=await ri._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Z2(t,e){return OS(xr(t),e)}/**
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
 */async function DS(t){const e=xr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eM(t,e,n){if(zt(t.app))return Promise.reject(kn(t));const r=xr(t),o=await Cf(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Y2).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&DS(t),u}),l=await ri._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function tM(t,e,n){return zt(t.app)?Promise.reject(kn(t)):Z2(it(t),Es.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&DS(t),r})}function nM(t,e,n,r){return it(t).onIdTokenChanged(e,n,r)}function rM(t,e,n){return it(t).beforeAuthStateChanged(e,n)}function iM(t,e,n,r){return it(t).onAuthStateChanged(e,n,r)}function sM(t){return it(t).signOut()}const Fu="__sak";/**
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
 */class bS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Fu,"1"),this.storage.removeItem(Fu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const oM=1e3,aM=10;class LS extends bS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=RS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);S2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,aM):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},oM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}LS.type="LOCAL";const lM=LS;/**
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
 */class MS extends bS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}MS.type="SESSION";const VS=MS;/**
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
 */function uM(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new kc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,s)),u=await uM(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kc.receivers=[];/**
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
 */function Im(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class cM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const c=Im("",20);i.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function ln(){return window}function hM(t){ln().location.href=t}/**
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
 */function FS(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function dM(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fM(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pM(){return FS()?self:null}/**
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
 */const US="firebaseLocalStorageDb",mM=1,Uu="firebaseLocalStorage",jS="fbase_key";class Ta{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xc(t,e){return t.transaction([Uu],e?"readwrite":"readonly").objectStore(Uu)}function gM(){const t=indexedDB.deleteDatabase(US);return new Ta(t).toPromise()}function Rf(){const t=indexedDB.open(US,mM);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Uu,{keyPath:jS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Uu)?e(r):(r.close(),await gM(),e(await Rf()))})})}async function I_(t,e,n){const r=xc(t,!0).put({[jS]:e,value:n});return new Ta(r).toPromise()}async function yM(t,e){const n=xc(t,!1).get(e),r=await new Ta(n).toPromise();return r===void 0?null:r.value}function S_(t,e){const n=xc(t,!0).delete(e);return new Ta(n).toPromise()}const vM=800,_M=3;class $S{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_M)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return FS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kc._getInstance(pM()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dM(),!this.activeServiceWorker)return;this.sender=new cM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rf();return await I_(e,Fu,"1"),await S_(e,Fu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>I_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yM(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>S_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xc(i,!1).getAll();return new Ta(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$S.type="LOCAL";const wM=$S;new _a(3e4,6e4);/**
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
 */function BS(t,e){return e?Rn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Sm extends wm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function EM(t){return OS(t.auth,new Sm(t),t.bypassAuthState)}function TM(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),X2(n,new Sm(t),t.bypassAuthState)}async function IM(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),J2(n,new Sm(t),t.bypassAuthState)}/**
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
 */class zS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EM;case"linkViaPopup":case"linkViaRedirect":return IM;case"reauthViaPopup":case"reauthViaRedirect":return TM;default:Vt(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const SM=new _a(2e3,1e4);async function CM(t,e,n){if(zt(t.app))return Promise.reject(Gt(t,"operation-not-supported-in-this-environment"));const r=xr(t);s2(t,e,Tm);const i=BS(r,n);return new Wr(r,"signInViaPopup",e,i).executeNotNull()}class Wr extends zS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Wr.currentPopupAction&&Wr.currentPopupAction.cancel(),Wr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=Im();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SM.get())};e()}}Wr.currentPopupAction=null;/**
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
 */const RM="pendingRedirect",Bl=new Map;class AM extends zS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Bl.get(this.auth._key());if(!e){try{const r=await PM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Bl.set(this.auth._key(),e)}return this.bypassAuthState||Bl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PM(t,e){const n=NM(e),r=xM(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kM(t,e){Bl.set(t._key(),e)}function xM(t){return Rn(t._redirectPersistence)}function NM(t){return $l(RM,t.config.apiKey,t.name)}async function OM(t,e,n=!1){if(zt(t.app))return Promise.reject(kn(t));const r=xr(t),i=BS(r,e),o=await new AM(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const DM=10*60*1e3;class bM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!WS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DM&&this.cachedEventUids.clear(),this.cachedEventUids.has(C_(e))}saveEventToCache(e){this.cachedEventUids.add(C_(e)),this.lastProcessedEventTime=Date.now()}}function C_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function WS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return WS(t);default:return!1}}/**
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
 */async function MM(t,e={}){return kr(t,"GET","/v1/projects",e)}/**
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
 */const VM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FM=/^https?/;async function UM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MM(t);for(const n of e)try{if(jM(n))return}catch{}Vt(t,"unauthorized-domain")}function jM(t){const e=If(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!FM.test(n))return!1;if(VM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const $M=new _a(3e4,6e4);function R_(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BM(t){return new Promise((e,n)=>{var r,i,s;function o(){R_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{R_(),n(Gt(t,"network-request-failed"))},timeout:$M.get()})}if(!((i=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ln().gapi)===null||s===void 0)&&s.load)o();else{const l=D2("iframefcb");return ln()[l]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},PS(`${O2()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw zl=null,e})}let zl=null;function zM(t){return zl=zl||BM(t),zl}/**
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
 */const WM=new _a(5e3,15e3),HM="__/auth/iframe",qM="emulator/auth/iframe",GM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QM(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ym(e,qM):`https://${t.config.authDomain}/${HM}`,r={apiKey:e.apiKey,appName:t.name,v:gs},i=KM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${fa(r).slice(1)}`}async function YM(t){const e=await zM(t),n=ln().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:QM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),l=ln().setTimeout(()=>{s(o)},WM.get());function u(){ln().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const JM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XM=500,ZM=600,eV="_blank",tV="http://localhost";class A_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nV(t,e,n,r=XM,i=ZM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},JM),{width:r.toString(),height:i.toString(),top:s,left:o}),c=rt().toLowerCase();n&&(l=ES(c)?eV:n),_S(c)&&(e=e||tV,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[_,A])=>`${m}${_}=${A},`,"");if(I2(c)&&l!=="_self")return rV(e||"",l),new A_(null);const p=window.open(e||"",l,d);G(p,t,"popup-blocked");try{p.focus()}catch{}return new A_(p)}function rV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const iV="__/auth/handler",sV="emulator/auth/handler",oV=encodeURIComponent("fac");async function P_(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gs,eventId:i};if(e instanceof Tm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dx(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Ea){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const u=await t._getAppCheckToken(),c=u?`#${oV}=${encodeURIComponent(u)}`:"";return`${aV(t)}?${fa(l).slice(1)}${c}`}function aV({config:t}){return t.emulator?ym(t,sV):`https://${t.authDomain}/${iV}`}/**
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
 */const Wh="webStorageSupport";class lV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=VS,this._completeRedirectFn=OM,this._overrideRedirectResult=kM}async _openPopup(e,n,r,i){var s;Fn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await P_(e,n,r,If(),i);return nV(e,o,Im())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await P_(e,n,r,If(),i);return hM(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YM(e),r=new bM(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wh,{type:Wh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Wh];o!==void 0&&n(!!o),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return RS()||wS()||_m()}}const uV=lV;var k_="@firebase/auth",x_="1.8.1";/**
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
 */class cV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dV(t){un(new Qt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:AS(t)},c=new k2(r,i,s,u);return U2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),un(new Qt("auth-internal",e=>{const n=xr(e.getProvider("auth").getImmediate());return(r=>new cV(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(k_,x_,hV(t)),bt(k_,x_,"esm2017")}/**
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
 */const fV=5*60,pV=lT("authIdTokenMaxAge")||fV;let N_=null;const mV=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pV)return;const i=n==null?void 0:n.token;N_!==i&&(N_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function gV(t=bp()){const e=ci(t,"auth");if(e.isInitialized())return e.getImmediate();const n=F2(t,{popupRedirectResolver:uV,persistence:[wM,lM,VS]}),r=lT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=mV(s.toString());rM(n,o,()=>o(n.currentUser)),nM(n,l=>o(l))}}const i=oT("auth");return i&&j2(n,`http://${i}`),n}function yV(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}x2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Gt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",yV().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dV("Browser");const vV={apiKey:"AIzaSyDhhVW3UXGOe3qHk67VEAc-T3Up1yn_dfU",authDomain:"note-reviewer.firebaseapp.com",projectId:"note-reviewer",storageBucket:"note-reviewer.firebasestorage.app",messagingSenderId:"351388938954",appId:"1:351388938954:web:910ae59264dd989502fa33",measurementId:"G-GF028TZW5Q"},Cm=mT(vV);zO(Cm);const Vi=gV(Cm),To=FL(Cm),_V=new En,HS=F.createContext(),Ts=()=>F.useContext(HS),wV=({children:t})=>{const[e,n]=F.useState(null);return F.useEffect(()=>{const r=Vi.onAuthStateChanged(i=>{n(i)});return()=>r()},[]),M.jsx(HS.Provider,{value:{currentUser:e},children:t})},EV=({noteSets:t})=>{const e=Ts(),n=ms(),r=async()=>{console.log("Creating new note set");try{if(e&&e.currentUser){const i=XI(To,`users/${e.currentUser.uid}/note-sets`),s=Fl(i);await Tf(s,{noteSetName:"New Note Set",noteSetRaw:"",noteSetFacts:[]});const o=s.id;n(`/edit/${o}`)}}catch(i){alert("Error creating note set"),console.log(i)}};return M.jsxs("div",{className:"bg-secondary-light min-w-fit max-w-20 m-auto p-8 rounded-lg shadow-md",children:[M.jsx("div",{className:"text-2xl font-bold",children:"Note Sets"}),M.jsx("div",{className:"flex flex-row flex-wrap mt-4 gap-4",children:t.map((i,s)=>M.jsx(Hk,{noteSet:i},s))}),M.jsxs("button",{className:"bg-primary-light text-xl w-fit m-auto p-2 rounded-md shadow-md mt-4 hover:scale-105 hover:cursor-pointer transition-transform",onClick:r,children:[M.jsx("span",{className:"text-2xl m-1 font-extrabold",children:"+"}),"Create New"]})]})},TV=()=>{const t=Ts(),[e,n]=F.useState([]);if(e.length===0)try{if(t&&t.currentUser){const r=XI(To,`users/${t.currentUser.uid}/note-sets`);e2(r).then(i=>{const s=[];i.forEach(o=>{s.push({...o.data(),noteSetId:o.id})}),n(s)})}}catch(r){console.log(r)}return e},IV=()=>{const t=Ts(),e=TV();return t.currentUser===null?M.jsx("div",{className:"flex flex-col justify-center align-middle h-full",children:M.jsxs("div",{className:"text-center text-white bg-primary text-2xl p-5",children:["Please Sign in to view your notes",M.jsx(ic,{className:"block text-xl bg-secondary-light text-black mx-auto w-fit p-2 rounded-md mt-4 hover:scale-105 hover:shadow-lg transition-transform",to:"/login",children:"Sign In"})]})}):M.jsxs("div",{className:"flex flex-col justify-start align-middle text-center gap-8",children:[M.jsx("button",{className:"self-start bg-primary p-2 m-2 rounded-full text-white hover:scale-105 transform transition-all duration-200",onClick:()=>{sM(Vi)},children:"Sign Out"}),M.jsxs("h1",{className:"mt-12 text-5xl font-bold",children:["Hello,"," ",M.jsx("span",{className:"text-primary",children:t.currentUser?t.currentUser.displayName:""})]}),M.jsx(EV,{noteSets:e})]})},SV=({children:t})=>M.jsx("div",{className:"bg-primary-light min-h-screen",children:t});var O_;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(O_||(O_={}));/**
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
 */var D_;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(D_||(D_={}));var b_;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(b_||(b_={}));/**
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
 */const L_=["user","model","function","system"];var M_;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(M_||(M_={}));var V_;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(V_||(V_={}));var F_;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(F_||(F_={}));var U_;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(U_||(U_={}));var Io;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER"})(Io||(Io={}));var j_;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(j_||(j_={}));var $_;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})($_||($_={}));var B_;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(B_||(B_={}));/**
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
 */class ft extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class wi extends ft{constructor(e,n){super(e),this.response=n}}class qS extends ft{constructor(e,n,r,i){super(e),this.status=n,this.statusText=r,this.errorDetails=i}}class mr extends ft{}/**
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
 */const CV="https://generativelanguage.googleapis.com",RV="v1beta",AV="0.21.0",PV="genai-js";var ii;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(ii||(ii={}));class kV{constructor(e,n,r,i,s){this.model=e,this.task=n,this.apiKey=r,this.stream=i,this.requestOptions=s}toString(){var e,n;const r=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||RV;let s=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||CV}/${r}/${this.model}:${this.task}`;return this.stream&&(s+="?alt=sse"),s}}function xV(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${PV}/${AV}`),e.join(" ")}async function NV(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",xV(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let r=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(i){throw new mr(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${i.message}`)}for(const[i,s]of r.entries()){if(i==="x-goog-api-key")throw new mr(`Cannot set reserved header name ${i}`);if(i==="x-goog-api-client")throw new mr(`Header name ${i} can only be set using the apiClient field`);n.append(i,s)}}return n}async function OV(t,e,n,r,i,s){const o=new kV(t,e,n,r,s);return{url:o.toString(),fetchOptions:Object.assign(Object.assign({},MV(s)),{method:"POST",headers:await NV(o),body:i})}}async function Ia(t,e,n,r,i,s={},o=fetch){const{url:l,fetchOptions:u}=await OV(t,e,n,r,i,s);return DV(l,u,o)}async function DV(t,e,n=fetch){let r;try{r=await n(t,e)}catch(i){bV(i,t)}return r.ok||await LV(r,t),r}function bV(t,e){let n=t;throw t instanceof qS||t instanceof mr||(n=new ft(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function LV(t,e){let n="",r;try{const i=await t.json();n=i.error.message,i.error.details&&(n+=` ${JSON.stringify(i.error.details)}`,r=i.error.details)}catch{}throw new qS(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,r)}function MV(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
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
 */function Rm(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Wl(t.candidates[0]))throw new wi(`${Gn(t)}`,t);return VV(t)}else if(t.promptFeedback)throw new wi(`Text not available. ${Gn(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Wl(t.candidates[0]))throw new wi(`${Gn(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),z_(t)[0]}else if(t.promptFeedback)throw new wi(`Function call not available. ${Gn(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Wl(t.candidates[0]))throw new wi(`${Gn(t)}`,t);return z_(t)}else if(t.promptFeedback)throw new wi(`Function call not available. ${Gn(t)}`,t)},t}function VV(t){var e,n,r,i;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(i=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)o.text&&s.push(o.text),o.executableCode&&s.push("\n```"+o.executableCode.language+`
`+o.executableCode.code+"\n```\n"),o.codeExecutionResult&&s.push("\n```\n"+o.codeExecutionResult.output+"\n```\n");return s.length>0?s.join(""):""}function z_(t){var e,n,r,i;const s=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(i=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||i===void 0?void 0:i.parts)o.functionCall&&s.push(o.functionCall);if(s.length>0)return s}const FV=[Io.RECITATION,Io.SAFETY,Io.LANGUAGE];function Wl(t){return!!t.finishReason&&FV.includes(t.finishReason)}function Gn(t){var e,n,r;let i="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)i+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(i+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(i+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((r=t.candidates)===null||r===void 0)&&r[0]){const s=t.candidates[0];Wl(s)&&(i+=`Candidate was blocked due to ${s.finishReason}`,s.finishMessage&&(i+=`: ${s.finishMessage}`))}return i}function ra(t){return this instanceof ra?(this.v=t,this):new ra(t)}function UV(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),i,s=[];return i={},o("next"),o("throw"),o("return"),i[Symbol.asyncIterator]=function(){return this},i;function o(m){r[m]&&(i[m]=function(_){return new Promise(function(A,k){s.push([m,_,A,k])>1||l(m,_)})})}function l(m,_){try{u(r[m](_))}catch(A){p(s[0][3],A)}}function u(m){m.value instanceof ra?Promise.resolve(m.value.v).then(c,d):p(s[0][2],m)}function c(m){l("next",m)}function d(m){l("throw",m)}function p(m,_){m(_),s.shift(),s.length&&l(s[0][0],s[0][1])}}/**
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
 */const W_=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function jV(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=zV(e),[r,i]=n.tee();return{stream:BV(r),response:$V(i)}}async function $V(t){const e=[],n=t.getReader();for(;;){const{done:r,value:i}=await n.read();if(r)return Rm(WV(e));e.push(i)}}function BV(t){return UV(this,arguments,function*(){const n=t.getReader();for(;;){const{value:r,done:i}=yield ra(n.read());if(i)break;yield yield ra(Rm(r))}})}function zV(t){const e=t.getReader();return new ReadableStream({start(r){let i="";return s();function s(){return e.read().then(({value:o,done:l})=>{if(l){if(i.trim()){r.error(new ft("Failed to parse stream"));return}r.close();return}i+=o;let u=i.match(W_),c;for(;u;){try{c=JSON.parse(u[1])}catch{r.error(new ft(`Error parsing JSON response: "${u[1]}"`));return}r.enqueue(c),i=i.substring(u[0].length),u=i.match(W_)}return s()})}}})}function WV(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of t){if(r.candidates)for(const i of r.candidates){const s=i.index;if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:i.index}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].groundingMetadata=i.groundingMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[]});const o={};for(const l of i.content.parts)l.text&&(o.text=l.text),l.functionCall&&(o.functionCall=l.functionCall),l.executableCode&&(o.executableCode=l.executableCode),l.codeExecutionResult&&(o.codeExecutionResult=l.codeExecutionResult),Object.keys(o).length===0&&(o.text=""),n.candidates[s].content.parts.push(o)}}r.usageMetadata&&(n.usageMetadata=r.usageMetadata)}return n}/**
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
 */async function GS(t,e,n,r){const i=await Ia(e,ii.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),r);return jV(i)}async function KS(t,e,n,r){const s=await(await Ia(e,ii.GENERATE_CONTENT,t,!1,JSON.stringify(n),r)).json();return{response:Rm(s)}}/**
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
 */function QS(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function ia(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return HV(e)}function HV(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,i=!1;for(const s of t)"functionResponse"in s?(n.parts.push(s),i=!0):(e.parts.push(s),r=!0);if(r&&i)throw new ft("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!i)throw new ft("No content is provided for sending chat message.");return r?e:n}function qV(t,e){var n;let r={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const i=t.generateContentRequest!=null;if(t.contents){if(i)throw new mr("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=t.contents}else if(i)r=Object.assign(Object.assign({},r),t.generateContentRequest);else{const s=ia(t);r.contents=[s]}return{generateContentRequest:r}}function H_(t){let e;return t.contents?e=t:e={contents:[ia(t)]},t.systemInstruction&&(e.systemInstruction=QS(t.systemInstruction)),e}function GV(t){return typeof t=="string"||Array.isArray(t)?{content:ia(t)}:t}/**
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
 */const q_=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],KV={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function QV(t){let e=!1;for(const n of t){const{role:r,parts:i}=n;if(!e&&r!=="user")throw new ft(`First content should be with role 'user', got ${r}`);if(!L_.includes(r))throw new ft(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(L_)}`);if(!Array.isArray(i))throw new ft("Content should have 'parts' property with an array of Parts");if(i.length===0)throw new ft("Each Content should have at least one part");const s={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const l of i)for(const u of q_)u in l&&(s[u]+=1);const o=KV[r];for(const l of q_)if(!o.includes(l)&&s[l]>0)throw new ft(`Content with role '${r}' can't contain '${l}' part`);e=!0}}/**
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
 */const G_="SILENT_ERROR";class YV{constructor(e,n,r,i={}){this.model=n,this.params=r,this._requestOptions=i,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r!=null&&r.history&&(QV(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var r,i,s,o,l,u;await this._sendPromise;const c=ia(e),d={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,c]},p=Object.assign(Object.assign({},this._requestOptions),n);let m;return this._sendPromise=this._sendPromise.then(()=>KS(this._apiKey,this.model,d,p)).then(_=>{var A;if(_.response.candidates&&_.response.candidates.length>0){this._history.push(c);const k=Object.assign({parts:[],role:"model"},(A=_.response.candidates)===null||A===void 0?void 0:A[0].content);this._history.push(k)}else{const k=Gn(_.response);k&&console.warn(`sendMessage() was unsuccessful. ${k}. Inspect response object for details.`)}m=_}),await this._sendPromise,m}async sendMessageStream(e,n={}){var r,i,s,o,l,u;await this._sendPromise;const c=ia(e),d={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(i=this.params)===null||i===void 0?void 0:i.generationConfig,tools:(s=this.params)===null||s===void 0?void 0:s.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,c]},p=Object.assign(Object.assign({},this._requestOptions),n),m=GS(this._apiKey,this.model,d,p);return this._sendPromise=this._sendPromise.then(()=>m).catch(_=>{throw new Error(G_)}).then(_=>_.response).then(_=>{if(_.candidates&&_.candidates.length>0){this._history.push(c);const A=Object.assign({},_.candidates[0].content);A.role||(A.role="model"),this._history.push(A)}else{const A=Gn(_);A&&console.warn(`sendMessageStream() was unsuccessful. ${A}. Inspect response object for details.`)}}).catch(_=>{_.message!==G_&&console.error(_)}),m}}/**
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
 */async function JV(t,e,n,r){return(await Ia(e,ii.COUNT_TOKENS,t,!1,JSON.stringify(n),r)).json()}/**
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
 */async function XV(t,e,n,r){return(await Ia(e,ii.EMBED_CONTENT,t,!1,JSON.stringify(n),r)).json()}async function ZV(t,e,n,r){const i=n.requests.map(o=>Object.assign(Object.assign({},o),{model:e}));return(await Ia(e,ii.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:i}),r)).json()}/**
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
 */class K_{constructor(e,n,r={}){this.apiKey=e,this._requestOptions=r,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=QS(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var r;const i=H_(e),s=Object.assign(Object.assign({},this._requestOptions),n);return KS(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},i),s)}async generateContentStream(e,n={}){var r;const i=H_(e),s=Object.assign(Object.assign({},this._requestOptions),n);return GS(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},i),s)}startChat(e){var n;return new YV(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const r=qV(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),i=Object.assign(Object.assign({},this._requestOptions),n);return JV(this.apiKey,this.model,r,i)}async embedContent(e,n={}){const r=GV(e),i=Object.assign(Object.assign({},this._requestOptions),n);return XV(this.apiKey,this.model,r,i)}async batchEmbedContents(e,n={}){const r=Object.assign(Object.assign({},this._requestOptions),n);return ZV(this.apiKey,this.model,e,r)}}/**
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
 */class eF{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new ft("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new K_(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,r){if(!e.name)throw new mr("Cached content must contain a `name` field.");if(!e.model)throw new mr("Cached content must contain a `model` field.");const i=["model","systemInstruction"];for(const o of i)if(n!=null&&n[o]&&e[o]&&(n==null?void 0:n[o])!==e[o]){if(o==="model"){const l=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,u=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(l===u)continue}throw new mr(`Different value for "${o}" specified in modelParams (${n[o]}) and cachedContent (${e[o]})`)}const s=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new K_(this.apiKey,s,r)}}const tF="AIzaSyDscDJ3cpaKBficC3FL7RSvn0psTzhJARI",nF=async t=>{const e={temperature:1,topP:.95,topK:40,maxOutputTokens:8192,responseMimeType:"text/plain"},s=await new eF(tF).getGenerativeModel({model:"gemini-1.5-flash",systemInstruction:`You are a fact-extraction AI designed to process lengthy HTML <ul> or <ol> lists and generate extremely concise facts for test preparation. Your primary goal is maximum brevity while retaining essential information. You should provide concise definitions for common knowledge keywords found within the notes, even if those keywords are not explicitly defined within the notes themselves. These definitions should be integrated into the relevant section, appearing as separate, concise facts.

Input Format: HTML <ul> or <ol> list containing user notes. The notes may be thousands of words long. Dates should be ignored unless explicitly requested by the user (e.g., "include dates").

Output Format: The output should be structured to reflect the sections identified in the input. Section titles should be enclosed in square brackets {}. For each section, provide a concise title reflecting its theme, followed by a series of extremely concise facts, each separated by the string "ENDFACT". If a keyword in a fact represents common knowledge that might benefit from a short definition for clarity, provide that definition as a separate, extremely concise fact within the same section following the fact containing the keyword.

Fact Generation Rules:

Extreme Conciseness: Facts should be as short as possible while still conveying accurate information. Prioritize brevity above all else. Omit unnecessary words (articles, prepositions) where possible without sacrificing clarity.

Keyword Focus: Use only the most essential keywords.

Active Voice (where appropriate): Use active voice for conciseness.

Clear and Simple Language: Avoid jargon and complex sentence structures. Use precise language.

Information Completeness: While brevity is paramount, ensure all crucial details are included. Do not sacrifice accuracy for extreme shortness.

Concise Integrated Keyword Definitions: Provide extremely concise definitions for common knowledge keywords as separate facts within the same section.

The number of facts per section should be proportional to the section's length, aiming for a manageable number (e.g., 3-7 facts per section, adjusting as needed). Exclude dates unless specifically requested. If time periods are present, keep only the period.

Example Output: (Illustrative; actual output depends on input)

Given input mentioning "fascism" and "appeasement" in the context of WWII:

{[Causes of World War II]}
German aggression, Treaty of Versailles, appeasement failure. ENDFACT
Rise of Fascism, Nazism. ENDFACT
Appeasement: Concessions to avoid war. ENDFACT
Fascism: Far-right ultranationalism. ENDFACT

Instructions: Process the provided HTML list. Divide the input into logical sections. Generate section titles in {}. Create extremely concise facts following the rules above, balancing extreme brevity with information completeness and providing concise, integrated definitions for key terms where beneficial. Handle very long input lists gracefully.`}).startChat({generationConfig:e,history:[]}).sendMessage(t);return console.log(s),s},YS=t=>{const e=Ts(),[n,r]=F.useState(null),i=ms();return F.useEffect(()=>{const l=async()=>{console.log("Fetching Note Set Data");try{if(e&&e.currentUser){const u=Fl(To,`users/${e.currentUser.uid}/note-sets`,t);console.log("Note set ref",u);const c=await d_(u);c.exists()?(console.log("Document data:",c.data()),r({...c.data(),noteSetId:t})):console.log("No such document!")}else console.log("User not logged in or user.currentUser is null")}catch(u){console.log("Error fetching document:",u)}};e&&e.currentUser&&t&&l()},[e,t]),[n,r,async l=>{console.log("Saving Note Set Data");try{if(e&&e.currentUser){const u=Fl(To,`users/${e.currentUser.uid}/note-sets`,t);(await d_(u)).exists()?await Tf(u,{noteSetName:l.noteSetName,noteSetId:l.noteSetId,noteSetRaw:l.noteSetRaw,noteSetFacts:l.noteSetFacts},{merge:!0}):await Tf(u,{noteSetName:l.noteSetName,noteSetId:l.noteSetId,noteSetRaw:l.noteSetRaw,noteSetFacts:l.noteSetFacts})}alert("User data saved successfully")}catch(u){alert("Error saving user data"),console.log(u)}},async()=>{try{if(e&&e.currentUser){const l=Fl(To,`users/${e.currentUser.uid}/note-sets/${t}`);await t2(l),i("/")}}catch(l){alert("Error deleting note set"),console.log(l)}}]},rF=()=>{const{noteSetId:t}=yE(),[e,n]=F.useState(!1);Ts();const[r,i,s,o]=YS(t),l=F.useRef(null),u=F.useRef(null),[c,d]=F.useState({"":[""]});ms(),F.useEffect(()=>{r&&(u.current.value=r.noteSetName||"",l.current.innerHTML=r.noteSetRaw||"",d(r.noteSetFacts||[]))},[r]);const p=A=>(A=A.replace(/<\/?(?!ul|ol|li)\w+[^>]*>/g,""),A.replace(/<(\w+)[^>]*>/g,"<$1>")),m=async()=>{s({...r,noteSetRaw:l.current.innerHTML,noteSetName:u.current.value,noteSetFacts:c})},_=async()=>{if(r.noteSetFacts.length>0&&!confirm("You already have note facts. Regenerating will delete the ones you already have. Do you want to proceed with generating note facts?")){console.log("User canceled the operation");return}console.log("started generating"),n(!0),await nF(p(l.current.innerHTML)).then(async A=>{let k=A.response.candidates[0].content.parts[0].text;k=k.replace(/\n/g," "),k=k.replace(/\*/g,""),console.log("Response Text",k);const R={},T=k.split(/\{\[(.*?)\]\}/);for(let v=1;v<T.length;v+=2){const I=T[v].trim(),O=T[v+1].split("ENDFACT").map(L=>L.trim()).filter(L=>L.length>0);R[I]||(R[I]=[]),R[I].push(...O)}d(R),console.log("Note Facts",R)}),n(!1),console.log("Ended generating")};return r?M.jsxs("div",{className:"flex flex-col align-center text-center gap-4",children:[M.jsxs(ic,{to:"/",className:"self-start m-2 p-2 bg-primary text-white rounded-md hover:scale-105 hover:shadow-lg transition-all",children:["<-"," Back"]}),e&&M.jsx("div",{className:"fixed w-screen h-screen bg-slate-900 bg-opacity-50 flex flex-col justify-center align-middle",children:M.jsxs("div",{className:"text-white text-2xl font-bold bg-slate-600 mx-auto p-3 rounded-md flex flex-row gap-2",children:[M.jsx("div",{children:"Generating Note Facts"}),M.jsxs("svg",{className:"animate-spin h-8 w-8 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[M.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),M.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]})]})}),M.jsxs("div",{className:"text-3xl m-8 font-bold",children:["Edit ",r.noteSetName??""]}),M.jsxs("div",{className:"bg-secondary flex flex-col align-center p-2 gap-4 w-[90%] mx-auto rounded-md shadow-md",children:[M.jsx("h2",{className:"text-xl font-bold",children:"Note Set Name"}),M.jsx("input",{className:"w-[90%] mx-auto rounded-md",ref:u}),M.jsx("h2",{className:"text-xl font-bold",children:"Raw Notes"}),M.jsx("div",{className:"w-[90%] mx-auto rounded-md max-h-80 overflow-scroll bg-white text-left",ref:l,contentEditable:!0})]}),M.jsx("button",{className:"bg-primary text-white font-bold text-md w-fit p-2 mx-auto rounded-md hover:scale-105 hover:shadow-lg transition-all",onClick:_,children:"Generate Note Facts"}),c.length!==0&&M.jsxs("div",{className:"bg-secondary flex flex-col w-[80%] mx-auto p-5 gap-2 rounded-md",children:[M.jsx("div",{className:"text-2xl font-bold",children:"Note Facts"}),typeof c=="object"&&!Array.isArray(c)?Object.entries(c).map(([A,k],R)=>M.jsxs("div",{className:"flex flex-col gap-2",children:[M.jsx("div",{className:"text-xl font-bold",children:A}),k.map((T,v)=>M.jsx("div",{className:"bg-white mx-auto p-1 rounded-md shadow-md",children:T}))]})):M.jsx("div",{children:"Outdated Note Set"})]}),M.jsx("button",{className:"bg-primary text-white font-bold text-md w-fit p-2 mx-auto rounded-md hover:scale-105 hover:shadow-lg transition-all",onClick:m,children:"Save Note Set Data"}),M.jsx("button",{className:"bg-red-600 text-white font-bold text-md w-fit p-2 mx-auto rounded-md hover:scale-105 hover:shadow-lg transition-all",onClick:()=>{confirm("Are you sure you want to delete this note set?")&&o()},children:"Delete Note Set"})]}):M.jsx("div",{children:"Loading..."})},iF=({text:t,cursorLocation:e})=>M.jsx("div",{className:`h-[${3*1}em] overflow-hidden`,children:M.jsx("div",{className:"flex flex-row font-mono flex-wrap pointer-events-none text-6xl whitespace-nowrap",children:t.map((r,i)=>M.jsx(M.Fragment,{children:M.jsx(oF,{wordData:r,wordCursorLocation:e[0]===i?e[1]:-1,needsSpace:i!==t.length-1},"word"+i)}))})}),sF=t=>{switch(t){case"CORRECT":return"text-white";case"UNTYPED":return"text-slate-500";case"INCORRECT":return"text-red-500";case"EXTRA":return"text-red-950";default:return""}},oF=({wordData:t,wordCursorLocation:e,needsSpace:n})=>{const r=[...t];return n&&r.push({value:" ",status:"UNTYPED"}),M.jsx("div",{className:"flex flex-row",children:r.map((i,s)=>M.jsx("div",{className:"relative",children:M.jsx(aF,{hasCursor:s===e,letterText:i.value,status:i.status})},"letter"+s))})},aF=({letterText:t,status:e,hasCursor:n})=>{const r=F.useRef(null);return F.useEffect(()=>{n&&r.current&&r.current.scrollIntoView({behavior:"smooth",block:"center"})},[n]),M.jsxs(M.Fragment,{children:[n&&M.jsx("span",{ref:r,className:"absolute left-[0] top-0 h-full w-0.5 bg-white animate-ping"}),M.jsx("span",{className:"inline-block w-[1ch] "+sF(e),children:t})]})},lF=({highlightedKeys:t})=>{const e=[["`","1","2","3","4","5","6","7","8","9","0","-","=","Backspace"],["Tab","Q","W","E","R","T","Y","U","I","O","P","[","]","\\"],["CapsLock","A","S","D","F","G","H","J","K","L",";","'","Enter"],["Shift","Z","X","C","V","B","N","M",",",".","/","Shift"],["Control","Alt","Space","Alt"]];return M.jsx("div",{className:"flex flex-col align-middle justify-start gap-2",children:e.map((n,r)=>M.jsx("div",{className:"flex flex-row align-middle justify-center gap-2",children:n.map((i,s)=>M.jsx("div",{className:`bg-slate-700 ${t.includes(i)?"bg-primary":""} text-slate-400 text-2xl h-10 w-fit min-w-8 text-center rounded-md padding-2 `,children:i},s))},r))})},uF=()=>{const{noteSetId:t}=yE(),[e,n]=F.useState(""),[r,i]=F.useState(""),[s,o]=YS(t),[l,u]=F.useState([["",""]]),[c,d]=F.useState("");Ts();const[p,m]=F.useState(0),[_,A]=F.useState(0);F.useEffect(()=>(window.addEventListener("keydown",k),()=>{window.removeEventListener("keydown",k)}),[]),F.useEffect(()=>{if(s){const I=[];Object.entries(s.noteSetFacts).forEach(([O,L])=>{L.forEach(j=>{I.push([O,j])})}),u(I)}},[s]),F.useEffect(()=>{if(s){const I=l[p][1];n(I),d(l[p][0])}},[p,l]);const k=I=>{const O=I.key.length===1;switch(I.key){case"Enter":R();break;case"Backspace":I.ctrlKey&&i(L=>{console.log("CTRL BACKSPACE");const j=L.split(" ");return j.pop(),j.join(" ")}),i(L=>L.slice(0,-1));break;default:if(!O)return;i(L=>L+I.key);break}};F.useEffect(()=>{_>5&&(m(I=>I+1),A(0))},[_]);const R=()=>{A(I=>I+1),i("")},T=I=>{const O=r.split(" "),L=e.split(" "),j=[];for(let E=0;E<L.length;E++){const y=[];for(let w=0;w<L[E].length;w++){let S="INCORRECT";E>=O.length||!O[E]||w>=O[E].length?S="UNTYPED":O[E][w]===L[E][w]&&(S="CORRECT");const P=L[E][w];y.push({value:P,status:S})}if(O[E]&&O[E].length>L[E].length){const w=O[E].substring(L[E].length);for(const S in w)y.push({value:w[S],status:"EXTRA"})}j.push(y)}return j},v=I=>{const O=r.split(" ");e.split(" ");const L=O.length-1,j=O[L].length;return[L,j]};return M.jsx("div",{className:"relative bg-slate-800 h-screen p-5 overflow-hidden flex flex-col justify-between",children:s?M.jsxs(M.Fragment,{children:[M.jsx(ic,{to:"/",className:"absolute top-2 left-2 m-2 p-2 bg-primary text-white rounded-md hover:scale-105 hover:shadow-lg transition-all",children:"Back"}),M.jsx("div",{className:"absolute top-2 right-4 text-4xl text-blue-400 font-bold",children:_}),M.jsx("div",{className:"self-center text-primary text-3xl",children:c}),M.jsx(iF,{text:T(),cursorLocation:v()}),M.jsx(lF,{highlightedKeys:[]})]}):M.jsx("div",{children:"Loading..."})})},cF=()=>{const[t,e]=F.useState(!0),[n,r]=F.useState(""),[i,s]=F.useState(""),[o,l]=F.useState(""),[u,c]=F.useState(""),[d,p]=F.useState(""),m=ms();F.useEffect(()=>{const R=iM(Vi,T=>{T&&(console.log("User is logged in",T),m("/"))});return()=>R()},[m]);const _=async R=>{R.preventDefault();try{await tM(Vi,n,i)}catch(T){p(T.message)}},A=async()=>{try{await CM(Vi,_V)}catch(R){p(R.message)}},k=async R=>{R.preventDefault();try{await eM(Vi,o,u)}catch(T){p(T.message)}};return M.jsx("div",{className:"w-screen h-screen flex flex-col justify-center",children:t?M.jsxs("div",{className:"mx-auto bg-white p-3 rounded-md shadow-xl text-lg text-center flex flex-col align-middle justify-center",children:[M.jsx("h2",{className:"text-xl font-bold",children:"Login"}),M.jsxs("form",{onSubmit:_,children:[M.jsxs("div",{children:[M.jsx("label",{children:"Email:"}),M.jsx("input",{type:"email",value:n,onChange:R=>r(R.target.value),required:!0})]}),M.jsxs("div",{children:[M.jsx("label",{children:"Password:"}),M.jsx("input",{type:"password",value:i,onChange:R=>s(R.target.value),required:!0})]}),d&&M.jsx("p",{style:{color:"red"},children:d}),M.jsx("button",{type:"submit",className:"mt-3 bg-blue-500 text-white p-2 rounded",children:"Login"})]}),M.jsx("button",{onClick:A,className:"mt-3 bg-blue-500 text-white p-2 rounded",children:"Login with Google"}),M.jsx("button",{className:"self-end mt-4",onClick:()=>{e(!1)},children:"Register"})]}):M.jsxs("div",{className:"mx-auto bg-white p-3 rounded-md shadow-xl text-lg text-center flex flex-col align-middle justify-center",children:[M.jsx("h2",{className:"text-xl font-bold mt-5",children:"Register"}),M.jsxs("form",{onSubmit:k,children:[M.jsxs("div",{children:[M.jsx("label",{children:"Email:"}),M.jsx("input",{type:"email",value:o,onChange:R=>l(R.target.value),required:!0})]}),M.jsxs("div",{children:[M.jsx("label",{children:"Password:"}),M.jsx("input",{type:"password",value:u,onChange:R=>c(R.target.value),required:!0})]}),d&&M.jsx("p",{style:{color:"red"},children:d}),M.jsx("button",{type:"submit",className:"mt-3 bg-blue-500 text-white p-2 rounded",children:"Register"})]}),M.jsx("button",{className:"self-end mt-4",onClick:()=>{e(!0)},children:"Login"})]})})},hF="/notes-review-app";function dF(){return M.jsx(wV,{children:M.jsx(SV,{children:M.jsx(eP,{basename:hF,children:M.jsxs(GA,{children:[M.jsx(Zs,{exact:!0,path:"/",element:M.jsx(IV,{})}),M.jsx(Zs,{path:"/edit/:noteSetId",element:M.jsx(rF,{})}),M.jsx(Zs,{path:"/type/:noteSetId",element:M.jsx(uF,{})}),M.jsx(Zs,{path:"/login",element:M.jsx(cF,{})})]})})})})}lE(document.getElementById("root")).render(M.jsx(F.StrictMode,{children:M.jsx(dF,{})}));
