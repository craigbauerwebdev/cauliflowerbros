_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=u,t.useAmp=function(){return u(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,u=void 0!==i&&i;return n||o&&u}},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},u=n("lwAK"),a=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var u=o.key.slice(o.key.indexOf("$")+1);e.has(u)?i=!1:e.add(u)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var a=0,c=d.length;a<c;a++){var s=d[a];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?i=!1:n.add(s);else{var f=o.props[s],l=r[s]||new Set;l.has(f)?i=!1:(l.add(f),r[s]=l)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(u.AmpStateContext),r=(0,o.useContext)(a.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var v=h;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Juyh:function(e,t,n){"use strict";n.r(t);var r=n("nKUr"),o=n("8Kt/"),i=n.n(o),u=n("q1tI"),a=Object.prototype.hasOwnProperty;var c=new WeakMap,s=0;var f={isOnline:function(){return"undefined"===typeof navigator.onLine||navigator.onLine},isDocumentVisible:function(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))}},l=new(function(){function e(e){void 0===e&&(e={}),this.__cache=new Map(Object.entries(e)),this.__listeners=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.__cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.__cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.__cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.__cache.has(t)},e.prototype.clear=function(){this.__cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.__cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n){var r=void 0;null===e[n]||"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):c.has(e[n])?r=c.get(e[n]):(r=s,c.set(e[n],s++)),t+="@"+r}return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.__listeners.push(e),function(){if(n){n=!1;var r=t.__listeners.indexOf(e);r>-1&&(t.__listeners[r]=t.__listeners[t.__listeners.length-1],t.__listeners.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.__listeners;e<t.length;e++){(0,t[e])()}},e}());var d="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),p={onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,o){if(n.isDocumentVisible()&&!("number"===typeof n.errorRetryCount&&o.retryCount>n.errorRetryCount)){var i=Math.min(o.retryCount||0,8),u=~~((Math.random()+.5)*(1<<i))*n.errorRetryInterval;setTimeout(r,u,o)}},errorRetryInterval:1e3*(d?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(d?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,o;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((o=t.length)===n.length)for(;o--&&e(t[o],n[o]););return-1===o}if(!r||"object"===typeof t){for(r in o=0,t){if(a.call(t,r)&&++o&&!a.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===o}}return t!==t&&n!==n},fetcher:f.fetcher,isOnline:f.isOnline,isDocumentVisible:f.isDocumentVisible},h=Object(u.createContext)({});h.displayName="SWRConfigContext";var v=h,y=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},b=function(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=t.call(e,u)}catch(a){i=[6,a],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},g="undefined"===typeof window,m=g?null:window.requestIdleCallback||function(e){return setTimeout(e,1)},w=g?u.useEffect:u.useLayoutEffect,O={},_={},j={},x={},S={},M={},C={};if(!g&&window.addEventListener){var k=function(e){if(p.isDocumentVisible()&&p.isOnline())for(var t in e)e[t][0]&&e[t][0]()};window.addEventListener("visibilitychange",(function(){return k(j)}),!1),window.addEventListener("focus",(function(){return k(j)}),!1),window.addEventListener("online",(function(){return k(x)}),!1)}var P=function(e,t){void 0===t&&(t=!0);var n=l.serializeKey(e),r=n[0],o=n[2],i=n[3];if(!r)return Promise.resolve();var u=S[r];if(r&&u){for(var a=l.get(r),c=l.get(o),s=l.get(i),f=[],d=0;d<u.length;++d)f.push(u[d](t,a,c,s,d>0));return Promise.all(f).then((function(){return l.get(r)}))}return Promise.resolve(l.get(r))},E=function(e,t,n,r){var o=S[e];if(e&&o)for(var i=0;i<o.length;++i)o[i](!1,t,n,r)},I=function(e,t,n){return void 0===n&&(n=!0),y(void 0,void 0,void 0,(function(){var r,o,i,u,a,c,s,f,d,p,h,v;return b(this,(function(y){switch(y.label){case 0:if(r=l.serializeKey(e),o=r[0],i=r[2],!o)return[2];if("undefined"===typeof t)return[2,P(e,n)];if(M[o]=Date.now()-1,C[o]=0,u=M[o],a=_[o],!t||"function"!==typeof t)return[3,5];y.label=1;case 1:return y.trys.push([1,3,,4]),[4,t(l.get(o))];case 2:return c=y.sent(),[3,4];case 3:return f=y.sent(),s=f,[3,4];case 4:return[3,11];case 5:if(!t||"function"!==typeof t.then)return[3,10];y.label=6;case 6:return y.trys.push([6,8,,9]),[4,t];case 7:return c=y.sent(),[3,9];case 8:return d=y.sent(),s=d,[3,9];case 9:return[3,11];case 10:c=t,y.label=11;case 11:if(u!==M[o]||a!==_[o]){if(s)throw s;return[2,c]}if("undefined"!==typeof c&&l.set(o,c),l.set(i,s),C[o]=Date.now()-1,p=S[o]){for(h=[],v=0;v<p.length;++v)h.push(p[v](!!n,c,s,void 0,v>0));return[2,Promise.all(h).then((function(){if(s)throw s;return l.get(o)}))]}if(s)throw s;return[2,c]}}))}))};v.Provider;var A=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var r,o,i={};t.length>=1&&(r=t[0]),t.length>2?(o=t[1],i=t[2]):"function"===typeof t[1]?o=t[1]:"object"===typeof t[1]&&(i=t[1]);var a=l.serializeKey(r),c=a[0],s=a[1],f=a[2],d=a[3];i=Object.assign({},p,Object(u.useContext)(v),i);var h=Object(u.useRef)(i);w((function(){h.current=i})),"undefined"===typeof o&&(o=i.fetcher);var g=function(){var e=l.get(c);return"undefined"===typeof e?i.initialData:e},k=g(),P=l.get(f),A=!!l.get(d),R=Object(u.useRef)({data:!1,error:!1,isValidating:!1}),T=Object(u.useRef)({data:k,error:P,isValidating:A});Object(u.useDebugValue)(T.current.data);var D=Object(u.useState)(null)[1],V=Object(u.useCallback)((function(e){var t=!1;for(var n in e)T.current[n]!==e[n]&&(T.current[n]=e[n],R.current[n]&&(t=!0));if(t||i.suspense){if(W.current)return;D({})}}),[]),W=Object(u.useRef)(!1),H=Object(u.useRef)(c),K=Object(u.useRef)({emit:function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];W.current||(t=h.current)[e].apply(t,n)}}),L=Object(u.useCallback)((function(e,t){return I(H.current,e,t)}),[]),N=function(e,t){t&&(e[c]?e[c].push(t):e[c]=[t])},q=function(e,t){if(e[c]){var n=e[c],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},J=Object(u.useCallback)((function(t){return void 0===t&&(t={}),y(e,void 0,void 0,(function(){var e,n,r,u,a,p,h;return b(this,(function(v){switch(v.label){case 0:if(!c||!o)return[2,!1];if(W.current)return[2,!1];t=Object.assign({dedupe:!1},t),e=!0,n="undefined"!==typeof O[c]&&t.dedupe,v.label=1;case 1:return v.trys.push([1,6,,7]),V({isValidating:!0}),l.set(d,!0),n||E(c,T.current.data,T.current.error,!0),r=void 0,u=void 0,n?(u=_[c],[4,O[c]]):[3,3];case 2:return r=v.sent(),[3,5];case 3:return i.loadingTimeout&&!l.get(c)&&setTimeout((function(){e&&K.current.emit("onLoadingSlow",c,i)}),i.loadingTimeout),O[c]=null!==s?o.apply(void 0,s):o(c),_[c]=u=Date.now(),[4,O[c]];case 4:r=v.sent(),setTimeout((function(){delete O[c],delete _[c]}),i.dedupingInterval),K.current.emit("onSuccess",r,c,i),v.label=5;case 5:return _[c]>u||M[c]&&(u<=M[c]||u<=C[c]||0===C[c])?(V({isValidating:!1}),[2,!1]):(l.set(c,r),l.set(f,void 0),l.set(d,!1),a={isValidating:!1},"undefined"!==typeof T.current.error&&(a.error=void 0),i.compare(T.current.data,r)||(a.data=r),V(a),n||E(c,r,a.error,!1),[3,7]);case 6:return p=v.sent(),delete O[c],delete _[c],l.set(f,p),T.current.error!==p&&(V({isValidating:!1,error:p}),n||E(c,void 0,p,!1)),K.current.emit("onError",p,c,i),i.shouldRetryOnError&&(h=(t.retryCount||0)+1,K.current.emit("onErrorRetry",p,c,i,J,Object.assign({dedupe:!0},t,{retryCount:h}))),[3,7];case 7:return e=!1,[2,!0]}}))}))}),[c]);w((function(){if(c){W.current=!1;var e=T.current.data,t=g();H.current!==c&&(H.current=c),i.compare(e,t)||V({data:t});var n=function(){return J({dedupe:!0})};(i.revalidateOnMount||!i.initialData&&void 0===i.revalidateOnMount)&&("undefined"!==typeof t?m(n):n());var r=!1,o=function(){!r&&h.current.revalidateOnFocus&&(r=!0,n(),setTimeout((function(){return r=!1}),h.current.focusThrottleInterval))},u=function(){h.current.revalidateOnReconnect&&n()},a=function(e,t,r,o,u){void 0===e&&(e=!0),void 0===u&&(u=!0);var a={},c=!1;return"undefined"===typeof t||i.compare(T.current.data,t)||(a.data=t,c=!0),T.current.error!==r&&(a.error=r,c=!0),"undefined"!==typeof o&&T.current.isValidating!==o&&(a.isValidating=o,c=!0),c&&V(a),!!e&&(u?n():J())};return N(j,o),N(x,u),N(S,a),function(){V=function(){return null},W.current=!0,q(j,o),q(x,u),q(S,a)}}}),[c,J]),w((function(){var t=null,n=function(){return y(e,void 0,void 0,(function(){return b(this,(function(e){switch(e.label){case 0:return T.current.error||!h.current.refreshWhenHidden&&!h.current.isDocumentVisible()||!h.current.refreshWhenOffline&&!h.current.isOnline()?[3,2]:[4,J({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return h.current.refreshInterval&&!T.current.error&&(t=setTimeout(n,h.current.refreshInterval)),[2]}}))}))};return h.current.refreshInterval&&(t=setTimeout(n,h.current.refreshInterval)),function(){t&&clearTimeout(t)}}),[i.refreshInterval,i.refreshWhenHidden,i.refreshWhenOffline,J]);var z=Object(u.useMemo)((function(){var e={revalidate:J,mutate:L};return Object.defineProperties(e,{error:{get:function(){return R.current.error=!0,H.current===c?T.current.error:P},enumerable:!0},data:{get:function(){return R.current.data=!0,H.current===c?T.current.data:k},enumerable:!0},isValidating:{get:function(){return R.current.isValidating=!0,T.current.isValidating},enumerable:!0}}),e}),[J]);if(i.suspense){var F=l.get(c),B=l.get(f);if("undefined"===typeof F&&(F=k),"undefined"===typeof B&&(B=P),"undefined"===typeof F&&"undefined"===typeof B){if(O[c]||J(),O[c]&&"function"===typeof O[c].then)throw O[c];F=O[c]}if("undefined"===typeof F&&B)throw B;return{error:B,data:F,revalidate:J,mutate:L,isValidating:T.current.isValidating}}return z};var R=A,T=function(e){return fetch(e).then((function(e){return e.json()}))};t.default=function(){var e=R("/api/recipes",T),t=e.data,n=e.error;return console.log(t),n?Object(r.jsx)("div",{children:"Failed to load data"}):t?Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("title",{children:"About Us | Califlower Brothers"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),Object(r.jsx)("meta",{name:"description",content:"We are Cauliflower Brothers, a collective that is SuperCharged on Plants (not just Cauliflower). We provide recipes, info and laughs to our readers."})]}),Object(r.jsxs)("main",{children:[Object(r.jsx)("p",{children:"Our story coming soon"}),t.map((function(e){return Object(r.jsx)("p",{children:e.title.rendered})}))]})]}):Object(r.jsx)("div",{children:"Loading...!!!"})}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),u=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||u()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),u=(n("PJYZ"),n("7W2i")),a=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}t.__esModule=!0,t.default=void 0;var f=n("q1tI"),l=function(e){u(n,e);var t=s(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);t.default=l},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},rB5V:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])}},[["rB5V",0,1]]]);