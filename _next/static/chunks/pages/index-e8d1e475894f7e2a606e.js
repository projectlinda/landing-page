_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(r.default.useContext(i.AmpStateContext))};var o,r=(o=n("q1tI"))&&o.__esModule?o:{default:o},i=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,r=void 0!==o&&o,i=e.hasQuery,a=void 0!==i&&i;return n||r&&a}},"7W2i":function(e,t,n){var o=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=d,t.default=void 0;var o,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(n,r,i):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(o=n("Xuae"))&&o.__esModule?o:{default:o},a=n("lwAK"),c=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(d(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(r){var i=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var a=r.key.slice(r.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(r.type){case"title":case"base":t.has(r.type)?i=!1:t.add(r.type);break;case"meta":for(var c=0,u=f.length;c<u;c++){var s=f[c];if(r.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?i=!1:n.add(s);else{var d=r.props[s],l=o[s]||new Set;l.has(d)?i=!1:(l.add(d),o[s]=l)}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,r.useContext)(a.AmpStateContext),o=(0,r.useContext)(c.HeadManagerContext);return r.default.createElement(i.default,{reduceComponentsToState:p,headManager:o,inAmpMode:(0,u.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CH2o:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var o=n("nKUr"),r=n("vOnD"),i=n("xPX6"),a=r.c.section.withConfig({displayName:"home__HomePageStyled",componentId:"olqzs5-0"})(["display:flex;flex-direction:column;@media only screen and (min-device-width:768px){align-items:center;flex-direction:row;flex-flow:row-reverse;justify-content:space-between;}"]),c=r.c.img.withConfig({displayName:"home__MokcupImageStyled",componentId:"olqzs5-1"})(["width:100%;padding:0 ",";@media only screen and (min-device-width:768px){width:50%;}@media only screen and (min-device-width:1024px){max-width:600px;}"],Object(i.b)(2)),u=r.c.section.withConfig({displayName:"home__LeftContent",componentId:"olqzs5-2"})(["max-width:450px;margin-top:",";padding:0 ",";"],Object(i.b)(3),Object(i.b)(3)),s=r.c.img.withConfig({displayName:"home__LogoStyled",componentId:"olqzs5-3"})(["         width:250px;@media only screen and (min-device-width:1024px){width:300px;}"]),d=r.c.label.withConfig({displayName:"home__SloganStyled",componentId:"olqzs5-4"})(["display:block;font-size:1.5rem;font-weight:medium;text-transform:uppercase;margin-top:",";"],Object(i.b)(1)),l=r.c.div.withConfig({displayName:"home__DescStyled",componentId:"olqzs5-5"})(["     font-weight:200;text-align:justify;margin-top:",";"],Object(i.b)(3)),f=r.c.img.withConfig({displayName:"home__GooglePlayStyled",componentId:"olqzs5-6"})(["         margin-top:",";"],Object(i.b)(5));function p(){return Object(o.jsxs)(a,{children:[Object(o.jsx)(c,{src:"".concat(i.a,"/images/mockup.png")}),Object(o.jsxs)(u,{children:[Object(o.jsx)(s,{src:"".concat(i.a,"/images/logo.svg")}),Object(o.jsx)(d,{children:"Good Food Begins at Home"}),Object(o.jsx)(l,{children:"Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."}),Object(o.jsx)(f,{src:"".concat(i.a,"/images/google-play.png")})]})]})}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var o;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.HeadManagerContext=r},Ijbi:function(e,t,n){var o=n("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var o=n("Ijbi"),r=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return o(e)||r(e)||i(e)||a()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var o=n("nKUr"),r=n("8Kt/"),i=n.n(r),a=n("vOnD"),c=n("q1tI"),u=n("xPX6"),s=a.c.nav.withConfig({displayName:"navbar__NavBarStyled",componentId:"sy45t4-0"})(["   align-items:center;display:flex;flex-direction:column;font-family:SFProRounded;font-weight:200;padding:"," ",";@media only screen and (min-device-width:768px){flex-direction:row;}"],Object(u.b)(3),Object(u.b)(1.5)),d=a.c.div.withConfig({displayName:"navbar__NavBarItemsStyled",componentId:"sy45t4-1"})(["   display:flex;margin-top:",";@media only screen and (min-device-width:768px){margin-left:auto;}"],Object(u.b)(1)),l=a.c.a.withConfig({displayName:"navbar__NavBarItemStyled",componentId:"sy45t4-2"})(["     background-color:",";border-radius:",";color:",";padding:"," ",";margin:",";"],(function(e){return e.active?e.theme.primaryColor:"white"}),Object(u.b)(3),(function(e){return e.active?"white":e.theme.primaryTextColor}),Object(u.b)(.5),Object(u.b)(1),(function(e){return e.active?"0 ".concat(Object(u.b)(1)):0})),f=[{name:"Home",route:"home"},{name:"About",route:"about"},{name:"Contact Us",route:"contact"}];function p(){var e=Object(c.useState)("home"),t=e[0],n=e[1];return Object(o.jsxs)(s,{children:[Object(o.jsx)("img",{src:"".concat(u.a,"/images/icon.svg")}),Object(o.jsx)(d,{children:f.map((function(e){return Object(o.jsx)(l,{active:t===e.route,onClick:function(){return n(e.route)},children:e.name},e.route)}))})]})}var m=n("CH2o"),h=a.c.div.withConfig({displayName:"pages__AppStyled",componentId:"sc-87gh2i-0"})(["max-width:1400px;margin:auto;"]);function y(){return Object(o.jsx)(a.a,{theme:u.c,children:Object(o.jsxs)(h,{children:[Object(o.jsxs)(i.a,{children:[Object(o.jsx)("title",{children:"Carinderya"}),Object(o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(o.jsxs)("main",{children:[Object(o.jsx)(p,{}),Object(o.jsx)(m.default,{})]})]})})}},SksO:function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},Xuae:function(e,t,n){"use strict";var o=n("RIqP"),r=n("lwsE"),i=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),c=n("a1gu"),u=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var d=n("q1tI"),l=function(e){a(n,e);var t=s(n);function n(e){var i;return r(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(o(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=l},ZhPi:function(e,t,n){var o=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},a1gu:function(e,t,n){var o=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?r(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var r=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=r},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2]]]);