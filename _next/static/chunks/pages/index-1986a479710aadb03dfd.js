_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(i.default.useContext(r.AmpStateContext))};var o,i=(o=n("q1tI"))&&o.__esModule?o:{default:o},r=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,o=e.hybrid,i=void 0!==o&&o,r=e.hasQuery,a=void 0!==r&&r;return n||i&&a}},"7W2i":function(e,t,n){var o=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var o,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var r=o?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(n,i,r):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),r=(o=n("Xuae"))&&o.__esModule?o:{default:o},a=n("lwAK"),c=n("FYa8"),d=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function f(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(l,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,o={};return function(i){var r=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var a=i.key.slice(i.key.indexOf("$")+1);e.has(a)?r=!1:e.add(a)}switch(i.type){case"title":case"base":t.has(i.type)?r=!1:t.add(i.type);break;case"meta":for(var c=0,d=p.length;c<d;c++){var s=p[c];if(i.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?r=!1:n.add(s);else{var u=i.props[s],l=o[s]||new Set;l.has(u)?r=!1:(l.add(u),o[s]=l)}}}return r}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,i.useContext)(a.AmpStateContext),o=(0,i.useContext)(c.HeadManagerContext);return i.default.createElement(r.default,{reduceComponentsToState:f,headManager:o,inAmpMode:(0,d.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h},ALdH:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var o=n("nKUr"),i=n("vOnD"),r=n("xPX6"),a=i.c.section.withConfig({displayName:"contact__ContactPageStyled",componentId:"sc-1g4tn3z-0"})(["align-items:center;display:flex;flex-direction:column;margin:auto;justify-content:center;max-width:1400px;padding:",";@media only screen and (min-device-width:1024px){align-items:center;flex-direction:row;flex-flow:row-reverse;justify-content:space-between;}"],Object(r.b)(3)),c=i.c.img.withConfig({displayName:"contact__ContactImageStyled",componentId:"sc-1g4tn3z-1"})(["   width:100%;max-width:550px;padding:0 ",";@media only screen and (min-device-width:1024px){max-width:450px;}@media only screen and (min-device-width:1440px){max-width:650px;}"],Object(r.b)(2)),d=i.c.section.withConfig({displayName:"contact__LeftContent",componentId:"sc-1g4tn3z-2"})(["         align-items:center;display:flex;flex-direction:column;max-width:650px;margin-top:",";padding:0 ",";@media only screen and (min-device-width:1024px){display:block;}"],Object(r.b)(3),Object(r.b)(3)),s=i.c.div.withConfig({displayName:"contact__TitleStyled",componentId:"sc-1g4tn3z-3"})(["     font-size:3.4rem;font-weight:bold;"]),u=i.c.div.withConfig({displayName:"contact__DescStyled",componentId:"sc-1g4tn3z-4"})(["     font-size:1.6rem;font-weight:200;text-align:justify;padding:"," 0;"],Object(r.b)(3)),l=i.c.button.withConfig({displayName:"contact__Button",componentId:"sc-1g4tn3z-5"})(["color:white;text-decoration:none;border:none;font-size:1.6rem;background-color:",";border-radius:",";padding:"," ",";"],(function(e){return e.theme.primaryColor}),Object(r.b)(3),Object(r.b)(1.5),Object(r.b)(3));function p(){return Object(o.jsxs)(a,{id:"contact",children:[Object(o.jsx)(c,{src:"".concat(r.a,"/images/chat.svg")}),Object(o.jsxs)(d,{children:[Object(o.jsx)(s,{children:"Join the community!"}),Object(o.jsx)(u,{children:"You can chat with us on our official facebook group"}),Object(o.jsx)(l,{onClick:function(){window.open("https://www.facebook.com/CarinderyaOfficialFB","_blank")},children:"Visit our page"})]})]})}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},CH2o:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var o=n("nKUr"),i=n("vOnD"),r=n("xPX6"),a=i.c.section.withConfig({displayName:"home__HomePageStyled",componentId:"olqzs5-0"})(["align-items:center;display:flex;flex-direction:column;height:80vh;justify-content:center;margin:auto;max-width:1400px;padding:",";@media only screen and (min-device-width:768px){align-items:center;flex-direction:row;flex-flow:row-reverse;justify-content:space-between;}"],Object(r.b)(3)),c=i.c.img.withConfig({displayName:"home__MokcupImageStyled",componentId:"olqzs5-1"})(["width:80%;padding:0 ",";@media only screen and (min-device-width:768px){width:50%;}@media only screen and (min-device-width:1024px){max-width:600px;}"],Object(r.b)(2)),d=i.c.section.withConfig({displayName:"home__LeftContent",componentId:"olqzs5-2"})(["max-width:500px;margin-top:",";padding:0 ",";"],Object(r.b)(3),Object(r.b)(3)),s=i.c.img.withConfig({displayName:"home__LogoStyled",componentId:"olqzs5-3"})(["         width:250px;@media only screen and (min-device-width:1024px){width:300px;}"]),u=i.c.label.withConfig({displayName:"home__SloganStyled",componentId:"olqzs5-4"})(["display:block;font-size:2rem;font-weight:medium;text-transform:uppercase;margin-top:",";"],Object(r.b)(1)),l=i.c.div.withConfig({displayName:"home__DescStyled",componentId:"olqzs5-5"})(["     font-size:1.6rem;font-weight:200;text-align:justify;margin-top:",";"],Object(r.b)(3)),p=i.c.img.withConfig({displayName:"home__GooglePlayStyled",componentId:"olqzs5-6"})(["         margin-top:",";"],Object(r.b)(5));function f(){return Object(o.jsxs)(a,{id:"home",children:[Object(o.jsx)(c,{src:"".concat(r.a,"/images/mockup.png")}),Object(o.jsxs)(d,{children:[Object(o.jsx)(s,{src:"".concat(r.a,"/images/logo.svg")}),Object(o.jsx)(u,{children:"Good Food Begins at Home"}),Object(o.jsx)(l,{children:"Start your first online restaurant with us or browse through a wide selection food specialties from your neighborhood!"}),Object(o.jsx)(p,{src:"".concat(r.a,"/images/google-play.png")})]})]})}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var o;t.__esModule=!0,t.HeadManagerContext=void 0;var i=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.HeadManagerContext=i},Ijbi:function(e,t,n){var o=n("WkPL");e.exports=function(e){if(Array.isArray(e))return o(e)}},Juyh:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var o=n("nKUr"),i=n("vOnD"),r=n("xPX6"),a=i.c.section.withConfig({displayName:"about__AboutPageStyled",componentId:"w8yzyn-0"})(["background-color:",";"],(function(e){return e.theme.lightGrey})),c=i.c.section.withConfig({displayName:"about__AboutPageContainerStyled",componentId:"w8yzyn-1"})(["     align-items:center;display:flex;flex-direction:column;margin:auto;height:80vh;justify-content:center;max-width:1400px;padding:",";@media only screen and (min-device-width:1024px){align-items:center;flex-direction:row;justify-content:space-between;}"],Object(r.b)(3)),d=i.c.img.withConfig({displayName:"about__AboutImageStyled",componentId:"w8yzyn-2"})(["         width:100%;max-width:550px;padding:0 ",";@media only screen and (min-device-width:1024px){max-width:450px;}@media only screen and (min-device-width:1440px){max-width:650px;}"],Object(r.b)(2)),s=i.c.section.withConfig({displayName:"about__LeftContent",componentId:"w8yzyn-3"})(["        align-items:center;display:flex;flex-direction:column;max-width:650px;margin-top:",";padding:0 ",";@media only screen and (min-device-width:1024px){display:block;}"],Object(r.b)(3),Object(r.b)(3)),u=i.c.div.withConfig({displayName:"about__TitleStyled",componentId:"w8yzyn-4"})(["     font-size:3.4rem;font-weight:bold;"]),l=i.c.div.withConfig({displayName:"about__Spacer",componentId:"w8yzyn-5"})(["margin-top:",";"],Object(r.b)(5)),p=i.c.div.withConfig({displayName:"about__DescStyled",componentId:"w8yzyn-6"})(["     font-size:1.6rem;font-weight:200;text-align:justify;padding:"," 0;"],Object(r.b)(3));function f(){return Object(o.jsx)(a,{id:"about",children:Object(o.jsxs)(c,{children:[Object(o.jsx)(d,{src:"".concat(r.a,"/images/about-image.svg")}),Object(o.jsxs)(s,{children:[Object(o.jsx)(u,{children:"Our Mission"}),Object(o.jsx)(p,{children:"With our skills and expertise, we provide emphasis on quality, reliability and convenience to build confidence and long lasting relationship with our partners."}),Object(o.jsx)(l,{}),Object(o.jsx)(u,{children:"Our Vision"}),Object(o.jsx)(p,{children:"To provide the knowledge in applying technology  to create, improve and establish business opportunities to communities locally and globally in food services."})]})]})})}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var o=n("Ijbi"),i=n("EbDI"),r=n("ZhPi"),a=n("Bnag");e.exports=function(e){return o(e)||i(e)||r(e)||a()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var o=n("nKUr"),i=n("8Kt/"),r=n.n(i),a=n("vOnD"),c=n("q1tI"),d=n("xPX6"),s=a.c.nav.withConfig({displayName:"navbar__NavBarStyled",componentId:"sy45t4-0"})(["   align-items:center;display:flex;flex-direction:column;font-family:SFProRounded;font-weight:200;padding:"," ",";@media only screen and (min-device-width:768px){flex-direction:row;}"],Object(d.b)(3),Object(d.b)(1.5)),u=a.c.div.withConfig({displayName:"navbar__NavBarItemsStyled",componentId:"sy45t4-1"})(["   display:flex;margin-top:",";@media only screen and (min-device-width:768px){margin-left:auto;}"],Object(d.b)(1)),l=a.c.a.withConfig({displayName:"navbar__NavBarItemStyled",componentId:"sy45t4-2"})(["     background-color:",";border-radius:",";color:",";padding:"," ",";margin:",";"],(function(e){return e.active?e.theme.primaryColor:"white"}),Object(d.b)(3),(function(e){return e.active?"white":e.theme.primaryTextColor}),Object(d.b)(.5),Object(d.b)(1),(function(e){return e.active?"0 ".concat(Object(d.b)(1)):0})),p=[{name:"Home",route:"home"},{name:"About",route:"about"},{name:"Contact Us",route:"contact"}];function f(){var e=Object(c.useState)("home"),t=e[0],n=e[1];return Object(o.jsxs)(s,{children:[Object(o.jsx)("img",{src:"".concat(d.a,"/images/icon.svg")}),Object(o.jsx)(u,{children:p.map((function(e){return Object(o.jsx)(l,{active:t===e.route,onClick:function(){return function(e){var t=document.getElementById(e).getBoundingClientRect().top+window.pageYOffset+-10;window.scrollTo({top:t,behavior:"smooth"}),n(e)}(e.route)},children:e.name},e.route)}))})]})}var m=n("Juyh"),h=n("ALdH"),b=n("CH2o"),y=a.c.div.withConfig({displayName:"pages__AppStyled",componentId:"sc-87gh2i-0"})(["   margin:auto;max-width:1400px;padding:0 ",";"],Object(d.b)(3)),g=a.c.footer.withConfig({displayName:"pages__FooterStyled",componentId:"sc-87gh2i-1"})(["   font-size:1.2rem;margin:auto;max-width:1400px;text-align:center;margin-top:",";padding:",";@media only screen and (min-device-width:1024px){text-align:left;}"],Object(d.b)(5),Object(d.b)(3));function x(){return Object(o.jsx)(a.a,{theme:d.c,children:Object(o.jsxs)("div",{children:[Object(o.jsxs)(r.a,{children:[Object(o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(o.jsx)("title",{children:"Carinderya"}),Object(o.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(o.jsxs)("main",{children:[Object(o.jsx)(y,{children:Object(o.jsx)(f,{})}),Object(o.jsx)(b.default,{}),Object(o.jsx)(m.default,{}),Object(o.jsx)(h.default,{})]}),Object(o.jsx)(g,{children:"Copyright \xa9 2020 | Project Linda Inc. All Rights Reserved"})]})})}},SksO:function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}},Xuae:function(e,t,n){"use strict";var o=n("RIqP"),i=n("lwsE"),r=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),c=n("a1gu"),d=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=d(e);if(t){var i=d(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),l=function(e){a(n,e);var t=s(n);function n(e){var r;return i(this,n),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(o(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=l},ZhPi:function(e,t,n){var o=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}},a1gu:function(e,t,n){var o=n("cDf5"),i=n("PJYZ");e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?i(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var o;t.__esModule=!0,t.AmpStateContext=void 0;var i=((o=n("q1tI"))&&o.__esModule?o:{default:o}).default.createContext({});t.AmpStateContext=i},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2]]]);