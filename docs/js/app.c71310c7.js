(function(t){function e(e){for(var n,i,o=e[0],l=e[1],c=e[2],d=0,f=[];d<o.length;d++)i=o[d],r[i]&&f.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},s=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0319":function(t,e,a){},"034f":function(t,e,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},"0f43":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-wrap -mb-4"},t._l(t.data,function(e,n){return a("div",{key:n,staticClass:"w-full md:w-36 md:mr-4 mb-4"},[a("div",{staticClass:"mb-2 h-36 bg-gray-200 dark:bg-gray-800 border-gray-500 dark:border-gray-700",style:{borderWidth:e}}),a("CanvasBlockLabel",{attrs:{label:""+t.removeDefaultSuffix("border-"+n),value:e}})],1)}),0)},r=[],s=a("2bcf"),i=a("ed08"),o={components:{CanvasBlockLabel:s["a"]},props:{data:{type:Object,required:!0}},methods:{removeDefaultSuffix:i["c"]}},l=o,c=a("2877"),u=Object(c["a"])(l,n,r,!1,null,null,null);e["default"]=u.exports},"1e22":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space-y-6"},t._l(t.data,function(e,n){return a("div",{key:n},[a("CanvasSectionRow",{scopedSlots:t._u([{key:"default",fn:function(t){var n=t.blockClasses;return[a("div",{class:n,style:{maxWidth:e}})]}}],null,!0)}),a("CanvasBlockLabel",{attrs:{label:"max-w-"+n,value:e}})],1)}),0)},r=[],s=a("2bcf"),i=a("ad3c"),o={components:{CanvasBlockLabel:s["a"],CanvasSectionRow:i["a"]},props:{data:{type:Object,required:!0}}},l=o,c=a("2877"),u=Object(c["a"])(l,n,r,!1,null,null,null);e["default"]=u.exports},"1fb8":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"block z-50 sticky-section-header top-0",class:this.id},[a("div",{staticClass:"sm:inline-block duration-150 p-3 -mt-3 -mx-3 rounded-lg",class:{"stuck shadow-xl bg-white dark:bg-midnight bg-opacity-75 dark:bg-opacity-75":t.stuck}},[t._t("default")],2)])},r=[],s=(a("ac6a"),a("768b")),i=a("75fc"),o=(a("8615"),a("f400"),a("5df3"),a("1c4c"),a("d225")),l=a("b0b4"),c={SENTINEL:"sticky-events--sentinel",SENTINEL_TOP:"sticky-events--sentinel-top",SENTINEL_BOTTOM:"sticky-events--sentinel-bottom"},u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.container,n=void 0===a?document:a,r=e.enabled,s=void 0===r||r,i=e.stickySelector,l=void 0===i?".sticky-events":i;Object(o["a"])(this,t),this.container=n,this.observers=[],this.stickyElements=Array.from(this.container.querySelectorAll(l)),this.stickySelector=l,this.state=new Map,s&&this.enableEvents()}return Object(l["a"])(t,[{key:"setState",value:function(t){this.state.get(t)||this.state.set(t,{isSticky:!1,headerSentinel:this.addSentinel(t,c.SENTINEL_TOP),footerSentinel:this.addSentinel(t,c.SENTINEL_BOTTOM)})}},{key:"enableEvents",value:function(){var t=this;window.self===window.top?(this.observers={header:this.createHeaderObserver(),footer:this.createFooterObserver()},this.stickyElements.forEach(function(e){t.setState(e)})):console.warn("StickyEvents: There are issues with using IntersectionObservers in an iframe, canceling initialization. Please see https://github.com/w3c/IntersectionObserver/issues/183")}},{key:"disableEvents",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e&&this.stickyElements.forEach(function(e){return t.fire(!1,e)}),Object.values(this.observers).forEach(function(t){return t.disconnect()}),this.observers=null,this.state.clear()}},{key:"addStickies",value:function(t){var e,a=this;(e=this.stickyElements).push.apply(e,Object(i["a"])(t)),this.stickyElements.forEach(function(t){return a.setState(t)})}},{key:"addSticky",value:function(t){this.stickyElements.push(t),this.setState(t)}},{key:"addSentinel",value:function(t,e){var a=document.createElement("div"),n=t.parentElement;switch(t.style.cssText="\n      position: -webkit-sticky;\n      position: sticky;\n    ",a.classList.add(c.SENTINEL,e),Object.assign(a.style,{left:0,position:"absolute",right:0,visibility:"hidden"}),e){case c.SENTINEL_TOP:n.insertBefore(a,t),Object.assign(a.style,this.getSentinelPosition(t,a,e),{position:"relative"}),this.observers.header.observe(a);break;case c.SENTINEL_BOTTOM:n.appendChild(a),Object.assign(a.style,this.getSentinelPosition(t,a,e)),this.observers.footer.observe(a);break}return a}},{key:"createHeaderObserver",value:function(){var e=this;return new IntersectionObserver(function(a){var n=Object(s["a"])(a,1),r=n[0],i=r.boundingClientRect,o=r.isIntersecting,l=r.rootBounds,c=r.target.parentElement,u=c.querySelector(e.stickySelector);c.style.position="relative",i.bottom<l.bottom&&o?e.fire(!1,u,t.POSITION_TOP):i.bottom<=l.top&&!o&&e.fire(!0,u,t.POSITION_TOP)},Object.assign({threshold:0},!(this.container instanceof HTMLDocument)&&{root:this.container}))}},{key:"createFooterObserver",value:function(){var e=this;return new IntersectionObserver(function(a){var n=Object(s["a"])(a,1),r=n[0],i=r.boundingClientRect,o=r.isIntersecting,l=r.rootBounds,c=r.target.parentElement.querySelector(e.stickySelector);i.top<l.top&&i.bottom<l.bottom&&!o?e.fire(!1,c,t.POSITION_BOTTOM):i.bottom>l.top&&e.isSticking(c)&&o&&e.fire(!0,c,t.POSITION_BOTTOM)},Object.assign({threshold:1},!(this.container instanceof HTMLDocument)&&{root:this.container}))}},{key:"fire",value:function(e,a,n){a.dispatchEvent(new CustomEvent(t.CHANGE,{detail:{isSticky:e,position:n},bubbles:!0})),a.dispatchEvent(new CustomEvent(e?t.STUCK:t.UNSTUCK,{detail:{isSticky:e,position:n},bubbles:!0})),this.state.set(a,{isSticky:e})}},{key:"getSentinelPosition",value:function(t,e,a){var n=window.getComputedStyle(t),r=window.getComputedStyle(t.parentElement);switch(a){case c.SENTINEL_TOP:return{top:"calc(".concat(n.getPropertyValue("top")," * -1)"),height:1};case c.SENTINEL_BOTTOM:var s=parseInt(r.paddingTop);return{bottom:n.top,height:"".concat(t.getBoundingClientRect().height+s,"px")}}}},{key:"isSticking",value:function(t){var e=t.previousElementSibling,a=t.getBoundingClientRect().top,n=e.getBoundingClientRect().top,r=Math.round(Math.abs(a-n)),s=Math.abs(parseInt(window.getComputedStyle(e).getPropertyValue("top")));return r!==s}}]),t}();u.CHANGE="sticky-change",u.STUCK="sticky-stuck",u.UNSTUCK="sticky-unstuck",u.POSITION_BOTTOM="bottom",u.POSITION_TOP="top";var d={props:{id:{type:String,requied:!0}},data:function(){return{stuck:!1}},mounted:function(){var t=this,e=this.$el.getBoundingClientRect().y,a=new u({stickySelector:".".concat(this.id,".sticky-section-header")});a.stickyElements.forEach(function(a){a.addEventListener(u.CHANGE,function(a){t.stuck=a.detail&&a.detail.isSticky&&window.scrollY>=e-25})})}},f=d,p=(a("9710"),a("2877")),v=Object(p["a"])(f,n,r,!1,null,"215b9e24",null);e["a"]=v.exports},2624:function(t,e,a){},2702:function(t,e,a){"use strict";var n=a("35eb"),r=a.n(n);r.a},"2a7d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",t._g({staticClass:"\n    py-2 px-4\n    text-sm text-gray-800 dark:text-gray-400\n    border border-gray-400 dark:border-gray-700\n    hover:bg-gray-300 dark-hover:bg-gray-800\n    focus:outline-none rounded\n  ",class:{"bg-gray-300 dark:bg-gray-800":t.selected,"bg-white dark:bg-gray-900":!t.selected}},t.$listeners),[t._t("default")],2)},r=[],s={props:{selected:{type:Boolean}}},i=s,o=a("2877"),l=Object(o["a"])(i,n,r,!1,null,null,null);e["a"]=l.exports},"2b80":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space-y-6"},t._l(t.data.letterSpacing,function(e,n){return a("div",{key:n},[a("p",{staticClass:"mb-2 text-2xl leading-none text-gray-900 dark:text-gray-500",style:{letterSpacing:e}},[t._v("\n      "+t._s(t.data.typographyExample)+"\n    ")]),a("CanvasBlockLabel",{attrs:{label:"tracking-"+n,value:e}})],1)}),0)},r=[],s=a("2bcf"),i={components:{CanvasBlockLabel:s["a"]},props:{data:{type:Object,required:!0}}},o=i,l=a("2877"),c=Object(l["a"])(o,n,r,!1,null,null,null);e["default"]=c.exports},"2bcf":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"relative"},[a("div",{staticClass:"tooltip pointer-events-none absolute z-50 py-1 px-2 text-sm shadow-md bg-gray-800 dark:bg-midnight text-white rounded transition duration-200 overflow-hidden",class:{show:t.showCopyTooltip}},[t._v("\n      "+t._s(t.copyText)+"\n      "),a("br"),t.prefixedClassesToCopy.length>1?a("div",{staticClass:"-mx-2 mt-1 px-2 py-1 border-t border-gray-700 dark:border-gray-800"},t._l(t.prefixedClassesToCopy,function(e){return a("div",{key:e,staticClass:"text-teal-400"},[t._v("\n          "+t._s(e)+"\n        ")])}),0):t._e()]),a("input",{ref:"label",staticClass:"hidden",attrs:{readonly:""},domProps:{value:t.copyValue}}),a("div",{staticClass:"\n      inline-block\n      text-sm text-gray-800 dark:text-gray-400\n      font-mono hover:text-teal-600 dark-hover:text-teal-400\n      cursor-pointer break-words\n    ",on:{click:t.copy,mouseover:t.showCopy,mouseout:t.hideCopy}},[t._v("\n    "+t._s(t.prefixClassName(t.label))+"\n  ")]),t.value?a("div",{staticClass:"text-sm text-gray-700 dark:text-gray-500 break-words"},[t._v("\n    "+t._s(t.displayValue)+"\n  ")]):t._e()])},r=[],s=(a("6762"),a("2fdb"),a("ed08")),i=[],o={inject:["prefixClassName","getConfig"],props:{label:{type:String,required:!0},value:{type:String}},data:function(){return{showCopyTooltip:!1,copyText:"Copy",copyClasses:[]}},computed:{copyValue:function(){return this.prefixedClassesToCopy.join(" ")},displayValue:function(){return Object(s["a"])(this.value,this.getConfig())},prefixedClassesToCopy:function(){return this.copyClasses.map(this.prefixClassName)}},methods:{copy:function(t){var e=this;t.shiftKey?!i.includes(this.label)&&i.push(this.label):i=[this.label],this.copyClasses=i,this.$nextTick(function(){e.$refs.label.classList.remove("hidden"),e.$refs.label.select(),e.copyText=i.length>1?"Copied (".concat(i.length,")"):"Copied",document.execCommand("copy"),e.$refs.label.blur(),e.$refs.label.classList.add("hidden"),window.getSelection().removeAllRanges()})},showCopy:function(){this.copyClasses=[],this.copyText="Copy",this.showCopyTooltip=!0},hideCopy:function(){this.showCopyTooltip=!1}}},l=o,c=(a("6bd9"),a("2877")),u=Object(c["a"])(l,n,r,!1,null,"7c049a40",null);e["a"]=u.exports},"2bd8":function(t,e,a){},"35eb":function(t,e,a){},4026:function(t,e,a){},"42de":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"relative"},[a("svg",{staticClass:"absolute pointer-events-none",staticStyle:{right:"10px",top:"calc(50% - 6px)"},attrs:{width:"11",height:"11",viewBox:"0 0 9 9",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[a("path",{attrs:{d:"M4.657 4.243h3.76a.2.2 0 0 1 .141.341l-3.76 3.76a.2.2 0 0 1-.283 0l-3.76-3.76a.2.2 0 0 1 .142-.341h3.76z",fill:"#B8C2CC"}})]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.selected,expression:"selected"}],staticClass:"\n      h-full w-full\n      px-4 py-2\n      border\n      border-gray-400 dark:border-gray-700 focus:outline-none\n      bg-white dark:bg-gray-900\n      text-gray-800 dark:text-gray-400\n      rounded text-sm appearance-none",attrs:{id:"transition-duration"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.selected=e.target.multiple?a:a[0]}}},t._l(t.options,function(e,n){return a("option",{key:n,domProps:{value:n}},[t._v(t._s(e))])}),0)])},r=[],s={props:{options:{type:Object,required:!0},value:{type:[Object,String],default:null}},data:function(){return{selected:this.value}},watch:{selected:function(t){this.$emit("input",t)}}},i=s,o=a("2877"),l=Object(o["a"])(i,n,r,!1,null,null,null);e["a"]=l.exports},"47a5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("StickySectionHeader",{attrs:{id:"section-spacing"}},[a("div",{staticClass:"md:flex"},[a("ButtonGroup",{staticClass:"mb-2 md:mb-0"},[a("Button",{staticClass:"w-full sm:w-32",attrs:{selected:"p"===t.selectedProp},on:{click:function(e){t.selectedProp="p"}}},[t._v("\n          Padding\n        ")]),a("Button",{staticClass:"w-full sm:w-32",attrs:{selected:"m"===t.selectedProp},on:{click:function(e){t.selectedProp="m"}}},[t._v("Margin")]),a("Button",{staticClass:"w-full sm:w-auto",attrs:{selected:"-m"===t.selectedProp},on:{click:function(e){t.selectedProp="-m"}}},[t._v("Negative Margin")])],1),a("Select",{staticClass:"w-full md:w-32 md:ml-2",attrs:{options:t.$options.dimensionOptions},model:{value:t.dimensionProp,callback:function(e){t.dimensionProp=e},expression:"dimensionProp"}})],1)]),a("div",{staticClass:"space-y-6 mt-6"},t._l(t.spacing,function(e){var n=e.value,r=e.prop;return a("div",{key:r},[a("div",{staticClass:"mb-2 bg-gray-500 dark:bg-gray-700",style:{width:n,height:n}}),a("CanvasBlockLabel",{attrs:{label:""+t.selectedProp+(t.dimensionProp?t.dimensionProp:"")+"-"+r,value:n}})],1)}),0)],1)},r=[],s=(a("ac6a"),a("456d"),a("55dd"),a("ed08")),i=a("2bcf"),o=a("69e4"),l=a("2a7d"),c=a("42de"),u=a("1fb8"),d={components:{CanvasBlockLabel:i["a"],ButtonGroup:o["a"],Button:l["a"],Select:c["a"],StickySectionHeader:u["a"]},props:{data:{type:Object,required:!0},config:{type:Object}},data:function(){return{selectedProp:"p",dimensionProp:""}},dimensionOptions:{"":"All",t:"Top",r:"Right",b:"Bottom",l:"Left",x:"Horizontal",y:"Vertical"},computed:{spacing:function(){var t=this;return Object.keys(this.data).sort(function(e,a){var n=-1!==t.data[e].indexOf("rem")?Object(s["b"])(t.data[e],t.config):parseFloat(t.data[e]),r=-1!==t.data[a].indexOf("rem")?Object(s["b"])(t.data[a],t.config):parseFloat(t.data[a]);return n-r}).map(function(e){return{prop:e,value:t.data[e]}})}}},f=d,p=a("2877"),v=Object(p["a"])(f,n,r,!1,null,null,null);e["default"]=v.exports},5234:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space-y-6"},t._l(t.fontSizes,function(e){var n=e[0],r=e[1];return a("div",{key:n},[a("p",{staticClass:"mb-2 leading-none text-gray-900 dark:text-gray-500",style:{fontSize:r}},[t._v("\n      "+t._s(t.data.typographyExample)+"\n    ")]),a("CanvasBlockLabel",{attrs:{label:"text-"+n,value:t.getLabelValue(r)}})],1)}),0)},r=[],s=(a("ac6a"),a("ffc1"),a("55dd"),a("ed08")),i=a("2bcf"),o={components:{CanvasBlockLabel:i["a"]},props:{data:{type:Object,required:!0},config:{type:Object,required:!0}},computed:{fontSizes:function(){var t=this;return Object.entries(this.data.fontSize).sort(function(e,a){return Object(s["b"])(e[1],t.config)>Object(s["b"])(a[1],t.config)?1:Object(s["b"])(e[1],t.config)<Object(s["b"])(a[1],t.config)?-1:0})}},methods:{getLabelValue:function(t){return Array.isArray(t)?t[0]:t}}},l=o,c=a("2877"),u=Object(c["a"])(l,n,r,!1,null,null,null);e["default"]=u.exports},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"font-sans",attrs:{id:"app"}},[a("div",{staticClass:"flex justify-between items-center bg-white dark:bg-gray-900 border-b dark:border-gray-900 p-4 text-gray-700 dark:text-gray-500 text-xl font-bold"},[t._v("\n    Tailwind Config Viewer\n    "),a("a",{staticClass:"text-gray-500 hover:text-gray-700",attrs:{href:"https://github.com/rogden/tailwind-config-viewer",target:"_blank"}},[a("svg",{staticClass:"fill-current w-6 h-6",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[a("title",[t._v("GitHub")]),a("path",{attrs:{d:"M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0"}})])])]),a("Canvas",{attrs:{darkMode:t.darkMode},on:{"toggle-dark-mode":function(e){t.darkMode=e}}})],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-gray-100 dark:bg-midnight"},[t.config?t._e():a("div",{staticClass:"flex items-center justify-center",staticStyle:{height:"calc(100vh - 63px)"}},[a("p",{staticClass:"text-gray-600 text-center font-bold"},[t._v("Loading Config...")])]),t.config?[a("div",{staticClass:"pt-8 px-3 flex"},[a("div",{staticClass:"hidden md:block flex-none h-full overflow-y-auto top-0 sticky max-h-screen pt-2"},[a("ToggleSwitch",{staticClass:"mb-3 ml-3",attrs:{name:"dark-mode",value:t.darkMode,label:"Dark Mode"},on:{input:function(e){return t.$emit("toggle-dark-mode",e)}}}),a("div",{staticClass:"ml-3 text-sm text-gray-700 dark:text-gray-500"},[t._v("Tailwind v"+t._s(t.config.tailwindVersion))]),a("nav",{staticClass:"pt-3 pr-20 pb-12 px-3 h-full"},t._l(t.configTransformed,function(e){return a("a",{key:e.title,staticClass:"relative flex items-center py-2 hover:text-gray-900 dark-hover:text-gray-200 text-base rounded-sm",class:[t.activeSection===e?"text-gray-900 dark:text-gray-200":"text-gray-700 dark:text-gray-500"],attrs:{href:"#"+e.title},on:{click:function(a){return t.setActiveSection(e)}}},[a("div",{staticClass:"absolute rounded-full bg-gray-500 dark:bg-gray-600 transition duration-200",class:[t.activeSection===e?"visible opacity-100":"invisible opacity-0"],style:{width:"5px",height:"5px",left:"-12px"}}),t._v("\n            "+t._s(e.title)+"\n          ")])}),0)],1),a("div",{staticClass:"md:pl-4"},t._l(t.configTransformed,function(e){return a("CanvasSection",{key:e.title,attrs:{title:e.title,id:e.title}},[a("Intersect",{attrs:{threshold:[0],rootMargin:"-40% 0px -60% 0px"},on:{enter:function(a){return t.setActiveSection(e)},leaave:function(e){return t.setActiveSection(null)}}},[a(t.sectionComponent(e.component),{tag:"component",attrs:{data:e.data,config:t.config}})],1)],1)}),1)])]:t._e()],2)},o=[],l=(a("96cf"),a("3b8d")),c=a("c939"),u=a.n(c),d=a("760e");function f(t){return[{component:"Colors",title:"Colors",data:{backgroundColor:t.backgroundColor,borderColor:t.borderColor,textColor:t.textColor}},{themeKey:"spacing",component:"Spacing",title:"Spacing",data:t.spacing},{themeKey:"fontSize",component:"FontSizes",title:"Font Sizes",data:{fontSize:t.fontSize,typographyExample:t.configViewer.typographyExample}},{themeKey:"fontWeight",component:"FontWeight",title:"Font Weight",data:{fontWeight:t.fontWeight,typographyExample:t.configViewer.typographyExample}},{themeKey:"letterSpacing",component:"LetterSpacing",title:"Letter Spacing",data:{letterSpacing:t.letterSpacing,typographyExample:t.configViewer.typographyExample}},{themeKey:"lineHeight",component:"LineHeight",title:"Line Height",data:{lineHeight:t.lineHeight,typographyExample:t.configViewer.typographyExample}},{themeKey:"screens",component:"Screens",title:"Screens",data:t.screens},{themeKey:"boxShadow",component:"Shadows",title:"Shadows",data:t.boxShadow},{themeKey:"opacity",component:"Opacity",title:"Opacity",data:t.opacity},{themeKey:"borderRadius",component:"BorderRadius",title:"Border Radius",data:t.borderRadius},{themeKey:"borderWidth",component:"BorderWidth",title:"Border Width",data:t.borderWidth},{themeKey:"transitionTimingFunction",component:"Transitions",title:"Transitions",data:{timing:t.transitionTimingFunction,duration:t.transitionDuration,delay:t.transitionDelay}},{themeKey:"minWidth",component:"MinWidth",title:"Min Width",data:t.minWidth},{themeKey:"width",component:"Width",title:"Width",data:t.width},{themeKey:"maxWidth",component:"MaxWidth",title:"Max Width",data:t.maxWidth},{themeKey:"minHeight",component:"MinHeight",title:"Min Height",data:t.minHeight},{themeKey:"height",component:"Height",title:"Height",data:t.height},{themeKey:"maxHeight",component:"MaxHeight",title:"Max Height",data:t.maxHeight}].filter(function(e){var a=e.themeKey;return t[a]})}var p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"mb-12 max-w-full"},[a("h1",{staticClass:"mb-2 text-3xl text-gray-800 dark:text-gray-500"},[t._v(t._s(t.title))]),a("div",{staticClass:"bg-white dark:bg-gray-900 p-6 rounded border-gray-300 dark:border-gray-900 border"},[t._t("default")],2)])},v=[],b={props:{title:{type:String,required:!0}}},h=b,y=a("2877"),m=Object(y["a"])(h,p,v,!1,null,null,null),g=m.exports,k=a("8163"),C={theme:{configViewer:{baseFontSize:16,typographyExample:"The quick brown fox jumped over the lazy dog."}}},x={components:{CanvasSection:g,ToggleSwitch:k["a"],Intersect:d["a"]},provide:function(){return{prefixClassName:this.prefixClassName,getConfig:this.getConfig}},props:{darkMode:{type:Boolean,required:!1}},data:function(){return{activeSection:null,config:null,configTransformed:null}},methods:{sectionComponent:function(t){return a("c79b")("./".concat(t,".vue")).default},prefixClassName:function(t){return this.config.prefix?"".concat(this.config.prefix).concat(t):t},getConfig:function(){return this.config},setActiveSection:function(t){this.activeSection=t}},mounted:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(window.__TCV_CONFIG.configPath);case 2:return e=t.sent,t.next=5,e.json();case 5:this.config=t.sent,this.config=u()(this.config,C),this.configTransformed=f(this.config.theme);case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},w=x,S=Object(y["a"])(w,i,o,!1,null,null,null),_=S.exports,O=_,j={components:{Canvas:O},data:function(){return{darkMode:!1}},watch:{darkMode:function(t){document.querySelector("body").classList.toggle("mode-dark",t),localStorage.setItem("tcvDarkMode",t)}},mounted:function(){this.darkMode="true"===localStorage.getItem("tcvDarkMode")}},E=j,B=(a("034f"),Object(y["a"])(E,r,s,!1,null,null,null)),T=B.exports;a("a2f0");n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(T)}}).$mount("#app")},"64a9":function(t,e,a){},6812:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space-y-6"},t._l(t.data,function(e,n){return a("div",{key:n},[a("CanvasSectionRow",{style:{height:e},scopedSlots:t._u([{key:"default",fn:function(t){var n=t.blockClasses;return[a("div",{class:n,style:{height:e}})]}}],null,!0)}),a("CanvasBlockLabel",{attrs:{label:"max-h-"+n,value:e}})],1)}),0)},r=[],s=a("2bcf"),i=a("ad3c"),o={components:{CanvasBlockLabel:s["a"],CanvasSectionRow:i["a"]},props:{data:{type:Object,required:!0}}},l=o,c=a("2877"),u=Object(c["a"])(l,n,r,!1,null,null,null);e["default"]=u.exports},"68f4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space-y-6"},t._l(t.data.lineHeight,function(e,n){return a("div",{key:n},[a("div",{staticClass:"text-lg mb-2 text-gray-900 dark:text-gray-500",style:{lineHeight:e}},[a("p",[t._v(t._s(t.data.typographyExample))]),a("p",[t._v(t._s(t.data.typographyExample))])]),a("CanvasBlockLabel",{attrs:{label:"leading-"+n,value:e}})],1)}),0)},r=[],s=a("2bcf"),i={components:{CanvasBlockLabel:s["a"]},props:{data:{type:Object,required:!0}}},o=i,l=(a("fe83"),a("2877")),c=Object(l["a"])(o,n,r,!1,null,"3558d63b",null);e["default"]=c.exports},"69e4":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"button-group flex"},[t._t("default")],2)},r=[],s=(a("b761"),a("2877")),i={},o=Object(s["a"])(i,n,r,!1,null,null,null);e["a"]=o.exports},"6bd9":function(t,e,a){"use strict";var n=a("2bd8"),r=a.n(n);r.a},"70bf":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space-y-6"},t._l(t.data.fontWeight,function(e,n){return a("div",{key:n},[a("p",{staticClass:"mb-2 leading-none text-2xl text-gray-900 dark:text-gray-500",style:{fontWeight:e}},[t._v("\n      "+t._s(t.data.typographyExample)+"\n    ")]),a("CanvasBlockLabel",{attrs:{label:"font-"+n,value:e}})],1)}),0)},r=[],s=a("2bcf"),i={components:{CanvasBlockLabel:s["a"]},props:{data:{type:Object,required:!0}}},o=i,l=a("2877"),c=Object(l["a"])(o,n,r,!1,null,null,null);e["default"]=c.exports},8163:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],staticClass:"toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer",attrs:{type:"checkbox",name:t.name,id:t.name},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:function(e){var a=t.checked,n=e.target,r=!!n.checked;if(Array.isArray(a)){var s=null,i=t._i(a,s);n.checked?i<0&&(t.checked=a.concat([s])):i>-1&&(t.checked=a.slice(0,i).concat(a.slice(i+1)))}else t.checked=r}}}),a("label",{staticClass:"toggle-label block overflow-hidden h-6 rounded-full cursor-pointer",attrs:{for:t.name}})]),t.label?a("label",{staticClass:"text-xs text-gray-700 dark:text-gray-500",attrs:{for:t.name}},[t._v(t._s(t.label))]):t._e()])},r=[],s={props:{name:{type:String,required:!0},value:{type:Boolean,default:!1},label:{type:String,required:!1}},data:function(){return{checked:this.value}},watch:{checked:function(t){this.$emit("input",t)}}},i=s,o=(a("e99c"),a("2877")),l=Object(o["a"])(i,n,r,!1,null,null,null);e["a"]=l.exports},"87b8":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space-y-6"},[t._l(t.fixedWidths,function(e,n){return a("div",{key:n},[a("CanvasSectionRow",{scopedSlots:t._u([{key:"default",fn:function(t){var n=t.blockClasses;return[a("div",{class:n,style:{width:e.includes("vw")?"100%":e,maxWidth:"100%"}})]}}],null,!0)}),a("CanvasBlockLabel",{attrs:{label:"w-"+n,value:e}})],1)}),t._l(t.percentWidths,function(e,n){return a("div",{key:n,staticClass:"mb-6"},[a("CanvasSectionRow",{scopedSlots:t._u([{key:"default",fn:function(t){var n=t.blockClasses;return[a("div",{class:n,style:{width:e,maxWidth:"100%"}})]}}],null,!0)}),a("CanvasBlockLabel",{attrs:{label:"w-"+n,value:e}})],1)})],2)},r=[],s=a("bd86"),i=a("cebc"),o=(a("ac6a"),a("456d"),a("2bcf")),l=a("ad3c"),c={components:{CanvasBlockLabel:o["a"],CanvasSectionRow:l["a"]},props:{data:{type:Object,required:!0}},computed:{percentWidths:function(){var t=this;return Object.keys(this.data).filter(function(e){return-1!==t.data[e].indexOf("%")}).reduce(function(e,a){return Object(i["a"])({},e,Object(s["a"])({},a,t.data[a]))},{})},fixedWidths:function(){var t=this;return Object.keys(this.data).filter(function(e){return-1===t.data[e].indexOf("%")}).reduce(function(e,a){return Object(i["a"])({},e,Object(s["a"])({},a,t.data[a]))},{})}}},u=c,d=a("2877"),f=Object(d["a"])(u,n,r,!1,null,null,null);e["default"]=f.exports},"940f":function(t,e,a){},9710:function(t,e,a){"use strict";var n=a("4026"),r=a.n(n);r.a},9907:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-wrap -mb-4"},t._l(t.data,function(e,n){return a("div",{key:n,staticClass:"w-full md:w-36 md:mr-4 mb-4"},[a("div",{staticClass:"bg-gray-500 dark:bg-gray-700 mb-2 md:w-36 h-36",style:{borderRadius:e}}),a("CanvasBlockLabel",{attrs:{label:""+t.removeDefaultSuffix("rounded-"+n),value:e}})],1)}),0)},r=[],s=a("2bcf"),i=a("ed08"),o={components:{CanvasBlockLabel:s["a"]},props:{data:{type:Object,required:!0}},methods:{removeDefaultSuffix:i["c"]}},l=o,c=a("2877"),u=Object(c["a"])(l,n,r,!1,null,null,null);e["default"]=u.exports},a2f0:function(t,e,a){},a36e:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space-y-6"},t._l(t.data,function(e,n){return a("div",{key:n},[a("CanvasSectionRow",{attrs:{hasBg:!1},scopedSlots:t._u([{key:"default",fn:function(t){var n=t.blockClasses;return[a("div",{class:n,style:{maxWidth:e}})]}}],null,!0)}),a("CanvasBlockLabel",{attrs:{label:""+n+t.config.separator,value:e}})],1)}),0)},r=[],s=a("2bcf"),i=a("ad3c"),o={components:{CanvasBlockLabel:s["a"],CanvasSectionRow:i["a"]},props:{data:{type:Object,required:!0},config:{type:Object}}},l=o,c=a("2877"),u=Object(c["a"])(l,n,r,!1,null,null,null);e["default"]=u.exports},ad3c:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",t._b({staticClass:"mb-2 h-28",class:{"bg-gray-200 dark:bg-gray-800":t.hasBg}},"div",t.$attrs,!1),[t._t("default",null,{blockClasses:t.blockClasses})],2)},r=[],s={props:{hasBg:{type:Boolean,default:!0}},data:function(){return{blockClasses:"bg-gray-500 dark:bg-gray-700 h-28"}}},i=s,o=a("2877"),l=Object(o["a"])(i,n,r,!1,null,null,null);e["a"]=l.exports},b761:function(t,e,a){"use strict";var n=a("0319"),r=a.n(n);r.a},bd10:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space-y-6"},t._l(t.data,function(e,n){return a("div",{key:n},[a("CanvasSectionRow",{scopedSlots:t._u([{key:"default",fn:function(t){var n=t.blockClasses;return[a("div",{class:n,style:{maxWidth:e}})]}}],null,!0)}),a("CanvasBlockLabel",{attrs:{label:"min-w-"+n,value:e}})],1)}),0)},r=[],s=a("2bcf"),i=a("ad3c"),o={components:{CanvasBlockLabel:s["a"],CanvasSectionRow:i["a"]},props:{data:{type:Object,required:!0}}},l=o,c=a("2877"),u=Object(c["a"])(l,n,r,!1,null,null,null);e["default"]=u.exports},c79b:function(t,e,a){var n={"./BorderRadius.vue":"9907","./BorderWidth.vue":"0f43","./Colors.vue":"ee61","./FontSizes.vue":"5234","./FontWeight.vue":"70bf","./Height.vue":"e211","./LetterSpacing.vue":"2b80","./LineHeight.vue":"68f4","./MaxHeight.vue":"6812","./MaxWidth.vue":"1e22","./MinHeight.vue":"e3f7","./MinWidth.vue":"bd10","./Opacity.vue":"f7f9","./Screens.vue":"a36e","./Shadows.vue":"e9d1","./Spacing.vue":"47a5","./Transitions.vue":"efaf","./Width.vue":"87b8"};function r(t){var e=s(t);return a(e)}function s(t){var e=n[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}r.keys=function(){return Object.keys(n)},r.resolve=s,t.exports=r,r.id="c79b"},e211:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space-y-6"},t._l(t.data,function(e,n){return a("div",{key:n},[a("CanvasSectionRow",{style:{height:e},scopedSlots:t._u([{key:"default",fn:function(t){var n=t.blockClasses;return[a("div",{class:n,style:{height:e}})]}}],null,!0)}),a("CanvasBlockLabel",{attrs:{label:"h-"+n,value:e}})],1)}),0)},r=[],s=a("2bcf"),i=a("ad3c"),o={components:{CanvasBlockLabel:s["a"],CanvasSectionRow:i["a"]},props:{data:{type:Object,required:!0}}},l=o,c=a("2877"),u=Object(c["a"])(l,n,r,!1,null,null,null);e["default"]=u.exports},e3f7:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"space-y-6"},t._l(t.data,function(e,n){return a("div",{key:n},[a("CanvasSectionRow",{style:{minHeight:e,height:"auto"},scopedSlots:t._u([{key:"default",fn:function(t){var n=t.blockClasses;return[a("div",{class:n,style:{minHeight:e,height:"auto"}})]}}],null,!0)}),a("CanvasBlockLabel",{attrs:{label:"min-h-"+n,value:e}})],1)}),0)},r=[],s=a("2bcf"),i=a("ad3c"),o={components:{CanvasBlockLabel:s["a"],CanvasSectionRow:i["a"]},props:{data:{type:Object,required:!0}}},l=o,c=a("2877"),u=Object(c["a"])(l,n,r,!1,null,null,null);e["default"]=u.exports},e99c:function(t,e,a){"use strict";var n=a("940f"),r=a.n(n);r.a},e9d1:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-wrap -mb-4"},t._l(t.data,function(e,n){return a("div",{key:n,staticClass:"mb-4 md:mr-8 w-full md:w-36"},[a("div",{staticClass:"mb-2 w-full md:w-36 h-36 dark:bg-gray-700",style:{boxShadow:e}}),a("CanvasBlockLabel",{attrs:{label:""+t.removeDefaultSuffix("shadow-"+n),value:e}})],1)}),0)},r=[],s=a("2bcf"),i=a("ed08"),o={components:{CanvasBlockLabel:s["a"]},props:{data:{type:Object,required:!0}},methods:{removeDefaultSuffix:i["c"]}},l=o,c=a("2877"),u=Object(c["a"])(l,n,r,!1,null,null,null);e["default"]=u.exports},ed08:function(t,e,a){"use strict";a.d(e,"c",function(){return n}),a.d(e,"b",function(){return r}),a.d(e,"a",function(){return s});a("386d"),a("a481");var n=function(t){return t.replace(/-(default|DEFAULT)/,"")},r=function(t,e){return"string"===typeof t&&-1===t.search("rem")?parseFloat(t):parseFloat(t)*e.theme.configViewer.baseFontSize},s=function(t,e){return-1===t.search("rem")?t:"".concat(t," (").concat(r(t,e),"px)")}},ee61:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("StickySectionHeader",{attrs:{id:"section-colors"}},[a("ButtonGroup",[a("Button",{staticClass:"w-full sm:w-32",attrs:{selected:"backgroundColor"===t.selectedProp},on:{click:function(e){t.selectedProp="backgroundColor"}}},[t._v("\n        Background\n      ")]),a("Button",{staticClass:"w-full sm:w-32",attrs:{selected:"textColor"===t.selectedProp},on:{click:function(e){t.selectedProp="textColor"}}},[t._v("\n        Text\n      ")]),a("Button",{staticClass:"w-full sm:w-32",attrs:{selected:"borderColor"===t.selectedProp},on:{click:function(e){t.selectedProp="borderColor"}}},[t._v("\n        Border\n      ")])],1)],1),a("div",{staticClass:"flex flex-wrap -mb-4 mt-6"},t._l(t.selectedColorItems,function(e,n){return a("div",{key:n,staticClass:"w-full md:w-36 mb-4 md:mr-4"},[a("div",{staticClass:"mb-2 flex-none w-full md:w-36 h-16 md:h-36 flex items-center justify-center",class:{"border border-gray-300":"textColor"===t.selectedProp},style:t.tileStyle(e)},["textColor"===t.selectedProp?a("span",{staticClass:"text-3xl",style:{color:e}},[t._v("Aa")]):t._e()]),a("CanvasBlockLabel",{attrs:{label:t.selectedPropClassPrefix+"-"+n,value:e}})],1)}),0)],1)},r=[],s=a("2bcf"),i=a("69e4"),o=a("2a7d"),l=a("1fb8"),c={components:{CanvasBlockLabel:s["a"],ButtonGroup:i["a"],Button:o["a"],StickySectionHeader:l["a"]},props:{data:{type:Object,required:!0}},data:function(){return{selectedProp:"backgroundColor"}},computed:{selectedColorItems:function(){return this.data[this.selectedProp]},selectedPropClassPrefix:function(){var t={backgroundColor:"bg",textColor:"text",borderColor:"border"};return t[this.selectedProp]}},methods:{tileStyle:function(t){return"backgroundColor"===this.selectedProp?{backgroundColor:t}:"borderColor"===this.selectedProp?{border:"2px solid ".concat(t)}:void 0}}},u=c,d=a("2877"),f=Object(d["a"])(u,n,r,!1,null,null,null);e["default"]=f.exports},efaf:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("StickySectionHeader",{attrs:{id:"section-transitions"}},[a("div",{staticClass:"md:flex items-center"},[a("div",{staticClass:"mb-2 md:mb-0 md:mr-4"},[a("CanvasBlockLabel",{attrs:{label:"duration-"+t.selectedDurationKey}}),a("Select",{staticClass:"w-full mt-2 md:w-32",attrs:{options:t.data.duration},model:{value:t.selectedDurationKey,callback:function(e){t.selectedDurationKey=e},expression:"selectedDurationKey"}})],1),a("div",[a("div",{staticClass:"flex items-center"},[a("CanvasBlockLabel",{attrs:{label:"delay-"+t.selectedDelayKey}})],1),a("Select",{staticClass:"w-full mt-2 md:w-32",attrs:{options:t.data.delay},model:{value:t.selectedDelayKey,callback:function(e){t.selectedDelayKey=e},expression:"selectedDelayKey"}})],1),a("ToggleSwitch",{staticClass:"mt-8 md:ml-4",attrs:{name:"enable-delay",label:"Enable Delay"},model:{value:t.enableDelay,callback:function(e){t.enableDelay=e},expression:"enableDelay"}})],1)]),a("div",{staticClass:"mt-6"},[a("VueDraggableResizable",{attrs:{parent:"",draggable:!1,handles:["mr"],w:"auto",h:"auto","min-width":220}},[a("div",{staticClass:"space-y-6"},t._l(t.data.timing,function(e,n){return a("div",{key:n},[a("CanvasSectionRow",{staticClass:"transition-container relative",scopedSlots:t._u([{key:"default",fn:function(n){var r=n.blockClasses;return[a("div",{class:["transition-container__block absolute w-28",r],style:{transitionTimingFunction:e,transitionDuration:t.selectedDuration,transitionDelay:t.enableDelay?t.selectedDelay:"0s"}})]}}],null,!0)}),a("div",{staticClass:"sm:flex mb-2 sm:mb-0 sm:divide-x"},[a("CanvasBlockLabel",{attrs:{label:t.removeDefaultSuffix("ease-"+n),value:e}})],1)],1)}),0)])],1)],1)},r=[],s=(a("ac6a"),a("456d"),a("fb19")),i=a.n(s),o=a("2bcf"),l=a("ad3c"),c=a("42de"),u=a("1fb8"),d=a("8163"),f=a("ed08"),p={components:{CanvasBlockLabel:o["a"],CanvasSectionRow:l["a"],VueDraggableResizable:i.a,Select:c["a"],StickySectionHeader:u["a"],ToggleSwitch:d["a"]},props:{data:{type:Object,required:!0}},data:function(){return{selectedDurationKey:Object.keys(this.data.duration)[0],selectedDelayKey:Object.keys(this.data.delay)[0],enableDelay:!1}},computed:{selectedDuration:function(){return this.data.duration[this.selectedDurationKey]},selectedDelay:function(){return this.data.delay[this.selectedDelayKey]}},methods:{removeDefaultSuffix:f["c"]}},v=p,b=(a("2702"),a("2877")),h=Object(b["a"])(v,n,r,!1,null,null,null);e["default"]=h.exports},f7f9:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex flex-wrap -mb-4"},t._l(t.data,function(t,e){return a("div",{key:e,staticClass:"w-full md:w-36 md:mr-4 mb-4"},[a("div",{staticClass:"mb-2 bg-gray-500 dark:bg-gray-700 w-full md:w-36 h-36",style:{opacity:t}}),a("CanvasBlockLabel",{attrs:{label:"opacity-"+e,value:t}})],1)}),0)},r=[],s=a("2bcf"),i={components:{CanvasBlockLabel:s["a"]},props:{data:{type:Object,required:!0}}},o=i,l=a("2877"),c=Object(l["a"])(o,n,r,!1,null,null,null);e["default"]=c.exports},fe83:function(t,e,a){"use strict";var n=a("2624"),r=a.n(n);r.a}});
//# sourceMappingURL=app.c71310c7.js.map