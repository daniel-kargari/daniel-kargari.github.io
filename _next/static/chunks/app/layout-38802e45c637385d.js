(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{6435:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return u}});var r=n(2265);let o=["light","dark"],a="(prefers-color-scheme: dark)",i="undefined"==typeof window,l=(0,r.createContext)(void 0),s={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(l))&&void 0!==e?e:s},u=e=>(0,r.useContext)(l)?r.createElement(r.Fragment,null,e.children):r.createElement(m,e),d=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:i=!0,storageKey:s="theme",themes:c=d,defaultTheme:u=n?"system":"light",attribute:m="data-theme",value:p,children:y,nonce:b})=>{let[g,k]=(0,r.useState)(()=>h(s,u)),[$,_]=(0,r.useState)(()=>h(s)),S=p?Object.values(p):c,E=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=w());let a=p?p[r]:r,l=t?v():null,s=document.documentElement;if("class"===m?(s.classList.remove(...S),a&&s.classList.add(a)):a?s.setAttribute(m,a):s.removeAttribute(m),i){let e=o.includes(u)?u:null,t=o.includes(r)?r:e;s.style.colorScheme=t}null==l||l()},[]),T=(0,r.useCallback)(e=>{k(e);try{localStorage.setItem(s,e)}catch(e){}},[e]),C=(0,r.useCallback)(t=>{_(w(t)),"system"===g&&n&&!e&&E("system")},[g,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(C),C(e),()=>e.removeListener(C)},[C]),(0,r.useEffect)(()=>{let e=e=>{e.key===s&&T(e.newValue||u)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[T]),(0,r.useEffect)(()=>{E(null!=e?e:g)},[e,g]);let O=(0,r.useMemo)(()=>({theme:g,setTheme:T,forcedTheme:e,resolvedTheme:"system"===g?$:g,themes:n?[...c,"system"]:c,systemTheme:n?$:void 0}),[g,T,e,$,n,c]);return r.createElement(l.Provider,{value:O},r.createElement(f,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:i,storageKey:s,themes:c,defaultTheme:u,attribute:m,value:p,children:y,attrs:S,nonce:b}),y)},f=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:i,enableColorScheme:l,defaultTheme:s,value:c,attrs:u,nonce:d})=>{let m="system"===s,f="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${u.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=l?o.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,r=!0)=>{let a=c?c[e]:e,i=t?e+"|| ''":`'${a}'`,s="";return l&&r&&!t&&o.includes(e)&&(s+=`d.style.colorScheme = '${e}';`),"class"===n?s+=t||a?`c.add(${i})`:"null":a&&(s+=`d[s](n,${i})`),s},w=e?`!function(){${f}${v(e)}}()`:i?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}${m?"":"else{"+v(s,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}else{${v(s,!1,!1)};}${h}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:w}})},()=>!0),h=(e,t)=>{let n;if(!i){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},w=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},7477:function(e,t,n){Promise.resolve().then(n.t.bind(n,2445,23)),Promise.resolve().then(n.bind(n,1368)),Promise.resolve().then(n.bind(n,9817)),Promise.resolve().then(n.t.bind(n,6087,23))},1368:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeProvider:function(){return a}});var r=n(7437);n(2265);var o=n(6435);function a(e){let{children:t,...n}=e;return(0,r.jsx)(o.f,{...n,children:t})}},2445:function(){},6087:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},622:function(e,t,n){"use strict";var r=n(2265),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,a={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:l.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},7437:function(e,t,n){"use strict";e.exports=n(622)},9817:function(e,t,n){"use strict";n.r(t),n.d(t,{Analytics:function(){return d},track:function(){return u}});var r=n(2265),o=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function a(){return"undefined"!=typeof window}function i(){return"production"}function l(){return(a()?window.vam:i())||"production"}function s(){return"production"===l()}function c(){return"development"===l()}function u(e,t,n){var r,o;if(!a()){let e="[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";if(s())console.warn(e);else throw Error(e);return}if(!t){null==(r=window.va)||r.call(window,"event",{name:e,options:n});return}try{let r=function(e,t){if(!e)return;let n=e,r=[];for(let[o,a]of Object.entries(e))"object"==typeof a&&null!==a&&(t.strip?n=function(e,{[e]:t,...n}){return n}(o,n):r.push(o));if(r.length>0&&!t.strip)throw Error(`The following properties are not valid: ${r.join(", ")}. Only strings, numbers, booleans, and null are allowed.`);return n}(t,{strip:s()});null==(o=window.va)||o.call(window,"event",{name:e,data:r,options:n})}catch(e){e instanceof Error&&c()&&console.error(e)}}function d(e){return(0,r.useEffect)(()=>{!function(e={debug:!0}){var t;if(!a())return;(function(e="auto"){if("auto"===e){window.vam=i();return}window.vam=e})(e.mode),o(),e.beforeSend&&(null==(t=window.va)||t.call(window,"beforeSend",e.beforeSend));let n=e.scriptSrc||(c()?"https://va.vercel-scripts.com/v1/script.debug.js":"/_vercel/insights/script.js");if(document.head.querySelector(`script[src*="${n}"]`))return;let r=document.createElement("script");r.src=n,r.defer=!0,r.dataset.sdkn="@vercel/analytics"+(e.framework?`/${e.framework}`:""),r.dataset.sdkv="1.3.1",e.disableAutoTrack&&(r.dataset.disableAutoTrack="1"),e.endpoint&&(r.dataset.endpoint=e.endpoint),e.dsn&&(r.dataset.dsn=e.dsn),r.onerror=()=>{let e=c()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${e}`)},c()&&!1===e.debug&&(r.dataset.debug="false"),document.head.appendChild(r)}({framework:e.framework||"react",...void 0!==e.route&&{disableAutoTrack:!0},...e})},[]),(0,r.useEffect)(()=>{e.route&&e.path&&function({route:e,path:t}){var n;null==(n=window.va)||n.call(window,"pageview",{route:e,path:t})}({route:e.route,path:e.path})},[e.route,e.path]),null}}},function(e){e.O(0,[971,938,744],function(){return e(e.s=7477)}),_N_E=e.O()}]);